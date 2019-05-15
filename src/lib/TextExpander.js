export default class TextExpander {

  constructor({patterns, afterExpand, beforeExpand, getCurrentLineText, getPreviousLineText, replaceText}) {
    this.patterns = patterns;
    this.afterExpand = afterExpand;
    this.beforeExpand = beforeExpand;
    this.getCurrentLineText = getCurrentLineText;
    this.getPreviousLineText = getPreviousLineText;
    this.replaceText = replaceText;
  }

  onKeyUp({key, isSpace, isEnter, isPaste}) {
    if(isSpace || isEnter ||  isPaste) {
      this.searchPatterns({searchPreviousLine: isEnter});
    }
  }

  searchPatterns({searchPreviousLine} = {}) {
    let text;
    if(searchPreviousLine) {
      text = this.getPreviousLineText();
    } else {
      text = this.getCurrentLineText();
    }

    for (let pattern of this.patterns) {
      const match = pattern.regex.exec(text);
      if(!match) { continue; }
      const matchedText = match[0];
      if(matchedText) {
        let replaceWith = pattern.callback(matchedText);
        this.replaceSelection(pattern.regex, replaceWith, searchPreviousLine);
      }
    }
  }

  replaceSelection(regex, replacement, previousLine) {
    if(this.beforeExpand) {
      this.beforeExpand();
    }

    this.replaceText({regex, replacement, previousLine});

    if(this.afterExpand) {
      this.afterExpand();
    }
  }

}
