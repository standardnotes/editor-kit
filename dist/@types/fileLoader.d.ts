export declare type FileLoaderOptions = {
    fileSafeInstance: any;
    getElementsBySelector: (selector: string) => Element[];
    preprocessElement: (element: Element) => Element;
    insertElement: (element: Element, inVicinityOfElement: Element | null, insertionType: string) => void;
};
export default class FileLoader {
    private options;
    /**
     * When a file is decrypted and loaded into a temp url, we'll place the temp url in here so that subsequent decrypt attempts
     * dont require further work. Mapped values have the shape of { url, fileType, fsName }
     */
    private uuidToFileTempUrlAndTypeMapping;
    private currentlyLoadingIds;
    private statusElementMapping;
    private readonly fileTypeToElementType;
    constructor(options: FileLoaderOptions);
    fileTypeForElementType(type: string): string;
    /**
     * Scans the document for elements <fileSafe>. If found, begins loading file.
     */
    loadFileSafeElements(): void;
    loadFileSafeElement(fsElement: Element): Promise<boolean>;
    private insertMediaElement;
    private wrapElementInTag;
    private createImageElement;
    private createVideoElement;
    private createDownloadElement;
    private createAudioElement;
    private setStatus;
    insertStatusAtCursor(status: string): string;
    removeCursorStatus(identifier: string): void;
    insertElementNearElement(domNodeToInsert: Element, inVicinityOfElement: Element | null): Element | undefined;
}
