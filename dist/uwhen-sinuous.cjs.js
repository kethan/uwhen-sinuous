"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports[Symbol.toStringTag]="Module";var t=new Set;function e(e,n){var r=new Set;function o(){document.querySelectorAll(e).forEach((function(o){if(!r.has(o)){r.add(o);var i=n(o),l="function"==typeof i?i:function(){};!function(e,n,r){function o(){n&&document.contains(n)&&n.matches(e)||(t.delete(o),r())}setTimeout(o),t.add(o)}(e,o,(function(){r.delete(o),l()}))}}))}setTimeout(o),t.add(o)}new window.MutationObserver((function(){t.forEach((function(t){return t()}))})).observe(document,{attributes:!0,childList:!0,subtree:!0});let n,r,o=[];function i(t){let e=n,r=()=>{};n=r,p(r);let o=t((()=>{a(r),n=void 0}));return n=e,o}function l(t){let e=n;n=void 0;let r=t();return n=e,r}function s(t){function e(i){if(0===arguments.length)return n&&!e.__o.has(n)&&(e.__o.add(n),n.u.push(e)),t;if(r)return e.t===o&&r.push(e),e.t=i,i;t=i;let l=n;return n=void 0,e.o=new Set(e.__o),e.o.forEach((t=>t.i=!1)),e.o.forEach((t=>{t.i||t()})),n=l,t}return e.$o=1,e.__o=new Set,e.t=o,e}function u(t,e){function r(){let o=n;return n&&n.__c.push(r),a(r),r.i=!0,n=r,e=t(e),n=o,e}function o(){return r.i?n&&r.u.forEach((t=>t())):e=r(),e}return t.s=r,p(r),r(),o.$o=1,o}function c(t){return n&&n.l.push(t),t}function f(t){return u(t),()=>a(t.s)}function a(t){t.__c.forEach(a),t.u.forEach((e=>{e.__o.delete(t),e.o&&e.o.delete(t)})),t.l.forEach((t=>t())),p(t)}function p(t){t.u=[],t.__c=[],t.l=[]}let d=(t,e,n,r)=>{let o={};for(let i=1;i<e.length;i++){let l=e[i],s="number"==typeof l?n[l]:l,u=e[++i];if(1===u)r[0]=s;else if(3===u)r[1]=Object.assign(r[1]||{},s);else if(5===u)(r[1]=r[1]||{})[e[++i]]=s;else if(6===u){let t=e[++i],n=(r[1]=r[1]||{})[t],l=o[t];l||"function"!=typeof s&&"function"!=typeof n||(l=n&&[n]||[],r[1][t]=function(){let t="";for(var e=0;e<l.length;e++)t+="function"==typeof l[e]?l[e].call(this):l[e];return t}),l?l.push(s):r[1][t]+=s+""}else if(u){let e=()=>t.apply(null,d(t,s,n,["",null]));r.push("function"==typeof r[0]?e:e())}else r.push(s)}return r},h=function(t){let e,n,r=1,o="",i="",l=[0],s=t=>{1===r&&(t||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(t||o,0):3===r&&(t||o)?(l.push(t||o,1),r=2):2===r&&"..."===o&&t?l.push(t,3):2===r&&o&&!t?l.push(!0,5,o):r>=5&&((o||!t&&5===r)&&(l.push(o,r,n),r=6),t&&(l.push(t,r,n),r=6)),o=""};for(let u=0;u<t.length;u++){u&&(1===r&&s(),s(u));for(let c=0;c<t[u].length;c++)e=t[u][c],1===r?"<"===e?(s(),l=[l],r=3):o+=e:4===r?"--"===o&&">"===e?(r=1,o=""):o=e+o[0]:i?e===i?i="":o+=e:'"'===e||"'"===e?i=e:">"===e?(s(),r=1):r&&("="===e?(r=5,n=o,o=""):"/"===e&&(r<5||">"===t[u][c+1])?(s(),3===r&&(l=l[0]),r=l,(l=l[0]).push(r,2),r=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(s(),r=2):o+=e),3===r&&"!--"===o&&(r=4,l=l[0])}return s(),l},y=new Map,m=function(t){let e=y.get(this);return e||(e=new Map,y.set(this,e)),e=d(this,e.get(t)||(e.set(t,e=h(t)),e),arguments,[]),e.length>1?e:e[0]},b=function(){let t=m.apply(this,arguments);if(t)return Array.isArray(t)?this(t):"object"==typeof t?t:this([t])};function g(){let t=b.bind(this);return(this.wrap||t).apply(t,arguments)}let x={},v=[];function E(t){return this.t&&this.t[t.type](t)}x.h=(...t)=>{let e,n=r=>{if(null==r);else if("string"==typeof r)e?x.add(e,r):e=x.s?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);else if(Array.isArray(r))e||(e=document.createDocumentFragment()),r.forEach(n);else if(r instanceof Node)e?x.add(e,r):e=r;else if("object"==typeof r)x.property(e,r,null,x.s);else if("function"==typeof r)if(e){let t=x.add(e,"");x.insert(e,r,t)}else e=r.apply(null,t.splice(1));else x.add(e,""+r)};return t.forEach(n),e},x.insert=(t,e,n,r,o)=>(t=n&&n.parentNode||t,o=o||r instanceof Node&&r,e===r||(r&&"string"!=typeof r||!("string"==typeof e||"number"==typeof e&&(e+=""))?"function"==typeof e?x.subscribe((()=>{r=x.insert(t,e.call({el:t,endMark:n}),n,r,o)})):(n?r&&(o||(o=r.o&&r.o.nextSibling||n.previousSibling),x.rm(t,o,n)):t.textContent="",r=null,e&&!0!==e&&(r=x.add(t,e,n))):(null!=r&&t.firstChild?n?(n.previousSibling||t.lastChild).data=e:t.firstChild.data=e:n?x.add(t,e,n):t.textContent=e,r=e)),r),x.property=(t,e,n,r,o)=>{if(null!=e)if(!n||"attrs"===n&&(r=!0))for(n in e)x.property(t,e[n],n,r,o);else"o"!==n[0]||"n"!==n[1]||e.$o?"function"==typeof e?x.subscribe((()=>{x.property(t,e.call({el:t,name:n}),n,r,o)})):o?t.style.setProperty(n,e):r||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?t.setAttribute(n,e):"style"===n?"string"==typeof e?t.style.cssText=e:x.property(t,e,null,r,!0):("class"===n&&(n+="Name"),t[n]=e):(i=t,s=e,l=(l=n).slice(2).toLowerCase(),s?i.addEventListener(l,E):i.removeEventListener(l,E),(i.t||(i.t={}))[l]=s);var i,l,s},x.add=(t,e,n)=>{let r=(t=>{const{childNodes:e}=t;if(e&&11===t.nodeType)return e.length<2?e[0]:{o:x.add(t,"",e[0])}})(e="string"==typeof(o=e)?document.createTextNode(o):o instanceof Node?o:x.h(v,o))||e;var o;return t.insertBefore(e,n&&n.parentNode&&n),r},x.rm=(t,e,n)=>{for(;e&&e!==n;){let n=e.nextSibling;t===e.parentNode&&t.removeChild(e),e=n}},x.subscribe=f,x.cleanup=c,x.root=i,x.sample=l,x.hs=(...t)=>{let e=x.s;x.s=!0;let n=w(...t);return x.s=e,n};let N,w=(...t)=>x.h.apply(x.h,t);function _(t,e){let n=N;N=[];let r=t(),o=N;N=n;let i=r.content||r.parentNode&&r;i||(i=document.createDocumentFragment(),i.appendChild(r));let l=i.cloneNode(!0);function s(t,n){!1!==n&&!0!==n||(e=n);let r,s={};return e?(i.p&&i.p.forEach((t=>i.appendChild(t))),r=i):r=l.cloneNode(!0),r.firstChild&&(r.firstChild.props=t),o.forEach((t=>{t.A=e?t.o:C(r,t.g),t.h=e?t.u:t.j&&C(t.A,t.j)})),o.forEach((e=>{x.action(e,t,s)(e.i,e.l)})),i.p=Array.from(i.childNodes),r}return e||o.forEach((t=>{t.g=A(i,t.o),t.j=t.u&&A(t.o,t.u)})),s.$t=!0,s}function A(t,e){let n,r=[];for(;(n=e.parentNode)!==t.parentNode;)r.unshift(Array.from(n.childNodes).indexOf(e)),e=n;return r}function C(t,e){return e.forEach((e=>t=t.childNodes[e])),t}x.action=(t,e,n)=>{let r=t.A;return(o,i)=>{let l=e[o];null!=l&&t(r,t.h,i,l),t.s&&(n[o]||(n[o]=[],Object.defineProperty(e,o,{get:()=>t.m?i in r?r[i]:r:l,set(t){l=t,n[o].forEach((e=>e(t)))}})),n[o].push(t.bind(null,r,t.h,i)))}};let S={};function j(t){let e=(t?x.hs:x.h).bind();return e.wrap=function(){let t=this,e=Array.from(arguments),n=e[0],r=e.slice(1);for(let i=1;i<e.length;i++)e[i]=M(i-1);function o(){const{endMark:i}=this||{},l=n.join("\0");let s=S[l];s||(s=_((()=>t.apply(null,e))),S[l]=s),o.t=o.t||i;let u=i&&o.t!==i;return s.t?u=s.t!==i:s.t=i,s(r,!u)}return o},e}function M(t){return function(t,e,n){let r=function(){const{el:r,name:o,endMark:i}=this,l=(t,e,n,r)=>{if(null==n){let n=e||t;n.t=x.insert(t,r,e,n.t)}else x.property(t,r,n)};l.o=r,l.u=i,l.l=o,l.i=t,l.s=e,l.m=n,N.push(l)};return r.$o=2,r}(t)}let T=j(),$=j(!0);const k=(t,e)=>t.getAttribute(e),L=(O="slot",P=!0,t=>[].reduce.call(t.querySelectorAll("["+O+"]"),((e,n)=>{let{parentNode:r}=n;do{if(r===t){const t=k(n,O);e[t]=P?[].concat(e[t]||[],n):n;break}if(/-/.test(r.tagName)||k(r,"is"))break}while(r=r.parentNode);return e}),{}));var O,P;exports.S=u,exports.cleanup=c,exports.computed=u,exports.h=T,exports.hs=$,exports.html=function(){return g.apply(T,arguments)},exports.isListening=function(){return!!n},exports.o=s,exports.observable=s,exports.on=function(t,e,n,r){return t=[].concat(t),u((n=>{t.forEach((t=>t()));let o=n;return r||(o=l((()=>e(n)))),r=!1,o}),n)},exports.render=function(t,e){e.t=e.t||x.add(e,""),e.o=x.insert(e,t,e.t,e.o)},exports.root=i,exports.sample=l,exports.subscribe=f,exports.svg=function(){return g.apply($,arguments)},exports.transaction=function(t){let e=r;r=[];let n=t(),i=r;return r=e,i.forEach((t=>{if(t.t!==o){let e=t.t;t.t=o,t(e)}})),n},exports.unsubscribe=function(t){a(t.s)},exports.when=(t,n)=>{e(t,(t=>{const e={};for(let n=0;n<t.attributes.length;n++)e[[t.attributes[n].name]]=t.attributes[n].value;const r=L(t);(t=>{for(;t.firstChild;)t.removeChild(t.firstChild)})(t);const o=n(t,e,r);return()=>{o&&o()}}))};
