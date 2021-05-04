type Pattern = {
  regex: RegExp
  callback: (matchedText: string) => string
}

export type TextExpanderOptions = {
  patterns: Pattern[]
  beforeExpand?: () => void
  afterExpand?: () => void
  getCurrentLineText: () => string
  getPreviousLineText: () => string
  replaceText: ({ regex: RegExp, replacement: string, searchPreviousLine: boolean }) => string
}

type OnKeyUpParams = {
  isEnter?: boolean
  isPaste?: boolean
  isSpace?: boolean
}

type SearchPatternsParams = {
  searchPreviousLine: boolean
}

export default class TextExpander {
  constructor (private options: TextExpanderOptions) { }

  public onKeyUp ({ isEnter, isPaste, isSpace }: OnKeyUpParams): void {
    if (isEnter || isPaste || isSpace) {
      this.searchPatterns({
        searchPreviousLine: isEnter ?? false
      })
    }
  }

  public searchPatterns (params: SearchPatternsParams = { searchPreviousLine: false }): void {
    const text = (params.searchPreviousLine) ?
      this.options.getPreviousLineText() : this.options.getCurrentLineText()

    for (const pattern of this.options.patterns) {
      const match = pattern.regex.exec(text)
      if (!match) continue

      const matchedText = match[0]

      if (matchedText) {
        const replaceWith = pattern.callback(matchedText)
        this.replaceSelection(pattern.regex, replaceWith, params.searchPreviousLine)
      }
    }
  }

  public replaceSelection (regex: RegExp, replacement: string, searchPreviousLine: boolean): void {
    if (this.options?.beforeExpand) {
      this.options.beforeExpand()
    }

    this.options.replaceText({
      regex,
      replacement,
      searchPreviousLine
    })

    if (this.options?.afterExpand) {
      this.options?.afterExpand()
    }
  }
}
