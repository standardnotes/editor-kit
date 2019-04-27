export default class FilesafeHtml {

  // Remove matching <p> tags if present
  static FilesafeSyntaxPattern = /(<p>)?\[FileSafe.*\](<\/p>)?/g;

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
    // We use a p tag here because if try something custom, like `filesafe` tag, the editor will automatically
    // wrap it in a p tag, causing littered p tags remaining in the plaintext representation.
    let result = `<p fscollapsable=true ghost=true fsid=${uuid}></p>`;
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
    for(let file of mediaElements) {
      let uuid = file.getAttribute('fsid');
      file.insertAdjacentText('afterend', `[FileSafe:${uuid}]`);
      file.remove();
    }

    let ghosts = domCopy.querySelectorAll(`*[ghost]`);
    ghosts.forEach((ghost) => ghost.remove());
    return domCopy.body.innerHTML;
  }

}
