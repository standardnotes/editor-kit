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

/***/ 968:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var s in n)e.o(n,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:n[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};let n;var s;e.d(t,{default:()=>I}),function(e){e[e.Web=1]="Web",e[e.Desktop=2]="Desktop",e[e.Mobile=3]="Mobile"}(n||(n={}));var o=new Uint8Array(16);function i(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(o)}const r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,a=function(e){return"string"==typeof e&&r.test(e)};for(var l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));const h=function(e,t,n){var s=(e=e||{}).random||(e.rng||i)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=s[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!a(n))throw TypeError("Stringified UUID is invalid");return n}(s)},d=e=>{var t;const s={[n.Web]:"web",[n.Desktop]:"desktop",[n.Mobile]:"mobile"};return null!==(t=s[e])&&void 0!==t?t:s[n.Web]},m=()=>{};class p{static get isSupported(){return!(!window.console&&!console)}static get info(){return p.isSupported&&this.enabled?console.log.bind(console):m}static get error(){return p.isSupported?console.error.bind(console):m}}var u,v;let g,f;function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(v="enabled")in(u=p)?Object.defineProperty(u,v,{value:false,enumerable:!0,configurable:!0,writable:!0}):u[v]=false,function(e){e.Component="component"}(g||(g={})),function(e){e.SetSize="set-size",e.StreamItems="stream-items",e.StreamContextItem="stream-context-item",e.SaveItems="save-items",e.CreateItem="create-item",e.CreateItems="create-items",e.DeleteItems="delete-items",e.SetComponentData="set-component-data",e.RequestPermissions="request-permissions",e.DuplicateItem="duplicate-item",e.ComponentRegistered="component-registered",e.ActivateThemes="themes",e.Reply="reply",e.ThemesActivated="themes-activated",e.KeyDown="key-down",e.KeyUp="key-up",e.Click="click",e.ScrollToEnd="scroll-to-end",e.ScrollState="scroll-state"}(f||(f={}));const b=["hidden","clip","auto","scroll"];class S{constructor(e,t,n){this.element=e,this.options=t,this.onStateChange=n,y(this,"lastState",void 0),y(this,"disposed",!1),y(this,"onChange",(()=>this.refresh())),y(this,"resizeObserver",new ResizeObserver(this.onChange)),y(this,"mutationObserver",new MutationObserver(this.onChange)),y(this,"scrollEventTarget",void 0),this.scrollEventTarget=e===document.scrollingElement?window:e,this.scrollEventTarget.addEventListener("scroll",this.onChange,{passive:!0}),e.addEventListener("input",this.onChange),this.resizeObserver.observe(e),this.mutationObserver.observe(e,{childList:!0,subtree:!0,characterData:!0}),this.refresh()}refresh(){var e;let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{scrollTop:n,scrollHeight:s,clientHeight:o}=this.element,i={canScroll:s>o,isAtBottom:n+o>=s-8,bottomInset:Math.max(0,Math.round(window.innerHeight-this.getVisibleBottom()))};(t||(null===(e=this.lastState)||void 0===e?void 0:e.canScroll)!==i.canScroll||this.lastState.isAtBottom!==i.isAtBottom||this.lastState.bottomInset!==i.bottomInset)&&(this.lastState=i,this.onStateChange(i))}getVisibleBottom(){let e=this.element.getBoundingClientRect().bottom;for(let t=this.element.parentElement;t&&t!==document.body;t=t.parentElement)b.includes(getComputedStyle(t).overflowY)&&(e=Math.min(e,t.getBoundingClientRect().bottom));return e}scrollToEnd(e){var t,n;null===(t=(n=this.options).beforeScrollToEnd)||void 0===t||t.call(n);const s=this.element,o=s.scrollHeight-s.clientHeight;let i=!1;const r=()=>{i||(i=!0,s.scrollTop=s.scrollHeight-s.clientHeight,requestAnimationFrame((()=>{var t,n,s,o;e&&!this.disposed&&(null===(s=(o=this.options).moveCaretToEnd)||void 0===s||s.call(o)),null===(t=(n=this.options).afterScrollToEnd)||void 0===t||t.call(n)})))};s.scrollTop>=o-1||matchMedia("(prefers-reduced-motion: reduce)").matches?r():(this.scrollEventTarget.addEventListener("scrollend",r,{once:!0}),setTimeout(r,500),s.scrollTo({top:o,behavior:"smooth"}))}dispose(){this.disposed=!0,this.scrollEventTarget.removeEventListener("scroll",this.onChange),this.element.removeEventListener("input",this.onChange),this.resizeObserver.disconnect(),this.mutationObserver.disconnect()}}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class I{constructor(e){var t,n;if(T(this,"contentWindow",void 0),T(this,"component",{activeThemes:[],acceptsThemes:!0}),T(this,"sentMessages",[]),T(this,"messageQueue",[]),T(this,"lastStreamedItem",void 0),T(this,"pendingSaveItems",void 0),T(this,"pendingSaveTimeout",void 0),T(this,"pendingSaveParams",void 0),T(this,"messageHandler",void 0),T(this,"keyDownEventListener",void 0),T(this,"keyUpEventListener",void 0),T(this,"scrollToEndShortcutListener",void 0),T(this,"clickEventListener",void 0),T(this,"concernTimeouts",[]),T(this,"scrollContainer",void 0),T(this,"options",void 0),T(this,"params",void 0),!e||!e.targetWindow)throw new Error("contentWindow must be a valid Window object.");this.params=e,this.options=e.options||{},null==this.options.coallesedSaving&&(this.options.coallesedSaving=!0),null==this.options.coallesedSavingDelay&&(this.options.coallesedSavingDelay=250),null!=this.options.acceptsThemes&&(this.component.acceptsThemes=null===(n=this.options.acceptsThemes)||void 0===n||n),p.enabled=null!==(t=this.options.debug)&&void 0!==t&&t,this.contentWindow=e.targetWindow,this.registerMessageHandler(),this.registerKeyboardEventListeners(),this.registerMouseEventListeners()}deinit(){var e;this.params.onReady=void 0,this.component={acceptsThemes:!0,activeThemes:[]},this.messageQueue=[],this.sentMessages=[],this.lastStreamedItem=void 0,this.pendingSaveItems=void 0,this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0,null===(e=this.scrollContainer)||void 0===e||e.dispose(),this.scrollContainer=void 0,this.messageHandler&&(this.contentWindow.document.removeEventListener("message",this.messageHandler),this.contentWindow.removeEventListener("message",this.messageHandler)),this.keyDownEventListener&&this.contentWindow.removeEventListener("keydown",this.keyDownEventListener),this.keyUpEventListener&&this.contentWindow.removeEventListener("keyup",this.keyUpEventListener),this.scrollToEndShortcutListener&&this.contentWindow.removeEventListener("keydown",this.scrollToEndShortcutListener,!0),this.clickEventListener&&this.contentWindow.removeEventListener("click",this.clickEventListener)}registerMessageHandler(){this.messageHandler=e=>{if(p.info("Components API Message received:",e.data),document.referrer&&new URL(document.referrer).origin!==new URL(e.origin).origin)return;const{data:t}=e,n=(e=>{if("string"!=typeof e)return!1;try{const t=JSON.parse(e),n=Object.prototype.toString.call(t);return"[object Object]"===n||"[object Array]"===n}catch(e){return!1}})(t)?JSON.parse(t):t;if(n){if(void 0===this.component.origin&&n.action===f.ComponentRegistered)this.component.origin=e.origin;else if(e.origin!==this.component.origin)return;this.handleMessage(n)}else p.error("Invalid data received. Skipping...")},this.contentWindow.document.addEventListener("message",this.messageHandler,!1),this.contentWindow.addEventListener("message",this.messageHandler,!1),p.info("Waiting for messages...")}registerKeyboardEventListeners(){this.keyDownEventListener=e=>{this.shouldForwardKeyboardEvent(e)&&(p.info("A key has been pressed: ".concat(e.key)),this.forwardKeyboardEvent(f.KeyDown,e))},this.keyUpEventListener=e=>{this.shouldForwardKeyboardEvent(e)&&(p.info("A key has been released: ".concat(e.key)),this.forwardKeyboardEvent(f.KeyUp,e))},this.scrollToEndShortcutListener=e=>{this.scrollContainer&&this.component.hostHandlesScrollToEndShortcut&&this.isScrollToEndShortcut(e)&&e.preventDefault()},this.contentWindow.addEventListener("keydown",this.keyDownEventListener,!1),this.contentWindow.addEventListener("keyup",this.keyUpEventListener,!1),this.contentWindow.addEventListener("keydown",this.scrollToEndShortcutListener,!0)}isScrollToEndShortcut(e){var t;const n=!0===(null===(t=this.platform)||void 0===t?void 0:t.startsWith("mac-")),s=n?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey;return e.key===(n?"ArrowDown":"End")&&s&&!e.shiftKey&&!e.altKey}shouldForwardKeyboardEvent(e){return!!(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||"Alt"===e.key}forwardKeyboardEvent(e,t){this.postMessage(e,{key:t.key,code:t.code,ctrlKey:t.ctrlKey,metaKey:t.metaKey,shiftKey:t.shiftKey,altKey:t.altKey})}registerMouseEventListeners(){this.clickEventListener=e=>{p.info("A click has been performed."),this.mouseClickEvent()},this.contentWindow.addEventListener("click",this.clickEventListener,!1)}handleMessage(e){var t;switch(e.action){case f.ComponentRegistered:this.component.sessionKey=e.sessionKey,e.componentData&&(this.component.data=e.componentData),this.onReady(e.data),p.info("Component successfully registered with payload:",e);break;case f.ActivateThemes:this.activateThemes(e.data.themes);break;case f.ScrollToEnd:null===(t=this.scrollContainer)||void 0===t||t.scrollToEnd(!0===e.data.moveCaret);break;default:{var n,s;if(!e.original)return;const t=null===(n=this.sentMessages)||void 0===n?void 0:n.filter((t=>{var n;return t.messageId===(null===(n=e.original)||void 0===n?void 0:n.messageId)}))[0];if(!t){const e=this.contentWindow.document.title,t=("The extension '".concat(e,"' is attempting to communicate with Standard Notes, ")+"but an error is preventing it from doing so. Please restart this extension and try again.").replace("  "," ");return void p.info(t)}null==t||null===(s=t.callback)||void 0===s||s.call(t,e.data);break}}}onReady(e){var t;this.component.environment=e.environment,this.component.platform=e.platform,this.component.uuid=e.uuid,this.component.hostHandlesScrollToEndShortcut=!0===e.handlesScrollToEndShortcut;for(const e of this.messageQueue)this.postMessage(e.action,e.data,e.callback);this.messageQueue=[],null===(t=this.scrollContainer)||void 0===t||t.refresh(!0),p.info("Data passed to onReady:",e),this.activateThemes(e.activeThemeUrls||[]),this.postMessage(f.ThemesActivated,{}),this.params.onReady&&this.params.onReady()}getSelfComponentUUID(){return this.component.uuid}isRunningInDesktopApplication(){return this.component.environment===d(n.Desktop)}isRunningInMobileApplication(){return this.component.environment===d(n.Mobile)}getComponentDataValueForKey(e){if(this.component.data)return this.component.data[e]}setComponentDataValueForKey(e,t){if(!this.component.data)throw new Error("The component has not been initialized.");if(!e||e&&0===e.length)throw new Error("The key for the data value should be a valid string.");this.component.data=w(w({},this.component.data),{},{[e]:t}),this.postMessage(f.SetComponentData,{componentData:this.component.data})}clearComponentData(){this.component.data={},this.postMessage(f.SetComponentData,{componentData:this.component.data})}postMessage(e,t,n){if(!this.component.sessionKey)return void this.messageQueue.push({action:e,data:t,api:g.Component,callback:n});e===f.SaveItems&&(t.height=this.params.handleRequestForContentHeight());const s={action:e,data:t,messageId:this.generateUUID(),sessionKey:this.component.sessionKey,api:g.Component},o=JSON.parse(JSON.stringify(s));let i;o.callback=n,this.sentMessages.push(o),i=this.isRunningInMobileApplication()?JSON.stringify(s):s,p.info("Posting message:",i);const r=this.component.origin&&"null"!==this.component.origin?this.component.origin:"*";this.contentWindow.parent.postMessage(i,r)}activateThemes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!this.component.acceptsThemes)return;p.info("Incoming themes:",e);const{activeThemes:t}=this.component;if(t&&t.sort().toString()==e.sort().toString())return;let n=e;const s=[];for(const o of t)e.includes(o)?n=n.filter((e=>e!==o)):s.push(o);p.info("Deactivating themes:",s),p.info("Activating themes:",n);for(const e of s)this.deactivateTheme(e);this.component.activeThemes=e;for(const e of n){if(!e)continue;const t=this.contentWindow.document.createElement("link");t.id=btoa(e),t.href=e,t.type="text/css",t.rel="stylesheet",t.media="screen,print",t.className="custom-theme",this.contentWindow.document.getElementsByTagName("head")[0].appendChild(t)}this.params.onThemesChange&&this.params.onThemesChange()}themeElementForUrl(e){return Array.from(this.contentWindow.document.getElementsByClassName("custom-theme")).slice().find((t=>t.id==btoa(e)))}deactivateTheme(e){const t=this.themeElementForUrl(e);t&&t.parentNode&&(t.setAttribute("disabled","true"),t.parentNode.removeChild(t))}generateUUID(){return h()}get platform(){return this.component.platform}get environment(){return this.component.environment}streamItems(e,t){this.postMessage(f.StreamItems,{content_types:e},(e=>{t(e.items)}))}streamContextItem(e){this.postMessage(f.StreamContextItem,{},(t=>{const{item:n}=t;(!this.lastStreamedItem||this.lastStreamedItem.uuid!==n.uuid)&&this.pendingSaveTimeout&&(clearTimeout(this.pendingSaveTimeout),this.performSavingOfItems(this.pendingSaveParams),this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0),this.lastStreamedItem=n,e(this.lastStreamedItem)}))}createItem(e,t){this.postMessage(f.CreateItem,{item:this.jsonObjectForItem(e)},(e=>{let{item:n}=e;!n&&e.items&&e.items.length>0&&(n=e.items[0]),t&&t(n)}))}createItems(e,t){const n=e.map((e=>this.jsonObjectForItem(e)));this.postMessage(f.CreateItems,{items:n},(e=>{t&&t(e.items)}))}deleteItem(e,t){this.deleteItems([e],t)}deleteItems(e,t){const n={items:e.map((e=>this.jsonObjectForItem(e)))};this.postMessage(f.DeleteItems,n,(e=>{t&&t(e)}))}sendCustomEvent(e,t,n){this.postMessage(e,t,(e=>{n&&n(e)}))}saveItem(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.saveItems([e],t,n)}saveItemWithPresave(e,t,n){this.saveItemsWithPresave([e],t,n)}saveItemsWithPresave(e,t,n){this.saveItems(e,n,!1,t)}performSavingOfItems(e){let{items:t,presave:n,callback:s}=e;const o=setTimeout((()=>{this.concernTimeouts.forEach((e=>clearTimeout(e))),alert("This editor is unable to communicate with Standard Notes. Your changes may not be saved. Please backup your changes, then restart the application and try again.")}),5e3);this.concernTimeouts.push(o),n&&n();const i=[];for(const e of t)i.push(this.jsonObjectForItem(e));this.postMessage(f.SaveItems,{items:i},(()=>{this.concernTimeouts.forEach((e=>clearTimeout(e))),null==s||s()}))}saveItems(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=arguments.length>3?arguments[3]:void 0;if(this.pendingSaveItems||(this.pendingSaveItems=[]),this.options.coallesedSaving&&!n){this.pendingSaveTimeout&&clearTimeout(this.pendingSaveTimeout);const n=e.map((e=>e.uuid)),o=this.pendingSaveItems.filter((e=>!n.includes(e.uuid)));this.pendingSaveItems=o.concat(e),this.pendingSaveParams={items:this.pendingSaveItems,presave:s,callback:t},this.pendingSaveTimeout=setTimeout((()=>{this.performSavingOfItems(this.pendingSaveParams),this.pendingSaveItems=[],this.pendingSaveTimeout=void 0,this.pendingSaveParams=null}),this.options.coallesedSavingDelay)}else this.performSavingOfItems({items:e,presave:s,callback:t})}registerScrollContainer(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};null===(t=this.scrollContainer)||void 0===t||t.dispose();const s=new S(e,n,(e=>{this.postMessage(f.ScrollState,e)}));return this.scrollContainer=s,{notifyContentChange:()=>s.refresh()}}setSize(e,t){this.postMessage(f.SetSize,{type:"container",width:e,height:t})}mouseClickEvent(){this.postMessage(f.Click,{})}jsonObjectForItem(e){const t=Object.assign({},e);return t.children=null,t.parent=null,t}getItemAppDataValue(e,t){var n,s;const o=null==e||null===(n=e.content)||void 0===n||null===(s=n.appData)||void 0===s?void 0:s["org.standardnotes.sn"];return null==o?void 0:o[t]}}return t.default})()));
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

// EXTERNAL MODULE: ../component-relay/dist/dist.js
var dist = __webpack_require__(968);
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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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

  /**
   * registerScrollContainer from the component relay.
   */
  registerScrollContainer(element, options) {
    return this.componentRelay.registerScrollContainer(element, options);
  }
}
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=editor-kit.js.map