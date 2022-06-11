/*! For license information please see 323.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkrestlater=self.webpackChunkrestlater||[]).push([[323],{323:(e,t,n)=>{var r=n(694),i=n(796),a=n(933),o=n(288);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(){s=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof f?t:f,a=Object.create(i.prototype),o=new R(r||[]);return a._invoke=function(e,t,n){var r="suspendedStart";return function(i,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw a;return{value:void 0,done:!0}}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var u=b(o,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(e,n,o),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function f(){}function p(){}function v(){}var g={};c(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(P([])));m&&m!==t&&n.call(m,i)&&(g=m);var k=v.prototype=f.prototype=Object.create(g);function _(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function r(i,a,o,s){var c=h(e[i],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==u(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(d).then((function(e){l.value=e,o(l)}),(function(e){return r("throw",e,o,s)}))}s(c.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function b(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=h(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,d;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function P(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=v,c(k,"constructor",v),c(v,"constructor",p),p.displayName=c(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,o,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(w.prototype),c(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new w(l(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(k),c(k,o,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=P,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),I(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t,n,r,i,a,o){try{var u=e[a](o),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,i)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){d(a,r,i,o,u,"next",e)}function u(e){d(a,r,i,o,u,"throw",e)}o(void 0)}))}}function p(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.z$)();return!("file:"!==p()&&"ionic:"!==p()&&"capacitor:"!==p()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function g(){return(0,o.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.z$)();return/Edge\/\d+/.test(e)}function m(){try{var e=self.localStorage,t=i.Oh();if(e)return e.setItem(t,"1"),e.removeItem(t),!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,o.z$)();return g()||y(e)}()||(0,o.hl)()}catch(e){return k()&&(0,o.hl)()}return!1}function k(){return void 0!==n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function _(){return("http:"===p()||"https:"===p()||(0,o.ru)()||v())&&!((0,o.b$)()||(0,o.UG)())&&m()&&!k()}function w(){return v()&&"undefined"!=typeof document}function b(){return E.apply(this,arguments)}function E(){return(E=f(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w()){e.next=2;break}return e.abrupt("return",!1);case 2:return e.abrupt("return",new Promise((function(e){var t=setTimeout((function(){e(!1)}),1e3);document.addEventListener("deviceready",(function(){clearTimeout(t),e(!0)}))})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I={LOCAL:"local",NONE:"none",SESSION:"session"},R=i.PQ,P="persistence";function O(e,t){R(Object.values(I).includes(t),e,"invalid-persistence-type"),(0,o.b$)()?R(t!==I.SESSION,e,"unsupported-persistence-type"):(0,o.UG)()?R(t===I.NONE,e,"unsupported-persistence-type"):k()?R(t===I.NONE||t===I.LOCAL&&(0,o.hl)(),e,"unsupported-persistence-type"):R(t===I.NONE||m(),e,"unsupported-persistence-type")}function A(e){return x.apply(this,arguments)}function x(){return(x=f(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._initializationPromise;case 2:n=S(),r=i.SE(P,t.config.apiKey,t.name),n&&n.setItem(r,t._getPersistence());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}var N=i.PQ,L=function(){function e(){c(this,e),this.browserResolver=i.wU(i.n0),this.cordovaResolver=i.wU(i.QT),this.underlyingResolver=null,this._redirectPersistence=i.aT,this._completeRedirectFn=i.xW,this._overrideRedirectResult=i.QZ}var t,n,r,a;return h(e,[{key:"_initialize",value:(a=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.selectUnderlyingResolver();case 2:return e.abrupt("return",this.assertedUnderlyingResolver._initialize(t));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"_openPopup",value:(r=f(s().mark((function e(t,n,r,i){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.selectUnderlyingResolver();case 2:return e.abrupt("return",this.assertedUnderlyingResolver._openPopup(t,n,r,i));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,n,i){return r.apply(this,arguments)})},{key:"_openRedirect",value:(n=f(s().mark((function e(t,n,r,i){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.selectUnderlyingResolver();case 2:return e.abrupt("return",this.assertedUnderlyingResolver._openRedirect(t,n,r,i));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t,r,i){return n.apply(this,arguments)})},{key:"_isIframeWebStorageSupported",value:function(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}},{key:"_originValidation",value:function(e){return this.assertedUnderlyingResolver._originValidation(e)}},{key:"_shouldInitProactively",get:function(){return w()||this.browserResolver._shouldInitProactively}},{key:"assertedUnderlyingResolver",get:function(){return N(this.underlyingResolver,"internal-error"),this.underlyingResolver}},{key:"selectUnderlyingResolver",value:(t=f(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.underlyingResolver){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,b();case 4:t=e.sent,this.underlyingResolver=t?this.cordovaResolver:this.browserResolver;case 6:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),e}();function T(e){return e.unwrap()}function C(e){var t=(e instanceof o.ZR?e.customData:e)._tokenResponse;if(!t)return null;if(!(e instanceof o.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return i.RO.credentialFromResult(e);var n,r=t.providerId;if(!r||r===i.F7.PASSWORD)return null;switch(r){case i.F7.GOOGLE:n=i.hJ;break;case i.F7.FACEBOOK:n=i._O;break;case i.F7.GITHUB:n=i.GH;break;case i.F7.TWITTER:n=i.c4;break;default:var a=t.oauthIdToken,u=t.oauthAccessToken,s=t.oauthTokenSecret,c=t.pendingToken,l=t.nonce;return u||s||a||c?c?r.startsWith("saml.")?i.ev._create(r,c):i.jh._fromParams({providerId:r,signInMethod:r,pendingToken:c,idToken:a,accessToken:u}):new i.O4(r).credential({idToken:a,accessToken:u,rawNonce:l}):null}return e instanceof o.ZR?n.credentialFromError(e):n.credentialFromResult(e)}function U(e,t){return t.catch((function(t){throw t instanceof o.ZR&&function(e,t){var n,r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code)t.resolver=new G(e,i.p2(e,t));else if(r){var a=C(t),o=t;a&&(o.credential=a,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}(e,t),t})).then((function(e){var t,n=e.operationType,r=e.user;return{operationType:n,credential:(t=e,C(t)),additionalUserInfo:i.gK(e),user:D.getOrCreate(r)}}))}function W(e,t){return F.apply(this,arguments)}function F(){return(F=f(s().mark((function e(t,n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:return r=e.sent,e.abrupt("return",{verificationId:r.verificationId,confirm:function(e){return U(t,r.confirm(e))}});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var G=function(){function e(t,n){c(this,e),this.resolver=n,this.auth=t.wrapped()}return h(e,[{key:"session",get:function(){return this.resolver.session}},{key:"hints",get:function(){return this.resolver.hints}},{key:"resolveSignIn",value:function(e){return U(T(this.auth),this.resolver.resolveSignIn(e))}}]),e}(),D=function(){function e(t){c(this,e),this._delegate=t,this.multiFactor=i.JG(t)}var t,n,r,a,o,u,l;return h(e,[{key:"delete",value:function(){return this._delegate.delete()}},{key:"reload",value:function(){return this._delegate.reload()}},{key:"toJSON",value:function(){return this._delegate.toJSON()}},{key:"getIdTokenResult",value:function(e){return this._delegate.getIdTokenResult(e)}},{key:"getIdToken",value:function(e){return this._delegate.getIdToken(e)}},{key:"linkAndRetrieveDataWithCredential",value:function(e){return this.linkWithCredential(e)}},{key:"linkWithCredential",value:(l=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U(this.auth,i.ZJ(this._delegate,t)));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"linkWithPhoneNumber",value:(u=f(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",W(this.auth,i.L6(this._delegate,t,n)));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t){return u.apply(this,arguments)})},{key:"linkWithPopup",value:(o=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U(this.auth,i.k9(this._delegate,t,L)));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})},{key:"linkWithRedirect",value:(a=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(i.Js(this.auth));case 2:return e.abrupt("return",i.WV(this._delegate,t,L));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"reauthenticateAndRetrieveDataWithCredential",value:function(e){return this.reauthenticateWithCredential(e)}},{key:"reauthenticateWithCredential",value:(r=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U(this.auth,i.aF(this._delegate,t)));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"reauthenticateWithPhoneNumber",value:function(e,t){return W(this.auth,i.vY(this._delegate,e,t))}},{key:"reauthenticateWithPopup",value:function(e){return U(this.auth,i.bc(this._delegate,e,L))}},{key:"reauthenticateWithRedirect",value:(n=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(i.Js(this.auth));case 2:return e.abrupt("return",i.C3(this._delegate,t,L));case 3:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"sendEmailVerification",value:function(e){return i.w$(this._delegate,e)}},{key:"unlink",value:(t=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.qB(this._delegate,t);case 2:return e.abrupt("return",this);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"updateEmail",value:function(e){return i.s(this._delegate,e)}},{key:"updatePassword",value:function(e){return i.gQ(this._delegate,e)}},{key:"updatePhoneNumber",value:function(e){return i.Rv(this._delegate,e)}},{key:"updateProfile",value:function(e){return i.ck(this._delegate,e)}},{key:"verifyBeforeUpdateEmail",value:function(e,t){return i.Ov(this._delegate,e,t)}},{key:"emailVerified",get:function(){return this._delegate.emailVerified}},{key:"isAnonymous",get:function(){return this._delegate.isAnonymous}},{key:"metadata",get:function(){return this._delegate.metadata}},{key:"phoneNumber",get:function(){return this._delegate.phoneNumber}},{key:"providerData",get:function(){return this._delegate.providerData}},{key:"refreshToken",get:function(){return this._delegate.refreshToken}},{key:"tenantId",get:function(){return this._delegate.tenantId}},{key:"displayName",get:function(){return this._delegate.displayName}},{key:"email",get:function(){return this._delegate.email}},{key:"photoURL",get:function(){return this._delegate.photoURL}},{key:"providerId",get:function(){return this._delegate.providerId}},{key:"uid",get:function(){return this._delegate.uid}},{key:"auth",get:function(){return this._delegate.auth}}],[{key:"getOrCreate",value:function(t){return e.USER_MAP.has(t)||e.USER_MAP.set(t,new e(t)),e.USER_MAP.get(t)}}]),e}();D.USER_MAP=new WeakMap;var M=i.PQ,V=function(){function e(t,n){if(c(this,e),this.app=t,n.isInitialized())return this._delegate=n.getImmediate(),void this.linkUnderlyingAuth();var r=t.options.apiKey;M(r,"invalid-api-key",{appName:t.name}),M(r,"invalid-api-key",{appName:t.name});var a="undefined"!=typeof window?L:void 0;this._delegate=n.initialize({options:{persistence:j(r,t.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(i.H0),this.linkUnderlyingAuth()}var t,n,r,a,o;return h(e,[{key:"emulatorConfig",get:function(){return this._delegate.emulatorConfig}},{key:"currentUser",get:function(){return this._delegate.currentUser?D.getOrCreate(this._delegate.currentUser):null}},{key:"languageCode",get:function(){return this._delegate.languageCode},set:function(e){this._delegate.languageCode=e}},{key:"settings",get:function(){return this._delegate.settings}},{key:"tenantId",get:function(){return this._delegate.tenantId},set:function(e){this._delegate.tenantId=e}},{key:"useDeviceLanguage",value:function(){this._delegate.useDeviceLanguage()}},{key:"signOut",value:function(){return this._delegate.signOut()}},{key:"useEmulator",value:function(e,t){i.S$(this._delegate,e,t)}},{key:"applyActionCode",value:function(e){return i.iA(this._delegate,e)}},{key:"checkActionCode",value:function(e){return i.bX(this._delegate,e)}},{key:"confirmPasswordReset",value:function(e,t){return i.LG(this._delegate,e,t)}},{key:"createUserWithEmailAndPassword",value:(o=f(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U(this._delegate,i.Xb(this._delegate,t,n)));case 1:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"fetchProvidersForEmail",value:function(e){return this.fetchSignInMethodsForEmail(e)}},{key:"fetchSignInMethodsForEmail",value:function(e){return i.Nr(this._delegate,e)}},{key:"isSignInWithEmailLink",value:function(e){return i.JB(this._delegate,e)}},{key:"getRedirectResult",value:(a=f(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(_(),this._delegate,"operation-not-supported-in-this-environment"),e.next=3,i.cx(this._delegate,L);case 3:if(t=e.sent){e.next=6;break}return e.abrupt("return",{credential:null,user:null});case 6:return e.abrupt("return",U(this._delegate,Promise.resolve(t)));case 7:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"addFrameworkForLogging",value:function(e){i.R5(this._delegate,e)}},{key:"onAuthStateChanged",value:function(e,t,n){var r=B(e,t,n),i=r.next,a=r.error,o=r.complete;return this._delegate.onAuthStateChanged(i,a,o)}},{key:"onIdTokenChanged",value:function(e,t,n){var r=B(e,t,n),i=r.next,a=r.error,o=r.complete;return this._delegate.onIdTokenChanged(i,a,o)}},{key:"sendSignInLinkToEmail",value:function(e,t){return i.oo(this._delegate,e,t)}},{key:"sendPasswordResetEmail",value:function(e,t){return i.LS(this._delegate,e,t||void 0)}},{key:"setPersistence",value:(r=f(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(this._delegate,t),e.t0=t,e.next=e.t0===I.SESSION?4:e.t0===I.LOCAL?6:e.t0===I.NONE?11:13;break;case 4:return n=i.aT,e.abrupt("break",14);case 6:return e.next=8,i.wU(i.AP)._isAvailable();case 8:return r=e.sent,n=r?i.AP:i.a$,e.abrupt("break",14);case 11:return n=i.BV,e.abrupt("break",14);case 13:return e.abrupt("return",i.Sn("argument-error",{appName:this._delegate.name}));case 14:return e.abrupt("return",this._delegate.setPersistence(n));case 15:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"signInAndRetrieveDataWithCredential",value:function(e){return this.signInWithCredential(e)}},{key:"signInAnonymously",value:function(){return U(this._delegate,i.XB(this._delegate))}},{key:"signInWithCredential",value:function(e){return U(this._delegate,i.sB(this._delegate,e))}},{key:"signInWithCustomToken",value:function(e){return U(this._delegate,i._p(this._delegate,e))}},{key:"signInWithEmailAndPassword",value:function(e,t){return U(this._delegate,i.e5(this._delegate,e,t))}},{key:"signInWithEmailLink",value:function(e,t){return U(this._delegate,i.P6(this._delegate,e,t))}},{key:"signInWithPhoneNumber",value:function(e,t){return W(this._delegate,i.$g(this._delegate,e,t))}},{key:"signInWithPopup",value:(n=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(_(),this._delegate,"operation-not-supported-in-this-environment"),e.abrupt("return",U(this._delegate,i.rh(this._delegate,t,L)));case 2:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"signInWithRedirect",value:(t=f(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(_(),this._delegate,"operation-not-supported-in-this-environment"),e.next=3,A(this._delegate);case 3:return e.abrupt("return",i.F6(this._delegate,t,L));case 4:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"updateCurrentUser",value:function(e){return this._delegate.updateCurrentUser(e)}},{key:"verifyPasswordResetCode",value:function(e){return i.TX(this._delegate,e)}},{key:"unwrap",value:function(){return this._delegate}},{key:"_delete",value:function(){return this._delegate._delete()}},{key:"linkUnderlyingAuth",value:function(){var e=this;this._delegate.wrapped=function(){return e}}}]),e}();function B(e,t,n){var r=e;"function"!=typeof e&&(r=e.next,t=e.error,n=e.complete);var i=r;return{next:function(e){return i(e&&D.getOrCreate(e))},error:t,complete:n}}function j(e,t){var n=function(e,t){var n=S();if(!n)return[];var r=i.SE(P,e,t);switch(n.getItem(r)){case I.NONE:return[i.BV];case I.LOCAL:return[i.AP,i.aT];case I.SESSION:return[i.aT];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(i.AP)||n.push(i.AP),"undefined"!=typeof window)for(var r=0,a=[i.a$,i.aT];r<a.length;r++){var o=a[r];n.includes(o)||n.push(o)}return n.includes(i.BV)||n.push(i.BV),n}V.Persistence=I;var Z=function(){function e(){c(this,e),this.providerId="phone",this._delegate=new i.RO(T(r.Z.auth()))}return h(e,[{key:"verifyPhoneNumber",value:function(e,t){return this._delegate.verifyPhoneNumber(e,t)}},{key:"unwrap",value:function(){return this._delegate}}],[{key:"credential",value:function(e,t){return i.RO.credential(e,t)}}]),e}();Z.PHONE_SIGN_IN_METHOD=i.RO.PHONE_SIGN_IN_METHOD,Z.PROVIDER_ID=i.RO.PROVIDER_ID;var $,H=i.PQ,J=function(){function e(t,n){var a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.Z.app();c(this,e),H(null===(a=o.options)||void 0===a?void 0:a.apiKey,"invalid-api-key",{appName:o.name}),this._delegate=new i.lI(t,n,o.auth()),this.type=this._delegate.type}return h(e,[{key:"clear",value:function(){this._delegate.clear()}},{key:"render",value:function(){return this._delegate.render()}},{key:"verify",value:function(){return this._delegate.verify()}}]),e}();($=r.Z).INTERNAL.registerComponent(new a.wA("auth-compat",(function(e){var t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new V(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i.Bs.EMAIL_SIGNIN,PASSWORD_RESET:i.Bs.PASSWORD_RESET,RECOVER_EMAIL:i.Bs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i.Bs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i.Bs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i.Bs.VERIFY_EMAIL}},EmailAuthProvider:i.w9,FacebookAuthProvider:i._O,GithubAuthProvider:i.GH,GoogleAuthProvider:i.hJ,OAuthProvider:i.O4,SAMLAuthProvider:i.VE,PhoneAuthProvider:Z,PhoneMultiFactorGenerator:i.ww,RecaptchaVerifier:J,TwitterAuthProvider:i.c4,Auth:V,AuthCredential:i.A$,Error:o.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),$.registerVersion("@firebase/auth-compat","0.2.16")}}]);