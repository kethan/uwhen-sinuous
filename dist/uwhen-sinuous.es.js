var t=new Set;function e(e,n){var r=new Set;function o(){document.querySelectorAll(e).forEach((function(o){if(!r.has(o)){r.add(o);var i=n(o),l="function"==typeof i?i:function(){};!function(e,n,r){function o(){n&&document.contains(n)&&n.matches(e)||(t.delete(o),r())}setTimeout(o),t.add(o)}(e,o,(function(){r.delete(o),l()}))}}))}setTimeout(o),t.add(o)}new window.MutationObserver((function(){t.forEach((function(t){return t()}))})).observe(document,{attributes:!0,childList:!0,subtree:!0});let n=(t,e,r,o)=>{let i={};for(let l=1;l<e.length;l++){let s=e[l],u="number"==typeof s?r[s]:s,a=e[++l];if(1===a)o[0]=u;else if(3===a)o[1]=Object.assign(o[1]||{},u);else if(5===a)(o[1]=o[1]||{})[e[++l]]=u;else if(6===a){let t=e[++l],n=(o[1]=o[1]||{})[t],r=i[t];r||"function"!=typeof u&&"function"!=typeof n||(r=n&&[n]||[],o[1][t]=function(){let t="";for(var e=0;e<r.length;e++)t+="function"==typeof r[e]?r[e].call(this):r[e];return t}),r?r.push(u):o[1][t]+=u+""}else if(a){let e=()=>t.apply(null,n(t,u,r,["",null]));o.push("function"==typeof o[0]?e:e())}else o.push(u)}return o},r=function(t){let e,n,r=1,o="",i="",l=[0],s=t=>{1===r&&(t||(o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(t||o,0):3===r&&(t||o)?(l.push(t||o,1),r=2):2===r&&"..."===o&&t?l.push(t,3):2===r&&o&&!t?l.push(!0,5,o):r>=5&&((o||!t&&5===r)&&(l.push(o,r,n),r=6),t&&(l.push(t,r,n),r=6)),o=""};for(let u=0;u<t.length;u++){u&&(1===r&&s(),s(u));for(let a=0;a<t[u].length;a++)e=t[u][a],1===r?"<"===e?(s(),l=[l],r=3):o+=e:4===r?"--"===o&&">"===e?(r=1,o=""):o=e+o[0]:i?e===i?i="":o+=e:'"'===e||"'"===e?i=e:">"===e?(s(),r=1):r&&("="===e?(r=5,n=o,o=""):"/"===e&&(r<5||">"===t[u][a+1])?(s(),3===r&&(l=l[0]),r=l,(l=l[0]).push(r,2),r=0):" "===e||"\t"===e||"\n"===e||"\r"===e?(s(),r=2):o+=e),3===r&&"!--"===o&&(r=4,l=l[0])}return s(),l},o=new Map,i=function(t){let e=o.get(this);return e||(e=new Map,o.set(this,e)),e=n(this,e.get(t)||(e.set(t,e=r(t)),e),arguments,[]),e.length>1?e:e[0]},l=function(){let t=i.apply(this,arguments);if(t)return Array.isArray(t)?this(t):"object"==typeof t?t:this([t])};function s(){let t=l.bind(this);return(this.wrap||t).apply(t,arguments)}let u,a,c=[];function f(){return!!u}function p(t){let e=u,n=()=>{};u=n,w(n);let r=t((()=>{N(n),u=void 0}));return u=e,r}function d(t){let e=u;u=void 0;let n=t();return u=e,n}function h(t){let e=a;a=[];let n=t(),r=a;return a=e,r.forEach((t=>{if(t.t!==c){let e=t.t;t.t=c,t(e)}})),n}function y(t){function e(n){if(0===arguments.length)return u&&!e.__o.has(u)&&(e.__o.add(u),u.u.push(e)),t;if(a)return e.t===c&&a.push(e),e.t=n,n;t=n;let r=u;return u=void 0,e.o=new Set(e.__o),e.o.forEach((t=>t.i=!1)),e.o.forEach((t=>{t.i||t()})),u=r,t}return e.$o=1,e.__o=new Set,e.t=c,e}function m(t,e){function n(){let r=u;return u&&u.__c.push(n),N(n),n.i=!0,u=n,e=t(e),u=r,e}function r(){return n.i?u&&n.u.forEach((t=>t())):e=n(),e}return t.s=n,w(n),n(),r.$o=1,r}function b(t){return u&&u.l.push(t),t}function g(t){return m(t),()=>N(t.s)}function v(t,e,n,r){return t=[].concat(t),m((n=>{t.forEach((t=>t()));let o=n;return r||(o=d((()=>e(n)))),r=!1,o}),n)}function E(t){N(t.s)}function N(t){t.__c.forEach(N),t.u.forEach((e=>{e.__o.delete(t),e.o&&e.o.delete(t)})),t.l.forEach((t=>t())),w(t)}function w(t){t.u=[],t.__c=[],t.l=[]}let _={},A=[];function C(t){return this.t&&this.t[t.type](t)}_.h=(...t)=>{let e,n=r=>{if(null==r);else if("string"==typeof r)e?_.add(e,r):e=_.s?document.createElementNS("http://www.w3.org/2000/svg",r):document.createElement(r);else if(Array.isArray(r))e||(e=document.createDocumentFragment()),r.forEach(n);else if(r instanceof Node)e?_.add(e,r):e=r;else if("object"==typeof r)_.property(e,r,null,_.s);else if("function"==typeof r)if(e){let t=_.add(e,"");_.insert(e,r,t)}else e=r.apply(null,t.splice(1));else _.add(e,""+r)};return t.forEach(n),e},_.insert=(t,e,n,r,o)=>(t=n&&n.parentNode||t,o=o||r instanceof Node&&r,e===r||(r&&"string"!=typeof r||!("string"==typeof e||"number"==typeof e&&(e+=""))?"function"==typeof e?_.subscribe((()=>{r=_.insert(t,e.call({el:t,endMark:n}),n,r,o)})):(n?r&&(o||(o=r.o&&r.o.nextSibling||n.previousSibling),_.rm(t,o,n)):t.textContent="",r=null,e&&!0!==e&&(r=_.add(t,e,n))):(null!=r&&t.firstChild?n?(n.previousSibling||t.lastChild).data=e:t.firstChild.data=e:n?_.add(t,e,n):t.textContent=e,r=e)),r),_.property=(t,e,n,r,o)=>{if(null!=e)if(!n||"attrs"===n&&(r=!0))for(n in e)_.property(t,e[n],n,r,o);else"o"!==n[0]||"n"!==n[1]||e.$o?"function"==typeof e?_.subscribe((()=>{_.property(t,e.call({el:t,name:n}),n,r,o)})):o?t.style.setProperty(n,e):r||"data-"===n.slice(0,5)||"aria-"===n.slice(0,5)?t.setAttribute(n,e):"style"===n?"string"==typeof e?t.style.cssText=e:_.property(t,e,null,r,!0):("class"===n&&(n+="Name"),t[n]=e):(i=t,s=e,l=(l=n).slice(2).toLowerCase(),s?i.addEventListener(l,C):i.removeEventListener(l,C),(i.t||(i.t={}))[l]=s);var i,l,s},_.add=(t,e,n)=>{let r=(t=>{const{childNodes:e}=t;if(e&&11===t.nodeType)return e.length<2?e[0]:{o:_.add(t,"",e[0])}})(e="string"==typeof(o=e)?document.createTextNode(o):o instanceof Node?o:_.h(A,o))||e;var o;return t.insertBefore(e,n&&n.parentNode&&n),r},_.rm=(t,e,n)=>{for(;e&&e!==n;){let n=e.nextSibling;t===e.parentNode&&t.removeChild(e),e=n}},_.subscribe=g,_.cleanup=b,_.root=p,_.sample=d,_.hs=(...t)=>{let e=_.s;_.s=!0;let n=j(...t);return _.s=e,n};let S,j=(...t)=>_.h.apply(_.h,t);function x(t,e){let n=S;S=[];let r=t(),o=S;S=n;let i=r.content||r.parentNode&&r;i||(i=document.createDocumentFragment(),i.appendChild(r));let l=i.cloneNode(!0);function s(t,n){!1!==n&&!0!==n||(e=n);let r,s={};return e?(i.p&&i.p.forEach((t=>i.appendChild(t))),r=i):r=l.cloneNode(!0),r.firstChild&&(r.firstChild.props=t),o.forEach((t=>{t.A=e?t.o:$(r,t.g),t.h=e?t.u:t.j&&$(t.A,t.j)})),o.forEach((e=>{_.action(e,t,s)(e.i,e.l)})),i.p=Array.from(i.childNodes),r}return e||o.forEach((t=>{t.g=M(i,t.o),t.j=t.u&&M(t.o,t.u)})),s.$t=!0,s}function M(t,e){let n,r=[];for(;(n=e.parentNode)!==t.parentNode;)r.unshift(Array.from(n.childNodes).indexOf(e)),e=n;return r}function $(t,e){return e.forEach((e=>t=t.childNodes[e])),t}_.action=(t,e,n)=>{let r=t.A;return(o,i)=>{let l=e[o];null!=l&&t(r,t.h,i,l),t.s&&(n[o]||(n[o]=[],Object.defineProperty(e,o,{get:()=>t.m?i in r?r[i]:r:l,set(t){l=t,n[o].forEach((e=>e(t)))}})),n[o].push(t.bind(null,r,t.h,i)))}};let k={};function L(t){let e=(t?_.hs:_.h).bind();return e.wrap=function(){let t=this,e=Array.from(arguments),n=e[0],r=e.slice(1);for(let i=1;i<e.length;i++)e[i]=O(i-1);function o(){const{endMark:i}=this||{},l=n.join("\0");let s=k[l];s||(s=x((()=>t.apply(null,e))),k[l]=s),o.t=o.t||i;let u=i&&o.t!==i;return s.t?u=s.t!==i:s.t=i,s(r,!u)}return o},e}function T(t,e){e.t=e.t||_.add(e,""),e.o=_.insert(e,t,e.t,e.o)}function O(t){return function(t,e,n){let r=function(){const{el:r,name:o,endMark:i}=this,l=(t,e,n,r)=>{if(null==n){let n=e||t;n.t=_.insert(t,r,e,n.t)}else _.property(t,r,n)};l.o=r,l.u=i,l.l=o,l.i=t,l.s=e,l.m=n,S.push(l)};return r.$o=2,r}(t)}let q=L(),D=L(!0);function F(){return s.apply(q,arguments)}function P(){return s.apply(D,arguments)}const B=(t,e)=>t.getAttribute(e),z=(G="slot",H=!0,t=>[].reduce.call(t.querySelectorAll("["+G+"]"),((e,n)=>{let{parentNode:r}=n;do{if(r===t){const t=B(n,G);e[t]=H?[].concat(e[t]||[],n):n;break}if(/-/.test(r.tagName)||B(r,"is"))break}while(r=r.parentNode);return e}),{}));var G,H;const I=(t,n)=>{e(t,(t=>{const e={};for(let n=0;n<t.attributes.length;n++)e[[t.attributes[n].name]]=t.attributes[n].value;const r=z(t);(t=>{for(;t.firstChild;)t.removeChild(t.firstChild)})(t);const o=n(t,e,r);return()=>{o&&o()}}))};export{m as S,b as cleanup,m as computed,q as h,D as hs,F as html,f as isListening,y as o,y as observable,v as on,T as render,p as root,d as sample,g as subscribe,P as svg,h as transaction,E as unsubscribe,I as when};
