import EditorKitInternal from "./lib/EditorKitInternal";

export default class EditorKit {

  /*
    @param EditorKitDelegate `delegate`: The instance responsible for handling editor-specific events
    @param string `mode`: one of 'plaintext', 'html', 'markdown'
    @param bool `supportsFilesafe`
    @param int `coallesedSavingDelay`:
      For ComponentManager saving, what the debouncer ms delay should be set to.
      Defaults to 250ms.
  */
  constructor({delegate, mode = 'plaintext', supportsFilesafe = false, coallesedSavingDelay = 250}) {
    this.delegate = delegate;
    this.mode = mode;
    this.supportsFilesafe = supportsFilesafe;
    this.coallesedSavingDelay = coallesedSavingDelay;

    this.internal = new EditorKitInternal({delegate, mode, supportsFilesafe, coallesedSavingDelay});
  }

  /*
  Public
  */

  async getFilesafe() {
    return this.internal.getFilesafe();
  }

  /*
    Called by consumer when the editor has a change/input event
  */
  onEditorValueChanged(text) {
    this.internal.onEditorValueChanged(text);
  }

  /*
    Called by consumer when the editor has a keyup event
  */
  onEditorKeyUp({key, isSpace, isEnter}) {
    this.internal.onEditorKeyUp({key, isSpace, isEnter});
  }

  /*
    Called by consumer when user pastes into editor
  */
  onEditorPaste() {
    this.internal.onEditorPaste();
  }

  /*
    Whether or not filesafe is configured with integrations and keys, and can handle file uploads.
    If not, user should open files modal and configure FileSafe.
  */
  canUploadFiles() {
    return this.internal.canUploadFiles();
  }

  /*
    Returns a file descriptor if successful.
   */
  async uploadJSFileObject(file) {
    return this.internal.uploadJSFileObject(file);
  }
}
