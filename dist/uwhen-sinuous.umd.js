var de=Object.defineProperty;var I=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var J=(p,m,b)=>m in p?de(p,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):p[m]=b,K=(p,m)=>{for(var b in m||(m={}))he.call(m,b)&&J(p,b,m[b]);if(I)for(var b of I(m))ye.call(m,b)&&J(p,b,m[b]);return p};(function(p,m){typeof exports=="object"&&typeof module!="undefined"?m(exports):typeof define=="function"&&define.amd?define(["exports"],m):(p=typeof globalThis!="undefined"?globalThis:p||self,m(p.uwhen={}))})(this,function(p){"use strict";function m(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}const b=[];function N(t={},e=HTMLElement){const r=class extends e{static get observedAttributes(){const n=typeof t.props=="function",i=n?Object.getOwnPropertyNames(t.props()):Object.keys(t.props||{});return r.setups=[n&&t.props,...[...r.mixins,t.setup].map(s=>s&&s(r,t))],i.map(m)}constructor(){super(),this._mixins=[],r.setups.forEach(n=>{let i;n&&this._mixins.push(i=n(this)||{}),function(s,...l){const o={enumerable:!0,configurable:!0};l.forEach(u=>{u&&Object.keys(u).forEach(f=>{const y=Object.getOwnPropertyDescriptor(u,f);Object.defineProperty(s,f,Object.assign(y,o))})})}(this,i)})}connectedCallback(){this._mixins.forEach(n=>n.connected&&n.connected())}disconnectedCallback(){this._mixins.forEach(n=>n.disconnected&&n.disconnected())}attributeChangedCallback(n,i,s){this._mixins.forEach(l=>l.attributeChanged&&l.attributeChanged(n,i,s))}};return r.base=e,r.mixins=[...b],r}let w={};function x(t,e={},r=N){let n;if(e.name=t,e.extends){const s=w[e.extends];n=s||document.createElement(e.extends).constructor,n.extends=s?s.extends:e.extends}const i=r(e,n);return w[t]=i,customElements.get(t)||customElements.define(t,i,{extends:n?n.extends:void 0}),i}function E(t,e){const r=K({value:t,toAttribute:v,fromAttribute:C,get:(n,i=r.value)=>i,set:(n,i)=>i},e);return r}function v(t,e){const r=e.value;return r!==!1&&r!==!0||(t=""),t}function C(t,e){const r=e.value;return r===!1||r===!0?t!=null:t!=null&&typeof r=="number"?Number(t):t}function Q(t){for(let e in t)t[e]=E(t[e],{set:void 0});return t}function R(t){for(let e in t)t[e]=E(t[e],{reflect:!0});return t}const O=(t,{props:e={}})=>(t.propConfigs||(t.propConfigs={},t.defineProp=V),Object.keys(e).forEach(r=>t.defineProp(r,e[r])),W);function V(t,e){(typeof e!="object"||e===null||Array.isArray(e))&&(e=E(e)),this.propConfigs[t]=e;const r={get(){return this.getProp(t)},set:e.set&&function(n){this.set(t,n)},enumerable:!0,configurable:!0};Object.defineProperty(this.prototype,t,r)}function W(t){const{propConfigs:e}=t.constructor,r={};let n,i;function s(o){return e[o]&&e[o].get?e[o].get(t,r[o],r):r[o]}function l(o,u,f){if(!n&&u!==f){i=!0;const y=function(a){return a.replace(/-([a-z])/g,(g,pe)=>pe.toUpperCase())}(o),d=e[y];t[y]=(d.fromAttribute||C)(f,d),i=!1}}return{get:s,set:function(o,u){const f=s(o);return t.setProp(o,u,f),t.requestUpdate(o,f)},getProp:s,setProp:function(o,u){e[o]&&e[o].set&&(u=e[o].set(t,u,r[o],r)),r[o]=u,i||function(f){n=!0,function(y){const d=e[y];let a=s(y);a!==void 0&&d.reflect&&(a==null||a===!1?t.removeAttribute(m(y)):(a=(d.toAttribute||v)(a,d),t.setAttribute(m(y),""+a)))}(f),n=!1}(o)},connected:function(){Object.keys(e).forEach(o=>{l(o,null,t.getAttribute(o))})},attributeChanged:l}}const P=()=>t=>{let e,r,n={},i=t.getProp;async function s(){await e,t.update&&t.update(n),n={},r=!1}return s(),{requestUpdate:function(l,o){if(i(l)!=o)return n[l]=o,r||(r=!0,e=s()),e}}};b.push(O,P);var X=Object.freeze(Object.defineProperty({__proto__:null,Element:N,PropsMixin:O,UpdateMixin:P,define:x,fromAttribute:C,mixins:b,property:E,readonly:Q,reflect:R,toAttribute:v},Symbol.toStringTag,{value:"Module"}));let S=(t,e,r,n)=>{let i={};for(let s=1;s<e.length;s++){let l=e[s],o=typeof l=="number"?r[l]:l,u=e[++s];if(u===1)n[0]=o;else if(u===3)n[1]=Object.assign(n[1]||{},o);else if(u===5)(n[1]=n[1]||{})[e[++s]]=o;else if(u===6){let f=e[++s],y=(n[1]=n[1]||{})[f],d=i[f];d||typeof o!="function"&&typeof y!="function"||(d=y&&[y]||[],n[1][f]=function(){let a="";for(var g=0;g<d.length;g++)a+=typeof d[g]=="function"?d[g].call(this):d[g];return a}),d?d.push(o):n[1][f]+=o+""}else if(u){let f=()=>t.apply(null,S(t,o,r,["",null]));n.push(typeof n[0]=="function"?f:f())}else n.push(o)}return n},Y=function(t){let e,r,n=1,i="",s="",l=[0],o=u=>{n===1&&(u||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(u||i,0):n===3&&(u||i)?(l.push(u||i,1),n=2):n===2&&i==="..."&&u?l.push(u,3):n===2&&i&&!u?l.push(!0,5,i):n>=5&&((i||!u&&n===5)&&(l.push(i,n,r),n=6),u&&(l.push(u,n,r),n=6)),i=""};for(let u=0;u<t.length;u++){u&&(n===1&&o(),o(u));for(let f=0;f<t[u].length;f++)e=t[u][f],n===1?e==="<"?(o(),l=[l],n=3):i+=e:n===4?i==="--"&&e===">"?(n=1,i=""):i=e+i[0]:s?e===s?s="":i+=e:e==='"'||e==="'"?s=e:e===">"?(o(),n=1):n&&(e==="="?(n=5,r=i,i=""):e==="/"&&(n<5||t[u][f+1]===">")?(o(),n===3&&(l=l[0]),n=l,(l=l[0]).push(n,2),n=0):e===" "||e==="	"||e===`
`||e==="\r"?(o(),n=2):i+=e),n===3&&i==="!--"&&(n=4,l=l[0])}return o(),l},M=new Map,ee=function(t){let e=M.get(this);return e||(e=new Map,M.set(this,e)),e=S(this,e.get(t)||(e.set(t,e=Y(t)),e),arguments,[]),e.length>1?e:e[0]},te=function(){let t=ee.apply(this,arguments);if(t)return Array.isArray(t)?this(t):typeof t=="object"?t:this([t])};function k(){let t=te.bind(this);return(this.wrap||t).apply(t,arguments)}let ne=[],h;function re(t){let e=h,r=()=>{};h=r,A(r);let n=t(()=>{_(r),h=void 0});return h=e,n}function ie(t){let e=h;h=void 0;let r=t();return h=e,r}function T(t){function e(r){if(arguments.length===0)return h&&!e.__o.has(h)&&(e.__o.add(h),h.u.push(e)),t;t=r;let n=h;return h=void 0,e.o=new Set(e.__o),e.o.forEach(i=>i.i=!1),e.o.forEach(i=>{i.i||i()}),h=n,t}return e.$o=1,e.__o=new Set,e.t=ne,e}function L(t,e){function r(){let i=h;return h&&h.__c.push(r),_(r),r.i=!0,h=r,e=t(e),h=i,e}function n(){return r.i?h&&r.u.forEach(i=>i()):e=r(),e}return t.s=r,A(r),r(),n.$o=1,n}function U(t){return h&&h.l.push(t),t}function z(t){return L(t),()=>_(t.s)}function _(t){t.__c.forEach(_),t.u.forEach(e=>{e.__o.delete(t),e.o&&e.o.delete(t)}),t.l.forEach(e=>e()),A(t)}function A(t){t.u=[],t.__c=[],t.l=[]}let c={},oe=[];function D(t){return this.t&&this.t[t.type](t)}c.h=(...t)=>{let e,r=n=>{if(n!=null)if(typeof n=="string")e?c.add(e,n):e=c.s?document.createElementNS("http://www.w3.org/2000/svg",n):document.createElement(n);else if(Array.isArray(n))e||(e=document.createDocumentFragment()),n.forEach(r);else if(n instanceof Node)e?c.add(e,n):e=n;else if(typeof n=="object")c.property(e,n,null,c.s);else if(typeof n=="function")if(e){let i=c.add(e,"");c.insert(e,n,i)}else e=n.apply(null,t.splice(1));else c.add(e,""+n)};return t.forEach(r),e},c.insert=(t,e,r,n,i)=>(t=r&&r.parentNode||t,i=i||n instanceof Node&&n,e===n||(n&&typeof n!="string"||!(typeof e=="string"||typeof e=="number"&&(e+=""))?typeof e=="function"?c.subscribe(()=>{n=c.insert(t,e.call({el:t,endMark:r}),r,n,i)}):(r?n&&(i||(i=n.o&&n.o.nextSibling||r.previousSibling),c.rm(t,i,r)):t.textContent="",n=null,e&&e!==!0&&(n=c.add(t,e,r))):(n!=null&&t.firstChild?r?(r.previousSibling||t.lastChild).data=e:t.firstChild.data=e:r?c.add(t,e,r):t.textContent=e,n=e)),n),c.property=(t,e,r,n,i)=>{if(e!=null)if(!r||r==="attrs"&&(n=!0))for(r in e)c.property(t,e[r],r,n,i);else r[0]!=="o"||r[1]!=="n"||e.$o?typeof e=="function"?c.subscribe(()=>{c.property(t,e.call({el:t,name:r}),r,n,i)}):i?t.style.setProperty(r,e):n||r.slice(0,5)==="data-"||r.slice(0,5)==="aria-"?t.setAttribute(r,e):r==="style"?typeof e=="string"?t.style.cssText=e:c.property(t,e,null,n,!0):(r==="class"&&(r+="Name"),t[r]=e):((s,l,o)=>{l=l.slice(2).toLowerCase(),o?s.addEventListener(l,D):s.removeEventListener(l,D),(s.t||(s.t={}))[l]=o})(t,r,e)},c.add=(t,e,r)=>{let n=(i=>{const{childNodes:s}=i;if(s&&i.nodeType===11)return s.length<2?s[0]:{o:c.add(i,"",s[0])}})(e=(i=>typeof i=="string"?document.createTextNode(i):i instanceof Node?i:c.h(oe,i))(e))||e;return t.insertBefore(e,r&&r.parentNode&&r),n},c.rm=(t,e,r)=>{for(;e&&e!==r;){let n=e.nextSibling;t===e.parentNode&&t.removeChild(e),e=n}},c.subscribe=z,c.cleanup=U,c.root=re,c.sample=ie,c.hs=(...t)=>{let e=c.s;c.s=!0;let r=j(...t);return c.s=e,r};let j=(...t)=>c.h.apply(c.h,t),q=(...t)=>c.hs.apply(c.hs,t),se=(...t)=>k.apply(j,t),ue=(...t)=>k.apply(q,t),$;function le(t,e,r){let n=function(){const{el:i,name:s,endMark:l}=this,o=(u,f,y,d)=>{if(y==null){let a=f||u;a.t=c.insert(u,d,f,a.t)}else c.property(u,d,y)};o.o=i,o.u=l,o.l=s,o.i=t,o.s=e,o.m=r,$.push(o)};return n.$o=2,n}function ce(t,e){let r=$;$=[];let n=t(),i=$;$=r;let s=n.content||n.parentNode&&n;s||(s=document.createDocumentFragment(),s.appendChild(n));let l=s.cloneNode(!0);function o(u,f){f!==!1&&f!==!0||(e=f);let y={},d;return e?(s.p&&s.p.forEach(a=>s.appendChild(a)),d=s):d=l.cloneNode(!0),d.firstChild&&(d.firstChild.props=u),i.forEach(a=>{a.A=e?a.o:B(d,a.g),a.h=e?a.u:a.j&&B(a.A,a.j)}),i.forEach(a=>{c.action(a,u,y)(a.i,a.l)}),s.p=Array.from(s.childNodes),d}return e||i.forEach(u=>{u.g=F(s,u.o),u.j=u.u&&F(u.o,u.u)}),o.$t=!0,o}function F(t,e){let r,n=[];for(;(r=e.parentNode)!==t.parentNode;)n.unshift(Array.from(r.childNodes).indexOf(e)),e=r;return n}function B(t,e){return e.forEach(r=>t=t.childNodes[r]),t}c.action=(t,e,r)=>{let n=t.A;return(i,s)=>{let l=e[i];l!=null&&t(n,t.h,s,l),t.s&&(r[i]||(r[i]=[],Object.defineProperty(e,i,{get:()=>t.m?s in n?n[s]:n:l,set(o){l=o,r[i].forEach(u=>u(o))}})),r[i].push(t.bind(null,n,t.h,s)))}};let H={};function Z(t){let e=(t?c.hs:c.h).bind();return e.wrap=function(){let r=this,n=Array.from(arguments),i=n[0],s=n.slice(1);for(let o=1;o<n.length;o++)n[o]=fe(o-1);function l(){const{endMark:o}=this||{},u=i.join("\0");let f=H[u];f||(f=ce(()=>r.apply(null,n)),H[u]=f),l.t=l.t||o;let y=o&&l.t!==o;return f.t?y=f.t!==o:f.t=o,f(s,!y)}return l},e}function G(t,e){e.t=e.t||c.add(e,""),e.o=c.insert(e,t,e.t,e.o)}function fe(t){return le(t)}Z(),Z(!0);const ae=(t,e,r)=>{x(t,{props:e,setup:i=>s=>({update:()=>G(r(s),s)})})};p.cleanup=U,p.computed=L,p.define=ae,p.h=j,p.hs=q,p.html=se,p.o=T,p.observable=T,p.render=G,p.subscribe=z,p.svg=ue,p.swiss=X,Object.defineProperties(p,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
