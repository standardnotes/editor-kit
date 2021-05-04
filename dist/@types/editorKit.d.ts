import { FileLoaderOptions } from './fileLoader';
import { TextExpanderOptions } from './textExpander';
interface EditorKitDelegate {
    insertRawText: (text: string) => void;
    setEditorRawText: (text: string) => void;
    getCurrentLineText: TextExpanderOptions['getCurrentLineText'];
    getPreviousLineText: TextExpanderOptions['getPreviousLineText'];
    replaceText: TextExpanderOptions['replaceText'];
    getElementsBySelector: FileLoaderOptions['getElementsBySelector'];
    insertElement: FileLoaderOptions['insertElement'];
    preprocessElement: FileLoaderOptions['preprocessElement'];
    clearUndoHistory: () => void;
    generateCustomPreview: (text: string) => {
        html: string;
        plain: string;
    };
}
declare enum EditorKitMode {
    PlainText = "plaintext",
    Html = "html",
    Markdown = "markdown"
}
declare type EditorKitOptions = {
    mode: EditorKitMode;
    supportsFileSafe: false;
    coallesedSaving: false;
    coallesedSavingDelay: 250;
};
declare type OnEditorKeyUpParams = {
    isSpace: boolean;
    isEnter: boolean;
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
    onEditorKeyUp({ isSpace, isEnter }: OnEditorKeyUpParams): void;
    onEditorPaste(): void;
    onEditorValueChanged(text: string): void;
    canUploadFiles(): boolean;
    uploadJSFileObject(file: string): Promise<void>;
}
export {};
