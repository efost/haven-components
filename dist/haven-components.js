var nl = Object.defineProperty;
var il = (n, t, e) => t in n ? nl(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var O = (n, t, e) => (il(n, typeof t != "symbol" ? t + "" : t, e), e);
import { Box as sl } from "@mui/material";
import dr, { forwardRef as ur, useRef as Ci, useEffect as se, useState as Cs } from "react";
function hn(n) {
  return n + 0.5 | 0;
}
const Vt = (n, t, e) => Math.max(Math.min(n, e), t);
function Be(n) {
  return Vt(hn(n * 2.55), 0, 255);
}
function $t(n) {
  return Vt(hn(n * 255), 0, 255);
}
function It(n) {
  return Vt(hn(n / 2.55) / 100, 0, 1);
}
function Ps(n) {
  return Vt(hn(n * 100), 0, 100);
}
const wt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Pi = [..."0123456789ABCDEF"], ol = (n) => Pi[n & 15], rl = (n) => Pi[(n & 240) >> 4] + Pi[n & 15], wn = (n) => (n & 240) >> 4 === (n & 15), al = (n) => wn(n.r) && wn(n.g) && wn(n.b) && wn(n.a);
function ll(n) {
  var t = n.length, e;
  return n[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & wt[n[1]] * 17,
    g: 255 & wt[n[2]] * 17,
    b: 255 & wt[n[3]] * 17,
    a: t === 5 ? wt[n[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: wt[n[1]] << 4 | wt[n[2]],
    g: wt[n[3]] << 4 | wt[n[4]],
    b: wt[n[5]] << 4 | wt[n[6]],
    a: t === 9 ? wt[n[7]] << 4 | wt[n[8]] : 255
  })), e;
}
const cl = (n, t) => n < 255 ? t(n) : "";
function hl(n) {
  var t = al(n) ? ol : rl;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + cl(n.a, t) : void 0;
}
const dl = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function fr(n, t, e) {
  const i = t * Math.min(e, 1 - e), s = (o, r = (o + n / 30) % 12) => e - i * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function ul(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function fl(n, t, e) {
  const i = fr(n, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - e, i[s] += t;
  return i;
}
function gl(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
}
function ji(n) {
  const e = n.r / 255, i = n.g / 255, s = n.b / 255, o = Math.max(e, i, s), r = Math.min(e, i, s), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = gl(e, i, s, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Vi(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map($t);
}
function Ni(n, t, e) {
  return Vi(fr, n, t, e);
}
function pl(n, t, e) {
  return Vi(fl, n, t, e);
}
function ml(n, t, e) {
  return Vi(ul, n, t, e);
}
function gr(n) {
  return (n % 360 + 360) % 360;
}
function bl(n) {
  const t = dl.exec(n);
  let e = 255, i;
  if (!t)
    return;
  t[5] !== i && (e = t[6] ? Be(+t[5]) : $t(+t[5]));
  const s = gr(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? i = pl(s, o, r) : t[1] === "hsv" ? i = ml(s, o, r) : i = Ni(s, o, r), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: e
  };
}
function xl(n, t) {
  var e = ji(n);
  e[0] = gr(e[0] + t), e = Ni(e), n.r = e[0], n.g = e[1], n.b = e[2];
}
function yl(n) {
  if (!n)
    return;
  const t = ji(n), e = t[0], i = Ps(t[1]), s = Ps(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${It(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
}
const Ds = {
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
}, Os = {
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
function _l() {
  const n = {}, t = Object.keys(Os), e = Object.keys(Ds);
  let i, s, o, r, a;
  for (i = 0; i < t.length; i++) {
    for (r = a = t[i], s = 0; s < e.length; s++)
      o = e[s], a = a.replace(o, Ds[o]);
    o = parseInt(Os[r], 16), n[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return n;
}
let Sn;
function vl(n) {
  Sn || (Sn = _l(), Sn.transparent = [0, 0, 0, 0]);
  const t = Sn[n.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const wl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Sl(n) {
  const t = wl.exec(n);
  let e = 255, i, s, o;
  if (!!t) {
    if (t[7] !== i) {
      const r = +t[7];
      e = t[8] ? Be(r) : Vt(r * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? Be(i) : Vt(i, 0, 255)), s = 255 & (t[4] ? Be(s) : Vt(s, 0, 255)), o = 255 & (t[6] ? Be(o) : Vt(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: e
    };
  }
}
function Ml(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${It(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`);
}
const ui = (n) => n <= 31308e-7 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055, me = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
function kl(n, t, e) {
  const i = me(It(n.r)), s = me(It(n.g)), o = me(It(n.b));
  return {
    r: $t(ui(i + e * (me(It(t.r)) - i))),
    g: $t(ui(s + e * (me(It(t.g)) - s))),
    b: $t(ui(o + e * (me(It(t.b)) - o))),
    a: n.a + e * (t.a - n.a)
  };
}
function Mn(n, t, e) {
  if (n) {
    let i = ji(n);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = Ni(i), n.r = i[0], n.g = i[1], n.b = i[2];
  }
}
function pr(n, t) {
  return n && Object.assign(t || {}, n);
}
function As(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n) ? n.length >= 3 && (t = { r: n[0], g: n[1], b: n[2], a: 255 }, n.length > 3 && (t.a = $t(n[3]))) : (t = pr(n, { r: 0, g: 0, b: 0, a: 1 }), t.a = $t(t.a)), t;
}
function Cl(n) {
  return n.charAt(0) === "r" ? Sl(n) : bl(n);
}
class en {
  constructor(t) {
    if (t instanceof en)
      return t;
    const e = typeof t;
    let i;
    e === "object" ? i = As(t) : e === "string" && (i = ll(t) || vl(t) || Cl(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = pr(this._rgb);
    return t && (t.a = It(t.a)), t;
  }
  set rgb(t) {
    this._rgb = As(t);
  }
  rgbString() {
    return this._valid ? Ml(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? hl(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? yl(this._rgb) : void 0;
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
    return t && (this._rgb = kl(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new en(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = $t(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = hn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return Mn(this._rgb, 2, t), this;
  }
  darken(t) {
    return Mn(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return Mn(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return Mn(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return xl(this._rgb, t), this;
  }
}
function Rt() {
}
const Pl = (() => {
  let n = 0;
  return () => n++;
})();
function W(n) {
  return n === null || typeof n > "u";
}
function $(n) {
  if (Array.isArray && Array.isArray(n))
    return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function I(n) {
  return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function J(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function pt(n, t) {
  return J(n) ? n : t;
}
function R(n, t) {
  return typeof n > "u" ? t : n;
}
const Dl = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t, mr = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 * t : +n;
function K(n, t, e) {
  if (n && typeof n.call == "function")
    return n.apply(e, t);
}
function Y(n, t, e, i) {
  let s, o, r;
  if ($(n))
    if (o = n.length, i)
      for (s = o - 1; s >= 0; s--)
        t.call(e, n[s], s);
    else
      for (s = 0; s < o; s++)
        t.call(e, n[s], s);
  else if (I(n))
    for (r = Object.keys(n), o = r.length, s = 0; s < o; s++)
      t.call(e, n[r[s]], r[s]);
}
function Vn(n, t) {
  let e, i, s, o;
  if (!n || !t || n.length !== t.length)
    return !1;
  for (e = 0, i = n.length; e < i; ++e)
    if (s = n[e], o = t[e], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function Nn(n) {
  if ($(n))
    return n.map(Nn);
  if (I(n)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(n), i = e.length;
    let s = 0;
    for (; s < i; ++s)
      t[e[s]] = Nn(n[e[s]]);
    return t;
  }
  return n;
}
function br(n) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(n) === -1;
}
function Ol(n, t, e, i) {
  if (!br(n))
    return;
  const s = t[n], o = e[n];
  I(s) && I(o) ? nn(s, o, i) : t[n] = Nn(o);
}
function nn(n, t, e) {
  const i = $(t) ? t : [
    t
  ], s = i.length;
  if (!I(n))
    return n;
  e = e || {};
  const o = e.merger || Ol;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = i[a], !I(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], n, r, e);
  }
  return n;
}
function Ye(n, t) {
  return nn(n, t, {
    merger: Al
  });
}
function Al(n, t, e) {
  if (!br(n))
    return;
  const i = t[n], s = e[n];
  I(i) && I(s) ? Ye(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Nn(s));
}
const Es = {
  "": (n) => n,
  x: (n) => n.x,
  y: (n) => n.y
};
function El(n) {
  const t = n.split("."), e = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
  return e;
}
function Rl(n) {
  const t = El(n);
  return (e) => {
    for (const i of t) {
      if (i === "")
        break;
      e = e && e[i];
    }
    return e;
  };
}
function Kt(n, t) {
  return (Es[t] || (Es[t] = Rl(t)))(n);
}
function Hi(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const it = (n) => typeof n < "u", qt = (n) => typeof n == "function", Rs = (n, t) => {
  if (n.size !== t.size)
    return !1;
  for (const e of n)
    if (!t.has(e))
      return !1;
  return !0;
};
function Tl(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const N = Math.PI, q = 2 * N, Ll = q + N, Hn = Number.POSITIVE_INFINITY, xr = N / 180, tt = N / 2, te = N / 4, Ts = N * 2 / 3, Nt = Math.log10, At = Math.sign;
function $e(n, t, e) {
  return Math.abs(n - t) < e;
}
function Ls(n) {
  const t = Math.round(n);
  n = $e(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(Nt(n))), i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function Il(n) {
  const t = [], e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++)
    n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function _e(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Fl(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function yr(n, t, e) {
  let i, s, o;
  for (i = 0, s = n.length; i < s; i++)
    o = n[i][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function ot(n) {
  return n * (N / 180);
}
function ti(n) {
  return n * (180 / N);
}
function Is(n) {
  if (!J(n))
    return;
  let t = 1, e = 0;
  for (; Math.round(n * t) / t !== n; )
    t *= 10, e++;
  return e;
}
function _r(n, t) {
  const e = t.x - n.x, i = t.y - n.y, s = Math.sqrt(e * e + i * i);
  let o = Math.atan2(i, e);
  return o < -0.5 * N && (o += q), {
    angle: o,
    distance: s
  };
}
function sn(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function zl(n, t) {
  return (n - t + Ll) % q - N;
}
function mt(n) {
  return (n % q + q) % q;
}
function on(n, t, e, i) {
  const s = mt(n), o = mt(t), r = mt(e), a = mt(o - s), l = mt(r - s), c = mt(s - o), h = mt(s - r);
  return s === o || s === r || i && o === r || a > l && c < h;
}
function at(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Bl(n) {
  return at(n, -32768, 32767);
}
function Ft(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function Yi(n, t, e) {
  e = e || ((r) => n[r] < t);
  let i = n.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, e(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const zt = (n, t, e, i) => Yi(n, e, i ? (s) => {
  const o = n[s][t];
  return o < e || o === e && n[s + 1][t] === e;
} : (s) => n[s][t] < e), Wl = (n, t, e) => Yi(n, e, (i) => n[i][t] >= e);
function jl(n, t, e) {
  let i = 0, s = n.length;
  for (; i < s && n[i] < t; )
    i++;
  for (; s > i && n[s - 1] > e; )
    s--;
  return i > 0 || s < n.length ? n.slice(i, s) : n;
}
const vr = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Vl(n, t) {
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
  }), vr.forEach((e) => {
    const i = "_onData" + Hi(e), s = n[e];
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
function Fs(n, t) {
  const e = n._chartjs;
  if (!e)
    return;
  const i = e.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (vr.forEach((o) => {
    delete n[o];
  }), delete n._chartjs);
}
function wr(n) {
  const t = /* @__PURE__ */ new Set();
  let e, i;
  for (e = 0, i = n.length; e < i; ++e)
    t.add(n[e]);
  return t.size === i ? n : Array.from(t);
}
const Sr = function() {
  return typeof window > "u" ? function(n) {
    return n();
  } : window.requestAnimationFrame;
}();
function Mr(n, t) {
  let e = [], i = !1;
  return function(...s) {
    e = s, i || (i = !0, Sr.call(window, () => {
      i = !1, n.apply(t, e);
    }));
  };
}
function Nl(n, t) {
  let e;
  return function(...i) {
    return t ? (clearTimeout(e), e = setTimeout(n, t, i)) : n.apply(this, i), t;
  };
}
const $i = (n) => n === "start" ? "left" : n === "end" ? "right" : "center", ht = (n, t, e) => n === "start" ? t : n === "end" ? e : (t + e) / 2, Hl = (n, t, e, i) => n === (i ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function kr(n, t, e) {
  const i = t.length;
  let s = 0, o = i;
  if (n._sorted) {
    const { iScale: r, _parsed: a } = n, l = r.axis, { min: c, max: h, minDefined: d, maxDefined: u } = r.getUserBounds();
    d && (s = at(Math.min(
      zt(a, r.axis, c).lo,
      e ? i : zt(t, l, r.getPixelForValue(c)).lo
    ), 0, i - 1)), u ? o = at(Math.max(
      zt(a, r.axis, h, !0).hi + 1,
      e ? 0 : zt(t, l, r.getPixelForValue(h), !0).hi + 1
    ), s, i) - s : o = i - s;
  }
  return {
    start: s,
    count: o
  };
}
function Cr(n) {
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
const kn = (n) => n === 0 || n === 1, zs = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * q / e)), Bs = (n, t, e) => Math.pow(2, -10 * n) * Math.sin((n - t) * q / e) + 1, Xe = {
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
  easeInSine: (n) => -Math.cos(n * tt) + 1,
  easeOutSine: (n) => Math.sin(n * tt),
  easeInOutSine: (n) => -0.5 * (Math.cos(N * n) - 1),
  easeInExpo: (n) => n === 0 ? 0 : Math.pow(2, 10 * (n - 1)),
  easeOutExpo: (n) => n === 1 ? 1 : -Math.pow(2, -10 * n) + 1,
  easeInOutExpo: (n) => kn(n) ? n : n < 0.5 ? 0.5 * Math.pow(2, 10 * (n * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
  easeInCirc: (n) => n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1),
  easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
  easeInOutCirc: (n) => (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
  easeInElastic: (n) => kn(n) ? n : zs(n, 0.075, 0.3),
  easeOutElastic: (n) => kn(n) ? n : Bs(n, 0.075, 0.3),
  easeInOutElastic(n) {
    return kn(n) ? n : n < 0.5 ? 0.5 * zs(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * Bs(n * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (n) => 1 - Xe.easeOutBounce(1 - n),
  easeOutBounce(n) {
    return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  },
  easeInOutBounce: (n) => n < 0.5 ? Xe.easeInBounce(n * 2) * 0.5 : Xe.easeOutBounce(n * 2 - 1) * 0.5 + 0.5
};
function Pr(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Ws(n) {
  return Pr(n) ? n : new en(n);
}
function fi(n) {
  return Pr(n) ? n : new en(n).saturate(0.5).darken(0.1).hexString();
}
const Yl = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], $l = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Xl(n) {
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
      properties: $l
    },
    numbers: {
      type: "number",
      properties: Yl
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
function Ul(n) {
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
const js = /* @__PURE__ */ new Map();
function Kl(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = js.get(e);
  return i || (i = new Intl.NumberFormat(n, t), js.set(e, i)), i;
}
function dn(n, t, e) {
  return Kl(t, e).format(n);
}
const Dr = {
  values(n) {
    return $(n) ? n : "" + n;
  },
  numeric(n, t, e) {
    if (n === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = ql(n, e);
    }
    const r = Nt(Math.abs(o)), a = Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), dn(n, i, l);
  },
  logarithmic(n, t, e) {
    if (n === 0)
      return "0";
    const i = e[t].significand || n / Math.pow(10, Math.floor(Nt(n)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * e.length ? Dr.numeric.call(this, n, t, e) : "";
  }
};
function ql(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var ei = {
  formatters: Dr
};
function Gl(n) {
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
      callback: ei.formatters.values,
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
const ce = /* @__PURE__ */ Object.create(null), Di = /* @__PURE__ */ Object.create(null);
function Ue(n, t) {
  if (!t)
    return n;
  const e = t.split(".");
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i];
    n = n[o] || (n[o] = /* @__PURE__ */ Object.create(null));
  }
  return n;
}
function gi(n, t, e) {
  return typeof t == "string" ? nn(Ue(n, t), e) : nn(Ue(n, ""), t);
}
class Jl {
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
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => fi(s.backgroundColor), this.hoverBorderColor = (i, s) => fi(s.borderColor), this.hoverColor = (i, s) => fi(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return gi(this, t, e);
  }
  get(t) {
    return Ue(this, t);
  }
  describe(t, e) {
    return gi(Di, t, e);
  }
  override(t, e) {
    return gi(ce, t, e);
  }
  route(t, e, i, s) {
    const o = Ue(this, t), r = Ue(this, i), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return I(l) ? Object.assign({}, c, l) : R(l, c);
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
var Z = new Jl({
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
  Xl,
  Ul,
  Gl
]);
function Zl(n) {
  return !n || W(n.size) || W(n.family) ? null : (n.style ? n.style + " " : "") + (n.weight ? n.weight + " " : "") + n.size + "px " + n.family;
}
function Yn(n, t, e, i, s) {
  let o = t[s];
  return o || (o = t[s] = n.measureText(s).width, e.push(s)), o > i && (i = o), i;
}
function Ql(n, t, e, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), n.save(), n.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, u;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && $(d) !== !0)
      r = Yn(n, s, o, r, d);
    else if ($(d))
      for (c = 0, h = d.length; c < h; c++)
        u = d[c], u != null && !$(u) && (r = Yn(n, s, o, r, u));
  n.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return r;
}
function ee(n, t, e) {
  const i = n.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function Vs(n, t) {
  t = t || n.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore();
}
function $n(n, t, e, i) {
  Or(n, t, e, i, null);
}
function Or(n, t, e, i, s) {
  let o, r, a, l, c, h, d, u;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let b = (g || 0) * xr;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    n.save(), n.translate(e, i), n.rotate(b), n.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), n.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (n.beginPath(), f) {
      default:
        s ? n.ellipse(e, i, s / 2, p, 0, 0, q) : n.arc(e, i, p, 0, q), n.closePath();
        break;
      case "triangle":
        h = s ? s / 2 : p, n.moveTo(e + Math.sin(b) * h, i - Math.cos(b) * p), b += Ts, n.lineTo(e + Math.sin(b) * h, i - Math.cos(b) * p), b += Ts, n.lineTo(e + Math.sin(b) * h, i - Math.cos(b) * p), n.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, r = Math.cos(b + te) * l, d = Math.cos(b + te) * (s ? s / 2 - c : l), a = Math.sin(b + te) * l, u = Math.sin(b + te) * (s ? s / 2 - c : l), n.arc(e - d, i - a, c, b - N, b - tt), n.arc(e + u, i - r, c, b - tt, b), n.arc(e + d, i + a, c, b, b + tt), n.arc(e - u, i + r, c, b + tt, b + N), n.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = s ? s / 2 : l, n.rect(e - h, i - l, 2 * h, 2 * l);
          break;
        }
        b += te;
      case "rectRot":
        d = Math.cos(b) * (s ? s / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (s ? s / 2 : p), n.moveTo(e - d, i - a), n.lineTo(e + u, i - r), n.lineTo(e + d, i + a), n.lineTo(e - u, i + r), n.closePath();
        break;
      case "crossRot":
        b += te;
      case "cross":
        d = Math.cos(b) * (s ? s / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (s ? s / 2 : p), n.moveTo(e - d, i - a), n.lineTo(e + d, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r);
        break;
      case "star":
        d = Math.cos(b) * (s ? s / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (s ? s / 2 : p), n.moveTo(e - d, i - a), n.lineTo(e + d, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r), b += te, d = Math.cos(b) * (s ? s / 2 : p), r = Math.cos(b) * p, a = Math.sin(b) * p, u = Math.sin(b) * (s ? s / 2 : p), n.moveTo(e - d, i - a), n.lineTo(e + d, i + a), n.moveTo(e + u, i - r), n.lineTo(e - u, i + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(b) * p, a = Math.sin(b) * p, n.moveTo(e - r, i - a), n.lineTo(e + r, i + a);
        break;
      case "dash":
        n.moveTo(e, i), n.lineTo(e + Math.cos(b) * (s ? s / 2 : p), i + Math.sin(b) * p);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function rn(n, t, e) {
  return e = e || 0.5, !t || n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e;
}
function un(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function fn(n) {
  n.restore();
}
function tc(n, t, e, i, s) {
  if (!t)
    return n.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    n.lineTo(o, t.y), n.lineTo(o, e.y);
  } else
    s === "after" != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function ec(n, t, e, i) {
  if (!t)
    return n.lineTo(e.x, e.y);
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y);
}
function he(n, t, e, i, s, o = {}) {
  const r = $(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (n.save(), n.font = s.string, nc(n, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && sc(n, o.backdrop), a && (o.strokeColor && (n.strokeStyle = o.strokeColor), W(o.strokeWidth) || (n.lineWidth = o.strokeWidth), n.strokeText(c, e, i, o.maxWidth)), n.fillText(c, e, i, o.maxWidth), ic(n, e, i, c, o), i += s.lineHeight;
  n.restore();
}
function nc(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]), W(t.rotation) || n.rotate(t.rotation), t.color && (n.fillStyle = t.color), t.textAlign && (n.textAlign = t.textAlign), t.textBaseline && (n.textBaseline = t.textBaseline);
}
function ic(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = s.strikethrough ? (l + c) / 2 : c;
    n.strokeStyle = n.fillStyle, n.beginPath(), n.lineWidth = s.decorationWidth || 2, n.moveTo(r, h), n.lineTo(a, h), n.stroke();
  }
}
function sc(n, t) {
  const e = n.fillStyle;
  n.fillStyle = t.color, n.fillRect(t.left, t.top, t.width, t.height), n.fillStyle = e;
}
function ve(n, t) {
  const { x: e, y: i, w: s, h: o, radius: r } = t;
  n.arc(e + r.topLeft, i + r.topLeft, r.topLeft, -tt, N, !0), n.lineTo(e, i + o - r.bottomLeft), n.arc(e + r.bottomLeft, i + o - r.bottomLeft, r.bottomLeft, N, tt, !0), n.lineTo(e + s - r.bottomRight, i + o), n.arc(e + s - r.bottomRight, i + o - r.bottomRight, r.bottomRight, tt, 0, !0), n.lineTo(e + s, i + r.topRight), n.arc(e + s - r.topRight, i + r.topRight, r.topRight, 0, -tt, !0), n.lineTo(e + r.topLeft, i);
}
const oc = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, rc = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function ac(n, t) {
  const e = ("" + n).match(oc);
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
const lc = (n) => +n || 0;
function Xi(n, t) {
  const e = {}, i = I(t), s = i ? Object.keys(t) : t, o = I(n) ? i ? (r) => R(n[r], n[t[r]]) : (r) => n[r] : () => n;
  for (const r of s)
    e[r] = lc(o(r));
  return e;
}
function Ar(n) {
  return Xi(n, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Xt(n) {
  return Xi(n, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function rt(n) {
  const t = Ar(n);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function et(n, t) {
  n = n || {}, t = t || Z.font;
  let e = R(n.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let i = R(n.style, t.style);
  i && !("" + i).match(rc) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: R(n.family, t.family),
    lineHeight: ac(R(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: R(n.weight, t.weight),
    string: ""
  };
  return s.string = Zl(s), s;
}
function We(n, t, e, i) {
  let s = !0, o, r, a;
  for (o = 0, r = n.length; o < r; ++o)
    if (a = n[o], a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t), s = !1), e !== void 0 && $(a) && (a = a[e % a.length], s = !1), a !== void 0))
      return i && !s && (i.cacheable = !1), a;
}
function cc(n, t, e) {
  const { min: i, max: s } = n, o = mr(t, (s - i) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(i, -Math.abs(o)),
    max: r(s, o)
  };
}
function Jt(n, t) {
  return Object.assign(Object.create(n), t);
}
function Ui(n, t = [
  ""
], e = n, i, s = () => n[0]) {
  it(i) || (i = Lr("_fallback", n));
  const o = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: e,
    _fallback: i,
    _getTarget: s,
    override: (r) => Ui([
      r,
      ...n
    ], t, e, i)
  };
  return new Proxy(o, {
    deleteProperty(r, a) {
      return delete r[a], delete r._keys, delete n[0][a], !0;
    },
    get(r, a) {
      return Rr(r, a, () => bc(a, t, n, r));
    },
    getOwnPropertyDescriptor(r, a) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    has(r, a) {
      return Hs(r).includes(a);
    },
    ownKeys(r) {
      return Hs(r);
    },
    set(r, a, l) {
      const c = r._storage || (r._storage = s());
      return r[a] = c[a] = l, delete r._keys, !0;
    }
  });
}
function we(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: Er(n, i),
    setContext: (o) => we(n, o, e, i),
    override: (o) => we(n.override(o), t, e, i)
  };
  return new Proxy(s, {
    deleteProperty(o, r) {
      return delete o[r], delete n[r], !0;
    },
    get(o, r, a) {
      return Rr(o, r, () => dc(o, r, a));
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
function Er(n, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n;
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: qt(e) ? e : () => e,
    isIndexable: qt(i) ? i : () => i
  };
}
const hc = (n, t) => n ? n + Hi(t) : t, Ki = (n, t) => I(t) && n !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Rr(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t))
    return n[t];
  const i = e();
  return n[t] = i, i;
}
function dc(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: r } = n;
  let a = i[t];
  return qt(a) && r.isScriptable(t) && (a = uc(t, a, n, e)), $(a) && a.length && (a = fc(t, a, n, r.isIndexable)), Ki(t, a) && (a = we(a, s, o && o[t], r)), a;
}
function uc(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(n))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + n);
  return a.add(n), t = t(o, r || i), a.delete(n), Ki(n, t) && (t = qi(s._scopes, s, n, t)), t;
}
function fc(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (it(o.index) && i(n))
    t = t[o.index % t.length];
  else if (I(t[0])) {
    const l = t, c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = qi(c, s, n, h);
      t.push(we(d, o, r && r[n], a));
    }
  }
  return t;
}
function Tr(n, t, e) {
  return qt(n) ? n(t, e) : n;
}
const gc = (n, t) => n === !0 ? t : typeof n == "string" ? Kt(t, n) : void 0;
function pc(n, t, e, i, s) {
  for (const o of t) {
    const r = gc(e, o);
    if (r) {
      n.add(r);
      const a = Tr(r._fallback, e, s);
      if (it(a) && a !== e && a !== i)
        return a;
    } else if (r === !1 && it(i) && e !== i)
      return null;
  }
  return !1;
}
function qi(n, t, e, i) {
  const s = t._rootScopes, o = Tr(t._fallback, e, i), r = [
    ...n,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(i);
  let l = Ns(a, r, e, o || e, i);
  return l === null || it(o) && o !== e && (l = Ns(a, r, o, l, i), l === null) ? !1 : Ui(Array.from(a), [
    ""
  ], s, o, () => mc(t, e, i));
}
function Ns(n, t, e, i, s) {
  for (; e; )
    e = pc(n, t, e, i, s);
  return e;
}
function mc(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return $(s) && I(e) ? e : s || {};
}
function bc(n, t, e, i) {
  let s;
  for (const o of t)
    if (s = Lr(hc(o, n), e), it(s))
      return Ki(n, s) ? qi(e, i, n, s) : s;
}
function Lr(n, t) {
  for (const e of t) {
    if (!e)
      continue;
    const i = e[n];
    if (it(i))
      return i;
  }
}
function Hs(n) {
  let t = n._keys;
  return t || (t = n._keys = xc(n._scopes)), t;
}
function xc(n) {
  const t = /* @__PURE__ */ new Set();
  for (const e of n)
    for (const i of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function Ir(n, t, e, i) {
  const { iScale: s } = n, { key: o = "r" } = this._parsing, r = new Array(i);
  let a, l, c, h;
  for (a = 0, l = i; a < l; ++a)
    c = a + e, h = t[c], r[a] = {
      r: s.parse(Kt(h, o), c)
    };
  return r;
}
const yc = Number.EPSILON || 1e-14, Se = (n, t) => t < n.length && !n[t].skip && n[t], Fr = (n) => n === "x" ? "y" : "x";
function _c(n, t, e, i) {
  const s = n.skip ? t : n, o = t, r = e.skip ? t : e, a = sn(o, s), l = sn(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const d = i * c, u = i * h;
  return {
    previous: {
      x: o.x - d * (r.x - s.x),
      y: o.y - d * (r.y - s.y)
    },
    next: {
      x: o.x + u * (r.x - s.x),
      y: o.y + u * (r.y - s.y)
    }
  };
}
function vc(n, t, e) {
  const i = n.length;
  let s, o, r, a, l, c = Se(n, 0);
  for (let h = 0; h < i - 1; ++h)
    if (l = c, c = Se(n, h + 1), !(!l || !c)) {
      if ($e(t[h], 0, yc)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      s = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = s * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function wc(n, t, e = "x") {
  const i = Fr(e), s = n.length;
  let o, r, a, l = Se(n, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = Se(n, c + 1), !a)
      continue;
    const h = a[e], d = a[i];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${i}`] = d - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${i}`] = d + o * t[c]);
  }
}
function Sc(n, t = "x") {
  const e = Fr(t), i = n.length, s = Array(i).fill(0), o = Array(i);
  let r, a, l, c = Se(n, 0);
  for (r = 0; r < i; ++r)
    if (a = l, l = c, c = Se(n, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        s[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? At(s[r - 1]) !== At(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  vc(n, s, o), wc(n, o, t);
}
function Cn(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function Mc(n, t) {
  let e, i, s, o, r, a = rn(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    r = o, o = a, a = e < i - 1 && rn(n[e + 1], t), o && (s = n[e], r && (s.cp1x = Cn(s.cp1x, t.left, t.right), s.cp1y = Cn(s.cp1y, t.top, t.bottom)), a && (s.cp2x = Cn(s.cp2x, t.left, t.right), s.cp2y = Cn(s.cp2y, t.top, t.bottom)));
}
function kc(n, t, e, i, s) {
  let o, r, a, l;
  if (t.spanGaps && (n = n.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Sc(n, s);
  else {
    let c = i ? n[n.length - 1] : n[0];
    for (o = 0, r = n.length; o < r; ++o)
      a = n[o], l = _c(c, a, n[Math.min(o + 1, r - (i ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && Mc(n, e);
}
function zr() {
  return typeof window < "u" && typeof document < "u";
}
function Gi(n) {
  let t = n.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Xn(n, t, e) {
  let i;
  return typeof n == "string" ? (i = parseInt(n, 10), n.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = n, i;
}
const ni = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function Cc(n, t) {
  return ni(n).getPropertyValue(t);
}
const Pc = [
  "top",
  "right",
  "bottom",
  "left"
];
function le(n, t, e) {
  const i = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = Pc[s];
    i[o] = parseFloat(n[t + "-" + o + e]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const Dc = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function Oc(n, t) {
  const e = n.touches, i = e && e.length ? e[0] : n, { offsetX: s, offsetY: o } = i;
  let r = !1, a, l;
  if (Dc(s, o, n.target))
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
function oe(n, t) {
  if ("native" in n)
    return n;
  const { canvas: e, currentDevicePixelRatio: i } = t, s = ni(e), o = s.boxSizing === "border-box", r = le(s, "padding"), a = le(s, "border", "width"), { x: l, y: c, box: h } = Oc(n, e), d = r.left + (h && a.left), u = r.top + (h && a.top);
  let { width: f, height: g } = t;
  return o && (f -= r.width + a.width, g -= r.height + a.height), {
    x: Math.round((l - d) / f * e.width / i),
    y: Math.round((c - u) / g * e.height / i)
  };
}
function Ac(n, t, e) {
  let i, s;
  if (t === void 0 || e === void 0) {
    const o = Gi(n);
    if (!o)
      t = n.clientWidth, e = n.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = ni(o), l = le(a, "border", "width"), c = le(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, i = Xn(a.maxWidth, o, "clientWidth"), s = Xn(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: i || Hn,
    maxHeight: s || Hn
  };
}
const Pn = (n) => Math.round(n * 10) / 10;
function Ec(n, t, e, i) {
  const s = ni(n), o = le(s, "margin"), r = Xn(s.maxWidth, n, "clientWidth") || Hn, a = Xn(s.maxHeight, n, "clientHeight") || Hn, l = Ac(n, t, e);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const u = le(s, "border", "width"), f = le(s, "padding");
    c -= f.width + u.width, h -= f.height + u.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, i ? c / i : h - o.height), c = Pn(Math.min(c, r, l.maxWidth)), h = Pn(Math.min(h, a, l.maxHeight)), c && !h && (h = Pn(c / 2)), (t !== void 0 || e !== void 0) && i && l.height && h > l.height && (h = l.height, c = Pn(Math.floor(h * i))), {
    width: c,
    height: h
  };
}
function Ys(n, t, e) {
  const i = t || 1, s = Math.floor(n.height * i), o = Math.floor(n.width * i);
  n.height = Math.floor(n.height), n.width = Math.floor(n.width);
  const r = n.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${n.height}px`, r.style.width = `${n.width}px`), n.currentDevicePixelRatio !== i || r.height !== s || r.width !== o ? (n.currentDevicePixelRatio = i, r.height = s, r.width = o, n.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const Rc = function() {
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
function $s(n, t) {
  const e = Cc(n, t), i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function re(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: n.y + e * (t.y - n.y)
  };
}
function Tc(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === "middle" ? e < 0.5 ? n.y : t.y : i === "after" ? e < 1 ? n.y : t.y : e > 0 ? t.y : n.y
  };
}
function Lc(n, t, e, i) {
  const s = {
    x: n.cp2x,
    y: n.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = re(n, s, e), a = re(s, o, e), l = re(o, t, e), c = re(r, a, e), h = re(a, l, e);
  return re(c, h, e);
}
const Ic = function(n, t) {
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
}, Fc = function() {
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
function xe(n, t, e) {
  return n ? Ic(t, e) : Fc();
}
function Br(n, t) {
  let e, i;
  (t === "ltr" || t === "rtl") && (e = n.canvas.style, i = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), n.prevTextDirection = i);
}
function Wr(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty("direction", t[0], t[1]));
}
function jr(n) {
  return n === "angle" ? {
    between: on,
    compare: zl,
    normalize: mt
  } : {
    between: Ft,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function Xs({ start: n, end: t, count: e, loop: i, style: s }) {
  return {
    start: n % e,
    end: t % e,
    loop: i && (t - n + 1) % e === 0,
    style: s
  };
}
function zc(n, t, e) {
  const { property: i, start: s, end: o } = e, { between: r, normalize: a } = jr(i), l = t.length;
  let { start: c, end: h, loop: d } = n, u, f;
  if (d) {
    for (c += l, h += l, u = 0, f = l; u < f && r(a(t[c % l][i]), s, o); ++u)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: d,
    style: n.style
  };
}
function Vr(n, t, e) {
  if (!e)
    return [
      n
    ];
  const { property: i, start: s, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = jr(i), { start: h, end: d, loop: u, style: f } = zc(n, t, e), g = [];
  let p = !1, b = null, x, y, w;
  const v = () => l(s, w, x) && a(s, w) !== 0, _ = () => a(o, x) === 0 || l(o, w, x), M = () => p || v(), C = () => !p || _();
  for (let k = h, P = h; k <= d; ++k)
    y = t[k % r], !y.skip && (x = c(y[i]), x !== w && (p = l(x, s, o), b === null && M() && (b = a(x, s) === 0 ? k : P), b !== null && C() && (g.push(Xs({
      start: b,
      end: k,
      loop: u,
      count: r,
      style: f
    })), b = null), P = k, w = x));
  return b !== null && g.push(Xs({
    start: b,
    end: d,
    loop: u,
    count: r,
    style: f
  })), g;
}
function Nr(n, t) {
  const e = [], i = n.segments;
  for (let s = 0; s < i.length; s++) {
    const o = Vr(i[s], n.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function Bc(n, t, e, i) {
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
function Wc(n, t, e, i) {
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
function jc(n, t) {
  const e = n.points, i = n.options.spanGaps, s = e.length;
  if (!s)
    return [];
  const o = !!n._loop, { start: r, end: a } = Bc(e, s, o, i);
  if (i === !0)
    return Us(n, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + s : a, c = !!n._fullLoop && r === 0 && a === s - 1;
  return Us(n, Wc(e, r, l, c), e, t);
}
function Us(n, t, e, i) {
  return !i || !i.setContext || !e ? t : Vc(n, t, e, i);
}
function Vc(n, t, e, i) {
  const s = n._chart.getContext(), o = Ks(n.options), { _datasetIndex: r, options: { spanGaps: a } } = n, l = e.length, c = [];
  let h = o, d = t[0].start, u = d;
  function f(g, p, b, x) {
    const y = a ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= y;
      for (; e[p % l].skip; )
        p += y;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: b,
        style: x
      }), h = x, d = p % l);
    }
  }
  for (const g of t) {
    d = a ? d : g.start;
    let p = e[d % l], b;
    for (u = d + 1; u <= g.end; u++) {
      const x = e[u % l];
      b = Ks(i.setContext(Jt(s, {
        type: "segment",
        p0: p,
        p1: x,
        p0DataIndex: (u - 1) % l,
        p1DataIndex: u % l,
        datasetIndex: r
      }))), Nc(b, h) && f(d, u - 1, g.loop, h), p = x, h = b;
    }
    d < u - 1 && f(d, u - 1, g.loop, h);
  }
  return c;
}
function Ks(n) {
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
function Nc(n, t) {
  return t && JSON.stringify(n) !== JSON.stringify(t);
}
class Hc {
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
    this._request || (this._running = !0, this._request = Sr.call(window, () => {
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
var Tt = new Hc();
const qs = "transparent", Yc = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = Ws(n || qs), s = i.valid && Ws(t || qs);
    return s && s.valid ? s.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class $c {
  constructor(t, e, i, s) {
    const o = e[i];
    s = We([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = We([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || Yc[t.type || typeof r], this._easing = Xe[t.easing] || Xe.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, r = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = We([
        t.to,
        e,
        s,
        t.from
      ]), this._from = We([
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
class Ji {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!I(t))
      return;
    const e = Object.keys(Z.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!I(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      ($(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !i.has(a)) && i.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options, s = Uc(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && Xc(t.options.$animations, i).then(() => {
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
      const h = e[c];
      let d = o[c];
      const u = i.get(c);
      if (d)
        if (u && d.active()) {
          d.update(u, h, a);
          continue;
        } else
          d.cancel();
      if (!u || !u.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new $c(u, t, c, h), s.push(d);
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
      return Tt.add(this._chart, i), !0;
  }
}
function Xc(n, t) {
  const e = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Uc(n, t) {
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
function Gs(n, t) {
  const e = n && n.options || {}, i = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function Kc(n, t, e) {
  if (e === !1)
    return !1;
  const i = Gs(n, e), s = Gs(t, e);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function qc(n) {
  let t, e, i, s;
  return I(n) ? (t = n.top, e = n.right, i = n.bottom, s = n.left) : t = e = i = s = n, {
    top: t,
    right: e,
    bottom: i,
    left: s,
    disabled: n === !1
  };
}
function Hr(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    e.push(i[s].index);
  return e;
}
function Js(n, t, e, i = {}) {
  const s = n.keys, o = i.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = s.length; r < a; ++r) {
      if (l = +s[r], l === e) {
        if (i.all)
          continue;
        break;
      }
      c = n.values[l], J(c) && (o || t === 0 || At(t) === At(c)) && (t += c);
    }
    return t;
  }
}
function Gc(n) {
  const t = Object.keys(n), e = new Array(t.length);
  let i, s, o;
  for (i = 0, s = t.length; i < s; ++i)
    o = t[i], e[i] = {
      x: o,
      y: n[o]
    };
  return e;
}
function Zs(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Jc(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Zc(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function Qc(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function Qs(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function to(n, t) {
  const { chart: e, _cachedMeta: i } = n, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = i, l = o.axis, c = r.axis, h = Jc(o, r, i), d = t.length;
  let u;
  for (let f = 0; f < d; ++f) {
    const g = t[f], { [l]: p, [c]: b } = g, x = g._stacks || (g._stacks = {});
    u = x[c] = Qc(s, h, p), u[a] = b, u._top = Qs(u, r, !0, i.type), u._bottom = Qs(u, r, !1, i.type);
    const y = u._visualValues || (u._visualValues = {});
    y[a] = b;
  }
}
function pi(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function th(n, t) {
  return Jt(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function eh(n, t, e) {
  return Jt(n, {
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
function Ee(n, t) {
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
const mi = (n) => n === "reset" || n === "none", eo = (n, t) => t ? n : Object.assign({}, n), nh = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: Hr(e, !0),
  values: null
};
class Mt {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Zs(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ee(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (d, u, f, g) => d === "x" ? u : d === "r" ? g : f, o = e.xAxisID = R(i.xAxisID, pi(t, "x")), r = e.yAxisID = R(i.yAxisID, pi(t, "y")), a = e.rAxisID = R(i.rAxisID, pi(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, r, a), h = e.vAxisID = s(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
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
    this._data && Fs(this._data, this), t._stacked && Ee(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (I(e))
      this._data = Gc(e);
    else if (i !== e) {
      if (i) {
        Fs(i, this);
        const s = this._cachedMeta;
        Ee(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && Vl(e, this), this._syncList = [], this._data = e;
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
    e._stacked = Zs(e.vScale, e), e.stack !== i.stack && (s = !0, Ee(e), e.stack = i.stack), this._resyncElements(t), (s || o !== e._stacked) && to(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: r } = i, a = o.axis;
    let l = t === 0 && e === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], h, d, u;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, u = s;
    else {
      $(s[t]) ? u = this.parseArrayData(i, s, t, e) : I(s[t]) ? u = this.parseObjectData(i, s, t, e) : u = this.parsePrimitiveData(i, s, t, e);
      const f = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        i._parsed[h + t] = d = u[h], l && (f() && (l = !1), c = d);
      i._sorted = l;
    }
    r && to(this, u);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(s);
    let u, f, g;
    for (u = 0, f = s; u < f; ++u)
      g = u + i, d[u] = {
        [a]: h || o.parse(c[g], g),
        [l]: r.parse(e[g], g)
      };
    return d;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, h, d;
    for (l = 0, c = s; l < c; ++l)
      h = l + i, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let h, d, u, f;
    for (h = 0, d = s; h < d; ++h)
      u = h + i, f = e[u], c[h] = {
        x: o.parse(Kt(f, a), u),
        y: r.parse(Kt(f, l), u)
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
      keys: Hr(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Js(a, r, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let r = o === null ? NaN : o;
    const a = s && i._stacks[e.axis];
    s && a && (s.values = a, r = Js(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, r = s.length, a = this._getOtherScale(t), l = nh(e, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = Zc(a);
    let u, f;
    function g() {
      f = s[u];
      const p = f[a.axis];
      return !J(f[t.axis]) || h > p || d < p;
    }
    for (u = 0; u < r && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
      ;
    if (o) {
      for (u = r - 1; u >= 0; --u)
        if (!g()) {
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
      r = e[s][t.axis], J(r) && i.push(r);
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
    this.update(t || "default"), e._clip = qc(R(this.options.clip, Kc(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (i.dataset && i.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = s[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
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
      o = r.$context || (r.$context = eh(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = th(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const s = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && it(i);
    if (a)
      return eo(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], u = c.getOptionScopes(this.getDataset(), h), f = Object.keys(Z.elements[t]), g = () => this.getContext(i, s, e), p = c.resolveNamedOptions(u, f, g, d);
    return p.$shared && (p.$shared = l, o[r] = Object.freeze(eo(p, l))), p;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), u = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(u, this.getContext(t, i, e));
    }
    const c = new Ji(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (!!t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || mi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(i), r = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, i, s) {
    mi(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !mi(e) && this._resolveAnimations(void 0, e).update(t, i);
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
      i._stacked && Ee(i, s);
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
O(Mt, "defaults", {}), O(Mt, "datasetElementType", null), O(Mt, "dataElementType", null);
function ih(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++)
      i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = wr(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function sh(n) {
  const t = n.iScale, e = ih(t, n.type);
  let i = t._length, s, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (it(a) && (i = Math.min(i, Math.abs(r - a) || i)), a = r);
  };
  for (s = 0, o = e.length; s < o; ++s)
    r = t.getPixelForValue(e[s]), l();
  for (a = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    r = t.getPixelForTick(s), l();
  return i;
}
function oh(n, t, e, i) {
  const s = e.barThickness;
  let o, r;
  return W(s) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = s * i, r = 1), {
    chunk: o / i,
    ratio: r,
    start: t.pixels[n] - o / 2
  };
}
function rh(n, t, e, i) {
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
function ah(n, t, e, i) {
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
function Yr(n, t, e, i) {
  return $(n) ? ah(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function no(n, t, e, i) {
  const s = n.iScale, o = n.vScale, r = s.getLabels(), a = s === o, l = [];
  let c, h, d, u;
  for (c = e, h = e + i; c < h; ++c)
    u = t[c], d = {}, d[s.axis] = a || s.parse(r[c], c), l.push(Yr(u, d, o, c));
  return l;
}
function bi(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function lh(n, t, e) {
  return n !== 0 ? At(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function ch(n) {
  let t, e, i, s, o;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function hh(n, t, e, i) {
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
  const { start: r, end: a, reverse: l, top: c, bottom: h } = ch(n);
  s === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? s = c : (e._bottom || 0) === i ? s = h : (o[io(h, r, a, l)] = !0, s = c)), o[io(s, r, a, l)] = !0, n.borderSkipped = o;
}
function io(n, t, e, i) {
  return i ? (n = dh(n, t, e), n = so(n, e, t)) : n = so(n, t, e), n;
}
function dh(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function so(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function uh(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Ke extends Mt {
  parsePrimitiveData(t, e, i, s) {
    return no(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return no(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, d = [];
    let u, f, g, p;
    for (u = i, f = i + s; u < f; ++u)
      p = e[u], g = {}, g[o.axis] = o.parse(Kt(p, c), u), d.push(Yr(Kt(p, h), g, r, u));
    return d;
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
    const e = this._cachedMeta, { iScale: i, vScale: s } = e, o = this.getParsed(t), r = o._custom, a = bi(r) ? "[" + r.start + ", " + r.end + "]" : "" + s.getLabelForValue(o[s.axis]);
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
    const o = s === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: u } = this._getSharedOptions(e, s);
    for (let f = e; f < e + i; f++) {
      const g = this.getParsed(f), p = o || W(g[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), b = this._calculateBarIndexPixels(f, h), x = (g._stacks || {})[a.axis], y = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !x || bi(g._custom) || r === x._top || r === x._bottom,
        x: c ? p.head : b.center,
        y: c ? b.center : p.head,
        height: c ? b.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : b.size
      };
      u && (y.options = d || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const w = y.options || t[f].options;
      hh(y, w, x, r), uh(y, w, h.ratio), this.updateElement(t[f], f, y, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((l) => l.controller.options.grouped), o = i.options.stacked, r = [], a = (l) => {
      const c = l.controller.getParsed(e), h = c && c[l.vScale.axis];
      if (W(h) || isNaN(h))
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
      min: a || sh(e),
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
    const { _cachedMeta: { vScale: e, _stacked: i, index: s }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, h = bi(c);
    let d = l[e.axis], u = 0, f = i ? this.applyStack(e, l, i) : d, g, p;
    f !== d && (u = f - d, f = d), h && (d = c.barStart, f = c.barEnd - c.barStart, d !== 0 && At(d) !== At(c.barEnd) && (u = 0), u += d);
    const b = !W(o) && !h ? o : u;
    let x = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(u + f) : g = x, p = g - x, Math.abs(p) < r) {
      p = lh(p, e, a) * r, d === a && (x -= p / 2);
      const y = e.getPixelForDecimal(0), w = e.getPixelForDecimal(1), v = Math.min(y, w), _ = Math.max(y, w);
      x = Math.max(Math.min(x, _), v), g = x + p, i && !h && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(g) - e.getValueForPixel(x));
    }
    if (x === e.getPixelForValue(a)) {
      const y = At(p) * e.getLineWidthForValue(a) / 2;
      x += y, p -= y;
    }
    return {
      size: p,
      base: x,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale, s = this.options, o = s.skipNull, r = R(s.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount, h = s.barThickness === "flex" ? rh(t, e, s, c) : oh(t, e, s, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = h.start + h.chunk * d + h.chunk / 2, l = Math.min(r, h.chunk * h.ratio);
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
O(Ke, "id", "bar"), O(Ke, "defaults", {
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
}), O(Ke, "overrides", {
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
class qe extends Mt {
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
      o[r]._custom = R(a[2], this.resolveDataElementOptions(r + i).radius);
    }
    return o;
  }
  parseObjectData(t, e, i, s) {
    const o = super.parseObjectData(t, e, i, s);
    for (let r = 0; r < o.length; r++) {
      const a = e[i + r];
      o[r]._custom = R(a && a.r && +a.r, this.resolveDataElementOptions(r + i).radius);
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
    const o = s === "reset", { iScale: r, vScale: a } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s), h = r.axis, d = a.axis;
    for (let u = e; u < e + i; u++) {
      const f = t[u], g = !o && this.getParsed(u), p = {}, b = p[h] = o ? r.getPixelForDecimal(0.5) : r.getPixelForValue(g[h]), x = p[d] = o ? a.getBasePixel() : a.getPixelForValue(g[d]);
      p.skip = isNaN(b) || isNaN(x), c && (p.options = l || this.resolveDataElementOptions(u, f.active ? "active" : s), o && (p.options.radius = 0)), this.updateElement(f, u, p, s);
    }
  }
  resolveDataElementOptions(t, e) {
    const i = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, e);
    s.$shared && (s = Object.assign({}, s, {
      $shared: !1
    }));
    const o = s.radius;
    return e !== "active" && (s.radius = 0), s.radius += R(i && i._custom, o), s;
  }
}
O(qe, "id", "bubble"), O(qe, "defaults", {
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
}), O(qe, "overrides", {
  scales: {
    x: {
      type: "linear"
    },
    y: {
      type: "linear"
    }
  }
});
function fh(n, t, e) {
  let i = 1, s = 1, o = 0, r = 0;
  if (t < q) {
    const a = n, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), u = Math.sin(l), f = (w, v, _) => on(w, a, l, !0) ? 1 : Math.max(v, v * e, _, _ * e), g = (w, v, _) => on(w, a, l, !0) ? -1 : Math.min(v, v * e, _, _ * e), p = f(0, c, d), b = f(tt, h, u), x = g(N, c, d), y = g(N + tt, h, u);
    i = (p - x) / 2, s = (b - y) / 2, o = -(p + x) / 2, r = -(b + y) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class Ht extends Mt {
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
      if (I(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +Kt(i[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return ot(this.options.rotation - 90);
  }
  _getCircumference() {
    return ot(this.options.circumference);
  }
  _getRotationExtents() {
    let t = q, e = -q;
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
    const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(i.width, i.height) - r) / 2, 0), l = Math.min(Dl(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: u, ratioY: f, offsetX: g, offsetY: p } = fh(d, h, l), b = (i.width - r) / u, x = (i.height - r) / f, y = Math.max(Math.min(b, x) / 2, 0), w = mr(this.options.radius, y), v = Math.max(w * l, 0), _ = (w - v) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * w, this.offsetY = p * w, s.total = this.calculateTotal(), this.outerRadius = w - _ * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - _ * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / q);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, u = o && c.animateScale, f = u ? 0 : this.innerRadius, g = u ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: b } = this._getSharedOptions(e, s);
    let x = this._getRotation(), y;
    for (y = 0; y < e; ++y)
      x += this._circumference(y, o);
    for (y = e; y < e + i; ++y) {
      const w = this._circumference(y, o), v = t[y], _ = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: x,
        endAngle: x + w,
        circumference: w,
        outerRadius: g,
        innerRadius: f
      };
      b && (_.options = p || this.resolveDataElementOptions(y, v.active ? "active" : s)), x += w, this.updateElement(v, y, _, s);
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
    return e > 0 && !isNaN(t) ? q * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = dn(e._parsed[t], i.options.locale);
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
    return Math.max(R(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
O(Ht, "id", "doughnut"), O(Ht, "defaults", {
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
}), O(Ht, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing"
}), O(Ht, "overrides", {
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
class Ge extends Mt {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = kr(e, s, r);
    this._drawStart = a, this._drawCount = l, Cr(e) && (a = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(s, a, l, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, s), u = r.axis, f = a.axis, { spanGaps: g, segment: p } = this.options, b = _e(g) ? g : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || s === "none", y = e + i, w = t.length;
    let v = e > 0 && this.getParsed(e - 1);
    for (let _ = 0; _ < w; ++_) {
      const M = t[_], C = x ? M : {};
      if (_ < e || _ >= y) {
        C.skip = !0;
        continue;
      }
      const k = this.getParsed(_), P = W(k[f]), E = C[u] = r.getPixelForValue(k[u], _), A = C[f] = o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, k, l) : k[f], _);
      C.skip = isNaN(E) || isNaN(A) || P, C.stop = _ > 0 && Math.abs(k[u] - v[u]) > b, p && (C.parsed = k, C.raw = c.data[_]), d && (C.options = h || this.resolveDataElementOptions(_, M.active ? "active" : s)), x || this.updateElement(M, _, C, s), v = k;
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
O(Ge, "id", "line"), O(Ge, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), O(Ge, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class ye extends Mt {
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = dn(e._parsed[t].r, i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, i, s) {
    return Ir.bind(this)(t, e, i, s);
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
    const o = s === "reset", r = this.chart, l = r.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, d = c.yCenter, u = c.getIndexAngle(0) - 0.5 * N;
    let f = u, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, s, p);
    for (g = e; g < e + i; g++) {
      const b = t[g];
      let x = f, y = f + this._computeAngle(g, s, p), w = r.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = y, o && (l.animateScale && (w = 0), l.animateRotate && (x = y = u));
      const v = {
        x: h,
        y: d,
        innerRadius: 0,
        outerRadius: w,
        startAngle: x,
        endAngle: y,
        options: this.resolveDataElementOptions(g, b.active ? "active" : s)
      };
      this.updateElement(b, g, v, s);
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
    return this.chart.getDataVisibility(t) ? ot(this.resolveDataElementOptions(t, e).angle || i) : 0;
  }
}
O(ye, "id", "polarArea"), O(ye, "defaults", {
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
}), O(ye, "overrides", {
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
class Un extends Ht {
}
O(Un, "id", "pie"), O(Un, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
class Je extends Mt {
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(i[e.axis])
    };
  }
  parseObjectData(t, e, i, s) {
    return Ir.bind(this)(t, e, i, s);
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
      const l = t[a], c = this.resolveDataElementOptions(a, l.active ? "active" : s), h = o.getPointPositionForValue(a, this.getParsed(a).r), d = r ? o.xCenter : h.x, u = r ? o.yCenter : h.y, f = {
        x: d,
        y: u,
        angle: h.angle,
        skip: isNaN(d) || isNaN(u),
        options: c
      };
      this.updateElement(l, a, f, s);
    }
  }
}
O(Je, "id", "radar"), O(Je, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: {
    line: {
      fill: "start"
    }
  }
}), O(Je, "overrides", {
  aspectRatio: 1,
  scales: {
    r: {
      type: "radialLinear"
    }
  }
});
class Ze extends Mt {
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = e, r = this.getParsed(t), a = s.getLabelForValue(r.x), l = o.getLabelForValue(r.y);
    return {
      label: i[t] || "",
      value: "(" + a + ", " + l + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, { data: i = [] } = e, s = this.chart._animationsDisabled;
    let { start: o, count: r } = kr(e, i, s);
    if (this._drawStart = o, this._drawCount = r, Cr(e) && (o = 0, r = i.length), this.options.showLine) {
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
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, h = this.resolveDataElementOptions(e, s), d = this.getSharedOptions(h), u = this.includeOptions(s, d), f = r.axis, g = a.axis, { spanGaps: p, segment: b } = this.options, x = _e(p) ? p : Number.POSITIVE_INFINITY, y = this.chart._animationsDisabled || o || s === "none";
    let w = e > 0 && this.getParsed(e - 1);
    for (let v = e; v < e + i; ++v) {
      const _ = t[v], M = this.getParsed(v), C = y ? _ : {}, k = W(M[g]), P = C[f] = r.getPixelForValue(M[f], v), E = C[g] = o || k ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, M, l) : M[g], v);
      C.skip = isNaN(P) || isNaN(E) || k, C.stop = v > 0 && Math.abs(M[f] - w[f]) > x, b && (C.parsed = M, C.raw = c.data[v]), u && (C.options = d || this.resolveDataElementOptions(v, _.active ? "active" : s)), y || this.updateElement(_, v, C, s), w = M;
    }
    this.updateSharedOptions(d, s, h);
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
O(Ze, "id", "scatter"), O(Ze, "defaults", {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1
}), O(Ze, "overrides", {
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
  BarController: Ke,
  BubbleController: qe,
  DoughnutController: Ht,
  LineController: Ge,
  PolarAreaController: ye,
  PieController: Un,
  RadarController: Je,
  ScatterController: Ze
});
function ne() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Zi {
  static override(t) {
    Object.assign(Zi.prototype, t);
  }
  constructor(t) {
    this.options = t || {};
  }
  init() {
  }
  formats() {
    return ne();
  }
  parse() {
    return ne();
  }
  format() {
    return ne();
  }
  add() {
    return ne();
  }
  diff() {
    return ne();
  }
  startOf() {
    return ne();
  }
  endOf() {
    return ne();
  }
}
var gh = {
  _date: Zi
};
function ph(n, t, e, i) {
  const { controller: s, data: o, _sorted: r } = n, a = s._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Wl : zt;
    if (i) {
      if (s._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, e - h), u = l(o, t, e + h);
          return {
            lo: d.lo,
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
function gn(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: u } = ph(o[a], t, r, s);
    for (let f = d; f <= u; ++f) {
      const g = h[f];
      g.skip || i(g, c, f);
    }
  }
}
function mh(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, r = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function xi(n, t, e, i, s) {
  const o = [];
  return !s && !n.isPointInArea(t) || gn(n, e, t, function(a, l, c) {
    !s && !rn(a, n.chartArea, 0) || a.inRange(t.x, t.y, i) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function bh(n, t, e, i) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: d } = _r(r, {
      x: t.x,
      y: t.y
    });
    on(d, c, h) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return gn(n, e, t, o), s;
}
function xh(n, t, e, i, s, o) {
  let r = [];
  const a = mh(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, u) {
    const f = h.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const g = h.getCenterPoint(s);
    if (!(!!o || n.isPointInArea(g)) && !f)
      return;
    const b = a(t, g);
    b < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: u
      }
    ], l = b) : b === l && r.push({
      element: h,
      datasetIndex: d,
      index: u
    });
  }
  return gn(n, e, t, c), r;
}
function yi(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === "r" && !i ? bh(n, t, e, s) : xh(n, t, e, i, s, o);
}
function oo(n, t, e, i, s) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return gn(n, e, t, (l, c, h) => {
    l[r](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, s));
  }), i && !a ? [] : o;
}
var yh = {
  evaluateInteractionItems: gn,
  modes: {
    index(n, t, e, i) {
      const s = oe(t, n), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? xi(n, s, o, i, r) : yi(n, s, o, !1, i, r), l = [];
      return a.length ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(n, t, e, i) {
      const s = oe(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? xi(n, s, o, i, r) : yi(n, s, o, !1, i, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = n.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(n, t, e, i) {
      const s = oe(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return xi(n, s, o, i, r);
    },
    nearest(n, t, e, i) {
      const s = oe(t, n), o = e.axis || "xy", r = e.includeInvisible || !1;
      return yi(n, s, o, e.intersect, i, r);
    },
    x(n, t, e, i) {
      const s = oe(t, n);
      return oo(n, s, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const s = oe(t, n);
      return oo(n, s, "y", e.intersect, i);
    }
  }
};
const $r = [
  "left",
  "top",
  "right",
  "bottom"
];
function Re(n, t) {
  return n.filter((e) => e.pos === t);
}
function ro(n, t) {
  return n.filter((e) => $r.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Te(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e, o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function _h(n) {
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
function vh(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !$r.includes(s))
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
function wh(n, t) {
  const e = vh(n), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = n.length; o < r; ++o) {
    a = n[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * i : l && t.availableWidth, a.height = s) : (a.width = i, a.height = h ? h * s : l && t.availableHeight);
  }
  return e;
}
function Sh(n) {
  const t = _h(n), e = Te(t.filter((c) => c.box.fullSize), !0), i = Te(Re(t, "left"), !0), s = Te(Re(t, "right")), o = Te(Re(t, "top"), !0), r = Te(Re(t, "bottom")), a = ro(t, "x"), l = ro(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: Re(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function ao(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function Xr(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function Mh(n, t, e, i) {
  const { pos: s, box: o } = e, r = n.maxPadding;
  if (!I(s)) {
    e.size && (n[s] -= e.size);
    const d = i[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, n[s] += e.size;
  }
  o.getPadding && Xr(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - ao(r, n, "left", "right")), l = Math.max(0, t.outerHeight - ao(r, n, "top", "bottom")), c = a !== n.w, h = l !== n.h;
  return n.w = a, n.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function kh(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return n[i] += s, s;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function Ch(n, t) {
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
function je(n, t, e, i) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = n.length, c = 0; o < r; ++o) {
    a = n[o], l = a.box, l.update(a.width || t.w, a.height || t.h, Ch(a.horizontal, t));
    const { same: d, other: u } = Mh(t, e, a, i);
    c |= d && s.length, h = h || u, l.fullSize || s.push(a);
  }
  return c && je(s, t, e, i) || h;
}
function Dn(n, t, e, i, s) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + s, n.width = i, n.height = s;
}
function lo(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of n) {
    const l = a.box, c = i[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, u = c.size || l.height;
      it(c.start) && (r = c.start), l.fullSize ? Dn(l, s.left, r, e.outerWidth - s.right - s.left, u) : Dn(l, t.left + c.placed, r, d, u), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, u = c.size || l.width;
      it(c.start) && (o = c.start), l.fullSize ? Dn(l, o, s.top, u, e.outerHeight - s.bottom - s.top) : Dn(l, o, t.top + c.placed, u, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var dt = {
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
    const s = rt(n.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(e - s.height, 0), a = Sh(n.boxes), l = a.vertical, c = a.horizontal;
    Y(n.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, b) => b.box.options && b.box.options.display === !1 ? p : p + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), u = Object.assign({}, s);
    Xr(u, rt(i));
    const f = Object.assign({
      maxPadding: u,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), g = wh(l.concat(c), d);
    je(a.fullSize, f, d, g), je(l, f, d, g), je(c, f, d, g) && je(l, f, d, g), kh(f), lo(a.leftAndTop, f, d, g), f.x += f.w, f.y += f.h, lo(a.rightAndBottom, f, d, g), n.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, Y(a.chartArea, (p) => {
      const b = p.box;
      Object.assign(b, n.chartArea), b.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Ur {
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
class Ph extends Ur {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const Fn = "$chartjs", Dh = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, co = (n) => n === null || n === "";
function Oh(n, t) {
  const e = n.style, i = n.getAttribute("height"), s = n.getAttribute("width");
  if (n[Fn] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", co(s)) {
    const o = $s(n, "width");
    o !== void 0 && (n.width = o);
  }
  if (co(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const o = $s(n, "height");
      o !== void 0 && (n.height = o);
    }
  return n;
}
const Kr = Rc ? {
  passive: !0
} : !1;
function Ah(n, t, e) {
  n.addEventListener(t, e, Kr);
}
function Eh(n, t, e) {
  n.canvas.removeEventListener(t, e, Kr);
}
function Rh(n, t) {
  const e = Dh[n.type] || n.type, { x: i, y: s } = oe(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function Kn(n, t) {
  for (const e of n)
    if (e === t || e.contains(t))
      return !0;
}
function Th(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Kn(a.addedNodes, i), r = r && !Kn(a.removedNodes, i);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function Lh(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Kn(a.removedNodes, i), r = r && !Kn(a.addedNodes, i);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const an = /* @__PURE__ */ new Map();
let ho = 0;
function qr() {
  const n = window.devicePixelRatio;
  n !== ho && (ho = n, an.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function Ih(n, t) {
  an.size || window.addEventListener("resize", qr), an.set(n, t);
}
function Fh(n) {
  an.delete(n), an.size || window.removeEventListener("resize", qr);
}
function zh(n, t, e) {
  const i = n.canvas, s = i && Gi(i);
  if (!s)
    return;
  const o = Mr((a, l) => {
    const c = s.clientWidth;
    e(a, l), c < s.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(s), Ih(n, o), r;
}
function _i(n, t, e) {
  e && e.disconnect(), t === "resize" && Fh(n);
}
function Bh(n, t, e) {
  const i = n.canvas, s = Mr((o) => {
    n.ctx !== null && e(Rh(o, n));
  }, n);
  return Ah(i, t, s), s;
}
class Wh extends Ur {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (Oh(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[Fn])
      return !1;
    const i = e[Fn].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = i[o];
      W(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[Fn], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: Th,
      detach: Lh,
      resize: zh
    }[e] || Bh;
    s[e] = r(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), s = i[e];
    if (!s)
      return;
    ({
      attach: _i,
      detach: _i,
      resize: _i
    }[e] || Eh)(t, e, s), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return Ec(t, e, i, s);
  }
  isAttached(t) {
    const e = Gi(t);
    return !!(e && e.isConnected);
  }
}
function jh(n) {
  return !zr() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? Ph : Wh;
}
class ct {
  constructor() {
    O(this, "active", !1);
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
    return _e(this.x) && _e(this.y);
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
O(ct, "defaults", {}), O(ct, "defaultRoutes");
function Vh(n, t) {
  const e = n.options.ticks, i = Nh(n), s = Math.min(e.maxTicksLimit || i, i), o = e.major.enabled ? Yh(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return $h(t, c, o, r / s), c;
  const h = Hh(o, t, s);
  if (r > 0) {
    let d, u;
    const f = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (On(t, c, h, W(f) ? 0 : a - f, a), d = 0, u = r - 1; d < u; d++)
      On(t, c, h, o[d], o[d + 1]);
    return On(t, c, h, l, W(f) ? t.length : l + f), c;
  }
  return On(t, c, h), c;
}
function Nh(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function Hh(n, t, e) {
  const i = Xh(n), s = t.length / e;
  if (!i)
    return Math.max(s, 1);
  const o = Il(i);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function Yh(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function $h(n, t, e, i) {
  let s = 0, o = e[0], r;
  for (i = Math.ceil(i), r = 0; r < n.length; r++)
    r === o && (t.push(n[r]), s++, o = e[s * i]);
}
function On(n, t, e, i, s) {
  const o = R(i, 0), r = Math.min(R(s, n.length), n.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), s && (l = s - i, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(n[c]), a++, h = Math.round(o + a * e));
}
function Xh(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const Uh = (n) => n === "left" ? "right" : n === "right" ? "left" : n, uo = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e;
function fo(n, t) {
  const e = [], i = n.length / t, s = n.length;
  let o = 0;
  for (; o < s; o += i)
    e.push(n[Math.floor(o)]);
  return e;
}
function Kh(n, t, e) {
  const i = n.ticks.length, s = Math.min(t, i - 1), o = n._startPixel, r = n._endPixel, a = 1e-6;
  let l = n.getPixelForTick(s), c;
  if (!(e && (i === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (n.getPixelForTick(1) - l) / 2 : c = (l - n.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function qh(n, t) {
  Y(n, (e) => {
    const i = e.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[i[o]];
      i.splice(0, s);
    }
  });
}
function Le(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function go(n, t) {
  if (!n.display)
    return 0;
  const e = et(n.font, t), i = rt(n.padding);
  return ($(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function Gh(n, t) {
  return Jt(n, {
    scale: t,
    type: "scale"
  });
}
function Jh(n, t, e) {
  return Jt(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Zh(n, t, e) {
  let i = $i(n);
  return (e && t !== "right" || !e && t === "right") && (i = Uh(i)), i;
}
function Qh(n, t, e, i) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = n, { chartArea: c, scales: h } = l;
  let d = 0, u, f, g;
  const p = r - s, b = a - o;
  if (n.isHorizontal()) {
    if (f = ht(i, o, a), I(e)) {
      const x = Object.keys(e)[0], y = e[x];
      g = h[x].getPixelForValue(y) + p - t;
    } else
      e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = uo(n, e, t);
    u = a - o;
  } else {
    if (I(e)) {
      const x = Object.keys(e)[0], y = e[x];
      f = h[x].getPixelForValue(y) - b + t;
    } else
      e === "center" ? f = (c.left + c.right) / 2 - b + t : f = uo(n, e, t);
    g = ht(i, r, s), d = e === "left" ? -tt : tt;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: u,
    rotation: d
  };
}
class de extends ct {
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
    return t = pt(t, Number.POSITIVE_INFINITY), e = pt(e, Number.NEGATIVE_INFINITY), i = pt(i, Number.POSITIVE_INFINITY), s = pt(s, Number.NEGATIVE_INFINITY), {
      min: pt(t, i),
      max: pt(e, s),
      minDefined: J(t),
      maxDefined: J(e)
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
      min: pt(e, pt(i, e)),
      max: pt(i, pt(e, i))
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
    K(this.options.beforeUpdate, [
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
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = cc(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? fo(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Vh(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, i;
    this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    K(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    K(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    K(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), K(this.options[t], [
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
    K(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = K(e.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    K(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    K(this.options.beforeCalculateLabelRotation, [
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
    const h = this._getLabelSizes(), d = h.widest.width, u = h.highest.height, f = at(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / i : f / (i - 1), d + 6 > a && (a = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - Le(t.grid) - e.padding - go(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), r = ti(Math.min(Math.asin(at((h.highest.height + 6) / a, -1, 1)), Math.asin(at(l / c, -1, 1)) - Math.asin(at(u / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    K(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    K(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: i, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = go(s, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = Le(o) + l) : (t.height = this.maxHeight, t.width = Le(o) + l), i.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: u } = this._getLabelSizes(), f = i.padding * 2, g = ot(this.labelRotation), p = Math.cos(g), b = Math.sin(g);
        if (a) {
          const x = i.mirror ? 0 : b * d.width + p * u.height;
          t.height = Math.min(this.maxHeight, t.height + x + f);
        } else {
          const x = i.mirror ? 0 : p * d.width + b * u.height;
          t.width = Math.min(this.maxWidth, t.width + x + f);
        }
        this._calculatePadding(c, h, b, p);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let u = 0, f = 0;
      l ? c ? (u = s * t.width, f = i * e.height) : (u = i * t.height, f = s * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((u - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    K(this.options.afterFit, [
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
      W(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = fo(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length);
    }
    return t;
  }
  _computeLabelSizes(t, e) {
    const { ctx: i, _longestTextCache: s } = this, o = [], r = [];
    let a = 0, l = 0, c, h, d, u, f, g, p, b, x, y, w;
    for (c = 0; c < e; ++c) {
      if (u = t[c].label, f = this._resolveTickFontOptions(c), i.font = g = f.string, p = s[g] = s[g] || {
        data: {},
        gc: []
      }, b = f.lineHeight, x = y = 0, !W(u) && !$(u))
        x = Yn(i, p.data, p.gc, x, u), y = b;
      else if ($(u))
        for (h = 0, d = u.length; h < d; ++h)
          w = u[h], !W(w) && !$(w) && (x = Yn(i, p.data, p.gc, x, w), y += b);
      o.push(x), r.push(y), a = Math.max(x, a), l = Math.max(y, l);
    }
    qh(s, e);
    const v = o.indexOf(a), _ = r.indexOf(l), M = (C) => ({
      width: o[C] || 0,
      height: r[C] || 0
    });
    return {
      first: M(0),
      last: M(e - 1),
      widest: M(v),
      highest: M(_),
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
    return Bl(this._alignToPixels ? ee(this.chart, e, 0) : e);
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
      return i.$context || (i.$context = Jh(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Gh(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = ot(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * i > a * s ? a / i : l / s : l * s < a * i ? l / i : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), u = Le(o), f = [], g = a.setContext(this.getContext()), p = g.display ? g.width : 0, b = p / 2, x = function(H) {
      return ee(i, H, p);
    };
    let y, w, v, _, M, C, k, P, E, A, L, j;
    if (r === "top")
      y = x(this.bottom), C = this.bottom - u, P = y - b, A = x(t.top) + b, j = t.bottom;
    else if (r === "bottom")
      y = x(this.top), A = t.top, j = x(t.bottom) - b, C = y + b, P = this.top + u;
    else if (r === "left")
      y = x(this.right), M = this.right - u, k = y - b, E = x(t.left) + b, L = t.right;
    else if (r === "right")
      y = x(this.left), E = t.left, L = x(t.right) - b, M = y + b, k = this.left + u;
    else if (e === "x") {
      if (r === "center")
        y = x((t.top + t.bottom) / 2 + 0.5);
      else if (I(r)) {
        const H = Object.keys(r)[0], X = r[H];
        y = x(this.chart.scales[H].getPixelForValue(X));
      }
      A = t.top, j = t.bottom, C = y + b, P = C + u;
    } else if (e === "y") {
      if (r === "center")
        y = x((t.left + t.right) / 2);
      else if (I(r)) {
        const H = Object.keys(r)[0], X = r[H];
        y = x(this.chart.scales[H].getPixelForValue(X));
      }
      M = y - b, k = M - u, E = t.left, L = t.right;
    }
    const G = R(s.ticks.maxTicksLimit, d), F = Math.max(1, Math.ceil(d / G));
    for (w = 0; w < d; w += F) {
      const H = this.getContext(w), X = o.setContext(H), lt = a.setContext(H), Q = X.lineWidth, xt = X.color, kt = lt.dash || [], yt = lt.dashOffset, St = X.tickWidth, Ct = X.tickColor, Pt = X.tickBorderDash || [], _t = X.tickBorderDashOffset;
      v = Kh(this, w, l), v !== void 0 && (_ = ee(i, v, Q), c ? M = k = E = L = _ : C = P = A = j = _, f.push({
        tx1: M,
        ty1: C,
        tx2: k,
        ty2: P,
        x1: E,
        y1: A,
        x2: L,
        y2: j,
        width: Q,
        color: xt,
        borderDash: kt,
        borderDashOffset: yt,
        tickWidth: St,
        tickColor: Ct,
        tickBorderDash: Pt,
        tickBorderDashOffset: _t
      }));
    }
    return this._ticksLength = d, this._borderValue = y, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: s, ticks: o } = i, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, u = Le(i.grid), f = u + h, g = d ? -h : f, p = -ot(this.labelRotation), b = [];
    let x, y, w, v, _, M, C, k, P, E, A, L, j = "middle";
    if (s === "top")
      M = this.bottom - g, C = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      M = this.top + g, C = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const F = this._getYAxisLabelAlignment(u);
      C = F.textAlign, _ = F.x;
    } else if (s === "right") {
      const F = this._getYAxisLabelAlignment(u);
      C = F.textAlign, _ = F.x;
    } else if (e === "x") {
      if (s === "center")
        M = (t.top + t.bottom) / 2 + f;
      else if (I(s)) {
        const F = Object.keys(s)[0], H = s[F];
        M = this.chart.scales[F].getPixelForValue(H) + f;
      }
      C = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        _ = (t.left + t.right) / 2 - f;
      else if (I(s)) {
        const F = Object.keys(s)[0], H = s[F];
        _ = this.chart.scales[F].getPixelForValue(H);
      }
      C = this._getYAxisLabelAlignment(u).textAlign;
    }
    e === "y" && (l === "start" ? j = "top" : l === "end" && (j = "bottom"));
    const G = this._getLabelSizes();
    for (x = 0, y = a.length; x < y; ++x) {
      w = a[x], v = w.label;
      const F = o.setContext(this.getContext(x));
      k = this.getPixelForTick(x) + o.labelOffset, P = this._resolveTickFontOptions(x), E = P.lineHeight, A = $(v) ? v.length : 1;
      const H = A / 2, X = F.color, lt = F.textStrokeColor, Q = F.textStrokeWidth;
      let xt = C;
      r ? (_ = k, C === "inner" && (x === y - 1 ? xt = this.options.reverse ? "left" : "right" : x === 0 ? xt = this.options.reverse ? "right" : "left" : xt = "center"), s === "top" ? c === "near" || p !== 0 ? L = -A * E + E / 2 : c === "center" ? L = -G.highest.height / 2 - H * E + E : L = -G.highest.height + E / 2 : c === "near" || p !== 0 ? L = E / 2 : c === "center" ? L = G.highest.height / 2 - H * E : L = G.highest.height - A * E, d && (L *= -1), p !== 0 && !F.showLabelBackdrop && (_ += E / 2 * Math.sin(p))) : (M = k, L = (1 - A) * E / 2);
      let kt;
      if (F.showLabelBackdrop) {
        const yt = rt(F.backdropPadding), St = G.heights[x], Ct = G.widths[x];
        let Pt = L - yt.top, _t = 0 - yt.left;
        switch (j) {
          case "middle":
            Pt -= St / 2;
            break;
          case "bottom":
            Pt -= St;
            break;
        }
        switch (C) {
          case "center":
            _t -= Ct / 2;
            break;
          case "right":
            _t -= Ct;
            break;
        }
        kt = {
          left: _t,
          top: Pt,
          width: Ct + yt.width,
          height: St + yt.height,
          color: F.backdropColor
        };
      }
      b.push({
        label: v,
        font: P,
        textOffset: L,
        options: {
          rotation: p,
          color: X,
          strokeColor: lt,
          strokeWidth: Q,
          textAlign: xt,
          textBaseline: j,
          translation: [
            _,
            M
          ],
          backdrop: kt
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-ot(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? s ? (h = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, i === "near" ? c = "right" : i === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? s ? (h = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, i === "near" ? c = "left" : i === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
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
    const a = (l, c, h) => {
      !h.width || !h.color || (i.save(), i.lineWidth = h.width, i.strokeStyle = h.color, i.setLineDash(h.borderDash || []), i.lineDashOffset = h.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
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
    let c, h, d, u;
    this.isHorizontal() ? (c = ee(t, this.left, r) - r / 2, h = ee(t, this.right, a) + a / 2, d = u = l) : (d = ee(t, this.top, r) - r / 2, u = ee(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, u), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && un(i, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      he(i, c, 0, h, l, a);
    }
    s && fn(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = et(i.font), r = rt(i.padding), a = i.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || I(e) ? (l += r.bottom, $(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: u } = Qh(this, l, e, a);
    he(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: d,
      rotation: u,
      textAlign: Zh(a, e, s),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    !this._isVisible() || (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, i = R(t.grid && t.grid.z, -1), s = R(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== de.prototype.draw ? [
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
    return et(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class An {
  constructor(t, e, i) {
    this.type = t, this.scope = e, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    nd(e) && (i = this.register(e));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, td(t, r, i), this.override && Z.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, s = this.scope;
    i in e && delete e[i], s && i in Z[s] && (delete Z[s][i], this.override && delete ce[i]);
  }
}
function td(n, t, e) {
  const i = nn(/* @__PURE__ */ Object.create(null), [
    e ? Z.get(e) : {},
    Z.get(t),
    n.defaults
  ]);
  Z.set(t, i), n.defaultRoutes && ed(t, n.defaultRoutes), n.descriptors && Z.describe(t, n.descriptors);
}
function ed(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), s = i.pop(), o = [
      n
    ].concat(i).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    Z.route(o, s, l, a);
  });
}
function nd(n) {
  return "id" in n && "defaults" in n;
}
class id {
  constructor() {
    this.controllers = new An(Mt, "datasets", !0), this.elements = new An(ct, "elements"), this.plugins = new An(Object, "plugins"), this.scales = new An(de, "scales"), this._typedRegistries = [
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
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : Y(s, (r) => {
        const a = i || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, i) {
    const s = Hi(t);
    K(i["before" + s], [], i), e[t](i), K(i["after" + s], [], i);
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
var Ot = new id();
class sd {
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
      if (K(a, l, r) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    W(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, s = R(i.options && i.options.plugins, {}), o = od(i);
    return s === !1 && !e ? [] : ad(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
  }
}
function od(n) {
  const t = {}, e = [], i = Object.keys(Ot.plugins.items);
  for (let o = 0; o < i.length; o++)
    e.push(Ot.getPlugin(i[o]));
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
function rd(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function ad(n, { plugins: t, localIds: e }, i, s) {
  const o = [], r = n.getContext();
  for (const a of t) {
    const l = a.id, c = rd(i[l], s);
    c !== null && o.push({
      plugin: a,
      options: ld(n.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function ld(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t), r = n.getOptionScopes(i, o);
  return e && t.defaults && r.push(t.defaults), n.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function Oi(n, t) {
  const e = Z.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function cd(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function hd(n, t) {
  return n === t ? "_index_" : "_value_";
}
function dd(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function qn(n, t) {
  if (n === "x" || n === "y" || n === "r" || (n = t.axis || dd(t.position) || n.length > 1 && qn(n[0].toLowerCase(), t), n))
    return n;
  throw new Error(`Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`);
}
function ud(n, t) {
  const e = ce[n.type] || {
    scales: {}
  }, i = t.scales || {}, s = Oi(n.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((r) => {
    const a = i[r];
    if (!I(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = qn(r, a), c = hd(l, s), h = e.scales || {};
    o[r] = Ye(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), n.data.datasets.forEach((r) => {
    const a = r.type || n.type, l = r.indexAxis || Oi(a, t), h = (ce[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const u = cd(d, l), f = r[u + "AxisID"] || u;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ye(o[f], [
        {
          axis: u
        },
        i[f],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ye(a, [
      Z.scales[a.type],
      Z.scale
    ]);
  }), o;
}
function Gr(n) {
  const t = n.options || (n.options = {});
  t.plugins = R(t.plugins, {}), t.scales = ud(n, t);
}
function Jr(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function fd(n) {
  return n = n || {}, n.data = Jr(n.data), Gr(n), n;
}
const po = /* @__PURE__ */ new Map(), Zr = /* @__PURE__ */ new Set();
function En(n, t) {
  let e = po.get(n);
  return e || (e = t(), po.set(n, e), Zr.add(e)), e;
}
const Ie = (n, t, e) => {
  const i = Kt(t, e);
  i !== void 0 && n.add(i);
};
class gd {
  constructor(t) {
    this._config = fd(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Jr(t);
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
    this.clearCache(), Gr(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return En(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return En(`${t}.transition.${e}`, () => [
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
    return En(`${t}-${e}`, () => [
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
    return En(`${i}-plugin-${e}`, () => [
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
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => Ie(l, t, d))), h.forEach((d) => Ie(l, s, d)), h.forEach((d) => Ie(l, ce[o] || {}, d)), h.forEach((d) => Ie(l, Z, d)), h.forEach((d) => Ie(l, Di, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Zr.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      ce[e] || {},
      Z.datasets[e] || {},
      {
        type: e
      },
      Z,
      Di
    ];
  }
  resolveNamedOptions(t, e, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = mo(this._resolverCache, t, s);
    let l = r;
    if (md(r, e)) {
      o.$shared = !1, i = qt(i) ? i() : i;
      const c = this.createResolver(t, i, a);
      l = we(r, i, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, i = [
    ""
  ], s) {
    const { resolver: o } = mo(this._resolverCache, t, i);
    return I(e) ? we(o, e, void 0, s) : o;
  }
}
function mo(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return o || (o = {
    resolver: Ui(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const pd = (n) => I(n) && Object.getOwnPropertyNames(n).reduce((t, e) => t || qt(n[e]), !1);
function md(n, t) {
  const { isScriptable: e, isIndexable: i } = Er(n);
  for (const s of t) {
    const o = e(s), r = i(s), a = (r || o) && n[s];
    if (o && (qt(a) || pd(a)) || r && $(a))
      return !0;
  }
  return !1;
}
var bd = "4.2.0";
const xd = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function bo(n, t) {
  return n === "top" || n === "bottom" || xd.indexOf(n) === -1 && t === "x";
}
function xo(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function yo(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), K(e && e.onComplete, [
    n
  ], t);
}
function yd(n) {
  const t = n.chart, e = t.options.animation;
  K(e && e.onProgress, [
    n
  ], t);
}
function Qr(n) {
  return zr() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const zn = {}, _o = (n) => {
  const t = Qr(n);
  return Object.values(zn).filter((e) => e.canvas === t).pop();
};
function _d(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const r = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = r);
    }
  }
}
function vd(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
function wd(n) {
  const { xScale: t, yScale: e } = n;
  if (t && e)
    return {
      left: t.left,
      right: t.right,
      top: e.top,
      bottom: e.bottom
    };
}
class bt {
  static register(...t) {
    Ot.add(...t), vo();
  }
  static unregister(...t) {
    Ot.remove(...t), vo();
  }
  constructor(t, e) {
    const i = this.config = new gd(e), s = Qr(t), o = _o(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || jh(s))(), this.platform.updateConfig(i);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Pl(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new sd(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Nl((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], zn[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Tt.listen(this, "complete", yo), Tt.listen(this, "progress", yd), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: o } = this;
    return W(t) ? e && o ? o : s ? i / s : null : t;
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
    return Ot;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ys(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Vs(this.canvas, this.ctx), this;
  }
  stop() {
    return Tt.stop(this), this;
  }
  resize(t, e) {
    Tt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, e, o), a = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Ys(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), K(i.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    Y(e, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = qn(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), Y(o, (r) => {
      const a = r.options, l = a.id, c = qn(l, a), h = R(a.type, r.dtype);
      (a.position === void 0 || bo(a.position, c) !== bo(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let d = null;
      if (l in i && i[l].type === h)
        d = i[l];
      else {
        const u = Ot.getScale(h);
        d = new u({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), i[d.id] = d;
      }
      d.init(a, t);
    }), Y(s, (r, a) => {
      r || delete i[a];
    }), Y(i, (r) => {
      dt.configure(this, r, r.options), dt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > e) {
      for (let s = e; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(xo("order", "index"));
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
      if (r.type && r.type !== a && (this._destroyDatasetMeta(i), r = this.getDatasetMeta(i)), r.type = a, r.indexAxis = o.indexAxis || Oi(a, this.options), r.order = o.order || 0, r.index = i, r.label = "" + o.label, r.visible = this.isDatasetVisible(i), r.controller)
        r.controller.updateIndex(i), r.controller.linkScales();
      else {
        const l = Ot.getController(a), { datasetElementType: c, dataElementType: h } = Z.datasets[a];
        Object.assign(l, {
          dataElementType: Ot.getElement(h),
          datasetElementType: c && Ot.getElement(c)
        }), r.controller = new l(this, i), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Y(this.data.datasets, (t, e) => {
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
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), u = !s && o.indexOf(d) === -1;
      d.buildOrUpdateElements(u), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = i.layout.autoPadding ? r : 0, this._updateLayout(r), s || Y(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(xo("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    Y(this.scales, (t) => {
      dt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!Rs(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const r = i === "_removeElements" ? -o : o;
      _d(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = i(0);
    for (let o = 1; o < e; o++)
      if (!Rs(s, i(o)))
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
    dt.update(this, this.width, this.height, t);
    const e = this.chartArea, i = e.width <= 0 || e.height <= 0;
    this._layers = [], Y(this.boxes, (s) => {
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
        this._updateDataset(e, qt(t) ? t({
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
    }) !== !1 && (Tt.has(this) ? this.attached && !Tt.running(this) && Tt.start(this) : (this.draw(), yo({
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
    const e = this.ctx, i = t._clip, s = !i.disabled, o = wd(t) || this.chartArea, r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (s && un(e, {
      left: i.left === !1 ? 0 : o.left - i.left,
      right: i.right === !1 ? this.width : o.right + i.right,
      top: i.top === !1 ? 0 : o.top - i.top,
      bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
    }), t.controller.draw(), s && fn(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return rn(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = yh.modes[e];
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
    return this.$context || (this.$context = Jt(null, {
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
    it(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), r.update(o, {
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
    for (this.stop(), Tt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Vs(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete zn[this.id], this.notifyPlugins("afterDestroy");
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
    Y(this.options.events, (o) => i(o, s));
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
    Y(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, Y(this._responsiveListeners, (t, e) => {
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
    !Vn(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = i ? t : o(t, e);
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
    const { _active: s = [], options: o } = this, r = e, a = this._getActiveElements(t, s, i, r), l = Tl(t), c = vd(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, K(o.onHover, [
      t,
      a,
      this
    ], this), l && K(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !Vn(a, s);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = c, h;
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
O(bt, "defaults", Z), O(bt, "instances", zn), O(bt, "overrides", ce), O(bt, "registry", Ot), O(bt, "version", bd), O(bt, "getChart", _o);
function vo() {
  return Y(bt.instances, (n) => n._plugins.invalidate());
}
function Sd(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  n.beginPath(), n.arc(o, r, a, i - c, e + c), l > s ? (c = s / l, n.arc(o, r, l, e + c, i - c, !0)) : n.arc(o, r, s, e + tt, i - tt), n.closePath(), n.clip();
}
function Md(n) {
  return Xi(n, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function kd(n, t, e, i) {
  const s = Md(n.options.borderRadius), o = (e - t) / 2, r = Math.min(o, i * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * i / 2;
    return at(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: at(s.innerStart, 0, r),
    innerEnd: at(s.innerEnd, 0, r)
  };
}
function be(n, t, e, i) {
  return {
    x: e + n * Math.cos(t),
    y: i + n * Math.sin(t)
  };
}
function Gn(n, t, e, i, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + i + e - c, 0), u = h > 0 ? h + i + e + c : 0;
  let f = 0;
  const g = s - l;
  if (i) {
    const F = h > 0 ? h - i : 0, H = d > 0 ? d - i : 0, X = (F + H) / 2, lt = X !== 0 ? g * X / (X + i) : g;
    f = (g - lt) / 2;
  }
  const p = Math.max(1e-3, g * d - e / N) / d, b = (g - p) / 2, x = l + b + f, y = s - b - f, { outerStart: w, outerEnd: v, innerStart: _, innerEnd: M } = kd(t, u, d, y - x), C = d - w, k = d - v, P = x + w / C, E = y - v / k, A = u + _, L = u + M, j = x + _ / A, G = y - M / L;
  if (n.beginPath(), o) {
    const F = (P + E) / 2;
    if (n.arc(r, a, d, P, F), n.arc(r, a, d, F, E), v > 0) {
      const Q = be(k, E, r, a);
      n.arc(Q.x, Q.y, v, E, y + tt);
    }
    const H = be(L, y, r, a);
    if (n.lineTo(H.x, H.y), M > 0) {
      const Q = be(L, G, r, a);
      n.arc(Q.x, Q.y, M, y + tt, G + Math.PI);
    }
    const X = (y - M / u + (x + _ / u)) / 2;
    if (n.arc(r, a, u, y - M / u, X, !0), n.arc(r, a, u, X, x + _ / u, !0), _ > 0) {
      const Q = be(A, j, r, a);
      n.arc(Q.x, Q.y, _, j + Math.PI, x - tt);
    }
    const lt = be(C, x, r, a);
    if (n.lineTo(lt.x, lt.y), w > 0) {
      const Q = be(C, P, r, a);
      n.arc(Q.x, Q.y, w, x - tt, P);
    }
  } else {
    n.moveTo(r, a);
    const F = Math.cos(P) * d + r, H = Math.sin(P) * d + a;
    n.lineTo(F, H);
    const X = Math.cos(E) * d + r, lt = Math.sin(E) * d + a;
    n.lineTo(X, lt);
  }
  n.closePath();
}
function Cd(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Gn(n, t, e, i, l, s);
    for (let c = 0; c < o; ++c)
      n.fill();
    isNaN(a) || (l = r + (a % q || q));
  }
  return Gn(n, t, e, i, l, s), n.fill(), l;
}
function Pd(n, t, e, i, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, d = l.borderAlign === "inner";
  if (!c)
    return;
  d ? (n.lineWidth = c * 2, n.lineJoin = h || "round") : (n.lineWidth = c, n.lineJoin = h || "bevel");
  let u = t.endAngle;
  if (o) {
    Gn(n, t, e, i, u, s);
    for (let f = 0; f < o; ++f)
      n.stroke();
    isNaN(a) || (u = r + (a % q || q));
  }
  d && Sd(n, t, u), o || (Gn(n, t, e, i, u, s), n.stroke());
}
class Bn extends ct {
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: r } = _r(s, {
      x: t,
      y: e
    }), { startAngle: a, endAngle: l, innerRadius: c, outerRadius: h, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), u = this.options.spacing / 2, g = R(d, l - a) >= q || on(o, a, l), p = Ft(r, c + u, h + u);
    return g && p;
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
    ], t), { offset: l, spacing: c } = this.options, h = (s + o) / 2, d = (r + a + c + l) / 2;
    return {
      x: e + Math.cos(h) * d,
      y: i + Math.sin(h) * d
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, r = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > q ? Math.floor(i / q) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const a = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(a) * s, Math.sin(a) * s);
    const l = 1 - Math.sin(Math.min(N, i || 0)), c = s * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, Cd(t, this, c, o, r), Pd(t, this, c, o, r), t.restore();
  }
}
O(Bn, "id", "arc"), O(Bn, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), O(Bn, "defaultRoutes", {
  backgroundColor: "backgroundColor"
});
function ta(n, t, e = t) {
  n.lineCap = R(e.borderCapStyle, t.borderCapStyle), n.setLineDash(R(e.borderDash, t.borderDash)), n.lineDashOffset = R(e.borderDashOffset, t.borderDashOffset), n.lineJoin = R(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = R(e.borderWidth, t.borderWidth), n.strokeStyle = R(e.borderColor, t.borderColor);
}
function Dd(n, t, e) {
  n.lineTo(e.x, e.y);
}
function Od(n) {
  return n.stepped ? tc : n.tension || n.cubicInterpolationMode === "monotone" ? ec : Dd;
}
function ea(n, t, e = {}) {
  const i = n.length, { start: s = 0, end: o = i - 1 } = e, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), h = s < r && o < r || s > a && o > a;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? i + c - l : c - l
  };
}
function Ad(n, t, e, i) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = ea(s, e, i), h = Od(o);
  let { move: d = !0, reverse: u } = i || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = s[(a + (u ? c - f : f)) % r], !g.skip && (d ? (n.moveTo(g.x, g.y), d = !1) : h(n, p, g, u, o.stepped), p = g);
  return l && (g = s[(a + (u ? c : 0)) % r], h(n, p, g, u, o.stepped)), !!l;
}
function Ed(n, t, e, i) {
  const s = t.points, { count: o, start: r, ilen: a } = ea(s, e, i), { move: l = !0, reverse: c } = i || {};
  let h = 0, d = 0, u, f, g, p, b, x;
  const y = (v) => (r + (c ? a - v : v)) % o, w = () => {
    p !== b && (n.lineTo(h, b), n.lineTo(h, p), n.lineTo(h, x));
  };
  for (l && (f = s[y(0)], n.moveTo(f.x, f.y)), u = 0; u <= a; ++u) {
    if (f = s[y(u)], f.skip)
      continue;
    const v = f.x, _ = f.y, M = v | 0;
    M === g ? (_ < p ? p = _ : _ > b && (b = _), h = (d * h + v) / ++d) : (w(), n.lineTo(v, _), g = M, d = 0, p = b = _), x = _;
  }
  w();
}
function Ai(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? Ed : Ad;
}
function Rd(n) {
  return n.stepped ? Tc : n.tension || n.cubicInterpolationMode === "monotone" ? Lc : re;
}
function Td(n, t, e, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, i) && s.closePath()), ta(n, t.options), n.stroke(s);
}
function Ld(n, t, e, i) {
  const { segments: s, options: o } = t, r = Ai(t);
  for (const a of s)
    ta(n, o, a.style), n.beginPath(), r(n, t, a, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const Id = typeof Path2D == "function";
function Fd(n, t, e, i) {
  Id && !t.options.segment ? Td(n, t, e, i) : Ld(n, t, e, i);
}
class Bt extends ct {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      kc(this._points, i, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = jc(this, this.options.segment));
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
    const i = this.options, s = t[e], o = this.points, r = Nr(this, {
      property: e,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = Rd(i);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: d, end: u } = r[c], f = o[d], g = o[u];
      if (f === g) {
        a.push(f);
        continue;
      }
      const p = Math.abs((s - f[e]) / (g[e] - f[e])), b = l(f, g, p, i.stepped);
      b[e] = t[e], a.push(b);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, i) {
    return Ai(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments, o = Ai(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), Fd(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
O(Bt, "id", "line"), O(Bt, "defaults", {
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
}), O(Bt, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), O(Bt, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function wo(n, t, e, i) {
  const s = n.options, { [e]: o } = n.getProps([
    e
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Qe extends ct {
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
    return wo(this, t, "x", e);
  }
  inYRange(t, e) {
    return wo(this, t, "y", e);
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
    this.skip || i.radius < 0.1 || !rn(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, $n(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
O(Qe, "id", "point"), O(Qe, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), O(Qe, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function na(n, t) {
  const { x: e, y: i, base: s, width: o, height: r } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, h, d;
  return n.horizontal ? (d = r / 2, a = Math.min(e, s), l = Math.max(e, s), c = i - d, h = i + d) : (d = o / 2, a = e - d, l = e + d, c = Math.min(i, s), h = Math.max(i, s)), {
    left: a,
    top: c,
    right: l,
    bottom: h
  };
}
function Yt(n, t, e, i) {
  return n ? 0 : at(t, e, i);
}
function zd(n, t, e) {
  const i = n.options.borderWidth, s = n.borderSkipped, o = Ar(i);
  return {
    t: Yt(s.top, o.top, 0, e),
    r: Yt(s.right, o.right, 0, t),
    b: Yt(s.bottom, o.bottom, 0, e),
    l: Yt(s.left, o.left, 0, t)
  };
}
function Bd(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), s = n.options.borderRadius, o = Xt(s), r = Math.min(t, e), a = n.borderSkipped, l = i || I(s);
  return {
    topLeft: Yt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Yt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Yt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Yt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function Wd(n) {
  const t = na(n), e = t.right - t.left, i = t.bottom - t.top, s = zd(n, e / 2, i / 2), o = Bd(n, e / 2, i / 2);
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
function vi(n, t, e, i) {
  const s = t === null, o = e === null, a = n && !(s && o) && na(n, i);
  return a && (s || Ft(t, a.left, a.right)) && (o || Ft(e, a.top, a.bottom));
}
function jd(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Vd(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function wi(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0, s = n.y !== e.y ? -t : 0, o = (n.x + n.w !== e.x + e.w ? t : 0) - i, r = (n.y + n.h !== e.y + e.h ? t : 0) - s;
  return {
    x: n.x + i,
    y: n.y + s,
    w: n.w + o,
    h: n.h + r,
    radius: n.radius
  };
}
class Wn extends ct {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: r } = Wd(this), a = jd(r.radius) ? ve : Vd;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, wi(r, e, o)), t.clip(), a(t, wi(o, -e, r)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), a(t, wi(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return vi(this, t, e, i);
  }
  inXRange(t, e) {
    return vi(this, t, null, e);
  }
  inYRange(t, e) {
    return vi(this, null, t, e);
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
O(Wn, "id", "bar"), O(Wn, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), O(Wn, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
Object.freeze({
  __proto__: null,
  ArcElement: Bn,
  LineElement: Bt,
  PointElement: Qe,
  BarElement: Wn
});
const Ei = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
], So = Ei.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function ia(n) {
  return Ei[n % Ei.length];
}
function sa(n) {
  return So[n % So.length];
}
function Nd(n, t) {
  return n.borderColor = ia(t), n.backgroundColor = sa(t), ++t;
}
function Hd(n, t) {
  return n.backgroundColor = n.data.map(() => ia(t++)), t;
}
function Yd(n, t) {
  return n.backgroundColor = n.data.map(() => sa(t++)), t;
}
function $d(n) {
  let t = 0;
  return (e, i) => {
    const s = n.getDatasetMeta(i).controller;
    s instanceof Ht ? t = Hd(e, t) : s instanceof ye ? t = Yd(e, t) : s && (t = Nd(e, t));
  };
}
function Mo(n) {
  let t;
  for (t in n)
    if (n[t].borderColor || n[t].backgroundColor)
      return !0;
  return !1;
}
function Xd(n) {
  return n && (n.borderColor || n.backgroundColor);
}
var Ud = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(n, t, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: i }, options: s } = n.config, { elements: o } = s;
    if (!e.forceOverride && (Mo(i) || Xd(s) || o && Mo(o)))
      return;
    const r = $d(n);
    i.forEach(r);
  }
};
function Kd(n, t, e, i, s) {
  const o = s.samples || i;
  if (o >= e)
    return n.slice(t, t + e);
  const r = [], a = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t, d, u, f, g, p;
  for (r[l++] = n[h], d = 0; d < o - 2; d++) {
    let b = 0, x = 0, y;
    const w = Math.floor((d + 1) * a) + 1 + t, v = Math.min(Math.floor((d + 2) * a) + 1, e) + t, _ = v - w;
    for (y = w; y < v; y++)
      b += n[y].x, x += n[y].y;
    b /= _, x /= _;
    const M = Math.floor(d * a) + 1 + t, C = Math.min(Math.floor((d + 1) * a) + 1, e) + t, { x: k, y: P } = n[h];
    for (f = g = -1, y = M; y < C; y++)
      g = 0.5 * Math.abs((k - b) * (n[y].y - P) - (k - n[y].x) * (x - P)), g > f && (f = g, u = n[y], p = y);
    r[l++] = u, h = p;
  }
  return r[l++] = n[c], r;
}
function qd(n, t, e, i) {
  let s = 0, o = 0, r, a, l, c, h, d, u, f, g, p;
  const b = [], x = t + e - 1, y = n[t].x, v = n[x].x - y;
  for (r = t; r < t + e; ++r) {
    a = n[r], l = (a.x - y) / v * i, c = a.y;
    const _ = l | 0;
    if (_ === h)
      c < g ? (g = c, d = r) : c > p && (p = c, u = r), s = (o * s + a.x) / ++o;
    else {
      const M = r - 1;
      if (!W(d) && !W(u)) {
        const C = Math.min(d, u), k = Math.max(d, u);
        C !== f && C !== M && b.push({
          ...n[C],
          x: s
        }), k !== f && k !== M && b.push({
          ...n[k],
          x: s
        });
      }
      r > 0 && M !== f && b.push(n[M]), b.push(a), h = _, o = 0, g = p = c, d = u = f = r;
    }
  }
  return b;
}
function oa(n) {
  if (n._decimated) {
    const t = n._data;
    delete n._decimated, delete n._data, Object.defineProperty(n, "data", {
      value: t
    });
  }
}
function ko(n) {
  n.data.datasets.forEach((t) => {
    oa(t);
  });
}
function Gd(n, t) {
  const e = t.length;
  let i = 0, s;
  const { iScale: o } = n, { min: r, max: a, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (i = at(zt(t, o.axis, r).lo, 0, e - 1)), c ? s = at(zt(t, o.axis, a).hi + 1, i, e) - i : s = e - i, {
    start: i,
    count: s
  };
}
var Jd = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      ko(n);
      return;
    }
    const i = n.width;
    n.data.datasets.forEach((s, o) => {
      const { _data: r, indexAxis: a } = s, l = n.getDatasetMeta(o), c = r || s.data;
      if (We([
        a,
        n.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const h = n.scales[l.xAxisID];
      if (h.type !== "linear" && h.type !== "time" || n.options.parsing)
        return;
      let { start: d, count: u } = Gd(l, c);
      const f = e.threshold || 4 * i;
      if (u <= f) {
        oa(s);
        return;
      }
      W(r) && (s._data = c, delete s.data, Object.defineProperty(s, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(p) {
          this._data = p;
        }
      }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = Kd(c, d, u, i, e);
          break;
        case "min-max":
          g = qd(c, d, u, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = g;
    });
  },
  destroy(n) {
    ko(n);
  }
};
function Zd(n, t, e) {
  const i = n.segments, s = n.points, o = t.points, r = [];
  for (const a of i) {
    let { start: l, end: c } = a;
    c = Qi(l, c, s);
    const h = Ri(e, s[l], s[c], a.loop);
    if (!t.segments) {
      r.push({
        source: a,
        target: h,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const d = Nr(t, h);
    for (const u of d) {
      const f = Ri(e, o[u.start], o[u.end], u.loop), g = Vr(a, s, f);
      for (const p of g)
        r.push({
          source: p,
          target: u,
          start: {
            [e]: Co(h, f, "start", Math.max)
          },
          end: {
            [e]: Co(h, f, "end", Math.min)
          }
        });
    }
  }
  return r;
}
function Ri(n, t, e, i) {
  if (i)
    return;
  let s = t[n], o = e[n];
  return n === "angle" && (s = mt(s), o = mt(o)), {
    property: n,
    start: s,
    end: o
  };
}
function Qd(n, t) {
  const { x: e = null, y: i = null } = n || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: r, end: a }) => {
    a = Qi(r, a, s);
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
function Qi(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function Co(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function ra(n, t) {
  let e = [], i = !1;
  return $(n) ? (i = !0, e = n) : e = Qd(n, t), e.length ? new Bt({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function Po(n) {
  return n && n.fill !== !1;
}
function tu(n, t, e) {
  let s = n[t].fill;
  const o = [
    t
  ];
  let r;
  if (!e)
    return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!J(s))
      return s;
    if (r = n[s], !r)
      return !1;
    if (r.visible)
      return s;
    o.push(s), s = r.fill;
  }
  return !1;
}
function eu(n, t, e) {
  const i = ou(n);
  if (I(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return J(s) && Math.floor(s) === s ? nu(i[0], t, s, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function nu(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function iu(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : I(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function su(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : I(n) ? i = n.value : i = t.getBaseValue(), i;
}
function ou(n) {
  const t = n.options, e = t.fill;
  let i = R(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function ru(n) {
  const { scale: t, index: e, line: i } = n, s = [], o = i.segments, r = i.points, a = au(t, e);
  a.push(ra({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      lu(s, r[h], a);
  }
  return new Bt({
    points: s,
    options: {}
  });
}
function au(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function lu(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], { first: r, last: a, point: l } = cu(o, t, "x");
    if (!(!l || r && a)) {
      if (r)
        i.unshift(l);
      else if (n.push(l), !a)
        break;
    }
  }
  n.push(...i);
}
function cu(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const s = i[e], o = n.segments, r = n.points;
  let a = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], d = r[h.start][e], u = r[h.end][e];
    if (Ft(s, d, u)) {
      a = s === d, l = s === u;
      break;
    }
  }
  return {
    first: a,
    last: l,
    point: i
  };
}
class aa {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: r } = this;
    return e = e || {
      start: 0,
      end: q
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
function hu(n) {
  const { chart: t, fill: e, line: i } = n;
  if (J(e))
    return du(t, e);
  if (e === "stack")
    return ru(n);
  if (e === "shape")
    return !0;
  const s = uu(n);
  return s instanceof aa ? s : ra(s, i);
}
function du(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function uu(n) {
  return (n.scale || {}).getPointPositionForValue ? gu(n) : fu(n);
}
function fu(n) {
  const { scale: t = {}, fill: e } = n, i = iu(e, t);
  if (J(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function gu(n) {
  const { scale: t, fill: e } = n, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, r = su(e, t, o), a = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new aa({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(r)
    });
  }
  for (let l = 0; l < s; ++l)
    a.push(t.getPointPositionForValue(l, r));
  return a;
}
function Si(n, t, e) {
  const i = hu(t), { line: s, scale: o, axis: r } = t, a = s.options, l = a.fill, c = a.backgroundColor, { above: h = c, below: d = c } = l || {};
  i && s.points.length && (un(n, e), pu(n, {
    line: s,
    target: i,
    above: h,
    below: d,
    area: e,
    scale: o,
    axis: r
  }), fn(n));
}
function pu(n, t) {
  const { line: e, target: i, above: s, below: o, area: r, scale: a } = t, l = e._loop ? "angle" : t.axis;
  n.save(), l === "x" && o !== s && (Do(n, i, r.top), Oo(n, {
    line: e,
    target: i,
    color: s,
    scale: a,
    property: l
  }), n.restore(), n.save(), Do(n, i, r.bottom)), Oo(n, {
    line: e,
    target: i,
    color: o,
    scale: a,
    property: l
  }), n.restore();
}
function Do(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, r = !1;
  n.beginPath();
  for (const a of i) {
    const { start: l, end: c } = a, h = s[l], d = s[Qi(l, c, s)];
    o ? (n.moveTo(h.x, h.y), o = !1) : (n.lineTo(h.x, e), n.lineTo(h.x, h.y)), r = !!t.pathSegment(n, a, {
      move: r
    }), r ? n.closePath() : n.lineTo(d.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function Oo(n, t) {
  const { line: e, target: i, property: s, color: o, scale: r } = t, a = Zd(e, i, s);
  for (const { source: l, target: c, start: h, end: d } of a) {
    const { style: { backgroundColor: u = o } = {} } = l, f = i !== !0;
    n.save(), n.fillStyle = u, mu(n, r, f && Ri(s, h, d)), n.beginPath();
    const g = !!e.pathSegment(n, l);
    let p;
    if (f) {
      g ? n.closePath() : Ao(n, i, d, s);
      const b = !!i.pathSegment(n, c, {
        move: g,
        reverse: !0
      });
      p = g && b, p || Ao(n, i, h, s);
    }
    n.closePath(), n.fill(p ? "evenodd" : "nonzero"), n.restore();
  }
}
function mu(n, t, e) {
  const { top: i, bottom: s } = t.chart.chartArea, { property: o, start: r, end: a } = e || {};
  o === "x" && (n.beginPath(), n.rect(r, i, a - r, s - i), n.clip());
}
function Ao(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var la = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, s = [];
    let o, r, a, l;
    for (r = 0; r < i; ++r)
      o = n.getDatasetMeta(r), a = o.dataset, l = null, a && a.options && a instanceof Bt && (l = {
        visible: n.isDatasetVisible(r),
        index: r,
        fill: eu(a, r, i),
        chart: n,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: a
      }), o.$filler = l, s.push(l);
    for (r = 0; r < i; ++r)
      l = s[r], !(!l || l.fill === !1) && (l.fill = tu(s, r, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", s = n.getSortedVisibleDatasetMetas(), o = n.chartArea;
    for (let r = s.length - 1; r >= 0; --r) {
      const a = s[r].$filler;
      !a || (a.line.updateControlPoints(o, a.axis), i && a.fill && Si(n.ctx, a, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      Po(o) && Si(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !Po(i) || e.drawTime !== "beforeDatasetDraw" || Si(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const Eo = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, bu = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class Ro extends ct {
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
    let e = K(t.generateLabels, [
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
    const i = t.labels, s = et(i.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Eo(i, o);
    let c, h;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = s + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let u = -1, f = -h;
    return this.legendItems.forEach((g, p) => {
      const b = i + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + b + 2 * a > r) && (d += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, u++), l[p] = {
        left: 0,
        top: f,
        row: u,
        width: b,
        height: s
      }, c[c.length - 1] += b + a;
    }), d;
  }
  _fitCols(t, e, i, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, u = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((b, x) => {
      const { itemWidth: y, itemHeight: w } = xu(i, e, o, b, s);
      x > 0 && f + w + 2 * a > h && (d += u + a, c.push({
        width: u,
        height: f
      }), g += u + a, p++, u = f = 0), l[x] = {
        left: g,
        top: f,
        col: p,
        width: y,
        height: w
      }, u = Math.max(u, y), f += w + a;
    }), d += u, c.push({
      width: u,
      height: f
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, r = xe(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = ht(i, this.left + s, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = ht(i, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = ht(i, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = ht(i, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      un(t, this), this._draw(), fn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: o, labels: r } = t, a = Z.color, l = xe(t.rtl, this.left, this.width), c = et(r.font), { padding: h } = r, d = c.size, u = d / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: b } = Eo(r, d), x = function(M, C, k) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      s.save();
      const P = R(k.lineWidth, 1);
      if (s.fillStyle = R(k.fillStyle, a), s.lineCap = R(k.lineCap, "butt"), s.lineDashOffset = R(k.lineDashOffset, 0), s.lineJoin = R(k.lineJoin, "miter"), s.lineWidth = P, s.strokeStyle = R(k.strokeStyle, a), s.setLineDash(R(k.lineDash, [])), r.usePointStyle) {
        const E = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: k.pointStyle,
          rotation: k.rotation,
          borderWidth: P
        }, A = l.xPlus(M, g / 2), L = C + u;
        Or(s, E, A, L, r.pointStyleWidth && g);
      } else {
        const E = C + Math.max((d - p) / 2, 0), A = l.leftForLtr(M, g), L = Xt(k.borderRadius);
        s.beginPath(), Object.values(L).some((j) => j !== 0) ? ve(s, {
          x: A,
          y: E,
          w: g,
          h: p,
          radius: L
        }) : s.rect(A, E, g, p), s.fill(), P !== 0 && s.stroke();
      }
      s.restore();
    }, y = function(M, C, k) {
      he(s, k.text, M, C + b / 2, c, {
        strikethrough: k.hidden,
        textAlign: l.textAlign(k.textAlign)
      });
    }, w = this.isHorizontal(), v = this._computeTitleHeight();
    w ? f = {
      x: ht(o, this.left + h, this.right - i[0]),
      y: this.top + h + v,
      line: 0
    } : f = {
      x: this.left + h,
      y: ht(o, this.top + v + h, this.bottom - e[0].height),
      line: 0
    }, Br(this.ctx, t.textDirection);
    const _ = b + h;
    this.legendItems.forEach((M, C) => {
      s.strokeStyle = M.fontColor, s.fillStyle = M.fontColor;
      const k = s.measureText(M.text).width, P = l.textAlign(M.textAlign || (M.textAlign = r.textAlign)), E = g + u + k;
      let A = f.x, L = f.y;
      l.setWidth(this.width), w ? C > 0 && A + E + h > this.right && (L = f.y += _, f.line++, A = f.x = ht(o, this.left + h, this.right - i[f.line])) : C > 0 && L + _ > this.bottom && (A = f.x = A + e[f.line].width + h, f.line++, L = f.y = ht(o, this.top + v + h, this.bottom - e[f.line].height));
      const j = l.x(A);
      if (x(j, L, M), A = Hl(P, A + g + u, w ? A + E : this.right, t.rtl), y(l.x(A), L, M), w)
        f.x += E + h;
      else if (typeof M.text != "string") {
        const G = c.lineHeight;
        f.y += ca(M, G);
      } else
        f.y += _;
    }), Wr(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = et(e.font), s = rt(e.padding);
    if (!e.display)
      return;
    const o = xe(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = i.size / 2, c = s.top + l;
    let h, d = this.left, u = this.width;
    if (this.isHorizontal())
      u = Math.max(...this.lineWidths), h = this.top + c, d = ht(t.align, d, this.right - u);
    else {
      const g = this.columnSizes.reduce((p, b) => Math.max(p, b.height), 0);
      h = c + ht(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = ht(a, d, d + u);
    r.textAlign = o.textAlign($i(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = i.string, he(r, e.text, f, h, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = et(t.font), i = rt(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, o;
    if (Ft(t, this.left, this.right) && Ft(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], Ft(t, s.left, s.left + s.width) && Ft(e, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!vu(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = bu(s, i);
      s && !o && K(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && K(e.onHover, [
        t,
        i,
        this
      ], this);
    } else
      i && K(e.onClick, [
        t,
        i,
        this
      ], this);
  }
}
function xu(n, t, e, i, s) {
  const o = yu(i, n, t, e), r = _u(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function yu(n, t, e, i) {
  let s = n.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + i.measureText(s).width;
}
function _u(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = ca(t, e)), i;
}
function ca(n, t) {
  const e = n.text ? n.text.length + 0.5 : 0;
  return t * e;
}
function vu(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var ha = {
  id: "legend",
  _element: Ro,
  start(n, t, e) {
    const i = n.legend = new Ro({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    dt.configure(n, i, e), dt.addBox(n, i);
  },
  stop(n) {
    dt.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const i = n.legend;
    dt.configure(n, i, e), i.options = e;
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
          const c = l.controller.getStyle(e ? 0 : void 0), h = rt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
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
class ts extends ct {
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
    const s = $(i.text) ? i.text.length : 1;
    this._padding = rt(i.padding);
    const o = s * et(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = ht(a, i, o), d = e + t, c = o - i) : (r.position === "left" ? (h = i + t, d = ht(a, s, e), l = N * -0.5) : (h = o - t, d = ht(a, e, s), l = N * 0.5), c = s - e), {
      titleX: h,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = et(e.font), o = i.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    he(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: $i(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function wu(n, t) {
  const e = new ts({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  dt.configure(n, e, t), dt.addBox(n, e), n.titleBlock = e;
}
var da = {
  id: "title",
  _element: ts,
  start(n, t, e) {
    wu(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    dt.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock;
    dt.configure(n, i, e), i.options = e;
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
const Rn = /* @__PURE__ */ new WeakMap();
var Su = {
  id: "subtitle",
  start(n, t, e) {
    const i = new ts({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    dt.configure(n, i, e), dt.addBox(n, i), Rn.set(n, i);
  },
  stop(n) {
    dt.removeBox(n, Rn.get(n)), Rn.delete(n);
  },
  beforeUpdate(n, t, e) {
    const i = Rn.get(n);
    dt.configure(n, i, e), i.options = e;
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
const Ve = {
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
        const c = l.getCenterPoint(), h = sn(t, c);
        h < s && (s = h, a = l);
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
function Dt(n, t) {
  return t && ($(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Lt(n) {
  return (typeof n == "string" || n instanceof String) && n.indexOf(`
`) > -1 ? n.split(`
`) : n;
}
function Mu(n, t) {
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
function To(n, t) {
  const e = n.chart.ctx, { body: i, footer: s, title: o } = n, { boxWidth: r, boxHeight: a } = t, l = et(t.bodyFont), c = et(t.titleFont), h = et(t.footerFont), d = o.length, u = s.length, f = i.length, g = rt(t.padding);
  let p = g.height, b = 0, x = i.reduce((v, _) => v + _.before.length + _.lines.length + _.after.length, 0);
  if (x += n.beforeBody.length + n.afterBody.length, d && (p += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), x) {
    const v = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    p += f * v + (x - f) * l.lineHeight + (x - 1) * t.bodySpacing;
  }
  u && (p += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
  let y = 0;
  const w = function(v) {
    b = Math.max(b, e.measureText(v).width + y);
  };
  return e.save(), e.font = c.string, Y(n.title, w), e.font = l.string, Y(n.beforeBody.concat(n.afterBody), w), y = t.displayColors ? r + 2 + t.boxPadding : 0, Y(i, (v) => {
    Y(v.before, w), Y(v.lines, w), Y(v.after, w);
  }), y = 0, e.font = h.string, Y(n.footer, w), e.restore(), b += g.width, {
    width: b,
    height: p
  };
}
function ku(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function Cu(n, t, e, i) {
  const { x: s, width: o } = i, r = e.caretSize + e.caretPadding;
  if (n === "left" && s + o + r > t.width || n === "right" && s - o - r < 0)
    return !0;
}
function Pu(n, t, e, i) {
  const { x: s, width: o } = e, { width: r, chartArea: { left: a, right: l } } = n;
  let c = "center";
  return i === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), Cu(c, n, t, e) && (c = "center"), c;
}
function Lo(n, t, e) {
  const i = e.yAlign || t.yAlign || ku(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || Pu(n, t, e, i),
    yAlign: i
  };
}
function Du(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function Ou(n, t, e) {
  let { y: i, height: s } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= s + e : i -= s / 2, i;
}
function Io(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = n, { xAlign: a, yAlign: l } = e, c = s + o, { topLeft: h, topRight: d, bottomLeft: u, bottomRight: f } = Xt(r);
  let g = Du(t, a);
  const p = Ou(t, l, c);
  return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(h, u) + s : a === "right" && (g += Math.max(d, f) + s), {
    x: at(g, 0, i.width - t.width),
    y: at(p, 0, i.height - t.height)
  };
}
function Tn(n, t, e) {
  const i = rt(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function Fo(n) {
  return Dt([], Lt(n));
}
function Au(n, t, e) {
  return Jt(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function zo(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const ua = {
  beforeTitle: Rt,
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
  afterTitle: Rt,
  beforeBody: Rt,
  beforeLabel: Rt,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const e = n.formattedValue;
    return W(e) || (t += e), t;
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
  afterLabel: Rt,
  afterBody: Rt,
  beforeFooter: Rt,
  footer: Rt,
  afterFooter: Rt
};
function ft(n, t, e, i) {
  const s = n[t].call(e, i);
  return typeof s > "u" ? ua[t].call(e, i) : s;
}
class Ti extends ct {
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
    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, o = new Ji(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Au(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, s = ft(i, "beforeTitle", this, t), o = ft(i, "title", this, t), r = ft(i, "afterTitle", this, t);
    let a = [];
    return a = Dt(a, Lt(s)), a = Dt(a, Lt(o)), a = Dt(a, Lt(r)), a;
  }
  getBeforeBody(t, e) {
    return Fo(ft(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, s = [];
    return Y(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = zo(i, o);
      Dt(r.before, Lt(ft(a, "beforeLabel", this, o))), Dt(r.lines, ft(a, "label", this, o)), Dt(r.after, Lt(ft(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, e) {
    return Fo(ft(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e, s = ft(i, "beforeFooter", this, t), o = ft(i, "footer", this, t), r = ft(i, "afterFooter", this, t);
    let a = [];
    return a = Dt(a, Lt(s)), a = Dt(a, Lt(o)), a = Dt(a, Lt(r)), a;
  }
  _createItems(t) {
    const e = this._active, i = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Mu(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, u) => t.filter(h, d, u, i))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, i))), Y(a, (h) => {
      const d = zo(t.callbacks, h);
      s.push(ft(d, "labelColor", this, h)), o.push(ft(d, "labelPointStyle", this, h)), r.push(ft(d, "labelTextColor", this, h));
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
      const a = Ve[i.position].call(this, s, this._eventPosition);
      r = this._createItems(i), this.title = this.getTitle(r, i), this.beforeBody = this.getBeforeBody(r, i), this.body = this.getBody(r, i), this.afterBody = this.getAfterBody(r, i), this.footer = this.getFooter(r, i);
      const l = this._size = To(this, i), c = Object.assign({}, a, l), h = Lo(this.chart, i, c), d = Io(i, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
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
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = i, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Xt(a), { x: u, y: f } = t, { width: g, height: p } = e;
    let b, x, y, w, v, _;
    return o === "center" ? (v = f + p / 2, s === "left" ? (b = u, x = b - r, w = v + r, _ = v - r) : (b = u + g, x = b + r, w = v - r, _ = v + r), y = b) : (s === "left" ? x = u + Math.max(l, h) + r : s === "right" ? x = u + g - Math.max(c, d) - r : x = this.caretX, o === "top" ? (w = f, v = w - r, b = x - r, y = x + r) : (w = f + p, v = w + r, b = x + r, y = x - r), _ = w), {
      x1: b,
      x2: x,
      x3: y,
      y1: w,
      y2: v,
      y3: _
    };
  }
  drawTitle(t, e, i) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = xe(i.rtl, this.x, this.width);
      for (t.x = Tn(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", r = et(i.titleFont), a = i.titleSpacing, e.fillStyle = i.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += i.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const r = this.labelColors[i], a = this.labelPointStyles[i], { boxHeight: l, boxWidth: c, boxPadding: h } = o, d = et(o.bodyFont), u = Tn(this, "left", o), f = s.x(u), g = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0, p = e.y + g;
    if (o.usePointStyle) {
      const b = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, x = s.leftForLtr(f, c) + c / 2, y = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, $n(t, b, x, y), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, $n(t, b, x, y);
    } else {
      t.lineWidth = I(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const b = s.leftForLtr(f, c - h), x = s.leftForLtr(s.xPlus(f, 1), c - h - 2), y = Xt(r.borderRadius);
      Object.values(y).some((w) => w !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ve(t, {
        x: b,
        y: p,
        w: c,
        h: l,
        radius: y
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), ve(t, {
        x,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: y
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(b, p, c, l), t.strokeRect(b, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(x, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = i, d = et(i.bodyFont);
    let u = d.lineHeight, f = 0;
    const g = xe(i.rtl, this.x, this.width), p = function(k) {
      e.fillText(k, g.x(t.x + f), t.y + u / 2), t.y += u + o;
    }, b = g.textAlign(r);
    let x, y, w, v, _, M, C;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = Tn(this, b, i), e.fillStyle = i.bodyColor, Y(this.beforeBody, p), f = a && b !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, v = 0, M = s.length; v < M; ++v) {
      for (x = s[v], y = this.labelTextColors[v], e.fillStyle = y, Y(x.before, p), w = x.lines, a && w.length && (this._drawColorBox(e, t, v, g, i), u = Math.max(d.lineHeight, l)), _ = 0, C = w.length; _ < C; ++_)
        p(w[_]), u = d.lineHeight;
      Y(x.after, p);
    }
    f = 0, u = d.lineHeight, Y(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, i) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = xe(i.rtl, this.x, this.width);
      for (t.x = Tn(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", r = et(i.footerFont), e.fillStyle = i.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = i, { topLeft: d, topRight: u, bottomLeft: f, bottomRight: g } = Xt(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, i, s), e.lineTo(a + c - u, l), e.quadraticCurveTo(a + c, l, a + c, l + u), r === "center" && o === "right" && this.drawCaret(t, e, i, s), e.lineTo(a + c, l + h - g), e.quadraticCurveTo(a + c, l + h, a + c - g, l + h), r === "bottom" && this.drawCaret(t, e, i, s), e.lineTo(a + f, l + h), e.quadraticCurveTo(a, l + h, a, l + h - f), r === "center" && o === "left" && this.drawCaret(t, e, i, s), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const r = Ve[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = To(this, t), l = Object.assign({}, r, this._size), c = Lo(e, t, l), h = Io(t, l, c, e);
      (s._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
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
    const r = rt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, e), Br(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Wr(t, e.textDirection), t.restore());
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
    }), o = !Vn(i, s), r = this._positionChanged(s, e);
    (o || r) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, i), a = this._positionChanged(r, t), l = e || !Vn(r, o) || a;
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
    const { caretX: i, caretY: s, options: o } = this, r = Ve[o.position].call(this, t, e);
    return r !== !1 && (i !== r.x || s !== r.y);
  }
}
O(Ti, "positioners", Ve);
var fa = {
  id: "tooltip",
  _element: Ti,
  positioners: Ve,
  afterInit(n, t, e) {
    e && (n.tooltip = new Ti({
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
    callbacks: ua
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
  Colors: Ud,
  Decimation: Jd,
  Filler: la,
  Legend: ha,
  SubTitle: Su,
  Title: da,
  Tooltip: fa
});
const Eu = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Ru(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1)
    return Eu(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const Tu = (n, t) => n === null ? null : at(Math.round(n), 0, t);
function Bo(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Jn extends de {
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
    if (W(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : Ru(i, t, R(e, t), this._addedLabels), Tu(e, i.length - 1);
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
    return Bo.call(this, t);
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
O(Jn, "id", "category"), O(Jn, "defaults", {
  ticks: {
    callback: Bo
  }
});
function Lu(n, t) {
  const e = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u } = n, f = o || 1, g = h - 1, { min: p, max: b } = t, x = !W(r), y = !W(a), w = !W(c), v = (b - p) / (d + 1);
  let _ = Ls((b - p) / g / f) * f, M, C, k, P;
  if (_ < 1e-14 && !x && !y)
    return [
      {
        value: p
      },
      {
        value: b
      }
    ];
  P = Math.ceil(b / _) - Math.floor(p / _), P > g && (_ = Ls(P * _ / g / f) * f), W(l) || (M = Math.pow(10, l), _ = Math.ceil(_ * M) / M), s === "ticks" ? (C = Math.floor(p / _) * _, k = Math.ceil(b / _) * _) : (C = p, k = b), x && y && o && Fl((a - r) / o, _ / 1e3) ? (P = Math.round(Math.min((a - r) / _, h)), _ = (a - r) / P, C = r, k = a) : w ? (C = x ? r : C, k = y ? a : k, P = c - 1, _ = (k - C) / P) : (P = (k - C) / _, $e(P, Math.round(P), _ / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
  const E = Math.max(Is(_), Is(C));
  M = Math.pow(10, W(l) ? E : l), C = Math.round(C * M) / M, k = Math.round(k * M) / M;
  let A = 0;
  for (x && (u && C !== r ? (e.push({
    value: r
  }), C < r && A++, $e(Math.round((C + A * _) * M) / M, r, Wo(r, v, n)) && A++) : C < r && A++); A < P; ++A)
    e.push({
      value: Math.round((C + A * _) * M) / M
    });
  return y && u && k !== a ? e.length && $e(e[e.length - 1].value, a, Wo(a, v, n)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!y || k === a) && e.push({
    value: k
  }), e;
}
function Wo(n, t, { horizontal: e, minRotation: i }) {
  const s = ot(i), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + n).length;
  return Math.min(t / o, r);
}
class Zn extends de {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return W(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = e ? s : l, a = (l) => o = i ? o : l;
    if (t) {
      const l = At(s), c = At(o);
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
    }, o = this._range || this, r = Lu(s, o);
    return t.bounds === "ticks" && yr(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
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
    return dn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Qn extends Zn {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = J(t) ? t : 0, this.max = J(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = ot(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
O(Qn, "id", "linear"), O(Qn, "defaults", {
  ticks: {
    callback: ei.formatters.numeric
  }
});
const ln = (n) => Math.floor(Nt(n)), ie = (n, t) => Math.pow(10, ln(n) + t);
function jo(n) {
  return n / Math.pow(10, ln(n)) === 1;
}
function Vo(n, t, e) {
  const i = Math.pow(10, e), s = Math.floor(n / i);
  return Math.ceil(t / i) - s;
}
function Iu(n, t) {
  const e = t - n;
  let i = ln(e);
  for (; Vo(n, t, i) > 10; )
    i++;
  for (; Vo(n, t, i) < 10; )
    i--;
  return Math.min(i, ln(n));
}
function Fu(n, { min: t, max: e }) {
  t = pt(n.min, t);
  const i = [], s = ln(t);
  let o = Iu(t, e), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * r) / r, h = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((c - h) / Math.pow(10, o)), u = pt(n.min, Math.round((l + h + d * Math.pow(10, o)) * r) / r);
  for (; u < e; )
    i.push({
      value: u,
      major: jo(u),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, r = o >= 0 ? 1 : r), u = Math.round((l + h + d * Math.pow(10, o)) * r) / r;
  const f = pt(n.max, u);
  return i.push({
    value: f,
    major: jo(f),
    significand: d
  }), i;
}
class Li extends de {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const i = Zn.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return J(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = J(t) ? Math.max(0, t) : null, this.max = J(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !J(this._userMin) && (this.min = t === ie(this.min, 0) ? ie(this.min, -1) : ie(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min, s = this.max;
    const o = (a) => i = t ? i : a, r = (a) => s = e ? s : a;
    i === s && (i <= 0 ? (o(1), r(10)) : (o(ie(i, -1)), r(ie(s, 1)))), i <= 0 && o(ie(s, -1)), s <= 0 && r(ie(i, 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, i = Fu(e, this);
    return t.bounds === "ticks" && yr(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : dn(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = Nt(t), this._valueRange = Nt(this.max) - Nt(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Nt(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
O(Li, "id", "logarithmic"), O(Li, "defaults", {
  ticks: {
    callback: ei.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function Ii(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = rt(t.backdropPadding);
    return R(t.font && t.font.size, Z.font.size) + e.height;
  }
  return 0;
}
function zu(n, t, e) {
  return e = $(e) ? e : [
    e
  ], {
    w: Ql(n, t.string, e),
    h: e.length * t.lineHeight
  };
}
function No(n, t, e, i, s) {
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
function Bu(n) {
  const t = {
    l: n.left + n._padding.left,
    r: n.right - n._padding.right,
    t: n.top + n._padding.top,
    b: n.bottom - n._padding.bottom
  }, e = Object.assign({}, t), i = [], s = [], o = n._pointLabels.length, r = n.options.pointLabels, a = r.centerPointLabels ? N / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(n.getPointLabelContext(l));
    s[l] = c.padding;
    const h = n.getPointPosition(l, n.drawingArea + s[l], a), d = et(c.font), u = zu(n.ctx, d, n._pointLabels[l]);
    i[l] = u;
    const f = mt(n.getIndexAngle(l) + a), g = Math.round(ti(f)), p = No(g, h.x, u.w, 0, 180), b = No(g, h.y, u.h, 90, 270);
    Wu(e, t, f, p, b);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), n._pointLabelItems = ju(n, i, s);
}
function Wu(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  i.start < t.l ? (a = (t.l - i.start) / o, n.l = Math.min(n.l, t.l - a)) : i.end > t.r && (a = (i.end - t.r) / o, n.r = Math.max(n.r, t.r + a)), s.start < t.t ? (l = (t.t - s.start) / r, n.t = Math.min(n.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / r, n.b = Math.max(n.b, t.b + l));
}
function ju(n, t, e) {
  const i = [], s = n._pointLabels.length, o = n.options, r = Ii(o) / 2, a = n.drawingArea, l = o.pointLabels.centerPointLabels ? N / s : 0;
  for (let c = 0; c < s; c++) {
    const h = n.getPointPosition(c, a + r + e[c], l), d = Math.round(ti(mt(h.angle + tt))), u = t[c], f = Hu(h.y, u.h, d), g = Vu(d), p = Nu(h.x, u.w, g);
    i.push({
      x: h.x,
      y: f,
      textAlign: g,
      left: p,
      top: f,
      right: p + u.w,
      bottom: f + u.h
    });
  }
  return i;
}
function Vu(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function Nu(n, t, e) {
  return e === "right" ? n -= t : e === "center" && (n -= t / 2), n;
}
function Hu(n, t, e) {
  return e === 90 || e === 270 ? n -= t / 2 : (e > 270 || e < 90) && (n -= t), n;
}
function Yu(n, t) {
  const { ctx: e, options: { pointLabels: i } } = n;
  for (let s = t - 1; s >= 0; s--) {
    const o = i.setContext(n.getPointLabelContext(s)), r = et(o.font), { x: a, y: l, textAlign: c, left: h, top: d, right: u, bottom: f } = n._pointLabelItems[s], { backdropColor: g } = o;
    if (!W(g)) {
      const p = Xt(o.borderRadius), b = rt(o.backdropPadding);
      e.fillStyle = g;
      const x = h - b.left, y = d - b.top, w = u - h + b.width, v = f - d + b.height;
      Object.values(p).some((_) => _ !== 0) ? (e.beginPath(), ve(e, {
        x,
        y,
        w,
        h: v,
        radius: p
      }), e.fill()) : e.fillRect(x, y, w, v);
    }
    he(e, n._pointLabels[s], a, l + r.lineHeight / 2, r, {
      color: o.color,
      textAlign: c,
      textBaseline: "middle"
    });
  }
}
function ga(n, t, e, i) {
  const { ctx: s } = n;
  if (e)
    s.arc(n.xCenter, n.yCenter, t, 0, q);
  else {
    let o = n.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let r = 1; r < i; r++)
      o = n.getPointPosition(r, t), s.lineTo(o.x, o.y);
  }
}
function $u(n, t, e, i, s) {
  const o = n.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !i || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(s.dash), o.lineDashOffset = s.dashOffset, o.beginPath(), ga(n, e, r, i), o.closePath(), o.stroke(), o.restore());
}
function Xu(n, t, e) {
  return Jt(n, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Ne extends Zn {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = rt(Ii(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = J(t) && !isNaN(t) ? t : 0, this.max = J(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ii(this.options));
  }
  generateTickLabels(t) {
    Zn.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, i) => {
      const s = K(this.options.pointLabels.callback, [
        e,
        i
      ], this);
      return s || s === 0 ? s : "";
    }).filter((e, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Bu(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
  }
  getIndexAngle(t) {
    const e = q / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return mt(t * e + ot(i));
  }
  getDistanceFromCenterForValue(t) {
    if (W(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (W(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return Xu(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - tt + i;
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
      i.save(), i.beginPath(), ga(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: i, grid: s, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && Yu(this, r), s.display && this.ticks.forEach((h, d) => {
      if (d !== 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const u = this.getContext(d), f = s.setContext(u), g = o.setContext(u);
        $u(this, f, l, r, g);
      }
    }), i.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = i.setContext(this.getPointLabelContext(a)), { color: d, lineWidth: u } = h;
        !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
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
      const c = i.setContext(this.getContext(l)), h = et(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = rt(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      he(t, a.label, 0, -o, h, {
        color: c.color
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
O(Ne, "id", "radialLinear"), O(Ne, "defaults", {
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
    callback: ei.formatters.numeric
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
}), O(Ne, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), O(Ne, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const ii = {
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
}, gt = Object.keys(ii);
function Uu(n, t) {
  return n - t;
}
function Ho(n, t) {
  if (W(t))
    return null;
  const e = n._adapter, { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let r = t;
  return typeof i == "function" && (r = i(r)), J(r) || (r = typeof i == "string" ? e.parse(r, i) : e.parse(r)), r === null ? null : (s && (r = s === "week" && (_e(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, s)), +r);
}
function Yo(n, t, e, i) {
  const s = gt.length;
  for (let o = gt.indexOf(n); o < s - 1; ++o) {
    const r = ii[gt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= i)
      return gt[o];
  }
  return gt[s - 1];
}
function Ku(n, t, e, i, s) {
  for (let o = gt.length - 1; o >= gt.indexOf(e); o--) {
    const r = gt[o];
    if (ii[r].common && n._adapter.diff(s, i, r) >= t - 1)
      return r;
  }
  return gt[e ? gt.indexOf(e) : 0];
}
function qu(n) {
  for (let t = gt.indexOf(n) + 1, e = gt.length; t < e; ++t)
    if (ii[gt[t]].common)
      return gt[t];
}
function $o(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = Yi(e, t), o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function Gu(n, t, e, i) {
  const s = n._adapter, o = +s.startOf(t[0].value, i), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, i))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Xo(n, t, e) {
  const i = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, i.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? i : Gu(n, i, s, e);
}
class cn extends de {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new gh._date(t.adapters.date);
    s.init(e), Ye(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Ho(this, t);
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
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = J(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), o = J(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
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
    const o = this.min, r = this.max, a = jl(s, o, r);
    return this._unit = e.unit || (i.autoSkip ? Yo(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Ku(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : qu(this._unit), this.initOffsets(s), t.reverse && a.reverse(), Xo(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = at(e, 0, r), i = at(i, 0, r), this._offsets = {
      start: e,
      end: i,
      factor: 1 / (e + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, i = this.max, s = this.options, o = s.time, r = o.unit || Yo(o.minUnit, e, i, this._getLabelCapacity(e)), a = R(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = _e(l) || l === !0, h = {};
    let d = e, u, f;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(i, e, r) > 1e5 * a)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + a + " " + r);
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (u = d, f = 0; u < i; u = +t.add(u, a, r), f++)
      $o(h, u, g);
    return (u === i || s.bounds === "ticks" || f === 1) && $o(h, u, g), Object.keys(h).sort((p, b) => p - b).map((p) => +p);
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
      return K(r, [
        t,
        e,
        i
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], u = i[e], f = c && d && u && u.major;
    return this._adapter.format(t, s || (f ? d : h));
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
    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = ot(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + a * r,
      h: i * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, Xo(this, [
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
      t.push(Ho(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return wr(t.sort(Uu));
  }
}
O(cn, "id", "time"), O(cn, "defaults", {
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
function Ln(n, t, e) {
  let i = 0, s = n.length - 1, o, r, a, l;
  e ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = zt(n, "pos", t)), { pos: o, time: a } = n[i], { pos: r, time: l } = n[s]) : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = zt(n, "time", t)), { time: o, pos: a } = n[i], { time: r, pos: l } = n[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Fi extends cn {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ln(e, this.min), this._tableRange = Ln(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this, s = [], o = [];
    let r, a, l, c, h;
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
      h = s[r + 1], l = s[r - 1], c = s[r], Math.round((h + l) / 2) !== c && o.push({
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
    return (Ln(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ln(this._table, i * this._tableRange + this._minPos, !0);
  }
}
O(Fi, "id", "timeseries"), O(Fi, "defaults", cn.defaults);
Object.freeze({
  __proto__: null,
  CategoryScale: Jn,
  LinearScale: Qn,
  LogarithmicScale: Li,
  RadialLinearScale: Ne,
  TimeScale: cn,
  TimeSeriesScale: Fi
});
const Uo = {
  modes: {
    point(n, t) {
      return jn(n, t, { intersect: !0 });
    },
    nearest(n, t, e) {
      return Qu(n, t, e);
    },
    x(n, t, e) {
      return jn(n, t, { intersect: e.intersect, axis: "x" });
    },
    y(n, t, e) {
      return jn(n, t, { intersect: e.intersect, axis: "y" });
    }
  }
};
function es(n, t, e) {
  return (Uo.modes[e.mode] || Uo.modes.nearest)(n, t, e);
}
function Ju(n, t, e) {
  return e !== "x" && e !== "y" ? n.inRange(t.x, t.y, "x", !0) || n.inRange(t.x, t.y, "y", !0) : n.inRange(t.x, t.y, e, !0);
}
function Zu(n, t, e) {
  return e === "x" ? { x: n.x, y: t.y } : e === "y" ? { x: t.x, y: n.y } : t;
}
function jn(n, t, e) {
  return n.visibleElements.filter((i) => e.intersect ? i.inRange(t.x, t.y) : Ju(i, t, e.axis));
}
function Qu(n, t, e) {
  let i = Number.POSITIVE_INFINITY;
  return jn(n, t, e).reduce((s, o) => {
    const r = o.getCenterPoint(), a = Zu(t, r, e.axis), l = sn(t, a);
    return l < i ? (s = [o], i = l) : l === i && s.push(o), s;
  }, []).sort((s, o) => s._index - o._index).slice(0, 1);
}
const zi = ["enter", "leave"], ns = zi.concat("click");
function tf(n, t, e) {
  t.listened = !1, t.moveListened = !1, t._getElements = es, ns.forEach((i) => {
    typeof e[i] == "function" ? (t.listened = !0, t.listeners[i] = e[i]) : it(t.listeners[i]) && delete t.listeners[i];
  }), zi.forEach((i) => {
    typeof e[i] == "function" && (t.moveListened = !0);
  }), (!t.listened || !t.moveListened) && t.annotations.forEach((i) => {
    !t.listened && typeof i.click == "function" && (t.listened = !0), t.moveListened || zi.forEach((s) => {
      typeof i[s] == "function" && (t.listened = !0, t.moveListened = !0);
    });
  });
}
function ef(n, t, e) {
  if (n.listened)
    switch (t.type) {
      case "mousemove":
      case "mouseout":
        return nf(n, t, e);
      case "click":
        return sf(n, t, e);
    }
}
function nf(n, t, e) {
  if (!n.moveListened)
    return;
  let i;
  t.type === "mousemove" ? i = es(n, t, e.interaction) : i = [];
  const s = n.hovered;
  n.hovered = i;
  const o = { state: n, event: t };
  let r = Ko(o, "leave", s, i);
  return Ko(o, "enter", i, s) || r;
}
function Ko({ state: n, event: t }, e, i, s) {
  let o;
  for (const r of i)
    s.indexOf(r) < 0 && (o = pa(r.options[e] || n.listeners[e], r, t) || o);
  return o;
}
function sf(n, t, e) {
  const i = n.listeners, s = es(n, t, e.interaction);
  let o;
  for (const r of s)
    o = pa(r.options.click || i.click, r, t) || o;
  return o;
}
function pa(n, t, e) {
  return K(n, [t.$context, e]) === !0;
}
const of = (n, t) => t > n || n.length > t.length && n.slice(0, t.length) === t, ae = 1e-3, is = (n, t, e) => Math.min(e, Math.max(t, n));
function rf(n, t, e) {
  for (const i of Object.keys(n))
    n[i] = is(n[i], t, e);
  return n;
}
function af(n, t, e, i) {
  if (!n || !t || e <= 0)
    return !1;
  const s = i / 2;
  return Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2) <= Math.pow(e + s, 2);
}
function ma(n, { x: t, y: e, x2: i, y2: s }, o, r) {
  const a = r / 2, l = n.x >= t - a - ae && n.x <= i + a + ae, c = n.y >= e - a - ae && n.y <= s + a + ae;
  return o === "x" ? l : (o === "y" || l) && c;
}
function Ce(n, t) {
  const { centerX: e, centerY: i } = n.getProps(["centerX", "centerY"], t);
  return { x: e, y: i };
}
function lf(n, t, e, i = !0) {
  const s = e.split(".");
  let o = 0;
  for (const r of t.split(".")) {
    const a = s[o++];
    if (parseInt(r, 10) < parseInt(a, 10))
      break;
    if (of(a, r)) {
      if (i)
        throw new Error(`${n} v${e} is not supported. v${t} or newer is required.`);
      return !1;
    }
  }
  return !0;
}
const ba = (n) => typeof n == "string" && n.endsWith("%"), xa = (n) => is(parseFloat(n) / 100, 0, 1);
function ss(n, t) {
  return t === "start" ? 0 : t === "end" ? n : ba(t) ? xa(t) * n : n / 2;
}
function Me(n, t) {
  return typeof t == "number" ? t : ba(t) ? xa(t) * n : n;
}
function cf(n, t) {
  const { x: e, width: i } = n, s = t.textAlign;
  return s === "center" ? e + i / 2 : s === "end" || s === "right" ? e + i : e;
}
function ya(n) {
  return I(n) ? {
    x: R(n.x, "center"),
    y: R(n.y, "center")
  } : (n = R(n, "center"), {
    x: n,
    y: n
  });
}
function _a(n) {
  return n && (it(n.xValue) || it(n.yValue));
}
const Mi = /* @__PURE__ */ new Map();
function os(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object HTMLImageElement]" || t === "[object HTMLCanvasElement]";
  }
}
function rs(n, { x: t, y: e }, i) {
  i && (n.translate(t, e), n.rotate(ot(i)), n.translate(-t, -e));
}
function ue(n, t) {
  if (t && t.borderWidth)
    return n.lineCap = t.borderCapStyle, n.setLineDash(t.borderDash), n.lineDashOffset = t.borderDashOffset, n.lineJoin = t.borderJoinStyle, n.lineWidth = t.borderWidth, n.strokeStyle = t.borderColor, !0;
}
function Pe(n, t) {
  n.shadowColor = t.backgroundShadowColor, n.shadowBlur = t.shadowBlur, n.shadowOffsetX = t.shadowOffsetX, n.shadowOffsetY = t.shadowOffsetY;
}
function as(n, t) {
  const e = t.content;
  if (os(e))
    return {
      width: Me(e.width, t.width),
      height: Me(e.height, t.height)
    };
  const i = et(t.font), s = t.textStrokeWidth, o = $(e) ? e : [e], r = o.join() + i.string + s + (n._measureText ? "-spriting" : "");
  if (!Mi.has(r)) {
    n.save(), n.font = i.string;
    const a = o.length;
    let l = 0;
    for (let h = 0; h < a; h++) {
      const d = o[h];
      l = Math.max(l, n.measureText(d).width + s);
    }
    n.restore();
    const c = a * i.lineHeight + s;
    Mi.set(r, { width: l, height: c });
  }
  return Mi.get(r);
}
function va(n, t, e) {
  const { x: i, y: s, width: o, height: r } = t;
  n.save(), Pe(n, e);
  const a = ue(n, e);
  n.fillStyle = e.backgroundColor, n.beginPath(), ve(n, {
    x: i,
    y: s,
    w: o,
    h: r,
    radius: rf(Xt(e.borderRadius), 0, Math.min(o, r) / 2)
  }), n.closePath(), n.fill(), a && (n.shadowColor = e.borderShadowColor, n.stroke()), n.restore();
}
function hf(n, t, e) {
  const i = e.content;
  if (os(i)) {
    n.drawImage(i, t.x, t.y, t.width, t.height);
    return;
  }
  const s = $(i) ? i : [i], o = et(e.font), r = o.lineHeight, a = cf(t, e), l = t.y + r / 2 + e.textStrokeWidth / 2;
  n.save(), n.font = o.string, n.textBaseline = "middle", n.textAlign = e.textAlign, df(n, e) && s.forEach((c, h) => n.strokeText(c, a, l + h * r)), n.fillStyle = e.color, s.forEach((c, h) => n.fillText(c, a, l + h * r)), n.restore();
}
function df(n, t) {
  if (t.textStrokeWidth > 0)
    return n.lineJoin = "round", n.miterLimit = 2, n.lineWidth = t.textStrokeWidth, n.strokeStyle = t.textStrokeColor, !0;
}
function ke(n, t, e) {
  return t = typeof t == "number" ? t : n.parse(t), J(t) ? n.getPixelForValue(t) : e;
}
function Gt(n, t, e) {
  const i = t[e];
  if (i || e === "scaleID")
    return i;
  const s = e.charAt(0), o = Object.values(n).filter((r) => r.axis && r.axis === s);
  return o.length ? o[0].id : s;
}
function wa(n, t) {
  if (n) {
    const e = n.options.reverse, i = ke(n, t.min, e ? t.end : t.start), s = ke(n, t.max, e ? t.start : t.end);
    return {
      start: i,
      end: s
    };
  }
}
function Sa(n, t) {
  const { chartArea: e, scales: i } = n, s = i[Gt(i, t, "xScaleID")], o = i[Gt(i, t, "yScaleID")];
  let r = e.width / 2, a = e.height / 2;
  return s && (r = ke(s, t.xValue, s.left + s.width / 2)), o && (a = ke(o, t.yValue, o.top + o.height / 2)), { x: r, y: a };
}
function ls(n, t) {
  const e = n.scales, i = e[Gt(e, t, "xScaleID")], s = e[Gt(e, t, "yScaleID")];
  if (!i && !s)
    return {};
  let { left: o, right: r } = i || n.chartArea, { top: a, bottom: l } = s || n.chartArea;
  const c = qo(i, { min: t.xMin, max: t.xMax, start: o, end: r });
  o = c.start, r = c.end;
  const h = qo(s, { min: t.yMin, max: t.yMax, start: l, end: a });
  return a = h.start, l = h.end, {
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
function Ma(n, t) {
  if (!_a(t)) {
    const e = ls(n, t);
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
  return uf(n, t);
}
function ka(n, t) {
  const e = ls(n, t), { x: i, y: s } = e;
  return e.elements = [{
    type: "label",
    optionScope: "label",
    properties: pf(n, e, t)
  }], e.initProperties = { x: i, y: s }, e;
}
function uf(n, t) {
  const e = Sa(n, t), i = t.radius * 2;
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
function qo(n, t) {
  const e = wa(n, t) || t;
  return {
    start: Math.min(e.start, e.end),
    end: Math.max(e.start, e.end)
  };
}
function ff({ properties: n, options: t }, e, i, s) {
  const { x: o, x2: r, width: a } = n;
  return Ca({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.x,
    padding: { start: s.left, end: s.right },
    adjust: t.label.xAdjust,
    size: e.width
  });
}
function gf({ properties: n, options: t }, e, i, s) {
  const { y: o, y2: r, height: a } = n;
  return Ca({ start: o, end: r, size: a, borderWidth: t.borderWidth }, {
    position: i.y,
    padding: { start: s.top, end: s.bottom },
    adjust: t.label.yAdjust,
    size: e.height
  });
}
function Ca(n, t) {
  const { start: e, end: i, borderWidth: s } = n, { position: o, padding: { start: r, end: a }, adjust: l } = t, c = i - s - e - r - a - t.size;
  return e + s / 2 + l + ss(c, o);
}
function pf(n, t, e) {
  const i = e.label;
  i.backgroundColor = "transparent", i.callout.display = !1;
  const s = ya(i.position), o = rt(i.padding), r = as(n.ctx, i), a = ff({ properties: t, options: e }, r, s, o), l = gf({ properties: t, options: e }, r, s, o), c = r.width + o.width, h = r.height + o.height;
  return {
    x: a,
    y: l,
    x2: a + c,
    y2: l + h,
    width: c,
    height: h,
    centerX: a + c / 2,
    centerY: l + h / 2,
    rotation: i.rotation
  };
}
function De(n, t, e) {
  const i = Math.cos(e), s = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + i * (n.x - o) - s * (n.y - r),
    y: r + s * (n.x - o) + i * (n.y - r)
  };
}
function mf(n, t, e) {
  const i = vf(n.scales, t, e);
  let s = Go(t, i, "min", "suggestedMin");
  s = Go(t, i, "max", "suggestedMax") || s, s && typeof t.handleTickRangeOptions == "function" && t.handleTickRangeOptions();
}
function bf(n, t) {
  for (const e of n)
    yf(e, t);
}
function Go(n, t, e, i) {
  if (J(t[e]) && !xf(n.options, e, i)) {
    const s = n[e] !== t[e];
    return n[e] = t[e], s;
  }
}
function xf(n, t, e) {
  return it(n[t]) || it(n[e]);
}
function yf(n, t) {
  for (const e of ["scaleID", "xScaleID", "yScaleID"]) {
    const i = Gt(t, n, e);
    i && !t[i] && _f(n, e) && console.warn(`No scale found with id '${i}' for annotation '${n.id}'`);
  }
}
function _f(n, t) {
  if (t === "scaleID")
    return !0;
  const e = t.charAt(0);
  for (const i of ["Min", "Max", "Value"])
    if (it(n[e + i]))
      return !0;
  return !1;
}
function vf(n, t, e) {
  const i = t.axis, s = t.id, o = i + "ScaleID", r = {
    min: R(t.min, Number.NEGATIVE_INFINITY),
    max: R(t.max, Number.POSITIVE_INFINITY)
  };
  for (const a of e)
    a.scaleID === s ? Jo(a, t, ["value", "endValue"], r) : Gt(n, a, o) === s && Jo(a, t, [i + "Min", i + "Max", i + "Value"], r);
  return r;
}
function Jo(n, t, e, i) {
  for (const s of e) {
    const o = n[s];
    if (it(o)) {
      const r = t.parse(o);
      i.min = Math.min(i.min, r), i.max = Math.max(i.max, r);
    }
  }
}
class Oe extends ct {
  inRange(t, e, i, s) {
    const { x: o, y: r } = De({ x: t, y: e }, this.getCenterPoint(s), ot(-this.options.rotation));
    return ma({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return Ce(this, t);
  }
  draw(t) {
    t.save(), rs(t, this.getCenterPoint(), this.options.rotation), va(t, this, this.options), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return ka(t, e);
  }
}
Oe.id = "boxAnnotation";
Oe.defaults = {
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
Oe.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
Oe.descriptors = {
  label: {
    _fallback: !0
  }
};
const Pa = ["left", "bottom", "top", "right"];
class pn extends ct {
  inRange(t, e, i, s) {
    const { x: o, y: r } = De({ x: t, y: e }, this.getCenterPoint(s), ot(-this.rotation));
    return ma({ x: o, y: r }, this.getProps(["x", "y", "x2", "y2"], s), i, this.options.borderWidth);
  }
  getCenterPoint(t) {
    return Ce(this, t);
  }
  draw(t) {
    const e = this.options, i = !it(this._visible) || this._visible;
    !e.display || !e.content || !i || (t.save(), rs(t, this.getCenterPoint(), this.rotation), Sf(t, this), va(t, this, e), hf(t, Af(this), e), t.restore());
  }
  resolveElementProperties(t, e) {
    let i;
    if (_a(e))
      i = Sa(t, e);
    else {
      const { centerX: a, centerY: l } = ls(t, e);
      i = { x: a, y: l };
    }
    const s = rt(e.padding), o = as(t.ctx, e), r = wf(i, o, e, s);
    return {
      pointX: i.x,
      pointY: i.y,
      ...r,
      rotation: e.rotation
    };
  }
}
pn.id = "labelAnnotation";
pn.defaults = {
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
pn.defaultRoutes = {
  borderColor: "color"
};
function wf(n, t, e, i) {
  const s = t.width + i.width + e.borderWidth, o = t.height + i.height + e.borderWidth, r = ya(e.position), a = Zo(n.x, s, e.xAdjust, r.x), l = Zo(n.y, o, e.yAdjust, r.y);
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
function Zo(n, t, e = 0, i) {
  return n - ss(t, i) + e;
}
function Sf(n, t) {
  const { pointX: e, pointY: i, options: s } = t, o = s.callout, r = o && o.display && Df(t, o);
  if (!r || Ef(t, o, r))
    return;
  if (n.save(), n.beginPath(), !ue(n, o))
    return n.restore();
  const { separatorStart: l, separatorEnd: c } = Mf(t, r), { sideStart: h, sideEnd: d } = Cf(t, r, l);
  (o.margin > 0 || s.borderWidth === 0) && (n.moveTo(l.x, l.y), n.lineTo(c.x, c.y)), n.moveTo(h.x, h.y), n.lineTo(d.x, d.y);
  const u = De({ x: e, y: i }, t.getCenterPoint(), ot(-t.rotation));
  n.lineTo(u.x, u.y), n.stroke(), n.restore();
}
function Mf(n, t) {
  const { x: e, y: i, x2: s, y2: o } = n, r = kf(n, t);
  let a, l;
  return t === "left" || t === "right" ? (a = { x: e + r, y: i }, l = { x: a.x, y: o }) : (a = { x: e, y: i + r }, l = { x: s, y: a.y }), { separatorStart: a, separatorEnd: l };
}
function kf(n, t) {
  const { width: e, height: i, options: s } = n, o = s.callout.margin + s.borderWidth / 2;
  return t === "right" ? e + o : t === "bottom" ? i + o : -o;
}
function Cf(n, t, e) {
  const { y: i, width: s, height: o, options: r } = n, a = r.callout.start, l = Pf(t, r.callout);
  let c, h;
  return t === "left" || t === "right" ? (c = { x: e.x, y: i + Me(o, a) }, h = { x: c.x + l, y: c.y }) : (c = { x: e.x + Me(s, a), y: e.y }, h = { x: c.x, y: c.y + l }), { sideStart: c, sideEnd: h };
}
function Pf(n, t) {
  const e = t.side;
  return n === "left" || n === "top" ? -e : e;
}
function Df(n, t) {
  const e = t.position;
  return Pa.includes(e) ? e : Of(n, t);
}
function Of(n, t) {
  const { x: e, y: i, x2: s, y2: o, width: r, height: a, pointX: l, pointY: c, centerX: h, centerY: d, rotation: u } = n, f = { x: h, y: d }, g = t.start, p = Me(r, g), b = Me(a, g), x = [e, e + p, e + p, s], y = [i + b, o, i, o], w = [];
  for (let v = 0; v < 4; v++) {
    const _ = De({ x: x[v], y: y[v] }, f, ot(u));
    w.push({
      position: Pa[v],
      distance: sn(_, { x: l, y: c })
    });
  }
  return w.sort((v, _) => v.distance - _.distance)[0].position;
}
function Af({ x: n, y: t, width: e, height: i, options: s }) {
  const o = s.borderWidth / 2, r = rt(s.padding);
  return {
    x: n + r.left + o,
    y: t + r.top + o,
    width: e - r.left - r.right - s.borderWidth,
    height: i - r.top - r.bottom - s.borderWidth
  };
}
function Ef(n, t, e) {
  const { pointX: i, pointY: s } = n, o = t.margin;
  let r = i, a = s;
  return e === "left" ? r += o : e === "right" ? r -= o : e === "top" ? a += o : e === "bottom" && (a -= o), n.inRange(r, a);
}
const cs = (n, t, e) => ({ x: n.x + e * (t.x - n.x), y: n.y + e * (t.y - n.y) }), Bi = (n, t, e) => cs(t, e, Math.abs((n - t.y) / (e.y - t.y))).x, Qo = (n, t, e) => cs(t, e, Math.abs((n - t.x) / (e.x - t.x))).y, He = (n) => n * n, Rf = (n, t, { x: e, y: i, x2: s, y2: o }, r) => r === "y" ? { start: Math.min(i, o), end: Math.max(i, o), value: t } : { start: Math.min(e, s), end: Math.max(e, s), value: n };
class mn extends ct {
  inRange(t, e, i, s) {
    const o = this.options.borderWidth / 2;
    if (i !== "x" && i !== "y") {
      const a = He(o), l = { mouseX: t, mouseY: e };
      return If(this, l, a, s) || nr(this, l, s);
    }
    const r = Rf(t, e, this.getProps(["x", "y", "x2", "y2"], s), i);
    return r.value >= r.start - o && r.value <= r.end + o || nr(this, { mouseX: t, mouseY: e }, s, i);
  }
  getCenterPoint(t) {
    return Ce(this, t);
  }
  draw(t) {
    const { x: e, y: i, x2: s, y2: o, options: r } = this;
    if (t.save(), !ue(t, r))
      return t.restore();
    Pe(t, r);
    const a = Math.atan2(o - i, s - e), l = Math.sqrt(Math.pow(s - e, 2) + Math.pow(o - i, 2)), { startOpts: c, endOpts: h, startAdjust: d, endAdjust: u } = Nf(this);
    t.translate(e, i), t.rotate(a), t.beginPath(), t.moveTo(0 + d, 0), t.lineTo(l - u, 0), t.shadowColor = r.borderShadowColor, t.stroke(), ar(t, 0, d, c), ar(t, l, -u, h), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    const { scales: i, chartArea: s } = t, o = i[e.scaleID], r = { x: s.left, y: s.top, x2: s.right, y2: s.bottom };
    let a, l;
    if (o)
      a = ke(o, e.value, NaN), l = ke(o, e.endValue, a), o.isHorizontal() ? (r.x = a, r.x2 = l) : (r.y = a, r.y2 = l);
    else {
      const b = i[Gt(i, e, "xScaleID")], x = i[Gt(i, e, "yScaleID")];
      b && ir(r, b, { min: e.xMin, max: e.xMax, start: b.left, end: b.right, startProp: "x", endProp: "x2" }), x && ir(r, x, { min: e.yMin, max: e.yMax, start: x.bottom, end: x.top, startProp: "y", endProp: "y2" });
    }
    const { x: c, y: h, x2: d, y2: u } = r, f = Tf(r, t.chartArea), g = f ? Lf({ x: c, y: h }, { x: d, y: u }, t.chartArea) : { x: c, y: h, x2: d, y2: u, width: Math.abs(d - c), height: Math.abs(u - h) };
    g.centerX = (d + c) / 2, g.centerY = (u + h) / 2;
    const p = Ff(t, g, e.label);
    return p._visible = f, g.elements = [{
      type: "label",
      optionScope: "label",
      properties: p
    }], g;
  }
}
mn.id = "lineAnnotation";
const tr = {
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
mn.defaults = {
  adjustScaleRange: !0,
  arrowHeads: {
    display: !1,
    end: Object.assign({}, tr),
    fill: !1,
    length: 12,
    start: Object.assign({}, tr),
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
    callout: Object.assign({}, pn.defaults.callout),
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
mn.descriptors = {
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
mn.defaultRoutes = {
  borderColor: "color"
};
function Tf({ x: n, y: t, x2: e, y2: i }, { top: s, right: o, bottom: r, left: a }) {
  return !(n < a && e < a || n > o && e > o || t < s && i < s || t > r && i > r);
}
function er({ x: n, y: t }, e, { top: i, right: s, bottom: o, left: r }) {
  return n < r && (t = Qo(r, { x: n, y: t }, e), n = r), n > s && (t = Qo(s, { x: n, y: t }, e), n = s), t < i && (n = Bi(i, { x: n, y: t }, e), t = i), t > o && (n = Bi(o, { x: n, y: t }, e), t = o), { x: n, y: t };
}
function Lf(n, t, e) {
  const { x: i, y: s } = er(n, t, e), { x: o, y: r } = er(t, n, e);
  return { x: i, y: s, x2: o, y2: r, width: Math.abs(o - i), height: Math.abs(r - s) };
}
function If(n, { mouseX: t, mouseY: e }, i = ae, s) {
  const { x: o, y: r, x2: a, y2: l } = n.getProps(["x", "y", "x2", "y2"], s), c = a - o, h = l - r, d = He(c) + He(h), u = d === 0 ? -1 : ((t - o) * c + (e - r) * h) / d;
  let f, g;
  return u < 0 ? (f = o, g = r) : u > 1 ? (f = a, g = l) : (f = o + u * c, g = r + u * h), He(t - f) + He(e - g) <= i;
}
function nr(n, { mouseX: t, mouseY: e }, i, s) {
  const o = n.label;
  return o.options.display && o.inRange(t, e, s, i);
}
function ir(n, t, e) {
  const i = wa(t, e);
  n[e.startProp] = i.start, n[e.endProp] = i.end;
}
function Ff(n, t, e) {
  const i = e.borderWidth, s = rt(e.padding), o = as(n.ctx, e), r = o.width + s.width + i, a = o.height + s.height + i;
  return Bf(t, e, { width: r, height: a, padding: s }, n.chartArea);
}
function zf(n) {
  const { x: t, y: e, x2: i, y2: s } = n, o = Math.atan2(s - e, i - t);
  return o > N / 2 ? o - N : o < N / -2 ? o + N : o;
}
function Bf(n, t, e, i) {
  const { width: s, height: o, padding: r } = e, { xAdjust: a, yAdjust: l } = t, c = { x: n.x, y: n.y }, h = { x: n.x2, y: n.y2 }, d = t.rotation === "auto" ? zf(n) : ot(t.rotation), u = Wf(s, o, d), f = jf(n, t, { labelSize: u, padding: r }, i), g = cs(c, h, f), p = { size: u.w, min: i.left, max: i.right, padding: r.left }, b = { size: u.h, min: i.top, max: i.bottom, padding: r.top }, x = or(g.x, p) + a, y = or(g.y, b) + l;
  return {
    x: x - s / 2,
    y: y - o / 2,
    x2: x + s / 2,
    y2: y + o / 2,
    centerX: x,
    centerY: y,
    pointX: g.x,
    pointY: g.y,
    width: s,
    height: o,
    rotation: ti(d)
  };
}
function Wf(n, t, e) {
  const i = Math.cos(e), s = Math.sin(e);
  return {
    w: Math.abs(n * i) + Math.abs(t * s),
    h: Math.abs(n * s) + Math.abs(t * i)
  };
}
function jf(n, t, e, i) {
  let s;
  const o = Vf(n, i);
  return t.position === "start" ? s = sr({ w: n.x2 - n.x, h: n.y2 - n.y }, e, t, o) : t.position === "end" ? s = 1 - sr({ w: n.x - n.x2, h: n.y - n.y2 }, e, t, o) : s = ss(1, t.position), s;
}
function sr(n, t, e, i) {
  const { labelSize: s, padding: o } = t, r = n.w * i.dx, a = n.h * i.dy, l = r > 0 && (s.w / 2 + o.left - i.x) / r, c = a > 0 && (s.h / 2 + o.top - i.y) / a;
  return is(Math.max(l, c), 0, 0.25);
}
function Vf(n, t) {
  const { x: e, x2: i, y: s, y2: o } = n, r = Math.min(s, o) - t.top, a = Math.min(e, i) - t.left, l = t.bottom - Math.max(s, o), c = t.right - Math.max(e, i);
  return {
    x: Math.min(a, c),
    y: Math.min(r, l),
    dx: a <= c ? 1 : -1,
    dy: r <= l ? 1 : -1
  };
}
function or(n, t) {
  const { size: e, min: i, max: s, padding: o } = t, r = e / 2;
  return e > s - i ? (s + i) / 2 : (i >= n - o - r && (n = i + o + r), s <= n + o + r && (n = s - o - r), n);
}
function Nf(n) {
  const t = n.options, e = t.arrowHeads && t.arrowHeads.start, i = t.arrowHeads && t.arrowHeads.end;
  return {
    startOpts: e,
    endOpts: i,
    startAdjust: rr(n, e),
    endAdjust: rr(n, i)
  };
}
function rr(n, t) {
  if (!t || !t.display)
    return 0;
  const { length: e, width: i } = t, s = n.options.borderWidth / 2, o = { x: e, y: i + s };
  return Math.abs(Bi(0, o, { x: 0, y: s }));
}
function ar(n, t, e, i) {
  if (!i || !i.display)
    return;
  const { length: s, width: o, fill: r, backgroundColor: a, borderColor: l } = i, c = Math.abs(t - s) + e;
  n.beginPath(), Pe(n, i), ue(n, i), n.moveTo(c, -o), n.lineTo(t + e, 0), n.lineTo(c, o), r === !0 ? (n.fillStyle = a || l, n.closePath(), n.fill(), n.shadowColor = "transparent") : n.shadowColor = i.borderShadowColor, n.stroke();
}
class bn extends ct {
  inRange(t, e, i, s) {
    const o = this.options.rotation, r = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return Hf({ x: t, y: e }, this.getProps(["width", "height", "centerX", "centerY"], s), o, r);
    const { x: a, y: l, x2: c, y2: h } = this.getProps(["x", "y", "x2", "y2"], s), d = r / 2, u = i === "y" ? { start: l, end: h } : { start: a, end: c }, f = De({ x: t, y: e }, this.getCenterPoint(s), ot(-o));
    return f[i] >= u.start - d - ae && f[i] <= u.end + d + ae;
  }
  getCenterPoint(t) {
    return Ce(this, t);
  }
  draw(t) {
    const { width: e, height: i, centerX: s, centerY: o, options: r } = this;
    t.save(), rs(t, this.getCenterPoint(), r.rotation), Pe(t, this.options), t.beginPath(), t.fillStyle = r.backgroundColor;
    const a = ue(t, r);
    t.ellipse(s, o, i / 2, e / 2, N / 2, 0, 2 * N), t.fill(), a && (t.shadowColor = r.borderShadowColor, t.stroke()), t.restore();
  }
  get label() {
    return this.elements && this.elements[0];
  }
  resolveElementProperties(t, e) {
    return ka(t, e);
  }
}
bn.id = "ellipseAnnotation";
bn.defaults = {
  adjustScaleRange: !0,
  backgroundShadowColor: "transparent",
  borderDash: [],
  borderDashOffset: 0,
  borderShadowColor: "transparent",
  borderWidth: 1,
  display: !0,
  label: Object.assign({}, Oe.defaults.label),
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
bn.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
bn.descriptors = {
  label: {
    _fallback: !0
  }
};
function Hf(n, t, e, i) {
  const { width: s, height: o, centerX: r, centerY: a } = t, l = s / 2, c = o / 2;
  if (l <= 0 || c <= 0)
    return !1;
  const h = ot(e || 0), d = i / 2 || 0, u = Math.cos(h), f = Math.sin(h), g = Math.pow(u * (n.x - r) + f * (n.y - a), 2), p = Math.pow(f * (n.x - r) - u * (n.y - a), 2);
  return g / Math.pow(l + d, 2) + p / Math.pow(c + d, 2) <= 1.0001;
}
class si extends ct {
  inRange(t, e, i, s) {
    const { x: o, y: r, x2: a, y2: l, width: c } = this.getProps(["x", "y", "x2", "y2", "width"], s), h = this.options.borderWidth;
    if (i !== "x" && i !== "y")
      return af({ x: t, y: e }, this.getCenterPoint(s), c / 2, h);
    const d = h / 2, u = i === "y" ? { start: r, end: l, value: e } : { start: o, end: a, value: t };
    return u.value >= u.start - d && u.value <= u.end + d;
  }
  getCenterPoint(t) {
    return Ce(this, t);
  }
  draw(t) {
    const e = this.options, i = e.borderWidth;
    if (e.radius < 0.1)
      return;
    t.save(), t.fillStyle = e.backgroundColor, Pe(t, e);
    const s = ue(t, e);
    e.borderWidth = 0, $n(t, e, this.centerX, this.centerY), s && !os(e.pointStyle) && (t.shadowColor = e.borderShadowColor, t.stroke()), t.restore(), e.borderWidth = i;
  }
  resolveElementProperties(t, e) {
    return Ma(t, e);
  }
}
si.id = "pointAnnotation";
si.defaults = {
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
si.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
class oi extends ct {
  inRange(t, e, i, s) {
    if (i !== "x" && i !== "y")
      return this.options.radius >= 0.1 && this.elements.length > 1 && $f(this.elements, t, e, s);
    const o = De({ x: t, y: e }, this.getCenterPoint(s), ot(-this.options.rotation)), r = this.elements.map((c) => i === "y" ? c.bY : c.bX), a = Math.min(...r), l = Math.max(...r);
    return o[i] >= a && o[i] <= l;
  }
  getCenterPoint(t) {
    return Ce(this, t);
  }
  draw(t) {
    const { elements: e, options: i } = this;
    t.save(), t.beginPath(), t.fillStyle = i.backgroundColor, Pe(t, i);
    const s = ue(t, i);
    let o = !0;
    for (const r of e)
      o ? (t.moveTo(r.x, r.y), o = !1) : t.lineTo(r.x, r.y);
    t.closePath(), t.fill(), s && (t.shadowColor = i.borderShadowColor, t.stroke()), t.restore();
  }
  resolveElementProperties(t, e) {
    const i = Ma(t, e), { x: s, y: o } = i, { sides: r, rotation: a } = e, l = [], c = 2 * N / r;
    let h = a * xr;
    for (let d = 0; d < r; d++, h += c)
      l.push(Yf(i, e, h));
    return i.elements = l, i.initProperties = { x: s, y: o }, i;
  }
}
oi.id = "polygonAnnotation";
oi.defaults = {
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
oi.defaultRoutes = {
  borderColor: "color",
  backgroundColor: "color"
};
function Yf({ centerX: n, centerY: t }, { radius: e, borderWidth: i }, s) {
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
function $f(n, t, e, i) {
  let s = !1, o = n[n.length - 1].getProps(["bX", "bY"], i);
  for (const r of n) {
    const a = r.getProps(["bX", "bY"], i);
    a.bY > e != o.bY > e && t < (o.bX - a.bX) * (e - a.bY) / (o.bY - a.bY) + a.bX && (s = !s), o = a;
  }
  return s;
}
const Ut = {
  box: Oe,
  ellipse: bn,
  label: pn,
  line: mn,
  point: si,
  polygon: oi
};
Object.keys(Ut).forEach((n) => {
  Z.describe(`elements.${Ut[n].id}`, {
    _fallback: "plugins.annotation.common"
  });
});
const Xf = {
  update: Object.assign
};
function hs(n = "line") {
  return Ut[n] ? n : (console.warn(`Unknown annotation type: '${n}', defaulting to 'line'`), "line");
}
function Uf(n, t, e, i) {
  const s = qf(n, e.animations, i), o = t.annotations, r = Zf(t.elements, o);
  for (let a = 0; a < o.length; a++) {
    const l = o[a], c = Da(r, a, l.type), h = l.setContext(Jf(n, c, l)), d = c.resolveElementProperties(n, h);
    d.skip = Kf(d), "elements" in d && (Gf(c, d, h, s), delete d.elements), it(c.x) || Object.assign(c, d), d.options = Oa(h), s.update(c, d);
  }
}
function Kf(n) {
  return isNaN(n.x) || isNaN(n.y);
}
function qf(n, t, e) {
  return e === "reset" || e === "none" || e === "resize" ? Xf : new Ji(n, t);
}
function Gf(n, { elements: t, initProperties: e }, i, s) {
  const o = n.elements || (n.elements = []);
  o.length = t.length;
  for (let r = 0; r < t.length; r++) {
    const a = t[r], l = a.properties, c = Da(o, r, a.type, e), h = i[a.optionScope].override(a);
    l.options = Oa(h), s.update(c, l);
  }
}
function Da(n, t, e, i) {
  const s = Ut[hs(e)];
  let o = n[t];
  return (!o || !(o instanceof s)) && (o = n[t] = new s(), I(i) && Object.assign(o, i)), o;
}
function Oa(n) {
  const t = Ut[hs(n.type)], e = {};
  e.id = n.id, e.type = n.type, e.drawTime = n.drawTime, Object.assign(
    e,
    Wi(n, t.defaults),
    Wi(n, t.defaultRoutes)
  );
  for (const i of ns)
    e[i] = n[i];
  return e;
}
function Wi(n, t) {
  const e = {};
  for (const i of Object.keys(t)) {
    const s = t[i], o = n[i];
    e[i] = I(s) ? Wi(o, s) : o;
  }
  return e;
}
function Jf(n, t, e) {
  return t.$context || (t.$context = Object.assign(Object.create(n.getContext()), {
    element: t,
    id: e.id,
    type: "annotation"
  }));
}
function Zf(n, t) {
  const e = t.length, i = n.length;
  if (i < e) {
    const s = e - i;
    n.splice(i, 0, ...new Array(s));
  } else
    i > e && n.splice(e, i - e);
  return n;
}
var Qf = "2.1.2";
const Wt = /* @__PURE__ */ new Map();
var tg = {
  id: "annotation",
  version: Qf,
  beforeRegister() {
    lf("chart.js", "3.7", bt.version);
  },
  afterRegister() {
    bt.register(Ut);
  },
  afterUnregister() {
    bt.unregister(Ut);
  },
  beforeInit(n) {
    Wt.set(n, {
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
    const i = Wt.get(n), s = i.annotations = [];
    let o = e.annotations;
    I(o) ? Object.keys(o).forEach((r) => {
      const a = o[r];
      I(a) && (a.id = r, s.push(a));
    }) : $(o) && s.push(...o), bf(s, n.scales);
  },
  afterDataLimits(n, t) {
    const e = Wt.get(n);
    mf(n, t.scale, e.annotations.filter((i) => i.display && i.adjustScaleRange));
  },
  afterUpdate(n, t, e) {
    const i = Wt.get(n);
    tf(n, i, e), Uf(n, i, e, t.mode), i.visibleElements = i.elements.filter((s) => !s.skip && s.options.display);
  },
  beforeDatasetsDraw(n, t, e) {
    In(n, "beforeDatasetsDraw", e.clip);
  },
  afterDatasetsDraw(n, t, e) {
    In(n, "afterDatasetsDraw", e.clip);
  },
  beforeDraw(n, t, e) {
    In(n, "beforeDraw", e.clip);
  },
  afterDraw(n, t, e) {
    In(n, "afterDraw", e.clip);
  },
  beforeEvent(n, t, e) {
    const i = Wt.get(n);
    ef(i, t.event, e) && (t.changed = !0);
  },
  afterDestroy(n) {
    Wt.delete(n);
  },
  _getState(n) {
    return Wt.get(n);
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
    _scriptable: (n) => !ns.includes(n),
    annotations: {
      _allKeys: !1,
      _fallback: (n, t) => `elements.${Ut[hs(t.type)].id}`
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
function In(n, t, e) {
  const { ctx: i, chartArea: s } = n, { visibleElements: o } = Wt.get(n);
  e && un(i, s);
  const r = eg(o, t).sort((a, l) => a.options.z - l.options.z);
  for (const a of r)
    a.draw(n.ctx, s);
  e && fn(i);
}
function eg(n, t) {
  const e = [];
  for (const i of n)
    if (i.options.drawTime === t && e.push(i), i.elements && i.elements.length)
      for (const s of i.elements)
        s.options.display && s.options.drawTime === t && e.push(s);
  return e;
}
var ds = { exports: {} }, Fe = {}, lr;
function ng() {
  if (lr)
    return Fe;
  lr = 1;
  var n = dr, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, c) {
    var h, d = {}, u = null, f = null;
    c !== void 0 && (u = "" + c), l.key !== void 0 && (u = "" + l.key), l.ref !== void 0 && (f = l.ref);
    for (h in l)
      i.call(l, h) && !o.hasOwnProperty(h) && (d[h] = l[h]);
    if (a && a.defaultProps)
      for (h in l = a.defaultProps, l)
        d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: t, type: a, key: u, ref: f, props: d, _owner: s.current };
  }
  return Fe.Fragment = e, Fe.jsx = r, Fe.jsxs = r, Fe;
}
var ze = {}, cr;
function ig() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = dr, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), g = Symbol.iterator, p = "@@iterator";
    function b(m) {
      if (m === null || typeof m != "object")
        return null;
      var S = g && m[g] || m[p];
      return typeof S == "function" ? S : null;
    }
    var x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(m) {
      {
        for (var S = arguments.length, D = new Array(S > 1 ? S - 1 : 0), T = 1; T < S; T++)
          D[T - 1] = arguments[T];
        w("error", m, D);
      }
    }
    function w(m, S, D) {
      {
        var T = x.ReactDebugCurrentFrame, V = T.getStackAddendum();
        V !== "" && (S += "%s", D = D.concat([V]));
        var U = D.map(function(B) {
          return String(B);
        });
        U.unshift("Warning: " + S), Function.prototype.apply.call(console[m], console, U);
      }
    }
    var v = !1, _ = !1, M = !1, C = !1, k = !1, P;
    P = Symbol.for("react.module.reference");
    function E(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === i || m === o || k || m === s || m === c || m === h || C || m === f || v || _ || M || typeof m == "object" && m !== null && (m.$$typeof === u || m.$$typeof === d || m.$$typeof === r || m.$$typeof === a || m.$$typeof === l || m.$$typeof === P || m.getModuleId !== void 0));
    }
    function A(m, S, D) {
      var T = m.displayName;
      if (T)
        return T;
      var V = S.displayName || S.name || "";
      return V !== "" ? D + "(" + V + ")" : D;
    }
    function L(m) {
      return m.displayName || "Context";
    }
    function j(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
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
        case h:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case a:
            var S = m;
            return L(S) + ".Consumer";
          case r:
            var D = m;
            return L(D._context) + ".Provider";
          case l:
            return A(m, m.render, "ForwardRef");
          case d:
            var T = m.displayName || null;
            return T !== null ? T : j(m.type) || "Memo";
          case u: {
            var V = m, U = V._payload, B = V._init;
            try {
              return j(B(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, F = 0, H, X, lt, Q, xt, kt, yt;
    function St() {
    }
    St.__reactDisabledLog = !0;
    function Ct() {
      {
        if (F === 0) {
          H = console.log, X = console.info, lt = console.warn, Q = console.error, xt = console.group, kt = console.groupCollapsed, yt = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: St,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        F++;
      }
    }
    function Pt() {
      {
        if (F--, F === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, m, {
              value: H
            }),
            info: G({}, m, {
              value: X
            }),
            warn: G({}, m, {
              value: lt
            }),
            error: G({}, m, {
              value: Q
            }),
            group: G({}, m, {
              value: xt
            }),
            groupCollapsed: G({}, m, {
              value: kt
            }),
            groupEnd: G({}, m, {
              value: yt
            })
          });
        }
        F < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var _t = x.ReactCurrentDispatcher, fe;
    function Qt(m, S, D) {
      {
        if (fe === void 0)
          try {
            throw Error();
          } catch (V) {
            var T = V.stack.trim().match(/\n( *(at )?)/);
            fe = T && T[1] || "";
          }
        return `
` + fe + m;
      }
    }
    var ri = !1, xn;
    {
      var Ta = typeof WeakMap == "function" ? WeakMap : Map;
      xn = new Ta();
    }
    function us(m, S) {
      if (!m || ri)
        return "";
      {
        var D = xn.get(m);
        if (D !== void 0)
          return D;
      }
      var T;
      ri = !0;
      var V = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = _t.current, _t.current = null, Ct();
      try {
        if (S) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (Et) {
              T = Et;
            }
            Reflect.construct(m, [], B);
          } else {
            try {
              B.call();
            } catch (Et) {
              T = Et;
            }
            m.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Et) {
            T = Et;
          }
          m();
        }
      } catch (Et) {
        if (Et && T && typeof Et.stack == "string") {
          for (var z = Et.stack.split(`
`), ut = T.stack.split(`
`), nt = z.length - 1, st = ut.length - 1; nt >= 1 && st >= 0 && z[nt] !== ut[st]; )
            st--;
          for (; nt >= 1 && st >= 0; nt--, st--)
            if (z[nt] !== ut[st]) {
              if (nt !== 1 || st !== 1)
                do
                  if (nt--, st--, st < 0 || z[nt] !== ut[st]) {
                    var vt = `
` + z[nt].replace(" at new ", " at ");
                    return m.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", m.displayName)), typeof m == "function" && xn.set(m, vt), vt;
                  }
                while (nt >= 1 && st >= 0);
              break;
            }
        }
      } finally {
        ri = !1, _t.current = U, Pt(), Error.prepareStackTrace = V;
      }
      var pe = m ? m.displayName || m.name : "", ks = pe ? Qt(pe) : "";
      return typeof m == "function" && xn.set(m, ks), ks;
    }
    function La(m, S, D) {
      return us(m, !1);
    }
    function Ia(m) {
      var S = m.prototype;
      return !!(S && S.isReactComponent);
    }
    function yn(m, S, D) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return us(m, Ia(m));
      if (typeof m == "string")
        return Qt(m);
      switch (m) {
        case c:
          return Qt("Suspense");
        case h:
          return Qt("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case l:
            return La(m.render);
          case d:
            return yn(m.type, S, D);
          case u: {
            var T = m, V = T._payload, U = T._init;
            try {
              return yn(U(V), S, D);
            } catch {
            }
          }
        }
      return "";
    }
    var _n = Object.prototype.hasOwnProperty, fs = {}, gs = x.ReactDebugCurrentFrame;
    function vn(m) {
      if (m) {
        var S = m._owner, D = yn(m.type, m._source, S ? S.type : null);
        gs.setExtraStackFrame(D);
      } else
        gs.setExtraStackFrame(null);
    }
    function Fa(m, S, D, T, V) {
      {
        var U = Function.call.bind(_n);
        for (var B in m)
          if (U(m, B)) {
            var z = void 0;
            try {
              if (typeof m[B] != "function") {
                var ut = Error((T || "React class") + ": " + D + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ut.name = "Invariant Violation", ut;
              }
              z = m[B](S, B, T, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (nt) {
              z = nt;
            }
            z && !(z instanceof Error) && (vn(V), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", D, B, typeof z), vn(null)), z instanceof Error && !(z.message in fs) && (fs[z.message] = !0, vn(V), y("Failed %s type: %s", D, z.message), vn(null));
          }
      }
    }
    var za = Array.isArray;
    function ai(m) {
      return za(m);
    }
    function Ba(m) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, D = S && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return D;
      }
    }
    function Wa(m) {
      try {
        return ps(m), !1;
      } catch {
        return !0;
      }
    }
    function ps(m) {
      return "" + m;
    }
    function ms(m) {
      if (Wa(m))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ba(m)), ps(m);
    }
    var Ae = x.ReactCurrentOwner, ja = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bs, xs, li;
    li = {};
    function Va(m) {
      if (_n.call(m, "ref")) {
        var S = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Na(m) {
      if (_n.call(m, "key")) {
        var S = Object.getOwnPropertyDescriptor(m, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function Ha(m, S) {
      if (typeof m.ref == "string" && Ae.current && S && Ae.current.stateNode !== S) {
        var D = j(Ae.current.type);
        li[D] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Ae.current.type), m.ref), li[D] = !0);
      }
    }
    function Ya(m, S) {
      {
        var D = function() {
          bs || (bs = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        D.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: D,
          configurable: !0
        });
      }
    }
    function $a(m, S) {
      {
        var D = function() {
          xs || (xs = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        D.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: D,
          configurable: !0
        });
      }
    }
    var Xa = function(m, S, D, T, V, U, B) {
      var z = {
        $$typeof: t,
        type: m,
        key: S,
        ref: D,
        props: B,
        _owner: U
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: V
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Ua(m, S, D, T, V) {
      {
        var U, B = {}, z = null, ut = null;
        D !== void 0 && (ms(D), z = "" + D), Na(S) && (ms(S.key), z = "" + S.key), Va(S) && (ut = S.ref, Ha(S, V));
        for (U in S)
          _n.call(S, U) && !ja.hasOwnProperty(U) && (B[U] = S[U]);
        if (m && m.defaultProps) {
          var nt = m.defaultProps;
          for (U in nt)
            B[U] === void 0 && (B[U] = nt[U]);
        }
        if (z || ut) {
          var st = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          z && Ya(B, st), ut && $a(B, st);
        }
        return Xa(m, z, ut, V, T, Ae.current, B);
      }
    }
    var ci = x.ReactCurrentOwner, ys = x.ReactDebugCurrentFrame;
    function ge(m) {
      if (m) {
        var S = m._owner, D = yn(m.type, m._source, S ? S.type : null);
        ys.setExtraStackFrame(D);
      } else
        ys.setExtraStackFrame(null);
    }
    var hi;
    hi = !1;
    function di(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function _s() {
      {
        if (ci.current) {
          var m = j(ci.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ka(m) {
      {
        if (m !== void 0) {
          var S = m.fileName.replace(/^.*[\\\/]/, ""), D = m.lineNumber;
          return `

Check your code at ` + S + ":" + D + ".";
        }
        return "";
      }
    }
    var vs = {};
    function qa(m) {
      {
        var S = _s();
        if (!S) {
          var D = typeof m == "string" ? m : m.displayName || m.name;
          D && (S = `

Check the top-level render call using <` + D + ">.");
        }
        return S;
      }
    }
    function ws(m, S) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var D = qa(S);
        if (vs[D])
          return;
        vs[D] = !0;
        var T = "";
        m && m._owner && m._owner !== ci.current && (T = " It was passed a child from " + j(m._owner.type) + "."), ge(m), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, T), ge(null);
      }
    }
    function Ss(m, S) {
      {
        if (typeof m != "object")
          return;
        if (ai(m))
          for (var D = 0; D < m.length; D++) {
            var T = m[D];
            di(T) && ws(T, S);
          }
        else if (di(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var V = b(m);
          if (typeof V == "function" && V !== m.entries)
            for (var U = V.call(m), B; !(B = U.next()).done; )
              di(B.value) && ws(B.value, S);
        }
      }
    }
    function Ga(m) {
      {
        var S = m.type;
        if (S == null || typeof S == "string")
          return;
        var D;
        if (typeof S == "function")
          D = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || S.$$typeof === d))
          D = S.propTypes;
        else
          return;
        if (D) {
          var T = j(S);
          Fa(D, m.props, "prop", T, m);
        } else if (S.PropTypes !== void 0 && !hi) {
          hi = !0;
          var V = j(S);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", V || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ja(m) {
      {
        for (var S = Object.keys(m.props), D = 0; D < S.length; D++) {
          var T = S[D];
          if (T !== "children" && T !== "key") {
            ge(m), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), ge(null);
            break;
          }
        }
        m.ref !== null && (ge(m), y("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    function Ms(m, S, D, T, V, U) {
      {
        var B = E(m);
        if (!B) {
          var z = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ut = Ka(V);
          ut ? z += ut : z += _s();
          var nt;
          m === null ? nt = "null" : ai(m) ? nt = "array" : m !== void 0 && m.$$typeof === t ? (nt = "<" + (j(m.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : nt = typeof m, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", nt, z);
        }
        var st = Ua(m, S, D, V, U);
        if (st == null)
          return st;
        if (B) {
          var vt = S.children;
          if (vt !== void 0)
            if (T)
              if (ai(vt)) {
                for (var pe = 0; pe < vt.length; pe++)
                  Ss(vt[pe], m);
                Object.freeze && Object.freeze(vt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ss(vt, m);
        }
        return m === i ? Ja(st) : Ga(st), st;
      }
    }
    function Za(m, S, D) {
      return Ms(m, S, D, !0);
    }
    function Qa(m, S, D) {
      return Ms(m, S, D, !1);
    }
    var tl = Qa, el = Za;
    ze.Fragment = i, ze.jsx = tl, ze.jsxs = el;
  }()), ze;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = ng() : n.exports = ig();
})(ds);
const sg = ds.exports.Fragment, tn = ds.exports.jsx, Aa = "label";
function hr(n, t) {
  typeof n == "function" ? n(t) : n && (n.current = t);
}
function og(n, t) {
  const e = n.options;
  e && t && Object.assign(e, t);
}
function Ea(n, t) {
  n.labels = t;
}
function Ra(n, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Aa;
  const i = [];
  n.datasets = t.map((s) => {
    const o = n.datasets.find((r) => r[e] === s[e]);
    return !o || !s.data || i.includes(o) ? {
      ...s
    } : (i.push(o), Object.assign(o, s), o);
  });
}
function rg(n) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Aa;
  const e = {
    labels: [],
    datasets: []
  };
  return Ea(e, n.labels), Ra(e, n.datasets, t), e;
}
function ag(n, t) {
  const {
    height: e = 150,
    width: i = 300,
    redraw: s = !1,
    datasetIdKey: o,
    type: r,
    data: a,
    options: l,
    plugins: c = [],
    fallbackContent: h,
    updateMode: d,
    ...u
  } = n, f = Ci(null), g = Ci(), p = () => {
    !f.current || (g.current = new bt(f.current, {
      type: r,
      data: rg(a, o),
      options: l && {
        ...l
      },
      plugins: c
    }), hr(t, g.current));
  }, b = () => {
    hr(t, null), g.current && (g.current.destroy(), g.current = null);
  };
  return se(() => {
    !s && g.current && l && og(g.current, l);
  }, [s, l]), se(() => {
    !s && g.current && Ea(g.current.config.data, a.labels);
  }, [s, a.labels]), se(() => {
    !s && g.current && a.datasets && Ra(g.current.config.data, a.datasets, o);
  }, [s, a.datasets]), se(() => {
    !g.current || (s ? (b(), setTimeout(p)) : g.current.update(d));
  }, [s, l, a.labels, a.datasets, d]), se(() => {
    !g.current || (b(), setTimeout(p));
  }, [r]), se(() => (p(), () => b()), []), tn("canvas", {
    ...Object.assign({
      ref: f,
      role: "img",
      height: e,
      width: i
    }, u),
    children: h
  });
}
const lg = ur(ag);
function Zt(n, t) {
  return bt.register(t), ur((e, i) => tn(lg, {
    ...Object.assign({}, e, {
      ref: i,
      type: n
    })
  }));
}
const cg = Zt("line", Ge);
Zt("bar", Ke);
Zt("radar", Je);
Zt("doughnut", Ht);
Zt("polarArea", ye);
Zt("bubble", qe);
Zt("pie", Un);
Zt("scatter", Ze);
const hg = (n) => {
  var e, i;
  let t = (e = n.canvas.parentNode) == null ? void 0 : e.querySelector("div");
  return t || (t = document.createElement("div"), t.id = "chartjs-tooltip", t.style.borderRadius = "3px", t.style.color = "white", t.style.opacity = "1", t.style.pointerEvents = "none", t.style.position = "absolute", t.style.top = "0", t.style.transition = "all .2s ease-in-out", t.style.height = "100%", (i = n.canvas.parentNode) == null || i.appendChild(t)), t;
}, dg = (n, t) => {
  const e = document.createElement("span"), i = document.createElement("img");
  i.src = "/arrow.png", i.style.display = "inline-block", i.style.marginLeft = "0.5em", i.style.width = "14px", i.style.height = "14px", i.style.position = "relative", i.style.top = "2px", t > 0 && (i.style.transform = "rotate(180deg)");
  const s = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    notation: "compact"
  }).format(Math.abs(t)).toString();
  e.style.color = "rgb(206, 228, 212)", e.style.display = "inline-block", e.appendChild(i), e.appendChild(document.createTextNode(s)), n.appendChild(e);
}, ug = (n) => {
  const {
    chart: t,
    tooltip: e
  } = n, i = hg(t);
  t.getActiveElements().length === 0 ? i.style.opacity = "0" : i.style.opacity = "1";
  const {
    offsetLeft: s
  } = t.canvas;
  i.style.left = s + e.caretX + 10 + "px";
  const o = et(e.options.bodyFont);
  i.style.fontFamily = o.family, i.style.fontSize = `${o.size}px` || "14px", i.style.lineHeight = `${o.lineHeight}px` || "120%", i.style.padding = e.options.padding + "px " + e.options.padding + "px", e.body && (Array.from(i.children).forEach((r) => r.remove()), e.body.forEach((r, a) => {
    if (!t.getActiveElements()[a] && e.opacity === 0)
      return;
    const l = r.lines, c = document.createElement("table");
    c.style.backgroundColor = t.getActiveElements()[a].element.options.borderColor, c.style.borderRadius = "2px", c.style.marginBottom = "20px", c.style.padding = "0 2px", c.style.position = "absolute", i.appendChild(c);
    const h = document.createElement("tbody");
    l.forEach((u, f) => {
      const g = document.createTextNode(u), p = document.createElement("tr");
      p.style.backgroundColor = "inherit", p.style.borderWidth = "0";
      const b = document.createElement("td");
      b.style.borderWidth = "0", b.style.whiteSpace = "nowrap", b.appendChild(g);
      const x = t.getActiveElements()[a].index, y = t.data.datasets[a].data.at(x), w = t.data.datasets[a].data.at(x - 1);
      if (![y, w].includes(null)) {
        const M = (y || 0) - (w || 0);
        x > -1 && f === 1 && (M === 0 || dg(b, M));
      }
      p.appendChild(b), h && h.appendChild(p), c.appendChild(h);
    });
    const d = c.getBoundingClientRect().width;
    c.style.top = t.getActiveElements()[a].element.y - c.getBoundingClientRect().height / 2 + "px", c.style.left = e.caretX > t.canvas.getBoundingClientRect().width / 2 ? `${-1 * d - 20}px` : "0";
  }));
}, jt = {
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
}, ki = {
  aspectRatio: 1.33,
  mouseLine: {
    color: "rgb(77, 76, 76)"
  },
  responsive: !0,
  elements: {
    line: {
      ...jt.line,
      borderWidth: 2,
      fill: "start"
    },
    point: {
      ...jt.point,
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
      external: ug
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
}, fg = {
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
bt.register(Jn, Qn, Qe, Bt, da, fa, ha, la, tg);
const gg = ({
  data: n,
  options: t,
  chartTheme: e
}) => {
  var b, x, y, w, v, _, M, C;
  const i = Ci(null);
  Z.font = {
    family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif",
    size: 14
  };
  const s = {
    labels: n.labels,
    datasets: [...n.datasets.map((k, P) => {
      var E, A, L, j, G, F, H, X, lt, Q, xt, kt, yt, St, Ct, Pt, _t, fe, Qt;
      return {
        backgroundColor: ((E = e == null ? void 0 : e.colors) == null ? void 0 : E[P].fill) || ((L = (A = t == null ? void 0 : t.elements) == null ? void 0 : A.line) == null ? void 0 : L.backgroundColor) || jt.line.backgroundColors[P],
        borderColor: ((j = e == null ? void 0 : e.colors) == null ? void 0 : j[P].line) || ((F = (G = t == null ? void 0 : t.elements) == null ? void 0 : G.line) == null ? void 0 : F.borderColor) || jt.line.borderColors[P],
        pointBorderColor: ((H = e == null ? void 0 : e.colors) == null ? void 0 : H[P].point) || ((lt = (X = t == null ? void 0 : t.elements) == null ? void 0 : X.point) == null ? void 0 : lt.borderColor) || jt.point.borderColors[P],
        pointHoverBorderColor: ((Q = e == null ? void 0 : e.colors) == null ? void 0 : Q[P].point) || ((kt = (xt = t == null ? void 0 : t.elements) == null ? void 0 : xt.point) == null ? void 0 : kt.borderColor) || ((yt = jt.point) == null ? void 0 : yt.hoverBorderColors[P]),
        pointHoverBackgroundColor: ((St = e == null ? void 0 : e.colors) == null ? void 0 : St[P].point) || ((Pt = (Ct = t == null ? void 0 : t.elements) == null ? void 0 : Ct.point) == null ? void 0 : Pt.backgroundColor) || jt.point.hoverBackgroundColors[P],
        pointBackgroundColor: ((_t = e == null ? void 0 : e.colors) == null ? void 0 : _t[P].point) || ((Qt = (fe = t == null ? void 0 : t.elements) == null ? void 0 : fe.point) == null ? void 0 : Qt.backgroundColor) || jt.point.backgroundColor,
        ...k
      };
    })]
  }, o = {
    plugins: {
      ...ki.plugins,
      ...t == null ? void 0 : t.plugins,
      tooltip: {
        ...(b = ki.plugins) == null ? void 0 : b.tooltip,
        ...(x = t == null ? void 0 : t.plugins) == null ? void 0 : x.tooltip,
        titleFont: {
          family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif"
        },
        bodyFont: {
          family: (e == null ? void 0 : e.font) || "'Nunito Sans', sans-serif"
        }
      }
    }
  }, [r] = Cs({
    ...ki,
    ...t,
    ...o
  }), [a, l] = Cs(-1);
  se(() => {
    if (i.current == null || a === -1)
      return;
    const k = i.current;
    k.setActiveElements([{
      datasetIndex: 0,
      index: a
    }, {
      datasetIndex: 1,
      index: a
    }]);
    const P = k.options, E = k.getActiveElements();
    P.mouseLine && E[0] && (P.mouseLine.x = E[0].element.x), k.update();
  }, [a]);
  const c = function(k) {
    return k.length ? k[0].index : -1;
  }, h = function(k, P) {
    const E = k.canvas, A = E.getBoundingClientRect(), L = new MouseEvent("click", {
      clientX: A.left + P.x,
      clientY: A.top + P.y,
      cancelable: !0,
      bubbles: !0
    });
    E.dispatchEvent(L);
  }, d = ({
    code: k
  }) => {
    const P = i.current;
    if (P == null)
      return;
    const E = P.getActiveElements();
    if (k === "ArrowRight") {
      const A = c(E) + 1, L = A === P.data.datasets[0].data.length ? 0 : A;
      l(L);
    } else if (k === "ArrowLeft") {
      const A = c(E) - 1, L = A < 0 ? P.data.datasets[0].data.length - 1 : A;
      l(L);
    } else if (k === "Enter" && E.length) {
      const A = E[0], j = P.getDatasetMeta(A.datasetIndex).data[A.index];
      h(P, j);
    }
  }, u = [(((y = i.current) == null ? void 0 : y.data.datasets[0].data[a]) || "unavailable").toString(), (((w = i.current) == null ? void 0 : w.data.datasets[1].data[a]) || "unavailable").toString()], f = ((v = i.current) == null ? void 0 : v.data.labels) != null ? (_ = i.current) == null ? void 0 : _.data.labels[a] : "null", g = [(M = i.current) == null ? void 0 : M.data.datasets[0].label, (C = i.current) == null ? void 0 : C.data.datasets[1].label], p = a > -1 ? `${f} ${g[0]} ${u[0]}. ${g[1]} ${u[1]}.` : "";
  return tn(sg, {
    children: tn(sl, {
      className: "text",
      sx: {
        position: "relative",
        width: "100%"
      },
      children: tn(cg, {
        data: s,
        options: r,
        plugins: [fg],
        "aria-label": p,
        "aria-live": "assertive",
        ref: i,
        onKeyUp: d,
        onBlur: () => l(-1),
        onFocus: () => l(0),
        tabIndex: 0
      })
    })
  });
};
gg.displayName = "LineChart";
export {
  gg as LineChart
};
