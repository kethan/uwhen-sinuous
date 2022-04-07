var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
function t$3(t2) {
  return t2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
const e$2 = [];
function n$3(n2 = {}, o2 = HTMLElement) {
  const r2 = class extends o2 {
    static get observedAttributes() {
      const e2 = typeof n2.props == "function", o3 = e2 ? Object.getOwnPropertyNames(n2.props()) : Object.keys(n2.props || {});
      return r2.setups = [e2 && n2.props, ...[...r2.mixins, n2.setup].map((t2) => t2 && t2(r2, n2))], o3.map(t$3);
    }
    constructor() {
      super(), this._mixins = [], r2.setups.forEach((t2) => {
        let e2;
        t2 && this._mixins.push(e2 = t2(this) || {}), function(t3, ...e3) {
          const n3 = { enumerable: true, configurable: true };
          e3.forEach((e4) => {
            e4 && Object.keys(e4).forEach((o3) => {
              const r3 = Object.getOwnPropertyDescriptor(e4, o3);
              Object.defineProperty(t3, o3, Object.assign(r3, n3));
            });
          });
        }(this, e2);
      });
    }
    connectedCallback() {
      this._mixins.forEach((t2) => t2.connected && t2.connected());
    }
    disconnectedCallback() {
      this._mixins.forEach((t2) => t2.disconnected && t2.disconnected());
    }
    attributeChangedCallback(t2, e2, n3) {
      this._mixins.forEach((o3) => o3.attributeChanged && o3.attributeChanged(t2, e2, n3));
    }
  };
  return r2.base = o2, r2.mixins = [...e$2], r2;
}
let o$3 = {};
function r$2(t2, e2 = {}, r2 = n$3) {
  let s2;
  if (e2.name = t2, e2.extends) {
    const t3 = o$3[e2.extends];
    s2 = t3 || document.createElement(e2.extends).constructor, s2.extends = t3 ? t3.extends : e2.extends;
  }
  const c2 = r2(e2, s2);
  return o$3[t2] = c2, customElements.get(t2) || customElements.define(t2, c2, { extends: s2 ? s2.extends : void 0 }), c2;
}
function s$2(t2, e2) {
  const n2 = __spreadValues({ value: t2, toAttribute: c$3, fromAttribute: i$3, get: (t3, e3 = n2.value) => e3, set: (t3, e3) => e3 }, e2);
  return n2;
}
function c$3(t2, e2) {
  const n2 = e2.value;
  return n2 !== false && n2 !== true || (t2 = ""), t2;
}
function i$3(t2, e2) {
  const n2 = e2.value;
  return n2 === false || n2 === true ? t2 != null : t2 != null && typeof n2 == "number" ? Number(t2) : t2;
}
function u$3(t2) {
  for (let e2 in t2)
    t2[e2] = s$2(t2[e2], { set: void 0 });
  return t2;
}
function a$1(t2) {
  for (let e2 in t2)
    t2[e2] = s$2(t2[e2], { reflect: true });
  return t2;
}
const f$4 = (t2, { props: e2 = {} }) => (t2.propConfigs || (t2.propConfigs = {}, t2.defineProp = p), Object.keys(e2).forEach((n2) => t2.defineProp(n2, e2[n2])), l$2);
function p(t2, e2) {
  (typeof e2 != "object" || e2 === null || Array.isArray(e2)) && (e2 = s$2(e2)), this.propConfigs[t2] = e2;
  const n2 = { get() {
    return this.getProp(t2);
  }, set: e2.set && function(e3) {
    this.set(t2, e3);
  }, enumerable: true, configurable: true };
  Object.defineProperty(this.prototype, t2, n2);
}
function l$2(e2) {
  const { propConfigs: n2 } = e2.constructor, o2 = {};
  let r2, s2;
  function u2(t2) {
    return n2[t2] && n2[t2].get ? n2[t2].get(e2, o2[t2], o2) : o2[t2];
  }
  function a2(t2, o3, c2) {
    if (!r2 && o3 !== c2) {
      s2 = true;
      const o4 = function(t3) {
        return t3.replace(/-([a-z])/g, (t4, e3) => e3.toUpperCase());
      }(t2), r3 = n2[o4];
      e2[o4] = (r3.fromAttribute || i$3)(c2, r3), s2 = false;
    }
  }
  return { get: u2, set: function(t2, n3) {
    const o3 = u2(t2);
    return e2.setProp(t2, n3, o3), e2.requestUpdate(t2, o3);
  }, getProp: u2, setProp: function(i2, a3) {
    n2[i2] && n2[i2].set && (a3 = n2[i2].set(e2, a3, o2[i2], o2)), o2[i2] = a3, s2 || function(o3) {
      r2 = true, function(o4) {
        const r3 = n2[o4];
        let s3 = u2(o4);
        s3 !== void 0 && r3.reflect && (s3 == null || s3 === false ? e2.removeAttribute(t$3(o4)) : (s3 = (r3.toAttribute || c$3)(s3, r3), e2.setAttribute(t$3(o4), "" + s3)));
      }(o3), r2 = false;
    }(i2);
  }, connected: function() {
    Object.keys(n2).forEach((t2) => {
      a2(t2, null, e2.getAttribute(t2));
    });
  }, attributeChanged: a2 };
}
const d = () => (t2) => {
  let e2, n2, o2 = {}, r2 = t2.getProp;
  async function s2() {
    await e2, t2.update && t2.update(o2), o2 = {}, n2 = false;
  }
  return s2(), { requestUpdate: function(t3, c2) {
    if (r2(t3) != c2)
      return o2[t3] = c2, n2 || (n2 = true, e2 = s2()), e2;
  } };
};
e$2.push(f$4, d);
var swiss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Element: n$3,
  PropsMixin: f$4,
  UpdateMixin: d,
  define: r$2,
  fromAttribute: i$3,
  mixins: e$2,
  property: s$2,
  readonly: u$3,
  reflect: a$1,
  toAttribute: c$3
}, Symbol.toStringTag, { value: "Module" }));
let t$2 = (n2, e2, o2, f2) => {
  let i2 = {};
  for (let s2 = 1; s2 < e2.length; s2++) {
    let r2 = e2[s2], u2 = typeof r2 == "number" ? o2[r2] : r2, l2 = e2[++s2];
    if (l2 === 1)
      f2[0] = u2;
    else if (l2 === 3)
      f2[1] = Object.assign(f2[1] || {}, u2);
    else if (l2 === 5)
      (f2[1] = f2[1] || {})[e2[++s2]] = u2;
    else if (l2 === 6) {
      let t2 = e2[++s2], n3 = (f2[1] = f2[1] || {})[t2], o3 = i2[t2];
      o3 || typeof u2 != "function" && typeof n3 != "function" || (o3 = n3 && [n3] || [], f2[1][t2] = function() {
        let t3 = "";
        for (var n4 = 0; n4 < o3.length; n4++)
          t3 += typeof o3[n4] == "function" ? o3[n4].call(this) : o3[n4];
        return t3;
      }), o3 ? o3.push(u2) : f2[1][t2] += u2 + "";
    } else if (l2) {
      let e3 = () => n2.apply(null, t$2(n2, u2, o2, ["", null]));
      f2.push(typeof f2[0] == "function" ? e3 : e3());
    } else
      f2.push(u2);
  }
  return f2;
}, n$1 = function(t2) {
  let n2, e2, o2 = 1, f2 = "", i2 = "", s2 = [0];
  let r2 = (t3) => {
    o2 === 1 && (t3 || (f2 = f2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? s2.push(t3 || f2, 0) : o2 === 3 && (t3 || f2) ? (s2.push(t3 || f2, 1), o2 = 2) : o2 === 2 && f2 === "..." && t3 ? s2.push(t3, 3) : o2 === 2 && f2 && !t3 ? s2.push(true, 5, f2) : o2 >= 5 && ((f2 || !t3 && o2 === 5) && (s2.push(f2, o2, e2), o2 = 6), t3 && (s2.push(t3, o2, e2), o2 = 6)), f2 = "";
  };
  for (let u2 = 0; u2 < t2.length; u2++) {
    u2 && (o2 === 1 && r2(), r2(u2));
    for (let l2 = 0; l2 < t2[u2].length; l2++)
      n2 = t2[u2][l2], o2 === 1 ? n2 === "<" ? (r2(), s2 = [s2], o2 = 3) : f2 += n2 : o2 === 4 ? f2 === "--" && n2 === ">" ? (o2 = 1, f2 = "") : f2 = n2 + f2[0] : i2 ? n2 === i2 ? i2 = "" : f2 += n2 : n2 === '"' || n2 === "'" ? i2 = n2 : n2 === ">" ? (r2(), o2 = 1) : o2 && (n2 === "=" ? (o2 = 5, e2 = f2, f2 = "") : n2 === "/" && (o2 < 5 || t2[u2][l2 + 1] === ">") ? (r2(), o2 === 3 && (s2 = s2[0]), o2 = s2, (s2 = s2[0]).push(o2, 2), o2 = 0) : n2 === " " || n2 === "	" || n2 === "\n" || n2 === "\r" ? (r2(), o2 = 2) : f2 += n2), o2 === 3 && f2 === "!--" && (o2 = 4, s2 = s2[0]);
  }
  return r2(), s2;
}, e$1 = /* @__PURE__ */ new Map(), o$2 = function(o2) {
  let f2 = e$1.get(this);
  return f2 || (f2 = /* @__PURE__ */ new Map(), e$1.set(this, f2)), f2 = t$2(this, f2.get(o2) || (f2.set(o2, f2 = n$1(o2)), f2), arguments, []), f2.length > 1 ? f2 : f2[0];
}, f$3 = function() {
  let t2 = o$2.apply(this, arguments);
  if (t2)
    return Array.isArray(t2) ? this(t2) : typeof t2 == "object" ? t2 : this([t2]);
};
function n$2() {
  let t2 = f$3.bind(this);
  return (this.wrap || t2).apply(t2, arguments);
}
let n = [];
let t$1;
function o$1(n2) {
  let r2 = t$1, u2 = () => {
  };
  t$1 = u2, a(u2);
  let o2 = n2(() => {
    S(u2), t$1 = void 0;
  });
  return t$1 = r2, o2;
}
function c$2(n2) {
  let r2 = t$1;
  t$1 = void 0;
  let u2 = n2();
  return t$1 = r2, u2;
}
function i$2(u2) {
  function o2(c2) {
    if (arguments.length === 0)
      return t$1 && !o2.__o.has(t$1) && (o2.__o.add(t$1), t$1.u.push(o2)), u2;
    u2 = c2;
    let e2 = t$1;
    return t$1 = void 0, o2.o = new Set(o2.__o), o2.o.forEach((n2) => n2.i = false), o2.o.forEach((n2) => {
      n2.i || n2();
    }), t$1 = e2, u2;
  }
  return o2.$o = 1, o2.__o = /* @__PURE__ */ new Set(), o2.t = n, o2;
}
function f$2(n2, r2) {
  function u2() {
    let o3 = t$1;
    return t$1 && t$1.__c.push(u2), S(u2), u2.i = true, t$1 = u2, r2 = n2(r2), t$1 = o3, r2;
  }
  function o2() {
    return u2.i ? t$1 && u2.u.forEach((n3) => n3()) : r2 = u2(), r2;
  }
  return n2.s = u2, a(u2), u2(), o2.$o = 1, o2;
}
function s$1(n2) {
  return t$1 && t$1.l.push(n2), n2;
}
function l$1(n2) {
  return f$2(n2), () => S(n2.s);
}
function S(n2) {
  n2.__c.forEach(S), n2.u.forEach((t2) => {
    t2.__o.delete(n2), t2.o && t2.o.delete(n2);
  }), n2.l.forEach((n3) => n3()), a(n2);
}
function a(n2) {
  n2.u = [], n2.__c = [], n2.l = [];
}
let r$1 = {}, i$1 = [];
function f$1(e2) {
  return this.t && this.t[e2.type](e2);
}
r$1.h = (...e2) => {
  let t2, o2 = (n2) => {
    if (n2 == null)
      ;
    else if (typeof n2 == "string")
      t2 ? r$1.add(t2, n2) : t2 = r$1.s ? document.createElementNS("http://www.w3.org/2000/svg", n2) : document.createElement(n2);
    else if (Array.isArray(n2))
      t2 || (t2 = document.createDocumentFragment()), n2.forEach(o2);
    else if (n2 instanceof Node)
      t2 ? r$1.add(t2, n2) : t2 = n2;
    else if (typeof n2 == "object")
      r$1.property(t2, n2, null, r$1.s);
    else if (typeof n2 == "function")
      if (t2) {
        let e3 = r$1.add(t2, "");
        r$1.insert(t2, n2, e3);
      } else
        t2 = n2.apply(null, e2.splice(1));
    else
      r$1.add(t2, "" + n2);
  };
  return e2.forEach(o2), t2;
}, r$1.insert = (e2, t2, o2, n2, s2) => (e2 = o2 && o2.parentNode || e2, s2 = s2 || n2 instanceof Node && n2, t2 === n2 || (n2 && typeof n2 != "string" || !(typeof t2 == "string" || typeof t2 == "number" && (t2 += "")) ? typeof t2 == "function" ? r$1.subscribe(() => {
  n2 = r$1.insert(e2, t2.call({ el: e2, endMark: o2 }), o2, n2, s2);
}) : (o2 ? n2 && (s2 || (s2 = n2.o && n2.o.nextSibling || o2.previousSibling), r$1.rm(e2, s2, o2)) : e2.textContent = "", n2 = null, t2 && t2 !== true && (n2 = r$1.add(e2, t2, o2))) : (n2 != null && e2.firstChild ? o2 ? (o2.previousSibling || e2.lastChild).data = t2 : e2.firstChild.data = t2 : o2 ? r$1.add(e2, t2, o2) : e2.textContent = t2, n2 = t2)), n2), r$1.property = (e2, t2, o2, n2, s2) => {
  if (t2 != null)
    if (!o2 || o2 === "attrs" && (n2 = true))
      for (o2 in t2)
        r$1.property(e2, t2[o2], o2, n2, s2);
    else
      o2[0] !== "o" || o2[1] !== "n" || t2.$o ? typeof t2 == "function" ? r$1.subscribe(() => {
        r$1.property(e2, t2.call({ el: e2, name: o2 }), o2, n2, s2);
      }) : s2 ? e2.style.setProperty(o2, t2) : n2 || o2.slice(0, 5) === "data-" || o2.slice(0, 5) === "aria-" ? e2.setAttribute(o2, t2) : o2 === "style" ? typeof t2 == "string" ? e2.style.cssText = t2 : r$1.property(e2, t2, null, n2, true) : (o2 === "class" && (o2 += "Name"), e2[o2] = t2) : ((e3, t3, o3) => {
        t3 = t3.slice(2).toLowerCase(), o3 ? e3.addEventListener(t3, f$1) : e3.removeEventListener(t3, f$1), (e3.t || (e3.t = {}))[t3] = o3;
      })(e2, o2, t2);
}, r$1.add = (e2, t2, o2) => {
  let n2 = ((e3) => {
    const { childNodes: t3 } = e3;
    if (t3 && e3.nodeType === 11)
      return t3.length < 2 ? t3[0] : { o: r$1.add(e3, "", t3[0]) };
  })(t2 = ((e3) => typeof e3 == "string" ? document.createTextNode(e3) : e3 instanceof Node ? e3 : r$1.h(i$1, e3))(t2)) || t2;
  return e2.insertBefore(t2, o2 && o2.parentNode && o2), n2;
}, r$1.rm = (e2, t2, o2) => {
  for (; t2 && t2 !== o2; ) {
    let o3 = t2.nextSibling;
    e2 === t2.parentNode && e2.removeChild(t2), t2 = o3;
  }
}, r$1.subscribe = l$1, r$1.cleanup = s$1, r$1.root = o$1, r$1.sample = c$2, r$1.hs = (...e2) => {
  let t2 = r$1.s;
  r$1.s = true;
  let o2 = u$2(...e2);
  return r$1.s = t2, o2;
};
let u$2 = (...e2) => r$1.h.apply(r$1.h, e2);
let t;
function r(e2, r2, o2) {
  let u2 = function() {
    const { el: u3, name: c2, endMark: l2 } = this, i2 = (t2, e3, r3, o3) => {
      if (r3 == null) {
        let r4 = e3 || t2;
        r4.t = r$1.insert(t2, o3, e3, r4.t);
      } else
        r$1.property(t2, o3, r3);
    };
    i2.o = u3, i2.u = l2, i2.l = c2, i2.i = e2, i2.s = r2, i2.m = o2, t.push(i2);
  };
  return u2.$o = 2, u2;
}
function o(e2, r2) {
  let o2 = t;
  t = [];
  let l2 = e2(), i2 = t;
  t = o2;
  let s2 = l2.content || l2.parentNode && l2;
  s2 || (s2 = document.createDocumentFragment(), s2.appendChild(l2));
  let f2 = s2.cloneNode(true);
  function a2(t2, e3) {
    e3 !== false && e3 !== true || (r2 = e3);
    let o3 = {};
    let u2;
    return r2 ? (s2.p && s2.p.forEach((n2) => s2.appendChild(n2)), u2 = s2) : u2 = f2.cloneNode(true), u2.firstChild && (u2.firstChild.props = t2), i2.forEach((n2) => {
      n2.A = r2 ? n2.o : c$1(u2, n2.g), n2.h = r2 ? n2.u : n2.j && c$1(n2.A, n2.j);
    }), i2.forEach((e4) => {
      r$1.action(e4, t2, o3)(e4.i, e4.l);
    }), s2.p = Array.from(s2.childNodes), u2;
  }
  return r2 || i2.forEach((n2) => {
    n2.g = u$1(s2, n2.o), n2.j = n2.u && u$1(n2.o, n2.u);
  }), a2.$t = true, a2;
}
function u$1(n2, t2) {
  let e2, r2 = [];
  for (; (e2 = t2.parentNode) !== n2.parentNode; )
    r2.unshift(Array.from(e2.childNodes).indexOf(t2)), t2 = e2;
  return r2;
}
function c$1(n2, t2) {
  return t2.forEach((t3) => n2 = n2.childNodes[t3]), n2;
}
r$1.action = (n2, t2, e2) => {
  let r2 = n2.A;
  return (o2, u2) => {
    let c2 = t2[o2];
    c2 != null && n2(r2, n2.h, u2, c2), n2.s && (e2[o2] || (e2[o2] = [], Object.defineProperty(t2, o2, { get: () => n2.m ? u2 in r2 ? r2[u2] : r2 : c2, set(n3) {
      c2 = n3, e2[o2].forEach((t3) => t3(n3));
    } })), e2[o2].push(n2.bind(null, r2, n2.h, u2)));
  };
};
let u = {};
function i(n2) {
  let o$12 = (n2 ? r$1.hs : r$1.h).bind();
  return o$12.wrap = function() {
    let n3 = this, t2 = Array.from(arguments), o$13 = t2[0], i2 = t2.slice(1);
    for (let n4 = 1; n4 < t2.length; n4++)
      t2[n4] = s(n4 - 1);
    function e2() {
      const { endMark: s2 } = this || {}, c2 = o$13.join("\0");
      let f2 = u[c2];
      f2 || (f2 = o(() => n3.apply(null, t2)), u[c2] = f2), e2.t = e2.t || s2;
      let m2 = s2 && e2.t !== s2;
      return f2.t ? m2 = f2.t !== s2 : f2.t = s2, f2(i2, !m2);
    }
    return e2;
  }, o$12;
}
function e(n2, o2) {
  o2.t = o2.t || r$1.add(o2, ""), o2.o = r$1.insert(o2, n2, o2.t, o2.o);
}
function s(n2) {
  return r(n2);
}
let c = i(), f = i(true);
function m() {
  return n$2.apply(c, arguments);
}
function l() {
  return n$2.apply(f, arguments);
}
const define = (selector, props, callback) => {
  const setup = (CE) => (el) => {
    return {
      update: () => e(callback(el), el)
    };
  };
  r$2(selector, {
    props,
    setup
  });
};
export { s$1 as cleanup, f$2 as computed, define, c as h, f as hs, m as html, i$2 as o, i$2 as observable, e as render, l$1 as subscribe, l as svg, swiss };
