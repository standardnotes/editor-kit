export default class FilesafeHtml {

  // Remove matching <p> tags if present
  // Also capable of matching adjacent [fsSyntax][fsSyntax]
  static FilesafeSyntaxPattern = /(<p>)?\[FileSafe[^\]]*\](<\/p>)?/g;

  /*
  Given an HTML string that includes substrings matching `FilesafeSyntaxPattern`,
  replace occurences with ghost div element <filesafe uuid='123'>
  */
  static expandedFilesafeSyntax(html) {
    let result = html.replace(this.FilesafeSyntaxPattern, (match) => {
      return this.filesafeSyntaxToHtmlElement(match);
    })

    return result;
  }

  static insertionSyntaxForFileDescriptor(descriptor) {
    return `[FileSafe:${descriptor.uuid}:${descriptor.content.fileName}]`;
  }

  static filesafeSyntaxToHtmlElement(syntax) {
    // remove paragraph tags
    syntax = syntax.replace("<p>", "");
    syntax = syntax.replace("</p>", "");
    // Remove brackets
    syntax = syntax.replace("[", "").replace("]", "");
    let components = syntax.split(":");
    let uuid = components[1];
    let name = components[2];
    let size = components[3];
    let sizeString = "";
    if(size)  {
      let dimensions = size.split("x");
      sizeString = `width=${dimensions[0]} height=${dimensions[1]}`
    }
    // We use a p tag here because if try something custom, like `filesafe` tag, the editor will automatically
    // wrap it in a p tag, causing littered p tags remaining in the plaintext representation.
    let result = `<span fsplaceholder=true style='display: none;' fscollapsable=true ghost=true fsid=${uuid} fsname=${name} ${sizeString}></span>`;
    return result;
  }

  /*
    Given a rendered HTML string, replace all <filesafe> items with [FileSafe:UUID] plaintext items.
    Also, for any elements that have the 'ghost' attribute, remove it from the resulting string
  */
  static collapseFilesafeSyntax(html) {
    let domCopy = new DOMParser().parseFromString(html, "text/html");
    // Elements that have fscollapsable means they should be collapsed to plain syntax
    let mediaElements = domCopy.querySelectorAll(`*[fscollapsable]`);

    /*
     Some editors (Redactor) may arbitrarily wrap elements inside a <p> tag before inserting into dom
     Then, when we collapse all the elements, and when the ghosts are removed, we find an emtpy <p> tag
     just sitting around. We want to find these candidates by scanning for all p tags, checking to see how many ghosts it has,
     and if the number of ghosts matches its number of children, we know that after everything is collapsed, this p tag will most
     likely be empty. However, if we replace an element with its collapsed syntax, it will not be empty.
     So items placed in pTagsToRemoveCandidates are just candidates. We'll check again after we do all collapsing
     and ghost removing, and if it has 0 children and its innerHTML length == 0, we'll remove it
    */
    let pTags = domCopy.querySelectorAll(`p`);
    let pTagsToRemoveCandidates = [];

    for(let pTag of pTags) {
      let numGhosts = pTag.querySelectorAll("[ghost]").length;
      let numChildren = pTag.children.length;
      if(numChildren == numGhosts)  {
        pTagsToRemoveCandidates.push(pTag);
      }
    }

    // List of syntaxes we insert.
    let insertedSyntaxes = [];

    for(let file of mediaElements) {
      let uuid = file.getAttribute('fsid');
      let name = file.getAttribute('fsname');
      let width = file.getAttribute('width');
      let height = file.getAttribute('height');

      let components = ["FileSafe", uuid, name];
      if(width || height) {
        let size = `${width}x${height}`;
        components.push(size);
      }

      let fsSyntax = `[${components.join(":")}]`;
      insertedSyntaxes.push(fsSyntax);
      file.insertAdjacentText('afterend', fsSyntax);
      file.remove();
    }

    let ghosts = domCopy.querySelectorAll(`*[ghost]`);
    ghosts.forEach((ghost) => {ghost.remove()});

    pTagsToRemoveCandidates.forEach((pTag) => {
      // Make sure children count is still 0.
      // If the elements inner html is equal to some fsSyntax we inserted,
      // then we want to delete the p tag as well.
      let innerHTML = pTag.innerHTML.trim();
      let isEmpty = pTag.children.length == 0 && innerHTML.length == 0;
      let isSyntaxContainer = insertedSyntaxes.includes(innerHTML);
      if(isEmpty) {
        pTag.remove()
      } else if(isSyntaxContainer) {
        // If the sole purpose of this <p> tag is to contain some fsSyntax,
        // we'll get rid of the p tag and have the syntax stand on its own.
        // This is due to the behavior of the Redactor editor that automatically wraps
        // plaintext content in p tags, thus triggering a change event. If we remove the p tag,
        // we can ensure content stays the same.
        pTag.insertAdjacentText('afterend', innerHTML);
        pTag.remove();
      }
    });

    let result = domCopy.body.innerHTML;
    return result;
  }
}
