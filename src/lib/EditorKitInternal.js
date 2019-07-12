import ComponentManager from 'sn-components-api';

import Util from "./Util.js"
import FileLoader from "./FileLoader.js"
import TextExpander from "./TextExpander.js"
import FilesafeHtml from "./FilesafeHtml.js"

export default class EditorKit {

  constructor({delegate, mode, supportsFilesafe, coallesedSavingDelay = 250}) {
    this.delegate = delegate;
    this.mode = mode;
    this.supportsFilesafe = supportsFilesafe;
    this.coallesedSavingDelay = coallesedSavingDelay;

    /*
      When we upload a file, we want to associate it with the current note.
      The best way to ensure that files are in sync with the filesafe client is to wait
      until the componentMananger has received the file descriptor item back from SN.
      So, upon being notified that files have changed, we'll sift through this array
      and associate any pending files.
     */
    this.fileIdsPendingAssociation = [];

    this.connectToBridge();

    // Conditionally import filesafe-js. This way, consumers using editor-kit
    // who don't want FileSafe support don't have to import a large module.
    // Consumers who do want FileSafe support must include filesafe-js in their own package.json
    // Note that filesafe-js is set as an "external" in webpack.config, so it is not included in the EditorKit bundle
    if(supportsFilesafe) {
      this.filesafeImportPromise = this.importFilesafe();
    }
  }

  async importFilesafe() {
    return import("filesafe-js").then((result) => {
      this.FilesafeClass = result.default;
      this.configureFilesafe();
      return this.filesafe;
    });
  }

  async getFilesafe() {
    if(!this.filesafe || this.filesafeImportPromise) {
      if(this.filesafeImportPromise) {
        return this.filesafeImportPromise;
      }
    } else {
      return this.importFilesafe();
    }
  }

  configureFilesafe() {
    this.filesafe = new this.FilesafeClass({componentManager: this.componentManager});

    this.filesafe.addDataChangeObserver(() => {
      // Reload UI by querying Filesafe for changes
      let allFileDescriptors = this.filesafe.getAllFileDescriptors();

      if(this.note && this.fileIdsPendingAssociation.length > 0) {
        let hasMatch = false;
        for(let uuid of this.fileIdsPendingAssociation.slice()) {
          let descriptor = allFileDescriptors.find((candidate) => candidate.uuid == uuid);
          if(!descriptor) {
            continue;
          }

          hasMatch = true;
          this.fileIdsPendingAssociation.splice(this.fileIdsPendingAssociation.indexOf(uuid), 1);

          let syntax = FilesafeHtml.insertionSyntaxForFileDescriptor(descriptor);
          this.delegate.insertRawText(syntax);
        }

        if(hasMatch) {
          this.textExpander.searchPatterns()
        }
      }

      if(allFileDescriptors.length > 0) {
        this.fileLoader.loadFilesafeElements();
      }
    });

    this.filesafe.addNewFileDescriptorHandler((fileDescriptor) => {
      // Called when a new file is uploaded. We'll wait until the bridge acknowledges
      // receipt of this item, and then it will be added to the editor.
      this.fileIdsPendingAssociation.push(fileDescriptor.uuid);
    })

    this.fileLoader = new FileLoader({
      filesafe: this.filesafe,
      getElementsBySelector: this.delegate.getElementsBySelector,
      insertElement: this.delegate.insertElement,
      preprocessElement: this.delegate.preprocessElement
    });

    this.textExpander = new TextExpander({
      afterExpand: () => {
        this.fileLoader.loadFilesafeElements();
      },
      getCurrentLineText: this.delegate.getCurrentLineText,
      getPreviousLineText: this.delegate.getPreviousLineText,
      replaceText: this.delegate.replaceText,
      patterns: [{
        regex: FilesafeHtml.FilesafeSyntaxPattern,
        callback: (matchedText) => {
          return FilesafeHtml.expandedFilesafeSyntax(matchedText);
        }
      }]
    });
  }

  connectToBridge() {
    this.componentManager = new ComponentManager(null, () => {
      // On ready and permissions authorization
      document.documentElement.classList.add(this.componentManager.platform);
    });

    // The editor does some debouncing for us, so we'll lower the default debounce value from 250 to 150
    this.componentManager.coallesedSavingDelay = this.coallesedSavingDelay;

    this.componentManager.streamContextItem((note) => {
      // Todo: if note has changed, release previous temp object urls
      let isNewNoteLoad = true;
      if(this.note && this.note.uuid == note.uuid) {
        isNewNoteLoad = false;
      }

      if(this.supportsFilesafe)  {
        let itemClass = this.FilesafeClass.getSFItemClass();
        this.note = new itemClass(note);

        this.filesafe.setCurrentNote(this.note);
      } else {
        this.note = note;
      }

       // Only update UI on non-metadata updates.
      if(note.isMetadataUpdate) { return; }

      let text = note.content.text;

      // If we're an html editor, and we're dealing with a new note
      // check to see if it's in html format.
      // If it's not, we don't want to convert it to HTML until the user makes an explicit change
      // So we'll ignore the next change event in this case
      if(this.mode == "html" && isNewNoteLoad)  {
        let isHtml = /<[a-z][\s\S]*>/i.test(text);
        if(!isHtml) {
          this.ignoreNextTextChange = true;
        }
      }

      // Set before expanding. We want this value to always be the collapsed value
      this.previousText = text;

      if(this.supportsFilesafe) {
        // We want to expand any filesafe syntax in the text, but only after the text has been inserted. (Will be checked on editor change callback)
        this.needsFilesafeElementLoad = true;

        text = FilesafeHtml.expandedFilesafeSyntax(text);
      }

      this.delegate.setEditorRawText(text);

      if(isNewNoteLoad) {
        this.delegate.clearUndoHistory();
      }
    });
  }

  onEditorKeyUp({key, isSpace, isEnter}) {
    this.textExpander.onKeyUp({key, isSpace, isEnter});
  }

  onEditorPaste() {
    this.textExpander.onKeyUp({isPaste: true});
  }

  onEditorValueChanged(text) {
    if(this.needsFilesafeElementLoad) {
       this.needsFilesafeElementLoad = false;
       this.fileLoader.loadFilesafeElements();
    }

    if(this.ignoreNextTextChange) {
      this.ignoreNextTextChange = false;
      return;
    }

    if(this.supportsFilesafe) {
      text = FilesafeHtml.collapseFilesafeSyntax(text);

      // Change events may be triggered several times when expanding filesafe syntax.
      // Ultimately, while the visual layer is changing a lot, the underlying text layer,
      // after being collapsed, will not change. So we'll compare the previous html to new collapsed html before continuing
      let sameText = this.previousText == text;
      if(sameText) {
        return;
      }
    }

    this.previousText = text;

    let note = this.note;
    if(note) {
      this.componentManager.saveItemWithPresave(note, () => {
        note.content.text = text;
        if(this.delegate.generateCustomPreview) {
          let result = this.delegate.generateCustomPreview(text);
          if(result.html) {
            note.content.preview_html = result.html;
          }
          if(result.plain) {
            note.content.preview_plain = result.plain;
          }
        }
        else {
          if(this.mode == 'html')  {
            let preview = FilesafeHtml.removeFilesafeSyntaxFromHtml(text);
            preview = Util.truncateString(Util.htmlToText(preview));
            // If the preview has no length due to either being an empty note, or having just 1 FileSafe file
            // that is stripped above, then we don't want to set to empty string, otherwise SN app will default to content
            // for preview. We'll set a whitespace preview instead so SN doesn't go based on innate content.
            note.content.preview_plain = preview.length > 0 ? preview : " ";
          } else {
            note.content.preview_plain = text;
          }
          // We're only using plain in this block.
          note.content.preview_html = null;
        }
      });
    }
  }

  canUploadFiles() {
    let credentials = this.filesafe.getAllCredentials();
    let integrations = this.filesafe.getAllIntegrations();
    return credentials.length > 0 && integrations.length > 0;
  }

  async uploadJSFileObject(file) {
    let status = this.fileLoader.insertStatusAtCursor("Processing file...");
    return this.filesafe.encryptAndUploadJavaScriptFileObject(file).then((descriptor) => {
      this.fileLoader.removeCursorStatus(status);
    })
  }

}
