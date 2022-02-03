(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("filesafe-js"));
	else if(typeof define === 'function' && define.amd)
		define("EditorKit", ["filesafe-js"], factory);
	else if(typeof exports === 'object')
		exports["EditorKit"] = factory(require("filesafe-js"));
	else
		root["EditorKit"] = factory(root["filesafe-js"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__695__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 156:
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{"use strict";var e={d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};let s,n,i,o;var a;e.d(t,{default:()=>w}),function(e){e.SetSize="set-size",e.StreamItems="stream-items",e.StreamContextItem="stream-context-item",e.SaveItems="save-items",e.SelectItem="select-item",e.AssociateItem="associate-item",e.DeassociateItem="deassociate-item",e.ClearSelection="clear-selection",e.CreateItem="create-item",e.CreateItems="create-items",e.DeleteItems="delete-items",e.SetComponentData="set-component-data",e.InstallLocalComponent="install-local-component",e.ToggleActivateComponent="toggle-activate-component",e.RequestPermissions="request-permissions",e.PresentConflictResolution="present-conflict-resolution",e.DuplicateItem="duplicate-item",e.ComponentRegistered="component-registered",e.ActivateThemes="themes",e.Reply="reply",e.SaveSuccess="save-success",e.SaveError="save-error",e.ThemesActivated="themes-activated",e.KeyDown="key-down",e.KeyUp="key-up",e.Click="click"}(s||(s={})),function(e){e[e.Web=1]="Web",e[e.Desktop=2]="Desktop",e[e.Mobile=3]="Mobile"}(n||(n={})),function(e){e.Any="*",e.Item="SF|Item",e.RootKey="SN|RootKey|NoSync",e.ItemsKey="SN|ItemsKey",e.EncryptedStorage="SN|EncryptedStorage",e.Note="Note",e.Tag="Tag",e.SmartTag="SN|SmartTag",e.Component="SN|Component",e.Editor="SN|Editor",e.ActionsExtension="Extension",e.UserPrefs="SN|UserPreferences",e.HistorySession="SN|HistorySession",e.Theme="SN|Theme",e.Mfa="SF|MFA",e.ServerExtension="SF|Extension",e.FilesafeCredentials="SN|FileSafe|Credentials",e.FilesafeFileMetadata="SN|FileSafe|FileMetadata",e.FilesafeIntegration="SN|FileSafe|Integration",e.ExtensionRepo="SN|ExtensionRepo"}(i||(i={})),function(e){e.Pinned="pinned",e.Archived="archived",e.Locked="locked",e.UserModifiedDate="client_updated_at",e.DefaultEditor="defaultEditor",e.MobileRules="mobileRules",e.NotAvailableOnMobile="notAvailableOnMobile",e.MobileActive="mobileActive",e.LastSize="lastSize",e.PrefersPlainEditor="prefersPlainEditor",e.ComponentInstallError="installError"}(o||(o={}));var r=new Uint8Array(16);function c(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}const m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,l=function(e){return"string"==typeof e&&m.test(e)};for(var d=[],h=0;h<256;++h)d.push((h+256).toString(16).substr(1));const p=function(e,t,s){var n=(e=e||{}).random||(e.rng||c)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){s=s||0;for(var i=0;i<16;++i)t[s+i]=n[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase();if(!l(s))throw TypeError("Stringified UUID is invalid");return s}(n)},u=e=>{var t;const s={[n.Web]:"web",[n.Desktop]:"desktop",[n.Mobile]:"mobile"};return null!==(t=s[e])&&void 0!==t?t:s[n.Web]},v=e=>null!=e,g=()=>{};class f{static get isSupported(){return!(!window.console&&!console)}static get info(){return f.isSupported&&this.enabled?console.log.bind(console):g}static get error(){return f.isSupported?console.error.bind(console):g}}var y,S,b,I;function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function E(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach((function(t){C(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function C(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}(S="enabled")in(y=f)?Object.defineProperty(y,S,{value:false,enumerable:!0,configurable:!0,writable:!0}):y[S]=false,function(e){e.Component="component"}(b||(b={})),function(e){e.Shift="Shift",e.Ctrl="Control",e.Meta="Meta"}(I||(I={}));class w{constructor(e){if(C(this,"contentWindow",void 0),C(this,"initialPermissions",void 0),C(this,"onReadyCallback",void 0),C(this,"component",{activeThemes:[],acceptsThemes:!0}),C(this,"sentMessages",[]),C(this,"messageQueue",[]),C(this,"lastStreamedItem",void 0),C(this,"pendingSaveItems",void 0),C(this,"pendingSaveTimeout",void 0),C(this,"pendingSaveParams",void 0),C(this,"coallesedSaving",!0),C(this,"coallesedSavingDelay",250),C(this,"messageHandler",void 0),C(this,"keyDownEventListener",void 0),C(this,"keyUpEventListener",void 0),C(this,"clickEventListener",void 0),C(this,"onThemesChangeCallback",void 0),C(this,"concernTimeouts",[]),!e||!e.targetWindow)throw new Error("contentWindow must be a valid Window object.");this.contentWindow=e.targetWindow,this.processParameters(e),this.registerMessageHandler(),this.registerKeyboardEventListeners(),this.registerMouseEventListeners()}processParameters(e){var t;const{initialPermissions:s,options:n,onReady:i,onThemesChange:o}=e;var a;s&&s.length>0&&(this.initialPermissions=s),v(null==n?void 0:n.coallesedSaving)&&(this.coallesedSaving=n.coallesedSaving),v(null==n?void 0:n.coallesedSavingDelay)&&(this.coallesedSavingDelay=n.coallesedSavingDelay),v(null==n?void 0:n.acceptsThemes)&&(this.component.acceptsThemes=null===(a=null==n?void 0:n.acceptsThemes)||void 0===a||a),v(i)&&(this.onReadyCallback=i),v(o)&&(this.onThemesChangeCallback=o),f.enabled=null!==(t=null==n?void 0:n.debug)&&void 0!==t&&t}deinit(){this.onReadyCallback=void 0,this.component={acceptsThemes:!0,activeThemes:[]},this.messageQueue=[],this.sentMessages=[],this.lastStreamedItem=void 0,this.pendingSaveItems=void 0,this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0,this.messageHandler&&(this.contentWindow.document.removeEventListener("message",this.messageHandler),this.contentWindow.removeEventListener("message",this.messageHandler)),this.keyDownEventListener&&this.contentWindow.removeEventListener("keydown",this.keyDownEventListener),this.keyUpEventListener&&this.contentWindow.removeEventListener("keyup",this.keyUpEventListener),this.clickEventListener&&this.contentWindow.removeEventListener("click",this.clickEventListener)}registerMessageHandler(){this.messageHandler=e=>{if(f.info("Components API Message received:",e.data),document.referrer&&new URL(document.referrer).origin!==new URL(e.origin).origin)return;const{data:t}=e,n=(e=>{if("string"!=typeof e)return!1;try{const t=JSON.parse(e),s=Object.prototype.toString.call(t);return"[object Object]"===s||"[object Array]"===s}catch(e){return!1}})(t)?JSON.parse(t):t;if(n){if(void 0===this.component.origin&&n.action===s.ComponentRegistered)this.component.origin=e.origin;else if(e.origin!==this.component.origin)return;this.handleMessage(n)}else f.error("Invalid data received. Skipping...")},this.contentWindow.document.addEventListener("message",this.messageHandler,!1),this.contentWindow.addEventListener("message",this.messageHandler,!1),f.info("Waiting for messages...")}registerKeyboardEventListeners(){this.keyDownEventListener=e=>{f.info("A key has been pressed: ".concat(e.key)),e.ctrlKey?this.keyDownEvent(I.Ctrl):e.shiftKey?this.keyDownEvent(I.Shift):(e.metaKey||"Meta"===e.key)&&this.keyDownEvent(I.Meta)},this.keyUpEventListener=e=>{f.info("A key has been released: ".concat(e.key)),"Control"===e.key?this.keyUpEvent(I.Ctrl):"Shift"===e.key?this.keyUpEvent(I.Shift):"Meta"===e.key&&this.keyUpEvent(I.Meta)},this.contentWindow.addEventListener("keydown",this.keyDownEventListener,!1),this.contentWindow.addEventListener("keyup",this.keyUpEventListener,!1)}registerMouseEventListeners(){this.clickEventListener=e=>{f.info("A click has been performed."),this.mouseClickEvent()},this.contentWindow.addEventListener("click",this.clickEventListener,!1)}handleMessage(e){switch(e.action){case s.ComponentRegistered:this.component.sessionKey=e.sessionKey,e.componentData&&(this.component.data=e.componentData),this.onReady(e.data),f.info("Component successfully registered with payload:",e);break;case s.ActivateThemes:this.activateThemes(e.data.themes);break;default:{var t,n;if(!e.original)return;const s=null===(t=this.sentMessages)||void 0===t?void 0:t.filter((t=>{var s;return t.messageId===(null===(s=e.original)||void 0===s?void 0:s.messageId)}))[0];if(!s){const e=this.contentWindow.document.title,t=("The extension '".concat(e,"' is attempting to communicate with Standard Notes, ")+"but an error is preventing it from doing so. Please restart this extension and try again.").replace("  "," ");return void f.info(t)}null==s||null===(n=s.callback)||void 0===n||n.call(s,e.data);break}}}onReady(e){this.component.environment=e.environment,this.component.platform=e.platform,this.component.uuid=e.uuid,this.initialPermissions&&this.initialPermissions.length>0&&this.requestPermissions(this.initialPermissions);for(const e of this.messageQueue)this.postMessage(e.action,e.data,e.callback);this.messageQueue=[],f.info("Data passed to onReady:",e),this.activateThemes(e.activeThemeUrls||[]),this.postMessage(s.ThemesActivated,{}),this.onReadyCallback&&this.onReadyCallback()}getSelfComponentUUID(){return this.component.uuid}isRunningInDesktopApplication(){return this.component.environment===u(n.Desktop)}isRunningInMobileApplication(){return this.component.environment===u(n.Mobile)}getComponentDataValueForKey(e){if(this.component.data)return this.component.data[e]}setComponentDataValueForKey(e,t){if(!this.component.data)throw new Error("The component has not been initialized.");if(!e||e&&0===e.length)throw new Error("The key for the data value should be a valid string.");this.component.data=E(E({},this.component.data),{},{[e]:t}),this.postMessage(s.SetComponentData,{componentData:this.component.data})}clearComponentData(){this.component.data={},this.postMessage(s.SetComponentData,{componentData:this.component.data})}postMessage(e,t,s){if(!this.component.sessionKey)return void this.messageQueue.push({action:e,data:t,api:b.Component,callback:s});const n={action:e,data:t,messageId:this.generateUUID(),sessionKey:this.component.sessionKey,api:b.Component},i=JSON.parse(JSON.stringify(n));let o;i.callback=s,this.sentMessages.push(i),o=this.isRunningInMobileApplication()?JSON.stringify(n):n,f.info("Posting message:",o),this.contentWindow.parent.postMessage(o,this.component.origin)}requestPermissions(e,t){this.postMessage(s.RequestPermissions,{permissions:e},(()=>{t&&t()}))}activateThemes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!this.component.acceptsThemes)return;f.info("Incoming themes:",e);const{activeThemes:t}=this.component;if(t&&t.sort().toString()==e.sort().toString())return;let s=e;const n=[];for(const i of t)e.includes(i)?s=s.filter((e=>e!==i)):n.push(i);f.info("Deactivating themes:",n),f.info("Activating themes:",s);for(const e of n)this.deactivateTheme(e);this.component.activeThemes=e;for(const e of s){if(!e)continue;const t=this.contentWindow.document.createElement("link");t.id=btoa(e),t.href=e,t.type="text/css",t.rel="stylesheet",t.media="screen,print",t.className="custom-theme",this.contentWindow.document.getElementsByTagName("head")[0].appendChild(t)}this.onThemesChangeCallback&&this.onThemesChangeCallback()}themeElementForUrl(e){return Array.from(this.contentWindow.document.getElementsByClassName("custom-theme")).slice().find((t=>t.id==btoa(e)))}deactivateTheme(e){const t=this.themeElementForUrl(e);t&&t.parentNode&&(t.setAttribute("disabled","true"),t.parentNode.removeChild(t))}generateUUID(){return p()}get platform(){return this.component.platform}get environment(){return this.component.environment}streamItems(e,t){this.postMessage(s.StreamItems,{content_types:e},(e=>{t(e.items)}))}streamContextItem(e){this.postMessage(s.StreamContextItem,{},(t=>{const{item:s}=t;(!this.lastStreamedItem||this.lastStreamedItem.uuid!==s.uuid)&&this.pendingSaveTimeout&&(clearTimeout(this.pendingSaveTimeout),this.performSavingOfItems(this.pendingSaveParams),this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0),this.lastStreamedItem=s,e(this.lastStreamedItem)}))}selectItem(e){this.postMessage(s.SelectItem,{item:this.jsonObjectForItem(e)})}clearSelection(){this.postMessage(s.ClearSelection,{content_type:i.Tag})}createItem(e,t){this.postMessage(s.CreateItem,{item:this.jsonObjectForItem(e)},(e=>{let{item:s}=e;!s&&e.items&&e.items.length>0&&(s=e.items[0]),this.associateItem(s),t&&t(s)}))}createItems(e,t){const n=e.map((e=>this.jsonObjectForItem(e)));this.postMessage(s.CreateItems,{items:n},(e=>{t&&t(e.items)}))}associateItem(e){this.postMessage(s.AssociateItem,{item:this.jsonObjectForItem(e)})}deassociateItem(e){this.postMessage(s.DeassociateItem,{item:this.jsonObjectForItem(e)})}deleteItem(e,t){this.deleteItems([e],t)}deleteItems(e,t){const n={items:e.map((e=>this.jsonObjectForItem(e)))};this.postMessage(s.DeleteItems,n,(e=>{t&&t(e)}))}sendCustomEvent(e,t,s){this.postMessage(e,t,(e=>{s&&s(e)}))}saveItem(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.saveItems([e],t,s)}saveItemWithPresave(e,t,s){this.saveItemsWithPresave([e],t,s)}saveItemsWithPresave(e,t,s){this.saveItems(e,s,!1,t)}performSavingOfItems(e){let{items:t,presave:n,callback:i}=e;const o=setTimeout((()=>{this.concernTimeouts.forEach((e=>clearTimeout(e))),alert("This editor is unable to communicate with Standard Notes. Your changes may not be saved. Please backup your changes, then restart the application and try again.")}),5e3);this.concernTimeouts.push(o),n&&n();const a=[];for(const e of t)a.push(this.jsonObjectForItem(e));this.postMessage(s.SaveItems,{items:a},(()=>{this.concernTimeouts.forEach((e=>clearTimeout(e))),null==i||i()}))}saveItems(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;if(this.pendingSaveItems||(this.pendingSaveItems=[]),this.coallesedSaving&&!s){this.pendingSaveTimeout&&clearTimeout(this.pendingSaveTimeout);const s=e.map((e=>e.uuid)),i=this.pendingSaveItems.filter((e=>!s.includes(e.uuid)));this.pendingSaveItems=i.concat(e),this.pendingSaveParams={items:this.pendingSaveItems,presave:n,callback:t},this.pendingSaveTimeout=setTimeout((()=>{this.performSavingOfItems(this.pendingSaveParams),this.pendingSaveItems=[],this.pendingSaveTimeout=void 0,this.pendingSaveParams=null}),this.coallesedSavingDelay)}else this.performSavingOfItems({items:e,presave:n,callback:t})}setSize(e,t){this.postMessage(s.SetSize,{type:"container",width:e,height:t})}keyDownEvent(e){this.postMessage(s.KeyDown,{keyboardModifier:e})}keyUpEvent(e){this.postMessage(s.KeyUp,{keyboardModifier:e})}mouseClickEvent(){this.postMessage(s.Click,{})}jsonObjectForItem(e){const t=Object.assign({},e);return t.children=null,t.parent=null,t}getItemAppDataValue(e,t){var s,n;return null==e||null===(s=e.content)||void 0===s||null===(n=s.appData)||void 0===n?void 0:n["org.standardnotes.sn"][t]}}return t.default})()}));
//# sourceMappingURL=dist.js.map

/***/ }),

/***/ 695:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__695__;

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EditorKitBase)
});

// EXTERNAL MODULE: ./node_modules/@standardnotes/component-relay/dist/dist.js
var dist = __webpack_require__(156);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/utils.ts
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
;// CONCATENATED MODULE: ./src/fileLoader.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class FileLoader {
  /**
   * When a file is decrypted and loaded into a temp url, we'll place the temp url in here so that subsequent decrypt attempts
   * dont require further work. Mapped values have the shape of { url, fileType, fsName }
   */
  // The UUIDs of files currently loading, so that we don't start a new load for currently loading file.
  // The UUID to current status element mapping
  constructor(options) {
    this.options = options;

    _defineProperty(this, "uuidToFileTempUrlAndTypeMapping", {});

    _defineProperty(this, "currentlyLoadingIds", []);

    _defineProperty(this, "statusElementMapping", {});

    _defineProperty(this, "fileTypeToElementType", {
      'image/png': 'img',
      'image/jpg': 'img',
      'image/jpeg': 'img',
      'image/gif': 'img',
      'image/tiff': 'img',
      'image/bmp': 'img',
      'video/mp4': 'video',
      'audio/mpeg': 'audio',
      'audio/mp3': 'audio'
    });
  }

  fileTypeForElementType(type) {
    return this.fileTypeToElementType[type.toLowerCase()];
  }
  /**
   * Scans the document for elements <fileSafe>. If found, begins loading file.
   */


  loadFileSafeElements() {
    const elements = this.options.getElementsBySelector('*[fsplaceholder]');

    for (const element of elements) {
      this.loadFileSafeElement(element);
    }
  }

  async loadFileSafeElement(fsElement) {
    var _fsElement$getAttribu;

    const {
      fileSafeInstance
    } = this.options;
    const fsid = fsElement.getAttribute('fsid');
    const fsName = (_fsElement$getAttribu = fsElement.getAttribute('fsName')) !== null && _fsElement$getAttribu !== void 0 ? _fsElement$getAttribu : '';
    const fileNameDisplay = !fsName || fsName == 'undefined' ? 'file' : fsName;

    if (!fsid) {
      return false;
    }

    const existingMapping = this.uuidToFileTempUrlAndTypeMapping[fsid];

    if (existingMapping) {
      this.insertMediaElement({
        fsid,
        fsElement,
        url: existingMapping.url,
        fileType: existingMapping.fileType,
        fsName: existingMapping.fsName
      });
      return false;
    }

    if (this.currentlyLoadingIds.includes(fsid)) {
      return false;
    }

    const descriptor = fileSafeInstance.findFileDescriptor(fsid);

    if (!descriptor) {
      this.setStatus({
        fsElement,
        fsid,
        status: "Unable to find ".concat(fileNameDisplay, " ").concat(fsid, "."),
        removable: true
      });
      return false;
    }

    const selectorSyntax = "[fsid=\"".concat(descriptor.uuid, "\"][fscollapsable]");
    const existingElements = document.querySelectorAll("img".concat(selectorSyntax, ", figure").concat(selectorSyntax, ", video").concat(selectorSyntax, ", audio").concat(selectorSyntax));

    if (existingElements.length > 0) {
      return false;
    }

    const cleanup = () => this.currentlyLoadingIds.splice(this.currentlyLoadingIds.indexOf(fsid), 1);

    this.currentlyLoadingIds.push(fsid);
    this.setStatus({
      fsElement,
      fsid,
      status: "Downloading ".concat(fileNameDisplay, "...")
    }); // Allow UI to update before beginning download...

    await sleep(0.05);
    const fileItem = await fileSafeInstance.downloadFileFromDescriptor(descriptor).catch(() => {
      this.setStatus({
        fsElement,
        fsid,
        status: "Unable to download ".concat(fileNameDisplay, " ").concat(fsid, ".")
      });
      return;
    });

    if (!fileItem) {
      return false;
    }

    this.setStatus({
      fsElement,
      fsid,
      status: "Decrypting ".concat(fileNameDisplay, "...")
    }); // Allow UI to update before beginning decryption

    await sleep(0.05);
    const data = await fileSafeInstance.decryptFile({
      fileDescriptor: descriptor,
      fileItem
    }).catch(() => {
      this.setStatus({
        fsElement,
        fsid,
        status: "Unable to decrypt ".concat(fileNameDisplay, " ").concat(fsid, ".")
      });
      return;
    });

    if (!data) {
      return false;
    } // Remove loading text


    this.setStatus({
      fsElement,
      fsid
    }); // Allow UI to update before adding image

    await sleep(0.05); // Generate temporary url, must be released later

    const fileType = descriptor.content.fileType;
    const tempUrl = fileSafeInstance.createTemporaryFileUrl({
      base64Data: data.decryptedData,
      dataType: fileType
    });
    this.insertMediaElement({
      fsid,
      fileType,
      fsName,
      fsElement,
      url: tempUrl
    });
    cleanup();
    this.uuidToFileTempUrlAndTypeMapping[fsid] = {
      fileType,
      url: tempUrl,
      fsName
    };
    return true;
  }

  insertMediaElement(_ref) {
    let {
      url,
      fsid,
      fsName,
      fileType,
      fsElement
    } = _ref;
    const elementType = this.fileTypeForElementType(fileType);
    let mediaElement;

    switch (elementType) {
      case 'img':
        mediaElement = this.createImageElement({
          url,
          fsid,
          fsName,
          fsElement
        });
        break;

      case 'video':
        mediaElement = this.createVideoElement({
          url,
          fsid,
          fileType,
          fsName,
          fsElement
        });
        break;

      case 'audio':
        mediaElement = this.createAudioElement({
          url,
          fsid,
          fsName
        });
        break;

      default:
        mediaElement = this.createDownloadElement({
          url,
          fsid,
          fsName
        });
        break;
    }

    this.insertElementNearElement(mediaElement, fsElement); // Remove fsElement now that image is loaded.

    fsElement.remove();
  }

  wrapElementInTag(_ref2) {
    let {
      element,
      tagName,
      fsid,
      fsName
    } = _ref2;
    const tag = document.createElement(tagName);
    tag.setAttribute('fsid', fsid);
    tag.setAttribute('fsName', fsName);
    tag.setAttribute('fscollapsable', 'true');
    tag.setAttribute('contenteditable', 'true');
    tag.append(element);
    return tag;
  }

  createImageElement(_ref3) {
    let {
      url,
      fsid,
      fsName,
      fsElement
    } = _ref3;
    const image = document.createElement('img');
    image.setAttribute('src', url);
    image.setAttribute('srcset', "".concat(url, " 2x"));
    image.setAttribute('fsid', fsid);
    image.setAttribute('fsName', fsName);
    image.setAttribute('fscollapsable', 'true');
    const elementWidth = fsElement.getAttribute('width');

    if (elementWidth) {
      image.setAttribute('width', elementWidth);
    }

    const elementHeight = fsElement.getAttribute('height');

    if (elementHeight) {
      image.setAttribute('height', elementHeight);
    }

    return image;
  }

  createVideoElement(_ref4) {
    let {
      url,
      fsid,
      fileType,
      fsName,
      fsElement
    } = _ref4;
    const video = document.createElement('video');
    video.setAttribute('controls', 'true');
    video.setAttribute('fsid', fsid);
    video.setAttribute('fsName', fsName);
    video.setAttribute('fscollapsable', 'true');
    const elementWidth = fsElement.getAttribute('width');

    if (elementWidth) {
      video.setAttribute('width', elementWidth);
    }

    const elementHeight = fsElement.getAttribute('height');

    if (elementHeight) {
      video.setAttribute('height', elementHeight);
    }

    const source = document.createElement('source');
    source.setAttribute('src', url);
    source.setAttribute('type', fileType);
    video.append(source);
    /**
     * Redactor will automatically insert a video element in a p tag,
     * so we'll do it ourselves so that we can control its attributes.
     */

    return this.wrapElementInTag({
      fsid,
      fsName,
      element: video,
      tagName: 'p'
    });
  }

  createDownloadElement(_ref5) {
    let {
      url,
      fsid,
      fsName
    } = _ref5;
    const link = document.createElement('a');
    link.setAttribute('fsid', fsid);
    link.setAttribute('fsName', fsName);
    link.setAttribute('ghost', 'true');
    link.setAttribute('fscollapsable', 'true');
    link.setAttribute('href', url);
    link.textContent = "".concat(fsName);
    return link;
  }

  createAudioElement(_ref6) {
    let {
      url,
      fsid,
      fsName
    } = _ref6;
    const audio = document.createElement('audio');
    audio.setAttribute('src', url);
    audio.setAttribute('controls', 'true');
    audio.setAttribute('fsid', fsid);
    audio.setAttribute('fsName', fsName);
    audio.setAttribute('fscollapsable', 'true');
    return this.wrapElementInTag({
      fsid,
      fsName,
      element: audio,
      tagName: 'p'
    });
  }

  setStatus(_ref7) {
    let {
      status,
      fsElement,
      fsid,
      removable = false
    } = _ref7;

    if (fsid) {
      const existingStatusElement = this.statusElementMapping[fsid];

      if (existingStatusElement) {
        existingStatusElement.remove();
        delete this.statusElementMapping[fsid];
      }
    }

    if (status) {
      let element = document.createElement('label');
      element.setAttribute('id', fsid);
      element.setAttribute('ghost', 'true');
      element.setAttribute('contenteditable', 'false');
      element.style.fontWeight = 'bold';
      element.textContent = status;

      if (removable) {
        element.style.userSelect = 'all';
      }

      element = this.insertElementNearElement(element, fsElement);

      if (fsid) {
        this.statusElementMapping[fsid] = element;
      }

      return element;
    }
  }

  insertStatusAtCursor(status) {
    const identifier = Math.random().toString(36).substring(7);
    this.setStatus({
      status,
      fsid: identifier,
      fsElement: null
    });
    return identifier;
  }

  removeCursorStatus(identifier) {
    /**
     * We want to search for the element based on identifier, because the actual element
     * inserted may have been done so as raw HTML, and not via an element pointer.
     */
    const elements = this.options.getElementsBySelector("#".concat(identifier));

    if (elements.length > 0) {
      elements[0].remove();
    }
  }

  insertElementNearElement(domNodeToInsert, inVicinityOfElement) {
    const processedElement = this.options.preprocessElement(domNodeToInsert);
    let insertionType = 'child'; // <figure> tags cannot be nested inside p tags.

    if (inVicinityOfElement && processedElement.tagName.toLowerCase() == 'figure') {
      // If we have a p ancestor, we need to get out.
      const paragraphAncestor = inVicinityOfElement.closest('p');

      if (paragraphAncestor) {
        /**
         * p tags cannot be nested in other p tags, so if we found one, we know its parent isn't and doesn't belong to a p tag.
         * Add the new one right after paragraphAncestor.
         */
        inVicinityOfElement = paragraphAncestor;
        insertionType = 'afterend';
      }
    }

    this.options.insertElement(processedElement, inVicinityOfElement, insertionType);
    return processedElement;
  }

}
;// CONCATENATED MODULE: ./src/textExpander.ts
class TextExpander {
  constructor(options) {
    this.options = options;
  }

  onKeyUp(_ref) {
    let {
      isEnter,
      isPaste,
      isSpace
    } = _ref;

    if (isEnter || isPaste || isSpace) {
      this.searchPatterns({
        searchPreviousLine: isEnter !== null && isEnter !== void 0 ? isEnter : false
      });
    }
  }

  searchPatterns() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      searchPreviousLine: false
    };
    const text = params.searchPreviousLine ? this.options.getPreviousLineText() : this.options.getCurrentLineText();

    for (const pattern of this.options.patterns) {
      const match = pattern.regex.exec(text);
      if (!match) continue;
      const matchedText = match[0];

      if (matchedText) {
        const replaceWith = pattern.callback(matchedText);
        this.replaceSelection(pattern.regex, replaceWith, params.searchPreviousLine);
      }
    }
  }

  replaceSelection(regex, replacement, searchPreviousLine) {
    var _this$options, _this$options2;

    if ((_this$options = this.options) !== null && _this$options !== void 0 && _this$options.beforeExpand) {
      this.options.beforeExpand();
    }

    this.options.replaceText({
      regex,
      replacement,
      searchPreviousLine
    });

    if ((_this$options2 = this.options) !== null && _this$options2 !== void 0 && _this$options2.afterExpand) {
      var _this$options3;

      (_this$options3 = this.options) === null || _this$options3 === void 0 ? void 0 : _this$options3.afterExpand();
    }
  }

}
;// CONCATENATED MODULE: ./src/fileSafeHtml.ts
/**
 * Remove matching <p> tags if present.
 * Also capable of matching adjacent [fsSyntax][fsSyntax]
 */
const FileSafeSyntaxPattern = /(<p>)?\[FileSafe[^\]]*\](<\/p>)?/g;
/**
 * Given an HTML string that includes substrings matching `FileSafeSyntaxPattern`,
 * replace occurences with ghost div element <fileSafe uuid='123'>
 */

const expandedFileSafeSyntax = html => {
  return html.replace(FileSafeSyntaxPattern, match => {
    return fileSafeSyntaxToHtmlElement(match);
  });
};
const removeFileSafeSyntaxFromHtml = html => {
  return html.replace(FileSafeSyntaxPattern, _match => {
    return '';
  });
};
const insertionSyntaxForFileDescriptor = descriptor => {
  return "[FileSafe:".concat(descriptor.uuid, ":").concat(descriptor.content.fileName, "]");
};
const fileSafeSyntaxToHtmlElement = syntax => {
  // Remove paragraph tags
  syntax = syntax.replace('<p>', '');
  syntax = syntax.replace('</p>', ''); // Remove brackets

  syntax = syntax.replace('[', '').replace(']', '');
  const components = syntax.split(':');
  const uuid = components[1];
  const name = components[2];
  const size = components[3];
  let sizeString = '';

  if (size) {
    const dimensions = size.split('x');
    sizeString = "width=".concat(dimensions[0], " height=").concat(dimensions[1]);
  }
  /**
   * We use a p tag here because if we try something custom, like `fileSafe` tag, the editor will automatically
   * wrap it in a p tag, causing littered p tags remaining in the plaintext representation.
   */


  return "<p fsplaceholder=true style='display: none;' fscollapsable=true ghost=true fsid='".concat(uuid, "' fsname='").concat(name, "' ").concat(sizeString, "></p>");
};
/**
 * Given a rendered HTML string, replace all <fileSafe> items with [FileSafe:UUID] plaintext items.
 * Also, for any elements that have the 'ghost' attribute, remove it from the resulting string.
 */

const collapseFileSafeSyntax = html => {
  const domCopy = new DOMParser().parseFromString(html, 'text/html'); // Elements that have fscollapsable means they should be collapsed to plain syntax.

  const mediaElements = domCopy.querySelectorAll('*[fscollapsable]');

  for (const file of mediaElements) {
    const uuid = file.getAttribute('fsid');
    const name = file.getAttribute('fsname');
    const width = file.getAttribute('width');
    const height = file.getAttribute('height');
    const components = ['FileSafe', uuid, name];

    if (width && height) {
      const size = "".concat(width, "x").concat(height);
      components.push(size);
    }

    const fsSyntax = "<p>[".concat(components.join(':'), "]</p>");
    file.insertAdjacentHTML('afterend', fsSyntax);
    file.remove();
  } // Remove any remaining ghost elements.


  const ghosts = domCopy.querySelectorAll('*[ghost]');
  ghosts.forEach(ghost => ghost.remove());
  return domCopy.body.innerHTML;
};
;// CONCATENATED MODULE: ./src/editorKit.ts
function editorKit_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class EditorKitBase {
  constructor(delegate, options) {
    this.delegate = delegate;
    this.options = options;

    editorKit_defineProperty(this, "fileIdsPendingAssociation", []);

    editorKit_defineProperty(this, "componentRelay", void 0);

    editorKit_defineProperty(this, "fileLoader", void 0);

    editorKit_defineProperty(this, "textExpander", void 0);

    editorKit_defineProperty(this, "fileSafeLoading", void 0);

    editorKit_defineProperty(this, "fileSafeClass", void 0);

    editorKit_defineProperty(this, "fileSafeInstance", void 0);

    editorKit_defineProperty(this, "note", void 0);

    editorKit_defineProperty(this, "ignoreNextTextChange", void 0);

    editorKit_defineProperty(this, "needsFileSafeElementLoad", void 0);

    editorKit_defineProperty(this, "previousText", void 0);

    this.connectToBridge();

    if (this.options.supportsFileSafe) {
      this.fileSafeLoading = this.importFileSafe();
    }
  }

  connectToBridge() {
    const {
      coallesedSaving,
      coallesedSavingDelay,
      mode,
      supportsFileSafe
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
      onThemesChange: this.delegate.onThemesChange
    });
    this.componentRelay.streamContextItem(async note => {
      /**
       * TODO: If note has changed, release previous temp object URLs.
       */
      let isNewNoteLoad = true;

      if (this.note && this.note.uuid == note.uuid) {
        isNewNoteLoad = false;
      }

      const previousNote = this.note;

      if (supportsFileSafe) {
        const itemClass = this.fileSafeClass.getSFItemClass();
        this.note = new itemClass(note);
        this.fileSafeInstance.setCurrentNote(this.note);
      } else {
        this.note = note;
      } // Only update UI on non-metadata updates.


      if (note.isMetadataUpdate) {
        return;
      }

      let text = note.content.text;
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
      /**
       * Set before expanding. 
       * We want this value to always be the collapsed value
       */


      this.previousText = text;

      if (supportsFileSafe) {
        /**
         * We want to expand any filesafe syntax in the text,
         * but only after the text has been inserted.
         * (Will be checked on editor change callback)
         */
        this.needsFileSafeElementLoad = true;
        text = expandedFileSafeSyntax(text);
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

  async importFileSafe() {
    return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 695, 23)).then(result => {
      this.fileSafeClass = result.default;
      this.configureFileSafe();
      return this.fileSafeInstance;
    });
  }

  configureFileSafe() {
    const requiredDelegateFunctions = ['getCurrentLineText', 'getPreviousLineText', 'replaceText', 'getElementsBySelector', 'insertElement', 'preprocessElement', 'insertRawText'];

    for (const functionName of requiredDelegateFunctions) {
      if (!this.delegate[functionName]) {
        throw Error("Missing ".concat(functionName, " delegate function."));
      }
    }

    this.fileSafeInstance = new this.fileSafeClass({
      componentManager: this.componentRelay
    });
    this.fileSafeInstance.addDataChangeObserver(() => {
      // Reload UI by querying FileSafe for changes...
      const allFileDescriptors = this.fileSafeInstance.getAllFileDescriptors();

      if (this.note && this.fileIdsPendingAssociation.length > 0) {
        let hasMatch = false;

        for (const uuid of this.fileIdsPendingAssociation.slice()) {
          const descriptor = allFileDescriptors.find(candidate => candidate.uuid == uuid);

          if (!descriptor) {
            continue;
          }

          hasMatch = true;
          this.fileIdsPendingAssociation.splice(this.fileIdsPendingAssociation.indexOf(uuid), 1);
          const syntax = insertionSyntaxForFileDescriptor(descriptor);
          this.delegate.insertRawText(syntax);
        }

        if (hasMatch) {
          this.textExpander.searchPatterns();
        }
      }

      if (allFileDescriptors.length > 0) {
        this.fileLoader.loadFileSafeElements();
      }
    });
    this.fileSafeInstance.addNewFileDescriptorHandler(fileDescriptor => {
      /**
       * Called when a new file is uploaded. We'll wait until the bridge acknowledges
       * receipt of this item, and then it will be added to the editor.
       */
      this.fileIdsPendingAssociation.push(fileDescriptor.uuid);
    });
    this.fileLoader = new FileLoader({
      fileSafeInstance: this.fileSafeInstance,
      getElementsBySelector: this.delegate.getElementsBySelector,
      insertElement: this.delegate.insertElement,
      preprocessElement: this.delegate.preprocessElement
    });
    this.textExpander = new TextExpander({
      afterExpand: () => this.fileLoader.loadFileSafeElements(),
      getCurrentLineText: this.delegate.getCurrentLineText,
      getPreviousLineText: this.delegate.getPreviousLineText,
      replaceText: this.delegate.replaceText,
      patterns: [{
        regex: FileSafeSyntaxPattern,
        callback: matchedText => {
          return expandedFileSafeSyntax(matchedText);
        }
      }]
    });
  }
  /**
   * Gets the FileSafe class.
   * @returns FileSafe class.
   */


  async getFileSafe() {
    if (!this.fileSafeInstance && this.fileSafeLoading) {
      return this.fileSafeLoading;
    }

    return this.importFileSafe();
  }
  /**
   * Called by consumer when the editor has a keyup event.
   */


  onEditorKeyUp(_ref) {
    let {
      isSpace,
      isEnter
    } = _ref;
    this.textExpander.onKeyUp({
      isSpace,
      isEnter
    });
  }
  /**
   * Called by consumer when user pastes into editor.
   */


  onEditorPaste() {
    this.textExpander.onKeyUp({
      isPaste: true
    });
  }
  /**
   * Called by consumer when the editor has a change/input event.
   */


  onEditorValueChanged(text) {
    const {
      mode,
      supportsFileSafe
    } = this.options;

    if (this.needsFileSafeElementLoad) {
      this.needsFileSafeElementLoad = false;
      this.fileLoader.loadFileSafeElements();
    }

    if (this.ignoreNextTextChange) {
      this.ignoreNextTextChange = false;
      return;
    }

    if (supportsFileSafe) {
      text = collapseFileSafeSyntax(text);
      /**
       * Change events may be triggered several times when expanding filesafe syntax.
       * Ultimately, while the visual layer is changing a lot, the underlying text layer,
       * after being collapsed, will not change. So we'll compare the previous html to new collapsed html before continuing.
       */

      const sameText = this.previousText == text;

      if (sameText) {
        return;
      }
    }

    this.previousText = text;

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
          let preview = removeFileSafeSyntaxFromHtml(text);
          preview = truncateString(htmlToText(preview));
          /**
           * If the preview has no length due to either being an empty note, or having just 1 FileSafe file
           * that is stripped above, then we don't want to set to empty string, otherwise SN app will default to content
           * for preview. We'll set a whitespace preview instead so SN doesn't go based on innate content.
           */

          note.content.preview_plain = preview.length > 0 ? preview : ' ';
        } else {
          note.content.preview_plain = text;
        } // We're only using plain in this block.


        note.content.preview_html = null;
      }
    });
  }
  /**
   * Whether or not FileSafe is configured with integrations and keys, and can handle file uploads.
   * If not, user should open files modal and configure FileSafe.
   */


  canUploadFiles() {
    const credentials = this.fileSafeInstance.getAllCredentials();
    const integrations = this.fileSafeInstance.getAllIntegrations();
    return credentials.length > 0 && integrations.length > 0;
  }
  /**
   * Encrypts and Uploads a Javascript file object to FileSafe.
   * @param file The file to upload.
   * @returns A file descriptor if successful.
   */


  async uploadJSFileObject(file) {
    const cursorIdentifier = this.fileLoader.insertStatusAtCursor('Processing file...');
    return this.fileSafeInstance.encryptAndUploadJavaScriptFileObject(file).then(() => {
      this.fileLoader.removeCursorStatus(cursorIdentifier);
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

}
})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=editor-kit.js.map