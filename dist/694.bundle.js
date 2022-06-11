/*! For license information please see 694.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestlater=self.webpackChunkrestlater||[]).push([[694],{694:(e,t,r)=>{r.d(t,{Z:()=>m});var n,a=r(288),i=r(933),o=r(274),s=r(764);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var f=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._delegate=t,this.firebase=r,(0,o._addComponent)(t,new i.wA("app-compat",(function(){return n}),"PUBLIC")),this.container=t.container}var t,r;return t=e,r=[{key:"automaticDataCollectionEnabled",get:function(){return this._delegate.automaticDataCollectionEnabled},set:function(e){this._delegate.automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this._delegate.name}},{key:"options",get:function(){return this._delegate.options}},{key:"delete",value:function(){var e=this;return new Promise((function(t){e._delegate.checkDestroyed(),t()})).then((function(){return e.firebase.INTERNAL.removeApp(e.name),(0,o.deleteApp)(e._delegate)}))}},{key:"_getService",value:function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o._DEFAULT_ENTRY_NAME;this._delegate.checkDestroyed();var n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(t=n.getComponent())||void 0===t?void 0:t.instantiationMode)||n.initialize(),n.getImmediate({identifier:r})}},{key:"_removeServiceInstance",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o._DEFAULT_ENTRY_NAME;this._delegate.container.getProvider(e).clearInstance(t)}},{key:"_addComponent",value:function(e){(0,o._addComponent)(this._delegate,e)}},{key:"_addOrOverwriteComponent",value:function(e){(0,o._addOrOverwriteComponent)(this._delegate,e)}},{key:"toJSON",value:function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}],r&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),l=(c(n={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),c(n,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),n),p=new a.LL("app-compat","Firebase",l),h=function e(){var t=function(e){var t={},r={__esModule:!0,initializeApp:function(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=o.initializeApp(n,i);if((0,a.r3)(t,s.name))return t[s.name];var c=new e(s,r);return t[s.name]=c,c},app:n,registerVersion:o.registerVersion,setLogLevel:o.setLogLevel,onLog:o.onLog,apps:null,SDK_VERSION:o.SDK_VERSION,INTERNAL:{registerComponent:function(t){var i=t.name,s=i.replace("-compat","");if(o._registerComponent(t)&&"PUBLIC"===t.type){var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n();if("function"!=typeof e[s])throw p.create("invalid-app-argument",{appName:i});return e[s]()};void 0!==t.serviceProps&&(0,a.ZB)(c,t.serviceProps),r[s]=c,e.prototype[s]=function(){for(var e=this._getService.bind(this,i),r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return e.apply(this,t.multipleInstances?n:[])}}return"PUBLIC"===t.type?r[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:o}};function n(e){if(e=e||o._DEFAULT_ENTRY_NAME,!(0,a.r3)(t,e))throw p.create("no-app",{appName:e});return t[e]}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),n.App=e,r}(f);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,a.ZB)(t,e)},createSubscribe:a.ne,ErrorFactory:a.LL,deepExtend:a.ZB}),t}(),d=new s.Yd("@firebase/app-compat");if((0,a.jU)()&&void 0!==self.firebase){d.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var v=self.firebase.SDK_VERSION;v&&v.indexOf("LITE")>=0&&d.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var m=h;(0,o.registerVersion)("@firebase/app-compat","0.1.26",undefined)},274:(e,t,r)=>{r.r(t),r.d(t,{FirebaseError:()=>s.ZR,SDK_VERSION:()=>U,_DEFAULT_ENTRY_NAME:()=>C,_addComponent:()=>O,_addOrOverwriteComponent:()=>D,_apps:()=>A,_clearComponents:()=>j,_components:()=>S,_getProvider:()=>N,_registerComponent:()=>I,_removeServiceInstance:()=>P,deleteApp:()=>V,getApp:()=>B,getApps:()=>H,initializeApp:()=>M,onLog:()=>G,registerVersion:()=>Y,setLogLevel:()=>z});var n,a,i=r(933),o=r(764),s=r(288),c=r(315);function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(){f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,i=Object.create(a.prototype),o=new C(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return{value:void 0,done:!0}}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=E(o,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,o),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function p(){}function d(){}function v(){}var m={};s(m,a,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(L([])));g&&g!==t&&r.call(g,a)&&(m=g);var y=v.prototype=p.prototype=Object.create(m);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function n(a,i,o,s){var c=u(e[a],e,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==h(l)&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(l).then((function(e){f.value=e,o(f)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}var a;this._invoke=function(e,r){function i(){return new t((function(t,a){n(e,r,t,a)}))}return a=a?a.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:A}}function A(){return{value:void 0,done:!0}}return d.prototype=v,s(y,"constructor",v),s(v,"constructor",d),d.displayName=s(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},w(_.prototype),s(_.prototype,i,(function(){return this})),e.AsyncIterator=_,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new _(c(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},w(y),s(y,o,"Generator"),s(y,a,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}function l(e,t,r,n,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function o(e){l(i,n,a,o,s,"next",e)}function s(e){l(i,n,a,o,s,"throw",e)}o(void 0)}))}}function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=v(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw i}}}}function v(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var _=function(){function e(t){g(this,e),this.container=t}return w(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}(),E="@firebase/app",k="0.7.25",x=new o.Yd("@firebase/app"),C="[DEFAULT]",L=(b(n={},E,"fire-core"),b(n,"@firebase/app-compat","fire-core-compat"),b(n,"@firebase/analytics","fire-analytics"),b(n,"@firebase/analytics-compat","fire-analytics-compat"),b(n,"@firebase/app-check","fire-app-check"),b(n,"@firebase/app-check-compat","fire-app-check-compat"),b(n,"@firebase/auth","fire-auth"),b(n,"@firebase/auth-compat","fire-auth-compat"),b(n,"@firebase/database","fire-rtdb"),b(n,"@firebase/database-compat","fire-rtdb-compat"),b(n,"@firebase/functions","fire-fn"),b(n,"@firebase/functions-compat","fire-fn-compat"),b(n,"@firebase/installations","fire-iid"),b(n,"@firebase/installations-compat","fire-iid-compat"),b(n,"@firebase/messaging","fire-fcm"),b(n,"@firebase/messaging-compat","fire-fcm-compat"),b(n,"@firebase/performance","fire-perf"),b(n,"@firebase/performance-compat","fire-perf-compat"),b(n,"@firebase/remote-config","fire-rc"),b(n,"@firebase/remote-config-compat","fire-rc-compat"),b(n,"@firebase/storage","fire-gcs"),b(n,"@firebase/storage-compat","fire-gcs-compat"),b(n,"@firebase/firestore","fire-fst"),b(n,"@firebase/firestore-compat","fire-fst-compat"),b(n,"fire-js","fire-js"),b(n,"firebase","fire-js-all"),n),A=new Map,S=new Map;function O(e,t){try{e.container.addComponent(t)}catch(r){x.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function D(e,t){e.container.addOrOverwriteComponent(t)}function I(e){var t=e.name;if(S.has(t))return x.debug("There were multiple attempts to register component ".concat(t,".")),!1;S.set(t,e);var r,n=d(A.values());try{for(n.s();!(r=n.n()).done;)O(r.value,e)}catch(e){n.e(e)}finally{n.f()}return!0}function N(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function P(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:C;N(e,t).clearInstance(r)}function j(){S.clear()}var F=(b(a={},"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),b(a,"bad-app-name","Illegal App name: '{$appName}"),b(a,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),b(a,"app-deleted","Firebase App named '{$appName}' already deleted"),b(a,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),b(a,"invalid-log-argument","First argument to `onLog` must be null or a function."),b(a,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),b(a,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),b(a,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),b(a,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),a),T=new s.LL("app","Firebase",F),R=function(){function e(t,r,n){var a=this;g(this,e),this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(function(){return a}),"PUBLIC"))}return w(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw T.create("app-deleted",{appName:this._name})}}]),e}(),U="9.8.2";function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!==h(t)){var r=t;t={name:r}}var n=Object.assign({name:C,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw T.create("bad-app-name",{appName:String(a)});var o=A.get(a);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw T.create("duplicate-app",{appName:a})}var c,u=new i.H0(a),f=d(S.values());try{for(f.s();!(c=f.n()).done;){var l=c.value;u.addComponent(l)}}catch(e){f.e(e)}finally{f.f()}var p=new R(e,n,u);return A.set(a,p),p}function B(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=A.get(e);if(!t)throw T.create("no-app",{appName:e});return t}function H(){return Array.from(A.values())}function V(e){return $.apply(this,arguments)}function $(){return($=p(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,!A.has(r)){e.next=6;break}return A.delete(r),e.next=5,Promise.all(t.container.getProviders().map((function(e){return e.delete()})));case 5:t.isDeleted=!0;case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e,t,r){var n,a=null!==(n=L[e])&&void 0!==n?n:e;r&&(a+="-".concat(r));var o=a.match(/\s|\//),s=t.match(/\s|\//);if(o||s){var c=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return o&&c.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),o&&s&&c.push("and"),s&&c.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void x.warn(c.join(" "))}I(new i.wA("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}function G(e,t){if(null!==e&&"function"!=typeof e)throw T.create("invalid-log-argument");(0,o.Am)(e,t)}function z(e){(0,o.Ub)(e)}var Z="firebase-heartbeat-store",K=null;function J(){return K||(K=(0,c.X3)("firebase-heartbeat-database",1,{upgrade:function(e,t){0===t&&e.createObjectStore(Z)}}).catch((function(e){throw T.create("storage-open",{originalErrorMessage:e.message})}))),K}function W(e){return X.apply(this,arguments)}function X(){return(X=p(f().mark((function e(t){var r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:return r=e.sent,e.abrupt("return",r.transaction(Z).objectStore(Z).get(ee(t)));case 7:throw e.prev=7,e.t0=e.catch(0),T.create("storage-get",{originalErrorMessage:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function q(e,t){return Q.apply(this,arguments)}function Q(){return(Q=p(f().mark((function e(t,r){var n,a,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J();case 3:return n=e.sent,a=n.transaction(Z,"readwrite"),i=a.objectStore(Z),e.next=8,i.put(r,ee(t));case 8:return e.abrupt("return",a.done);case 11:throw e.prev=11,e.t0=e.catch(0),T.create("storage-set",{originalErrorMessage:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function ee(e){return"".concat(e.name,"!").concat(e.options.appId)}var te=function(){function e(t){var r=this;g(this,e),this.container=t,this._heartbeatsCache=null;var n=this.container.getProvider("app").getImmediate();this._storage=new ae(n),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}var t,r;return w(e,[{key:"triggerHeartbeat",value:(r=p(f().mark((function e(){var t,r,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.container.getProvider("platform-logger").getImmediate(),r=t.getPlatformInfoString(),n=re(),null!==this._heartbeatsCache){e.next=7;break}return e.next=6,this._heartbeatsCachePromise;case 6:this._heartbeatsCache=e.sent;case 7:if(this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((function(e){return e.date===n}))){e.next=11;break}return e.abrupt("return");case 11:this._heartbeatsCache.heartbeats.push({date:n,agent:r});case 12:return this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",this._storage.overwrite(this._heartbeatsCache));case 14:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getHeartbeatsHeader",value:(t=p(f().mark((function e(){var t,r,n,a,i;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this._heartbeatsCache){e.next=3;break}return e.next=3,this._heartbeatsCachePromise;case 3:if(null!==this._heartbeatsCache&&0!==this._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(t=re(),r=ne(this._heartbeatsCache.heartbeats),n=r.heartbeatsToSend,a=r.unsentEntries,i=(0,s.L)(JSON.stringify({version:2,heartbeats:n})),this._heartbeatsCache.lastSentHeartbeatDate=t,!(a.length>0)){e.next=15;break}return this._heartbeatsCache.heartbeats=a,e.next=13,this._storage.overwrite(this._heartbeatsCache);case 13:e.next=17;break;case 15:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache);case 17:return e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}();function re(){return(new Date).toISOString().substring(0,10)}function ne(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],a=e.slice(),i=d(e);try{var o=function(){var e=t.value,i=n.find((function(t){return t.agent===e.agent}));if(i){if(i.dates.push(e.date),ie(n)>r)return i.dates.pop(),"break"}else if(n.push({agent:e.agent,dates:[e.date]}),ie(n)>r)return n.pop(),"break";a=a.slice(1)};for(i.s();!(t=i.n()).done;){var s=o();if("break"===s)break}}catch(e){i.e(e)}finally{i.f()}return{heartbeatsToSend:n,unsentEntries:a}}var ae=function(){function e(t){g(this,e),this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}var t,r,n,a;return w(e,[{key:"runIndexedDBEnvironmentCheck",value:(a=p(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,s.hl)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,s.eu)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)}))),function(){return a.apply(this,arguments)})},{key:"read",value:(n=p(f().mark((function e(){var t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,W(this.app);case 9:return t=e.sent,e.abrupt("return",t||{heartbeats:[]});case 11:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"overwrite",value:(r=p(f().mark((function e(t){var r,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,this.read();case 9:return n=e.sent,e.abrupt("return",q(this.app,{lastSentHeartbeatDate:null!==(r=t.lastSentHeartbeatDate)&&void 0!==r?r:n.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"add",value:(t=p(f().mark((function e(t){var r,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,this.read();case 9:return n=e.sent,e.abrupt("return",q(this.app,{lastSentHeartbeatDate:null!==(r=t.lastSentHeartbeatDate)&&void 0!==r?r:n.lastSentHeartbeatDate,heartbeats:[].concat(u(n.heartbeats),u(t.heartbeats))}));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),e}();function ie(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}I(new i.wA("platform-logger",(function(e){return new _(e)}),"PRIVATE")),I(new i.wA("heartbeat",(function(e){return new te(e)}),"PRIVATE")),Y(E,k,""),Y(E,k,"esm2017"),Y("fire-js","")}}]);