(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("EditorKit", [], factory);
	else if(typeof exports === 'object')
		exports["EditorKit"] = factory();
	else
		root["EditorKit"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 791:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};let n;var s;e.d(t,{default:()=>w}),function(e){e[e.Web=1]="Web",e[e.Desktop=2]="Desktop",e[e.Mobile=3]="Mobile"}(n||(n={}));var i=new Uint8Array(16);function o(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(i)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,r=function(e){return"string"==typeof e&&a.test(e)};for(var m=[],c=0;c<256;++c)m.push((c+256).toString(16).substr(1));const h=function(e,t,n){var s=(e=e||{}).random||(e.rng||o)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=s[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!r(n))throw TypeError("Stringified UUID is invalid");return n}(s)},d=e=>{var t;const s={[n.Web]:"web",[n.Desktop]:"desktop",[n.Mobile]:"mobile"};return null!==(t=s[e])&&void 0!==t?t:s[n.Web]},p=()=>{};class l{static get isSupported(){return!(!window.console&&!console)}static get info(){return l.isSupported&&this.enabled?console.log.bind(console):p}static get error(){return l.isSupported?console.error.bind(console):p}}var u,v;let g,f,y;function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(v="enabled")in(u=l)?Object.defineProperty(u,v,{value:false,enumerable:!0,configurable:!0,writable:!0}):u[v]=false,function(e){e.Shift="Shift",e.Ctrl="Control",e.Meta="Meta"}(g||(g={})),function(e){e.Component="component"}(f||(f={})),function(e){e.SetSize="set-size",e.StreamItems="stream-items",e.StreamContextItem="stream-context-item",e.SaveItems="save-items",e.CreateItem="create-item",e.CreateItems="create-items",e.DeleteItems="delete-items",e.SetComponentData="set-component-data",e.RequestPermissions="request-permissions",e.DuplicateItem="duplicate-item",e.ComponentRegistered="component-registered",e.ActivateThemes="themes",e.Reply="reply",e.ThemesActivated="themes-activated",e.KeyDown="key-down",e.KeyUp="key-up",e.Click="click"}(y||(y={}));class w{constructor(e){var t,n;if(k(this,"contentWindow",void 0),k(this,"component",{activeThemes:[],acceptsThemes:!0}),k(this,"sentMessages",[]),k(this,"messageQueue",[]),k(this,"lastStreamedItem",void 0),k(this,"pendingSaveItems",void 0),k(this,"pendingSaveTimeout",void 0),k(this,"pendingSaveParams",void 0),k(this,"messageHandler",void 0),k(this,"keyDownEventListener",void 0),k(this,"keyUpEventListener",void 0),k(this,"clickEventListener",void 0),k(this,"concernTimeouts",[]),k(this,"options",void 0),k(this,"params",void 0),!e||!e.targetWindow)throw new Error("contentWindow must be a valid Window object.");this.params=e,this.options=e.options||{},null==this.options.coallesedSaving&&(this.options.coallesedSaving=!0),null==this.options.coallesedSavingDelay&&(this.options.coallesedSavingDelay=250),null!=this.options.acceptsThemes&&(this.component.acceptsThemes=null===(n=this.options.acceptsThemes)||void 0===n||n),l.enabled=null!==(t=this.options.debug)&&void 0!==t&&t,this.contentWindow=e.targetWindow,this.registerMessageHandler(),this.registerKeyboardEventListeners(),this.registerMouseEventListeners()}deinit(){this.params.onReady=void 0,this.component={acceptsThemes:!0,activeThemes:[]},this.messageQueue=[],this.sentMessages=[],this.lastStreamedItem=void 0,this.pendingSaveItems=void 0,this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0,this.messageHandler&&(this.contentWindow.document.removeEventListener("message",this.messageHandler),this.contentWindow.removeEventListener("message",this.messageHandler)),this.keyDownEventListener&&this.contentWindow.removeEventListener("keydown",this.keyDownEventListener),this.keyUpEventListener&&this.contentWindow.removeEventListener("keyup",this.keyUpEventListener),this.clickEventListener&&this.contentWindow.removeEventListener("click",this.clickEventListener)}registerMessageHandler(){this.messageHandler=e=>{if(l.info("Components API Message received:",e.data),document.referrer&&new URL(document.referrer).origin!==new URL(e.origin).origin)return;const{data:t}=e,n=(e=>{if("string"!=typeof e)return!1;try{const t=JSON.parse(e),n=Object.prototype.toString.call(t);return"[object Object]"===n||"[object Array]"===n}catch(e){return!1}})(t)?JSON.parse(t):t;if(n){if(void 0===this.component.origin&&n.action===y.ComponentRegistered)this.component.origin=e.origin;else if(e.origin!==this.component.origin)return;this.handleMessage(n)}else l.error("Invalid data received. Skipping...")},this.contentWindow.document.addEventListener("message",this.messageHandler,!1),this.contentWindow.addEventListener("message",this.messageHandler,!1),l.info("Waiting for messages...")}registerKeyboardEventListeners(){this.keyDownEventListener=e=>{l.info("A key has been pressed: ".concat(e.key)),e.ctrlKey?this.keyDownEvent(g.Ctrl):e.shiftKey?this.keyDownEvent(g.Shift):(e.metaKey||"Meta"===e.key)&&this.keyDownEvent(g.Meta)},this.keyUpEventListener=e=>{l.info("A key has been released: ".concat(e.key)),"Control"===e.key?this.keyUpEvent(g.Ctrl):"Shift"===e.key?this.keyUpEvent(g.Shift):"Meta"===e.key&&this.keyUpEvent(g.Meta)},this.contentWindow.addEventListener("keydown",this.keyDownEventListener,!1),this.contentWindow.addEventListener("keyup",this.keyUpEventListener,!1)}registerMouseEventListeners(){this.clickEventListener=e=>{l.info("A click has been performed."),this.mouseClickEvent()},this.contentWindow.addEventListener("click",this.clickEventListener,!1)}handleMessage(e){switch(e.action){case y.ComponentRegistered:this.component.sessionKey=e.sessionKey,e.componentData&&(this.component.data=e.componentData),this.onReady(e.data),l.info("Component successfully registered with payload:",e);break;case y.ActivateThemes:this.activateThemes(e.data.themes);break;default:{var t,n;if(!e.original)return;const s=null===(t=this.sentMessages)||void 0===t?void 0:t.filter((t=>{var n;return t.messageId===(null===(n=e.original)||void 0===n?void 0:n.messageId)}))[0];if(!s){const e=this.contentWindow.document.title,t=("The extension '".concat(e,"' is attempting to communicate with Standard Notes, ")+"but an error is preventing it from doing so. Please restart this extension and try again.").replace("  "," ");return void l.info(t)}null==s||null===(n=s.callback)||void 0===n||n.call(s,e.data);break}}}onReady(e){this.component.environment=e.environment,this.component.platform=e.platform,this.component.uuid=e.uuid;for(const e of this.messageQueue)this.postMessage(e.action,e.data,e.callback);this.messageQueue=[],l.info("Data passed to onReady:",e),this.activateThemes(e.activeThemeUrls||[]),this.postMessage(y.ThemesActivated,{}),this.params.onReady&&this.params.onReady()}getSelfComponentUUID(){return this.component.uuid}isRunningInDesktopApplication(){return this.component.environment===d(n.Desktop)}isRunningInMobileApplication(){return this.component.environment===d(n.Mobile)}getComponentDataValueForKey(e){if(this.component.data)return this.component.data[e]}setComponentDataValueForKey(e,t){if(!this.component.data)throw new Error("The component has not been initialized.");if(!e||e&&0===e.length)throw new Error("The key for the data value should be a valid string.");this.component.data=S(S({},this.component.data),{},{[e]:t}),this.postMessage(y.SetComponentData,{componentData:this.component.data})}clearComponentData(){this.component.data={},this.postMessage(y.SetComponentData,{componentData:this.component.data})}postMessage(e,t,n){if(!this.component.sessionKey)return void this.messageQueue.push({action:e,data:t,api:f.Component,callback:n});e===y.SaveItems&&(t.height=this.params.handleRequestForContentHeight());const s={action:e,data:t,messageId:this.generateUUID(),sessionKey:this.component.sessionKey,api:f.Component},i=JSON.parse(JSON.stringify(s));let o;i.callback=n,this.sentMessages.push(i),o=this.isRunningInMobileApplication()?JSON.stringify(s):s,l.info("Posting message:",o),this.contentWindow.parent.postMessage(o,this.component.origin)}activateThemes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!this.component.acceptsThemes)return;l.info("Incoming themes:",e);const{activeThemes:t}=this.component;if(t&&t.sort().toString()==e.sort().toString())return;let n=e;const s=[];for(const i of t)e.includes(i)?n=n.filter((e=>e!==i)):s.push(i);l.info("Deactivating themes:",s),l.info("Activating themes:",n);for(const e of s)this.deactivateTheme(e);this.component.activeThemes=e;for(const e of n){if(!e)continue;const t=this.contentWindow.document.createElement("link");t.id=btoa(e),t.href=e,t.type="text/css",t.rel="stylesheet",t.media="screen,print",t.className="custom-theme",this.contentWindow.document.getElementsByTagName("head")[0].appendChild(t)}this.params.onThemesChange&&this.params.onThemesChange()}themeElementForUrl(e){return Array.from(this.contentWindow.document.getElementsByClassName("custom-theme")).slice().find((t=>t.id==btoa(e)))}deactivateTheme(e){const t=this.themeElementForUrl(e);t&&t.parentNode&&(t.setAttribute("disabled","true"),t.parentNode.removeChild(t))}generateUUID(){return h()}get platform(){return this.component.platform}get environment(){return this.component.environment}streamItems(e,t){this.postMessage(y.StreamItems,{content_types:e},(e=>{t(e.items)}))}streamContextItem(e){this.postMessage(y.StreamContextItem,{},(t=>{const{item:n}=t;(!this.lastStreamedItem||this.lastStreamedItem.uuid!==n.uuid)&&this.pendingSaveTimeout&&(clearTimeout(this.pendingSaveTimeout),this.performSavingOfItems(this.pendingSaveParams),this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0),this.lastStreamedItem=n,e(this.lastStreamedItem)}))}createItem(e,t){this.postMessage(y.CreateItem,{item:this.jsonObjectForItem(e)},(e=>{let{item:n}=e;!n&&e.items&&e.items.length>0&&(n=e.items[0]),t&&t(n)}))}createItems(e,t){const n=e.map((e=>this.jsonObjectForItem(e)));this.postMessage(y.CreateItems,{items:n},(e=>{t&&t(e.items)}))}deleteItem(e,t){this.deleteItems([e],t)}deleteItems(e,t){const n={items:e.map((e=>this.jsonObjectForItem(e)))};this.postMessage(y.DeleteItems,n,(e=>{t&&t(e)}))}sendCustomEvent(e,t,n){this.postMessage(e,t,(e=>{n&&n(e)}))}saveItem(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.saveItems([e],t,n)}saveItemWithPresave(e,t,n){this.saveItemsWithPresave([e],t,n)}saveItemsWithPresave(e,t,n){this.saveItems(e,n,!1,t)}performSavingOfItems(e){let{items:t,presave:n,callback:s}=e;const i=setTimeout((()=>{this.concernTimeouts.forEach((e=>clearTimeout(e))),alert("This editor is unable to communicate with Standard Notes. Your changes may not be saved. Please backup your changes, then restart the application and try again.")}),5e3);this.concernTimeouts.push(i),n&&n();const o=[];for(const e of t)o.push(this.jsonObjectForItem(e));this.postMessage(y.SaveItems,{items:o},(()=>{this.concernTimeouts.forEach((e=>clearTimeout(e))),null==s||s()}))}saveItems(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3?arguments[3]:void 0;if(this.pendingSaveItems||(this.pendingSaveItems=[]),this.options.coallesedSaving&&!n){this.pendingSaveTimeout&&clearTimeout(this.pendingSaveTimeout);const n=e.map((e=>e.uuid)),i=this.pendingSaveItems.filter((e=>!n.includes(e.uuid)));this.pendingSaveItems=i.concat(e),this.pendingSaveParams={items:this.pendingSaveItems,presave:s,callback:t},this.pendingSaveTimeout=setTimeout((()=>{this.performSavingOfItems(this.pendingSaveParams),this.pendingSaveItems=[],this.pendingSaveTimeout=void 0,this.pendingSaveParams=null}),this.options.coallesedSavingDelay)}else this.performSavingOfItems({items:e,presave:s,callback:t})}setSize(e,t){this.postMessage(y.SetSize,{type:"container",width:e,height:t})}keyDownEvent(e){this.postMessage(y.KeyDown,{keyboardModifier:e})}keyUpEvent(e){this.postMessage(y.KeyUp,{keyboardModifier:e})}mouseClickEvent(){this.postMessage(y.Click,{})}jsonObjectForItem(e){const t=Object.assign({},e);return t.children=null,t.parent=null,t}getItemAppDataValue(e,t){var n,s;const i=null==e||null===(n=e.content)||void 0===n||null===(s=n.appData)||void 0===s?void 0:s["org.standardnotes.sn"];return null==i?void 0:i[t]}}return t.default})()));
//# sourceMappingURL=dist.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EditorKit)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/github.com+standardnotes+component-relay@839ff5db9bc92db9d42cad8d202ddc4df729597d/node_modules/@standardnotes/component-relay/dist/dist.js
var dist = __webpack_require__(791);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/Utils.ts
const htmlToText = html => {
  const tmpDocument = document.implementation.createHTMLDocument().body;
  tmpDocument.innerHTML = html;
  return tmpDocument.textContent || tmpDocument.innerText || '';
};
const truncateString = function truncateString(text) {
  let limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;
  if (text.length <= limit) {
    return text;
  }
  return text.substring(0, limit) + '...';
};
const sleep = async seconds => {
  await new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
;// CONCATENATED MODULE: ./src/EditorKit.ts
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


class EditorKit {
  constructor(delegate, options) {
    this.delegate = delegate;
    this.options = options;
    _defineProperty(this, "componentRelay", void 0);
    _defineProperty(this, "note", void 0);
    _defineProperty(this, "ignoreNextTextChange", void 0);
    this.connectToBridge();
  }
  connectToBridge() {
    const {
      coallesedSaving,
      coallesedSavingDelay,
      mode
    } = this.options;
    this.componentRelay = new (dist_default())({
      targetWindow: window,
      options: {
        coallesedSaving,
        /**
         * The editor does some debouncing for us, so we'll lower the
         * default debounce value from 250 to 150
         */
        coallesedSavingDelay
      },
      onReady: () => {
        const {
          platform
        } = this.componentRelay;
        if (platform) {
          document.documentElement.classList.add(platform);
        }
      },
      onThemesChange: this.delegate.onThemesChange,
      handleRequestForContentHeight: () => {
        return this.delegate.handleRequestForContentHeight();
      }
    });
    this.componentRelay.streamContextItem(async note => {
      var _note$content;
      /**
       * TODO: If note has changed, release previous temp object URLs.
       */
      let isNewNoteLoad = true;
      if (this.note && this.note.uuid == note.uuid) {
        isNewNoteLoad = false;
      }
      const previousNote = this.note;
      this.note = note;

      // Only update UI on non-metadata updates.
      if (note.isMetadataUpdate) {
        return;
      }
      const text = ((_note$content = note.content) === null || _note$content === void 0 ? void 0 : _note$content.text) || '';

      /**
       * If we're an HTML editor, and we're dealing with a new note,
       * check to see if it's in html format.
       * If it's not, we don't want to convert it to HTML until the user makes an explicit change
       * so we'll ignore the next change event in this case.
       */
      if (mode === 'html' && isNewNoteLoad) {
        const isHtml = /<[a-z][\s\S]*>/i.test(text);
        if (!isHtml) {
          this.ignoreNextTextChange = true;
        }
      }
      this.delegate.onNoteValueChange && (await this.delegate.onNoteValueChange(note));
      this.delegate.setEditorRawText(text);
      if (this.delegate.onNoteLockToggle) {
        var _getItemAppDataValue, _getItemAppDataValue2;
        const previousLockState = (_getItemAppDataValue = this.componentRelay.getItemAppDataValue(previousNote, 'locked')) !== null && _getItemAppDataValue !== void 0 ? _getItemAppDataValue : false;
        const newLockState = (_getItemAppDataValue2 = this.componentRelay.getItemAppDataValue(this.note, 'locked')) !== null && _getItemAppDataValue2 !== void 0 ? _getItemAppDataValue2 : false;
        if (previousLockState !== newLockState) {
          this.delegate.onNoteLockToggle(newLockState);
        }
      }
      if (isNewNoteLoad) {
        var _this$delegate$clearU, _this$delegate;
        (_this$delegate$clearU = (_this$delegate = this.delegate).clearUndoHistory) === null || _this$delegate$clearU === void 0 ? void 0 : _this$delegate$clearU.call(_this$delegate);
      }
    });
  }
  configureFileSafe() {
    const requiredDelegateFunctions = ['getCurrentLineText', 'getPreviousLineText', 'replaceText', 'getElementsBySelector', 'insertElement', 'preprocessElement', 'insertRawText'];
    for (const functionName of requiredDelegateFunctions) {
      if (!this.delegate[functionName]) {
        throw Error("Missing ".concat(functionName, " delegate function."));
      }
    }
  }

  /**
   * Called by consumer when the editor has a change/input event.
   */
  onEditorValueChanged(text) {
    const {
      mode
    } = this.options;
    if (this.ignoreNextTextChange) {
      this.ignoreNextTextChange = false;
      return;
    }
    if (!this.note) {
      return;
    }
    const note = this.note;
    this.componentRelay.saveItemWithPresave(note, () => {
      note.content.text = text;
      if (this.delegate.generateCustomPreview) {
        var _result$plain;
        const result = this.delegate.generateCustomPreview(text);
        note.content.preview_plain = (_result$plain = result.plain) !== null && _result$plain !== void 0 ? _result$plain : ' ';
        note.content.preview_html = result.html;
      } else {
        if (mode === 'html') {
          let preview = text;
          preview = truncateString(htmlToText(preview));
          /**
           * If the preview has no length due to either being an empty note, or having just 1 FileSafe file
           * that is stripped above, then we don't want to set to empty string, otherwise SN app will default to content
           * for preview. We'll set a whitespace preview instead so SN doesn't go based on innate content.
           */
          note.content.preview_plain = preview.length > 0 ? preview : ' ';
        } else {
          note.content.preview_plain = text;
        }

        // We're only using plain in this block.
        note.content.preview_html = undefined;
      }
    });
  }

  /**
   * saveItemWithPresave from the component relay.
   */
  saveItemWithPresave(note, presave) {
    this.componentRelay.saveItemWithPresave(note, presave);
  }

  /**
   * Gets the current platform where the component is running.
   */
  get platform() {
    return this.componentRelay.platform;
  }

  /**
   * Gets the current environment where the component is running.
   */
  get environment() {
    return this.componentRelay.environment;
  }
  getComponentDataValueForKey(key) {
    return this.componentRelay.getComponentDataValueForKey(key);
  }
  setComponentDataValueForKey(key, value) {
    this.componentRelay.setComponentDataValueForKey(key, value);
  }
  isRunningInMobileApplication() {
    return this.componentRelay.isRunningInMobileApplication();
  }
  getItemAppDataValue(key) {
    return this.note && this.componentRelay.getItemAppDataValue(this.note, key);
  }
}
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=editor-kit.js.map