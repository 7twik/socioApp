(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,r){e.exports=r(59)},36:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(24),i=r.n(o),c=(r(36),r(7)),l=r(2),s=r(5),u=r.n(s);function f(){f=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var u={};function h(){}function p(){}function m(){}var d={};c(d,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==t&&r.call(y,a)&&(d=y);var g=m.prototype=h.prototype=Object.create(d);function E(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=m,c(g,"constructor",m),c(m,"constructor",p),p.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(g),c(g,i,"Generator"),c(g,a,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var h=/^[A-z][A-z0-9-_]{3,23}$/,p=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,m=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useState)(""),o=Object(l.a)(r,2),i=o[0],s=o[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),v=d[0],y=d[1],g=Object(n.useState)(!1),E=Object(l.a)(g,2),b=E[0],w=E[1],O=Object(n.useState)(""),j=Object(l.a)(O,2),x=j[0],N=j[1],L=Object(n.useState)(!1),S=Object(l.a)(L,2),_=S[0],k=S[1],P=Object(n.useState)(!1),F=Object(l.a)(P,2),A=F[0],G=F[1],T=Object(n.useState)(""),U=Object(l.a)(T,2),I=U[0],M=U[1],C=Object(n.useState)(!1),R=Object(l.a)(C,2),Y=R[0],q=R[1],D=Object(n.useState)(!1),B=Object(l.a)(D,2),$=B[0],z=B[1],X=Object(n.useState)(""),J=Object(l.a)(X,2),W=J[0],Z=J[1],H=Object(n.useState)(!1),K=Object(l.a)(H,2),Q=K[0],V=K[1],ee=Object(n.useState)([]),te=Object(l.a)(ee,2),re=te[0],ne=te[1];Object(n.useEffect)(function(){u.a.get("/api/found").then(function(e){return ne(e.data)}),re.forEach(function(t){var r=t.Username;i===r&&(Z("Username Taken"),e.current.focus())})},[i,re]),Object(n.useEffect)(function(){e.current.focus()},[]),Object(n.useEffect)(function(){y(h.test(i))},[i]),Object(n.useEffect)(function(){k(p.test(x)),q(x===I)},[x,I]),Object(n.useEffect)(function(){Z("")},[i,x,I]);var ae=function(){var e=Object(c.a)(f().mark(function e(){var r;return f().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{r={Username:i,Password:x},console.log(r),u.a.post("/api/register",r,{Unique:!0}),V(!0),s(""),N(""),M("")}catch(n){n.response?409===n.response.status?Z("Username Taken"):Z("Registration Failed"):Z("No Server Response"),t.current.focus()}case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,Q?a.a.createElement("section",{className:"App sec"},a.a.createElement("h1",null,"Success!"),a.a.createElement("p",null,a.a.createElement("a",{href:"\\"},"Sign In"))):a.a.createElement("section",{className:"App sec"},a.a.createElement("p",{ref:t,className:W?"errmsg":"offscreen","aria-live":"assertive"},W),a.a.createElement("h1",null,"Register"),a.a.createElement("form",{onSubmit:ae,className:"polo"},a.a.createElement("label",{htmlFor:"username"},"Username:"),a.a.createElement("input",{className:"kolo",type:"text",id:"username",ref:e,autoComplete:"off",onChange:function(e){return s(e.target.value)},value:i,required:!0,"aria-invalid":v?"false":"true","aria-describedby":"uidnote",onFocus:function(){return w(!0)},onBlur:function(){return w(!1)}}),a.a.createElement("p",{id:"uidnote",className:b&&i&&!v?"instructions":"offscreen"},"4 to 24 characters.",a.a.createElement("br",null),"Must begin with a letter.",a.a.createElement("br",null),"Letters, numbers, underscores, hyphens allowed."),a.a.createElement("label",{htmlFor:"password"},"Password:"),a.a.createElement("input",{className:"kolo",type:"password",id:"password",onChange:function(e){return N(e.target.value)},value:x,required:!0,"aria-invalid":_?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return G(!0)},onBlur:function(){return G(!1)}}),a.a.createElement("p",{id:"pwdnote",className:A&&!_?"instructions":"offscreen"},"8 to 24 characters.",a.a.createElement("br",null),"Must include uppercase and lowercase letters, a number and a special character.",a.a.createElement("br",null),"Allowed special characters: ",a.a.createElement("span",{"aria-label":"exclamation mark"},"!")," ",a.a.createElement("span",{"aria-label":"at symbol"},"@")," ",a.a.createElement("span",{"aria-label":"hashtag"},"#")," ",a.a.createElement("span",{"aria-label":"dollar sign"},"$")," ",a.a.createElement("span",{"aria-label":"percent"},"%")),a.a.createElement("label",{htmlFor:"confirm_pwd"},"Confirm Password:"),a.a.createElement("input",{className:"kolo",type:"password",id:"confirm_pwd",onChange:function(e){return M(e.target.value)},value:I,required:!0,"aria-invalid":Y?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return z(!0)},onBlur:function(){return z(!1)}}),a.a.createElement("p",{id:"confirmnote",className:$&&!Y?"instructions":"offscreen"},"Must match the first password input field."),a.a.createElement("button",{className:"butto kolo neon",disabled:!(v&&_&&Y)},a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),"Sign Up")),a.a.createElement("p",null,"Already registered?",a.a.createElement("br",null),a.a.createElement("span",{className:"line"},a.a.createElement("a",{href:"\\"},"Sign In")))))};var d=function(){return a.a.createElement("header",null,a.a.createElement("h1",null,"Synthisha",a.a.createElement("a",{href:"/Post",className:"navyh neon"},a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"})," All Post "),a.a.createElement("a",{href:"/MyPost",className:"navyh neon"},a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),"My Post ")),a.a.createElement("a",{href:"/",className:"neon Logout"},a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),"Log out"))};var v=function(e){return a.a.createElement("div",{className:"note mcard"},a.a.createElement("h1",{className:"userc"},e.User),a.a.createElement("img",{src:e.url,alt:"gg",className:"",style:{width:"320px",textAlign:"center"}}),a.a.createElement("div",{className:"write"},a.a.createElement("h1",null,e.title),a.a.createElement("p",{className:"darkF"},e.content)))},y=(u.a.create({}),r(9)),g=r.n(y),E=r(8);var b=function(){g()('link[href*="../index.css"]').prop("disable",!0);var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],o=t[1];return Object(n.useEffect)(function(){g()('link[href*="../index.css"]').prop("disable",!0)},[]),Object(n.useEffect)(function(){u.a.get("/api/poost").then(function(e){return o(e)}),console.log(r)},[r]),Object(n.useEffect)(function(){console.log(r)},[r]),a.a.createElement("div",{className:"appoo"},a.a.createElement(d,null),r.map(function(e,t){return a.a.createElement("div",null,a.a.createElement(E.a,{className:"tilt",tiltMaxAngleX:10,tiltMaxAngleY:10,perspective:1e3,transitionSpeed:1e3,scale:.93,gyroscope:!0},a.a.createElement(v,{User:e.Username,key:t,id:t,title:e.title,content:e.content,_id:e._id,url:e.url})),a.a.createElement("div",{className:"gap"}))}))};function w(){w=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var u={};function f(){}function h(){}function p(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(N([])));v&&v!==t&&r.call(v,a)&&(m=v);var y=p.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var O=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useState)(""),o=Object(l.a)(r,2),i=o[0],s=o[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),p=h[0],m=h[1],d=Object(n.useState)(""),v=Object(l.a)(d,2),y=v[0],g=v[1],O=Object(n.useState)(!1),j=Object(l.a)(O,2),x=j[0],N=j[1],L=Object(n.useState)([]),S=Object(l.a)(L,2),_=S[0],k=S[1];Object(n.useEffect)(function(){e.current.focus()},[]),Object(n.useEffect)(function(){g("")},[i,p]);var P=function(){var t=Object(c.a)(w().mark(function t(r){return w().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),u.a.get("/api/found").then(function(e){return k(e.data)}),console.log(_),_.forEach(function(t){var r=t.Username,n=t.Password,a={Username:r,Password:n};if(console.log(r),i===r){if(p===n)u.a.post("/Auth",a),N(!0);else if(p!==n)return g("Wrong Password for this username"),0;e.current.focus()}else i!==r&&g("Either username or password is wrong.")});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,x?a.a.createElement("div",null,a.a.createElement(b,null)):a.a.createElement(E.a,{className:"tilt",tiltMaxAngleX:10,tiltMaxAngleY:10,perspective:1e3,transitionSpeed:1e3,scale:.999,gyroscope:!0},a.a.createElement("section",{className:"App sec mcard"},a.a.createElement("p",{ref:t,className:y?"errmsg":"offscreen","aria-live":"assertive"},y),a.a.createElement("h1",null,"Sign In"),a.a.createElement("form",{onSubmit:P,className:"polo"},a.a.createElement("label",{htmlFor:"username"},"Username:"),a.a.createElement("input",{className:"kolo",type:"text",id:"username",ref:e,autoComplete:"off",onChange:function(e){return s(e.target.value)},value:i,required:!0}),a.a.createElement("label",{htmlFor:"password"},"Password:"),a.a.createElement("input",{className:"kolo",type:"password",id:"password",onChange:function(e){return m(e.target.value)},value:p,required:!0}),a.a.createElement("button",{className:"butto kolo neon"},a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),a.a.createElement("span",{className:"voyla"}),"Sign In")),a.a.createElement("p",null,"Need an Account?",a.a.createElement("br",null),a.a.createElement("span",{className:"line"},a.a.createElement("a",{href:"/Register"},"Sign Up"))))))},j=r(27);var x=function(e){return a.a.createElement("div",{className:"note mcard"},a.a.createElement("h1",{className:"userc"},e.User),a.a.createElement("img",{src:e.url,alt:"gg",className:"",style:{width:"320px",textAlign:"center"}}),a.a.createElement("div",{className:"write"},a.a.createElement("h1",null,e.title),a.a.createElement("p",{className:"darkF"},e.content)),a.a.createElement("button",{className:"but delic",onClick:function(){e.onDelete(e.title,e.id,e._id)}},"Del"))},N=r(11),L=r(25);function S(){S=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var u={};function f(){}function h(){}function p(){}var m={};c(m,a,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(x([])));v&&v!==t&&r.call(v,a)&&(m=v);var y=p.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t(function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then(function(e){n("next",e,i,c)},function(e){n("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return n("throw",e,i,c)})}c(l.arg)}(a,o,n,i)})}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,a,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var _=function(e){var t=Object(n.useState)(null),r=Object(l.a)(t,2),o=r[0],i=r[1],s=Object(n.useState)(""),f=Object(l.a)(s,2),h=f[0],p=f[1],m=Object(n.useState)(!1),d=Object(l.a)(m,2),v=d[0],y=d[1],g=Object(n.useState)(!1),E=Object(l.a)(g,2),b=E[0],w=E[1],O=Object(n.useState)({title:"",content:""}),j=Object(l.a)(O,2),x=j[0],_=j[1];function k(e){var t=e.target,r=t.name,n=t.value;_(function(e){return Object(L.a)({},e,Object(N.a)({},r,n))})}var P=function(){var e=Object(c.a)(S().mark(function e(t){var r,n,a;return S().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",o),r.append("upload_preset","notepad"),r.append("cloud_name","dcyfkgtgv"),e.next=6,fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{method:"post",body:r});case 6:return n=e.sent,e.next=9,n.json();case 9:a=e.sent,console.log(a),p(a),y(!0),t.preventDefault();case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return a.a.useEffect(function(){""!==o&&w(!0)},[o]),a.a.useEffect(function(t){if(!0===v){var r={title:x.title,content:x.content,url:h.secure_url};e.onAdd(x),_({title:"",content:"",url:""}),u.a.post("/api/note",r),y(!1)}},[v,x,e,h.secure_url]),a.a.createElement("div",null,a.a.createElement("form",{className:"create-note"},a.a.createElement("input",{name:"title",onChange:k,value:x.title,placeholder:"Title"}),a.a.createElement("textarea",{name:"content",onChange:k,value:x.content,placeholder:"Take a note...",rows:"3"}),a.a.createElement("div",{className:"file-field input-field"},a.a.createElement("div",{className:"btn #64b5f6 blue darken-1"},a.a.createElement("span",null,"Upload Image"),a.a.createElement("input",{type:"file",onChange:function(e){return i(e.target.files[0])}})),a.a.createElement("p",{id:"uidnote",className:b?"offscreen":"instructions"},"Must Insert Image. in jpg format preferably.")),a.a.createElement("div",{className:"Submito"},a.a.createElement("h1",{onClick:P},"Add"))))};var k=function(){g()('link[href*="../index.css"]').prop("disable",!0);var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],o=t[1];function i(e,t,r){console.log(e+"  |  "+t);var n={title:e,id:t,_id:r};u.a.post("/api/del",n),o(function(e){return e.filter(function(e,r){return r!==t})})}return Object(n.useEffect)(function(){g()('link[href*="../index.css"]').prop("disable",!0)},[]),Object(n.useEffect)(function(){u.a.get("/api/note").then(function(e){return o(e.data)}),console.log(r)},[r]),Object(n.useEffect)(function(){console.log(r)},[r]),a.a.createElement("div",{className:"appoo"},a.a.createElement(d,null),a.a.createElement(_,{onAdd:function(e){o(function(t){return[].concat(Object(j.a)(t),[e])})}}),r.map(function(e,t){return a.a.createElement("div",null,a.a.createElement(E.a,{className:"tilt",tiltMaxAngleX:10,tiltMaxAngleY:10,perspective:1e3,transitionSpeed:1e3,scale:.93,gyroscope:!0},a.a.createElement(x,{User:e.Username,key:t,id:t,title:e.title,content:e.content,onDelete:i,_id:e._id,url:e.url})),a.a.createElement("div",{className:"gap"}))}))},P=r(26),F=r(1);var A=function(){return a.a.createElement("div",null,a.a.createElement(P.a,null,a.a.createElement(F.c,null,a.a.createElement(F.a,{path:"/",element:a.a.createElement(O,null)})),a.a.createElement(F.c,null,a.a.createElement(F.a,{path:"/Register",element:a.a.createElement(m,null)})),a.a.createElement(F.c,null,a.a.createElement(F.a,{path:"/MyPost",element:a.a.createElement(k,null)})),a.a.createElement(F.c,null,a.a.createElement(F.a,{path:"/Post",element:a.a.createElement(b,null)}))))};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement("div",{className:"bgro"},a.a.createElement(A,null))))}},[[28,1,2]]]);
//# sourceMappingURL=main.4f36bcae.chunk.js.map