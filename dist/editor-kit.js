!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("filesafe-js")):"function"==typeof define&&define.amd?define("EditorKit",["filesafe-js"],t):"object"==typeof exports?exports.EditorKit=t(require("filesafe-js")):e.EditorKit=t(e["filesafe-js"])}(window,(function(e){return function(e){function t(t){for(var n,i,a=t[0],s=t[1],o=0,c=[];o<a.length;o++)i=a[o],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&c.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={0:0,1:0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var a=window.webpackJsonpEditorKit=window.webpackJsonpEditorKit||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var l=s;return i(i.s=1)}([function(e,t,n){self,e.exports=(()=>{"use strict";var e={175:(e,t,n)=>{let r,i,a;var s;n.d(t,{default:()=>x}),function(e){e.SetSize="set-size",e.StreamItems="stream-items",e.StreamContextItem="stream-context-item",e.SaveItems="save-items",e.SelectItem="select-item",e.AssociateItem="associate-item",e.DeassociateItem="deassociate-item",e.ClearSelection="clear-selection",e.CreateItem="create-item",e.CreateItems="create-items",e.DeleteItems="delete-items",e.SetComponentData="set-component-data",e.InstallLocalComponent="install-local-component",e.ToggleActivateComponent="toggle-activate-component",e.RequestPermissions="request-permissions",e.PresentConflictResolution="present-conflict-resolution",e.DuplicateItem="duplicate-item",e.ComponentRegistered="component-registered",e.ActivateThemes="themes",e.Reply="reply",e.SaveSuccess="save-success",e.SaveError="save-error"}(r||(r={})),function(e){e[e.Web=1]="Web",e[e.Desktop=2]="Desktop",e[e.Mobile=3]="Mobile"}(i||(i={})),function(e){e.Any="*",e.Item="SF|Item",e.RootKey="SN|RootKey|NoSync",e.ItemsKey="SN|ItemsKey",e.EncryptedStorage="SN|EncryptedStorage",e.Note="Note",e.Tag="Tag",e.SmartTag="SN|SmartTag",e.Component="SN|Component",e.Editor="SN|Editor",e.ActionsExtension="Extension",e.UserPrefs="SN|UserPreferences",e.Privileges="SN|Privileges",e.HistorySession="SN|HistorySession",e.Theme="SN|Theme",e.Mfa="SF|MFA",e.ServerExtension="SF|Extension",e.FilesafeCredentials="SN|FileSafe|Credentials",e.FilesafeFileMetadata="SN|FileSafe|FileMetadata",e.FilesafeIntegration="SN|FileSafe|Integration",e.ExtensionRepo="SN|ExtensionRepo"}(a||(a={}));var o=new Uint8Array(16);function l(){if(!s&&!(s="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(o)}const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,u=function(e){return"string"==typeof e&&c.test(e)};for(var f=[],m=0;m<256;++m)f.push((m+256).toString(16).substr(1));const p=function(e,t,n){var r=(e=e||{}).random||(e.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!u(n))throw TypeError("Stringified UUID is invalid");return n}(r)},d=e=>{var t;const n={[i.Web]:"web",[i.Desktop]:"desktop",[i.Mobile]:"mobile"};return null!==(t=n[e])&&void 0!==t?t:n[i.Web]},h=()=>{};class g{static get isSupported(){return!(!window.console&&!console)}static get info(){return g.isSupported&&this.enabled?console.log.bind(console):h}static get error(){return console.error.bind(console)}}var v,y,b;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}(y="enabled")in(v=g)?Object.defineProperty(v,y,{value:!1,enumerable:!0,configurable:!0,writable:!0}):v[y]=!1,function(e){e.Component="component"}(b||(b={}));class x{constructor(e){if(E(this,"contentWindow",void 0),E(this,"initialPermissions",void 0),E(this,"onReadyCallback",void 0),E(this,"component",{activeThemes:[],acceptsThemes:!0}),E(this,"sentMessages",[]),E(this,"messageQueue",[]),E(this,"lastStreamedItem",void 0),E(this,"pendingSaveItems",void 0),E(this,"pendingSaveTimeout",void 0),E(this,"pendingSaveParams",void 0),E(this,"coallesedSaving",!1),E(this,"coallesedSavingDelay",250),E(this,"messageHandler",void 0),!e||!e.targetWindow)throw new Error("contentWindow must be a valid Window object.");this.contentWindow=e.targetWindow,this.processParameters(e),this.registerMessageHandler()}processParameters(e){var t;const{initialPermissions:n,options:r,onReady:i}=e;var a;n&&n.length>0&&(this.initialPermissions=n),(null==r?void 0:r.coallesedSaving)&&(this.coallesedSaving=r.coallesedSaving),(null==r?void 0:r.coallesedSavingDelay)&&(this.coallesedSavingDelay=r.coallesedSavingDelay),(null==r?void 0:r.acceptsThemes)&&(this.component.acceptsThemes=null===(a=null==r?void 0:r.acceptsThemes)||void 0===a||a),i&&(this.onReadyCallback=i),g.enabled=null!==(t=null==r?void 0:r.debug)&&void 0!==t&&t}deinit(){this.onReadyCallback=void 0,this.component={acceptsThemes:!0,activeThemes:[]},this.messageQueue=[],this.sentMessages=[],this.lastStreamedItem=void 0,this.pendingSaveItems=void 0,this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0,this.messageHandler&&(this.contentWindow.document.removeEventListener("message",this.messageHandler),this.contentWindow.removeEventListener("message",this.messageHandler))}registerMessageHandler(){this.messageHandler=e=>{if(g.info("Components API Message received:",e.data),document.referrer&&new URL(document.referrer).origin!==new URL(e.origin).origin)return;if(this.component.origin){if(e.origin!==this.component.origin)return}else this.component.origin=e.origin;const{data:t}=e,n=(e=>{if("string"!=typeof e)return!1;try{const t=JSON.parse(e),n=Object.prototype.toString.call(t);return"[object Object]"===n||"[object Array]"===n}catch(e){return!1}})(t)?JSON.parse(t):t;n?this.handleMessage(n):g.error("Invalid data received. Skipping...")},this.contentWindow.document.addEventListener("message",this.messageHandler,!1),this.contentWindow.addEventListener("message",this.messageHandler,!1),g.info("Waiting for messages...")}handleMessage(e){switch(e.action){case r.ComponentRegistered:this.component.sessionKey=e.sessionKey,e.componentData&&(this.component.data=e.componentData),this.onReady(e.data),g.info("Component successfully registered with payload:",e);break;case r.ActivateThemes:this.activateThemes(e.data.themes);break;default:{var t;if(!e.original)return;const n=null===(t=this.sentMessages)||void 0===t?void 0:t.filter(t=>{var n;return t.messageId===(null===(n=e.original)||void 0===n?void 0:n.messageId)})[0];if(!n)return void g.error("This extension is attempting to communicate with Standard Notes, but an error is preventing it from doing so. Please restart this extension and try again.");n.callback&&n.callback(e.data);break}}}onReady(e){this.component.environment=e.environment,this.component.platform=e.platform,this.component.uuid=e.uuid,this.initialPermissions&&this.initialPermissions.length>0&&this.requestPermissions(this.initialPermissions);for(const e of this.messageQueue)this.postMessage(e.action,e.data,e.callback);this.messageQueue=[],g.info("Data passed to onReady:",e),this.activateThemes(e.activeThemeUrls||[]),this.onReadyCallback&&this.onReadyCallback()}getSelfComponentUUID(){return this.component.uuid}isRunningInDesktopApplication(){return this.component.environment===d(i.Desktop)}isRunningInMobileApplication(){return this.component.environment===d(i.Mobile)}getComponentDataValueForKey(e){if(this.component.data)return this.component.data[e]}setComponentDataValueForKey(e,t){if(!this.component.data)throw new Error("The component has not been initialized.");if(!e||e&&0===e.length)throw new Error("The key for the data value should be a valid string.");this.component.data=w(w({},this.component.data),{},{[e]:t}),this.postMessage(r.SetComponentData,{componentData:this.component.data})}clearComponentData(){this.component.data={},this.postMessage(r.SetComponentData,{componentData:this.component.data})}postMessage(e,t,n){if(!this.component.sessionKey)return void this.messageQueue.push({action:e,data:t,api:b.Component,callback:n});const r={action:e,data:t,messageId:this.generateUUID(),sessionKey:this.component.sessionKey,api:b.Component},i=JSON.parse(JSON.stringify(r));let a;i.callback=n,this.sentMessages.push(i),a=this.isRunningInMobileApplication()?JSON.stringify(r):r,g.info("Posting message:",a),this.contentWindow.parent.postMessage(a,this.component.origin)}requestPermissions(e,t){this.postMessage(r.RequestPermissions,{permissions:e},()=>{t&&t()})}activateThemes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!this.component.acceptsThemes)return;g.info("Incoming themes:",e);const{activeThemes:t}=this.component;if(t&&t.sort().toString()==e.sort().toString())return;let n=e;const r=[];for(const i of t)e.includes(i)?n=n.filter(e=>e!==i):r.push(i);g.info("Deactivating themes:",r),g.info("Activating themes:",n);for(const e of r)this.deactivateTheme(e);this.component.activeThemes=e;for(const e of n){if(!e)continue;const t=this.contentWindow.document.createElement("link");t.id=btoa(e),t.href=e,t.type="text/css",t.rel="stylesheet",t.media="screen,print",t.className="custom-theme",this.contentWindow.document.getElementsByTagName("head")[0].appendChild(t)}}themeElementForUrl(e){return Array.from(this.contentWindow.document.getElementsByClassName("custom-theme")).slice().find(t=>t.id==btoa(e))}deactivateTheme(e){const t=this.themeElementForUrl(e);t&&t.parentNode&&(t.setAttribute("disabled","true"),t.parentNode.removeChild(t))}generateUUID(){return p()}get platform(){return this.component.platform}get environment(){return this.component.environment}streamItems(e,t){this.postMessage(r.StreamItems,{content_types:e},e=>{t(e.items)})}streamContextItem(e){this.postMessage(r.StreamContextItem,{},t=>{const{item:n}=t;(!this.lastStreamedItem||this.lastStreamedItem.uuid!==n.uuid)&&this.pendingSaveTimeout&&(clearTimeout(this.pendingSaveTimeout),this._performSavingOfItems(this.pendingSaveParams),this.pendingSaveTimeout=void 0,this.pendingSaveParams=void 0),this.lastStreamedItem=n,e(this.lastStreamedItem)})}selectItem(e){this.postMessage(r.SelectItem,{item:this.jsonObjectForItem(e)})}clearSelection(){this.postMessage(r.ClearSelection,{content_type:a.Tag})}createItem(e,t){this.postMessage(r.CreateItem,{item:this.jsonObjectForItem(e)},e=>{let{item:n}=e;!n&&e.items&&e.items.length>0&&(n=e.items[0]),this.associateItem(n),t&&t(n)})}createItems(e,t){const n=e.map(e=>this.jsonObjectForItem(e));this.postMessage(r.CreateItems,{items:n},e=>{t&&t(e.items)})}associateItem(e){this.postMessage(r.AssociateItem,{item:this.jsonObjectForItem(e)})}deassociateItem(e){this.postMessage(r.DeassociateItem,{item:this.jsonObjectForItem(e)})}deleteItem(e,t){this.deleteItems([e],t)}deleteItems(e,t){const n={items:e.map(e=>this.jsonObjectForItem(e))};this.postMessage(r.DeleteItems,n,e=>{t&&t(e)})}sendCustomEvent(e,t,n){this.postMessage(e,t,e=>{n&&n(e)})}saveItem(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.saveItems([e],t,n)}saveItemWithPresave(e,t,n){this.saveItemsWithPresave([e],t,n)}saveItemsWithPresave(e,t,n){this.saveItems(e,n,!1,t)}_performSavingOfItems(e){let{items:t,presave:n,callback:i}=e;n&&n();const a=[];for(const e of t)a.push(this.jsonObjectForItem(e));this.postMessage(r.SaveItems,{items:a},()=>{i&&i()})}saveItems(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0;if(this.pendingSaveItems||(this.pendingSaveItems=[]),this.coallesedSaving&&!n){this.pendingSaveTimeout&&clearTimeout(this.pendingSaveTimeout);const n=e.map(e=>e.uuid),i=this.pendingSaveItems.filter(e=>!n.includes(e.uuid));this.pendingSaveItems=i.concat(e),this.pendingSaveParams={items:this.pendingSaveItems,presave:r,callback:t},this.pendingSaveTimeout=setTimeout(()=>{this._performSavingOfItems(this.pendingSaveParams),this.pendingSaveItems=[],this.pendingSaveTimeout=void 0,this.pendingSaveParams=null},this.coallesedSavingDelay)}else this._performSavingOfItems({items:e,presave:r,callback:t})}setSize(e,t){this.postMessage(r.SetSize,{type:"container",width:e,height:t})}jsonObjectForItem(e){const t=Object.assign({},e);return t.children=null,t.parent=null,t}getItemAppDataValue(e,t){return e.getAppDomainValue(t)}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(175)})().default},function(e,t,n){"use strict";n.r(t),n.d(t,"EditorKit",(function(){return O})),n.d(t,"EditorKitDelegate",(function(){return D}));var r=n(0),i=n.n(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"htmlToText",value:function(e){var t=document.implementation.createHTMLDocument("New").body;return t.innerHTML=e,t.textContent||t.innerText||""}},{key:"truncateString",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:90;return e.length<=t?e:e.substring(0,t)+"..."}},{key:"sleep",value:function(e){return new Promise((function(t,n){setTimeout((function(){t()}),1e3*e)}))}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}();function o(e,t,n,r,i,a,s){try{var o=e[a](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,i)}function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){var n=t.filesafe,r=t.getElementsBySelector,i=t.preprocessElement,a=t.insertElement;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.filesafe=n,this.getElementsBySelector=r,this.insertElement=a,this.preprocessElement=i,this.uuidToFileTempUrlAndTypeMapping={},this.currentlyLoadingIds=[],this.statusElementMapping={},this.fileTypeToElementType={"image/png":"img","image/jpg":"img","image/jpeg":"img","image/gif":"img","image/tiff":"img","image/bmp":"img","video/mp4":"video","audio/mpeg":"audio","audio/mp3":"audio"}}var t,n,r,i,a;return t=e,(n=[{key:"fileTypeForElementType",value:function(e){return this.fileTypeToElementType[e.toLowerCase()]}},{key:"loadFilesafeElements",value:function(){var e,t=l(this.getElementsBySelector("*[fsplaceholder]"));try{for(t.s();!(e=t.n()).done;){var n=e.value;this.loadFilesafeElement(n)}}catch(e){t.e(e)}finally{t.f()}}},{key:"loadFilesafeElement",value:(i=regeneratorRuntime.mark((function e(t){var n,r,i,a,o,l,c,u,f,m,p,d=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.getAttribute("fsid"),r=t.getAttribute("fsname"),i=r&&"undefined"!=r?r:"file",!(a=this.uuidToFileTempUrlAndTypeMapping[n])){e.next=7;break}return this.insertMediaElement({url:a.url,fsid:n,fileType:a.fileType,fsname:a.fsname,fsElement:t}),e.abrupt("return");case 7:if(!this.currentlyLoadingIds.includes(n)){e.next=9;break}return e.abrupt("return");case 9:if(o=this.filesafe.findFileDescriptor(n)){e.next=13;break}return this.setStatus("Unable to find ".concat(i," ").concat(n,"."),t,n,r,!0),e.abrupt("return",{success:!1});case 13:if(l='[fsid="'.concat(o.uuid,'"][fscollapsable]'),!(document.querySelectorAll("img".concat(l,", figure").concat(l,", video").concat(l,", audio").concat(l)).length>0)){e.next=17;break}return e.abrupt("return",{success:!1});case 17:return c=function(){d.currentlyLoadingIds.splice(d.currentlyLoadingIds.indexOf(n),1)},this.currentlyLoadingIds.push(n),this.setStatus("Downloading ".concat(i,"..."),t,n,r),e.next=22,s.sleep(.05);case 22:return e.next=24,this.filesafe.downloadFileFromDescriptor(o).catch((function(e){d.setStatus("Unable to download ".concat(i," ").concat(n,"."),t,n,r)}));case 24:if(u=e.sent){e.next=27;break}return e.abrupt("return");case 27:return this.setStatus("Decrypting ".concat(i,"..."),t,n,r),e.next=30,s.sleep(.05);case 30:return e.next=32,this.filesafe.decryptFile({fileDescriptor:o,fileItem:u}).catch((function(e){d.setStatus("Unable to decrypt ".concat(i," ").concat(n,"."),t,n,r)}));case 32:if(f=e.sent){e.next=35;break}return e.abrupt("return");case 35:return this.setStatus(null,t,n),e.next=38,s.sleep(.05);case 38:return m=o.content.fileType,p=this.filesafe.createTemporaryFileUrl({base64Data:f.decryptedData,dataType:m}),this.insertMediaElement({url:p,fsid:n,fileType:m,fsname:r,fsElement:t}),c(),this.uuidToFileTempUrlAndTypeMapping[n]={url:p,fileType:m,fsname:r},e.abrupt("return",{success:!0});case 44:case"end":return e.stop()}}),e,this)})),a=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=i.apply(e,t);function s(e){o(a,n,r,s,l,"next",e)}function l(e){o(a,n,r,s,l,"throw",e)}s(void 0)}))},function(e){return a.apply(this,arguments)})},{key:"insertMediaElement",value:function(e){var t,n=e.url,r=e.fsid,i=e.fsname,a=e.fileType,s=e.fsElement,o=this.fileTypeForElementType(a);return t="img"==o?this.createImageElement({url:n,fsid:r,fsname:i,fsElement:s}):"video"==o?this.createVideoElement({url:n,fsid:r,fileType:a,fsname:i,fsElement:s}):"audio"==o?this.createAudioElement({url:n,fsid:r,fsname:i}):this.createDownloadElement({url:n,fsid:r,fileType:a,fsname:i,fsElement:s}),this.insertElementNearElement(t,s),s.remove(),!0}},{key:"wrapElementInTag",value:function(e){var t=e.element,n=e.tagName,r=e.fsid,i=e.fsname,a=document.createElement(n);return a.setAttribute("fsid",r),a.setAttribute("fsname",i),a.setAttribute("fscollapsable",!0),a.setAttribute("contenteditable",!0),a.append(t),a}},{key:"basicwrapElementInTag",value:function(e,t){var n=document.createElement(t);return n.append(e),n}},{key:"createImageElement",value:function(e){var t=e.url,n=e.fsid,r=e.fsname,i=e.fsElement,a=document.createElement("img");return a.setAttribute("src",t),a.setAttribute("srcset","".concat(t," 2x")),a.setAttribute("fsid",n),a.setAttribute("fsname",r),a.setAttribute("fscollapsable",!0),i.getAttribute("width")&&(a.setAttribute("width",i.getAttribute("width")),a.setAttribute("height",i.getAttribute("height"))),a}},{key:"createVideoElement",value:function(e){var t=e.url,n=e.fsid,r=e.fileType,i=e.fsname,a=e.fsElement,s=document.createElement("video");s.setAttribute("controls",!0),s.setAttribute("fsid",n),s.setAttribute("fsname",i),s.setAttribute("fscollapsable",!0),a.getAttribute("width")&&(s.setAttribute("width",a.getAttribute("width")),s.setAttribute("height",a.getAttribute("height")));var o=document.createElement("source");return o.setAttribute("src",t),o.setAttribute("type",r),s.append(o),this.wrapElementInTag({element:s,tagName:"p",fsid:n,fsname:i})}},{key:"createDownloadElement",value:function(e){var t=e.url,n=e.fsid,r=(e.fileType,e.fsname),i=(e.fsElement,document.createElement("a"));return i.setAttribute("fsid",n),i.setAttribute("fsname",r),i.setAttribute("ghost","true"),i.setAttribute("fscollapsable",!0),i.setAttribute("href",t),i.textContent="".concat(r),i}},{key:"createAudioElement",value:function(e){var t=e.url,n=e.fsid,r=e.fsname,i=document.createElement("audio");return i.setAttribute("src",t),i.setAttribute("controls",!0),i.setAttribute("fsid",n),i.setAttribute("fsname",r),i.setAttribute("fscollapsable",!0),this.wrapElementInTag({element:i,tagName:"p",fsid:n,fsname:r})}},{key:"setStatus",value:function(e,t,n,r,i){if(n){var a=this.statusElementMapping[n];a&&(a.remove(),delete this.statusElementMapping[n])}if(e){var s=document.createElement("label");return s.setAttribute("id",n),s.setAttribute("ghost","true"),s.setAttribute("contenteditable",!1),s.style.fontWeight="bold",s.textContent=e,i&&(s.style.userSelect="all"),s=this.insertElementNearElement(s,t),n&&(this.statusElementMapping[n]=s),s}}},{key:"insertStatusAtCursor",value:function(e){var t=Math.random().toString(36).substring(7);return this.setStatus(e,null,t),t}},{key:"removeCursorStatus",value:function(e){var t=this.getElementsBySelector("#".concat(e));t.length>0&&t[0].remove()}},{key:"insertElementNearElement",value:function(e,t){var n=this.preprocessElement(e),r="child";if("figure"==n.tagName.toLowerCase()){var i=t.closest("p");i&&(t=i,r="afterend")}return this.insertElement(n,t,r),n}}])&&u(t.prototype,n),r&&u(t,r),e}();function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){var n=t.patterns,r=t.afterExpand,i=t.beforeExpand,a=t.getCurrentLineText,s=t.getPreviousLineText,o=t.replaceText;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.patterns=n,this.afterExpand=r,this.beforeExpand=i,this.getCurrentLineText=a,this.getPreviousLineText=s,this.replaceText=o}var t,n,r;return t=e,(n=[{key:"onKeyUp",value:function(e){e.key;var t=e.isSpace,n=e.isEnter,r=e.isPaste;(t||n||r)&&this.searchPatterns({searchPreviousLine:n})}},{key:"searchPatterns",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.searchPreviousLine;e=n?this.getPreviousLineText():this.getCurrentLineText();var r,i=m(this.patterns);try{for(i.s();!(r=i.n()).done;){var a=r.value,s=a.regex.exec(e);if(s){var o=s[0];if(o){var l=a.callback(o);this.replaceSelection(a.regex,l,n)}}}}catch(e){i.e(e)}finally{i.f()}}},{key:"replaceSelection",value:function(e,t,n){this.beforeExpand&&this.beforeExpand(),this.replaceText({regex:e,replacement:t,previousLine:n}),this.afterExpand&&this.afterExpand()}}])&&d(t.prototype,n),r&&d(t,r),e}();function g(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b,S,w,E=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"expandedFilesafeSyntax",value:function(e){var t=this;return e.replace(this.FilesafeSyntaxPattern,(function(e){return t.filesafeSyntaxToHtmlElement(e)}))}},{key:"removeFilesafeSyntaxFromHtml",value:function(e){return e.replace(this.FilesafeSyntaxPattern,(function(e){return""}))}},{key:"insertionSyntaxForFileDescriptor",value:function(e){return"[FileSafe:".concat(e.uuid,":").concat(e.content.fileName,"]")}},{key:"filesafeSyntaxToHtmlElement",value:function(e){var t=(e=(e=(e=e.replace("<p>","")).replace("</p>","")).replace("[","").replace("]","")).split(":"),n=t[1],r=t[2],i=t[3],a="";if(i){var s=i.split("x");a="width=".concat(s[0]," height=").concat(s[1])}return"<p fsplaceholder=true style='display: none;' fscollapsable=true ghost=true fsid='".concat(n,"' fsname='").concat(r,"' ").concat(a,"></p>")}},{key:"collapseFilesafeSyntax",value:function(e){var t,n=(new DOMParser).parseFromString(e,"text/html"),r=g(n.querySelectorAll("*[fscollapsable]"));try{for(r.s();!(t=r.n()).done;){var i=t.value,a=i.getAttribute("fsid"),s=i.getAttribute("fsname"),o=i.getAttribute("width"),l=i.getAttribute("height"),c=["FileSafe",a,s];if(o||l){var u="".concat(o,"x").concat(l);c.push(u)}var f="<p>[".concat(c.join(":"),"]</p>");i.insertAdjacentHTML("afterend",f),i.remove()}}catch(e){r.e(e)}finally{r.f()}return n.querySelectorAll("*[ghost]").forEach((function(e){e.remove()})),n.body.innerHTML}}],(n=null)&&y(t.prototype,n),r&&y(t,r),e}();function x(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function I(e,t,n,r,i,a,s){try{var o=e[a](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,i)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){I(a,r,i,s,o,"next",e)}function o(e){I(a,r,i,s,o,"throw",e)}s(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}w=/(<p>)?\[FileSafe[^\]]*\](<\/p>)?/g,(S="FilesafeSyntaxPattern")in(b=E)?Object.defineProperty(b,S,{value:w,enumerable:!0,configurable:!0,writable:!0}):b[S]=w;var k=function(){function e(t){var n=t.delegate,r=t.mode,i=t.supportsFilesafe,a=t.coallesedSavingDelay,s=void 0===a?250:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.delegate=n,this.mode=r,this.supportsFilesafe=i,this.coallesedSavingDelay=s,this.fileIdsPendingAssociation=[],this.connectToBridge(),i&&(this.filesafeImportPromise=this.importFilesafe())}var t,r,a,o,l,c;return t=e,(r=[{key:"importFilesafe",value:(c=A(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve().then(n.t.bind(null,2,7)).then((function(e){return t.FilesafeClass=e.default,t.configureFilesafe(),t.filesafe})));case 1:case"end":return e.stop()}}),e)}))),function(){return c.apply(this,arguments)})},{key:"getFilesafe",value:(l=A(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.filesafe&&!this.filesafeImportPromise){e.next=5;break}if(!this.filesafeImportPromise){e.next=3;break}return e.abrupt("return",this.filesafeImportPromise);case 3:e.next=6;break;case 5:return e.abrupt("return",this.importFilesafe());case 6:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"configureFilesafe",value:function(){var e=this;this.filesafe=new this.FilesafeClass({componentManager:this.componentRelay}),this.filesafe.addDataChangeObserver((function(){var t=e.filesafe.getAllFileDescriptors();if(e.note&&e.fileIdsPendingAssociation.length>0){var n,r=!1,i=x(e.fileIdsPendingAssociation.slice());try{var a=function(){var i=n.value,a=t.find((function(e){return e.uuid==i}));if(!a)return"continue";r=!0,e.fileIdsPendingAssociation.splice(e.fileIdsPendingAssociation.indexOf(i),1);var s=E.insertionSyntaxForFileDescriptor(a);e.delegate.insertRawText(s)};for(i.s();!(n=i.n()).done;)a()}catch(e){i.e(e)}finally{i.f()}r&&e.textExpander.searchPatterns()}t.length>0&&e.fileLoader.loadFilesafeElements()})),this.filesafe.addNewFileDescriptorHandler((function(t){e.fileIdsPendingAssociation.push(t.uuid)})),this.fileLoader=new f({filesafe:this.filesafe,getElementsBySelector:this.delegate.getElementsBySelector,insertElement:this.delegate.insertElement,preprocessElement:this.delegate.preprocessElement}),this.textExpander=new h({afterExpand:function(){e.fileLoader.loadFilesafeElements()},getCurrentLineText:this.delegate.getCurrentLineText,getPreviousLineText:this.delegate.getPreviousLineText,replaceText:this.delegate.replaceText,patterns:[{regex:E.FilesafeSyntaxPattern,callback:function(e){return E.expandedFilesafeSyntax(e)}}]})}},{key:"connectToBridge",value:function(){var e=this;this.componentRelay=new i.a({targetWindow:window,options:{coallesedSavingDelay:this.coallesedSavingDelay},onReady:function(){document.documentElement.classList.add(e.componentRelay.platform)}}),this.componentRelay.coallesedSavingDelay=this.coallesedSavingDelay,this.componentRelay.streamContextItem((function(t){var n=!0;if(e.note&&e.note.uuid==t.uuid&&(n=!1),e.supportsFilesafe){var r=e.FilesafeClass.getSFItemClass();e.note=new r(t),e.filesafe.setCurrentNote(e.note)}else e.note=t;if(!t.isMetadataUpdate){var i=t.content.text;"html"==e.mode&&n&&(/<[a-z][\s\S]*>/i.test(i)||(e.ignoreNextTextChange=!0)),e.previousText=i,e.supportsFilesafe&&(e.needsFilesafeElementLoad=!0,i=E.expandedFilesafeSyntax(i)),e.delegate.setEditorRawText(i),n&&e.delegate.clearUndoHistory()}}))}},{key:"onEditorKeyUp",value:function(e){var t=e.key,n=e.isSpace,r=e.isEnter;this.textExpander.onKeyUp({key:t,isSpace:n,isEnter:r})}},{key:"onEditorPaste",value:function(){this.textExpander.onKeyUp({isPaste:!0})}},{key:"onEditorValueChanged",value:function(e){var t=this;if(this.needsFilesafeElementLoad&&(this.needsFilesafeElementLoad=!1,this.fileLoader.loadFilesafeElements()),this.ignoreNextTextChange)this.ignoreNextTextChange=!1;else{if(this.supportsFilesafe&&(e=E.collapseFilesafeSyntax(e),this.previousText==e))return;this.previousText=e;var n=this.note;n&&this.componentRelay.saveItemWithPresave(n,(function(){if(n.content.text=e,t.delegate.generateCustomPreview){var r=t.delegate.generateCustomPreview(e);r.html&&(n.content.preview_html=r.html),r.plain&&(n.content.preview_plain=r.plain)}else{if("html"==t.mode){var i=E.removeFilesafeSyntaxFromHtml(e);i=s.truncateString(s.htmlToText(i)),n.content.preview_plain=i.length>0?i:" "}else n.content.preview_plain=e;n.content.preview_html=null}}))}}},{key:"canUploadFiles",value:function(){var e=this.filesafe.getAllCredentials(),t=this.filesafe.getAllIntegrations();return e.length>0&&t.length>0}},{key:"uploadJSFileObject",value:(o=A(regeneratorRuntime.mark((function e(t){var n,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.fileLoader.insertStatusAtCursor("Processing file..."),e.abrupt("return",this.filesafe.encryptAndUploadJavaScriptFileObject(t).then((function(e){r.fileLoader.removeCursorStatus(n)})));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}])&&P(t.prototype,r),a&&P(t,a),e}();function F(e,t,n,r,i,a,s){try{var o=e[a](s),l=o.value}catch(e){return void n(e)}o.done?t(l):Promise.resolve(l).then(r,i)}function C(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){F(a,r,i,s,o,"next",e)}function o(e){F(a,r,i,s,o,"throw",e)}s(void 0)}))}}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.delegate,r=t.mode,i=void 0===r?"plaintext":r,a=t.supportsFilesafe,s=void 0!==a&&a,o=t.coallesedSavingDelay,l=void 0===o?250:o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.delegate=n,this.mode=i,this.supportsFilesafe=s,this.coallesedSavingDelay=l,this.internal=new k({delegate:n,mode:i,supportsFilesafe:s,coallesedSavingDelay:l})}var t,n,r,i,a;return t=e,(n=[{key:"getFilesafe",value:(a=C(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.internal.getFilesafe());case 1:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"onEditorValueChanged",value:function(e){this.internal.onEditorValueChanged(e)}},{key:"onEditorKeyUp",value:function(e){var t=e.key,n=e.isSpace,r=e.isEnter;this.internal.onEditorKeyUp({key:t,isSpace:n,isEnter:r})}},{key:"onEditorPaste",value:function(){this.internal.onEditorPaste()}},{key:"canUploadFiles",value:function(){return this.internal.canUploadFiles()}},{key:"uploadJSFileObject",value:(i=C(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.internal.uploadJSFileObject(t));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})}])&&j(t.prototype,n),r&&j(t,r),e}();var D=function e(t){var n=t.insertRawText,r=t.onReceiveNote,i=t.setEditorRawText,a=t.getCurrentLineText,s=t.getPreviousLineText,o=t.replaceText,l=t.getElementsBySelector,c=t.insertElement,u=t.preprocessElement,f=t.clearUndoHistory,m=t.generateCustomPreview;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.insertRawText=n,this.onReceiveNote=r,this.setEditorRawText=i,this.getCurrentLineText=a,this.getPreviousLineText=s,this.replaceText=o,this.getElementsBySelector=l,this.insertElement=c,this.preprocessElement=u,this.clearUndoHistory=f,this.generateCustomPreview=m}},function(t,n){t.exports=e}])}));
//# sourceMappingURL=editor-kit.js.map