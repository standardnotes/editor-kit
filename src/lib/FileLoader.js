import Util from "./Util.js";

export default class FileLoader {

  constructor({filesafe, getElementsBySelector, insertElement}) {
    this.filesafe = filesafe;
    this.getElementsBySelector = getElementsBySelector;
    this.insertElement = insertElement;
    this.currentlyLoadingIds = [];
    this.statusElementMapping = {};

    this.fileTypeToElementType = {
      "image/png": "img",
      "image/jpg": "img",
      "image/jpeg": "img",
      "image/gif": "img",
      "image/tiff": "img",
      "image/bmp": "img",
      "video/mp4": "video",
      "audio/mpeg": "audio",
      "audio/mp3": "audio"
    }
  }

  fileTypeForElementType(type) {
    return this.fileTypeToElementType[type.toLowerCase()];
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

    if(this.currentlyLoadingIds.includes(uuid)) {
      console.log("Already loading file, returning");
      return;
    }

    let descriptor = this.filesafe.findFileDescriptor(uuid);
    if(!descriptor) {
      this.setStatus("Unable to find file.", fsElement, uuid);
      console.log("Can't find descriptor with id", uuid);
      return {success: false};
    }

    let selectorSyntax = `[fsid="${descriptor.uuid}"][fscollapsable]`;
    var existingElements = document.querySelectorAll(`img${selectorSyntax}, figure${selectorSyntax}, video${selectorSyntax}, audioimg${selectorSyntax}`);
    if(existingElements.length > 0) {
      console.log("File already exists");
      return {success: false};
    }

    const cleanup = () => {
      this.currentlyLoadingIds.splice(this.currentlyLoadingIds.indexOf(uuid), 1);
    }

    this.currentlyLoadingIds.push(uuid);

    this.setStatus("Downloading file...", fsElement, uuid);
    await Util.sleep(0.05); // Allow UI to update before beginning download
    let fileItem = await this.filesafe.downloadFileFromDescriptor(descriptor);

    this.setStatus("Decrypting file...", fsElement, uuid);
    await Util.sleep(0.05); // Allow UI to update before beginning decryption
    let data = await this.filesafe.decryptFile({fileDescriptor: descriptor, fileItem: fileItem})

    // Remove loading text
    this.setStatus(null, fsElement, uuid);
    await Util.sleep(0.05); // Allow UI to update before adding image

    // Generate temporary url, must be released later
    let fileType = descriptor.content.fileType;
    let tempUrl = this.filesafe.createTemporaryFileUrl({base64Data: data.decryptedData, dataType: fileType});
    let elementType = this.fileTypeForElementType(fileType);

    let mediaElement;
    if(elementType == "img") {
      mediaElement = this.createImageElement(tempUrl, uuid);
    } else if(elementType == "video") {
      mediaElement = this.createVideoElement(tempUrl, uuid, fileType);
    } else if(elementType == "audio") {
      mediaElement = this.createAudioElement(tempUrl, uuid);
    } else {
      // File not supported
      this.setStatus("File not supported.", fsElement, uuid);
      cleanup();
      return;
    }

    this.insertElementAdjacent(mediaElement, fsElement);

    // Remove fsElement now that image is loaded
    fsElement.remove();

    cleanup();

    return {success: true, tempUrl: tempUrl};
  }

  createVideoElement(url, fsid, type) {
    let video = document.createElement("video");
    video.setAttribute('controls', true);
    video.setAttribute('fsid', fsid);
    video.setAttribute('fscollapsable', true);

    let source = document.createElement("source");
    source.setAttribute('src', url);
    source.setAttribute('type', type);

    video.append(source);
    return video;
  }

  createAudioElement(url, fsid) {
    let audio = document.createElement("audio");
    audio.setAttribute('src', url);
    audio.setAttribute('controls', true);
    audio.setAttribute('fsid', fsid);
    audio.setAttribute('fscollapsable', true);

    return audio;
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

  setStatus(status, fsElement, uuid) {
    let existingStatusElement = this.statusElementMapping[uuid];
    if(existingStatusElement) {
      existingStatusElement.remove();
    }

    if(status) {
      let element = document.createElement('p');
      element.setAttribute('ghost', 'true');
      element.setAttribute('contenteditable', false);
      element.setAttribute('style', 'font-weight: bold');
      element.textContent = status;
      this.insertElementAdjacent(element, fsElement);
      this.statusElementMapping[uuid] = element;
    }
  }

  insertElementAdjacent(domNodeToInsert, adjacentToElement) {
    // let element = domNodeToInsert;
    // adjacentToElement.after(element);
    // adjacentTo.insertAdjacentElement('beforebegin', insertElement);
    this.insertElement(domNodeToInsert, adjacentToElement);
  }

}
