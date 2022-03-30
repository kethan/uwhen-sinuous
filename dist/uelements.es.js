var n$1, l, u, t$1, o, r, e = {}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function h(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v(l2, u2, i) {
  var t2, o2, r2, f = {};
  for (r2 in u2)
    r2 == "key" ? t2 = u2[r2] : r2 == "ref" ? o2 = u2[r2] : f[r2] = u2[r2];
  if (arguments.length > 2 && (f.children = arguments.length > 3 ? n$1.call(arguments, 2) : i), typeof l2 == "function" && l2.defaultProps != null)
    for (r2 in l2.defaultProps)
      f[r2] === void 0 && (f[r2] = l2.defaultProps[r2]);
  return y(l2, f, t2, o2, null);
}
function y(n2, i, t2, o2, r2) {
  var f = { type: n2, props: i, key: t2, ref: o2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r2 == null ? ++u : r2 };
  return r2 == null && l.vnode != null && l.vnode(f), f;
}
function d(n2) {
  return n2.children;
}
function _(n2, l2) {
  this.props = n2, this.context = l2;
}
function k(n2, l2) {
  if (l2 == null)
    return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? k(n2) : null;
}
function b(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return b(n2);
  }
}
function m(n2) {
  (!n2.__d && (n2.__d = true) && t$1.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
}
function g() {
  for (var n2; g.__r = t$1.length; )
    n2 = t$1.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), t$1 = [], n2.some(function(n3) {
      var l2, u2, i, t2, o2, r2;
      n3.__d && (o2 = (t2 = (l2 = n3).__v).__e, (r2 = l2.__P) && (u2 = [], (i = a({}, t2)).__v = t2.__v + 1, j(r2, t2, i, l2.__n, r2.ownerSVGElement !== void 0, t2.__h != null ? [o2] : null, u2, o2 == null ? k(t2) : o2, t2.__h), z(u2, t2), t2.__e != o2 && b(t2)));
    });
}
function w(n2, l2, u2, i, t2, o2, r2, f, s2, a2) {
  var h2, v2, p, _2, b2, m2, g2, w2 = i && i.__k || c, A = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if ((_2 = u2.__k[h2] = (_2 = l2[h2]) == null || typeof _2 == "boolean" ? null : typeof _2 == "string" || typeof _2 == "number" || typeof _2 == "bigint" ? y(null, _2, null, null, _2) : Array.isArray(_2) ? y(d, { children: _2 }, null, null, null) : _2.__b > 0 ? y(_2.type, _2.props, _2.key, null, _2.__v) : _2) != null) {
      if (_2.__ = u2, _2.__b = u2.__b + 1, (p = w2[h2]) === null || p && _2.key == p.key && _2.type === p.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < A; v2++) {
          if ((p = w2[v2]) && _2.key == p.key && _2.type === p.type) {
            w2[v2] = void 0;
            break;
          }
          p = null;
        }
      j(n2, _2, p = p || e, t2, o2, r2, f, s2, a2), b2 = _2.__e, (v2 = _2.ref) && p.ref != v2 && (g2 || (g2 = []), p.ref && g2.push(p.ref, null, _2), g2.push(v2, _2.__c || b2, _2)), b2 != null ? (m2 == null && (m2 = b2), typeof _2.type == "function" && _2.__k === p.__k ? _2.__d = s2 = x(_2, s2, n2) : s2 = P(n2, _2, p, w2, b2, s2), typeof u2.type == "function" && (u2.__d = s2)) : s2 && p.__e == s2 && s2.parentNode != n2 && (s2 = k(p));
    }
  for (u2.__e = m2, h2 = A; h2--; )
    w2[h2] != null && (typeof u2.type == "function" && w2[h2].__e != null && w2[h2].__e == u2.__d && (u2.__d = k(i, h2 + 1)), N(w2[h2], w2[h2]));
  if (g2)
    for (h2 = 0; h2 < g2.length; h2++)
      M(g2[h2], g2[++h2], g2[++h2]);
}
function x(n2, l2, u2) {
  for (var i, t2 = n2.__k, o2 = 0; t2 && o2 < t2.length; o2++)
    (i = t2[o2]) && (i.__ = n2, l2 = typeof i.type == "function" ? x(i, l2, u2) : P(u2, i, i, t2, i.__e, l2));
  return l2;
}
function P(n2, l2, u2, i, t2, o2) {
  var r2, f, e2;
  if (l2.__d !== void 0)
    r2 = l2.__d, l2.__d = void 0;
  else if (u2 == null || t2 != o2 || t2.parentNode == null)
    n:
      if (o2 == null || o2.parentNode !== n2)
        n2.appendChild(t2), r2 = null;
      else {
        for (f = o2, e2 = 0; (f = f.nextSibling) && e2 < i.length; e2 += 2)
          if (f == t2)
            break n;
        n2.insertBefore(t2, o2), r2 = o2;
      }
  return r2 !== void 0 ? r2 : t2.nextSibling;
}
function C(n2, l2, u2, i, t2) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || H(n2, o2, null, u2[o2], i);
  for (o2 in l2)
    t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || H(n2, o2, l2[o2], u2[o2], i);
}
function $(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || s.test(l2) ? u2 : u2 + "px";
}
function H(n2, l2, u2, i, t2) {
  var o2;
  n:
    if (l2 === "style")
      if (typeof u2 == "string")
        n2.style.cssText = u2;
      else {
        if (typeof i == "string" && (n2.style.cssText = i = ""), i)
          for (l2 in i)
            u2 && l2 in u2 || $(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i && u2[l2] === i[l2] || $(n2.style, l2, u2[l2]);
      }
    else if (l2[0] === "o" && l2[1] === "n")
      o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, u2 ? i || n2.addEventListener(l2, o2 ? T : I, o2) : n2.removeEventListener(l2, o2 ? T : I, o2);
    else if (l2 !== "dangerouslySetInnerHTML") {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 !== "href" && l2 !== "list" && l2 !== "form" && l2 !== "tabIndex" && l2 !== "download" && l2 in n2)
        try {
          n2[l2] = u2 == null ? "" : u2;
          break n;
        } catch (n3) {
        }
      typeof u2 == "function" || (u2 != null && (u2 !== false || l2[0] === "a" && l2[1] === "r") ? n2.setAttribute(l2, u2) : n2.removeAttribute(l2));
    }
}
function I(n2) {
  this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function T(n2) {
  this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function j(n2, u2, i, t2, o2, r2, f, e2, c2) {
  var s2, h2, v2, y2, p, k2, b2, m2, g2, x2, A, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i.__h != null && (c2 = i.__h, e2 = u2.__e = i.__e, u2.__h = null, r2 = [e2]), (s2 = l.__b) && s2(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (m2 = u2.props, g2 = (s2 = P2.contextType) && t2[s2.__c], x2 = s2 ? g2 ? g2.props.value : s2.__ : t2, i.__c ? b2 = (h2 = u2.__c = i.__c).__ = h2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = h2 = new P2(m2, x2) : (u2.__c = h2 = new _(m2, x2), h2.constructor = P2, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t2, v2 = h2.__d = true, h2.__h = []), h2.__s == null && (h2.__s = h2.state), P2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P2.getDerivedStateFromProps(m2, h2.__s))), y2 = h2.props, p = h2.state, v2)
          P2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && m2 !== y2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(m2, x2), !h2.__e && h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(m2, h2.__s, x2) === false || u2.__v === i.__v) {
            h2.props = m2, h2.state = h2.__s, u2.__v !== i.__v && (h2.__d = false), h2.__v = u2, u2.__e = i.__e, u2.__k = i.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), h2.__h.length && f.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(m2, h2.__s, x2), h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(y2, p, k2);
          });
        }
        h2.context = x2, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u2), h2.__d = false, h2.__v = u2, h2.__P = n2, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, h2.getChildContext != null && (t2 = a(a({}, t2), h2.getChildContext())), v2 || h2.getSnapshotBeforeUpdate == null || (k2 = h2.getSnapshotBeforeUpdate(y2, p)), A = s2 != null && s2.type === d && s2.key == null ? s2.props.children : s2, w(n2, Array.isArray(A) ? A : [A], u2, i, t2, o2, r2, f, e2, c2), h2.base = u2.__e, u2.__h = null, h2.__h.length && f.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        r2 == null && u2.__v === i.__v ? (u2.__k = i.__k, u2.__e = i.__e) : u2.__e = L(i.__e, u2, i, t2, o2, r2, f, c2);
    (s2 = l.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), l.__e(n3, u2, i);
  }
}
function z(n2, u2) {
  l.__c && l.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function L(l2, u2, i, t2, o2, r2, f, c2) {
  var s2, a2, v2, y2 = i.props, p = u2.props, d2 = u2.type, _2 = 0;
  if (d2 === "svg" && (o2 = true), r2 != null) {
    for (; _2 < r2.length; _2++)
      if ((s2 = r2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : s2.nodeType === 3)) {
        l2 = s2, r2[_2] = null;
        break;
      }
  }
  if (l2 == null) {
    if (d2 === null)
      return document.createTextNode(p);
    l2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p.is && p), r2 = null, c2 = false;
  }
  if (d2 === null)
    y2 === p || c2 && l2.data === p || (l2.data = p);
  else {
    if (r2 = r2 && n$1.call(l2.childNodes), a2 = (y2 = i.props || e).dangerouslySetInnerHTML, v2 = p.dangerouslySetInnerHTML, !c2) {
      if (r2 != null)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (v2 || a2) && (v2 && (a2 && v2.__html == a2.__html || v2.__html === l2.innerHTML) || (l2.innerHTML = v2 && v2.__html || ""));
    }
    if (C(l2, p, y2, o2, c2), v2)
      u2.__k = [];
    else if (_2 = u2.props.children, w(l2, Array.isArray(_2) ? _2 : [_2], u2, i, t2, o2 && d2 !== "foreignObject", r2, f, r2 ? r2[0] : i.__k && k(i, 0), c2), r2 != null)
      for (_2 = r2.length; _2--; )
        r2[_2] != null && h(r2[_2]);
    c2 || ("value" in p && (_2 = p.value) !== void 0 && (_2 !== l2.value || d2 === "progress" && !_2 || d2 === "option" && _2 !== y2.value) && H(l2, "value", _2, y2.value, false), "checked" in p && (_2 = p.checked) !== void 0 && _2 !== l2.checked && H(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function M(n2, u2, i) {
  try {
    typeof n2 == "function" ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l.__e(n3, i);
  }
}
function N(n2, u2, i) {
  var t2, o2;
  if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || M(t2, null, u2)), (t2 = n2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = n2.__k)
    for (o2 = 0; o2 < t2.length; o2++)
      t2[o2] && N(t2[o2], u2, typeof n2.type != "function");
  i || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
}
function O(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function S(u2, i, t2) {
  var o2, r2, f;
  l.__ && l.__(u2, i), r2 = (o2 = typeof t2 == "function") ? null : t2 && t2.__k || i.__k, f = [], j(i, u2 = (!o2 && t2 || i).__k = v(d, null, [u2]), r2 || e, e, i.ownerSVGElement !== void 0, !o2 && t2 ? [t2] : r2 ? null : i.firstChild ? n$1.call(i.childNodes) : null, f, !o2 && t2 ? t2 : r2 ? r2.__e : i.firstChild, o2), z(f, u2);
}
n$1 = c.slice, l = { __e: function(n2, l2, u2, i) {
  for (var t2, o2, r2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((o2 = t2.constructor) && o2.getDerivedStateFromError != null && (t2.setState(o2.getDerivedStateFromError(n2)), r2 = t2.__d), t2.componentDidCatch != null && (t2.componentDidCatch(n2, i || {}), r2 = t2.__d), r2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, _.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u2), this.props)), n2 && a(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), m(this));
}, _.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
}, _.prototype.render = d, t$1 = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0;
var Lie = typeof Promise === "function" ? Promise : function(fn) {
  let queue = [], resolved = 0, value;
  fn(($2) => {
    value = $2;
    resolved = 1;
    queue.splice(0).forEach(then);
  });
  return { then };
  function then(fn2) {
    return resolved ? setTimeout(fn2, 0, value) : queue.push(fn2), this;
  }
};
let info = null, schedule = /* @__PURE__ */ new Set();
const invoke = (effect) => {
  const { $: $2, r: r2, h: h2 } = effect;
  if (isFunction(r2)) {
    fx.get(h2).delete(effect);
    r2();
  }
  if (isFunction(effect.r = $2()))
    fx.get(h2).add(effect);
};
const runSchedule = () => {
  const previous = schedule;
  schedule = /* @__PURE__ */ new Set();
  previous.forEach(({ h: h2, c: c2, a: a2, e: e2 }) => {
    if (e2)
      h2.apply(c2, a2);
  });
};
const fx = /* @__PURE__ */ new WeakMap();
const effects = [];
const layoutEffects = [];
function different(value, i) {
  return value !== this[i];
}
const dropEffect = (hook) => {
  const effects2 = fx.get(hook);
  if (effects2)
    wait.then(() => {
      effects2.forEach((effect) => {
        effect.r();
        effect.r = null;
      });
      effects2.clear();
    });
};
const getInfo = () => info;
const hasEffect = (hook) => fx.has(hook);
const isFunction = (f) => typeof f === "function";
const hooked = (callback) => {
  const current = { h: hook, c: null, a: null, e: 0, i: 0, s: [] };
  return hook;
  function hook() {
    const prev = info;
    info = current;
    current.e = current.i = 0;
    try {
      return callback.apply(current.c = this, current.a = arguments);
    } finally {
      info = prev;
      if (effects.length)
        wait.then(effects.forEach.bind(effects.splice(0), invoke));
      if (layoutEffects.length)
        layoutEffects.splice(0).forEach(invoke);
    }
  }
};
const reschedule = (info2) => {
  if (!schedule.has(info2)) {
    info2.e = 1;
    schedule.add(info2);
    wait.then(runSchedule);
  }
};
const wait = new Lie(($2) => $2());
const createContext = (value) => ({
  _: /* @__PURE__ */ new Set(),
  provide,
  value
});
const useContext = ({ _: _2, value }) => {
  _2.add(getInfo());
  return value;
};
function provide(newValue) {
  const { _: _2, value } = this;
  if (value !== newValue) {
    this._ = /* @__PURE__ */ new Set();
    this.value = newValue;
    _2.forEach(({ h: h2, c: c2, a: a2 }) => {
      h2.apply(c2, a2);
    });
  }
}
const useCallback = (fn, guards) => useMemo(() => fn, guards);
const useMemo = (memo, guards) => {
  const info2 = getInfo();
  const { i, s: s2 } = info2;
  if (i === s2.length || !guards || guards.some(different, s2[i]._))
    s2[i] = { $: memo(), _: guards };
  return s2[info2.i++].$;
};
const createEffect = (stack) => (callback, guards) => {
  const info2 = getInfo();
  const { i, s: s2, h: h2 } = info2;
  const call = i === s2.length;
  info2.i++;
  if (call) {
    if (!fx.has(h2))
      fx.set(h2, /* @__PURE__ */ new Set());
    s2[i] = { $: callback, _: guards, r: null, h: h2 };
  }
  if (call || !guards || guards.some(different, s2[i]._))
    stack.push(s2[i]);
  s2[i].$ = callback;
  s2[i]._ = guards;
};
const useEffect = createEffect(effects);
const useLayoutEffect = createEffect(layoutEffects);
const getValue = (value, f) => isFunction(f) ? f(value) : f;
const useReducer = (reducer, value, init2) => {
  const info2 = getInfo();
  const { i, s: s2 } = info2;
  if (i === s2.length)
    s2.push({
      $: isFunction(init2) ? init2(value) : getValue(void 0, value),
      set: (value2) => {
        s2[i].$ = reducer(s2[i].$, value2);
        reschedule(info2);
      }
    });
  const { $: $2, set: set2 } = s2[info2.i++];
  return [$2, set2];
};
const useState = (value) => useReducer(getValue, value);
const useRef = (current) => {
  const info2 = getInfo();
  const { i, s: s2 } = info2;
  if (i === s2.length)
    s2.push({ current });
  return s2[info2.i++];
};
const TRUE = true, FALSE = false;
const QSA$1 = "querySelectorAll";
function add(node) {
  this.observe(node, { subtree: TRUE, childList: TRUE });
}
const notify = (callback, root, MO) => {
  const loop = (nodes, added, removed, connected, pass) => {
    for (let i = 0, { length } = nodes; i < length; i++) {
      const node = nodes[i];
      if (pass || QSA$1 in node) {
        if (connected) {
          if (!added.has(node)) {
            added.add(node);
            removed.delete(node);
            callback(node, connected);
          }
        } else if (!removed.has(node)) {
          removed.add(node);
          added.delete(node);
          callback(node, connected);
        }
        if (!pass)
          loop(node[QSA$1]("*"), added, removed, connected, TRUE);
      }
    }
  };
  const observer = new (MO || MutationObserver)((records) => {
    for (let added = /* @__PURE__ */ new Set(), removed = /* @__PURE__ */ new Set(), i = 0, { length } = records; i < length; i++) {
      const { addedNodes, removedNodes } = records[i];
      loop(removedNodes, added, removed, FALSE, FALSE);
      loop(addedNodes, added, removed, TRUE, FALSE);
    }
  });
  observer.add = add;
  observer.add(root || document);
  return observer;
};
const QSA = "querySelectorAll";
const { document: document$1, Element, MutationObserver: MutationObserver$1, Set: Set$1, WeakMap: WeakMap$1 } = self;
const elements = (element) => QSA in element;
const { filter } = [];
var QSAO = (options) => {
  const live = new WeakMap$1();
  const drop2 = (elements2) => {
    for (let i = 0, { length } = elements2; i < length; i++)
      live.delete(elements2[i]);
  };
  const flush2 = () => {
    const records = observer.takeRecords();
    for (let i = 0, { length } = records; i < length; i++) {
      parse2(filter.call(records[i].removedNodes, elements), false);
      parse2(filter.call(records[i].addedNodes, elements), true);
    }
  };
  const matches = (element) => element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
  const notifier = (element, connected) => {
    let selectors;
    if (connected) {
      for (let q, m2 = matches(element), i = 0, { length } = query2; i < length; i++) {
        if (m2.call(element, q = query2[i])) {
          if (!live.has(element))
            live.set(element, new Set$1());
          selectors = live.get(element);
          if (!selectors.has(q)) {
            selectors.add(q);
            options.handle(element, connected, q);
          }
        }
      }
    } else if (live.has(element)) {
      selectors = live.get(element);
      live.delete(element);
      selectors.forEach((q) => {
        options.handle(element, connected, q);
      });
    }
  };
  const parse2 = (elements2, connected = true) => {
    for (let i = 0, { length } = elements2; i < length; i++)
      notifier(elements2[i], connected);
  };
  const { query: query2 } = options;
  const root = options.root || document$1;
  const observer = notify(notifier, root, MutationObserver$1);
  const { attachShadow } = Element.prototype;
  if (attachShadow)
    Element.prototype.attachShadow = function(init2) {
      const shadowRoot = attachShadow.call(this, init2);
      observer.add(shadowRoot);
      return shadowRoot;
    };
  if (query2.length)
    parse2(root[QSA](query2));
  return { drop: drop2, flush: flush2, observer, parse: parse2 };
};
const { create, keys } = Object;
const attributes = /* @__PURE__ */ new WeakMap();
const lazy = /* @__PURE__ */ new Set();
const query = [];
const config = {};
const defined = {};
const attributeChangedCallback = (records, o2) => {
  for (let h2 = attributes.get(o2), i = 0, { length } = records; i < length; i++) {
    const { target, attributeName, oldValue } = records[i];
    const newValue = target.getAttribute(attributeName);
    h2.attributeChanged(attributeName, oldValue, newValue);
  }
};
const set = (value, m2, l2, o2) => {
  const handler = create(o2, { element: { enumerable: true, value } });
  for (let i = 0, { length } = l2; i < length; i++)
    value.addEventListener(l2[i].t, handler, l2[i].o);
  m2.set(value, handler);
  if (handler.init)
    handler.init();
  const { observedAttributes } = o2;
  if (observedAttributes) {
    const mo = new MutationObserver(attributeChangedCallback);
    mo.observe(value, {
      attributes: true,
      attributeOldValue: true,
      attributeFilter: observedAttributes.map((attributeName) => {
        if (value.hasAttribute(attributeName))
          handler.attributeChanged(attributeName, null, value.getAttribute(attributeName));
        return attributeName;
      })
    });
    attributes.set(mo, handler);
  }
  return handler;
};
const { drop, flush, parse } = QSAO({
  query,
  handle(element, connected, selector) {
    const { m: m2, l: l2, o: o2 } = config[selector];
    const handler = m2.get(element) || set(element, m2, l2, o2);
    const method = connected ? "connected" : "disconnected";
    if (method in handler)
      handler[method]();
  }
});
const get = (selector) => (config[selector] || attributes).o;
const define$2 = (selector, definition) => {
  if (-1 < query.indexOf(selector))
    throw new Error("duplicated: " + selector);
  flush();
  const listeners = [];
  const retype = create(null);
  for (let k2 = keys(definition), i = 0, { length } = k2; i < length; i++) {
    const key = k2[i];
    if (/^on/.test(key) && !/Options$/.test(key)) {
      const options = definition[key + "Options"] || false;
      const lower = key.toLowerCase();
      let type = lower.slice(2);
      listeners.push({ t: type, o: options });
      retype[type] = key;
      if (lower !== key) {
        type = key.slice(2, 3).toLowerCase() + key.slice(3);
        retype[type] = key;
        listeners.push({ t: type, o: options });
      }
    }
  }
  if (listeners.length) {
    definition.handleEvent = function(event) {
      this[retype[event.type]](event);
    };
  }
  query.push(selector);
  config[selector] = { m: /* @__PURE__ */ new WeakMap(), l: listeners, o: definition };
  parse(document.querySelectorAll(selector));
  whenDefined(selector);
  if (!lazy.has(selector))
    defined[selector]._();
};
const defineAsync$1 = (selector, callback, _2) => {
  lazy.add(selector);
  define$2(selector, {
    init() {
      if (lazy.has(selector)) {
        lazy.delete(selector);
        callback().then(({ default: definition }) => {
          query.splice(query.indexOf(selector), 1);
          drop(document.querySelectorAll(selector));
          (_2 || define$2)(selector, definition);
        });
      }
    }
  });
};
const upgrade = (element) => {
  if (query.length) {
    flush();
    parse([element]);
  }
};
const whenDefined = (selector) => {
  if (!(selector in defined)) {
    let _2, $2 = new Lie(($3) => {
      _2 = $3;
    });
    defined[selector] = { _: _2, $: $2 };
  }
  return defined[selector].$;
};
function init() {
  render(this);
}
const define$1 = (selector, definition) => {
  define$2(selector, typeof definition === "function" ? { init, render: definition } : (definition.init || (definition.init = init), definition));
};
const defineAsync = (selector, callback) => {
  defineAsync$1(selector, callback, define$1);
};
const render = (wicked) => {
  const { disconnected, element, render: render2 } = wicked;
  const hook = hooked(render2.bind(wicked, element));
  wicked.disconnected = () => {
    if (hasEffect(hook))
      dropEffect(hook);
    if (disconnected)
      disconnected.call(wicked);
  };
  return (wicked.render = hook)();
};
var n = function(t2, s2, r2, e2) {
  var u2;
  s2[0] = 0;
  for (var h2 = 1; h2 < s2.length; h2++) {
    var p = s2[h2++], a2 = s2[h2] ? (s2[0] |= p ? 1 : 2, r2[s2[h2++]]) : s2[++h2];
    p === 3 ? e2[0] = a2 : p === 4 ? e2[1] = Object.assign(e2[1] || {}, a2) : p === 5 ? (e2[1] = e2[1] || {})[s2[++h2]] = a2 : p === 6 ? e2[1][s2[++h2]] += a2 + "" : p ? (u2 = t2.apply(a2, n(t2, a2, r2, ["", null])), e2.push(u2), a2[0] ? s2[0] |= 2 : (s2[h2 - 2] = 0, s2[h2] = u2)) : e2.push(a2);
  }
  return e2;
}, t = /* @__PURE__ */ new Map();
function htm(s2) {
  var r2 = t.get(this);
  return r2 || (r2 = /* @__PURE__ */ new Map(), t.set(this, r2)), (r2 = n(this, r2.get(s2) || (r2.set(s2, r2 = function(n2) {
    for (var t2, s3, r3 = 1, e2 = "", u2 = "", h2 = [0], p = function(n3) {
      r3 === 1 && (n3 || (e2 = e2.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? h2.push(0, n3, e2) : r3 === 3 && (n3 || e2) ? (h2.push(3, n3, e2), r3 = 2) : r3 === 2 && e2 === "..." && n3 ? h2.push(4, n3, 0) : r3 === 2 && e2 && !n3 ? h2.push(5, 0, true, e2) : r3 >= 5 && ((e2 || !n3 && r3 === 5) && (h2.push(r3, 0, e2, s3), r3 = 6), n3 && (h2.push(r3, n3, 0, s3), r3 = 6)), e2 = "";
    }, a2 = 0; a2 < n2.length; a2++) {
      a2 && (r3 === 1 && p(), p(a2));
      for (var l2 = 0; l2 < n2[a2].length; l2++)
        t2 = n2[a2][l2], r3 === 1 ? t2 === "<" ? (p(), h2 = [h2], r3 = 3) : e2 += t2 : r3 === 4 ? e2 === "--" && t2 === ">" ? (r3 = 1, e2 = "") : e2 = t2 + e2[0] : u2 ? t2 === u2 ? u2 = "" : e2 += t2 : t2 === '"' || t2 === "'" ? u2 = t2 : t2 === ">" ? (p(), r3 = 1) : r3 && (t2 === "=" ? (r3 = 5, s3 = e2, e2 = "") : t2 === "/" && (r3 < 5 || n2[a2][l2 + 1] === ">") ? (p(), r3 === 3 && (h2 = h2[0]), r3 = h2, (h2 = h2[0]).push(2, 0, r3), r3 = 0) : t2 === " " || t2 === "	" || t2 === "\n" || t2 === "\r" ? (p(), r3 = 2) : e2 += t2), r3 === 3 && e2 === "!--" && (r3 = 4, h2 = h2[0]);
    }
    return p(), h2;
  }(s2)), r2), arguments, [])).length > 1 ? r2 : r2[0];
}
const html = htm.bind(v);
function completeAssign(target, ...sources) {
  const options = {
    enumerable: true,
    configurable: true
  };
  sources.forEach((source) => {
    if (source) {
      Object.keys(source).forEach((prop) => {
        const descriptor = Object.getOwnPropertyDescriptor(source, prop);
        Object.defineProperty(target, prop, Object.assign(descriptor, options));
      });
    }
  });
  return target;
}
const define = (name, callback, attrs = []) => {
  define$1(name, {
    observedAttributes: attrs,
    attributeChanged() {
      this.render();
    },
    render(element) {
      const Comp = callback(element);
      S(Comp, element);
    }
  });
};
export { define$1 as $define, defineAsync as $defineAsync, d as Fragment, completeAssign, createContext, v as createElement, define, get, v as h, html, S as render, upgrade, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState, whenDefined };
