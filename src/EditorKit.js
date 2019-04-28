import EditorKitInternal from "./lib/EditorKitInternal";
import EditorKitDelegate from "./EditorKitDelegate"

class EditorKit {

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

  getFilesafe() {
    return this.internal.filesafe;
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
    Returns a file descriptor if successful.
   */
  async uploadJSFileObject(file) {
    return this.internal.uploadJSFileObject(file);
  }
}

export {EditorKit, EditorKitDelegate}
