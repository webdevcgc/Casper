!function i(a,u,c){function s(e,n){if(!u[e]){if(!a[e]){var t="function"==typeof require&&require;if(!n&&t)return t(e,!0);if(l)return l(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[e]={exports:{}};a[e][0].call(o.exports,function(n){return s(a[e][1][n]||n)},o,o.exports,i,a,u,c)}return u[e].exports}for(var l="function"==typeof require&&require,n=0;n<c.length;n++)s(c[n]);return s}({1:[function(n,e,t){"use strict";var u=n("@tryghost/members-layer1");e.exports=function(n){var o="".concat(n.membersUrl,"/auth"),e="".concat(n.membersUrl,"/gateway"),t=n.container,r=u({gatewayUrl:e,container:t}),i=function(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body;return new Promise(function(n){var e=document.createElement("iframe");e.style.display="none",e.src=t,e.onload=function(){n(e)},r.appendChild(e)})}(o,t).then(function(n){return n.style.position="fixed",n.style.width="100%",n.style.height="100%",n.style.background="transparent",n.style.top="0",n.style["z-index"]="9999",n});function a(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"";return i.then(function(r){return new Promise(function(t){r.src="".concat(o,"#").concat(n,"?").concat(e),r.style.display="block",window.addEventListener("message",function n(e){e.source===r.contentWindow&&e.data&&"pls-close-auth-popup"===e.data.msg&&(window.removeEventListener("message",n),r.style.display="none",t(!!e.data.success))})})})}return Object.assign(r.bus,{getToken:function(n){var e=n.audience;return r.getToken({audience:e})},signout:function(){return r.signout()},signin:function(){return a("signin")},upgrade:function(){return a("upgrade")},resetPassword:function(n){var e=n.token;return a("reset-password","token=".concat(e))}})}},{"@tryghost/members-layer1":2}],2:[function(n,e,t){"use strict";var i=n("@tryghost/members-layer0"),a=n("minivents");function u(e){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return function(n){return new Promise(function(t,r){n.call(e,o,function(n,e){n&&r(n),t(e)})})}}e.exports=function(n){var r={getToken:function(n){var e=n.audience;return o.then(u("getToken",{audience:e}))},signout:function(){return o.then(u("signout"))},signin:function(n){var e=n.email,t=n.password;return o.then(u("signin",{email:e,password:t}))},signup:function(n){var e=n.name,t=n.email,r=n.password;return o.then(u("signin",{name:e,email:t,password:r}))},requestPasswordReset:function(n){var e=n.email;return o.then(u("request-password-reset",{email:e}))},resetPassword:function(n){var e=n.token,t=n.password;return o.then(u("reset-password",{token:e,password:t}))},verifyEmail:function(n){var e=n.token;return o.then(u("verify-email",{token:e}))},bus:new a},o=function(t){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body;return new Promise(function(n){var e=document.createElement("iframe");e.style.display="none",e.src=t,e.onload=function(){n(e)},r.appendChild(e)})}(n.gatewayUrl,n.container).then(function(n){var e=i(n),t=u("init");return e.listen(function(n){r.bus.emit(n.event,n.payload)}),t(e).then(function(){return e})});return r}},{"@tryghost/members-layer0":3,minivents:4}],3:[function(n,e,t){"use strict";e.exports=function(i){var n,a=(n=1,function(){return n+=1}),u=new URL(i.getAttribute("src")).origin,c={},t=function(){};return window.addEventListener("message",function(n){if(n.origin===u){if(!n.data||!n.data.uid)return n.data.event?t(n.data):void 0;var e=c[n.data.uid];e&&(delete c[n.data.uid],e(n.data.error,n.data.data))}}),{call:function(n,e,t){var r=a(),o={uid:r,method:n,options:e};c[r]=t,i.contentWindow.postMessage(o,u)},listen:function(n){t=n}}}},{}],4:[function(n,e,t){"use strict";e.exports=function(i){var a={},u=[];(i=i||this).on=function(n,e,t){return(a[n]=a[n]||[]).push([e,t]),i},i.off=function(n,e){n||(a={});for(var t=a[n]||u,r=t.length=e?t.length:0;r--;)e==t[r][0]&&t.splice(r,1);return i},i.emit=function(n){for(var e,t=a[n]||u,r=0<t.length?t.slice(0,t.length):t,o=0;e=r[o++];)e[0].apply(e[1],u.slice.call(arguments,1));return i}}},{}],5:[function(n,t,e){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}!function(n,e){void 0!==t?t.exports=e():"function"==typeof define&&"object"==r(define.amd)?define(e):this.domready=e()}(0,function(){var n,e=[],t=document,r=t.documentElement.doScroll,o="DOMContentLoaded",i=(r?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return i||t.addEventListener(o,n=function(){for(t.removeEventListener(o,n),i=1;n=e.shift();)n()}),function(n){i?setTimeout(n,0):e.push(n)}})},{}],6:[function(n,e,t){"use strict";function C(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var r=n("domready"),M=n("@tryghost/members-layer2");function N(n){n&&window.location.reload()}function R(n){try{var e=C(n.split("."),3),t=(e[0],e[1]);e[2];return JSON.parse(atob(t.replace("+","-").replace("/","_")))}catch(n){return null}}r(function(){var o=M({membersUrl:window.membersUrl}),i=new URL(window.location.href).origin,n=C(window.location.hash.match(/^#([^?]+)\??(.*)$/)||[],3),e=n[0],t=n[1],r=n[2];if(e&&"reset-password"===t){var a=r.match(/token=([a-zA-Z0-9-_]+.[a-zA-Z0-9-_]+.[a-zA-Z0-9-_]+)/)||[],u=C(a,2),c=u[0],s=u[1];if(c)return o.resetPassword({token:s}).then(function(n){return window.location.hash="",n}).then(N)}var l=document.querySelectorAll("[data-members-signin]"),f=document.querySelectorAll("[data-members-upgrade]"),d=document.querySelectorAll("[data-members-signout]");function m(n){var e=R(n),t=new Date(1e3*e.exp);document.cookie="member="+n+";Path=/;expires="+t.toUTCString()}function v(){document.cookie="member=null;Path=/;max-age=0"}function y(n){n.preventDefault(),o.signout().then(function(){return v(),!0}).then(N)}function h(n){n.preventDefault(),o.signin().then(function(){return o.getToken({audience:i}).then(function(n){return m(n),!0})}).then(N)}function p(n){n.preventDefault(),o.upgrade().then(N)}o.on("signedin",function(){var n=document.cookie,e=n.match(/member=([a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]*)/)||[null],t=C(e,2),r=(t[0],t[1]);if(r&&function(n){var e=R(n);if(!e)return!0;var t=1e3*e.exp,r=Date.now();if(t<r)return!0;return!1}(r))return o.signout();o.getToken({audience:i}).then(function(n){m(n)})}),o.on("signedout",function(){v()});var g=!0,w=!1,b=void 0;try{for(var k,x=l[Symbol.iterator]();!(g=(k=x.next()).done);g=!0){var S=k.value;S.addEventListener("click",h)}}catch(n){w=!0,b=n}finally{try{g||null==x.return||x.return()}finally{if(w)throw b}}var E=!0,A=!1,L=void 0;try{for(var U,P=f[Symbol.iterator]();!(E=(U=P.next()).done);E=!0){var T=U.value;T.addEventListener("click",p)}}catch(n){A=!0,L=n}finally{try{E||null==P.return||P.return()}finally{if(A)throw L}}var q=!0,_=!1,D=void 0;try{for(var z,O=d[Symbol.iterator]();!(q=(z=O.next()).done);q=!0){var Z=z.value;Z.addEventListener("click",y)}}catch(n){_=!0,D=n}finally{try{q||null==O.return||O.return()}finally{if(_)throw D}}})},{"@tryghost/members-layer2":1,domready:5}]},{},[6]);
//# sourceMappingURL=members-theme-dropin.js.map
