import { FileLoaderOptions } from './fileLoader';
import { TextExpanderOptions } from './textExpander';
import type { ItemMessagePayload } from '@standardnotes/snjs';
/**
 * The delegate is responsible for responding to events and functions that the EditorKit requires.
 * For example, when EditorKit wants to insert a new HTML element, it won't neccessarily know how,
 * because it's not designed for any particular editor. Instead, it will tell the delegate to
 * insert the element. The consumer of this API, the actual editor, would configure this delegate
 * with the appropriate callbacks.
 */
export interface EditorKitDelegate {
    insertRawText?: (text: string) => void;
    setEditorRawText: (text: string) => void;
    getCurrentLineText?: TextExpanderOptions['getCurrentLineText'];
    getPreviousLineText?: TextExpanderOptions['getPreviousLineText'];
    replaceText?: TextExpanderOptions['replaceText'];
    getElementsBySelector?: FileLoaderOptions['getElementsBySelector'];
    insertElement?: FileLoaderOptions['insertElement'];
    preprocessElement?: FileLoaderOptions['preprocessElement'];
    clearUndoHistory?: () => void;
    generateCustomPreview?: (text: string) => {
        html?: string;
        plain: string;
    };
    onNoteLockToggle?: (isLocked: boolean) => void;
    onNoteValueChange?: (note: ItemMessagePayload) => Promise<void>;
    onThemesChange?: () => void;
}
export declare type EditorKitMode = 'plaintext' | 'html' | 'markdown' | 'json';
declare type EditorKitOptions = {
    mode: EditorKitMode;
    /**
     * Indicates if the editor should support FileSafe integration.
     */
    supportsFileSafe?: false;
    /**
     * For Component Relay saving. Indicates if debouncer is enabled.
     */
    coallesedSaving?: false;
    /**
     * For Component Relay saving. Indicates what the debouncer ms delay should be set to.
     */
    coallesedSavingDelay?: 250;
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
    private note?;
    private ignoreNextTextChange?;
    private needsFileSafeElementLoad?;
    private previousText?;
    constructor(delegate: EditorKitDelegate, options: EditorKitOptions);
    private connectToBridge;
    private importFileSafe;
    private configureFileSafe;
    /**
     * Gets the FileSafe class.
     * @returns FileSafe class.
     */
    getFileSafe(): Promise<void>;
    /**
     * Called by consumer when the editor has a keyup event.
     */
    onEditorKeyUp({ isSpace, isEnter }: OnEditorKeyUpParams): void;
    /**
     * Called by consumer when user pastes into editor.
     */
    onEditorPaste(): void;
    /**
     * Called by consumer when the editor has a change/input event.
     */
    onEditorValueChanged(text: string): void;
    /**
     * Whether or not FileSafe is configured with integrations and keys, and can handle file uploads.
     * If not, user should open files modal and configure FileSafe.
     */
    canUploadFiles(): boolean;
    /**
     * Encrypts and Uploads a Javascript file object to FileSafe.
     * @param file The file to upload.
     * @returns A file descriptor if successful.
     */
    uploadJSFileObject(file: Blob): Promise<void>;
    /**
     * saveItemWithPresave from the component relay.
     */
    saveItemWithPresave(note: ItemMessagePayload, presave?: () => void): void;
    /**
     * Gets the current platform where the component is running.
     */
    get platform(): string | undefined;
    /**
     * Gets the current environment where the component is running.
     */
    get environment(): string | undefined;
    /**
     * Whether or not FileSafe can be used.
     */
    canUseFileSafe(): boolean;
}
export {};
