var Dc = Object.defineProperty;
var Rc = (n, t, e) => t in n ? Dc(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var R = (n, t, e) => (Rc(n, typeof t != "symbol" ? t + "" : t, e), e);
import { Box as Ic } from "@mui/material";
import * as _i from "react";
import Ta, { forwardRef as Da, useRef as vi, useEffect as Ce, useState as Oo } from "react";
import Lc from "@emotion/styled";
import "@emotion/react";
function Vn(n) {
  return n + 0.5 | 0;
}
const re = (n, t, e) => Math.max(Math.min(n, e), t);
function bn(n) {
  return re(Vn(n * 2.55), 0, 255);
}
function de(n) {
  return re(Vn(n * 255), 0, 255);
}
function Zt(n) {
  return re(Vn(n / 2.55) / 100, 0, 1);
}
function Eo(n) {
  return re(Vn(n * 100), 0, 100);
}
const $t = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ms = [..."0123456789ABCDEF"], Fc = (n) => Ms[n & 15], jc = (n) => Ms[(n & 240) >> 4] + Ms[n & 15], ei = (n) => (n & 240) >> 4 === (n & 15), zc = (n) => ei(n.r) && ei(n.g) && ei(n.b) && ei(n.a);
function Bc(n) {
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
const Wc = (n, t) => n < 255 ? t(n) : "";
function Nc(n) {
  var t = zc(n) ? Fc : jc;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + Wc(n.a, t) : void 0;
}
const $c = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ra(n, t, e) {
  const i = t * Math.min(e, 1 - e), s = (o, r = (o + n / 30) % 12) => e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Vc(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function Hc(n, t, e) {
  const i = Ra(n, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - e, i[s] += t;
  return i;
}
function Yc(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
}
function zs(n) {
  const e = n.r / 255, i = n.g / 255, s = n.b / 255, o = Math.max(e, i, s), r = Math.min(e, i, s), a = (o + r) / 2;
  let l, c, d;
  return o !== r && (d = o - r, c = a > 0.5 ? d / (2 - o - r) : d / (o + r), l = Yc(e, i, s, d, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Bs(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(de);
}
function Ws(n, t, e) {
  return Bs(Ra, n, t, e);
}
function Uc(n, t, e) {
  return Bs(Hc, n, t, e);
}
function Xc(n, t, e) {
  return Bs(Vc, n, t, e);
}
function Ia(n) {
  return (n % 360 + 360) % 360;
}
function Kc(n) {
  const t = $c.exec(n);
  let e = 255, i;
  if (!t)
    return;
  t[5] !== i && (e = t[6] ? bn(+t[5]) : de(+t[5]));
  const s = Ia(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? i = Uc(s, o, r) : t[1] === "hsv" ? i = Xc(s, o, r) : i = Ws(s, o, r), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: e
  };
}
function qc(n, t) {
  var e = zs(n);
  e[0] = Ia(e[0] + t), e = Ws(e), n.r = e[0], n.g = e[1], n.b = e[2];
}
function Gc(n) {
  if (!n)
    return;
  const t = zs(n), e = t[0], i = Eo(t[1]), s = Eo(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${Zt(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
}
const Ao = {
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
}, To = {
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
function Jc() {
  const n = {}, t = Object.keys(To), e = Object.keys(Ao);
  let i, s, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], s = 0; s < e.length; s++)
      o = e[s], a = a.replace(o, Ao[o]);
    o = parseInt(To[r], 16), n[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return n;
}
let ni;
function Zc(n) {
  ni || (ni = Jc(), ni.transparent = [0, 0, 0, 0]);
  const t = ni[n.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Qc = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function td(n) {
  const t = Qc.exec(n);
  let e = 255, i, s, o;
  if (!!t) {
    if (t[7] !== i) {
      const r = +t[7];
      e = t[8] ? bn(r) : re(r * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? bn(i) : re(i, 0, 255)), s = 255 & (t[4] ? bn(s) : re(s, 0, 255)), o = 255 & (t[6] ? bn(o) : re(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: e
    };
  }
}
function ed(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Zt(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`);
}
const is = (n) => n <= 31308e-7 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055, Be = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
function nd(n, t, e) {
  const i = Be(Zt(n.r)), s = Be(Zt(n.g)), o = Be(Zt(n.b));
  return {
    r: de(is(i + e * (Be(Zt(t.r)) - i))),
    g: de(is(s + e * (Be(Zt(t.g)) - s))),
    b: de(is(o + e * (Be(Zt(t.b)) - o))),
    a: n.a + e * (t.a - n.a)
  };
}
function ii(n, t, e) {
  if (n) {
    let i = zs(n);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = Ws(i), n.r = i[0], n.g = i[1], n.b = i[2];
  }
}
function La(n, t) {
  return n && Object.assign(t || {}, n);
}
function Do(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n) ? n.length >= 3 && (t = { r: n[0], g: n[1], b: n[2], a: 255 }, n.length > 3 && (t.a = de(n[3]))) : (t = La(n, { r: 0, g: 0, b: 0, a: 1 }), t.a = de(t.a)), t;
}
function id(n) {
  return n.charAt(0) === "r" ? td(n) : Kc(n);
}
class In {
  constructor(t) {
    if (t instanceof In)
      return t;
    const e = typeof t;
    let i;
    e === "object" ? i = Do(t) : e === "string" && (i = Bc(t) || Zc(t) || id(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = La(this._rgb);
    return t && (t.a = Zt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Do(t);
  }
  rgbString() {
    return this._valid ? ed(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Nc(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Gc(this._rgb) : void 0;
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
    return t && (this._rgb = nd(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new In(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = de(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = Vn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return qc(this._rgb, t), this;
  }
}
function qt() {
}
const sd = (() => {
  let n = 0;
  return () => n++;
})();
function et(n) {
  return n === null || typeof n > "u";
}
function lt(n) {
  if (Array.isArray && Array.isArray(n))
    return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function X(n) {
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
const od = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t, Fa = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 * t : +n;
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
  else if (X(n))
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
  if (X(n)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(n), i = e.length;
    let s = 0;
    for (; s < i; ++s)
      t[e[s]] = Si(n[e[s]]);
    return t;
  }
  return n;
}
function ja(n) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(n) === -1;
}
function rd(n, t, e, i) {
  if (!ja(n))
    return;
  const s = t[n], o = e[n];
  X(s) && X(o) ? Ln(s, o, i) : t[n] = Si(o);
}
function Ln(n, t, e) {
  const i = lt(t) ? t : [
    t
  ], s = i.length;
  if (!X(n))
    return n;
  e = e || {};
  const o = e.merger || rd;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = i[a], !X(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, d = l.length; c < d; ++c)
      o(l[c], n, r, e);
  }
  return n;
}
function Sn(n, t) {
  return Ln(n, t, {
    merger: ad
  });
}
function ad(n, t, e) {
  if (!ja(n))
    return;
  const i = t[n], s = e[n];
  X(i) && X(s) ? Sn(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Si(s));
}
const Ro = {
  "": (n) => n,
  x: (n) => n.x,
  y: (n) => n.y
};
function ld(n) {
  const t = n.split("."), e = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
  return e;
}
function cd(n) {
  const t = ld(n);
  return (e) => {
    for (const i of t) {
      if (i === "")
        break;
      e = e && e[i];
    }
    return e;
  };
}
function ge(n, t) {
  return (Ro[t] || (Ro[t] = cd(t)))(n);
}
function Ns(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const St = (n) => typeof n < "u", pe = (n) => typeof n == "function", Io = (n, t) => {
  if (n.size !== t.size)
    return !1;
  for (const e of n)
    if (!t.has(e))
      return !1;
  return !0;
};
function dd(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const it = Math.PI, ht = 2 * it, ud = ht + it, ki = Number.POSITIVE_INFINITY, za = it / 180, _t = it / 2, we = it / 4, Lo = it * 2 / 3, ae = Math.log10, Xt = Math.sign;
function kn(n, t, e) {
  return Math.abs(n - t) < e;
}
function Fo(n) {
  const t = Math.round(n);
  n = kn(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(ae(n))), i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function hd(n) {
  const t = [], e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++)
    n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function qe(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function fd(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function Ba(n, t, e) {
  let i, s, o;
  for (i = 0, s = n.length; i < s; i++)
    o = n[i][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Mt(n) {
  return n * (it / 180);
}
function Fi(n) {
  return n * (180 / it);
}
function jo(n) {
  if (!gt(n))
    return;
  let t = 1, e = 0;
  for (; Math.round(n * t) / t !== n; )
    t *= 10, e++;
  return e;
}
function Wa(n, t) {
  const e = t.x - n.x, i = t.y - n.y, s = Math.sqrt(e * e + i * i);
  let o = Math.atan2(i, e);
  return o < -0.5 * it && (o += ht), {
    angle: o,
    distance: s
  };
}
function Fn(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function gd(n, t) {
  return (n - t + ud) % ht - it;
}
function jt(n) {
  return (n % ht + ht) % ht;
}
function jn(n, t, e, i) {
  const s = jt(n), o = jt(t), r = jt(e), a = jt(o - s), l = jt(r - s), c = jt(s - o), d = jt(s - r);
  return s === o || s === r || i && o === r || a > l && c < d;
}
function Pt(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function pd(n) {
  return Pt(n, -32768, 32767);
}
function Qt(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function $s(n, t, e) {
  e = e || ((r) => n[r] < t);
  let i = n.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, e(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const te = (n, t, e, i) => $s(n, e, i ? (s) => {
  const o = n[s][t];
  return o < e || o === e && n[s + 1][t] === e;
} : (s) => n[s][t] < e), md = (n, t, e) => $s(n, e, (i) => n[i][t] >= e);
function bd(n, t, e) {
  let i = 0, s = n.length;
  for (; i < s && n[i] < t; )
    i++;
  for (; s > i && n[s - 1] > e; )
    s--;
  return i > 0 || s < n.length ? n.slice(i, s) : n;
}
const Na = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function yd(n, t) {
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
  }), Na.forEach((e) => {
    const i = "_onData" + Ns(e), s = n[e];
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
function zo(n, t) {
  const e = n._chartjs;
  if (!e)
    return;
  const i = e.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (Na.forEach((o) => {
    delete n[o];
  }), delete n._chartjs);
}
function $a(n) {
  const t = /* @__PURE__ */ new Set();
  let e, i;
  for (e = 0, i = n.length; e < i; ++e)
    t.add(n[e]);
  return t.size === i ? n : Array.from(t);
}
const Va = function() {
  return typeof window > "u" ? function(n) {
    return n();
  } : window.requestAnimationFrame;
}();
function Ha(n, t) {
  let e = [], i = !1;
  return function(...s) {
    e = s, i || (i = !0, Va.call(window, () => {
      i = !1, n.apply(t, e);
    }));
  };
}
function xd(n, t) {
  let e;
  return function(...i) {
    return t ? (clearTimeout(e), e = setTimeout(n, t, i)) : n.apply(this, i), t;
  };
}
const Vs = (n) => n === "start" ? "left" : n === "end" ? "right" : "center", Tt = (n, t, e) => n === "start" ? t : n === "end" ? e : (t + e) / 2, _d = (n, t, e, i) => n === (i ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function Ya(n, t, e) {
  const i = t.length;
  let s = 0, o = i;
  if (n._sorted) {
    const { iScale: r, _parsed: a } = n, l = r.axis, { min: c, max: d, minDefined: u, maxDefined: h } = r.getUserBounds();
    u && (s = Pt(Math.min(
      te(a, r.axis, c).lo,
      e ? i : te(t, l, r.getPixelForValue(c)).lo
    ), 0, i - 1)), h ? o = Pt(Math.max(
      te(a, r.axis, d, !0).hi + 1,
      e ? 0 : te(t, l, r.getPixelForValue(d), !0).hi + 1
    ), s, i) - s : o = i - s;
  }
  return {
    start: s,
    count: o
  };
}
function Ua(n) {
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
const si = (n) => n === 0 || n === 1, Bo = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * ht / e)), Wo = (n, t, e) => Math.pow(2, -10 * n) * Math.sin((n - t) * ht / e) + 1, Mn = {
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
  easeInElastic: (n) => si(n) ? n : Bo(n, 0.075, 0.3),
  easeOutElastic: (n) => si(n) ? n : Wo(n, 0.075, 0.3),
  easeInOutElastic(n) {
    return si(n) ? n : n < 0.5 ? 0.5 * Bo(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * Wo(n * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (n) => 1 - Mn.easeOutBounce(1 - n),
  easeOutBounce(n) {
    return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  },
  easeInOutBounce: (n) => n < 0.5 ? Mn.easeInBounce(n * 2) * 0.5 : Mn.easeOutBounce(n * 2 - 1) * 0.5 + 0.5
};
function Xa(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function No(n) {
  return Xa(n) ? n : new In(n);
}
function ss(n) {
  return Xa(n) ? n : new In(n).saturate(0.5).darken(0.1).hexString();
}
const vd = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], wd = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Sd(n) {
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
      properties: wd
    },
    numbers: {
      type: "number",
      properties: vd
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
function kd(n) {
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
const $o = /* @__PURE__ */ new Map();
function Md(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = $o.get(e);
  return i || (i = new Intl.NumberFormat(n, t), $o.set(e, i)), i;
}
function Hn(n, t, e) {
  return Md(t, e).format(n);
}
const Ka = {
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
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = Cd(n, e);
    }
    const r = ae(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), Hn(n, i, l);
  },
  logarithmic(n, t, e) {
    if (n === 0)
      return "0";
    const i = e[t].significand || n / Math.pow(10, Math.floor(ae(n)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * e.length ? Ka.numeric.call(this, n, t, e) : "";
  }
};
function Cd(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var ji = {
  formatters: Ka
};
function Pd(n) {
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
      callback: ji.formatters.values,
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
const De = /* @__PURE__ */ Object.create(null), Cs = /* @__PURE__ */ Object.create(null);
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
function os(n, t, e) {
  return typeof t == "string" ? Ln(Cn(n, t), e) : Ln(Cn(n, ""), t);
}
class Od {
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
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => ss(s.backgroundColor), this.hoverBorderColor = (i, s) => ss(s.borderColor), this.hoverColor = (i, s) => ss(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return os(this, t, e);
  }
  get(t) {
    return Cn(this, t);
  }
  describe(t, e) {
    return os(Cs, t, e);
  }
  override(t, e) {
    return os(De, t, e);
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
          return X(l) ? Object.assign({}, c, l) : W(l, c);
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
var pt = new Od({
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
  Sd,
  kd,
  Pd
]);
function Ed(n) {
  return !n || et(n.size) || et(n.family) ? null : (n.style ? n.style + " " : "") + (n.weight ? n.weight + " " : "") + n.size + "px " + n.family;
}
function Mi(n, t, e, i, s) {
  let o = t[s];
  return o || (o = t[s] = n.measureText(s).width, e.push(s)), o > i && (i = o), i;
}
function Ad(n, t, e, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), n.save(), n.font = t;
  let r = 0;
  const a = e.length;
  let l, c, d, u, h;
  for (l = 0; l < a; l++)
    if (u = e[l], u != null && lt(u) !== !0)
      r = Mi(n, s, o, r, u);
    else if (lt(u))
      for (c = 0, d = u.length; c < d; c++)
        h = u[c], h != null && !lt(h) && (r = Mi(n, s, o, r, h));
  n.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function Se(n, t, e) {
  const i = n.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function Vo(n, t) {
  t = t || n.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore();
}
function Ci(n, t, e, i) {
  qa(n, t, e, i, null);
}
function qa(n, t, e, i, s) {
  let o, r, a, l, c, d, u, h;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * za;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    n.save(), n.translate(e, i), n.rotate(m), n.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), n.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (n.beginPath(), f) {
      default:
        s ? n.ellipse(e, i, s / 2, g, 0, 0, ht) : n.arc(e, i, g, 0, ht), n.closePath();
        break;
      case "triangle":
        d = s ? s / 2 : g, n.moveTo(e + Math.sin(m) * d, i - Math.cos(m) * g), m += Lo, n.lineTo(e + Math.sin(m) * d, i - Math.cos(m) * g), m += Lo, n.lineTo(e + Math.sin(m) * d, i - Math.cos(m) * g), n.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, r = Math.cos(m + we) * l, u = Math.cos(m + we) * (s ? s / 2 - c : l), a = Math.sin(m + we) * l, h = Math.sin(m + we) * (s ? s / 2 - c : l), n.arc(e - u, i - a, c, m - it, m - _t), n.arc(e + h, i - r, c, m - _t, m), n.arc(e + u, i + a, c, m, m + _t), n.arc(e - h, i + r, c, m + _t, m + it), n.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * g, d = s ? s / 2 : l, n.rect(e - d, i - l, 2 * d, 2 * l);
          break;
        }
        m += we;
      case "rectRot":
        u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - u, i - a), n.lineTo(e + h, i - r), n.lineTo(e + u, i + a), n.lineTo(e - h, i + r), n.closePath();
        break;
      case "crossRot":
        m += we;
      case "cross":
        u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - u, i - a), n.lineTo(e + u, i + a), n.moveTo(e + h, i - r), n.lineTo(e - h, i + r);
        break;
      case "star":
        u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - u, i - a), n.lineTo(e + u, i + a), n.moveTo(e + h, i - r), n.lineTo(e - h, i + r), m += we, u = Math.cos(m) * (s ? s / 2 : g), r = Math.cos(m) * g, a = Math.sin(m) * g, h = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - u, i - a), n.lineTo(e + u, i + a), n.moveTo(e + h, i - r), n.lineTo(e - h, i + r);
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
function zn(n, t, e) {
  return e = e || 0.5, !t || n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e;
}
function Yn(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function Un(n) {
  n.restore();
}
function Td(n, t, e, i, s) {
  if (!t)
    return n.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    n.lineTo(o, t.y), n.lineTo(o, e.y);
  } else
    s === "after" != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function Dd(n, t, e, i) {
  if (!t)
    return n.lineTo(e.x, e.y);
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y);
}
function Re(n, t, e, i, s, o = {}) {
  const r = lt(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (n.save(), n.font = s.string, Rd(n, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Ld(n, o.backdrop), a && (o.strokeColor && (n.strokeStyle = o.strokeColor), et(o.strokeWidth) || (n.lineWidth = o.strokeWidth), n.strokeText(c, e, i, o.maxWidth)), n.fillText(c, e, i, o.maxWidth), Id(n, e, i, c, o), i += s.lineHeight;
  n.restore();
}
function Rd(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]), et(t.rotation) || n.rotate(t.rotation), t.color && (n.fillStyle = t.color), t.textAlign && (n.textAlign = t.textAlign), t.textBaseline && (n.textBaseline = t.textBaseline);
}
function Id(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, d = s.strikethrough ? (l + c) / 2 : c;
    n.strokeStyle = n.fillStyle, n.beginPath(), n.lineWidth = s.decorationWidth || 2, n.moveTo(r, d), n.lineTo(a, d), n.stroke();
  }
}
function Ld(n, t) {
  const e = n.fillStyle;
  n.fillStyle = t.color, n.fillRect(t.left, t.top, t.width, t.height), n.fillStyle = e;
}
function Ge(n, t) {
  const { x: e, y: i, w: s, h: o, radius: r } = t;
  n.arc(e + r.topLeft, i + r.topLeft, r.topLeft, -_t, it, !0), n.lineTo(e, i + o - r.bottomLeft), n.arc(e + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, it, _t, !0), n.lineTo(e + s - r.bottomRight, i + o), n.arc(e + s - r.bottomRight, i + o - r.bottomRight, r.bottomRight, _t, 0, !0), n.lineTo(e + s, i + r.topRight), n.arc(e + s - r.topRight, i + r.topRight, r.topRight, 0, -_t, !0), n.lineTo(e + r.topLeft, i);
}
const Fd = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, jd = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function zd(n, t) {
  const e = ("" + n).match(Fd);
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
const Bd = (n) => +n || 0;
function Hs(n, t) {
  const e = {}, i = X(t), s = i ? Object.keys(t) : t, o = X(n) ? i ? (r) => W(n[r], n[t[r]]) : (r) => n[r] : () => n;
  for (const r of s)
    e[r] = Bd(o(r));
  return e;
}
function Ga(n) {
  return Hs(n, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ue(n) {
  return Hs(n, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Ct(n) {
  const t = Ga(n);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function vt(n, t) {
  n = n || {}, t = t || pt.font;
  let e = W(n.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let i = W(n.style, t.style);
  i && !("" + i).match(jd) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: W(n.family, t.family),
    lineHeight: zd(W(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: W(n.weight, t.weight),
    string: ""
  };
  return s.string = Ed(s), s;
}
function yn(n, t, e, i) {
  let s = !0, o, r, a;
  for (o = 0, r = n.length; o < r; ++o)
    if (a = n[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), s = !1), e !== void 0 && lt(a) && (a = a[e % a.length], s = !1), a !== void 0))
      return i && !s && (i.cacheable = !1), a;
}
function Wd(n, t, e) {
  const { min: i, max: s } = n, o = Fa(t, (s - i) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(i, -Math.abs(o)),
    max: r(s, o)
  };
}
function be(n, t) {
  return Object.assign(Object.create(n), t);
}
function Ys(n, t = [
  ""
], e = n, i, s = () => n[0]) {
  St(i) || (i = tl("_fallback", n));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: e,
    _fallback: i,
    _getTarget: s,
    override: (r) => Ys([
      r,
      ...n
    ], t, e, i)
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete n[0][a], !0;
    },
    get(r, a) {
      return Za(r, a, () => Kd(a, t, n, r));
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(r, a) {
      return Yo(r).includes(a);
    },
    ownKeys(r) {
      return Yo(r);
    },
    set(r, a, l) {
      const c = r._storage || (r._storage = s());
      return r[a] = c[a] = l, delete r._keys, !0;
    }
  });
}
function Je(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Ja(n, i),
    setContext: (o) => Je(n, o, e, i),
    override: (o) => Je(n.override(o), t, e, i)
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete n[r], !0;
    },
    get(o, r, a) {
      return Za(o, r, () => $d(o, r, a));
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
function Ja(n, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n;
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: pe(e) ? e : () => e,
    isIndexable: pe(i) ? i : () => i
  };
}
const Nd = (n, t) => n ? n + Ns(t) : t, Us = (n, t) => X(t) && n !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Za(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t))
    return n[t];
  const i = e();
  return n[t] = i, i;
}
function $d(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = n;
  let a = i[t];
  return pe(a) && r.isScriptable(t) && (a = Vd(t, a, n, e)), lt(a) && a.length && (a = Hd(t, a, n, r.isIndexable)), Us(t, a) && (a = Je(a, s, o && o[t], r)), a;
}
function Vd(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(n))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + n);
  return a.add(n), t = t(o, r || i), a.delete(n), Us(n, t) && (t = Xs(s._scopes, s, n, t)), t;
}
function Hd(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (St(o.index) && i(n))
    t = t[o.index % t.length];
  else if (X(t[0])) {
    const l = t, c = s._scopes.filter((d) => d !== l);
    t = [];
    for (const d of l) {
      const u = Xs(c, s, n, d);
      t.push(Je(u, o, r && r[n], a));
    }
  }
  return t;
}
function Qa(n, t, e) {
  return pe(n) ? n(t, e) : n;
}
const Yd = (n, t) => n === !0 ? t : typeof n == "string" ? ge(t, n) : void 0;
function Ud(n, t, e, i, s) {
  for (const o of t) {
    const r = Yd(e, o);
    if (r) {
      n.add(r);
      const a = Qa(r._fallback, e, s);
      if (St(a) && a !== e && a !== i)
        return a;
    } else if (r === !1 && St(i) && e !== i)
      return null;
  }
  return !1;
}
function Xs(n, t, e, i) {
  const s = t._rootScopes, o = Qa(t._fallback, e, i), r = [
    ...n,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(i);
  let l = Ho(a, r, e, o || e, i);
  return l === null || St(o) && o !== e && (l = Ho(a, r, o, l, i), l === null) ? !1 : Ys(Array.from(a), [
    ""
  ], s, o, () => Xd(t, e, i));
}
function Ho(n, t, e, i, s) {
  for (; e; )
    e = Ud(n, t, e, i, s);
  return e;
}
function Xd(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return lt(s) && X(e) ? e : s || {};
}
function Kd(n, t, e, i) {
  let s;
  for (const o of t)
    if (s = tl(Nd(o, n), e), St(s))
      return Us(n, s) ? Xs(e, i, n, s) : s;
}
function tl(n, t) {
  for (const e of t) {
    if (!e)
      continue;
    const i = e[n];
    if (St(i))
      return i;
  }
}
function Yo(n) {
  let t = n._keys;
  return t || (t = n._keys = qd(n._scopes)), t;
}
function qd(n) {
  const t = /* @__PURE__ */ new Set();
  for (const e of n)
    for (const i of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function el(n, t, e, i) {
  const { iScale: s } = n, { key: o = "r" } = this._parsing, r = new Array(i);
  let a, l, c, d;
  for (a = 0, l = i; a < l; ++a)
    c = a + e, d = t[c], r[a] = {
      r: s.parse(ge(d, o), c)
    };
  return r;
}
const Gd = Number.EPSILON || 1e-14, Ze = (n, t) => t < n.length && !n[t].skip && n[t], nl = (n) => n === "x" ? "y" : "x";
function Jd(n, t, e, i) {
  const s = n.skip ? t : n, o = t, r = e.skip ? t : e, a = Fn(o, s), l = Fn(r, o);
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
function Zd(n, t, e) {
  const i = n.length;
  let s, o, r, a, l, c = Ze(n, 0);
  for (let d = 0; d < i - 1; ++d)
    if (l = c, c = Ze(n, d + 1), !(!l || !c)) {
      if (kn(t[d], 0, Gd)) {
        e[d] = e[d + 1] = 0;
        continue;
      }
      s = e[d] / t[d], o = e[d + 1] / t[d], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[d] = s * r * t[d], e[d + 1] = o * r * t[d]);
    }
}
function Qd(n, t, e = "x") {
  const i = nl(e), s = n.length;
  let o, r, a, l = Ze(n, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = Ze(n, c + 1), !a)
      continue;
    const d = a[e], u = a[i];
    r && (o = (d - r[e]) / 3, a[`cp1${e}`] = d - o, a[`cp1${i}`] = u - o * t[c]), l && (o = (l[e] - d) / 3, a[`cp2${e}`] = d + o, a[`cp2${i}`] = u + o * t[c]);
  }
}
function tu(n, t = "x") {
  const e = nl(t), i = n.length, s = Array(i).fill(0), o = Array(i);
  let r, a, l, c = Ze(n, 0);
  for (r = 0; r < i; ++r)
    if (a = l, l = c, c = Ze(n, r + 1), !!l) {
      if (c) {
        const d = c[t] - l[t];
        s[r] = d !== 0 ? (c[e] - l[e]) / d : 0;
      }
      o[r] = a ? c ? Xt(s[r - 1]) !== Xt(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  Zd(n, s, o), Qd(n, o, t);
}
function oi(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function eu(n, t) {
  let e, i, s, o, r, a = zn(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    r = o, o = a, a = e < i - 1 && zn(n[e + 1], t), o && (s = n[e], r && (s.cp1x = oi(s.cp1x, t.left, t.right), s.cp1y = oi(s.cp1y, t.top, t.bottom)), a && (s.cp2x = oi(s.cp2x, t.left, t.right), s.cp2y = oi(s.cp2y, t.top, t.bottom)));
}
function nu(n, t, e, i, s) {
  let o, r, a, l;
  if (t.spanGaps && (n = n.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    tu(n, s);
  else {
    let c = i ? n[n.length - 1] : n[0];
    for (o = 0, r = n.length; o < r; ++o)
      a = n[o], l = Jd(c, a, n[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && eu(n, e);
}
function il() {
  return typeof window < "u" && typeof document < "u";
}
function Ks(n) {
  let t = n.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Pi(n, t, e) {
  let i;
  return typeof n == "string" ? (i = parseInt(n, 10), n.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = n, i;
}
const zi = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function iu(n, t) {
  return zi(n).getPropertyValue(t);
}
const su = [
  "top",
  "right",
  "bottom",
  "left"
];
function Te(n, t, e) {
  const i = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = su[s];
    i[o] = parseFloat(n[t + "-" + o + e]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const ou = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function ru(n, t) {
  const e = n.touches, i = e && e.length ? e[0] : n, { offsetX: s, offsetY: o } = i;
  let r = !1, a, l;
  if (ou(s, o, n.target))
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
function Pe(n, t) {
  if ("native" in n)
    return n;
  const { canvas: e, currentDevicePixelRatio: i } = t, s = zi(e), o = s.boxSizing === "border-box", r = Te(s, "padding"), a = Te(s, "border", "width"), { x: l, y: c, box: d } = ru(n, e), u = r.left + (d && a.left), h = r.top + (d && a.top);
  let { width: f, height: p } = t;
  return o && (f -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - u) / f * e.width / i),
    y: Math.round((c - h) / p * e.height / i)
  };
}
function au(n, t, e) {
  let i, s;
  if (t === void 0 || e === void 0) {
    const o = Ks(n);
    if (!o)
      t = n.clientWidth, e = n.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = zi(o), l = Te(a, "border", "width"), c = Te(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, i = Pi(a.maxWidth, o, "clientWidth"), s = Pi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: i || ki,
    maxHeight: s || ki
  };
}
const ri = (n) => Math.round(n * 10) / 10;
function lu(n, t, e, i) {
  const s = zi(n), o = Te(s, "margin"), r = Pi(s.maxWidth, n, "clientWidth") || ki, a = Pi(s.maxHeight, n, "clientHeight") || ki, l = au(n, t, e);
  let { width: c, height: d } = l;
  if (s.boxSizing === "content-box") {
    const h = Te(s, "border", "width"), f = Te(s, "padding");
    c -= f.width + h.width, d -= f.height + h.height;
  }
  return c = Math.max(0, c - o.width), d = Math.max(0, i ? c / i : d - o.height), c = ri(Math.min(c, r, l.maxWidth)), d = ri(Math.min(d, a, l.maxHeight)), c && !d && (d = ri(c / 2)), (t !== void 0 || e !== void 0) && i && l.height && d > l.height && (d = l.height, c = ri(Math.floor(d * i))), {
    width: c,
    height: d
  };
}
function Uo(n, t, e) {
  const i = t || 1, s = Math.floor(n.height * i), o = Math.floor(n.width * i);
  n.height = Math.floor(n.height), n.width = Math.floor(n.width);
  const r = n.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${n.height}px`, r.style.width = `${n.width}px`), n.currentDevicePixelRatio !== i || r.height !== s || r.width !== o ? (n.currentDevicePixelRatio = i, r.height = s, r.width = o, n.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const cu = function() {
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
function Xo(n, t) {
  const e = iu(n, t), i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function Oe(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: n.y + e * (t.y - n.y)
  };
}
function du(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === "middle" ? e < 0.5 ? n.y : t.y : i === "after" ? e < 1 ? n.y : t.y : e > 0 ? t.y : n.y
  };
}
function uu(n, t, e, i) {
  const s = {
    x: n.cp2x,
    y: n.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Oe(n, s, e), a = Oe(s, o, e), l = Oe(o, t, e), c = Oe(r, a, e), d = Oe(a, l, e);
  return Oe(c, d, e);
}
const hu = function(n, t) {
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
}, fu = function() {
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
function Ue(n, t, e) {
  return n ? hu(t, e) : fu();
}
function sl(n, t) {
  let e, i;
  (t === "ltr" || t === "rtl") && (e = n.canvas.style, i = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), n.prevTextDirection = i);
}
function ol(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty("direction", t[0], t[1]));
}
function rl(n) {
  return n === "angle" ? {
    between: jn,
    compare: gd,
    normalize: jt
  } : {
    between: Qt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Ko({ start: n, end: t, count: e, loop: i, style: s }) {
  return {
    start: n % e,
    end: t % e,
    loop: i && (t - n + 1) % e === 0,
    style: s
  };
}
function gu(n, t, e) {
  const { property: i, start: s, end: o } = e, { between: r, normalize: a } = rl(i), l = t.length;
  let { start: c, end: d, loop: u } = n, h, f;
  if (u) {
    for (c += l, d += l, h = 0, f = l; h < f && r(a(t[c % l][i]), s, o); ++h)
      c--, d--;
    c %= l, d %= l;
  }
  return d < c && (d += l), {
    start: c,
    end: d,
    loop: u,
    style: n.style
  };
}
function al(n, t, e) {
  if (!e)
    return [
      n
    ];
  const { property: i, start: s, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = rl(i), { start: d, end: u, loop: h, style: f } = gu(n, t, e), p = [];
  let g = !1, m = null, y, _, v;
  const w = () => l(s, v, y) && a(s, v) !== 0, x = () => a(o, y) === 0 || l(o, v, y), k = () => g || w(), C = () => !g || x();
  for (let P = d, A = d; P <= u; ++P)
    _ = t[P % r], !_.skip && (y = c(_[i]), y !== v && (g = l(y, s, o), m === null && k() && (m = a(y, s) === 0 ? P : A), m !== null && C() && (p.push(Ko({
      start: m,
      end: P,
      loop: h,
      count: r,
      style: f
    })), m = null), A = P, v = y));
  return m !== null && p.push(Ko({
    start: m,
    end: u,
    loop: h,
    count: r,
    style: f
  })), p;
}
function ll(n, t) {
  const e = [], i = n.segments;
  for (let s = 0; s < i.length; s++) {
    const o = al(i[s], n.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function pu(n, t, e, i) {
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
function mu(n, t, e, i) {
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
function bu(n, t) {
  const e = n.points, i = n.options.spanGaps, s = e.length;
  if (!s)
    return [];
  const o = !!n._loop, { start: r, end: a } = pu(e, s, o, i);
  if (i === !0)
    return qo(n, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + s : a, c = !!n._fullLoop && r === 0 && a === s - 1;
  return qo(n, mu(e, r, l, c), e, t);
}
function qo(n, t, e, i) {
  return !i || !i.setContext || !e ? t : yu(n, t, e, i);
}
function yu(n, t, e, i) {
  const s = n._chart.getContext(), o = Go(n.options), { _datasetIndex: r, options: { spanGaps: a } } = n, l = e.length, c = [];
  let d = o, u = t[0].start, h = u;
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
      }), d = y, u = g % l);
    }
  }
  for (const p of t) {
    u = a ? u : p.start;
    let g = e[u % l], m;
    for (h = u + 1; h <= p.end; h++) {
      const y = e[h % l];
      m = Go(i.setContext(be(s, {
        type: "segment",
        p0: g,
        p1: y,
        p0DataIndex: (h - 1) % l,
        p1DataIndex: h % l,
        datasetIndex: r
      }))), xu(m, d) && f(u, h - 1, p.loop, d), g = y, d = m;
    }
    u < h - 1 && f(u, h - 1, p.loop, d);
  }
  return c;
}
function Go(n) {
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
function xu(n, t) {
  return t && JSON.stringify(n) !== JSON.stringify(t);
}
class _u {
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
    this._request || (this._running = !0, this._request = Va.call(window, () => {
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
var Gt = new _u();
const Jo = "transparent", vu = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = No(n || Jo), s = i.valid && No(t || Jo);
    return s && s.valid ? s.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class wu {
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
    this._active = !0, this._fn = t.fn || vu[t.type || typeof r], this._easing = Mn[t.easing] || Mn.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = r, this._to = s, this._promises = void 0;
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
class qs {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!X(t))
      return;
    const e = Object.keys(pt.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!X(o))
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
    const i = e.options, s = ku(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && Su(t.options.$animations, i).then(() => {
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
      o[c] = u = new wu(h, t, c, d), s.push(u);
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
function Su(n, t) {
  const e = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function ku(n, t) {
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
function Zo(n, t) {
  const e = n && n.options || {}, i = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function Mu(n, t, e) {
  if (e === !1)
    return !1;
  const i = Zo(n, e), s = Zo(t, e);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function Cu(n) {
  let t, e, i, s;
  return X(n) ? (t = n.top, e = n.right, i = n.bottom, s = n.left) : t = e = i = s = n, {
    top: t,
    right: e,
    bottom: i,
    left: s,
    disabled: n === !1
  };
}
function cl(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    e.push(i[s].index);
  return e;
}
function Qo(n, t, e, i = {}) {
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
function Pu(n) {
  const t = Object.keys(n), e = new Array(t.length);
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i)
    o = t[i], e[i] = {
      x: o,
      y: n[o]
    };
  return e;
}
function tr(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Ou(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Eu(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function Au(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function er(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function nr(n, t) {
  const { chart: e, _cachedMeta: i } = n, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = i, l = o.axis, c = r.axis, d = Ou(o, r, i), u = t.length;
  let h;
  for (let f = 0; f < u; ++f) {
    const p = t[f], { [l]: g, [c]: m } = p, y = p._stacks || (p._stacks = {});
    h = y[c] = Au(s, d, g), h[a] = m, h._top = er(h, r, !0, i.type), h._bottom = er(h, r, !1, i.type);
    const _ = h._visualValues || (h._visualValues = {});
    _[a] = m;
  }
}
function rs(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function Tu(n, t) {
  return be(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Du(n, t, e) {
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
function cn(n, t) {
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
const as = (n) => n === "reset" || n === "none", ir = (n, t) => t ? n : Object.assign({}, n), Ru = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: cl(e, !0),
  values: null
};
class Vt {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = tr(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && cn(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (u, h, f, p) => u === "x" ? h : u === "r" ? p : f, o = e.xAxisID = W(i.xAxisID, rs(t, "x")), r = e.yAxisID = W(i.yAxisID, rs(t, "y")), a = e.rAxisID = W(i.rAxisID, rs(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, r, a), d = e.vAxisID = s(l, r, o, a);
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
    this._data && zo(this._data, this), t._stacked && cn(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (X(e))
      this._data = Pu(e);
    else if (i !== e) {
      if (i) {
        zo(i, this);
        const s = this._cachedMeta;
        cn(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && yd(e, this), this._syncList = [], this._data = e;
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
    e._stacked = tr(e.vScale, e), e.stack !== i.stack && (s = !0, cn(e), e.stack = i.stack), this._resyncElements(t), (s || o !== e._stacked) && nr(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: r } = i, a = o.axis;
    let l = t === 0 && e === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], d, u, h;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, h = s;
    else {
      lt(s[t]) ? h = this.parseArrayData(i, s, t, e) : X(s[t]) ? h = this.parseObjectData(i, s, t, e) : h = this.parsePrimitiveData(i, s, t, e);
      const f = () => u[a] === null || c && u[a] < c[a];
      for (d = 0; d < e; ++d)
        i._parsed[d + t] = u = h[d], l && (f() && (l = !1), c = u);
      i._sorted = l;
    }
    r && nr(this, h);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), d = o === r, u = new Array(s);
    let h, f, p;
    for (h = 0, f = s; h < f; ++h)
      p = h + i, u[h] = {
        [a]: d || o.parse(c[p], p),
        [l]: r.parse(e[p], p)
      };
    return u;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, d, u;
    for (l = 0, c = s; l < c; ++l)
      d = l + i, u = e[d], a[l] = {
        x: o.parse(u[0], d),
        y: r.parse(u[1], d)
      };
    return a;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let d, u, h, f;
    for (d = 0, u = s; d < u; ++d)
      h = d + i, f = e[h], c[d] = {
        x: o.parse(ge(f, a), h),
        y: r.parse(ge(f, l), h)
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
      keys: cl(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Qo(a, r, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let r = o === null ? NaN : o;
    const a = s && i._stacks[e.axis];
    s && a && (s.values = a, r = Qo(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, r = s.length, a = this._getOtherScale(t), l = Ru(e, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: d, max: u } = Eu(a);
    let h, f;
    function p() {
      f = s[h];
      const g = f[a.axis];
      return !gt(f[t.axis]) || d > g || u < g;
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
    this.update(t || "default"), e._clip = Cu(W(this.options.clip, Mu(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let d;
    for (i.dataset && i.dataset.draw(t, o, a, l), d = a; d < a + l; ++d) {
      const u = s[d];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
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
      o = r.$context || (r.$context = Du(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Tu(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
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
      return ir(a, l);
    const c = this.chart.config, d = c.datasetElementScopeKeys(this._type, t), u = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], h = c.getOptionScopes(this.getDataset(), d), f = Object.keys(pt.elements[t]), p = () => this.getContext(i, s, e), g = c.resolveNamedOptions(h, f, p, u);
    return g.$shared && (g.$shared = l, o[r] = Object.freeze(ir(g, l))), g;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const d = this.chart.config, u = d.datasetAnimationScopeKeys(this._type, e), h = d.getOptionScopes(this.getDataset(), u);
      l = d.createResolver(h, this.getContext(t, i, e));
    }
    const c = new qs(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (!!t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || as(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(i), r = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, i, s) {
    as(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !as(e) && this._resolveAnimations(void 0, e).update(t, i);
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
      i._stacked && cn(i, s);
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
R(Vt, "defaults", {}), R(Vt, "datasetElementType", null), R(Vt, "dataElementType", null);
function Iu(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++)
      i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = $a(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function Lu(n) {
  const t = n.iScale, e = Iu(t, n.type);
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
function Fu(n, t, e, i) {
  const s = e.barThickness;
  let o, r;
  return et(s) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = s * i, r = 1), {
    chunk: o / i,
    ratio: r,
    start: t.pixels[n] - o / 2
  };
}
function ju(n, t, e, i) {
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
function zu(n, t, e, i) {
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
function dl(n, t, e, i) {
  return lt(n) ? zu(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function sr(n, t, e, i) {
  const s = n.iScale, o = n.vScale, r = s.getLabels(), a = s === o, l = [];
  let c, d, u, h;
  for (c = e, d = e + i; c < d; ++c)
    h = t[c], u = {}, u[s.axis] = a || s.parse(r[c], c), l.push(dl(h, u, o, c));
  return l;
}
function ls(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Bu(n, t, e) {
  return n !== 0 ? Xt(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Wu(n) {
  let t, e, i, s, o;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function Nu(n, t, e, i) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: d } = Wu(n);
  s === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? s = c : (e._bottom || 0) === i ? s = d : (o[or(d, r, a, l)] = !0, s = c)), o[or(s, r, a, l)] = !0, n.borderSkipped = o;
}
function or(n, t, e, i) {
  return i ? (n = $u(n, t, e), n = rr(n, e, t)) : n = rr(n, t, e), n;
}
function $u(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function rr(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function Vu(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Pn extends Vt {
  parsePrimitiveData(t, e, i, s) {
    return sr(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return sr(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, d = r.axis === "x" ? a : l, u = [];
    let h, f, p, g;
    for (h = i, f = i + s; h < f; ++h)
      g = e[h], p = {}, p[o.axis] = o.parse(ge(g, c), h), u.push(dl(ge(g, d), p, r, h));
    return u;
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
    const e = this._cachedMeta, { iScale: i, vScale: s } = e, o = this.getParsed(t), r = o._custom, a = ls(r) ? "[" + r.start + ", " + r.end + "]" : "" + s.getLabelForValue(o[s.axis]);
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
    const o = s === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), d = this._getRuler(), { sharedOptions: u, includeOptions: h } = this._getSharedOptions(e, s);
    for (let f = e; f < e + i; f++) {
      const p = this.getParsed(f), g = o || et(p[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, d), y = (p._stacks || {})[a.axis], _ = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !y || ls(p._custom) || r === y._top || r === y._bottom,
        x: c ? g.head : m.center,
        y: c ? m.center : g.head,
        height: c ? m.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : m.size
      };
      h && (_.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const v = _.options || t[f].options;
      Nu(_, v, y, r), Vu(_, v, d.ratio), this.updateElement(t[f], f, _, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped), o = i.options.stacked, r = [], a = (l) => {
      const c = l.controller.getParsed(e), d = c && c[l.vScale.axis];
      if (et(d) || isNaN(d))
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
      min: a || Lu(e),
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
    const { _cachedMeta: { vScale: e, _stacked: i, index: s }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, d = ls(c);
    let u = l[e.axis], h = 0, f = i ? this.applyStack(e, l, i) : u, p, g;
    f !== u && (h = f - u, f = u), d && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && Xt(u) !== Xt(c.barEnd) && (h = 0), h += u);
    const m = !et(o) && !d ? o : h;
    let y = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? p = e.getPixelForValue(h + f) : p = y, g = p - y, Math.abs(g) < r) {
      g = Bu(g, e, a) * r, u === a && (y -= g / 2);
      const _ = e.getPixelForDecimal(0), v = e.getPixelForDecimal(1), w = Math.min(_, v), x = Math.max(_, v);
      y = Math.max(Math.min(y, x), w), p = y + g, i && !d && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(p) - e.getValueForPixel(y));
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
      const c = o ? this._getStackCount(t) : e.stackCount, d = s.barThickness === "flex" ? ju(t, e, s, c) : Fu(t, e, s, c), u = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = d.start + d.chunk * u + d.chunk / 2, l = Math.min(r, d.chunk * d.ratio);
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
R(Pn, "id", "bar"), R(Pn, "defaults", {
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
}), R(Pn, "overrides", {
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
class On extends Vt {
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
    const o = s === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s), d = r.axis, u = a.axis;
    for (let h = e; h < e + i; h++) {
      const f = t[h], p = !o && this.getParsed(h), g = {}, m = g[d] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(p[d]), y = g[u] = o ? a.getBasePixel() : a.getPixelForValue(p[u]);
      g.skip = isNaN(m) || isNaN(y), c && (g.options = l || this.resolveDataElementOptions(h, f.active ? "active" : s), o && (g.options.radius = 0)), this.updateElement(f, h, g, s);
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
R(On, "id", "bubble"), R(On, "defaults", {
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
}), R(On, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function Hu(n, t, e) {
  let i = 1, s = 1, o = 0, r = 0;
  if (t < ht) {
    const a = n, l = a + t, c = Math.cos(a), d = Math.sin(a), u = Math.cos(l), h = Math.sin(l), f = (v, w, x) => jn(v, a, l, !0) ? 1 : Math.max(w, w * e, x, x * e), p = (v, w, x) => jn(v, a, l, !0) ? -1 : Math.min(w, w * e, x, x * e), g = f(0, c, u), m = f(_t, d, h), y = p(it, c, u), _ = p(it + _t, d, h);
    i = (g - y) / 2, s = (m - _) / 2, o = -(g + y) / 2, r = -(m + _) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class le extends Vt {
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
      if (X(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +ge(i[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return Mt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Mt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ht, e = -ht;
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
    const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - r) / 2, 0), l = Math.min(od(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: d, rotation: u } = this._getRotationExtents(), { ratioX: h, ratioY: f, offsetX: p, offsetY: g } = Hu(u, d, l), m = (i.width - r) / h, y = (i.height - r) / f, _ = Math.max(Math.min(m, y) / 2, 0), v = Fa(this.options.radius, _), w = Math.max(v * l, 0), x = (v - w) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * v, this.offsetY = g * v, s.total = this.calculateTotal(), this.outerRadius = v - x * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - x * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / ht);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, d = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, h = o && c.animateScale, f = h ? 0 : this.innerRadius, p = h ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: m } = this._getSharedOptions(e, s);
    let y = this._getRotation(), _;
    for (_ = 0; _ < e; ++_)
      y += this._circumference(_, o);
    for (_ = e; _ < e + i; ++_) {
      const v = this._circumference(_, o), w = t[_], x = {
        x: d + this.offsetX,
        y: u + this.offsetY,
        startAngle: y,
        endAngle: y + v,
        circumference: v,
        outerRadius: p,
        innerRadius: f
      };
      m && (x.options = g || this.resolveDataElementOptions(_, w.active ? "active" : s)), y += v, this.updateElement(w, _, x, s);
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
    return e > 0 && !isNaN(t) ? ht * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = Hn(e._parsed[t], i.options.locale);
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
R(le, "id", "doughnut"), R(le, "defaults", {
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
}), R(le, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing"
}), R(le, "overrides", {
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
class En extends Vt {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = Ya(e, s, r);
    this._drawStart = a, this._drawCount = l, Ua(e) && (a = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(s, a, l, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, s), h = r.axis, f = a.axis, { spanGaps: p, segment: g } = this.options, m = qe(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || s === "none", _ = e + i, v = t.length;
    let w = e > 0 && this.getParsed(e - 1);
    for (let x = 0; x < v; ++x) {
      const k = t[x], C = y ? k : {};
      if (x < e || x >= _) {
        C.skip = !0;
        continue;
      }
      const P = this.getParsed(x), A = et(P[f]), D = C[h] = r.getPixelForValue(P[h], x), I = C[f] = o || A ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, P, l) : P[f], x);
      C.skip = isNaN(D) || isNaN(I) || A, C.stop = x > 0 && Math.abs(P[h] - w[h]) > m, g && (C.parsed = P, C.raw = c.data[x]), u && (C.options = d || this.resolveDataElementOptions(x, k.active ? "active" : s)), y || this.updateElement(k, x, C, s), w = P;
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
R(En, "id", "line"), R(En, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), R(En, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class Xe extends Vt {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = Hn(e._parsed[t].r, i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, i, s) {
    return el.bind(this)(t, e, i, s);
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
    const o = s === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, d = c.xCenter, u = c.yCenter, h = c.getIndexAngle(0) - 0.5 * it;
    let f = h, p;
    const g = 360 / this.countVisibleElements();
    for (p = 0; p < e; ++p)
      f += this._computeAngle(p, s, g);
    for (p = e; p < e + i; p++) {
      const m = t[p];
      let y = f, _ = f + this._computeAngle(p, s, g), v = r.getDataVisibility(p) ? c.getDistanceFromCenterForValue(this.getParsed(p).r) : 0;
      f = _, o && (l.animateScale && (v = 0), l.animateRotate && (y = _ = h));
      const w = {
        x: d,
        y: u,
        innerRadius: 0,
        outerRadius: v,
        startAngle: y,
        endAngle: _,
        options: this.resolveDataElementOptions(p, m.active ? "active" : s)
      };
      this.updateElement(m, p, w, s);
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
    return this.chart.getDataVisibility(t) ? Mt(this.resolveDataElementOptions(t, e).angle || i) : 0;
  }
}
R(Xe, "id", "polarArea"), R(Xe, "defaults", {
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
}), R(Xe, "overrides", {
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
class Oi extends le {
}
R(Oi, "id", "pie"), R(Oi, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class An extends Vt {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(i[e.axis])
    };
  }
  parseObjectData(t, e, i, s) {
    return el.bind(this)(t, e, i, s);
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
R(An, "id", "radar"), R(An, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), R(An, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Tn extends Vt {
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = e, r = this.getParsed(t), a = s.getLabelForValue(r.x), l = o.getLabelForValue(r.y);
    return {
      label: i[t] || "",
      value: "(" + a + ", " + l + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, { data: i = [] } = e, s = this.chart._animationsDisabled;
    let { start: o, count: r } = Ya(e, i, s);
    if (this._drawStart = o, this._drawCount = r, Ua(e) && (o = 0, r = i.length), this.options.showLine) {
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
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, d = this.resolveDataElementOptions(e, s), u = this.getSharedOptions(d), h = this.includeOptions(s, u), f = r.axis, p = a.axis, { spanGaps: g, segment: m } = this.options, y = qe(g) ? g : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || s === "none";
    let v = e > 0 && this.getParsed(e - 1);
    for (let w = e; w < e + i; ++w) {
      const x = t[w], k = this.getParsed(w), C = _ ? x : {}, P = et(k[p]), A = C[f] = r.getPixelForValue(k[f], w), D = C[p] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[p], w);
      C.skip = isNaN(A) || isNaN(D) || P, C.stop = w > 0 && Math.abs(k[f] - v[f]) > y, m && (C.parsed = k, C.raw = c.data[w]), h && (C.options = u || this.resolveDataElementOptions(w, x.active ? "active" : s)), _ || this.updateElement(x, w, C, s), v = k;
    }
    this.updateSharedOptions(u, s, d);
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
R(Tn, "id", "scatter"), R(Tn, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), R(Tn, "overrides", {
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
  BarController: Pn,
  BubbleController: On,
  DoughnutController: le,
  LineController: En,
  PolarAreaController: Xe,
  PieController: Oi,
  RadarController: An,
  ScatterController: Tn
});
function ke() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Gs {
  static override(t) {
    Object.assign(Gs.prototype, t);
  }
  constructor(t) {
    this.options = t || {};
  }
  init() {
  }
  formats() {
    return ke();
  }
  parse() {
    return ke();
  }
  format() {
    return ke();
  }
  add() {
    return ke();
  }
  diff() {
    return ke();
  }
  startOf() {
    return ke();
  }
  endOf() {
    return ke();
  }
}
var Yu = {
  _date: Gs
};
function Uu(n, t, e, i) {
  const { controller: s, data: o, _sorted: r } = n, a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? md : te;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0], d = typeof c.getRange == "function" && c.getRange(t);
        if (d) {
          const u = l(o, t, e - d), h = l(o, t, e + d);
          return {
            lo: u.lo,
            hi: h.hi
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
function Xn(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: d } = o[a], { lo: u, hi: h } = Uu(o[a], t, r, s);
    for (let f = u; f <= h; ++f) {
      const p = d[f];
      p.skip || i(p, c, f);
    }
  }
}
function Xu(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, r = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function cs(n, t, e, i, s) {
  const o = [];
  return !s && !n.isPointInArea(t) || Xn(n, e, t, function(a, l, c) {
    !s && !zn(a, n.chartArea, 0) || a.inRange(t.x, t.y, i) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Ku(n, t, e, i) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: d } = r.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: u } = Wa(r, {
      x: t.x,
      y: t.y
    });
    jn(u, c, d) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Xn(n, e, t, o), s;
}
function qu(n, t, e, i, s, o) {
  let r = [];
  const a = Xu(e);
  let l = Number.POSITIVE_INFINITY;
  function c(d, u, h) {
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
        datasetIndex: u,
        index: h
      }
    ], l = m) : m === l && r.push({
      element: d,
      datasetIndex: u,
      index: h
    });
  }
  return Xn(n, e, t, c), r;
}
function ds(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === "r" && !i ? Ku(n, t, e, s) : qu(n, t, e, i, s, o);
}
function ar(n, t, e, i, s) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Xn(n, e, t, (l, c, d) => {
    l[r](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: d
    }), a = a || l.inRange(t.x, t.y, s));
  }), i && !a ? [] : o;
}
var Gu = {
  evaluateInteractionItems: Xn,
  modes: {
    index(n, t, e, i) {
      const s = Pe(t, n), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? cs(n, s, o, i, r) : ds(n, s, o, !1, i, r), l = [];
      return a.length ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
        const d = a[0].index, u = c.data[d];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: d
        });
      }), l) : [];
    },
    dataset(n, t, e, i) {
      const s = Pe(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? cs(n, s, o, i, r) : ds(n, s, o, !1, i, r);
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
      const s = Pe(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return cs(n, s, o, i, r);
    },
    nearest(n, t, e, i) {
      const s = Pe(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return ds(n, s, o, e.intersect, i, r);
    },
    x(n, t, e, i) {
      const s = Pe(t, n);
      return ar(n, s, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const s = Pe(t, n);
      return ar(n, s, "y", e.intersect, i);
    }
  }
};
const ul = [
  "left",
  "top",
  "right",
  "bottom"
];
function dn(n, t) {
  return n.filter((e) => e.pos === t);
}
function lr(n, t) {
  return n.filter((e) => ul.indexOf(e.pos) === -1 && e.box.axis === t);
}
function un(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e, o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Ju(n) {
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
function Zu(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !ul.includes(s))
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
function Qu(n, t) {
  const e = Zu(n), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = n.length; o < r; ++o) {
    a = n[o];
    const { fullSize: l } = a.box, c = e[a.stack], d = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = d ? d * i : l && t.availableWidth, a.height = s) : (a.width = i, a.height = d ? d * s : l && t.availableHeight);
  }
  return e;
}
function th(n) {
  const t = Ju(n), e = un(t.filter((c) => c.box.fullSize), !0), i = un(dn(t, "left"), !0), s = un(dn(t, "right")), o = un(dn(t, "top"), !0), r = un(dn(t, "bottom")), a = lr(t, "x"), l = lr(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: dn(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function cr(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function hl(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function eh(n, t, e, i) {
  const { pos: s, box: o } = e, r = n.maxPadding;
  if (!X(s)) {
    e.size && (n[s] -= e.size);
    const u = i[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, n[s] += e.size;
  }
  o.getPadding && hl(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - cr(r, n, "left", "right")), l = Math.max(0, t.outerHeight - cr(r, n, "top", "bottom")), c = a !== n.w, d = l !== n.h;
  return n.w = a, n.h = l, e.horizontal ? {
    same: c,
    other: d
  } : {
    same: d,
    other: c
  };
}
function nh(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return n[i] += s, s;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function ih(n, t) {
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
    a = n[o], l = a.box, l.update(a.width || t.w, a.height || t.h, ih(a.horizontal, t));
    const { same: u, other: h } = eh(t, e, a, i);
    c |= u && s.length, d = d || h, l.fullSize || s.push(a);
  }
  return c && xn(s, t, e, i) || d;
}
function ai(n, t, e, i, s) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + s, n.width = i, n.height = s;
}
function dr(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of n) {
    const l = a.box, c = i[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, d = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * d, h = c.size || l.height;
      St(c.start) && (r = c.start), l.fullSize ? ai(l, s.left, r, e.outerWidth - s.right - s.left, h) : ai(l, t.left + c.placed, r, u, h), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * d, h = c.size || l.width;
      St(c.start) && (o = c.start), l.fullSize ? ai(l, o, s.top, h, e.outerHeight - s.bottom - s.top) : ai(l, o, t.top + c.placed, h, u), c.start = o, c.placed += u, o = l.right;
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
    const s = Ct(n.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(e - s.height, 0), a = th(n.boxes), l = a.vertical, c = a.horizontal;
    at(n.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const d = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / d,
      hBoxMaxHeight: r / 2
    }), h = Object.assign({}, s);
    hl(h, Ct(i));
    const f = Object.assign({
      maxPadding: h,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), p = Qu(l.concat(c), u);
    xn(a.fullSize, f, u, p), xn(l, f, u, p), xn(c, f, u, p) && xn(l, f, u, p), nh(f), dr(a.leftAndTop, f, u, p), f.x += f.w, f.y += f.h, dr(a.rightAndBottom, f, u, p), n.chartArea = {
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
class fl {
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
class sh extends fl {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const pi = "$chartjs", oh = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, ur = (n) => n === null || n === "";
function rh(n, t) {
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
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", ur(s)) {
    const o = Xo(n, "width");
    o !== void 0 && (n.width = o);
  }
  if (ur(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const o = Xo(n, "height");
      o !== void 0 && (n.height = o);
    }
  return n;
}
const gl = cu ? {
  passive: !0
} : !1;
function ah(n, t, e) {
  n.addEventListener(t, e, gl);
}
function lh(n, t, e) {
  n.canvas.removeEventListener(t, e, gl);
}
function ch(n, t) {
  const e = oh[n.type] || n.type, { x: i, y: s } = Pe(n, t);
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
function dh(n, t, e) {
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
function uh(n, t, e) {
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
const Bn = /* @__PURE__ */ new Map();
let hr = 0;
function pl() {
  const n = window.devicePixelRatio;
  n !== hr && (hr = n, Bn.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function hh(n, t) {
  Bn.size || window.addEventListener("resize", pl), Bn.set(n, t);
}
function fh(n) {
  Bn.delete(n), Bn.size || window.removeEventListener("resize", pl);
}
function gh(n, t, e) {
  const i = n.canvas, s = i && Ks(i);
  if (!s)
    return;
  const o = Ha((a, l) => {
    const c = s.clientWidth;
    e(a, l), c < s.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, d = l.contentRect.height;
    c === 0 && d === 0 || o(c, d);
  });
  return r.observe(s), hh(n, o), r;
}
function us(n, t, e) {
  e && e.disconnect(), t === "resize" && fh(n);
}
function ph(n, t, e) {
  const i = n.canvas, s = Ha((o) => {
    n.ctx !== null && e(ch(o, n));
  }, n);
  return ah(i, t, s), s;
}
class mh extends fl {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (rh(t, e), i) : null;
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
      et(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[pi], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: dh,
      detach: uh,
      resize: gh
    }[e] || ph;
    s[e] = r(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), s = i[e];
    if (!s)
      return;
    ({
      attach: us,
      detach: us,
      resize: us
    }[e] || lh)(t, e, s), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return lu(t, e, i, s);
  }
  isAttached(t) {
    const e = Ks(t);
    return !!(e && e.isConnected);
  }
}
function bh(n) {
  return !il() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? sh : mh;
}
class Et {
  constructor() {
    R(this, "active", !1);
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
    return qe(this.x) && qe(this.y);
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
R(Et, "defaults", {}), R(Et, "defaultRoutes");
function yh(n, t) {
  const e = n.options.ticks, i = xh(n), s = Math.min(e.maxTicksLimit || i, i), o = e.major.enabled ? vh(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return wh(t, c, o, r / s), c;
  const d = _h(o, t, s);
  if (r > 0) {
    let u, h;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (li(t, c, d, et(f) ? 0 : a - f, a), u = 0, h = r - 1; u < h; u++)
      li(t, c, d, o[u], o[u + 1]);
    return li(t, c, d, l, et(f) ? t.length : l + f), c;
  }
  return li(t, c, d), c;
}
function xh(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function _h(n, t, e) {
  const i = Sh(n), s = t.length / e;
  if (!i)
    return Math.max(s, 1);
  const o = hd(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function vh(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function wh(n, t, e, i) {
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
function Sh(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const kh = (n) => n === "left" ? "right" : n === "right" ? "left" : n, fr = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e;
function gr(n, t) {
  const e = [], i = n.length / t, s = n.length;
  let o = 0;
  for (; o < s; o += i)
    e.push(n[Math.floor(o)]);
  return e;
}
function Mh(n, t, e) {
  const i = n.ticks.length, s = Math.min(t, i - 1), o = n._startPixel, r = n._endPixel, a = 1e-6;
  let l = n.getPixelForTick(s), c;
  if (!(e && (i === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (n.getPixelForTick(1) - l) / 2 : c = (l - n.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Ch(n, t) {
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
function hn(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function pr(n, t) {
  if (!n.display)
    return 0;
  const e = vt(n.font, t), i = Ct(n.padding);
  return (lt(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function Ph(n, t) {
  return be(n, {
    scale: t,
    type: "scale"
  });
}
function Oh(n, t, e) {
  return be(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Eh(n, t, e) {
  let i = Vs(n);
  return (e && t !== "right" || !e && t === "right") && (i = kh(i)), i;
}
function Ah(n, t, e, i) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = n, { chartArea: c, scales: d } = l;
  let u = 0, h, f, p;
  const g = r - s, m = a - o;
  if (n.isHorizontal()) {
    if (f = Tt(i, o, a), X(e)) {
      const y = Object.keys(e)[0], _ = e[y];
      p = d[y].getPixelForValue(_) + g - t;
    } else
      e === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = fr(n, e, t);
    h = a - o;
  } else {
    if (X(e)) {
      const y = Object.keys(e)[0], _ = e[y];
      f = d[y].getPixelForValue(_) - m + t;
    } else
      e === "center" ? f = (c.left + c.right) / 2 - m + t : f = fr(n, e, t);
    p = Tt(i, r, s), u = e === "left" ? -_t : _t;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: h,
    rotation: u
  };
}
class Ie extends Et {
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
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Wd(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? gr(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = yh(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
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
    const d = this._getLabelSizes(), u = d.widest.width, h = d.highest.height, f = Pt(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / i : f / (i - 1), u + 6 > a && (a = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - hn(t.grid) - e.padding - pr(t.title, this.chart.options.font), c = Math.sqrt(u * u + h * h), r = Fi(Math.min(Math.asin(Pt((d.highest.height + 6) / a, -1, 1)), Math.asin(Pt(l / c, -1, 1)) - Math.asin(Pt(h / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
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
      const l = pr(s, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = hn(o) + l) : (t.height = this.maxHeight, t.width = hn(o) + l), i.display && this.ticks.length) {
        const { first: c, last: d, widest: u, highest: h } = this._getLabelSizes(), f = i.padding * 2, p = Mt(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
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
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0, f = 0;
      l ? c ? (h = s * t.width, f = i * e.height) : (h = i * t.height, f = s * e.width) : o === "start" ? f = e.width : o === "end" ? h = t.width : o !== "inner" && (h = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((h - d + r) * this.width / (this.width - d), 0), this.paddingRight = Math.max((f - u + r) * this.width / (this.width - u), 0);
    } else {
      let d = e.height / 2, u = t.height / 2;
      o === "start" ? (d = 0, u = t.height) : o === "end" && (d = e.height, u = 0), this.paddingTop = d + r, this.paddingBottom = u + r;
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
      et(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = gr(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length);
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    const { ctx: i, _longestTextCache: s } = this, o = [], r = [];
    let a = 0, l = 0, c, d, u, h, f, p, g, m, y, _, v;
    for (c = 0; c < e; ++c) {
      if (h = t[c].label, f = this._resolveTickFontOptions(c), i.font = p = f.string, g = s[p] = s[p] || {
        data: {},
        gc: []
      }, m = f.lineHeight, y = _ = 0, !et(h) && !lt(h))
        y = Mi(i, g.data, g.gc, y, h), _ = m;
      else if (lt(h))
        for (d = 0, u = h.length; d < u; ++d)
          v = h[d], !et(v) && !lt(v) && (y = Mi(i, g.data, g.gc, y, v), _ += m);
      o.push(y), r.push(_), a = Math.max(y, a), l = Math.max(_, l);
    }
    Ch(s, e);
    const w = o.indexOf(a), x = r.indexOf(l), k = (C) => ({
      width: o[C] || 0,
      height: r[C] || 0
    });
    return {
      first: k(0),
      last: k(e - 1),
      widest: k(w),
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
    return pd(this._alignToPixels ? Se(this.chart, e, 0) : e);
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
      return i.$context || (i.$context = Oh(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Ph(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Mt(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * i > a * s ? a / i : l / s : l * s < a * i ? l / i : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), h = hn(o), f = [], p = a.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, y = function(U) {
      return Se(i, U, g);
    };
    let _, v, w, x, k, C, P, A, D, I, L, H;
    if (r === "top")
      _ = y(this.bottom), C = this.bottom - h, A = _ - m, I = y(t.top) + m, H = t.bottom;
    else if (r === "bottom")
      _ = y(this.top), I = t.top, H = y(t.bottom) - m, C = _ + m, A = this.top + h;
    else if (r === "left")
      _ = y(this.right), k = this.right - h, P = _ - m, D = y(t.left) + m, L = t.right;
    else if (r === "right")
      _ = y(this.left), D = t.left, L = y(t.right) - m, k = _ + m, P = this.left + h;
    else if (e === "x") {
      if (r === "center")
        _ = y((t.top + t.bottom) / 2 + 0.5);
      else if (X(r)) {
        const U = Object.keys(r)[0], Z = r[U];
        _ = y(this.chart.scales[U].getPixelForValue(Z));
      }
      I = t.top, H = t.bottom, C = _ + m, A = C + h;
    } else if (e === "y") {
      if (r === "center")
        _ = y((t.left + t.right) / 2);
      else if (X(r)) {
        const U = Object.keys(r)[0], Z = r[U];
        _ = y(this.chart.scales[U].getPixelForValue(Z));
      }
      k = _ - m, P = k - h, D = t.left, L = t.right;
    }
    const tt = W(s.ticks.maxTicksLimit, u), Y = Math.max(1, Math.ceil(u / tt));
    for (v = 0; v < u; v += Y) {
      const U = this.getContext(v), Z = o.setContext(U), bt = a.setContext(U), ut = Z.lineWidth, S = Z.color, O = bt.dash || [], z = bt.dashOffset, B = Z.tickWidth, F = Z.tickColor, $ = Z.tickBorderDash || [], j = Z.tickBorderDashOffset;
      w = Mh(this, v, l), w !== void 0 && (x = Se(i, w, ut), c ? k = P = D = L = x : C = A = I = H = x, f.push({
        tx1: k,
        ty1: C,
        tx2: P,
        ty2: A,
        x1: D,
        y1: I,
        x2: L,
        y2: H,
        width: ut,
        color: S,
        borderDash: O,
        borderDashOffset: z,
        tickWidth: B,
        tickColor: F,
        tickBorderDash: $,
        tickBorderDashOffset: j
      }));
    }
    return this._ticksLength = u, this._borderValue = _, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: s, ticks: o } = i, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: d, mirror: u } = o, h = hn(i.grid), f = h + d, p = u ? -d : f, g = -Mt(this.labelRotation), m = [];
    let y, _, v, w, x, k, C, P, A, D, I, L, H = "middle";
    if (s === "top")
      k = this.bottom - p, C = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      k = this.top + p, C = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const Y = this._getYAxisLabelAlignment(h);
      C = Y.textAlign, x = Y.x;
    } else if (s === "right") {
      const Y = this._getYAxisLabelAlignment(h);
      C = Y.textAlign, x = Y.x;
    } else if (e === "x") {
      if (s === "center")
        k = (t.top + t.bottom) / 2 + f;
      else if (X(s)) {
        const Y = Object.keys(s)[0], U = s[Y];
        k = this.chart.scales[Y].getPixelForValue(U) + f;
      }
      C = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        x = (t.left + t.right) / 2 - f;
      else if (X(s)) {
        const Y = Object.keys(s)[0], U = s[Y];
        x = this.chart.scales[Y].getPixelForValue(U);
      }
      C = this._getYAxisLabelAlignment(h).textAlign;
    }
    e === "y" && (l === "start" ? H = "top" : l === "end" && (H = "bottom"));
    const tt = this._getLabelSizes();
    for (y = 0, _ = a.length; y < _; ++y) {
      v = a[y], w = v.label;
      const Y = o.setContext(this.getContext(y));
      P = this.getPixelForTick(y) + o.labelOffset, A = this._resolveTickFontOptions(y), D = A.lineHeight, I = lt(w) ? w.length : 1;
      const U = I / 2, Z = Y.color, bt = Y.textStrokeColor, ut = Y.textStrokeWidth;
      let S = C;
      r ? (x = P, C === "inner" && (y === _ - 1 ? S = this.options.reverse ? "left" : "right" : y === 0 ? S = this.options.reverse ? "right" : "left" : S = "center"), s === "top" ? c === "near" || g !== 0 ? L = -I * D + D / 2 : c === "center" ? L = -tt.highest.height / 2 - U * D + D : L = -tt.highest.height + D / 2 : c === "near" || g !== 0 ? L = D / 2 : c === "center" ? L = tt.highest.height / 2 - U * D : L = tt.highest.height - I * D, u && (L *= -1), g !== 0 && !Y.showLabelBackdrop && (x += D / 2 * Math.sin(g))) : (k = P, L = (1 - I) * D / 2);
      let O;
      if (Y.showLabelBackdrop) {
        const z = Ct(Y.backdropPadding), B = tt.heights[y], F = tt.widths[y];
        let $ = L - z.top, j = 0 - z.left;
        switch (H) {
          case "middle":
            $ -= B / 2;
            break;
          case "bottom":
            $ -= B;
            break;
        }
        switch (C) {
          case "center":
            j -= F / 2;
            break;
          case "right":
            j -= F;
            break;
        }
        O = {
          left: j,
          top: $,
          width: F + z.width,
          height: B + z.height,
          color: Y.backdropColor
        };
      }
      m.push({
        label: w,
        font: A,
        textOffset: L,
        options: {
          rotation: g,
          color: Z,
          strokeColor: bt,
          strokeWidth: ut,
          textAlign: S,
          textBaseline: H,
          translation: [
            x,
            k
          ],
          backdrop: O
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Mt(this.labelRotation))
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
    let c, d, u, h;
    this.isHorizontal() ? (c = Se(t, this.left, r) - r / 2, d = Se(t, this.right, a) + a / 2, u = h = l) : (u = Se(t, this.top, r) - r / 2, h = Se(t, this.bottom, a) + a / 2, c = d = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(d, h), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && Yn(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, d = r.textOffset;
      Re(i, c, 0, d, l, a);
    }
    s && Un(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = vt(i.font), r = Ct(i.padding), a = i.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || X(e) ? (l += r.bottom, lt(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: d, maxWidth: u, rotation: h } = Ah(this, l, e, a);
    Re(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: u,
      rotation: h,
      textAlign: Eh(a, e, s),
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
    return !this._isVisible() || this.draw !== Ie.prototype.draw ? [
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
    Rh(e) && (i = this.register(e));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, Th(t, r, i), this.override && pt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, s = this.scope;
    i in e && delete e[i], s && i in pt[s] && (delete pt[s][i], this.override && delete De[i]);
  }
}
function Th(n, t, e) {
  const i = Ln(/* @__PURE__ */ Object.create(null), [
    e ? pt.get(e) : {},
    pt.get(t),
    n.defaults
  ]);
  pt.set(t, i), n.defaultRoutes && Dh(t, n.defaultRoutes), n.descriptors && pt.describe(t, n.descriptors);
}
function Dh(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), s = i.pop(), o = [
      n
    ].concat(i).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    pt.route(o, s, l, a);
  });
}
function Rh(n) {
  return "id" in n && "defaults" in n;
}
class Ih {
  constructor() {
    this.controllers = new ci(Vt, "datasets", !0), this.elements = new ci(Et, "elements"), this.plugins = new ci(Object, "plugins"), this.scales = new ci(Ie, "scales"), this._typedRegistries = [
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
    const s = Ns(t);
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
var Yt = new Ih();
class Lh {
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
    et(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, s = W(i.options && i.options.plugins, {}), o = Fh(i);
    return s === !1 && !e ? [] : zh(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
  }
}
function Fh(n) {
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
function jh(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function zh(n, { plugins: t, localIds: e }, i, s) {
  const o = [], r = n.getContext();
  for (const a of t) {
    const l = a.id, c = jh(i[l], s);
    c !== null && o.push({
      plugin: a,
      options: Bh(n.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function Bh(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t), r = n.getOptionScopes(i, o);
  return e && t.defaults && r.push(t.defaults), n.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Ps(n, t) {
  const e = pt.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Wh(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Nh(n, t) {
  return n === t ? "_index_" : "_value_";
}
function $h(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function Ai(n, t) {
  if (n === "x" || n === "y" || n === "r" || (n = t.axis || $h(t.position) || n.length > 1 && Ai(n[0].toLowerCase(), t), n))
    return n;
  throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function Vh(n, t) {
  const e = De[n.type] || {
    scales: {}
  }, i = t.scales || {}, s = Ps(n.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((r) => {
    const a = i[r];
    if (!X(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Ai(r, a), c = Nh(l, s), d = e.scales || {};
    o[r] = Sn(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      d[l],
      d[c]
    ]);
  }), n.data.datasets.forEach((r) => {
    const a = r.type || n.type, l = r.indexAxis || Ps(a, t), d = (De[a] || {}).scales || {};
    Object.keys(d).forEach((u) => {
      const h = Wh(u, l), f = r[h + "AxisID"] || h;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Sn(o[f], [
        {
          axis: h
        },
        i[f],
        d[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Sn(a, [
      pt.scales[a.type],
      pt.scale
    ]);
  }), o;
}
function ml(n) {
  const t = n.options || (n.options = {});
  t.plugins = W(t.plugins, {}), t.scales = Vh(n, t);
}
function bl(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function Hh(n) {
  return n = n || {}, n.data = bl(n.data), ml(n), n;
}
const mr = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new Set();
function di(n, t) {
  let e = mr.get(n);
  return e || (e = t(), mr.set(n, e), yl.add(e)), e;
}
const fn = (n, t, e) => {
  const i = ge(t, e);
  i !== void 0 && n.add(i);
};
class Yh {
  constructor(t) {
    this._config = Hh(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = bl(t);
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
    this.clearCache(), ml(t);
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
      t && (l.add(t), d.forEach((u) => fn(l, t, u))), d.forEach((u) => fn(l, s, u)), d.forEach((u) => fn(l, De[o] || {}, u)), d.forEach((u) => fn(l, pt, u)), d.forEach((u) => fn(l, Cs, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), yl.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      De[e] || {},
      pt.datasets[e] || {},
      {
        type: e
      },
      pt,
      Cs
    ];
  }
  resolveNamedOptions(t, e, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = br(this._resolverCache, t, s);
    let l = r;
    if (Xh(r, e)) {
      o.$shared = !1, i = pe(i) ? i() : i;
      const c = this.createResolver(t, i, a);
      l = Je(r, i, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, i = [
    ""
  ], s) {
    const { resolver: o } = br(this._resolverCache, t, i);
    return X(e) ? Je(o, e, void 0, s) : o;
  }
}
function br(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return o || (o = {
    resolver: Ys(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const Uh = (n) => X(n) && Object.getOwnPropertyNames(n).reduce((t, e) => t || pe(n[e]), !1);
function Xh(n, t) {
  const { isScriptable: e, isIndexable: i } = Ja(n);
  for (const s of t) {
    const o = e(s), r = i(s), a = (r || o) && n[s];
    if (o && (pe(a) || Uh(a)) || r && lt(a))
      return !0;
  }
  return !1;
}
var Kh = "4.2.0";
const qh = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function yr(n, t) {
  return n === "top" || n === "bottom" || qh.indexOf(n) === -1 && t === "x";
}
function xr(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function _r(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), dt(e && e.onComplete, [
    n
  ], t);
}
function Gh(n) {
  const t = n.chart, e = t.options.animation;
  dt(e && e.onProgress, [
    n
  ], t);
}
function xl(n) {
  return il() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const mi = {}, vr = (n) => {
  const t = xl(n);
  return Object.values(mi).filter((e) => e.canvas === t).pop();
};
function Jh(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = r);
    }
  }
}
function Zh(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
function Qh(n) {
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
    Yt.add(...t), wr();
  }
  static unregister(...t) {
    Yt.remove(...t), wr();
  }
  constructor(t, e) {
    const i = this.config = new Yh(e), s = xl(t), o = vr(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || bh(s))(), this.platform.updateConfig(i);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, d = l && l.width;
    if (this.id = sd(), this.ctx = a, this.canvas = l, this.width = d, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Lh(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = xd((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], mi[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Gt.listen(this, "complete", _r), Gt.listen(this, "progress", Gh), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: o } = this;
    return et(t) ? e && o ? o : s ? i / s : null : t;
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
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Uo(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Vo(this.canvas, this.ctx), this;
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
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Uo(this, a, !0) && (this.notifyPlugins("resize", {
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
      (a.position === void 0 || yr(a.position, c) !== yr(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let u = null;
      if (l in i && i[l].type === d)
        u = i[l];
      else {
        const h = Yt.getScale(d);
        u = new h({
          id: l,
          type: d,
          ctx: this.ctx,
          chart: this
        }), i[u.id] = u;
      }
      u.init(a, t);
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
    this._sortedMetasets = t.slice(0).sort(xr("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = a, r.indexAxis = o.indexAxis || Ps(a, this.options), r.order = o.order || 0, r.index = i, r.label = "" + o.label, r.visible = this.isDatasetVisible(i), r.controller)
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
      const { controller: u } = this.getDatasetMeta(c), h = !s && o.indexOf(u) === -1;
      u.buildOrUpdateElements(h), r = Math.max(+u.getMaxOverflow(), r);
    }
    r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), s || at(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(xr("z", "_idx"));
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
    (!Io(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const r = i === "_removeElements" ? -o : o;
      Jh(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = i(0);
    for (let o = 1; o < e; o++)
      if (!Io(s, i(o)))
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
        this._updateDataset(e, pe(t) ? t({
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
    }) !== !1 && (Gt.has(this) ? this.attached && !Gt.running(this) && Gt.start(this) : (this.draw(), _r({
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
    const e = this.ctx, i = t._clip, s = !i.disabled, o = Qh(t) || this.chartArea, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (s && Yn(e, {
      left: i.left === !1 ? 0 : o.left - i.left,
      right: i.right === !1 ? this.width : o.right + i.right,
      top: i.top === !1 ? 0 : o.top - i.top,
      bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
    }), t.controller.draw(), s && Un(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return zn(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = Gu.modes[e];
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
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Vo(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete mi[this.id], this.notifyPlugins("afterDestroy");
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
    const s = this.options.hover, o = (l, c) => l.filter((d) => !c.some((u) => d.datasetIndex === u.datasetIndex && d.index === u.index)), r = o(e, t), a = i ? t : o(t, e);
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
    const { _active: s = [], options: o } = this, r = e, a = this._getActiveElements(t, s, i, r), l = dd(t), c = Zh(t, this._lastEvent, i, l);
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
R(zt, "defaults", pt), R(zt, "instances", mi), R(zt, "overrides", De), R(zt, "registry", Yt), R(zt, "version", Kh), R(zt, "getChart", vr);
function wr() {
  return at(zt.instances, (n) => n._plugins.invalidate());
}
function tf(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  n.beginPath(), n.arc(o, r, a, i - c, e + c), l > s ? (c = s / l, n.arc(o, r, l, e + c, i - c, !0)) : n.arc(o, r, s, e + _t, i - _t), n.closePath(), n.clip();
}
function ef(n) {
  return Hs(n, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function nf(n, t, e, i) {
  const s = ef(n.options.borderRadius), o = (e - t) / 2, r = Math.min(o, i * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * i / 2;
    return Pt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: Pt(s.innerStart, 0, r),
    innerEnd: Pt(s.innerEnd, 0, r)
  };
}
function We(n, t, e, i) {
  return {
    x: e + n * Math.cos(t),
    y: i + n * Math.sin(t)
  };
}
function Ti(n, t, e, i, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: d } = t, u = Math.max(t.outerRadius + i + e - c, 0), h = d > 0 ? d + i + e + c : 0;
  let f = 0;
  const p = s - l;
  if (i) {
    const Y = d > 0 ? d - i : 0, U = u > 0 ? u - i : 0, Z = (Y + U) / 2, bt = Z !== 0 ? p * Z / (Z + i) : p;
    f = (p - bt) / 2;
  }
  const g = Math.max(1e-3, p * u - e / it) / u, m = (p - g) / 2, y = l + m + f, _ = s - m - f, { outerStart: v, outerEnd: w, innerStart: x, innerEnd: k } = nf(t, h, u, _ - y), C = u - v, P = u - w, A = y + v / C, D = _ - w / P, I = h + x, L = h + k, H = y + x / I, tt = _ - k / L;
  if (n.beginPath(), o) {
    const Y = (A + D) / 2;
    if (n.arc(r, a, u, A, Y), n.arc(r, a, u, Y, D), w > 0) {
      const ut = We(P, D, r, a);
      n.arc(ut.x, ut.y, w, D, _ + _t);
    }
    const U = We(L, _, r, a);
    if (n.lineTo(U.x, U.y), k > 0) {
      const ut = We(L, tt, r, a);
      n.arc(ut.x, ut.y, k, _ + _t, tt + Math.PI);
    }
    const Z = (_ - k / h + (y + x / h)) / 2;
    if (n.arc(r, a, h, _ - k / h, Z, !0), n.arc(r, a, h, Z, y + x / h, !0), x > 0) {
      const ut = We(I, H, r, a);
      n.arc(ut.x, ut.y, x, H + Math.PI, y - _t);
    }
    const bt = We(C, y, r, a);
    if (n.lineTo(bt.x, bt.y), v > 0) {
      const ut = We(C, A, r, a);
      n.arc(ut.x, ut.y, v, y - _t, A);
    }
  } else {
    n.moveTo(r, a);
    const Y = Math.cos(A) * u + r, U = Math.sin(A) * u + a;
    n.lineTo(Y, U);
    const Z = Math.cos(D) * u + r, bt = Math.sin(D) * u + a;
    n.lineTo(Z, bt);
  }
  n.closePath();
}
function sf(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Ti(n, t, e, i, l, s);
    for (let c = 0; c < o; ++c)
      n.fill();
    isNaN(a) || (l = r + (a % ht || ht));
  }
  return Ti(n, t, e, i, l, s), n.fill(), l;
}
function of(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: d } = l, u = l.borderAlign === "inner";
  if (!c)
    return;
  u ? (n.lineWidth = c * 2, n.lineJoin = d || "round") : (n.lineWidth = c, n.lineJoin = d || "bevel");
  let h = t.endAngle;
  if (o) {
    Ti(n, t, e, i, h, s);
    for (let f = 0; f < o; ++f)
      n.stroke();
    isNaN(a) || (h = r + (a % ht || ht));
  }
  u && tf(n, t, h), o || (Ti(n, t, e, i, h, s), n.stroke());
}
class bi extends Et {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: r } = Wa(s, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: d, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), h = this.options.spacing / 2, p = W(u, l - a) >= ht || jn(o, a, l), g = Qt(r, c + h, d + h);
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
    ], t), { offset: l, spacing: c } = this.options, d = (s + o) / 2, u = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(d) * u,
      y: i + Math.sin(d) * u
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > ht ? Math.floor(i / ht) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(it, i || 0)), c = s * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, sf(t, this, c, o, r), of(t, this, c, o, r), t.restore();
  }
}
R(bi, "id", "arc"), R(bi, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), R(bi, "defaultRoutes", {
  backgroundColor: "backgroundColor"
});
function _l(n, t, e = t) {
  n.lineCap = W(e.borderCapStyle, t.borderCapStyle), n.setLineDash(W(e.borderDash, t.borderDash)), n.lineDashOffset = W(e.borderDashOffset, t.borderDashOffset), n.lineJoin = W(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = W(e.borderWidth, t.borderWidth), n.strokeStyle = W(e.borderColor, t.borderColor);
}
function rf(n, t, e) {
  n.lineTo(e.x, e.y);
}
function af(n) {
  return n.stepped ? Td : n.tension || n.cubicInterpolationMode === "monotone" ? Dd : rf;
}
function vl(n, t, e = {}) {
  const i = n.length, { start: s = 0, end: o = i - 1 } = e, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), d = s < r && o < r || s > a && o > a;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !d ? i + c - l : c - l
  };
}
function lf(n, t, e, i) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = vl(s, e, i), d = af(o);
  let { move: u = !0, reverse: h } = i || {}, f, p, g;
  for (f = 0; f <= c; ++f)
    p = s[(a + (h ? c - f : f)) % r], !p.skip && (u ? (n.moveTo(p.x, p.y), u = !1) : d(n, g, p, h, o.stepped), g = p);
  return l && (p = s[(a + (h ? c : 0)) % r], d(n, g, p, h, o.stepped)), !!l;
}
function cf(n, t, e, i) {
  const s = t.points, { count: o, start: r, ilen: a } = vl(s, e, i), { move: l = !0, reverse: c } = i || {};
  let d = 0, u = 0, h, f, p, g, m, y;
  const _ = (w) => (r + (c ? a - w : w)) % o, v = () => {
    g !== m && (n.lineTo(d, m), n.lineTo(d, g), n.lineTo(d, y));
  };
  for (l && (f = s[_(0)], n.moveTo(f.x, f.y)), h = 0; h <= a; ++h) {
    if (f = s[_(h)], f.skip)
      continue;
    const w = f.x, x = f.y, k = w | 0;
    k === p ? (x < g ? g = x : x > m && (m = x), d = (u * d + w) / ++u) : (v(), n.lineTo(w, x), p = k, u = 0, g = m = x), y = x;
  }
  v();
}
function Os(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? cf : lf;
}
function df(n) {
  return n.stepped ? du : n.tension || n.cubicInterpolationMode === "monotone" ? uu : Oe;
}
function uf(n, t, e, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, i) && s.closePath()), _l(n, t.options), n.stroke(s);
}
function hf(n, t, e, i) {
  const { segments: s, options: o } = t, r = Os(t);
  for (const a of s)
    _l(n, o, a.style), n.beginPath(), r(n, t, a, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const ff = typeof Path2D == "function";
function gf(n, t, e, i) {
  ff && !t.options.segment ? uf(n, t, e, i) : hf(n, t, e, i);
}
class ee extends Et {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      nu(this._points, i, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = bu(this, this.options.segment));
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
    const i = this.options, s = t[e], o = this.points, r = ll(this, {
      property: e,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = df(i);
    let c, d;
    for (c = 0, d = r.length; c < d; ++c) {
      const { start: u, end: h } = r[c], f = o[u], p = o[h];
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
    return Os(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments, o = Os(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), gf(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
R(ee, "id", "line"), R(ee, "defaults", {
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
}), R(ee, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), R(ee, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Sr(n, t, e, i) {
  const s = n.options, { [e]: o } = n.getProps([
    e
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Dn extends Et {
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
    return Sr(this, t, "x", e);
  }
  inYRange(t, e) {
    return Sr(this, t, "y", e);
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
    this.skip || i.radius < 0.1 || !zn(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Ci(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
R(Dn, "id", "point"), R(Dn, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), R(Dn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function wl(n, t) {
  const { x: e, y: i, base: s, width: o, height: r } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, d, u;
  return n.horizontal ? (u = r / 2, a = Math.min(e, s), l = Math.max(e, s), c = i - u, d = i + u) : (u = o / 2, a = e - u, l = e + u, c = Math.min(i, s), d = Math.max(i, s)), {
    left: a,
    top: c,
    right: l,
    bottom: d
  };
}
function ce(n, t, e, i) {
  return n ? 0 : Pt(t, e, i);
}
function pf(n, t, e) {
  const i = n.options.borderWidth, s = n.borderSkipped, o = Ga(i);
  return {
    t: ce(s.top, o.top, 0, e),
    r: ce(s.right, o.right, 0, t),
    b: ce(s.bottom, o.bottom, 0, e),
    l: ce(s.left, o.left, 0, t)
  };
}
function mf(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), s = n.options.borderRadius, o = ue(s), r = Math.min(t, e), a = n.borderSkipped, l = i || X(s);
  return {
    topLeft: ce(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: ce(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: ce(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: ce(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function bf(n) {
  const t = wl(n), e = t.right - t.left, i = t.bottom - t.top, s = pf(n, e / 2, i / 2), o = mf(n, e / 2, i / 2);
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
function hs(n, t, e, i) {
  const s = t === null, o = e === null, a = n && !(s && o) && wl(n, i);
  return a && (s || Qt(t, a.left, a.right)) && (o || Qt(e, a.top, a.bottom));
}
function yf(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function xf(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function fs(n, t, e = {}) {
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
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: r } = bf(this), a = yf(r.radius) ? Ge : xf;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, fs(r, e, o)), t.clip(), a(t, fs(o, -e, r)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, fs(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return hs(this, t, e, i);
  }
  inXRange(t, e) {
    return hs(this, t, null, e);
  }
  inYRange(t, e) {
    return hs(this, null, t, e);
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
R(yi, "id", "bar"), R(yi, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), R(yi, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
Object.freeze({
  __proto__: null,
  ArcElement: bi,
  LineElement: ee,
  PointElement: Dn,
  BarElement: yi
});
const Es = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
], kr = Es.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function Sl(n) {
  return Es[n % Es.length];
}
function kl(n) {
  return kr[n % kr.length];
}
function _f(n, t) {
  return n.borderColor = Sl(t), n.backgroundColor = kl(t), ++t;
}
function vf(n, t) {
  return n.backgroundColor = n.data.map(() => Sl(t++)), t;
}
function wf(n, t) {
  return n.backgroundColor = n.data.map(() => kl(t++)), t;
}
function Sf(n) {
  let t = 0;
  return (e, i) => {
    const s = n.getDatasetMeta(i).controller;
    s instanceof le ? t = vf(e, t) : s instanceof Xe ? t = wf(e, t) : s && (t = _f(e, t));
  };
}
function Mr(n) {
  let t;
  for (t in n)
    if (n[t].borderColor || n[t].backgroundColor)
      return !0;
  return !1;
}
function kf(n) {
  return n && (n.borderColor || n.backgroundColor);
}
var Mf = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(n, t, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: i }, options: s } = n.config, { elements: o } = s;
    if (!e.forceOverride && (Mr(i) || kf(s) || o && Mr(o)))
      return;
    const r = Sf(n);
    i.forEach(r);
  }
};
function Cf(n, t, e, i, s) {
  const o = s.samples || i;
  if (o >= e)
    return n.slice(t, t + e);
  const r = [], a = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let d = t, u, h, f, p, g;
  for (r[l++] = n[d], u = 0; u < o - 2; u++) {
    let m = 0, y = 0, _;
    const v = Math.floor((u + 1) * a) + 1 + t, w = Math.min(Math.floor((u + 2) * a) + 1, e) + t, x = w - v;
    for (_ = v; _ < w; _++)
      m += n[_].x, y += n[_].y;
    m /= x, y /= x;
    const k = Math.floor(u * a) + 1 + t, C = Math.min(Math.floor((u + 1) * a) + 1, e) + t, { x: P, y: A } = n[d];
    for (f = p = -1, _ = k; _ < C; _++)
      p = 0.5 * Math.abs((P - m) * (n[_].y - A) - (P - n[_].x) * (y - A)), p > f && (f = p, h = n[_], g = _);
    r[l++] = h, d = g;
  }
  return r[l++] = n[c], r;
}
function Pf(n, t, e, i) {
  let s = 0, o = 0, r, a, l, c, d, u, h, f, p, g;
  const m = [], y = t + e - 1, _ = n[t].x, w = n[y].x - _;
  for (r = t; r < t + e; ++r) {
    a = n[r], l = (a.x - _) / w * i, c = a.y;
    const x = l | 0;
    if (x === d)
      c < p ? (p = c, u = r) : c > g && (g = c, h = r), s = (o * s + a.x) / ++o;
    else {
      const k = r - 1;
      if (!et(u) && !et(h)) {
        const C = Math.min(u, h), P = Math.max(u, h);
        C !== f && C !== k && m.push({
          ...n[C],
          x: s
        }), P !== f && P !== k && m.push({
          ...n[P],
          x: s
        });
      }
      r > 0 && k !== f && m.push(n[k]), m.push(a), d = x, o = 0, p = g = c, u = h = f = r;
    }
  }
  return m;
}
function Ml(n) {
  if (n._decimated) {
    const t = n._data;
    delete n._decimated, delete n._data, Object.defineProperty(n, "data", {
      value: t
    });
  }
}
function Cr(n) {
  n.data.datasets.forEach((t) => {
    Ml(t);
  });
}
function Of(n, t) {
  const e = t.length;
  let i = 0, s;
  const { iScale: o } = n, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (i = Pt(te(t, o.axis, r).lo, 0, e - 1)), c ? s = Pt(te(t, o.axis, a).hi + 1, i, e) - i : s = e - i, {
    start: i,
    count: s
  };
}
var Ef = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      Cr(n);
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
      let { start: u, count: h } = Of(l, c);
      const f = e.threshold || 4 * i;
      if (h <= f) {
        Ml(s);
        return;
      }
      et(r) && (s._data = c, delete s.data, Object.defineProperty(s, "data", {
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
          p = Cf(c, u, h, i, e);
          break;
        case "min-max":
          p = Pf(c, u, h, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = p;
    });
  },
  destroy(n) {
    Cr(n);
  }
};
function Af(n, t, e) {
  const i = n.segments, s = n.points, o = t.points, r = [];
  for (const a of i) {
    let { start: l, end: c } = a;
    c = Js(l, c, s);
    const d = As(e, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: d,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const u = ll(t, d);
    for (const h of u) {
      const f = As(e, o[h.start], o[h.end], h.loop), p = al(a, s, f);
      for (const g of p)
        r.push({
          source: g,
          target: h,
          start: {
            [e]: Pr(d, f, "start", Math.max)
          },
          end: {
            [e]: Pr(d, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function As(n, t, e, i) {
  if (i)
    return;
  let s = t[n], o = e[n];
  return n === "angle" && (s = jt(s), o = jt(o)), {
    property: n,
    start: s,
    end: o
  };
}
function Tf(n, t) {
  const { x: e = null, y: i = null } = n || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Js(r, a, s);
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
function Js(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function Pr(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function Cl(n, t) {
  let e = [], i = !1;
  return lt(n) ? (i = !0, e = n) : e = Tf(n, t), e.length ? new ee({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function Or(n) {
  return n && n.fill !== !1;
}
function Df(n, t, e) {
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
function Rf(n, t, e) {
  const i = jf(n);
  if (X(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return gt(s) && Math.floor(s) === s ? If(i[0], t, s, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function If(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function Lf(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : X(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Ff(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : X(n) ? i = n.value : i = t.getBaseValue(), i;
}
function jf(n) {
  const t = n.options, e = t.fill;
  let i = W(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function zf(n) {
  const { scale: t, index: e, line: i } = n, s = [], o = i.segments, r = i.points, a = Bf(t, e);
  a.push(Cl({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let d = c.start; d <= c.end; d++)
      Wf(s, r[d], a);
  }
  return new ee({
    points: s,
    options: {}
  });
}
function Bf(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function Wf(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], { first: r, last: a, point: l } = Nf(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        i.unshift(l);
      else if (n.push(l), !a)
        break;
    }
  }
  n.push(...i);
}
function Nf(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const s = i[e], o = n.segments, r = n.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const d = o[c], u = r[d.start][e], h = r[d.end][e];
    if (Qt(s, u, h)) {
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
class Pl {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: ht
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
function $f(n) {
  const { chart: t, fill: e, line: i } = n;
  if (gt(e))
    return Vf(t, e);
  if (e === "stack")
    return zf(n);
  if (e === "shape")
    return !0;
  const s = Hf(n);
  return s instanceof Pl ? s : Cl(s, i);
}
function Vf(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function Hf(n) {
  return (n.scale || {}).getPointPositionForValue ? Uf(n) : Yf(n);
}
function Yf(n) {
  const { scale: t = {}, fill: e } = n, i = Lf(e, t);
  if (gt(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function Uf(n) {
  const { scale: t, fill: e } = n, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, r = Ff(e, t, o), a = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Pl({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < s; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function gs(n, t, e) {
  const i = $f(t), { line: s, scale: o, axis: r } = t, a = s.options, l = a.fill, c = a.backgroundColor, { above: d = c, below: u = c } = l || {};
  i && s.points.length && (Yn(n, e), Xf(n, {
    line: s,
    target: i,
    above: d,
    below: u,
    area: e,
    scale: o,
    axis: r
  }), Un(n));
}
function Xf(n, t) {
  const { line: e, target: i, above: s, below: o, area: r, scale: a } = t, l = e._loop ? "angle" : t.axis;
  n.save(), l === "x" && o !== s && (Er(n, i, r.top), Ar(n, {
    line: e,
    target: i,
    color: s,
    scale: a,
    property: l
  }), n.restore(), n.save(), Er(n, i, r.bottom)), Ar(n, {
    line: e,
    target: i,
    color: o,
    scale: a,
    property: l
  }), n.restore();
}
function Er(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, r = !1;
  n.beginPath();
  for (const a of i) {
    const { start: l, end: c } = a, d = s[l], u = s[Js(l, c, s)];
    o ? (n.moveTo(d.x, d.y), o = !1) : (n.lineTo(d.x, e), n.lineTo(d.x, d.y)), r = !!t.pathSegment(n, a, {
      move: r
    }), r ? n.closePath() : n.lineTo(u.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function Ar(n, t) {
  const { line: e, target: i, property: s, color: o, scale: r } = t, a = Af(e, i, s);
  for (const { source: l, target: c, start: d, end: u } of a) {
    const { style: { backgroundColor: h = o } = {} } = l, f = i !== !0;
    n.save(), n.fillStyle = h, Kf(n, r, f && As(s, d, u)), n.beginPath();
    const p = !!e.pathSegment(n, l);
    let g;
    if (f) {
      p ? n.closePath() : Tr(n, i, u, s);
      const m = !!i.pathSegment(n, c, {
        move: p,
        reverse: !0
      });
      g = p && m, g || Tr(n, i, d, s);
    }
    n.closePath(), n.fill(g ? "evenodd" : "nonzero"), n.restore();
  }
}
function Kf(n, t, e) {
  const { top: i, bottom: s } = t.chart.chartArea, { property: o, start: r, end: a } = e || {};
  o === "x" && (n.beginPath(), n.rect(r, i, a - r, s - i), n.clip());
}
function Tr(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var Ol = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, s = [];
    let o, r, a, l;
    for (r = 0; r < i; ++r)
      o = n.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof ee && (l = {
        visible: n.isDatasetVisible(r),
        index: r,
        fill: Rf(a, r, i),
        chart: n,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, s.push(l);
    for (r = 0; r < i; ++r)
      l = s[r], !(!l || l.fill === !1) && (l.fill = Df(s, r, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", s = n.getSortedVisibleDatasetMetas(), o = n.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      !a || (a.line.updateControlPoints(o, a.axis), i && a.fill && gs(n.ctx, a, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      Or(o) && gs(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !Or(i) || e.drawTime !== "beforeDatasetDraw" || gs(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Dr = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, qf = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class Rr extends Et {
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
    const i = t.labels, s = vt(i.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Dr(i, o);
    let c, d;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, d = this._fitRows(r, o, a, l) + 10) : (d = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(d, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], d = s + a;
    let u = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let h = -1, f = -d;
    return this.legendItems.forEach((p, g) => {
      const m = i + e / 2 + o.measureText(p.text).width;
      (g === 0 || c[c.length - 1] + m + 2 * a > r) && (u += d, c[c.length - (g > 0 ? 0 : 1)] = 0, f += d, h++), l[g] = {
        left: 0,
        top: f,
        row: h,
        width: m,
        height: s
      }, c[c.length - 1] += m + a;
    }), u;
  }
  _fitCols(t, e, i, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], d = r - t;
    let u = a, h = 0, f = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, y) => {
      const { itemWidth: _, itemHeight: v } = Gf(i, e, o, m, s);
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
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, r = Ue(o, this.left, this.width);
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
      Yn(t, this), this._draw(), Un(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: o, labels: r } = t, a = pt.color, l = Ue(t.rtl, this.left, this.width), c = vt(r.font), { padding: d } = r, u = c.size, h = u / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = Dr(r, u), y = function(k, C, P) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      s.save();
      const A = W(P.lineWidth, 1);
      if (s.fillStyle = W(P.fillStyle, a), s.lineCap = W(P.lineCap, "butt"), s.lineDashOffset = W(P.lineDashOffset, 0), s.lineJoin = W(P.lineJoin, "miter"), s.lineWidth = A, s.strokeStyle = W(P.strokeStyle, a), s.setLineDash(W(P.lineDash, [])), r.usePointStyle) {
        const D = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: P.pointStyle,
          rotation: P.rotation,
          borderWidth: A
        }, I = l.xPlus(k, p / 2), L = C + h;
        qa(s, D, I, L, r.pointStyleWidth && p);
      } else {
        const D = C + Math.max((u - g) / 2, 0), I = l.leftForLtr(k, p), L = ue(P.borderRadius);
        s.beginPath(), Object.values(L).some((H) => H !== 0) ? Ge(s, {
          x: I,
          y: D,
          w: p,
          h: g,
          radius: L
        }) : s.rect(I, D, p, g), s.fill(), A !== 0 && s.stroke();
      }
      s.restore();
    }, _ = function(k, C, P) {
      Re(s, P.text, k, C + m / 2, c, {
        strikethrough: P.hidden,
        textAlign: l.textAlign(P.textAlign)
      });
    }, v = this.isHorizontal(), w = this._computeTitleHeight();
    v ? f = {
      x: Tt(o, this.left + d, this.right - i[0]),
      y: this.top + d + w,
      line: 0
    } : f = {
      x: this.left + d,
      y: Tt(o, this.top + w + d, this.bottom - e[0].height),
      line: 0
    }, sl(this.ctx, t.textDirection);
    const x = m + d;
    this.legendItems.forEach((k, C) => {
      s.strokeStyle = k.fontColor, s.fillStyle = k.fontColor;
      const P = s.measureText(k.text).width, A = l.textAlign(k.textAlign || (k.textAlign = r.textAlign)), D = p + h + P;
      let I = f.x, L = f.y;
      l.setWidth(this.width), v ? C > 0 && I + D + d > this.right && (L = f.y += x, f.line++, I = f.x = Tt(o, this.left + d, this.right - i[f.line])) : C > 0 && L + x > this.bottom && (I = f.x = I + e[f.line].width + d, f.line++, L = f.y = Tt(o, this.top + w + d, this.bottom - e[f.line].height));
      const H = l.x(I);
      if (y(H, L, k), I = _d(A, I + p + h, v ? I + D : this.right, t.rtl), _(l.x(I), L, k), v)
        f.x += D + d;
      else if (typeof k.text != "string") {
        const tt = c.lineHeight;
        f.y += El(k, tt);
      } else
        f.y += x;
    }), ol(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = vt(e.font), s = Ct(e.padding);
    if (!e.display)
      return;
    const o = Ue(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = i.size / 2, c = s.top + l;
    let d, u = this.left, h = this.width;
    if (this.isHorizontal())
      h = Math.max(...this.lineWidths), d = this.top + c, u = Tt(t.align, u, this.right - h);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      d = c + Tt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = Tt(a, u, u + h);
    r.textAlign = o.textAlign(Vs(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = i.string, Re(r, e.text, f, d, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = vt(t.font), i = Ct(t.padding);
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
    if (!Qf(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = qf(s, i);
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
function Gf(n, t, e, i, s) {
  const o = Jf(i, n, t, e), r = Zf(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Jf(n, t, e, i) {
  let s = n.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + i.measureText(s).width;
}
function Zf(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = El(t, e)), i;
}
function El(n, t) {
  const e = n.text ? n.text.length + 0.5 : 0;
  return t * e;
}
function Qf(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var Al = {
  id: "legend",
  _element: Rr,
  start(n, t, e) {
    const i = n.legend = new Rr({
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
          const c = l.controller.getStyle(e ? 0 : void 0), d = Ct(c.borderWidth);
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
class Zs extends Et {
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
    this._padding = Ct(i.padding);
    const o = s * vt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: r } = this, a = r.align;
    let l = 0, c, d, u;
    return this.isHorizontal() ? (d = Tt(a, i, o), u = e + t, c = o - i) : (r.position === "left" ? (d = i + t, u = Tt(a, s, e), l = it * -0.5) : (d = o - t, u = Tt(a, e, s), l = it * 0.5), c = s - e), {
      titleX: d,
      titleY: u,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = vt(e.font), o = i.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Re(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Vs(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function tg(n, t) {
  const e = new Zs({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  Dt.configure(n, e, t), Dt.addBox(n, e), n.titleBlock = e;
}
var Tl = {
  id: "title",
  _element: Zs,
  start(n, t, e) {
    tg(n, e);
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
const ui = /* @__PURE__ */ new WeakMap();
var eg = {
  id: "subtitle",
  start(n, t, e) {
    const i = new Zs({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Dt.configure(n, i, e), Dt.addBox(n, i), ui.set(n, i);
  },
  stop(n) {
    Dt.removeBox(n, ui.get(n)), ui.delete(n);
  },
  beforeUpdate(n, t, e) {
    const i = ui.get(n);
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
        const c = l.getCenterPoint(), d = Fn(t, c);
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
function ng(n, t) {
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
function Ir(n, t) {
  const e = n.chart.ctx, { body: i, footer: s, title: o } = n, { boxWidth: r, boxHeight: a } = t, l = vt(t.bodyFont), c = vt(t.titleFont), d = vt(t.footerFont), u = o.length, h = s.length, f = i.length, p = Ct(t.padding);
  let g = p.height, m = 0, y = i.reduce((w, x) => w + x.before.length + x.lines.length + x.after.length, 0);
  if (y += n.beforeBody.length + n.afterBody.length, u && (g += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), y) {
    const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += f * w + (y - f) * l.lineHeight + (y - 1) * t.bodySpacing;
  }
  h && (g += t.footerMarginTop + h * d.lineHeight + (h - 1) * t.footerSpacing);
  let _ = 0;
  const v = function(w) {
    m = Math.max(m, e.measureText(w).width + _);
  };
  return e.save(), e.font = c.string, at(n.title, v), e.font = l.string, at(n.beforeBody.concat(n.afterBody), v), _ = t.displayColors ? r + 2 + t.boxPadding : 0, at(i, (w) => {
    at(w.before, v), at(w.lines, v), at(w.after, v);
  }), _ = 0, e.font = d.string, at(n.footer, v), e.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function ig(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function sg(n, t, e, i) {
  const { x: s, width: o } = i, r = e.caretSize + e.caretPadding;
  if (n === "left" && s + o + r > t.width || n === "right" && s - o - r < 0)
    return !0;
}
function og(n, t, e, i) {
  const { x: s, width: o } = e, { width: r, chartArea: { left: a, right: l } } = n;
  let c = "center";
  return i === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), sg(c, n, t, e) && (c = "center"), c;
}
function Lr(n, t, e) {
  const i = e.yAlign || t.yAlign || ig(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || og(n, t, e, i),
    yAlign: i
  };
}
function rg(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function ag(n, t, e) {
  let { y: i, height: s } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= s + e : i -= s / 2, i;
}
function Fr(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = n, { xAlign: a, yAlign: l } = e, c = s + o, { topLeft: d, topRight: u, bottomLeft: h, bottomRight: f } = ue(r);
  let p = rg(t, a);
  const g = ag(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(d, h) + s : a === "right" && (p += Math.max(u, f) + s), {
    x: Pt(p, 0, i.width - t.width),
    y: Pt(g, 0, i.height - t.height)
  };
}
function hi(n, t, e) {
  const i = Ct(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function jr(n) {
  return Ht([], Jt(n));
}
function lg(n, t, e) {
  return be(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function zr(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const Dl = {
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
    return et(e) || (t += e), t;
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
  return typeof s > "u" ? Dl[t].call(e, i) : s;
}
class Ts extends Et {
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
    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, o = new qs(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = lg(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, s = It(i, "beforeTitle", this, t), o = It(i, "title", this, t), r = It(i, "afterTitle", this, t);
    let a = [];
    return a = Ht(a, Jt(s)), a = Ht(a, Jt(o)), a = Ht(a, Jt(r)), a;
  }
  getBeforeBody(t, e) {
    return jr(It(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, s = [];
    return at(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = zr(i, o);
      Ht(r.before, Jt(It(a, "beforeLabel", this, o))), Ht(r.lines, It(a, "label", this, o)), Ht(r.after, Jt(It(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, e) {
    return jr(It(e.callbacks, "afterBody", this, t));
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
      a.push(ng(this.chart, e[l]));
    return t.filter && (a = a.filter((d, u, h) => t.filter(d, u, h, i))), t.itemSort && (a = a.sort((d, u) => t.itemSort(d, u, i))), at(a, (d) => {
      const u = zr(t.callbacks, d);
      s.push(It(u, "labelColor", this, d)), o.push(It(u, "labelPointStyle", this, d)), r.push(It(u, "labelTextColor", this, d));
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
      const l = this._size = Ir(this, i), c = Object.assign({}, a, l), d = Lr(this.chart, i, c), u = Fr(i, c, d, this.chart);
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
      replay: e
    });
  }
  drawCaret(t, e, i, s) {
    const o = this.getCaretPosition(t, i, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = i, { topLeft: l, topRight: c, bottomLeft: d, bottomRight: u } = ue(a), { x: h, y: f } = t, { width: p, height: g } = e;
    let m, y, _, v, w, x;
    return o === "center" ? (w = f + g / 2, s === "left" ? (m = h, y = m - r, v = w + r, x = w - r) : (m = h + p, y = m + r, v = w - r, x = w + r), _ = m) : (s === "left" ? y = h + Math.max(l, d) + r : s === "right" ? y = h + p - Math.max(c, u) - r : y = this.caretX, o === "top" ? (v = f, w = v - r, m = y - r, _ = y + r) : (v = f + g, w = v + r, m = y + r, _ = y - r), x = v), {
      x1: m,
      x2: y,
      x3: _,
      y1: v,
      y2: w,
      y3: x
    };
  }
  drawTitle(t, e, i) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = Ue(i.rtl, this.x, this.width);
      for (t.x = hi(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", r = vt(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const r = this.labelColors[i], a = this.labelPointStyles[i], { boxHeight: l, boxWidth: c, boxPadding: d } = o, u = vt(o.bodyFont), h = hi(this, "left", o), f = s.x(h), p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, g = e.y + p;
    if (o.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, y = s.leftForLtr(f, c) + c / 2, _ = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Ci(t, m, y, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Ci(t, m, y, _);
    } else {
      t.lineWidth = X(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const m = s.leftForLtr(f, c - d), y = s.leftForLtr(s.xPlus(f, 1), c - d - 2), _ = ue(r.borderRadius);
      Object.values(_).some((v) => v !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Ge(t, {
        x: m,
        y: g,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Ge(t, {
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
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: d } = i, u = vt(i.bodyFont);
    let h = u.lineHeight, f = 0;
    const p = Ue(i.rtl, this.x, this.width), g = function(P) {
      e.fillText(P, p.x(t.x + f), t.y + h / 2), t.y += h + o;
    }, m = p.textAlign(r);
    let y, _, v, w, x, k, C;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = hi(this, m, i), e.fillStyle = i.bodyColor, at(this.beforeBody, g), f = a && m !== "right" ? r === "center" ? c / 2 + d : c + 2 + d : 0, w = 0, k = s.length; w < k; ++w) {
      for (y = s[w], _ = this.labelTextColors[w], e.fillStyle = _, at(y.before, g), v = y.lines, a && v.length && (this._drawColorBox(e, t, w, p, i), h = Math.max(u.lineHeight, l)), x = 0, C = v.length; x < C; ++x)
        g(v[x]), h = u.lineHeight;
      at(y.after, g);
    }
    f = 0, h = u.lineHeight, at(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, i) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = Ue(i.rtl, this.x, this.width);
      for (t.x = hi(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", r = vt(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: d } = i, { topLeft: u, topRight: h, bottomLeft: f, bottomRight: p } = ue(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, i, s), e.lineTo(a + c - h, l), e.quadraticCurveTo(a + c, l, a + c, l + h), r === "center" && o === "right" && this.drawCaret(t, e, i, s), e.lineTo(a + c, l + d - p), e.quadraticCurveTo(a + c, l + d, a + c - p, l + d), r === "bottom" && this.drawCaret(t, e, i, s), e.lineTo(a + f, l + d), e.quadraticCurveTo(a, l + d, a, l + d - f), r === "center" && o === "left" && this.drawCaret(t, e, i, s), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const r = _n[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Ir(this, t), l = Object.assign({}, r, this._size), c = Lr(e, t, l), d = Fr(t, l, c, e);
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
    const r = Ct(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, e), sl(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), ol(t, e.textDirection), t.restore());
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
R(Ts, "positioners", _n);
var Rl = {
  id: "tooltip",
  _element: Ts,
  positioners: _n,
  afterInit(n, t, e) {
    e && (n.tooltip = new Ts({
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
    callbacks: Dl
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
  Colors: Mf,
  Decimation: Ef,
  Filler: Ol,
  Legend: Al,
  SubTitle: eg,
  Title: Tl,
  Tooltip: Rl
});
const cg = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function dg(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1)
    return cg(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const ug = (n, t) => n === null ? null : Pt(Math.round(n), 0, t);
function Br(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Di extends Ie {
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
    if (et(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : dg(i, t, W(e, t), this._addedLabels), ug(e, i.length - 1);
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
    return Br.call(this, t);
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
R(Di, "id", "category"), R(Di, "defaults", {
  ticks: {
    callback: Br
  }
});
function hg(n, t) {
  const e = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: d, maxDigits: u, includeBounds: h } = n, f = o || 1, p = d - 1, { min: g, max: m } = t, y = !et(r), _ = !et(a), v = !et(c), w = (m - g) / (u + 1);
  let x = Fo((m - g) / p / f) * f, k, C, P, A;
  if (x < 1e-14 && !y && !_)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  A = Math.ceil(m / x) - Math.floor(g / x), A > p && (x = Fo(A * x / p / f) * f), et(l) || (k = Math.pow(10, l), x = Math.ceil(x * k) / k), s === "ticks" ? (C = Math.floor(g / x) * x, P = Math.ceil(m / x) * x) : (C = g, P = m), y && _ && o && fd((a - r) / o, x / 1e3) ? (A = Math.round(Math.min((a - r) / x, d)), x = (a - r) / A, C = r, P = a) : v ? (C = y ? r : C, P = _ ? a : P, A = c - 1, x = (P - C) / A) : (A = (P - C) / x, kn(A, Math.round(A), x / 1e3) ? A = Math.round(A) : A = Math.ceil(A));
  const D = Math.max(jo(x), jo(C));
  k = Math.pow(10, et(l) ? D : l), C = Math.round(C * k) / k, P = Math.round(P * k) / k;
  let I = 0;
  for (y && (h && C !== r ? (e.push({
    value: r
  }), C < r && I++, kn(Math.round((C + I * x) * k) / k, r, Wr(r, w, n)) && I++) : C < r && I++); I < A; ++I)
    e.push({
      value: Math.round((C + I * x) * k) / k
    });
  return _ && h && P !== a ? e.length && kn(e[e.length - 1].value, a, Wr(a, w, n)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!_ || P === a) && e.push({
    value: P
  }), e;
}
function Wr(n, t, { horizontal: e, minRotation: i }) {
  const s = Mt(i), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + n).length;
  return Math.min(t / o, r);
}
class Ri extends Ie {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return et(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
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
    }, o = this._range || this, r = hg(s, o);
    return t.bounds === "ticks" && Ba(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return Hn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ii extends Ri {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = gt(t) ? t : 0, this.max = gt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = Mt(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
R(Ii, "id", "linear"), R(Ii, "defaults", {
  ticks: {
    callback: ji.formatters.numeric
  }
});
const Wn = (n) => Math.floor(ae(n)), Me = (n, t) => Math.pow(10, Wn(n) + t);
function Nr(n) {
  return n / Math.pow(10, Wn(n)) === 1;
}
function $r(n, t, e) {
  const i = Math.pow(10, e), s = Math.floor(n / i);
  return Math.ceil(t / i) - s;
}
function fg(n, t) {
  const e = t - n;
  let i = Wn(e);
  for (; $r(n, t, i) > 10; )
    i++;
  for (; $r(n, t, i) < 10; )
    i--;
  return Math.min(i, Wn(n));
}
function gg(n, { min: t, max: e }) {
  t = Ft(n.min, t);
  const i = [], s = Wn(t);
  let o = fg(t, e), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * r) / r, d = Math.floor((t - l) / a / 10) * a * 10;
  let u = Math.floor((c - d) / Math.pow(10, o)), h = Ft(n.min, Math.round((l + d + u * Math.pow(10, o)) * r) / r);
  for (; h < e; )
    i.push({
      value: h,
      major: Nr(h),
      significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, r = o >= 0 ? 1 : r), h = Math.round((l + d + u * Math.pow(10, o)) * r) / r;
  const f = Ft(n.max, h);
  return i.push({
    value: f,
    major: Nr(f),
    significand: u
  }), i;
}
class Ds extends Ie {
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
    this.min = gt(t) ? Math.max(0, t) : null, this.max = gt(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !gt(this._userMin) && (this.min = t === Me(this.min, 0) ? Me(this.min, -1) : Me(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min, s = this.max;
    const o = (a) => i = t ? i : a, r = (a) => s = e ? s : a;
    i === s && (i <= 0 ? (o(1), r(10)) : (o(Me(i, -1)), r(Me(s, 1)))), i <= 0 && o(Me(s, -1)), s <= 0 && r(Me(i, 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, i = gg(e, this);
    return t.bounds === "ticks" && Ba(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : Hn(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = ae(t), this._valueRange = ae(this.max) - ae(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (ae(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
R(Ds, "id", "logarithmic"), R(Ds, "defaults", {
  ticks: {
    callback: ji.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Rs(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Ct(t.backdropPadding);
    return W(t.font && t.font.size, pt.font.size) + e.height;
  }
  return 0;
}
function pg(n, t, e) {
  return e = lt(e) ? e : [
    e
  ], {
    w: Ad(n, t.string, e),
    h: e.length * t.lineHeight
  };
}
function Vr(n, t, e, i, s) {
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
function mg(n) {
  const t = {
    l: n.left + n._padding.left,
    r: n.right - n._padding.right,
    t: n.top + n._padding.top,
    b: n.bottom - n._padding.bottom
  }, e = Object.assign({}, t), i = [], s = [], o = n._pointLabels.length, r = n.options.pointLabels, a = r.centerPointLabels ? it / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(n.getPointLabelContext(l));
    s[l] = c.padding;
    const d = n.getPointPosition(l, n.drawingArea + s[l], a), u = vt(c.font), h = pg(n.ctx, u, n._pointLabels[l]);
    i[l] = h;
    const f = jt(n.getIndexAngle(l) + a), p = Math.round(Fi(f)), g = Vr(p, d.x, h.w, 0, 180), m = Vr(p, d.y, h.h, 90, 270);
    bg(e, t, f, g, m);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), n._pointLabelItems = yg(n, i, s);
}
function bg(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  i.start < t.l ? (a = (t.l - i.start) / o, n.l = Math.min(n.l, t.l - a)) : i.end > t.r && (a = (i.end - t.r) / o, n.r = Math.max(n.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, n.t = Math.min(n.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, n.b = Math.max(n.b, t.b + l));
}
function yg(n, t, e) {
  const i = [], s = n._pointLabels.length, o = n.options, r = Rs(o) / 2, a = n.drawingArea, l = o.pointLabels.centerPointLabels ? it / s : 0;
  for (let c = 0; c < s; c++) {
    const d = n.getPointPosition(c, a + r + e[c], l), u = Math.round(Fi(jt(d.angle + _t))), h = t[c], f = vg(d.y, h.h, u), p = xg(u), g = _g(d.x, h.w, p);
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
function xg(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function _g(n, t, e) {
  return e === "right" ? n -= t : e === "center" && (n -= t / 2), n;
}
function vg(n, t, e) {
  return e === 90 || e === 270 ? n -= t / 2 : (e > 270 || e < 90) && (n -= t), n;
}
function wg(n, t) {
  const { ctx: e, options: { pointLabels: i } } = n;
  for (let s = t - 1; s >= 0; s--) {
    const o = i.setContext(n.getPointLabelContext(s)), r = vt(o.font), { x: a, y: l, textAlign: c, left: d, top: u, right: h, bottom: f } = n._pointLabelItems[s], { backdropColor: p } = o;
    if (!et(p)) {
      const g = ue(o.borderRadius), m = Ct(o.backdropPadding);
      e.fillStyle = p;
      const y = d - m.left, _ = u - m.top, v = h - d + m.width, w = f - u + m.height;
      Object.values(g).some((x) => x !== 0) ? (e.beginPath(), Ge(e, {
        x: y,
        y: _,
        w: v,
        h: w,
        radius: g
      }), e.fill()) : e.fillRect(y, _, v, w);
    }
    Re(e, n._pointLabels[s], a, l + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function Il(n, t, e, i) {
  const { ctx: s } = n;
  if (e)
    s.arc(n.xCenter, n.yCenter, t, 0, ht);
  else {
    let o = n.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      o = n.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function Sg(n, t, e, i, s) {
  const o = n.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !i || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash), o.lineDashOffset = s.dashOffset, o.beginPath(), Il(n, e, r, i), o.closePath(), o.stroke(), o.restore());
}
function kg(n, t, e) {
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
    const t = this._padding = Ct(Rs(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = gt(t) && !isNaN(t) ? t : 0, this.max = gt(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Rs(this.options));
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
    t.display && t.pointLabels.display ? mg(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
  }
  getIndexAngle(t) {
    const e = ht / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return jt(t * e + Mt(i));
  }
  getDistanceFromCenterForValue(t) {
    if (et(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (et(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return kg(this.getContext(), t, i);
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
      i.save(), i.beginPath(), Il(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: i, grid: s, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && wg(this, r), s.display && this.ticks.forEach((d, u) => {
      if (u !== 0) {
        l = this.getDistanceFromCenterForValue(d.value);
        const h = this.getContext(u), f = s.setContext(h), p = o.setContext(h);
        Sg(this, f, l, r, p);
      }
    }), i.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const d = i.setContext(this.getPointLabelContext(a)), { color: u, lineWidth: h } = d;
        !h || !u || (t.lineWidth = h, t.strokeStyle = u, t.setLineDash(d.borderDash), t.lineDashOffset = d.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
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
        const u = Ct(c.backdropPadding);
        t.fillRect(-r / 2 - u.left, -o - d.size / 2 - u.top, r + u.width, d.size + u.height);
      }
      Re(t, a.label, 0, -o, d, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
R(vn, "id", "radialLinear"), R(vn, "defaults", {
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
    callback: ji.formatters.numeric
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
}), R(vn, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), R(vn, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const Bi = {
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
}, Lt = Object.keys(Bi);
function Mg(n, t) {
  return n - t;
}
function Hr(n, t) {
  if (et(t))
    return null;
  const e = n._adapter, { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let r = t;
  return typeof i == "function" && (r = i(r)), gt(r) || (r = typeof i == "string" ? e.parse(r, i) : e.parse(r)), r === null ? null : (s && (r = s === "week" && (qe(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, s)), +r);
}
function Yr(n, t, e, i) {
  const s = Lt.length;
  for (let o = Lt.indexOf(n); o < s - 1; ++o) {
    const r = Bi[Lt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= i)
      return Lt[o];
  }
  return Lt[s - 1];
}
function Cg(n, t, e, i, s) {
  for (let o = Lt.length - 1; o >= Lt.indexOf(e); o--) {
    const r = Lt[o];
    if (Bi[r].common && n._adapter.diff(s, i, r) >= t - 1)
      return r;
  }
  return Lt[e ? Lt.indexOf(e) : 0];
}
function Pg(n) {
  for (let t = Lt.indexOf(n) + 1, e = Lt.length; t < e; ++t)
    if (Bi[Lt[t]].common)
      return Lt[t];
}
function Ur(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = $s(e, t), o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function Og(n, t, e, i) {
  const s = n._adapter, o = +s.startOf(t[0].value, i), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, i))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Xr(n, t, e) {
  const i = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, i.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? i : Og(n, i, s, e);
}
class Nn extends Ie {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new Yu._date(t.adapters.date);
    s.init(e), Sn(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Hr(this, t);
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
    const o = this.min, r = this.max, a = bd(s, o, r);
    return this._unit = e.unit || (i.autoSkip ? Yr(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Cg(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : Pg(this._unit), this.initOffsets(s), t.reverse && a.reverse(), Xr(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = Pt(e, 0, r), i = Pt(i, 0, r), this._offsets = {
      start: e,
      end: i,
      factor: 1 / (e + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, i = this.max, s = this.options, o = s.time, r = o.unit || Yr(o.minUnit, e, i, this._getLabelCapacity(e)), a = W(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = qe(l) || l === !0, d = {};
    let u = e, h, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(i, e, r) > 1e5 * a)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + r);
    const p = s.ticks.source === "data" && this.getDataTimestamps();
    for (h = u, f = 0; h < i; h = +t.add(h, a, r), f++)
      Ur(d, h, p);
    return (h === i || s.bounds === "ticks" || f === 1) && Ur(d, h, p), Object.keys(d).sort((g, m) => g - m).map((g) => +g);
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
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, d = l && a[l], u = c && a[c], h = i[e], f = c && u && h && h.major;
    return this._adapter.format(t, s || (f ? u : d));
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
    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = Mt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + a * r,
      h: i * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, Xr(this, [
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
      t.push(Hr(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return $a(t.sort(Mg));
  }
}
R(Nn, "id", "time"), R(Nn, "defaults", {
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
class Is extends Nn {
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
R(Is, "id", "timeseries"), R(Is, "defaults", Nn.defaults);
Object.freeze({
  __proto__: null,
  CategoryScale: Di,
  LinearScale: Ii,
  LogarithmicScale: Ds,
  RadialLinearScale: vn,
  TimeScale: Nn,
  TimeSeriesScale: Is
});
const Kr = {
  modes: {
    point(n, t) {
      return xi(n, t, { intersect: !0 });
    },
    nearest(n, t, e) {
      return Tg(n, t, e);
    },
    x(n, t, e) {
      return xi(n, t, { intersect: e.intersect, axis: "x" });
    },
    y(n, t, e) {
      return xi(n, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function Qs(n, t, e) {
  return (Kr.modes[e.mode] || Kr.modes.nearest)(n, t, e);
}
function Eg(n, t, e) {
  return e !== "x" && e !== "y" ? n.inRange(t.x, t.y, "x", !0) || n.inRange(t.x, t.y, "y", !0) : n.inRange(t.x, t.y, e, !0);
}
function Ag(n, t, e) {
  return e === "x" ? { x: n.x, y: t.y } : e === "y" ? { x: t.x, y: n.y } : t;
}
function xi(n, t, e) {
  return n.visibleElements.filter((i) => e.intersect ? i.inRange(t.x, t.y) : Eg(i, t, e.axis));
}
function Tg(n, t, e) {
  let i = Number.POSITIVE_INFINITY;
  return xi(n, t, e).reduce((s, o) => {
    const r = o.getCenterPoint(), a = Ag(t, r, e.axis), l = Fn(t, a);
    return l < i ? (s = [o], i = l) : l === i && s.push(o), s;
  }, []).sort((s, o) => s._index - o._index).slice(0, 1);
}
const Ls = ["enter", "leave"], to = Ls.concat("click");
function Dg(n, t, e) {
  t.listened = !1, t.moveListened = !1, t._getElements = Qs, to.forEach((i) => {
    typeof e[i] == "function" ? (t.listened = !0, t.listeners[i] = e[i]) : St(t.listeners[i]) && delete t.listeners[i];
  }), Ls.forEach((i) => {
    typeof e[i] == "function" && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((i) => {
    !t.listened && typeof i.click == "function" && (t.listened = !0), t.moveListened || Ls.forEach((s) => {
      typeof i[s] == "function" && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function Rg(n, t, e) {
  if (n.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return Ig(n, t, e);
      case "click":
        return Lg(n, t, e);
    }
}
function Ig(n, t, e) {
  if (!n.moveListened)
    return;
  let i;
  t.type === "mousemove" ? i = Qs(n, t, e.interaction) : i = [];
  const s = n.hovered;
  n.hovered = i;
  const o = { state: n, event: t };
  let r = qr(o, "leave", s, i);
  return qr(o, "enter", i, s) || r;
}
function qr({ state: n, event: t }, e, i, s) {
  let o;
  for (const r of i)
    s.indexOf(r) < 0 && (o = Ll(r.options[e] || n.listeners[e], r, t) || o);
  return o;
}
function Lg(n, t, e) {
  const i = n.listeners, s = Qs(n, t, e.interaction);
  let o;
  for (const r of s)
    o = Ll(r.options.click || i.click, r, t) || o;
  return o;
}
function Ll(n, t, e) {
  return dt(n, [t.$context, e]) === !0;
}
const Fg = (n, t) => t > n || n.length > t.length && n.slice(0, t.length) === t, Ae = 1e-3, eo = (n, t, e) => Math.min(e, Math.max(t, n));
function jg(n, t, e) {
  for (const i of Object.keys(n))
    n[i] = eo(n[i], t, e);
  return n;
}
function zg(n, t, e, i) {
  if (!n || !t || e <= 0)
    return !1;
  const s = i / 2;
  return Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2) <= Math.pow(e + s, 2);
}
function Fl(n, { x: t, y: e, x2: i, y2: s }, o, r) {
  const a = r / 2, l = n.x >= t - a - Ae && n.x <= i + a + Ae, c = n.y >= e - a - Ae && n.y <= s + a + Ae;
  return o === "x" ? l : (o === "y" || l) && c;
}
function sn(n, t) {
  const { centerX: e, centerY: i } = n.getProps(["centerX", "centerY"], t);
  return { x: e, y: i };
}
function Bg(n, t, e, i = !0) {
  const s = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = s[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (Fg(a, r)) {
      if (i)
        throw new Error(`${n} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const jl = (n) => typeof n == "string" && n.endsWith("%"), zl = (n) => eo(parseFloat(n) / 100, 0, 1);
function no(n, t) {
  return t === "start" ? 0 : t === "end" ? n : jl(t) ? zl(t) * n : n / 2;
}
function Qe(n, t) {
  return typeof t == "number" ? t : jl(t) ? zl(t) * n : n;
}
function Wg(n, t) {
  const { x: e, width: i } = n, s = t.textAlign;
  return s === "center" ? e + i / 2 : s === "end" || s === "right" ? e + i : e;
}
function Bl(n) {
  return X(n) ? {
    x: W(n.x, "center"),
    y: W(n.y, "center")
  } : (n = W(n, "center"), {
    x: n,
    y: n
  });
}
function Wl(n) {
  return n && (St(n.xValue) || St(n.yValue));
}
const ps = /* @__PURE__ */ new Map();
function io(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function so(n, { x: t, y: e }, i) {
  i && (n.translate(t, e), n.rotate(Mt(i)), n.translate(-t, -e));
}
function Le(n, t) {
  if (t && t.borderWidth)
    return n.lineCap = t.borderCapStyle, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.lineJoin = t.borderJoinStyle, n.lineWidth = t.borderWidth, n.strokeStyle = t.borderColor, !0;
}
function on(n, t) {
  n.shadowColor = t.backgroundShadowColor, n.shadowBlur = t.shadowBlur, n.shadowOffsetX = t.shadowOffsetX, n.shadowOffsetY = t.shadowOffsetY;
}
function oo(n, t) {
  const e = t.content;
  if (io(e))
    return {
      width: Qe(e.width, t.width),
      height: Qe(e.height, t.height)
    };
  const i = vt(t.font), s = t.textStrokeWidth, o = lt(e) ? e : [e], r = o.join() + i.string + s + (n._measureText ? "-spriting" : "");
  if (!ps.has(r)) {
    n.save(), n.font = i.string;
    const a = o.length;
    let l = 0;
    for (let d = 0; d < a; d++) {
      const u = o[d];
      l = Math.max(l, n.measureText(u).width + s);
    }
    n.restore();
    const c = a * i.lineHeight + s;
    ps.set(r, { width: l, height: c });
  }
  return ps.get(r);
}
function Nl(n, t, e) {
  const { x: i, y: s, width: o, height: r } = t;
  n.save(), on(n, e);
  const a = Le(n, e);
  n.fillStyle = e.backgroundColor, n.beginPath(), Ge(n, {
    x: i,
    y: s,
    w: o,
    h: r,
    radius: jg(ue(e.borderRadius), 0, Math.min(o, r) / 2)
  }), n.closePath(), n.fill(), a && (n.shadowColor = e.borderShadowColor, n.stroke()), n.restore();
}
function Ng(n, t, e) {
  const i = e.content;
  if (io(i)) {
    n.drawImage(i, t.x, t.y, t.width, t.height);
    return;
  }
  const s = lt(i) ? i : [i], o = vt(e.font), r = o.lineHeight, a = Wg(t, e), l = t.y + r / 2 + e.textStrokeWidth / 2;
  n.save(), n.font = o.string, n.textBaseline = "middle", n.textAlign = e.textAlign, $g(n, e) && s.forEach((c, d) => n.strokeText(c, a, l + d * r)), n.fillStyle = e.color, s.forEach((c, d) => n.fillText(c, a, l + d * r)), n.restore();
}
function $g(n, t) {
  if (t.textStrokeWidth > 0)
    return n.lineJoin = "round", n.miterLimit = 2, n.lineWidth = t.textStrokeWidth, n.strokeStyle = t.textStrokeColor, !0;
}
function tn(n, t, e) {
  return t = typeof t == "number" ? t : n.parse(t), gt(t) ? n.getPixelForValue(t) : e;
}
function me(n, t, e) {
  const i = t[e];
  if (i || e === "scaleID")
    return i;
  const s = e.charAt(0), o = Object.values(n).filter((r) => r.axis && r.axis === s);
  return o.length ? o[0].id : s;
}
function $l(n, t) {
  if (n) {
    const e = n.options.reverse, i = tn(n, t.min, e ? t.end : t.start), s = tn(n, t.max, e ? t.start : t.end);
    return {
      start: i,
      end: s
    };
  }
}
function Vl(n, t) {
  const { chartArea: e, scales: i } = n, s = i[me(i, t, "xScaleID")], o = i[me(i, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return s && (r = tn(s, t.xValue, s.left + s.width / 2)), o && (a = tn(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function ro(n, t) {
  const e = n.scales, i = e[me(e, t, "xScaleID")], s = e[me(e, t, "yScaleID")];
  if (!i && !s)
    return {};
  let { left: o, right: r } = i || n.chartArea, { top: a, bottom: l } = s || n.chartArea;
  const c = Gr(i, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const d = Gr(s, { min: t.yMin, max: t.yMax, start: l, end: a });
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
function Hl(n, t) {
  if (!Wl(t)) {
    const e = ro(n, t);
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
  return Vg(n, t);
}
function Yl(n, t) {
  const e = ro(n, t), { x: i, y: s } = e;
  return e.elements = [{
    type: "label",
    optionScope: "label",
    properties: Ug(n, e, t)
  }], e.initProperties = { x: i, y: s }, e;
}
function Vg(n, t) {
  const e = Vl(n, t), i = t.radius * 2;
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
function Gr(n, t) {
  const e = $l(n, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function Hg({ properties: n, options: t }, e, i, s) {
  const { x: o, x2: r, width: a } = n;
  return Ul({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.x,
    padding: { start: s.left, end: s.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function Yg({ properties: n, options: t }, e, i, s) {
  const { y: o, y2: r, height: a } = n;
  return Ul({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.y,
    padding: { start: s.top, end: s.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function Ul(n, t) {
  const { start: e, end: i, borderWidth: s } = n, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = i - s - e - r - a - t.size;
  return e + s / 2 + l + no(c, o);
}
function Ug(n, t, e) {
  const i = e.label;
  i.backgroundColor = "transparent", i.callout.display = !1;
  const s = Bl(i.position), o = Ct(i.padding), r = oo(n.ctx, i), a = Hg({ properties: t, options: e }, r, s, o), l = Yg({ properties: t, options: e }, r, s, o), c = r.width + o.width, d = r.height + o.height;
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
function Xg(n, t, e) {
  const i = Zg(n.scales, t, e);
  let s = Jr(t, i, "min", "suggestedMin");
  s = Jr(t, i, "max", "suggestedMax") || s, s && typeof t.handleTickRangeOptions == "function" && t.handleTickRangeOptions();
}
function Kg(n, t) {
  for (const e of n)
    Gg(e, t);
}
function Jr(n, t, e, i) {
  if (gt(t[e]) && !qg(n.options, e, i)) {
    const s = n[e] !== t[e];
    return n[e] = t[e], s;
  }
}
function qg(n, t, e) {
  return St(n[t]) || St(n[e]);
}
function Gg(n, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const i = me(t, n, e);
    i && !t[i] && Jg(n, e) && console.warn(`No scale found with id '${i}' for annotation '${n.id}'`);
  }
}
function Jg(n, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const i of ["Min", "Max", "Value"])
    if (St(n[e + i]))
      return !0;
  return !1;
}
function Zg(n, t, e) {
  const i = t.axis, s = t.id, o = i + "ScaleID", r = {
    min: W(t.min, Number.NEGATIVE_INFINITY),
    max: W(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === s ? Zr(a, t, ["value", "endValue"], r) : me(n, a, o) === s && Zr(a, t, [i + "Min", i + "Max", i + "Value"], r);
  return r;
}
function Zr(n, t, e, i) {
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
    const { x: o, y: r } = rn({ x: t, y: e }, this.getCenterPoint(s), Mt(-this.options.rotation));
    return Fl({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    t.save(), so(t, this.getCenterPoint(), this.options.rotation), Nl(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return Yl(t, e);
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
const Xl = ["left", "bottom", "top", "right"];
class Kn extends Et {
  inRange(t, e, i, s) {
    const { x: o, y: r } = rn({ x: t, y: e }, this.getCenterPoint(s), Mt(-this.rotation));
    return Fl({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const e = this.options, i = !St(this._visible) || this._visible;
    !e.display || !e.content || !i || (t.save(), so(t, this.getCenterPoint(), this.rotation), tp(t, this), Nl(t, this, e), Ng(t, ap(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let i;
    if (Wl(e))
      i = Vl(t, e);
    else {
      const { centerX: a, centerY: l } = ro(t, e);
      i = { x: a, y: l };
    }
    const s = Ct(e.padding), o = oo(t.ctx, e), r = Qg(i, o, e, s);
    return {
      pointX: i.x,
      pointY: i.y,
      ...r,
      rotation: e.rotation
    };
  }
}
Kn.id = "labelAnnotation";
Kn.defaults = {
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
Kn.defaultRoutes = {
  borderColor: "color"
};
function Qg(n, t, e, i) {
  const s = t.width + i.width + e.borderWidth, o = t.height + i.height + e.borderWidth, r = Bl(e.position), a = Qr(n.x, s, e.xAdjust, r.x), l = Qr(n.y, o, e.yAdjust, r.y);
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
function Qr(n, t, e = 0, i) {
  return n - no(t, i) + e;
}
function tp(n, t) {
  const { pointX: e, pointY: i, options: s } = t, o = s.callout, r = o && o.display && op(t, o);
  if (!r || lp(t, o, r))
    return;
  if (n.save(), n.beginPath(), !Le(n, o))
    return n.restore();
  const { separatorStart: l, separatorEnd: c } = ep(t, r), { sideStart: d, sideEnd: u } = ip(t, r, l);
  (o.margin > 0 || s.borderWidth === 0) && (n.moveTo(l.x, l.y), n.lineTo(c.x, c.y)), n.moveTo(d.x, d.y), n.lineTo(u.x, u.y);
  const h = rn({ x: e, y: i }, t.getCenterPoint(), Mt(-t.rotation));
  n.lineTo(h.x, h.y), n.stroke(), n.restore();
}
function ep(n, t) {
  const { x: e, y: i, x2: s, y2: o } = n, r = np(n, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: i }, l = { x: a.x, y: o }) : (a = { x: e, y: i + r }, l = { x: s, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function np(n, t) {
  const { width: e, height: i, options: s } = n, o = s.callout.margin + s.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? i + o : -o;
}
function ip(n, t, e) {
  const { y: i, width: s, height: o, options: r } = n, a = r.callout.start, l = sp(t, r.callout);
  let c, d;
  return t === "left" || t === "right" ? (c = { x: e.x, y: i + Qe(o, a) }, d = { x: c.x + l, y: c.y }) : (c = { x: e.x + Qe(s, a), y: e.y }, d = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: d };
}
function sp(n, t) {
  const e = t.side;
  return n === "left" || n === "top" ? -e : e;
}
function op(n, t) {
  const e = t.position;
  return Xl.includes(e) ? e : rp(n, t);
}
function rp(n, t) {
  const { x: e, y: i, x2: s, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: d, centerY: u, rotation: h } = n, f = { x: d, y: u }, p = t.start, g = Qe(r, p), m = Qe(a, p), y = [e, e + g, e + g, s], _ = [i + m, o, i, o], v = [];
  for (let w = 0; w < 4; w++) {
    const x = rn({ x: y[w], y: _[w] }, f, Mt(h));
    v.push({
      position: Xl[w],
      distance: Fn(x, { x: l, y: c })
    });
  }
  return v.sort((w, x) => w.distance - x.distance)[0].position;
}
function ap({ x: n, y: t, width: e, height: i, options: s }) {
  const o = s.borderWidth / 2, r = Ct(s.padding);
  return {
    x: n + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - s.borderWidth,
    height: i - r.top - r.bottom - s.borderWidth
  };
}
function lp(n, t, e) {
  const { pointX: i, pointY: s } = n, o = t.margin;
  let r = i, a = s;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), n.inRange(r, a);
}
const ao = (n, t, e) => ({ x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) }), Fs = (n, t, e) => ao(t, e, Math.abs((n - t.y) / (e.y - t.y))).x, ta = (n, t, e) => ao(t, e, Math.abs((n - t.x) / (e.x - t.x))).y, wn = (n) => n * n, cp = (n, t, { x: e, y: i, x2: s, y2: o }, r) => r === "y" ? { start: Math.min(i, o), end: Math.max(i, o), value: t } : { start: Math.min(e, s), end: Math.max(e, s), value: n };
class qn extends Et {
  inRange(t, e, i, s) {
    const o = this.options.borderWidth / 2;
    if (i !== "x" && i !== "y") {
      const a = wn(o), l = { mouseX: t, mouseY: e };
      return hp(this, l, a, s) || ia(this, l, s);
    }
    const r = cp(t, e, this.getProps(["x", "y", "x2", "y2"], s), i);
    return r.value >= r.start - o && r.value <= r.end + o || ia(this, { mouseX: t, mouseY: e }, s, i);
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const { x: e, y: i, x2: s, y2: o, options: r } = this;
    if (t.save(), !Le(t, r))
      return t.restore();
    on(t, r);
    const a = Math.atan2(o - i, s - e), l = Math.sqrt(Math.pow(s - e, 2) + Math.pow(o - i, 2)), { startOpts: c, endOpts: d, startAdjust: u, endAdjust: h } = xp(this);
    t.translate(e, i), t.rotate(a), t.beginPath(), t.moveTo(0 + u, 0), t.lineTo(l - h, 0), t.shadowColor = r.borderShadowColor, t.stroke(), la(t, 0, u, c), la(t, l, -h, d), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const { scales: i, chartArea: s } = t, o = i[e.scaleID], r = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
    let a, l;
    if (o)
      a = tn(o, e.value, NaN), l = tn(o, e.endValue, a), o.isHorizontal() ? (r.x = a, r.x2 = l) : (r.y = a, r.y2 = l);
    else {
      const m = i[me(i, e, "xScaleID")], y = i[me(i, e, "yScaleID")];
      m && sa(r, m, { min: e.xMin, max: e.xMax, start: m.left, end: m.right, startProp: "x", endProp: "x2" }), y && sa(r, y, { min: e.yMin, max: e.yMax, start: y.bottom, end: y.top, startProp: "y", endProp: "y2" });
    }
    const { x: c, y: d, x2: u, y2: h } = r, f = dp(r, t.chartArea), p = f ? up({ x: c, y: d }, { x: u, y: h }, t.chartArea) : { x: c, y: d, x2: u, y2: h, width: Math.abs(u - c), height: Math.abs(h - d) };
    p.centerX = (u + c) / 2, p.centerY = (h + d) / 2;
    const g = fp(t, p, e.label);
    return g._visible = f, p.elements = [{
      type: "label",
      optionScope: "label",
      properties: g
    }], p;
  }
}
qn.id = "lineAnnotation";
const ea = {
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
qn.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, ea),
    fill: !1,
    length: 12,
    start: Object.assign({}, ea),
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
    callout: Object.assign({}, Kn.defaults.callout),
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
qn.descriptors = {
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
qn.defaultRoutes = {
  borderColor: "color"
};
function dp({ x: n, y: t, x2: e, y2: i }, { top: s, right: o, bottom: r, left: a }) {
  return !(n < a && e < a || n > o && e > o || t < s && i < s || t > r && i > r);
}
function na({ x: n, y: t }, e, { top: i, right: s, bottom: o, left: r }) {
  return n < r && (t = ta(r, { x: n, y: t }, e), n = r), n > s && (t = ta(s, { x: n, y: t }, e), n = s), t < i && (n = Fs(i, { x: n, y: t }, e), t = i), t > o && (n = Fs(o, { x: n, y: t }, e), t = o), { x: n, y: t };
}
function up(n, t, e) {
  const { x: i, y: s } = na(n, t, e), { x: o, y: r } = na(t, n, e);
  return { x: i, y: s, x2: o, y2: r, width: Math.abs(o - i), height: Math.abs(r - s) };
}
function hp(n, { mouseX: t, mouseY: e }, i = Ae, s) {
  const { x: o, y: r, x2: a, y2: l } = n.getProps(["x", "y", "x2", "y2"], s), c = a - o, d = l - r, u = wn(c) + wn(d), h = u === 0 ? -1 : ((t - o) * c + (e - r) * d) / u;
  let f, p;
  return h < 0 ? (f = o, p = r) : h > 1 ? (f = a, p = l) : (f = o + h * c, p = r + h * d), wn(t - f) + wn(e - p) <= i;
}
function ia(n, { mouseX: t, mouseY: e }, i, s) {
  const o = n.label;
  return o.options.display && o.inRange(t, e, s, i);
}
function sa(n, t, e) {
  const i = $l(t, e);
  n[e.startProp] = i.start, n[e.endProp] = i.end;
}
function fp(n, t, e) {
  const i = e.borderWidth, s = Ct(e.padding), o = oo(n.ctx, e), r = o.width + s.width + i, a = o.height + s.height + i;
  return pp(t, e, { width: r, height: a, padding: s }, n.chartArea);
}
function gp(n) {
  const { x: t, y: e, x2: i, y2: s } = n, o = Math.atan2(s - e, i - t);
  return o > it / 2 ? o - it : o < it / -2 ? o + it : o;
}
function pp(n, t, e, i) {
  const { width: s, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: n.x, y: n.y }, d = { x: n.x2, y: n.y2 }, u = t.rotation === "auto" ? gp(n) : Mt(t.rotation), h = mp(s, o, u), f = bp(n, t, { labelSize: h, padding: r }, i), p = ao(c, d, f), g = { size: h.w, min: i.left, max: i.right, padding: r.left }, m = { size: h.h, min: i.top, max: i.bottom, padding: r.top }, y = ra(p.x, g) + a, _ = ra(p.y, m) + l;
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
    rotation: Fi(u)
  };
}
function mp(n, t, e) {
  const i = Math.cos(e), s = Math.sin(e);
  return {
    w: Math.abs(n * i) + Math.abs(t * s),
    h: Math.abs(n * s) + Math.abs(t * i)
  };
}
function bp(n, t, e, i) {
  let s;
  const o = yp(n, i);
  return t.position === "start" ? s = oa({ w: n.x2 - n.x, h: n.y2 - n.y }, e, t, o) : t.position === "end" ? s = 1 - oa({ w: n.x - n.x2, h: n.y - n.y2 }, e, t, o) : s = no(1, t.position), s;
}
function oa(n, t, e, i) {
  const { labelSize: s, padding: o } = t, r = n.w * i.dx, a = n.h * i.dy, l = r > 0 && (s.w / 2 + o.left - i.x) / r, c = a > 0 && (s.h / 2 + o.top - i.y) / a;
  return eo(Math.max(l, c), 0, 0.25);
}
function yp(n, t) {
  const { x: e, x2: i, y: s, y2: o } = n, r = Math.min(s, o) - t.top, a = Math.min(e, i) - t.left, l = t.bottom - Math.max(s, o), c = t.right - Math.max(e, i);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function ra(n, t) {
  const { size: e, min: i, max: s, padding: o } = t, r = e / 2;
  return e > s - i ? (s + i) / 2 : (i >= n - o - r && (n = i + o + r), s <= n + o + r && (n = s - o - r), n);
}
function xp(n) {
  const t = n.options, e = t.arrowHeads && t.arrowHeads.start, i = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: i,
    startAdjust: aa(n, e),
    endAdjust: aa(n, i)
  };
}
function aa(n, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: i } = t, s = n.options.borderWidth / 2, o = { x: e, y: i + s };
  return Math.abs(Fs(0, o, { x: 0, y: s }));
}
function la(n, t, e, i) {
  if (!i || !i.display)
    return;
  const { length: s, width: o, fill: r, backgroundColor: a, borderColor: l } = i, c = Math.abs(t - s) + e;
  n.beginPath(), on(n, i), Le(n, i), n.moveTo(c, -o), n.lineTo(t + e, 0), n.lineTo(c, o), r === !0 ? (n.fillStyle = a || l, n.closePath(), n.fill(), n.shadowColor = "transparent") : n.shadowColor = i.borderShadowColor, n.stroke();
}
class Gn extends Et {
  inRange(t, e, i, s) {
    const o = this.options.rotation, r = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return _p({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], s), o, r);
    const { x: a, y: l, x2: c, y2: d } = this.getProps(["x", "y", "x2", "y2"], s), u = r / 2, h = i === "y" ? { start: l, end: d } : { start: a, end: c }, f = rn({ x: t, y: e }, this.getCenterPoint(s), Mt(-o));
    return f[i] >= h.start - u - Ae && f[i] <= h.end + u + Ae;
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const { width: e, height: i, centerX: s, centerY: o, options: r } = this;
    t.save(), so(t, this.getCenterPoint(), r.rotation), on(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = Le(t, r);
    t.ellipse(s, o, i / 2, e / 2, it / 2, 0, 2 * it), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return Yl(t, e);
  }
}
Gn.id = "ellipseAnnotation";
Gn.defaults = {
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
Gn.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Gn.descriptors = {
  label: {
    _fallback: !0
  }
};
function _p(n, t, e, i) {
  const { width: s, height: o, centerX: r, centerY: a } = t, l = s / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const d = Mt(e || 0), u = i / 2 || 0, h = Math.cos(d), f = Math.sin(d), p = Math.pow(h * (n.x - r) + f * (n.y - a), 2), g = Math.pow(f * (n.x - r) - h * (n.y - a), 2);
  return p / Math.pow(l + u, 2) + g / Math.pow(c + u, 2) <= 1.0001;
}
class Wi extends Et {
  inRange(t, e, i, s) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], s), d = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return zg({ x: t, y: e }, this.getCenterPoint(s), c / 2, d);
    const u = d / 2, h = i === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t };
    return h.value >= h.start - u && h.value <= h.end + u;
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const e = this.options, i = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, on(t, e);
    const s = Le(t, e);
    e.borderWidth = 0, Ci(t, e, this.centerX, this.centerY), s && !io(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = i;
  }
  resolveElementProperties(t, e) {
    return Hl(t, e);
  }
}
Wi.id = "pointAnnotation";
Wi.defaults = {
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
Wi.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class Ni extends Et {
  inRange(t, e, i, s) {
    if (i !== "x" && i !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && wp(this.elements, t, e, s);
    const o = rn({ x: t, y: e }, this.getCenterPoint(s), Mt(-this.options.rotation)), r = this.elements.map((c) => i === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[i] >= a && o[i] <= l;
  }
  getCenterPoint(t) {
    return sn(this, t);
  }
  draw(t) {
    const { elements: e, options: i } = this;
    t.save(), t.beginPath(), t.fillStyle = i.backgroundColor, on(t, i);
    const s = Le(t, i);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), s && (t.shadowColor = i.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const i = Hl(t, e), { x: s, y: o } = i, { sides: r, rotation: a } = e, l = [], c = 2 * it / r;
    let d = a * za;
    for (let u = 0; u < r; u++, d += c)
      l.push(vp(i, e, d));
    return i.elements = l, i.initProperties = { x: s, y: o }, i;
  }
}
Ni.id = "polygonAnnotation";
Ni.defaults = {
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
Ni.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function vp({ centerX: n, centerY: t }, { radius: e, borderWidth: i }, s) {
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
function wp(n, t, e, i) {
  let s = !1, o = n[n.length - 1].getProps(["bX", "bY"], i);
  for (const r of n) {
    const a = r.getProps(["bX", "bY"], i);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (s = !s), o = a;
  }
  return s;
}
const he = {
  box: an,
  ellipse: Gn,
  label: Kn,
  line: qn,
  point: Wi,
  polygon: Ni
};
Object.keys(he).forEach((n) => {
  pt.describe(`elements.${he[n].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Sp = {
  update: Object.assign
};
function lo(n = "line") {
  return he[n] ? n : (console.warn(`Unknown annotation type: '${n}', defaulting to 'line'`), "line");
}
function kp(n, t, e, i) {
  const s = Cp(n, e.animations, i), o = t.annotations, r = Ep(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = Kl(r, a, l.type), d = l.setContext(Op(n, c, l)), u = c.resolveElementProperties(n, d);
    u.skip = Mp(u), "elements" in u && (Pp(c, u, d, s), delete u.elements), St(c.x) || Object.assign(c, u), u.options = ql(d), s.update(c, u);
  }
}
function Mp(n) {
  return isNaN(n.x) || isNaN(n.y);
}
function Cp(n, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Sp : new qs(n, t);
}
function Pp(n, { elements: t, initProperties: e }, i, s) {
  const o = n.elements || (n.elements = []);
  o.length = t.length;
  for (let r = 0; r < t.length; r++) {
    const a = t[r], l = a.properties, c = Kl(o, r, a.type, e), d = i[a.optionScope].override(a);
    l.options = ql(d), s.update(c, l);
  }
}
function Kl(n, t, e, i) {
  const s = he[lo(e)];
  let o = n[t];
  return (!o || !(o instanceof s)) && (o = n[t] = new s(), X(i) && Object.assign(o, i)), o;
}
function ql(n) {
  const t = he[lo(n.type)], e = {};
  e.id = n.id, e.type = n.type, e.drawTime = n.drawTime, Object.assign(
    e,
    js(n, t.defaults),
    js(n, t.defaultRoutes)
  );
  for (const i of to)
    e[i] = n[i];
  return e;
}
function js(n, t) {
  const e = {};
  for (const i of Object.keys(t)) {
    const s = t[i], o = n[i];
    e[i] = X(s) ? js(o, s) : o;
  }
  return e;
}
function Op(n, t, e) {
  return t.$context || (t.$context = Object.assign(Object.create(n.getContext()), {
    element: t,
    id: e.id,
    type: "annotation"
  }));
}
function Ep(n, t) {
  const e = t.length, i = n.length;
  if (i < e) {
    const s = e - i;
    n.splice(i, 0, ...new Array(s));
  } else
    i > e && n.splice(e, i - e);
  return n;
}
var Ap = "2.1.2";
const se = /* @__PURE__ */ new Map();
var Tp = {
  id: "annotation",
  version: Ap,
  beforeRegister() {
    Bg("chart.js", "3.7", zt.version);
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
    X(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      X(a) && (a.id = r, s.push(a));
    }) : lt(o) && s.push(...o), Kg(s, n.scales);
  },
  afterDataLimits(n, t) {
    const e = se.get(n);
    Xg(n, t.scale, e.annotations.filter((i) => i.display && i.adjustScaleRange));
  },
  afterUpdate(n, t, e) {
    const i = se.get(n);
    Dg(n, i, e), kp(n, i, e, t.mode), i.visibleElements = i.elements.filter((s) => !s.skip && s.options.display);
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
    Rg(i, t.event, e) && (t.changed = !0);
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
    _scriptable: (n) => !to.includes(n),
    annotations: {
      _allKeys: !1,
      _fallback: (n, t) => `elements.${he[lo(t.type)].id}`
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
  e && Yn(i, s);
  const r = Dp(o, t).sort((a, l) => a.options.z - l.options.z);
  for (const a of r)
    a.draw(n.ctx, s);
  e && Un(i);
}
function Dp(n, t) {
  const e = [];
  for (const i of n)
    if (i.options.drawTime === t && e.push(i), i.elements && i.elements.length)
      for (const s of i.elements)
        s.options.display && s.options.drawTime === t && e.push(s);
  return e;
}
var $i = { exports: {} }, gn = {}, ca;
function Rp() {
  if (ca)
    return gn;
  ca = 1;
  var n = Ta, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return gn.Fragment = e, gn.jsx = r, gn.jsxs = r, gn;
}
var pn = {}, da;
function Ip() {
  return da || (da = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ta, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), p = Symbol.iterator, g = "@@iterator";
    function m(b) {
      if (b === null || typeof b != "object")
        return null;
      var M = p && b[p] || b[g];
      return typeof M == "function" ? M : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(b) {
      {
        for (var M = arguments.length, E = new Array(M > 1 ? M - 1 : 0), N = 1; N < M; N++)
          E[N - 1] = arguments[N];
        v("error", b, E);
      }
    }
    function v(b, M, E) {
      {
        var N = y.ReactDebugCurrentFrame, nt = N.getStackAddendum();
        nt !== "" && (M += "%s", E = E.concat([nt]));
        var ct = E.map(function(Q) {
          return String(Q);
        });
        ct.unshift("Warning: " + M), Function.prototype.apply.call(console[b], console, ct);
      }
    }
    var w = !1, x = !1, k = !1, C = !1, P = !1, A;
    A = Symbol.for("react.module.reference");
    function D(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === i || b === o || P || b === s || b === c || b === d || C || b === f || w || x || k || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === u || b.$$typeof === r || b.$$typeof === a || b.$$typeof === l || b.$$typeof === A || b.getModuleId !== void 0));
    }
    function I(b, M, E) {
      var N = b.displayName;
      if (N)
        return N;
      var nt = M.displayName || M.name || "";
      return nt !== "" ? E + "(" + nt + ")" : E;
    }
    function L(b) {
      return b.displayName || "Context";
    }
    function H(b) {
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
            return L(M) + ".Consumer";
          case r:
            var E = b;
            return L(E._context) + ".Provider";
          case l:
            return I(b, b.render, "ForwardRef");
          case u:
            var N = b.displayName || null;
            return N !== null ? N : H(b.type) || "Memo";
          case h: {
            var nt = b, ct = nt._payload, Q = nt._init;
            try {
              return H(Q(ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, Y = 0, U, Z, bt, ut, S, O, z;
    function B() {
    }
    B.__reactDisabledLog = !0;
    function F() {
      {
        if (Y === 0) {
          U = console.log, Z = console.info, bt = console.warn, ut = console.error, S = console.group, O = console.groupCollapsed, z = console.groupEnd;
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
        Y++;
      }
    }
    function $() {
      {
        if (Y--, Y === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, b, {
              value: U
            }),
            info: tt({}, b, {
              value: Z
            }),
            warn: tt({}, b, {
              value: bt
            }),
            error: tt({}, b, {
              value: ut
            }),
            group: tt({}, b, {
              value: S
            }),
            groupCollapsed: tt({}, b, {
              value: O
            }),
            groupEnd: tt({}, b, {
              value: z
            })
          });
        }
        Y < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = y.ReactCurrentDispatcher, V;
    function K(b, M, E) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (nt) {
            var N = nt.stack.trim().match(/\n( *(at )?)/);
            V = N && N[1] || "";
          }
        return `
` + V + b;
      }
    }
    var G = !1, q;
    {
      var At = typeof WeakMap == "function" ? WeakMap : Map;
      q = new At();
    }
    function T(b, M) {
      if (!b || G)
        return "";
      {
        var E = q.get(b);
        if (E !== void 0)
          return E;
      }
      var N;
      G = !0;
      var nt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ct;
      ct = j.current, j.current = null, F();
      try {
        if (M) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch (Kt) {
              N = Kt;
            }
            Reflect.construct(b, [], Q);
          } else {
            try {
              Q.call();
            } catch (Kt) {
              N = Kt;
            }
            b.call(Q.prototype);
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
          for (var J = Kt.stack.split(`
`), Rt = N.stack.split(`
`), wt = J.length - 1, kt = Rt.length - 1; wt >= 1 && kt >= 0 && J[wt] !== Rt[kt]; )
            kt--;
          for (; wt >= 1 && kt >= 0; wt--, kt--)
            if (J[wt] !== Rt[kt]) {
              if (wt !== 1 || kt !== 1)
                do
                  if (wt--, kt--, kt < 0 || J[wt] !== Rt[kt]) {
                    var Nt = `
` + J[wt].replace(" at new ", " at ");
                    return b.displayName && Nt.includes("<anonymous>") && (Nt = Nt.replace("<anonymous>", b.displayName)), typeof b == "function" && q.set(b, Nt), Nt;
                  }
                while (wt >= 1 && kt >= 0);
              break;
            }
        }
      } finally {
        G = !1, j.current = ct, $(), Error.prepareStackTrace = nt;
      }
      var ze = b ? b.displayName || b.name : "", Po = ze ? K(ze) : "";
      return typeof b == "function" && q.set(b, Po), Po;
    }
    function Wt(b, M, E) {
      return T(b, !1);
    }
    function Fe(b) {
      var M = b.prototype;
      return !!(M && M.isReactComponent);
    }
    function ve(b, M, E) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return T(b, Fe(b));
      if (typeof b == "string")
        return K(b);
      switch (b) {
        case c:
          return K("Suspense");
        case d:
          return K("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case l:
            return Wt(b.render);
          case u:
            return ve(b.type, M, E);
          case h: {
            var N = b, nt = N._payload, ct = N._init;
            try {
              return ve(ct(nt), M, E);
            } catch {
            }
          }
        }
      return "";
    }
    var Qn = Object.prototype.hasOwnProperty, po = {}, mo = y.ReactDebugCurrentFrame;
    function ti(b) {
      if (b) {
        var M = b._owner, E = ve(b.type, b._source, M ? M.type : null);
        mo.setExtraStackFrame(E);
      } else
        mo.setExtraStackFrame(null);
    }
    function hc(b, M, E, N, nt) {
      {
        var ct = Function.call.bind(Qn);
        for (var Q in b)
          if (ct(b, Q)) {
            var J = void 0;
            try {
              if (typeof b[Q] != "function") {
                var Rt = Error((N || "React class") + ": " + E + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Rt.name = "Invariant Violation", Rt;
              }
              J = b[Q](M, Q, N, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (wt) {
              J = wt;
            }
            J && !(J instanceof Error) && (ti(nt), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", E, Q, typeof J), ti(null)), J instanceof Error && !(J.message in po) && (po[J.message] = !0, ti(nt), _("Failed %s type: %s", E, J.message), ti(null));
          }
      }
    }
    var fc = Array.isArray;
    function Zi(b) {
      return fc(b);
    }
    function gc(b) {
      {
        var M = typeof Symbol == "function" && Symbol.toStringTag, E = M && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return E;
      }
    }
    function pc(b) {
      try {
        return bo(b), !1;
      } catch {
        return !0;
      }
    }
    function bo(b) {
      return "" + b;
    }
    function yo(b) {
      if (pc(b))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gc(b)), bo(b);
    }
    var ln = y.ReactCurrentOwner, mc = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xo, _o, Qi;
    Qi = {};
    function bc(b) {
      if (Qn.call(b, "ref")) {
        var M = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function yc(b) {
      if (Qn.call(b, "key")) {
        var M = Object.getOwnPropertyDescriptor(b, "key").get;
        if (M && M.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function xc(b, M) {
      if (typeof b.ref == "string" && ln.current && M && ln.current.stateNode !== M) {
        var E = H(ln.current.type);
        Qi[E] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(ln.current.type), b.ref), Qi[E] = !0);
      }
    }
    function _c(b, M) {
      {
        var E = function() {
          xo || (xo = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        E.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function vc(b, M) {
      {
        var E = function() {
          _o || (_o = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", M));
        };
        E.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var wc = function(b, M, E, N, nt, ct, Q) {
      var J = {
        $$typeof: t,
        type: b,
        key: M,
        ref: E,
        props: Q,
        _owner: ct
      };
      return J._store = {}, Object.defineProperty(J._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(J, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(J, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: nt
      }), Object.freeze && (Object.freeze(J.props), Object.freeze(J)), J;
    };
    function Sc(b, M, E, N, nt) {
      {
        var ct, Q = {}, J = null, Rt = null;
        E !== void 0 && (yo(E), J = "" + E), yc(M) && (yo(M.key), J = "" + M.key), bc(M) && (Rt = M.ref, xc(M, nt));
        for (ct in M)
          Qn.call(M, ct) && !mc.hasOwnProperty(ct) && (Q[ct] = M[ct]);
        if (b && b.defaultProps) {
          var wt = b.defaultProps;
          for (ct in wt)
            Q[ct] === void 0 && (Q[ct] = wt[ct]);
        }
        if (J || Rt) {
          var kt = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          J && _c(Q, kt), Rt && vc(Q, kt);
        }
        return wc(b, J, Rt, nt, N, ln.current, Q);
      }
    }
    var ts = y.ReactCurrentOwner, vo = y.ReactDebugCurrentFrame;
    function je(b) {
      if (b) {
        var M = b._owner, E = ve(b.type, b._source, M ? M.type : null);
        vo.setExtraStackFrame(E);
      } else
        vo.setExtraStackFrame(null);
    }
    var es;
    es = !1;
    function ns(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function wo() {
      {
        if (ts.current) {
          var b = H(ts.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function kc(b) {
      {
        if (b !== void 0) {
          var M = b.fileName.replace(/^.*[\\\/]/, ""), E = b.lineNumber;
          return `

Check your code at ` + M + ":" + E + ".";
        }
        return "";
      }
    }
    var So = {};
    function Mc(b) {
      {
        var M = wo();
        if (!M) {
          var E = typeof b == "string" ? b : b.displayName || b.name;
          E && (M = `

Check the top-level render call using <` + E + ">.");
        }
        return M;
      }
    }
    function ko(b, M) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var E = Mc(M);
        if (So[E])
          return;
        So[E] = !0;
        var N = "";
        b && b._owner && b._owner !== ts.current && (N = " It was passed a child from " + H(b._owner.type) + "."), je(b), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, N), je(null);
      }
    }
    function Mo(b, M) {
      {
        if (typeof b != "object")
          return;
        if (Zi(b))
          for (var E = 0; E < b.length; E++) {
            var N = b[E];
            ns(N) && ko(N, M);
          }
        else if (ns(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var nt = m(b);
          if (typeof nt == "function" && nt !== b.entries)
            for (var ct = nt.call(b), Q; !(Q = ct.next()).done; )
              ns(Q.value) && ko(Q.value, M);
        }
      }
    }
    function Cc(b) {
      {
        var M = b.type;
        if (M == null || typeof M == "string")
          return;
        var E;
        if (typeof M == "function")
          E = M.propTypes;
        else if (typeof M == "object" && (M.$$typeof === l || M.$$typeof === u))
          E = M.propTypes;
        else
          return;
        if (E) {
          var N = H(M);
          hc(E, b.props, "prop", N, b);
        } else if (M.PropTypes !== void 0 && !es) {
          es = !0;
          var nt = H(M);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", nt || "Unknown");
        }
        typeof M.getDefaultProps == "function" && !M.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pc(b) {
      {
        for (var M = Object.keys(b.props), E = 0; E < M.length; E++) {
          var N = M[E];
          if (N !== "children" && N !== "key") {
            je(b), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), je(null);
            break;
          }
        }
        b.ref !== null && (je(b), _("Invalid attribute `ref` supplied to `React.Fragment`."), je(null));
      }
    }
    function Co(b, M, E, N, nt, ct) {
      {
        var Q = D(b);
        if (!Q) {
          var J = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (J += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Rt = kc(nt);
          Rt ? J += Rt : J += wo();
          var wt;
          b === null ? wt = "null" : Zi(b) ? wt = "array" : b !== void 0 && b.$$typeof === t ? (wt = "<" + (H(b.type) || "Unknown") + " />", J = " Did you accidentally export a JSX literal instead of a component?") : wt = typeof b, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", wt, J);
        }
        var kt = Sc(b, M, E, nt, ct);
        if (kt == null)
          return kt;
        if (Q) {
          var Nt = M.children;
          if (Nt !== void 0)
            if (N)
              if (Zi(Nt)) {
                for (var ze = 0; ze < Nt.length; ze++)
                  Mo(Nt[ze], b);
                Object.freeze && Object.freeze(Nt);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Mo(Nt, b);
        }
        return b === i ? Pc(kt) : Cc(kt), kt;
      }
    }
    function Oc(b, M, E) {
      return Co(b, M, E, !0);
    }
    function Ec(b, M, E) {
      return Co(b, M, E, !1);
    }
    var Ac = Ec, Tc = Oc;
    pn.Fragment = i, pn.jsx = Ac, pn.jsxs = Tc;
  }()), pn;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = Rp() : n.exports = Ip();
})($i);
const Lp = $i.exports.Fragment, fe = $i.exports.jsx, Fp = $i.exports.jsxs, Gl = "label";
function ua(n, t) {
  typeof n == "function" ? n(t) : n && (n.current = t);
}
function jp(n, t) {
  const e = n.options;
  e && t && Object.assign(e, t);
}
function Jl(n, t) {
  n.labels = t;
}
function Zl(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gl;
  const i = [];
  n.datasets = t.map((s) => {
    const o = n.datasets.find((r) => r[e] === s[e]);
    return !o || !s.data || i.includes(o) ? {
      ...s
    } : (i.push(o), Object.assign(o, s), o);
  });
}
function zp(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Gl;
  const e = {
    labels: [],
    datasets: []
  };
  return Jl(e, n.labels), Zl(e, n.datasets, t), e;
}
function Bp(n, t) {
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
    updateMode: u,
    ...h
  } = n, f = vi(null), p = vi(), g = () => {
    !f.current || (p.current = new zt(f.current, {
      type: r,
      data: zp(a, o),
      options: l && {
        ...l
      },
      plugins: c
    }), ua(t, p.current));
  }, m = () => {
    ua(t, null), p.current && (p.current.destroy(), p.current = null);
  };
  return Ce(() => {
    !s && p.current && l && jp(p.current, l);
  }, [s, l]), Ce(() => {
    !s && p.current && Jl(p.current.config.data, a.labels);
  }, [s, a.labels]), Ce(() => {
    !s && p.current && a.datasets && Zl(p.current.config.data, a.datasets, o);
  }, [s, a.datasets]), Ce(() => {
    !p.current || (s ? (m(), setTimeout(g)) : p.current.update(u));
  }, [s, l, a.labels, a.datasets, u]), Ce(() => {
    !p.current || (m(), setTimeout(g));
  }, [r]), Ce(() => (g(), () => m()), []), fe("canvas", {
    ...Object.assign({
      ref: f,
      role: "img",
      height: e,
      width: i
    }, h),
    children: d
  });
}
const Wp = Da(Bp);
function ye(n, t) {
  return zt.register(t), Da((e, i) => fe(Wp, {
    ...Object.assign({}, e, {
      ref: i,
      type: n
    })
  }));
}
const Np = ye("line", En);
ye("bar", Pn);
ye("radar", An);
ye("doughnut", le);
ye("polarArea", Xe);
ye("bubble", On);
ye("pie", Oi);
ye("scatter", Tn);
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
function Ee(n) {
  return n !== null && typeof n == "object" && n.constructor === Object;
}
function Ql(n) {
  if (!Ee(n))
    return n;
  const t = {};
  return Object.keys(n).forEach((e) => {
    t[e] = Ql(n[e]);
  }), t;
}
function ne(n, t, e = {
  clone: !0
}) {
  const i = e.clone ? mt({}, n) : n;
  return Ee(n) && Ee(t) && Object.keys(t).forEach((s) => {
    s !== "__proto__" && (Ee(t[s]) && s in n && Ee(n[s]) ? i[s] = ne(n[s], t[s], e) : e.clone ? i[s] = Ee(t[s]) ? Ql(t[s]) : t[s] : i[s] = t[s]);
  }), i;
}
var Ot = { exports: {} }, ms = { exports: {} }, st = {}, ha;
function $p() {
  if (ha)
    return st;
  ha = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, u = n ? Symbol.for("react.suspense") : 60113, h = n ? Symbol.for("react.suspense_list") : 60120, f = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, m = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, _ = n ? Symbol.for("react.scope") : 60119;
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
        case e:
          return k;
      }
    }
  }
  function w(x) {
    return v(x) === c;
  }
  return st.AsyncMode = l, st.ConcurrentMode = c, st.ContextConsumer = a, st.ContextProvider = r, st.Element = t, st.ForwardRef = d, st.Fragment = i, st.Lazy = p, st.Memo = f, st.Portal = e, st.Profiler = o, st.StrictMode = s, st.Suspense = u, st.isAsyncMode = function(x) {
    return w(x) || v(x) === l;
  }, st.isConcurrentMode = w, st.isContextConsumer = function(x) {
    return v(x) === a;
  }, st.isContextProvider = function(x) {
    return v(x) === r;
  }, st.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, st.isForwardRef = function(x) {
    return v(x) === d;
  }, st.isFragment = function(x) {
    return v(x) === i;
  }, st.isLazy = function(x) {
    return v(x) === p;
  }, st.isMemo = function(x) {
    return v(x) === f;
  }, st.isPortal = function(x) {
    return v(x) === e;
  }, st.isProfiler = function(x) {
    return v(x) === o;
  }, st.isStrictMode = function(x) {
    return v(x) === s;
  }, st.isSuspense = function(x) {
    return v(x) === u;
  }, st.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === c || x === o || x === s || x === u || x === h || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === f || x.$$typeof === r || x.$$typeof === a || x.$$typeof === d || x.$$typeof === m || x.$$typeof === y || x.$$typeof === _ || x.$$typeof === g);
  }, st.typeOf = v, st;
}
var ot = {}, fa;
function Vp() {
  return fa || (fa = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, i = n ? Symbol.for("react.fragment") : 60107, s = n ? Symbol.for("react.strict_mode") : 60108, o = n ? Symbol.for("react.profiler") : 60114, r = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, l = n ? Symbol.for("react.async_mode") : 60111, c = n ? Symbol.for("react.concurrent_mode") : 60111, d = n ? Symbol.for("react.forward_ref") : 60112, u = n ? Symbol.for("react.suspense") : 60113, h = n ? Symbol.for("react.suspense_list") : 60120, f = n ? Symbol.for("react.memo") : 60115, p = n ? Symbol.for("react.lazy") : 60116, g = n ? Symbol.for("react.block") : 60121, m = n ? Symbol.for("react.fundamental") : 60117, y = n ? Symbol.for("react.responder") : 60118, _ = n ? Symbol.for("react.scope") : 60119;
    function v(T) {
      return typeof T == "string" || typeof T == "function" || T === i || T === c || T === o || T === s || T === u || T === h || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === f || T.$$typeof === r || T.$$typeof === a || T.$$typeof === d || T.$$typeof === m || T.$$typeof === y || T.$$typeof === _ || T.$$typeof === g);
    }
    function w(T) {
      if (typeof T == "object" && T !== null) {
        var Wt = T.$$typeof;
        switch (Wt) {
          case t:
            var Fe = T.type;
            switch (Fe) {
              case l:
              case c:
              case i:
              case o:
              case s:
              case u:
                return Fe;
              default:
                var ve = Fe && Fe.$$typeof;
                switch (ve) {
                  case a:
                  case d:
                  case p:
                  case f:
                  case r:
                    return ve;
                  default:
                    return Wt;
                }
            }
          case e:
            return Wt;
        }
      }
    }
    var x = l, k = c, C = a, P = r, A = t, D = d, I = i, L = p, H = f, tt = e, Y = o, U = s, Z = u, bt = !1;
    function ut(T) {
      return bt || (bt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), S(T) || w(T) === l;
    }
    function S(T) {
      return w(T) === c;
    }
    function O(T) {
      return w(T) === a;
    }
    function z(T) {
      return w(T) === r;
    }
    function B(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function F(T) {
      return w(T) === d;
    }
    function $(T) {
      return w(T) === i;
    }
    function j(T) {
      return w(T) === p;
    }
    function V(T) {
      return w(T) === f;
    }
    function K(T) {
      return w(T) === e;
    }
    function G(T) {
      return w(T) === o;
    }
    function q(T) {
      return w(T) === s;
    }
    function At(T) {
      return w(T) === u;
    }
    ot.AsyncMode = x, ot.ConcurrentMode = k, ot.ContextConsumer = C, ot.ContextProvider = P, ot.Element = A, ot.ForwardRef = D, ot.Fragment = I, ot.Lazy = L, ot.Memo = H, ot.Portal = tt, ot.Profiler = Y, ot.StrictMode = U, ot.Suspense = Z, ot.isAsyncMode = ut, ot.isConcurrentMode = S, ot.isContextConsumer = O, ot.isContextProvider = z, ot.isElement = B, ot.isForwardRef = F, ot.isFragment = $, ot.isLazy = j, ot.isMemo = V, ot.isPortal = K, ot.isProfiler = G, ot.isStrictMode = q, ot.isSuspense = At, ot.isValidElementType = v, ot.typeOf = w;
  }()), ot;
}
var ga;
function tc() {
  return ga || (ga = 1, function(n) {
    process.env.NODE_ENV === "production" ? n.exports = $p() : n.exports = Vp();
  }(ms)), ms.exports;
}
var bs, pa;
function Hp() {
  if (pa)
    return bs;
  pa = 1;
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
  return bs = s() ? Object.assign : function(o, r) {
    for (var a, l = i(o), c, d = 1; d < arguments.length; d++) {
      a = Object(arguments[d]);
      for (var u in a)
        t.call(a, u) && (l[u] = a[u]);
      if (n) {
        c = n(a);
        for (var h = 0; h < c.length; h++)
          e.call(a, c[h]) && (l[c[h]] = a[c[h]]);
      }
    }
    return l;
  }, bs;
}
var ys, ma;
function co() {
  if (ma)
    return ys;
  ma = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ys = n, ys;
}
var xs, ba;
function ec() {
  return ba || (ba = 1, xs = Function.call.bind(Object.prototype.hasOwnProperty)), xs;
}
var _s, ya;
function Yp() {
  if (ya)
    return _s;
  ya = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = co(), e = {}, i = ec();
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
          if (u && !(u instanceof Error) && n(
            (l || "React class") + ": type specification of " + a + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), u instanceof Error && !(u.message in e)) {
            e[u.message] = !0;
            var f = c ? c() : "";
            n(
              "Failed " + a + " type: " + u.message + (f != null ? f : "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (e = {});
  }, _s = s, _s;
}
var vs, xa;
function Up() {
  if (xa)
    return vs;
  xa = 1;
  var n = tc(), t = Hp(), e = co(), i = ec(), s = Yp(), o = function() {
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
    function u(S) {
      var O = S && (c && S[c] || S[d]);
      if (typeof O == "function")
        return O;
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
      element: w(),
      elementType: x(),
      instanceOf: k,
      node: D(),
      objectOf: P,
      oneOf: C,
      oneOfType: A,
      shape: L,
      exact: H
    };
    function p(S, O) {
      return S === O ? S !== 0 || 1 / S === 1 / O : S !== S && O !== O;
    }
    function g(S, O) {
      this.message = S, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function m(S) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, z = 0;
      function B($, j, V, K, G, q, At) {
        if (K = K || h, q = q || V, At !== e) {
          if (l) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Wt = K + ":" + V;
            !O[Wt] && z < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[Wt] = !0, z++);
          }
        }
        return j[V] == null ? $ ? j[V] === null ? new g("The " + G + " `" + q + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new g("The " + G + " `" + q + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : S(j, V, K, G, q);
      }
      var F = B.bind(null, !1);
      return F.isRequired = B.bind(null, !0), F;
    }
    function y(S) {
      function O(z, B, F, $, j, V) {
        var K = z[B], G = U(K);
        if (G !== S) {
          var q = Z(K);
          return new g(
            "Invalid " + $ + " `" + j + "` of type " + ("`" + q + "` supplied to `" + F + "`, expected ") + ("`" + S + "`."),
            { expectedType: S }
          );
        }
        return null;
      }
      return m(O);
    }
    function _() {
      return m(r);
    }
    function v(S) {
      function O(z, B, F, $, j) {
        if (typeof S != "function")
          return new g("Property `" + j + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var V = z[B];
        if (!Array.isArray(V)) {
          var K = U(V);
          return new g("Invalid " + $ + " `" + j + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected an array."));
        }
        for (var G = 0; G < V.length; G++) {
          var q = S(V, G, F, $, j + "[" + G + "]", e);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return m(O);
    }
    function w() {
      function S(O, z, B, F, $) {
        var j = O[z];
        if (!a(j)) {
          var V = U(j);
          return new g("Invalid " + F + " `" + $ + "` of type " + ("`" + V + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return m(S);
    }
    function x() {
      function S(O, z, B, F, $) {
        var j = O[z];
        if (!n.isValidElementType(j)) {
          var V = U(j);
          return new g("Invalid " + F + " `" + $ + "` of type " + ("`" + V + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return m(S);
    }
    function k(S) {
      function O(z, B, F, $, j) {
        if (!(z[B] instanceof S)) {
          var V = S.name || h, K = ut(z[B]);
          return new g("Invalid " + $ + " `" + j + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return m(O);
    }
    function C(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), r;
      function O(z, B, F, $, j) {
        for (var V = z[B], K = 0; K < S.length; K++)
          if (p(V, S[K]))
            return null;
        var G = JSON.stringify(S, function(At, T) {
          var Wt = Z(T);
          return Wt === "symbol" ? String(T) : T;
        });
        return new g("Invalid " + $ + " `" + j + "` of value `" + String(V) + "` " + ("supplied to `" + F + "`, expected one of " + G + "."));
      }
      return m(O);
    }
    function P(S) {
      function O(z, B, F, $, j) {
        if (typeof S != "function")
          return new g("Property `" + j + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var V = z[B], K = U(V);
        if (K !== "object")
          return new g("Invalid " + $ + " `" + j + "` of type " + ("`" + K + "` supplied to `" + F + "`, expected an object."));
        for (var G in V)
          if (i(V, G)) {
            var q = S(V, G, F, $, j + "." + G, e);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return m(O);
    }
    function A(S) {
      if (!Array.isArray(S))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), r;
      for (var O = 0; O < S.length; O++) {
        var z = S[O];
        if (typeof z != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + bt(z) + " at index " + O + "."
          ), r;
      }
      function B(F, $, j, V, K) {
        for (var G = [], q = 0; q < S.length; q++) {
          var At = S[q], T = At(F, $, j, V, K, e);
          if (T == null)
            return null;
          T.data && i(T.data, "expectedType") && G.push(T.data.expectedType);
        }
        var Wt = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new g("Invalid " + V + " `" + K + "` supplied to " + ("`" + j + "`" + Wt + "."));
      }
      return m(B);
    }
    function D() {
      function S(O, z, B, F, $) {
        return tt(O[z]) ? null : new g("Invalid " + F + " `" + $ + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return m(S);
    }
    function I(S, O, z, B, F) {
      return new g(
        (S || "React class") + ": " + O + " type `" + z + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function L(S) {
      function O(z, B, F, $, j) {
        var V = z[B], K = U(V);
        if (K !== "object")
          return new g("Invalid " + $ + " `" + j + "` of type `" + K + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var G in S) {
          var q = S[G];
          if (typeof q != "function")
            return I(F, $, j, G, Z(q));
          var At = q(V, G, F, $, j + "." + G, e);
          if (At)
            return At;
        }
        return null;
      }
      return m(O);
    }
    function H(S) {
      function O(z, B, F, $, j) {
        var V = z[B], K = U(V);
        if (K !== "object")
          return new g("Invalid " + $ + " `" + j + "` of type `" + K + "` " + ("supplied to `" + F + "`, expected `object`."));
        var G = t({}, z[B], S);
        for (var q in G) {
          var At = S[q];
          if (i(S, q) && typeof At != "function")
            return I(F, $, j, q, Z(At));
          if (!At)
            return new g(
              "Invalid " + $ + " `" + j + "` key `" + q + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(z[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(S), null, "  ")
            );
          var T = At(V, q, F, $, j + "." + q, e);
          if (T)
            return T;
        }
        return null;
      }
      return m(O);
    }
    function tt(S) {
      switch (typeof S) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !S;
        case "object":
          if (Array.isArray(S))
            return S.every(tt);
          if (S === null || a(S))
            return !0;
          var O = u(S);
          if (O) {
            var z = O.call(S), B;
            if (O !== S.entries) {
              for (; !(B = z.next()).done; )
                if (!tt(B.value))
                  return !1;
            } else
              for (; !(B = z.next()).done; ) {
                var F = B.value;
                if (F && !tt(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(S, O) {
      return S === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function U(S) {
      var O = typeof S;
      return Array.isArray(S) ? "array" : S instanceof RegExp ? "object" : Y(O, S) ? "symbol" : O;
    }
    function Z(S) {
      if (typeof S > "u" || S === null)
        return "" + S;
      var O = U(S);
      if (O === "object") {
        if (S instanceof Date)
          return "date";
        if (S instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function bt(S) {
      var O = Z(S);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function ut(S) {
      return !S.constructor || !S.constructor.name ? h : S.constructor.name;
    }
    return f.checkPropTypes = s, f.resetWarningCache = s.resetWarningCache, f.PropTypes = f, f;
  }, vs;
}
var ws, _a;
function Xp() {
  if (_a)
    return ws;
  _a = 1;
  var n = co();
  function t() {
  }
  function e() {
  }
  return e.resetWarningCache = t, ws = function() {
    function i(r, a, l, c, d, u) {
      if (u !== n) {
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
      checkPropTypes: e,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, ws;
}
if (process.env.NODE_ENV !== "production") {
  var Kp = tc(), qp = !0;
  Ot.exports = Up()(Kp.isElement, qp);
} else
  Ot.exports = Xp()();
function en(n) {
  let t = "https://mui.com/production-error/?code=" + n;
  for (let e = 1; e < arguments.length; e += 1)
    t += "&args[]=" + encodeURIComponent(arguments[e]);
  return "Minified MUI error #" + n + "; visit " + t + " for the full message.";
}
function nc(n) {
  if (typeof n != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : en(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const va = (n) => n, Gp = () => {
  let n = va;
  return {
    configure(t) {
      n = t;
    },
    generate(t) {
      return n(t);
    },
    reset() {
      n = va;
    }
  };
}, Jp = Gp(), ic = Jp, Zp = {
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
function Qp(n, t, e = "Mui") {
  const i = Zp[t];
  return i ? `${e}-${i}` : `${ic.generate(n)}-${t}`;
}
function tm(n, t) {
  const e = Lc(n, t);
  return process.env.NODE_ENV !== "production" ? (...i) => {
    const s = typeof n == "string" ? `"${n}"` : "component";
    return i.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : i.some((o) => o === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), e(...i);
  } : e;
}
const em = process.env.NODE_ENV !== "production" ? Ot.exports.oneOfType([Ot.exports.number, Ot.exports.string, Ot.exports.object, Ot.exports.array]) : {}, xe = em;
function Rn(n, t) {
  return t ? ne(n, t, {
    clone: !1
  }) : n;
}
const uo = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
}, wa = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (n) => `@media (min-width:${uo[n]}px)`
};
function ie(n, t, e) {
  const i = n.theme || {};
  if (Array.isArray(t)) {
    const o = i.breakpoints || wa;
    return t.reduce((r, a, l) => (r[o.up(o.keys[l])] = e(t[l]), r), {});
  }
  if (typeof t == "object") {
    const o = i.breakpoints || wa;
    return Object.keys(t).reduce((r, a) => {
      if (Object.keys(o.values || uo).indexOf(a) !== -1) {
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
function nm(n = {}) {
  var t;
  return ((t = n.keys) == null ? void 0 : t.reduce((i, s) => {
    const o = n.up(s);
    return i[o] = {}, i;
  }, {})) || {};
}
function im(n, t) {
  return n.reduce((e, i) => {
    const s = e[i];
    return (!s || Object.keys(s).length === 0) && delete e[i], e;
  }, t);
}
function Vi(n, t, e = !0) {
  if (!t || typeof t != "string")
    return null;
  if (n && n.vars && e) {
    const i = `vars.${t}`.split(".").reduce((s, o) => s && s[o] ? s[o] : null, n);
    if (i != null)
      return i;
  }
  return t.split(".").reduce((i, s) => i && i[s] != null ? i[s] : null, n);
}
function Li(n, t, e, i = e) {
  let s;
  return typeof n == "function" ? s = n(e) : Array.isArray(n) ? s = n[e] || i : s = Vi(n, e) || i, t && (s = t(s, i, n)), s;
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
    const a = r[t], l = r.theme, c = Vi(l, i) || {};
    return ie(r, a, (u) => {
      let h = Li(c, s, u);
      return u === h && typeof u == "string" && (h = Li(c, s, `${t}${u === "default" ? "" : nc(u)}`, u)), e === !1 ? h : {
        [e]: h
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: xe
  } : {}, o.filterProps = [t], o;
}
function Hi(...n) {
  const t = n.reduce((i, s) => (s.filterProps.forEach((o) => {
    i[o] = s;
  }), i), {}), e = (i) => Object.keys(i).reduce((s, o) => t[o] ? Rn(s, t[o](i)) : s, {});
  return e.propTypes = process.env.NODE_ENV !== "production" ? n.reduce((i, s) => Object.assign(i, s.propTypes), {}) : {}, e.filterProps = n.reduce((i, s) => i.concat(s.filterProps), []), e;
}
function sm(n) {
  const t = {};
  return (e) => (t[e] === void 0 && (t[e] = n(e)), t[e]);
}
const om = {
  m: "margin",
  p: "padding"
}, rm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Sa = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, am = sm((n) => {
  if (n.length > 2)
    if (Sa[n])
      n = Sa[n];
    else
      return [n];
  const [t, e] = n.split(""), i = om[t], s = rm[e] || "";
  return Array.isArray(s) ? s.map((o) => i + o) : [i + s];
}), Yi = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Ui = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], lm = [...Yi, ...Ui];
function Jn(n, t, e, i) {
  var s;
  const o = (s = Vi(n, t, !1)) != null ? s : e;
  return typeof o == "number" ? (r) => typeof r == "string" ? r : (process.env.NODE_ENV !== "production" && typeof r != "number" && console.error(`MUI: Expected ${i} argument to be a number or a string, got ${r}.`), o * r) : Array.isArray(o) ? (r) => typeof r == "string" ? r : (process.env.NODE_ENV !== "production" && (Number.isInteger(r) ? r > o.length - 1 && console.error([`MUI: The value provided (${r}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${r} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[r]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function sc(n) {
  return Jn(n, "spacing", 8, "spacing");
}
function Zn(n, t) {
  if (typeof t == "string" || t == null)
    return t;
  const e = Math.abs(t), i = n(e);
  return t >= 0 ? i : typeof i == "number" ? -i : `-${i}`;
}
function cm(n, t) {
  return (e) => n.reduce((i, s) => (i[s] = Zn(t, e), i), {});
}
function dm(n, t, e, i) {
  if (t.indexOf(e) === -1)
    return null;
  const s = am(e), o = cm(s, i), r = n[e];
  return ie(n, r, o);
}
function oc(n, t) {
  const e = sc(n.theme);
  return Object.keys(n).map((i) => dm(n, t, i, e)).reduce(Rn, {});
}
function yt(n) {
  return oc(n, Yi);
}
yt.propTypes = process.env.NODE_ENV !== "production" ? Yi.reduce((n, t) => (n[t] = xe, n), {}) : {};
yt.filterProps = Yi;
function xt(n) {
  return oc(n, Ui);
}
xt.propTypes = process.env.NODE_ENV !== "production" ? Ui.reduce((n, t) => (n[t] = xe, n), {}) : {};
xt.filterProps = Ui;
process.env.NODE_ENV !== "production" && lm.reduce((n, t) => (n[t] = xe, n), {});
function Ut(n) {
  return typeof n != "number" ? n : `${n}px solid`;
}
const um = rt({
  prop: "border",
  themeKey: "borders",
  transform: Ut
}), hm = rt({
  prop: "borderTop",
  themeKey: "borders",
  transform: Ut
}), fm = rt({
  prop: "borderRight",
  themeKey: "borders",
  transform: Ut
}), gm = rt({
  prop: "borderBottom",
  themeKey: "borders",
  transform: Ut
}), pm = rt({
  prop: "borderLeft",
  themeKey: "borders",
  transform: Ut
}), mm = rt({
  prop: "borderColor",
  themeKey: "palette"
}), bm = rt({
  prop: "borderTopColor",
  themeKey: "palette"
}), ym = rt({
  prop: "borderRightColor",
  themeKey: "palette"
}), xm = rt({
  prop: "borderBottomColor",
  themeKey: "palette"
}), _m = rt({
  prop: "borderLeftColor",
  themeKey: "palette"
}), Xi = (n) => {
  if (n.borderRadius !== void 0 && n.borderRadius !== null) {
    const t = Jn(n.theme, "shape.borderRadius", 4, "borderRadius"), e = (i) => ({
      borderRadius: Zn(t, i)
    });
    return ie(n, n.borderRadius, e);
  }
  return null;
};
Xi.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: xe
} : {};
Xi.filterProps = ["borderRadius"];
Hi(um, hm, fm, gm, pm, mm, bm, ym, xm, _m, Xi);
const Ki = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const t = Jn(n.theme, "spacing", 8, "gap"), e = (i) => ({
      gap: Zn(t, i)
    });
    return ie(n, n.gap, e);
  }
  return null;
};
Ki.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: xe
} : {};
Ki.filterProps = ["gap"];
const qi = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const t = Jn(n.theme, "spacing", 8, "columnGap"), e = (i) => ({
      columnGap: Zn(t, i)
    });
    return ie(n, n.columnGap, e);
  }
  return null;
};
qi.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: xe
} : {};
qi.filterProps = ["columnGap"];
const Gi = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const t = Jn(n.theme, "spacing", 8, "rowGap"), e = (i) => ({
      rowGap: Zn(t, i)
    });
    return ie(n, n.rowGap, e);
  }
  return null;
};
Gi.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: xe
} : {};
Gi.filterProps = ["rowGap"];
const vm = rt({
  prop: "gridColumn"
}), wm = rt({
  prop: "gridRow"
}), Sm = rt({
  prop: "gridAutoFlow"
}), km = rt({
  prop: "gridAutoColumns"
}), Mm = rt({
  prop: "gridAutoRows"
}), Cm = rt({
  prop: "gridTemplateColumns"
}), Pm = rt({
  prop: "gridTemplateRows"
}), Om = rt({
  prop: "gridTemplateAreas"
}), Em = rt({
  prop: "gridArea"
});
Hi(Ki, qi, Gi, vm, wm, Sm, km, Mm, Cm, Pm, Om, Em);
function Ke(n, t) {
  return t === "grey" ? t : n;
}
const Am = rt({
  prop: "color",
  themeKey: "palette",
  transform: Ke
}), Tm = rt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ke
}), Dm = rt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ke
});
Hi(Am, Tm, Dm);
function Bt(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const Rm = rt({
  prop: "width",
  transform: Bt
}), ho = (n) => {
  if (n.maxWidth !== void 0 && n.maxWidth !== null) {
    const t = (e) => {
      var i, s, o;
      return {
        maxWidth: ((i = n.theme) == null || (s = i.breakpoints) == null || (o = s.values) == null ? void 0 : o[e]) || uo[e] || Bt(e)
      };
    };
    return ie(n, n.maxWidth, t);
  }
  return null;
};
ho.filterProps = ["maxWidth"];
const Im = rt({
  prop: "minWidth",
  transform: Bt
}), Lm = rt({
  prop: "height",
  transform: Bt
}), Fm = rt({
  prop: "maxHeight",
  transform: Bt
}), jm = rt({
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
const zm = rt({
  prop: "boxSizing"
});
Hi(Rm, ho, Im, Lm, Fm, jm, zm);
const Bm = {
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
    style: Xi
  },
  color: {
    themeKey: "palette",
    transform: Ke
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ke
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ke
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
    style: Ki
  },
  rowGap: {
    style: Gi
  },
  columnGap: {
    style: qi
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
    style: ho
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
}, Ji = Bm;
function Wm(...n) {
  const t = n.reduce((i, s) => i.concat(Object.keys(s)), []), e = new Set(t);
  return n.every((i) => e.size === Object.keys(i).length);
}
function Nm(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function $m() {
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
      style: u
    } = a;
    if (i == null)
      return null;
    const h = Vi(s, c) || {};
    return u ? u(r) : ie(r, i, (p) => {
      let g = Li(h, d, p);
      return p === g && typeof p == "string" && (g = Li(h, d, `${e}${p === "default" ? "" : nc(p)}`, p)), l === !1 ? g : {
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
    const r = (i = o.unstable_sxConfig) != null ? i : Ji;
    function a(l) {
      let c = l;
      if (typeof l == "function")
        c = l(o);
      else if (typeof l != "object")
        return l;
      if (!c)
        return null;
      const d = nm(o.breakpoints), u = Object.keys(d);
      let h = d;
      return Object.keys(c).forEach((f) => {
        const p = Nm(c[f], o);
        if (p != null)
          if (typeof p == "object")
            if (r[f])
              h = Rn(h, n(f, p, o, r));
            else {
              const g = ie({
                theme: o
              }, p, (m) => ({
                [f]: m
              }));
              Wm(g, p) ? h[f] = t({
                sx: p,
                theme: o
              }) : h = Rn(h, g);
            }
          else
            h = Rn(h, n(f, p, o, r));
      }), im(u, h);
    }
    return Array.isArray(s) ? s.map(a) : a(s);
  }
  return t;
}
const rc = $m();
rc.filterProps = ["sx"];
const fo = rc;
function _e(n, t) {
  if (n == null)
    return {};
  var e = {}, i = Object.keys(n), s, o;
  for (o = 0; o < i.length; o++)
    s = i[o], !(t.indexOf(s) >= 0) && (e[s] = n[s]);
  return e;
}
const Vm = ["sx"], Hm = (n) => {
  var t, e;
  const i = {
    systemProps: {},
    otherProps: {}
  }, s = (t = n == null || (e = n.theme) == null ? void 0 : e.unstable_sxConfig) != null ? t : Ji;
  return Object.keys(n).forEach((o) => {
    s[o] ? i.systemProps[o] = n[o] : i.otherProps[o] = n[o];
  }), i;
};
function Ym(n) {
  const {
    sx: t
  } = n, e = _e(n, Vm), {
    systemProps: i,
    otherProps: s
  } = Hm(e);
  let o;
  return Array.isArray(t) ? o = [i, ...t] : typeof t == "function" ? o = (...r) => {
    const a = t(...r);
    return Ee(a) ? mt({}, i, a) : i;
  } : o = mt({}, i, t), mt({}, s, {
    sx: o
  });
}
function ac(n) {
  var t, e, i = "";
  if (typeof n == "string" || typeof n == "number")
    i += n;
  else if (typeof n == "object")
    if (Array.isArray(n))
      for (t = 0; t < n.length; t++)
        n[t] && (e = ac(n[t])) && (i && (i += " "), i += e);
    else
      for (t in n)
        n[t] && (i && (i += " "), i += t);
  return i;
}
function Um() {
  for (var n, t, e = 0, i = ""; e < arguments.length; )
    (n = arguments[e++]) && (t = ac(n)) && (i && (i += " "), i += t);
  return i;
}
const Xm = ["values", "unit", "step"], Km = (n) => {
  const t = Object.keys(n).map((e) => ({
    key: e,
    val: n[e]
  })) || [];
  return t.sort((e, i) => e.val - i.val), t.reduce((e, i) => mt({}, e, {
    [i.key]: i.val
  }), {});
};
function qm(n) {
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
  } = n, s = _e(n, Xm), o = Km(t), r = Object.keys(o);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${e})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - i / 100}${e})`;
  }
  function c(h, f) {
    const p = r.indexOf(f);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${e}) and (max-width:${(p !== -1 && typeof t[r[p]] == "number" ? t[r[p]] : f) - i / 100}${e})`;
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
    unit: e
  }, s);
}
const Gm = {
  borderRadius: 4
}, Jm = Gm;
function Zm(n = 8) {
  if (n.mui)
    return n;
  const t = sc({
    spacing: n
  }), e = (...i) => (process.env.NODE_ENV !== "production" && (i.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${i.length}`)), (i.length === 0 ? [1] : i).map((o) => {
    const r = t(o);
    return typeof r == "number" ? `${r}px` : r;
  }).join(" "));
  return e.mui = !0, e;
}
const Qm = ["breakpoints", "palette", "spacing", "shape"];
function lc(n = {}, ...t) {
  const {
    breakpoints: e = {},
    palette: i = {},
    spacing: s,
    shape: o = {}
  } = n, r = _e(n, Qm), a = qm(e), l = Zm(s);
  let c = ne({
    breakpoints: a,
    direction: "ltr",
    components: {},
    palette: mt({
      mode: "light"
    }, i),
    spacing: l,
    shape: mt({}, Jm, o)
  }, r);
  return c = t.reduce((d, u) => ne(d, u), c), c.unstable_sxConfig = mt({}, Ji, r == null ? void 0 : r.unstable_sxConfig), c.unstable_sx = function(u) {
    return fo({
      sx: u,
      theme: this
    });
  }, c;
}
const cc = _i.createContext(null);
process.env.NODE_ENV !== "production" && (cc.displayName = "ThemeContext");
const tb = cc;
function eb() {
  const n = _i.useContext(tb);
  return process.env.NODE_ENV !== "production" && _i.useDebugValue(n), n;
}
function nb(n) {
  return Object.keys(n).length === 0;
}
function ib(n = null) {
  const t = eb();
  return !t || nb(t) ? n : t;
}
const sb = lc();
function ob(n = sb) {
  return ib(n);
}
const rb = ["className", "component"];
function ab(n = {}) {
  const {
    defaultTheme: t,
    defaultClassName: e = "MuiBox-root",
    generateClassName: i
  } = n, s = tm("div", {
    shouldForwardProp: (r) => r !== "theme" && r !== "sx" && r !== "as"
  })(fo);
  return _i.forwardRef(function(a, l) {
    const c = ob(t), d = Ym(a), {
      className: u,
      component: h = "div"
    } = d, f = _e(d, rb);
    return fe(s, mt({
      as: h,
      ref: l,
      className: Um(u, i ? i(e) : e),
      theme: c
    }, f));
  });
}
function dc(n, t = 0, e = 1) {
  return process.env.NODE_ENV !== "production" && (n < t || n > e) && console.error(`MUI: The value provided ${n} is out of range [${t}, ${e}].`), Math.min(Math.max(t, n), e);
}
function lb(n) {
  n = n.slice(1);
  const t = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let e = n.match(t);
  return e && e[0].length === 1 && (e = e.map((i) => i + i)), e ? `rgb${e.length === 4 ? "a" : ""}(${e.map((i, s) => s < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function nn(n) {
  if (n.type)
    return n;
  if (n.charAt(0) === "#")
    return nn(lb(n));
  const t = n.indexOf("("), e = n.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(e) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${n}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : en(9, n));
  let i = n.substring(t + 1, n.length - 1), s;
  if (e === "color") {
    if (i = i.split(" "), s = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : en(10, s));
  } else
    i = i.split(",");
  return i = i.map((o) => parseFloat(o)), {
    type: e,
    values: i,
    colorSpace: s
  };
}
function go(n) {
  const {
    type: t,
    colorSpace: e
  } = n;
  let {
    values: i
  } = n;
  return t.indexOf("rgb") !== -1 ? i = i.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), t.indexOf("color") !== -1 ? i = `${e} ${i.join(" ")}` : i = `${i.join(", ")}`, `${t}(${i})`;
}
function cb(n) {
  n = nn(n);
  const {
    values: t
  } = n, e = t[0], i = t[1] / 100, s = t[2] / 100, o = i * Math.min(s, 1 - s), r = (c, d = (c + e / 30) % 12) => s - o * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const l = [Math.round(r(0) * 255), Math.round(r(8) * 255), Math.round(r(4) * 255)];
  return n.type === "hsla" && (a += "a", l.push(t[3])), go({
    type: a,
    values: l
  });
}
function ka(n) {
  n = nn(n);
  let t = n.type === "hsl" || n.type === "hsla" ? nn(cb(n)).values : n.values;
  return t = t.map((e) => (n.type !== "color" && (e /= 255), e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ma(n, t) {
  const e = ka(n), i = ka(t);
  return (Math.max(e, i) + 0.05) / (Math.min(e, i) + 0.05);
}
function db(n, t) {
  if (n = nn(n), t = dc(t), n.type.indexOf("hsl") !== -1)
    n.values[2] *= 1 - t;
  else if (n.type.indexOf("rgb") !== -1 || n.type.indexOf("color") !== -1)
    for (let e = 0; e < 3; e += 1)
      n.values[e] *= 1 - t;
  return go(n);
}
function ub(n, t) {
  if (n = nn(n), t = dc(t), n.type.indexOf("hsl") !== -1)
    n.values[2] += (100 - n.values[2]) * t;
  else if (n.type.indexOf("rgb") !== -1)
    for (let e = 0; e < 3; e += 1)
      n.values[e] += (255 - n.values[e]) * t;
  else if (n.type.indexOf("color") !== -1)
    for (let e = 0; e < 3; e += 1)
      n.values[e] += (1 - n.values[e]) * t;
  return go(n);
}
function hb(n, t) {
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
const fb = {
  black: "#000",
  white: "#fff"
}, $n = fb, gb = {
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
}, pb = gb, mb = {
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
}, Ne = mb, bb = {
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
}, $e = bb, yb = {
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
}, mn = yb, xb = {
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
}, Ve = xb, _b = {
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
}, He = _b, vb = {
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
}, Ye = vb, wb = ["mode", "contrastThreshold", "tonalOffset"], Ca = {
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
}, Ss = {
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
function Pa(n, t, e, i) {
  const s = i.light || i, o = i.dark || i * 1.5;
  n[t] || (n.hasOwnProperty(e) ? n[t] = n[e] : t === "light" ? n.light = ub(n.main, s) : t === "dark" && (n.dark = db(n.main, o)));
}
function Sb(n = "light") {
  return n === "dark" ? {
    main: Ve[200],
    light: Ve[50],
    dark: Ve[400]
  } : {
    main: Ve[700],
    light: Ve[400],
    dark: Ve[800]
  };
}
function kb(n = "light") {
  return n === "dark" ? {
    main: Ne[200],
    light: Ne[50],
    dark: Ne[400]
  } : {
    main: Ne[500],
    light: Ne[300],
    dark: Ne[700]
  };
}
function Mb(n = "light") {
  return n === "dark" ? {
    main: $e[500],
    light: $e[300],
    dark: $e[700]
  } : {
    main: $e[700],
    light: $e[400],
    dark: $e[800]
  };
}
function Cb(n = "light") {
  return n === "dark" ? {
    main: He[400],
    light: He[300],
    dark: He[700]
  } : {
    main: He[700],
    light: He[500],
    dark: He[900]
  };
}
function Pb(n = "light") {
  return n === "dark" ? {
    main: Ye[400],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[800],
    light: Ye[500],
    dark: Ye[900]
  };
}
function Ob(n = "light") {
  return n === "dark" ? {
    main: mn[400],
    light: mn[300],
    dark: mn[700]
  } : {
    main: "#ed6c02",
    light: mn[500],
    dark: mn[900]
  };
}
function Eb(n) {
  const {
    mode: t = "light",
    contrastThreshold: e = 3,
    tonalOffset: i = 0.2
  } = n, s = _e(n, wb), o = n.primary || Sb(t), r = n.secondary || kb(t), a = n.error || Mb(t), l = n.info || Cb(t), c = n.success || Pb(t), d = n.warning || Ob(t);
  function u(g) {
    const m = Ma(g, Ss.text.primary) >= e ? Ss.text.primary : Ca.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const y = Ma(g, m);
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
The color object needs to have a \`main\` property or a \`${y}\` property.` : en(11, m ? ` (${m})` : "", y));
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
} });` : en(12, m ? ` (${m})` : "", JSON.stringify(g.main)));
    return Pa(g, "light", _, i), Pa(g, "dark", v, i), g.contrastText || (g.contrastText = u(g.main)), g;
  }, f = {
    dark: Ss,
    light: Ca
  };
  return process.env.NODE_ENV !== "production" && (f[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ne(mt({
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
    grey: pb,
    contrastThreshold: e,
    getContrastText: u,
    augmentColor: h,
    tonalOffset: i
  }, f[t]), s);
}
const Ab = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Tb(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Oa = {
  textTransform: "uppercase"
}, Ea = '"Roboto", "Helvetica", "Arial", sans-serif';
function Db(n, t) {
  const e = typeof t == "function" ? t(n) : t, {
    fontFamily: i = Ea,
    fontSize: s = 14,
    fontWeightLight: o = 300,
    fontWeightRegular: r = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: l = 700,
    htmlFontSize: c = 16,
    allVariants: d,
    pxToRem: u
  } = e, h = _e(e, Ab);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const f = s / 14, p = u || ((y) => `${y / c * f}rem`), g = (y, _, v, w, x) => mt({
    fontFamily: i,
    fontWeight: y,
    fontSize: p(_),
    lineHeight: v
  }, i === Ea ? {
    letterSpacing: `${Tb(w / _)}em`
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
    button: g(a, 14, 1.75, 0.4, Oa),
    caption: g(r, 12, 1.66, 0.4),
    overline: g(r, 12, 2.66, 1, Oa)
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
  }, m), h, {
    clone: !1
  });
}
const Rb = 0.2, Ib = 0.14, Lb = 0.12;
function ft(...n) {
  return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${Rb})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${Ib})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${Lb})`].join(",");
}
const Fb = ["none", ft(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ft(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ft(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ft(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ft(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ft(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ft(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ft(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ft(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ft(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ft(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ft(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ft(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ft(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ft(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ft(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ft(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ft(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ft(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ft(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ft(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ft(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ft(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ft(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], jb = Fb, zb = ["duration", "easing", "delay"], Bb = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wb = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function Aa(n) {
  return `${Math.round(n)}ms`;
}
function Nb(n) {
  if (!n)
    return 0;
  const t = n / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function $b(n) {
  const t = mt({}, Bb, n.easing), e = mt({}, Wb, n.duration);
  return mt({
    getAutoHeightDuration: Nb,
    create: (s = ["all"], o = {}) => {
      const {
        duration: r = e.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = o, c = _e(o, zb);
      if (process.env.NODE_ENV !== "production") {
        const d = (h) => typeof h == "string", u = (h) => !isNaN(parseFloat(h));
        !d(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !u(r) && !d(r) && console.error(`MUI: Argument "duration" must be a number or a string but found ${r}.`), d(a) || console.error('MUI: Argument "easing" must be a string.'), !u(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((d) => `${d} ${typeof r == "string" ? r : Aa(r)} ${a} ${typeof l == "string" ? l : Aa(l)}`).join(",");
    }
  }, n, {
    easing: t,
    duration: e
  });
}
const Vb = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Hb = Vb, Yb = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Ub(n = {}, ...t) {
  const {
    mixins: e = {},
    palette: i = {},
    transitions: s = {},
    typography: o = {}
  } = n, r = _e(n, Yb);
  if (n.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : en(18));
  const a = Eb(i), l = lc(n);
  let c = ne(l, {
    mixins: hb(l.breakpoints, e),
    palette: a,
    shadows: jb.slice(),
    typography: Db(a, o),
    transitions: $b(s),
    zIndex: mt({}, Hb)
  });
  if (c = ne(c, r), c = t.reduce((d, u) => ne(d, u), c), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], u = (h, f) => {
      let p;
      for (p in h) {
        const g = h[p];
        if (d.indexOf(p) !== -1 && Object.keys(g).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const m = Qp("", p);
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
  return c.unstable_sxConfig = mt({}, Ji, r == null ? void 0 : r.unstable_sxConfig), c.unstable_sx = function(u) {
    return fo({
      sx: u,
      theme: this
    });
  }, c;
}
const Xb = Ub(), uc = ab({
  defaultTheme: Xb,
  defaultClassName: "MuiBox-root",
  generateClassName: ic.generate
});
process.env.NODE_ENV !== "production" && (uc.propTypes = {
  children: Ot.exports.node,
  component: Ot.exports.elementType,
  sx: Ot.exports.oneOfType([Ot.exports.arrayOf(Ot.exports.oneOfType([Ot.exports.func, Ot.exports.object, Ot.exports.bool])), Ot.exports.func, Ot.exports.object])
});
const Kb = uc, qb = ({
  children: n,
  chart: t
}) => fe(Kb, {
  id: "chartjs-tooltip-react",
  sx: {
    borderRadius: "3px",
    color: "white",
    opacity: (t == null ? void 0 : t.getActiveElements().length) === 0 ? "0" : "1",
    pointerEvents: "none",
    position: "absolute",
    top: "0",
    transition: "all .2s ease-in-out",
    height: "100%"
  },
  children: n
}), Gb = (n, t) => {
  const e = document.createElement("span"), i = document.createElement("img");
  i.src = "/arrow.png", i.style.display = "inline-block", i.style.marginLeft = "0.5em", i.style.width = "14px", i.style.height = "14px", i.style.position = "relative", i.style.top = "2px", t > 0 && (i.style.transform = "rotate(180deg)");
  const s = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    notation: "compact"
  }).format(Math.abs(t)).toString();
  e.style.color = "rgb(206, 228, 212)", e.style.display = "inline-block", e.appendChild(i), e.appendChild(document.createTextNode(s)), n.appendChild(e);
}, Jb = ({
  chart: n
}) => fe(qb, {
  chart: n,
  children: "From the portal"
}), Zb = (n) => {
  const {
    chart: t,
    tooltip: e
  } = n;
  console.log("CPE", t.canvas.parentElement);
  const i = getOrCreateTooltipContainer(t);
  t.getActiveElements().length === 0 ? i.style.opacity = "0" : i.style.opacity = "1";
  const {
    offsetLeft: s
  } = t.canvas;
  i.style.left = s + e.caretX + 10 + "px";
  const o = vt(e.options.bodyFont);
  i.style.fontFamily = o.family, i.style.fontSize = `${o.size}px` || "14px", i.style.lineHeight = `${o.lineHeight}px` || "120%", i.style.padding = e.options.padding + "px " + e.options.padding + "px", e.body && (Array.from(i.children).forEach((r) => r.remove()), e.body.forEach((r, a) => {
    if (!t.getActiveElements()[a] && e.opacity === 0)
      return;
    const l = r.lines, c = document.createElement("table");
    c.style.backgroundColor = t.getActiveElements()[a].element.options.borderColor, c.style.borderRadius = "2px", c.style.marginBottom = "20px", c.style.padding = "0 2px", c.style.position = "absolute", i.appendChild(c);
    const d = document.createElement("tbody");
    l.forEach((h, f) => {
      const p = document.createTextNode(h), g = document.createElement("tr");
      g.style.backgroundColor = "inherit", g.style.borderWidth = "0";
      const m = document.createElement("td");
      m.style.borderWidth = "0", m.style.whiteSpace = "nowrap", m.appendChild(p);
      const y = t.getActiveElements()[a].index, _ = t.data.datasets[a].data.at(y), v = t.data.datasets[a].data.at(y - 1);
      if (![_, v].includes(null)) {
        const k = (_ || 0) - (v || 0);
        y > -1 && f === 1 && (k === 0 || Gb(m, k));
      }
      g.appendChild(m), d && d.appendChild(g), c.appendChild(d);
    });
    const u = c.getBoundingClientRect().width;
    c.style.top = t.getActiveElements()[a].element.y - c.getBoundingClientRect().height / 2 + "px", c.style.left = e.caretX > t.canvas.getBoundingClientRect().width / 2 ? `${-1 * u - 20}px` : "0";
  }));
}, oe = {
  point: {
    backgroundColor: "rgb(255, 255, 255)",
    hoverBackgroundColors: ["rgb(2, 77, 73)", "rgb(77, 76, 76)"],
    hoverBorderColors: ["rgb(2, 77, 73)", "rgb(77, 76, 76)"],
    borderColors: ["rgb(0, 77, 73)", "rgb(77, 76, 76)"]
  },
  line: {
    backgroundColors: ["rgb(125, 162, 158)", "rgb(215, 213, 210)"],
    borderColors: ["rgb(2, 77, 73)", "rgb(77, 76, 76)"]
  }
}, ks = {
  aspectRatio: 1.33,
  mouseLine: {
    color: "rgb(77, 76, 76)"
  },
  responsive: !0,
  elements: {
    line: {
      ...oe.line,
      borderWidth: 2,
      fill: "start"
    },
    point: {
      ...oe.point,
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
      external: Zb
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
}, Qb = {
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
zt.register(Di, Ii, Dn, ee, Tl, Rl, Al, Ol, Tp);
const ty = ({
  data: n,
  options: t,
  chartTheme: e
}) => {
  var y, _, v, w, x, k, C, P;
  const i = vi(null), s = vi(null);
  pt.font = {
    family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif",
    size: 14
  };
  const o = {
    labels: n.labels,
    datasets: [...n.datasets.map((A, D) => {
      var I, L, H, tt, Y, U, Z, bt, ut, S, O, z, B, F, $, j, V, K, G;
      return {
        backgroundColor: ((I = e == null ? void 0 : e.colors) == null ? void 0 : I[D].fill) || ((H = (L = t == null ? void 0 : t.elements) == null ? void 0 : L.line) == null ? void 0 : H.backgroundColor) || oe.line.backgroundColors[D],
        borderColor: ((tt = e == null ? void 0 : e.colors) == null ? void 0 : tt[D].line) || ((U = (Y = t == null ? void 0 : t.elements) == null ? void 0 : Y.line) == null ? void 0 : U.borderColor) || oe.line.borderColors[D],
        pointBorderColor: ((Z = e == null ? void 0 : e.colors) == null ? void 0 : Z[D].point) || ((ut = (bt = t == null ? void 0 : t.elements) == null ? void 0 : bt.point) == null ? void 0 : ut.borderColor) || oe.point.borderColors[D],
        pointHoverBorderColor: ((S = e == null ? void 0 : e.colors) == null ? void 0 : S[D].point) || ((z = (O = t == null ? void 0 : t.elements) == null ? void 0 : O.point) == null ? void 0 : z.borderColor) || ((B = oe.point) == null ? void 0 : B.hoverBorderColors[D]),
        pointHoverBackgroundColor: ((F = e == null ? void 0 : e.colors) == null ? void 0 : F[D].point) || ((j = ($ = t == null ? void 0 : t.elements) == null ? void 0 : $.point) == null ? void 0 : j.backgroundColor) || oe.point.hoverBackgroundColors[D],
        pointBackgroundColor: ((V = e == null ? void 0 : e.colors) == null ? void 0 : V[D].point) || ((G = (K = t == null ? void 0 : t.elements) == null ? void 0 : K.point) == null ? void 0 : G.backgroundColor) || oe.point.backgroundColor,
        ...A
      };
    })]
  }, r = {
    plugins: {
      ...ks.plugins,
      ...t == null ? void 0 : t.plugins,
      tooltip: {
        ...(y = ks.plugins) == null ? void 0 : y.tooltip,
        ...(_ = t == null ? void 0 : t.plugins) == null ? void 0 : _.tooltip,
        titleFont: {
          family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif"
        },
        bodyFont: {
          family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif"
        }
      }
    }
  }, [a] = Oo({
    ...ks,
    ...t,
    ...r
  }), [l, c] = Oo(-1);
  Ce(() => {
    if (i.current == null || l === -1)
      return;
    const A = i.current;
    A.setActiveElements([{
      datasetIndex: 0,
      index: l
    }, {
      datasetIndex: 1,
      index: l
    }]);
    const D = A.options, I = A.getActiveElements();
    D.mouseLine && I[0] && (D.mouseLine.x = I[0].element.x), A.update();
  }, [l]);
  const d = function(A) {
    return A.length ? A[0].index : -1;
  }, u = function(A, D) {
    const I = A.canvas, L = I.getBoundingClientRect(), H = new MouseEvent("click", {
      clientX: L.left + D.x,
      clientY: L.top + D.y,
      cancelable: !0,
      bubbles: !0
    });
    I.dispatchEvent(H);
  }, h = ({
    code: A
  }) => {
    const D = i.current;
    if (D == null)
      return;
    const I = D.getActiveElements();
    if (A === "ArrowRight") {
      const L = d(I) + 1, H = L === D.data.datasets[0].data.length ? 0 : L;
      c(H);
    } else if (A === "ArrowLeft") {
      const L = d(I) - 1, H = L < 0 ? D.data.datasets[0].data.length - 1 : L;
      c(H);
    } else if (A === "Enter" && I.length) {
      const L = I[0], tt = D.getDatasetMeta(L.datasetIndex).data[L.index];
      u(D, tt);
    }
  }, f = [(((v = i.current) == null ? void 0 : v.data.datasets[0].data[l]) || "unavailable").toString(), (((w = i.current) == null ? void 0 : w.data.datasets[1].data[l]) || "unavailable").toString()], p = ((x = i.current) == null ? void 0 : x.data.labels) != null ? (k = i.current) == null ? void 0 : k.data.labels[l] : "null", g = [(C = i.current) == null ? void 0 : C.data.datasets[0].label, (P = i.current) == null ? void 0 : P.data.datasets[1].label], m = l > -1 ? `${p} ${g[0]} ${f[0]}. ${g[1]} ${f[1]}.` : "";
  return fe(Lp, {
    children: Fp(Ic, {
      className: "text",
      sx: {
        position: "relative",
        width: "100%"
      },
      ref: s,
      children: [fe(Np, {
        data: o,
        options: a,
        plugins: [Qb],
        "aria-label": m,
        "aria-live": "assertive",
        ref: i,
        onKeyUp: h,
        onBlur: () => c(-1),
        onFocus: () => c(0),
        tabIndex: 0
      }), fe(Jb, {
        chart: i.current
      })]
    })
  });
};
ty.displayName = "LineChart";
export {
  ty as LineChart
};
