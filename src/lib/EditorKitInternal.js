import ComponentManager from 'sn-components-api';
import Filesafe from "filesafe-js";

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

    if(supportsFilesafe) {
      this.configureFilesafe();
    }
  }

  configureFilesafe() {
    this.filesafe = new Filesafe({componentManager: this.componentManager});

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
          console.log("Attching file descriptor to note", descriptor);
          descriptor.addItemAsRelationship(this.note);
          this.componentManager.saveItem(descriptor);
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
      console.log("Adding file descriptror to association queue", fileDescriptor.uuid);
      this.fileIdsPendingAssociation.push(fileDescriptor.uuid);
    })

    this.fileLoader = new FileLoader({
      filesafe: this.filesafe,
      getElementsBySelector: this.delegate.getElementsBySelector,
      insertElement: this.delegate.insertElement
    });

    this.textExpander = new TextExpander({
      afterExpand: () => {
        this.fileLoader.loadFilesafeElements();
      },
      getCurrentLineText: this.delegate.getCurrentLineText,
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
      let itemClass = Filesafe.getSFItemClass();
      this.note = new itemClass(note);
       // Only update UI on non-metadata updates.
      if(note.isMetadataUpdate) { return; }

      let text = note.content.text;

      // Set before expanding. We want this value to always be the collapsed value
      this.previousText = text;

      if(this.supportsFilesafe) {
        // We want to expand any filesafe syntax in the text, but only after the text has been inserted. (Will be checked on editor change callback)
        this.needsFilesafeElementLoad = true;

        text = FilesafeHtml.expandedFilesafeSyntax(text);
      }

      this.delegate.setEditorRawText(text);
    });
  }

  onEditorKeyUp({key, isSpace, isEnter}) {
    this.textExpander.onKeyUp({key, isSpace, isEnter});
  }

  onEditorValueChanged(text) {
    if(this.needsFilesafeElementLoad) {
       this.needsFilesafeElementLoad = false;
       this.fileLoader.loadFilesafeElements();
    }

    if(this.supportsFilesafe) {
      text = FilesafeHtml.collapseFilesafeSyntax(text);

      // Change events may be triggered several times when expanding filesafe syntax.
      // Ultimately, while the visual layer is changing a lot, the underlying text layer,
      // after being collapsed, will not change. So we'll compare the previous html to new collapsed html before continuing
      let sameText = this.previousText == text;
      if(sameText) {
        // console.log("Changed html is same as previous, ignoring");
        return;
      }
    }

    this.previousText = text;

    let note = this.note;
    if(note) {
      this.componentManager.saveItemWithPresave(note, () => {
        note.content.text = text;
        if(this.mode == 'html')  {
          note.content.preview_plain = Util.truncateString(Util.htmlToText(text));
        } else {
          note.content.preview_plain = null;
        }
      });
    }
  }

  async uploadJSFileObject(file) {
    return this.filesafe.encryptAndUploadJavaScriptFileObject(file);
  }

}
