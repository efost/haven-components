var Tc = Object.defineProperty;
var Dc = (n, t, e) => t in n ? Tc(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var D = (n, t, e) => (Dc(n, typeof t != "symbol" ? t + "" : t, e), e);
import * as _i from "react";
import Aa, { forwardRef as Ta, useRef as ws, useEffect as Me, useState as Co } from "react";
import Rc from "@emotion/styled";
import "@emotion/react";
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(n) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    }
    return n;
  }, mt.apply(this, arguments);
}
function Ce(n) {
  return n !== null && typeof n == "object" && n.constructor === Object;
}
function Da(n) {
  if (!Ce(n))
    return n;
  const t = {};
  return Object.keys(n).forEach((e) => {
    t[e] = Da(n[e]);
  }), t;
}
function ne(n, t, e = {
  clone: !0
}) {
  const i = e.clone ? mt({}, n) : n;
  return Ce(n) && Ce(t) && Object.keys(t).forEach((s) => {
    s !== "__proto__" && (Ce(t[s]) && s in n && Ce(n[s]) ? i[s] = ne(n[s], t[s], e) : e.clone ? i[s] = Ce(t[s]) ? Da(t[s]) : t[s] : i[s] = t[s]);
  }), i;
}
var Ot = { exports: {} }, es = { exports: {} }, st = {}, Oo;
function Ic() {
  if (Oo)
    return st;
  Oo = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, h = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, f = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, m = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, _ = n ? Symbol.for("react.scope") : 60119;
  function w(x) {
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
            case h:
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
        case e:
          return k;
      }
    }
  }
  function v(x) {
    return w(x) === c;
  }
  return st.AsyncMode = l, st.ConcurrentMode = c, st.ContextConsumer = a, st.ContextProvider = r, st.Element = t, st.ForwardRef = d, st.Fragment = i, st.Lazy = p, st.Memo = f, st.Portal = e, st.Profiler = o, st.StrictMode = s, st.Suspense = h, st.isAsyncMode = function(x) {
    return v(x) || w(x) === l;
  }, st.isConcurrentMode = v, st.isContextConsumer = function(x) {
    return w(x) === a;
  }, st.isContextProvider = function(x) {
    return w(x) === r;
  }, st.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, st.isForwardRef = function(x) {
    return w(x) === d;
  }, st.isFragment = function(x) {
    return w(x) === i;
  }, st.isLazy = function(x) {
    return w(x) === p;
  }, st.isMemo = function(x) {
    return w(x) === f;
  }, st.isPortal = function(x) {
    return w(x) === e;
  }, st.isProfiler = function(x) {
    return w(x) === o;
  }, st.isStrictMode = function(x) {
    return w(x) === s;
  }, st.isSuspense = function(x) {
    return w(x) === h;
  }, st.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === c || x === o || x === s || x === h || x === u || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === f || x.$$typeof === r || x.$$typeof === a || x.$$typeof === d || x.$$typeof === m || x.$$typeof === y || x.$$typeof === _ || x.$$typeof === g);
  }, st.typeOf = w, st;
}
var ot = {}, Eo;
function Lc() {
  return Eo || (Eo = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, h = n ? Symbol.for("react.suspense") : 60113, u = n ? Symbol.for("react.suspense_list") : 60120, f = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, m = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, _ = n ? Symbol.for("react.scope") : 60119;
    function w(T) {
      return typeof T == "string" || typeof T == "function" || T === i || T === c || T === o || T === s || T === h || T === u || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === f || T.$$typeof === r || T.$$typeof === a || T.$$typeof === d || T.$$typeof === m || T.$$typeof === y || T.$$typeof === _ || T.$$typeof === g);
    }
    function v(T) {
      if (typeof T == "object" && T !== null) {
        var Wt = T.$$typeof;
        switch (Wt) {
          case t:
            var Ie = T.type;
            switch (Ie) {
              case l:
              case c:
              case i:
              case o:
              case s:
              case h:
                return Ie;
              default:
                var xe = Ie && Ie.$$typeof;
                switch (xe) {
                  case a:
                  case d:
                  case p:
                  case f:
                  case r:
                    return xe;
                  default:
                    return Wt;
                }
            }
          case e:
            return Wt;
        }
      }
    }
    var x = l, k = c, C = a, P = r, O = t, I = d, R = i, F = p, q = f, et = e, $ = o, V = s, J = h, bt = !1;
    function ht(T) {
      return bt || (bt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(T) || v(T) === l;
    }
    function S(T) {
      return v(T) === c;
    }
    function E(T) {
      return v(T) === a;
    }
    function j(T) {
      return v(T) === r;
    }
    function z(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function L(T) {
      return v(T) === d;
    }
    function Y(T) {
      return v(T) === i;
    }
    function B(T) {
      return v(T) === p;
    }
    function U(T) {
      return v(T) === f;
    }
    function X(T) {
      return v(T) === e;
    }
    function Q(T) {
      return v(T) === o;
    }
    function K(T) {
      return v(T) === s;
    }
    function At(T) {
      return v(T) === h;
    }
    ot.AsyncMode = x, ot.ConcurrentMode = k, ot.ContextConsumer = C, ot.ContextProvider = P, ot.Element = O, ot.ForwardRef = I, ot.Fragment = R, ot.Lazy = F, ot.Memo = q, ot.Portal = et, ot.Profiler = $, ot.StrictMode = V, ot.Suspense = J, ot.isAsyncMode = ht, ot.isConcurrentMode = S, ot.isContextConsumer = E, ot.isContextProvider = j, ot.isElement = z, ot.isForwardRef = L, ot.isFragment = Y, ot.isLazy = B, ot.isMemo = U, ot.isPortal = X, ot.isProfiler = Q, ot.isStrictMode = K, ot.isSuspense = At, ot.isValidElementType = w, ot.typeOf = v;
  }()), ot;
}
var Ao;
function Ra() {
  return Ao || (Ao = 1, function(n) {
    process.env.NODE_ENV === "production" ? n.exports = Ic() : n.exports = Lc();
  }(es)), es.exports;
}
var ns, To;
function Fc() {
  if (To)
    return ns;
  To = 1;
  var n = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, e = Object.prototype.propertyIsEnumerable;
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
  return ns = s() ? Object.assign : function(o, r) {
    for (var a, l = i(o), c, d = 1; d < arguments.length; d++) {
      a = Object(arguments[d]);
      for (var h in a)
        t.call(a, h) && (l[h] = a[h]);
      if (n) {
        c = n(a);
        for (var u = 0; u < c.length; u++)
          e.call(a, c[u]) && (l[c[u]] = a[c[u]]);
      }
    }
    return l;
  }, ns;
}
var is, Do;
function Fs() {
  if (Do)
    return is;
  Do = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return is = n, is;
}
var ss, Ro;
function Ia() {
  return Ro || (Ro = 1, ss = Function.call.bind(Object.prototype.hasOwnProperty)), ss;
}
var os, Io;
function jc() {
  if (Io)
    return os;
  Io = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Fs(), e = {}, i = Ia();
    n = function(o) {
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
          var h;
          try {
            if (typeof o[d] != "function") {
              var u = Error(
                (l || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            h = o[d](r, d, l, a, null, t);
          } catch (p) {
            h = p;
          }
          if (h && !(h instanceof Error) && n(
            (l || "React class") + ": type specification of " + a + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in e)) {
            e[h.message] = !0;
            var f = c ? c() : "";
            n(
              "Failed " + a + " type: " + h.message + (f != null ? f : "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, os = s, os;
}
var rs, Lo;
function zc() {
  if (Lo)
    return rs;
  Lo = 1;
  var n = Ra(), t = Fc(), e = Fs(), i = Ia(), s = jc(), o = function() {
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
  return rs = function(a, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(S) {
      var E = S && (c && S[c] || S[d]);
      if (typeof E == "function")
        return E;
    }
    var u = "<<anonymous>>", f = {
      array: y("array"),
      bigint: y("bigint"),
      bool: y("boolean"),
      func: y("function"),
      number: y("number"),
      object: y("object"),
      string: y("string"),
      symbol: y("symbol"),
      any: _(),
      arrayOf: w,
      element: v(),
      elementType: x(),
      instanceOf: k,
      node: I(),
      objectOf: P,
      oneOf: C,
      oneOfType: O,
      shape: F,
      exact: q
    };
    function p(S, E) {
      return S === E ? S !== 0 || 1 / S === 1 / E : S !== S && E !== E;
    }
    function g(S, E) {
      this.message = S, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(S) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, j = 0;
      function z(Y, B, U, X, Q, K, At) {
        if (X = X || u, K = K || U, At !== e) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Wt = X + ":" + U;
            !E[Wt] && j < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + K + "` prop on `" + X + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[Wt] = !0, j++);
          }
        }
        return B[U] == null ? Y ? B[U] === null ? new g("The " + Q + " `" + K + "` is marked as required " + ("in `" + X + "`, but its value is `null`.")) : new g("The " + Q + " `" + K + "` is marked as required in " + ("`" + X + "`, but its value is `undefined`.")) : null : S(B, U, X, Q, K);
      }
      var L = z.bind(null, !1);
      return L.isRequired = z.bind(null, !0), L;
    }
    function y(S) {
      function E(j, z, L, Y, B, U) {
        var X = j[z], Q = V(X);
        if (Q !== S) {
          var K = J(X);
          return new g(
            "Invalid " + Y + " `" + B + "` of type " + ("`" + K + "` supplied to `" + L + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return m(E);
    }
    function _() {
      return m(r);
    }
    function w(S) {
      function E(j, z, L, Y, B) {
        if (typeof S != "function")
          return new g("Property `" + B + "` of component `" + L + "` has invalid PropType notation inside arrayOf.");
        var U = j[z];
        if (!Array.isArray(U)) {
          var X = V(U);
          return new g("Invalid " + Y + " `" + B + "` of type " + ("`" + X + "` supplied to `" + L + "`, expected an array."));
        }
        for (var Q = 0; Q < U.length; Q++) {
          var K = S(U, Q, L, Y, B + "[" + Q + "]", e);
          if (K instanceof Error)
            return K;
        }
        return null;
      }
      return m(E);
    }
    function v() {
      function S(E, j, z, L, Y) {
        var B = E[j];
        if (!a(B)) {
          var U = V(B);
          return new g("Invalid " + L + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(S);
    }
    function x() {
      function S(E, j, z, L, Y) {
        var B = E[j];
        if (!n.isValidElementType(B)) {
          var U = V(B);
          return new g("Invalid " + L + " `" + Y + "` of type " + ("`" + U + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(S);
    }
    function k(S) {
      function E(j, z, L, Y, B) {
        if (!(j[z] instanceof S)) {
          var U = S.name || u, X = ht(j[z]);
          return new g("Invalid " + Y + " `" + B + "` of type " + ("`" + X + "` supplied to `" + L + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return m(E);
    }
    function C(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), r;
      function E(j, z, L, Y, B) {
        for (var U = j[z], X = 0; X < S.length; X++)
          if (p(U, S[X]))
            return null;
        var Q = JSON.stringify(S, function(At, T) {
          var Wt = J(T);
          return Wt === "symbol" ? String(T) : T;
        });
        return new g("Invalid " + Y + " `" + B + "` of value `" + String(U) + "` " + ("supplied to `" + L + "`, expected one of " + Q + "."));
      }
      return m(E);
    }
    function P(S) {
      function E(j, z, L, Y, B) {
        if (typeof S != "function")
          return new g("Property `" + B + "` of component `" + L + "` has invalid PropType notation inside objectOf.");
        var U = j[z], X = V(U);
        if (X !== "object")
          return new g("Invalid " + Y + " `" + B + "` of type " + ("`" + X + "` supplied to `" + L + "`, expected an object."));
        for (var Q in U)
          if (i(U, Q)) {
            var K = S(U, Q, L, Y, B + "." + Q, e);
            if (K instanceof Error)
              return K;
          }
        return null;
      }
      return m(E);
    }
    function O(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var E = 0; E < S.length; E++) {
        var j = S[E];
        if (typeof j != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + bt(j) + " at index " + E + "."
          ), r;
      }
      function z(L, Y, B, U, X) {
        for (var Q = [], K = 0; K < S.length; K++) {
          var At = S[K], T = At(L, Y, B, U, X, e);
          if (T == null)
            return null;
          T.data && i(T.data, "expectedType") && Q.push(T.data.expectedType);
        }
        var Wt = Q.length > 0 ? ", expected one of type [" + Q.join(", ") + "]" : "";
        return new g("Invalid " + U + " `" + X + "` supplied to " + ("`" + B + "`" + Wt + "."));
      }
      return m(z);
    }
    function I() {
      function S(E, j, z, L, Y) {
        return et(E[j]) ? null : new g("Invalid " + L + " `" + Y + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return m(S);
    }
    function R(S, E, j, z, L) {
      return new g(
        (S || "React class") + ": " + E + " type `" + j + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + L + "`."
      );
    }
    function F(S) {
      function E(j, z, L, Y, B) {
        var U = j[z], X = V(U);
        if (X !== "object")
          return new g("Invalid " + Y + " `" + B + "` of type `" + X + "` " + ("supplied to `" + L + "`, expected `object`."));
        for (var Q in S) {
          var K = S[Q];
          if (typeof K != "function")
            return R(L, Y, B, Q, J(K));
          var At = K(U, Q, L, Y, B + "." + Q, e);
          if (At)
            return At;
        }
        return null;
      }
      return m(E);
    }
    function q(S) {
      function E(j, z, L, Y, B) {
        var U = j[z], X = V(U);
        if (X !== "object")
          return new g("Invalid " + Y + " `" + B + "` of type `" + X + "` " + ("supplied to `" + L + "`, expected `object`."));
        var Q = t({}, j[z], S);
        for (var K in Q) {
          var At = S[K];
          if (i(S, K) && typeof At != "function")
            return R(L, Y, B, K, J(At));
          if (!At)
            return new g(
              "Invalid " + Y + " `" + B + "` key `" + K + "` supplied to `" + L + "`.\nBad object: " + JSON.stringify(j[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var T = At(U, K, L, Y, B + "." + K, e);
          if (T)
            return T;
        }
        return null;
      }
      return m(E);
    }
    function et(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(et);
          if (S === null || a(S))
            return !0;
          var E = h(S);
          if (E) {
            var j = E.call(S), z;
            if (E !== S.entries) {
              for (; !(z = j.next()).done; )
                if (!et(z.value))
                  return !1;
            } else
              for (; !(z = j.next()).done; ) {
                var L = z.value;
                if (L && !et(L[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(S, E) {
      return S === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function V(S) {
      var E = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : $(E, S) ? "symbol" : E;
    }
    function J(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var E = V(S);
      if (E === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function bt(S) {
      var E = J(S);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function ht(S) {
      return !S.constructor || !S.constructor.name ? u : S.constructor.name;
    }
    return f.checkPropTypes = s, f.resetWarningCache = s.resetWarningCache, f.PropTypes = f, f;
  }, rs;
}
var as, Fo;
function Bc() {
  if (Fo)
    return as;
  Fo = 1;
  var n = Fs();
  function t() {
  }
  function e() {
  }
  return e.resetWarningCache = t, as = function() {
    function i(r, a, l, c, d, h) {
      if (h !== n) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
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
      checkPropTypes: e,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, as;
}
if (process.env.NODE_ENV !== "production") {
  var Wc = Ra(), Nc = !0;
  Ot.exports = zc()(Wc.isElement, Nc);
} else
  Ot.exports = Bc()();
function qe(n) {
  let t = "https://mui.com/production-error/?code=" + n;
  for (let e = 1; e < arguments.length; e += 1)
    t += "&args[]=" + encodeURIComponent(arguments[e]);
  return "Minified MUI error #" + n + "; visit " + t + " for the full message.";
}
function La(n) {
  if (typeof n != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : qe(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const jo = (n) => n, $c = () => {
  let n = jo;
  return {
    configure(t) {
      n = t;
    },
    generate(t) {
      return n(t);
    },
    reset() {
      n = jo;
    }
  };
}, Vc = $c(), Fa = Vc, Hc = {
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
function Yc(n, t, e = "Mui") {
  const i = Hc[t];
  return i ? `${e}-${i}` : `${Fa.generate(n)}-${t}`;
}
var js = { exports: {} }, cn = {}, zo;
function Uc() {
  if (zo)
    return cn;
  zo = 1;
  var n = Aa, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, c) {
    var d, h = {}, u = null, f = null;
    c !== void 0 && (u = "" + c), l.key !== void 0 && (u = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (d in l)
      i.call(l, d) && !o.hasOwnProperty(d) && (h[d] = l[d]);
    if (a && a.defaultProps)
      for (d in l = a.defaultProps, l)
        h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: t, type: a, key: u, ref: f, props: h, _owner: s.current };
  }
  return cn.Fragment = e, cn.jsx = r, cn.jsxs = r, cn;
}
var dn = {}, Bo;
function Xc() {
  return Bo || (Bo = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Aa, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function m(b) {
      if (b === null || typeof b != "object")
        return null;
      var M = p && b[p] || b[g];
      return typeof M == "function" ? M : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(b) {
      {
        for (var M = arguments.length, A = new Array(M > 1 ? M - 1 : 0), N = 1; N < M; N++)
          A[N - 1] = arguments[N];
        w("error", b, A);
      }
    }
    function w(b, M, A) {
      {
        var N = y.ReactDebugCurrentFrame, nt = N.getStackAddendum();
        nt !== "" && (M += "%s", A = A.concat([nt]));
        var ct = A.map(function(Z) {
          return String(Z);
        });
        ct.unshift("Warning: " + M), Function.prototype.apply.call(console[b], console, ct);
      }
    }
    var v = !1, x = !1, k = !1, C = !1, P = !1, O;
    O = Symbol.for("react.module.reference");
    function I(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === i || b === o || P || b === s || b === c || b === d || C || b === f || v || x || k || typeof b == "object" && b !== null && (b.$$typeof === u || b.$$typeof === h || b.$$typeof === r || b.$$typeof === a || b.$$typeof === l || b.$$typeof === O || b.getModuleId !== void 0));
    }
    function R(b, M, A) {
      var N = b.displayName;
      if (N)
        return N;
      var nt = M.displayName || M.name || "";
      return nt !== "" ? A + "(" + nt + ")" : A;
    }
    function F(b) {
      return b.displayName || "Context";
    }
    function q(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case i:
          return "Fragment";
        case e:
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
            var M = b;
            return F(M) + ".Consumer";
          case r:
            var A = b;
            return F(A._context) + ".Provider";
          case l:
            return R(b, b.render, "ForwardRef");
          case h:
            var N = b.displayName || null;
            return N !== null ? N : q(b.type) || "Memo";
          case u: {
            var nt = b, ct = nt._payload, Z = nt._init;
            try {
              return q(Z(ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var et = Object.assign, $ = 0, V, J, bt, ht, S, E, j;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function L() {
      {
        if ($ === 0) {
          V = console.log, J = console.info, bt = console.warn, ht = console.error, S = console.group, E = console.groupCollapsed, j = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: z,
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
        $++;
      }
    }
    function Y() {
      {
        if ($--, $ === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, b, {
              value: V
            }),
            info: et({}, b, {
              value: J
            }),
            warn: et({}, b, {
              value: bt
            }),
            error: et({}, b, {
              value: ht
            }),
            group: et({}, b, {
              value: S
            }),
            groupCollapsed: et({}, b, {
              value: E
            }),
            groupEnd: et({}, b, {
              value: j
            })
          });
        }
        $ < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = y.ReactCurrentDispatcher, U;
    function X(b, M, A) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (nt) {
            var N = nt.stack.trim().match(/\n( *(at )?)/);
            U = N && N[1] || "";
          }
        return `
` + U + b;
      }
    }
    var Q = !1, K;
    {
      var At = typeof WeakMap == "function" ? WeakMap : Map;
      K = new At();
    }
    function T(b, M) {
      if (!b || Q)
        return "";
      {
        var A = K.get(b);
        if (A !== void 0)
          return A;
      }
      var N;
      Q = !0;
      var nt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ct;
      ct = B.current, B.current = null, L();
      try {
        if (M) {
          var Z = function() {
            throw Error();
          };
          if (Object.defineProperty(Z.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Z, []);
            } catch (Kt) {
              N = Kt;
            }
            Reflect.construct(b, [], Z);
          } else {
            try {
              Z.call();
            } catch (Kt) {
              N = Kt;
            }
            b.call(Z.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Kt) {
            N = Kt;
          }
          b();
        }
      } catch (Kt) {
        if (Kt && N && typeof Kt.stack == "string") {
          for (var G = Kt.stack.split(`
`), Rt = N.stack.split(`
`), wt = G.length - 1, Mt = Rt.length - 1; wt >= 1 && Mt >= 0 && G[wt] !== Rt[Mt]; )
            Mt--;
          for (; wt >= 1 && Mt >= 0; wt--, Mt--)
            if (G[wt] !== Rt[Mt]) {
              if (wt !== 1 || Mt !== 1)
                do
                  if (wt--, Mt--, Mt < 0 || G[wt] !== Rt[Mt]) {
                    var Nt = `
` + G[wt].replace(" at new ", " at ");
                    return b.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", b.displayName)), typeof b == "function" && K.set(b, Nt), Nt;
                  }
                while (wt >= 1 && Mt >= 0);
              break;
            }
        }
      } finally {
        Q = !1, B.current = ct, Y(), Error.prepareStackTrace = nt;
      }
      var Fe = b ? b.displayName || b.name : "", Po = Fe ? X(Fe) : "";
      return typeof b == "function" && K.set(b, Po), Po;
    }
    function Wt(b, M, A) {
      return T(b, !1);
    }
    function Ie(b) {
      var M = b.prototype;
      return !!(M && M.isReactComponent);
    }
    function xe(b, M, A) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return T(b, Ie(b));
      if (typeof b == "string")
        return X(b);
      switch (b) {
        case c:
          return X("Suspense");
        case d:
          return X("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return Wt(b.render);
          case h:
            return xe(b.type, M, A);
          case u: {
            var N = b, nt = N._payload, ct = N._init;
            try {
              return xe(ct(nt), M, A);
            } catch {
            }
          }
        }
      return "";
    }
    var Qn = Object.prototype.hasOwnProperty, go = {}, po = y.ReactDebugCurrentFrame;
    function ti(b) {
      if (b) {
        var M = b._owner, A = xe(b.type, b._source, M ? M.type : null);
        po.setExtraStackFrame(A);
      } else
        po.setExtraStackFrame(null);
    }
    function hc(b, M, A, N, nt) {
      {
        var ct = Function.call.bind(Qn);
        for (var Z in b)
          if (ct(b, Z)) {
            var G = void 0;
            try {
              if (typeof b[Z] != "function") {
                var Rt = Error((N || "React class") + ": " + A + " type `" + Z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[Z] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rt.name = "Invariant Violation", Rt;
              }
              G = b[Z](M, Z, N, A, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (wt) {
              G = wt;
            }
            G && !(G instanceof Error) && (ti(nt), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", A, Z, typeof G), ti(null)), G instanceof Error && !(G.message in go) && (go[G.message] = !0, ti(nt), _("Failed %s type: %s", A, G.message), ti(null));
          }
      }
    }
    var uc = Array.isArray;
    function Gi(b) {
      return uc(b);
    }
    function fc(b) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, A = M && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return A;
      }
    }
    function gc(b) {
      try {
        return mo(b), !1;
      } catch {
        return !0;
      }
    }
    function mo(b) {
      return "" + b;
    }
    function bo(b) {
      if (gc(b))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fc(b)), mo(b);
    }
    var ln = y.ReactCurrentOwner, pc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, yo, xo, Ji;
    Ji = {};
    function mc(b) {
      if (Qn.call(b, "ref")) {
        var M = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function bc(b) {
      if (Qn.call(b, "key")) {
        var M = Object.getOwnPropertyDescriptor(b, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function yc(b, M) {
      if (typeof b.ref == "string" && ln.current && M && ln.current.stateNode !== M) {
        var A = q(ln.current.type);
        Ji[A] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', q(ln.current.type), b.ref), Ji[A] = !0);
      }
    }
    function xc(b, M) {
      {
        var A = function() {
          yo || (yo = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        A.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: A,
          configurable: !0
        });
      }
    }
    function _c(b, M) {
      {
        var A = function() {
          xo || (xo = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        A.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: A,
          configurable: !0
        });
      }
    }
    var vc = function(b, M, A, N, nt, ct, Z) {
      var G = {
        $$typeof: t,
        type: b,
        key: M,
        ref: A,
        props: Z,
        _owner: ct
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: nt
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function wc(b, M, A, N, nt) {
      {
        var ct, Z = {}, G = null, Rt = null;
        A !== void 0 && (bo(A), G = "" + A), bc(M) && (bo(M.key), G = "" + M.key), mc(M) && (Rt = M.ref, yc(M, nt));
        for (ct in M)
          Qn.call(M, ct) && !pc.hasOwnProperty(ct) && (Z[ct] = M[ct]);
        if (b && b.defaultProps) {
          var wt = b.defaultProps;
          for (ct in wt)
            Z[ct] === void 0 && (Z[ct] = wt[ct]);
        }
        if (G || Rt) {
          var Mt = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          G && xc(Z, Mt), Rt && _c(Z, Mt);
        }
        return vc(b, G, Rt, nt, N, ln.current, Z);
      }
    }
    var Zi = y.ReactCurrentOwner, _o = y.ReactDebugCurrentFrame;
    function Le(b) {
      if (b) {
        var M = b._owner, A = xe(b.type, b._source, M ? M.type : null);
        _o.setExtraStackFrame(A);
      } else
        _o.setExtraStackFrame(null);
    }
    var Qi;
    Qi = !1;
    function ts(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function vo() {
      {
        if (Zi.current) {
          var b = q(Zi.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Sc(b) {
      {
        if (b !== void 0) {
          var M = b.fileName.replace(/^.*[\\\/]/, ""), A = b.lineNumber;
          return `

Check your code at ` + M + ":" + A + ".";
        }
        return "";
      }
    }
    var wo = {};
    function Mc(b) {
      {
        var M = vo();
        if (!M) {
          var A = typeof b == "string" ? b : b.displayName || b.name;
          A && (M = `

Check the top-level render call using <` + A + ">.");
        }
        return M;
      }
    }
    function So(b, M) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var A = Mc(M);
        if (wo[A])
          return;
        wo[A] = !0;
        var N = "";
        b && b._owner && b._owner !== Zi.current && (N = " It was passed a child from " + q(b._owner.type) + "."), Le(b), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', A, N), Le(null);
      }
    }
    function Mo(b, M) {
      {
        if (typeof b != "object")
          return;
        if (Gi(b))
          for (var A = 0; A < b.length; A++) {
            var N = b[A];
            ts(N) && So(N, M);
          }
        else if (ts(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var nt = m(b);
          if (typeof nt == "function" && nt !== b.entries)
            for (var ct = nt.call(b), Z; !(Z = ct.next()).done; )
              ts(Z.value) && So(Z.value, M);
        }
      }
    }
    function kc(b) {
      {
        var M = b.type;
        if (M == null || typeof M == "string")
          return;
        var A;
        if (typeof M == "function")
          A = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === l || M.$$typeof === h))
          A = M.propTypes;
        else
          return;
        if (A) {
          var N = q(M);
          hc(A, b.props, "prop", N, b);
        } else if (M.PropTypes !== void 0 && !Qi) {
          Qi = !0;
          var nt = q(M);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", nt || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pc(b) {
      {
        for (var M = Object.keys(b.props), A = 0; A < M.length; A++) {
          var N = M[A];
          if (N !== "children" && N !== "key") {
            Le(b), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), Le(null);
            break;
          }
        }
        b.ref !== null && (Le(b), _("Invalid attribute `ref` supplied to `React.Fragment`."), Le(null));
      }
    }
    function ko(b, M, A, N, nt, ct) {
      {
        var Z = I(b);
        if (!Z) {
          var G = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rt = Sc(nt);
          Rt ? G += Rt : G += vo();
          var wt;
          b === null ? wt = "null" : Gi(b) ? wt = "array" : b !== void 0 && b.$$typeof === t ? (wt = "<" + (q(b.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : wt = typeof b, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", wt, G);
        }
        var Mt = wc(b, M, A, nt, ct);
        if (Mt == null)
          return Mt;
        if (Z) {
          var Nt = M.children;
          if (Nt !== void 0)
            if (N)
              if (Gi(Nt)) {
                for (var Fe = 0; Fe < Nt.length; Fe++)
                  Mo(Nt[Fe], b);
                Object.freeze && Object.freeze(Nt);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mo(Nt, b);
        }
        return b === i ? Pc(Mt) : kc(Mt), Mt;
      }
    }
    function Cc(b, M, A) {
      return ko(b, M, A, !0);
    }
    function Oc(b, M, A) {
      return ko(b, M, A, !1);
    }
    var Ec = Oc, Ac = Cc;
    dn.Fragment = i, dn.jsx = Ec, dn.jsxs = Ac;
  }()), dn;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Uc() : n.exports = Xc();
})(js);
const Kc = js.exports.Fragment, Ye = js.exports.jsx;
function qc(n, t) {
  const e = Rc(n, t);
  return process.env.NODE_ENV !== "production" ? (...i) => {
    const s = typeof n == "string" ? `"${n}"` : "component";
    return i.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : i.some((o) => o === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), e(...i);
  } : e;
}
const Gc = process.env.NODE_ENV !== "production" ? Ot.exports.oneOfType([Ot.exports.number, Ot.exports.string, Ot.exports.object, Ot.exports.array]) : {}, pe = Gc;
function Sn(n, t) {
  return t ? ne(n, t, {
    clone: !1
  }) : n;
}
const zs = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, Wo = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (n) => `@media (min-width:${zs[n]}px)`
};
function ie(n, t, e) {
  const i = n.theme || {};
  if (Array.isArray(t)) {
    const o = i.breakpoints || Wo;
    return t.reduce((r, a, l) => (r[o.up(o.keys[l])] = e(t[l]), r), {});
  }
  if (typeof t == "object") {
    const o = i.breakpoints || Wo;
    return Object.keys(t).reduce((r, a) => {
      if (Object.keys(o.values || zs).indexOf(a) !== -1) {
        const l = o.up(a);
        r[l] = e(t[a], a);
      } else {
        const l = a;
        r[l] = t[l];
      }
      return r;
    }, {});
  }
  return e(t);
}
function Jc(n = {}) {
  var t;
  return ((t = n.keys) == null ? void 0 : t.reduce((i, s) => {
    const o = n.up(s);
    return i[o] = {}, i;
  }, {})) || {};
}
function Zc(n, t) {
  return n.reduce((e, i) => {
    const s = e[i];
    return (!s || Object.keys(s).length === 0) && delete e[i], e;
  }, t);
}
function Li(n, t, e = !0) {
  if (!t || typeof t != "string")
    return null;
  if (n && n.vars && e) {
    const i = `vars.${t}`.split(".").reduce((s, o) => s && s[o] ? s[o] : null, n);
    if (i != null)
      return i;
  }
  return t.split(".").reduce((i, s) => i && i[s] != null ? i[s] : null, n);
}
function vi(n, t, e, i = e) {
  let s;
  return typeof n == "function" ? s = n(e) : Array.isArray(n) ? s = n[e] || i : s = Li(n, e) || i, t && (s = t(s, i, n)), s;
}
function rt(n) {
  const {
    prop: t,
    cssProperty: e = n.prop,
    themeKey: i,
    transform: s
  } = n, o = (r) => {
    if (r[t] == null)
      return null;
    const a = r[t], l = r.theme, c = Li(l, i) || {};
    return ie(r, a, (h) => {
      let u = vi(c, s, h);
      return h === u && typeof h == "string" && (u = vi(c, s, `${t}${h === "default" ? "" : La(h)}`, h)), e === !1 ? u : {
        [e]: u
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: pe
  } : {}, o.filterProps = [t], o;
}
function Fi(...n) {
  const t = n.reduce((i, s) => (s.filterProps.forEach((o) => {
    i[o] = s;
  }), i), {}), e = (i) => Object.keys(i).reduce((s, o) => t[o] ? Sn(s, t[o](i)) : s, {});
  return e.propTypes = process.env.NODE_ENV !== "production" ? n.reduce((i, s) => Object.assign(i, s.propTypes), {}) : {}, e.filterProps = n.reduce((i, s) => i.concat(s.filterProps), []), e;
}
function Qc(n) {
  const t = {};
  return (e) => (t[e] === void 0 && (t[e] = n(e)), t[e]);
}
const td = {
  m: "margin",
  p: "padding"
}, ed = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, No = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, nd = Qc((n) => {
  if (n.length > 2)
    if (No[n])
      n = No[n];
    else
      return [n];
  const [t, e] = n.split(""), i = td[t], s = ed[e] || "";
  return Array.isArray(s) ? s.map((o) => i + o) : [i + s];
}), ji = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], zi = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], id = [...ji, ...zi];
function Vn(n, t, e, i) {
  var s;
  const o = (s = Li(n, t, !1)) != null ? s : e;
  return typeof o == "number" ? (r) => typeof r == "string" ? r : (process.env.NODE_ENV !== "production" && typeof r != "number" && console.error(`MUI: Expected ${i} argument to be a number or a string, got ${r}.`), o * r) : Array.isArray(o) ? (r) => typeof r == "string" ? r : (process.env.NODE_ENV !== "production" && (Number.isInteger(r) ? r > o.length - 1 && console.error([`MUI: The value provided (${r}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${r} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[r]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ja(n) {
  return Vn(n, "spacing", 8, "spacing");
}
function Hn(n, t) {
  if (typeof t == "string" || t == null)
    return t;
  const e = Math.abs(t), i = n(e);
  return t >= 0 ? i : typeof i == "number" ? -i : `-${i}`;
}
function sd(n, t) {
  return (e) => n.reduce((i, s) => (i[s] = Hn(t, e), i), {});
}
function od(n, t, e, i) {
  if (t.indexOf(e) === -1)
    return null;
  const s = nd(e), o = sd(s, i), r = n[e];
  return ie(n, r, o);
}
function za(n, t) {
  const e = ja(n.theme);
  return Object.keys(n).map((i) => od(n, t, i, e)).reduce(Sn, {});
}
function yt(n) {
  return za(n, ji);
}
yt.propTypes = process.env.NODE_ENV !== "production" ? ji.reduce((n, t) => (n[t] = pe, n), {}) : {};
yt.filterProps = ji;
function xt(n) {
  return za(n, zi);
}
xt.propTypes = process.env.NODE_ENV !== "production" ? zi.reduce((n, t) => (n[t] = pe, n), {}) : {};
xt.filterProps = zi;
process.env.NODE_ENV !== "production" && id.reduce((n, t) => (n[t] = pe, n), {});
function Ut(n) {
  return typeof n != "number" ? n : `${n}px solid`;
}
const rd = rt({
  prop: "border",
  themeKey: "borders",
  transform: Ut
}), ad = rt({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ut
}), ld = rt({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ut
}), cd = rt({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ut
}), dd = rt({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ut
}), hd = rt({
  prop: "borderColor",
  themeKey: "palette"
}), ud = rt({
  prop: "borderTopColor",
  themeKey: "palette"
}), fd = rt({
  prop: "borderRightColor",
  themeKey: "palette"
}), gd = rt({
  prop: "borderBottomColor",
  themeKey: "palette"
}), pd = rt({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Bi = (n) => {
  if (n.borderRadius !== void 0 && n.borderRadius !== null) {
    const t = Vn(n.theme, "shape.borderRadius", 4, "borderRadius"), e = (i) => ({
      borderRadius: Hn(t, i)
    });
    return ie(n, n.borderRadius, e);
  }
  return null;
};
Bi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: pe
} : {};
Bi.filterProps = ["borderRadius"];
Fi(rd, ad, ld, cd, dd, hd, ud, fd, gd, pd, Bi);
const Wi = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const t = Vn(n.theme, "spacing", 8, "gap"), e = (i) => ({
      gap: Hn(t, i)
    });
    return ie(n, n.gap, e);
  }
  return null;
};
Wi.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: pe
} : {};
Wi.filterProps = ["gap"];
const Ni = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const t = Vn(n.theme, "spacing", 8, "columnGap"), e = (i) => ({
      columnGap: Hn(t, i)
    });
    return ie(n, n.columnGap, e);
  }
  return null;
};
Ni.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: pe
} : {};
Ni.filterProps = ["columnGap"];
const $i = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const t = Vn(n.theme, "spacing", 8, "rowGap"), e = (i) => ({
      rowGap: Hn(t, i)
    });
    return ie(n, n.rowGap, e);
  }
  return null;
};
$i.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: pe
} : {};
$i.filterProps = ["rowGap"];
const md = rt({
  prop: "gridColumn"
}), bd = rt({
  prop: "gridRow"
}), yd = rt({
  prop: "gridAutoFlow"
}), xd = rt({
  prop: "gridAutoColumns"
}), _d = rt({
  prop: "gridAutoRows"
}), vd = rt({
  prop: "gridTemplateColumns"
}), wd = rt({
  prop: "gridTemplateRows"
}), Sd = rt({
  prop: "gridTemplateAreas"
}), Md = rt({
  prop: "gridArea"
});
Fi(Wi, Ni, $i, md, bd, yd, xd, _d, vd, wd, Sd, Md);
function Ue(n, t) {
  return t === "grey" ? t : n;
}
const kd = rt({
  prop: "color",
  themeKey: "palette",
  transform: Ue
}), Pd = rt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ue
}), Cd = rt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ue
});
Fi(kd, Pd, Cd);
function Bt(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const Od = rt({
  prop: "width",
  transform: Bt
}), Bs = (n) => {
  if (n.maxWidth !== void 0 && n.maxWidth !== null) {
    const t = (e) => {
      var i, s, o;
      return {
        maxWidth: ((i = n.theme) == null || (s = i.breakpoints) == null || (o = s.values) == null ? void 0 : o[e]) || zs[e] || Bt(e)
      };
    };
    return ie(n, n.maxWidth, t);
  }
  return null;
};
Bs.filterProps = ["maxWidth"];
const Ed = rt({
  prop: "minWidth",
  transform: Bt
}), Ad = rt({
  prop: "height",
  transform: Bt
}), Td = rt({
  prop: "maxHeight",
  transform: Bt
}), Dd = rt({
  prop: "minHeight",
  transform: Bt
});
rt({
  prop: "size",
  cssProperty: "width",
  transform: Bt
});
rt({
  prop: "size",
  cssProperty: "height",
  transform: Bt
});
const Rd = rt({
  prop: "boxSizing"
});
Fi(Od, Bs, Ed, Ad, Td, Dd, Rd);
const Id = {
  border: {
    themeKey: "borders",
    transform: Ut
  },
  borderTop: {
    themeKey: "borders",
    transform: Ut
  },
  borderRight: {
    themeKey: "borders",
    transform: Ut
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ut
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ut
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
    style: Bi
  },
  color: {
    themeKey: "palette",
    transform: Ue
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ue
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ue
  },
  p: {
    style: xt
  },
  pt: {
    style: xt
  },
  pr: {
    style: xt
  },
  pb: {
    style: xt
  },
  pl: {
    style: xt
  },
  px: {
    style: xt
  },
  py: {
    style: xt
  },
  padding: {
    style: xt
  },
  paddingTop: {
    style: xt
  },
  paddingRight: {
    style: xt
  },
  paddingBottom: {
    style: xt
  },
  paddingLeft: {
    style: xt
  },
  paddingX: {
    style: xt
  },
  paddingY: {
    style: xt
  },
  paddingInline: {
    style: xt
  },
  paddingInlineStart: {
    style: xt
  },
  paddingInlineEnd: {
    style: xt
  },
  paddingBlock: {
    style: xt
  },
  paddingBlockStart: {
    style: xt
  },
  paddingBlockEnd: {
    style: xt
  },
  m: {
    style: yt
  },
  mt: {
    style: yt
  },
  mr: {
    style: yt
  },
  mb: {
    style: yt
  },
  ml: {
    style: yt
  },
  mx: {
    style: yt
  },
  my: {
    style: yt
  },
  margin: {
    style: yt
  },
  marginTop: {
    style: yt
  },
  marginRight: {
    style: yt
  },
  marginBottom: {
    style: yt
  },
  marginLeft: {
    style: yt
  },
  marginX: {
    style: yt
  },
  marginY: {
    style: yt
  },
  marginInline: {
    style: yt
  },
  marginInlineStart: {
    style: yt
  },
  marginInlineEnd: {
    style: yt
  },
  marginBlock: {
    style: yt
  },
  marginBlockStart: {
    style: yt
  },
  marginBlockEnd: {
    style: yt
  },
  displayPrint: {
    cssProperty: !1,
    transform: (n) => ({
      "@media print": {
        display: n
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
    style: Wi
  },
  rowGap: {
    style: $i
  },
  columnGap: {
    style: Ni
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
    transform: Bt
  },
  maxWidth: {
    style: Bs
  },
  minWidth: {
    transform: Bt
  },
  height: {
    transform: Bt
  },
  maxHeight: {
    transform: Bt
  },
  minHeight: {
    transform: Bt
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
}, Vi = Id;
function Ld(...n) {
  const t = n.reduce((i, s) => i.concat(Object.keys(s)), []), e = new Set(t);
  return n.every((i) => e.size === Object.keys(i).length);
}
function Fd(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function jd() {
  function n(e, i, s, o) {
    const r = {
      [e]: i,
      theme: s
    }, a = o[e];
    if (!a)
      return {
        [e]: i
      };
    const {
      cssProperty: l = e,
      themeKey: c,
      transform: d,
      style: h
    } = a;
    if (i == null)
      return null;
    const u = Li(s, c) || {};
    return h ? h(r) : ie(r, i, (p) => {
      let g = vi(u, d, p);
      return p === g && typeof p == "string" && (g = vi(u, d, `${e}${p === "default" ? "" : La(p)}`, p)), l === !1 ? g : {
        [l]: g
      };
    });
  }
  function t(e) {
    var i;
    const {
      sx: s,
      theme: o = {}
    } = e || {};
    if (!s)
      return null;
    const r = (i = o.unstable_sxConfig) != null ? i : Vi;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(o);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const d = Jc(o.breakpoints), h = Object.keys(d);
      let u = d;
      return Object.keys(c).forEach((f) => {
        const p = Fd(c[f], o);
        if (p != null)
          if (typeof p == "object")
            if (r[f])
              u = Sn(u, n(f, p, o, r));
            else {
              const g = ie({
                theme: o
              }, p, (m) => ({
                [f]: m
              }));
              Ld(g, p) ? u[f] = t({
                sx: p,
                theme: o
              }) : u = Sn(u, g);
            }
          else
            u = Sn(u, n(f, p, o, r));
      }), Zc(h, u);
    }
    return Array.isArray(s) ? s.map(a) : a(s);
  }
  return t;
}
const Ba = jd();
Ba.filterProps = ["sx"];
const Ws = Ba;
function me(n, t) {
  if (n == null)
    return {};
  var e = {}, i = Object.keys(n), s, o;
  for (o = 0; o < i.length; o++)
    s = i[o], !(t.indexOf(s) >= 0) && (e[s] = n[s]);
  return e;
}
const zd = ["sx"], Bd = (n) => {
  var t, e;
  const i = {
    systemProps: {},
    otherProps: {}
  }, s = (t = n == null || (e = n.theme) == null ? void 0 : e.unstable_sxConfig) != null ? t : Vi;
  return Object.keys(n).forEach((o) => {
    s[o] ? i.systemProps[o] = n[o] : i.otherProps[o] = n[o];
  }), i;
};
function Wd(n) {
  const {
    sx: t
  } = n, e = me(n, zd), {
    systemProps: i,
    otherProps: s
  } = Bd(e);
  let o;
  return Array.isArray(t) ? o = [i, ...t] : typeof t == "function" ? o = (...r) => {
    const a = t(...r);
    return Ce(a) ? mt({}, i, a) : i;
  } : o = mt({}, i, t), mt({}, s, {
    sx: o
  });
}
function Wa(n) {
  var t, e, i = "";
  if (typeof n == "string" || typeof n == "number")
    i += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (t = 0; t < n.length; t++)
        n[t] && (e = Wa(n[t])) && (i && (i += " "), i += e);
    else
      for (t in n)
        n[t] && (i && (i += " "), i += t);
  return i;
}
function Nd() {
  for (var n, t, e = 0, i = ""; e < arguments.length; )
    (n = arguments[e++]) && (t = Wa(n)) && (i && (i += " "), i += t);
  return i;
}
const $d = ["values", "unit", "step"], Vd = (n) => {
  const t = Object.keys(n).map((e) => ({
    key: e,
    val: n[e]
  })) || [];
  return t.sort((e, i) => e.val - i.val), t.reduce((e, i) => mt({}, e, {
    [i.key]: i.val
  }), {});
};
function Hd(n) {
  const {
    values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: e = "px",
    step: i = 5
  } = n, s = me(n, $d), o = Vd(t), r = Object.keys(o);
  function a(u) {
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${e})`;
  }
  function l(u) {
    return `@media (max-width:${(typeof t[u] == "number" ? t[u] : u) - i / 100}${e})`;
  }
  function c(u, f) {
    const p = r.indexOf(f);
    return `@media (min-width:${typeof t[u] == "number" ? t[u] : u}${e}) and (max-width:${(p !== -1 && typeof t[r[p]] == "number" ? t[r[p]] : f) - i / 100}${e})`;
  }
  function d(u) {
    return r.indexOf(u) + 1 < r.length ? c(u, r[r.indexOf(u) + 1]) : a(u);
  }
  function h(u) {
    const f = r.indexOf(u);
    return f === 0 ? a(r[1]) : f === r.length - 1 ? l(r[f]) : c(u, r[r.indexOf(u) + 1]).replace("@media", "@media not all and");
  }
  return mt({
    keys: r,
    values: o,
    up: a,
    down: l,
    between: c,
    only: d,
    not: h,
    unit: e
  }, s);
}
const Yd = {
  borderRadius: 4
}, Ud = Yd;
function Xd(n = 8) {
  if (n.mui)
    return n;
  const t = ja({
    spacing: n
  }), e = (...i) => (process.env.NODE_ENV !== "production" && (i.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${i.length}`)), (i.length === 0 ? [1] : i).map((o) => {
    const r = t(o);
    return typeof r == "number" ? `${r}px` : r;
  }).join(" "));
  return e.mui = !0, e;
}
const Kd = ["breakpoints", "palette", "spacing", "shape"];
function Na(n = {}, ...t) {
  const {
    breakpoints: e = {},
    palette: i = {},
    spacing: s,
    shape: o = {}
  } = n, r = me(n, Kd), a = Hd(e), l = Xd(s);
  let c = ne({
    breakpoints: a,
    direction: "ltr",
    components: {},
    palette: mt({
      mode: "light"
    }, i),
    spacing: l,
    shape: mt({}, Ud, o)
  }, r);
  return c = t.reduce((d, h) => ne(d, h), c), c.unstable_sxConfig = mt({}, Vi, r == null ? void 0 : r.unstable_sxConfig), c.unstable_sx = function(h) {
    return Ws({
      sx: h,
      theme: this
    });
  }, c;
}
const $a = _i.createContext(null);
process.env.NODE_ENV !== "production" && ($a.displayName = "ThemeContext");
const qd = $a;
function Gd() {
  const n = _i.useContext(qd);
  return process.env.NODE_ENV !== "production" && _i.useDebugValue(n), n;
}
function Jd(n) {
  return Object.keys(n).length === 0;
}
function Zd(n = null) {
  const t = Gd();
  return !t || Jd(t) ? n : t;
}
const Qd = Na();
function th(n = Qd) {
  return Zd(n);
}
const eh = ["className", "component"];
function nh(n = {}) {
  const {
    defaultTheme: t,
    defaultClassName: e = "MuiBox-root",
    generateClassName: i
  } = n, s = qc("div", {
    shouldForwardProp: (r) => r !== "theme" && r !== "sx" && r !== "as"
  })(Ws);
  return _i.forwardRef(function(a, l) {
    const c = th(t), d = Wd(a), {
      className: h,
      component: u = "div"
    } = d, f = me(d, eh);
    return Ye(s, mt({
      as: u,
      ref: l,
      className: Nd(h, i ? i(e) : e),
      theme: c
    }, f));
  });
}
function Va(n, t = 0, e = 1) {
  return process.env.NODE_ENV !== "production" && (n < t || n > e) && console.error(`MUI: The value provided ${n} is out of range [${t}, ${e}].`), Math.min(Math.max(t, n), e);
}
function ih(n) {
  n = n.slice(1);
  const t = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let e = n.match(t);
  return e && e[0].length === 1 && (e = e.map((i) => i + i)), e ? `rgb${e.length === 4 ? "a" : ""}(${e.map((i, s) => s < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ge(n) {
  if (n.type)
    return n;
  if (n.charAt(0) === "#")
    return Ge(ih(n));
  const t = n.indexOf("("), e = n.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(e) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${n}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : qe(9, n));
  let i = n.substring(t + 1, n.length - 1), s;
  if (e === "color") {
    if (i = i.split(" "), s = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : qe(10, s));
  } else
    i = i.split(",");
  return i = i.map((o) => parseFloat(o)), {
    type: e,
    values: i,
    colorSpace: s
  };
}
function Ns(n) {
  const {
    type: t,
    colorSpace: e
  } = n;
  let {
    values: i
  } = n;
  return t.indexOf("rgb") !== -1 ? i = i.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), t.indexOf("color") !== -1 ? i = `${e} ${i.join(" ")}` : i = `${i.join(", ")}`, `${t}(${i})`;
}
function sh(n) {
  n = Ge(n);
  const {
    values: t
  } = n, e = t[0], i = t[1] / 100, s = t[2] / 100, o = i * Math.min(s, 1 - s), r = (c, d = (c + e / 30) % 12) => s - o * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const l = [Math.round(r(0) * 255), Math.round(r(8) * 255), Math.round(r(4) * 255)];
  return n.type === "hsla" && (a += "a", l.push(t[3])), Ns({
    type: a,
    values: l
  });
}
function $o(n) {
  n = Ge(n);
  let t = n.type === "hsl" || n.type === "hsla" ? Ge(sh(n)).values : n.values;
  return t = t.map((e) => (n.type !== "color" && (e /= 255), e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Vo(n, t) {
  const e = $o(n), i = $o(t);
  return (Math.max(e, i) + 0.05) / (Math.min(e, i) + 0.05);
}
function oh(n, t) {
  if (n = Ge(n), t = Va(t), n.type.indexOf("hsl") !== -1)
    n.values[2] *= 1 - t;
  else if (n.type.indexOf("rgb") !== -1 || n.type.indexOf("color") !== -1)
    for (let e = 0; e < 3; e += 1)
      n.values[e] *= 1 - t;
  return Ns(n);
}
function rh(n, t) {
  if (n = Ge(n), t = Va(t), n.type.indexOf("hsl") !== -1)
    n.values[2] += (100 - n.values[2]) * t;
  else if (n.type.indexOf("rgb") !== -1)
    for (let e = 0; e < 3; e += 1)
      n.values[e] += (255 - n.values[e]) * t;
  else if (n.type.indexOf("color") !== -1)
    for (let e = 0; e < 3; e += 1)
      n.values[e] += (1 - n.values[e]) * t;
  return Ns(n);
}
function ah(n, t) {
  return mt({
    toolbar: {
      minHeight: 56,
      [n.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [n.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
const lh = {
  black: "#000",
  white: "#fff"
}, In = lh, ch = {
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
}, dh = ch, hh = {
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
}, je = hh, uh = {
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
}, ze = uh, fh = {
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
}, hn = fh, gh = {
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
}, Be = gh, ph = {
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
}, We = ph, mh = {
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
}, Ne = mh, bh = ["mode", "contrastThreshold", "tonalOffset"], Ho = {
  text: {
    primary: "rgba(0, 0, 0, 0.87)",
    secondary: "rgba(0, 0, 0, 0.6)",
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: In.white,
    default: In.white
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
}, ls = {
  text: {
    primary: In.white,
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
    active: In.white,
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
function Yo(n, t, e, i) {
  const s = i.light || i, o = i.dark || i * 1.5;
  n[t] || (n.hasOwnProperty(e) ? n[t] = n[e] : t === "light" ? n.light = rh(n.main, s) : t === "dark" && (n.dark = oh(n.main, o)));
}
function yh(n = "light") {
  return n === "dark" ? {
    main: Be[200],
    light: Be[50],
    dark: Be[400]
  } : {
    main: Be[700],
    light: Be[400],
    dark: Be[800]
  };
}
function xh(n = "light") {
  return n === "dark" ? {
    main: je[200],
    light: je[50],
    dark: je[400]
  } : {
    main: je[500],
    light: je[300],
    dark: je[700]
  };
}
function _h(n = "light") {
  return n === "dark" ? {
    main: ze[500],
    light: ze[300],
    dark: ze[700]
  } : {
    main: ze[700],
    light: ze[400],
    dark: ze[800]
  };
}
function vh(n = "light") {
  return n === "dark" ? {
    main: We[400],
    light: We[300],
    dark: We[700]
  } : {
    main: We[700],
    light: We[500],
    dark: We[900]
  };
}
function wh(n = "light") {
  return n === "dark" ? {
    main: Ne[400],
    light: Ne[300],
    dark: Ne[700]
  } : {
    main: Ne[800],
    light: Ne[500],
    dark: Ne[900]
  };
}
function Sh(n = "light") {
  return n === "dark" ? {
    main: hn[400],
    light: hn[300],
    dark: hn[700]
  } : {
    main: "#ed6c02",
    light: hn[500],
    dark: hn[900]
  };
}
function Mh(n) {
  const {
    mode: t = "light",
    contrastThreshold: e = 3,
    tonalOffset: i = 0.2
  } = n, s = me(n, bh), o = n.primary || yh(t), r = n.secondary || xh(t), a = n.error || _h(t), l = n.info || vh(t), c = n.success || wh(t), d = n.warning || Sh(t);
  function h(g) {
    const m = Vo(g, ls.text.primary) >= e ? ls.text.primary : Ho.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const y = Vo(g, m);
      y < 3 && console.error([`MUI: The contrast ratio of ${y}:1 for ${m} on ${g}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return m;
  }
  const u = ({
    color: g,
    name: m,
    mainShade: y = 500,
    lightShade: _ = 300,
    darkShade: w = 700
  }) => {
    if (g = mt({}, g), !g.main && g[y] && (g.main = g[y]), !g.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${m ? ` (${m})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${y}\` property.` : qe(11, m ? ` (${m})` : "", y));
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
} });` : qe(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return Yo(g, "light", _, i), Yo(g, "dark", w, i), g.contrastText || (g.contrastText = h(g.main)), g;
  }, f = {
    dark: ls,
    light: Ho
  };
  return process.env.NODE_ENV !== "production" && (f[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ne(mt({
    common: mt({}, In),
    mode: t,
    primary: u({
      color: o,
      name: "primary"
    }),
    secondary: u({
      color: r,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: u({
      color: a,
      name: "error"
    }),
    warning: u({
      color: d,
      name: "warning"
    }),
    info: u({
      color: l,
      name: "info"
    }),
    success: u({
      color: c,
      name: "success"
    }),
    grey: dh,
    contrastThreshold: e,
    getContrastText: h,
    augmentColor: u,
    tonalOffset: i
  }, f[t]), s);
}
const kh = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Ph(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Uo = {
  textTransform: "uppercase"
}, Xo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ch(n, t) {
  const e = typeof t == "function" ? t(n) : t, {
    fontFamily: i = Xo,
    fontSize: s = 14,
    fontWeightLight: o = 300,
    fontWeightRegular: r = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    htmlFontSize: c = 16,
    allVariants: d,
    pxToRem: h
  } = e, u = me(e, kh);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const f = s / 14, p = h || ((y) => `${y / c * f}rem`), g = (y, _, w, v, x) => mt({
    fontFamily: i,
    fontWeight: y,
    fontSize: p(_),
    lineHeight: w
  }, i === Xo ? {
    letterSpacing: `${Ph(v / _)}em`
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
    button: g(a, 14, 1.75, 0.4, Uo),
    caption: g(r, 12, 1.66, 0.4),
    overline: g(r, 12, 2.66, 1, Uo)
  };
  return ne(mt({
    htmlFontSize: c,
    pxToRem: p,
    fontFamily: i,
    fontSize: s,
    fontWeightLight: o,
    fontWeightRegular: r,
    fontWeightMedium: a,
    fontWeightBold: l
  }, m), u, {
    clone: !1
  });
}
const Oh = 0.2, Eh = 0.14, Ah = 0.12;
function ft(...n) {
  return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${Oh})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${Eh})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${Ah})`].join(",");
}
const Th = ["none", ft(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ft(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ft(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ft(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ft(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ft(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ft(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ft(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ft(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ft(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ft(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ft(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ft(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ft(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ft(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ft(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ft(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ft(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ft(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ft(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ft(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ft(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ft(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ft(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Dh = Th, Rh = ["duration", "easing", "delay"], Ih = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Lh = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function Ko(n) {
  return `${Math.round(n)}ms`;
}
function Fh(n) {
  if (!n)
    return 0;
  const t = n / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function jh(n) {
  const t = mt({}, Ih, n.easing), e = mt({}, Lh, n.duration);
  return mt({
    getAutoHeightDuration: Fh,
    create: (s = ["all"], o = {}) => {
      const {
        duration: r = e.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = o, c = me(o, Rh);
      if (process.env.NODE_ENV !== "production") {
        const d = (u) => typeof u == "string", h = (u) => !isNaN(parseFloat(u));
        !d(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !h(r) && !d(r) && console.error(`MUI: Argument "duration" must be a number or a string but found ${r}.`), d(a) || console.error('MUI: Argument "easing" must be a string.'), !h(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((d) => `${d} ${typeof r == "string" ? r : Ko(r)} ${a} ${typeof l == "string" ? l : Ko(l)}`).join(",");
    }
  }, n, {
    easing: t,
    duration: e
  });
}
const zh = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Bh = zh, Wh = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Nh(n = {}, ...t) {
  const {
    mixins: e = {},
    palette: i = {},
    transitions: s = {},
    typography: o = {}
  } = n, r = me(n, Wh);
  if (n.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : qe(18));
  const a = Mh(i), l = Na(n);
  let c = ne(l, {
    mixins: ah(l.breakpoints, e),
    palette: a,
    shadows: Dh.slice(),
    typography: Ch(a, o),
    transitions: jh(s),
    zIndex: mt({}, Bh)
  });
  if (c = ne(c, r), c = t.reduce((d, h) => ne(d, h), c), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (u, f) => {
      let p;
      for (p in u) {
        const g = u[p];
        if (d.indexOf(p) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Yc("", p);
            console.error([`MUI: The \`${f}\` component increases the CSS specificity of the \`${p}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${m}' syntax:`, JSON.stringify({
              root: {
                [`&.${m}`]: g
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[p] = {};
        }
      }
    };
    Object.keys(c.components).forEach((u) => {
      const f = c.components[u].styleOverrides;
      f && u.indexOf("Mui") === 0 && h(f, u);
    });
  }
  return c.unstable_sxConfig = mt({}, Vi, r == null ? void 0 : r.unstable_sxConfig), c.unstable_sx = function(h) {
    return Ws({
      sx: h,
      theme: this
    });
  }, c;
}
const $h = Nh(), Ha = nh({
  defaultTheme: $h,
  defaultClassName: "MuiBox-root",
  generateClassName: Fa.generate
});
process.env.NODE_ENV !== "production" && (Ha.propTypes = {
  children: Ot.exports.node,
  component: Ot.exports.elementType,
  sx: Ot.exports.oneOfType([Ot.exports.arrayOf(Ot.exports.oneOfType([Ot.exports.func, Ot.exports.object, Ot.exports.bool])), Ot.exports.func, Ot.exports.object])
});
const Vh = Ha;
function Yn(n) {
  return n + 0.5 | 0;
}
const oe = (n, t, e) => Math.max(Math.min(n, e), t);
function bn(n) {
  return oe(Yn(n * 2.55), 0, 255);
}
function ce(n) {
  return oe(Yn(n * 255), 0, 255);
}
function Zt(n) {
  return oe(Yn(n / 2.55) / 100, 0, 1);
}
function qo(n) {
  return oe(Yn(n * 100), 0, 100);
}
const $t = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ss = [..."0123456789ABCDEF"], Hh = (n) => Ss[n & 15], Yh = (n) => Ss[(n & 240) >> 4] + Ss[n & 15], ei = (n) => (n & 240) >> 4 === (n & 15), Uh = (n) => ei(n.r) && ei(n.g) && ei(n.b) && ei(n.a);
function Xh(n) {
  var t = n.length, e;
  return n[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & $t[n[1]] * 17,
    g: 255 & $t[n[2]] * 17,
    b: 255 & $t[n[3]] * 17,
    a: t === 5 ? $t[n[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: $t[n[1]] << 4 | $t[n[2]],
    g: $t[n[3]] << 4 | $t[n[4]],
    b: $t[n[5]] << 4 | $t[n[6]],
    a: t === 9 ? $t[n[7]] << 4 | $t[n[8]] : 255
  })), e;
}
const Kh = (n, t) => n < 255 ? t(n) : "";
function qh(n) {
  var t = Uh(n) ? Hh : Yh;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + Kh(n.a, t) : void 0;
}
const Gh = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ya(n, t, e) {
  const i = t * Math.min(e, 1 - e), s = (o, r = (o + n / 30) % 12) => e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Jh(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function Zh(n, t, e) {
  const i = Ya(n, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - e, i[s] += t;
  return i;
}
function Qh(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
}
function $s(n) {
  const e = n.r / 255, i = n.g / 255, s = n.b / 255, o = Math.max(e, i, s), r = Math.min(e, i, s), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = Qh(e, i, s, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Vs(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(ce);
}
function Hs(n, t, e) {
  return Vs(Ya, n, t, e);
}
function tu(n, t, e) {
  return Vs(Zh, n, t, e);
}
function eu(n, t, e) {
  return Vs(Jh, n, t, e);
}
function Ua(n) {
  return (n % 360 + 360) % 360;
}
function nu(n) {
  const t = Gh.exec(n);
  let e = 255, i;
  if (!t)
    return;
  t[5] !== i && (e = t[6] ? bn(+t[5]) : ce(+t[5]));
  const s = Ua(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? i = tu(s, o, r) : t[1] === "hsv" ? i = eu(s, o, r) : i = Hs(s, o, r), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: e
  };
}
function iu(n, t) {
  var e = $s(n);
  e[0] = Ua(e[0] + t), e = Hs(e), n.r = e[0], n.g = e[1], n.b = e[2];
}
function su(n) {
  if (!n)
    return;
  const t = $s(n), e = t[0], i = qo(t[1]), s = qo(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${Zt(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
}
const Go = {
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
}, Jo = {
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
function ou() {
  const n = {}, t = Object.keys(Jo), e = Object.keys(Go);
  let i, s, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], s = 0; s < e.length; s++)
      o = e[s], a = a.replace(o, Go[o]);
    o = parseInt(Jo[r], 16), n[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return n;
}
let ni;
function ru(n) {
  ni || (ni = ou(), ni.transparent = [0, 0, 0, 0]);
  const t = ni[n.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const au = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function lu(n) {
  const t = au.exec(n);
  let e = 255, i, s, o;
  if (!!t) {
    if (t[7] !== i) {
      const r = +t[7];
      e = t[8] ? bn(r) : oe(r * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? bn(i) : oe(i, 0, 255)), s = 255 & (t[4] ? bn(s) : oe(s, 0, 255)), o = 255 & (t[6] ? bn(o) : oe(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: e
    };
  }
}
function cu(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Zt(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`);
}
const cs = (n) => n <= 31308e-7 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055, $e = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
function du(n, t, e) {
  const i = $e(Zt(n.r)), s = $e(Zt(n.g)), o = $e(Zt(n.b));
  return {
    r: ce(cs(i + e * ($e(Zt(t.r)) - i))),
    g: ce(cs(s + e * ($e(Zt(t.g)) - s))),
    b: ce(cs(o + e * ($e(Zt(t.b)) - o))),
    a: n.a + e * (t.a - n.a)
  };
}
function ii(n, t, e) {
  if (n) {
    let i = $s(n);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = Hs(i), n.r = i[0], n.g = i[1], n.b = i[2];
  }
}
function Xa(n, t) {
  return n && Object.assign(t || {}, n);
}
function Zo(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n) ? n.length >= 3 && (t = { r: n[0], g: n[1], b: n[2], a: 255 }, n.length > 3 && (t.a = ce(n[3]))) : (t = Xa(n, { r: 0, g: 0, b: 0, a: 1 }), t.a = ce(t.a)), t;
}
function hu(n) {
  return n.charAt(0) === "r" ? lu(n) : nu(n);
}
class Ln {
  constructor(t) {
    if (t instanceof Ln)
      return t;
    const e = typeof t;
    let i;
    e === "object" ? i = Zo(t) : e === "string" && (i = Xh(t) || ru(t) || hu(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Xa(this._rgb);
    return t && (t.a = Zt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Zo(t);
  }
  rgbString() {
    return this._valid ? cu(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? qh(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? su(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb, s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = i.a - s.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, i.r = 255 & c * i.r + o * s.r + 0.5, i.g = 255 & c * i.g + o * s.g + 0.5, i.b = 255 & c * i.b + o * s.b + 0.5, i.a = r * i.a + (1 - r) * s.a, this.rgb = i;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = du(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ln(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ce(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = Yn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return ii(this._rgb, 2, t), this;
  }
  darken(t) {
    return ii(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ii(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ii(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return iu(this._rgb, t), this;
  }
}
function qt() {
}
const uu = (() => {
  let n = 0;
  return () => n++;
})();
function tt(n) {
  return n === null || typeof n > "u";
}
function lt(n) {
  if (Array.isArray && Array.isArray(n))
    return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function H(n) {
  return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function gt(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function Ft(n, t) {
  return gt(n) ? n : t;
}
function W(n, t) {
  return typeof n > "u" ? t : n;
}
const fu = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t, Ka = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 * t : +n;
function dt(n, t, e) {
  if (n && typeof n.call == "function")
    return n.apply(e, t);
}
function at(n, t, e, i) {
  let s, o, r;
  if (lt(n))
    if (o = n.length, i)
      for (s = o - 1; s >= 0; s--)
        t.call(e, n[s], s);
    else
      for (s = 0; s < o; s++)
        t.call(e, n[s], s);
  else if (H(n))
    for (r = Object.keys(n), o = r.length, s = 0; s < o; s++)
      t.call(e, n[r[s]], r[s]);
}
function wi(n, t) {
  let e, i, s, o;
  if (!n || !t || n.length !== t.length)
    return !1;
  for (e = 0, i = n.length; e < i; ++e)
    if (s = n[e], o = t[e], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function Si(n) {
  if (lt(n))
    return n.map(Si);
  if (H(n)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(n), i = e.length;
    let s = 0;
    for (; s < i; ++s)
      t[e[s]] = Si(n[e[s]]);
    return t;
  }
  return n;
}
function qa(n) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(n) === -1;
}
function gu(n, t, e, i) {
  if (!qa(n))
    return;
  const s = t[n], o = e[n];
  H(s) && H(o) ? Fn(s, o, i) : t[n] = Si(o);
}
function Fn(n, t, e) {
  const i = lt(t) ? t : [
    t
  ], s = i.length;
  if (!H(n))
    return n;
  e = e || {};
  const o = e.merger || gu;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = i[a], !H(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], n, r, e);
  }
  return n;
}
function Mn(n, t) {
  return Fn(n, t, {
    merger: pu
  });
}
function pu(n, t, e) {
  if (!qa(n))
    return;
  const i = t[n], s = e[n];
  H(i) && H(s) ? Mn(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Si(s));
}
const Qo = {
  "": (n) => n,
  x: (n) => n.x,
  y: (n) => n.y
};
function mu(n) {
  const t = n.split("."), e = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
  return e;
}
function bu(n) {
  const t = mu(n);
  return (e) => {
    for (const i of t) {
      if (i === "")
        break;
      e = e && e[i];
    }
    return e;
  };
}
function ue(n, t) {
  return (Qo[t] || (Qo[t] = bu(t)))(n);
}
function Ys(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const St = (n) => typeof n < "u", fe = (n) => typeof n == "function", tr = (n, t) => {
  if (n.size !== t.size)
    return !1;
  for (const e of n)
    if (!t.has(e))
      return !1;
  return !0;
};
function yu(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const it = Math.PI, ut = 2 * it, xu = ut + it, Mi = Number.POSITIVE_INFINITY, Ga = it / 180, _t = it / 2, _e = it / 4, er = it * 2 / 3, re = Math.log10, Xt = Math.sign;
function kn(n, t, e) {
  return Math.abs(n - t) < e;
}
function nr(n) {
  const t = Math.round(n);
  n = kn(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(re(n))), i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function _u(n) {
  const t = [], e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++)
    n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function Je(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function vu(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function Ja(n, t, e) {
  let i, s, o;
  for (i = 0, s = n.length; i < s; i++)
    o = n[i][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function kt(n) {
  return n * (it / 180);
}
function Hi(n) {
  return n * (180 / it);
}
function ir(n) {
  if (!gt(n))
    return;
  let t = 1, e = 0;
  for (; Math.round(n * t) / t !== n; )
    t *= 10, e++;
  return e;
}
function Za(n, t) {
  const e = t.x - n.x, i = t.y - n.y, s = Math.sqrt(e * e + i * i);
  let o = Math.atan2(i, e);
  return o < -0.5 * it && (o += ut), {
    angle: o,
    distance: s
  };
}
function jn(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function wu(n, t) {
  return (n - t + xu) % ut - it;
}
function jt(n) {
  return (n % ut + ut) % ut;
}
function zn(n, t, e, i) {
  const s = jt(n), o = jt(t), r = jt(e), a = jt(o - s), l = jt(r - s), c = jt(s - o), d = jt(s - r);
  return s === o || s === r || i && o === r || a > l && c < d;
}
function Ct(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Su(n) {
  return Ct(n, -32768, 32767);
}
function Qt(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function Us(n, t, e) {
  e = e || ((r) => n[r] < t);
  let i = n.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, e(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const te = (n, t, e, i) => Us(n, e, i ? (s) => {
  const o = n[s][t];
  return o < e || o === e && n[s + 1][t] === e;
} : (s) => n[s][t] < e), Mu = (n, t, e) => Us(n, e, (i) => n[i][t] >= e);
function ku(n, t, e) {
  let i = 0, s = n.length;
  for (; i < s && n[i] < t; )
    i++;
  for (; s > i && n[s - 1] > e; )
    s--;
  return i > 0 || s < n.length ? n.slice(i, s) : n;
}
const Qa = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Pu(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(n, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Qa.forEach((e) => {
    const i = "_onData" + Ys(e), s = n[e];
    Object.defineProperty(n, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = s.apply(this, o);
        return n._chartjs.listeners.forEach((a) => {
          typeof a[i] == "function" && a[i](...o);
        }), r;
      }
    });
  });
}
function sr(n, t) {
  const e = n._chartjs;
  if (!e)
    return;
  const i = e.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (Qa.forEach((o) => {
    delete n[o];
  }), delete n._chartjs);
}
function tl(n) {
  const t = /* @__PURE__ */ new Set();
  let e, i;
  for (e = 0, i = n.length; e < i; ++e)
    t.add(n[e]);
  return t.size === i ? n : Array.from(t);
}
const el = function() {
  return typeof window > "u" ? function(n) {
    return n();
  } : window.requestAnimationFrame;
}();
function nl(n, t) {
  let e = [], i = !1;
  return function(...s) {
    e = s, i || (i = !0, el.call(window, () => {
      i = !1, n.apply(t, e);
    }));
  };
}
function Cu(n, t) {
  let e;
  return function(...i) {
    return t ? (clearTimeout(e), e = setTimeout(n, t, i)) : n.apply(this, i), t;
  };
}
const Xs = (n) => n === "start" ? "left" : n === "end" ? "right" : "center", Tt = (n, t, e) => n === "start" ? t : n === "end" ? e : (t + e) / 2, Ou = (n, t, e, i) => n === (i ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function il(n, t, e) {
  const i = t.length;
  let s = 0, o = i;
  if (n._sorted) {
    const { iScale: r, _parsed: a } = n, l = r.axis, { min: c, max: d, minDefined: h, maxDefined: u } = r.getUserBounds();
    h && (s = Ct(Math.min(
      te(a, r.axis, c).lo,
      e ? i : te(t, l, r.getPixelForValue(c)).lo
    ), 0, i - 1)), u ? o = Ct(Math.max(
      te(a, r.axis, d, !0).hi + 1,
      e ? 0 : te(t, l, r.getPixelForValue(d), !0).hi + 1
    ), s, i) - s : o = i - s;
  }
  return {
    start: s,
    count: o
  };
}
function sl(n) {
  const { xScale: t, yScale: e, _scaleRanges: i } = n, s = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!i)
    return n._scaleRanges = s, !0;
  const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
  return Object.assign(i, s), o;
}
const si = (n) => n === 0 || n === 1, or = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * ut / e)), rr = (n, t, e) => Math.pow(2, -10 * n) * Math.sin((n - t) * ut / e) + 1, Pn = {
  linear: (n) => n,
  easeInQuad: (n) => n * n,
  easeOutQuad: (n) => -n * (n - 2),
  easeInOutQuad: (n) => (n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
  easeInCubic: (n) => n * n * n,
  easeOutCubic: (n) => (n -= 1) * n * n + 1,
  easeInOutCubic: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
  easeInQuart: (n) => n * n * n * n,
  easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
  easeInOutQuart: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
  easeInQuint: (n) => n * n * n * n * n,
  easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
  easeInOutQuint: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2),
  easeInSine: (n) => -Math.cos(n * _t) + 1,
  easeOutSine: (n) => Math.sin(n * _t),
  easeInOutSine: (n) => -0.5 * (Math.cos(it * n) - 1),
  easeInExpo: (n) => n === 0 ? 0 : Math.pow(2, 10 * (n - 1)),
  easeOutExpo: (n) => n === 1 ? 1 : -Math.pow(2, -10 * n) + 1,
  easeInOutExpo: (n) => si(n) ? n : n < 0.5 ? 0.5 * Math.pow(2, 10 * (n * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
  easeInCirc: (n) => n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1),
  easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
  easeInOutCirc: (n) => (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
  easeInElastic: (n) => si(n) ? n : or(n, 0.075, 0.3),
  easeOutElastic: (n) => si(n) ? n : rr(n, 0.075, 0.3),
  easeInOutElastic(n) {
    return si(n) ? n : n < 0.5 ? 0.5 * or(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * rr(n * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(n) {
    return n * n * ((1.70158 + 1) * n - 1.70158);
  },
  easeOutBack(n) {
    return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
  },
  easeInOutBack(n) {
    let t = 1.70158;
    return (n /= 0.5) < 1 ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t)) : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
  },
  easeInBounce: (n) => 1 - Pn.easeOutBounce(1 - n),
  easeOutBounce(n) {
    return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  },
  easeInOutBounce: (n) => n < 0.5 ? Pn.easeInBounce(n * 2) * 0.5 : Pn.easeOutBounce(n * 2 - 1) * 0.5 + 0.5
};
function ol(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ar(n) {
  return ol(n) ? n : new Ln(n);
}
function ds(n) {
  return ol(n) ? n : new Ln(n).saturate(0.5).darken(0.1).hexString();
}
const Eu = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Au = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Tu(n) {
  n.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), n.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), n.set("animations", {
    colors: {
      type: "color",
      properties: Au
    },
    numbers: {
      type: "number",
      properties: Eu
    }
  }), n.describe("animations", {
    _fallback: "animation"
  }), n.set("transitions", {
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
function Du(n) {
  n.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const lr = /* @__PURE__ */ new Map();
function Ru(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = lr.get(e);
  return i || (i = new Intl.NumberFormat(n, t), lr.set(e, i)), i;
}
function Un(n, t, e) {
  return Ru(t, e).format(n);
}
const rl = {
  values(n) {
    return lt(n) ? n : "" + n;
  },
  numeric(n, t, e) {
    if (n === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = Iu(n, e);
    }
    const r = re(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Un(n, i, l);
  },
  logarithmic(n, t, e) {
    if (n === 0)
      return "0";
    const i = e[t].significand || n / Math.pow(10, Math.floor(re(n)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * e.length ? rl.numeric.call(this, n, t, e) : "";
  }
};
function Iu(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Yi = {
  formatters: rl
};
function Lu(n) {
  n.set("scale", {
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
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
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
      callback: Yi.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), n.route("scale.ticks", "color", "", "color"), n.route("scale.grid", "color", "", "borderColor"), n.route("scale.border", "color", "", "borderColor"), n.route("scale.title", "color", "", "color"), n.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), n.describe("scales", {
    _fallback: "scale"
  }), n.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Ae = /* @__PURE__ */ Object.create(null), Ms = /* @__PURE__ */ Object.create(null);
function Cn(n, t) {
  if (!t)
    return n;
  const e = t.split(".");
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i];
    n = n[o] || (n[o] = /* @__PURE__ */ Object.create(null));
  }
  return n;
}
function hs(n, t, e) {
  return typeof t == "string" ? Fn(Cn(n, t), e) : Fn(Cn(n, ""), t);
}
class Fu {
  constructor(t, e) {
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
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => ds(s.backgroundColor), this.hoverBorderColor = (i, s) => ds(s.borderColor), this.hoverColor = (i, s) => ds(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return hs(this, t, e);
  }
  get(t) {
    return Cn(this, t);
  }
  describe(t, e) {
    return hs(Ms, t, e);
  }
  override(t, e) {
    return hs(Ae, t, e);
  }
  route(t, e, i, s) {
    const o = Cn(this, t), r = Cn(this, i), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return H(l) ? Object.assign({}, c, l) : W(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var pt = new Fu({
  _scriptable: (n) => !n.startsWith("on"),
  _indexable: (n) => n !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Tu,
  Du,
  Lu
]);
function ju(n) {
  return !n || tt(n.size) || tt(n.family) ? null : (n.style ? n.style + " " : "") + (n.weight ? n.weight + " " : "") + n.size + "px " + n.family;
}
function ki(n, t, e, i, s) {
  let o = t[s];
  return o || (o = t[s] = n.measureText(s).width, e.push(s)), o > i && (i = o), i;
}
function zu(n, t, e, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), n.save(), n.font = t;
  let r = 0;
  const a = e.length;
  let l, c, d, h, u;
  for (l = 0; l < a; l++)
    if (h = e[l], h != null && lt(h) !== !0)
      r = ki(n, s, o, r, h);
    else if (lt(h))
      for (c = 0, d = h.length; c < d; c++)
        u = h[c], u != null && !lt(u) && (r = ki(n, s, o, r, u));
  n.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function ve(n, t, e) {
  const i = n.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function cr(n, t) {
  t = t || n.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore();
}
function Pi(n, t, e, i) {
  al(n, t, e, i, null);
}
function al(n, t, e, i, s) {
  let o, r, a, l, c, d, h, u;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * Ga;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    n.save(), n.translate(e, i), n.rotate(m), n.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), n.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (n.beginPath(), f) {
      default:
        s ? n.ellipse(e, i, s / 2, g, 0, 0, ut) : n.arc(e, i, g, 0, ut), n.closePath();
        break;
      case "triangle":
        d = s ? s / 2 : g, n.moveTo(e + Math.sin(m) * d, i - Math.cos(m) * g), m += er, n.lineTo(e + Math.sin(m) * d, i - Math.cos(m) * g), m += er, n.lineTo(e + Math.sin(m) * d, i - Math.cos(m) * g), n.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(m + _e) * l, h = Math.cos(m + _e) * (s ? s / 2 - c : l), a = Math.sin(m + _e) * l, u = Math.sin(m + _e) * (s ? s / 2 - c : l), n.arc(e - h, i - a, c, m - it, m - _t), n.arc(e + u, i - r, c, m - _t, m), n.arc(e + h, i + a, c, m, m + _t), n.arc(e - u, i + r, c, m + _t, m + it), n.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * g, d = s ? s / 2 : l, n.rect(e - d, i - l, 2 * d, 2 * l);
          break;
        }
        m += _e;
      case "rectRot":
        h = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - a), n.lineTo(e + u, i - r), n.lineTo(e + h, i + a), n.lineTo(e - u, i + r), n.closePath();
        break;
      case "crossRot":
        m += _e;
      case "cross":
        h = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - a), n.lineTo(e + h, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r);
        break;
      case "star":
        h = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - a), n.lineTo(e + h, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r), m += _e, h = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, u = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - a), n.lineTo(e + h, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(m) * g, a = Math.sin(m) * g, n.moveTo(e - r, i - a), n.lineTo(e + r, i + a);
        break;
      case "dash":
        n.moveTo(e, i), n.lineTo(e + Math.cos(m) * (s ? s / 2 : g), i + Math.sin(m) * g);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function Bn(n, t, e) {
  return e = e || 0.5, !t || n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e;
}
function Xn(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function Kn(n) {
  n.restore();
}
function Bu(n, t, e, i, s) {
  if (!t)
    return n.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    n.lineTo(o, t.y), n.lineTo(o, e.y);
  } else
    s === "after" != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function Wu(n, t, e, i) {
  if (!t)
    return n.lineTo(e.x, e.y);
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y);
}
function Te(n, t, e, i, s, o = {}) {
  const r = lt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (n.save(), n.font = s.string, Nu(n, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Vu(n, o.backdrop), a && (o.strokeColor && (n.strokeStyle = o.strokeColor), tt(o.strokeWidth) || (n.lineWidth = o.strokeWidth), n.strokeText(c, e, i, o.maxWidth)), n.fillText(c, e, i, o.maxWidth), $u(n, e, i, c, o), i += s.lineHeight;
  n.restore();
}
function Nu(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]), tt(t.rotation) || n.rotate(t.rotation), t.color && (n.fillStyle = t.color), t.textAlign && (n.textAlign = t.textAlign), t.textBaseline && (n.textBaseline = t.textBaseline);
}
function $u(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, d = s.strikethrough ? (l + c) / 2 : c;
    n.strokeStyle = n.fillStyle, n.beginPath(), n.lineWidth = s.decorationWidth || 2, n.moveTo(r, d), n.lineTo(a, d), n.stroke();
  }
}
function Vu(n, t) {
  const e = n.fillStyle;
  n.fillStyle = t.color, n.fillRect(t.left, t.top, t.width, t.height), n.fillStyle = e;
}
function Ze(n, t) {
  const { x: e, y: i, w: s, h: o, radius: r } = t;
  n.arc(e + r.topLeft, i + r.topLeft, r.topLeft, -_t, it, !0), n.lineTo(e, i + o - r.bottomLeft), n.arc(e + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, it, _t, !0), n.lineTo(e + s - r.bottomRight, i + o), n.arc(e + s - r.bottomRight, i + o - r.bottomRight, r.bottomRight, _t, 0, !0), n.lineTo(e + s, i + r.topRight), n.arc(e + s - r.topRight, i + r.topRight, r.topRight, 0, -_t, !0), n.lineTo(e + r.topLeft, i);
}
const Hu = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Yu = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Uu(n, t) {
  const e = ("" + n).match(Hu);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (n = +e[2], e[3]) {
    case "px":
      return n;
    case "%":
      n /= 100;
      break;
  }
  return t * n;
}
const Xu = (n) => +n || 0;
function Ks(n, t) {
  const e = {}, i = H(t), s = i ? Object.keys(t) : t, o = H(n) ? i ? (r) => W(n[r], n[t[r]]) : (r) => n[r] : () => n;
  for (const r of s)
    e[r] = Xu(o(r));
  return e;
}
function ll(n) {
  return Ks(n, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function de(n) {
  return Ks(n, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Pt(n) {
  const t = ll(n);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function vt(n, t) {
  n = n || {}, t = t || pt.font;
  let e = W(n.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let i = W(n.style, t.style);
  i && !("" + i).match(Yu) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: W(n.family, t.family),
    lineHeight: Uu(W(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: W(n.weight, t.weight),
    string: ""
  };
  return s.string = ju(s), s;
}
function yn(n, t, e, i) {
  let s = !0, o, r, a;
  for (o = 0, r = n.length; o < r; ++o)
    if (a = n[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), s = !1), e !== void 0 && lt(a) && (a = a[e % a.length], s = !1), a !== void 0))
      return i && !s && (i.cacheable = !1), a;
}
function Ku(n, t, e) {
  const { min: i, max: s } = n, o = Ka(t, (s - i) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(i, -Math.abs(o)),
    max: r(s, o)
  };
}
function be(n, t) {
  return Object.assign(Object.create(n), t);
}
function qs(n, t = [
  ""
], e = n, i, s = () => n[0]) {
  St(i) || (i = ul("_fallback", n));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: e,
    _fallback: i,
    _getTarget: s,
    override: (r) => qs([
      r,
      ...n
    ], t, e, i)
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete n[0][a], !0;
    },
    get(r, a) {
      return dl(r, a, () => nf(a, t, n, r));
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(r, a) {
      return hr(r).includes(a);
    },
    ownKeys(r) {
      return hr(r);
    },
    set(r, a, l) {
      const c = r._storage || (r._storage = s());
      return r[a] = c[a] = l, delete r._keys, !0;
    }
  });
}
function Qe(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: cl(n, i),
    setContext: (o) => Qe(n, o, e, i),
    override: (o) => Qe(n.override(o), t, e, i)
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete n[r], !0;
    },
    get(o, r, a) {
      return dl(o, r, () => Gu(o, r, a));
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(n, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(n, r);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    has(o, r) {
      return Reflect.has(n, r);
    },
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    set(o, r, a) {
      return n[r] = a, delete o[r], !0;
    }
  });
}
function cl(n, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n;
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: fe(e) ? e : () => e,
    isIndexable: fe(i) ? i : () => i
  };
}
const qu = (n, t) => n ? n + Ys(t) : t, Gs = (n, t) => H(t) && n !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function dl(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t))
    return n[t];
  const i = e();
  return n[t] = i, i;
}
function Gu(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = n;
  let a = i[t];
  return fe(a) && r.isScriptable(t) && (a = Ju(t, a, n, e)), lt(a) && a.length && (a = Zu(t, a, n, r.isIndexable)), Gs(t, a) && (a = Qe(a, s, o && o[t], r)), a;
}
function Ju(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(n))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + n);
  return a.add(n), t = t(o, r || i), a.delete(n), Gs(n, t) && (t = Js(s._scopes, s, n, t)), t;
}
function Zu(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (St(o.index) && i(n))
    t = t[o.index % t.length];
  else if (H(t[0])) {
    const l = t, c = s._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const h = Js(c, s, n, d);
      t.push(Qe(h, o, r && r[n], a));
    }
  }
  return t;
}
function hl(n, t, e) {
  return fe(n) ? n(t, e) : n;
}
const Qu = (n, t) => n === !0 ? t : typeof n == "string" ? ue(t, n) : void 0;
function tf(n, t, e, i, s) {
  for (const o of t) {
    const r = Qu(e, o);
    if (r) {
      n.add(r);
      const a = hl(r._fallback, e, s);
      if (St(a) && a !== e && a !== i)
        return a;
    } else if (r === !1 && St(i) && e !== i)
      return null;
  }
  return !1;
}
function Js(n, t, e, i) {
  const s = t._rootScopes, o = hl(t._fallback, e, i), r = [
    ...n,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(i);
  let l = dr(a, r, e, o || e, i);
  return l === null || St(o) && o !== e && (l = dr(a, r, o, l, i), l === null) ? !1 : qs(Array.from(a), [
    ""
  ], s, o, () => ef(t, e, i));
}
function dr(n, t, e, i, s) {
  for (; e; )
    e = tf(n, t, e, i, s);
  return e;
}
function ef(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return lt(s) && H(e) ? e : s || {};
}
function nf(n, t, e, i) {
  let s;
  for (const o of t)
    if (s = ul(qu(o, n), e), St(s))
      return Gs(n, s) ? Js(e, i, n, s) : s;
}
function ul(n, t) {
  for (const e of t) {
    if (!e)
      continue;
    const i = e[n];
    if (St(i))
      return i;
  }
}
function hr(n) {
  let t = n._keys;
  return t || (t = n._keys = sf(n._scopes)), t;
}
function sf(n) {
  const t = /* @__PURE__ */ new Set();
  for (const e of n)
    for (const i of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function fl(n, t, e, i) {
  const { iScale: s } = n, { key: o = "r" } = this._parsing, r = new Array(i);
  let a, l, c, d;
  for (a = 0, l = i; a < l; ++a)
    c = a + e, d = t[c], r[a] = {
      r: s.parse(ue(d, o), c)
    };
  return r;
}
const of = Number.EPSILON || 1e-14, tn = (n, t) => t < n.length && !n[t].skip && n[t], gl = (n) => n === "x" ? "y" : "x";
function rf(n, t, e, i) {
  const s = n.skip ? t : n, o = t, r = e.skip ? t : e, a = jn(o, s), l = jn(r, o);
  let c = a / (a + l), d = l / (a + l);
  c = isNaN(c) ? 0 : c, d = isNaN(d) ? 0 : d;
  const h = i * c, u = i * d;
  return {
    previous: {
      x: o.x - h * (r.x - s.x),
      y: o.y - h * (r.y - s.y)
    },
    next: {
      x: o.x + u * (r.x - s.x),
      y: o.y + u * (r.y - s.y)
    }
  };
}
function af(n, t, e) {
  const i = n.length;
  let s, o, r, a, l, c = tn(n, 0);
  for (let d = 0; d < i - 1; ++d)
    if (l = c, c = tn(n, d + 1), !(!l || !c)) {
      if (kn(t[d], 0, of)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      s = e[d] / t[d], o = e[d + 1] / t[d], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[d] = s * r * t[d], e[d + 1] = o * r * t[d]);
    }
}
function lf(n, t, e = "x") {
  const i = gl(e), s = n.length;
  let o, r, a, l = tn(n, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = tn(n, c + 1), !a)
      continue;
    const d = a[e], h = a[i];
    r && (o = (d - r[e]) / 3, a[`cp1${e}`] = d - o, a[`cp1${i}`] = h - o * t[c]), l && (o = (l[e] - d) / 3, a[`cp2${e}`] = d + o, a[`cp2${i}`] = h + o * t[c]);
  }
}
function cf(n, t = "x") {
  const e = gl(t), i = n.length, s = Array(i).fill(0), o = Array(i);
  let r, a, l, c = tn(n, 0);
  for (r = 0; r < i; ++r)
    if (a = l, l = c, c = tn(n, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        s[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a ? c ? Xt(s[r - 1]) !== Xt(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  af(n, s, o), lf(n, o, t);
}
function oi(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function df(n, t) {
  let e, i, s, o, r, a = Bn(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    r = o, o = a, a = e < i - 1 && Bn(n[e + 1], t), o && (s = n[e], r && (s.cp1x = oi(s.cp1x, t.left, t.right), s.cp1y = oi(s.cp1y, t.top, t.bottom)), a && (s.cp2x = oi(s.cp2x, t.left, t.right), s.cp2y = oi(s.cp2y, t.top, t.bottom)));
}
function hf(n, t, e, i, s) {
  let o, r, a, l;
  if (t.spanGaps && (n = n.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    cf(n, s);
  else {
    let c = i ? n[n.length - 1] : n[0];
    for (o = 0, r = n.length; o < r; ++o)
      a = n[o], l = rf(c, a, n[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && df(n, e);
}
function pl() {
  return typeof window < "u" && typeof document < "u";
}
function Zs(n) {
  let t = n.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ci(n, t, e) {
  let i;
  return typeof n == "string" ? (i = parseInt(n, 10), n.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = n, i;
}
const Ui = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function uf(n, t) {
  return Ui(n).getPropertyValue(t);
}
const ff = [
  "top",
  "right",
  "bottom",
  "left"
];
function Ee(n, t, e) {
  const i = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = ff[s];
    i[o] = parseFloat(n[t + "-" + o + e]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const gf = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function pf(n, t) {
  const e = n.touches, i = e && e.length ? e[0] : n, { offsetX: s, offsetY: o } = i;
  let r = !1, a, l;
  if (gf(s, o, n.target))
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
function ke(n, t) {
  if ("native" in n)
    return n;
  const { canvas: e, currentDevicePixelRatio: i } = t, s = Ui(e), o = s.boxSizing === "border-box", r = Ee(s, "padding"), a = Ee(s, "border", "width"), { x: l, y: c, box: d } = pf(n, e), h = r.left + (d && a.left), u = r.top + (d && a.top);
  let { width: f, height: p } = t;
  return o && (f -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - h) / f * e.width / i),
    y: Math.round((c - u) / p * e.height / i)
  };
}
function mf(n, t, e) {
  let i, s;
  if (t === void 0 || e === void 0) {
    const o = Zs(n);
    if (!o)
      t = n.clientWidth, e = n.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Ui(o), l = Ee(a, "border", "width"), c = Ee(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, i = Ci(a.maxWidth, o, "clientWidth"), s = Ci(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: i || Mi,
    maxHeight: s || Mi
  };
}
const ri = (n) => Math.round(n * 10) / 10;
function bf(n, t, e, i) {
  const s = Ui(n), o = Ee(s, "margin"), r = Ci(s.maxWidth, n, "clientWidth") || Mi, a = Ci(s.maxHeight, n, "clientHeight") || Mi, l = mf(n, t, e);
  let { width: c, height: d } = l;
  if (s.boxSizing === "content-box") {
    const u = Ee(s, "border", "width"), f = Ee(s, "padding");
    c -= f.width + u.width, d -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, i ? c / i : d - o.height), c = ri(Math.min(c, r, l.maxWidth)), d = ri(Math.min(d, a, l.maxHeight)), c && !d && (d = ri(c / 2)), (t !== void 0 || e !== void 0) && i && l.height && d > l.height && (d = l.height, c = ri(Math.floor(d * i))), {
    width: c,
    height: d
  };
}
function ur(n, t, e) {
  const i = t || 1, s = Math.floor(n.height * i), o = Math.floor(n.width * i);
  n.height = Math.floor(n.height), n.width = Math.floor(n.width);
  const r = n.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${n.height}px`, r.style.width = `${n.width}px`), n.currentDevicePixelRatio !== i || r.height !== s || r.width !== o ? (n.currentDevicePixelRatio = i, r.height = s, r.width = o, n.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const yf = function() {
  let n = !1;
  try {
    const t = {
      get passive() {
        return n = !0, !1;
      }
    };
    window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
  } catch {
  }
  return n;
}();
function fr(n, t) {
  const e = uf(n, t), i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Pe(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: n.y + e * (t.y - n.y)
  };
}
function xf(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === "middle" ? e < 0.5 ? n.y : t.y : i === "after" ? e < 1 ? n.y : t.y : e > 0 ? t.y : n.y
  };
}
function _f(n, t, e, i) {
  const s = {
    x: n.cp2x,
    y: n.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Pe(n, s, e), a = Pe(s, o, e), l = Pe(o, t, e), c = Pe(r, a, e), d = Pe(a, l, e);
  return Pe(c, d, e);
}
const vf = function(n, t) {
  return {
    x(e) {
      return n + n + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, i) {
      return e - i;
    },
    leftForLtr(e, i) {
      return e - i;
    }
  };
}, wf = function() {
  return {
    x(n) {
      return n;
    },
    setWidth(n) {
    },
    textAlign(n) {
      return n;
    },
    xPlus(n, t) {
      return n + t;
    },
    leftForLtr(n, t) {
      return n;
    }
  };
};
function Xe(n, t, e) {
  return n ? vf(t, e) : wf();
}
function ml(n, t) {
  let e, i;
  (t === "ltr" || t === "rtl") && (e = n.canvas.style, i = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), n.prevTextDirection = i);
}
function bl(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty("direction", t[0], t[1]));
}
function yl(n) {
  return n === "angle" ? {
    between: zn,
    compare: wu,
    normalize: jt
  } : {
    between: Qt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function gr({ start: n, end: t, count: e, loop: i, style: s }) {
  return {
    start: n % e,
    end: t % e,
    loop: i && (t - n + 1) % e === 0,
    style: s
  };
}
function Sf(n, t, e) {
  const { property: i, start: s, end: o } = e, { between: r, normalize: a } = yl(i), l = t.length;
  let { start: c, end: d, loop: h } = n, u, f;
  if (h) {
    for (c += l, d += l, u = 0, f = l; u < f && r(a(t[c % l][i]), s, o); ++u)
      c--, d--;
    c %= l, d %= l;
  }
  return d < c && (d += l), {
    start: c,
    end: d,
    loop: h,
    style: n.style
  };
}
function xl(n, t, e) {
  if (!e)
    return [
      n
    ];
  const { property: i, start: s, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = yl(i), { start: d, end: h, loop: u, style: f } = Sf(n, t, e), p = [];
  let g = !1, m = null, y, _, w;
  const v = () => l(s, w, y) && a(s, w) !== 0, x = () => a(o, y) === 0 || l(o, w, y), k = () => g || v(), C = () => !g || x();
  for (let P = d, O = d; P <= h; ++P)
    _ = t[P % r], !_.skip && (y = c(_[i]), y !== w && (g = l(y, s, o), m === null && k() && (m = a(y, s) === 0 ? P : O), m !== null && C() && (p.push(gr({
      start: m,
      end: P,
      loop: u,
      count: r,
      style: f
    })), m = null), O = P, w = y));
  return m !== null && p.push(gr({
    start: m,
    end: h,
    loop: u,
    count: r,
    style: f
  })), p;
}
function _l(n, t) {
  const e = [], i = n.segments;
  for (let s = 0; s < i.length; s++) {
    const o = xl(i[s], n.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Mf(n, t, e, i) {
  let s = 0, o = t - 1;
  if (e && !i)
    for (; s < t && !n[s].skip; )
      s++;
  for (; s < t && n[s].skip; )
    s++;
  for (s %= t, e && (o += s); o > s && n[o % t].skip; )
    o--;
  return o %= t, {
    start: s,
    end: o
  };
}
function kf(n, t, e, i) {
  const s = n.length, o = [];
  let r = t, a = n[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = n[l % s];
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
function Pf(n, t) {
  const e = n.points, i = n.options.spanGaps, s = e.length;
  if (!s)
    return [];
  const o = !!n._loop, { start: r, end: a } = Mf(e, s, o, i);
  if (i === !0)
    return pr(n, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + s : a, c = !!n._fullLoop && r === 0 && a === s - 1;
  return pr(n, kf(e, r, l, c), e, t);
}
function pr(n, t, e, i) {
  return !i || !i.setContext || !e ? t : Cf(n, t, e, i);
}
function Cf(n, t, e, i) {
  const s = n._chart.getContext(), o = mr(n.options), { _datasetIndex: r, options: { spanGaps: a } } = n, l = e.length, c = [];
  let d = o, h = t[0].start, u = h;
  function f(p, g, m, y) {
    const _ = a ? -1 : 1;
    if (p !== g) {
      for (p += l; e[p % l].skip; )
        p -= _;
      for (; e[g % l].skip; )
        g += _;
      p % l !== g % l && (c.push({
        start: p % l,
        end: g % l,
        loop: m,
        style: y
      }), d = y, h = g % l);
    }
  }
  for (const p of t) {
    h = a ? h : p.start;
    let g = e[h % l], m;
    for (u = h + 1; u <= p.end; u++) {
      const y = e[u % l];
      m = mr(i.setContext(be(s, {
        type: "segment",
        p0: g,
        p1: y,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), Of(m, d) && f(h, u - 1, p.loop, d), g = y, d = m;
    }
    h < u - 1 && f(h, u - 1, p.loop, d);
  }
  return c;
}
function mr(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor
  };
}
function Of(n, t) {
  return t && JSON.stringify(n) !== JSON.stringify(t);
}
class Ef {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, i, s) {
    const o = e.listeners[s], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(i - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = el.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length)
        return;
      const o = i.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (s.draw(), this._notify(s, i, t, "progress")), o.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, i)), i;
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    !e || (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((i, s) => Math.max(i, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const i = e.items;
    let s = i.length - 1;
    for (; s >= 0; --s)
      i[s].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Gt = new Ef();
const br = "transparent", Af = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = ar(n || br), s = i.valid && ar(t || br);
    return s && s.valid ? s.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class Tf {
  constructor(t, e, i, s) {
    const o = e[i];
    s = yn([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = yn([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || Af[t.type || typeof r], this._easing = Pn[t.easing] || Pn.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, r = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = yn([
        t.to,
        e,
        s,
        t.from
      ]), this._from = yn([
        t.from,
        s,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, i = this._duration, s = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < i), !this._active) {
      this._target[s] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    l = e / i % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({
        res: e,
        rej: i
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", i = this._promises || [];
    for (let s = 0; s < i.length; s++)
      i[s][e]();
  }
}
class Qs {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!H(t))
      return;
    const e = Object.keys(pt.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!H(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (lt(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !i.has(a)) && i.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options, s = Rf(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && Df(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const i = this._properties, s = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const d = e[c];
      let h = o[c];
      const u = i.get(c);
      if (h)
        if (u && h.active()) {
          h.update(u, d, a);
          continue;
        } else
          h.cancel();
      if (!u || !u.duration) {
        t[c] = d;
        continue;
      }
      o[c] = h = new Tf(u, t, c, d), s.push(h);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const i = this._createAnimations(t, e);
    if (i.length)
      return Gt.add(this._chart, i), !0;
  }
}
function Df(n, t) {
  const e = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Rf(n, t) {
  if (!t)
    return;
  let e = n.options;
  if (!e) {
    n.options = t;
    return;
  }
  return e.$shared && (n.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function yr(n, t) {
  const e = n && n.options || {}, i = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function If(n, t, e) {
  if (e === !1)
    return !1;
  const i = yr(n, e), s = yr(t, e);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function Lf(n) {
  let t, e, i, s;
  return H(n) ? (t = n.top, e = n.right, i = n.bottom, s = n.left) : t = e = i = s = n, {
    top: t,
    right: e,
    bottom: i,
    left: s,
    disabled: n === !1
  };
}
function vl(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    e.push(i[s].index);
  return e;
}
function xr(n, t, e, i = {}) {
  const s = n.keys, o = i.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (l = +s[r], l === e) {
        if (i.all)
          continue;
        break;
      }
      c = n.values[l], gt(c) && (o || t === 0 || Xt(t) === Xt(c)) && (t += c);
    }
    return t;
  }
}
function Ff(n) {
  const t = Object.keys(n), e = new Array(t.length);
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i)
    o = t[i], e[i] = {
      x: o,
      y: n[o]
    };
  return e;
}
function _r(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function jf(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function zf(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function Bf(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function vr(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function wr(n, t) {
  const { chart: e, _cachedMeta: i } = n, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = i, l = o.axis, c = r.axis, d = jf(o, r, i), h = t.length;
  let u;
  for (let f = 0; f < h; ++f) {
    const p = t[f], { [l]: g, [c]: m } = p, y = p._stacks || (p._stacks = {});
    u = y[c] = Bf(s, d, g), u[a] = m, u._top = vr(u, r, !0, i.type), u._bottom = vr(u, r, !1, i.type);
    const _ = u._visualValues || (u._visualValues = {});
    _[a] = m;
  }
}
function us(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function Wf(n, t) {
  return be(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Nf(n, t, e) {
  return be(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function un(n, t) {
  const e = n.controller.index, i = n.vScale && n.vScale.axis;
  if (!!i) {
    t = t || n._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][e] === void 0)
        return;
      delete o[i][e], o[i]._visualValues !== void 0 && o[i]._visualValues[e] !== void 0 && delete o[i]._visualValues[e];
    }
  }
}
const fs = (n) => n === "reset" || n === "none", Sr = (n, t) => t ? n : Object.assign({}, n), $f = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: vl(e, !0),
  values: null
};
class Vt {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = _r(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && un(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (h, u, f, p) => h === "x" ? u : h === "r" ? p : f, o = e.xAxisID = W(i.xAxisID, us(t, "x")), r = e.yAxisID = W(i.yAxisID, us(t, "y")), a = e.rAxisID = W(i.rAxisID, us(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, r, a), d = e.vAxisID = s(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(d);
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
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && sr(this._data, this), t._stacked && un(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (H(e))
      this._data = Ff(e);
    else if (i !== e) {
      if (i) {
        sr(i, this);
        const s = this._cachedMeta;
        un(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && Pu(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = _r(e.vScale, e), e.stack !== i.stack && (s = !0, un(e), e.stack = i.stack), this._resyncElements(t), (s || o !== e._stacked) && wr(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: r } = i, a = o.axis;
    let l = t === 0 && e === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], d, h, u;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, u = s;
    else {
      lt(s[t]) ? u = this.parseArrayData(i, s, t, e) : H(s[t]) ? u = this.parseObjectData(i, s, t, e) : u = this.parsePrimitiveData(i, s, t, e);
      const f = () => h[a] === null || c && h[a] < c[a];
      for (d = 0; d < e; ++d)
        i._parsed[d + t] = h = u[d], l && (f() && (l = !1), c = h);
      i._sorted = l;
    }
    r && wr(this, u);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), d = o === r, h = new Array(s);
    let u, f, p;
    for (u = 0, f = s; u < f; ++u)
      p = u + i, h[u] = {
        [a]: d || o.parse(c[p], p),
        [l]: r.parse(e[p], p)
      };
    return h;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, d, h;
    for (l = 0, c = s; l < c; ++l)
      d = l + i, h = e[d], a[l] = {
        x: o.parse(h[0], d),
        y: r.parse(h[1], d)
      };
    return a;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let d, h, u, f;
    for (d = 0, h = s; d < h; ++d)
      u = d + i, f = e[u], c[d] = {
        x: o.parse(ue(f, a), u),
        y: r.parse(ue(f, l), u)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const s = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: vl(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return xr(a, r, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let r = o === null ? NaN : o;
    const a = s && i._stacks[e.axis];
    s && a && (s.values = a, r = xr(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, r = s.length, a = this._getOtherScale(t), l = $f(e, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: h } = zf(a);
    let u, f;
    function p() {
      f = s[u];
      const g = f[a.axis];
      return !gt(f[t.axis]) || d > g || h < g;
    }
    for (u = 0; u < r && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!p()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, i = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s)
      r = e[s][t.axis], gt(r) && i.push(r);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = e.iScale, s = e.vScale, o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Lf(W(this.options.clip, If(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let d;
    for (i.dataset && i.dataset.draw(t, o, a, l), d = a; d < a + l; ++d) {
      const h = s[d];
      h.hidden || (h.active && c ? r.push(h) : h.draw(t, o));
    }
    for (d = 0; d < r.length; ++d)
      r[d].draw(t, o);
  }
  getStyle(t, e) {
    const i = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Nf(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Wf(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const s = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && St(i);
    if (a)
      return Sr(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), h = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), d), f = Object.keys(pt.elements[t]), p = () => this.getContext(i, s, e), g = c.resolveNamedOptions(u, f, p, h);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(Sr(g, l))), g;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const d = this.chart.config, h = d.datasetAnimationScopeKeys(this._type, e), u = d.getOptionScopes(this.getDataset(), h);
      l = d.createResolver(u, this.getContext(t, i, e));
    }
    const c = new Qs(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (!!t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || fs(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(i), r = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, i, s) {
    fs(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !fs(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, i, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, e, i) {
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
    const e = this._data, i = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const s = i.length, o = e.length, r = Math.min(o, s);
    r && this.parse(0, r), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta, o = s.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, e), i && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, i, s) {
  }
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, e);
      i._stacked && un(i, s);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, i, s] = t;
      this[e](i, s);
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
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
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
D(Vt, "defaults", {}), D(Vt, "datasetElementType", null), D(Vt, "dataElementType", null);
function Vf(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++)
      i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = tl(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function Hf(n) {
  const t = n.iScale, e = Vf(t, n.type);
  let i = t._length, s, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (St(a) && (i = Math.min(i, Math.abs(r - a) || i)), a = r);
  };
  for (s = 0, o = e.length; s < o; ++s)
    r = t.getPixelForValue(e[s]), l();
  for (a = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    r = t.getPixelForTick(s), l();
  return i;
}
function Yf(n, t, e, i) {
  const s = e.barThickness;
  let o, r;
  return tt(s) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = s * i, r = 1), {
    chunk: o / i,
    ratio: r,
    start: t.pixels[n] - o / 2
  };
}
function Uf(n, t, e, i) {
  const s = t.pixels, o = s[n];
  let r = n > 0 ? s[n - 1] : null, a = n < s.length - 1 ? s[n + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / i,
    ratio: e.barPercentage,
    start: c
  };
}
function Xf(n, t, e, i) {
  const s = e.parse(n[0], i), o = e.parse(n[1], i), r = Math.min(s, o), a = Math.max(s, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: s,
    end: o,
    min: r,
    max: a
  };
}
function wl(n, t, e, i) {
  return lt(n) ? Xf(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function Mr(n, t, e, i) {
  const s = n.iScale, o = n.vScale, r = s.getLabels(), a = s === o, l = [];
  let c, d, h, u;
  for (c = e, d = e + i; c < d; ++c)
    u = t[c], h = {}, h[s.axis] = a || s.parse(r[c], c), l.push(wl(u, h, o, c));
  return l;
}
function gs(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Kf(n, t, e) {
  return n !== 0 ? Xt(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function qf(n) {
  let t, e, i, s, o;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function Gf(n, t, e, i) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    n.borderSkipped = o;
    return;
  }
  if (s === !0) {
    n.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: d } = qf(n);
  s === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? s = c : (e._bottom || 0) === i ? s = d : (o[kr(d, r, a, l)] = !0, s = c)), o[kr(s, r, a, l)] = !0, n.borderSkipped = o;
}
function kr(n, t, e, i) {
  return i ? (n = Jf(n, t, e), n = Pr(n, e, t)) : n = Pr(n, t, e), n;
}
function Jf(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function Pr(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function Zf(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class On extends Vt {
  parsePrimitiveData(t, e, i, s) {
    return Mr(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return Mr(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, h = [];
    let u, f, p, g;
    for (u = i, f = i + s; u < f; ++u)
      g = e[u], p = {}, p[o.axis] = o.parse(ue(g, c), u), h.push(wl(ue(g, d), p, r, u));
    return h;
  }
  updateRangeFromParsed(t, e, i, s) {
    super.updateRangeFromParsed(t, e, i, s);
    const o = i._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: i, vScale: s } = e, o = this.getParsed(t), r = o._custom, a = gs(r) ? "[" + r.start + ", " + r.end + "]" : "" + s.getLabelForValue(o[s.axis]);
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
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), d = this._getRuler(), { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, s);
    for (let f = e; f < e + i; f++) {
      const p = this.getParsed(f), g = o || tt(p[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, d), y = (p._stacks || {})[a.axis], _ = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !y || gs(p._custom) || r === y._top || r === y._bottom,
        x: c ? g.head : m.center,
        y: c ? m.center : g.head,
        height: c ? m.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : m.size
      };
      u && (_.options = h || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const w = _.options || t[f].options;
      Gf(_, w, y, r), Zf(_, w, d.ratio), this.updateElement(t[f], f, _, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped), o = i.options.stacked, r = [], a = (l) => {
      const c = l.controller.getParsed(e), d = c && c[l.vScale.axis];
      if (tt(d) || isNaN(d))
        return !0;
    };
    for (const l of s)
      if (!(e !== void 0 && a(l)) && ((o === !1 || r.indexOf(l.stack) === -1 || o === void 0 && l.stack === void 0) && r.push(l.stack), l.index === t))
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, i) {
    const s = this._getStacks(t, i), o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, i = e.iScale, s = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      s.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
    const a = t.barThickness;
    return {
      min: a || Hf(e),
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
    const { _cachedMeta: { vScale: e, _stacked: i, index: s }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = gs(c);
    let h = l[e.axis], u = 0, f = i ? this.applyStack(e, l, i) : h, p, g;
    f !== h && (u = f - h, f = h), d && (h = c.barStart, f = c.barEnd - c.barStart, h !== 0 && Xt(h) !== Xt(c.barEnd) && (u = 0), u += h);
    const m = !tt(o) && !d ? o : u;
    let y = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? p = e.getPixelForValue(u + f) : p = y, g = p - y, Math.abs(g) < r) {
      g = Kf(g, e, a) * r, h === a && (y -= g / 2);
      const _ = e.getPixelForDecimal(0), w = e.getPixelForDecimal(1), v = Math.min(_, w), x = Math.max(_, w);
      y = Math.max(Math.min(y, x), v), p = y + g, i && !d && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(p) - e.getValueForPixel(y));
    }
    if (y === e.getPixelForValue(a)) {
      const _ = Xt(g) * e.getLineWidthForValue(a) / 2;
      y += _, g -= _;
    }
    return {
      size: g,
      base: y,
      head: p,
      center: p + g / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale, s = this.options, o = s.skipNull, r = W(s.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount, d = s.barThickness === "flex" ? Uf(t, e, s, c) : Yf(t, e, s, c), h = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = d.start + d.chunk * h + d.chunk / 2, l = Math.min(r, d.chunk * d.ratio);
    } else
      a = i.getPixelForValue(this.getParsed(t)[i.axis], t), l = Math.min(r, e.min * e.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[e.axis] !== null && i[o].draw(this._ctx);
  }
}
D(On, "id", "bar"), D(On, "defaults", {
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
}), D(On, "overrides", {
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
class En extends Vt {
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, e, i, s) {
    const o = super.parsePrimitiveData(t, e, i, s);
    for (let r = 0; r < o.length; r++)
      o[r]._custom = this.resolveDataElementOptions(r + i).radius;
    return o;
  }
  parseArrayData(t, e, i, s) {
    const o = super.parseArrayData(t, e, i, s);
    for (let r = 0; r < o.length; r++) {
      const a = e[i + r];
      o[r]._custom = W(a[2], this.resolveDataElementOptions(r + i).radius);
    }
    return o;
  }
  parseObjectData(t, e, i, s) {
    const o = super.parseObjectData(t, e, i, s);
    for (let r = 0; r < o.length; r++) {
      const a = e[i + r];
      o[r]._custom = W(a && a.r && +a.r, this.resolveDataElementOptions(r + i).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let i = t.length - 1; i >= 0; --i)
      e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = e, r = this.getParsed(t), a = s.getLabelForValue(r.x), l = o.getLabelForValue(r.y), c = r._custom;
    return {
      label: i[t] || "",
      value: "(" + a + ", " + l + (c ? ", " + c : "") + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s), d = r.axis, h = a.axis;
    for (let u = e; u < e + i; u++) {
      const f = t[u], p = !o && this.getParsed(u), g = {}, m = g[d] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(p[d]), y = g[h] = o ? a.getBasePixel() : a.getPixelForValue(p[h]);
      g.skip = isNaN(m) || isNaN(y), c && (g.options = l || this.resolveDataElementOptions(u, f.active ? "active" : s), o && (g.options.radius = 0)), this.updateElement(f, u, g, s);
    }
  }
  resolveDataElementOptions(t, e) {
    const i = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, e);
    s.$shared && (s = Object.assign({}, s, {
      $shared: !1
    }));
    const o = s.radius;
    return e !== "active" && (s.radius = 0), s.radius += W(i && i._custom, o), s;
  }
}
D(En, "id", "bubble"), D(En, "defaults", {
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
}), D(En, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function Qf(n, t, e) {
  let i = 1, s = 1, o = 0, r = 0;
  if (t < ut) {
    const a = n, l = a + t, c = Math.cos(a), d = Math.sin(a), h = Math.cos(l), u = Math.sin(l), f = (w, v, x) => zn(w, a, l, !0) ? 1 : Math.max(v, v * e, x, x * e), p = (w, v, x) => zn(w, a, l, !0) ? -1 : Math.min(v, v * e, x, x * e), g = f(0, c, h), m = f(_t, d, u), y = p(it, c, h), _ = p(it + _t, d, u);
    i = (g - y) / 2, s = (m - _) / 2, o = -(g + y) / 2, r = -(m + _) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class ae extends Vt {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const i = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = i;
    else {
      let o = (l) => +i[l];
      if (H(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +ue(i[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return kt(this.options.rotation - 90);
  }
  _getCircumference() {
    return kt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ut, e = -ut;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller, o = s._getRotation(), r = s._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - r) / 2, 0), l = Math.min(fu(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: h } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: p, offsetY: g } = Qf(h, d, l), m = (i.width - r) / u, y = (i.height - r) / f, _ = Math.max(Math.min(m, y) / 2, 0), w = Ka(this.options.radius, _), v = Math.max(w * l, 0), x = (w - v) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * w, this.offsetY = g * w, s.total = this.calculateTotal(), this.outerRadius = w - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / ut);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, h = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, p = u ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: m } = this._getSharedOptions(e, s);
    let y = this._getRotation(), _;
    for (_ = 0; _ < e; ++_)
      y += this._circumference(_, o);
    for (_ = e; _ < e + i; ++_) {
      const w = this._circumference(_, o), v = t[_], x = {
        x: d + this.offsetX,
        y: h + this.offsetY,
        startAngle: y,
        endAngle: y + w,
        circumference: w,
        outerRadius: p,
        innerRadius: f
      };
      m && (x.options = g || this.resolveDataElementOptions(_, v.active ? "active" : s)), y += w, this.updateElement(v, _, x, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let i = 0, s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !e[s].hidden && (i += Math.abs(o));
    }
    return i;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? ut * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = Un(e._parsed[t], i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
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
      l = a.resolveDataElementOptions(s), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(W(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
D(ae, "id", "doughnut"), D(ae, "defaults", {
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
}), D(ae, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing"
}), D(ae, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: i, color: s } } = t.legend.options;
            return e.labels.map((o, r) => {
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
      onClick(t, e, i) {
        i.chart.toggleDataVisibility(e.index), i.chart.update();
      }
    }
  }
});
class An extends Vt {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = il(e, s, r);
    this._drawStart = a, this._drawCount = l, sl(e) && (a = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(s, a, l, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: h } = this._getSharedOptions(e, s), u = r.axis, f = a.axis, { spanGaps: p, segment: g } = this.options, m = Je(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || s === "none", _ = e + i, w = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let x = 0; x < w; ++x) {
      const k = t[x], C = y ? k : {};
      if (x < e || x >= _) {
        C.skip = !0;
        continue;
      }
      const P = this.getParsed(x), O = tt(P[f]), I = C[u] = r.getPixelForValue(P[u], x), R = C[f] = o || O ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, P, l) : P[f], x);
      C.skip = isNaN(I) || isNaN(R) || O, C.stop = x > 0 && Math.abs(P[u] - v[u]) > m, g && (C.parsed = P, C.raw = c.data[x]), h && (C.options = d || this.resolveDataElementOptions(x, k.active ? "active" : s)), y || this.updateElement(k, x, C, s), v = P;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, s = t.data || [];
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
D(An, "id", "line"), D(An, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), D(An, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class Ke extends Vt {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = Un(e._parsed[t].r, i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, i, s) {
    return fl.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((i, s) => {
      const o = this.getParsed(s).r;
      !isNaN(o) && this.chart.getDataVisibility(s) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, i = t.options, s = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(s / 2, 0), r = Math.max(i.cutoutPercentage ? o / 100 * i.cutoutPercentage : 1, 0), a = (o - r) / t.getVisibleDatasetCount();
    this.outerRadius = o - a * this.index, this.innerRadius = this.outerRadius - a;
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, h = c.yCenter, u = c.getIndexAngle(0) - 0.5 * it;
    let f = u, p;
    const g = 360 / this.countVisibleElements();
    for (p = 0; p < e; ++p)
      f += this._computeAngle(p, s, g);
    for (p = e; p < e + i; p++) {
      const m = t[p];
      let y = f, _ = f + this._computeAngle(p, s, g), w = r.getDataVisibility(p) ? c.getDistanceFromCenterForValue(this.getParsed(p).r) : 0;
      f = _, o && (l.animateScale && (w = 0), l.animateRotate && (y = _ = u));
      const v = {
        x: d,
        y: h,
        innerRadius: 0,
        outerRadius: w,
        startAngle: y,
        endAngle: _,
        options: this.resolveDataElementOptions(p, m.active ? "active" : s)
      };
      this.updateElement(m, p, v, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((i, s) => {
      !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
    }), e;
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t) ? kt(this.resolveDataElementOptions(t, e).angle || i) : 0;
  }
}
D(Ke, "id", "polarArea"), D(Ke, "defaults", {
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
}), D(Ke, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: i, color: s } } = t.legend.options;
            return e.labels.map((o, r) => {
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
      onClick(t, e, i) {
        i.chart.toggleDataVisibility(e.index), i.chart.update();
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
class Oi extends ae {
}
D(Oi, "id", "pie"), D(Oi, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Tn extends Vt {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(i[e.axis])
    };
  }
  parseObjectData(t, e, i, s) {
    return fl.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta, i = e.dataset, s = e.data || [], o = e.iScale.getLabels();
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
  updateElements(t, e, i, s) {
    const o = this._cachedMeta.rScale, r = s === "reset";
    for (let a = e; a < e + i; a++) {
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : s), d = o.getPointPositionForValue(a, this.getParsed(a).r), h = r ? o.xCenter : d.x, u = r ? o.yCenter : d.y, f = {
        x: h,
        y: u,
        angle: d.angle,
        skip: isNaN(h) || isNaN(u),
        options: c
      };
      this.updateElement(l, a, f, s);
    }
  }
}
D(Tn, "id", "radar"), D(Tn, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), D(Tn, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Dn extends Vt {
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = e, r = this.getParsed(t), a = s.getLabelForValue(r.x), l = o.getLabelForValue(r.y);
    return {
      label: i[t] || "",
      value: "(" + a + ", " + l + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, { data: i = [] } = e, s = this.chart._animationsDisabled;
    let { start: o, count: r } = il(e, i, s);
    if (this._drawStart = o, this._drawCount = r, sl(e) && (o = 0, r = i.length), this.options.showLine) {
      const { dataset: a, _dataset: l } = e;
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
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, d = this.resolveDataElementOptions(e, s), h = this.getSharedOptions(d), u = this.includeOptions(s, h), f = r.axis, p = a.axis, { spanGaps: g, segment: m } = this.options, y = Je(g) ? g : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || s === "none";
    let w = e > 0 && this.getParsed(e - 1);
    for (let v = e; v < e + i; ++v) {
      const x = t[v], k = this.getParsed(v), C = _ ? x : {}, P = tt(k[p]), O = C[f] = r.getPixelForValue(k[f], v), I = C[p] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[p], v);
      C.skip = isNaN(O) || isNaN(I) || P, C.stop = v > 0 && Math.abs(k[f] - w[f]) > y, m && (C.parsed = k, C.raw = c.data[v]), u && (C.options = h || this.resolveDataElementOptions(v, x.active ? "active" : s)), _ || this.updateElement(x, v, C, s), w = k;
    }
    this.updateSharedOptions(h, s, d);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = e.length - 1; l >= 0; --l)
        a = Math.max(a, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const i = t.dataset, s = i.options && i.options.borderWidth || 0;
    if (!e.length)
      return s;
    const o = e[0].size(this.resolveDataElementOptions(0)), r = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(s, o, r) / 2;
  }
}
D(Dn, "id", "scatter"), D(Dn, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), D(Dn, "overrides", {
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
  BarController: On,
  BubbleController: En,
  DoughnutController: ae,
  LineController: An,
  PolarAreaController: Ke,
  PieController: Oi,
  RadarController: Tn,
  ScatterController: Dn
});
function we() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class to {
  static override(t) {
    Object.assign(to.prototype, t);
  }
  constructor(t) {
    this.options = t || {};
  }
  init() {
  }
  formats() {
    return we();
  }
  parse() {
    return we();
  }
  format() {
    return we();
  }
  add() {
    return we();
  }
  diff() {
    return we();
  }
  startOf() {
    return we();
  }
  endOf() {
    return we();
  }
}
var tg = {
  _date: to
};
function eg(n, t, e, i) {
  const { controller: s, data: o, _sorted: r } = n, a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Mu : te;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0], d = typeof c.getRange == "function" && c.getRange(t);
        if (d) {
          const h = l(o, t, e - d), u = l(o, t, e + d);
          return {
            lo: h.lo,
            hi: u.hi
          };
        }
      }
    } else
      return l(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function qn(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: h, hi: u } = eg(o[a], t, r, s);
    for (let f = h; f <= u; ++f) {
      const p = d[f];
      p.skip || i(p, c, f);
    }
  }
}
function ng(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, r = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function ps(n, t, e, i, s) {
  const o = [];
  return !s && !n.isPointInArea(t) || qn(n, e, t, function(a, l, c) {
    !s && !Bn(a, n.chartArea, 0) || a.inRange(t.x, t.y, i) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function ig(n, t, e, i) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: h } = Za(r, {
      x: t.x,
      y: t.y
    });
    zn(h, c, d) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return qn(n, e, t, o), s;
}
function sg(n, t, e, i, s, o) {
  let r = [];
  const a = ng(e);
  let l = Number.POSITIVE_INFINITY;
  function c(d, h, u) {
    const f = d.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const p = d.getCenterPoint(s);
    if (!(!!o || n.isPointInArea(p)) && !f)
      return;
    const m = a(t, p);
    m < l ? (r = [
      {
        element: d,
        datasetIndex: h,
        index: u
      }
    ], l = m) : m === l && r.push({
      element: d,
      datasetIndex: h,
      index: u
    });
  }
  return qn(n, e, t, c), r;
}
function ms(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === "r" && !i ? ig(n, t, e, s) : sg(n, t, e, i, s, o);
}
function Cr(n, t, e, i, s) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return qn(n, e, t, (l, c, d) => {
    l[r](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(t.x, t.y, s));
  }), i && !a ? [] : o;
}
var og = {
  evaluateInteractionItems: qn,
  modes: {
    index(n, t, e, i) {
      const s = ke(t, n), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? ps(n, s, o, i, r) : ms(n, s, o, !1, i, r), l = [];
      return a.length ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
        const d = a[0].index, h = c.data[d];
        h && !h.skip && l.push({
          element: h,
          datasetIndex: c.index,
          index: d
        });
      }), l) : [];
    },
    dataset(n, t, e, i) {
      const s = ke(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? ps(n, s, o, i, r) : ms(n, s, o, !1, i, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = n.getDatasetMeta(l).data;
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
    point(n, t, e, i) {
      const s = ke(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ps(n, s, o, i, r);
    },
    nearest(n, t, e, i) {
      const s = ke(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ms(n, s, o, e.intersect, i, r);
    },
    x(n, t, e, i) {
      const s = ke(t, n);
      return Cr(n, s, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const s = ke(t, n);
      return Cr(n, s, "y", e.intersect, i);
    }
  }
};
const Sl = [
  "left",
  "top",
  "right",
  "bottom"
];
function fn(n, t) {
  return n.filter((e) => e.pos === t);
}
function Or(n, t) {
  return n.filter((e) => Sl.indexOf(e.pos) === -1 && e.box.axis === t);
}
function gn(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e, o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function rg(n) {
  const t = [];
  let e, i, s, o, r, a;
  for (e = 0, i = (n || []).length; e < i; ++e)
    s = n[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = s, t.push({
      index: e,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function ag(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !Sl.includes(s))
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
function lg(n, t) {
  const e = ag(n), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = n.length; o < r; ++o) {
    a = n[o];
    const { fullSize: l } = a.box, c = e[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * i : l && t.availableWidth, a.height = s) : (a.width = i, a.height = d ? d * s : l && t.availableHeight);
  }
  return e;
}
function cg(n) {
  const t = rg(n), e = gn(t.filter((c) => c.box.fullSize), !0), i = gn(fn(t, "left"), !0), s = gn(fn(t, "right")), o = gn(fn(t, "top"), !0), r = gn(fn(t, "bottom")), a = Or(t, "x"), l = Or(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: fn(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Er(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function Ml(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function dg(n, t, e, i) {
  const { pos: s, box: o } = e, r = n.maxPadding;
  if (!H(s)) {
    e.size && (n[s] -= e.size);
    const h = i[e.stack] || {
      size: 0,
      count: 1
    };
    h.size = Math.max(h.size, e.horizontal ? o.height : o.width), e.size = h.size / h.count, n[s] += e.size;
  }
  o.getPadding && Ml(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Er(r, n, "left", "right")), l = Math.max(0, t.outerHeight - Er(r, n, "top", "bottom")), c = a !== n.w, d = l !== n.h;
  return n.w = a, n.h = l, e.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function hg(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return n[i] += s, s;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function ug(n, t) {
  const e = t.maxPadding;
  function i(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return i(n ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function xn(n, t, e, i) {
  const s = [];
  let o, r, a, l, c, d;
  for (o = 0, r = n.length, c = 0; o < r; ++o) {
    a = n[o], l = a.box, l.update(a.width || t.w, a.height || t.h, ug(a.horizontal, t));
    const { same: h, other: u } = dg(t, e, a, i);
    c |= h && s.length, d = d || u, l.fullSize || s.push(a);
  }
  return c && xn(s, t, e, i) || d;
}
function ai(n, t, e, i, s) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + s, n.width = i, n.height = s;
}
function Ar(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of n) {
    const l = a.box, c = i[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const h = t.w * d, u = c.size || l.height;
      St(c.start) && (r = c.start), l.fullSize ? ai(l, s.left, r, e.outerWidth - s.right - s.left, u) : ai(l, t.left + c.placed, r, h, u), c.start = r, c.placed += h, r = l.bottom;
    } else {
      const h = t.h * d, u = c.size || l.width;
      St(c.start) && (o = c.start), l.fullSize ? ai(l, o, s.top, u, e.outerHeight - s.bottom - s.top) : ai(l, o, t.top + c.placed, u, h), c.start = o, c.placed += h, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Dt = {
  addBox(n, t) {
    n.boxes || (n.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, n.boxes.push(t);
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1;
    e !== -1 && n.boxes.splice(e, 1);
  },
  configure(n, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(n, t, e, i) {
    if (!n)
      return;
    const s = Pt(n.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(e - s.height, 0), a = cg(n.boxes), l = a.vertical, c = a.horizontal;
    at(n.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const d = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, h = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / d,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, s);
    Ml(u, Pt(i));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), p = lg(l.concat(c), h);
    xn(a.fullSize, f, h, p), xn(l, f, h, p), xn(c, f, h, p) && xn(l, f, h, p), hg(f), Ar(a.leftAndTop, f, h, p), f.x += f.w, f.y += f.h, Ar(a.rightAndBottom, f, h, p), n.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, at(a.chartArea, (g) => {
      const m = g.box;
      Object.assign(m, n.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class kl {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {
  }
  removeEventListener(t, e, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, s) {
    return e = Math.max(0, e || t.width), i = i || t.height, {
      width: e,
      height: Math.max(0, s ? Math.floor(e / s) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class fg extends kl {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const pi = "$chartjs", gg = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Tr = (n) => n === null || n === "";
function pg(n, t) {
  const e = n.style, i = n.getAttribute("height"), s = n.getAttribute("width");
  if (n[pi] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Tr(s)) {
    const o = fr(n, "width");
    o !== void 0 && (n.width = o);
  }
  if (Tr(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const o = fr(n, "height");
      o !== void 0 && (n.height = o);
    }
  return n;
}
const Pl = yf ? {
  passive: !0
} : !1;
function mg(n, t, e) {
  n.addEventListener(t, e, Pl);
}
function bg(n, t, e) {
  n.canvas.removeEventListener(t, e, Pl);
}
function yg(n, t) {
  const e = gg[n.type] || n.type, { x: i, y: s } = ke(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function Ei(n, t) {
  for (const e of n)
    if (e === t || e.contains(t))
      return !0;
}
function xg(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ei(a.addedNodes, i), r = r && !Ei(a.removedNodes, i);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function _g(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ei(a.removedNodes, i), r = r && !Ei(a.addedNodes, i);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const Wn = /* @__PURE__ */ new Map();
let Dr = 0;
function Cl() {
  const n = window.devicePixelRatio;
  n !== Dr && (Dr = n, Wn.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function vg(n, t) {
  Wn.size || window.addEventListener("resize", Cl), Wn.set(n, t);
}
function wg(n) {
  Wn.delete(n), Wn.size || window.removeEventListener("resize", Cl);
}
function Sg(n, t, e) {
  const i = n.canvas, s = i && Zs(i);
  if (!s)
    return;
  const o = nl((a, l) => {
    const c = s.clientWidth;
    e(a, l), c < s.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(s), vg(n, o), r;
}
function bs(n, t, e) {
  e && e.disconnect(), t === "resize" && wg(n);
}
function Mg(n, t, e) {
  const i = n.canvas, s = nl((o) => {
    n.ctx !== null && e(yg(o, n));
  }, n);
  return mg(i, t, s), s;
}
class kg extends kl {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (pg(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[pi])
      return !1;
    const i = e[pi].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = i[o];
      tt(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[pi], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: xg,
      detach: _g,
      resize: Sg
    }[e] || Mg;
    s[e] = r(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), s = i[e];
    if (!s)
      return;
    ({
      attach: bs,
      detach: bs,
      resize: bs
    }[e] || bg)(t, e, s), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return bf(t, e, i, s);
  }
  isAttached(t) {
    const e = Zs(t);
    return !!(e && e.isConnected);
  }
}
function Pg(n) {
  return !pl() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? fg : kg;
}
class Et {
  constructor() {
    D(this, "active", !1);
  }
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  hasValue() {
    return Je(this.x) && Je(this.y);
  }
  getProps(t, e) {
    const i = this.$animations;
    if (!e || !i)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
    }), s;
  }
}
D(Et, "defaults", {}), D(Et, "defaultRoutes");
function Cg(n, t) {
  const e = n.options.ticks, i = Og(n), s = Math.min(e.maxTicksLimit || i, i), o = e.major.enabled ? Ag(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return Tg(t, c, o, r / s), c;
  const d = Eg(o, t, s);
  if (r > 0) {
    let h, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (li(t, c, d, tt(f) ? 0 : a - f, a), h = 0, u = r - 1; h < u; h++)
      li(t, c, d, o[h], o[h + 1]);
    return li(t, c, d, l, tt(f) ? t.length : l + f), c;
  }
  return li(t, c, d), c;
}
function Og(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function Eg(n, t, e) {
  const i = Dg(n), s = t.length / e;
  if (!i)
    return Math.max(s, 1);
  const o = _u(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function Ag(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function Tg(n, t, e, i) {
  let s = 0, o = e[0], r;
  for (i = Math.ceil(i), r = 0; r < n.length; r++)
    r === o && (t.push(n[r]), s++, o = e[s * i]);
}
function li(n, t, e, i, s) {
  const o = W(i, 0), r = Math.min(W(s, n.length), n.length);
  let a = 0, l, c, d;
  for (e = Math.ceil(e), s && (l = s - i, e = l / Math.floor(l / e)), d = o; d < 0; )
    a++, d = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === d && (t.push(n[c]), a++, d = Math.round(o + a * e));
}
function Dg(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const Rg = (n) => n === "left" ? "right" : n === "right" ? "left" : n, Rr = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e;
function Ir(n, t) {
  const e = [], i = n.length / t, s = n.length;
  let o = 0;
  for (; o < s; o += i)
    e.push(n[Math.floor(o)]);
  return e;
}
function Ig(n, t, e) {
  const i = n.ticks.length, s = Math.min(t, i - 1), o = n._startPixel, r = n._endPixel, a = 1e-6;
  let l = n.getPixelForTick(s), c;
  if (!(e && (i === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (n.getPixelForTick(1) - l) / 2 : c = (l - n.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Lg(n, t) {
  at(n, (e) => {
    const i = e.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[i[o]];
      i.splice(0, s);
    }
  });
}
function pn(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function Lr(n, t) {
  if (!n.display)
    return 0;
  const e = vt(n.font, t), i = Pt(n.padding);
  return (lt(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function Fg(n, t) {
  return be(n, {
    scale: t,
    type: "scale"
  });
}
function jg(n, t, e) {
  return be(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function zg(n, t, e) {
  let i = Xs(n);
  return (e && t !== "right" || !e && t === "right") && (i = Rg(i)), i;
}
function Bg(n, t, e, i) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = n, { chartArea: c, scales: d } = l;
  let h = 0, u, f, p;
  const g = r - s, m = a - o;
  if (n.isHorizontal()) {
    if (f = Tt(i, o, a), H(e)) {
      const y = Object.keys(e)[0], _ = e[y];
      p = d[y].getPixelForValue(_) + g - t;
    } else
      e === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = Rr(n, e, t);
    u = a - o;
  } else {
    if (H(e)) {
      const y = Object.keys(e)[0], _ = e[y];
      f = d[y].getPixelForValue(_) - m + t;
    } else
      e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Rr(n, e, t);
    p = Tt(i, r, s), h = e === "left" ? -_t : _t;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: u,
    rotation: h
  };
}
class De extends Et {
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
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
    return t = Ft(t, Number.POSITIVE_INFINITY), e = Ft(e, Number.NEGATIVE_INFINITY), i = Ft(i, Number.POSITIVE_INFINITY), s = Ft(s, Number.NEGATIVE_INFINITY), {
      min: Ft(t, i),
      max: Ft(e, s),
      minDefined: gt(t),
      maxDefined: gt(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(), r;
    if (s && o)
      return {
        min: e,
        max: i
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), s || (e = Math.min(e, r.min)), o || (i = Math.max(i, r.max));
    return e = o && e > i ? i : e, i = s && e > i ? e : i, {
      min: Ft(e, Ft(i, e)),
      max: Ft(i, Ft(e, i))
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
    dt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, i) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Ku(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Ir(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Cg(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, i;
    this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    dt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    dt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    dt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), dt(this.options[t], [
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
    dt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = dt(e.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    dt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    dt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, i = this.ticks.length, s = e.minRotation || 0, o = e.maxRotation;
    let r = s, a, l, c;
    if (!this._isVisible() || !e.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const d = this._getLabelSizes(), h = d.widest.width, u = d.highest.height, f = Ct(this.chart.width - h, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / i : f / (i - 1), h + 6 > a && (a = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - pn(t.grid) - e.padding - Lr(t.title, this.chart.options.font), c = Math.sqrt(h * h + u * u), r = Hi(Math.min(Math.asin(Ct((d.highest.height + 6) / a, -1, 1)), Math.asin(Ct(l / c, -1, 1)) - Math.asin(Ct(u / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    dt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    dt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: i, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Lr(s, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = pn(o) + l) : (t.height = this.maxHeight, t.width = pn(o) + l), i.display && this.ticks.length) {
        const { first: c, last: d, widest: h, highest: u } = this._getLabelSizes(), f = i.padding * 2, p = kt(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
        if (a) {
          const y = i.mirror ? 0 : m * h.width + g * u.height;
          t.height = Math.min(this.maxHeight, t.height + y + f);
        } else {
          const y = i.mirror ? 0 : g * h.width + m * u.height;
          t.width = Math.min(this.maxWidth, t.width + y + f);
        }
        this._calculatePadding(c, d, m, g);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = s * t.width, f = i * e.height) : (u = i * t.height, f = s * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - d + r) * this.width / (this.width - d), 0), this.paddingRight = Math.max((f - h + r) * this.width / (this.width - h), 0);
    } else {
      let d = e.height / 2, h = t.height / 2;
      o === "start" ? (d = 0, h = t.height) : o === "end" && (d = e.height, h = 0), this.paddingTop = d + r, this.paddingBottom = h + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    dt(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, i;
    for (e = 0, i = t.length; e < i; e++)
      tt(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = Ir(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length);
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    const { ctx: i, _longestTextCache: s } = this, o = [], r = [];
    let a = 0, l = 0, c, d, h, u, f, p, g, m, y, _, w;
    for (c = 0; c < e; ++c) {
      if (u = t[c].label, f = this._resolveTickFontOptions(c), i.font = p = f.string, g = s[p] = s[p] || {
        data: {},
        gc: []
      }, m = f.lineHeight, y = _ = 0, !tt(u) && !lt(u))
        y = ki(i, g.data, g.gc, y, u), _ = m;
      else if (lt(u))
        for (d = 0, h = u.length; d < h; ++d)
          w = u[d], !tt(w) && !lt(w) && (y = ki(i, g.data, g.gc, y, w), _ += m);
      o.push(y), r.push(_), a = Math.max(y, a), l = Math.max(_, l);
    }
    Lg(s, e);
    const v = o.indexOf(a), x = r.indexOf(l), k = (C) => ({
      width: o[C] || 0,
      height: r[C] || 0
    });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(v),
      highest: k(x),
      widths: o,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Su(this._alignToPixels ? ve(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return i.$context || (i.$context = jg(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Fg(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = kt(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * i > a * s ? a / i : l / s : l * s < a * i ? l / i : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), h = this.ticks.length + (l ? 1 : 0), u = pn(o), f = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, y = function(V) {
      return ve(i, V, g);
    };
    let _, w, v, x, k, C, P, O, I, R, F, q;
    if (r === "top")
      _ = y(this.bottom), C = this.bottom - u, O = _ - m, R = y(t.top) + m, q = t.bottom;
    else if (r === "bottom")
      _ = y(this.top), R = t.top, q = y(t.bottom) - m, C = _ + m, O = this.top + u;
    else if (r === "left")
      _ = y(this.right), k = this.right - u, P = _ - m, I = y(t.left) + m, F = t.right;
    else if (r === "right")
      _ = y(this.left), I = t.left, F = y(t.right) - m, k = _ + m, P = this.left + u;
    else if (e === "x") {
      if (r === "center")
        _ = y((t.top + t.bottom) / 2 + 0.5);
      else if (H(r)) {
        const V = Object.keys(r)[0], J = r[V];
        _ = y(this.chart.scales[V].getPixelForValue(J));
      }
      R = t.top, q = t.bottom, C = _ + m, O = C + u;
    } else if (e === "y") {
      if (r === "center")
        _ = y((t.left + t.right) / 2);
      else if (H(r)) {
        const V = Object.keys(r)[0], J = r[V];
        _ = y(this.chart.scales[V].getPixelForValue(J));
      }
      k = _ - m, P = k - u, I = t.left, F = t.right;
    }
    const et = W(s.ticks.maxTicksLimit, h), $ = Math.max(1, Math.ceil(h / et));
    for (w = 0; w < h; w += $) {
      const V = this.getContext(w), J = o.setContext(V), bt = a.setContext(V), ht = J.lineWidth, S = J.color, E = bt.dash || [], j = bt.dashOffset, z = J.tickWidth, L = J.tickColor, Y = J.tickBorderDash || [], B = J.tickBorderDashOffset;
      v = Ig(this, w, l), v !== void 0 && (x = ve(i, v, ht), c ? k = P = I = F = x : C = O = R = q = x, f.push({
        tx1: k,
        ty1: C,
        tx2: P,
        ty2: O,
        x1: I,
        y1: R,
        x2: F,
        y2: q,
        width: ht,
        color: S,
        borderDash: E,
        borderDashOffset: j,
        tickWidth: z,
        tickColor: L,
        tickBorderDash: Y,
        tickBorderDashOffset: B
      }));
    }
    return this._ticksLength = h, this._borderValue = _, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: s, ticks: o } = i, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: h } = o, u = pn(i.grid), f = u + d, p = h ? -d : f, g = -kt(this.labelRotation), m = [];
    let y, _, w, v, x, k, C, P, O, I, R, F, q = "middle";
    if (s === "top")
      k = this.bottom - p, C = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      k = this.top + p, C = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const $ = this._getYAxisLabelAlignment(u);
      C = $.textAlign, x = $.x;
    } else if (s === "right") {
      const $ = this._getYAxisLabelAlignment(u);
      C = $.textAlign, x = $.x;
    } else if (e === "x") {
      if (s === "center")
        k = (t.top + t.bottom) / 2 + f;
      else if (H(s)) {
        const $ = Object.keys(s)[0], V = s[$];
        k = this.chart.scales[$].getPixelForValue(V) + f;
      }
      C = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        x = (t.left + t.right) / 2 - f;
      else if (H(s)) {
        const $ = Object.keys(s)[0], V = s[$];
        x = this.chart.scales[$].getPixelForValue(V);
      }
      C = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? q = "top" : l === "end" && (q = "bottom"));
    const et = this._getLabelSizes();
    for (y = 0, _ = a.length; y < _; ++y) {
      w = a[y], v = w.label;
      const $ = o.setContext(this.getContext(y));
      P = this.getPixelForTick(y) + o.labelOffset, O = this._resolveTickFontOptions(y), I = O.lineHeight, R = lt(v) ? v.length : 1;
      const V = R / 2, J = $.color, bt = $.textStrokeColor, ht = $.textStrokeWidth;
      let S = C;
      r ? (x = P, C === "inner" && (y === _ - 1 ? S = this.options.reverse ? "left" : "right" : y === 0 ? S = this.options.reverse ? "right" : "left" : S = "center"), s === "top" ? c === "near" || g !== 0 ? F = -R * I + I / 2 : c === "center" ? F = -et.highest.height / 2 - V * I + I : F = -et.highest.height + I / 2 : c === "near" || g !== 0 ? F = I / 2 : c === "center" ? F = et.highest.height / 2 - V * I : F = et.highest.height - R * I, h && (F *= -1), g !== 0 && !$.showLabelBackdrop && (x += I / 2 * Math.sin(g))) : (k = P, F = (1 - R) * I / 2);
      let E;
      if ($.showLabelBackdrop) {
        const j = Pt($.backdropPadding), z = et.heights[y], L = et.widths[y];
        let Y = F - j.top, B = 0 - j.left;
        switch (q) {
          case "middle":
            Y -= z / 2;
            break;
          case "bottom":
            Y -= z;
            break;
        }
        switch (C) {
          case "center":
            B -= L / 2;
            break;
          case "right":
            B -= L;
            break;
        }
        E = {
          left: B,
          top: Y,
          width: L + j.width,
          height: z + j.height,
          color: $.backdropColor
        };
      }
      m.push({
        label: v,
        font: O,
        textOffset: F,
        options: {
          rotation: g,
          color: J,
          strokeColor: bt,
          strokeWidth: ht,
          textAlign: S,
          textBaseline: q,
          translation: [
            x,
            k
          ],
          backdrop: E
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-kt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, d;
    return e === "left" ? s ? (d = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", d += l / 2) : (c = "right", d += l)) : (d = this.right - a, i === "near" ? c = "right" : i === "center" ? (c = "center", d -= l / 2) : (c = "left", d = this.left)) : e === "right" ? s ? (d = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", d -= l / 2) : (c = "left", d -= l)) : (d = this.left + a, i === "near" ? c = "left" : i === "center" ? (c = "center", d += l / 2) : (c = "right", d = this.right)) : c = "right", {
      textAlign: c,
      x: d
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: i, top: s, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(i, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, d) => {
      !d.width || !d.color || (i.save(), i.lineWidth = d.width, i.strokeStyle = d.color, i.setLineDash(d.borderDash || []), i.lineDashOffset = d.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
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
    const { chart: t, ctx: e, options: { border: i, grid: s } } = this, o = i.setContext(this.getContext()), r = i.display ? o.width : 0;
    if (!r)
      return;
    const a = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, d, h, u;
    this.isHorizontal() ? (c = ve(t, this.left, r) - r / 2, d = ve(t, this.right, a) + a / 2, h = u = l) : (h = ve(t, this.top, r) - r / 2, u = ve(t, this.bottom, a) + a / 2, c = d = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, h), e.lineTo(d, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && Xn(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      Te(i, c, 0, d, l, a);
    }
    s && Kn(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = vt(i.font), r = Pt(i.padding), a = i.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || H(e) ? (l += r.bottom, lt(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: h, rotation: u } = Bg(this, l, e, a);
    Te(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: h,
      rotation: u,
      textAlign: zg(a, e, s),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, i = W(t.grid && t.grid.z, -1), s = W(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== De.prototype.draw ? [
      {
        z: e,
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
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[i] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return vt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ci {
  constructor(t, e, i) {
    this.type = t, this.scope = e, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    $g(e) && (i = this.register(e));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, Wg(t, r, i), this.override && pt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, s = this.scope;
    i in e && delete e[i], s && i in pt[s] && (delete pt[s][i], this.override && delete Ae[i]);
  }
}
function Wg(n, t, e) {
  const i = Fn(/* @__PURE__ */ Object.create(null), [
    e ? pt.get(e) : {},
    pt.get(t),
    n.defaults
  ]);
  pt.set(t, i), n.defaultRoutes && Ng(t, n.defaultRoutes), n.descriptors && pt.describe(t, n.descriptors);
}
function Ng(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), s = i.pop(), o = [
      n
    ].concat(i).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    pt.route(o, s, l, a);
  });
}
function $g(n) {
  return "id" in n && "defaults" in n;
}
class Vg {
  constructor() {
    this.controllers = new ci(Vt, "datasets", !0), this.elements = new ci(Et, "elements"), this.plugins = new ci(Object, "plugins"), this.scales = new ci(De, "scales"), this._typedRegistries = [
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
  _each(t, e, i) {
    [
      ...e
    ].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : at(s, (r) => {
        const a = i || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, i) {
    const s = Ys(t);
    dt(i["before" + s], [], i), e[t](i), dt(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var Yt = new Vg();
class Hg {
  constructor() {
    this._init = [];
  }
  notify(t, e, i, s) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), r = this._notify(o, t, e, i);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, e, i, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin, a = r[i], l = [
        e,
        s,
        o.options
      ];
      if (dt(a, l, r) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    tt(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, s = W(i.options && i.options.plugins, {}), o = Yg(i);
    return s === !1 && !e ? [] : Xg(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
  }
}
function Yg(n) {
  const t = {}, e = [], i = Object.keys(Yt.plugins.items);
  for (let o = 0; o < i.length; o++)
    e.push(Yt.getPlugin(i[o]));
  const s = n.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function Ug(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function Xg(n, { plugins: t, localIds: e }, i, s) {
  const o = [], r = n.getContext();
  for (const a of t) {
    const l = a.id, c = Ug(i[l], s);
    c !== null && o.push({
      plugin: a,
      options: Kg(n.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function Kg(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t), r = n.getOptionScopes(i, o);
  return e && t.defaults && r.push(t.defaults), n.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function ks(n, t) {
  const e = pt.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function qg(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Gg(n, t) {
  return n === t ? "_index_" : "_value_";
}
function Jg(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function Ai(n, t) {
  if (n === "x" || n === "y" || n === "r" || (n = t.axis || Jg(t.position) || n.length > 1 && Ai(n[0].toLowerCase(), t), n))
    return n;
  throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function Zg(n, t) {
  const e = Ae[n.type] || {
    scales: {}
  }, i = t.scales || {}, s = ks(n.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((r) => {
    const a = i[r];
    if (!H(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Ai(r, a), c = Gg(l, s), d = e.scales || {};
    o[r] = Mn(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), n.data.datasets.forEach((r) => {
    const a = r.type || n.type, l = r.indexAxis || ks(a, t), d = (Ae[a] || {}).scales || {};
    Object.keys(d).forEach((h) => {
      const u = qg(h, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Mn(o[f], [
        {
          axis: u
        },
        i[f],
        d[h]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Mn(a, [
      pt.scales[a.type],
      pt.scale
    ]);
  }), o;
}
function Ol(n) {
  const t = n.options || (n.options = {});
  t.plugins = W(t.plugins, {}), t.scales = Zg(n, t);
}
function El(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function Qg(n) {
  return n = n || {}, n.data = El(n.data), Ol(n), n;
}
const Fr = /* @__PURE__ */ new Map(), Al = /* @__PURE__ */ new Set();
function di(n, t) {
  let e = Fr.get(n);
  return e || (e = t(), Fr.set(n, e), Al.add(e)), e;
}
const mn = (n, t, e) => {
  const i = ue(t, e);
  i !== void 0 && n.add(i);
};
class tp {
  constructor(t) {
    this._config = Qg(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = El(t);
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
    this.clearCache(), Ol(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return di(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return di(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return di(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, i = this.type;
    return di(`${i}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || e) && (s = /* @__PURE__ */ new Map(), i.set(t, s)), s;
  }
  getOptionScopes(t, e, i) {
    const { options: s, type: o } = this, r = this._cachedScopes(t, i), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((d) => {
      t && (l.add(t), d.forEach((h) => mn(l, t, h))), d.forEach((h) => mn(l, s, h)), d.forEach((h) => mn(l, Ae[o] || {}, h)), d.forEach((h) => mn(l, pt, h)), d.forEach((h) => mn(l, Ms, h));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Al.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Ae[e] || {},
      pt.datasets[e] || {},
      {
        type: e
      },
      pt,
      Ms
    ];
  }
  resolveNamedOptions(t, e, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = jr(this._resolverCache, t, s);
    let l = r;
    if (np(r, e)) {
      o.$shared = !1, i = fe(i) ? i() : i;
      const c = this.createResolver(t, i, a);
      l = Qe(r, i, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, i = [
    ""
  ], s) {
    const { resolver: o } = jr(this._resolverCache, t, i);
    return H(e) ? Qe(o, e, void 0, s) : o;
  }
}
function jr(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return o || (o = {
    resolver: qs(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const ep = (n) => H(n) && Object.getOwnPropertyNames(n).reduce((t, e) => t || fe(n[e]), !1);
function np(n, t) {
  const { isScriptable: e, isIndexable: i } = cl(n);
  for (const s of t) {
    const o = e(s), r = i(s), a = (r || o) && n[s];
    if (o && (fe(a) || ep(a)) || r && lt(a))
      return !0;
  }
  return !1;
}
var ip = "4.2.0";
const sp = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function zr(n, t) {
  return n === "top" || n === "bottom" || sp.indexOf(n) === -1 && t === "x";
}
function Br(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function Wr(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), dt(e && e.onComplete, [
    n
  ], t);
}
function op(n) {
  const t = n.chart, e = t.options.animation;
  dt(e && e.onProgress, [
    n
  ], t);
}
function Tl(n) {
  return pl() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const mi = {}, Nr = (n) => {
  const t = Tl(n);
  return Object.values(mi).filter((e) => e.canvas === t).pop();
};
function rp(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = r);
    }
  }
}
function ap(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
function lp(n) {
  const { xScale: t, yScale: e } = n;
  if (t && e)
    return {
      left: t.left,
      right: t.right,
      top: e.top,
      bottom: e.bottom
    };
}
class zt {
  static register(...t) {
    Yt.add(...t), $r();
  }
  static unregister(...t) {
    Yt.remove(...t), $r();
  }
  constructor(t, e) {
    const i = this.config = new tp(e), s = Tl(t), o = Nr(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || Pg(s))(), this.platform.updateConfig(i);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = uu(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Hg(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Cu((h) => this.update(h), r.resizeDelay || 0), this._dataChanges = [], mi[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Gt.listen(this, "complete", Wr), Gt.listen(this, "progress", op), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: o } = this;
    return tt(t) ? e && o ? o : s ? i / s : null : t;
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
    return Yt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ur(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return cr(this.canvas, this.ctx), this;
  }
  stop() {
    return Gt.stop(this), this;
  }
  resize(t, e) {
    Gt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, e, o), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ur(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), dt(i.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    at(e, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Ai(r, a), c = l === "r", d = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : d ? "bottom" : "left",
        dtype: c ? "radialLinear" : d ? "category" : "linear"
      };
    }))), at(o, (r) => {
      const a = r.options, l = a.id, c = Ai(l, a), d = W(a.type, r.dtype);
      (a.position === void 0 || zr(a.position, c) !== zr(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let h = null;
      if (l in i && i[l].type === d)
        h = i[l];
      else {
        const u = Yt.getScale(d);
        h = new u({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), i[h.id] = h;
      }
      h.init(a, t);
    }), at(s, (r, a) => {
      r || delete i[a];
    }), at(i, (r) => {
      Dt.configure(this, r, r.options), Dt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > e) {
      for (let s = e; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(Br("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((i, s) => {
      e.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      let r = this.getDatasetMeta(i);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = a, r.indexAxis = o.indexAxis || ks(a, this.options), r.order = o.order || 0, r.index = i, r.label = "" + o.label, r.visible = this.isDatasetVisible(i), r.controller)
        r.controller.updateIndex(i), r.controller.linkScales();
      else {
        const l = Yt.getController(a), { datasetElementType: c, dataElementType: d } = pt.datasets[a];
        Object.assign(l, {
          dataElementType: Yt.getElement(d),
          datasetElementType: c && Yt.getElement(c)
        }), r.controller = new l(this, i), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    at(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, d = this.data.datasets.length; c < d; c++) {
      const { controller: h } = this.getDatasetMeta(c), u = !s && o.indexOf(h) === -1;
      h.buildOrUpdateElements(u), r = Math.max(+h.getMaxOverflow(), r);
    }
    r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), s || at(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Br("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    at(this.scales, (t) => {
      Dt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!tr(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const r = i === "_removeElements" ? -o : o;
      rp(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = i(0);
    for (let o = 1; o < e; o++)
      if (!tr(s, i(o)))
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
    Dt.update(this, this.width, this.height, t);
    const e = this.chartArea, i = e.width <= 0 || e.height <= 0;
    this._layers = [], at(this.boxes, (s) => {
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
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, fe(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t), s = {
      meta: i,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Gt.has(this) ? this.attached && !Gt.running(this) && Gt.start(this) : (this.draw(), Wr({
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
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, i = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const r = e[s];
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
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, i = t._clip, s = !i.disabled, o = lp(t) || this.chartArea, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (s && Xn(e, {
      left: i.left === !1 ? 0 : o.left - i.left,
      right: i.right === !1 ? this.width : o.right + i.right,
      top: i.top === !1 ? 0 : o.top - i.top,
      bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
    }), t.controller.draw(), s && Kn(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return Bn(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = og.modes[e];
    return typeof o == "function" ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], i = this._metasets;
    let s = i.filter((o) => o && o._dataset === e).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, i.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = be(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const i = this.getDatasetMeta(t);
    i.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, i) {
    const s = i ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, s);
    St(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(o, {
      visible: i
    }), this.update((a) => a.datasetIndex === t ? s : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), Gt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), cr(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete mi[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, i = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, s = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    at(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, i = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      s("attach", a), this.attached = !0, this.resize(), i("resize", o), i("detach", r);
    };
    r = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), i("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    at(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, at(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, i) {
    const s = i ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], i = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !wi(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover, o = (l, c) => l.filter((d) => !c.some((h) => d.datasetIndex === h.datasetIndex && d.index === h.index)), r = o(e, t), a = i ? t : o(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, e) {
    const i = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, s) === !1)
      return;
    const o = this._handleEvent(t, e, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (o || i.changed) && this.render(), this;
  }
  _handleEvent(t, e, i) {
    const { _active: s = [], options: o } = this, r = e, a = this._getActiveElements(t, s, i, r), l = yu(t), c = ap(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, dt(o.onHover, [
      t,
      a,
      this
    ], this), l && dt(o.onClick, [
      t,
      a,
      this
    ], this));
    const d = !wi(a, s);
    return (d || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = c, d;
  }
  _getActiveElements(t, e, i, s) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
D(zt, "defaults", pt), D(zt, "instances", mi), D(zt, "overrides", Ae), D(zt, "registry", Yt), D(zt, "version", ip), D(zt, "getChart", Nr);
function $r() {
  return at(zt.instances, (n) => n._plugins.invalidate());
}
function cp(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  n.beginPath(), n.arc(o, r, a, i - c, e + c), l > s ? (c = s / l, n.arc(o, r, l, e + c, i - c, !0)) : n.arc(o, r, s, e + _t, i - _t), n.closePath(), n.clip();
}
function dp(n) {
  return Ks(n, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function hp(n, t, e, i) {
  const s = dp(n.options.borderRadius), o = (e - t) / 2, r = Math.min(o, i * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * i / 2;
    return Ct(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: Ct(s.innerStart, 0, r),
    innerEnd: Ct(s.innerEnd, 0, r)
  };
}
function Ve(n, t, e, i) {
  return {
    x: e + n * Math.cos(t),
    y: i + n * Math.sin(t)
  };
}
function Ti(n, t, e, i, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t, h = Math.max(t.outerRadius + i + e - c, 0), u = d > 0 ? d + i + e + c : 0;
  let f = 0;
  const p = s - l;
  if (i) {
    const $ = d > 0 ? d - i : 0, V = h > 0 ? h - i : 0, J = ($ + V) / 2, bt = J !== 0 ? p * J / (J + i) : p;
    f = (p - bt) / 2;
  }
  const g = Math.max(1e-3, p * h - e / it) / h, m = (p - g) / 2, y = l + m + f, _ = s - m - f, { outerStart: w, outerEnd: v, innerStart: x, innerEnd: k } = hp(t, u, h, _ - y), C = h - w, P = h - v, O = y + w / C, I = _ - v / P, R = u + x, F = u + k, q = y + x / R, et = _ - k / F;
  if (n.beginPath(), o) {
    const $ = (O + I) / 2;
    if (n.arc(r, a, h, O, $), n.arc(r, a, h, $, I), v > 0) {
      const ht = Ve(P, I, r, a);
      n.arc(ht.x, ht.y, v, I, _ + _t);
    }
    const V = Ve(F, _, r, a);
    if (n.lineTo(V.x, V.y), k > 0) {
      const ht = Ve(F, et, r, a);
      n.arc(ht.x, ht.y, k, _ + _t, et + Math.PI);
    }
    const J = (_ - k / u + (y + x / u)) / 2;
    if (n.arc(r, a, u, _ - k / u, J, !0), n.arc(r, a, u, J, y + x / u, !0), x > 0) {
      const ht = Ve(R, q, r, a);
      n.arc(ht.x, ht.y, x, q + Math.PI, y - _t);
    }
    const bt = Ve(C, y, r, a);
    if (n.lineTo(bt.x, bt.y), w > 0) {
      const ht = Ve(C, O, r, a);
      n.arc(ht.x, ht.y, w, y - _t, O);
    }
  } else {
    n.moveTo(r, a);
    const $ = Math.cos(O) * h + r, V = Math.sin(O) * h + a;
    n.lineTo($, V);
    const J = Math.cos(I) * h + r, bt = Math.sin(I) * h + a;
    n.lineTo(J, bt);
  }
  n.closePath();
}
function up(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Ti(n, t, e, i, l, s);
    for (let c = 0; c < o; ++c)
      n.fill();
    isNaN(a) || (l = r + (a % ut || ut));
  }
  return Ti(n, t, e, i, l, s), n.fill(), l;
}
function fp(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, h = l.borderAlign === "inner";
  if (!c)
    return;
  h ? (n.lineWidth = c * 2, n.lineJoin = d || "round") : (n.lineWidth = c, n.lineJoin = d || "bevel");
  let u = t.endAngle;
  if (o) {
    Ti(n, t, e, i, u, s);
    for (let f = 0; f < o; ++f)
      n.stroke();
    isNaN(a) || (u = r + (a % ut || ut));
  }
  h && cp(n, t, u), o || (Ti(n, t, e, i, u, s), n.stroke());
}
class bi extends Et {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: r } = Za(s, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: h } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), u = this.options.spacing / 2, p = W(h, l - a) >= ut || zn(o, a, l), g = Qt(r, c + u, d + u);
    return p && g;
  }
  getCenterPoint(t) {
    const { x: e, y: i, startAngle: s, endAngle: o, innerRadius: r, outerRadius: a } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], t), { offset: l, spacing: c } = this.options, d = (s + o) / 2, h = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(d) * h,
      y: i + Math.sin(d) * h
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > ut ? Math.floor(i / ut) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(it, i || 0)), c = s * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, up(t, this, c, o, r), fp(t, this, c, o, r), t.restore();
  }
}
D(bi, "id", "arc"), D(bi, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), D(bi, "defaultRoutes", {
  backgroundColor: "backgroundColor"
});
function Dl(n, t, e = t) {
  n.lineCap = W(e.borderCapStyle, t.borderCapStyle), n.setLineDash(W(e.borderDash, t.borderDash)), n.lineDashOffset = W(e.borderDashOffset, t.borderDashOffset), n.lineJoin = W(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = W(e.borderWidth, t.borderWidth), n.strokeStyle = W(e.borderColor, t.borderColor);
}
function gp(n, t, e) {
  n.lineTo(e.x, e.y);
}
function pp(n) {
  return n.stepped ? Bu : n.tension || n.cubicInterpolationMode === "monotone" ? Wu : gp;
}
function Rl(n, t, e = {}) {
  const i = n.length, { start: s = 0, end: o = i - 1 } = e, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), d = s < r && o < r || s > a && o > a;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? i + c - l : c - l
  };
}
function mp(n, t, e, i) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Rl(s, e, i), d = pp(o);
  let { move: h = !0, reverse: u } = i || {}, f, p, g;
  for (f = 0; f <= c; ++f)
    p = s[(a + (u ? c - f : f)) % r], !p.skip && (h ? (n.moveTo(p.x, p.y), h = !1) : d(n, g, p, u, o.stepped), g = p);
  return l && (p = s[(a + (u ? c : 0)) % r], d(n, g, p, u, o.stepped)), !!l;
}
function bp(n, t, e, i) {
  const s = t.points, { count: o, start: r, ilen: a } = Rl(s, e, i), { move: l = !0, reverse: c } = i || {};
  let d = 0, h = 0, u, f, p, g, m, y;
  const _ = (v) => (r + (c ? a - v : v)) % o, w = () => {
    g !== m && (n.lineTo(d, m), n.lineTo(d, g), n.lineTo(d, y));
  };
  for (l && (f = s[_(0)], n.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = s[_(u)], f.skip)
      continue;
    const v = f.x, x = f.y, k = v | 0;
    k === p ? (x < g ? g = x : x > m && (m = x), d = (h * d + v) / ++h) : (w(), n.lineTo(v, x), p = k, h = 0, g = m = x), y = x;
  }
  w();
}
function Ps(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? bp : mp;
}
function yp(n) {
  return n.stepped ? xf : n.tension || n.cubicInterpolationMode === "monotone" ? _f : Pe;
}
function xp(n, t, e, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, i) && s.closePath()), Dl(n, t.options), n.stroke(s);
}
function _p(n, t, e, i) {
  const { segments: s, options: o } = t, r = Ps(t);
  for (const a of s)
    Dl(n, o, a.style), n.beginPath(), r(n, t, a, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const vp = typeof Path2D == "function";
function wp(n, t, e, i) {
  vp && !t.options.segment ? xp(n, t, e, i) : _p(n, t, e, i);
}
class ee extends Et {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      hf(this._points, i, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Pf(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this.options, s = t[e], o = this.points, r = _l(this, {
      property: e,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = yp(i);
    let c, d;
    for (c = 0, d = r.length; c < d; ++c) {
      const { start: h, end: u } = r[c], f = o[h], p = o[u];
      if (f === p) {
        a.push(f);
        continue;
      }
      const g = Math.abs((s - f[e]) / (p[e] - f[e])), m = l(f, p, g, i.stepped);
      m[e] = t[e], a.push(m);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, i) {
    return Ps(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments, o = Ps(this);
    let r = this._loop;
    e = e || 0, i = i || this.points.length - e;
    for (const a of s)
      r &= o(t, this, a, {
        start: e,
        end: e + i - 1
      });
    return !!r;
  }
  draw(t, e, i, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), wp(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
D(ee, "id", "line"), D(ee, "defaults", {
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
}), D(ee, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), D(ee, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Vr(n, t, e, i) {
  const s = n.options, { [e]: o } = n.getProps([
    e
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Rn extends Et {
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.options, { x: o, y: r } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(s.hitRadius + s.radius, 2);
  }
  inXRange(t, e) {
    return Vr(this, t, "x", e);
  }
  inYRange(t, e) {
    return Vr(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const i = e && t.borderWidth || 0;
    return (e + i) * 2;
  }
  draw(t, e) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !Bn(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Pi(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
D(Rn, "id", "point"), D(Rn, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), D(Rn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Il(n, t) {
  const { x: e, y: i, base: s, width: o, height: r } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, d, h;
  return n.horizontal ? (h = r / 2, a = Math.min(e, s), l = Math.max(e, s), c = i - h, d = i + h) : (h = o / 2, a = e - h, l = e + h, c = Math.min(i, s), d = Math.max(i, s)), {
    left: a,
    top: c,
    right: l,
    bottom: d
  };
}
function le(n, t, e, i) {
  return n ? 0 : Ct(t, e, i);
}
function Sp(n, t, e) {
  const i = n.options.borderWidth, s = n.borderSkipped, o = ll(i);
  return {
    t: le(s.top, o.top, 0, e),
    r: le(s.right, o.right, 0, t),
    b: le(s.bottom, o.bottom, 0, e),
    l: le(s.left, o.left, 0, t)
  };
}
function Mp(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), s = n.options.borderRadius, o = de(s), r = Math.min(t, e), a = n.borderSkipped, l = i || H(s);
  return {
    topLeft: le(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: le(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: le(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: le(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function kp(n) {
  const t = Il(n), e = t.right - t.left, i = t.bottom - t.top, s = Sp(n, e / 2, i / 2), o = Mp(n, e / 2, i / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: i,
      radius: o
    },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
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
function ys(n, t, e, i) {
  const s = t === null, o = e === null, a = n && !(s && o) && Il(n, i);
  return a && (s || Qt(t, a.left, a.right)) && (o || Qt(e, a.top, a.bottom));
}
function Pp(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Cp(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function xs(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0, s = n.y !== e.y ? -t : 0, o = (n.x + n.w !== e.x + e.w ? t : 0) - i, r = (n.y + n.h !== e.y + e.h ? t : 0) - s;
  return {
    x: n.x + i,
    y: n.y + s,
    w: n.w + o,
    h: n.h + r,
    radius: n.radius
  };
}
class yi extends Et {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: r } = kp(this), a = Pp(r.radius) ? Ze : Cp;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, xs(r, e, o)), t.clip(), a(t, xs(o, -e, r)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, xs(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return ys(this, t, e, i);
  }
  inXRange(t, e) {
    return ys(this, t, null, e);
  }
  inYRange(t, e) {
    return ys(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: i, base: s, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + s) / 2 : e,
      y: o ? i : (i + s) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
D(yi, "id", "bar"), D(yi, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), D(yi, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
Object.freeze({
  __proto__: null,
  ArcElement: bi,
  LineElement: ee,
  PointElement: Rn,
  BarElement: yi
});
const Cs = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
], Hr = Cs.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function Ll(n) {
  return Cs[n % Cs.length];
}
function Fl(n) {
  return Hr[n % Hr.length];
}
function Op(n, t) {
  return n.borderColor = Ll(t), n.backgroundColor = Fl(t), ++t;
}
function Ep(n, t) {
  return n.backgroundColor = n.data.map(() => Ll(t++)), t;
}
function Ap(n, t) {
  return n.backgroundColor = n.data.map(() => Fl(t++)), t;
}
function Tp(n) {
  let t = 0;
  return (e, i) => {
    const s = n.getDatasetMeta(i).controller;
    s instanceof ae ? t = Ep(e, t) : s instanceof Ke ? t = Ap(e, t) : s && (t = Op(e, t));
  };
}
function Yr(n) {
  let t;
  for (t in n)
    if (n[t].borderColor || n[t].backgroundColor)
      return !0;
  return !1;
}
function Dp(n) {
  return n && (n.borderColor || n.backgroundColor);
}
var Rp = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(n, t, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: i }, options: s } = n.config, { elements: o } = s;
    if (!e.forceOverride && (Yr(i) || Dp(s) || o && Yr(o)))
      return;
    const r = Tp(n);
    i.forEach(r);
  }
};
function Ip(n, t, e, i, s) {
  const o = s.samples || i;
  if (o >= e)
    return n.slice(t, t + e);
  const r = [], a = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let d = t, h, u, f, p, g;
  for (r[l++] = n[d], h = 0; h < o - 2; h++) {
    let m = 0, y = 0, _;
    const w = Math.floor((h + 1) * a) + 1 + t, v = Math.min(Math.floor((h + 2) * a) + 1, e) + t, x = v - w;
    for (_ = w; _ < v; _++)
      m += n[_].x, y += n[_].y;
    m /= x, y /= x;
    const k = Math.floor(h * a) + 1 + t, C = Math.min(Math.floor((h + 1) * a) + 1, e) + t, { x: P, y: O } = n[d];
    for (f = p = -1, _ = k; _ < C; _++)
      p = 0.5 * Math.abs((P - m) * (n[_].y - O) - (P - n[_].x) * (y - O)), p > f && (f = p, u = n[_], g = _);
    r[l++] = u, d = g;
  }
  return r[l++] = n[c], r;
}
function Lp(n, t, e, i) {
  let s = 0, o = 0, r, a, l, c, d, h, u, f, p, g;
  const m = [], y = t + e - 1, _ = n[t].x, v = n[y].x - _;
  for (r = t; r < t + e; ++r) {
    a = n[r], l = (a.x - _) / v * i, c = a.y;
    const x = l | 0;
    if (x === d)
      c < p ? (p = c, h = r) : c > g && (g = c, u = r), s = (o * s + a.x) / ++o;
    else {
      const k = r - 1;
      if (!tt(h) && !tt(u)) {
        const C = Math.min(h, u), P = Math.max(h, u);
        C !== f && C !== k && m.push({
          ...n[C],
          x: s
        }), P !== f && P !== k && m.push({
          ...n[P],
          x: s
        });
      }
      r > 0 && k !== f && m.push(n[k]), m.push(a), d = x, o = 0, p = g = c, h = u = f = r;
    }
  }
  return m;
}
function jl(n) {
  if (n._decimated) {
    const t = n._data;
    delete n._decimated, delete n._data, Object.defineProperty(n, "data", {
      value: t
    });
  }
}
function Ur(n) {
  n.data.datasets.forEach((t) => {
    jl(t);
  });
}
function Fp(n, t) {
  const e = t.length;
  let i = 0, s;
  const { iScale: o } = n, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (i = Ct(te(t, o.axis, r).lo, 0, e - 1)), c ? s = Ct(te(t, o.axis, a).hi + 1, i, e) - i : s = e - i, {
    start: i,
    count: s
  };
}
var jp = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      Ur(n);
      return;
    }
    const i = n.width;
    n.data.datasets.forEach((s, o) => {
      const { _data: r, indexAxis: a } = s, l = n.getDatasetMeta(o), c = r || s.data;
      if (yn([
        a,
        n.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const d = n.scales[l.xAxisID];
      if (d.type !== "linear" && d.type !== "time" || n.options.parsing)
        return;
      let { start: h, count: u } = Fp(l, c);
      const f = e.threshold || 4 * i;
      if (u <= f) {
        jl(s);
        return;
      }
      tt(r) && (s._data = c, delete s.data, Object.defineProperty(s, "data", {
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
      switch (e.algorithm) {
        case "lttb":
          p = Ip(c, h, u, i, e);
          break;
        case "min-max":
          p = Lp(c, h, u, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = p;
    });
  },
  destroy(n) {
    Ur(n);
  }
};
function zp(n, t, e) {
  const i = n.segments, s = n.points, o = t.points, r = [];
  for (const a of i) {
    let { start: l, end: c } = a;
    c = eo(l, c, s);
    const d = Os(e, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const h = _l(t, d);
    for (const u of h) {
      const f = Os(e, o[u.start], o[u.end], u.loop), p = xl(a, s, f);
      for (const g of p)
        r.push({
          source: g,
          target: u,
          start: {
            [e]: Xr(d, f, "start", Math.max)
          },
          end: {
            [e]: Xr(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Os(n, t, e, i) {
  if (i)
    return;
  let s = t[n], o = e[n];
  return n === "angle" && (s = jt(s), o = jt(o)), {
    property: n,
    start: s,
    end: o
  };
}
function Bp(n, t) {
  const { x: e = null, y: i = null } = n || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = eo(r, a, s);
    const l = s[r], c = s[a];
    i !== null ? (o.push({
      x: l.x,
      y: i
    }), o.push({
      x: c.x,
      y: i
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function eo(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function Xr(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function zl(n, t) {
  let e = [], i = !1;
  return lt(n) ? (i = !0, e = n) : e = Bp(n, t), e.length ? new ee({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function Kr(n) {
  return n && n.fill !== !1;
}
function Wp(n, t, e) {
  let s = n[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!gt(s))
      return s;
    if (r = n[s], !r)
      return !1;
    if (r.visible)
      return s;
    o.push(s), s = r.fill;
  }
  return !1;
}
function Np(n, t, e) {
  const i = Yp(n);
  if (H(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return gt(s) && Math.floor(s) === s ? $p(i[0], t, s, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function $p(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function Vp(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : H(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Hp(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : H(n) ? i = n.value : i = t.getBaseValue(), i;
}
function Yp(n) {
  const t = n.options, e = t.fill;
  let i = W(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function Up(n) {
  const { scale: t, index: e, line: i } = n, s = [], o = i.segments, r = i.points, a = Xp(t, e);
  a.push(zl({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      Kp(s, r[d], a);
  }
  return new ee({
    points: s,
    options: {}
  });
}
function Xp(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function Kp(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], { first: r, last: a, point: l } = qp(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        i.unshift(l);
      else if (n.push(l), !a)
        break;
    }
  }
  n.push(...i);
}
function qp(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const s = i[e], o = n.segments, r = n.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], h = r[d.start][e], u = r[d.end][e];
    if (Qt(s, h, u)) {
      a = s === h, l = s === u;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: i
  };
}
class Bl {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: ut
    }, t.arc(s, o, r, e.end, e.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: e, y: i, radius: s } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * s,
      y: i + Math.sin(o) * s,
      angle: o
    };
  }
}
function Gp(n) {
  const { chart: t, fill: e, line: i } = n;
  if (gt(e))
    return Jp(t, e);
  if (e === "stack")
    return Up(n);
  if (e === "shape")
    return !0;
  const s = Zp(n);
  return s instanceof Bl ? s : zl(s, i);
}
function Jp(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function Zp(n) {
  return (n.scale || {}).getPointPositionForValue ? tm(n) : Qp(n);
}
function Qp(n) {
  const { scale: t = {}, fill: e } = n, i = Vp(e, t);
  if (gt(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function tm(n) {
  const { scale: t, fill: e } = n, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, r = Hp(e, t, o), a = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Bl({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < s; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function _s(n, t, e) {
  const i = Gp(t), { line: s, scale: o, axis: r } = t, a = s.options, l = a.fill, c = a.backgroundColor, { above: d = c, below: h = c } = l || {};
  i && s.points.length && (Xn(n, e), em(n, {
    line: s,
    target: i,
    above: d,
    below: h,
    area: e,
    scale: o,
    axis: r
  }), Kn(n));
}
function em(n, t) {
  const { line: e, target: i, above: s, below: o, area: r, scale: a } = t, l = e._loop ? "angle" : t.axis;
  n.save(), l === "x" && o !== s && (qr(n, i, r.top), Gr(n, {
    line: e,
    target: i,
    color: s,
    scale: a,
    property: l
  }), n.restore(), n.save(), qr(n, i, r.bottom)), Gr(n, {
    line: e,
    target: i,
    color: o,
    scale: a,
    property: l
  }), n.restore();
}
function qr(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, r = !1;
  n.beginPath();
  for (const a of i) {
    const { start: l, end: c } = a, d = s[l], h = s[eo(l, c, s)];
    o ? (n.moveTo(d.x, d.y), o = !1) : (n.lineTo(d.x, e), n.lineTo(d.x, d.y)), r = !!t.pathSegment(n, a, {
      move: r
    }), r ? n.closePath() : n.lineTo(h.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function Gr(n, t) {
  const { line: e, target: i, property: s, color: o, scale: r } = t, a = zp(e, i, s);
  for (const { source: l, target: c, start: d, end: h } of a) {
    const { style: { backgroundColor: u = o } = {} } = l, f = i !== !0;
    n.save(), n.fillStyle = u, nm(n, r, f && Os(s, d, h)), n.beginPath();
    const p = !!e.pathSegment(n, l);
    let g;
    if (f) {
      p ? n.closePath() : Jr(n, i, h, s);
      const m = !!i.pathSegment(n, c, {
        move: p,
        reverse: !0
      });
      g = p && m, g || Jr(n, i, d, s);
    }
    n.closePath(), n.fill(g ? "evenodd" : "nonzero"), n.restore();
  }
}
function nm(n, t, e) {
  const { top: i, bottom: s } = t.chart.chartArea, { property: o, start: r, end: a } = e || {};
  o === "x" && (n.beginPath(), n.rect(r, i, a - r, s - i), n.clip());
}
function Jr(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var Wl = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, s = [];
    let o, r, a, l;
    for (r = 0; r < i; ++r)
      o = n.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof ee && (l = {
        visible: n.isDatasetVisible(r),
        index: r,
        fill: Np(a, r, i),
        chart: n,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, s.push(l);
    for (r = 0; r < i; ++r)
      l = s[r], !(!l || l.fill === !1) && (l.fill = Wp(s, r, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", s = n.getSortedVisibleDatasetMetas(), o = n.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      !a || (a.line.updateControlPoints(o, a.axis), i && a.fill && _s(n.ctx, a, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      Kr(o) && _s(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !Kr(i) || e.drawTime !== "beforeDatasetDraw" || _s(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Zr = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, im = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class Qr extends Et {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, i) {
    this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = dt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))), t.sort && (e = e.sort((i, s) => t.sort(i, s, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, s = vt(i.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Zr(i, o);
    let c, d;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, d = this._fitRows(r, o, a, l) + 10) : (d = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(d, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], d = s + a;
    let h = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -d;
    return this.legendItems.forEach((p, g) => {
      const m = i + e / 2 + o.measureText(p.text).width;
      (g === 0 || c[c.length - 1] + m + 2 * a > r) && (h += d, c[c.length - (g > 0 ? 0 : 1)] = 0, f += d, u++), l[g] = {
        left: 0,
        top: f,
        row: u,
        width: m,
        height: s
      }, c[c.length - 1] += m + a;
    }), h;
  }
  _fitCols(t, e, i, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = r - t;
    let h = a, u = 0, f = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, y) => {
      const { itemWidth: _, itemHeight: w } = sm(i, e, o, m, s);
      y > 0 && f + w + 2 * a > d && (h += u + a, c.push({
        width: u,
        height: f
      }), p += u + a, g++, u = f = 0), l[y] = {
        left: p,
        top: f,
        col: g,
        width: _,
        height: w
      }, u = Math.max(u, _), f += w + a;
    }), h += u, c.push({
      width: u,
      height: f
    }), h;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, r = Xe(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = Tt(i, this.left + s, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = Tt(i, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = Tt(i, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = Tt(i, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Xn(t, this), this._draw(), Kn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: o, labels: r } = t, a = pt.color, l = Xe(t.rtl, this.left, this.width), c = vt(r.font), { padding: d } = r, h = c.size, u = h / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = Zr(r, h), y = function(k, C, P) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      s.save();
      const O = W(P.lineWidth, 1);
      if (s.fillStyle = W(P.fillStyle, a), s.lineCap = W(P.lineCap, "butt"), s.lineDashOffset = W(P.lineDashOffset, 0), s.lineJoin = W(P.lineJoin, "miter"), s.lineWidth = O, s.strokeStyle = W(P.strokeStyle, a), s.setLineDash(W(P.lineDash, [])), r.usePointStyle) {
        const I = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: P.pointStyle,
          rotation: P.rotation,
          borderWidth: O
        }, R = l.xPlus(k, p / 2), F = C + u;
        al(s, I, R, F, r.pointStyleWidth && p);
      } else {
        const I = C + Math.max((h - g) / 2, 0), R = l.leftForLtr(k, p), F = de(P.borderRadius);
        s.beginPath(), Object.values(F).some((q) => q !== 0) ? Ze(s, {
          x: R,
          y: I,
          w: p,
          h: g,
          radius: F
        }) : s.rect(R, I, p, g), s.fill(), O !== 0 && s.stroke();
      }
      s.restore();
    }, _ = function(k, C, P) {
      Te(s, P.text, k, C + m / 2, c, {
        strikethrough: P.hidden,
        textAlign: l.textAlign(P.textAlign)
      });
    }, w = this.isHorizontal(), v = this._computeTitleHeight();
    w ? f = {
      x: Tt(o, this.left + d, this.right - i[0]),
      y: this.top + d + v,
      line: 0
    } : f = {
      x: this.left + d,
      y: Tt(o, this.top + v + d, this.bottom - e[0].height),
      line: 0
    }, ml(this.ctx, t.textDirection);
    const x = m + d;
    this.legendItems.forEach((k, C) => {
      s.strokeStyle = k.fontColor, s.fillStyle = k.fontColor;
      const P = s.measureText(k.text).width, O = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), I = p + u + P;
      let R = f.x, F = f.y;
      l.setWidth(this.width), w ? C > 0 && R + I + d > this.right && (F = f.y += x, f.line++, R = f.x = Tt(o, this.left + d, this.right - i[f.line])) : C > 0 && F + x > this.bottom && (R = f.x = R + e[f.line].width + d, f.line++, F = f.y = Tt(o, this.top + v + d, this.bottom - e[f.line].height));
      const q = l.x(R);
      if (y(q, F, k), R = Ou(O, R + p + u, w ? R + I : this.right, t.rtl), _(l.x(R), F, k), w)
        f.x += I + d;
      else if (typeof k.text != "string") {
        const et = c.lineHeight;
        f.y += Nl(k, et);
      } else
        f.y += x;
    }), bl(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = vt(e.font), s = Pt(e.padding);
    if (!e.display)
      return;
    const o = Xe(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = i.size / 2, c = s.top + l;
    let d, h = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), d = this.top + c, h = Tt(t.align, h, this.right - u);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      d = c + Tt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = Tt(a, h, h + u);
    r.textAlign = o.textAlign(Xs(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = i.string, Te(r, e.text, f, d, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = vt(t.font), i = Pt(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, o;
    if (Qt(t, this.left, this.right) && Qt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], Qt(t, s.left, s.left + s.width) && Qt(e, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!am(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = im(s, i);
      s && !o && dt(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && dt(e.onHover, [
        t,
        i,
        this
      ], this);
    } else
      i && dt(e.onClick, [
        t,
        i,
        this
      ], this);
  }
}
function sm(n, t, e, i, s) {
  const o = om(i, n, t, e), r = rm(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function om(n, t, e, i) {
  let s = n.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + i.measureText(s).width;
}
function rm(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = Nl(t, e)), i;
}
function Nl(n, t) {
  const e = n.text ? n.text.length + 0.5 : 0;
  return t * e;
}
function am(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var $l = {
  id: "legend",
  _element: Qr,
  start(n, t, e) {
    const i = n.legend = new Qr({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Dt.configure(n, i, e), Dt.addBox(n, i);
  },
  stop(n) {
    Dt.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const i = n.legend;
    Dt.configure(n, i, e), i.options = e;
  },
  afterUpdate(n) {
    const t = n.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const i = t.datasetIndex, s = e.chart;
      s.isDatasetVisible(i) ? (s.hide(i), t.hidden = !0) : (s.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets, { labels: { usePointStyle: e, pointStyle: i, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = n.legend.options;
        return n._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), d = Pt(c.borderWidth);
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
      color: (n) => n.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith("on"),
    labels: {
      _scriptable: (n) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(n)
    }
  }
};
class no extends Et {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const i = this.options;
    if (this.left = 0, this.top = 0, !i.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const s = lt(i.text) ? i.text.length : 1;
    this._padding = Pt(i.padding);
    const o = s * vt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, h;
    return this.isHorizontal() ? (d = Tt(a, i, o), h = e + t, c = o - i) : (r.position === "left" ? (d = i + t, h = Tt(a, s, e), l = it * -0.5) : (d = o - t, h = Tt(a, e, s), l = it * 0.5), c = s - e), {
      titleX: d,
      titleY: h,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = vt(e.font), o = i.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Te(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Xs(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function lm(n, t) {
  const e = new no({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  Dt.configure(n, e, t), Dt.addBox(n, e), n.titleBlock = e;
}
var Vl = {
  id: "title",
  _element: no,
  start(n, t, e) {
    lm(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    Dt.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock;
    Dt.configure(n, i, e), i.options = e;
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
const hi = /* @__PURE__ */ new WeakMap();
var cm = {
  id: "subtitle",
  start(n, t, e) {
    const i = new no({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Dt.configure(n, i, e), Dt.addBox(n, i), hi.set(n, i);
  },
  stop(n) {
    Dt.removeBox(n, hi.get(n)), hi.delete(n);
  },
  beforeUpdate(n, t, e) {
    const i = hi.get(n);
    Dt.configure(n, i, e), i.options = e;
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
const _n = {
  average(n) {
    if (!n.length)
      return !1;
    let t, e, i = 0, s = 0, o = 0;
    for (t = 0, e = n.length; t < e; ++t) {
      const r = n[t].element;
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
  nearest(n, t) {
    if (!n.length)
      return !1;
    let e = t.x, i = t.y, s = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = n.length; o < r; ++o) {
      const l = n[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), d = jn(t, c);
        d < s && (s = d, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, i = l.y;
    }
    return {
      x: e,
      y: i
    };
  }
};
function Ht(n, t) {
  return t && (lt(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Jt(n) {
  return (typeof n == "string" || n instanceof String) && n.indexOf(`
`) > -1 ? n.split(`
`) : n;
}
function dm(n, t) {
  const { element: e, datasetIndex: i, index: s } = t, o = n.getDatasetMeta(i).controller, { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: n,
    label: r,
    parsed: o.getParsed(s),
    raw: n.data.datasets[i].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: e
  };
}
function ta(n, t) {
  const e = n.chart.ctx, { body: i, footer: s, title: o } = n, { boxWidth: r, boxHeight: a } = t, l = vt(t.bodyFont), c = vt(t.titleFont), d = vt(t.footerFont), h = o.length, u = s.length, f = i.length, p = Pt(t.padding);
  let g = p.height, m = 0, y = i.reduce((v, x) => v + x.before.length + x.lines.length + x.after.length, 0);
  if (y += n.beforeBody.length + n.afterBody.length, h && (g += h * c.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const v = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += f * v + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
  }
  u && (g += t.footerMarginTop + u * d.lineHeight + (u - 1) * t.footerSpacing);
  let _ = 0;
  const w = function(v) {
    m = Math.max(m, e.measureText(v).width + _);
  };
  return e.save(), e.font = c.string, at(n.title, w), e.font = l.string, at(n.beforeBody.concat(n.afterBody), w), _ = t.displayColors ? r + 2 + t.boxPadding : 0, at(i, (v) => {
    at(v.before, w), at(v.lines, w), at(v.after, w);
  }), _ = 0, e.font = d.string, at(n.footer, w), e.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function hm(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function um(n, t, e, i) {
  const { x: s, width: o } = i, r = e.caretSize + e.caretPadding;
  if (n === "left" && s + o + r > t.width || n === "right" && s - o - r < 0)
    return !0;
}
function fm(n, t, e, i) {
  const { x: s, width: o } = e, { width: r, chartArea: { left: a, right: l } } = n;
  let c = "center";
  return i === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), um(c, n, t, e) && (c = "center"), c;
}
function ea(n, t, e) {
  const i = e.yAlign || t.yAlign || hm(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || fm(n, t, e, i),
    yAlign: i
  };
}
function gm(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function pm(n, t, e) {
  let { y: i, height: s } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= s + e : i -= s / 2, i;
}
function na(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = n, { xAlign: a, yAlign: l } = e, c = s + o, { topLeft: d, topRight: h, bottomLeft: u, bottomRight: f } = de(r);
  let p = gm(t, a);
  const g = pm(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(d, u) + s : a === "right" && (p += Math.max(h, f) + s), {
    x: Ct(p, 0, i.width - t.width),
    y: Ct(g, 0, i.height - t.height)
  };
}
function ui(n, t, e) {
  const i = Pt(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function ia(n) {
  return Ht([], Jt(n));
}
function mm(n, t, e) {
  return be(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function sa(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const Hl = {
  beforeTitle: qt,
  title(n) {
    if (n.length > 0) {
      const t = n[0], e = t.chart.data.labels, i = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: qt,
  beforeBody: qt,
  beforeLabel: qt,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const e = n.formattedValue;
    return tt(e) || (t += e), t;
  },
  labelColor(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: qt,
  afterBody: qt,
  beforeFooter: qt,
  footer: qt,
  afterFooter: qt
};
function It(n, t, e, i) {
  const s = n[t].call(e, i);
  return typeof s > "u" ? Hl[t].call(e, i) : s;
}
class Es extends Et {
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
    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, o = new Qs(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = mm(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, s = It(i, "beforeTitle", this, t), o = It(i, "title", this, t), r = It(i, "afterTitle", this, t);
    let a = [];
    return a = Ht(a, Jt(s)), a = Ht(a, Jt(o)), a = Ht(a, Jt(r)), a;
  }
  getBeforeBody(t, e) {
    return ia(It(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, s = [];
    return at(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = sa(i, o);
      Ht(r.before, Jt(It(a, "beforeLabel", this, o))), Ht(r.lines, It(a, "label", this, o)), Ht(r.after, Jt(It(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, e) {
    return ia(It(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e, s = It(i, "beforeFooter", this, t), o = It(i, "footer", this, t), r = It(i, "afterFooter", this, t);
    let a = [];
    return a = Ht(a, Jt(s)), a = Ht(a, Jt(o)), a = Ht(a, Jt(r)), a;
  }
  _createItems(t) {
    const e = this._active, i = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(dm(this.chart, e[l]));
    return t.filter && (a = a.filter((d, h, u) => t.filter(d, h, u, i))), t.itemSort && (a = a.sort((d, h) => t.itemSort(d, h, i))), at(a, (d) => {
      const h = sa(t.callbacks, d);
      s.push(It(h, "labelColor", this, d)), o.push(It(h, "labelPointStyle", this, d)), r.push(It(h, "labelTextColor", this, d));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()), s = this._active;
    let o, r = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = _n[i.position].call(this, s, this._eventPosition);
      r = this._createItems(i), this.title = this.getTitle(r, i), this.beforeBody = this.getBeforeBody(r, i), this.body = this.getBody(r, i), this.afterBody = this.getAfterBody(r, i), this.footer = this.getFooter(r, i);
      const l = this._size = ta(this, i), c = Object.assign({}, a, l), d = ea(this.chart, i, c), h = na(i, c, d, this.chart);
      this.xAlign = d.xAlign, this.yAlign = d.yAlign, o = {
        opacity: 1,
        x: h.x,
        y: h.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, i, s) {
    const o = this.getCaretPosition(t, i, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = i, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: h } = de(a), { x: u, y: f } = t, { width: p, height: g } = e;
    let m, y, _, w, v, x;
    return o === "center" ? (v = f + g / 2, s === "left" ? (m = u, y = m - r, w = v + r, x = v - r) : (m = u + p, y = m + r, w = v - r, x = v + r), _ = m) : (s === "left" ? y = u + Math.max(l, d) + r : s === "right" ? y = u + p - Math.max(c, h) - r : y = this.caretX, o === "top" ? (w = f, v = w - r, m = y - r, _ = y + r) : (w = f + g, v = w + r, m = y + r, _ = y - r), x = w), {
      x1: m,
      x2: y,
      x3: _,
      y1: w,
      y2: v,
      y3: x
    };
  }
  drawTitle(t, e, i) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = Xe(i.rtl, this.x, this.width);
      for (t.x = ui(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", r = vt(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const r = this.labelColors[i], a = this.labelPointStyles[i], { boxHeight: l, boxWidth: c, boxPadding: d } = o, h = vt(o.bodyFont), u = ui(this, "left", o), f = s.x(u), p = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + p;
    if (o.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, y = s.leftForLtr(f, c) + c / 2, _ = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Pi(t, m, y, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Pi(t, m, y, _);
    } else {
      t.lineWidth = H(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const m = s.leftForLtr(f, c - d), y = s.leftForLtr(s.xPlus(f, 1), c - d - 2), _ = de(r.borderRadius);
      Object.values(_).some((w) => w !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ze(t, {
        x: m,
        y: g,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ze(t, {
        x: y,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, g, c, l), t.strokeRect(m, g, c, l), t.fillStyle = r.backgroundColor, t.fillRect(y, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = i, h = vt(i.bodyFont);
    let u = h.lineHeight, f = 0;
    const p = Xe(i.rtl, this.x, this.width), g = function(P) {
      e.fillText(P, p.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, m = p.textAlign(r);
    let y, _, w, v, x, k, C;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = h.string, t.x = ui(this, m, i), e.fillStyle = i.bodyColor, at(this.beforeBody, g), f = a && m !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, v = 0, k = s.length; v < k; ++v) {
      for (y = s[v], _ = this.labelTextColors[v], e.fillStyle = _, at(y.before, g), w = y.lines, a && w.length && (this._drawColorBox(e, t, v, p, i), u = Math.max(h.lineHeight, l)), x = 0, C = w.length; x < C; ++x)
        g(w[x]), u = h.lineHeight;
      at(y.after, g);
    }
    f = 0, u = h.lineHeight, at(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, i) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = Xe(i.rtl, this.x, this.width);
      for (t.x = ui(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", r = vt(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = i, { topLeft: h, topRight: u, bottomLeft: f, bottomRight: p } = de(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + h, l), r === "top" && this.drawCaret(t, e, i, s), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, i, s), e.lineTo(a + c, l + d - p), e.quadraticCurveTo(a + c, l + d, a + c - p, l + d), r === "bottom" && this.drawCaret(t, e, i, s), e.lineTo(a + f, l + d), e.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, e, i, s), e.lineTo(a, l + h), e.quadraticCurveTo(a, l, a + h, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const r = _n[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = ta(this, t), l = Object.assign({}, r, this._size), c = ea(e, t, l), d = na(t, l, c, e);
      (s._to !== d.x || o._to !== d.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, d));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(e);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const r = Pt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, e), ml(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), bl(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active, s = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !wi(i, s), r = this._positionChanged(s, e);
    (o || r) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, i), a = this._positionChanged(r, t), l = e || !wi(r, o) || a;
    return l && (this._active = r, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, i, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: s, options: o } = this, r = _n[o.position].call(this, t, e);
    return r !== !1 && (i !== r.x || s !== r.y);
  }
}
D(Es, "positioners", _n);
var Yl = {
  id: "tooltip",
  _element: Es,
  positioners: _n,
  afterInit(n, t, e) {
    e && (n.tooltip = new Es({
      chart: n,
      options: e
    }));
  },
  beforeUpdate(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  reset(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  afterDraw(n) {
    const t = n.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (n.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(n, t) {
    if (n.tooltip) {
      const e = t.replay;
      n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
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
    boxHeight: (n, t) => t.bodyFont.size,
    boxWidth: (n, t) => t.bodyFont.size,
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
    callbacks: Hl
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (n) => n !== "filter" && n !== "itemSort" && n !== "external",
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
  Colors: Rp,
  Decimation: jp,
  Filler: Wl,
  Legend: $l,
  SubTitle: cm,
  Title: Vl,
  Tooltip: Yl
});
const bm = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function ym(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1)
    return bm(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const xm = (n, t) => n === null ? null : Ct(Math.round(n), 0, t);
function oa(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Di extends De {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const i = this.getLabels();
      for (const { index: s, label: o } of e)
        i[s] === o && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (tt(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : ym(i, t, W(e, t), this._addedLabels), xm(e, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.min, e = this.max, i = this.options.offset, s = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      s.push({
        value: r
      });
    return s;
  }
  getLabelForValue(t) {
    return oa.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
D(Di, "id", "category"), D(Di, "defaults", {
  ticks: {
    callback: oa
  }
});
function _m(n, t) {
  const e = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: h, includeBounds: u } = n, f = o || 1, p = d - 1, { min: g, max: m } = t, y = !tt(r), _ = !tt(a), w = !tt(c), v = (m - g) / (h + 1);
  let x = nr((m - g) / p / f) * f, k, C, P, O;
  if (x < 1e-14 && !y && !_)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  O = Math.ceil(m / x) - Math.floor(g / x), O > p && (x = nr(O * x / p / f) * f), tt(l) || (k = Math.pow(10, l), x = Math.ceil(x * k) / k), s === "ticks" ? (C = Math.floor(g / x) * x, P = Math.ceil(m / x) * x) : (C = g, P = m), y && _ && o && vu((a - r) / o, x / 1e3) ? (O = Math.round(Math.min((a - r) / x, d)), x = (a - r) / O, C = r, P = a) : w ? (C = y ? r : C, P = _ ? a : P, O = c - 1, x = (P - C) / O) : (O = (P - C) / x, kn(O, Math.round(O), x / 1e3) ? O = Math.round(O) : O = Math.ceil(O));
  const I = Math.max(ir(x), ir(C));
  k = Math.pow(10, tt(l) ? I : l), C = Math.round(C * k) / k, P = Math.round(P * k) / k;
  let R = 0;
  for (y && (u && C !== r ? (e.push({
    value: r
  }), C < r && R++, kn(Math.round((C + R * x) * k) / k, r, ra(r, v, n)) && R++) : C < r && R++); R < O; ++R)
    e.push({
      value: Math.round((C + R * x) * k) / k
    });
  return _ && u && P !== a ? e.length && kn(e[e.length - 1].value, a, ra(a, v, n)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!_ || P === a) && e.push({
    value: P
  }), e;
}
function ra(n, t, { horizontal: e, minRotation: i }) {
  const s = kt(i), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + n).length;
  return Math.min(t / o, r);
}
class Ri extends De {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return tt(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = e ? s : l, a = (l) => o = i ? o : l;
    if (t) {
      const l = Xt(s), c = Xt(o);
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
    let { maxTicksLimit: e, stepSize: i } = t, s;
    return i ? (s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), e = e || 11), e && (s = Math.min(e, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
      maxTicks: i,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = _m(s, o);
    return t.bounds === "ticks" && Ja(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, i = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2;
      e -= s, i += s;
    }
    this._startValue = e, this._endValue = i, this._valueRange = i - e;
  }
  getLabelForValue(t) {
    return Un(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ii extends Ri {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = gt(t) ? t : 0, this.max = gt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = kt(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
D(Ii, "id", "linear"), D(Ii, "defaults", {
  ticks: {
    callback: Yi.formatters.numeric
  }
});
const Nn = (n) => Math.floor(re(n)), Se = (n, t) => Math.pow(10, Nn(n) + t);
function aa(n) {
  return n / Math.pow(10, Nn(n)) === 1;
}
function la(n, t, e) {
  const i = Math.pow(10, e), s = Math.floor(n / i);
  return Math.ceil(t / i) - s;
}
function vm(n, t) {
  const e = t - n;
  let i = Nn(e);
  for (; la(n, t, i) > 10; )
    i++;
  for (; la(n, t, i) < 10; )
    i--;
  return Math.min(i, Nn(n));
}
function wm(n, { min: t, max: e }) {
  t = Ft(n.min, t);
  const i = [], s = Nn(t);
  let o = vm(t, e), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * r) / r, d = Math.floor((t - l) / a / 10) * a * 10;
  let h = Math.floor((c - d) / Math.pow(10, o)), u = Ft(n.min, Math.round((l + d + h * Math.pow(10, o)) * r) / r);
  for (; u < e; )
    i.push({
      value: u,
      major: aa(u),
      significand: h
    }), h >= 10 ? h = h < 15 ? 15 : 20 : h++, h >= 20 && (o++, h = 2, r = o >= 0 ? 1 : r), u = Math.round((l + d + h * Math.pow(10, o)) * r) / r;
  const f = Ft(n.max, u);
  return i.push({
    value: f,
    major: aa(f),
    significand: h
  }), i;
}
class As extends De {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const i = Ri.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return gt(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = gt(t) ? Math.max(0, t) : null, this.max = gt(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !gt(this._userMin) && (this.min = t === Se(this.min, 0) ? Se(this.min, -1) : Se(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min, s = this.max;
    const o = (a) => i = t ? i : a, r = (a) => s = e ? s : a;
    i === s && (i <= 0 ? (o(1), r(10)) : (o(Se(i, -1)), r(Se(s, 1)))), i <= 0 && o(Se(s, -1)), s <= 0 && r(Se(i, 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, i = wm(e, this);
    return t.bounds === "ticks" && Ja(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Un(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = re(t), this._valueRange = re(this.max) - re(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (re(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
D(As, "id", "logarithmic"), D(As, "defaults", {
  ticks: {
    callback: Yi.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Ts(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Pt(t.backdropPadding);
    return W(t.font && t.font.size, pt.font.size) + e.height;
  }
  return 0;
}
function Sm(n, t, e) {
  return e = lt(e) ? e : [
    e
  ], {
    w: zu(n, t.string, e),
    h: e.length * t.lineHeight
  };
}
function ca(n, t, e, i, s) {
  return n === i || n === s ? {
    start: t - e / 2,
    end: t + e / 2
  } : n < i || n > s ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Mm(n) {
  const t = {
    l: n.left + n._padding.left,
    r: n.right - n._padding.right,
    t: n.top + n._padding.top,
    b: n.bottom - n._padding.bottom
  }, e = Object.assign({}, t), i = [], s = [], o = n._pointLabels.length, r = n.options.pointLabels, a = r.centerPointLabels ? it / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(n.getPointLabelContext(l));
    s[l] = c.padding;
    const d = n.getPointPosition(l, n.drawingArea + s[l], a), h = vt(c.font), u = Sm(n.ctx, h, n._pointLabels[l]);
    i[l] = u;
    const f = jt(n.getIndexAngle(l) + a), p = Math.round(Hi(f)), g = ca(p, d.x, u.w, 0, 180), m = ca(p, d.y, u.h, 90, 270);
    km(e, t, f, g, m);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), n._pointLabelItems = Pm(n, i, s);
}
function km(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  i.start < t.l ? (a = (t.l - i.start) / o, n.l = Math.min(n.l, t.l - a)) : i.end > t.r && (a = (i.end - t.r) / o, n.r = Math.max(n.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, n.t = Math.min(n.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, n.b = Math.max(n.b, t.b + l));
}
function Pm(n, t, e) {
  const i = [], s = n._pointLabels.length, o = n.options, r = Ts(o) / 2, a = n.drawingArea, l = o.pointLabels.centerPointLabels ? it / s : 0;
  for (let c = 0; c < s; c++) {
    const d = n.getPointPosition(c, a + r + e[c], l), h = Math.round(Hi(jt(d.angle + _t))), u = t[c], f = Em(d.y, u.h, h), p = Cm(h), g = Om(d.x, u.w, p);
    i.push({
      x: d.x,
      y: f,
      textAlign: p,
      left: g,
      top: f,
      right: g + u.w,
      bottom: f + u.h
    });
  }
  return i;
}
function Cm(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function Om(n, t, e) {
  return e === "right" ? n -= t : e === "center" && (n -= t / 2), n;
}
function Em(n, t, e) {
  return e === 90 || e === 270 ? n -= t / 2 : (e > 270 || e < 90) && (n -= t), n;
}
function Am(n, t) {
  const { ctx: e, options: { pointLabels: i } } = n;
  for (let s = t - 1; s >= 0; s--) {
    const o = i.setContext(n.getPointLabelContext(s)), r = vt(o.font), { x: a, y: l, textAlign: c, left: d, top: h, right: u, bottom: f } = n._pointLabelItems[s], { backdropColor: p } = o;
    if (!tt(p)) {
      const g = de(o.borderRadius), m = Pt(o.backdropPadding);
      e.fillStyle = p;
      const y = d - m.left, _ = h - m.top, w = u - d + m.width, v = f - h + m.height;
      Object.values(g).some((x) => x !== 0) ? (e.beginPath(), Ze(e, {
        x: y,
        y: _,
        w,
        h: v,
        radius: g
      }), e.fill()) : e.fillRect(y, _, w, v);
    }
    Te(e, n._pointLabels[s], a, l + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function Ul(n, t, e, i) {
  const { ctx: s } = n;
  if (e)
    s.arc(n.xCenter, n.yCenter, t, 0, ut);
  else {
    let o = n.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      o = n.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function Tm(n, t, e, i, s) {
  const o = n.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !i || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash), o.lineDashOffset = s.dashOffset, o.beginPath(), Ul(n, e, r, i), o.closePath(), o.stroke(), o.restore());
}
function Dm(n, t, e) {
  return be(n, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class vn extends Ri {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Pt(Ts(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = gt(t) && !isNaN(t) ? t : 0, this.max = gt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ts(this.options));
  }
  generateTickLabels(t) {
    Ri.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, i) => {
      const s = dt(this.options.pointLabels.callback, [
        e,
        i
      ], this);
      return s || s === 0 ? s : "";
    }).filter((e, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Mm(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
  }
  getIndexAngle(t) {
    const e = ut / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return jt(t * e + kt(i));
  }
  getDistanceFromCenterForValue(t) {
    if (tt(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (tt(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return Dm(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - _t + i;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: i,
      right: s,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(), i.beginPath(), Ul(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: i, grid: s, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Am(this, r), s.display && this.ticks.forEach((d, h) => {
      if (h !== 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const u = this.getContext(h), f = s.setContext(u), p = o.setContext(u);
        Tm(this, f, l, r, p);
      }
    }), i.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const d = i.setContext(this.getPointLabelContext(a)), { color: h, lineWidth: u } = d;
        !u || !h || (t.lineWidth = u, t.strokeStyle = h, t.setLineDash(d.borderDash), t.lineDashOffset = d.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, i = e.ticks;
    if (!i.display)
      return;
    const s = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && !e.reverse)
        return;
      const c = i.setContext(this.getContext(l)), d = vt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = d.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const h = Pt(c.backdropPadding);
        t.fillRect(-r / 2 - h.left, -o - d.size / 2 - h.top, r + h.width, d.size + h.height);
      }
      Te(t, a.label, 0, -o, d, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
D(vn, "id", "radialLinear"), D(vn, "defaults", {
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
    callback: Yi.formatters.numeric
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
}), D(vn, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), D(vn, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Xi = {
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
}, Lt = Object.keys(Xi);
function Rm(n, t) {
  return n - t;
}
function da(n, t) {
  if (tt(t))
    return null;
  const e = n._adapter, { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let r = t;
  return typeof i == "function" && (r = i(r)), gt(r) || (r = typeof i == "string" ? e.parse(r, i) : e.parse(r)), r === null ? null : (s && (r = s === "week" && (Je(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, s)), +r);
}
function ha(n, t, e, i) {
  const s = Lt.length;
  for (let o = Lt.indexOf(n); o < s - 1; ++o) {
    const r = Xi[Lt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= i)
      return Lt[o];
  }
  return Lt[s - 1];
}
function Im(n, t, e, i, s) {
  for (let o = Lt.length - 1; o >= Lt.indexOf(e); o--) {
    const r = Lt[o];
    if (Xi[r].common && n._adapter.diff(s, i, r) >= t - 1)
      return r;
  }
  return Lt[e ? Lt.indexOf(e) : 0];
}
function Lm(n) {
  for (let t = Lt.indexOf(n) + 1, e = Lt.length; t < e; ++t)
    if (Xi[Lt[t]].common)
      return Lt[t];
}
function ua(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = Us(e, t), o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function Fm(n, t, e, i) {
  const s = n._adapter, o = +s.startOf(t[0].value, i), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, i))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function fa(n, t, e) {
  const i = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, i.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? i : Fm(n, i, s, e);
}
class $n extends De {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new tg._date(t.adapters.date);
    s.init(e), Mn(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : da(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, i = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = gt(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), o = gt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], i = t[t.length - 1]), {
      min: e,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, i = t.ticks, s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, r = this.max, a = ku(s, o, r);
    return this._unit = e.unit || (i.autoSkip ? ha(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Im(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Lm(this._unit), this.initOffsets(s), t.reverse && a.reverse(), fa(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = Ct(e, 0, r), i = Ct(i, 0, r), this._offsets = {
      start: e,
      end: i,
      factor: 1 / (e + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, i = this.max, s = this.options, o = s.time, r = o.unit || ha(o.minUnit, e, i, this._getLabelCapacity(e)), a = W(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = Je(l) || l === !0, d = {};
    let h = e, u, f;
    if (c && (h = +t.startOf(h, "isoWeek", l)), h = +t.startOf(h, c ? "day" : r), t.diff(i, e, r) > 1e5 * a)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + r);
    const p = s.ticks.source === "data" && this.getDataTimestamps();
    for (u = h, f = 0; u < i; u = +t.add(u, a, r), f++)
      ua(d, u, p);
    return (u === i || s.bounds === "ticks" || f === 1) && ua(d, u, p), Object.keys(d).sort((g, m) => g - m).map((g) => +g);
  }
  getLabelForValue(t) {
    const e = this._adapter, i = this.options.time;
    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats, o = this._unit, r = e || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, i, s) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return dt(r, [
        t,
        e,
        i
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, d = l && a[l], h = c && a[c], u = i[e], f = c && h && u && u.major;
    return this._adapter.format(t, s || (f ? h : d));
  }
  generateTickLabels(t) {
    let e, i, s;
    for (e = 0, i = t.length; e < i; ++e)
      s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = kt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + a * r,
      h: i * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, fa(this, [
      t
    ], this._majorUnit), s), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, i;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (e = 0, i = s.length; e < i; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (e = 0, i = s.length; e < i; ++e)
      t.push(da(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return tl(t.sort(Rm));
  }
}
D($n, "id", "time"), D($n, "defaults", {
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
function fi(n, t, e) {
  let i = 0, s = n.length - 1, o, r, a, l;
  e ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = te(n, "pos", t)), { pos: o, time: a } = n[i], { pos: r, time: l } = n[s]) : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = te(n, "time", t)), { time: o, pos: a } = n[i], { time: r, pos: l } = n[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Ds extends $n {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = fi(e, this.min), this._tableRange = fi(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this, s = [], o = [];
    let r, a, l, c, d;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= i && s.push(c);
    if (s.length < 2)
      return [
        {
          time: e,
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
    const e = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return e.length && i.length ? t = this.normalize(e.concat(i)) : t = e.length ? e : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (fi(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return fi(this._table, i * this._tableRange + this._minPos, !0);
  }
}
D(Ds, "id", "timeseries"), D(Ds, "defaults", $n.defaults);
Object.freeze({
  __proto__: null,
  CategoryScale: Di,
  LinearScale: Ii,
  LogarithmicScale: As,
  RadialLinearScale: vn,
  TimeScale: $n,
  TimeSeriesScale: Ds
});
const ga = {
  modes: {
    point(n, t) {
      return xi(n, t, { intersect: !0 });
    },
    nearest(n, t, e) {
      return Bm(n, t, e);
    },
    x(n, t, e) {
      return xi(n, t, { intersect: e.intersect, axis: "x" });
    },
    y(n, t, e) {
      return xi(n, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function io(n, t, e) {
  return (ga.modes[e.mode] || ga.modes.nearest)(n, t, e);
}
function jm(n, t, e) {
  return e !== "x" && e !== "y" ? n.inRange(t.x, t.y, "x", !0) || n.inRange(t.x, t.y, "y", !0) : n.inRange(t.x, t.y, e, !0);
}
function zm(n, t, e) {
  return e === "x" ? { x: n.x, y: t.y } : e === "y" ? { x: t.x, y: n.y } : t;
}
function xi(n, t, e) {
  return n.visibleElements.filter((i) => e.intersect ? i.inRange(t.x, t.y) : jm(i, t, e.axis));
}
function Bm(n, t, e) {
  let i = Number.POSITIVE_INFINITY;
  return xi(n, t, e).reduce((s, o) => {
    const r = o.getCenterPoint(), a = zm(t, r, e.axis), l = jn(t, a);
    return l < i ? (s = [o], i = l) : l === i && s.push(o), s;
  }, []).sort((s, o) => s._index - o._index).slice(0, 1);
}
const Rs = ["enter", "leave"], so = Rs.concat("click");
function Wm(n, t, e) {
  t.listened = !1, t.moveListened = !1, t._getElements = io, so.forEach((i) => {
    typeof e[i] == "function" ? (t.listened = !0, t.listeners[i] = e[i]) : St(t.listeners[i]) && delete t.listeners[i];
  }), Rs.forEach((i) => {
    typeof e[i] == "function" && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((i) => {
    !t.listened && typeof i.click == "function" && (t.listened = !0), t.moveListened || Rs.forEach((s) => {
      typeof i[s] == "function" && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Nm(n, t, e) {
  if (n.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return $m(n, t, e);
      case "click":
        return Vm(n, t, e);
    }
}
function $m(n, t, e) {
  if (!n.moveListened)
    return;
  let i;
  t.type === "mousemove" ? i = io(n, t, e.interaction) : i = [];
  const s = n.hovered;
  n.hovered = i;
  const o = { state: n, event: t };
  let r = pa(o, "leave", s, i);
  return pa(o, "enter", i, s) || r;
}
function pa({ state: n, event: t }, e, i, s) {
  let o;
  for (const r of i)
    s.indexOf(r) < 0 && (o = Xl(r.options[e] || n.listeners[e], r, t) || o);
  return o;
}
function Vm(n, t, e) {
  const i = n.listeners, s = io(n, t, e.interaction);
  let o;
  for (const r of s)
    o = Xl(r.options.click || i.click, r, t) || o;
  return o;
}
function Xl(n, t, e) {
  return dt(n, [t.$context, e]) === !0;
}
const Hm = (n, t) => t > n || n.length > t.length && n.slice(0, t.length) === t, Oe = 1e-3, oo = (n, t, e) => Math.min(e, Math.max(t, n));
function Ym(n, t, e) {
  for (const i of Object.keys(n))
    n[i] = oo(n[i], t, e);
  return n;
}
function Um(n, t, e, i) {
  if (!n || !t || e <= 0)
    return !1;
  const s = i / 2;
  return Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2) <= Math.pow(e + s, 2);
}
function Kl(n, { x: t, y: e, x2: i, y2: s }, o, r) {
  const a = r / 2, l = n.x >= t - a - Oe && n.x <= i + a + Oe, c = n.y >= e - a - Oe && n.y <= s + a + Oe;
  return o === "x" ? l : (o === "y" || l) && c;
}
function sn(n, t) {
  const { centerX: e, centerY: i } = n.getProps(["centerX", "centerY"], t);
  return { x: e, y: i };
}
function Xm(n, t, e, i = !0) {
  const s = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = s[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (Hm(a, r)) {
      if (i)
        throw new Error(`${n} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const ql = (n) => typeof n == "string" && n.endsWith("%"), Gl = (n) => oo(parseFloat(n) / 100, 0, 1);
function ro(n, t) {
  return t === "start" ? 0 : t === "end" ? n : ql(t) ? Gl(t) * n : n / 2;
}
function en(n, t) {
  return typeof t == "number" ? t : ql(t) ? Gl(t) * n : n;
}
function Km(n, t) {
  const { x: e, width: i } = n, s = t.textAlign;
  return s === "center" ? e + i / 2 : s === "end" || s === "right" ? e + i : e;
}
function Jl(n) {
  return H(n) ? {
    x: W(n.x, "center"),
    y: W(n.y, "center")
  } : (n = W(n, "center"), {
    x: n,
    y: n
  });
}
function Zl(n) {
  return n && (St(n.xValue) || St(n.yValue));
}
const vs = /* @__PURE__ */ new Map();
function ao(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function lo(n, { x: t, y: e }, i) {
  i && (n.translate(t, e), n.rotate(kt(i)), n.translate(-t, -e));
}
function Re(n, t) {
  if (t && t.borderWidth)
    return n.lineCap = t.borderCapStyle, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.lineJoin = t.borderJoinStyle, n.lineWidth = t.borderWidth, n.strokeStyle = t.borderColor, !0;
}
function on(n, t) {
  n.shadowColor = t.backgroundShadowColor, n.shadowBlur = t.shadowBlur, n.shadowOffsetX = t.shadowOffsetX, n.shadowOffsetY = t.shadowOffsetY;
}
function co(n, t) {
  const e = t.content;
  if (ao(e))
    return {
      width: en(e.width, t.width),
      height: en(e.height, t.height)
    };
  const i = vt(t.font), s = t.textStrokeWidth, o = lt(e) ? e : [e], r = o.join() + i.string + s + (n._measureText ? "-spriting" : "");
  if (!vs.has(r)) {
    n.save(), n.font = i.string;
    const a = o.length;
    let l = 0;
    for (let d = 0; d < a; d++) {
      const h = o[d];
      l = Math.max(l, n.measureText(h).width + s);
    }
    n.restore();
    const c = a * i.lineHeight + s;
    vs.set(r, { width: l, height: c });
  }
  return vs.get(r);
}
function Ql(n, t, e) {
  const { x: i, y: s, width: o, height: r } = t;
  n.save(), on(n, e);
  const a = Re(n, e);
  n.fillStyle = e.backgroundColor, n.beginPath(), Ze(n, {
    x: i,
    y: s,
    w: o,
    h: r,
    radius: Ym(de(e.borderRadius), 0, Math.min(o, r) / 2)
  }), n.closePath(), n.fill(), a && (n.shadowColor = e.borderShadowColor, n.stroke()), n.restore();
}
function qm(n, t, e) {
  const i = e.content;
  if (ao(i)) {
    n.drawImage(i, t.x, t.y, t.width, t.height);
    return;
  }
  const s = lt(i) ? i : [i], o = vt(e.font), r = o.lineHeight, a = Km(t, e), l = t.y + r / 2 + e.textStrokeWidth / 2;
  n.save(), n.font = o.string, n.textBaseline = "middle", n.textAlign = e.textAlign, Gm(n, e) && s.forEach((c, d) => n.strokeText(c, a, l + d * r)), n.fillStyle = e.color, s.forEach((c, d) => n.fillText(c, a, l + d * r)), n.restore();
}
function Gm(n, t) {
  if (t.textStrokeWidth > 0)
    return n.lineJoin = "round", n.miterLimit = 2, n.lineWidth = t.textStrokeWidth, n.strokeStyle = t.textStrokeColor, !0;
}
function nn(n, t, e) {
  return t = typeof t == "number" ? t : n.parse(t), gt(t) ? n.getPixelForValue(t) : e;
}
function ge(n, t, e) {
  const i = t[e];
  if (i || e === "scaleID")
    return i;
  const s = e.charAt(0), o = Object.values(n).filter((r) => r.axis && r.axis === s);
  return o.length ? o[0].id : s;
}
function tc(n, t) {
  if (n) {
    const e = n.options.reverse, i = nn(n, t.min, e ? t.end : t.start), s = nn(n, t.max, e ? t.start : t.end);
    return {
      start: i,
      end: s
    };
  }
}
function ec(n, t) {
  const { chartArea: e, scales: i } = n, s = i[ge(i, t, "xScaleID")], o = i[ge(i, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return s && (r = nn(s, t.xValue, s.left + s.width / 2)), o && (a = nn(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function ho(n, t) {
  const e = n.scales, i = e[ge(e, t, "xScaleID")], s = e[ge(e, t, "yScaleID")];
  if (!i && !s)
    return {};
  let { left: o, right: r } = i || n.chartArea, { top: a, bottom: l } = s || n.chartArea;
  const c = ma(i, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = ma(s, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function nc(n, t) {
  if (!Zl(t)) {
    const e = ho(n, t);
    let i = t.radius;
    (!i || isNaN(i)) && (i = Math.min(e.width, e.height) / 2, t.radius = i);
    const s = i * 2;
    return {
      x: e.x + t.xAdjust,
      y: e.y + t.yAdjust,
      x2: e.x + s + t.xAdjust,
      y2: e.y + s + t.yAdjust,
      centerX: e.centerX + t.xAdjust,
      centerY: e.centerY + t.yAdjust,
      width: s,
      height: s
    };
  }
  return Jm(n, t);
}
function ic(n, t) {
  const e = ho(n, t), { x: i, y: s } = e;
  return e.elements = [{
    type: "label",
    optionScope: "label",
    properties: tb(n, e, t)
  }], e.initProperties = { x: i, y: s }, e;
}
function Jm(n, t) {
  const e = ec(n, t), i = t.radius * 2;
  return {
    x: e.x - t.radius + t.xAdjust,
    y: e.y - t.radius + t.yAdjust,
    x2: e.x + t.radius + t.xAdjust,
    y2: e.y + t.radius + t.yAdjust,
    centerX: e.x + t.xAdjust,
    centerY: e.y + t.yAdjust,
    width: i,
    height: i
  };
}
function ma(n, t) {
  const e = tc(n, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function Zm({ properties: n, options: t }, e, i, s) {
  const { x: o, x2: r, width: a } = n;
  return sc({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.x,
    padding: { start: s.left, end: s.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Qm({ properties: n, options: t }, e, i, s) {
  const { y: o, y2: r, height: a } = n;
  return sc({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.y,
    padding: { start: s.top, end: s.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function sc(n, t) {
  const { start: e, end: i, borderWidth: s } = n, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = i - s - e - r - a - t.size;
  return e + s / 2 + l + ro(c, o);
}
function tb(n, t, e) {
  const i = e.label;
  i.backgroundColor = "transparent", i.callout.display = !1;
  const s = Jl(i.position), o = Pt(i.padding), r = co(n.ctx, i), a = Zm({ properties: t, options: e }, r, s, o), l = Qm({ properties: t, options: e }, r, s, o), c = r.width + o.width, d = r.height + o.height;
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
function rn(n, t, e) {
  const i = Math.cos(e), s = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + i * (n.x - o) - s * (n.y - r),
    y: r + s * (n.x - o) + i * (n.y - r)
  };
}
function eb(n, t, e) {
  const i = rb(n.scales, t, e);
  let s = ba(t, i, "min", "suggestedMin");
  s = ba(t, i, "max", "suggestedMax") || s, s && typeof t.handleTickRangeOptions == "function" && t.handleTickRangeOptions();
}
function nb(n, t) {
  for (const e of n)
    sb(e, t);
}
function ba(n, t, e, i) {
  if (gt(t[e]) && !ib(n.options, e, i)) {
    const s = n[e] !== t[e];
    return n[e] = t[e], s;
  }
}
function ib(n, t, e) {
  return St(n[t]) || St(n[e]);
}
function sb(n, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const i = ge(t, n, e);
    i && !t[i] && ob(n, e) && console.warn(`No scale found with id '${i}' for annotation '${n.id}'`);
  }
}
function ob(n, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const i of ["Min", "Max", "Value"])
    if (St(n[e + i]))
      return !0;
  return !1;
}
function rb(n, t, e) {
  const i = t.axis, s = t.id, o = i + "ScaleID", r = {
    min: W(t.min, Number.NEGATIVE_INFINITY),
    max: W(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === s ? ya(a, t, ["value", "endValue"], r) : ge(n, a, o) === s && ya(a, t, [i + "Min", i + "Max", i + "Value"], r);
  return r;
}
function ya(n, t, e, i) {
  for (const s of e) {
    const o = n[s];
    if (St(o)) {
      const r = t.parse(o);
      i.min = Math.min(i.min, r), i.max = Math.max(i.max, r);
    }
  }
}
class an extends Et {
  inRange(t, e, i, s) {
    const { x: o, y: r } = rn({ x: t, y: e }, this.getCenterPoint(s), kt(-this.options.rotation));
    return Kl({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    t.save(), lo(t, this.getCenterPoint(), this.options.rotation), Ql(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return ic(t, e);
  }
}
an.id = "boxAnnotation";
an.defaults = {
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
an.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
an.descriptors = {
  label: {
    _fallback: !0
  }
};
const oc = ["left", "bottom", "top", "right"];
class Gn extends Et {
  inRange(t, e, i, s) {
    const { x: o, y: r } = rn({ x: t, y: e }, this.getCenterPoint(s), kt(-this.rotation));
    return Kl({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const e = this.options, i = !St(this._visible) || this._visible;
    !e.display || !e.content || !i || (t.save(), lo(t, this.getCenterPoint(), this.rotation), lb(t, this), Ql(t, this, e), qm(t, pb(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let i;
    if (Zl(e))
      i = ec(t, e);
    else {
      const { centerX: a, centerY: l } = ho(t, e);
      i = { x: a, y: l };
    }
    const s = Pt(e.padding), o = co(t.ctx, e), r = ab(i, o, e, s);
    return {
      pointX: i.x,
      pointY: i.y,
      ...r,
      rotation: e.rotation
    };
  }
}
Gn.id = "labelAnnotation";
Gn.defaults = {
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
Gn.defaultRoutes = {
  borderColor: "color"
};
function ab(n, t, e, i) {
  const s = t.width + i.width + e.borderWidth, o = t.height + i.height + e.borderWidth, r = Jl(e.position), a = xa(n.x, s, e.xAdjust, r.x), l = xa(n.y, o, e.yAdjust, r.y);
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
function xa(n, t, e = 0, i) {
  return n - ro(t, i) + e;
}
function lb(n, t) {
  const { pointX: e, pointY: i, options: s } = t, o = s.callout, r = o && o.display && fb(t, o);
  if (!r || mb(t, o, r))
    return;
  if (n.save(), n.beginPath(), !Re(n, o))
    return n.restore();
  const { separatorStart: l, separatorEnd: c } = cb(t, r), { sideStart: d, sideEnd: h } = hb(t, r, l);
  (o.margin > 0 || s.borderWidth === 0) && (n.moveTo(l.x, l.y), n.lineTo(c.x, c.y)), n.moveTo(d.x, d.y), n.lineTo(h.x, h.y);
  const u = rn({ x: e, y: i }, t.getCenterPoint(), kt(-t.rotation));
  n.lineTo(u.x, u.y), n.stroke(), n.restore();
}
function cb(n, t) {
  const { x: e, y: i, x2: s, y2: o } = n, r = db(n, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: i }, l = { x: a.x, y: o }) : (a = { x: e, y: i + r }, l = { x: s, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function db(n, t) {
  const { width: e, height: i, options: s } = n, o = s.callout.margin + s.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? i + o : -o;
}
function hb(n, t, e) {
  const { y: i, width: s, height: o, options: r } = n, a = r.callout.start, l = ub(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: e.x, y: i + en(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: e.x + en(s, a), y: e.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function ub(n, t) {
  const e = t.side;
  return n === "left" || n === "top" ? -e : e;
}
function fb(n, t) {
  const e = t.position;
  return oc.includes(e) ? e : gb(n, t);
}
function gb(n, t) {
  const { x: e, y: i, x2: s, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: h, rotation: u } = n, f = { x: d, y: h }, p = t.start, g = en(r, p), m = en(a, p), y = [e, e + g, e + g, s], _ = [i + m, o, i, o], w = [];
  for (let v = 0; v < 4; v++) {
    const x = rn({ x: y[v], y: _[v] }, f, kt(u));
    w.push({
      position: oc[v],
      distance: jn(x, { x: l, y: c })
    });
  }
  return w.sort((v, x) => v.distance - x.distance)[0].position;
}
function pb({ x: n, y: t, width: e, height: i, options: s }) {
  const o = s.borderWidth / 2, r = Pt(s.padding);
  return {
    x: n + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - s.borderWidth,
    height: i - r.top - r.bottom - s.borderWidth
  };
}
function mb(n, t, e) {
  const { pointX: i, pointY: s } = n, o = t.margin;
  let r = i, a = s;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), n.inRange(r, a);
}
const uo = (n, t, e) => ({ x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) }), Is = (n, t, e) => uo(t, e, Math.abs((n - t.y) / (e.y - t.y))).x, _a = (n, t, e) => uo(t, e, Math.abs((n - t.x) / (e.x - t.x))).y, wn = (n) => n * n, bb = (n, t, { x: e, y: i, x2: s, y2: o }, r) => r === "y" ? { start: Math.min(i, o), end: Math.max(i, o), value: t } : { start: Math.min(e, s), end: Math.max(e, s), value: n };
class Jn extends Et {
  inRange(t, e, i, s) {
    const o = this.options.borderWidth / 2;
    if (i !== "x" && i !== "y") {
      const a = wn(o), l = { mouseX: t, mouseY: e };
      return _b(this, l, a, s) || Sa(this, l, s);
    }
    const r = bb(t, e, this.getProps(["x", "y", "x2", "y2"], s), i);
    return r.value >= r.start - o && r.value <= r.end + o || Sa(this, { mouseX: t, mouseY: e }, s, i);
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const { x: e, y: i, x2: s, y2: o, options: r } = this;
    if (t.save(), !Re(t, r))
      return t.restore();
    on(t, r);
    const a = Math.atan2(o - i, s - e), l = Math.sqrt(Math.pow(s - e, 2) + Math.pow(o - i, 2)), { startOpts: c, endOpts: d, startAdjust: h, endAdjust: u } = Cb(this);
    t.translate(e, i), t.rotate(a), t.beginPath(), t.moveTo(0 + h, 0), t.lineTo(l - u, 0), t.shadowColor = r.borderShadowColor, t.stroke(), Oa(t, 0, h, c), Oa(t, l, -u, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const { scales: i, chartArea: s } = t, o = i[e.scaleID], r = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
    let a, l;
    if (o)
      a = nn(o, e.value, NaN), l = nn(o, e.endValue, a), o.isHorizontal() ? (r.x = a, r.x2 = l) : (r.y = a, r.y2 = l);
    else {
      const m = i[ge(i, e, "xScaleID")], y = i[ge(i, e, "yScaleID")];
      m && Ma(r, m, { min: e.xMin, max: e.xMax, start: m.left, end: m.right, startProp: "x", endProp: "x2" }), y && Ma(r, y, { min: e.yMin, max: e.yMax, start: y.bottom, end: y.top, startProp: "y", endProp: "y2" });
    }
    const { x: c, y: d, x2: h, y2: u } = r, f = yb(r, t.chartArea), p = f ? xb({ x: c, y: d }, { x: h, y: u }, t.chartArea) : { x: c, y: d, x2: h, y2: u, width: Math.abs(h - c), height: Math.abs(u - d) };
    p.centerX = (h + c) / 2, p.centerY = (u + d) / 2;
    const g = vb(t, p, e.label);
    return g._visible = f, p.elements = [{
      type: "label",
      optionScope: "label",
      properties: g
    }], p;
  }
}
Jn.id = "lineAnnotation";
const va = {
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
Jn.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, va),
    fill: !1,
    length: 12,
    start: Object.assign({}, va),
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
    callout: Object.assign({}, Gn.defaults.callout),
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
Jn.descriptors = {
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
Jn.defaultRoutes = {
  borderColor: "color"
};
function yb({ x: n, y: t, x2: e, y2: i }, { top: s, right: o, bottom: r, left: a }) {
  return !(n < a && e < a || n > o && e > o || t < s && i < s || t > r && i > r);
}
function wa({ x: n, y: t }, e, { top: i, right: s, bottom: o, left: r }) {
  return n < r && (t = _a(r, { x: n, y: t }, e), n = r), n > s && (t = _a(s, { x: n, y: t }, e), n = s), t < i && (n = Is(i, { x: n, y: t }, e), t = i), t > o && (n = Is(o, { x: n, y: t }, e), t = o), { x: n, y: t };
}
function xb(n, t, e) {
  const { x: i, y: s } = wa(n, t, e), { x: o, y: r } = wa(t, n, e);
  return { x: i, y: s, x2: o, y2: r, width: Math.abs(o - i), height: Math.abs(r - s) };
}
function _b(n, { mouseX: t, mouseY: e }, i = Oe, s) {
  const { x: o, y: r, x2: a, y2: l } = n.getProps(["x", "y", "x2", "y2"], s), c = a - o, d = l - r, h = wn(c) + wn(d), u = h === 0 ? -1 : ((t - o) * c + (e - r) * d) / h;
  let f, p;
  return u < 0 ? (f = o, p = r) : u > 1 ? (f = a, p = l) : (f = o + u * c, p = r + u * d), wn(t - f) + wn(e - p) <= i;
}
function Sa(n, { mouseX: t, mouseY: e }, i, s) {
  const o = n.label;
  return o.options.display && o.inRange(t, e, s, i);
}
function Ma(n, t, e) {
  const i = tc(t, e);
  n[e.startProp] = i.start, n[e.endProp] = i.end;
}
function vb(n, t, e) {
  const i = e.borderWidth, s = Pt(e.padding), o = co(n.ctx, e), r = o.width + s.width + i, a = o.height + s.height + i;
  return Sb(t, e, { width: r, height: a, padding: s }, n.chartArea);
}
function wb(n) {
  const { x: t, y: e, x2: i, y2: s } = n, o = Math.atan2(s - e, i - t);
  return o > it / 2 ? o - it : o < it / -2 ? o + it : o;
}
function Sb(n, t, e, i) {
  const { width: s, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: n.x, y: n.y }, d = { x: n.x2, y: n.y2 }, h = t.rotation === "auto" ? wb(n) : kt(t.rotation), u = Mb(s, o, h), f = kb(n, t, { labelSize: u, padding: r }, i), p = uo(c, d, f), g = { size: u.w, min: i.left, max: i.right, padding: r.left }, m = { size: u.h, min: i.top, max: i.bottom, padding: r.top }, y = Pa(p.x, g) + a, _ = Pa(p.y, m) + l;
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
    rotation: Hi(h)
  };
}
function Mb(n, t, e) {
  const i = Math.cos(e), s = Math.sin(e);
  return {
    w: Math.abs(n * i) + Math.abs(t * s),
    h: Math.abs(n * s) + Math.abs(t * i)
  };
}
function kb(n, t, e, i) {
  let s;
  const o = Pb(n, i);
  return t.position === "start" ? s = ka({ w: n.x2 - n.x, h: n.y2 - n.y }, e, t, o) : t.position === "end" ? s = 1 - ka({ w: n.x - n.x2, h: n.y - n.y2 }, e, t, o) : s = ro(1, t.position), s;
}
function ka(n, t, e, i) {
  const { labelSize: s, padding: o } = t, r = n.w * i.dx, a = n.h * i.dy, l = r > 0 && (s.w / 2 + o.left - i.x) / r, c = a > 0 && (s.h / 2 + o.top - i.y) / a;
  return oo(Math.max(l, c), 0, 0.25);
}
function Pb(n, t) {
  const { x: e, x2: i, y: s, y2: o } = n, r = Math.min(s, o) - t.top, a = Math.min(e, i) - t.left, l = t.bottom - Math.max(s, o), c = t.right - Math.max(e, i);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function Pa(n, t) {
  const { size: e, min: i, max: s, padding: o } = t, r = e / 2;
  return e > s - i ? (s + i) / 2 : (i >= n - o - r && (n = i + o + r), s <= n + o + r && (n = s - o - r), n);
}
function Cb(n) {
  const t = n.options, e = t.arrowHeads && t.arrowHeads.start, i = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: i,
    startAdjust: Ca(n, e),
    endAdjust: Ca(n, i)
  };
}
function Ca(n, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: i } = t, s = n.options.borderWidth / 2, o = { x: e, y: i + s };
  return Math.abs(Is(0, o, { x: 0, y: s }));
}
function Oa(n, t, e, i) {
  if (!i || !i.display)
    return;
  const { length: s, width: o, fill: r, backgroundColor: a, borderColor: l } = i, c = Math.abs(t - s) + e;
  n.beginPath(), on(n, i), Re(n, i), n.moveTo(c, -o), n.lineTo(t + e, 0), n.lineTo(c, o), r === !0 ? (n.fillStyle = a || l, n.closePath(), n.fill(), n.shadowColor = "transparent") : n.shadowColor = i.borderShadowColor, n.stroke();
}
class Zn extends Et {
  inRange(t, e, i, s) {
    const o = this.options.rotation, r = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return Ob({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], s), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], s), h = r / 2, u = i === "y" ? { start: l, end: d } : { start: a, end: c }, f = rn({ x: t, y: e }, this.getCenterPoint(s), kt(-o));
    return f[i] >= u.start - h - Oe && f[i] <= u.end + h + Oe;
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const { width: e, height: i, centerX: s, centerY: o, options: r } = this;
    t.save(), lo(t, this.getCenterPoint(), r.rotation), on(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Re(t, r);
    t.ellipse(s, o, i / 2, e / 2, it / 2, 0, 2 * it), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return ic(t, e);
  }
}
Zn.id = "ellipseAnnotation";
Zn.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  label: Object.assign({}, an.defaults.label),
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
Zn.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Zn.descriptors = {
  label: {
    _fallback: !0
  }
};
function Ob(n, t, e, i) {
  const { width: s, height: o, centerX: r, centerY: a } = t, l = s / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = kt(e || 0), h = i / 2 || 0, u = Math.cos(d), f = Math.sin(d), p = Math.pow(u * (n.x - r) + f * (n.y - a), 2), g = Math.pow(f * (n.x - r) - u * (n.y - a), 2);
  return p / Math.pow(l + h, 2) + g / Math.pow(c + h, 2) <= 1.0001;
}
class Ki extends Et {
  inRange(t, e, i, s) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], s), d = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return Um({ x: t, y: e }, this.getCenterPoint(s), c / 2, d);
    const h = d / 2, u = i === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t };
    return u.value >= u.start - h && u.value <= u.end + h;
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const e = this.options, i = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, on(t, e);
    const s = Re(t, e);
    e.borderWidth = 0, Pi(t, e, this.centerX, this.centerY), s && !ao(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = i;
  }
  resolveElementProperties(t, e) {
    return nc(t, e);
  }
}
Ki.id = "pointAnnotation";
Ki.defaults = {
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
Ki.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class qi extends Et {
  inRange(t, e, i, s) {
    if (i !== "x" && i !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && Ab(this.elements, t, e, s);
    const o = rn({ x: t, y: e }, this.getCenterPoint(s), kt(-this.options.rotation)), r = this.elements.map((c) => i === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[i] >= a && o[i] <= l;
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const { elements: e, options: i } = this;
    t.save(), t.beginPath(), t.fillStyle = i.backgroundColor, on(t, i);
    const s = Re(t, i);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), s && (t.shadowColor = i.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const i = nc(t, e), { x: s, y: o } = i, { sides: r, rotation: a } = e, l = [], c = 2 * it / r;
    let d = a * Ga;
    for (let h = 0; h < r; h++, d += c)
      l.push(Eb(i, e, d));
    return i.elements = l, i.initProperties = { x: s, y: o }, i;
  }
}
qi.id = "polygonAnnotation";
qi.defaults = {
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
qi.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function Eb({ centerX: n, centerY: t }, { radius: e, borderWidth: i }, s) {
  const o = i / 2, r = Math.sin(s), a = Math.cos(s), l = { x: n + r * e, y: t - a * e };
  return {
    type: "point",
    optionScope: "point",
    properties: {
      x: l.x,
      y: l.y,
      centerX: l.x,
      centerY: l.y,
      bX: n + r * (e + o),
      bY: t - a * (e + o)
    }
  };
}
function Ab(n, t, e, i) {
  let s = !1, o = n[n.length - 1].getProps(["bX", "bY"], i);
  for (const r of n) {
    const a = r.getProps(["bX", "bY"], i);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (s = !s), o = a;
  }
  return s;
}
const he = {
  box: an,
  ellipse: Zn,
  label: Gn,
  line: Jn,
  point: Ki,
  polygon: qi
};
Object.keys(he).forEach((n) => {
  pt.describe(`elements.${he[n].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Tb = {
  update: Object.assign
};
function fo(n = "line") {
  return he[n] ? n : (console.warn(`Unknown annotation type: '${n}', defaulting to 'line'`), "line");
}
function Db(n, t, e, i) {
  const s = Ib(n, e.animations, i), o = t.annotations, r = jb(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = rc(r, a, l.type), d = l.setContext(Fb(n, c, l)), h = c.resolveElementProperties(n, d);
    h.skip = Rb(h), "elements" in h && (Lb(c, h, d, s), delete h.elements), St(c.x) || Object.assign(c, h), h.options = ac(d), s.update(c, h);
  }
}
function Rb(n) {
  return isNaN(n.x) || isNaN(n.y);
}
function Ib(n, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Tb : new Qs(n, t);
}
function Lb(n, { elements: t, initProperties: e }, i, s) {
  const o = n.elements || (n.elements = []);
  o.length = t.length;
  for (let r = 0; r < t.length; r++) {
    const a = t[r], l = a.properties, c = rc(o, r, a.type, e), d = i[a.optionScope].override(a);
    l.options = ac(d), s.update(c, l);
  }
}
function rc(n, t, e, i) {
  const s = he[fo(e)];
  let o = n[t];
  return (!o || !(o instanceof s)) && (o = n[t] = new s(), H(i) && Object.assign(o, i)), o;
}
function ac(n) {
  const t = he[fo(n.type)], e = {};
  e.id = n.id, e.type = n.type, e.drawTime = n.drawTime, Object.assign(
    e,
    Ls(n, t.defaults),
    Ls(n, t.defaultRoutes)
  );
  for (const i of so)
    e[i] = n[i];
  return e;
}
function Ls(n, t) {
  const e = {};
  for (const i of Object.keys(t)) {
    const s = t[i], o = n[i];
    e[i] = H(s) ? Ls(o, s) : o;
  }
  return e;
}
function Fb(n, t, e) {
  return t.$context || (t.$context = Object.assign(Object.create(n.getContext()), {
    element: t,
    id: e.id,
    type: "annotation"
  }));
}
function jb(n, t) {
  const e = t.length, i = n.length;
  if (i < e) {
    const s = e - i;
    n.splice(i, 0, ...new Array(s));
  } else
    i > e && n.splice(e, i - e);
  return n;
}
var zb = "2.1.2";
const se = /* @__PURE__ */ new Map();
var Bb = {
  id: "annotation",
  version: zb,
  beforeRegister() {
    Xm("chart.js", "3.7", zt.version);
  },
  afterRegister() {
    zt.register(he);
  },
  afterUnregister() {
    zt.unregister(he);
  },
  beforeInit(n) {
    se.set(n, {
      annotations: [],
      elements: [],
      visibleElements: [],
      listeners: {},
      listened: !1,
      moveListened: !1,
      hovered: []
    });
  },
  beforeUpdate(n, t, e) {
    const i = se.get(n), s = i.annotations = [];
    let o = e.annotations;
    H(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      H(a) && (a.id = r, s.push(a));
    }) : lt(o) && s.push(...o), nb(s, n.scales);
  },
  afterDataLimits(n, t) {
    const e = se.get(n);
    eb(n, t.scale, e.annotations.filter((i) => i.display && i.adjustScaleRange));
  },
  afterUpdate(n, t, e) {
    const i = se.get(n);
    Wm(n, i, e), Db(n, i, e, t.mode), i.visibleElements = i.elements.filter((s) => !s.skip && s.options.display);
  },
  beforeDatasetsDraw(n, t, e) {
    gi(n, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(n, t, e) {
    gi(n, "afterDatasetsDraw", e.clip);
  },
  beforeDraw(n, t, e) {
    gi(n, "beforeDraw", e.clip);
  },
  afterDraw(n, t, e) {
    gi(n, "afterDraw", e.clip);
  },
  beforeEvent(n, t, e) {
    const i = se.get(n);
    Nm(i, t.event, e) && (t.changed = !0);
  },
  afterDestroy(n) {
    se.delete(n);
  },
  _getState(n) {
    return se.get(n);
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
    _scriptable: (n) => !so.includes(n),
    annotations: {
      _allKeys: !1,
      _fallback: (n, t) => `elements.${he[fo(t.type)].id}`
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
function gi(n, t, e) {
  const { ctx: i, chartArea: s } = n, { visibleElements: o } = se.get(n);
  e && Xn(i, s);
  const r = Wb(o, t).sort((a, l) => a.options.z - l.options.z);
  for (const a of r)
    a.draw(n.ctx, s);
  e && Kn(i);
}
function Wb(n, t) {
  const e = [];
  for (const i of n)
    if (i.options.drawTime === t && e.push(i), i.elements && i.elements.length)
      for (const s of i.elements)
        s.options.display && s.options.drawTime === t && e.push(s);
  return e;
}
const lc = "label";
function Ea(n, t) {
  typeof n == "function" ? n(t) : n && (n.current = t);
}
function Nb(n, t) {
  const e = n.options;
  e && t && Object.assign(e, t);
}
function cc(n, t) {
  n.labels = t;
}
function dc(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : lc;
  const i = [];
  n.datasets = t.map((s) => {
    const o = n.datasets.find((r) => r[e] === s[e]);
    return !o || !s.data || i.includes(o) ? {
      ...s
    } : (i.push(o), Object.assign(o, s), o);
  });
}
function $b(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lc;
  const e = {
    labels: [],
    datasets: []
  };
  return cc(e, n.labels), dc(e, n.datasets, t), e;
}
function Vb(n, t) {
  const {
    height: e = 150,
    width: i = 300,
    redraw: s = !1,
    datasetIdKey: o,
    type: r,
    data: a,
    options: l,
    plugins: c = [],
    fallbackContent: d,
    updateMode: h,
    ...u
  } = n, f = ws(null), p = ws(), g = () => {
    !f.current || (p.current = new zt(f.current, {
      type: r,
      data: $b(a, o),
      options: l && {
        ...l
      },
      plugins: c
    }), Ea(t, p.current));
  }, m = () => {
    Ea(t, null), p.current && (p.current.destroy(), p.current = null);
  };
  return Me(() => {
    !s && p.current && l && Nb(p.current, l);
  }, [s, l]), Me(() => {
    !s && p.current && cc(p.current.config.data, a.labels);
  }, [s, a.labels]), Me(() => {
    !s && p.current && a.datasets && dc(p.current.config.data, a.datasets, o);
  }, [s, a.datasets]), Me(() => {
    !p.current || (s ? (m(), setTimeout(g)) : p.current.update(h));
  }, [s, l, a.labels, a.datasets, h]), Me(() => {
    !p.current || (m(), setTimeout(g));
  }, [r]), Me(() => (g(), () => m()), []), Ye("canvas", {
    ...Object.assign({
      ref: f,
      role: "img",
      height: e,
      width: i
    }, u),
    children: d
  });
}
const Hb = Ta(Vb);
function ye(n, t) {
  return zt.register(t), Ta((e, i) => Ye(Hb, {
    ...Object.assign({}, e, {
      ref: i,
      type: n
    })
  }));
}
const Yb = ye("line", An);
ye("bar", On);
ye("radar", Tn);
ye("doughnut", ae);
ye("polarArea", Ke);
ye("bubble", En);
ye("pie", Oi);
ye("scatter", Dn);
const Ub = (n) => {
  var e, i;
  let t = (e = n.canvas.parentNode) == null ? void 0 : e.querySelector("div");
  return t || (t = document.createElement("div"), t.id = "chartjs-tooltip", t.style.borderRadius = "3px", t.style.color = "white", t.style.opacity = "1", t.style.pointerEvents = "none", t.style.position = "absolute", t.style.top = "0", t.style.transition = "all .1s ease", (i = n.canvas.parentNode) == null || i.appendChild(t)), t;
}, Xb = (n) => {
  const {
    chart: t,
    tooltip: e
  } = n, i = Ub(t);
  if (e.opacity === 0) {
    i.style.opacity = "0";
    return;
  }
  e.body && (Array.from(i.children).forEach((l) => l.remove()), e.body.forEach((l, c) => {
    const d = l.lines, h = document.createElement("table");
    h.style.borderRadius = "2px", h.style.marginBottom = "20px", h.style.position = "absolute", i.appendChild(h);
    const u = document.createElement("tbody");
    d.forEach((f) => {
      const p = document.createTextNode(f), g = document.createElement("tr");
      g.style.backgroundColor = "inherit", g.style.borderWidth = "0";
      const m = document.createElement("td");
      m.style.borderWidth = "0", m.style.whiteSpace = "nowrap", m.appendChild(p), g.appendChild(m), u && u.appendChild(g), h.appendChild(u);
    });
  }));
  const {
    offsetLeft: s,
    offsetTop: o
  } = t.canvas;
  i.querySelectorAll("table").forEach((l, c) => {
    l.style.top = t.getActiveElements()[c].element.y - l.getBoundingClientRect().height / 2 + "px", l.style.left = e.caretX > s + t.canvas.getBoundingClientRect().width / 2 ? `${-1 * e.width - 15}px` : "0";
  }), Array.from(i.querySelectorAll("table")).forEach((l, c) => {
    l.style.backgroundColor = t.getActiveElements()[c].element.options.borderColor;
  });
  const a = vt(e.options.bodyFont);
  i.style.opacity = "1", i.style.left = s + e.caretX + 10 + "px", i.style.height = "100%", i.style.fontFamily = a.family, i.style.fontSize = `${a.size}px` || "14px", i.style.lineHeight = `${a.lineHeight}px` || "120%", i.style.padding = e.options.padding + "px " + e.options.padding + "px";
}, He = {
  aspectRatio: 1.33,
  mouseLine: {
    color: "rgb(77, 76, 76)"
  },
  responsive: !0,
  elements: {
    line: {
      backgroundColor: ["rgb(125, 162, 158)", "rgb(215, 213, 210)"],
      borderColor: "rgb(77, 76, 76)",
      borderWidth: 2,
      fill: "start"
    },
    point: {
      backgroundColor: "rgb(255, 255, 255)",
      hoverBackgroundColor: "rgb(1, 57, 54)",
      hoverBorderColor: "rgb(1, 57, 54)",
      borderColor: ["rgb(0, 77, 73)", "rgb(77, 76, 76)"],
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
        boxWidth: 12,
        pointStyle: "circle"
      },
      position: "bottom"
    },
    tooltip: {
      bodyAlign: "center",
      callbacks: {
        label: (n) => {
          let t = "";
          return n.parsed.y !== null && (t += new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0
          }).format(n.parsed.y)), [n.dataset.label || "", t];
        },
        title: () => ""
      },
      cornerRadius: 0,
      caretPadding: 10,
      caretSize: 0,
      displayColors: !1,
      enabled: !1,
      external: Xb
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
        callback: (n) => Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0
        }).format(n),
        padding: 10
      },
      type: "linear"
    }
  }
}, Kb = {
  id: "hoverLine",
  afterEvent: function(n, { event: t }) {
    const e = n.options, i = n.chartArea;
    if (t.x && t.y && t.x >= i.left && t.y >= i.top && t.x <= i.right && t.y <= i.bottom && n.getActiveElements().length) {
      const s = n.getActiveElements()[0];
      e.mouseLine.x = s.element.x;
    } else
      e.mouseLine.x = -100;
  },
  beforeDatasetsDraw: function(n) {
    const t = n.ctx, e = n.chartArea, i = n.options, s = i.mouseLine.x;
    s != null && s > 0 && (t.save(), t.beginPath(), t.strokeStyle = i.mouseLine.color, t.lineWidth = 2, t.moveTo(i.mouseLine.x || 0, e.bottom), t.lineTo(i.mouseLine.x || 0, e.top), t.setLineDash([2, 2]), t.stroke(), t.beginPath(), t.fillStyle = i.mouseLine.color, t.fill(), t.beginPath(), t.arc(s, e.top, 3, 0, Math.PI + Math.PI * 4 / 2, !1), t.fillStyle = i.mouseLine.color, t.fill(), t.beginPath(), t.arc(s, e.bottom, 3, 0, Math.PI + Math.PI * 4 / 2, !1), t.closePath(), t.fillStyle = i.mouseLine.color, t.fill(), t.restore());
  }
};
zt.register(Di, Ii, Rn, ee, Vl, Yl, $l, Wl, Bb);
const qb = ({
  data: n,
  options: t,
  chartTheme: e
}) => {
  var m, y, _, w, v, x, k, C;
  const i = ws(null);
  pt.font = {
    family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif",
    size: 14
  };
  const s = {
    labels: n.labels,
    datasets: [...n.datasets.map((P, O) => {
      var I, R, F, q, et, $, V, J, bt, ht, S, E, j, z, L;
      return {
        backgroundColor: ((I = e == null ? void 0 : e.colors) == null ? void 0 : I[O].fill) || ((F = (R = t == null ? void 0 : t.elements) == null ? void 0 : R.line) == null ? void 0 : F.backgroundColor) || ((et = (q = He.elements) == null ? void 0 : q.line) == null ? void 0 : et.backgroundColor),
        borderColor: (($ = e == null ? void 0 : e.colors) == null ? void 0 : $[O].line) || ((J = (V = t == null ? void 0 : t.elements) == null ? void 0 : V.line) == null ? void 0 : J.borderColor) || ((ht = (bt = He.elements) == null ? void 0 : bt.line) == null ? void 0 : ht.borderColor),
        pointBackgroundColor: ((S = e == null ? void 0 : e.colors) == null ? void 0 : S[O].point) || ((j = (E = t == null ? void 0 : t.elements) == null ? void 0 : E.point) == null ? void 0 : j.backgroundColor) || ((L = (z = He.elements) == null ? void 0 : z.point) == null ? void 0 : L.backgroundColor),
        ...P
      };
    })]
  }, o = {
    plugins: {
      ...He.plugins,
      ...t == null ? void 0 : t.plugins,
      tooltip: {
        ...(m = He.plugins) == null ? void 0 : m.tooltip,
        ...(y = t == null ? void 0 : t.plugins) == null ? void 0 : y.tooltip,
        titleFont: {
          family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif"
        },
        bodyFont: {
          family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif"
        }
      }
    }
  }, [r] = Co({
    ...He,
    ...t,
    ...o
  }), [a, l] = Co(-1);
  Me(() => {
    if (i.current == null || a === -1)
      return;
    const P = i.current;
    P.setActiveElements([{
      datasetIndex: 0,
      index: a
    }, {
      datasetIndex: 1,
      index: a
    }]);
    const O = P.options, I = P.getActiveElements();
    O.mouseLine && I[0] && (O.mouseLine.x = I[0].element.x), P.update();
  }, [a]);
  const c = function(P) {
    return P.length ? P[0].index : -1;
  }, d = function(P, O) {
    const I = P.canvas, R = I.getBoundingClientRect(), F = new MouseEvent("click", {
      clientX: R.left + O.x,
      clientY: R.top + O.y,
      cancelable: !0,
      bubbles: !0
    });
    I.dispatchEvent(F);
  }, h = ({
    code: P
  }) => {
    const O = i.current;
    if (O == null)
      return;
    const I = O.getActiveElements();
    if (P === "ArrowRight") {
      const R = c(I) + 1, F = R === O.data.datasets[0].data.length ? 0 : R;
      l(F);
    } else if (P === "ArrowLeft") {
      const R = c(I) - 1, F = R < 0 ? O.data.datasets[0].data.length - 1 : R;
      l(F);
    } else if (P === "Enter" && I.length) {
      const R = I[0], q = O.getDatasetMeta(R.datasetIndex).data[R.index];
      d(O, q);
    }
  }, u = [(((_ = i.current) == null ? void 0 : _.data.datasets[0].data[a]) || "unavailable").toString(), (((w = i.current) == null ? void 0 : w.data.datasets[1].data[a]) || "unavailable").toString()], f = ((v = i.current) == null ? void 0 : v.data.labels) != null ? (x = i.current) == null ? void 0 : x.data.labels[a] : "null", p = [(k = i.current) == null ? void 0 : k.data.datasets[0].label, (C = i.current) == null ? void 0 : C.data.datasets[1].label], g = a > -1 ? `${f} ${p[0]} ${u[0]}. ${p[1]} ${u[1]}.` : "";
  return Ye(Kc, {
    children: Ye(Vh, {
      className: "text",
      sx: {
        position: "relative",
        width: "100%"
      },
      children: Ye(Yb, {
        data: s,
        options: r,
        plugins: [Kb],
        "aria-label": g,
        "aria-live": "assertive",
        ref: i,
        onKeyUp: h,
        onBlur: () => l(-1),
        onFocus: () => l(0),
        tabIndex: 0
      })
    })
  });
};
qb.displayName = "LineChart";
export {
  qb as LineChart
};
