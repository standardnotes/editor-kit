export declare type FileSafeFileMetadata = {
    [key: string]: any;
};
/**
 * Remove matching <p> tags if present.
 * Also capable of matching adjacent [fsSyntax][fsSyntax]
 */
export declare const FileSafeSyntaxPattern: RegExp;
/**
 * Given an HTML string that includes substrings matching `FileSafeSyntaxPattern`,
 * replace occurences with ghost div element <fileSafe uuid='123'>
 */
export declare const expandedFileSafeSyntax: (html: string) => string;
export declare const removeFileSafeSyntaxFromHtml: (html: string) => string;
export declare const insertionSyntaxForFileDescriptor: (descriptor: FileSafeFileMetadata) => string;
export declare const fileSafeSyntaxToHtmlElement: (syntax: string) => string;
/**
 * Given a rendered HTML string, replace all <fileSafe> items with [FileSafe:UUID] plaintext items.
 * Also, for any elements that have the 'ghost' attribute, remove it from the resulting string.
 */
export declare const collapseFileSafeSyntax: (html: string) => string;
