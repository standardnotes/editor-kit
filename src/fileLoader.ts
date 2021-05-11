import { sleep } from './utils'

export type FileLoaderOptions = {
  fileSafeInstance: any
  getElementsBySelector: (selector: string) => Element[]
  preprocessElement: (element: Element) => Element
  insertElement: (element: Element, inVicinityOfElement: Element | null, insertionType: string) => void
}

type FileTypes = {
  [key: string]: string
}

type UuidTypeMapping = {
  [key: string]: {
    url: string
    fileType: string
    fsName: string
  }
}

type ElementStatusMapping = {
  [key: string]: Element
}

type InsertMediaElementParams = {
  url: string,
  fsid: string,
  fsName: string,
  fileType: string,
  fsElement: Element
}

type WrapElementInTagParams = {
  element: Element,
  tagName: string,
  fsid: string,
  fsName: string
}

type SetStatusParams = {
  status?: string,
  fsElement: Element | null,
  fsid: string,
  removable?: boolean
}

type CreateImageElementParams = {
  url: string,
  fsid: string,
  fsName: string,
  fsElement: Element
}

type CreateAudioElementParams = {
  url: string,
  fsid: string,
  fsName: string
}

type CreateVideoElementParams = {
  url: string,
  fsid: string,
  fileType: string,
  fsName: string,
  fsElement: Element
}

type CreateDownloadElementParams = {
  url: string,
  fsid: string,
  fsName: string
}

export default class FileLoader {
  /**
   * When a file is decrypted and loaded into a temp url, we'll place the temp url in here so that subsequent decrypt attempts
   * dont require further work. Mapped values have the shape of { url, fileType, fsName }
   */
  private uuidToFileTempUrlAndTypeMapping: UuidTypeMapping = {}

  // The UUIDs of files currently loading, so that we don't start a new load for currently loading file.
  private currentlyLoadingIds: string[] = []

  // The UUID to current status element mapping
  private statusElementMapping: ElementStatusMapping = {}
  private readonly fileTypeToElementType: FileTypes = {
    'image/png': 'img',
    'image/jpg': 'img',
    'image/jpeg': 'img',
    'image/gif': 'img',
    'image/tiff': 'img',
    'image/bmp': 'img',
    'video/mp4': 'video',
    'audio/mpeg': 'audio',
    'audio/mp3': 'audio'
  }

  constructor(private options: FileLoaderOptions) { }

  public fileTypeForElementType(type: string): string {
    return this.fileTypeToElementType[type.toLowerCase()]
  }

  /**
   * Scans the document for elements <fileSafe>. If found, begins loading file.
   */
  public loadFileSafeElements(): void {
    const elements = this.options.getElementsBySelector('*[fsplaceholder]')
    for (const element of elements) {
      this.loadFileSafeElement(element)
    }
  }

  public async loadFileSafeElement(fsElement: Element): Promise<boolean> {
    const { fileSafeInstance } = this.options

    const fsid = fsElement.getAttribute('fsid')
    const fsName = fsElement.getAttribute('fsName') ?? ''
    const fileNameDisplay = (!fsName || fsName == 'undefined') ? 'file' : fsName

    if (!fsid) {
      return false
    }

    const existingMapping = this.uuidToFileTempUrlAndTypeMapping[fsid]

    if (existingMapping) {
      this.insertMediaElement({
        fsid,
        fsElement,
        url: existingMapping.url,
        fileType: existingMapping.fileType,
        fsName: existingMapping.fsName
      })
      return false
    }

    if (this.currentlyLoadingIds.includes(fsid)) {
      return false
    }

    const descriptor = fileSafeInstance.findFileDescriptor(fsid)

    if (!descriptor) {
      this.setStatus({
        fsElement,
        fsid,
        status: `Unable to find ${fileNameDisplay} ${fsid}.`,
        removable: true
      })
      return false
    }

    const selectorSyntax = `[fsid="${descriptor.uuid}"][fscollapsable]`
    const existingElements = document.querySelectorAll(
      `img${selectorSyntax}, figure${selectorSyntax}, video${selectorSyntax}, audio${selectorSyntax}`
    )

    if (existingElements.length > 0) {
      return false
    }

    const cleanup = () => this.currentlyLoadingIds.splice(this.currentlyLoadingIds.indexOf(fsid), 1)

    this.currentlyLoadingIds.push(fsid)
    this.setStatus({
      fsElement,
      fsid,
      status: `Downloading ${fileNameDisplay}...`
    })

     // Allow UI to update before beginning download...
    await sleep(0.05)

    const fileItem = await fileSafeInstance.downloadFileFromDescriptor(descriptor).catch(() => {
      this.setStatus({
        fsElement,
        fsid,
        status: `Unable to download ${fileNameDisplay} ${fsid}.`
      })
      return
    })

    if (!fileItem) {
      return false
    }

    this.setStatus({
      fsElement,
      fsid,
      status: `Decrypting ${fileNameDisplay}...`
    })

    // Allow UI to update before beginning decryption
    await sleep(0.05)

    const data = await fileSafeInstance.decryptFile({ fileDescriptor: descriptor, fileItem }).catch(() => {
      this.setStatus({
        fsElement,
        fsid,
        status: `Unable to decrypt ${fileNameDisplay} ${fsid}.`
      })
      return
    })

    if (!data) {
      return false
    }

    // Remove loading text
    this.setStatus({
      fsElement,
      fsid
    })

    // Allow UI to update before adding image
    await sleep(0.05)

    // Generate temporary url, must be released later
    const fileType = descriptor.content.fileType
    const tempUrl = fileSafeInstance.createTemporaryFileUrl({
      base64Data: data.decryptedData,
      dataType: fileType
    })

    this.insertMediaElement({
      fsid, fileType,
      fsName,
      fsElement,
      url: tempUrl
    })

    cleanup()

    this.uuidToFileTempUrlAndTypeMapping[fsid] = {
      fileType,
      url: tempUrl,
      fsName,
    }

    return true
  }

  private insertMediaElement({ url, fsid, fsName, fileType, fsElement }: InsertMediaElementParams) {
    const elementType = this.fileTypeForElementType(fileType)

    let mediaElement: Element
    
    switch (elementType) {
      case 'img':
        mediaElement = this.createImageElement({ url, fsid, fsName, fsElement })
        break
      case 'video':
        mediaElement = this.createVideoElement({ url, fsid, fileType, fsName, fsElement })
        break
      case 'audio':
        mediaElement = this.createAudioElement({ url, fsid, fsName })
        break
      default:
        mediaElement = this.createDownloadElement({ url, fsid, fsName })
        break
    }

    this.insertElementNearElement(mediaElement, fsElement)

    // Remove fsElement now that image is loaded.
    fsElement.remove()
  }

  private wrapElementInTag({ element, tagName, fsid, fsName }: WrapElementInTagParams) {
    const tag = document.createElement(tagName)
    tag.setAttribute('fsid', fsid)
    tag.setAttribute('fsName', fsName)
    tag.setAttribute('fscollapsable', 'true')
    tag.setAttribute('contenteditable', 'true')
    tag.append(element)
    return tag
  }

  private createImageElement({ url, fsid, fsName, fsElement }: CreateImageElementParams): HTMLImageElement {
    const image = document.createElement('img')
    image.setAttribute('src', url)
    image.setAttribute('srcset', `${url} 2x`)

    image.setAttribute('fsid', fsid)
    image.setAttribute('fsName', fsName)
    image.setAttribute('fscollapsable', 'true')

    const elementWidth = fsElement.getAttribute('width')
    if (elementWidth) {
      image.setAttribute('width', elementWidth)
    }

    const elementHeight = fsElement.getAttribute('height')
    if (elementHeight) {
      image.setAttribute('height', elementHeight)
    }

    return image
  }

  private createVideoElement({ url, fsid, fileType, fsName, fsElement }: CreateVideoElementParams) {
    const video = document.createElement('video')
    video.setAttribute('controls', 'true')
    video.setAttribute('fsid', fsid)
    video.setAttribute('fsName', fsName)
    video.setAttribute('fscollapsable', 'true')

    const elementWidth = fsElement.getAttribute('width')
    if (elementWidth) {
      video.setAttribute('width', elementWidth)
    }

    const elementHeight = fsElement.getAttribute('height')
    if (elementHeight) {
      video.setAttribute('height', elementHeight)
    }

    const source = document.createElement('source')
    source.setAttribute('src', url)
    source.setAttribute('type', fileType)
    video.append(source)

    /**
     * Redactor will automatically insert a video element in a p tag,
     * so we'll do it ourselves so that we can control its attributes.
     */
    return this.wrapElementInTag({
      fsid,
      fsName,
      element: video,
      tagName: 'p'
    })
  }

  private createDownloadElement({ url, fsid, fsName }: CreateDownloadElementParams) {
    const link = document.createElement('a')
    link.setAttribute('fsid', fsid)
    link.setAttribute('fsName', fsName)
    link.setAttribute('ghost', 'true')
    link.setAttribute('fscollapsable', 'true')
    link.setAttribute('href', url)
    link.textContent = `${fsName}`
    return link
  }

  private createAudioElement({ url, fsid, fsName }: CreateAudioElementParams) {
    const audio = document.createElement('audio')
    audio.setAttribute('src', url)
    audio.setAttribute('controls', 'true')
    audio.setAttribute('fsid', fsid)
    audio.setAttribute('fsName', fsName)
    audio.setAttribute('fscollapsable', 'true')

    return this.wrapElementInTag({
      fsid,
      fsName,
      element: audio,
      tagName: 'p'
    })
  }

  private setStatus({ status, fsElement, fsid, removable = false }: SetStatusParams): Element | void {
    if (fsid) {
      const existingStatusElement = this.statusElementMapping[fsid]

      if (existingStatusElement) {
        existingStatusElement.remove()
        delete this.statusElementMapping[fsid]
      }
    }

    if (status) {
      let element = document.createElement('label')

      element.setAttribute('id', fsid)
      element.setAttribute('ghost', 'true')
      element.setAttribute('contenteditable', 'false')
      element.style.fontWeight = 'bold'
      element.textContent = status

      if (removable) {
        element.style.userSelect = 'all'
      }

      element = this.insertElementNearElement(element, fsElement) as HTMLLabelElement

      if (fsid) {
        this.statusElementMapping[fsid] = element
      }

      return element
    }
  }

  public insertStatusAtCursor(status: string): string {
    const identifier = Math.random().toString(36).substring(7)
    this.setStatus({
      status,
      fsid: identifier,
      fsElement: null
    })
    return identifier
  }

  public removeCursorStatus(identifier: string): void {
    /**
     * We want to search for the element based on identifier, because the actual element
     * inserted may have been done so as raw HTML, and not via an element pointer.
     */
    const elements = this.options.getElementsBySelector(`#${identifier}`)

    if (elements.length > 0) {
      elements[0].remove()
    }
  }

  public insertElementNearElement(domNodeToInsert: Element, inVicinityOfElement: Element | null): Element | undefined {
    const processedElement = this.options.preprocessElement(domNodeToInsert)
    let insertionType = 'child'

    // <figure> tags cannot be nested inside p tags.
    if (inVicinityOfElement && processedElement.tagName.toLowerCase() == 'figure') {
      // If we have a p ancestor, we need to get out.
      const paragraphAncestor = inVicinityOfElement.closest('p')

      if (paragraphAncestor) {
        /**
         * p tags cannot be nested in other p tags, so if we found one, we know its parent isn't and doesn't belong to a p tag.
         * Add the new one right after paragraphAncestor.
         */
        inVicinityOfElement = paragraphAncestor
        insertionType = 'afterend'
      }
    }

    this.options.insertElement(processedElement, inVicinityOfElement, insertionType)
    return processedElement as Element
  }
}
