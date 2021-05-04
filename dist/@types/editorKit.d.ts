declare type GenericCallback = (...params: any[]) => any;
interface EditorKitDelegate {
    insertRawText: GenericCallback;
    onReceiveNote: GenericCallback;
    setEditorRawText: GenericCallback;
    getCurrentLineText: GenericCallback;
    getPreviousLineText: GenericCallback;
    replaceText: GenericCallback;
    getElementsBySelector: GenericCallback;
    insertElement: GenericCallback;
    preprocessElement: GenericCallback;
    clearUndoHistory: GenericCallback;
    generateCustomPreview: GenericCallback;
}
declare type EditorKitOptions = {
    mode: 'plaintext' | 'html' | 'markdown';
    supportsFileSafe: false;
    coallesedSaving: false;
    coallesedSavingDelay: 250;
};
export default class EditorKitBase {
    private delegate;
    private options;
    private fileIdsPendingAssociation;
    private componentRelay?;
    private fileLoader?;
    private textExpander?;
    private fileSafeLoading?;
    private fileSafeClass?;
    private fileSafeInstance?;
    private note;
    private ignoreNextTextChange?;
    private needsFileSafeElementLoad?;
    private previousText?;
    constructor(delegate: EditorKitDelegate, options: EditorKitOptions);
    private connectToBridge;
    private importFileSafe;
    private configureFileSafe;
    getFileSafe(): Promise<void>;
    onEditorKeyUp({ isSpace, isEnter }: {
        isSpace: boolean;
        isEnter: boolean;
    }): void;
    onEditorPaste(): void;
    onEditorValueChanged(text: string): void;
    canUploadFiles(): boolean;
    uploadJSFileObject(file: string): Promise<void>;
}
export {};
