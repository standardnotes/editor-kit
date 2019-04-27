/*
  The delegate is responsible for responding to events and functions
  that the EditorKit requires. For example, when EditorKit wants to insert
  a new HTML element, it won't neccessarily know how, because it's not designed for
  any particular editor. Instead, it will tell the delegate to insert the element.

  The consumer of this API, the actual editor, would configure this delegate with
  the appropriate callbacks.

  Callbacks are defined in the constructor.
*/

export default class EditorKitDelegate {

  constructor({insertRawText, onReceiveNote,
    setEditorRawText, getCurrentLineText, replaceText,
    getElementsBySelector}) {
    this.insertRawText = insertRawText;
    this.onReceiveNote = onReceiveNote;
    this.setEditorRawText = setEditorRawText;
    this.getCurrentLineText = getCurrentLineText;
    this.replaceText = replaceText;
    this.getElementsBySelector = getElementsBySelector;
  }

}
