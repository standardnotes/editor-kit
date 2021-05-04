declare type Pattern = {
    regex: RegExp;
    callback: (matchedText: string) => string;
};
declare type TextExpanderOptions = {
    patterns: Pattern[];
    beforeExpand?: () => void;
    afterExpand?: () => void;
    getCurrentLineText: () => string;
    getPreviousLineText: () => string;
    replaceText: (regex: RegExp, replacement: string, searchPreviousLine: boolean) => string;
};
declare type OnKeyUpParams = {
    isEnter?: boolean;
    isPaste?: boolean;
    isSpace?: boolean;
};
declare type SearchPatternsParams = {
    searchPreviousLine: boolean;
};
export default class TextExpander {
    private options;
    constructor(options: TextExpanderOptions);
    onKeyUp({ isEnter, isPaste, isSpace }: OnKeyUpParams): void;
    searchPatterns(params?: SearchPatternsParams): void;
    replaceSelection(regex: RegExp, replacement: string, searchPreviousLine: boolean): void;
}
export {};
