import Util from "./Util.js";

export default class FileLoader {

  constructor({filesafe, getElementsBySelector, insertElement}) {
    this.filesafe = filesafe;
    this.getElementsBySelector = getElementsBySelector;
    this.insertElement = insertElement;
  }

  /*
    Scans the document for elements <filesafe>. If found, begins loading file.
  */
  loadFilesafeElements() {
    let elements = this.getElementsBySelector("p[fscollapsable]");
    for(let element of elements.nodes) {
      this.loadFilesafeElement(element);
    }
  }

  /*
  @param fsSyntax
  The FileSafe syntax string. i.e [FileSafe:uuid-123]
  */

  async loadFilesafeElement(fsElement) {
    let uuid = fsElement.getAttribute("fsid");

    let descriptor = this.filesafe.findFileDescriptor(uuid);
    if(!descriptor) {
      console.log("Can't find descriptor with id", uuid);
      return {success: false};
    }

    let selectorSyntax = `[fsid="${descriptor.uuid}"][fscollapsable]`;
    var existingElements = document.querySelectorAll(`img${selectorSyntax}, figure${selectorSyntax}, video${selectorSyntax}, audioimg${selectorSyntax}`);
    if(existingElements.length > 0) {
      console.log("File already exists");
      return {success: false};
    }

    this.setStatus("Downloading file...", fsElement);
    await Util.sleep(0.05); // Allow UI to update before beginning download
    let fileItem = await this.filesafe.downloadFileFromDescriptor(descriptor);

    this.setStatus("Decrypting file...", fsElement);
    await Util.sleep(0.05); // Allow UI to update before beginning decryption
    let data = await this.filesafe.decryptFile({fileDescriptor: descriptor, fileItem: fileItem})

    // Remove loading text
    this.setStatus(null, fsElement);
    await Util.sleep(0.05); // Allow UI to update before adding image

    // Generate temporary url, must be released later
    let tempUrl = this.filesafe.createTemporaryFileUrl({base64Data: data.decryptedData, dataType: descriptor.content.fileType});
    let imageElement = this.createImageElement(tempUrl, uuid);
    this.insertElementAdjacent(imageElement, fsElement);

    // Remove fsElement now that image is loaded
    fsElement.remove();

    return {success: true, tempUrl: tempUrl};
  }

  createImageElement(url, fsid) {
    let image = document.createElement("img");
    image.setAttribute('src', url);
    image.setAttribute('srcset', `${url} 2x`);

    // We'd like to wrap it in a figure ideally, but right now there is a bug where inserting
    // the figure element programatically, then entering to create new line after the figure,
    // inserts the paragraph text inside the figure element. We ignore this figure element
    // on saving to SN, so this text would be lost.
    // let imageContainer = document.createElement('figure');
    image.setAttribute('fsid', fsid);
    image.setAttribute('fscollapsable', true);
    // imageContainer.append(image);

    return image;
  }

  setStatus(status, fsElement) {
    if(this.statusElement) {
      this.statusElement.remove();
    }

    if(status) {
      this.statusElement = document.createElement('p');
      this.statusElement.setAttribute('ghost', 'true');
      this.statusElement.setAttribute('contenteditable', false);
      this.statusElement.setAttribute('style', 'font-weight: bold');
      this.statusElement.textContent = status;
      this.insertElementAdjacent(this.statusElement, fsElement);
    }
  }

  insertElementAdjacent(domNodeToInsert, adjacentToElement) {
    // let element = domNodeToInsert;
    // adjacentToElement.after(element);
    // adjacentTo.insertAdjacentElement('beforebegin', insertElement);
    this.insertElement(domNodeToInsert, adjacentToElement);
  }

}
