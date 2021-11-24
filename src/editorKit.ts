import ComponentRelay from '@standardnotes/component-relay'
import FileLoader, { FileLoaderOptions } from './fileLoader'
import TextExpander, { TextExpanderOptions } from './textExpander'
import {
  truncateString,
  htmlToText
} from './utils'
import {
  FileSafeSyntaxPattern,
  collapseFileSafeSyntax,
  expandedFileSafeSyntax,
  insertionSyntaxForFileDescriptor,
  removeFileSafeSyntaxFromHtml,
  FileSafeFileMetadata
} from './fileSafeHtml'
import type { ItemMessagePayload } from '@standardnotes/snjs'

/**
 * The delegate is responsible for responding to events and functions that the EditorKit requires.
 * For example, when EditorKit wants to insert a new HTML element, it won't neccessarily know how,
 * because it's not designed for any particular editor. Instead, it will tell the delegate to
 * insert the element. The consumer of this API, the actual editor, would configure this delegate
 * with the appropriate callbacks.
 */
export interface EditorKitDelegate {
  insertRawText: (text: string) => void
  setEditorRawText: (text: string) => void
  getCurrentLineText: TextExpanderOptions['getCurrentLineText']
  getPreviousLineText: TextExpanderOptions['getPreviousLineText']
  replaceText: TextExpanderOptions['replaceText']
  getElementsBySelector: FileLoaderOptions['getElementsBySelector']
  insertElement: FileLoaderOptions['insertElement']
  preprocessElement: FileLoaderOptions['preprocessElement']
  clearUndoHistory: () => void
  generateCustomPreview: (text: string) => { html: string, plain: string }
  onNoteLockToggle?: (isLocked: boolean) => void
  onNoteValueChange?: (note: ItemMessagePayload) => Promise<void>
}

enum EditorKitMode {
  PlainText = 'plaintext',
  Html = 'html',
  Markdown = 'markdown',
  Json = 'json'
}

type EditorKitOptions = {
  mode: EditorKitMode
  /**
   * Indicates if the editor should support FileSafe integration.
   */
  supportsFileSafe: false
  /**
   * For Component Relay saving. Indicates if debouncer is enabled.
   */
  coallesedSaving: false
  /**
   * For Component Relay saving. Indicates what the debouncer ms delay should be set to.
   */
  coallesedSavingDelay: 250
}

type OnEditorKeyUpParams = {
  isSpace: boolean
  isEnter: boolean
}

type FileUuid = string

export default class EditorKitBase {
  private fileIdsPendingAssociation: FileUuid[] = []
  private componentRelay?: ComponentRelay
  private fileLoader?: FileLoader
  private textExpander?: TextExpander

  private fileSafeLoading?: Promise<void>
  private fileSafeClass?: any
  private fileSafeInstance?: any

  private note?: ItemMessagePayload
  private ignoreNextTextChange?: boolean
  private needsFileSafeElementLoad?: boolean
  private previousText?: string

  constructor(private delegate: EditorKitDelegate, private options: EditorKitOptions) {
    this.connectToBridge()

    if (this.options.supportsFileSafe) {
      this.fileSafeLoading = this.importFileSafe()
    }
  }

  private connectToBridge() {
    const {
      coallesedSaving,
      coallesedSavingDelay,
      mode,
      supportsFileSafe
    } = this.options

    this.componentRelay = new ComponentRelay({
      targetWindow: window,
      options: {
        coallesedSaving,
        /**
         * The editor does some debouncing for us, so we'll lower the
         * default debounce value from 250 to 150
         */
        coallesedSavingDelay
      },
      onReady: () => {
        const { platform } = this.componentRelay!

        if (platform) {
          document.documentElement.classList.add(platform)
        }
      }
    })

    this.componentRelay.streamContextItem(async (note: ItemMessagePayload) => {
      /**
       * TODO: If note has changed, release previous temp object URLs.
       */
      let isNewNoteLoad = true
      if (this.note && this.note.uuid == note.uuid) {
        isNewNoteLoad = false
      }

      const previousNote = this.note

      if (supportsFileSafe) {
        const itemClass = this.fileSafeClass.getSFItemClass()
        this.note = new itemClass(note)
        this.fileSafeInstance.setCurrentNote(this.note)
      } else {
        this.note = note
      }

       // Only update UI on non-metadata updates.
      if (note.isMetadataUpdate) {
        return
      }

      let text = note.content.text

      /**
       * If we're an HTML editor, and we're dealing with a new note,
       * check to see if it's in html format.
       * If it's not, we don't want to convert it to HTML until the user makes an explicit change
       * so we'll ignore the next change event in this case.
       */
      if (mode === EditorKitMode.Html && isNewNoteLoad) {
        const isHtml = /<[a-z][\s\S]*>/i.test(text)
        if (!isHtml) {
          this.ignoreNextTextChange = true
        }
      }

      /**
       * Set before expanding. 
       * We want this value to always be the collapsed value
       */
      this.previousText = text

      if (supportsFileSafe) {
        /**
         * We want to expand any filesafe syntax in the text,
         * but only after the text has been inserted.
         * (Will be checked on editor change callback)
         */
        this.needsFileSafeElementLoad = true
        text = expandedFileSafeSyntax(text)
      }

      this.delegate.onNoteValueChange && await this.delegate.onNoteValueChange(note)
      this.delegate.setEditorRawText(text)

      if (this.delegate.onNoteLockToggle) {
        const previousLockState = this.componentRelay!.getItemAppDataValue(previousNote, 'locked') ?? false
        const newLockState = this.componentRelay!.getItemAppDataValue(this.note, 'locked') ?? false

        if (previousLockState !== newLockState) {
          this.delegate.onNoteLockToggle(newLockState)
        }
      }

      if (isNewNoteLoad) {
        this.delegate.clearUndoHistory()
      }
    })
  }

  private async importFileSafe() {
    return import('filesafe-js').then((result) => {
      this.fileSafeClass = result.default
      this.configureFileSafe()
      return this.fileSafeInstance
    })
  }

  private configureFileSafe() {
    this.fileSafeInstance = new this.fileSafeClass({
      componentManager: this.componentRelay
    })

    this.fileSafeInstance.addDataChangeObserver(() => {
      // Reload UI by querying FileSafe for changes...
      const allFileDescriptors = this.fileSafeInstance.getAllFileDescriptors()

      if (this.note && this.fileIdsPendingAssociation.length > 0) {
        let hasMatch = false

        for (const uuid of this.fileIdsPendingAssociation.slice()) {
          const descriptor = allFileDescriptors.find((candidate: FileSafeFileMetadata) => candidate.uuid == uuid)

          if (!descriptor) {
            continue
          }

          hasMatch = true
          this.fileIdsPendingAssociation.splice(this.fileIdsPendingAssociation.indexOf(uuid), 1)

          const syntax = insertionSyntaxForFileDescriptor(descriptor)
          this.delegate.insertRawText(syntax)
        }

        if (hasMatch) {
          this.textExpander!.searchPatterns()
        }
      }

      if (allFileDescriptors.length > 0) {
        this.fileLoader!.loadFileSafeElements()
      }
    })

    this.fileSafeInstance.addNewFileDescriptorHandler((fileDescriptor: FileSafeFileMetadata) => {
      /**
       * Called when a new file is uploaded. We'll wait until the bridge acknowledges
       * receipt of this item, and then it will be added to the editor.
       */
      this.fileIdsPendingAssociation.push(fileDescriptor.uuid)
    })

    this.fileLoader = new FileLoader({
      fileSafeInstance: this.fileSafeInstance,
      getElementsBySelector: this.delegate.getElementsBySelector,
      insertElement: this.delegate.insertElement,
      preprocessElement: this.delegate.preprocessElement
    })

    this.textExpander = new TextExpander({
      afterExpand: () => this.fileLoader!.loadFileSafeElements(),
      getCurrentLineText: this.delegate.getCurrentLineText,
      getPreviousLineText: this.delegate.getPreviousLineText,
      replaceText: this.delegate.replaceText,
      patterns: [{
        regex: FileSafeSyntaxPattern,
        callback: (matchedText) => {
          return expandedFileSafeSyntax(matchedText)
        }
      }]
    })
  }

  /**
   * Gets the FileSafe class.
   * @returns FileSafe class.
   */
  public async getFileSafe(): Promise<void> {
    if (!this.fileSafeInstance && this.fileSafeLoading) {
      return this.fileSafeLoading
    }
    return this.importFileSafe()
  }

  /**
   * Called by consumer when the editor has a keyup event.
   */
  public onEditorKeyUp({ isSpace, isEnter }: OnEditorKeyUpParams): void {
    this.textExpander!.onKeyUp({
       isSpace,
       isEnter
    })
  }

  /**
   * Called by consumer when user pastes into editor.
   */
  public onEditorPaste(): void {
    this.textExpander!.onKeyUp({
      isPaste: true
    })
  }

  /**
   * Called by consumer when the editor has a change/input event.
   */
  public onEditorValueChanged(text: string): void {
    const { mode, supportsFileSafe } = this.options

    if (this.needsFileSafeElementLoad) {
      this.needsFileSafeElementLoad = false
      this.fileLoader!.loadFileSafeElements()
    }

    if (this.ignoreNextTextChange) {
      this.ignoreNextTextChange = false
      return
    }

    if (supportsFileSafe) {
      text = collapseFileSafeSyntax(text)

      /**
       * Change events may be triggered several times when expanding filesafe syntax.
       * Ultimately, while the visual layer is changing a lot, the underlying text layer,
       * after being collapsed, will not change. So we'll compare the previous html to new collapsed html before continuing.
       */
      const sameText = this.previousText == text
      if (sameText) {
        return
      }
    }

    this.previousText = text

    if (!this.note) {
      return
    }

    const note = this.note

    this.componentRelay!.saveItemWithPresave(note, () => {
      note.content.text = text

      if (this.delegate.generateCustomPreview) {
        const result = this.delegate.generateCustomPreview(text)

        if (result.html) {
          note.content.preview_html = result.html
        }
        if (result.plain) {
          note.content.preview_plain = result.plain
        }
      } else {
        if (mode === EditorKitMode.Html) {
          let preview = removeFileSafeSyntaxFromHtml(text)
          preview = truncateString(htmlToText(preview))
          /**
           * If the preview has no length due to either being an empty note, or having just 1 FileSafe file
           * that is stripped above, then we don't want to set to empty string, otherwise SN app will default to content
           * for preview. We'll set a whitespace preview instead so SN doesn't go based on innate content.
           */
          note.content.preview_plain = preview.length > 0 ? preview : ' '
        } else {
          note.content.preview_plain = text
        }

        // We're only using plain in this block.
        note.content.preview_html = null
      }
    })
  }

  /**
   * Whether or not FileSafe is configured with integrations and keys, and can handle file uploads.
   * If not, user should open files modal and configure FileSafe.
   */
  public canUploadFiles(): boolean {
    const credentials = this.fileSafeInstance.getAllCredentials()
    const integrations = this.fileSafeInstance.getAllIntegrations()
    return credentials.length > 0 && integrations.length > 0
  }

  /**
   * Encrypts and Uploads a Javascript file object to FileSafe.
   * @param file The file to upload.
   * @returns A file descriptor if successful.
   */
  public async uploadJSFileObject(file: Blob): Promise<void> {
    const cursorIdentifier = this.fileLoader!.insertStatusAtCursor('Processing file...')
    return this.fileSafeInstance.encryptAndUploadJavaScriptFileObject(file).then(() => {
      this.fileLoader!.removeCursorStatus(cursorIdentifier)
    })
  }

  /**
   * saveItemWithPresave from the component relay.
   */
  public saveItemWithPresave(note: ItemMessagePayload, presave?: () => void): void {
    this.componentRelay!.saveItemWithPresave(note, presave)
  }
}
