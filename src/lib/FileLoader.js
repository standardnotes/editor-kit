import Util from "./Util.js";

export default class FileLoader {

  constructor({filesafe, getElementsBySelector, preprocessElement, insertElement}) {
    this.filesafe = filesafe;
    this.getElementsBySelector = getElementsBySelector;
    this.insertElement = insertElement;
    this.preprocessElement = preprocessElement;

    // When a file is decrypted and loaded into a temp url, we'll place the temp url in here so that subsequent decrypt attempts
    // dont require further work. Mapped values are of form {url, fileType, fsname}
    this.uuidToFileTempUrlAndTypeMapping = {};

    // uuids of files currently loading, so that we don't start a new load for currently loading file
    this.currentlyLoadingIds = [];

    // uuid to current status element mapping
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
    let elements = this.getElementsBySelector("*[fsplaceholder]");
    for(let element of elements) {
      this.loadFilesafeElement(element);
    }
  }

  /*
  @param fsSyntax
  The FileSafe syntax string. i.e [FileSafe:uuid-123:name]
  */

  async loadFilesafeElement(fsElement) {
    let fsid = fsElement.getAttribute("fsid");
    let fsname = fsElement.getAttribute("fsname");

    let existingMapping = this.uuidToFileTempUrlAndTypeMapping[fsid];
    if(existingMapping) {
      this.insertMediaElement({url: existingMapping.url, fsid,
        fileType: existingMapping.fileType, fsname: existingMapping.fsname, fsElement});
      return;
    }

    if(this.currentlyLoadingIds.includes(fsid)) {
      return;
    }

    let descriptor = this.filesafe.findFileDescriptor(fsid);
    if(!descriptor) {
      this.setStatus("Unable to find file.", fsElement, fsid);
      console.log("Can't find descriptor with id", fsid);
      return {success: false};
    }

    let selectorSyntax = `[fsid="${descriptor.uuid}"][fscollapsable]`;
    var existingElements = document.querySelectorAll(`img${selectorSyntax}, figure${selectorSyntax}, video${selectorSyntax}, audio${selectorSyntax}`);
    if(existingElements.length > 0) {
      console.log("File already exists");
      return {success: false};
    }

    const cleanup = () => {
      this.currentlyLoadingIds.splice(this.currentlyLoadingIds.indexOf(fsid), 1);
    }

    this.currentlyLoadingIds.push(fsid);

    this.setStatus("Downloading file...", fsElement, fsid);
    await Util.sleep(0.05); // Allow UI to update before beginning download
    let fileItem = await this.filesafe.downloadFileFromDescriptor(descriptor).catch((downloadError) => {
      this.setStatus("Unable to download file.", fsElement, fsid);
      return;
    })

    if(!fileItem) {
      return;
    }

    this.setStatus("Decrypting file...", fsElement, fsid);
    await Util.sleep(0.05); // Allow UI to update before beginning decryption
    let data = await this.filesafe.decryptFile({fileDescriptor: descriptor, fileItem: fileItem}).catch((decryptError) => {
      this.setStatus("Unable to decrypt file.", fsElement, fsid);
      return;
    });

    if(!data) {
      return;
    }

    // Remove loading text
    this.setStatus(null, fsElement, fsid);
    await Util.sleep(0.05); // Allow UI to update before adding image

    // Generate temporary url, must be released later
    let fileType = descriptor.content.fileType;
    let tempUrl = this.filesafe.createTemporaryFileUrl({base64Data: data.decryptedData, dataType: fileType});

    this.insertMediaElement({url: tempUrl, fsid, fileType, fsname, fsElement});

    cleanup();

    this.uuidToFileTempUrlAndTypeMapping[fsid] = {url: tempUrl, fileType, fsname: fsname};

    return {success: true};
  }

  insertMediaElement({url, fsid, fsname, fileType, fsElement}) {
    let elementType = this.fileTypeForElementType(fileType);

    let mediaElement;
    if(elementType == "img") {
      mediaElement = this.createImageElement({url, fsid, fsname, fsElement});
    } else if(elementType == "video") {
      mediaElement = this.createVideoElement({url, fsid, fileType, fsname, fsElement});
    } else if(elementType == "audio") {
      mediaElement = this.createAudioElement({url, fsid, fsname});
    } else {
      mediaElement = this.createDownloadElement({url, fsid, fileType, fsname, fsElement});
    }

    this.insertElementNearElement(mediaElement, fsElement);

    // Remove fsElement now that image is loaded
    fsElement.remove();

    return true;
  }

  /*
    The below applies to img tags, but not video and audio tags. So we use this for video and audio elements only.
    Redactor automatically includes figure elements for image, as part of this.preprocessElement
    We'd like to wrap it in a figure ideally, but right now there is a bug where inserting
    the figure element programatically, then entering to create new line after the figure,
    inserts the paragraph text inside the figure element. We ignore this figure element
    on saving to SN, so this text would be lost.
   */
  wrapElementInFigure({element, fsid, fsname}) {
    let figure = document.createElement('figure');
    figure.setAttribute('fsid', fsid);
    figure.setAttribute('fsname', fsname);
    figure.setAttribute('fscollapsable', true);
    figure.append(element);
    return figure;
  }

  createImageElement({url, fsid, fsname, fsElement}) {
    let image = document.createElement("img");
    image.setAttribute('src', url);
    image.setAttribute('srcset', `${url} 2x`);

    image.setAttribute('fsid', fsid);
    image.setAttribute('fsname', fsname);
    image.setAttribute('fscollapsable', true);

    if(fsElement.getAttribute("width")) {
      image.setAttribute("width", fsElement.getAttribute("width"));
      image.setAttribute("height", fsElement.getAttribute("height"));
    }

    return image;
  }

  createVideoElement({url, fsid, fileType, fsname, fsElement}) {
    let video = document.createElement("video");
    video.setAttribute('controls', true);
    video.setAttribute('fsid', fsid);
    video.setAttribute('fsname', fsname);
    video.setAttribute('fscollapsable', true);

    if(fsElement.getAttribute("width")) {
      video.setAttribute("width", fsElement.getAttribute("width"));
      video.setAttribute("height", fsElement.getAttribute("height"));
    }

    let source = document.createElement("source");
    source.setAttribute('src', url);
    source.setAttribute('type', fileType);

    video.append(source);
    return this.wrapElementInFigure({element: video, fsid, fsname});
  }

  createDownloadElement({url, fsid, fileType, fsname, fsElement}) {
    let a = document.createElement("a");
    a.setAttribute('fsid', fsid);
    a.setAttribute('fsname', fsname);
    a.setAttribute('ghost', 'true');
    a.setAttribute('fscollapsable', true);
    a.setAttribute('href', url);
    a.textContent = `${fsname}`;
    return a;
  }

  createAudioElement({url, fsid, fsname}) {
    let audio = document.createElement("audio");
    audio.setAttribute('src', url);
    audio.setAttribute('controls', true);
    audio.setAttribute('fsid', fsid);
    audio.setAttribute('fsname', fsname);
    audio.setAttribute('fscollapsable', true);

    return this.wrapElementInFigure({element: audio, fsid, fsname});;
  }

  setStatus(status, fsElement, fsid) {
    if(fsid) {
      let existingStatusElement = this.statusElementMapping[fsid];
      if(existingStatusElement) {
        existingStatusElement.remove();
        delete this.statusElementMapping[fsid];
      }
    }

    if(status) {
      let element = document.createElement('span');
      element.setAttribute('id', fsid);
      element.setAttribute('ghost', 'true');
      element.setAttribute('contenteditable', false);
      element.setAttribute('style', 'font-weight: bold');
      element.textContent = status;
      element = this.insertElementNearElement(element, fsElement);
      if(fsid) {
        this.statusElementMapping[fsid] = element;
      }
      return element;
    }
  }

  insertStatusAtCursor(status) {
    let identifier = Math.random().toString(36).substring(7);
    this.setStatus(status, null, identifier);
    return identifier;
  }

  removeCursorStatus(identifier) {
    // We want to search for the element based on identifier, because the actual element
    // inserted may have been done so as raw HTML, and not via an element pointer
    let elements = this.getElementsBySelector(`#${identifier}`);
    if(elements.length > 0) {
      elements[0].remove();
    }
  }

  insertElementNearElement(domNodeToInsert, inVicinityOfElement) {
    let processedElement = this.preprocessElement(domNodeToInsert);

    let insertionType = "child";
    // <figure> tags cannot be nested inside p tags.
    if(processedElement.tagName.toLowerCase() == "figure") {
      // If we have a p ancestor, we need to get out.
      let pAncestor = inVicinityOfElement.closest("p");
      if(pAncestor) {
        // p tags cannot be nested in other p tags, so if we found one, we know its parent isn't and doesn't belong to a ptag.
        // add the new right after pAncestor
        inVicinityOfElement = pAncestor;
        insertionType = "afterend";
      }
    }
    
    this.insertElement(processedElement, inVicinityOfElement, insertionType);
    return processedElement;
  }

}
