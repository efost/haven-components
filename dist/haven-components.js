var Yc = Object.defineProperty;
var Uc = (e, t, n) => t in e ? Yc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var A = (e, t, n) => (Uc(e, typeof t != "symbol" ? t + "" : t, n), n);
import { Typography as ki, Box as gs } from "@mui/material";
import * as Wn from "react";
import Gs, { forwardRef as Wa, useRef as Ai, useEffect as le, useContext as Xc, useState as ps } from "react";
import Kc from "@emotion/styled";
import { ThemeContext as qc } from "@emotion/react";
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, mt.apply(this, arguments);
}
function De(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function $a(e) {
  if (!De(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = $a(e[n]);
  }), t;
}
function oe(e, t, n = {
  clone: !0
}) {
  const i = n.clone ? mt({}, e) : e;
  return De(e) && De(t) && Object.keys(t).forEach((s) => {
    s !== "__proto__" && (De(t[s]) && s in e && De(e[s]) ? i[s] = oe(e[s], t[s], n) : n.clone ? i[s] = De(t[s]) ? $a(t[s]) : t[s] : i[s] = t[s]);
  }), i;
}
var gt = { exports: {} }, ms = { exports: {} }, rt = {}, Fo;
function Gc() {
  if (Fo)
    return rt;
  Fo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var k = x.$$typeof;
      switch (k) {
        case t:
          switch (x = x.type, x) {
            case l:
            case c:
            case i:
            case o:
            case s:
            case u:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case d:
                case p:
                case f:
                case r:
                  return x;
                default:
                  return k;
              }
          }
        case n:
          return k;
      }
    }
  }
  function M(x) {
    return v(x) === c;
  }
  return rt.AsyncMode = l, rt.ConcurrentMode = c, rt.ContextConsumer = a, rt.ContextProvider = r, rt.Element = t, rt.ForwardRef = d, rt.Fragment = i, rt.Lazy = p, rt.Memo = f, rt.Portal = n, rt.Profiler = o, rt.StrictMode = s, rt.Suspense = u, rt.isAsyncMode = function(x) {
    return M(x) || v(x) === l;
  }, rt.isConcurrentMode = M, rt.isContextConsumer = function(x) {
    return v(x) === a;
  }, rt.isContextProvider = function(x) {
    return v(x) === r;
  }, rt.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, rt.isForwardRef = function(x) {
    return v(x) === d;
  }, rt.isFragment = function(x) {
    return v(x) === i;
  }, rt.isLazy = function(x) {
    return v(x) === p;
  }, rt.isMemo = function(x) {
    return v(x) === f;
  }, rt.isPortal = function(x) {
    return v(x) === n;
  }, rt.isProfiler = function(x) {
    return v(x) === o;
  }, rt.isStrictMode = function(x) {
    return v(x) === s;
  }, rt.isSuspense = function(x) {
    return v(x) === u;
  }, rt.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === c || x === o || x === s || x === u || x === h || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === f || x.$$typeof === r || x.$$typeof === a || x.$$typeof === d || x.$$typeof === m || x.$$typeof === y || x.$$typeof === _ || x.$$typeof === g);
  }, rt.typeOf = v, rt;
}
var at = {}, Bo;
function Qc() {
  return Bo || (Bo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, r = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, p = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, y = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function v(P) {
      return typeof P == "string" || typeof P == "function" || P === i || P === c || P === o || P === s || P === u || P === h || typeof P == "object" && P !== null && (P.$$typeof === p || P.$$typeof === f || P.$$typeof === r || P.$$typeof === a || P.$$typeof === d || P.$$typeof === m || P.$$typeof === y || P.$$typeof === _ || P.$$typeof === g);
    }
    function M(P) {
      if (typeof P == "object" && P !== null) {
        var It = P.$$typeof;
        switch (It) {
          case t:
            var Gt = P.type;
            switch (Gt) {
              case l:
              case c:
              case i:
              case o:
              case s:
              case u:
                return Gt;
              default:
                var Yt = Gt && Gt.$$typeof;
                switch (Yt) {
                  case a:
                  case d:
                  case p:
                  case f:
                  case r:
                    return Yt;
                  default:
                    return It;
                }
            }
          case n:
            return It;
        }
      }
    }
    var x = l, k = c, O = a, C = r, D = t, F = d, z = i, Y = p, tt = f, it = n, U = o, X = s, R = u, L = !1;
    function Q(P) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(P) || M(P) === l;
    }
    function w(P) {
      return M(P) === c;
    }
    function T(P) {
      return M(P) === a;
    }
    function j(P) {
      return M(P) === r;
    }
    function B(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function I(P) {
      return M(P) === d;
    }
    function V(P) {
      return M(P) === i;
    }
    function N(P) {
      return M(P) === p;
    }
    function H(P) {
      return M(P) === f;
    }
    function q(P) {
      return M(P) === n;
    }
    function J(P) {
      return M(P) === o;
    }
    function G(P) {
      return M(P) === s;
    }
    function Pt(P) {
      return M(P) === u;
    }
    at.AsyncMode = x, at.ConcurrentMode = k, at.ContextConsumer = O, at.ContextProvider = C, at.Element = D, at.ForwardRef = F, at.Fragment = z, at.Lazy = Y, at.Memo = tt, at.Portal = it, at.Profiler = U, at.StrictMode = X, at.Suspense = R, at.isAsyncMode = Q, at.isConcurrentMode = w, at.isContextConsumer = T, at.isContextProvider = j, at.isElement = B, at.isForwardRef = I, at.isFragment = V, at.isLazy = N, at.isMemo = H, at.isPortal = q, at.isProfiler = J, at.isStrictMode = G, at.isSuspense = Pt, at.isValidElementType = v, at.typeOf = M;
  }()), at;
}
var Wo;
function Va() {
  return Wo || (Wo = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Gc() : e.exports = Qc();
  }(ms)), ms.exports;
}
var bs, $o;
function Jc() {
  if ($o)
    return bs;
  $o = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function i(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var r = {}, a = 0; a < 10; a++)
        r["_" + String.fromCharCode(a)] = a;
      var l = Object.getOwnPropertyNames(r).map(function(d) {
        return r[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        c[d] = d;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return bs = s() ? Object.assign : function(o, r) {
    for (var a, l = i(o), c, d = 1; d < arguments.length; d++) {
      a = Object(arguments[d]);
      for (var u in a)
        t.call(a, u) && (l[u] = a[u]);
      if (e) {
        c = e(a);
        for (var h = 0; h < c.length; h++)
          n.call(a, c[h]) && (l[c[h]] = a[c[h]]);
      }
    }
    return l;
  }, bs;
}
var ys, Vo;
function Qs() {
  if (Vo)
    return ys;
  Vo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ys = e, ys;
}
var xs, Ho;
function Ha() {
  return Ho || (Ho = 1, xs = Function.call.bind(Object.prototype.hasOwnProperty)), xs;
}
var _s, Yo;
function Zc() {
  if (Yo)
    return _s;
  Yo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Qs(), n = {}, i = Ha();
    e = function(o) {
      var r = "Warning: " + o;
      typeof console < "u" && console.error(r);
      try {
        throw new Error(r);
      } catch {
      }
    };
  }
  function s(o, r, a, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (i(o, d)) {
          var u;
          try {
            if (typeof o[d] != "function") {
              var h = Error(
                (l || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            u = o[d](r, d, l, a, null, t);
          } catch (p) {
            u = p;
          }
          if (u && !(u instanceof Error) && e(
            (l || "React class") + ": type specification of " + a + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in n)) {
            n[u.message] = !0;
            var f = c ? c() : "";
            e(
              "Failed " + a + " type: " + u.message + (f != null ? f : "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, _s = s, _s;
}
var vs, Uo;
function td() {
  if (Uo)
    return vs;
  Uo = 1;
  var e = Va(), t = Jc(), n = Qs(), i = Ha(), s = Zc(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var l = "Warning: " + a;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function r() {
    return null;
  }
  return vs = function(a, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function u(w) {
      var T = w && (c && w[c] || w[d]);
      if (typeof T == "function")
        return T;
    }
    var h = "<<anonymous>>", f = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: _(),
      arrayOf: v,
      element: M(),
      elementType: x(),
      instanceOf: k,
      node: F(),
      objectOf: C,
      oneOf: O,
      oneOfType: D,
      shape: Y,
      exact: tt
    };
    function p(w, T) {
      return w === T ? w !== 0 || 1 / w === 1 / T : w !== w && T !== T;
    }
    function g(w, T) {
      this.message = w, this.data = T && typeof T == "object" ? T : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(w) {
      if (process.env.NODE_ENV !== "production")
        var T = {}, j = 0;
      function B(V, N, H, q, J, G, Pt) {
        if (q = q || h, G = G || H, Pt !== n) {
          if (l) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var It = q + ":" + H;
            !T[It] && j < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), T[It] = !0, j++);
          }
        }
        return N[H] == null ? V ? N[H] === null ? new g("The " + J + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new g("The " + J + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : w(N, H, q, J, G);
      }
      var I = B.bind(null, !1);
      return I.isRequired = B.bind(null, !0), I;
    }
    function y(w) {
      function T(j, B, I, V, N, H) {
        var q = j[B], J = X(q);
        if (J !== w) {
          var G = R(q);
          return new g(
            "Invalid " + V + " `" + N + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return m(T);
    }
    function _() {
      return m(r);
    }
    function v(w) {
      function T(j, B, I, V, N) {
        if (typeof w != "function")
          return new g("Property `" + N + "` of component `" + I + "` has invalid PropType notation inside arrayOf.");
        var H = j[B];
        if (!Array.isArray(H)) {
          var q = X(H);
          return new g("Invalid " + V + " `" + N + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an array."));
        }
        for (var J = 0; J < H.length; J++) {
          var G = w(H, J, I, V, N + "[" + J + "]", n);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return m(T);
    }
    function M() {
      function w(T, j, B, I, V) {
        var N = T[j];
        if (!a(N)) {
          var H = X(N);
          return new g("Invalid " + I + " `" + V + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(w);
    }
    function x() {
      function w(T, j, B, I, V) {
        var N = T[j];
        if (!e.isValidElementType(N)) {
          var H = X(N);
          return new g("Invalid " + I + " `" + V + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(w);
    }
    function k(w) {
      function T(j, B, I, V, N) {
        if (!(j[B] instanceof w)) {
          var H = w.name || h, q = Q(j[B]);
          return new g("Invalid " + V + " `" + N + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return m(T);
    }
    function O(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), r;
      function T(j, B, I, V, N) {
        for (var H = j[B], q = 0; q < w.length; q++)
          if (p(H, w[q]))
            return null;
        var J = JSON.stringify(w, function(Pt, P) {
          var It = R(P);
          return It === "symbol" ? String(P) : P;
        });
        return new g("Invalid " + V + " `" + N + "` of value `" + String(H) + "` " + ("supplied to `" + I + "`, expected one of " + J + "."));
      }
      return m(T);
    }
    function C(w) {
      function T(j, B, I, V, N) {
        if (typeof w != "function")
          return new g("Property `" + N + "` of component `" + I + "` has invalid PropType notation inside objectOf.");
        var H = j[B], q = X(H);
        if (q !== "object")
          return new g("Invalid " + V + " `" + N + "` of type " + ("`" + q + "` supplied to `" + I + "`, expected an object."));
        for (var J in H)
          if (i(H, J)) {
            var G = w(H, J, I, V, N + "." + J, n);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return m(T);
    }
    function D(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var T = 0; T < w.length; T++) {
        var j = w[T];
        if (typeof j != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + L(j) + " at index " + T + "."
          ), r;
      }
      function B(I, V, N, H, q) {
        for (var J = [], G = 0; G < w.length; G++) {
          var Pt = w[G], P = Pt(I, V, N, H, q, n);
          if (P == null)
            return null;
          P.data && i(P.data, "expectedType") && J.push(P.data.expectedType);
        }
        var It = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new g("Invalid " + H + " `" + q + "` supplied to " + ("`" + N + "`" + It + "."));
      }
      return m(B);
    }
    function F() {
      function w(T, j, B, I, V) {
        return it(T[j]) ? null : new g("Invalid " + I + " `" + V + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return m(w);
    }
    function z(w, T, j, B, I) {
      return new g(
        (w || "React class") + ": " + T + " type `" + j + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + I + "`."
      );
    }
    function Y(w) {
      function T(j, B, I, V, N) {
        var H = j[B], q = X(H);
        if (q !== "object")
          return new g("Invalid " + V + " `" + N + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        for (var J in w) {
          var G = w[J];
          if (typeof G != "function")
            return z(I, V, N, J, R(G));
          var Pt = G(H, J, I, V, N + "." + J, n);
          if (Pt)
            return Pt;
        }
        return null;
      }
      return m(T);
    }
    function tt(w) {
      function T(j, B, I, V, N) {
        var H = j[B], q = X(H);
        if (q !== "object")
          return new g("Invalid " + V + " `" + N + "` of type `" + q + "` " + ("supplied to `" + I + "`, expected `object`."));
        var J = t({}, j[B], w);
        for (var G in J) {
          var Pt = w[G];
          if (i(w, G) && typeof Pt != "function")
            return z(I, V, N, G, R(Pt));
          if (!Pt)
            return new g(
              "Invalid " + V + " `" + N + "` key `" + G + "` supplied to `" + I + "`.\nBad object: " + JSON.stringify(j[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var P = Pt(H, G, I, V, N + "." + G, n);
          if (P)
            return P;
        }
        return null;
      }
      return m(T);
    }
    function it(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(it);
          if (w === null || a(w))
            return !0;
          var T = u(w);
          if (T) {
            var j = T.call(w), B;
            if (T !== w.entries) {
              for (; !(B = j.next()).done; )
                if (!it(B.value))
                  return !1;
            } else
              for (; !(B = j.next()).done; ) {
                var I = B.value;
                if (I && !it(I[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function U(w, T) {
      return w === "symbol" ? !0 : T ? T["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && T instanceof Symbol : !1;
    }
    function X(w) {
      var T = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : U(T, w) ? "symbol" : T;
    }
    function R(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var T = X(w);
      if (T === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return T;
    }
    function L(w) {
      var T = R(w);
      switch (T) {
        case "array":
        case "object":
          return "an " + T;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + T;
        default:
          return T;
      }
    }
    function Q(w) {
      return !w.constructor || !w.constructor.name ? h : w.constructor.name;
    }
    return f.checkPropTypes = s, f.resetWarningCache = s.resetWarningCache, f.PropTypes = f, f;
  }, vs;
}
var Ms, Xo;
function ed() {
  if (Xo)
    return Ms;
  Xo = 1;
  var e = Qs();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Ms = function() {
    function i(r, a, l, c, d, u) {
      if (u !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    i.isRequired = i;
    function s() {
      return i;
    }
    var o = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: s,
      element: i,
      elementType: i,
      instanceOf: s,
      node: i,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Ms;
}
if (process.env.NODE_ENV !== "production") {
  var nd = Va(), id = !0;
  gt.exports = td()(nd.isElement, id);
} else
  gt.exports = ed()();
const sd = "exact-prop: \u200B";
function Ya(e) {
  return process.env.NODE_ENV === "production" ? e : mt({}, e, {
    [sd]: (t) => {
      const n = Object.keys(t).filter((i) => !e.hasOwnProperty(i));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((i) => `\`${i}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function tn(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function Ua(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : tn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Ko = (e) => e, od = () => {
  let e = Ko;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ko;
    }
  };
}, rd = od(), Xa = rd, ad = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  required: "required",
  selected: "selected"
};
function ld(e, t, n = "Mui") {
  const i = ad[t];
  return i ? `${n}-${i}` : `${Xa.generate(e)}-${t}`;
}
function _e(e, t) {
  if (e == null)
    return {};
  var n = {}, i = Object.keys(e), s, o;
  for (o = 0; o < i.length; o++)
    s = i[o], !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
var Ki = { exports: {} }, mn = {}, qo;
function cd() {
  if (qo)
    return mn;
  qo = 1;
  var e = Gs, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, c) {
    var d, u = {}, h = null, f = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (d in l)
      i.call(l, d) && !o.hasOwnProperty(d) && (u[d] = l[d]);
    if (a && a.defaultProps)
      for (d in l = a.defaultProps, l)
        u[d] === void 0 && (u[d] = l[d]);
    return { $$typeof: t, type: a, key: h, ref: f, props: u, _owner: s.current };
  }
  return mn.Fragment = n, mn.jsx = r, mn.jsxs = r, mn;
}
var bn = {}, Go;
function dd() {
  return Go || (Go = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Gs, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function m(b) {
      if (b === null || typeof b != "object")
        return null;
      var S = p && b[p] || b[g];
      return typeof S == "function" ? S : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(b) {
      {
        for (var S = arguments.length, E = new Array(S > 1 ? S - 1 : 0), $ = 1; $ < S; $++)
          E[$ - 1] = arguments[$];
        v("error", b, E);
      }
    }
    function v(b, S, E) {
      {
        var $ = y.ReactDebugCurrentFrame, st = $.getStackAddendum();
        st !== "" && (S += "%s", E = E.concat([st]));
        var ht = E.map(function(et) {
          return String(et);
        });
        ht.unshift("Warning: " + S), Function.prototype.apply.call(console[b], console, ht);
      }
    }
    var M = !1, x = !1, k = !1, O = !1, C = !1, D;
    D = Symbol.for("react.module.reference");
    function F(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === i || b === o || C || b === s || b === c || b === d || O || b === f || M || x || k || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === u || b.$$typeof === r || b.$$typeof === a || b.$$typeof === l || b.$$typeof === D || b.getModuleId !== void 0));
    }
    function z(b, S, E) {
      var $ = b.displayName;
      if ($)
        return $;
      var st = S.displayName || S.name || "";
      return st !== "" ? E + "(" + st + ")" : E;
    }
    function Y(b) {
      return b.displayName || "Context";
    }
    function tt(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case a:
            var S = b;
            return Y(S) + ".Consumer";
          case r:
            var E = b;
            return Y(E._context) + ".Provider";
          case l:
            return z(b, b.render, "ForwardRef");
          case u:
            var $ = b.displayName || null;
            return $ !== null ? $ : tt(b.type) || "Memo";
          case h: {
            var st = b, ht = st._payload, et = st._init;
            try {
              return tt(et(ht));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var it = Object.assign, U = 0, X, R, L, Q, w, T, j;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function I() {
      {
        if (U === 0) {
          X = console.log, R = console.info, L = console.warn, Q = console.error, w = console.group, T = console.groupCollapsed, j = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: B,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        U++;
      }
    }
    function V() {
      {
        if (U--, U === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, b, {
              value: X
            }),
            info: it({}, b, {
              value: R
            }),
            warn: it({}, b, {
              value: L
            }),
            error: it({}, b, {
              value: Q
            }),
            group: it({}, b, {
              value: w
            }),
            groupCollapsed: it({}, b, {
              value: T
            }),
            groupEnd: it({}, b, {
              value: j
            })
          });
        }
        U < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var N = y.ReactCurrentDispatcher, H;
    function q(b, S, E) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (st) {
            var $ = st.stack.trim().match(/\n( *(at )?)/);
            H = $ && $[1] || "";
          }
        return `
` + H + b;
      }
    }
    var J = !1, G;
    {
      var Pt = typeof WeakMap == "function" ? WeakMap : Map;
      G = new Pt();
    }
    function P(b, S) {
      if (!b || J)
        return "";
      {
        var E = G.get(b);
        if (E !== void 0)
          return E;
      }
      var $;
      J = !0;
      var st = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ht;
      ht = N.current, N.current = null, I();
      try {
        if (S) {
          var et = function() {
            throw Error();
          };
          if (Object.defineProperty(et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(et, []);
            } catch (Qt) {
              $ = Qt;
            }
            Reflect.construct(b, [], et);
          } else {
            try {
              et.call();
            } catch (Qt) {
              $ = Qt;
            }
            b.call(et.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Qt) {
            $ = Qt;
          }
          b();
        }
      } catch (Qt) {
        if (Qt && $ && typeof Qt.stack == "string") {
          for (var Z = Qt.stack.split(`
`), Lt = $.stack.split(`
`), St = Z.length - 1, Ot = Lt.length - 1; St >= 1 && Ot >= 0 && Z[St] !== Lt[Ot]; )
            Ot--;
          for (; St >= 1 && Ot >= 0; St--, Ot--)
            if (Z[St] !== Lt[Ot]) {
              if (St !== 1 || Ot !== 1)
                do
                  if (St--, Ot--, Ot < 0 || Z[St] !== Lt[Ot]) {
                    var $t = `
` + Z[St].replace(" at new ", " at ");
                    return b.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", b.displayName)), typeof b == "function" && G.set(b, $t), $t;
                  }
                while (St >= 1 && Ot >= 0);
              break;
            }
        }
      } finally {
        J = !1, N.current = ht, V(), Error.prepareStackTrace = st;
      }
      var Ve = b ? b.displayName || b.name : "", zo = Ve ? q(Ve) : "";
      return typeof b == "function" && G.set(b, zo), zo;
    }
    function It(b, S, E) {
      return P(b, !1);
    }
    function Gt(b) {
      var S = b.prototype;
      return !!(S && S.isReactComponent);
    }
    function Yt(b, S, E) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return P(b, Gt(b));
      if (typeof b == "string")
        return q(b);
      switch (b) {
        case c:
          return q("Suspense");
        case d:
          return q("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return It(b.render);
          case u:
            return Yt(b.type, S, E);
          case h: {
            var $ = b, st = $._payload, ht = $._init;
            try {
              return Yt(ht(st), S, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Se = Object.prototype.hasOwnProperty, fn = {}, gn = y.ReactDebugCurrentFrame;
    function ke(b) {
      if (b) {
        var S = b._owner, E = Yt(b.type, b._source, S ? S.type : null);
        gn.setExtraStackFrame(E);
      } else
        gn.setExtraStackFrame(null);
    }
    function ai(b, S, E, $, st) {
      {
        var ht = Function.call.bind(Se);
        for (var et in b)
          if (ht(b, et)) {
            var Z = void 0;
            try {
              if (typeof b[et] != "function") {
                var Lt = Error(($ || "React class") + ": " + E + " type `" + et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Lt.name = "Invariant Violation", Lt;
              }
              Z = b[et](S, et, $, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (St) {
              Z = St;
            }
            Z && !(Z instanceof Error) && (ke(st), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", $ || "React class", E, et, typeof Z), ke(null)), Z instanceof Error && !(Z.message in fn) && (fn[Z.message] = !0, ke(st), _("Failed %s type: %s", E, Z.message), ke(null));
          }
      }
    }
    var li = Array.isArray;
    function We(b) {
      return li(b);
    }
    function ci(b) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, E = S && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return E;
      }
    }
    function Cc(b) {
      try {
        return Co(b), !1;
      } catch {
        return !0;
      }
    }
    function Co(b) {
      return "" + b;
    }
    function Po(b) {
      if (Cc(b))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ci(b)), Co(b);
    }
    var pn = y.ReactCurrentOwner, Pc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Eo, Ao, ds;
    ds = {};
    function Ec(b) {
      if (Se.call(b, "ref")) {
        var S = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function Ac(b) {
      if (Se.call(b, "key")) {
        var S = Object.getOwnPropertyDescriptor(b, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Dc(b, S) {
      if (typeof b.ref == "string" && pn.current && S && pn.current.stateNode !== S) {
        var E = tt(pn.current.type);
        ds[E] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', tt(pn.current.type), b.ref), ds[E] = !0);
      }
    }
    function Rc(b, S) {
      {
        var E = function() {
          Eo || (Eo = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        E.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function Ic(b, S) {
      {
        var E = function() {
          Ao || (Ao = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        E.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var Lc = function(b, S, E, $, st, ht, et) {
      var Z = {
        $$typeof: t,
        type: b,
        key: S,
        ref: E,
        props: et,
        _owner: ht
      };
      return Z._store = {}, Object.defineProperty(Z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: $
      }), Object.defineProperty(Z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: st
      }), Object.freeze && (Object.freeze(Z.props), Object.freeze(Z)), Z;
    };
    function jc(b, S, E, $, st) {
      {
        var ht, et = {}, Z = null, Lt = null;
        E !== void 0 && (Po(E), Z = "" + E), Ac(S) && (Po(S.key), Z = "" + S.key), Ec(S) && (Lt = S.ref, Dc(S, st));
        for (ht in S)
          Se.call(S, ht) && !Pc.hasOwnProperty(ht) && (et[ht] = S[ht]);
        if (b && b.defaultProps) {
          var St = b.defaultProps;
          for (ht in St)
            et[ht] === void 0 && (et[ht] = St[ht]);
        }
        if (Z || Lt) {
          var Ot = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          Z && Rc(et, Ot), Lt && Ic(et, Ot);
        }
        return Lc(b, Z, Lt, st, $, pn.current, et);
      }
    }
    var us = y.ReactCurrentOwner, Do = y.ReactDebugCurrentFrame;
    function $e(b) {
      if (b) {
        var S = b._owner, E = Yt(b.type, b._source, S ? S.type : null);
        Do.setExtraStackFrame(E);
      } else
        Do.setExtraStackFrame(null);
    }
    var hs;
    hs = !1;
    function fs(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function Ro() {
      {
        if (us.current) {
          var b = tt(us.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Nc(b) {
      {
        if (b !== void 0) {
          var S = b.fileName.replace(/^.*[\\\/]/, ""), E = b.lineNumber;
          return `

Check your code at ` + S + ":" + E + ".";
        }
        return "";
      }
    }
    var Io = {};
    function zc(b) {
      {
        var S = Ro();
        if (!S) {
          var E = typeof b == "string" ? b : b.displayName || b.name;
          E && (S = `

Check the top-level render call using <` + E + ">.");
        }
        return S;
      }
    }
    function Lo(b, S) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var E = zc(S);
        if (Io[E])
          return;
        Io[E] = !0;
        var $ = "";
        b && b._owner && b._owner !== us.current && ($ = " It was passed a child from " + tt(b._owner.type) + "."), $e(b), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, $), $e(null);
      }
    }
    function jo(b, S) {
      {
        if (typeof b != "object")
          return;
        if (We(b))
          for (var E = 0; E < b.length; E++) {
            var $ = b[E];
            fs($) && Lo($, S);
          }
        else if (fs(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var st = m(b);
          if (typeof st == "function" && st !== b.entries)
            for (var ht = st.call(b), et; !(et = ht.next()).done; )
              fs(et.value) && Lo(et.value, S);
        }
      }
    }
    function Fc(b) {
      {
        var S = b.type;
        if (S == null || typeof S == "string")
          return;
        var E;
        if (typeof S == "function")
          E = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || S.$$typeof === u))
          E = S.propTypes;
        else
          return;
        if (E) {
          var $ = tt(S);
          ai(E, b.props, "prop", $, b);
        } else if (S.PropTypes !== void 0 && !hs) {
          hs = !0;
          var st = tt(S);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", st || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bc(b) {
      {
        for (var S = Object.keys(b.props), E = 0; E < S.length; E++) {
          var $ = S[E];
          if ($ !== "children" && $ !== "key") {
            $e(b), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", $), $e(null);
            break;
          }
        }
        b.ref !== null && ($e(b), _("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function No(b, S, E, $, st, ht) {
      {
        var et = F(b);
        if (!et) {
          var Z = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Lt = Nc(st);
          Lt ? Z += Lt : Z += Ro();
          var St;
          b === null ? St = "null" : We(b) ? St = "array" : b !== void 0 && b.$$typeof === t ? (St = "<" + (tt(b.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : St = typeof b, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", St, Z);
        }
        var Ot = jc(b, S, E, st, ht);
        if (Ot == null)
          return Ot;
        if (et) {
          var $t = S.children;
          if ($t !== void 0)
            if ($)
              if (We($t)) {
                for (var Ve = 0; Ve < $t.length; Ve++)
                  jo($t[Ve], b);
                Object.freeze && Object.freeze($t);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jo($t, b);
        }
        return b === i ? Bc(Ot) : Fc(Ot), Ot;
      }
    }
    function Wc(b, S, E) {
      return No(b, S, E, !0);
    }
    function $c(b, S, E) {
      return No(b, S, E, !1);
    }
    var Vc = $c, Hc = Wc;
    bn.Fragment = i, bn.jsx = Vc, bn.jsxs = Hc;
  }()), bn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = cd() : e.exports = dd();
})(Ki);
const Re = Ki.exports.Fragment, lt = Ki.exports.jsx, Ie = Ki.exports.jsxs;
function ud(e, t) {
  const n = Kc(e, t);
  return process.env.NODE_ENV !== "production" ? (...i) => {
    const s = typeof e == "string" ? `"${e}"` : "component";
    return i.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : i.some((o) => o === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), n(...i);
  } : n;
}
const hd = process.env.NODE_ENV !== "production" ? gt.exports.oneOfType([gt.exports.number, gt.exports.string, gt.exports.object, gt.exports.array]) : {}, ve = hd;
function En(e, t) {
  return t ? oe(e, t, {
    clone: !1
  }) : e;
}
const Js = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, Qo = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Js[e]}px)`
};
function re(e, t, n) {
  const i = e.theme || {};
  if (Array.isArray(t)) {
    const o = i.breakpoints || Qo;
    return t.reduce((r, a, l) => (r[o.up(o.keys[l])] = n(t[l]), r), {});
  }
  if (typeof t == "object") {
    const o = i.breakpoints || Qo;
    return Object.keys(t).reduce((r, a) => {
      if (Object.keys(o.values || Js).indexOf(a) !== -1) {
        const l = o.up(a);
        r[l] = n(t[a], a);
      } else {
        const l = a;
        r[l] = t[l];
      }
      return r;
    }, {});
  }
  return n(t);
}
function fd(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((i, s) => {
    const o = e.up(s);
    return i[o] = {}, i;
  }, {})) || {};
}
function gd(e, t) {
  return e.reduce((n, i) => {
    const s = n[i];
    return (!s || Object.keys(s).length === 0) && delete n[i], n;
  }, t);
}
function qi(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const i = `vars.${t}`.split(".").reduce((s, o) => s && s[o] ? s[o] : null, e);
    if (i != null)
      return i;
  }
  return t.split(".").reduce((i, s) => i && i[s] != null ? i[s] : null, e);
}
function Di(e, t, n, i = n) {
  let s;
  return typeof e == "function" ? s = e(n) : Array.isArray(e) ? s = e[n] || i : s = qi(e, n) || i, t && (s = t(s, i, e)), s;
}
function ct(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: i,
    transform: s
  } = e, o = (r) => {
    if (r[t] == null)
      return null;
    const a = r[t], l = r.theme, c = qi(l, i) || {};
    return re(r, a, (u) => {
      let h = Di(c, s, u);
      return u === h && typeof u == "string" && (h = Di(c, s, `${t}${u === "default" ? "" : Ua(u)}`, u)), n === !1 ? h : {
        [n]: h
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ve
  } : {}, o.filterProps = [t], o;
}
function Gi(...e) {
  const t = e.reduce((i, s) => (s.filterProps.forEach((o) => {
    i[o] = s;
  }), i), {}), n = (i) => Object.keys(i).reduce((s, o) => t[o] ? En(s, t[o](i)) : s, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((i, s) => Object.assign(i, s.propTypes), {}) : {}, n.filterProps = e.reduce((i, s) => i.concat(s.filterProps), []), n;
}
function pd(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const md = {
  m: "margin",
  p: "padding"
}, bd = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Jo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, yd = pd((e) => {
  if (e.length > 2)
    if (Jo[e])
      e = Jo[e];
    else
      return [e];
  const [t, n] = e.split(""), i = md[t], s = bd[n] || "";
  return Array.isArray(s) ? s.map((o) => i + o) : [i + s];
}), Qi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ji = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], xd = [...Qi, ...Ji];
function Qn(e, t, n, i) {
  var s;
  const o = (s = qi(e, t, !1)) != null ? s : n;
  return typeof o == "number" ? (r) => typeof r == "string" ? r : (process.env.NODE_ENV !== "production" && typeof r != "number" && console.error(`MUI: Expected ${i} argument to be a number or a string, got ${r}.`), o * r) : Array.isArray(o) ? (r) => typeof r == "string" ? r : (process.env.NODE_ENV !== "production" && (Number.isInteger(r) ? r > o.length - 1 && console.error([`MUI: The value provided (${r}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${r} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[r]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ka(e) {
  return Qn(e, "spacing", 8, "spacing");
}
function Jn(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), i = e(n);
  return t >= 0 ? i : typeof i == "number" ? -i : `-${i}`;
}
function _d(e, t) {
  return (n) => e.reduce((i, s) => (i[s] = Jn(t, n), i), {});
}
function vd(e, t, n, i) {
  if (t.indexOf(n) === -1)
    return null;
  const s = yd(n), o = _d(s, i), r = e[n];
  return re(e, r, o);
}
function qa(e, t) {
  const n = Ka(e.theme);
  return Object.keys(e).map((i) => vd(e, t, i, n)).reduce(En, {});
}
function _t(e) {
  return qa(e, Qi);
}
_t.propTypes = process.env.NODE_ENV !== "production" ? Qi.reduce((e, t) => (e[t] = ve, e), {}) : {};
_t.filterProps = Qi;
function vt(e) {
  return qa(e, Ji);
}
vt.propTypes = process.env.NODE_ENV !== "production" ? Ji.reduce((e, t) => (e[t] = ve, e), {}) : {};
vt.filterProps = Ji;
process.env.NODE_ENV !== "production" && xd.reduce((e, t) => (e[t] = ve, e), {});
function Kt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Md = ct({
  prop: "border",
  themeKey: "borders",
  transform: Kt
}), wd = ct({
  prop: "borderTop",
  themeKey: "borders",
  transform: Kt
}), Sd = ct({
  prop: "borderRight",
  themeKey: "borders",
  transform: Kt
}), kd = ct({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Kt
}), Od = ct({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Kt
}), Td = ct({
  prop: "borderColor",
  themeKey: "palette"
}), Cd = ct({
  prop: "borderTopColor",
  themeKey: "palette"
}), Pd = ct({
  prop: "borderRightColor",
  themeKey: "palette"
}), Ed = ct({
  prop: "borderBottomColor",
  themeKey: "palette"
}), Ad = ct({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Zi = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Qn(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (i) => ({
      borderRadius: Jn(t, i)
    });
    return re(e, e.borderRadius, n);
  }
  return null;
};
Zi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ve
} : {};
Zi.filterProps = ["borderRadius"];
Gi(Md, wd, Sd, kd, Od, Td, Cd, Pd, Ed, Ad, Zi);
const ts = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Qn(e.theme, "spacing", 8, "gap"), n = (i) => ({
      gap: Jn(t, i)
    });
    return re(e, e.gap, n);
  }
  return null;
};
ts.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ve
} : {};
ts.filterProps = ["gap"];
const es = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Qn(e.theme, "spacing", 8, "columnGap"), n = (i) => ({
      columnGap: Jn(t, i)
    });
    return re(e, e.columnGap, n);
  }
  return null;
};
es.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ve
} : {};
es.filterProps = ["columnGap"];
const ns = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Qn(e.theme, "spacing", 8, "rowGap"), n = (i) => ({
      rowGap: Jn(t, i)
    });
    return re(e, e.rowGap, n);
  }
  return null;
};
ns.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ve
} : {};
ns.filterProps = ["rowGap"];
const Dd = ct({
  prop: "gridColumn"
}), Rd = ct({
  prop: "gridRow"
}), Id = ct({
  prop: "gridAutoFlow"
}), Ld = ct({
  prop: "gridAutoColumns"
}), jd = ct({
  prop: "gridAutoRows"
}), Nd = ct({
  prop: "gridTemplateColumns"
}), zd = ct({
  prop: "gridTemplateRows"
}), Fd = ct({
  prop: "gridTemplateAreas"
}), Bd = ct({
  prop: "gridArea"
});
Gi(ts, es, ns, Dd, Rd, Id, Ld, jd, Nd, zd, Fd, Bd);
function Qe(e, t) {
  return t === "grey" ? t : e;
}
const Wd = ct({
  prop: "color",
  themeKey: "palette",
  transform: Qe
}), $d = ct({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Qe
}), Vd = ct({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Qe
});
Gi(Wd, $d, Vd);
function Wt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Hd = ct({
  prop: "width",
  transform: Wt
}), Zs = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var i, s, o;
      return {
        maxWidth: ((i = e.theme) == null || (s = i.breakpoints) == null || (o = s.values) == null ? void 0 : o[n]) || Js[n] || Wt(n)
      };
    };
    return re(e, e.maxWidth, t);
  }
  return null;
};
Zs.filterProps = ["maxWidth"];
const Yd = ct({
  prop: "minWidth",
  transform: Wt
}), Ud = ct({
  prop: "height",
  transform: Wt
}), Xd = ct({
  prop: "maxHeight",
  transform: Wt
}), Kd = ct({
  prop: "minHeight",
  transform: Wt
});
ct({
  prop: "size",
  cssProperty: "width",
  transform: Wt
});
ct({
  prop: "size",
  cssProperty: "height",
  transform: Wt
});
const qd = ct({
  prop: "boxSizing"
});
Gi(Hd, Zs, Yd, Ud, Xd, Kd, qd);
const Gd = {
  border: {
    themeKey: "borders",
    transform: Kt
  },
  borderTop: {
    themeKey: "borders",
    transform: Kt
  },
  borderRight: {
    themeKey: "borders",
    transform: Kt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Kt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Kt
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Zi
  },
  color: {
    themeKey: "palette",
    transform: Qe
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Qe
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Qe
  },
  p: {
    style: vt
  },
  pt: {
    style: vt
  },
  pr: {
    style: vt
  },
  pb: {
    style: vt
  },
  pl: {
    style: vt
  },
  px: {
    style: vt
  },
  py: {
    style: vt
  },
  padding: {
    style: vt
  },
  paddingTop: {
    style: vt
  },
  paddingRight: {
    style: vt
  },
  paddingBottom: {
    style: vt
  },
  paddingLeft: {
    style: vt
  },
  paddingX: {
    style: vt
  },
  paddingY: {
    style: vt
  },
  paddingInline: {
    style: vt
  },
  paddingInlineStart: {
    style: vt
  },
  paddingInlineEnd: {
    style: vt
  },
  paddingBlock: {
    style: vt
  },
  paddingBlockStart: {
    style: vt
  },
  paddingBlockEnd: {
    style: vt
  },
  m: {
    style: _t
  },
  mt: {
    style: _t
  },
  mr: {
    style: _t
  },
  mb: {
    style: _t
  },
  ml: {
    style: _t
  },
  mx: {
    style: _t
  },
  my: {
    style: _t
  },
  margin: {
    style: _t
  },
  marginTop: {
    style: _t
  },
  marginRight: {
    style: _t
  },
  marginBottom: {
    style: _t
  },
  marginLeft: {
    style: _t
  },
  marginX: {
    style: _t
  },
  marginY: {
    style: _t
  },
  marginInline: {
    style: _t
  },
  marginInlineStart: {
    style: _t
  },
  marginInlineEnd: {
    style: _t
  },
  marginBlock: {
    style: _t
  },
  marginBlockStart: {
    style: _t
  },
  marginBlockEnd: {
    style: _t
  },
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: {
    style: ts
  },
  rowGap: {
    style: ns
  },
  columnGap: {
    style: es
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: {
    themeKey: "shadows"
  },
  width: {
    transform: Wt
  },
  maxWidth: {
    style: Zs
  },
  minWidth: {
    transform: Wt
  },
  height: {
    transform: Wt
  },
  maxHeight: {
    transform: Wt
  },
  minHeight: {
    transform: Wt
  },
  boxSizing: {},
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, is = Gd;
function Qd(...e) {
  const t = e.reduce((i, s) => i.concat(Object.keys(s)), []), n = new Set(t);
  return e.every((i) => n.size === Object.keys(i).length);
}
function Jd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zd() {
  function e(n, i, s, o) {
    const r = {
      [n]: i,
      theme: s
    }, a = o[n];
    if (!a)
      return {
        [n]: i
      };
    const {
      cssProperty: l = n,
      themeKey: c,
      transform: d,
      style: u
    } = a;
    if (i == null)
      return null;
    const h = qi(s, c) || {};
    return u ? u(r) : re(r, i, (p) => {
      let g = Di(h, d, p);
      return p === g && typeof p == "string" && (g = Di(h, d, `${n}${p === "default" ? "" : Ua(p)}`, p)), l === !1 ? g : {
        [l]: g
      };
    });
  }
  function t(n) {
    var i;
    const {
      sx: s,
      theme: o = {}
    } = n || {};
    if (!s)
      return null;
    const r = (i = o.unstable_sxConfig) != null ? i : is;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(o);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const d = fd(o.breakpoints), u = Object.keys(d);
      let h = d;
      return Object.keys(c).forEach((f) => {
        const p = Jd(c[f], o);
        if (p != null)
          if (typeof p == "object")
            if (r[f])
              h = En(h, e(f, p, o, r));
            else {
              const g = re({
                theme: o
              }, p, (m) => ({
                [f]: m
              }));
              Qd(g, p) ? h[f] = t({
                sx: p,
                theme: o
              }) : h = En(h, g);
            }
          else
            h = En(h, e(f, p, o, r));
      }), gd(u, h);
    }
    return Array.isArray(s) ? s.map(a) : a(s);
  }
  return t;
}
const Ga = Zd();
Ga.filterProps = ["sx"];
const to = Ga, tu = ["sx"], eu = (e) => {
  var t, n;
  const i = {
    systemProps: {},
    otherProps: {}
  }, s = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : is;
  return Object.keys(e).forEach((o) => {
    s[o] ? i.systemProps[o] = e[o] : i.otherProps[o] = e[o];
  }), i;
};
function nu(e) {
  const {
    sx: t
  } = e, n = _e(e, tu), {
    systemProps: i,
    otherProps: s
  } = eu(n);
  let o;
  return Array.isArray(t) ? o = [i, ...t] : typeof t == "function" ? o = (...r) => {
    const a = t(...r);
    return De(a) ? mt({}, i, a) : i;
  } : o = mt({}, i, t), mt({}, s, {
    sx: o
  });
}
function Qa(e) {
  var t, n, i = "";
  if (typeof e == "string" || typeof e == "number")
    i += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Qa(e[t])) && (i && (i += " "), i += n);
    else
      for (t in e)
        e[t] && (i && (i += " "), i += t);
  return i;
}
function iu() {
  for (var e, t, n = 0, i = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Qa(e)) && (i && (i += " "), i += t);
  return i;
}
const su = ["values", "unit", "step"], ou = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, i) => n.val - i.val), t.reduce((n, i) => mt({}, n, {
    [i.key]: i.val
  }), {});
};
function ru(e) {
  const {
    values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: n = "px",
    step: i = 5
  } = e, s = _e(e, su), o = ou(t), r = Object.keys(o);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - i / 100}${n})`;
  }
  function c(h, f) {
    const p = r.indexOf(f);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${(p !== -1 && typeof t[r[p]] == "number" ? t[r[p]] : f) - i / 100}${n})`;
  }
  function d(h) {
    return r.indexOf(h) + 1 < r.length ? c(h, r[r.indexOf(h) + 1]) : a(h);
  }
  function u(h) {
    const f = r.indexOf(h);
    return f === 0 ? a(r[1]) : f === r.length - 1 ? l(r[f]) : c(h, r[r.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return mt({
    keys: r,
    values: o,
    up: a,
    down: l,
    between: c,
    only: d,
    not: u,
    unit: n
  }, s);
}
const au = {
  borderRadius: 4
}, lu = au;
function cu(e = 8) {
  if (e.mui)
    return e;
  const t = Ka({
    spacing: e
  }), n = (...i) => (process.env.NODE_ENV !== "production" && (i.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${i.length}`)), (i.length === 0 ? [1] : i).map((o) => {
    const r = t(o);
    return typeof r == "number" ? `${r}px` : r;
  }).join(" "));
  return n.mui = !0, n;
}
const du = ["breakpoints", "palette", "spacing", "shape"];
function Ja(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: i = {},
    spacing: s,
    shape: o = {}
  } = e, r = _e(e, du), a = ru(n), l = cu(s);
  let c = oe({
    breakpoints: a,
    direction: "ltr",
    components: {},
    palette: mt({
      mode: "light"
    }, i),
    spacing: l,
    shape: mt({}, lu, o)
  }, r);
  return c = t.reduce((d, u) => oe(d, u), c), c.unstable_sxConfig = mt({}, is, r == null ? void 0 : r.unstable_sxConfig), c.unstable_sx = function(u) {
    return to({
      sx: u,
      theme: this
    });
  }, c;
}
const Za = Wn.createContext(null);
process.env.NODE_ENV !== "production" && (Za.displayName = "ThemeContext");
const tl = Za;
function el() {
  const e = Wn.useContext(tl);
  return process.env.NODE_ENV !== "production" && Wn.useDebugValue(e), e;
}
const uu = typeof Symbol == "function" && Symbol.for, hu = uu ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function fu(e, t) {
  if (typeof t == "function") {
    const n = t(e);
    return process.env.NODE_ENV !== "production" && (n || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), n;
  }
  return mt({}, e, t);
}
function Ri(e) {
  const {
    children: t,
    theme: n
  } = e, i = el();
  process.env.NODE_ENV !== "production" && i === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Wn.useMemo(() => {
    const o = i === null ? n : fu(i, n);
    return o != null && (o[hu] = i !== null), o;
  }, [n, i]);
  return lt(tl.Provider, {
    value: s,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Ri.propTypes = {
  children: gt.exports.node,
  theme: gt.exports.oneOfType([gt.exports.object, gt.exports.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ri.propTypes = Ya(Ri.propTypes));
function gu(e) {
  return Object.keys(e).length === 0;
}
function pu(e = null) {
  const t = el();
  return !t || gu(t) ? e : t;
}
const mu = Ja();
function nl(e = mu) {
  return pu(e);
}
const bu = ["className", "component"];
function yu(e = {}) {
  const {
    defaultTheme: t,
    defaultClassName: n = "MuiBox-root",
    generateClassName: i
  } = e, s = ud("div", {
    shouldForwardProp: (r) => r !== "theme" && r !== "sx" && r !== "as"
  })(to);
  return Wn.forwardRef(function(a, l) {
    const c = nl(t), d = nu(a), {
      className: u,
      component: h = "div"
    } = d, f = _e(d, bu);
    return lt(s, mt({
      as: h,
      ref: l,
      className: iu(u, i ? i(n) : n),
      theme: c
    }, f));
  });
}
function il(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), Math.min(Math.max(t, e), n);
}
function xu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((i) => i + i)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((i, s) => s < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function en(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return en(xu(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : tn(9, e));
  let i = e.substring(t + 1, e.length - 1), s;
  if (n === "color") {
    if (i = i.split(" "), s = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : tn(10, s));
  } else
    i = i.split(",");
  return i = i.map((o) => parseFloat(o)), {
    type: n,
    values: i,
    colorSpace: s
  };
}
function eo(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: i
  } = e;
  return t.indexOf("rgb") !== -1 ? i = i.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), t.indexOf("color") !== -1 ? i = `${n} ${i.join(" ")}` : i = `${i.join(", ")}`, `${t}(${i})`;
}
function _u(e) {
  e = en(e);
  const {
    values: t
  } = e, n = t[0], i = t[1] / 100, s = t[2] / 100, o = i * Math.min(s, 1 - s), r = (c, d = (c + n / 30) % 12) => s - o * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const l = [Math.round(r(0) * 255), Math.round(r(8) * 255), Math.round(r(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), eo({
    type: a,
    values: l
  });
}
function Zo(e) {
  e = en(e);
  let t = e.type === "hsl" || e.type === "hsla" ? en(_u(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function tr(e, t) {
  const n = Zo(e), i = Zo(t);
  return (Math.max(n, i) + 0.05) / (Math.min(n, i) + 0.05);
}
function vu(e, t) {
  if (e = en(e), t = il(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return eo(e);
}
function Mu(e, t) {
  if (e = en(e), t = il(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return eo(e);
}
const wu = {};
function sl(e) {
  const t = nl();
  return lt(qc.Provider, {
    value: typeof t == "object" ? t : wu,
    children: e.children
  });
}
process.env.NODE_ENV !== "production" && (sl.propTypes = {
  children: gt.exports.node
});
function Ii(e) {
  const {
    children: t,
    theme: n
  } = e;
  return lt(Ri, {
    theme: n,
    children: lt(sl, {
      children: t
    })
  });
}
process.env.NODE_ENV !== "production" && (Ii.propTypes = {
  children: gt.exports.node,
  theme: gt.exports.oneOfType([gt.exports.func, gt.exports.object]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ii.propTypes = Ya(Ii.propTypes));
function Su(e, t) {
  return mt({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const ku = {
  black: "#000",
  white: "#fff"
}, $n = ku, Ou = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Tu = Ou, Cu = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, He = Cu, Pu = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ye = Pu, Eu = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, yn = Eu, Au = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Ue = Au, Du = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Xe = Du, Ru = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Ke = Ru, Iu = ["mode", "contrastThreshold", "tonalOffset"], er = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: $n.white,
    default: $n.white
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(0, 0, 0, 0.26)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, ws = {
  text: {
    primary: $n.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: $n.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function nr(e, t, n, i) {
  const s = i.light || i, o = i.dark || i * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Mu(e.main, s) : t === "dark" && (e.dark = vu(e.main, o)));
}
function Lu(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[700],
    light: Ue[400],
    dark: Ue[800]
  };
}
function ju(e = "light") {
  return e === "dark" ? {
    main: He[200],
    light: He[50],
    dark: He[400]
  } : {
    main: He[500],
    light: He[300],
    dark: He[700]
  };
}
function Nu(e = "light") {
  return e === "dark" ? {
    main: Ye[500],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[700],
    light: Ye[400],
    dark: Ye[800]
  };
}
function zu(e = "light") {
  return e === "dark" ? {
    main: Xe[400],
    light: Xe[300],
    dark: Xe[700]
  } : {
    main: Xe[700],
    light: Xe[500],
    dark: Xe[900]
  };
}
function Fu(e = "light") {
  return e === "dark" ? {
    main: Ke[400],
    light: Ke[300],
    dark: Ke[700]
  } : {
    main: Ke[800],
    light: Ke[500],
    dark: Ke[900]
  };
}
function Bu(e = "light") {
  return e === "dark" ? {
    main: yn[400],
    light: yn[300],
    dark: yn[700]
  } : {
    main: "#ed6c02",
    light: yn[500],
    dark: yn[900]
  };
}
function Wu(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: i = 0.2
  } = e, s = _e(e, Iu), o = e.primary || Lu(t), r = e.secondary || ju(t), a = e.error || Nu(t), l = e.info || zu(t), c = e.success || Fu(t), d = e.warning || Bu(t);
  function u(g) {
    const m = tr(g, ws.text.primary) >= n ? ws.text.primary : er.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const y = tr(g, m);
      y < 3 && console.error([`MUI: The contrast ratio of ${y}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const h = ({
    color: g,
    name: m,
    mainShade: y = 500,
    lightShade: _ = 300,
    darkShade: v = 700
  }) => {
    if (g = mt({}, g), !g.main && g[y] && (g.main = g[y]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${y}\` property.` : tn(11, m ? ` (${m})` : "", y));
    if (typeof g.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(g.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : tn(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return nr(g, "light", _, i), nr(g, "dark", v, i), g.contrastText || (g.contrastText = u(g.main)), g;
  }, f = {
    dark: ws,
    light: er
  };
  return process.env.NODE_ENV !== "production" && (f[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), oe(mt({
    common: mt({}, $n),
    mode: t,
    primary: h({
      color: o,
      name: "primary"
    }),
    secondary: h({
      color: r,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: h({
      color: a,
      name: "error"
    }),
    warning: h({
      color: d,
      name: "warning"
    }),
    info: h({
      color: l,
      name: "info"
    }),
    success: h({
      color: c,
      name: "success"
    }),
    grey: Tu,
    contrastThreshold: n,
    getContrastText: u,
    augmentColor: h,
    tonalOffset: i
  }, f[t]), s);
}
const $u = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Vu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ir = {
  textTransform: "uppercase"
}, sr = '"Roboto", "Helvetica", "Arial", sans-serif';
function Hu(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: i = sr,
    fontSize: s = 14,
    fontWeightLight: o = 300,
    fontWeightRegular: r = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    htmlFontSize: c = 16,
    allVariants: d,
    pxToRem: u
  } = n, h = _e(n, $u);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const f = s / 14, p = u || ((y) => `${y / c * f}rem`), g = (y, _, v, M, x) => mt({
    fontFamily: i,
    fontWeight: y,
    fontSize: p(_),
    lineHeight: v
  }, i === sr ? {
    letterSpacing: `${Vu(M / _)}em`
  } : {}, x, d), m = {
    h1: g(o, 96, 1.167, -1.5),
    h2: g(o, 60, 1.2, -0.5),
    h3: g(r, 48, 1.167, 0),
    h4: g(r, 34, 1.235, 0.25),
    h5: g(r, 24, 1.334, 0),
    h6: g(a, 20, 1.6, 0.15),
    subtitle1: g(r, 16, 1.75, 0.15),
    subtitle2: g(a, 14, 1.57, 0.1),
    body1: g(r, 16, 1.5, 0.15),
    body2: g(r, 14, 1.43, 0.15),
    button: g(a, 14, 1.75, 0.4, ir),
    caption: g(r, 12, 1.66, 0.4),
    overline: g(r, 12, 2.66, 1, ir)
  };
  return oe(mt({
    htmlFontSize: c,
    pxToRem: p,
    fontFamily: i,
    fontSize: s,
    fontWeightLight: o,
    fontWeightRegular: r,
    fontWeightMedium: a,
    fontWeightBold: l
  }, m), h, {
    clone: !1
  });
}
const Yu = 0.2, Uu = 0.14, Xu = 0.12;
function bt(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Yu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Uu})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Xu})`].join(",");
}
const Ku = ["none", bt(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), bt(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), bt(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), bt(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), bt(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), bt(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), bt(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), bt(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), bt(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), bt(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), bt(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), bt(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), bt(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), bt(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), bt(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), bt(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), bt(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), bt(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), bt(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), bt(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), bt(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), bt(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), bt(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), bt(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], qu = Ku, Gu = ["duration", "easing", "delay"], Qu = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ju = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function or(e) {
  return `${Math.round(e)}ms`;
}
function Zu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function th(e) {
  const t = mt({}, Qu, e.easing), n = mt({}, Ju, e.duration);
  return mt({
    getAutoHeightDuration: Zu,
    create: (s = ["all"], o = {}) => {
      const {
        duration: r = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = o, c = _e(o, Gu);
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", u = (h) => !isNaN(parseFloat(h));
        !d(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !u(r) && !d(r) && console.error(`MUI: Argument "duration" must be a number or a string but found ${r}.`), d(a) || console.error('MUI: Argument "easing" must be a string.'), !u(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((d) => `${d} ${typeof r == "string" ? r : or(r)} ${a} ${typeof l == "string" ? l : or(l)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const eh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, nh = eh, ih = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function sh(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: i = {},
    transitions: s = {},
    typography: o = {}
  } = e, r = _e(e, ih);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : tn(18));
  const a = Wu(i), l = Ja(e);
  let c = oe(l, {
    mixins: Su(l.breakpoints, n),
    palette: a,
    shadows: qu.slice(),
    typography: Hu(a, o),
    transitions: th(s),
    zIndex: mt({}, nh)
  });
  if (c = oe(c, r), c = t.reduce((d, u) => oe(d, u), c), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], u = (h, f) => {
      let p;
      for (p in h) {
        const g = h[p];
        if (d.indexOf(p) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = ld("", p);
            console.error([`MUI: The \`${f}\` component increases the CSS specificity of the \`${p}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[p] = {};
        }
      }
    };
    Object.keys(c.components).forEach((h) => {
      const f = c.components[h].styleOverrides;
      f && h.indexOf("Mui") === 0 && u(f, h);
    });
  }
  return c.unstable_sxConfig = mt({}, is, r == null ? void 0 : r.unstable_sxConfig), c.unstable_sx = function(u) {
    return to({
      sx: u,
      theme: this
    });
  }, c;
}
function Zn(e) {
  return e + 0.5 | 0;
}
const de = (e, t, n) => Math.max(Math.min(e, n), t);
function Sn(e) {
  return de(Zn(e * 2.55), 0, 255);
}
function ge(e) {
  return de(Zn(e * 255), 0, 255);
}
function ee(e) {
  return de(Zn(e / 2.55) / 100, 0, 1);
}
function rr(e) {
  return de(Zn(e * 100), 0, 100);
}
const Vt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ns = [..."0123456789ABCDEF"], oh = (e) => Ns[e & 15], rh = (e) => Ns[(e & 240) >> 4] + Ns[e & 15], di = (e) => (e & 240) >> 4 === (e & 15), ah = (e) => di(e.r) && di(e.g) && di(e.b) && di(e.a);
function lh(e) {
  var t = e.length, n;
  return e[0] === "#" && (t === 4 || t === 5 ? n = {
    r: 255 & Vt[e[1]] * 17,
    g: 255 & Vt[e[2]] * 17,
    b: 255 & Vt[e[3]] * 17,
    a: t === 5 ? Vt[e[4]] * 17 : 255
  } : (t === 7 || t === 9) && (n = {
    r: Vt[e[1]] << 4 | Vt[e[2]],
    g: Vt[e[3]] << 4 | Vt[e[4]],
    b: Vt[e[5]] << 4 | Vt[e[6]],
    a: t === 9 ? Vt[e[7]] << 4 | Vt[e[8]] : 255
  })), n;
}
const ch = (e, t) => e < 255 ? t(e) : "";
function dh(e) {
  var t = ah(e) ? oh : rh;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + ch(e.a, t) : void 0;
}
const uh = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function ol(e, t, n) {
  const i = t * Math.min(n, 1 - n), s = (o, r = (o + e / 30) % 12) => n - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function hh(e, t, n) {
  const i = (s, o = (s + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function fh(e, t, n) {
  const i = ol(e, 1, 0.5);
  let s;
  for (t + n > 1 && (s = 1 / (t + n), t *= s, n *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - n, i[s] += t;
  return i;
}
function gh(e, t, n, i, s) {
  return e === s ? (t - n) / i + (t < n ? 6 : 0) : t === s ? (n - e) / i + 2 : (e - t) / i + 4;
}
function no(e) {
  const n = e.r / 255, i = e.g / 255, s = e.b / 255, o = Math.max(n, i, s), r = Math.min(n, i, s), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = gh(n, i, s, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function io(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(ge);
}
function so(e, t, n) {
  return io(ol, e, t, n);
}
function ph(e, t, n) {
  return io(fh, e, t, n);
}
function mh(e, t, n) {
  return io(hh, e, t, n);
}
function rl(e) {
  return (e % 360 + 360) % 360;
}
function bh(e) {
  const t = uh.exec(e);
  let n = 255, i;
  if (!t)
    return;
  t[5] !== i && (n = t[6] ? Sn(+t[5]) : ge(+t[5]));
  const s = rl(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? i = ph(s, o, r) : t[1] === "hsv" ? i = mh(s, o, r) : i = so(s, o, r), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: n
  };
}
function yh(e, t) {
  var n = no(e);
  n[0] = rl(n[0] + t), n = so(n), e.r = n[0], e.g = n[1], e.b = n[2];
}
function xh(e) {
  if (!e)
    return;
  const t = no(e), n = t[0], i = rr(t[1]), s = rr(t[2]);
  return e.a < 255 ? `hsla(${n}, ${i}%, ${s}%, ${ee(e.a)})` : `hsl(${n}, ${i}%, ${s}%)`;
}
const ar = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, lr = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function _h() {
  const e = {}, t = Object.keys(lr), n = Object.keys(ar);
  let i, s, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], s = 0; s < n.length; s++)
      o = n[s], a = a.replace(o, ar[o]);
    o = parseInt(lr[r], 16), e[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let ui;
function vh(e) {
  ui || (ui = _h(), ui.transparent = [0, 0, 0, 0]);
  const t = ui[e.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Mh = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function wh(e) {
  const t = Mh.exec(e);
  let n = 255, i, s, o;
  if (!!t) {
    if (t[7] !== i) {
      const r = +t[7];
      n = t[8] ? Sn(r) : de(r * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? Sn(i) : de(i, 0, 255)), s = 255 & (t[4] ? Sn(s) : de(s, 0, 255)), o = 255 & (t[6] ? Sn(o) : de(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: n
    };
  }
}
function Sh(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${ee(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Ss = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, qe = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function kh(e, t, n) {
  const i = qe(ee(e.r)), s = qe(ee(e.g)), o = qe(ee(e.b));
  return {
    r: ge(Ss(i + n * (qe(ee(t.r)) - i))),
    g: ge(Ss(s + n * (qe(ee(t.g)) - s))),
    b: ge(Ss(o + n * (qe(ee(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  };
}
function hi(e, t, n) {
  if (e) {
    let i = no(e);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1)), i = so(i), e.r = i[0], e.g = i[1], e.b = i[2];
  }
}
function al(e, t) {
  return e && Object.assign(t || {}, e);
}
function cr(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (t = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (t.a = ge(e[3]))) : (t = al(e, { r: 0, g: 0, b: 0, a: 1 }), t.a = ge(t.a)), t;
}
function Oh(e) {
  return e.charAt(0) === "r" ? wh(e) : bh(e);
}
class Vn {
  constructor(t) {
    if (t instanceof Vn)
      return t;
    const n = typeof t;
    let i;
    n === "object" ? i = cr(t) : n === "string" && (i = lh(t) || vh(t) || Oh(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = al(this._rgb);
    return t && (t.a = ee(t.a)), t;
  }
  set rgb(t) {
    this._rgb = cr(t);
  }
  rgbString() {
    return this._valid ? Sh(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? dh(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? xh(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb, s = t.rgb;
      let o;
      const r = n === o ? 0.5 : n, a = 2 * r - 1, l = i.a - s.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, i.r = 255 & c * i.r + o * s.r + 0.5, i.g = 255 & c * i.g + o * s.g + 0.5, i.b = 255 & c * i.b + o * s.b + 0.5, i.a = r * i.a + (1 - r) * s.a, this.rgb = i;
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = kh(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new Vn(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ge(t), this;
  }
  clearer(t) {
    const n = this._rgb;
    return n.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, n = Zn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = n, this;
  }
  opaquer(t) {
    const n = this._rgb;
    return n.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return hi(this._rgb, 2, t), this;
  }
  darken(t) {
    return hi(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return hi(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return hi(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return yh(this._rgb, t), this;
  }
}
function Jt() {
}
const Th = (() => {
  let e = 0;
  return () => e++;
})();
function nt(e) {
  return e === null || typeof e > "u";
}
function ut(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function K(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function yt(e) {
  return (typeof e == "number" || e instanceof Number) && isFinite(+e);
}
function zt(e, t) {
  return yt(e) ? e : t;
}
function W(e, t) {
  return typeof e > "u" ? t : e;
}
const Ch = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : +e / t, ll = (e, t) => typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function ft(e, t, n) {
  if (e && typeof e.call == "function")
    return e.apply(n, t);
}
function dt(e, t, n, i) {
  let s, o, r;
  if (ut(e))
    if (o = e.length, i)
      for (s = o - 1; s >= 0; s--)
        t.call(n, e[s], s);
    else
      for (s = 0; s < o; s++)
        t.call(n, e[s], s);
  else if (K(e))
    for (r = Object.keys(e), o = r.length, s = 0; s < o; s++)
      t.call(n, e[r[s]], r[s]);
}
function Li(e, t) {
  let n, i, s, o;
  if (!e || !t || e.length !== t.length)
    return !1;
  for (n = 0, i = e.length; n < i; ++n)
    if (s = e[n], o = t[n], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function ji(e) {
  if (ut(e))
    return e.map(ji);
  if (K(e)) {
    const t = /* @__PURE__ */ Object.create(null), n = Object.keys(e), i = n.length;
    let s = 0;
    for (; s < i; ++s)
      t[n[s]] = ji(e[n[s]]);
    return t;
  }
  return e;
}
function cl(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function Ph(e, t, n, i) {
  if (!cl(e))
    return;
  const s = t[e], o = n[e];
  K(s) && K(o) ? Hn(s, o, i) : t[e] = ji(o);
}
function Hn(e, t, n) {
  const i = ut(t) ? t : [
    t
  ], s = i.length;
  if (!K(e))
    return e;
  n = n || {};
  const o = n.merger || Ph;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = i[a], !K(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], e, r, n);
  }
  return e;
}
function An(e, t) {
  return Hn(e, t, {
    merger: Eh
  });
}
function Eh(e, t, n) {
  if (!cl(e))
    return;
  const i = t[e], s = n[e];
  K(i) && K(s) ? An(i, s) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = ji(s));
}
const dr = {
  "": (e) => e,
  x: (e) => e.x,
  y: (e) => e.y
};
function Ah(e) {
  const t = e.split("."), n = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (n.push(i), i = "");
  return n;
}
function Dh(e) {
  const t = Ah(e);
  return (n) => {
    for (const i of t) {
      if (i === "")
        break;
      n = n && n[i];
    }
    return n;
  };
}
function be(e, t) {
  return (dr[t] || (dr[t] = Dh(t)))(e);
}
function oo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const kt = (e) => typeof e < "u", ye = (e) => typeof e == "function", ur = (e, t) => {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
};
function Rh(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const ot = Math.PI, pt = 2 * ot, Ih = pt + ot, Ni = Number.POSITIVE_INFINITY, dl = ot / 180, Mt = ot / 2, Oe = ot / 4, hr = ot * 2 / 3, ue = Math.log10, qt = Math.sign;
function Dn(e, t, n) {
  return Math.abs(e - t) < n;
}
function fr(e) {
  const t = Math.round(e);
  e = Dn(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(ue(e))), i = e / n;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n;
}
function Lh(e) {
  const t = [], n = Math.sqrt(e);
  let i;
  for (i = 1; i < n; i++)
    e % i === 0 && (t.push(i), t.push(e / i));
  return n === (n | 0) && t.push(n), t.sort((s, o) => s - o).pop(), t;
}
function nn(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function jh(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function ul(e, t, n) {
  let i, s, o;
  for (i = 0, s = e.length; i < s; i++)
    o = e[i][n], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Tt(e) {
  return e * (ot / 180);
}
function ss(e) {
  return e * (180 / ot);
}
function gr(e) {
  if (!yt(e))
    return;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n++;
  return n;
}
function hl(e, t) {
  const n = t.x - e.x, i = t.y - e.y, s = Math.sqrt(n * n + i * i);
  let o = Math.atan2(i, n);
  return o < -0.5 * ot && (o += pt), {
    angle: o,
    distance: s
  };
}
function Yn(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Nh(e, t) {
  return (e - t + Ih) % pt - ot;
}
function Ft(e) {
  return (e % pt + pt) % pt;
}
function Un(e, t, n, i) {
  const s = Ft(e), o = Ft(t), r = Ft(n), a = Ft(o - s), l = Ft(r - s), c = Ft(s - o), d = Ft(s - r);
  return s === o || s === r || i && o === r || a > l && c < d;
}
function Et(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zh(e) {
  return Et(e, -32768, 32767);
}
function ne(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i;
}
function ro(e, t, n) {
  n = n || ((r) => e[r] < t);
  let i = e.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, n(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const ie = (e, t, n, i) => ro(e, n, i ? (s) => {
  const o = e[s][t];
  return o < n || o === n && e[s + 1][t] === n;
} : (s) => e[s][t] < n), Fh = (e, t, n) => ro(e, n, (i) => e[i][t] >= n);
function Bh(e, t, n) {
  let i = 0, s = e.length;
  for (; i < s && e[i] < t; )
    i++;
  for (; s > i && e[s - 1] > n; )
    s--;
  return i > 0 || s < e.length ? e.slice(i, s) : e;
}
const fl = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Wh(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), fl.forEach((n) => {
    const i = "_onData" + oo(n), s = e[n];
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = s.apply(this, o);
        return e._chartjs.listeners.forEach((a) => {
          typeof a[i] == "function" && a[i](...o);
        }), r;
      }
    });
  });
}
function pr(e, t) {
  const n = e._chartjs;
  if (!n)
    return;
  const i = n.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (fl.forEach((o) => {
    delete e[o];
  }), delete e._chartjs);
}
function gl(e) {
  const t = /* @__PURE__ */ new Set();
  let n, i;
  for (n = 0, i = e.length; n < i; ++n)
    t.add(e[n]);
  return t.size === i ? e : Array.from(t);
}
const pl = function() {
  return typeof window > "u" ? function(e) {
    return e();
  } : window.requestAnimationFrame;
}();
function ml(e, t) {
  let n = [], i = !1;
  return function(...s) {
    n = s, i || (i = !0, pl.call(window, () => {
      i = !1, e.apply(t, n);
    }));
  };
}
function $h(e, t) {
  let n;
  return function(...i) {
    return t ? (clearTimeout(n), n = setTimeout(e, t, i)) : e.apply(this, i), t;
  };
}
const ao = (e) => e === "start" ? "left" : e === "end" ? "right" : "center", Dt = (e, t, n) => e === "start" ? t : e === "end" ? n : (t + n) / 2, Vh = (e, t, n, i) => e === (i ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function bl(e, t, n) {
  const i = t.length;
  let s = 0, o = i;
  if (e._sorted) {
    const { iScale: r, _parsed: a } = e, l = r.axis, { min: c, max: d, minDefined: u, maxDefined: h } = r.getUserBounds();
    u && (s = Et(Math.min(
      ie(a, r.axis, c).lo,
      n ? i : ie(t, l, r.getPixelForValue(c)).lo
    ), 0, i - 1)), h ? o = Et(Math.max(
      ie(a, r.axis, d, !0).hi + 1,
      n ? 0 : ie(t, l, r.getPixelForValue(d), !0).hi + 1
    ), s, i) - s : o = i - s;
  }
  return {
    start: s,
    count: o
  };
}
function yl(e) {
  const { xScale: t, yScale: n, _scaleRanges: i } = e, s = {
    xmin: t.min,
    xmax: t.max,
    ymin: n.min,
    ymax: n.max
  };
  if (!i)
    return e._scaleRanges = s, !0;
  const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== n.min || i.ymax !== n.max;
  return Object.assign(i, s), o;
}
const fi = (e) => e === 0 || e === 1, mr = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * pt / n)), br = (e, t, n) => Math.pow(2, -10 * e) * Math.sin((e - t) * pt / n) + 1, Rn = {
  linear: (e) => e,
  easeInQuad: (e) => e * e,
  easeOutQuad: (e) => -e * (e - 2),
  easeInOutQuad: (e) => (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
  easeInCubic: (e) => e * e * e,
  easeOutCubic: (e) => (e -= 1) * e * e + 1,
  easeInOutCubic: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
  easeInQuart: (e) => e * e * e * e,
  easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
  easeInOutQuart: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
  easeInQuint: (e) => e * e * e * e * e,
  easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
  easeInOutQuint: (e) => (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
  easeInSine: (e) => -Math.cos(e * Mt) + 1,
  easeOutSine: (e) => Math.sin(e * Mt),
  easeInOutSine: (e) => -0.5 * (Math.cos(ot * e) - 1),
  easeInExpo: (e) => e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
  easeOutExpo: (e) => e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
  easeInOutExpo: (e) => fi(e) ? e : e < 0.5 ? 0.5 * Math.pow(2, 10 * (e * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
  easeInCirc: (e) => e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
  easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
  easeInOutCirc: (e) => (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
  easeInElastic: (e) => fi(e) ? e : mr(e, 0.075, 0.3),
  easeOutElastic: (e) => fi(e) ? e : br(e, 0.075, 0.3),
  easeInOutElastic(e) {
    return fi(e) ? e : e < 0.5 ? 0.5 * mr(e * 2, 0.1125, 0.45) : 0.5 + 0.5 * br(e * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(e) {
    return e * e * ((1.70158 + 1) * e - 1.70158);
  },
  easeOutBack(e) {
    return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
  },
  easeInOutBack(e) {
    let t = 1.70158;
    return (e /= 0.5) < 1 ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t)) : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  },
  easeInBounce: (e) => 1 - Rn.easeOutBounce(1 - e),
  easeOutBounce(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  easeInOutBounce: (e) => e < 0.5 ? Rn.easeInBounce(e * 2) * 0.5 : Rn.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
};
function xl(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function yr(e) {
  return xl(e) ? e : new Vn(e);
}
function ks(e) {
  return xl(e) ? e : new Vn(e).saturate(0.5).darken(0.1).hexString();
}
const Hh = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Yh = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Uh(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: Yh
    },
    numbers: {
      type: "number",
      properties: Hh
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Xh(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const xr = /* @__PURE__ */ new Map();
function Kh(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let i = xr.get(n);
  return i || (i = new Intl.NumberFormat(e, t), xr.set(n, i)), i;
}
function ti(e, t, n) {
  return Kh(t, n).format(e);
}
const _l = {
  values(e) {
    return ut(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = qh(e, n);
    }
    const r = ue(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), ti(e, i, l);
  },
  logarithmic(e, t, n) {
    if (e === 0)
      return "0";
    const i = n[t].significand || e / Math.pow(10, Math.floor(ue(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * n.length ? _l.numeric.call(this, e, t, n) : "";
  }
};
function qh(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var os = {
  formatters: _l
};
function Gh(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: os.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Ne = /* @__PURE__ */ Object.create(null), zs = /* @__PURE__ */ Object.create(null);
function In(e, t) {
  if (!t)
    return e;
  const n = t.split(".");
  for (let i = 0, s = n.length; i < s; ++i) {
    const o = n[i];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Os(e, t, n) {
  return typeof t == "string" ? Hn(In(e, t), n) : Hn(In(e, ""), t);
}
class Qh {
  constructor(t, n) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => ks(s.backgroundColor), this.hoverBorderColor = (i, s) => ks(s.borderColor), this.hoverColor = (i, s) => ks(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(n);
  }
  set(t, n) {
    return Os(this, t, n);
  }
  get(t) {
    return In(this, t);
  }
  describe(t, n) {
    return Os(zs, t, n);
  }
  override(t, n) {
    return Os(Ne, t, n);
  }
  route(t, n, i, s) {
    const o = In(this, t), r = In(this, i), a = "_" + n;
    Object.defineProperties(o, {
      [a]: {
        value: o[n],
        writable: !0
      },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return K(l) ? Object.assign({}, c, l) : W(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((n) => n(this));
  }
}
var xt = new Qh({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Uh,
  Xh,
  Gh
]);
function Jh(e) {
  return !e || nt(e.size) || nt(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
function zi(e, t, n, i, s) {
  let o = t[s];
  return o || (o = t[s] = e.measureText(s).width, n.push(s)), o > i && (i = o), i;
}
function Zh(e, t, n, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), e.save(), e.font = t;
  let r = 0;
  const a = n.length;
  let l, c, d, u, h;
  for (l = 0; l < a; l++)
    if (u = n[l], u != null && ut(u) !== !0)
      r = zi(e, s, o, r, u);
    else if (ut(u))
      for (c = 0, d = u.length; c < d; c++)
        h = u[c], h != null && !ut(h) && (r = zi(e, s, o, r, h));
  e.restore();
  const f = o.length / 2;
  if (f > n.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function Te(e, t, n) {
  const i = e.currentDevicePixelRatio, s = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function _r(e, t) {
  t = t || e.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, e.width, e.height), t.restore();
}
function Fi(e, t, n, i) {
  vl(e, t, n, i, null);
}
function vl(e, t, n, i, s) {
  let o, r, a, l, c, d, u, h;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * dl;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    e.save(), e.translate(n, i), e.rotate(m), e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), e.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (e.beginPath(), f) {
      default:
        s ? e.ellipse(n, i, s / 2, g, 0, 0, pt) : e.arc(n, i, g, 0, pt), e.closePath();
        break;
      case "triangle":
        d = s ? s / 2 : g, e.moveTo(n + Math.sin(m) * d, i - Math.cos(m) * g), m += hr, e.lineTo(n + Math.sin(m) * d, i - Math.cos(m) * g), m += hr, e.lineTo(n + Math.sin(m) * d, i - Math.cos(m) * g), e.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(m + Oe) * l, u = Math.cos(m + Oe) * (s ? s / 2 - c : l), a = Math.sin(m + Oe) * l, h = Math.sin(m + Oe) * (s ? s / 2 - c : l), e.arc(n - u, i - a, c, m - ot, m - Mt), e.arc(n + h, i - r, c, m - Mt, m), e.arc(n + u, i + a, c, m, m + Mt), e.arc(n - h, i + r, c, m + Mt, m + ot), e.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * g, d = s ? s / 2 : l, e.rect(n - d, i - l, 2 * d, 2 * l);
          break;
        }
        m += Oe;
      case "rectRot":
        u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), e.moveTo(n - u, i - a), e.lineTo(n + h, i - r), e.lineTo(n + u, i + a), e.lineTo(n - h, i + r), e.closePath();
        break;
      case "crossRot":
        m += Oe;
      case "cross":
        u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), e.moveTo(n - u, i - a), e.lineTo(n + u, i + a), e.moveTo(n + h, i - r), e.lineTo(n - h, i + r);
        break;
      case "star":
        u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), e.moveTo(n - u, i - a), e.lineTo(n + u, i + a), e.moveTo(n + h, i - r), e.lineTo(n - h, i + r), m += Oe, u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), e.moveTo(n - u, i - a), e.lineTo(n + u, i + a), e.moveTo(n + h, i - r), e.lineTo(n - h, i + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(m) * g, a = Math.sin(m) * g, e.moveTo(n - r, i - a), e.lineTo(n + r, i + a);
        break;
      case "dash":
        e.moveTo(n, i), e.lineTo(n + Math.cos(m) * (s ? s / 2 : g), i + Math.sin(m) * g);
        break;
      case !1:
        e.closePath();
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function Xn(e, t, n) {
  return n = n || 0.5, !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n;
}
function ei(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip();
}
function ni(e) {
  e.restore();
}
function tf(e, t, n, i, s) {
  if (!t)
    return e.lineTo(n.x, n.y);
  if (s === "middle") {
    const o = (t.x + n.x) / 2;
    e.lineTo(o, t.y), e.lineTo(o, n.y);
  } else
    s === "after" != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function ef(e, t, n, i) {
  if (!t)
    return e.lineTo(n.x, n.y);
  e.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? n.cp2x : n.cp1x, i ? n.cp2y : n.cp1y, n.x, n.y);
}
function ze(e, t, n, i, s, o = {}) {
  const r = ut(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = s.string, nf(e, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && of(e, o.backdrop), a && (o.strokeColor && (e.strokeStyle = o.strokeColor), nt(o.strokeWidth) || (e.lineWidth = o.strokeWidth), e.strokeText(c, n, i, o.maxWidth)), e.fillText(c, n, i, o.maxWidth), sf(e, n, i, c, o), i += s.lineHeight;
  e.restore();
}
function nf(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]), nt(t.rotation) || e.rotate(t.rotation), t.color && (e.fillStyle = t.color), t.textAlign && (e.textAlign = t.textAlign), t.textBaseline && (e.textBaseline = t.textBaseline);
}
function sf(e, t, n, i, s) {
  if (s.strikethrough || s.underline) {
    const o = e.measureText(i), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = n - o.actualBoundingBoxAscent, c = n + o.actualBoundingBoxDescent, d = s.strikethrough ? (l + c) / 2 : c;
    e.strokeStyle = e.fillStyle, e.beginPath(), e.lineWidth = s.decorationWidth || 2, e.moveTo(r, d), e.lineTo(a, d), e.stroke();
  }
}
function of(e, t) {
  const n = e.fillStyle;
  e.fillStyle = t.color, e.fillRect(t.left, t.top, t.width, t.height), e.fillStyle = n;
}
function sn(e, t) {
  const { x: n, y: i, w: s, h: o, radius: r } = t;
  e.arc(n + r.topLeft, i + r.topLeft, r.topLeft, -Mt, ot, !0), e.lineTo(n, i + o - r.bottomLeft), e.arc(n + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, ot, Mt, !0), e.lineTo(n + s - r.bottomRight, i + o), e.arc(n + s - r.bottomRight, i + o - r.bottomRight, r.bottomRight, Mt, 0, !0), e.lineTo(n + s, i + r.topRight), e.arc(n + s - r.topRight, i + r.topRight, r.topRight, 0, -Mt, !0), e.lineTo(n + r.topLeft, i);
}
const rf = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, af = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function lf(e, t) {
  const n = ("" + e).match(rf);
  if (!n || n[1] === "normal")
    return t * 1.2;
  switch (e = +n[2], n[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const cf = (e) => +e || 0;
function lo(e, t) {
  const n = {}, i = K(t), s = i ? Object.keys(t) : t, o = K(e) ? i ? (r) => W(e[r], e[t[r]]) : (r) => e[r] : () => e;
  for (const r of s)
    n[r] = cf(o(r));
  return n;
}
function Ml(e) {
  return lo(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function pe(e) {
  return lo(e, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Ct(e) {
  const t = Ml(e);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function wt(e, t) {
  e = e || {}, t = t || xt.font;
  let n = W(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let i = W(e.style, t.style);
  i && !("" + i).match(af) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: W(e.family, t.family),
    lineHeight: lf(W(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: W(e.weight, t.weight),
    string: ""
  };
  return s.string = Jh(s), s;
}
function kn(e, t, n, i) {
  let s = !0, o, r, a;
  for (o = 0, r = e.length; o < r; ++o)
    if (a = e[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), s = !1), n !== void 0 && ut(a) && (a = a[n % a.length], s = !1), a !== void 0))
      return i && !s && (i.cacheable = !1), a;
}
function df(e, t, n) {
  const { min: i, max: s } = e, o = ll(t, (s - i) / 2), r = (a, l) => n && a === 0 ? 0 : a + l;
  return {
    min: r(i, -Math.abs(o)),
    max: r(s, o)
  };
}
function Me(e, t) {
  return Object.assign(Object.create(e), t);
}
function co(e, t = [
  ""
], n = e, i, s = () => e[0]) {
  kt(i) || (i = Ol("_fallback", e));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: n,
    _fallback: i,
    _getTarget: s,
    override: (r) => co([
      r,
      ...e
    ], t, n, i)
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete e[0][a], !0;
    },
    get(r, a) {
      return Sl(r, a, () => yf(a, t, e, r));
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(r, a) {
      return Mr(r).includes(a);
    },
    ownKeys(r) {
      return Mr(r);
    },
    set(r, a, l) {
      const c = r._storage || (r._storage = s());
      return r[a] = c[a] = l, delete r._keys, !0;
    }
  });
}
function on(e, t, n, i) {
  const s = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: wl(e, i),
    setContext: (o) => on(e, o, n, i),
    override: (o) => on(e.override(o), t, n, i)
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0;
    },
    get(o, r, a) {
      return Sl(o, r, () => hf(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(e, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(e, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(o, r) {
      return Reflect.has(e, r);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(o, r, a) {
      return e[r] = a, delete o[r], !0;
    }
  });
}
function wl(e, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: n = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = e;
  return {
    allKeys: s,
    scriptable: n,
    indexable: i,
    isScriptable: ye(n) ? n : () => n,
    isIndexable: ye(i) ? i : () => i
  };
}
const uf = (e, t) => e ? e + oo(t) : t, uo = (e, t) => K(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Sl(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t))
    return e[t];
  const i = n();
  return e[t] = i, i;
}
function hf(e, t, n) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = e;
  let a = i[t];
  return ye(a) && r.isScriptable(t) && (a = ff(t, a, e, n)), ut(a) && a.length && (a = gf(t, a, e, r.isIndexable)), uo(t, a) && (a = on(a, s, o && o[t], r)), a;
}
function ff(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = n;
  if (a.has(e))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
  return a.add(e), t = t(o, r || i), a.delete(e), uo(e, t) && (t = ho(s._scopes, s, e, t)), t;
}
function gf(e, t, n, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = n;
  if (kt(o.index) && i(e))
    t = t[o.index % t.length];
  else if (K(t[0])) {
    const l = t, c = s._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const u = ho(c, s, e, d);
      t.push(on(u, o, r && r[e], a));
    }
  }
  return t;
}
function kl(e, t, n) {
  return ye(e) ? e(t, n) : e;
}
const pf = (e, t) => e === !0 ? t : typeof e == "string" ? be(t, e) : void 0;
function mf(e, t, n, i, s) {
  for (const o of t) {
    const r = pf(n, o);
    if (r) {
      e.add(r);
      const a = kl(r._fallback, n, s);
      if (kt(a) && a !== n && a !== i)
        return a;
    } else if (r === !1 && kt(i) && n !== i)
      return null;
  }
  return !1;
}
function ho(e, t, n, i) {
  const s = t._rootScopes, o = kl(t._fallback, n, i), r = [
    ...e,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(i);
  let l = vr(a, r, n, o || n, i);
  return l === null || kt(o) && o !== n && (l = vr(a, r, o, l, i), l === null) ? !1 : co(Array.from(a), [
    ""
  ], s, o, () => bf(t, n, i));
}
function vr(e, t, n, i, s) {
  for (; n; )
    n = mf(e, t, n, i, s);
  return n;
}
function bf(e, t, n) {
  const i = e._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return ut(s) && K(n) ? n : s || {};
}
function yf(e, t, n, i) {
  let s;
  for (const o of t)
    if (s = Ol(uf(o, e), n), kt(s))
      return uo(e, s) ? ho(n, i, e, s) : s;
}
function Ol(e, t) {
  for (const n of t) {
    if (!n)
      continue;
    const i = n[e];
    if (kt(i))
      return i;
  }
}
function Mr(e) {
  let t = e._keys;
  return t || (t = e._keys = xf(e._scopes)), t;
}
function xf(e) {
  const t = /* @__PURE__ */ new Set();
  for (const n of e)
    for (const i of Object.keys(n).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function Tl(e, t, n, i) {
  const { iScale: s } = e, { key: o = "r" } = this._parsing, r = new Array(i);
  let a, l, c, d;
  for (a = 0, l = i; a < l; ++a)
    c = a + n, d = t[c], r[a] = {
      r: s.parse(be(d, o), c)
    };
  return r;
}
const _f = Number.EPSILON || 1e-14, rn = (e, t) => t < e.length && !e[t].skip && e[t], Cl = (e) => e === "x" ? "y" : "x";
function vf(e, t, n, i) {
  const s = e.skip ? t : e, o = t, r = n.skip ? t : n, a = Yn(o, s), l = Yn(r, o);
  let c = a / (a + l), d = l / (a + l);
  c = isNaN(c) ? 0 : c, d = isNaN(d) ? 0 : d;
  const u = i * c, h = i * d;
  return {
    previous: {
      x: o.x - u * (r.x - s.x),
      y: o.y - u * (r.y - s.y)
    },
    next: {
      x: o.x + h * (r.x - s.x),
      y: o.y + h * (r.y - s.y)
    }
  };
}
function Mf(e, t, n) {
  const i = e.length;
  let s, o, r, a, l, c = rn(e, 0);
  for (let d = 0; d < i - 1; ++d)
    if (l = c, c = rn(e, d + 1), !(!l || !c)) {
      if (Dn(t[d], 0, _f)) {
        n[d] = n[d + 1] = 0;
        continue;
      }
      s = n[d] / t[d], o = n[d + 1] / t[d], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), n[d] = s * r * t[d], n[d + 1] = o * r * t[d]);
    }
}
function wf(e, t, n = "x") {
  const i = Cl(n), s = e.length;
  let o, r, a, l = rn(e, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = rn(e, c + 1), !a)
      continue;
    const d = a[n], u = a[i];
    r && (o = (d - r[n]) / 3, a[`cp1${n}`] = d - o, a[`cp1${i}`] = u - o * t[c]), l && (o = (l[n] - d) / 3, a[`cp2${n}`] = d + o, a[`cp2${i}`] = u + o * t[c]);
  }
}
function Sf(e, t = "x") {
  const n = Cl(t), i = e.length, s = Array(i).fill(0), o = Array(i);
  let r, a, l, c = rn(e, 0);
  for (r = 0; r < i; ++r)
    if (a = l, l = c, c = rn(e, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        s[r] = d !== 0 ? (c[n] - l[n]) / d : 0;
      }
      o[r] = a ? c ? qt(s[r - 1]) !== qt(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  Mf(e, s, o), wf(e, o, t);
}
function gi(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function kf(e, t) {
  let n, i, s, o, r, a = Xn(e[0], t);
  for (n = 0, i = e.length; n < i; ++n)
    r = o, o = a, a = n < i - 1 && Xn(e[n + 1], t), o && (s = e[n], r && (s.cp1x = gi(s.cp1x, t.left, t.right), s.cp1y = gi(s.cp1y, t.top, t.bottom)), a && (s.cp2x = gi(s.cp2x, t.left, t.right), s.cp2y = gi(s.cp2y, t.top, t.bottom)));
}
function Of(e, t, n, i, s) {
  let o, r, a, l;
  if (t.spanGaps && (e = e.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Sf(e, s);
  else {
    let c = i ? e[e.length - 1] : e[0];
    for (o = 0, r = e.length; o < r; ++o)
      a = e[o], l = vf(c, a, e[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && kf(e, n);
}
function Pl() {
  return typeof window < "u" && typeof document < "u";
}
function fo(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Bi(e, t, n) {
  let i;
  return typeof e == "string" ? (i = parseInt(e, 10), e.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[n])) : i = e, i;
}
const rs = (e) => e.ownerDocument.defaultView.getComputedStyle(e, null);
function Tf(e, t) {
  return rs(e).getPropertyValue(t);
}
const Cf = [
  "top",
  "right",
  "bottom",
  "left"
];
function je(e, t, n) {
  const i = {};
  n = n ? "-" + n : "";
  for (let s = 0; s < 4; s++) {
    const o = Cf[s];
    i[o] = parseFloat(e[t + "-" + o + n]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const Pf = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Ef(e, t) {
  const n = e.touches, i = n && n.length ? n[0] : e, { offsetX: s, offsetY: o } = i;
  let r = !1, a, l;
  if (Pf(s, o, e.target))
    a = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = i.clientX - c.left, l = i.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function Ee(e, t) {
  if ("native" in e)
    return e;
  const { canvas: n, currentDevicePixelRatio: i } = t, s = rs(n), o = s.boxSizing === "border-box", r = je(s, "padding"), a = je(s, "border", "width"), { x: l, y: c, box: d } = Ef(e, n), u = r.left + (d && a.left), h = r.top + (d && a.top);
  let { width: f, height: p } = t;
  return o && (f -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - u) / f * n.width / i),
    y: Math.round((c - h) / p * n.height / i)
  };
}
function Af(e, t, n) {
  let i, s;
  if (t === void 0 || n === void 0) {
    const o = fo(e);
    if (!o)
      t = e.clientWidth, n = e.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = rs(o), l = je(a, "border", "width"), c = je(a, "padding");
      t = r.width - c.width - l.width, n = r.height - c.height - l.height, i = Bi(a.maxWidth, o, "clientWidth"), s = Bi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: n,
    maxWidth: i || Ni,
    maxHeight: s || Ni
  };
}
const pi = (e) => Math.round(e * 10) / 10;
function Df(e, t, n, i) {
  const s = rs(e), o = je(s, "margin"), r = Bi(s.maxWidth, e, "clientWidth") || Ni, a = Bi(s.maxHeight, e, "clientHeight") || Ni, l = Af(e, t, n);
  let { width: c, height: d } = l;
  if (s.boxSizing === "content-box") {
    const h = je(s, "border", "width"), f = je(s, "padding");
    c -= f.width + h.width, d -= f.height + h.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, i ? c / i : d - o.height), c = pi(Math.min(c, r, l.maxWidth)), d = pi(Math.min(d, a, l.maxHeight)), c && !d && (d = pi(c / 2)), (t !== void 0 || n !== void 0) && i && l.height && d > l.height && (d = l.height, c = pi(Math.floor(d * i))), {
    width: c,
    height: d
  };
}
function wr(e, t, n) {
  const i = t || 1, s = Math.floor(e.height * i), o = Math.floor(e.width * i);
  e.height = Math.floor(e.height), e.width = Math.floor(e.width);
  const r = e.canvas;
  return r.style && (n || !r.style.height && !r.style.width) && (r.style.height = `${e.height}px`, r.style.width = `${e.width}px`), e.currentDevicePixelRatio !== i || r.height !== s || r.width !== o ? (e.currentDevicePixelRatio = i, r.height = s, r.width = o, e.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const Rf = function() {
  let e = !1;
  try {
    const t = {
      get passive() {
        return e = !0, !1;
      }
    };
    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
  } catch {
  }
  return e;
}();
function Sr(e, t) {
  const n = Tf(e, t), i = n && n.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Ae(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y: e.y + n * (t.y - e.y)
  };
}
function If(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y: i === "middle" ? n < 0.5 ? e.y : t.y : i === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
  };
}
function Lf(e, t, n, i) {
  const s = {
    x: e.cp2x,
    y: e.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Ae(e, s, n), a = Ae(s, o, n), l = Ae(o, t, n), c = Ae(r, a, n), d = Ae(a, l, n);
  return Ae(c, d, n);
}
const jf = function(e, t) {
  return {
    x(n) {
      return e + e + t - n;
    },
    setWidth(n) {
      t = n;
    },
    textAlign(n) {
      return n === "center" ? n : n === "right" ? "left" : "right";
    },
    xPlus(n, i) {
      return n - i;
    },
    leftForLtr(n, i) {
      return n - i;
    }
  };
}, Nf = function() {
  return {
    x(e) {
      return e;
    },
    setWidth(e) {
    },
    textAlign(e) {
      return e;
    },
    xPlus(e, t) {
      return e + t;
    },
    leftForLtr(e, t) {
      return e;
    }
  };
};
function Je(e, t, n) {
  return e ? jf(t, n) : Nf();
}
function El(e, t) {
  let n, i;
  (t === "ltr" || t === "rtl") && (n = e.canvas.style, i = [
    n.getPropertyValue("direction"),
    n.getPropertyPriority("direction")
  ], n.setProperty("direction", t, "important"), e.prevTextDirection = i);
}
function Al(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Dl(e) {
  return e === "angle" ? {
    between: Un,
    compare: Nh,
    normalize: Ft
  } : {
    between: ne,
    compare: (t, n) => t - n,
    normalize: (t) => t
  };
}
function kr({ start: e, end: t, count: n, loop: i, style: s }) {
  return {
    start: e % n,
    end: t % n,
    loop: i && (t - e + 1) % n === 0,
    style: s
  };
}
function zf(e, t, n) {
  const { property: i, start: s, end: o } = n, { between: r, normalize: a } = Dl(i), l = t.length;
  let { start: c, end: d, loop: u } = e, h, f;
  if (u) {
    for (c += l, d += l, h = 0, f = l; h < f && r(a(t[c % l][i]), s, o); ++h)
      c--, d--;
    c %= l, d %= l;
  }
  return d < c && (d += l), {
    start: c,
    end: d,
    loop: u,
    style: e.style
  };
}
function Rl(e, t, n) {
  if (!n)
    return [
      e
    ];
  const { property: i, start: s, end: o } = n, r = t.length, { compare: a, between: l, normalize: c } = Dl(i), { start: d, end: u, loop: h, style: f } = zf(e, t, n), p = [];
  let g = !1, m = null, y, _, v;
  const M = () => l(s, v, y) && a(s, v) !== 0, x = () => a(o, y) === 0 || l(o, v, y), k = () => g || M(), O = () => !g || x();
  for (let C = d, D = d; C <= u; ++C)
    _ = t[C % r], !_.skip && (y = c(_[i]), y !== v && (g = l(y, s, o), m === null && k() && (m = a(y, s) === 0 ? C : D), m !== null && O() && (p.push(kr({
      start: m,
      end: C,
      loop: h,
      count: r,
      style: f
    })), m = null), D = C, v = y));
  return m !== null && p.push(kr({
    start: m,
    end: u,
    loop: h,
    count: r,
    style: f
  })), p;
}
function Il(e, t) {
  const n = [], i = e.segments;
  for (let s = 0; s < i.length; s++) {
    const o = Rl(i[s], e.points, t);
    o.length && n.push(...o);
  }
  return n;
}
function Ff(e, t, n, i) {
  let s = 0, o = t - 1;
  if (n && !i)
    for (; s < t && !e[s].skip; )
      s++;
  for (; s < t && e[s].skip; )
    s++;
  for (s %= t, n && (o += s); o > s && e[o % t].skip; )
    o--;
  return o %= t, {
    start: s,
    end: o
  };
}
function Bf(e, t, n, i) {
  const s = e.length, o = [];
  let r = t, a = e[t], l;
  for (l = t + 1; l <= n; ++l) {
    const c = e[l % s];
    c.skip || c.stop ? a.skip || (i = !1, o.push({
      start: t % s,
      end: (l - 1) % s,
      loop: i
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % s,
    end: r % s,
    loop: i
  }), o;
}
function Wf(e, t) {
  const n = e.points, i = e.options.spanGaps, s = n.length;
  if (!s)
    return [];
  const o = !!e._loop, { start: r, end: a } = Ff(n, s, o, i);
  if (i === !0)
    return Or(e, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], n, t);
  const l = a < r ? a + s : a, c = !!e._fullLoop && r === 0 && a === s - 1;
  return Or(e, Bf(n, r, l, c), n, t);
}
function Or(e, t, n, i) {
  return !i || !i.setContext || !n ? t : $f(e, t, n, i);
}
function $f(e, t, n, i) {
  const s = e._chart.getContext(), o = Tr(e.options), { _datasetIndex: r, options: { spanGaps: a } } = e, l = n.length, c = [];
  let d = o, u = t[0].start, h = u;
  function f(p, g, m, y) {
    const _ = a ? -1 : 1;
    if (p !== g) {
      for (p += l; n[p % l].skip; )
        p -= _;
      for (; n[g % l].skip; )
        g += _;
      p % l !== g % l && (c.push({
        start: p % l,
        end: g % l,
        loop: m,
        style: y
      }), d = y, u = g % l);
    }
  }
  for (const p of t) {
    u = a ? u : p.start;
    let g = n[u % l], m;
    for (h = u + 1; h <= p.end; h++) {
      const y = n[h % l];
      m = Tr(i.setContext(Me(s, {
        type: "segment",
        p0: g,
        p1: y,
        p0DataIndex: (h - 1) % l,
        p1DataIndex: h % l,
        datasetIndex: r
      }))), Vf(m, d) && f(u, h - 1, p.loop, d), g = y, d = m;
    }
    u < h - 1 && f(u, h - 1, p.loop, d);
  }
  return c;
}
function Tr(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  };
}
function Vf(e, t) {
  return t && JSON.stringify(e) !== JSON.stringify(t);
}
class Hf {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, n, i, s) {
    const o = n.listeners[s], r = n.duration;
    o.forEach((a) => a({
      chart: t,
      initial: n.initial,
      numSteps: r,
      currentStep: Math.min(i - n.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = pl.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length)
        return;
      const o = i.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (s.draw(), this._notify(s, i, t, "progress")), o.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), n += o.length;
    }), this._lastDate = t, n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let i = n.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, n.set(t, i)), i;
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    !n || (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((i, s) => Math.max(i, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length)
      return;
    const i = n.items;
    let s = i.length - 1;
    for (; s >= 0; --s)
      i[s].cancel();
    n.items = [], this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Zt = new Hf();
const Cr = "transparent", Yf = {
  boolean(e, t, n) {
    return n > 0.5 ? t : e;
  },
  color(e, t, n) {
    const i = yr(e || Cr), s = i.valid && yr(t || Cr);
    return s && s.valid ? s.mix(i, n).hexString() : t;
  },
  number(e, t, n) {
    return e + (t - e) * n;
  }
};
class Uf {
  constructor(t, n, i, s) {
    const o = n[i];
    s = kn([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = kn([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || Yf[t.type || typeof r], this._easing = Rn[t.easing] || Rn.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = n, this._prop = i, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, r = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = kn([
        t.to,
        n,
        s,
        t.from
      ]), this._from = kn([
        t.from,
        s,
        n
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const n = t - this._start, i = this._duration, s = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || n < i), !this._active) {
      this._target[s] = a, this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[s] = o;
      return;
    }
    l = n / i % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, i) => {
      t.push({
        res: n,
        rej: i
      });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej", i = this._promises || [];
    for (let s = 0; s < i.length; s++)
      i[s][n]();
  }
}
class go {
  constructor(t, n) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(n);
  }
  configure(t) {
    if (!K(t))
      return;
    const n = Object.keys(xt.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!K(o))
        return;
      const r = {};
      for (const a of n)
        r[a] = o[a];
      (ut(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !i.has(a)) && i.set(a, r);
      });
    });
  }
  _animateOptions(t, n) {
    const i = n.options, s = Kf(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && Xf(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), o;
  }
  _createAnimations(t, n) {
    const i = this._properties, s = [], o = t.$animations || (t.$animations = {}), r = Object.keys(n), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, n));
        continue;
      }
      const d = n[c];
      let u = o[c];
      const h = i.get(c);
      if (u)
        if (h && u.active()) {
          u.update(h, d, a);
          continue;
        } else
          u.cancel();
      if (!h || !h.duration) {
        t[c] = d;
        continue;
      }
      o[c] = u = new Uf(h, t, c, d), s.push(u);
    }
    return s;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const i = this._createAnimations(t, n);
    if (i.length)
      return Zt.add(this._chart, i), !0;
  }
}
function Xf(e, t) {
  const n = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = e[i[s]];
    o && o.active() && n.push(o.wait());
  }
  return Promise.all(n);
}
function Kf(e, t) {
  if (!t)
    return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return n.$shared && (e.options = n = Object.assign({}, n, {
    $shared: !1,
    $animations: {}
  })), n;
}
function Pr(e, t) {
  const n = e && e.options || {}, i = n.reverse, s = n.min === void 0 ? t : 0, o = n.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function qf(e, t, n) {
  if (n === !1)
    return !1;
  const i = Pr(e, n), s = Pr(t, n);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function Gf(e) {
  let t, n, i, s;
  return K(e) ? (t = e.top, n = e.right, i = e.bottom, s = e.left) : t = n = i = s = e, {
    top: t,
    right: n,
    bottom: i,
    left: s,
    disabled: e === !1
  };
}
function Ll(e, t) {
  const n = [], i = e._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    n.push(i[s].index);
  return n;
}
function Er(e, t, n, i = {}) {
  const s = e.keys, o = i.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (l = +s[r], l === n) {
        if (i.all)
          continue;
        break;
      }
      c = e.values[l], yt(c) && (o || t === 0 || qt(t) === qt(c)) && (t += c);
    }
    return t;
  }
}
function Qf(e) {
  const t = Object.keys(e), n = new Array(t.length);
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i)
    o = t[i], n[i] = {
      x: o,
      y: e[o]
    };
  return n;
}
function Ar(e, t) {
  const n = e && e.options.stacked;
  return n || n === void 0 && t.stack !== void 0;
}
function Jf(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function Zf(e) {
  const { min: t, max: n, minDefined: i, maxDefined: s } = e.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? n : Number.POSITIVE_INFINITY
  };
}
function tg(e, t, n) {
  const i = e[t] || (e[t] = {});
  return i[n] || (i[n] = {});
}
function Dr(e, t, n, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = e[s.index];
    if (n && o > 0 || !n && o < 0)
      return s.index;
  }
  return null;
}
function Rr(e, t) {
  const { chart: n, _cachedMeta: i } = e, s = n._stacks || (n._stacks = {}), { iScale: o, vScale: r, index: a } = i, l = o.axis, c = r.axis, d = Jf(o, r, i), u = t.length;
  let h;
  for (let f = 0; f < u; ++f) {
    const p = t[f], { [l]: g, [c]: m } = p, y = p._stacks || (p._stacks = {});
    h = y[c] = tg(s, d, g), h[a] = m, h._top = Dr(h, r, !0, i.type), h._bottom = Dr(h, r, !1, i.type);
    const _ = h._visualValues || (h._visualValues = {});
    _[a] = m;
  }
}
function Ts(e, t) {
  const n = e.scales;
  return Object.keys(n).filter((i) => n[i].axis === t).shift();
}
function eg(e, t) {
  return Me(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function ng(e, t, n) {
  return Me(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data"
  });
}
function xn(e, t) {
  const n = e.controller.index, i = e.vScale && e.vScale.axis;
  if (!!i) {
    t = t || e._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][n] === void 0)
        return;
      delete o[i][n], o[i]._visualValues !== void 0 && o[i]._visualValues[n] !== void 0 && delete o[i]._visualValues[n];
    }
  }
}
const Cs = (e) => e === "reset" || e === "none", Ir = (e, t) => t ? e : Object.assign({}, e), ig = (e, t, n) => e && !t.hidden && t._stacked && {
  keys: Ll(n, !0),
  values: null
};
class Ht {
  constructor(t, n) {
    this.chart = t, this._ctx = t.ctx, this.index = n, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Ar(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && xn(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, n = this._cachedMeta, i = this.getDataset(), s = (u, h, f, p) => u === "x" ? h : u === "r" ? p : f, o = n.xAxisID = W(i.xAxisID, Ts(t, "x")), r = n.yAxisID = W(i.yAxisID, Ts(t, "y")), a = n.rAxisID = W(i.rAxisID, Ts(t, "r")), l = n.indexAxis, c = n.iAxisID = s(l, o, r, a), d = n.vAxisID = s(l, r, o, a);
    n.xScale = this.getScaleForId(o), n.yScale = this.getScaleForId(r), n.rScale = this.getScaleForId(a), n.iScale = this.getScaleForId(c), n.vScale = this.getScaleForId(d);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && pr(this._data, this), t._stacked && xn(t);
  }
  _dataCheck() {
    const t = this.getDataset(), n = t.data || (t.data = []), i = this._data;
    if (K(n))
      this._data = Qf(n);
    else if (i !== n) {
      if (i) {
        pr(i, this);
        const s = this._cachedMeta;
        xn(s), s._parsed = [];
      }
      n && Object.isExtensible(n) && Wh(n, this), this._syncList = [], this._data = n;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta, i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = n._stacked;
    n._stacked = Ar(n.vScale, n), n.stack !== i.stack && (s = !0, xn(n), n.stack = i.stack), this._resyncElements(t), (s || o !== n._stacked) && Rr(this, n._parsed);
  }
  configure() {
    const t = this.chart.config, n = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), n, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: r } = i, a = o.axis;
    let l = t === 0 && n === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], d, u, h;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, h = s;
    else {
      ut(s[t]) ? h = this.parseArrayData(i, s, t, n) : K(s[t]) ? h = this.parseObjectData(i, s, t, n) : h = this.parsePrimitiveData(i, s, t, n);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (d = 0; d < n; ++d)
        i._parsed[d + t] = u = h[d], l && (f() && (l = !1), c = u);
      i._sorted = l;
    }
    r && Rr(this, h);
  }
  parsePrimitiveData(t, n, i, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), d = o === r, u = new Array(s);
    let h, f, p;
    for (h = 0, f = s; h < f; ++h)
      p = h + i, u[h] = {
        [a]: d || o.parse(c[p], p),
        [l]: r.parse(n[p], p)
      };
    return u;
  }
  parseArrayData(t, n, i, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, d, u;
    for (l = 0, c = s; l < c; ++l)
      d = l + i, u = n[d], a[l] = {
        x: o.parse(u[0], d),
        y: r.parse(u[1], d)
      };
    return a;
  }
  parseObjectData(t, n, i, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let d, u, h, f;
    for (d = 0, u = s; d < u; ++d)
      h = d + i, f = n[h], c[d] = {
        x: o.parse(be(f, a), h),
        y: r.parse(be(f, l), h)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, i) {
    const s = this.chart, o = this._cachedMeta, r = n[t.axis], a = {
      keys: Ll(s, !0),
      values: n._stacks[t.axis]._visualValues
    };
    return Er(a, r, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, n, i, s) {
    const o = i[n.axis];
    let r = o === null ? NaN : o;
    const a = s && i._stacks[n.axis];
    s && a && (s.values = a, r = Er(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, n) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, r = s.length, a = this._getOtherScale(t), l = ig(n, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = Zf(a);
    let h, f;
    function p() {
      f = s[h];
      const g = f[a.axis];
      return !yt(f[t.axis]) || d > g || u < g;
    }
    for (h = 0; h < r && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o)); ++h)
      ;
    if (o) {
      for (h = r - 1; h >= 0; --h)
        if (!p()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed, i = [];
    let s, o, r;
    for (s = 0, o = n.length; s < o; ++s)
      r = n[s][t.axis], yt(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = n.iScale, s = n.vScale, o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"), n._clip = Gf(W(this.options.clip, qf(n.xScale, n.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, n = this.chart, i = this._cachedMeta, s = i.data || [], o = n.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let d;
    for (i.dataset && i.dataset.draw(t, o, a, l), d = a; d < a + l; ++d) {
      const u = s[d];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
    }
    for (d = 0; d < r.length; ++d)
      r[d].draw(t, o);
  }
  getStyle(t, n) {
    const i = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, n, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = ng(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = eg(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!n, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", i) {
    const s = n === "active", o = this._cachedDataOpts, r = t + "-" + n, a = o[r], l = this.enableOptionSharing && kt(i);
    if (a)
      return Ir(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), u = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], h = c.getOptionScopes(this.getDataset(), d), f = Object.keys(xt.elements[t]), p = () => this.getContext(i, s, n), g = c.resolveNamedOptions(h, f, p, u);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(Ir(g, l))), g;
  }
  _resolveAnimations(t, n, i) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${n}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const d = this.chart.config, u = d.datasetAnimationScopeKeys(this._type, n), h = d.getOptionScopes(this.getDataset(), u);
      l = d.createResolver(h, this.getContext(t, i, n));
    }
    const c = new go(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (!!t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, n) {
    return !n || Cs(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const i = this.resolveDataElementOptions(t, n), s = this._sharedOptions, o = this.getSharedOptions(i), r = this.includeOptions(n, o) || o !== s;
    return this.updateSharedOptions(o, n, i), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, n, i, s) {
    Cs(s) ? Object.assign(t, i) : this._resolveAnimations(n, s).update(t, i);
  }
  updateSharedOptions(t, n, i) {
    t && !Cs(n) && this._resolveAnimations(void 0, n).update(t, i);
  }
  _setStyle(t, n, i, s) {
    t.active = s;
    const o = this.getStyle(n, s);
    this._resolveAnimations(n, i, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data, i = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const s = i.length, o = n.length, r = Math.min(o, s);
    r && this.parse(0, r), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, n, i = !0) {
    const s = this._cachedMeta, o = s.data, r = t + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= r; a--)
        c[a] = c[a - n];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, n), i && this.updateElements(o, t, n, "reset");
  }
  updateElements(t, n, i, s) {
  }
  _removeElements(t, n) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, n);
      i._stacked && xn(i, s);
    }
    i.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [n, i, s] = t;
      this[n](i, s);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, n) {
    n && this._sync([
      "_removeElements",
      t,
      n
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      t,
      i
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
A(Ht, "defaults", {}), A(Ht, "datasetElementType", null), A(Ht, "dataElementType", null);
function sg(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = n.length; s < o; s++)
      i = i.concat(n[s].controller.getAllParsedValues(e));
    e._cache.$bar = gl(i.sort((s, o) => s - o));
  }
  return e._cache.$bar;
}
function og(e) {
  const t = e.iScale, n = sg(t, e.type);
  let i = t._length, s, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (kt(a) && (i = Math.min(i, Math.abs(r - a) || i)), a = r);
  };
  for (s = 0, o = n.length; s < o; ++s)
    r = t.getPixelForValue(n[s]), l();
  for (a = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    r = t.getPixelForTick(s), l();
  return i;
}
function rg(e, t, n, i) {
  const s = n.barThickness;
  let o, r;
  return nt(s) ? (o = t.min * n.categoryPercentage, r = n.barPercentage) : (o = s * i, r = 1), {
    chunk: o / i,
    ratio: r,
    start: t.pixels[e] - o / 2
  };
}
function ag(e, t, n, i) {
  const s = t.pixels, o = s[e];
  let r = e > 0 ? s[e - 1] : null, a = e < s.length - 1 ? s[e + 1] : null;
  const l = n.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / i,
    ratio: n.barPercentage,
    start: c
  };
}
function lg(e, t, n, i) {
  const s = n.parse(e[0], i), o = n.parse(e[1], i), r = Math.min(s, o), a = Math.max(s, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[n.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: s,
    end: o,
    min: r,
    max: a
  };
}
function jl(e, t, n, i) {
  return ut(e) ? lg(e, t, n, i) : t[n.axis] = n.parse(e, i), t;
}
function Lr(e, t, n, i) {
  const s = e.iScale, o = e.vScale, r = s.getLabels(), a = s === o, l = [];
  let c, d, u, h;
  for (c = n, d = n + i; c < d; ++c)
    h = t[c], u = {}, u[s.axis] = a || s.parse(r[c], c), l.push(jl(h, u, o, c));
  return l;
}
function Ps(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function cg(e, t, n) {
  return e !== 0 ? qt(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function dg(e) {
  let t, n, i, s, o;
  return e.horizontal ? (t = e.base > e.x, n = "left", i = "right") : (t = e.base < e.y, n = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: n,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function ug(e, t, n, i) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    e.borderSkipped = o;
    return;
  }
  if (s === !0) {
    e.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: d } = dg(e);
  s === "middle" && n && (e.enableBorderRadius = !0, (n._top || 0) === i ? s = c : (n._bottom || 0) === i ? s = d : (o[jr(d, r, a, l)] = !0, s = c)), o[jr(s, r, a, l)] = !0, e.borderSkipped = o;
}
function jr(e, t, n, i) {
  return i ? (e = hg(e, t, n), e = Nr(e, n, t)) : e = Nr(e, t, n), e;
}
function hg(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function Nr(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function fg(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? n === 1 ? 0.33 : 0 : t;
}
class Ln extends Ht {
  parsePrimitiveData(t, n, i, s) {
    return Lr(t, n, i, s);
  }
  parseArrayData(t, n, i, s) {
    return Lr(t, n, i, s);
  }
  parseObjectData(t, n, i, s) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, u = [];
    let h, f, p, g;
    for (h = i, f = i + s; h < f; ++h)
      g = n[h], p = {}, p[o.axis] = o.parse(be(g, c), h), u.push(jl(be(g, d), p, r, h));
    return u;
  }
  updateRangeFromParsed(t, n, i, s) {
    super.updateRangeFromParsed(t, n, i, s);
    const o = i._custom;
    o && n === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, { iScale: i, vScale: s } = n, o = this.getParsed(t), r = o._custom, a = Ps(r) ? "[" + r.start + ", " + r.end + "]" : "" + s.getLabelForValue(o[s.axis]);
    return {
      label: "" + i.getLabelForValue(o[i.axis]),
      value: a
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, t);
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), d = this._getRuler(), { sharedOptions: u, includeOptions: h } = this._getSharedOptions(n, s);
    for (let f = n; f < n + i; f++) {
      const p = this.getParsed(f), g = o || nt(p[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, d), y = (p._stacks || {})[a.axis], _ = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !y || Ps(p._custom) || r === y._top || r === y._bottom,
        x: c ? g.head : m.center,
        y: c ? m.center : g.head,
        height: c ? m.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : m.size
      };
      h && (_.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const v = _.options || t[f].options;
      ug(_, v, y, r), fg(_, v, d.ratio), this.updateElement(t[f], f, _, s);
    }
  }
  _getStacks(t, n) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped), o = i.options.stacked, r = [], a = (l) => {
      const c = l.controller.getParsed(n), d = c && c[l.vScale.axis];
      if (nt(d) || isNaN(d))
        return !0;
    };
    for (const l of s)
      if (!(n !== void 0 && a(l)) && ((o === !1 || r.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && r.push(l.stack), l.index === t))
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, n, i) {
    const s = this._getStacks(t, i), o = n !== void 0 ? s.indexOf(n) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, n = this._cachedMeta, i = n.iScale, s = [];
    let o, r;
    for (o = 0, r = n.data.length; o < r; ++o)
      s.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
    const a = t.barThickness;
    return {
      min: a || og(n),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: n, _stacked: i, index: s }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = Ps(c);
    let u = l[n.axis], h = 0, f = i ? this.applyStack(n, l, i) : u, p, g;
    f !== u && (h = f - u, f = u), d && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && qt(u) !== qt(c.barEnd) && (h = 0), h += u);
    const m = !nt(o) && !d ? o : h;
    let y = n.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? p = n.getPixelForValue(h + f) : p = y, g = p - y, Math.abs(g) < r) {
      g = cg(g, n, a) * r, u === a && (y -= g / 2);
      const _ = n.getPixelForDecimal(0), v = n.getPixelForDecimal(1), M = Math.min(_, v), x = Math.max(_, v);
      y = Math.max(Math.min(y, x), M), p = y + g, i && !d && (l._stacks[n.axis]._visualValues[s] = n.getValueForPixel(p) - n.getValueForPixel(y));
    }
    if (y === n.getPixelForValue(a)) {
      const _ = qt(g) * n.getLineWidthForValue(a) / 2;
      y += _, g -= _;
    }
    return {
      size: g,
      base: y,
      head: p,
      center: p + g / 2
    };
  }
  _calculateBarIndexPixels(t, n) {
    const i = n.scale, s = this.options, o = s.skipNull, r = W(s.maxBarThickness, 1 / 0);
    let a, l;
    if (n.grouped) {
      const c = o ? this._getStackCount(t) : n.stackCount, d = s.barThickness === "flex" ? ag(t, n, s, c) : rg(t, n, s, c), u = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = d.start + d.chunk * u + d.chunk / 2, l = Math.min(r, d.chunk * d.ratio);
    } else
      a = i.getPixelForValue(this.getParsed(t)[i.axis], t), l = Math.min(r, n.min * n.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, n = t.vScale, i = t.data, s = i.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[n.axis] !== null && i[o].draw(this._ctx);
  }
}
A(Ln, "id", "bar"), A(Ln, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), A(Ln, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
class jn extends Ht {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, n, i, s) {
    const o = super.parsePrimitiveData(t, n, i, s);
    for (let r = 0; r < o.length; r++)
      o[r]._custom = this.resolveDataElementOptions(r + i).radius;
    return o;
  }
  parseArrayData(t, n, i, s) {
    const o = super.parseArrayData(t, n, i, s);
    for (let r = 0; r < o.length; r++) {
      const a = n[i + r];
      o[r]._custom = W(a[2], this.resolveDataElementOptions(r + i).radius);
    }
    return o;
  }
  parseObjectData(t, n, i, s) {
    const o = super.parseObjectData(t, n, i, s);
    for (let r = 0; r < o.length; r++) {
      const a = n[i + r];
      o[r]._custom = W(a && a.r && +a.r, this.resolveDataElementOptions(r + i).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let n = 0;
    for (let i = t.length - 1; i >= 0; --i)
      n = Math.max(n, t[i].size(this.resolveDataElementOptions(i)) / 2);
    return n > 0 && n;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = n, r = this.getParsed(t), a = s.getLabelForValue(r.x), l = o.getLabelForValue(r.y), c = r._custom;
    return {
      label: i[t] || "",
      value: "(" + a + ", " + l + (c ? ", " + c : "") + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta.data;
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(n, s), d = r.axis, u = a.axis;
    for (let h = n; h < n + i; h++) {
      const f = t[h], p = !o && this.getParsed(h), g = {}, m = g[d] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(p[d]), y = g[u] = o ? a.getBasePixel() : a.getPixelForValue(p[u]);
      g.skip = isNaN(m) || isNaN(y), c && (g.options = l || this.resolveDataElementOptions(h, f.active ? "active" : s), o && (g.options.radius = 0)), this.updateElement(f, h, g, s);
    }
  }
  resolveDataElementOptions(t, n) {
    const i = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, n);
    s.$shared && (s = Object.assign({}, s, {
      $shared: !1
    }));
    const o = s.radius;
    return n !== "active" && (s.radius = 0), s.radius += W(i && i._custom, o), s;
  }
}
A(jn, "id", "bubble"), A(jn, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "borderWidth",
        "radius"
      ]
    }
  }
}), A(jn, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function gg(e, t, n) {
  let i = 1, s = 1, o = 0, r = 0;
  if (t < pt) {
    const a = e, l = a + t, c = Math.cos(a), d = Math.sin(a), u = Math.cos(l), h = Math.sin(l), f = (v, M, x) => Un(v, a, l, !0) ? 1 : Math.max(M, M * n, x, x * n), p = (v, M, x) => Un(v, a, l, !0) ? -1 : Math.min(M, M * n, x, x * n), g = f(0, c, u), m = f(Mt, d, h), y = p(ot, c, u), _ = p(ot + Mt, d, h);
    i = (g - y) / 2, s = (m - _) / 2, o = -(g + y) / 2, r = -(m + _) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class he extends Ht {
  constructor(t, n) {
    super(t, n), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, n) {
    const i = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = i;
    else {
      let o = (l) => +i[l];
      if (K(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +be(i[c], l);
      }
      let r, a;
      for (r = t, a = t + n; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return Tt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Tt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = pt, n = -pt;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller, o = s._getRotation(), r = s._getCircumference();
        t = Math.min(t, o), n = Math.max(n, o + r);
      }
    return {
      rotation: t,
      circumference: n - t
    };
  }
  update(t) {
    const n = this.chart, { chartArea: i } = n, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - r) / 2, 0), l = Math.min(Ch(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: h, ratioY: f, offsetX: p, offsetY: g } = gg(u, d, l), m = (i.width - r) / h, y = (i.height - r) / f, _ = Math.max(Math.min(m, y) / 2, 0), v = ll(this.options.radius, _), M = Math.max(v * l, 0), x = (v - M) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * v, this.offsetY = g * v, s.total = this.calculateTotal(), this.outerRadius = v - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, n) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return n && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / pt);
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, h = o && c.animateScale, f = h ? 0 : this.innerRadius, p = h ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: m } = this._getSharedOptions(n, s);
    let y = this._getRotation(), _;
    for (_ = 0; _ < n; ++_)
      y += this._circumference(_, o);
    for (_ = n; _ < n + i; ++_) {
      const v = this._circumference(_, o), M = t[_], x = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: y,
        endAngle: y + v,
        circumference: v,
        outerRadius: p,
        innerRadius: f
      };
      m && (x.options = g || this.resolveDataElementOptions(_, M.active ? "active" : s)), y += v, this.updateElement(M, _, x, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, n = t.data;
    let i = 0, s;
    for (s = 0; s < n.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !n[s].hidden && (i += Math.abs(o));
    }
    return i;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? pt * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = ti(n._parsed[t], i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const i = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = i.data.datasets.length; s < o; ++s)
        if (i.isDatasetVisible(s)) {
          r = i.getDatasetMeta(s), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = a.resolveDataElementOptions(s), l.borderAlign !== "inner" && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i);
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(W(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
A(he, "id", "doughnut"), A(he, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), A(he, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing"
}), A(he, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: i, color: s } } = t.legend.options;
            return n.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: s,
                lineWidth: l.borderWidth,
                pointStyle: i,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, i) {
        i.chart.toggleDataVisibility(n.index), i.chart.update();
      }
    }
  }
});
class Nn extends Ht {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const n = this._cachedMeta, { dataset: i, data: s = [], _dataset: o } = n, r = this.chart._animationsDisabled;
    let { start: a, count: l } = bl(n, s, r);
    this._drawStart = a, this._drawCount = l, yl(n) && (a = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(s, a, l, t);
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: u } = this._getSharedOptions(n, s), h = r.axis, f = a.axis, { spanGaps: p, segment: g } = this.options, m = nn(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || s === "none", _ = n + i, v = t.length;
    let M = n > 0 && this.getParsed(n - 1);
    for (let x = 0; x < v; ++x) {
      const k = t[x], O = y ? k : {};
      if (x < n || x >= _) {
        O.skip = !0;
        continue;
      }
      const C = this.getParsed(x), D = nt(C[f]), F = O[h] = r.getPixelForValue(C[h], x), z = O[f] = o || D ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, C, l) : C[f], x);
      O.skip = isNaN(F) || isNaN(z) || D, O.stop = x > 0 && Math.abs(C[h] - M[h]) > m, g && (O.parsed = C, O.raw = c.data[x]), u && (O.options = d || this.resolveDataElementOptions(x, k.active ? "active" : s)), y || this.updateElement(k, x, O, s), M = C;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, n = t.dataset, i = n.options && n.options.borderWidth || 0, s = t.data || [];
    if (!s.length)
      return i;
    const o = s[0].size(this.resolveDataElementOptions(0)), r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(i, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
A(Nn, "id", "line"), A(Nn, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), A(Nn, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class Ze extends Ht {
  constructor(t, n) {
    super(t, n), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = ti(n._parsed[t].r, i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  parseObjectData(t, n, i, s) {
    return Tl.bind(this)(t, n, i, s);
  }
  update(t) {
    const n = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(n, 0, n.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, n = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((i, s) => {
      const o = this.getParsed(s).r;
      !isNaN(o) && this.chart.getDataVisibility(s) && (o < n.min && (n.min = o), o > n.max && (n.max = o));
    }), n;
  }
  _updateRadius() {
    const t = this.chart, n = t.chartArea, i = t.options, s = Math.min(n.right - n.left, n.bottom - n.top), o = Math.max(s / 2, 0), r = Math.max(i.cutoutPercentage ? o / 100 * i.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
    this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, u = c.yCenter, h = c.getIndexAngle(0) - 0.5 * ot;
    let f = h, p;
    const g = 360 / this.countVisibleElements();
    for (p = 0; p < n; ++p)
      f += this._computeAngle(p, s, g);
    for (p = n; p < n + i; p++) {
      const m = t[p];
      let y = f, _ = f + this._computeAngle(p, s, g), v = r.getDataVisibility(p) ? c.getDistanceFromCenterForValue(this.getParsed(p).r) : 0;
      f = _, o && (l.animateScale && (v = 0), l.animateRotate && (y = _ = h));
      const M = {
        x: d,
        y: u,
        innerRadius: 0,
        outerRadius: v,
        startAngle: y,
        endAngle: _,
        options: this.resolveDataElementOptions(p, m.active ? "active" : s)
      };
      this.updateElement(m, p, M, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let n = 0;
    return t.data.forEach((i, s) => {
      !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && n++;
    }), n;
  }
  _computeAngle(t, n, i) {
    return this.chart.getDataVisibility(t) ? Tt(this.resolveDataElementOptions(t, n).angle || i) : 0;
  }
}
A(Ze, "id", "polarArea"), A(Ze, "defaults", {
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !0
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ]
    }
  },
  indexAxis: "r",
  startAngle: 0
}), A(Ze, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const n = t.data;
          if (n.labels.length && n.datasets.length) {
            const { labels: { pointStyle: i, color: s } } = t.legend.options;
            return n.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: s,
                lineWidth: l.borderWidth,
                pointStyle: i,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, n, i) {
        i.chart.toggleDataVisibility(n.index), i.chart.update();
      }
    }
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: {
        display: !1
      },
      beginAtZero: !0,
      grid: {
        circular: !0
      },
      pointLabels: {
        display: !1
      },
      startAngle: 0
    }
  }
});
class Wi extends he {
}
A(Wi, "id", "pie"), A(Wi, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class zn extends Ht {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(i[n.axis])
    };
  }
  parseObjectData(t, n, i, s) {
    return Tl.bind(this)(t, n, i, s);
  }
  update(t) {
    const n = this._cachedMeta, i = n.dataset, s = n.data || [], o = n.iScale.getLabels();
    if (i.points = s, t !== "resize") {
      const r = this.resolveDatasetElementOptions(t);
      this.options.showLine || (r.borderWidth = 0);
      const a = {
        _loop: !0,
        _fullLoop: o.length === s.length,
        options: r
      };
      this.updateElement(i, void 0, a, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, n, i, s) {
    const o = this._cachedMeta.rScale, r = s === "reset";
    for (let a = n; a < n + i; a++) {
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : s), d = o.getPointPositionForValue(a, this.getParsed(a).r), u = r ? o.xCenter : d.x, h = r ? o.yCenter : d.y, f = {
        x: u,
        y: h,
        angle: d.angle,
        skip: isNaN(u) || isNaN(h),
        options: c
      };
      this.updateElement(l, a, f, s);
    }
  }
}
A(zn, "id", "radar"), A(zn, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), A(zn, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Fn extends Ht {
  getLabelAndValue(t) {
    const n = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = n, r = this.getParsed(t), a = s.getLabelForValue(r.x), l = o.getLabelForValue(r.y);
    return {
      label: i[t] || "",
      value: "(" + a + ", " + l + ")"
    };
  }
  update(t) {
    const n = this._cachedMeta, { data: i = [] } = n, s = this.chart._animationsDisabled;
    let { start: o, count: r } = bl(n, i, s);
    if (this._drawStart = o, this._drawCount = r, yl(n) && (o = 0, r = i.length), this.options.showLine) {
      const { dataset: a, _dataset: l } = n;
      a._chart = this.chart, a._datasetIndex = this.index, a._decimated = !!l._decimated, a.points = i;
      const c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(a, void 0, {
        animated: !s,
        options: c
      }, t);
    }
    this.updateElements(i, o, r, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, n, i, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, d = this.resolveDataElementOptions(n, s), u = this.getSharedOptions(d), h = this.includeOptions(s, u), f = r.axis, p = a.axis, { spanGaps: g, segment: m } = this.options, y = nn(g) ? g : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || s === "none";
    let v = n > 0 && this.getParsed(n - 1);
    for (let M = n; M < n + i; ++M) {
      const x = t[M], k = this.getParsed(M), O = _ ? x : {}, C = nt(k[p]), D = O[f] = r.getPixelForValue(k[f], M), F = O[p] = o || C ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[p], M);
      O.skip = isNaN(D) || isNaN(F) || C, O.stop = M > 0 && Math.abs(k[f] - v[f]) > y, m && (O.parsed = k, O.raw = c.data[M]), h && (O.options = u || this.resolveDataElementOptions(M, x.active ? "active" : s)), _ || this.updateElement(x, M, O, s), v = k;
    }
    this.updateSharedOptions(u, s, d);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, n = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = n.length - 1; l >= 0; --l)
        a = Math.max(a, n[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const i = t.dataset, s = i.options && i.options.borderWidth || 0;
    if (!n.length)
      return s;
    const o = n[0].size(this.resolveDataElementOptions(0)), r = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(s, o, r) / 2;
  }
}
A(Fn, "id", "scatter"), A(Fn, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), A(Fn, "overrides", {
  interaction: {
    mode: "point"
  },
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
Object.freeze({
  __proto__: null,
  BarController: Ln,
  BubbleController: jn,
  DoughnutController: he,
  LineController: Nn,
  PolarAreaController: Ze,
  PieController: Wi,
  RadarController: zn,
  ScatterController: Fn
});
function Ce() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class po {
  static override(t) {
    Object.assign(po.prototype, t);
  }
  constructor(t) {
    this.options = t || {};
  }
  init() {
  }
  formats() {
    return Ce();
  }
  parse() {
    return Ce();
  }
  format() {
    return Ce();
  }
  add() {
    return Ce();
  }
  diff() {
    return Ce();
  }
  startOf() {
    return Ce();
  }
  endOf() {
    return Ce();
  }
}
var pg = {
  _date: po
};
function mg(e, t, n, i) {
  const { controller: s, data: o, _sorted: r } = e, a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Fh : ie;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0], d = typeof c.getRange == "function" && c.getRange(t);
        if (d) {
          const u = l(o, t, n - d), h = l(o, t, n + d);
          return {
            lo: u.lo,
            hi: h.hi
          };
        }
      }
    } else
      return l(o, t, n);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function ii(e, t, n, i, s) {
  const o = e.getSortedVisibleDatasetMetas(), r = n[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: u, hi: h } = mg(o[a], t, r, s);
    for (let f = u; f <= h; ++f) {
      const p = d[f];
      p.skip || i(p, c, f);
    }
  }
}
function bg(e) {
  const t = e.indexOf("x") !== -1, n = e.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, r = n ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Es(e, t, n, i, s) {
  const o = [];
  return !s && !e.isPointInArea(t) || ii(e, n, t, function(a, l, c) {
    !s && !Xn(a, e.chartArea, 0) || a.inRange(t.x, t.y, i) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function yg(e, t, n, i) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: u } = hl(r, {
      x: t.x,
      y: t.y
    });
    Un(u, c, d) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return ii(e, n, t, o), s;
}
function xg(e, t, n, i, s, o) {
  let r = [];
  const a = bg(n);
  let l = Number.POSITIVE_INFINITY;
  function c(d, u, h) {
    const f = d.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const p = d.getCenterPoint(s);
    if (!(!!o || e.isPointInArea(p)) && !f)
      return;
    const m = a(t, p);
    m < l ? (r = [
      {
        element: d,
        datasetIndex: u,
        index: h
      }
    ], l = m) : m === l && r.push({
      element: d,
      datasetIndex: u,
      index: h
    });
  }
  return ii(e, n, t, c), r;
}
function As(e, t, n, i, s, o) {
  return !o && !e.isPointInArea(t) ? [] : n === "r" && !i ? yg(e, t, n, s) : xg(e, t, n, i, s, o);
}
function zr(e, t, n, i, s) {
  const o = [], r = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return ii(e, n, t, (l, c, d) => {
    l[r](t[n], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(t.x, t.y, s));
  }), i && !a ? [] : o;
}
var _g = {
  evaluateInteractionItems: ii,
  modes: {
    index(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "x", r = n.includeInvisible || !1, a = n.intersect ? Es(e, s, o, i, r) : As(e, s, o, !1, i, r), l = [];
      return a.length ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
        const d = a[0].index, u = c.data[d];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: d
        });
      }), l) : [];
    },
    dataset(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      let a = n.intersect ? Es(e, s, o, i, r) : As(e, s, o, !1, i, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = e.getDatasetMeta(l).data;
        a = [];
        for (let d = 0; d < c.length; ++d)
          a.push({
            element: c[d],
            datasetIndex: l,
            index: d
          });
      }
      return a;
    },
    point(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return Es(e, s, o, i, r);
    },
    nearest(e, t, n, i) {
      const s = Ee(t, e), o = n.axis || "xy", r = n.includeInvisible || !1;
      return As(e, s, o, n.intersect, i, r);
    },
    x(e, t, n, i) {
      const s = Ee(t, e);
      return zr(e, s, "x", n.intersect, i);
    },
    y(e, t, n, i) {
      const s = Ee(t, e);
      return zr(e, s, "y", n.intersect, i);
    }
  }
};
const Nl = [
  "left",
  "top",
  "right",
  "bottom"
];
function _n(e, t) {
  return e.filter((n) => n.pos === t);
}
function Fr(e, t) {
  return e.filter((n) => Nl.indexOf(n.pos) === -1 && n.box.axis === t);
}
function vn(e, t) {
  return e.sort((n, i) => {
    const s = t ? i : n, o = t ? n : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function vg(e) {
  const t = [];
  let n, i, s, o, r, a;
  for (n = 0, i = (e || []).length; n < i; ++n)
    s = e[n], { position: o, options: { stack: r, stackWeight: a = 1 } } = s, t.push({
      index: n,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Mg(e) {
  const t = {};
  for (const n of e) {
    const { stack: i, pos: s, stackWeight: o } = n;
    if (!i || !Nl.includes(s))
      continue;
    const r = t[i] || (t[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function wg(e, t) {
  const n = Mg(e), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o];
    const { fullSize: l } = a.box, c = n[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * i : l && t.availableWidth, a.height = s) : (a.width = i, a.height = d ? d * s : l && t.availableHeight);
  }
  return n;
}
function Sg(e) {
  const t = vg(e), n = vn(t.filter((c) => c.box.fullSize), !0), i = vn(_n(t, "left"), !0), s = vn(_n(t, "right")), o = vn(_n(t, "top"), !0), r = vn(_n(t, "bottom")), a = Fr(t, "x"), l = Fr(t, "y");
  return {
    fullSize: n,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: _n(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Br(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i]);
}
function zl(e, t) {
  e.top = Math.max(e.top, t.top), e.left = Math.max(e.left, t.left), e.bottom = Math.max(e.bottom, t.bottom), e.right = Math.max(e.right, t.right);
}
function kg(e, t, n, i) {
  const { pos: s, box: o } = n, r = e.maxPadding;
  if (!K(s)) {
    n.size && (e[s] -= n.size);
    const u = i[n.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, n.horizontal ? o.height : o.width), n.size = u.size / u.count, e[s] += n.size;
  }
  o.getPadding && zl(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Br(r, e, "left", "right")), l = Math.max(0, t.outerHeight - Br(r, e, "top", "bottom")), c = a !== e.w, d = l !== e.h;
  return e.w = a, e.h = l, n.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function Og(e) {
  const t = e.maxPadding;
  function n(i) {
    const s = Math.max(t[i] - e[i], 0);
    return e[i] += s, s;
  }
  e.y += n("top"), e.x += n("left"), n("right"), n("bottom");
}
function Tg(e, t) {
  const n = t.maxPadding;
  function i(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((r) => {
      o[r] = Math.max(t[r], n[r]);
    }), o;
  }
  return i(e ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function On(e, t, n, i) {
  const s = [];
  let o, r, a, l, c, d;
  for (o = 0, r = e.length, c = 0; o < r; ++o) {
    a = e[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Tg(a.horizontal, t));
    const { same: u, other: h } = kg(t, n, a, i);
    c |= u && s.length, d = d || h, l.fullSize || s.push(a);
  }
  return c && On(s, t, n, i) || d;
}
function mi(e, t, n, i, s) {
  e.top = n, e.left = t, e.right = t + i, e.bottom = n + s, e.width = i, e.height = s;
}
function Wr(e, t, n, i) {
  const s = n.padding;
  let { x: o, y: r } = t;
  for (const a of e) {
    const l = a.box, c = i[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * d, h = c.size || l.height;
      kt(c.start) && (r = c.start), l.fullSize ? mi(l, s.left, r, n.outerWidth - s.right - s.left, h) : mi(l, t.left + c.placed, r, u, h), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * d, h = c.size || l.width;
      kt(c.start) && (o = c.start), l.fullSize ? mi(l, o, s.top, h, n.outerHeight - s.bottom - s.top) : mi(l, o, t.top + c.placed, h, u), c.start = o, c.placed += u, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Rt = {
  addBox(e, t) {
    e.boxes || (e.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(n) {
            t.draw(n);
          }
        }
      ];
    }, e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    t.fullSize = n.fullSize, t.position = n.position, t.weight = n.weight;
  },
  update(e, t, n, i) {
    if (!e)
      return;
    const s = Ct(e.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(n - s.height, 0), a = Sg(e.boxes), l = a.vertical, c = a.horizontal;
    dt(e.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const d = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: n,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / d,
      hBoxMaxHeight: r / 2
    }), h = Object.assign({}, s);
    zl(h, Ct(i));
    const f = Object.assign({
      maxPadding: h,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), p = wg(l.concat(c), u);
    On(a.fullSize, f, u, p), On(l, f, u, p), On(c, f, u, p) && On(l, f, u, p), Og(f), Wr(a.leftAndTop, f, u, p), f.x += f.w, f.y += f.h, Wr(a.rightAndBottom, f, u, p), e.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, dt(a.chartArea, (g) => {
      const m = g.box;
      Object.assign(m, e.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Fl {
  acquireContext(t, n) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, i) {
  }
  removeEventListener(t, n, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, i, s) {
    return n = Math.max(0, n || t.width), i = i || t.height, {
      width: n,
      height: Math.max(0, s ? Math.floor(n / s) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class Cg extends Fl {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Oi = "$chartjs", Pg = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, $r = (e) => e === null || e === "";
function Eg(e, t) {
  const n = e.style, i = e.getAttribute("height"), s = e.getAttribute("width");
  if (e[Oi] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: n.display,
        height: n.height,
        width: n.width
      }
    }
  }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", $r(s)) {
    const o = Sr(e, "width");
    o !== void 0 && (e.width = o);
  }
  if ($r(i))
    if (e.style.height === "")
      e.height = e.width / (t || 2);
    else {
      const o = Sr(e, "height");
      o !== void 0 && (e.height = o);
    }
  return e;
}
const Bl = Rf ? {
  passive: !0
} : !1;
function Ag(e, t, n) {
  e.addEventListener(t, n, Bl);
}
function Dg(e, t, n) {
  e.canvas.removeEventListener(t, n, Bl);
}
function Rg(e, t) {
  const n = Pg[e.type] || e.type, { x: i, y: s } = Ee(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function $i(e, t) {
  for (const n of e)
    if (n === t || n.contains(t))
      return !0;
}
function Ig(e, t, n) {
  const i = e.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || $i(a.addedNodes, i), r = r && !$i(a.removedNodes, i);
    r && n();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function Lg(e, t, n) {
  const i = e.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || $i(a.removedNodes, i), r = r && !$i(a.addedNodes, i);
    r && n();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const Kn = /* @__PURE__ */ new Map();
let Vr = 0;
function Wl() {
  const e = window.devicePixelRatio;
  e !== Vr && (Vr = e, Kn.forEach((t, n) => {
    n.currentDevicePixelRatio !== e && t();
  }));
}
function jg(e, t) {
  Kn.size || window.addEventListener("resize", Wl), Kn.set(e, t);
}
function Ng(e) {
  Kn.delete(e), Kn.size || window.removeEventListener("resize", Wl);
}
function zg(e, t, n) {
  const i = e.canvas, s = i && fo(i);
  if (!s)
    return;
  const o = ml((a, l) => {
    const c = s.clientWidth;
    n(a, l), c < s.clientWidth && n();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(s), jg(e, o), r;
}
function Ds(e, t, n) {
  n && n.disconnect(), t === "resize" && Ng(e);
}
function Fg(e, t, n) {
  const i = e.canvas, s = ml((o) => {
    e.ctx !== null && n(Rg(o, e));
  }, e);
  return Ag(i, t, s), s;
}
class Bg extends Fl {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (Eg(t, n), i) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[Oi])
      return !1;
    const i = n[Oi].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = i[o];
      nt(r) ? n.removeAttribute(o) : n.setAttribute(o, r);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      n.style[o] = s[o];
    }), n.width = n.width, delete n[Oi], !0;
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: Ig,
      detach: Lg,
      resize: zg
    }[n] || Fg;
    s[n] = r(t, n, i);
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}), s = i[n];
    if (!s)
      return;
    ({
      attach: Ds,
      detach: Ds,
      resize: Ds
    }[n] || Dg)(t, n, s), i[n] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, i, s) {
    return Df(t, n, i, s);
  }
  isAttached(t) {
    const n = fo(t);
    return !!(n && n.isConnected);
  }
}
function Wg(e) {
  return !Pl() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? Cg : Bg;
}
class At {
  constructor() {
    A(this, "active", !1);
  }
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: i
    };
  }
  hasValue() {
    return nn(this.x) && nn(this.y);
  }
  getProps(t, n) {
    const i = this.$animations;
    if (!n || !i)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
    }), s;
  }
}
A(At, "defaults", {}), A(At, "defaultRoutes");
function $g(e, t) {
  const n = e.options.ticks, i = Vg(e), s = Math.min(n.maxTicksLimit || i, i), o = n.major.enabled ? Yg(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return Ug(t, c, o, r / s), c;
  const d = Hg(o, t, s);
  if (r > 0) {
    let u, h;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (bi(t, c, d, nt(f) ? 0 : a - f, a), u = 0, h = r - 1; u < h; u++)
      bi(t, c, d, o[u], o[u + 1]);
    return bi(t, c, d, l, nt(f) ? t.length : l + f), c;
  }
  return bi(t, c, d), c;
}
function Vg(e) {
  const t = e.options.offset, n = e._tickSize(), i = e._length / n + (t ? 0 : 1), s = e._maxLength / n;
  return Math.floor(Math.min(i, s));
}
function Hg(e, t, n) {
  const i = Xg(e), s = t.length / n;
  if (!i)
    return Math.max(s, 1);
  const o = Lh(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function Yg(e) {
  const t = [];
  let n, i;
  for (n = 0, i = e.length; n < i; n++)
    e[n].major && t.push(n);
  return t;
}
function Ug(e, t, n, i) {
  let s = 0, o = n[0], r;
  for (i = Math.ceil(i), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), s++, o = n[s * i]);
}
function bi(e, t, n, i, s) {
  const o = W(i, 0), r = Math.min(W(s, e.length), e.length);
  let a = 0, l, c, d;
  for (n = Math.ceil(n), s && (l = s - i, n = l / Math.floor(l / n)), d = o; d < 0; )
    a++, d = Math.round(o + a * n);
  for (c = Math.max(o, 0); c < r; c++)
    c === d && (t.push(e[c]), a++, d = Math.round(o + a * n));
}
function Xg(e) {
  const t = e.length;
  let n, i;
  if (t < 2)
    return !1;
  for (i = e[0], n = 1; n < t; ++n)
    if (e[n] - e[n - 1] !== i)
      return !1;
  return i;
}
const Kg = (e) => e === "left" ? "right" : e === "right" ? "left" : e, Hr = (e, t, n) => t === "top" || t === "left" ? e[t] + n : e[t] - n;
function Yr(e, t) {
  const n = [], i = e.length / t, s = e.length;
  let o = 0;
  for (; o < s; o += i)
    n.push(e[Math.floor(o)]);
  return n;
}
function qg(e, t, n) {
  const i = e.ticks.length, s = Math.min(t, i - 1), o = e._startPixel, r = e._endPixel, a = 1e-6;
  let l = e.getPixelForTick(s), c;
  if (!(n && (i === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Gg(e, t) {
  dt(e, (n) => {
    const i = n.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete n.data[i[o]];
      i.splice(0, s);
    }
  });
}
function Mn(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function Ur(e, t) {
  if (!e.display)
    return 0;
  const n = wt(e.font, t), i = Ct(e.padding);
  return (ut(e.text) ? e.text.length : 1) * n.lineHeight + i.height;
}
function Qg(e, t) {
  return Me(e, {
    scale: t,
    type: "scale"
  });
}
function Jg(e, t, n) {
  return Me(e, {
    tick: n,
    index: t,
    type: "tick"
  });
}
function Zg(e, t, n) {
  let i = ao(e);
  return (n && t !== "right" || !n && t === "right") && (i = Kg(i)), i;
}
function tp(e, t, n, i) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = e, { chartArea: c, scales: d } = l;
  let u = 0, h, f, p;
  const g = r - s, m = a - o;
  if (e.isHorizontal()) {
    if (f = Dt(i, o, a), K(n)) {
      const y = Object.keys(n)[0], _ = n[y];
      p = d[y].getPixelForValue(_) + g - t;
    } else
      n === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = Hr(e, n, t);
    h = a - o;
  } else {
    if (K(n)) {
      const y = Object.keys(n)[0], _ = n[y];
      f = d[y].getPixelForValue(_) - m + t;
    } else
      n === "center" ? f = (c.left + c.right) / 2 - m + t : f = Hr(e, n, t);
    p = Dt(i, r, s), u = n === "left" ? -Mt : Mt;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: h,
    rotation: u
  };
}
class Fe extends At {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: s } = this;
    return t = zt(t, Number.POSITIVE_INFINITY), n = zt(n, Number.NEGATIVE_INFINITY), i = zt(i, Number.POSITIVE_INFINITY), s = zt(s, Number.NEGATIVE_INFINITY), {
      min: zt(t, i),
      max: zt(n, s),
      minDefined: yt(t),
      maxDefined: yt(n)
    };
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(), r;
    if (s && o)
      return {
        min: n,
        max: i
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), s || (n = Math.min(n, r.min)), o || (i = Math.max(i, r.max));
    return n = o && n > i ? i : n, i = s && n > i ? n : i, {
      min: zt(n, zt(i, n)),
      max: zt(i, zt(n, i))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    ft(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, n, i) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = n, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = df(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Yr(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = $g(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, n, i;
    this.isHorizontal() ? (n = this.left, i = this.right) : (n = this.top, i = this.bottom, t = !t), this._startPixel = n, this._endPixel = i, this._reversePixels = t, this._length = i - n, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    ft(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    ft(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    ft(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), ft(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    ft(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = ft(n.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    ft(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    ft(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, n = t.ticks, i = this.ticks.length, s = n.minRotation || 0, o = n.maxRotation;
    let r = s, a, l, c;
    if (!this._isVisible() || !n.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const d = this._getLabelSizes(), u = d.widest.width, h = d.highest.height, f = Et(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / i : f / (i - 1), u + 6 > a && (a = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - Mn(t.grid) - n.padding - Ur(t.title, this.chart.options.font), c = Math.sqrt(u * u + h * h), r = ss(Math.min(Math.asin(Et((d.highest.height + 6) / a, -1, 1)), Math.asin(Et(l / c, -1, 1)) - Math.asin(Et(h / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    ft(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    ft(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: n, options: { ticks: i, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Ur(s, n.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Mn(o) + l) : (t.height = this.maxHeight, t.width = Mn(o) + l), i.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: h } = this._getLabelSizes(), f = i.padding * 2, p = Tt(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
        if (a) {
          const y = i.mirror ? 0 : m * u.width + g * h.height;
          t.height = Math.min(this.maxHeight, t.height + y + f);
        } else {
          const y = i.mirror ? 0 : g * u.width + m * h.height;
          t.width = Math.min(this.maxWidth, t.width + y + f);
        }
        this._calculatePadding(c, d, m, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, n, i, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0, f = 0;
      l ? c ? (h = s * t.width, f = i * n.height) : (h = i * t.height, f = s * n.width) : o === "start" ? f = n.width : o === "end" ? h = t.width : o !== "inner" && (h = t.width / 2, f = n.width / 2), this.paddingLeft = Math.max((h - d + r) * this.width / (this.width - d), 0), this.paddingRight = Math.max((f - u + r) * this.width / (this.width - u), 0);
    } else {
      let d = n.height / 2, u = t.height / 2;
      o === "start" ? (d = 0, u = t.height) : o === "end" && (d = n.height, u = 0), this.paddingTop = d + r, this.paddingBottom = u + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    ft(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, i;
    for (n = 0, i = t.length; n < i; n++)
      nt(t[n].label) && (t.splice(n, 1), i--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let i = this.ticks;
      n < i.length && (i = Yr(i, n)), this._labelSizes = t = this._computeLabelSizes(i, i.length);
    }
    return t;
  }
  _computeLabelSizes(t, n) {
    const { ctx: i, _longestTextCache: s } = this, o = [], r = [];
    let a = 0, l = 0, c, d, u, h, f, p, g, m, y, _, v;
    for (c = 0; c < n; ++c) {
      if (h = t[c].label, f = this._resolveTickFontOptions(c), i.font = p = f.string, g = s[p] = s[p] || {
        data: {},
        gc: []
      }, m = f.lineHeight, y = _ = 0, !nt(h) && !ut(h))
        y = zi(i, g.data, g.gc, y, h), _ = m;
      else if (ut(h))
        for (d = 0, u = h.length; d < u; ++d)
          v = h[d], !nt(v) && !ut(v) && (y = zi(i, g.data, g.gc, y, v), _ += m);
      o.push(y), r.push(_), a = Math.max(y, a), l = Math.max(_, l);
    }
    Gg(s, n);
    const M = o.indexOf(a), x = r.indexOf(l), k = (O) => ({
      width: o[O] || 0,
      height: r[O] || 0
    });
    return {
      first: k(0),
      last: k(n - 1),
      widest: k(M),
      highest: k(x),
      widths: o,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return zh(this._alignToPixels ? Te(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return i.$context || (i.$context = Jg(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Qg(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, n = Tt(this.labelRotation), i = Math.abs(Math.cos(n)), s = Math.abs(Math.sin(n)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * i > a * s ? a / i : l / s : l * s < a * i ? l / i : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis, i = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), h = Mn(o), f = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, y = function(X) {
      return Te(i, X, g);
    };
    let _, v, M, x, k, O, C, D, F, z, Y, tt;
    if (r === "top")
      _ = y(this.bottom), O = this.bottom - h, D = _ - m, z = y(t.top) + m, tt = t.bottom;
    else if (r === "bottom")
      _ = y(this.top), z = t.top, tt = y(t.bottom) - m, O = _ + m, D = this.top + h;
    else if (r === "left")
      _ = y(this.right), k = this.right - h, C = _ - m, F = y(t.left) + m, Y = t.right;
    else if (r === "right")
      _ = y(this.left), F = t.left, Y = y(t.right) - m, k = _ + m, C = this.left + h;
    else if (n === "x") {
      if (r === "center")
        _ = y((t.top + t.bottom) / 2 + 0.5);
      else if (K(r)) {
        const X = Object.keys(r)[0], R = r[X];
        _ = y(this.chart.scales[X].getPixelForValue(R));
      }
      z = t.top, tt = t.bottom, O = _ + m, D = O + h;
    } else if (n === "y") {
      if (r === "center")
        _ = y((t.left + t.right) / 2);
      else if (K(r)) {
        const X = Object.keys(r)[0], R = r[X];
        _ = y(this.chart.scales[X].getPixelForValue(R));
      }
      k = _ - m, C = k - h, F = t.left, Y = t.right;
    }
    const it = W(s.ticks.maxTicksLimit, u), U = Math.max(1, Math.ceil(u / it));
    for (v = 0; v < u; v += U) {
      const X = this.getContext(v), R = o.setContext(X), L = a.setContext(X), Q = R.lineWidth, w = R.color, T = L.dash || [], j = L.dashOffset, B = R.tickWidth, I = R.tickColor, V = R.tickBorderDash || [], N = R.tickBorderDashOffset;
      M = qg(this, v, l), M !== void 0 && (x = Te(i, M, Q), c ? k = C = F = Y = x : O = D = z = tt = x, f.push({
        tx1: k,
        ty1: O,
        tx2: C,
        ty2: D,
        x1: F,
        y1: z,
        x2: Y,
        y2: tt,
        width: Q,
        color: w,
        borderDash: T,
        borderDashOffset: j,
        tickWidth: B,
        tickColor: I,
        tickBorderDash: V,
        tickBorderDashOffset: N
      }));
    }
    return this._ticksLength = u, this._borderValue = _, f;
  }
  _computeLabelItems(t) {
    const n = this.axis, i = this.options, { position: s, ticks: o } = i, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = o, h = Mn(i.grid), f = h + d, p = u ? -d : f, g = -Tt(this.labelRotation), m = [];
    let y, _, v, M, x, k, O, C, D, F, z, Y, tt = "middle";
    if (s === "top")
      k = this.bottom - p, O = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      k = this.top + p, O = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const U = this._getYAxisLabelAlignment(h);
      O = U.textAlign, x = U.x;
    } else if (s === "right") {
      const U = this._getYAxisLabelAlignment(h);
      O = U.textAlign, x = U.x;
    } else if (n === "x") {
      if (s === "center")
        k = (t.top + t.bottom) / 2 + f;
      else if (K(s)) {
        const U = Object.keys(s)[0], X = s[U];
        k = this.chart.scales[U].getPixelForValue(X) + f;
      }
      O = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (s === "center")
        x = (t.left + t.right) / 2 - f;
      else if (K(s)) {
        const U = Object.keys(s)[0], X = s[U];
        x = this.chart.scales[U].getPixelForValue(X);
      }
      O = this._getYAxisLabelAlignment(h).textAlign;
    }
    n === "y" && (l === "start" ? tt = "top" : l === "end" && (tt = "bottom"));
    const it = this._getLabelSizes();
    for (y = 0, _ = a.length; y < _; ++y) {
      v = a[y], M = v.label;
      const U = o.setContext(this.getContext(y));
      C = this.getPixelForTick(y) + o.labelOffset, D = this._resolveTickFontOptions(y), F = D.lineHeight, z = ut(M) ? M.length : 1;
      const X = z / 2, R = U.color, L = U.textStrokeColor, Q = U.textStrokeWidth;
      let w = O;
      r ? (x = C, O === "inner" && (y === _ - 1 ? w = this.options.reverse ? "left" : "right" : y === 0 ? w = this.options.reverse ? "right" : "left" : w = "center"), s === "top" ? c === "near" || g !== 0 ? Y = -z * F + F / 2 : c === "center" ? Y = -it.highest.height / 2 - X * F + F : Y = -it.highest.height + F / 2 : c === "near" || g !== 0 ? Y = F / 2 : c === "center" ? Y = it.highest.height / 2 - X * F : Y = it.highest.height - z * F, u && (Y *= -1), g !== 0 && !U.showLabelBackdrop && (x += F / 2 * Math.sin(g))) : (k = C, Y = (1 - z) * F / 2);
      let T;
      if (U.showLabelBackdrop) {
        const j = Ct(U.backdropPadding), B = it.heights[y], I = it.widths[y];
        let V = Y - j.top, N = 0 - j.left;
        switch (tt) {
          case "middle":
            V -= B / 2;
            break;
          case "bottom":
            V -= B;
            break;
        }
        switch (O) {
          case "center":
            N -= I / 2;
            break;
          case "right":
            N -= I;
            break;
        }
        T = {
          left: N,
          top: V,
          width: I + j.width,
          height: B + j.height,
          color: U.backdropColor
        };
      }
      m.push({
        label: M,
        font: D,
        textOffset: Y,
        options: {
          rotation: g,
          color: R,
          strokeColor: L,
          strokeWidth: Q,
          textAlign: w,
          textBaseline: tt,
          translation: [
            x,
            k
          ],
          backdrop: T
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-Tt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return n.align === "start" ? s = "left" : n.align === "end" ? s = "right" : n.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: n, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, d;
    return n === "left" ? s ? (d = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", d += l / 2) : (c = "right", d += l)) : (d = this.right - a, i === "near" ? c = "right" : i === "center" ? (c = "center", d -= l / 2) : (c = "left", d = this.left)) : n === "right" ? s ? (d = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", d -= l / 2) : (c = "left", d -= l)) : (d = this.left + a, i === "near" ? c = "left" : i === "center" ? (c = "center", d += l / 2) : (c = "right", d = this.right)) : c = "right", {
      textAlign: c,
      x: d
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, n = this.options.position;
    if (n === "left" || n === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (n === "top" || n === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: n }, left: i, top: s, width: o, height: r } = this;
    n && (t.save(), t.fillStyle = n, t.fillRect(i, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? n.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, d) => {
      !d.width || !d.color || (i.save(), i.lineWidth = d.width, i.strokeStyle = d.color, i.setLineDash(d.borderDash || []), i.lineDashOffset = d.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
    };
    if (n.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        n.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), n.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: n, options: { border: i, grid: s } } = this, o = i.setContext(this.getContext()), r = i.display ? o.width : 0;
    if (!r)
      return;
    const a = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, d, u, h;
    this.isHorizontal() ? (c = Te(t, this.left, r) - r / 2, d = Te(t, this.right, a) + a / 2, u = h = l) : (u = Te(t, this.top, r) - r / 2, h = Te(t, this.bottom, a) + a / 2, c = d = l), n.save(), n.lineWidth = o.width, n.strokeStyle = o.color, n.beginPath(), n.moveTo(c, u), n.lineTo(d, h), n.stroke(), n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && ei(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      ze(i, c, 0, d, l, a);
    }
    s && ni(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: n, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = wt(i.font), r = Ct(i.padding), a = i.align;
    let l = o.lineHeight / 2;
    n === "bottom" || n === "center" || K(n) ? (l += r.bottom, ut(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: h } = tp(this, l, n, a);
    ze(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: u,
      rotation: h,
      textAlign: Zg(a, n, s),
      textBaseline: "middle",
      translation: [
        c,
        d
      ]
    });
  }
  draw(t) {
    !this._isVisible() || (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, n = t.ticks && t.ticks.z || 0, i = W(t.grid && t.grid.z, -1), s = W(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Fe.prototype.draw ? [
      {
        z: n,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: i,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: n,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
    let o, r;
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o];
      a[i] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return wt(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class yi {
  constructor(t, n, i) {
    this.type = t, this.scope = n, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let i;
    ip(n) && (i = this.register(n));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, ep(t, r, i), this.override && xt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items, i = t.id, s = this.scope;
    i in n && delete n[i], s && i in xt[s] && (delete xt[s][i], this.override && delete Ne[i]);
  }
}
function ep(e, t, n) {
  const i = Hn(/* @__PURE__ */ Object.create(null), [
    n ? xt.get(n) : {},
    xt.get(t),
    e.defaults
  ]);
  xt.set(t, i), e.defaultRoutes && np(t, e.defaultRoutes), e.descriptors && xt.describe(t, e.descriptors);
}
function np(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split("."), s = i.pop(), o = [
      e
    ].concat(i).join("."), r = t[n].split("."), a = r.pop(), l = r.join(".");
    xt.route(o, s, l, a);
  });
}
function ip(e) {
  return "id" in e && "defaults" in e;
}
class sp {
  constructor() {
    this.controllers = new yi(Ht, "datasets", !0), this.elements = new yi(At, "elements"), this.plugins = new yi(Object, "plugins"), this.scales = new yi(Fe, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, i) {
    [
      ...n
    ].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : dt(s, (r) => {
        const a = i || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, n, i) {
    const s = oo(t);
    ft(i["before" + s], [], i), n[t](i), ft(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, n, i) {
    const s = n.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var Xt = new sp();
class op {
  constructor() {
    this._init = [];
  }
  notify(t, n, i, s) {
    n === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), r = this._notify(o, t, n, i);
    return n === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, n, i, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin, a = r[i], l = [
        n,
        s,
        o.options
      ];
      if (ft(a, l, r) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    nt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const n = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const i = t && t.config, s = W(i.options && i.options.plugins, {}), o = rp(i);
    return s === !1 && !n ? [] : lp(t, o, s, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [], i = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(n, i), t, "stop"), this._notify(s(i, n), t, "start");
  }
}
function rp(e) {
  const t = {}, n = [], i = Object.keys(Xt.plugins.items);
  for (let o = 0; o < i.length; o++)
    n.push(Xt.getPlugin(i[o]));
  const s = e.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    n.indexOf(r) === -1 && (n.push(r), t[r.id] = !0);
  }
  return {
    plugins: n,
    localIds: t
  };
}
function ap(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function lp(e, { plugins: t, localIds: n }, i, s) {
  const o = [], r = e.getContext();
  for (const a of t) {
    const l = a.id, c = ap(i[l], s);
    c !== null && o.push({
      plugin: a,
      options: cp(e.config, {
        plugin: a,
        local: n[l]
      }, c, r)
    });
  }
  return o;
}
function cp(e, { plugin: t, local: n }, i, s) {
  const o = e.pluginScopeKeys(t), r = e.getOptionScopes(i, o);
  return n && t.defaults && r.push(t.defaults), e.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Fs(e, t) {
  const n = xt.datasets[e] || {};
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x";
}
function dp(e, t) {
  let n = e;
  return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"), n;
}
function up(e, t) {
  return e === t ? "_index_" : "_value_";
}
function hp(e) {
  if (e === "top" || e === "bottom")
    return "x";
  if (e === "left" || e === "right")
    return "y";
}
function Vi(e, t) {
  if (e === "x" || e === "y" || e === "r" || (e = t.axis || hp(t.position) || e.length > 1 && Vi(e[0].toLowerCase(), t), e))
    return e;
  throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function fp(e, t) {
  const n = Ne[e.type] || {
    scales: {}
  }, i = t.scales || {}, s = Fs(e.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((r) => {
    const a = i[r];
    if (!K(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Vi(r, a), c = up(l, s), d = n.scales || {};
    o[r] = An(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), e.data.datasets.forEach((r) => {
    const a = r.type || e.type, l = r.indexAxis || Fs(a, t), d = (Ne[a] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const h = dp(u, l), f = r[h + "AxisID"] || h;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), An(o[f], [
        {
          axis: h
        },
        i[f],
        d[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    An(a, [
      xt.scales[a.type],
      xt.scale
    ]);
  }), o;
}
function $l(e) {
  const t = e.options || (e.options = {});
  t.plugins = W(t.plugins, {}), t.scales = fp(e, t);
}
function Vl(e) {
  return e = e || {}, e.datasets = e.datasets || [], e.labels = e.labels || [], e;
}
function gp(e) {
  return e = e || {}, e.data = Vl(e.data), $l(e), e;
}
const Xr = /* @__PURE__ */ new Map(), Hl = /* @__PURE__ */ new Set();
function xi(e, t) {
  let n = Xr.get(e);
  return n || (n = t(), Xr.set(e, n), Hl.add(n)), n;
}
const wn = (e, t, n) => {
  const i = be(t, n);
  i !== void 0 && e.add(i);
};
class pp {
  constructor(t) {
    this._config = gp(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Vl(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), $l(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return xi(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, n) {
    return xi(`${t}.transition.${n}`, () => [
      [
        `datasets.${t}.transitions.${n}`,
        `transitions.${n}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return xi(`${t}-${n}`, () => [
      [
        `datasets.${t}.elements.${n}`,
        `datasets.${t}`,
        `elements.${n}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id, i = this.type;
    return xi(`${i}-plugin-${n}`, () => [
      [
        `plugins.${n}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || n) && (s = /* @__PURE__ */ new Map(), i.set(t, s)), s;
  }
  getOptionScopes(t, n, i) {
    const { options: s, type: o } = this, r = this._cachedScopes(t, i), a = r.get(n);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    n.forEach((d) => {
      t && (l.add(t), d.forEach((u) => wn(l, t, u))), d.forEach((u) => wn(l, s, u)), d.forEach((u) => wn(l, Ne[o] || {}, u)), d.forEach((u) => wn(l, xt, u)), d.forEach((u) => wn(l, zs, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Hl.has(n) && r.set(n, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [
      t,
      Ne[n] || {},
      xt.datasets[n] || {},
      {
        type: n
      },
      xt,
      zs
    ];
  }
  resolveNamedOptions(t, n, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Kr(this._resolverCache, t, s);
    let l = r;
    if (bp(r, n)) {
      o.$shared = !1, i = ye(i) ? i() : i;
      const c = this.createResolver(t, i, a);
      l = on(r, i, c);
    }
    for (const c of n)
      o[c] = l[c];
    return o;
  }
  createResolver(t, n, i = [
    ""
  ], s) {
    const { resolver: o } = Kr(this._resolverCache, t, i);
    return K(n) ? on(o, n, void 0, s) : o;
  }
}
function Kr(e, t, n) {
  let i = e.get(t);
  i || (i = /* @__PURE__ */ new Map(), e.set(t, i));
  const s = n.join();
  let o = i.get(s);
  return o || (o = {
    resolver: co(t, n),
    subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const mp = (e) => K(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || ye(e[n]), !1);
function bp(e, t) {
  const { isScriptable: n, isIndexable: i } = wl(e);
  for (const s of t) {
    const o = n(s), r = i(s), a = (r || o) && e[s];
    if (o && (ye(a) || mp(a)) || r && ut(a))
      return !0;
  }
  return !1;
}
var yp = "4.2.0";
const xp = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function qr(e, t) {
  return e === "top" || e === "bottom" || xp.indexOf(e) === -1 && t === "x";
}
function Gr(e, t) {
  return function(n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e];
  };
}
function Qr(e) {
  const t = e.chart, n = t.options.animation;
  t.notifyPlugins("afterRender"), ft(n && n.onComplete, [
    e
  ], t);
}
function _p(e) {
  const t = e.chart, n = t.options.animation;
  ft(n && n.onProgress, [
    e
  ], t);
}
function Yl(e) {
  return Pl() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]), e && e.canvas && (e = e.canvas), e;
}
const Ti = {}, Jr = (e) => {
  const t = Yl(e);
  return Object.values(Ti).filter((n) => n.canvas === t).pop();
};
function vp(e, t, n) {
  const i = Object.keys(e);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = e[s];
      delete e[s], (n > 0 || o > t) && (e[o + n] = r);
    }
  }
}
function Mp(e, t, n, i) {
  return !n || e.type === "mouseout" ? null : i ? t : e;
}
function wp(e) {
  const { xScale: t, yScale: n } = e;
  if (t && n)
    return {
      left: t.left,
      right: t.right,
      top: n.top,
      bottom: n.bottom
    };
}
class Bt {
  static register(...t) {
    Xt.add(...t), Zr();
  }
  static unregister(...t) {
    Xt.remove(...t), Zr();
  }
  constructor(t, n) {
    const i = this.config = new pp(n), s = Yl(t), o = Jr(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || Wg(s))(), this.platform.updateConfig(i);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = Th(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new op(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = $h((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], Ti[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Zt.listen(this, "complete", Qr), Zt.listen(this, "progress", _p), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: n }, width: i, height: s, _aspectRatio: o } = this;
    return nt(t) ? n && o ? o : s ? i / s : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Xt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : wr(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return _r(this.canvas, this.ctx), this;
  }
  stop() {
    return Zt.stop(this), this;
  }
  resize(t, n) {
    Zt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: n
    } : this._resize(t, n);
  }
  _resize(t, n) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, n, o), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, wr(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), ft(i.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    dt(n, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, n = t.scales, i = this.scales, s = Object.keys(i).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    n && (o = o.concat(Object.keys(n).map((r) => {
      const a = n[r], l = Vi(r, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), dt(o, (r) => {
      const a = r.options, l = a.id, c = Vi(l, a), d = W(a.type, r.dtype);
      (a.position === void 0 || qr(a.position, c) !== qr(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let u = null;
      if (l in i && i[l].type === d)
        u = i[l];
      else {
        const h = Xt.getScale(d);
        u = new h({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), i[u.id] = u;
      }
      u.init(a, t);
    }), dt(s, (r, a) => {
      r || delete i[a];
    }), dt(i, (r) => {
      Rt.configure(this, r, r.options), Rt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, n = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > n) {
      for (let s = n; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(n, i - n);
    }
    this._sortedMetasets = t.slice(0).sort(Gr("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: n } } = this;
    t.length > n.length && delete this._stacks, t.forEach((i, s) => {
      n.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], n = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = n.length; i < s; i++) {
      const o = n[i];
      let r = this.getDatasetMeta(i);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = a, r.indexAxis = o.indexAxis || Fs(a, this.options), r.order = o.order || 0, r.index = i, r.label = "" + o.label, r.visible = this.isDatasetVisible(i), r.controller)
        r.controller.updateIndex(i), r.controller.linkScales();
      else {
        const l = Xt.getController(a), { datasetElementType: c, dataElementType: d } = xt.datasets[a];
        Object.assign(l, {
          dataElementType: Xt.getElement(d),
          datasetElementType: c && Xt.getElement(c)
        }), r.controller = new l(this, i), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    dt(this.data.datasets, (t, n) => {
      this.getDatasetMeta(n).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const i = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, d = this.data.datasets.length; c < d; c++) {
      const { controller: u } = this.getDatasetMeta(c), h = !s && o.indexOf(u) === -1;
      u.buildOrUpdateElements(h), r = Math.max(+u.getMaxOverflow(), r);
    }
    r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), s || dt(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Gr("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    dt(this.scales, (t) => {
      Rt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, n = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!ur(n, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, n = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of n) {
      const r = i === "_removeElements" ? -o : o;
      vp(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const n = this.data.datasets.length, i = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = i(0);
    for (let o = 1; o < n; o++)
      if (!ur(s, i(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Rt.update(this, this.width, this.height, t);
    const n = this.chartArea, i = n.width <= 0 || n.height <= 0;
    this._layers = [], dt(this.boxes, (s) => {
      i && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this._updateDataset(n, ye(t) ? t({
          datasetIndex: n
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, n) {
    const i = this.getDatasetMeta(t), s = {
      meta: i,
      index: t,
      mode: n,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (i.controller._update(n), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Zt.has(this) ? this.attached && !Zt.running(this) && Zt.start(this) : (this.draw(), Qr({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw;
      this._resize(i, s), this._resizeBeforeDraw = null;
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const n = this._layers;
    for (t = 0; t < n.length && n[t].z <= 0; ++t)
      n[t].draw(this.chartArea);
    for (this._drawDatasets(); t < n.length; ++t)
      n[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets, i = [];
    let s, o;
    for (s = 0, o = n.length; s < o; ++s) {
      const r = n[s];
      (!t || r.visible) && i.push(r);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let n = t.length - 1; n >= 0; --n)
      this._drawDataset(t[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const n = this.ctx, i = t._clip, s = !i.disabled, o = wp(t) || this.chartArea, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (s && ei(n, {
      left: i.left === !1 ? 0 : o.left - i.left,
      right: i.right === !1 ? this.width : o.right + i.right,
      top: i.top === !1 ? 0 : o.top - i.top,
      bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
    }), t.controller.draw(), s && ni(n), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return Xn(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, i, s) {
    const o = _g.modes[n];
    return typeof o == "function" ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t], i = this._metasets;
    let s = i.filter((o) => o && o._dataset === n).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: n && n.order || 0,
      index: t,
      _dataset: n,
      _parsed: [],
      _sorted: !1
    }, i.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = Me(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t];
    if (!n)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const i = this.getDatasetMeta(t);
    i.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, i) {
    const s = i ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, s);
    kt(n) ? (o.data[n].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(o, {
      visible: i
    }), this.update((a) => a.datasetIndex === t ? s : void 0));
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1);
  }
  show(t, n) {
    this._updateVisibility(t, n, !0);
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t];
    n && n.controller && n.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, n;
    for (this.stop(), Zt.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), _r(t, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), delete Ti[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, n = this.platform, i = (o, r) => {
      n.addEventListener(this, o, r), t[o] = r;
    }, s = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    dt(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, n = this.platform, i = (l, c) => {
      n.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (n.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      s("attach", a), this.attached = !0, this.resize(), i("resize", o), i("detach", r);
    };
    r = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), i("attach", a);
    }, n.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    dt(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._listeners = {}, dt(this._responsiveListeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, n, i) {
    const s = i ? "set" : "remove";
    let o, r, a, l;
    for (n === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [], i = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !Li(i, n) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, n));
  }
  notifyPlugins(t, n, i) {
    return this._plugins.notify(this, t, n, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((n) => n.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, n, i) {
    const s = this.options.hover, o = (l, c) => l.filter((d) => !c.some((u) => d.datasetIndex === u.datasetIndex && d.index === u.index)), r = o(n, t), a = i ? t : o(t, n);
    r.length && this.updateHoverStyle(r, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, n) {
    const i = {
      event: t,
      replay: n,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, s) === !1)
      return;
    const o = this._handleEvent(t, n, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (o || i.changed) && this.render(), this;
  }
  _handleEvent(t, n, i) {
    const { _active: s = [], options: o } = this, r = n, a = this._getActiveElements(t, s, i, r), l = Rh(t), c = Mp(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, ft(o.onHover, [
      t,
      a,
      this
    ], this), l && ft(o.onClick, [
      t,
      a,
      this
    ], this));
    const d = !Li(a, s);
    return (d || n) && (this._active = a, this._updateHoverStyles(a, s, n)), this._lastEvent = c, d;
  }
  _getActiveElements(t, n, i, s) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return n;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
A(Bt, "defaults", xt), A(Bt, "instances", Ti), A(Bt, "overrides", Ne), A(Bt, "registry", Xt), A(Bt, "version", yp), A(Bt, "getChart", Jr);
function Zr() {
  return dt(Bt.instances, (e) => e._plugins.invalidate());
}
function Sp(e, t, n) {
  const { startAngle: i, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  e.beginPath(), e.arc(o, r, a, i - c, n + c), l > s ? (c = s / l, e.arc(o, r, l, n + c, i - c, !0)) : e.arc(o, r, s, n + Mt, i - Mt), e.closePath(), e.clip();
}
function kp(e) {
  return lo(e, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Op(e, t, n, i) {
  const s = kp(e.options.borderRadius), o = (n - t) / 2, r = Math.min(o, i * t / 2), a = (l) => {
    const c = (n - Math.min(o, l)) * i / 2;
    return Et(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: Et(s.innerStart, 0, r),
    innerEnd: Et(s.innerEnd, 0, r)
  };
}
function Ge(e, t, n, i) {
  return {
    x: n + e * Math.cos(t),
    y: i + e * Math.sin(t)
  };
}
function Hi(e, t, n, i, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t, u = Math.max(t.outerRadius + i + n - c, 0), h = d > 0 ? d + i + n + c : 0;
  let f = 0;
  const p = s - l;
  if (i) {
    const U = d > 0 ? d - i : 0, X = u > 0 ? u - i : 0, R = (U + X) / 2, L = R !== 0 ? p * R / (R + i) : p;
    f = (p - L) / 2;
  }
  const g = Math.max(1e-3, p * u - n / ot) / u, m = (p - g) / 2, y = l + m + f, _ = s - m - f, { outerStart: v, outerEnd: M, innerStart: x, innerEnd: k } = Op(t, h, u, _ - y), O = u - v, C = u - M, D = y + v / O, F = _ - M / C, z = h + x, Y = h + k, tt = y + x / z, it = _ - k / Y;
  if (e.beginPath(), o) {
    const U = (D + F) / 2;
    if (e.arc(r, a, u, D, U), e.arc(r, a, u, U, F), M > 0) {
      const Q = Ge(C, F, r, a);
      e.arc(Q.x, Q.y, M, F, _ + Mt);
    }
    const X = Ge(Y, _, r, a);
    if (e.lineTo(X.x, X.y), k > 0) {
      const Q = Ge(Y, it, r, a);
      e.arc(Q.x, Q.y, k, _ + Mt, it + Math.PI);
    }
    const R = (_ - k / h + (y + x / h)) / 2;
    if (e.arc(r, a, h, _ - k / h, R, !0), e.arc(r, a, h, R, y + x / h, !0), x > 0) {
      const Q = Ge(z, tt, r, a);
      e.arc(Q.x, Q.y, x, tt + Math.PI, y - Mt);
    }
    const L = Ge(O, y, r, a);
    if (e.lineTo(L.x, L.y), v > 0) {
      const Q = Ge(O, D, r, a);
      e.arc(Q.x, Q.y, v, y - Mt, D);
    }
  } else {
    e.moveTo(r, a);
    const U = Math.cos(D) * u + r, X = Math.sin(D) * u + a;
    e.lineTo(U, X);
    const R = Math.cos(F) * u + r, L = Math.sin(F) * u + a;
    e.lineTo(R, L);
  }
  e.closePath();
}
function Tp(e, t, n, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Hi(e, t, n, i, l, s);
    for (let c = 0; c < o; ++c)
      e.fill();
    isNaN(a) || (l = r + (a % pt || pt));
  }
  return Hi(e, t, n, i, l, s), e.fill(), l;
}
function Cp(e, t, n, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, u = l.borderAlign === "inner";
  if (!c)
    return;
  u ? (e.lineWidth = c * 2, e.lineJoin = d || "round") : (e.lineWidth = c, e.lineJoin = d || "bevel");
  let h = t.endAngle;
  if (o) {
    Hi(e, t, n, i, h, s);
    for (let f = 0; f < o; ++f)
      e.stroke();
    isNaN(a) || (h = r + (a % pt || pt));
  }
  u && Sp(e, t, h), o || (Hi(e, t, n, i, h, s), e.stroke());
}
class Ci extends At {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, n, i) {
    const s = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: r } = hl(s, {
      x: t,
      y: n
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), h = this.options.spacing / 2, p = W(u, l - a) >= pt || Un(o, a, l), g = ne(r, c + h, d + h);
    return p && g;
  }
  getCenterPoint(t) {
    const { x: n, y: i, startAngle: s, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], t), { offset: l, spacing: c } = this.options, d = (s + o) / 2, u = (r + a + c + l) / 2;
    return {
      x: n + Math.cos(d) * u,
      y: i + Math.sin(d) * u
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: n, circumference: i } = this, s = (n.offset || 0) / 4, o = (n.spacing || 0) / 2, r = n.circular;
    if (this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > pt ? Math.floor(i / pt) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(ot, i || 0)), c = s * l;
    t.fillStyle = n.backgroundColor, t.strokeStyle = n.borderColor, Tp(t, this, c, o, r), Cp(t, this, c, o, r), t.restore();
  }
}
A(Ci, "id", "arc"), A(Ci, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), A(Ci, "defaultRoutes", {
  backgroundColor: "backgroundColor"
});
function Ul(e, t, n = t) {
  e.lineCap = W(n.borderCapStyle, t.borderCapStyle), e.setLineDash(W(n.borderDash, t.borderDash)), e.lineDashOffset = W(n.borderDashOffset, t.borderDashOffset), e.lineJoin = W(n.borderJoinStyle, t.borderJoinStyle), e.lineWidth = W(n.borderWidth, t.borderWidth), e.strokeStyle = W(n.borderColor, t.borderColor);
}
function Pp(e, t, n) {
  e.lineTo(n.x, n.y);
}
function Ep(e) {
  return e.stepped ? tf : e.tension || e.cubicInterpolationMode === "monotone" ? ef : Pp;
}
function Xl(e, t, n = {}) {
  const i = e.length, { start: s = 0, end: o = i - 1 } = n, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), d = s < r && o < r || s > a && o > a;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? i + c - l : c - l
  };
}
function Ap(e, t, n, i) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Xl(s, n, i), d = Ep(o);
  let { move: u = !0, reverse: h } = i || {}, f, p, g;
  for (f = 0; f <= c; ++f)
    p = s[(a + (h ? c - f : f)) % r], !p.skip && (u ? (e.moveTo(p.x, p.y), u = !1) : d(e, g, p, h, o.stepped), g = p);
  return l && (p = s[(a + (h ? c : 0)) % r], d(e, g, p, h, o.stepped)), !!l;
}
function Dp(e, t, n, i) {
  const s = t.points, { count: o, start: r, ilen: a } = Xl(s, n, i), { move: l = !0, reverse: c } = i || {};
  let d = 0, u = 0, h, f, p, g, m, y;
  const _ = (M) => (r + (c ? a - M : M)) % o, v = () => {
    g !== m && (e.lineTo(d, m), e.lineTo(d, g), e.lineTo(d, y));
  };
  for (l && (f = s[_(0)], e.moveTo(f.x, f.y)), h = 0; h <= a; ++h) {
    if (f = s[_(h)], f.skip)
      continue;
    const M = f.x, x = f.y, k = M | 0;
    k === p ? (x < g ? g = x : x > m && (m = x), d = (u * d + M) / ++u) : (v(), e.lineTo(M, x), p = k, u = 0, g = m = x), y = x;
  }
  v();
}
function Bs(e) {
  const t = e.options, n = t.borderDash && t.borderDash.length;
  return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? Dp : Ap;
}
function Rp(e) {
  return e.stepped ? If : e.tension || e.cubicInterpolationMode === "monotone" ? Lf : Ae;
}
function Ip(e, t, n, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, n, i) && s.closePath()), Ul(e, t.options), e.stroke(s);
}
function Lp(e, t, n, i) {
  const { segments: s, options: o } = t, r = Bs(t);
  for (const a of s)
    Ul(e, o, a.style), e.beginPath(), r(e, t, a, {
      start: n,
      end: n + i - 1
    }) && e.closePath(), e.stroke();
}
const jp = typeof Path2D == "function";
function Np(e, t, n, i) {
  jp && !t.options.segment ? Ip(e, t, n, i) : Lp(e, t, n, i);
}
class se extends At {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      Of(this._points, i, t, s, n), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Wf(this, this.options.segment));
  }
  first() {
    const t = this.segments, n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments, n = this.points, i = t.length;
    return i && n[t[i - 1].end];
  }
  interpolate(t, n) {
    const i = this.options, s = t[n], o = this.points, r = Il(this, {
      property: n,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = Rp(i);
    let c, d;
    for (c = 0, d = r.length; c < d; ++c) {
      const { start: u, end: h } = r[c], f = o[u], p = o[h];
      if (f === p) {
        a.push(f);
        continue;
      }
      const g = Math.abs((s - f[n]) / (p[n] - f[n])), m = l(f, p, g, i.stepped);
      m[n] = t[n], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, i) {
    return Bs(this)(t, this, n, i);
  }
  path(t, n, i) {
    const s = this.segments, o = Bs(this);
    let r = this._loop;
    n = n || 0, i = i || this.points.length - n;
    for (const a of s)
      r &= o(t, this, a, {
        start: n,
        end: n + i - 1
      });
    return !!r;
  }
  draw(t, n, i, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Np(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
A(se, "id", "line"), A(se, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), A(se, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), A(se, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function ta(e, t, n, i) {
  const s = e.options, { [n]: o } = e.getProps([
    n
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Bn extends At {
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, n, i) {
    const s = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(t - o, 2) + Math.pow(n - r, 2) < Math.pow(s.hitRadius + s.radius, 2);
  }
  inXRange(t, n) {
    return ta(this, t, "x", n);
  }
  inYRange(t, n) {
    return ta(this, t, "y", n);
  }
  getCenterPoint(t) {
    const { x: n, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: n,
      y: i
    };
  }
  size(t) {
    t = t || this.options || {};
    let n = t.radius || 0;
    n = Math.max(n, n && t.hoverRadius || 0);
    const i = n && t.borderWidth || 0;
    return (n + i) * 2;
  }
  draw(t, n) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !Xn(this, n, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Fi(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
A(Bn, "id", "point"), A(Bn, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), A(Bn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Kl(e, t) {
  const { x: n, y: i, base: s, width: o, height: r } = e.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, d, u;
  return e.horizontal ? (u = r / 2, a = Math.min(n, s), l = Math.max(n, s), c = i - u, d = i + u) : (u = o / 2, a = n - u, l = n + u, c = Math.min(i, s), d = Math.max(i, s)), {
    left: a,
    top: c,
    right: l,
    bottom: d
  };
}
function fe(e, t, n, i) {
  return e ? 0 : Et(t, n, i);
}
function zp(e, t, n) {
  const i = e.options.borderWidth, s = e.borderSkipped, o = Ml(i);
  return {
    t: fe(s.top, o.top, 0, n),
    r: fe(s.right, o.right, 0, t),
    b: fe(s.bottom, o.bottom, 0, n),
    l: fe(s.left, o.left, 0, t)
  };
}
function Fp(e, t, n) {
  const { enableBorderRadius: i } = e.getProps([
    "enableBorderRadius"
  ]), s = e.options.borderRadius, o = pe(s), r = Math.min(t, n), a = e.borderSkipped, l = i || K(s);
  return {
    topLeft: fe(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: fe(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: fe(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: fe(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Bp(e) {
  const t = Kl(e), n = t.right - t.left, i = t.bottom - t.top, s = zp(e, n / 2, i / 2), o = Fp(e, n / 2, i / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: n,
      h: i,
      radius: o
    },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: n - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r))
      }
    }
  };
}
function Rs(e, t, n, i) {
  const s = t === null, o = n === null, a = e && !(s && o) && Kl(e, i);
  return a && (s || ne(t, a.left, a.right)) && (o || ne(n, a.top, a.bottom));
}
function Wp(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function $p(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Is(e, t, n = {}) {
  const i = e.x !== n.x ? -t : 0, s = e.y !== n.y ? -t : 0, o = (e.x + e.w !== n.x + n.w ? t : 0) - i, r = (e.y + e.h !== n.y + n.h ? t : 0) - s;
  return {
    x: e.x + i,
    y: e.y + s,
    w: e.w + o,
    h: e.h + r,
    radius: e.radius
  };
}
class Pi extends At {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: n, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: r } = Bp(this), a = Wp(r.radius) ? sn : $p;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, Is(r, n, o)), t.clip(), a(t, Is(o, -n, r)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, Is(o, n)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, n, i) {
    return Rs(this, t, n, i);
  }
  inXRange(t, n) {
    return Rs(this, t, null, n);
  }
  inYRange(t, n) {
    return Rs(this, null, t, n);
  }
  getCenterPoint(t) {
    const { x: n, y: i, base: s, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (n + s) / 2 : n,
      y: o ? i : (i + s) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
A(Pi, "id", "bar"), A(Pi, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), A(Pi, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
Object.freeze({
  __proto__: null,
  ArcElement: Ci,
  LineElement: se,
  PointElement: Bn,
  BarElement: Pi
});
const Ws = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
], ea = Ws.map((e) => e.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function ql(e) {
  return Ws[e % Ws.length];
}
function Gl(e) {
  return ea[e % ea.length];
}
function Vp(e, t) {
  return e.borderColor = ql(t), e.backgroundColor = Gl(t), ++t;
}
function Hp(e, t) {
  return e.backgroundColor = e.data.map(() => ql(t++)), t;
}
function Yp(e, t) {
  return e.backgroundColor = e.data.map(() => Gl(t++)), t;
}
function Up(e) {
  let t = 0;
  return (n, i) => {
    const s = e.getDatasetMeta(i).controller;
    s instanceof he ? t = Hp(n, t) : s instanceof Ze ? t = Yp(n, t) : s && (t = Vp(n, t));
  };
}
function na(e) {
  let t;
  for (t in e)
    if (e[t].borderColor || e[t].backgroundColor)
      return !0;
  return !1;
}
function Xp(e) {
  return e && (e.borderColor || e.backgroundColor);
}
var Kp = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(e, t, n) {
    if (!n.enabled)
      return;
    const { data: { datasets: i }, options: s } = e.config, { elements: o } = s;
    if (!n.forceOverride && (na(i) || Xp(s) || o && na(o)))
      return;
    const r = Up(e);
    i.forEach(r);
  }
};
function qp(e, t, n, i, s) {
  const o = s.samples || i;
  if (o >= n)
    return e.slice(t, t + n);
  const r = [], a = (n - 2) / (o - 2);
  let l = 0;
  const c = t + n - 1;
  let d = t, u, h, f, p, g;
  for (r[l++] = e[d], u = 0; u < o - 2; u++) {
    let m = 0, y = 0, _;
    const v = Math.floor((u + 1) * a) + 1 + t, M = Math.min(Math.floor((u + 2) * a) + 1, n) + t, x = M - v;
    for (_ = v; _ < M; _++)
      m += e[_].x, y += e[_].y;
    m /= x, y /= x;
    const k = Math.floor(u * a) + 1 + t, O = Math.min(Math.floor((u + 1) * a) + 1, n) + t, { x: C, y: D } = e[d];
    for (f = p = -1, _ = k; _ < O; _++)
      p = 0.5 * Math.abs((C - m) * (e[_].y - D) - (C - e[_].x) * (y - D)), p > f && (f = p, h = e[_], g = _);
    r[l++] = h, d = g;
  }
  return r[l++] = e[c], r;
}
function Gp(e, t, n, i) {
  let s = 0, o = 0, r, a, l, c, d, u, h, f, p, g;
  const m = [], y = t + n - 1, _ = e[t].x, M = e[y].x - _;
  for (r = t; r < t + n; ++r) {
    a = e[r], l = (a.x - _) / M * i, c = a.y;
    const x = l | 0;
    if (x === d)
      c < p ? (p = c, u = r) : c > g && (g = c, h = r), s = (o * s + a.x) / ++o;
    else {
      const k = r - 1;
      if (!nt(u) && !nt(h)) {
        const O = Math.min(u, h), C = Math.max(u, h);
        O !== f && O !== k && m.push({
          ...e[O],
          x: s
        }), C !== f && C !== k && m.push({
          ...e[C],
          x: s
        });
      }
      r > 0 && k !== f && m.push(e[k]), m.push(a), d = x, o = 0, p = g = c, u = h = f = r;
    }
  }
  return m;
}
function Ql(e) {
  if (e._decimated) {
    const t = e._data;
    delete e._decimated, delete e._data, Object.defineProperty(e, "data", {
      value: t
    });
  }
}
function ia(e) {
  e.data.datasets.forEach((t) => {
    Ql(t);
  });
}
function Qp(e, t) {
  const n = t.length;
  let i = 0, s;
  const { iScale: o } = e, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (i = Et(ie(t, o.axis, r).lo, 0, n - 1)), c ? s = Et(ie(t, o.axis, a).hi + 1, i, n) - i : s = n - i, {
    start: i,
    count: s
  };
}
var Jp = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (e, t, n) => {
    if (!n.enabled) {
      ia(e);
      return;
    }
    const i = e.width;
    e.data.datasets.forEach((s, o) => {
      const { _data: r, indexAxis: a } = s, l = e.getDatasetMeta(o), c = r || s.data;
      if (kn([
        a,
        e.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const d = e.scales[l.xAxisID];
      if (d.type !== "linear" && d.type !== "time" || e.options.parsing)
        return;
      let { start: u, count: h } = Qp(l, c);
      const f = n.threshold || 4 * i;
      if (h <= f) {
        Ql(s);
        return;
      }
      nt(r) && (s._data = c, delete s.data, Object.defineProperty(s, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(g) {
          this._data = g;
        }
      }));
      let p;
      switch (n.algorithm) {
        case "lttb":
          p = qp(c, u, h, i, n);
          break;
        case "min-max":
          p = Gp(c, u, h, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${n.algorithm}'`);
      }
      s._decimated = p;
    });
  },
  destroy(e) {
    ia(e);
  }
};
function Zp(e, t, n) {
  const i = e.segments, s = e.points, o = t.points, r = [];
  for (const a of i) {
    let { start: l, end: c } = a;
    c = mo(l, c, s);
    const d = $s(n, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const u = Il(t, d);
    for (const h of u) {
      const f = $s(n, o[h.start], o[h.end], h.loop), p = Rl(a, s, f);
      for (const g of p)
        r.push({
          source: g,
          target: h,
          start: {
            [n]: sa(d, f, "start", Math.max)
          },
          end: {
            [n]: sa(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function $s(e, t, n, i) {
  if (i)
    return;
  let s = t[e], o = n[e];
  return e === "angle" && (s = Ft(s), o = Ft(o)), {
    property: e,
    start: s,
    end: o
  };
}
function tm(e, t) {
  const { x: n = null, y: i = null } = e || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = mo(r, a, s);
    const l = s[r], c = s[a];
    i !== null ? (o.push({
      x: l.x,
      y: i
    }), o.push({
      x: c.x,
      y: i
    })) : n !== null && (o.push({
      x: n,
      y: l.y
    }), o.push({
      x: n,
      y: c.y
    }));
  }), o;
}
function mo(e, t, n) {
  for (; t > e; t--) {
    const i = n[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function sa(e, t, n, i) {
  return e && t ? i(e[n], t[n]) : e ? e[n] : t ? t[n] : 0;
}
function Jl(e, t) {
  let n = [], i = !1;
  return ut(e) ? (i = !0, n = e) : n = tm(e, t), n.length ? new se({
    points: n,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function oa(e) {
  return e && e.fill !== !1;
}
function em(e, t, n) {
  let s = e[t].fill;
  const o = [
    t
  ];
  let r;
  if (!n)
    return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!yt(s))
      return s;
    if (r = e[s], !r)
      return !1;
    if (r.visible)
      return s;
    o.push(s), s = r.fill;
  }
  return !1;
}
function nm(e, t, n) {
  const i = rm(e);
  if (K(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return yt(s) && Math.floor(s) === s ? im(i[0], t, s, n) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function im(e, t, n, i) {
  return (e === "-" || e === "+") && (n = t + n), n === t || n < 0 || n >= i ? !1 : n;
}
function sm(e, t) {
  let n = null;
  return e === "start" ? n = t.bottom : e === "end" ? n = t.top : K(e) ? n = t.getPixelForValue(e.value) : t.getBasePixel && (n = t.getBasePixel()), n;
}
function om(e, t, n) {
  let i;
  return e === "start" ? i = n : e === "end" ? i = t.options.reverse ? t.min : t.max : K(e) ? i = e.value : i = t.getBaseValue(), i;
}
function rm(e) {
  const t = e.options, n = t.fill;
  let i = W(n && n.target, n);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function am(e) {
  const { scale: t, index: n, line: i } = e, s = [], o = i.segments, r = i.points, a = lm(t, n);
  a.push(Jl({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      cm(s, r[d], a);
  }
  return new se({
    points: s,
    options: {}
  });
}
function lm(e, t) {
  const n = [], i = e.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || n.unshift(o.dataset);
  }
  return n;
}
function cm(e, t, n) {
  const i = [];
  for (let s = 0; s < n.length; s++) {
    const o = n[s], { first: r, last: a, point: l } = dm(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        i.unshift(l);
      else if (e.push(l), !a)
        break;
    }
  }
  e.push(...i);
}
function dm(e, t, n) {
  const i = e.interpolate(t, n);
  if (!i)
    return {};
  const s = i[n], o = e.segments, r = e.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], u = r[d.start][n], h = r[d.end][n];
    if (ne(s, u, h)) {
      a = s === u, l = s === h;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: i
  };
}
class Zl {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, n, i) {
    const { x: s, y: o, radius: r } = this;
    return n = n || {
      start: 0,
      end: pt
    }, t.arc(s, o, r, n.end, n.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: n, y: i, radius: s } = this, o = t.angle;
    return {
      x: n + Math.cos(o) * s,
      y: i + Math.sin(o) * s,
      angle: o
    };
  }
}
function um(e) {
  const { chart: t, fill: n, line: i } = e;
  if (yt(n))
    return hm(t, n);
  if (n === "stack")
    return am(e);
  if (n === "shape")
    return !0;
  const s = fm(e);
  return s instanceof Zl ? s : Jl(s, i);
}
function hm(e, t) {
  const n = e.getDatasetMeta(t);
  return n && e.isDatasetVisible(t) ? n.dataset : null;
}
function fm(e) {
  return (e.scale || {}).getPointPositionForValue ? pm(e) : gm(e);
}
function gm(e) {
  const { scale: t = {}, fill: n } = e, i = sm(n, t);
  if (yt(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function pm(e) {
  const { scale: t, fill: n } = e, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, r = om(n, t, o), a = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Zl({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < s; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function Ls(e, t, n) {
  const i = um(t), { line: s, scale: o, axis: r } = t, a = s.options, l = a.fill, c = a.backgroundColor, { above: d = c, below: u = c } = l || {};
  i && s.points.length && (ei(e, n), mm(e, {
    line: s,
    target: i,
    above: d,
    below: u,
    area: n,
    scale: o,
    axis: r
  }), ni(e));
}
function mm(e, t) {
  const { line: n, target: i, above: s, below: o, area: r, scale: a } = t, l = n._loop ? "angle" : t.axis;
  e.save(), l === "x" && o !== s && (ra(e, i, r.top), aa(e, {
    line: n,
    target: i,
    color: s,
    scale: a,
    property: l
  }), e.restore(), e.save(), ra(e, i, r.bottom)), aa(e, {
    line: n,
    target: i,
    color: o,
    scale: a,
    property: l
  }), e.restore();
}
function ra(e, t, n) {
  const { segments: i, points: s } = t;
  let o = !0, r = !1;
  e.beginPath();
  for (const a of i) {
    const { start: l, end: c } = a, d = s[l], u = s[mo(l, c, s)];
    o ? (e.moveTo(d.x, d.y), o = !1) : (e.lineTo(d.x, n), e.lineTo(d.x, d.y)), r = !!t.pathSegment(e, a, {
      move: r
    }), r ? e.closePath() : e.lineTo(u.x, n);
  }
  e.lineTo(t.first().x, n), e.closePath(), e.clip();
}
function aa(e, t) {
  const { line: n, target: i, property: s, color: o, scale: r } = t, a = Zp(n, i, s);
  for (const { source: l, target: c, start: d, end: u } of a) {
    const { style: { backgroundColor: h = o } = {} } = l, f = i !== !0;
    e.save(), e.fillStyle = h, bm(e, r, f && $s(s, d, u)), e.beginPath();
    const p = !!n.pathSegment(e, l);
    let g;
    if (f) {
      p ? e.closePath() : la(e, i, u, s);
      const m = !!i.pathSegment(e, c, {
        move: p,
        reverse: !0
      });
      g = p && m, g || la(e, i, d, s);
    }
    e.closePath(), e.fill(g ? "evenodd" : "nonzero"), e.restore();
  }
}
function bm(e, t, n) {
  const { top: i, bottom: s } = t.chart.chartArea, { property: o, start: r, end: a } = n || {};
  o === "x" && (e.beginPath(), e.rect(r, i, a - r, s - i), e.clip());
}
function la(e, t, n, i) {
  const s = t.interpolate(n, i);
  s && e.lineTo(s.x, s.y);
}
var tc = {
  id: "filler",
  afterDatasetsUpdate(e, t, n) {
    const i = (e.data.datasets || []).length, s = [];
    let o, r, a, l;
    for (r = 0; r < i; ++r)
      o = e.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof se && (l = {
        visible: e.isDatasetVisible(r),
        index: r,
        fill: nm(a, r, i),
        chart: e,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, s.push(l);
    for (r = 0; r < i; ++r)
      l = s[r], !(!l || l.fill === !1) && (l.fill = em(s, r, n.propagate));
  },
  beforeDraw(e, t, n) {
    const i = n.drawTime === "beforeDraw", s = e.getSortedVisibleDatasetMetas(), o = e.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      !a || (a.line.updateControlPoints(o, a.axis), i && a.fill && Ls(e.ctx, a, o));
    }
  },
  beforeDatasetsDraw(e, t, n) {
    if (n.drawTime !== "beforeDatasetsDraw")
      return;
    const i = e.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      oa(o) && Ls(e.ctx, o, e.chartArea);
    }
  },
  beforeDatasetDraw(e, t, n) {
    const i = t.meta.$filler;
    !oa(i) || n.drawTime !== "beforeDatasetDraw" || Ls(e.ctx, i, e.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const ca = (e, t) => {
  let { boxHeight: n = t, boxWidth: i = t } = e;
  return e.usePointStyle && (n = Math.min(n, t), i = e.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: n,
    itemHeight: Math.max(t, n)
  };
}, ym = (e, t) => e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class da extends At {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, n, i) {
    this.maxWidth = t, this.maxHeight = n, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = ft(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))), t.sort && (n = n.sort((i, s) => t.sort(i, s, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n;
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, s = wt(i.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = ca(i, o);
    let c, d;
    n.font = s.string, this.isHorizontal() ? (c = this.maxWidth, d = this._fitRows(r, o, a, l) + 10) : (d = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(d, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, n, i, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], d = s + a;
    let u = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let h = -1, f = -d;
    return this.legendItems.forEach((p, g) => {
      const m = i + n / 2 + o.measureText(p.text).width;
      (g === 0 || c[c.length - 1] + m + 2 * a > r) && (u += d, c[c.length - (g > 0 ? 0 : 1)] = 0, f += d, h++), l[g] = {
        left: 0,
        top: f,
        row: h,
        width: m,
        height: s
      }, c[c.length - 1] += m + a;
    }), u;
  }
  _fitCols(t, n, i, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = r - t;
    let u = a, h = 0, f = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, y) => {
      const { itemWidth: _, itemHeight: v } = xm(i, n, o, m, s);
      y > 0 && f + v + 2 * a > d && (u += h + a, c.push({
        width: h,
        height: f
      }), p += h + a, g++, h = f = 0), l[y] = {
        left: p,
        top: f,
        col: g,
        width: _,
        height: v
      }, h = Math.max(h, _), f += v + a;
    }), u += h, c.push({
      width: h,
      height: f
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: i, labels: { padding: s }, rtl: o } } = this, r = Je(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = Dt(i, this.left + s, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row && (a = c.row, l = Dt(i, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = Dt(i, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a && (a = c.col, l = Dt(i, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ei(t, this), this._draw(), ni(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: s } = this, { align: o, labels: r } = t, a = xt.color, l = Je(t.rtl, this.left, this.width), c = wt(r.font), { padding: d } = r, u = c.size, h = u / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = ca(r, u), y = function(k, O, C) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      s.save();
      const D = W(C.lineWidth, 1);
      if (s.fillStyle = W(C.fillStyle, a), s.lineCap = W(C.lineCap, "butt"), s.lineDashOffset = W(C.lineDashOffset, 0), s.lineJoin = W(C.lineJoin, "miter"), s.lineWidth = D, s.strokeStyle = W(C.strokeStyle, a), s.setLineDash(W(C.lineDash, [])), r.usePointStyle) {
        const F = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: C.pointStyle,
          rotation: C.rotation,
          borderWidth: D
        }, z = l.xPlus(k, p / 2), Y = O + h;
        vl(s, F, z, Y, r.pointStyleWidth && p);
      } else {
        const F = O + Math.max((u - g) / 2, 0), z = l.leftForLtr(k, p), Y = pe(C.borderRadius);
        s.beginPath(), Object.values(Y).some((tt) => tt !== 0) ? sn(s, {
          x: z,
          y: F,
          w: p,
          h: g,
          radius: Y
        }) : s.rect(z, F, p, g), s.fill(), D !== 0 && s.stroke();
      }
      s.restore();
    }, _ = function(k, O, C) {
      ze(s, C.text, k, O + m / 2, c, {
        strikethrough: C.hidden,
        textAlign: l.textAlign(C.textAlign)
      });
    }, v = this.isHorizontal(), M = this._computeTitleHeight();
    v ? f = {
      x: Dt(o, this.left + d, this.right - i[0]),
      y: this.top + d + M,
      line: 0
    } : f = {
      x: this.left + d,
      y: Dt(o, this.top + M + d, this.bottom - n[0].height),
      line: 0
    }, El(this.ctx, t.textDirection);
    const x = m + d;
    this.legendItems.forEach((k, O) => {
      s.strokeStyle = k.fontColor, s.fillStyle = k.fontColor;
      const C = s.measureText(k.text).width, D = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), F = p + h + C;
      let z = f.x, Y = f.y;
      l.setWidth(this.width), v ? O > 0 && z + F + d > this.right && (Y = f.y += x, f.line++, z = f.x = Dt(o, this.left + d, this.right - i[f.line])) : O > 0 && Y + x > this.bottom && (z = f.x = z + n[f.line].width + d, f.line++, Y = f.y = Dt(o, this.top + M + d, this.bottom - n[f.line].height));
      const tt = l.x(z);
      if (y(tt, Y, k), z = Vh(D, z + p + h, v ? z + F : this.right, t.rtl), _(l.x(z), Y, k), v)
        f.x += F + d;
      else if (typeof k.text != "string") {
        const it = c.lineHeight;
        f.y += ec(k, it);
      } else
        f.y += x;
    }), Al(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, n = t.title, i = wt(n.font), s = Ct(n.padding);
    if (!n.display)
      return;
    const o = Je(t.rtl, this.left, this.width), r = this.ctx, a = n.position, l = i.size / 2, c = s.top + l;
    let d, u = this.left, h = this.width;
    if (this.isHorizontal())
      h = Math.max(...this.lineWidths), d = this.top + c, u = Dt(t.align, u, this.right - h);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      d = c + Dt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = Dt(a, u, u + h);
    r.textAlign = o.textAlign(ao(a)), r.textBaseline = "middle", r.strokeStyle = n.color, r.fillStyle = n.color, r.font = i.string, ze(r, n.text, f, d, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, n = wt(t.font), i = Ct(t.padding);
    return t.display ? n.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, n) {
    let i, s, o;
    if (ne(t, this.left, this.right) && ne(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], ne(t, s.left, s.left + s.width) && ne(n, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!Mm(t.type, n))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = ym(s, i);
      s && !o && ft(n.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && ft(n.onHover, [
        t,
        i,
        this
      ], this);
    } else
      i && ft(n.onClick, [
        t,
        i,
        this
      ], this);
  }
}
function xm(e, t, n, i, s) {
  const o = _m(i, e, t, n), r = vm(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function _m(e, t, n, i) {
  let s = e.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + n.size / 2 + i.measureText(s).width;
}
function vm(e, t, n) {
  let i = e;
  return typeof t.text != "string" && (i = ec(t, n)), i;
}
function ec(e, t) {
  const n = e.text ? e.text.length + 0.5 : 0;
  return t * n;
}
function Mm(e, t) {
  return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"));
}
var nc = {
  id: "legend",
  _element: da,
  start(e, t, n) {
    const i = e.legend = new da({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    Rt.configure(e, i, n), Rt.addBox(e, i);
  },
  stop(e) {
    Rt.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const i = e.legend;
    Rt.configure(e, i, n), i.options = n;
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex, s = n.chart;
      s.isDatasetVisible(i) ? (s.hide(i), t.hidden = !0) : (s.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets, { labels: { usePointStyle: n, pointStyle: i, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = e.legend.options;
        return e._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(n ? 0 : void 0), d = Ct(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (d.width + d.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(e)
    }
  }
};
class bo extends At {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, n) {
    const i = this.options;
    if (this.left = 0, this.top = 0, !i.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = n;
    const s = ut(i.text) ? i.text.length : 1;
    this._padding = Ct(i.padding);
    const o = s * wt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: n, left: i, bottom: s, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, u;
    return this.isHorizontal() ? (d = Dt(a, i, o), u = n + t, c = o - i) : (r.position === "left" ? (d = i + t, u = Dt(a, s, n), l = ot * -0.5) : (d = o - t, u = Dt(a, n, s), l = ot * 0.5), c = s - n), {
      titleX: d,
      titleY: u,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, n = this.options;
    if (!n.display)
      return;
    const i = wt(n.font), o = i.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    ze(t, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: c,
      textAlign: ao(n.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function wm(e, t) {
  const n = new bo({
    ctx: e.ctx,
    options: t,
    chart: e
  });
  Rt.configure(e, n, t), Rt.addBox(e, n), e.titleBlock = n;
}
var ic = {
  id: "title",
  _element: bo,
  start(e, t, n) {
    wm(e, n);
  },
  stop(e) {
    const t = e.titleBlock;
    Rt.removeBox(e, t), delete e.titleBlock;
  },
  beforeUpdate(e, t, n) {
    const i = e.titleBlock;
    Rt.configure(e, i, n), i.options = n;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const _i = /* @__PURE__ */ new WeakMap();
var Sm = {
  id: "subtitle",
  start(e, t, n) {
    const i = new bo({
      ctx: e.ctx,
      options: n,
      chart: e
    });
    Rt.configure(e, i, n), Rt.addBox(e, i), _i.set(e, i);
  },
  stop(e) {
    Rt.removeBox(e, _i.get(e)), _i.delete(e);
  },
  beforeUpdate(e, t, n) {
    const i = _i.get(e);
    Rt.configure(e, i, n), i.options = n;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Tn = {
  average(e) {
    if (!e.length)
      return !1;
    let t, n, i = 0, s = 0, o = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const r = e[t].element;
      if (r && r.hasValue()) {
        const a = r.tooltipPosition();
        i += a.x, s += a.y, ++o;
      }
    }
    return {
      x: i / o,
      y: s / o
    };
  },
  nearest(e, t) {
    if (!e.length)
      return !1;
    let n = t.x, i = t.y, s = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = e.length; o < r; ++o) {
      const l = e[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), d = Yn(t, c);
        d < s && (s = d, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      n = l.x, i = l.y;
    }
    return {
      x: n,
      y: i
    };
  }
};
function Ut(e, t) {
  return t && (ut(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function te(e) {
  return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e;
}
function km(e, t) {
  const { element: n, datasetIndex: i, index: s } = t, o = e.getDatasetMeta(i).controller, { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(s),
    raw: e.data.datasets[i].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: n
  };
}
function ua(e, t) {
  const n = e.chart.ctx, { body: i, footer: s, title: o } = e, { boxWidth: r, boxHeight: a } = t, l = wt(t.bodyFont), c = wt(t.titleFont), d = wt(t.footerFont), u = o.length, h = s.length, f = i.length, p = Ct(t.padding);
  let g = p.height, m = 0, y = i.reduce((M, x) => M + x.before.length + x.lines.length + x.after.length, 0);
  if (y += e.beforeBody.length + e.afterBody.length, u && (g += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const M = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += f * M + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
  }
  h && (g += t.footerMarginTop + h * d.lineHeight + (h - 1) * t.footerSpacing);
  let _ = 0;
  const v = function(M) {
    m = Math.max(m, n.measureText(M).width + _);
  };
  return n.save(), n.font = c.string, dt(e.title, v), n.font = l.string, dt(e.beforeBody.concat(e.afterBody), v), _ = t.displayColors ? r + 2 + t.boxPadding : 0, dt(i, (M) => {
    dt(M.before, v), dt(M.lines, v), dt(M.after, v);
  }), _ = 0, n.font = d.string, dt(e.footer, v), n.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function Om(e, t) {
  const { y: n, height: i } = t;
  return n < i / 2 ? "top" : n > e.height - i / 2 ? "bottom" : "center";
}
function Tm(e, t, n, i) {
  const { x: s, width: o } = i, r = n.caretSize + n.caretPadding;
  if (e === "left" && s + o + r > t.width || e === "right" && s - o - r < 0)
    return !0;
}
function Cm(e, t, n, i) {
  const { x: s, width: o } = n, { width: r, chartArea: { left: a, right: l } } = e;
  let c = "center";
  return i === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), Tm(c, e, t, n) && (c = "center"), c;
}
function ha(e, t, n) {
  const i = n.yAlign || t.yAlign || Om(e, n);
  return {
    xAlign: n.xAlign || t.xAlign || Cm(e, t, n, i),
    yAlign: i
  };
}
function Pm(e, t) {
  let { x: n, width: i } = e;
  return t === "right" ? n -= i : t === "center" && (n -= i / 2), n;
}
function Em(e, t, n) {
  let { y: i, height: s } = e;
  return t === "top" ? i += n : t === "bottom" ? i -= s + n : i -= s / 2, i;
}
function fa(e, t, n, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = e, { xAlign: a, yAlign: l } = n, c = s + o, { topLeft: d, topRight: u, bottomLeft: h, bottomRight: f } = pe(r);
  let p = Pm(t, a);
  const g = Em(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(d, h) + s : a === "right" && (p += Math.max(u, f) + s), {
    x: Et(p, 0, i.width - t.width),
    y: Et(g, 0, i.height - t.height)
  };
}
function vi(e, t, n) {
  const i = Ct(n.padding);
  return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - i.right : e.x + i.left;
}
function ga(e) {
  return Ut([], te(e));
}
function Am(e, t, n) {
  return Me(e, {
    tooltip: t,
    tooltipItems: n,
    type: "tooltip"
  });
}
function pa(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
const sc = {
  beforeTitle: Jt,
  title(e) {
    if (e.length > 0) {
      const t = e[0], n = t.chart.data.labels, i = n ? n.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return n[t.dataIndex];
    }
    return "";
  },
  afterTitle: Jt,
  beforeBody: Jt,
  beforeLabel: Jt,
  label(e) {
    if (this && this.options && this.options.mode === "dataset")
      return e.label + ": " + e.formattedValue || e.formattedValue;
    let t = e.dataset.label || "";
    t && (t += ": ");
    const n = e.formattedValue;
    return nt(n) || (t += n), t;
  },
  labelColor(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(e) {
    const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
    return {
      pointStyle: n.pointStyle,
      rotation: n.rotation
    };
  },
  afterLabel: Jt,
  afterBody: Jt,
  beforeFooter: Jt,
  footer: Jt,
  afterFooter: Jt
};
function jt(e, t, n, i) {
  const s = e[t].call(n, i);
  return typeof s > "u" ? sc[t].call(n, i) : s;
}
class Vs extends At {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const n = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && n.options.animation && i.animations, o = new go(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Am(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, n) {
    const { callbacks: i } = n, s = jt(i, "beforeTitle", this, t), o = jt(i, "title", this, t), r = jt(i, "afterTitle", this, t);
    let a = [];
    return a = Ut(a, te(s)), a = Ut(a, te(o)), a = Ut(a, te(r)), a;
  }
  getBeforeBody(t, n) {
    return ga(jt(n.callbacks, "beforeBody", this, t));
  }
  getBody(t, n) {
    const { callbacks: i } = n, s = [];
    return dt(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = pa(i, o);
      Ut(r.before, te(jt(a, "beforeLabel", this, o))), Ut(r.lines, jt(a, "label", this, o)), Ut(r.after, te(jt(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, n) {
    return ga(jt(n.callbacks, "afterBody", this, t));
  }
  getFooter(t, n) {
    const { callbacks: i } = n, s = jt(i, "beforeFooter", this, t), o = jt(i, "footer", this, t), r = jt(i, "afterFooter", this, t);
    let a = [];
    return a = Ut(a, te(s)), a = Ut(a, te(o)), a = Ut(a, te(r)), a;
  }
  _createItems(t) {
    const n = this._active, i = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = n.length; l < c; ++l)
      a.push(km(this.chart, n[l]));
    return t.filter && (a = a.filter((d, u, h) => t.filter(d, u, h, i))), t.itemSort && (a = a.sort((d, u) => t.itemSort(d, u, i))), dt(a, (d) => {
      const u = pa(t.callbacks, d);
      s.push(jt(u, "labelColor", this, d)), o.push(jt(u, "labelPointStyle", this, d)), r.push(jt(u, "labelTextColor", this, d));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()), s = this._active;
    let o, r = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = Tn[i.position].call(this, s, this._eventPosition);
      r = this._createItems(i), this.title = this.getTitle(r, i), this.beforeBody = this.getBeforeBody(r, i), this.body = this.getBody(r, i), this.afterBody = this.getAfterBody(r, i), this.footer = this.getFooter(r, i);
      const l = this._size = ua(this, i), c = Object.assign({}, a, l), d = ha(this.chart, i, c), u = fa(i, c, d, this.chart);
      this.xAlign = d.xAlign, this.yAlign = d.yAlign, o = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: n
    });
  }
  drawCaret(t, n, i, s) {
    const o = this.getCaretPosition(t, i, s);
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, n, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = i, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = pe(a), { x: h, y: f } = t, { width: p, height: g } = n;
    let m, y, _, v, M, x;
    return o === "center" ? (M = f + g / 2, s === "left" ? (m = h, y = m - r, v = M + r, x = M - r) : (m = h + p, y = m + r, v = M - r, x = M + r), _ = m) : (s === "left" ? y = h + Math.max(l, d) + r : s === "right" ? y = h + p - Math.max(c, u) - r : y = this.caretX, o === "top" ? (v = f, M = v - r, m = y - r, _ = y + r) : (v = f + g, M = v + r, m = y + r, _ = y - r), x = v), {
      x1: m,
      x2: y,
      x3: _,
      y1: v,
      y2: M,
      y3: x
    };
  }
  drawTitle(t, n, i) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = Je(i.rtl, this.x, this.width);
      for (t.x = vi(this, i.titleAlign, i), n.textAlign = c.textAlign(i.titleAlign), n.textBaseline = "middle", r = wt(i.titleFont), a = i.titleSpacing, n.fillStyle = i.titleColor, n.font = r.string, l = 0; l < o; ++l)
        n.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, i, s, o) {
    const r = this.labelColors[i], a = this.labelPointStyles[i], { boxHeight: l, boxWidth: c, boxPadding: d } = o, u = wt(o.bodyFont), h = vi(this, "left", o), f = s.x(h), p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, g = n.y + p;
    if (o.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, y = s.leftForLtr(f, c) + c / 2, _ = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Fi(t, m, y, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Fi(t, m, y, _);
    } else {
      t.lineWidth = K(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const m = s.leftForLtr(f, c - d), y = s.leftForLtr(s.xPlus(f, 1), c - d - 2), _ = pe(r.borderRadius);
      Object.values(_).some((v) => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, sn(t, {
        x: m,
        y: g,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), sn(t, {
        x: y,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, g, c, l), t.strokeRect(m, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(y, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, n, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = i, u = wt(i.bodyFont);
    let h = u.lineHeight, f = 0;
    const p = Je(i.rtl, this.x, this.width), g = function(C) {
      n.fillText(C, p.x(t.x + f), t.y + h / 2), t.y += h + o;
    }, m = p.textAlign(r);
    let y, _, v, M, x, k, O;
    for (n.textAlign = r, n.textBaseline = "middle", n.font = u.string, t.x = vi(this, m, i), n.fillStyle = i.bodyColor, dt(this.beforeBody, g), f = a && m !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, M = 0, k = s.length; M < k; ++M) {
      for (y = s[M], _ = this.labelTextColors[M], n.fillStyle = _, dt(y.before, g), v = y.lines, a && v.length && (this._drawColorBox(n, t, M, p, i), h = Math.max(u.lineHeight, l)), x = 0, O = v.length; x < O; ++x)
        g(v[x]), h = u.lineHeight;
      dt(y.after, g);
    }
    f = 0, h = u.lineHeight, dt(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, n, i) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = Je(i.rtl, this.x, this.width);
      for (t.x = vi(this, i.footerAlign, i), t.y += i.footerMarginTop, n.textAlign = l.textAlign(i.footerAlign), n.textBaseline = "middle", r = wt(i.footerFont), n.fillStyle = i.footerColor, n.font = r.string, a = 0; a < o; ++a)
        n.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, n, i, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = i, { topLeft: u, topRight: h, bottomLeft: f, bottomRight: p } = pe(s.cornerRadius);
    n.fillStyle = s.backgroundColor, n.strokeStyle = s.borderColor, n.lineWidth = s.borderWidth, n.beginPath(), n.moveTo(a + u, l), r === "top" && this.drawCaret(t, n, i, s), n.lineTo(a + c - h, l), n.quadraticCurveTo(a + c, l, a + c, l + h), r === "center" && o === "right" && this.drawCaret(t, n, i, s), n.lineTo(a + c, l + d - p), n.quadraticCurveTo(a + c, l + d, a + c - p, l + d), r === "bottom" && this.drawCaret(t, n, i, s), n.lineTo(a + f, l + d), n.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, n, i, s), n.lineTo(a, l + u), n.quadraticCurveTo(a, l, a + u, l), n.closePath(), n.fill(), s.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const r = Tn[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = ua(this, t), l = Object.assign({}, r, this._size), c = ha(n, t, l), d = fa(t, l, c, n);
      (s._to !== d.x || o._to !== d.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(n);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const r = Ct(n.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    n.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, n), El(t, n.textDirection), o.y += r.top, this.drawTitle(o, t, n), this.drawBody(o, t, n), this.drawFooter(o, t, n), Al(t, n.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const i = this._active, s = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !Li(i, s), r = this._positionChanged(s, n);
    (o || r) && (this._active = s, this._eventPosition = n, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, n, i), a = this._positionChanged(r, t), l = n || !Li(r, o) || a;
    return l && (this._active = r, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, n))), l;
  }
  _getActiveElements(t, n, i, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return n;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: s, options: o } = this, r = Tn[o.position].call(this, t, n);
    return r !== !1 && (i !== r.x || s !== r.y);
  }
}
A(Vs, "positioners", Tn);
var oc = {
  id: "tooltip",
  _element: Vs,
  positioners: Tn,
  afterInit(e, t, n) {
    n && (e.tooltip = new Vs({
      chart: e,
      options: n
    }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = {
        tooltip: t
      };
      if (e.notifyPlugins("beforeTooltipDraw", {
        ...n,
        cancelable: !0
      }) === !1)
        return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: sc
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
Object.freeze({
  __proto__: null,
  Colors: Kp,
  Decimation: Jp,
  Filler: tc,
  Legend: nc,
  SubTitle: Sm,
  Title: ic,
  Tooltip: oc
});
const Dm = (e, t, n, i) => (typeof t == "string" ? (n = e.push(t) - 1, i.unshift({
  index: n,
  label: t
})) : isNaN(t) && (n = null), n);
function Rm(e, t, n, i) {
  const s = e.indexOf(t);
  if (s === -1)
    return Dm(e, t, n, i);
  const o = e.lastIndexOf(t);
  return s !== o ? n : s;
}
const Im = (e, t) => e === null ? null : Et(Math.round(e), 0, t);
function ma(e) {
  const t = this.getLabels();
  return e >= 0 && e < t.length ? t[e] : e;
}
class Yi extends Fe {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const i = this.getLabels();
      for (const { index: s, label: o } of n)
        i[s] === o && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (nt(t))
      return null;
    const i = this.getLabels();
    return n = isFinite(n) && i[n] === t ? n : Rm(i, t, W(n, t), this._addedLabels), Im(n, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (i = 0), n || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.min, n = this.max, i = this.options.offset, s = [];
    let o = this.getLabels();
    o = t === 0 && n === o.length - 1 ? o : o.slice(t, n + 1), this._valueRange = Math.max(o.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? 0.5 : 0);
    for (let r = t; r <= n; r++)
      s.push({
        value: r
      });
    return s;
  }
  getLabelForValue(t) {
    return ma.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
A(Yi, "id", "category"), A(Yi, "defaults", {
  ticks: {
    callback: ma
  }
});
function Lm(e, t) {
  const n = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: u, includeBounds: h } = e, f = o || 1, p = d - 1, { min: g, max: m } = t, y = !nt(r), _ = !nt(a), v = !nt(c), M = (m - g) / (u + 1);
  let x = fr((m - g) / p / f) * f, k, O, C, D;
  if (x < 1e-14 && !y && !_)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  D = Math.ceil(m / x) - Math.floor(g / x), D > p && (x = fr(D * x / p / f) * f), nt(l) || (k = Math.pow(10, l), x = Math.ceil(x * k) / k), s === "ticks" ? (O = Math.floor(g / x) * x, C = Math.ceil(m / x) * x) : (O = g, C = m), y && _ && o && jh((a - r) / o, x / 1e3) ? (D = Math.round(Math.min((a - r) / x, d)), x = (a - r) / D, O = r, C = a) : v ? (O = y ? r : O, C = _ ? a : C, D = c - 1, x = (C - O) / D) : (D = (C - O) / x, Dn(D, Math.round(D), x / 1e3) ? D = Math.round(D) : D = Math.ceil(D));
  const F = Math.max(gr(x), gr(O));
  k = Math.pow(10, nt(l) ? F : l), O = Math.round(O * k) / k, C = Math.round(C * k) / k;
  let z = 0;
  for (y && (h && O !== r ? (n.push({
    value: r
  }), O < r && z++, Dn(Math.round((O + z * x) * k) / k, r, ba(r, M, e)) && z++) : O < r && z++); z < D; ++z)
    n.push({
      value: Math.round((O + z * x) * k) / k
    });
  return _ && h && C !== a ? n.length && Dn(n[n.length - 1].value, a, ba(a, M, e)) ? n[n.length - 1].value = a : n.push({
    value: a
  }) : (!_ || C === a) && n.push({
    value: C
  }), n;
}
function ba(e, t, { horizontal: n, minRotation: i }) {
  const s = Tt(i), o = (n ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + e).length;
  return Math.min(t / o, r);
}
class Ui extends Fe {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    return nt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: n, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = n ? s : l, a = (l) => o = i ? o : l;
    if (t) {
      const l = qt(s), c = qt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    this.min = s, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: i } = t, s;
    return i ? (s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), n = n || 11), n && (s = Math.min(n, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, n = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
      maxTicks: i,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: n.precision,
      step: n.stepSize,
      count: n.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: n.minRotation || 0,
      includeBounds: n.includeBounds !== !1
    }, o = this._range || this, r = Lm(s, o);
    return t.bounds === "ticks" && ul(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let n = this.min, i = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (i - n) / Math.max(t.length - 1, 1) / 2;
      n -= s, i += s;
    }
    this._startValue = n, this._endValue = i, this._valueRange = i - n;
  }
  getLabelForValue(t) {
    return ti(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Xi extends Ui {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = yt(t) ? t : 0, this.max = yt(n) ? n : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), n = t ? this.width : this.height, i = Tt(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
A(Xi, "id", "linear"), A(Xi, "defaults", {
  ticks: {
    callback: os.formatters.numeric
  }
});
const qn = (e) => Math.floor(ue(e)), Pe = (e, t) => Math.pow(10, qn(e) + t);
function ya(e) {
  return e / Math.pow(10, qn(e)) === 1;
}
function xa(e, t, n) {
  const i = Math.pow(10, n), s = Math.floor(e / i);
  return Math.ceil(t / i) - s;
}
function jm(e, t) {
  const n = t - e;
  let i = qn(n);
  for (; xa(e, t, i) > 10; )
    i++;
  for (; xa(e, t, i) < 10; )
    i--;
  return Math.min(i, qn(e));
}
function Nm(e, { min: t, max: n }) {
  t = zt(e.min, t);
  const i = [], s = qn(t);
  let o = jm(t, n), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * r) / r, d = Math.floor((t - l) / a / 10) * a * 10;
  let u = Math.floor((c - d) / Math.pow(10, o)), h = zt(e.min, Math.round((l + d + u * Math.pow(10, o)) * r) / r);
  for (; h < n; )
    i.push({
      value: h,
      major: ya(h),
      significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, r = o >= 0 ? 1 : r), h = Math.round((l + d + u * Math.pow(10, o)) * r) / r;
  const f = zt(e.max, h);
  return i.push({
    value: f,
    major: ya(f),
    significand: u
  }), i;
}
class Hs extends Fe {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, n) {
    const i = Ui.prototype.parse.apply(this, [
      t,
      n
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return yt(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    this.min = yt(t) ? Math.max(0, t) : null, this.max = yt(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !yt(this._userMin) && (this.min = t === Pe(this.min, 0) ? Pe(this.min, -1) : Pe(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let i = this.min, s = this.max;
    const o = (a) => i = t ? i : a, r = (a) => s = n ? s : a;
    i === s && (i <= 0 ? (o(1), r(10)) : (o(Pe(i, -1)), r(Pe(s, 1)))), i <= 0 && o(Pe(s, -1)), s <= 0 && r(Pe(i, 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.options, n = {
      min: this._userMin,
      max: this._userMax
    }, i = Nm(n, this);
    return t.bounds === "ticks" && ul(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : ti(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = ue(t), this._valueRange = ue(this.max) - ue(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (ue(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
A(Hs, "id", "logarithmic"), A(Hs, "defaults", {
  ticks: {
    callback: os.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Ys(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = Ct(t.backdropPadding);
    return W(t.font && t.font.size, xt.font.size) + n.height;
  }
  return 0;
}
function zm(e, t, n) {
  return n = ut(n) ? n : [
    n
  ], {
    w: Zh(e, t.string, n),
    h: n.length * t.lineHeight
  };
}
function _a(e, t, n, i, s) {
  return e === i || e === s ? {
    start: t - n / 2,
    end: t + n / 2
  } : e < i || e > s ? {
    start: t - n,
    end: t
  } : {
    start: t,
    end: t + n
  };
}
function Fm(e) {
  const t = {
    l: e.left + e._padding.left,
    r: e.right - e._padding.right,
    t: e.top + e._padding.top,
    b: e.bottom - e._padding.bottom
  }, n = Object.assign({}, t), i = [], s = [], o = e._pointLabels.length, r = e.options.pointLabels, a = r.centerPointLabels ? ot / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(e.getPointLabelContext(l));
    s[l] = c.padding;
    const d = e.getPointPosition(l, e.drawingArea + s[l], a), u = wt(c.font), h = zm(e.ctx, u, e._pointLabels[l]);
    i[l] = h;
    const f = Ft(e.getIndexAngle(l) + a), p = Math.round(ss(f)), g = _a(p, d.x, h.w, 0, 180), m = _a(p, d.y, h.h, 90, 270);
    Bm(n, t, f, g, m);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), e._pointLabelItems = Wm(e, i, s);
}
function Bm(e, t, n, i, s) {
  const o = Math.abs(Math.sin(n)), r = Math.abs(Math.cos(n));
  let a = 0, l = 0;
  i.start < t.l ? (a = (t.l - i.start) / o, e.l = Math.min(e.l, t.l - a)) : i.end > t.r && (a = (i.end - t.r) / o, e.r = Math.max(e.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, e.t = Math.min(e.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, e.b = Math.max(e.b, t.b + l));
}
function Wm(e, t, n) {
  const i = [], s = e._pointLabels.length, o = e.options, r = Ys(o) / 2, a = e.drawingArea, l = o.pointLabels.centerPointLabels ? ot / s : 0;
  for (let c = 0; c < s; c++) {
    const d = e.getPointPosition(c, a + r + n[c], l), u = Math.round(ss(Ft(d.angle + Mt))), h = t[c], f = Hm(d.y, h.h, u), p = $m(u), g = Vm(d.x, h.w, p);
    i.push({
      x: d.x,
      y: f,
      textAlign: p,
      left: g,
      top: f,
      right: g + h.w,
      bottom: f + h.h
    });
  }
  return i;
}
function $m(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function Vm(e, t, n) {
  return n === "right" ? e -= t : n === "center" && (e -= t / 2), e;
}
function Hm(e, t, n) {
  return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t), e;
}
function Ym(e, t) {
  const { ctx: n, options: { pointLabels: i } } = e;
  for (let s = t - 1; s >= 0; s--) {
    const o = i.setContext(e.getPointLabelContext(s)), r = wt(o.font), { x: a, y: l, textAlign: c, left: d, top: u, right: h, bottom: f } = e._pointLabelItems[s], { backdropColor: p } = o;
    if (!nt(p)) {
      const g = pe(o.borderRadius), m = Ct(o.backdropPadding);
      n.fillStyle = p;
      const y = d - m.left, _ = u - m.top, v = h - d + m.width, M = f - u + m.height;
      Object.values(g).some((x) => x !== 0) ? (n.beginPath(), sn(n, {
        x: y,
        y: _,
        w: v,
        h: M,
        radius: g
      }), n.fill()) : n.fillRect(y, _, v, M);
    }
    ze(n, e._pointLabels[s], a, l + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function rc(e, t, n, i) {
  const { ctx: s } = e;
  if (n)
    s.arc(e.xCenter, e.yCenter, t, 0, pt);
  else {
    let o = e.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      o = e.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function Um(e, t, n, i, s) {
  const o = e.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !i || !a || !l || n < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash), o.lineDashOffset = s.dashOffset, o.beginPath(), rc(e, n, r, i), o.closePath(), o.stroke(), o.restore());
}
function Xm(e, t, n) {
  return Me(e, {
    label: n,
    index: t,
    type: "pointLabel"
  });
}
class Cn extends Ui {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Ct(Ys(this.options) / 2), n = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + n / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(n, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    this.min = yt(t) && !isNaN(t) ? t : 0, this.max = yt(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ys(this.options));
  }
  generateTickLabels(t) {
    Ui.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((n, i) => {
      const s = ft(this.options.pointLabels.callback, [
        n,
        i
      ], this);
      return s || s === 0 ? s : "";
    }).filter((n, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Fm(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, i, s) {
    this.xCenter += Math.floor((t - n) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, i, s));
  }
  getIndexAngle(t) {
    const n = pt / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return Ft(t * n + Tt(i));
  }
  getDistanceFromCenterForValue(t) {
    if (nt(t))
      return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (nt(t))
      return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const i = n[t];
      return Xm(this.getContext(), t, i);
    }
  }
  getPointPosition(t, n, i = 0) {
    const s = this.getIndexAngle(t) - Mt + i;
    return {
      x: Math.cos(s) * n + this.xCenter,
      y: Math.sin(s) * n + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: n,
      top: i,
      right: s,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: n } } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(), i.beginPath(), rc(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, n = this.options, { angleLines: i, grid: s, border: o } = n, r = this._pointLabels.length;
    let a, l, c;
    if (n.pointLabels.display && Ym(this, r), s.display && this.ticks.forEach((d, u) => {
      if (u !== 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const h = this.getContext(u), f = s.setContext(h), p = o.setContext(h);
        Um(this, f, l, r, p);
      }
    }), i.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const d = i.setContext(this.getPointLabelContext(a)), { color: u, lineWidth: h } = d;
        !h || !u || (t.lineWidth = h, t.strokeStyle = u, t.setLineDash(d.borderDash), t.lineDashOffset = d.borderDashOffset, l = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, n = this.options, i = n.ticks;
    if (!i.display)
      return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && !n.reverse)
        return;
      const c = i.setContext(this.getContext(l)), d = wt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = d.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const u = Ct(c.backdropPadding);
        t.fillRect(-r / 2 - u.left, -o - d.size / 2 - u.top, r + u.width, d.size + u.height);
      }
      ze(t, a.label, 0, -o, d, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
A(Cn, "id", "radialLinear"), A(Cn, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: os.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), A(Cn, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), A(Cn, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const as = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, Nt = Object.keys(as);
function Km(e, t) {
  return e - t;
}
function va(e, t) {
  if (nt(t))
    return null;
  const n = e._adapter, { parser: i, round: s, isoWeekday: o } = e._parseOpts;
  let r = t;
  return typeof i == "function" && (r = i(r)), yt(r) || (r = typeof i == "string" ? n.parse(r, i) : n.parse(r)), r === null ? null : (s && (r = s === "week" && (nn(o) || o === !0) ? n.startOf(r, "isoWeek", o) : n.startOf(r, s)), +r);
}
function Ma(e, t, n, i) {
  const s = Nt.length;
  for (let o = Nt.indexOf(e); o < s - 1; ++o) {
    const r = as[Nt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= i)
      return Nt[o];
  }
  return Nt[s - 1];
}
function qm(e, t, n, i, s) {
  for (let o = Nt.length - 1; o >= Nt.indexOf(n); o--) {
    const r = Nt[o];
    if (as[r].common && e._adapter.diff(s, i, r) >= t - 1)
      return r;
  }
  return Nt[n ? Nt.indexOf(n) : 0];
}
function Gm(e) {
  for (let t = Nt.indexOf(e) + 1, n = Nt.length; t < n; ++t)
    if (as[Nt[t]].common)
      return Nt[t];
}
function wa(e, t, n) {
  if (!n)
    e[t] = !0;
  else if (n.length) {
    const { lo: i, hi: s } = ro(n, t), o = n[i] >= t ? n[i] : n[s];
    e[o] = !0;
  }
}
function Qm(e, t, n, i) {
  const s = e._adapter, o = +s.startOf(t[0].value, i), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, i))
    l = n[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Sa(e, t, n) {
  const i = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, i.push({
      value: a,
      major: !1
    });
  return o === 0 || !n ? i : Qm(e, i, s, n);
}
class Gn extends Fe {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, n = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new pg._date(t.adapters.date);
    s.init(n), An(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = n.normalized;
  }
  parse(t, n) {
    return t === void 0 ? null : va(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, n = this._adapter, i = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = yt(s) && !isNaN(s) ? s : +n.startOf(Date.now(), i), o = yt(o) && !isNaN(o) ? o : +n.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (n = t[0], i = t[t.length - 1]), {
      min: n,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, n = t.time, i = t.ticks, s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, r = this.max, a = Bh(s, o, r);
    return this._unit = n.unit || (i.autoSkip ? Ma(n.minUnit, this.min, this.max, this._getLabelCapacity(o)) : qm(this, a.length, n.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Gm(this._unit), this.initOffsets(s), t.reverse && a.reverse(), Sa(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let n = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? n = 1 - s : n = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    n = Et(n, 0, r), i = Et(i, 0, r), this._offsets = {
      start: n,
      end: i,
      factor: 1 / (n + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, n = this.min, i = this.max, s = this.options, o = s.time, r = o.unit || Ma(o.minUnit, n, i, this._getLabelCapacity(n)), a = W(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = nn(l) || l === !0, d = {};
    let u = n, h, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(i, n, r) > 1e5 * a)
      throw new Error(n + " and " + i + " are too far apart with stepSize of " + a + " " + r);
    const p = s.ticks.source === "data" && this.getDataTimestamps();
    for (h = u, f = 0; h < i; h = +t.add(h, a, r), f++)
      wa(d, h, p);
    return (h === i || s.bounds === "ticks" || f === 1) && wa(d, h, p), Object.keys(d).sort((g, m) => g - m).map((g) => +g);
  }
  getLabelForValue(t) {
    const n = this._adapter, i = this.options.time;
    return i.tooltipFormat ? n.format(t, i.tooltipFormat) : n.format(t, i.displayFormats.datetime);
  }
  format(t, n) {
    const s = this.options.time.displayFormats, o = this._unit, r = n || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, n, i, s) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return ft(r, [
        t,
        n,
        i
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, d = l && a[l], u = c && a[c], h = i[n], f = c && u && h && h.major;
    return this._adapter.format(t, s || (f ? u : d));
  }
  generateTickLabels(t) {
    let n, i, s;
    for (n = 0, i = t.length; n < i; ++n)
      s = t[n], s.label = this._tickFormatFunction(s.value, n, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + i) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets, i = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks, i = this.ctx.measureText(t).width, s = Tt(this.isHorizontal() ? n.maxRotation : n.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + a * r,
      h: i * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const n = this.options.time, i = n.displayFormats, s = i[n.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, Sa(this, [
      t
    ], this._majorUnit), s), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], n, i;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (n = 0, i = s.length; n < i; ++n)
      t = t.concat(s[n].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, i;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (n = 0, i = s.length; n < i; ++n)
      t.push(va(this, s[n]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return gl(t.sort(Km));
  }
}
A(Gn, "id", "time"), A(Gn, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Mi(e, t, n) {
  let i = 0, s = e.length - 1, o, r, a, l;
  n ? (t >= e[i].pos && t <= e[s].pos && ({ lo: i, hi: s } = ie(e, "pos", t)), { pos: o, time: a } = e[i], { pos: r, time: l } = e[s]) : (t >= e[i].time && t <= e[s].time && ({ lo: i, hi: s } = ie(e, "time", t)), { time: o, pos: a } = e[i], { time: r, pos: l } = e[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Us extends Gn {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(t);
    this._minPos = Mi(n, this.min), this._tableRange = Mi(n, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this, s = [], o = [];
    let r, a, l, c, d;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= n && c <= i && s.push(c);
    if (s.length < 2)
      return [
        {
          time: n,
          pos: 0
        },
        {
          time: i,
          pos: 1
        }
      ];
    for (r = 0, a = s.length; r < a; ++r)
      d = s[r + 1], l = s[r - 1], c = s[r], Math.round((d + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const n = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return n.length && i.length ? t = this.normalize(n.concat(i)) : t = n.length ? n : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Mi(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets, i = this.getDecimalForPixel(t) / n.factor - n.end;
    return Mi(this._table, i * this._tableRange + this._minPos, !0);
  }
}
A(Us, "id", "timeseries"), A(Us, "defaults", Gn.defaults);
Object.freeze({
  __proto__: null,
  CategoryScale: Yi,
  LinearScale: Xi,
  LogarithmicScale: Hs,
  RadialLinearScale: Cn,
  TimeScale: Gn,
  TimeSeriesScale: Us
});
const ka = {
  modes: {
    point(e, t) {
      return Ei(e, t, { intersect: !0 });
    },
    nearest(e, t, n) {
      return tb(e, t, n);
    },
    x(e, t, n) {
      return Ei(e, t, { intersect: n.intersect, axis: "x" });
    },
    y(e, t, n) {
      return Ei(e, t, { intersect: n.intersect, axis: "y" });
    }
  }
};
function yo(e, t, n) {
  return (ka.modes[n.mode] || ka.modes.nearest)(e, t, n);
}
function Jm(e, t, n) {
  return n !== "x" && n !== "y" ? e.inRange(t.x, t.y, "x", !0) || e.inRange(t.x, t.y, "y", !0) : e.inRange(t.x, t.y, n, !0);
}
function Zm(e, t, n) {
  return n === "x" ? { x: e.x, y: t.y } : n === "y" ? { x: t.x, y: e.y } : t;
}
function Ei(e, t, n) {
  return e.visibleElements.filter((i) => n.intersect ? i.inRange(t.x, t.y) : Jm(i, t, n.axis));
}
function tb(e, t, n) {
  let i = Number.POSITIVE_INFINITY;
  return Ei(e, t, n).reduce((s, o) => {
    const r = o.getCenterPoint(), a = Zm(t, r, n.axis), l = Yn(t, a);
    return l < i ? (s = [o], i = l) : l === i && s.push(o), s;
  }, []).sort((s, o) => s._index - o._index).slice(0, 1);
}
const Xs = ["enter", "leave"], xo = Xs.concat("click");
function eb(e, t, n) {
  t.listened = !1, t.moveListened = !1, t._getElements = yo, xo.forEach((i) => {
    typeof n[i] == "function" ? (t.listened = !0, t.listeners[i] = n[i]) : kt(t.listeners[i]) && delete t.listeners[i];
  }), Xs.forEach((i) => {
    typeof n[i] == "function" && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((i) => {
    !t.listened && typeof i.click == "function" && (t.listened = !0), t.moveListened || Xs.forEach((s) => {
      typeof i[s] == "function" && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function nb(e, t, n) {
  if (e.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return ib(e, t, n);
      case "click":
        return sb(e, t, n);
    }
}
function ib(e, t, n) {
  if (!e.moveListened)
    return;
  let i;
  t.type === "mousemove" ? i = yo(e, t, n.interaction) : i = [];
  const s = e.hovered;
  e.hovered = i;
  const o = { state: e, event: t };
  let r = Oa(o, "leave", s, i);
  return Oa(o, "enter", i, s) || r;
}
function Oa({ state: e, event: t }, n, i, s) {
  let o;
  for (const r of i)
    s.indexOf(r) < 0 && (o = ac(r.options[n] || e.listeners[n], r, t) || o);
  return o;
}
function sb(e, t, n) {
  const i = e.listeners, s = yo(e, t, n.interaction);
  let o;
  for (const r of s)
    o = ac(r.options.click || i.click, r, t) || o;
  return o;
}
function ac(e, t, n) {
  return ft(e, [t.$context, n]) === !0;
}
const ob = (e, t) => t > e || e.length > t.length && e.slice(0, t.length) === t, Le = 1e-3, _o = (e, t, n) => Math.min(n, Math.max(t, e));
function rb(e, t, n) {
  for (const i of Object.keys(e))
    e[i] = _o(e[i], t, n);
  return e;
}
function ab(e, t, n, i) {
  if (!e || !t || n <= 0)
    return !1;
  const s = i / 2;
  return Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2) <= Math.pow(n + s, 2);
}
function lc(e, { x: t, y: n, x2: i, y2: s }, o, r) {
  const a = r / 2, l = e.x >= t - a - Le && e.x <= i + a + Le, c = e.y >= n - a - Le && e.y <= s + a + Le;
  return o === "x" ? l : (o === "y" || l) && c;
}
function cn(e, t) {
  const { centerX: n, centerY: i } = e.getProps(["centerX", "centerY"], t);
  return { x: n, y: i };
}
function lb(e, t, n, i = !0) {
  const s = n.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = s[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (ob(a, r)) {
      if (i)
        throw new Error(`${e} v${n} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const cc = (e) => typeof e == "string" && e.endsWith("%"), dc = (e) => _o(parseFloat(e) / 100, 0, 1);
function vo(e, t) {
  return t === "start" ? 0 : t === "end" ? e : cc(t) ? dc(t) * e : e / 2;
}
function an(e, t) {
  return typeof t == "number" ? t : cc(t) ? dc(t) * e : e;
}
function cb(e, t) {
  const { x: n, width: i } = e, s = t.textAlign;
  return s === "center" ? n + i / 2 : s === "end" || s === "right" ? n + i : n;
}
function uc(e) {
  return K(e) ? {
    x: W(e.x, "center"),
    y: W(e.y, "center")
  } : (e = W(e, "center"), {
    x: e,
    y: e
  });
}
function hc(e) {
  return e && (kt(e.xValue) || kt(e.yValue));
}
const js = /* @__PURE__ */ new Map();
function Mo(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function wo(e, { x: t, y: n }, i) {
  i && (e.translate(t, n), e.rotate(Tt(i)), e.translate(-t, -n));
}
function Be(e, t) {
  if (t && t.borderWidth)
    return e.lineCap = t.borderCapStyle, e.setLineDash(t.borderDash), e.lineDashOffset = t.borderDashOffset, e.lineJoin = t.borderJoinStyle, e.lineWidth = t.borderWidth, e.strokeStyle = t.borderColor, !0;
}
function dn(e, t) {
  e.shadowColor = t.backgroundShadowColor, e.shadowBlur = t.shadowBlur, e.shadowOffsetX = t.shadowOffsetX, e.shadowOffsetY = t.shadowOffsetY;
}
function So(e, t) {
  const n = t.content;
  if (Mo(n))
    return {
      width: an(n.width, t.width),
      height: an(n.height, t.height)
    };
  const i = wt(t.font), s = t.textStrokeWidth, o = ut(n) ? n : [n], r = o.join() + i.string + s + (e._measureText ? "-spriting" : "");
  if (!js.has(r)) {
    e.save(), e.font = i.string;
    const a = o.length;
    let l = 0;
    for (let d = 0; d < a; d++) {
      const u = o[d];
      l = Math.max(l, e.measureText(u).width + s);
    }
    e.restore();
    const c = a * i.lineHeight + s;
    js.set(r, { width: l, height: c });
  }
  return js.get(r);
}
function fc(e, t, n) {
  const { x: i, y: s, width: o, height: r } = t;
  e.save(), dn(e, n);
  const a = Be(e, n);
  e.fillStyle = n.backgroundColor, e.beginPath(), sn(e, {
    x: i,
    y: s,
    w: o,
    h: r,
    radius: rb(pe(n.borderRadius), 0, Math.min(o, r) / 2)
  }), e.closePath(), e.fill(), a && (e.shadowColor = n.borderShadowColor, e.stroke()), e.restore();
}
function db(e, t, n) {
  const i = n.content;
  if (Mo(i)) {
    e.drawImage(i, t.x, t.y, t.width, t.height);
    return;
  }
  const s = ut(i) ? i : [i], o = wt(n.font), r = o.lineHeight, a = cb(t, n), l = t.y + r / 2 + n.textStrokeWidth / 2;
  e.save(), e.font = o.string, e.textBaseline = "middle", e.textAlign = n.textAlign, ub(e, n) && s.forEach((c, d) => e.strokeText(c, a, l + d * r)), e.fillStyle = n.color, s.forEach((c, d) => e.fillText(c, a, l + d * r)), e.restore();
}
function ub(e, t) {
  if (t.textStrokeWidth > 0)
    return e.lineJoin = "round", e.miterLimit = 2, e.lineWidth = t.textStrokeWidth, e.strokeStyle = t.textStrokeColor, !0;
}
function ln(e, t, n) {
  return t = typeof t == "number" ? t : e.parse(t), yt(t) ? e.getPixelForValue(t) : n;
}
function xe(e, t, n) {
  const i = t[n];
  if (i || n === "scaleID")
    return i;
  const s = n.charAt(0), o = Object.values(e).filter((r) => r.axis && r.axis === s);
  return o.length ? o[0].id : s;
}
function gc(e, t) {
  if (e) {
    const n = e.options.reverse, i = ln(e, t.min, n ? t.end : t.start), s = ln(e, t.max, n ? t.start : t.end);
    return {
      start: i,
      end: s
    };
  }
}
function pc(e, t) {
  const { chartArea: n, scales: i } = e, s = i[xe(i, t, "xScaleID")], o = i[xe(i, t, "yScaleID")];
  let r = n.width / 2, a = n.height / 2;
  return s && (r = ln(s, t.xValue, s.left + s.width / 2)), o && (a = ln(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function ko(e, t) {
  const n = e.scales, i = n[xe(n, t, "xScaleID")], s = n[xe(n, t, "yScaleID")];
  if (!i && !s)
    return {};
  let { left: o, right: r } = i || e.chartArea, { top: a, bottom: l } = s || e.chartArea;
  const c = Ta(i, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = Ta(s, { min: t.yMin, max: t.yMax, start: l, end: a });
  return a = d.start, l = d.end, {
    x: o,
    y: a,
    x2: r,
    y2: l,
    width: r - o,
    height: l - a,
    centerX: o + (r - o) / 2,
    centerY: a + (l - a) / 2
  };
}
function mc(e, t) {
  if (!hc(t)) {
    const n = ko(e, t);
    let i = t.radius;
    (!i || isNaN(i)) && (i = Math.min(n.width, n.height) / 2, t.radius = i);
    const s = i * 2;
    return {
      x: n.x + t.xAdjust,
      y: n.y + t.yAdjust,
      x2: n.x + s + t.xAdjust,
      y2: n.y + s + t.yAdjust,
      centerX: n.centerX + t.xAdjust,
      centerY: n.centerY + t.yAdjust,
      width: s,
      height: s
    };
  }
  return hb(e, t);
}
function bc(e, t) {
  const n = ko(e, t), { x: i, y: s } = n;
  return n.elements = [{
    type: "label",
    optionScope: "label",
    properties: pb(e, n, t)
  }], n.initProperties = { x: i, y: s }, n;
}
function hb(e, t) {
  const n = pc(e, t), i = t.radius * 2;
  return {
    x: n.x - t.radius + t.xAdjust,
    y: n.y - t.radius + t.yAdjust,
    x2: n.x + t.radius + t.xAdjust,
    y2: n.y + t.radius + t.yAdjust,
    centerX: n.x + t.xAdjust,
    centerY: n.y + t.yAdjust,
    width: i,
    height: i
  };
}
function Ta(e, t) {
  const n = gc(e, t) || t;
  return {
    start: Math.min(n.start, n.end),
    end: Math.max(n.start, n.end)
  };
}
function fb({ properties: e, options: t }, n, i, s) {
  const { x: o, x2: r, width: a } = e;
  return yc({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.x,
    padding: { start: s.left, end: s.right },
    adjust: t.label.xAdjust,
    size: n.width
  });
}
function gb({ properties: e, options: t }, n, i, s) {
  const { y: o, y2: r, height: a } = e;
  return yc({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.y,
    padding: { start: s.top, end: s.bottom },
    adjust: t.label.yAdjust,
    size: n.height
  });
}
function yc(e, t) {
  const { start: n, end: i, borderWidth: s } = e, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = i - s - n - r - a - t.size;
  return n + s / 2 + l + vo(c, o);
}
function pb(e, t, n) {
  const i = n.label;
  i.backgroundColor = "transparent", i.callout.display = !1;
  const s = uc(i.position), o = Ct(i.padding), r = So(e.ctx, i), a = fb({ properties: t, options: n }, r, s, o), l = gb({ properties: t, options: n }, r, s, o), c = r.width + o.width, d = r.height + o.height;
  return {
    x: a,
    y: l,
    x2: a + c,
    y2: l + d,
    width: c,
    height: d,
    centerX: a + c / 2,
    centerY: l + d / 2,
    rotation: i.rotation
  };
}
function un(e, t, n) {
  const i = Math.cos(n), s = Math.sin(n), o = t.x, r = t.y;
  return {
    x: o + i * (e.x - o) - s * (e.y - r),
    y: r + s * (e.x - o) + i * (e.y - r)
  };
}
function mb(e, t, n) {
  const i = vb(e.scales, t, n);
  let s = Ca(t, i, "min", "suggestedMin");
  s = Ca(t, i, "max", "suggestedMax") || s, s && typeof t.handleTickRangeOptions == "function" && t.handleTickRangeOptions();
}
function bb(e, t) {
  for (const n of e)
    xb(n, t);
}
function Ca(e, t, n, i) {
  if (yt(t[n]) && !yb(e.options, n, i)) {
    const s = e[n] !== t[n];
    return e[n] = t[n], s;
  }
}
function yb(e, t, n) {
  return kt(e[t]) || kt(e[n]);
}
function xb(e, t) {
  for (const n of ["scaleID", "xScaleID", "yScaleID"]) {
    const i = xe(t, e, n);
    i && !t[i] && _b(e, n) && console.warn(`No scale found with id '${i}' for annotation '${e.id}'`);
  }
}
function _b(e, t) {
  if (t === "scaleID")
    return !0;
  const n = t.charAt(0);
  for (const i of ["Min", "Max", "Value"])
    if (kt(e[n + i]))
      return !0;
  return !1;
}
function vb(e, t, n) {
  const i = t.axis, s = t.id, o = i + "ScaleID", r = {
    min: W(t.min, Number.NEGATIVE_INFINITY),
    max: W(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of n)
    a.scaleID === s ? Pa(a, t, ["value", "endValue"], r) : xe(e, a, o) === s && Pa(a, t, [i + "Min", i + "Max", i + "Value"], r);
  return r;
}
function Pa(e, t, n, i) {
  for (const s of n) {
    const o = e[s];
    if (kt(o)) {
      const r = t.parse(o);
      i.min = Math.min(i.min, r), i.max = Math.max(i.max, r);
    }
  }
}
class hn extends At {
  inRange(t, n, i, s) {
    const { x: o, y: r } = un({ x: t, y: n }, this.getCenterPoint(s), Tt(-this.options.rotation));
    return lc({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return cn(this, t);
  }
  draw(t) {
    t.save(), wo(t, this.getCenterPoint(), this.options.rotation), fc(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, n) {
    return bc(t, n);
  }
}
hn.id = "boxAnnotation";
hn.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderRadius: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  label: {
    backgroundColor: "transparent",
    borderWidth: 0,
    callout: {
      display: !1
    },
    color: "black",
    content: null,
    display: !1,
    drawTime: void 0,
    font: {
      family: void 0,
      lineHeight: void 0,
      size: void 0,
      style: void 0,
      weight: "bold"
    },
    height: void 0,
    padding: 6,
    position: "center",
    rotation: void 0,
    textAlign: "start",
    textStrokeColor: void 0,
    textStrokeWidth: 0,
    width: void 0,
    xAdjust: 0,
    yAdjust: 0,
    z: void 0
  },
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  z: 0
};
hn.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
hn.descriptors = {
  label: {
    _fallback: !0
  }
};
const xc = ["left", "bottom", "top", "right"];
class si extends At {
  inRange(t, n, i, s) {
    const { x: o, y: r } = un({ x: t, y: n }, this.getCenterPoint(s), Tt(-this.rotation));
    return lc({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return cn(this, t);
  }
  draw(t) {
    const n = this.options, i = !kt(this._visible) || this._visible;
    !n.display || !n.content || !i || (t.save(), wo(t, this.getCenterPoint(), this.rotation), wb(t, this), fc(t, this, n), db(t, Eb(this), n), t.restore());
  }
  resolveElementProperties(t, n) {
    let i;
    if (hc(n))
      i = pc(t, n);
    else {
      const { centerX: a, centerY: l } = ko(t, n);
      i = { x: a, y: l };
    }
    const s = Ct(n.padding), o = So(t.ctx, n), r = Mb(i, o, n, s);
    return {
      pointX: i.x,
      pointY: i.y,
      ...r,
      rotation: n.rotation
    };
  }
}
si.id = "labelAnnotation";
si.defaults = {
  adjustScaleRange: !0,
  backgroundColor: "transparent",
  backgroundShadowColor: "transparent",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderRadius: 0,
  borderShadowColor: "transparent",
  borderWidth: 0,
  callout: {
    borderCapStyle: "butt",
    borderColor: void 0,
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 1,
    display: !1,
    margin: 5,
    position: "auto",
    side: 5,
    start: "50%"
  },
  color: "black",
  content: null,
  display: !0,
  font: {
    family: void 0,
    lineHeight: void 0,
    size: void 0,
    style: void 0,
    weight: void 0
  },
  height: void 0,
  padding: 6,
  position: "center",
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  textAlign: "center",
  textStrokeColor: void 0,
  textStrokeWidth: 0,
  width: void 0,
  xAdjust: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  xValue: void 0,
  yAdjust: 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  yValue: void 0,
  z: 0
};
si.defaultRoutes = {
  borderColor: "color"
};
function Mb(e, t, n, i) {
  const s = t.width + i.width + n.borderWidth, o = t.height + i.height + n.borderWidth, r = uc(n.position), a = Ea(e.x, s, n.xAdjust, r.x), l = Ea(e.y, o, n.yAdjust, r.y);
  return {
    x: a,
    y: l,
    x2: a + s,
    y2: l + o,
    width: s,
    height: o,
    centerX: a + s / 2,
    centerY: l + o / 2
  };
}
function Ea(e, t, n = 0, i) {
  return e - vo(t, i) + n;
}
function wb(e, t) {
  const { pointX: n, pointY: i, options: s } = t, o = s.callout, r = o && o.display && Cb(t, o);
  if (!r || Ab(t, o, r))
    return;
  if (e.save(), e.beginPath(), !Be(e, o))
    return e.restore();
  const { separatorStart: l, separatorEnd: c } = Sb(t, r), { sideStart: d, sideEnd: u } = Ob(t, r, l);
  (o.margin > 0 || s.borderWidth === 0) && (e.moveTo(l.x, l.y), e.lineTo(c.x, c.y)), e.moveTo(d.x, d.y), e.lineTo(u.x, u.y);
  const h = un({ x: n, y: i }, t.getCenterPoint(), Tt(-t.rotation));
  e.lineTo(h.x, h.y), e.stroke(), e.restore();
}
function Sb(e, t) {
  const { x: n, y: i, x2: s, y2: o } = e, r = kb(e, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: n + r, y: i }, l = { x: a.x, y: o }) : (a = { x: n, y: i + r }, l = { x: s, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function kb(e, t) {
  const { width: n, height: i, options: s } = e, o = s.callout.margin + s.borderWidth / 2;
  return t === "right" ? n + o : t === "bottom" ? i + o : -o;
}
function Ob(e, t, n) {
  const { y: i, width: s, height: o, options: r } = e, a = r.callout.start, l = Tb(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: n.x, y: i + an(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: n.x + an(s, a), y: n.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function Tb(e, t) {
  const n = t.side;
  return e === "left" || e === "top" ? -n : n;
}
function Cb(e, t) {
  const n = t.position;
  return xc.includes(n) ? n : Pb(e, t);
}
function Pb(e, t) {
  const { x: n, y: i, x2: s, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: u, rotation: h } = e, f = { x: d, y: u }, p = t.start, g = an(r, p), m = an(a, p), y = [n, n + g, n + g, s], _ = [i + m, o, i, o], v = [];
  for (let M = 0; M < 4; M++) {
    const x = un({ x: y[M], y: _[M] }, f, Tt(h));
    v.push({
      position: xc[M],
      distance: Yn(x, { x: l, y: c })
    });
  }
  return v.sort((M, x) => M.distance - x.distance)[0].position;
}
function Eb({ x: e, y: t, width: n, height: i, options: s }) {
  const o = s.borderWidth / 2, r = Ct(s.padding);
  return {
    x: e + r.left + o,
    y: t + r.top + o,
    width: n - r.left - r.right - s.borderWidth,
    height: i - r.top - r.bottom - s.borderWidth
  };
}
function Ab(e, t, n) {
  const { pointX: i, pointY: s } = e, o = t.margin;
  let r = i, a = s;
  return n === "left" ? r += o : n === "right" ? r -= o : n === "top" ? a += o : n === "bottom" && (a -= o), e.inRange(r, a);
}
const Oo = (e, t, n) => ({ x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) }), Ks = (e, t, n) => Oo(t, n, Math.abs((e - t.y) / (n.y - t.y))).x, Aa = (e, t, n) => Oo(t, n, Math.abs((e - t.x) / (n.x - t.x))).y, Pn = (e) => e * e, Db = (e, t, { x: n, y: i, x2: s, y2: o }, r) => r === "y" ? { start: Math.min(i, o), end: Math.max(i, o), value: t } : { start: Math.min(n, s), end: Math.max(n, s), value: e };
class oi extends At {
  inRange(t, n, i, s) {
    const o = this.options.borderWidth / 2;
    if (i !== "x" && i !== "y") {
      const a = Pn(o), l = { mouseX: t, mouseY: n };
      return Lb(this, l, a, s) || Ia(this, l, s);
    }
    const r = Db(t, n, this.getProps(["x", "y", "x2", "y2"], s), i);
    return r.value >= r.start - o && r.value <= r.end + o || Ia(this, { mouseX: t, mouseY: n }, s, i);
  }
  getCenterPoint(t) {
    return cn(this, t);
  }
  draw(t) {
    const { x: n, y: i, x2: s, y2: o, options: r } = this;
    if (t.save(), !Be(t, r))
      return t.restore();
    dn(t, r);
    const a = Math.atan2(o - i, s - n), l = Math.sqrt(Math.pow(s - n, 2) + Math.pow(o - i, 2)), { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = $b(this);
    t.translate(n, i), t.rotate(a), t.beginPath(), t.moveTo(0 + u, 0), t.lineTo(l - h, 0), t.shadowColor = r.borderShadowColor, t.stroke(), Fa(t, 0, u, c), Fa(t, l, -h, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, n) {
    const { scales: i, chartArea: s } = t, o = i[n.scaleID], r = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
    let a, l;
    if (o)
      a = ln(o, n.value, NaN), l = ln(o, n.endValue, a), o.isHorizontal() ? (r.x = a, r.x2 = l) : (r.y = a, r.y2 = l);
    else {
      const m = i[xe(i, n, "xScaleID")], y = i[xe(i, n, "yScaleID")];
      m && La(r, m, { min: n.xMin, max: n.xMax, start: m.left, end: m.right, startProp: "x", endProp: "x2" }), y && La(r, y, { min: n.yMin, max: n.yMax, start: y.bottom, end: y.top, startProp: "y", endProp: "y2" });
    }
    const { x: c, y: d, x2: u, y2: h } = r, f = Rb(r, t.chartArea), p = f ? Ib({ x: c, y: d }, { x: u, y: h }, t.chartArea) : { x: c, y: d, x2: u, y2: h, width: Math.abs(u - c), height: Math.abs(h - d) };
    p.centerX = (u + c) / 2, p.centerY = (h + d) / 2;
    const g = jb(t, p, n.label);
    return g._visible = f, p.elements = [{
      type: "label",
      optionScope: "label",
      properties: g
    }], p;
  }
}
oi.id = "lineAnnotation";
const Da = {
  backgroundColor: void 0,
  backgroundShadowColor: void 0,
  borderColor: void 0,
  borderDash: void 0,
  borderDashOffset: void 0,
  borderShadowColor: void 0,
  borderWidth: void 0,
  display: void 0,
  fill: void 0,
  length: void 0,
  shadowBlur: void 0,
  shadowOffsetX: void 0,
  shadowOffsetY: void 0,
  width: void 0
};
oi.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, Da),
    fill: !1,
    length: 12,
    start: Object.assign({}, Da),
    width: 6
  },
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 2,
  display: !0,
  endValue: void 0,
  label: {
    backgroundColor: "rgba(0,0,0,0.8)",
    backgroundShadowColor: "transparent",
    borderCapStyle: "butt",
    borderColor: "black",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderRadius: 6,
    borderShadowColor: "transparent",
    borderWidth: 0,
    callout: Object.assign({}, si.defaults.callout),
    color: "#fff",
    content: null,
    display: !1,
    drawTime: void 0,
    font: {
      family: void 0,
      lineHeight: void 0,
      size: void 0,
      style: void 0,
      weight: "bold"
    },
    height: void 0,
    padding: 6,
    position: "center",
    rotation: 0,
    shadowBlur: 0,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    textAlign: "center",
    textStrokeColor: void 0,
    textStrokeWidth: 0,
    width: void 0,
    xAdjust: 0,
    yAdjust: 0,
    z: void 0
  },
  scaleID: void 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  value: void 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  z: 0
};
oi.descriptors = {
  arrowHeads: {
    start: {
      _fallback: !0
    },
    end: {
      _fallback: !0
    },
    _fallback: !0
  }
};
oi.defaultRoutes = {
  borderColor: "color"
};
function Rb({ x: e, y: t, x2: n, y2: i }, { top: s, right: o, bottom: r, left: a }) {
  return !(e < a && n < a || e > o && n > o || t < s && i < s || t > r && i > r);
}
function Ra({ x: e, y: t }, n, { top: i, right: s, bottom: o, left: r }) {
  return e < r && (t = Aa(r, { x: e, y: t }, n), e = r), e > s && (t = Aa(s, { x: e, y: t }, n), e = s), t < i && (e = Ks(i, { x: e, y: t }, n), t = i), t > o && (e = Ks(o, { x: e, y: t }, n), t = o), { x: e, y: t };
}
function Ib(e, t, n) {
  const { x: i, y: s } = Ra(e, t, n), { x: o, y: r } = Ra(t, e, n);
  return { x: i, y: s, x2: o, y2: r, width: Math.abs(o - i), height: Math.abs(r - s) };
}
function Lb(e, { mouseX: t, mouseY: n }, i = Le, s) {
  const { x: o, y: r, x2: a, y2: l } = e.getProps(["x", "y", "x2", "y2"], s), c = a - o, d = l - r, u = Pn(c) + Pn(d), h = u === 0 ? -1 : ((t - o) * c + (n - r) * d) / u;
  let f, p;
  return h < 0 ? (f = o, p = r) : h > 1 ? (f = a, p = l) : (f = o + h * c, p = r + h * d), Pn(t - f) + Pn(n - p) <= i;
}
function Ia(e, { mouseX: t, mouseY: n }, i, s) {
  const o = e.label;
  return o.options.display && o.inRange(t, n, s, i);
}
function La(e, t, n) {
  const i = gc(t, n);
  e[n.startProp] = i.start, e[n.endProp] = i.end;
}
function jb(e, t, n) {
  const i = n.borderWidth, s = Ct(n.padding), o = So(e.ctx, n), r = o.width + s.width + i, a = o.height + s.height + i;
  return zb(t, n, { width: r, height: a, padding: s }, e.chartArea);
}
function Nb(e) {
  const { x: t, y: n, x2: i, y2: s } = e, o = Math.atan2(s - n, i - t);
  return o > ot / 2 ? o - ot : o < ot / -2 ? o + ot : o;
}
function zb(e, t, n, i) {
  const { width: s, height: o, padding: r } = n, { xAdjust: a, yAdjust: l } = t, c = { x: e.x, y: e.y }, d = { x: e.x2, y: e.y2 }, u = t.rotation === "auto" ? Nb(e) : Tt(t.rotation), h = Fb(s, o, u), f = Bb(e, t, { labelSize: h, padding: r }, i), p = Oo(c, d, f), g = { size: h.w, min: i.left, max: i.right, padding: r.left }, m = { size: h.h, min: i.top, max: i.bottom, padding: r.top }, y = Na(p.x, g) + a, _ = Na(p.y, m) + l;
  return {
    x: y - s / 2,
    y: _ - o / 2,
    x2: y + s / 2,
    y2: _ + o / 2,
    centerX: y,
    centerY: _,
    pointX: p.x,
    pointY: p.y,
    width: s,
    height: o,
    rotation: ss(u)
  };
}
function Fb(e, t, n) {
  const i = Math.cos(n), s = Math.sin(n);
  return {
    w: Math.abs(e * i) + Math.abs(t * s),
    h: Math.abs(e * s) + Math.abs(t * i)
  };
}
function Bb(e, t, n, i) {
  let s;
  const o = Wb(e, i);
  return t.position === "start" ? s = ja({ w: e.x2 - e.x, h: e.y2 - e.y }, n, t, o) : t.position === "end" ? s = 1 - ja({ w: e.x - e.x2, h: e.y - e.y2 }, n, t, o) : s = vo(1, t.position), s;
}
function ja(e, t, n, i) {
  const { labelSize: s, padding: o } = t, r = e.w * i.dx, a = e.h * i.dy, l = r > 0 && (s.w / 2 + o.left - i.x) / r, c = a > 0 && (s.h / 2 + o.top - i.y) / a;
  return _o(Math.max(l, c), 0, 0.25);
}
function Wb(e, t) {
  const { x: n, x2: i, y: s, y2: o } = e, r = Math.min(s, o) - t.top, a = Math.min(n, i) - t.left, l = t.bottom - Math.max(s, o), c = t.right - Math.max(n, i);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function Na(e, t) {
  const { size: n, min: i, max: s, padding: o } = t, r = n / 2;
  return n > s - i ? (s + i) / 2 : (i >= e - o - r && (e = i + o + r), s <= e + o + r && (e = s - o - r), e);
}
function $b(e) {
  const t = e.options, n = t.arrowHeads && t.arrowHeads.start, i = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: n,
    endOpts: i,
    startAdjust: za(e, n),
    endAdjust: za(e, i)
  };
}
function za(e, t) {
  if (!t || !t.display)
    return 0;
  const { length: n, width: i } = t, s = e.options.borderWidth / 2, o = { x: n, y: i + s };
  return Math.abs(Ks(0, o, { x: 0, y: s }));
}
function Fa(e, t, n, i) {
  if (!i || !i.display)
    return;
  const { length: s, width: o, fill: r, backgroundColor: a, borderColor: l } = i, c = Math.abs(t - s) + n;
  e.beginPath(), dn(e, i), Be(e, i), e.moveTo(c, -o), e.lineTo(t + n, 0), e.lineTo(c, o), r === !0 ? (e.fillStyle = a || l, e.closePath(), e.fill(), e.shadowColor = "transparent") : e.shadowColor = i.borderShadowColor, e.stroke();
}
class ri extends At {
  inRange(t, n, i, s) {
    const o = this.options.rotation, r = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return Vb({ x: t, y: n }, this.getProps(["width", "height", "centerX", "centerY"], s), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], s), u = r / 2, h = i === "y" ? { start: l, end: d } : { start: a, end: c }, f = un({ x: t, y: n }, this.getCenterPoint(s), Tt(-o));
    return f[i] >= h.start - u - Le && f[i] <= h.end + u + Le;
  }
  getCenterPoint(t) {
    return cn(this, t);
  }
  draw(t) {
    const { width: n, height: i, centerX: s, centerY: o, options: r } = this;
    t.save(), wo(t, this.getCenterPoint(), r.rotation), dn(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Be(t, r);
    t.ellipse(s, o, i / 2, n / 2, ot / 2, 0, 2 * ot), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, n) {
    return bc(t, n);
  }
}
ri.id = "ellipseAnnotation";
ri.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  label: Object.assign({}, hn.defaults.label),
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  z: 0
};
ri.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
ri.descriptors = {
  label: {
    _fallback: !0
  }
};
function Vb(e, t, n, i) {
  const { width: s, height: o, centerX: r, centerY: a } = t, l = s / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = Tt(n || 0), u = i / 2 || 0, h = Math.cos(d), f = Math.sin(d), p = Math.pow(h * (e.x - r) + f * (e.y - a), 2), g = Math.pow(f * (e.x - r) - h * (e.y - a), 2);
  return p / Math.pow(l + u, 2) + g / Math.pow(c + u, 2) <= 1.0001;
}
class ls extends At {
  inRange(t, n, i, s) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], s), d = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return ab({ x: t, y: n }, this.getCenterPoint(s), c / 2, d);
    const u = d / 2, h = i === "y" ? { start: r, end: l, value: n } : { start: o, end: a, value: t };
    return h.value >= h.start - u && h.value <= h.end + u;
  }
  getCenterPoint(t) {
    return cn(this, t);
  }
  draw(t) {
    const n = this.options, i = n.borderWidth;
    if (n.radius < 0.1)
      return;
    t.save(), t.fillStyle = n.backgroundColor, dn(t, n);
    const s = Be(t, n);
    n.borderWidth = 0, Fi(t, n, this.centerX, this.centerY), s && !Mo(n.pointStyle) && (t.shadowColor = n.borderShadowColor, t.stroke()), t.restore(), n.borderWidth = i;
  }
  resolveElementProperties(t, n) {
    return mc(t, n);
  }
}
ls.id = "pointAnnotation";
ls.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  pointStyle: "circle",
  radius: 10,
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  xAdjust: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  xValue: void 0,
  yAdjust: 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  yValue: void 0,
  z: 0
};
ls.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class cs extends At {
  inRange(t, n, i, s) {
    if (i !== "x" && i !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && Yb(this.elements, t, n, s);
    const o = un({ x: t, y: n }, this.getCenterPoint(s), Tt(-this.options.rotation)), r = this.elements.map((c) => i === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[i] >= a && o[i] <= l;
  }
  getCenterPoint(t) {
    return cn(this, t);
  }
  draw(t) {
    const { elements: n, options: i } = this;
    t.save(), t.beginPath(), t.fillStyle = i.backgroundColor, dn(t, i);
    const s = Be(t, i);
    let o = !0;
    for (const r of n)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), s && (t.shadowColor = i.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, n) {
    const i = mc(t, n), { x: s, y: o } = i, { sides: r, rotation: a } = n, l = [], c = 2 * ot / r;
    let d = a * dl;
    for (let u = 0; u < r; u++, d += c)
      l.push(Hb(i, n, d));
    return i.elements = l, i.initProperties = { x: s, y: o }, i;
  }
}
cs.id = "polygonAnnotation";
cs.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  point: {
    radius: 0
  },
  radius: 10,
  rotation: 0,
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  sides: 3,
  xAdjust: 0,
  xMax: void 0,
  xMin: void 0,
  xScaleID: void 0,
  xValue: void 0,
  yAdjust: 0,
  yMax: void 0,
  yMin: void 0,
  yScaleID: void 0,
  yValue: void 0,
  z: 0
};
cs.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function Hb({ centerX: e, centerY: t }, { radius: n, borderWidth: i }, s) {
  const o = i / 2, r = Math.sin(s), a = Math.cos(s), l = { x: e + r * n, y: t - a * n };
  return {
    type: "point",
    optionScope: "point",
    properties: {
      x: l.x,
      y: l.y,
      centerX: l.x,
      centerY: l.y,
      bX: e + r * (n + o),
      bY: t - a * (n + o)
    }
  };
}
function Yb(e, t, n, i) {
  let s = !1, o = e[e.length - 1].getProps(["bX", "bY"], i);
  for (const r of e) {
    const a = r.getProps(["bX", "bY"], i);
    a.bY > n != o.bY > n && t < (o.bX - a.bX) * (n - a.bY) / (o.bY - a.bY) + a.bX && (s = !s), o = a;
  }
  return s;
}
const me = {
  box: hn,
  ellipse: ri,
  label: si,
  line: oi,
  point: ls,
  polygon: cs
};
Object.keys(me).forEach((e) => {
  xt.describe(`elements.${me[e].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Ub = {
  update: Object.assign
};
function To(e = "line") {
  return me[e] ? e : (console.warn(`Unknown annotation type: '${e}', defaulting to 'line'`), "line");
}
function Xb(e, t, n, i) {
  const s = qb(e, n.animations, i), o = t.annotations, r = Jb(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = _c(r, a, l.type), d = l.setContext(Qb(e, c, l)), u = c.resolveElementProperties(e, d);
    u.skip = Kb(u), "elements" in u && (Gb(c, u, d, s), delete u.elements), kt(c.x) || Object.assign(c, u), u.options = vc(d), s.update(c, u);
  }
}
function Kb(e) {
  return isNaN(e.x) || isNaN(e.y);
}
function qb(e, t, n) {
  return n === "reset" || n === "none" || n === "resize" ? Ub : new go(e, t);
}
function Gb(e, { elements: t, initProperties: n }, i, s) {
  const o = e.elements || (e.elements = []);
  o.length = t.length;
  for (let r = 0; r < t.length; r++) {
    const a = t[r], l = a.properties, c = _c(o, r, a.type, n), d = i[a.optionScope].override(a);
    l.options = vc(d), s.update(c, l);
  }
}
function _c(e, t, n, i) {
  const s = me[To(n)];
  let o = e[t];
  return (!o || !(o instanceof s)) && (o = e[t] = new s(), K(i) && Object.assign(o, i)), o;
}
function vc(e) {
  const t = me[To(e.type)], n = {};
  n.id = e.id, n.type = e.type, n.drawTime = e.drawTime, Object.assign(
    n,
    qs(e, t.defaults),
    qs(e, t.defaultRoutes)
  );
  for (const i of xo)
    n[i] = e[i];
  return n;
}
function qs(e, t) {
  const n = {};
  for (const i of Object.keys(t)) {
    const s = t[i], o = e[i];
    n[i] = K(s) ? qs(o, s) : o;
  }
  return n;
}
function Qb(e, t, n) {
  return t.$context || (t.$context = Object.assign(Object.create(e.getContext()), {
    element: t,
    id: n.id,
    type: "annotation"
  }));
}
function Jb(e, t) {
  const n = t.length, i = e.length;
  if (i < n) {
    const s = n - i;
    e.splice(i, 0, ...new Array(s));
  } else
    i > n && e.splice(n, i - n);
  return e;
}
var Zb = "2.1.2";
const ae = /* @__PURE__ */ new Map();
var t0 = {
  id: "annotation",
  version: Zb,
  beforeRegister() {
    lb("chart.js", "3.7", Bt.version);
  },
  afterRegister() {
    Bt.register(me);
  },
  afterUnregister() {
    Bt.unregister(me);
  },
  beforeInit(e) {
    ae.set(e, {
      annotations: [],
      elements: [],
      visibleElements: [],
      listeners: {},
      listened: !1,
      moveListened: !1,
      hovered: []
    });
  },
  beforeUpdate(e, t, n) {
    const i = ae.get(e), s = i.annotations = [];
    let o = n.annotations;
    K(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      K(a) && (a.id = r, s.push(a));
    }) : ut(o) && s.push(...o), bb(s, e.scales);
  },
  afterDataLimits(e, t) {
    const n = ae.get(e);
    mb(e, t.scale, n.annotations.filter((i) => i.display && i.adjustScaleRange));
  },
  afterUpdate(e, t, n) {
    const i = ae.get(e);
    eb(e, i, n), Xb(e, i, n, t.mode), i.visibleElements = i.elements.filter((s) => !s.skip && s.options.display);
  },
  beforeDatasetsDraw(e, t, n) {
    wi(e, "beforeDatasetsDraw", n.clip);
  },
  afterDatasetsDraw(e, t, n) {
    wi(e, "afterDatasetsDraw", n.clip);
  },
  beforeDraw(e, t, n) {
    wi(e, "beforeDraw", n.clip);
  },
  afterDraw(e, t, n) {
    wi(e, "afterDraw", n.clip);
  },
  beforeEvent(e, t, n) {
    const i = ae.get(e);
    nb(i, t.event, n) && (t.changed = !0);
  },
  afterDestroy(e) {
    ae.delete(e);
  },
  _getState(e) {
    return ae.get(e);
  },
  defaults: {
    animations: {
      numbers: {
        properties: ["x", "y", "x2", "y2", "width", "height", "centerX", "centerY", "pointX", "pointY", "radius"],
        type: "number"
      }
    },
    clip: !0,
    interaction: {
      mode: void 0,
      axis: void 0,
      intersect: void 0
    },
    common: {
      drawTime: "afterDatasetsDraw",
      label: {}
    }
  },
  descriptors: {
    _indexable: !1,
    _scriptable: (e) => !xo.includes(e),
    annotations: {
      _allKeys: !1,
      _fallback: (e, t) => `elements.${me[To(t.type)].id}`
    },
    interaction: {
      _fallback: !0
    },
    common: {
      label: {
        _fallback: !0
      }
    }
  },
  additionalOptionScopes: [""]
};
function wi(e, t, n) {
  const { ctx: i, chartArea: s } = e, { visibleElements: o } = ae.get(e);
  n && ei(i, s);
  const r = e0(o, t).sort((a, l) => a.options.z - l.options.z);
  for (const a of r)
    a.draw(e.ctx, s);
  n && ni(i);
}
function e0(e, t) {
  const n = [];
  for (const i of e)
    if (i.options.drawTime === t && n.push(i), i.elements && i.elements.length)
      for (const s of i.elements)
        s.options.display && s.options.drawTime === t && n.push(s);
  return n;
}
const Mc = "label";
function Ba(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function n0(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function wc(e, t) {
  e.labels = t;
}
function Sc(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mc;
  const i = [];
  e.datasets = t.map((s) => {
    const o = e.datasets.find((r) => r[n] === s[n]);
    return !o || !s.data || i.includes(o) ? {
      ...s
    } : (i.push(o), Object.assign(o, s), o);
  });
}
function i0(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mc;
  const n = {
    labels: [],
    datasets: []
  };
  return wc(n, e.labels), Sc(n, e.datasets, t), n;
}
function s0(e, t) {
  const {
    height: n = 150,
    width: i = 300,
    redraw: s = !1,
    datasetIdKey: o,
    type: r,
    data: a,
    options: l,
    plugins: c = [],
    fallbackContent: d,
    updateMode: u,
    ...h
  } = e, f = Ai(null), p = Ai(), g = () => {
    !f.current || (p.current = new Bt(f.current, {
      type: r,
      data: i0(a, o),
      options: l && {
        ...l
      },
      plugins: c
    }), Ba(t, p.current));
  }, m = () => {
    Ba(t, null), p.current && (p.current.destroy(), p.current = null);
  };
  return le(() => {
    !s && p.current && l && n0(p.current, l);
  }, [s, l]), le(() => {
    !s && p.current && wc(p.current.config.data, a.labels);
  }, [s, a.labels]), le(() => {
    !s && p.current && a.datasets && Sc(p.current.config.data, a.datasets, o);
  }, [s, a.datasets]), le(() => {
    !p.current || (s ? (m(), setTimeout(g)) : p.current.update(u));
  }, [s, l, a.labels, a.datasets, u]), le(() => {
    !p.current || (m(), setTimeout(g));
  }, [r]), le(() => (g(), () => m()), []), lt("canvas", {
    ...Object.assign({
      ref: f,
      role: "img",
      height: n,
      width: i
    }, h),
    children: d
  });
}
const o0 = Wa(s0);
function we(e, t) {
  return Bt.register(t), Wa((n, i) => lt(o0, {
    ...Object.assign({}, n, {
      ref: i,
      type: e
    })
  }));
}
const r0 = we("line", Nn);
we("bar", Ln);
we("radar", zn);
we("doughnut", he);
we("polarArea", Ze);
we("bubble", jn);
we("pie", Wi);
we("scatter", Fn);
const a0 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzY4Ml8zMzU2NCIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRDlEOUQ5Ii8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF82ODJfMzM1NjQpIj4KPHBhdGggZD0iTTkuMTY2NSAxNC4xNjZIMTAuODMzMlY5LjE2NjAySDkuMTY2NVYxNC4xNjZaTTkuOTk5ODQgNy40OTkzNUMxMC4yMzU5IDcuNDk5MzUgMTAuNDM0IDcuNDE5MzUgMTAuNTk0IDcuMjU5MzVDMTAuNzUzNCA3LjA5OTkgMTAuODMzMiA2LjkwMjEzIDEwLjgzMzIgNi42NjYwMkMxMC44MzMyIDYuNDI5OSAxMC43NTM0IDYuMjMxODUgMTAuNTk0IDYuMDcxODVDMTAuNDM0IDUuOTEyNCAxMC4yMzU5IDUuODMyNjggOS45OTk4NCA1LjgzMjY4QzkuNzYzNzMgNS44MzI2OCA5LjU2NTk1IDUuOTEyNCA5LjQwNjUgNi4wNzE4NUM5LjI0NjUgNi4yMzE4NSA5LjE2NjUgNi40Mjk5IDkuMTY2NSA2LjY2NjAyQzkuMTY2NSA2LjkwMjEzIDkuMjQ2NSA3LjA5OTkgOS40MDY1IDcuMjU5MzVDOS41NjU5NSA3LjQxOTM1IDkuNzYzNzMgNy40OTkzNSA5Ljk5OTg0IDcuNDk5MzVaTTkuOTk5ODQgMTguMzMyN0M4Ljg0NzA2IDE4LjMzMjcgNy43NjM3MyAxOC4xMTM4IDYuNzQ5ODQgMTcuNjc2QzUuNzM1OTUgMTcuMjM4OCA0Ljg1NCAxNi42NDUyIDQuMTA0IDE1Ljg5NTJDMy4zNTQgMTUuMTQ1MiAyLjc2MDM5IDE0LjI2MzIgMi4zMjMxNyAxMy4yNDkzQzEuODg1MzkgMTIuMjM1NSAxLjY2NjUgMTEuMTUyMSAxLjY2NjUgOS45OTkzNUMxLjY2NjUgOC44NDY1NyAxLjg4NTM5IDcuNzYzMjQgMi4zMjMxNyA2Ljc0OTM1QzIuNzYwMzkgNS43MzU0NiAzLjM1NCA0Ljg1MzUyIDQuMTA0IDQuMTAzNTJDNC44NTQgMy4zNTM1MiA1LjczNTk1IDIuNzU5NjMgNi43NDk4NCAyLjMyMTg1QzcuNzYzNzMgMS44ODQ2MyA4Ljg0NzA2IDEuNjY2MDIgOS45OTk4NCAxLjY2NjAyQzExLjE1MjYgMS42NjYwMiAxMi4yMzU5IDEuODg0NjMgMTMuMjQ5OCAyLjMyMTg1QzE0LjI2MzcgMi43NTk2MyAxNS4xNDU3IDMuMzUzNTIgMTUuODk1NyA0LjEwMzUyQzE2LjY0NTcgNC44NTM1MiAxNy4yMzkzIDUuNzM1NDYgMTcuNjc2NSA2Ljc0OTM1QzE4LjExNDMgNy43NjMyNCAxOC4zMzMyIDguODQ2NTcgMTguMzMzMiA5Ljk5OTM1QzE4LjMzMzIgMTEuMTUyMSAxOC4xMTQzIDEyLjIzNTUgMTcuNjc2NSAxMy4yNDkzQzE3LjIzOTMgMTQuMjYzMiAxNi42NDU3IDE1LjE0NTIgMTUuODk1NyAxNS44OTUyQzE1LjE0NTcgMTYuNjQ1MiAxNC4yNjM3IDE3LjIzODggMTMuMjQ5OCAxNy42NzZDMTIuMjM1OSAxOC4xMTM4IDExLjE1MjYgMTguMzMyNyA5Ljk5OTg0IDE4LjMzMjdaTTkuOTk5ODQgMTYuNjY2QzExLjg2MDkgMTYuNjY2IDEzLjQzNzMgMTYuMDIwMiAxNC43MjkgMTQuNzI4NUMxNi4wMjA3IDEzLjQzNjggMTYuNjY2NSAxMS44NjA1IDE2LjY2NjUgOS45OTkzNUMxNi42NjY1IDguMTM4MjQgMTYuMDIwNyA2LjU2MTg1IDE0LjcyOSA1LjI3MDE4QzEzLjQzNzMgMy45Nzg1MiAxMS44NjA5IDMuMzMyNjggOS45OTk4NCAzLjMzMjY4QzguMTM4NzMgMy4zMzI2OCA2LjU2MjM0IDMuOTc4NTIgNS4yNzA2NyA1LjI3MDE4QzMuOTc5IDYuNTYxODUgMy4zMzMxNyA4LjEzODI0IDMuMzMzMTcgOS45OTkzNUMzLjMzMzE3IDExLjg2MDUgMy45NzkgMTMuNDM2OCA1LjI3MDY3IDE0LjcyODVDNi41NjIzNCAxNi4wMjAyIDguMTM4NzMgMTYuNjY2IDkuOTk5ODQgMTYuNjY2WiIgZmlsbD0iIzFDMUIxRiIvPgo8L2c+Cjwvc3ZnPgo=", l0 = sh(), kc = yu({
  defaultTheme: l0,
  defaultClassName: "MuiBox-root",
  generateClassName: Xa.generate
});
process.env.NODE_ENV !== "production" && (kc.propTypes = {
  children: gt.exports.node,
  component: gt.exports.elementType,
  sx: gt.exports.oneOfType([gt.exports.arrayOf(gt.exports.oneOfType([gt.exports.func, gt.exports.object, gt.exports.bool])), gt.exports.func, gt.exports.object])
});
const c0 = kc, d0 = ({
  chart: e,
  tooltip: t
}) => {
  const n = Ai(null), {
    offsetLeft: i
  } = e == null ? void 0 : e.canvas, s = wt(t == null ? void 0 : t.options.bodyFont), o = e == null ? void 0 : e.getActiveElements(), r = Xc(Tc);
  return lt(c0, {
    id: "chartjs-tooltip-react",
    sx: {
      borderRadius: "3px",
      color: "white",
      pointerEvents: "none",
      position: "absolute",
      top: "0",
      transition: "all .2s ease-in-out",
      height: "100%",
      left: `${o && o.length > 0 ? o[0].element.x + 10 : t ? i + t.caretX + 10 : 0}px`,
      fontFamily: s.family,
      fontSize: `${s.size}px` || "14px",
      lineHeight: `${s.lineHeight}px` || "120%",
      opacity: (e == null ? void 0 : e.getActiveElements().length) === 0 ? 0 : 1,
      padding: (t == null ? void 0 : t.options.padding) + "px "
    },
    children: e && (t == null ? void 0 : t.body) && (t == null ? void 0 : t.body.map((a, l) => {
      var u, h, f;
      if (!e.getActiveElements()[l] && t.opacity === 0)
        return;
      const c = a.lines, d = e.getActiveElements()[0] ? e.getActiveElements()[0].element.x : t.caretX;
      return lt("table", {
        ref: n,
        style: {
          backgroundColor: e.getActiveElements()[l].element.options.borderColor,
          borderRadius: "2px",
          marginBottom: "20px",
          padding: "0 2px",
          position: "absolute",
          top: n.current ? `${e.getActiveElements()[l].element.tooltipPosition(!0).y - ((u = n.current) == null ? void 0 : u.getBoundingClientRect().height) / 2}px` : 0,
          left: d > e.chartArea.left + e.chartArea.width / 2 - 20 ? `${(h = n.current) != null && h.getBoundingClientRect().width ? -1 * ((f = n.current) == null ? void 0 : f.getBoundingClientRect().width) - 20 : -20}px` : "0"
        },
        children: Ie("tbody", {
          children: [lt("tr", {
            style: {
              backgroundColor: "inherit",
              borderWidth: "0"
            },
            children: lt("td", {
              style: {
                borderWidth: "0",
                whiteSpace: "nowrap"
              },
              children: lt(Re, {
                children: c[0]
              })
            })
          }, "tr-0"), lt("tr", {
            style: {
              backgroundColor: "inherit",
              borderWidth: "0"
            },
            children: lt("td", {
              style: {
                borderWidth: "0",
                whiteSpace: "nowrap"
              },
              children: (() => {
                var _, v;
                const p = (_ = e.data.datasets[l].data.at(r)) == null ? void 0 : _.value, g = (v = e.data.datasets[l].data.at(
                  r - 1
                )) == null ? void 0 : v.value;
                let m = lt(Re, {}), y = 0;
                if (![p, g].includes(null)) {
                  y = p || 0;
                  const x = y - (g || 0);
                  m = r > -1 && x !== 0 ? lt(u0, {
                    valueDiff: x
                  }) : lt(Re, {});
                }
                return Ie(Re, {
                  children: [new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0
                  }).format(y), " ", m]
                });
              })()
            })
          }, "tr-1")]
        })
      }, `table-${l}`);
    }))
  });
}, u0 = ({
  valueDiff: e
}) => {
  const t = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    notation: "compact"
  }).format(Math.abs(e)).toString();
  return Ie("span", {
    style: {
      color: "rgb(206, 228, 212)",
      display: "inline-block"
    },
    children: [lt("img", {
      src: "/arrow.png",
      style: {
        display: "inline-block",
        marginLeft: "0.5em",
        width: "14px",
        height: "14px",
        position: "relative",
        top: "2px",
        transform: e > 0 ? "rotate(180deg)" : "none"
      }
    }), t]
  });
}, h0 = ({
  chart: e,
  tooltip: t
}) => e && t ? lt(Re, {
  children: Oc({
    chart: e,
    tooltip: t
  })
}) : lt(Re, {}), Oc = ({
  chart: e,
  tooltip: t
}) => {
  const n = e.getActiveElements();
  return n.length === 0 && e.data.datasets[0] && e.data.datasets[1] && (e.setActiveElements([{
    datasetIndex: 0,
    index: Math.max(e.data.datasets[0].data.length - 1, e.data.datasets[1].data.length - 1)
  }, {
    datasetIndex: 1,
    index: Math.max(e.data.datasets[0].data.length - 1, e.data.datasets[1].data.length - 1)
  }]), e.update()), lt(ki, {
    component: "div",
    children: lt(d0, {
      chart: e,
      tooltip: t,
      style: {
        left: `${(n[0] ? n[0].element.x : e.getDatasetMeta(0).data[e.data.datasets[0].data.length - 1].x) + 20}px`
      }
    })
  });
}, ce = {
  point: {
    backgroundColor: "rgb(255, 255, 255)",
    hoverBackgroundColors: ["rgb(77, 76, 76)", "rgb(2, 77, 73)"],
    hoverBorderColors: ["rgb(77, 76, 76)", "rgb(2, 77, 73)"],
    borderColors: ["rgb(77, 76, 76)", "rgb(0, 77, 73)"]
  },
  line: {
    backgroundColors: ["rgb(215, 213, 210)", "rgb(125, 162, 158)"],
    borderColors: ["rgb(77, 76, 76)", "rgb(2, 77, 73)"]
  }
}, Si = {
  aspectRatio: 1.33,
  mouseLine: {
    color: "rgb(77, 76, 76)"
  },
  responsive: !0,
  elements: {
    line: {
      ...ce.line,
      borderWidth: 2,
      fill: "start"
    },
    point: {
      ...ce.point,
      borderWidth: 2,
      hoverRadius: 4.5,
      radius: 3
    }
  },
  interaction: {
    includeInvisible: !1,
    intersect: !1,
    mode: "index"
  },
  parsing: {
    xAxisKey: "label",
    yAxisKey: "value"
  },
  plugins: {
    annotation: {
      annotations: []
    },
    filler: {
      drawTime: "beforeDraw"
    },
    legend: {
      labels: {
        boxHeight: 12,
        boxWidth: 12
      },
      position: "bottom"
    },
    tooltip: {
      bodyAlign: "center",
      callbacks: {
        label: (e) => {
          let t = "";
          return e.parsed.y !== null && (t += new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
          }).format(e.parsed.y)), [e.dataset.label || "", t];
        },
        title: () => ""
      },
      cornerRadius: 0,
      caretPadding: 10,
      caretSize: 0,
      displayColors: !1,
      enabled: !1,
      external: Oc
    }
  },
  scales: {
    x: {
      grace: "5%",
      grid: {
        display: !1
      }
    },
    y: {
      border: {
        display: !1
      },
      grace: "5%",
      ticks: {
        callback: (e) => Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        }).format(e),
        padding: 10
      },
      type: "linear"
    }
  }
}, f0 = {
  id: "hoverLine",
  afterEvent: function(e, { event: t }) {
    const n = e.options, i = e.chartArea;
    if (t.x && t.y && t.x >= i.left && t.y >= i.top && t.x <= i.right && t.y <= i.bottom && e.getActiveElements().length) {
      const s = e.getActiveElements()[0];
      n.mouseLine.x = s.element.x;
    } else
      t.x && t.x > i.right && (n.mouseLine.x = e.getDatasetMeta(0).data[e.data.datasets[0].data.length - 1].x), t.x && t.x < i.left && t.x > e.canvas.getBoundingClientRect().left && (n.mouseLine.x = e.getDatasetMeta(0).data[0].x);
  },
  beforeDatasetsDraw: function(e) {
    const t = e.ctx, n = e.chartArea, i = e.options, s = i.mouseLine.x;
    s != null && s > 0 && (t.save(), t.beginPath(), t.strokeStyle = i.mouseLine.color, t.lineWidth = 2, t.moveTo(i.mouseLine.x || 0, n.bottom), t.lineTo(i.mouseLine.x || 0, n.top), t.setLineDash([2, 2]), t.stroke(), t.beginPath(), t.fillStyle = i.mouseLine.color, t.fill(), t.beginPath(), t.arc(s, n.top, 3, 0, Math.PI + Math.PI * 4 / 2, !1), t.fillStyle = i.mouseLine.color, t.fill(), t.beginPath(), t.arc(s, n.bottom, 3, 0, Math.PI + Math.PI * 4 / 2, !1), t.closePath(), t.fillStyle = i.mouseLine.color, t.fill(), t.restore());
  }
}, g0 = {
  id: "showTooltip",
  afterDatasetUpdate: (e) => {
    var t, n;
    (t = e.tooltip) != null && t.getActiveElements().length || ((n = e.tooltip) == null || n.setActiveElements(
      [
        {
          datasetIndex: 0,
          index: e.data.datasets[0].data.length - 1
        },
        {
          datasetIndex: 1,
          index: e.data.datasets[1].data.length - 1
        }
      ],
      { x: 0, y: 0 }
    ), e.update());
  }
};
Bt.register(Yi, Xi, Bn, se, ic, oc, nc, tc, t0);
const Tc = Gs.createContext(-1), p0 = ({
  data: e,
  options: t,
  theme: n,
  hideLegend: i
}) => {
  var v, M, x, k, O, C, D, F, z, Y, tt, it, U, X;
  const s = Ai(null), [o, r] = ps("$ \u2014");
  xt.font = {
    family: ((v = n == null ? void 0 : n.chart) == null ? void 0 : v.font) || "'Nunito Sans', sans-serif",
    size: 14
  };
  const a = {
    labels: e.labels,
    datasets: [...e.datasets.map((R, L) => {
      var Q, w, T, j, B, I, V, N, H, q, J, G, Pt, P, It, Gt, Yt, Se, fn, gn, ke, ai, li, We, ci;
      return {
        backgroundColor: ((w = (Q = n == null ? void 0 : n.chart) == null ? void 0 : Q.colors) == null ? void 0 : w[L].lineBackgroundColor) || ((j = (T = t == null ? void 0 : t.elements) == null ? void 0 : T.line) == null ? void 0 : j.backgroundColor) || ce.line.backgroundColors[L],
        borderColor: ((I = (B = n == null ? void 0 : n.chart) == null ? void 0 : B.colors) == null ? void 0 : I[L].lineBorderColor) || ((N = (V = t == null ? void 0 : t.elements) == null ? void 0 : V.line) == null ? void 0 : N.borderColor) || ce.line.borderColors[L],
        pointBorderColor: ((q = (H = n == null ? void 0 : n.chart) == null ? void 0 : H.colors) == null ? void 0 : q[L].pointBorderColor) || ((G = (J = t == null ? void 0 : t.elements) == null ? void 0 : J.point) == null ? void 0 : G.borderColor) || ce.point.borderColors[L],
        pointHoverBorderColor: ((P = (Pt = n == null ? void 0 : n.chart) == null ? void 0 : Pt.colors) == null ? void 0 : P[L].pointHoverBorderColor) || ((Gt = (It = t == null ? void 0 : t.elements) == null ? void 0 : It.point) == null ? void 0 : Gt.borderColor) || ((Yt = ce.point) == null ? void 0 : Yt.hoverBorderColors[L]),
        pointHoverBackgroundColor: ((fn = (Se = n == null ? void 0 : n.chart) == null ? void 0 : Se.colors) == null ? void 0 : fn[L].pointHoverBackgroundColor) || ((ke = (gn = t == null ? void 0 : t.elements) == null ? void 0 : gn.point) == null ? void 0 : ke.hoverBackgroundColor) || ce.point.hoverBackgroundColors[L],
        pointBackgroundColor: ((li = (ai = n == null ? void 0 : n.chart) == null ? void 0 : ai.colors) == null ? void 0 : li[L].pointBackgroundColor) || ((ci = (We = t == null ? void 0 : t.elements) == null ? void 0 : We.point) == null ? void 0 : ci.backgroundColor) || ce.point.backgroundColor,
        ...R
      };
    })]
  }, l = {
    plugins: {
      ...Si.plugins,
      ...t == null ? void 0 : t.plugins,
      legend: {
        ...(M = Si.plugins) == null ? void 0 : M.legend,
        ...(x = t == null ? void 0 : t.plugins) == null ? void 0 : x.legend,
        display: !i
      },
      tooltip: {
        ...(k = Si.plugins) == null ? void 0 : k.tooltip,
        ...(O = t == null ? void 0 : t.plugins) == null ? void 0 : O.tooltip,
        titleFont: {
          family: ((C = n == null ? void 0 : n.chart) == null ? void 0 : C.font) || "'Nunito Sans', sans-serif"
        },
        bodyFont: {
          family: ((D = n == null ? void 0 : n.chart) == null ? void 0 : D.font) || "'Nunito Sans', sans-serif"
        }
      }
    }
  }, [c] = ps({
    ...Si,
    ...t,
    ...l
  }), [d, u] = ps(-1);
  le(() => {
    var R, L, Q, w;
    ((R = s.current) == null ? void 0 : R.data.datasets[0].data) && ((L = s.current) == null ? void 0 : L.data.datasets[1].data) && u(Math.max(((Q = s.current) == null ? void 0 : Q.data.datasets[0].data.length) - 1, ((w = s.current) == null ? void 0 : w.data.datasets[1].data.length) - 1));
  }, []), le(() => {
    if (s.current == null || d === -1)
      return;
    const R = s.current;
    R.setActiveElements([{
      datasetIndex: 0,
      index: d
    }, {
      datasetIndex: 1,
      index: d
    }]);
    const L = R.options, Q = R.getActiveElements();
    if (L.mouseLine && Q[0] && (L.mouseLine.x = Q[0].element.x), e && e.datasets[0] && e.datasets[1]) {
      const w = e.datasets[0].data[d].value, T = e.datasets[1].data[d].value;
      w !== null && T !== null && r(Math.abs(w - T));
    }
    R.update();
  }, [d]);
  const h = function(R, L) {
    const Q = R.canvas, w = Q.getBoundingClientRect(), T = new MouseEvent("click", {
      clientX: w.left + L.x,
      clientY: w.top + L.y,
      cancelable: !0,
      bubbles: !0
    });
    Q.dispatchEvent(T);
  }, f = ({
    code: R
  }) => {
    const L = s.current;
    if (L == null)
      return;
    const Q = L.getActiveElements();
    if (R === "ArrowRight") {
      const w = d + 1, T = w === L.data.datasets[0].data.length ? 0 : w;
      u(T);
    } else if (R === "ArrowLeft") {
      const w = d - 1, T = w < 0 ? L.data.datasets[0].data.length - 1 : w;
      u(T);
    } else if (R === "Enter" && Q.length) {
      const w = Q[0], j = L.getDatasetMeta(w.datasetIndex).data[w.index];
      h(L, j);
    }
  }, p = () => {
    var R, L;
    (R = s.current) != null && R.getActiveElements()[0] && u(((L = s.current) == null ? void 0 : L.getActiveElements()[0].index) || 0);
  }, g = [(((F = e.datasets[0].data[d]) == null ? void 0 : F.value) || "unavailable").toString(), (((z = e.datasets[1].data[d]) == null ? void 0 : z.value) || "unavailable").toString()], m = ((Y = s.current) == null ? void 0 : Y.data.labels) != null ? (tt = s.current) == null ? void 0 : tt.data.labels[d] : "null", y = [(it = s.current) == null ? void 0 : it.data.datasets[0].label, (U = s.current) == null ? void 0 : U.data.datasets[1].label], _ = d > -1 ? `${m} ${y[0]} ${g[0]}. ${y[1]} ${g[1]}.` : "";
  return lt(Ii, {
    theme: n,
    children: lt(Tc.Provider, {
      value: d,
      children: Ie(gs, {
        className: "text",
        sx: {
          position: "relative",
          width: "100%"
        },
        children: [lt(ki, {
          fontWeight: 600,
          fontSize: 18,
          children: "Your home equity estimate"
        }), o && lt(ki, {
          variant: "h3",
          component: "h1",
          sx: {
            marginTop: "8px",
            marginBottom: "10px"
          },
          children: typeof o == "number" ? new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
          }).format(o) : o
        }), lt(gs, {
          sx: {
            fontSize: "14px",
            marginBottom: "24px"
          },
          children: Ie(ki, {
            fontSize: 14,
            children: ["Updated on", " ", d > -1 && e.datasets[0].data[d].updated ? Ie(Re, {
              children: [e.datasets[0].data[d].updated, " ", lt("img", {
                style: {
                  width: "20px",
                  verticalAlign: "text-bottom"
                },
                src: a0
              })]
            }) : "\u2014/\u2014/\u2014"]
          })
        }), Ie(gs, {
          sx: {
            position: "relative",
            marginLeft: "-10px"
          },
          children: [lt(r0, {
            data: a,
            options: c,
            plugins: [f0, g0],
            "aria-label": _,
            "aria-live": "assertive",
            ref: s,
            onKeyUp: f,
            tabIndex: 0,
            onTouchMove: p,
            onMouseMove: p,
            onMouseOver: () => u(0),
            onMouseOut: () => {
              u(e.datasets[0].data.length - 1);
            }
          }), lt(h0, {
            chart: s.current,
            tooltip: (X = s.current) == null ? void 0 : X.tooltip
          })]
        })]
      })
    })
  });
};
p0.displayName = "LineChart";
export {
  p0 as LineChart
};
