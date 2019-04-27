export default class TextExpander {

  constructor({patterns, afterExpand, beforeExpand, getCurrentLineText, replaceText}) {
    this.patterns = patterns;
    this.afterExpand = afterExpand;
    this.beforeExpand = beforeExpand;
    this.getCurrentLineText = getCurrentLineText;
    this.replaceText = replaceText;
  }

  onKeyUp({key, isSpace, isEnter}) {
    if(isSpace) {
      this.searchPatterns();
    }
  }

  searchPatterns() {
    let text = this.getCurrentLineText();

    for (let pattern of this.patterns) {
      const match = pattern.regex.exec(text);
      if(!match) { continue; }
      const matchedText = match[0];
      if(matchedText) {
        let replaceWith = pattern.callback(matchedText);
        this.replaceSelection(pattern.regex, replaceWith);
      }
    }
  }

  replaceSelection(regex, replacement) {
    if(this.beforeExpand) {
      this.beforeExpand();
    }

    this.replaceText(regex, replacement);

    if(this.afterExpand) {
      this.afterExpand();
    }
  }

}
