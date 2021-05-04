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

!function(e,t){ true?module.exports=t():0}(self,(function(){return(()=>{"use strict";var e={d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};let s,n,i;var o;e.d(t,{default:()=>C}),function(e){e.SetSize="set-size",e.StreamItems="stream-items",e.StreamContextItem="stream-context-item",e.SaveItems="save-items",e.SelectItem="select-item",e.AssociateItem="associate-item",e.DeassociateItem="deassociate-item",e.ClearSelection="clear-selection",e.CreateItem="create-item",e.CreateItems="create-items",e.DeleteItems="delete-items",e.SetComponentData="set-component-data",e.InstallLocalComponent="install-local-component",e.ToggleActivateComponent="toggle-activate-component",e.RequestPermissions="request-permissions",e.PresentConflictResolution="present-conflict-resolution",e.DuplicateItem="duplicate-item",e.ComponentRegistered="component-registered",e.ActivateThemes="themes",e.Reply="reply",e.SaveSuccess="save-success",e.SaveError="save-error",e.ThemesActivated="themes-activated"}(s||(s={})),function(e){e[e.Web=1]="Web",e[e.Desktop=2]="Desktop",e[e.Mobile=3]="Mobile"}(n||(n={})),function(e){e.Any="*",e.Item="SF|Item",e.RootKey="SN|RootKey|NoSync",e.ItemsKey="SN|ItemsKey",e.EncryptedStorage="SN|EncryptedStorage",e.Note="Note",e.Tag="Tag",e.SmartTag="SN|SmartTag",e.Component="SN|Component",e.Editor="SN|Editor",e.ActionsExtension="Extension",e.UserPrefs="SN|UserPreferences",e.Privileges="SN|Privileges",e.HistorySession="SN|HistorySession",e.Theme="SN|Theme",e.Mfa="SF|MFA",e.ServerExtension="SF|Extension",e.FilesafeCredentials="SN|FileSafe|Credentials",e.FilesafeFileMetadata="SN|FileSafe|FileMetadata",e.FilesafeIntegration="SN|FileSafe|Integration",e.ExtensionRepo="SN|ExtensionRepo"}(i||(i={}));var a=new Uint8Array(16);function r(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(a)}const m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,c=function(e){return"string"==typeof e&&m.test(e)};for(var l=[],d=0;d<256;++d)l.push((d+256).toString(16).substr(1));const p=function(e,t,s){var n=(e=e||{}).random||(e.rng||r)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){s=s||0;for(var i=0;i<16;++i)t[s+i]=n[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!c(s))throw TypeError("Stringified UUID is invalid");return s}(n)},h=e=>{var t;const s={[n.Web]:"web",[n.Desktop]:"desktop",[n.Mobile]:"mobile"};return null!==(t=s[e])&&void 0!==t?t:s[n.Web]},g=()=>{};class u{static get isSupported(){return!(!window.console&&!console)}static get info(){return u.isSupported&&this.enabled?console.log.bind(console):g}static get error(){return u.isSupported?console.error.bind(console):g}}var v,f,S;function y(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function b(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?y(Object(s),!0).forEach((function(t){I(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function I(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}(f="enabled")in(v=u)?Object.defineProperty(v,f,{value:false,enumerable:!0,configurable:!0,writable:!0}):v[f]=false,function(e){e.Component="component"}(S||(S={}));class C{constructor(e){if(I(this,"contentWindow",void 0),I(this,"initialPermissions",void 0),I(this,"onReadyCallback",void 0),I(this,"component",{activeThemes:[],acceptsThemes:!0}),I(this,"sentMessages",[]),I(this,"messageQueue",[]),I(this,"lastStreamedItem",void 0),I(this,"pendingSaveItems",void 0),I(this,"pendingSaveTimeout",void 0),I(this,"pendingSaveParams",void 0),I(this,"coallesedSaving",!1),I(this,"coallesedSavingDelay",250),I(this,"messageHandler",void 0),!e||!e.targetWindow)throw new Error("contentWindow must be a valid Window object.");this.contentWindow=e.targetWindow,this.processParameters(e),this.registerMessageHandler()}processParameters(e){var t;const{initialPermissions:s,options:n,onReady:i}=e;var o;s&&s.length>0&&(this.initialPermissions=s),null!=n&&n.coallesedSaving&&(this.coallesedSaving=n.coallesedSaving),null!=n&&n.coallesedSavingDelay&&(this.coallesedSavingDelay=n.coallesedSavingDelay),null!=n&&n.acceptsThemes&&(this.component.acceptsThemes=null===(o=null==n?void 0:n.acceptsThemes)||void 0===o||o),i&&(this.onReadyCallback=i),u.enabled=null!==(t=null==n?void 0:n.debug)&&void 0!==t&&t}deinit(){this.onReadyCallback=void 0,this.component={acceptsThemes:!0,activeThemes:[]},this.messageQueue=[],this.sentMessages=[],this.lastStreamedItem=void 0,this.pendingSaveItems=void 0,this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0,this.messageHandler&&(this.contentWindow.document.removeEventListener("message",this.messageHandler),this.contentWindow.removeEventListener("message",this.messageHandler))}registerMessageHandler(){this.messageHandler=e=>{if(u.info("Components API Message received:",e.data),document.referrer&&new URL(document.referrer).origin!==new URL(e.origin).origin)return;if(this.component.origin){if(e.origin!==this.component.origin)return}else this.component.origin=e.origin;const{data:t}=e,s=(e=>{if("string"!=typeof e)return!1;try{const t=JSON.parse(e),s=Object.prototype.toString.call(t);return"[object Object]"===s||"[object Array]"===s}catch(e){return!1}})(t)?JSON.parse(t):t;s?this.handleMessage(s):u.error("Invalid data received. Skipping...")},this.contentWindow.document.addEventListener("message",this.messageHandler,!1),this.contentWindow.addEventListener("message",this.messageHandler,!1),u.info("Waiting for messages...")}handleMessage(e){switch(e.action){case s.ComponentRegistered:this.component.sessionKey=e.sessionKey,e.componentData&&(this.component.data=e.componentData),this.onReady(e.data),u.info("Component successfully registered with payload:",e);break;case s.ActivateThemes:this.activateThemes(e.data.themes);break;default:{var t,n;if(!e.original)return;const s=null===(t=this.sentMessages)||void 0===t?void 0:t.filter((t=>{var s;return t.messageId===(null===(s=e.original)||void 0===s?void 0:s.messageId)}))[0];if(!s){const e=this.contentWindow.document.title,t=("The extension '".concat(e,"' is attempting to communicate with Standard Notes, ")+"but an error is preventing it from doing so. Please restart this extension and try again.").replace("  "," ");return void u.info(t)}null==s||null===(n=s.callback)||void 0===n||n.call(s,e.data);break}}}onReady(e){this.component.environment=e.environment,this.component.platform=e.platform,this.component.uuid=e.uuid,this.initialPermissions&&this.initialPermissions.length>0&&this.requestPermissions(this.initialPermissions);for(const e of this.messageQueue)this.postMessage(e.action,e.data,e.callback);this.messageQueue=[],u.info("Data passed to onReady:",e),this.activateThemes(e.activeThemeUrls||[]),this.postMessage(s.ThemesActivated,{}),this.onReadyCallback&&this.onReadyCallback()}getSelfComponentUUID(){return this.component.uuid}isRunningInDesktopApplication(){return this.component.environment===h(n.Desktop)}isRunningInMobileApplication(){return this.component.environment===h(n.Mobile)}getComponentDataValueForKey(e){if(this.component.data)return this.component.data[e]}setComponentDataValueForKey(e,t){if(!this.component.data)throw new Error("The component has not been initialized.");if(!e||e&&0===e.length)throw new Error("The key for the data value should be a valid string.");this.component.data=b(b({},this.component.data),{},{[e]:t}),this.postMessage(s.SetComponentData,{componentData:this.component.data})}clearComponentData(){this.component.data={},this.postMessage(s.SetComponentData,{componentData:this.component.data})}postMessage(e,t,s){if(!this.component.sessionKey)return void this.messageQueue.push({action:e,data:t,api:S.Component,callback:s});const n={action:e,data:t,messageId:this.generateUUID(),sessionKey:this.component.sessionKey,api:S.Component},i=JSON.parse(JSON.stringify(n));let o;i.callback=s,this.sentMessages.push(i),o=this.isRunningInMobileApplication()?JSON.stringify(n):n,u.info("Posting message:",o),this.contentWindow.parent.postMessage(o,this.component.origin)}requestPermissions(e,t){this.postMessage(s.RequestPermissions,{permissions:e},(()=>{t&&t()}))}activateThemes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!this.component.acceptsThemes)return;u.info("Incoming themes:",e);const{activeThemes:t}=this.component;if(t&&t.sort().toString()==e.sort().toString())return;let s=e;const n=[];for(const i of t)e.includes(i)?s=s.filter((e=>e!==i)):n.push(i);u.info("Deactivating themes:",n),u.info("Activating themes:",s);for(const e of n)this.deactivateTheme(e);this.component.activeThemes=e;for(const e of s){if(!e)continue;const t=this.contentWindow.document.createElement("link");t.id=btoa(e),t.href=e,t.type="text/css",t.rel="stylesheet",t.media="screen,print",t.className="custom-theme",this.contentWindow.document.getElementsByTagName("head")[0].appendChild(t)}}themeElementForUrl(e){return Array.from(this.contentWindow.document.getElementsByClassName("custom-theme")).slice().find((t=>t.id==btoa(e)))}deactivateTheme(e){const t=this.themeElementForUrl(e);t&&t.parentNode&&(t.setAttribute("disabled","true"),t.parentNode.removeChild(t))}generateUUID(){return p()}get platform(){return this.component.platform}get environment(){return this.component.environment}streamItems(e,t){this.postMessage(s.StreamItems,{content_types:e},(e=>{t(e.items)}))}streamContextItem(e){this.postMessage(s.StreamContextItem,{},(t=>{const{item:s}=t;(!this.lastStreamedItem||this.lastStreamedItem.uuid!==s.uuid)&&this.pendingSaveTimeout&&(clearTimeout(this.pendingSaveTimeout),this._performSavingOfItems(this.pendingSaveParams),this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0),this.lastStreamedItem=s,e(this.lastStreamedItem)}))}selectItem(e){this.postMessage(s.SelectItem,{item:this.jsonObjectForItem(e)})}clearSelection(){this.postMessage(s.ClearSelection,{content_type:i.Tag})}createItem(e,t){this.postMessage(s.CreateItem,{item:this.jsonObjectForItem(e)},(e=>{let{item:s}=e;!s&&e.items&&e.items.length>0&&(s=e.items[0]),this.associateItem(s),t&&t(s)}))}createItems(e,t){const n=e.map((e=>this.jsonObjectForItem(e)));this.postMessage(s.CreateItems,{items:n},(e=>{t&&t(e.items)}))}associateItem(e){this.postMessage(s.AssociateItem,{item:this.jsonObjectForItem(e)})}deassociateItem(e){this.postMessage(s.DeassociateItem,{item:this.jsonObjectForItem(e)})}deleteItem(e,t){this.deleteItems([e],t)}deleteItems(e,t){const n={items:e.map((e=>this.jsonObjectForItem(e)))};this.postMessage(s.DeleteItems,n,(e=>{t&&t(e)}))}sendCustomEvent(e,t,s){this.postMessage(e,t,(e=>{s&&s(e)}))}saveItem(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.saveItems([e],t,s)}saveItemWithPresave(e,t,s){this.saveItemsWithPresave([e],t,s)}saveItemsWithPresave(e,t,s){this.saveItems(e,s,!1,t)}_performSavingOfItems(e){let{items:t,presave:n,callback:i}=e;n&&n();const o=[];for(const e of t)o.push(this.jsonObjectForItem(e));this.postMessage(s.SaveItems,{items:o},(()=>{i&&i()}))}saveItems(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3?arguments[3]:void 0;if(this.pendingSaveItems||(this.pendingSaveItems=[]),this.coallesedSaving&&!s){this.pendingSaveTimeout&&clearTimeout(this.pendingSaveTimeout);const s=e.map((e=>e.uuid)),i=this.pendingSaveItems.filter((e=>!s.includes(e.uuid)));this.pendingSaveItems=i.concat(e),this.pendingSaveParams={items:this.pendingSaveItems,presave:n,callback:t},this.pendingSaveTimeout=setTimeout((()=>{this._performSavingOfItems(this.pendingSaveParams),this.pendingSaveItems=[],this.pendingSaveTimeout=void 0,this.pendingSaveParams=null}),this.coallesedSavingDelay)}else this._performSavingOfItems({items:e,presave:n,callback:t})}setSize(e,t){this.postMessage(s.SetSize,{type:"container",width:e,height:t})}jsonObjectForItem(e){const t=Object.assign({},e);return t.children=null,t.parent=null,t}getItemAppDataValue(e,t){return e.getAppDomainValue(t)}}return t.default})()}));
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

// UNUSED EXPORTS: EditorKit

// EXTERNAL MODULE: ./node_modules/@standardnotes/component-relay/dist/dist.js
var dist = __webpack_require__(156);
;// CONCATENATED MODULE: ./src/editorKit.ts
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class EditorKitBase {
  constructor(delegate, options) {
    this.delegate = delegate;
    this.options = options;

    _defineProperty(this, "fileIdsPendingAssociation", []);

    _defineProperty(this, "componentRelay", void 0);

    _defineProperty(this, "fileLoader", void 0);

    _defineProperty(this, "textExpander", void 0);

    _defineProperty(this, "fileSafeLoading", void 0);

    _defineProperty(this, "fileSafeClass", void 0);

    _defineProperty(this, "fileSafeInstance", void 0);

    _defineProperty(this, "note", void 0);

    _defineProperty(this, "ignoreNextTextChange", void 0);

    _defineProperty(this, "needsFileSafeElementLoad", void 0);

    _defineProperty(this, "previousText", void 0);

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
    this.componentRelay = new ComponentRelay({
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
      }
    });
    this.componentRelay.streamContextItem(note => {
      /**
       * TODO: If note has changed, release previous temp object URLs.
       */
      let isNewNoteLoad = true;

      if (this.note && this.note.uuid == note.uuid) {
        isNewNoteLoad = false;
      }

      if (supportsFileSafe) {
        const itemClass = this.fileSafeClass.getSFItemClass();
        this.note = new itemClass(note);
        this.fileSafeInstance.setCurrentNote(this.note);
      } else {
        this.note = note;
      } // Only update UI on non-metadata updates.


      if (note.isMetadataUpdate) return;
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

      this.delegate.setEditorRawText(text);

      if (isNewNoteLoad) {
        this.delegate.clearUndoHistory();
      }
    });
  }

  async importFileSafe() {
    if (!this.options.supportsFileSafe) {
      return;
    }

    return Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 695, 23)).then(result => {
      this.fileSafeClass = result.default;
      this.configureFileSafe();
      return this.fileSafeInstance;
    });
  }

  configureFileSafe() {
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
      afterExpand: () => {
        this.fileLoader.loadFileSafeElements();
      },
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

  async getFileSafe() {
    if (!this.fileSafeInstance && this.fileSafeLoading) {
      return this.fileSafeLoading;
    }

    return this.importFileSafe();
  }

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

  onEditorPaste() {
    this.textExpander.onKeyUp({
      isPaste: true
    });
  }

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
      if (sameText) return;
    }

    this.previousText = text;
    const note = this.note;
    if (!note) return;
    this.componentRelay.saveItemWithPresave(note, null, () => {
      note.content.text = text;

      if (this.delegate.generateCustomPreview) {
        const result = this.delegate.generateCustomPreview(text);

        if (result.html) {
          note.content.preview_html = result.html;
        } else if (result.plain) {
          note.content.preview_plain = result.plain;
        }
      } else {
        if (mode == 'html') {
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

  canUploadFiles() {
    const credentials = this.fileSafeInstance.getAllCredentials();
    const integrations = this.fileSafeInstance.getAllIntegrations();
    return credentials.length > 0 && integrations.length > 0;
  }

  async uploadJSFileObject(file) {
    const cursorIdentifier = this.fileLoader.insertStatusAtCursor('Processing file...');
    return this.fileSafeInstance.encryptAndUploadJavaScriptFileObject(file).then(() => {
      this.fileLoader.removeCursorStatus(cursorIdentifier);
    });
  }

}
;// CONCATENATED MODULE: ./src/index.ts


})();

__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=editorkit.js.map