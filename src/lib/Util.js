export default class Util {
  static htmlToText(html) {
    var tmp = document.implementation.createHTMLDocument("New").body;
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  static truncateString(string, limit = 90) {
    if(string.length <= limit) {
      return string;
    } else {
      return string.substring(0, limit) + "...";
    }
  }

  static sleep(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve();
      }, seconds * 1000);
    })
  }
}
