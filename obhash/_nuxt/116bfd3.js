(window.webpackJsonp = window.webpackJsonp || []).push([[10], {
    503: function(e, t, n) {
        e.exports = n.p + "img/logo-en.fe2abba.png"
    },
    504: function(e, t, n) {
        e.exports = n.p + "img/logo-zh-CN.a05a386.png"
    },
    513: function(e, t, n) {
        e.exports = n.p + "img/platform_imtoken.5067268.png"
    },
    514: function(e, t, n) {
        e.exports = n.p + "img/platform_ownbit.528ec63.png"
    },
    515: function(e, t, n) {
        e.exports = n.p + "img/platform_trustwallet.b3f73ef.png"
    },
    516: function(e, t, n) {
        e.exports = n.p + "img/platform_tronlink.0b60510.png"
    },
    517: function(e, t, n) {
        e.exports = n.p + "img/platform_bitpie.62cd260.png"
    },
    518: function(e, t, n) {
        e.exports = n.p + "img/platform_huobi.9c6eb54.png"
    },
    521: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAARVBMVEX///8AAAD/2aT/26T/58H/////26X/////////////4LP/+Ov/3ar/89n/3qz/4LH/5Lv/3Kf/4K//3Kn/6cf/26b/4rZVXISDAAAAF3RSTlMaAKOfPhWXDwYJWSB5KW5fRoZmfDeOUWSn994AAAF1SURBVEjHnZbZsoMgDEDTsCsqLvX/P/WirTdhqcx4nuhwJsaSEOGVY42CE2VssZnpzkCCcTe6gwruh24VVFG2phv4iSl1BTco0otE7hICHrsdH7jd9oHesoG5dAucPozze4uLXeCJWD4b9qsrLi/6UPa49PhFUDqQnmU4ZO27Pq6HLrKSDu7Umd3FTS+BkILph8uDT4haQmqLlXQXdUObiO8ht2VHuok6vaVGXdrA9Chbnoos7US3YP6DC/SlneoG1LUMiFvFhsHvVAm0P6Iu7Btm9G2b0LjAxda0QeBEiTG734dm9HFjhTG3cuf4RFfFP1M8dSSZjilkh0qFFNgxWXaqazUX3bMieGU1UwZf6BcVMFUkZ9A8uEnaI1z1TvabZw4ubb4u6yapETsgqLWpV1d5yUdbT8x2xcUhPzfBMi1eY/YsVbmW+knghZh6YNjqpdfLcdZCz2NIZDCPrlTyG/bjcdAeNs9HWXtQPh/Dz4d8+xPiD94uDFgx+YWIAAAAAElFTkSuQmCC"
    },
    525: function(e, t, n) {
        "use strict";
        n(78),
        n(46),
        n(92),
        n(93);
        var a = n(47)
          , o = (n(59),
        n(526))
          , r = n.n(o)
          , i = n(101);
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, a)
            }
            return n
        }
        function l(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    Object(a.a)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        t.a = {
            data: function() {
                return {
                    selected: "",
                    group: ""
                }
            },
            computed: l(l({}, Object(i.b)(["langs"])), {}, {
                langMapEncode: function() {
                    return {
                        cn: "zh-CN",
                        en: "en"
                    }
                },
                langMapDecode: function() {
                    return {
                        cn: "cn",
                        "zh-CN": "cn",
                        en: "en"
                    }
                }
            }),
            created: function() {
                var e = this;
                this.selected = this.langs.filter((function(t) {
                    return t.code === e.$i18n.locale
                }
                ))[0],
                this.$nextTick((function() {
                    document.title = e.$t("meta.title")
                }
                ))
            },
            methods: {
                changeLang: function(e) {
                    var t = e.code;
                    switch (t.toLowerCase()) {
                    case "cn":
                    case "zh-cn":
                        r.a.locale("zh-cn");
                        break;
                    case "tw":
                    case "zh-tw":
                        r.a.locale("zh-tw");
                        break;
                    default:
                        r.a.locale(t.toLowerCase())
                    }
                    this.$i18n.locale = t,
                    this.$store.commit("SET_LANG", t),
                    document.title = this.$t("meta.title")
                }
            }
        }
    },
    526: function(e, t, n) {
        e.exports = function() {
            "use strict";
            var e = 1e3
              , t = 6e4
              , n = 36e5
              , a = "millisecond"
              , o = "second"
              , r = "minute"
              , i = "hour"
              , s = "day"
              , l = "week"
              , d = "month"
              , c = "quarter"
              , p = "year"
              , m = "date"
              , u = "Invalid Date"
              , h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
              , g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
              , f = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            }
              , v = function(e, t, n) {
                var a = String(e);
                return !a || a.length >= t ? e : "" + Array(t + 1 - a.length).join(n) + e
            }
              , b = {
                s: v,
                z: function(e) {
                    var t = -e.utcOffset()
                      , n = Math.abs(t)
                      , a = Math.floor(n / 60)
                      , o = n % 60;
                    return (t <= 0 ? "+" : "-") + v(a, 2, "0") + ":" + v(o, 2, "0")
                },
                m: function e(t, n) {
                    if (t.date() < n.date())
                        return -e(n, t);
                    var a = 12 * (n.year() - t.year()) + (n.month() - t.month())
                      , o = t.clone().add(a, d)
                      , r = n - o < 0
                      , i = t.clone().add(a + (r ? -1 : 1), d);
                    return +(-(a + (n - o) / (r ? o - i : i - o)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(e) {
                    return {
                        M: d,
                        y: p,
                        w: l,
                        d: s,
                        D: m,
                        h: i,
                        m: r,
                        s: o,
                        ms: a,
                        Q: c
                    }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            }
              , w = "en"
              , A = {};
            A[w] = f;
            var y = function(e) {
                return e instanceof _
            }
              , x = function e(t, n, a) {
                var o;
                if (!t)
                    return w;
                if ("string" == typeof t) {
                    var r = t.toLowerCase();
                    A[r] && (o = r),
                    n && (A[r] = n,
                    o = r);
                    var i = t.split("-");
                    if (!o && i.length > 1)
                        return e(i[0])
                } else {
                    var s = t.name;
                    A[s] = t,
                    o = s
                }
                return !a && o && (w = o),
                o || !a && w
            }
              , k = function(e, t) {
                if (y(e))
                    return e.clone();
                var n = "object" == typeof t ? t : {};
                return n.date = e,
                n.args = arguments,
                new _(n)
            }
              , C = b;
            C.l = x,
            C.i = y,
            C.w = function(e, t) {
                return k(e, {
                    locale: t.$L,
                    utc: t.$u,
                    x: t.$x,
                    $offset: t.$offset
                })
            }
            ;
            var _ = function() {
                function f(e) {
                    this.$L = x(e.locale, null, !0),
                    this.parse(e)
                }
                var v = f.prototype;
                return v.parse = function(e) {
                    this.$d = function(e) {
                        var t = e.date
                          , n = e.utc;
                        if (null === t)
                            return new Date(NaN);
                        if (C.u(t))
                            return new Date;
                        if (t instanceof Date)
                            return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                            var a = t.match(h);
                            if (a) {
                                var o = a[2] - 1 || 0
                                  , r = (a[7] || "0").substring(0, 3);
                                return n ? new Date(Date.UTC(a[1], o, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, r)) : new Date(a[1],o,a[3] || 1,a[4] || 0,a[5] || 0,a[6] || 0,r)
                            }
                        }
                        return new Date(t)
                    }(e),
                    this.$x = e.x || {},
                    this.init()
                }
                ,
                v.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(),
                    this.$M = e.getMonth(),
                    this.$D = e.getDate(),
                    this.$W = e.getDay(),
                    this.$H = e.getHours(),
                    this.$m = e.getMinutes(),
                    this.$s = e.getSeconds(),
                    this.$ms = e.getMilliseconds()
                }
                ,
                v.$utils = function() {
                    return C
                }
                ,
                v.isValid = function() {
                    return !(this.$d.toString() === u)
                }
                ,
                v.isSame = function(e, t) {
                    var n = k(e);
                    return this.startOf(t) <= n && n <= this.endOf(t)
                }
                ,
                v.isAfter = function(e, t) {
                    return k(e) < this.startOf(t)
                }
                ,
                v.isBefore = function(e, t) {
                    return this.endOf(t) < k(e)
                }
                ,
                v.$g = function(e, t, n) {
                    return C.u(e) ? this[t] : this.set(n, e)
                }
                ,
                v.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }
                ,
                v.valueOf = function() {
                    return this.$d.getTime()
                }
                ,
                v.startOf = function(e, t) {
                    var n = this
                      , a = !!C.u(t) || t
                      , c = C.p(e)
                      , u = function(e, t) {
                        var o = C.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y,t,e), n);
                        return a ? o : o.endOf(s)
                    }
                      , h = function(e, t) {
                        return C.w(n.toDate()[e].apply(n.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                    }
                      , g = this.$W
                      , f = this.$M
                      , v = this.$D
                      , b = "set" + (this.$u ? "UTC" : "");
                    switch (c) {
                    case p:
                        return a ? u(1, 0) : u(31, 11);
                    case d:
                        return a ? u(1, f) : u(0, f + 1);
                    case l:
                        var w = this.$locale().weekStart || 0
                          , A = (g < w ? g + 7 : g) - w;
                        return u(a ? v - A : v + (6 - A), f);
                    case s:
                    case m:
                        return h(b + "Hours", 0);
                    case i:
                        return h(b + "Minutes", 1);
                    case r:
                        return h(b + "Seconds", 2);
                    case o:
                        return h(b + "Milliseconds", 3);
                    default:
                        return this.clone()
                    }
                }
                ,
                v.endOf = function(e) {
                    return this.startOf(e, !1)
                }
                ,
                v.$set = function(e, t) {
                    var n, l = C.p(e), c = "set" + (this.$u ? "UTC" : ""), u = (n = {},
                    n[s] = c + "Date",
                    n[m] = c + "Date",
                    n[d] = c + "Month",
                    n[p] = c + "FullYear",
                    n[i] = c + "Hours",
                    n[r] = c + "Minutes",
                    n[o] = c + "Seconds",
                    n[a] = c + "Milliseconds",
                    n)[l], h = l === s ? this.$D + (t - this.$W) : t;
                    if (l === d || l === p) {
                        var g = this.clone().set(m, 1);
                        g.$d[u](h),
                        g.init(),
                        this.$d = g.set(m, Math.min(this.$D, g.daysInMonth())).$d
                    } else
                        u && this.$d[u](h);
                    return this.init(),
                    this
                }
                ,
                v.set = function(e, t) {
                    return this.clone().$set(e, t)
                }
                ,
                v.get = function(e) {
                    return this[C.p(e)]()
                }
                ,
                v.add = function(a, c) {
                    var m, u = this;
                    a = Number(a);
                    var h = C.p(c)
                      , g = function(e) {
                        var t = k(u);
                        return C.w(t.date(t.date() + Math.round(e * a)), u)
                    };
                    if (h === d)
                        return this.set(d, this.$M + a);
                    if (h === p)
                        return this.set(p, this.$y + a);
                    if (h === s)
                        return g(1);
                    if (h === l)
                        return g(7);
                    var f = (m = {},
                    m[r] = t,
                    m[i] = n,
                    m[o] = e,
                    m)[h] || 1
                      , v = this.$d.getTime() + a * f;
                    return C.w(v, this)
                }
                ,
                v.subtract = function(e, t) {
                    return this.add(-1 * e, t)
                }
                ,
                v.format = function(e) {
                    var t = this
                      , n = this.$locale();
                    if (!this.isValid())
                        return n.invalidDate || u;
                    var a = e || "YYYY-MM-DDTHH:mm:ssZ"
                      , o = C.z(this)
                      , r = this.$H
                      , i = this.$m
                      , s = this.$M
                      , l = n.weekdays
                      , d = n.months
                      , c = function(e, n, o, r) {
                        return e && (e[n] || e(t, a)) || o[n].slice(0, r)
                    }
                      , p = function(e) {
                        return C.s(r % 12 || 12, e, "0")
                    }
                      , m = n.meridiem || function(e, t, n) {
                        var a = e < 12 ? "AM" : "PM";
                        return n ? a.toLowerCase() : a
                    }
                      , h = {
                        YY: String(this.$y).slice(-2),
                        YYYY: this.$y,
                        M: s + 1,
                        MM: C.s(s + 1, 2, "0"),
                        MMM: c(n.monthsShort, s, d, 3),
                        MMMM: c(d, s),
                        D: this.$D,
                        DD: C.s(this.$D, 2, "0"),
                        d: String(this.$W),
                        dd: c(n.weekdaysMin, this.$W, l, 2),
                        ddd: c(n.weekdaysShort, this.$W, l, 3),
                        dddd: l[this.$W],
                        H: String(r),
                        HH: C.s(r, 2, "0"),
                        h: p(1),
                        hh: p(2),
                        a: m(r, i, !0),
                        A: m(r, i, !1),
                        m: String(i),
                        mm: C.s(i, 2, "0"),
                        s: String(this.$s),
                        ss: C.s(this.$s, 2, "0"),
                        SSS: C.s(this.$ms, 3, "0"),
                        Z: o
                    };
                    return a.replace(g, (function(e, t) {
                        return t || h[e] || o.replace(":", "")
                    }
                    ))
                }
                ,
                v.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }
                ,
                v.diff = function(a, m, u) {
                    var h, g = C.p(m), f = k(a), v = (f.utcOffset() - this.utcOffset()) * t, b = this - f, w = C.m(this, f);
                    return w = (h = {},
                    h[p] = w / 12,
                    h[d] = w,
                    h[c] = w / 3,
                    h[l] = (b - v) / 6048e5,
                    h[s] = (b - v) / 864e5,
                    h[i] = b / n,
                    h[r] = b / t,
                    h[o] = b / e,
                    h)[g] || b,
                    u ? w : C.a(w)
                }
                ,
                v.daysInMonth = function() {
                    return this.endOf(d).$D
                }
                ,
                v.$locale = function() {
                    return A[this.$L]
                }
                ,
                v.locale = function(e, t) {
                    if (!e)
                        return this.$L;
                    var n = this.clone()
                      , a = x(e, t, !0);
                    return a && (n.$L = a),
                    n
                }
                ,
                v.clone = function() {
                    return C.w(this.$d, this)
                }
                ,
                v.toDate = function() {
                    return new Date(this.valueOf())
                }
                ,
                v.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }
                ,
                v.toISOString = function() {
                    return this.$d.toISOString()
                }
                ,
                v.toString = function() {
                    return this.$d.toUTCString()
                }
                ,
                f
            }()
              , M = _.prototype;
            return k.prototype = M,
            [["$ms", a], ["$s", o], ["$m", r], ["$H", i], ["$W", s], ["$M", d], ["$y", p], ["$D", m]].forEach((function(e) {
                M[e[1]] = function(t) {
                    return this.$g(t, e[0], e[1])
                }
            }
            )),
            k.extend = function(e, t) {
                return e.$i || (e(t, _, k),
                e.$i = !0),
                k
            }
            ,
            k.locale = x,
            k.isDayjs = y,
            k.unix = function(e) {
                return k(1e3 * e)
            }
            ,
            k.en = A[w],
            k.Ls = A,
            k.p = {},
            k
        }()
    },
    527: function(e, t, n) {
        e.exports = n.p + "img/platform_zb.5340eff.png"
    },
    528: function(e, t, n) {
        e.exports = n.p + "img/platform_binance.ccd7a40.png"
    },
    529: function(e, t, n) {
        e.exports = n.p + "img/platform_okex.f68d12c.png"
    },
    530: function(e, t, n) {
        e.exports = n.p + "img/platform_gate.8338574.png"
    },
    531: function(e, t, n) {
        e.exports = n.p + "img/platform_tokenpocket.412474d.png"
    },
    548: function(e, t, n) {
        var a = n(595);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(44).default)("892b1434", a, !0, {
            sourceMap: !1
        })
    },
    549: function(e, t, n) {
        var a = n(597);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(44).default)("a660b128", a, !0, {
            sourceMap: !1
        })
    },
    553: function(e, t, n) {
        var a = n(620);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(44).default)("03b48b3d", a, !0, {
            sourceMap: !1
        })
    },
    554: function(e, t, n) {
        var a = n(627);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(44).default)("eccc1e40", a, !0, {
            sourceMap: !1
        })
    },
    555: function(e, t, n) {
        var a = n(632);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[e.i, a, ""]]),
        a.locals && (e.exports = a.locals);
        (0,
        n(44).default)("6eec169c", a, !0, {
            sourceMap: !1
        })
    },
    580: function(e, t, n) {
        var a = {
            "./logo-en.png": 503,
            "./logo-zh-CN.png": 504
        };
        function o(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = r,
        e.exports = o,
        o.id = 580
    },
    581: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAASFBMVEX///8AAAD/2aT/////////////2qT/36//5sH/9t7/26f/+PD/////26X/3Kf/4bz/////////3ar/363/6Mn/3qv/4rT/7NEBVFpWAAAAGHRSTlMaAKMRFgacYT0niiEbk4NECgl6aTR0UC8wPh1kAAABPklEQVRIx6WW2Y6DMAxFPc5CCfvW+f8/nahVFO6lQxT1PCE4soyxY+SHccZYiVhj3OUh6YsRwCw3+mzlgp3/0V2WAes+6ZAGYrIOdtGXm0QgIdDZvvpZz5kU85Fsl/ykO0G6Jngfmk4Q99Y58cegL4YHpf/WZ7JVx6ltp1GV/DnqHLwbtOkl0jc6dBQ+6osAjY7RfvmjNgIsUaeyBJ3S5aSBihN1Qby26bJVL0CUXY3uxEghGciGdX5V1q0AXEiEZf5MBagJClCLfY+tkqmQ++H1xLC1d3V/KuMfqDu0Mdzvir47t9iu+hSkP9SfAkADj7oJ0696QAMv+XOmQJCP6p7H4zR8G3cU37Yw2iGHwR4KMNopvNfuY0ukIbF4LK0rm3jf1R16dUdq9YFdvw7ql03ZN/WLsn4N1y/5yl+IPynfCrCi/ym4AAAAAElFTkSuQmCC"
    },
    582: function(e, t, n) {
        var a = {
            "./en/banner.jpg": 546,
            "./zh-CN/banner.jpg": 547
        };
        function o(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = r,
        e.exports = o,
        o.id = 582
    },
    583: function(e, t, n) {
        var a = {
            "./en/title-process.png": 584,
            "./zh-CN/title-process.png": 585
        };
        function o(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = r,
        e.exports = o,
        o.id = 583
    },
    584: function(e, t, n) {
        e.exports = n.p + "img/title-process.e088683.png"
    },
    585: function(e, t, n) {
        e.exports = n.p + "img/title-process.c478e5f.png"
    },
    586: function(e, t, n) {
        var a = {
            "./en/title-problem.png": 587,
            "./zh-CN/title-problem.png": 588
        };
        function o(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = r,
        e.exports = o,
        o.id = 586
    },
    587: function(e, t, n) {
        e.exports = n.p + "img/title-problem.f275a3b.png"
    },
    588: function(e, t, n) {
        e.exports = n.p + "img/title-problem.0939228.png"
    },
    589: function(e, t, n) {
        var a = {
            "./en/title-cooperate.png": 590,
            "./zh-CN/title-cooperate.png": 591
        };
        function o(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = r,
        e.exports = o,
        o.id = 589
    },
    590: function(e, t, n) {
        e.exports = n.p + "img/title-cooperate.93a9207.png"
    },
    591: function(e, t, n) {
        e.exports = n.p + "img/title-cooperate.3db109e.png"
    },
    592: function(e, t, n) {
        e.exports = n.p + "img/icon-customer.33e7653.png"
    },
    593: function(e, t, n) {
        var a;
        e.exports = (a = n(161),
        function(e) {
            function t(a) {
                if (n[a])
                    return n[a].exports;
                var o = n[a] = {
                    i: a,
                    l: !1,
                    exports: {}
                };
                return e[a].call(o.exports, o, o.exports, t),
                o.l = !0,
                o.exports
            }
            var n = {};
            return t.m = e,
            t.c = n,
            t.i = function(e) {
                return e
            }
            ,
            t.d = function(e, n, a) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: a
                })
            }
            ,
            t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
                ;
                return t.d(n, "a", n),
                n
            }
            ,
            t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.p = "/",
            t(t.s = 3)
        }([function(e, t) {
            e.exports = a
        }
        , function(e, t, n) {
            "use strict";
            function a(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n,
                e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(n(0))
              , r = window.videojs || o.default;
            "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
                value: function(e, t) {
                    if (null == e)
                        throw new TypeError("Cannot convert undefined or null to object");
                    for (var n = Object(e), a = 1; a < arguments.length; a++) {
                        var o = arguments[a];
                        if (null != o)
                            for (var r in o)
                                Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r])
                    }
                    return n
                },
                writable: !0,
                configurable: !0
            });
            var i = ["loadeddata", "canplay", "canplaythrough", "play", "pause", "waiting", "playing", "ended", "error"];
            t.default = {
                name: "video-player",
                props: {
                    start: {
                        type: Number,
                        default: 0
                    },
                    crossOrigin: {
                        type: String,
                        default: ""
                    },
                    playsinline: {
                        type: Boolean,
                        default: !1
                    },
                    customEventName: {
                        type: String,
                        default: "statechanged"
                    },
                    options: {
                        type: Object,
                        required: !0
                    },
                    events: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    },
                    globalOptions: {
                        type: Object,
                        default: function() {
                            return {
                                controls: !0,
                                controlBar: {
                                    remainingTimeDisplay: !1,
                                    playToggle: {},
                                    progressControl: {},
                                    fullscreenToggle: {},
                                    volumeMenuButton: {
                                        inline: !1,
                                        vertical: !0
                                    }
                                },
                                techOrder: ["html5"],
                                plugins: {}
                            }
                        }
                    },
                    globalEvents: {
                        type: Array,
                        default: function() {
                            return []
                        }
                    }
                },
                data: function() {
                    return {
                        player: null,
                        reseted: !0
                    }
                },
                mounted: function() {
                    this.player || this.initialize()
                },
                beforeDestroy: function() {
                    this.player && this.dispose()
                },
                methods: {
                    initialize: function() {
                        var e = this
                          , t = Object.assign({}, this.globalOptions, this.options);
                        this.playsinline && (this.$refs.video.setAttribute("playsinline", this.playsinline),
                        this.$refs.video.setAttribute("webkit-playsinline", this.playsinline),
                        this.$refs.video.setAttribute("x5-playsinline", this.playsinline),
                        this.$refs.video.setAttribute("x5-video-player-type", "h5"),
                        this.$refs.video.setAttribute("x5-video-player-fullscreen", !1)),
                        "" !== this.crossOrigin && (this.$refs.video.crossOrigin = this.crossOrigin,
                        this.$refs.video.setAttribute("crossOrigin", this.crossOrigin));
                        var n = function(t, n) {
                            t && e.$emit(t, e.player),
                            n && e.$emit(e.customEventName, a({}, t, n))
                        };
                        t.plugins && delete t.plugins.__ob__;
                        var o = this;
                        this.player = r(this.$refs.video, t, (function() {
                            for (var e = this, t = i.concat(o.events).concat(o.globalEvents), a = {}, r = 0; r < t.length; r++)
                                "string" == typeof t[r] && void 0 === a[t[r]] && function(t) {
                                    a[t] = null,
                                    e.on(t, (function() {
                                        n(t, !0)
                                    }
                                    ))
                                }(t[r]);
                            this.on("timeupdate", (function() {
                                n("timeupdate", this.currentTime())
                            }
                            )),
                            o.$emit("ready", this)
                        }
                        ))
                    },
                    dispose: function(e) {
                        var t = this;
                        this.player && this.player.dispose && ("Flash" !== this.player.techName_ && this.player.pause && this.player.pause(),
                        this.player.dispose(),
                        this.player = null,
                        this.$nextTick((function() {
                            t.reseted = !1,
                            t.$nextTick((function() {
                                t.reseted = !0,
                                t.$nextTick((function() {
                                    e && e()
                                }
                                ))
                            }
                            ))
                        }
                        )))
                    }
                },
                watch: {
                    options: {
                        deep: !0,
                        handler: function(e, t) {
                            var n = this;
                            this.dispose((function() {
                                e && e.sources && e.sources.length && n.initialize()
                            }
                            ))
                        }
                    }
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = n(1)
              , o = n.n(a);
            for (var r in a)
                ["default", "default"].indexOf(r) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return a[e]
                    }
                    ))
                }(r);
            var i = n(5)
              , s = n(4)(o.a, i.a, !1, null, null, null);
            t.default = s.exports
        }
        , function(e, t, n) {
            "use strict";
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.install = t.videoPlayer = t.videojs = void 0;
            var o = a(n(0))
              , r = a(n(2))
              , i = window.videojs || o.default
              , s = function(e, t) {
                t && (t.options && (r.default.props.globalOptions.default = function() {
                    return t.options
                }
                ),
                t.events && (r.default.props.globalEvents.default = function() {
                    return t.events
                }
                )),
                e.component(r.default.name, r.default)
            }
              , l = {
                videojs: i,
                videoPlayer: r.default,
                install: s
            };
            t.default = l,
            t.videojs = i,
            t.videoPlayer = r.default,
            t.install = s
        }
        , function(e, t) {
            e.exports = function(e, t, n, a, o, r) {
                var i, s = e = e || {}, l = typeof e.default;
                "object" !== l && "function" !== l || (i = e,
                s = e.default);
                var d, c = "function" == typeof s ? s.options : s;
                if (t && (c.render = t.render,
                c.staticRenderFns = t.staticRenderFns,
                c._compiled = !0),
                n && (c.functional = !0),
                o && (c._scopeId = o),
                r ? (d = function(e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                    a && a.call(this, e),
                    e && e._registeredComponents && e._registeredComponents.add(r)
                }
                ,
                c._ssrRegister = d) : a && (d = a),
                d) {
                    var p = c.functional
                      , m = p ? c.render : c.beforeCreate;
                    p ? (c._injectStyles = d,
                    c.render = function(e, t) {
                        return d.call(t),
                        m(e, t)
                    }
                    ) : c.beforeCreate = m ? [].concat(m, d) : [d]
                }
                return {
                    esModule: i,
                    exports: s,
                    options: c
                }
            }
        }
        , function(e, t, n) {
            "use strict";
            var a = function() {
                var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
                return e.reseted ? n("div", {
                    staticClass: "video-player"
                }, [n("video", {
                    ref: "video",
                    staticClass: "video-js"
                })]) : e._e()
            }
              , o = {
                render: a,
                staticRenderFns: []
            };
            t.a = o
        }
        ]))
    },
    594: function(e, t, n) {
        "use strict";
        n(548)
    },
    595: function(e, t, n) {
        var a = n(43)(!1);
        a.push([e.i, "\n.modal-bg[data-v-135a636a] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 2000;\n}\n.modal-container[data-v-135a636a] {\n  overflow: hidden;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 68vw;\n  height: 40vw;\n  background: #ffffff;\n  box-shadow: 0px 0.667vw 1.333vw 0px rgba(0, 0, 0, 0.1);\n  border-radius: 1.6vw;\n}\n.modal-header[data-v-135a636a] {\n  height: 8vw;\n  background-image: linear-gradient(180deg, #e5c99e 0%, #f3e5ca 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 3.2vw;\n  color: #634414;\n  text-align: center;\n  font-weight: 400;\n  /* cursor: move; */\n}\n.modal-footer[data-v-135a636a] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  height: 8vw;\n  /* border-top: 1px solid #ddd; */\n}\n.modal-footer div[data-v-135a636a] {\n  width: 26vw;\n  height: 8vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5.333vw;\n  cursor: pointer;\n  font-size: 2.667vw;\n  color: #646464;\n  font-weight: 400;\n}\n.modal-footer .sure[data-v-135a636a] {\n  background-image: linear-gradient(180deg, #f3e5ca 0%, #e5c99e 100%);\n  color: #634414;\n}\n.modal-footer .cancel[data-v-135a636a] {\n  background-image: linear-gradient(180deg, #e5e4e5 0%, #cfcfce 100%);\n  color: #666666;\n}\n.modal-main[data-v-135a636a] {\n  height: 17.6vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.7;\n  font-size: 2.667vw;\n  color: #000000;\n  text-align: center;\n  font-weight: 200;\n}\n@media screen and (max-width: 1333px) {\n.modal-container[data-v-135a636a] {\n    transform: translate(-50%, -50%);\n    width: 120vw !important;\n    height: 66.667vw !important;\n}\n.modal-header[data-v-135a636a] {\n    height: 13.333vw !important;\n    font-size: 6.933vw !important;\n}\n.modal-footer[data-v-135a636a] {\n    height: 13.333vw !important;\n}\n.modal-footer div[data-v-135a636a] {\n    width: 40vw !important;\n    height: 11.733vw !important;\n    border-radius: 5.867vw !important;\n    font-size: 5.867vw !important;\n}\n.modal-main[data-v-135a636a] {\n    height: 32vw !important;\n    font-size: 5.867vw !important;\n}\n}\n@media screen and (orientation: landscape) and (max-width: 1333px) {\n.modal-container[data-v-135a636a] {\n    transform: translate(-50%, -50%);\n    width: 46.875rem !important;\n    height: 26.042rem !important;\n}\n.modal-header[data-v-135a636a] {\n    height: 5.208rem !important;\n    font-size: 2.708rem !important;\n}\n.modal-footer[data-v-135a636a] {\n    height: 5.208rem !important;\n}\n.modal-footer div[data-v-135a636a] {\n    width: 15.625rem !important;\n    height: 4.583rem !important;\n    border-radius: 2.292rem !important;\n    font-size: 2.292rem !important;\n}\n.modal-main[data-v-135a636a] {\n    height: 12.5rem !important;\n    font-size: 2.292rem !important;\n}\n}\n@media (orientation: landscape) {\n.modal-container[data-v-135a636a] {\n    width: 26.563rem;\n    height: 15.625rem;\n    box-shadow: 0px 0.26rem 0.521rem 0px rgba(0, 0, 0, 0.1);\n    border-radius: 0.625rem;\n}\n.modal-header[data-v-135a636a] {\n    height: 3.125rem;\n    font-size: 1.25rem;\n}\n.modal-footer[data-v-135a636a] {\n    height: 3.125rem;\n}\n.modal-footer div[data-v-135a636a] {\n    width: 10.156rem;\n    height: 3.125rem;\n    border-radius: 2.083rem;\n    font-size: 1.042rem;\n}\n.modal-main[data-v-135a636a] {\n    height: 6.875rem;\n    font-size: 1.042rem;\n}\n}\n", ""]),
        e.exports = a
    },
    596: function(e, t, n) {
        "use strict";
        n(549)
    },
    597: function(e, t, n) {
        var a = n(43)
          , o = n(156)
          , r = n(598)
          , i = n(599)
          , s = n(600)
          , l = n(601)
          , d = a(!1)
          , c = o(r)
          , p = o(i)
          , m = o(s)
          , u = o(l);
        d.push([e.i, ".fd-select-box[data-v-ee95536e]{padding-left:1.333vw;text-align:left;cursor:pointer;box-sizing:content-box;z-index:1;position:absolute;top:3.2vw;right:4vw;height:6.667vw;width:20vw;border-radius:4vw;line-height:6.667vw;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.5);font-size:3.2vw;border:none}.fd-select-box .icon-lang[data-v-ee95536e]{position:absolute;left:1.6vw;top:1.333vw;height:4vw;width:4vw;margin-right:1.333vw;background:url(" + c + ");background-size:100% 100%}.fd-select-box .icon-lang.zh-CN[data-v-ee95536e]{background:url(" + p + ");background-size:100% 100%}.fd-select-box .icon-lang.en[data-v-ee95536e]{background:url(" + m + ");background-size:100% 100%}.fd-select-box .fd-arrow[data-v-ee95536e]{position:absolute;font-size:4vw;transition:all 200ms;width:3.2vw;height:3.2vw;background:url(" + u + ") no-repeat;background-size:100% 100%;top:50%;transform:translateY(-50%);transform-origin:center center;right:2.133vw}.fd-select-box .fd-arrow.fd-down[data-v-ee95536e]{transform:rotate(180deg) translateY(50%)}.fd-select-box .fd-select-list[data-v-ee95536e]{position:absolute;list-style:none;box-shadow:0 1.333vw 2.533vw 0 rgba(0,0,0,0.2);z-index:9;top:6.4vw;left:0;overflow:hidden;width:20vw;left:50%;transform:translateX(-50%);border-radius:4vw;background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.5);font-size:3.2vw;overflow:visible}.fd-select-box .fd-select-list li[data-v-ee95536e]{cursor:pointer;text-align:center;height:8vw;line-height:8vw;position:relative;font-size:3.733vw}.fd-select-box .fd-select-list li.active[data-v-ee95536e]{background:#f3e5ca;color:#000000}.fd-select-box .fd-select-list li[data-v-ee95536e]:after{content:' ' !important;height:1px !important;position:absolute !important;display:block !important;left:2.667vw !important;right:2.667vw !important;bottom:-1px !important;background:rgba(255,255,255,0.1) !important}.fd-select-box .fd-select-list li[data-v-ee95536e]:last-child::after{display:none !important}.fd-select-box .fd-select-list li[data-v-ee95536e]:hover{background:rgba(255,255,255,0.1);color:#ffffff}.fd-select-box .fd-select-list li[data-v-ee95536e]:hover::after{display:none !important}@media screen and (max-width: 1333px){.fd-select-box[data-v-ee95536e]{top:6.667vw !important;padding-left:2.667vw !important;line-height:8.533vw !important;width:29.333vw !important;height:8.533vw !important;font-size:5.333vw !important}.fd-select-box .fd-select-list[data-v-ee95536e]{top:8vw !important;left:0 !important}.fd-select-box .fd-select-list li[data-v-ee95536e]{font-size:5.333vw !important;line-height:8.533vw !important}}@media screen and (orientation: landscape){.fd-select-box[data-v-ee95536e]{top:1.042rem !important;padding-left:1.042rem !important;line-height:3.333rem !important;width:11.458rem !important;height:3.333rem !important;font-size:2.083rem !important}.fd-select-box .fd-select-list[data-v-ee95536e]{top:3.125rem !important;left:0 !important}.fd-select-box .fd-select-list li[data-v-ee95536e]{font-size:2.083rem !important;line-height:3.333rem !important}}@media (orientation: landscape){.fd-select-box[data-v-ee95536e]{padding-left:0.521rem;top:1.25rem;right:1.563rem;height:2.604rem;width:7.813rem;border-radius:1.563rem;line-height:2.604rem;font-size:1.25rem}.fd-select-box .icon-lang[data-v-ee95536e]{left:0.625rem;top:0.521rem;height:1.563rem;width:1.563rem;margin-right:0.521rem}.fd-select-box .fd-arrow[data-v-ee95536e]{font-size:1.563rem;width:1.25rem;height:1.25rem;right:0.833rem}.fd-select-box .fd-select-list[data-v-ee95536e]{box-shadow:0 0.521rem 0.99rem 0 rgba(0,0,0,0.2);top:2.5rem;width:7.813rem;border-radius:1.563rem;font-size:1.25rem}.fd-select-box .fd-select-list li[data-v-ee95536e]{height:3.125rem;line-height:3.125rem;font-size:1.458rem}.fd-select-box .fd-select-list li[data-v-ee95536e]:after{height:1px !important;left:1.042rem !important;right:1.042rem !important;bottom:-1px !important}}\n", ""]),
        e.exports = d
    },
    598: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAMAAAAocOYLAAAASFBMVEUAAAD/157/2J7/3aD/2J7/2J7/2Z7/2Z//2Z7/2J7/2J7/2J7/2Z7/2qD/2Z//46L/2Z7/2KL/26L/2J//2J//2J7/3qX/37M+vvGUAAAAGHRSTlMAmZMWjoN6ST9ybV9UJjINWyweZjlQEQksRM7VAAABbklEQVQoz41T23aEIAxkQgC5KOp6+f8/LQl112339HQeoieTDBOJ5oWxREfs0r6aDwiMJ9zwk506m0C5V4xvdAG4CUQLMh5cGLhLPIDZZLgqfGWU2jLlSe9SvQKLEd5sgNXcdTaAbBO86bxxmI8C4NsDw0GwKN8bCGD4Phj4HKOaThkoSav9YglTbw+qSbghttSsAmNrN+YEVruFZjvvg13AjTmAQ0ZPWoUW9Xx9wIqmjBBVfoO78YbUe0bWImvtjNhiEyYrcAgtBpFm/AEvPAnw6SG80ykDHq/zr+Qg+gm7+vN3Hlj12mbpjP0r3PgVqKqyyTvV3jGGOQIph2XQae1VVTS+IYp8i+qCjklo8rmAQvasK6gL0c2yXuh4nR/AfImoN9Be83M/TkY4Q0ta0zHIslXC1PkC1pWc7uubjqZaGy9ym/X3BVYFmgm+8ZbhMkCvbvXg+1gg11/srz/I36ZfzAccQ07ep3mr5v/4AoBVDEyQSQ17AAAAAElFTkSuQmCC"
    },
    599: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAbFBMVEXYHgcAAAD16yvZIAj04yrYIAjZHwjaHwjYIAjZHwjaHwncHwnbJAzVKyvcPAzxziXiZxPcNgvbKwjfTg/ZJAfvwSPpmRzleRfhWxLfSA7fRA3aHwfy2CjlgBfy3ijuuiLssSDsqR7roR7ojBpuR/sKAAAAJHRSTlOxALFfsaminZeFUjoqBrGxsbGxsbGxsbGxsbF1sbGxsbGxsbGdm98YAAABBUlEQVQoz4WTibKDIAxFI+CGCuKu1W7v///xRShUi6N3RoQcrxJJIHDKaZqEYZLS/BuzuOAROEW82OMshp3ibIspeKJffIMD3Sx2Xt+POPuNCzXoe7biIv7FJXsrvb8CMQcjVVu8tH2jJxyxzbfvnL1Sn/wDyG2svTe7LwgFCKndDyHDho6zBECYrk/OjDFCcLgvFj+7ERAm2toSLVk7+4QXwtCsupU+K9grtPhvxS/wcGImkrw6wjZuNemXp3pRzyUOsnR0eDxKQEgN1r5mk5o0ieVwqEaIChAG0QGb3E8NuEf7tjcTfnigC3sLd6B+OVTTaMrhvJjOS/G8kC/b4LqJLlrwH0K/CwRzi8FxAAAAAElFTkSuQmCC"
    },
    600: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABDlBMVEXDEx////8AAAAAJHgEJnjDEyHCFCLnnqTlnKHDEiEAJHj////EFSHCEyDDEx/abHUAJHkAJXn///8nQ40APpP////DEyAAI3jDFCH24OPGHCnRS1TFGCYAKXr//f38+vr2+fvh4uz12Nrz0tPxxsvHIi7JJzIiQYqqttJwhLTff4ZQaaPUWWLmnKDnm6L///8lRIz////NOkT////JJzHPIED////+8/Xy9fn88vPs6e8GKXv//PzV3eoIK3zK0uP99ffzzM6+yN7vv8O0v9cTNILpq66VpMfKMz6El746Vpg2UZRieaxEXp3XYWuRocR2i7dZcajDGSVZcaZAW5zijZPdb3n/6+v1ztMAKn3ZLQIXAAAAWnRSTlOzswCzoqekjIuqo2GXrZyHVU0vLwgCsKugn5iIfiyxr66gnZqXlJGMi4iIh4dxcGNhW1lPNggFq6qqoZ2cnJqZmJeVlJOTjoyMiYiIh4eGgn9+fF9fTkw0NCt8mbiSAAABOklEQVQoz43T13KDMBAF0F0ETgQ27t2Oe+81vffe2///SJaxsSBOwPcNnRkNku6CtEhY6+qc610tLNZMjgRkGdeAso6yGojY+VtlTDBjatbKQcZsTAkuONpny8z60TkP8vdLHL9LDmf8iYgnB3Y+329yGBs80f0biLmWheONYhUgfTQl/ohB6hgRD2sm3xb8PvCeIo6I66UKV4wN0ORklfN2jr4fJQjhPIJFQqA5sQYvHhFuMLcsZMAL/4dQcWLuwm6bZxSR2a8pIhmXg7ldi/SElKaHp8oW3kxzfpV8pjsfIRYrEGvvtExu5BHxIgHKO/F0j94nVb5UxYPunpFvpxMTYmkMsYdCzV6Hmy1E/JqVaVi6jv8uk1zHgVnFt7+q+BpdrciUrOMYGEOkOgyRkXCvo/t8iU7PMoI/AUIdlV8WXK4AAAAASUVORK5CYII="
    },
    601: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGFBMVEUAAAChk3qklHqik3qklHyjk3ifj3ijlHplvZmmAAAAB3RSTlMAgJ/tTEAgjgDMzQAAAEdJREFUKM/VysENABAUBNEvEWc3JWhHKzhoX7AxLTC33Tz7qTxube0wqG+ROOo+HEc0EYAIQAQgAoAIQAQgAhAByAHki73VBOd8KpPa47WIAAAAAElFTkSuQmCC"
    },
    616: function(e, t, n) {
        var a = {
            "./en/progress-4-title.png": 617,
            "./zh-CN/progress-4-title.png": 618
        };
        function o(e) {
            var t = r(e);
            return n(t)
        }
        function r(e) {
            if (!n.o(a, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[e]
        }
        o.keys = function() {
            return Object.keys(a)
        }
        ,
        o.resolve = r,
        e.exports = o,
        o.id = 616
    },
    617: function(e, t, n) {
        e.exports = n.p + "img/progress-4-title.81eb0a6.png"
    },
    618: function(e, t, n) {
        e.exports = n.p + "img/progress-4-title.0a403fa.png"
    },
    619: function(e, t, n) {
        "use strict";
        n(553)
    },
    620: function(e, t, n) {
        var a = n(43)
          , o = n(156)
          , r = n(621)
          , i = n(622)
          , s = n(623)
          , l = n(624)
          , d = n(513)
          , c = n(515)
          , p = n(514)
          , m = n(516)
          , u = n(517)
          , h = n(527)
          , g = n(528)
          , f = n(529)
          , v = n(530)
          , b = n(518)
          , w = n(531)
          , A = a(!1)
          , y = o(r)
          , x = o(i)
          , k = o(s)
          , C = o(l)
          , _ = o(d)
          , M = o(c)
          , E = o(p)
          , z = o(m)
          , O = o(u)
          , D = o(h)
          , S = o(g)
          , j = o(f)
          , I = o(v)
          , $ = o(b)
          , P = o(w);
        A.push([e.i, ".progress-container[data-v-0b2ed9fa]{padding:8.267vw 3.467vw 4.4vw 4.8vw}.progress-container .p-title[data-v-0b2ed9fa]{font-size:4vw;font-weight:700;color:rgba(255,255,255,0.8);line-height:5.6vw;padding:0 0 0 4vw;position:relative}.progress-container .p-title i[data-v-0b2ed9fa]{position:absolute;left:-2.133vw;font-style:normal;height:4.8vw;line-height:4.8vw;width:4.8vw;text-align:center;background-image:linear-gradient(180deg, #eeb081 0%, #fde2d0 99%);border-radius:50%;font-size:3.733vw;color:#000000}.progress-container.content-block[data-v-0b2ed9fa]{background:linear-gradient(180deg, rgba(75,88,111,0.521569) 1%, rgba(38,44,56,0.521569) 91%) !important}.progress-container .table .copy[data-v-0b2ed9fa]{width:3.333vw;height:3.333vw;background:url(" + y + ");background-size:100% 100%;margin-left:0.667vw}.progress-container .table .t-body .row[data-v-0b2ed9fa]{display:flex;flex-direction:row;height:8.267vw;font-size:3.2vw;color:rgba(255,255,255,0.6);line-height:4vw;font-weight:400}.progress-container .table .t-body .row span[data-v-0b2ed9fa]{display:flex;text-align:center;justify-content:center;align-items:center}.progress-container .table .t-body .row span[data-v-0b2ed9fa]:first-child{justify-content:flex-start}.progress-container .table .t-body .row span[data-v-0b2ed9fa]:last-child{justify-content:flex-end}.progress-container .table .t-body .row span[data-v-0b2ed9fa]:nth-child(1),.progress-container .table .t-body .row span[data-v-0b2ed9fa]:nth-child(3){flex:1}.progress-container .table .t-body .row span[data-v-0b2ed9fa]:nth-child(2){flex:1.5}.progress-container .table .t-body .row span.red[data-v-0b2ed9fa]{color:#D34C0B}.progress-container .table .t-body .row span a.link-btn[data-v-0b2ed9fa]{border:1px solid #ff5400;padding:1.067vw 2.667vw;border-radius:3.2vw;font-size:3.2vw;color:#ff5400;line-height:4vw;font-weight:400;opacity:0.8}.progress-container .table .t-body .row span .link[data-v-0b2ed9fa]{color:rgba(255,255,255,0.6);text-decoration:underline}.progress-container .progress3 .table .row[data-v-0b2ed9fa]{border-bottom:1px solid #353e49}.progress-container .progress3 .table .row span[data-v-0b2ed9fa]{color:rgba(255,255,255,0.6)}.progress-container .progress3 .table .row[data-v-0b2ed9fa]:last-child{border-bottom:0}.progress-container .progress4[data-v-0b2ed9fa]{position:relative;height:29.333vw;background:url(" + x + ");background-size:100% 100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.progress-container .progress4 .title[data-v-0b2ed9fa]{height:6.133vw}.progress-container .progress4 .desc[data-v-0b2ed9fa]{color:rgba(255,255,255,0.6);font-size:4vw;margin-bottom:2.133vw;text-align:center;padding:0 4vw;font-weight:700}.progress-container .progress-content[data-v-0b2ed9fa]{padding:2.667vw 0 2.667vw 4vw;border-left:1px solid #877569;margin-top:-0.267vw}.progress-container .progress-content[data-v-0b2ed9fa]:last-child{border-left:0;padding-bottom:0}.progress-container .progress-content .prc-title[data-v-0b2ed9fa]{text-align:center;padding:2.667vw}.progress-container .progress-menu[data-v-0b2ed9fa]{width:100%;display:flex;flex-direction:row;font-size:3.2vw;color:rgba(255,255,255,0.6);text-align:center;justify-content:space-between;align-items:center}.progress-container .progress-menu .arrow[data-v-0b2ed9fa]{display:inline-block;width:3.333vw;height:2.533vw;background:url(" + k + ") no-repeat center;background-size:contain}.progress-container .progress-menu .pm-item[data-v-0b2ed9fa]{display:flex;justify-content:center;align-items:center;flex-direction:column;cursor:pointer;text-align:center;line-height:5.6vw;position:relative}.progress-container .progress-menu .pm-item.active[data-v-0b2ed9fa]{color:#BD9F7B;font-size:4vw;font-weight:700}.progress-container .progress-menu .pm-item.active[data-v-0b2ed9fa]::after{width:10.667vw;height:0.533vw;position:absolute;left:0;bottom:-2.267vw;content:'';background:url(" + C + ") no-repeat center;background-size:contain}.progress-container .platform-icon[data-v-0b2ed9fa]{display:block;height:6.667vw;width:100%}.progress-container .platform-icon.imtoken[data-v-0b2ed9fa]{background:url(" + _ + ") no-repeat left center;background-size:auto 100%}.progress-container .platform-icon.trustwallet[data-v-0b2ed9fa]{background:url(" + M + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.ownbit[data-v-0b2ed9fa]{background:url(" + E + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.trolink[data-v-0b2ed9fa]{background:url(" + z + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.bitpie[data-v-0b2ed9fa]{background:url(" + O + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.zb[data-v-0b2ed9fa]{background:url(" + D + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.binance[data-v-0b2ed9fa]{background:url(" + S + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.okex[data-v-0b2ed9fa]{background:url(" + j + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.gate[data-v-0b2ed9fa]{background:url(" + I + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.huobi[data-v-0b2ed9fa]{background:url(" + $ + ") no-repeat left center;background-size:contain}.progress-container .platform-icon.tokenpocket[data-v-0b2ed9fa]{background:url(" + P + ") no-repeat left center;background-size:contain}@media (orientation: landscape){.progress-container[data-v-0b2ed9fa]{padding:3.229rem 1.354rem 1.719rem 1.875rem}.progress-container .p-title[data-v-0b2ed9fa]{font-size:1.563rem;line-height:2.188rem;padding:0 0 0 1.563rem}.progress-container .p-title i[data-v-0b2ed9fa]{left:-0.833rem;height:1.875rem;line-height:1.875rem;width:1.875rem;font-size:1.458rem}.progress-container .table .copy[data-v-0b2ed9fa]{width:1.302rem;height:1.302rem;margin-left:0.26rem}.progress-container .table .t-body .row[data-v-0b2ed9fa]{height:3.229rem;font-size:1.25rem;line-height:1.563rem}.progress-container .table .t-body .row span a.link-btn[data-v-0b2ed9fa]{border:1px solid #ff5400;padding:0.417rem 1.042rem;border-radius:1.25rem;font-size:1.25rem;line-height:1.563rem}.progress-container .progress3 .table .row[data-v-0b2ed9fa]{border-bottom:1px solid #353e49}.progress-container .progress4[data-v-0b2ed9fa]{height:11.458rem}.progress-container .progress4 .title[data-v-0b2ed9fa]{height:2.396rem}.progress-container .progress4 .desc[data-v-0b2ed9fa]{font-size:1.563rem;margin-bottom:0.833rem;padding:0 1.563rem}.progress-container .progress-content[data-v-0b2ed9fa]{padding:1.042rem 0 1.042rem 1.563rem;border-left:1px solid #877569;margin-top:-0.104rem}.progress-container .progress-content .prc-title[data-v-0b2ed9fa]{padding:1.042rem}.progress-container .progress-menu[data-v-0b2ed9fa]{font-size:1.25rem}.progress-container .progress-menu .arrow[data-v-0b2ed9fa]{width:1.302rem;height:0.99rem}.progress-container .progress-menu .pm-item[data-v-0b2ed9fa]{line-height:2.188rem}.progress-container .progress-menu .pm-item.active[data-v-0b2ed9fa]{font-size:1.563rem}.progress-container .progress-menu .pm-item.active[data-v-0b2ed9fa]::after{width:4.167rem;height:0.208rem;bottom:-0.885rem}.progress-container .platform-icon[data-v-0b2ed9fa]{height:2.604rem}}\n", ""]),
        e.exports = A
    },
    621: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAZCAMAAAACPC7cAAAAPFBMVEUAAADY2NjZ2dna2trY2Nja2trY2Njw8PDZ2dna2tra2trZ2dnf39/Z2dnZ2dnZ2dnY2Nja2trZ2dnc3Nx7XSHbAAAAFHRSTlMAzKqMVYKcBLixa70OxGRzpINYScMTrFoAAAB+SURBVCjPndFRCoQwDEXRPJ2ZpGm1o+5/rzYiJYWA4PkRLpKIoYZrhpcrW1bIzxOoZUlMHiexRyk02kCsAkeUib6gFcvkLFivnPIwouR0Zcw0mPGU0Q156iy/nP3pnlf6t1+t9N999Lz5lfud7QzRkD80zJWj/91E12miWzYnfAcEoF2jOXsAAAAASUVORK5CYII="
    },
    622: function(e, t, n) {
        e.exports = n.p + "img/progress-4-bg.00e413f.png"
    },
    623: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAATBAMAAACXXLs2AAAAGFBMVEUAAAD/1MH/1rH/0K7/z6z/1LX/1rr/6LlgRz4hAAAACHRSTlMABBgrNBUMC0T/cLgAAAA3SURBVBjTY8AEYgIMQgJwXpEiQ4ghnCeqJCDsDJdkDFJkNKGGpJAag4gTphxCH0VSCD9g+g8BAGpuDHmENnIXAAAAAElFTkSuQmCC"
    },
    624: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAECAMAAAAu0Eh+AAAAaVBMVEUAAACiinmJd2uch3bUtJvUs5uVgHOTgHHVtp2Id2y/oo27n4rKq5TSsZmqkX+nj36ii3rPr5fFp5HCpI+zmIWPfG6LeGvHqZK4nIi2m4exl4SulILNrZakjXySfXCsk4GNem2Jd2qTf3EY8BRIAAAACnRSTlMA4+NJ4+Pj40lJEqbuGgAAAItJREFUGNNtzwkOgyAARFGr3UGrguwgev9DdoSQNsR/gJeZ5tVuQsS4LCGER9f86i7jOPoPGoZ1tdYYwznXWilFCHkjxtg8Sykppc65aer7/vZs2g2gAAhxv/+ByfMeHgJoMwiRHBUQIkUAk3jNYEzgfgbmhQXU9cI8sXgAcVmUheeXy8L6MqoXHpe/0vQUN5G2mkIAAAAASUVORK5CYII="
    },
    625: function(e, t, n) {
        e.exports = n.p + "videos/whatiahash.2f7505a.mp4"
    },
    626: function(e, t, n) {
        "use strict";
        n(554)
    },
    627: function(e, t, n) {
        var a = n(43)
          , o = n(156)
          , r = n(628)
          , i = n(629)
          , s = n(630)
          , l = a(!1)
          , d = o(r)
          , c = o(i)
          , p = o(s);
        l.push([e.i, ".home[data-v-29db67ae]{position:relative}.home .home-header[data-v-29db67ae]{flex:1;background:transparent;height:100%;display:flex;padding:0 4vw;align-items:center;justify-content:space-between}.home .home-header .logo[data-v-29db67ae]{height:6.133vw}.home .home-header .header-icon[data-v-29db67ae]{height:6.667vw;vertical-align:bottom;display:inline-block;margin:0 0 0 4.667vw}.home .banner img[data-v-29db67ae]{width:100%;vertical-align:bottom}.home .icon-customer[data-v-29db67ae]{width:14.4vw;position:fixed;left:50%;bottom:13.333vw;transform:translateX(229%);z-index:500;cursor:pointer}.home .block-title[data-v-29db67ae]{height:5.6vw;display:block;margin:4.267vw auto 3.333vw}.home .question-container[data-v-29db67ae]{background:linear-gradient(180deg, rgba(75,88,111,0.521569) 1%, rgba(38,44,56,0.521569) 91%) !important}.home .question-item[data-v-29db67ae]{margin-top:3.2vw;font-size:2.933vw;color:rgba(255,255,255,0.6);line-height:4vw}.home .question-item .title[data-v-29db67ae]{line-height:5.067vw;font-family:PingFangSC-Medium;font-size:3.467vw;color:rgba(255,255,255,0.8)}.home .question-item .content[data-v-29db67ae]{line-height:4vw}.home .cooperate-container[data-v-29db67ae]{overflow:hidden;width:100%}.home .cooperate-container .row[data-v-29db67ae]{display:flex;justify-content:center}.home .cooperate-container .row[data-v-29db67ae]:nth-child(2){transform:translateY(-50%);margin-top:2.933vw}.home .cooperate-container .row[data-v-29db67ae]:nth-child(3){transform:translateY(-100%);margin-top:2.933vw}.home .cooperate-container .row .c-platform[data-v-29db67ae]{margin-right:2.933vw;width:28vw;height:28vw;display:flex;justify-content:center;align-items:center;position:relative;background:url(" + d + ") no-repeat;background-size:100% 100%}.home .cooperate-container .row .c-platform[data-v-29db67ae]:last-child{margin-right:0}.home .cooperate-container .row .c-platform img[data-v-29db67ae]{width:80%}.home .btn-more[data-v-29db67ae]{width:34.667vw;height:6vw;background:url(" + c + ") no-repeat center;background-size:contain;margin:0 auto;text-align:center;z-index:10}.home .btn-more .arrow[data-v-29db67ae]{background:url(" + p + ") no-repeat center;background-size:auto 100%;height:5.067vw}.home .btn-more .arrow.open[data-v-29db67ae]{transform:rotate(180deg);margin-top:1.333vw}.home .game-container[data-v-29db67ae]{position:relative;margin-top:-14vw;overflow:hidden;min-height:97.333vw;z-index:99;transition:all 0.4s}.home .game-container.open[data-v-29db67ae]{min-height:146.667vw}.home .game-container .game-content .address[data-v-29db67ae]{margin-top:6.667vw}.home .game-container .game-content .gc-title[data-v-29db67ae]{height:9.6vw;vertical-align:bottom}.home .game-container .game-menu[data-v-29db67ae]{display:flex;flex-direction:row;flex-wrap:nowrap;transition:all 0.4s ease-in;justify-content:space-between;outline:none}.home .game-container .game-menu .gm-item[data-v-29db67ae]{display:table;line-height:1;font-size:4vw;color:rgba(255,255,255,0.8);height:6.667vw;cursor:pointer;position:relative;text-align:center}.home .game-container .game-menu .gm-item .gm-item-text[data-v-29db67ae]{display:table-cell;vertical-align:middle}.home .game-container .game-menu .gm-item.active[data-v-29db67ae]{visibility:visible}.home .game-container .game-menu .gm-item.active .gm-item-text[data-v-29db67ae]{font-weight:600;background:linear-gradient(180deg, #eeb081 0%, #fde2d0 99%);-webkit-background-clip:text;color:transparent}.home .game-container .game-menu .gm-item.active[data-v-29db67ae]::after{position:absolute;bottom:-1.067vw;left:50%;transform:translateX(-50%);content:'';width:4.8vw;height:0.533vw;border-radius:0.267vw;background-image:linear-gradient(180deg, #eeb081 0%, #fde2d0 99%)}.home[data-v-29db67ae]  .lang-select .fd-select-box{top:3.2vw !important;right:29.333vw !important;height:6.667vw !important;width:24vw !important;border-radius:4vw !important;line-height:6.667vw !important;text-align:center !important;padding:0 !important;background:rgba(255,255,255,0.1) !important;font-size:3.2vw !important;border:none !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list{width:24vw !important;left:50% !important;transform:translateX(-50%) !important;border-radius:4vw !important;background:transparent !important;border:0 !important;height:unset !important;overflow:visible;box-shadow:none !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li{height:6.667vw !important;line-height:6.667vw !important;position:relative !important;font-size:3.2vw !important;padding-left:2.133vw;background:rgba(255,255,255,0.1) !important;border-radius:4vw !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li:after{content:' ' !important;height:1px !important;position:absolute !important;display:block !important;left:2.667vw !important;right:2.667vw !important;bottom:-1px !important;background:transparent !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li:last-child::after{display:none !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li:hover{background:rgba(255,255,255,0.1) !important;color:#ffffff !important;border-radius:4vw !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li:hover::after{display:none !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list .active{display:none !important}.home[data-v-29db67ae]  .videodialog{width:100%}.home[data-v-29db67ae]  .videodialog .vjs_video_3-dimensions{width:100vw;height:80vh}.home[data-v-29db67ae]  .videodialogpc{width:100%}.home[data-v-29db67ae]  .videodialogpc .vjs_video_3-dimensions{width:96vw;height:80vh}@media (orientation: landscape){.home .home-header[data-v-29db67ae]{padding:0 1.563rem}.home .home-header .logo[data-v-29db67ae]{height:2.396rem}.home .home-header .header-icon[data-v-29db67ae]{height:2.604rem;margin:0 0 0 1.823rem}.home .icon-customer[data-v-29db67ae]{width:5.625rem;bottom:5.208rem}.home .block-title[data-v-29db67ae]{height:2.188rem;margin:1.667rem auto 1.302rem}.home .question-item[data-v-29db67ae]{margin-top:1.25rem;font-size:1.146rem;line-height:1.563rem}.home .question-item .title[data-v-29db67ae]{line-height:1.979rem;font-size:1.354rem}.home .question-item .content[data-v-29db67ae]{line-height:1.563rem}.home .cooperate-container .row[data-v-29db67ae]:nth-child(2){margin-top:1.146rem}.home .cooperate-container .row[data-v-29db67ae]:nth-child(3){margin-top:1.146rem}.home .cooperate-container .row .c-platform[data-v-29db67ae]{margin-right:1.146rem;width:10.938rem;height:10.938rem}.home .btn-more[data-v-29db67ae]{width:13.542rem;height:2.344rem}.home .btn-more .arrow[data-v-29db67ae]{height:1.979rem}.home .btn-more .arrow.open[data-v-29db67ae]{margin-top:0.521rem}.home .game-container[data-v-29db67ae]{margin-top:-5.469rem;min-height:38.021rem}.home .game-container.open[data-v-29db67ae]{min-height:57.292rem}.home .game-container .game-content .address[data-v-29db67ae]{margin-top:2.604rem}.home .game-container .game-content .gc-title[data-v-29db67ae]{height:3.75rem}.home .game-container .game-menu .gm-item[data-v-29db67ae]{font-size:1.563rem;height:2.604rem}.home .game-container .game-menu .gm-item.active[data-v-29db67ae]::after{bottom:-0.417rem;width:1.875rem;height:0.208rem;border-radius:0.104rem}.home[data-v-29db67ae]  .lang-select .fd-select-box{top:1.25rem !important;right:11.458rem !important;height:2.604rem !important;width:9.375rem !important;border-radius:1.563rem !important;line-height:2.604rem !important;font-size:1.25rem !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list{width:9.375rem !important;border-radius:1.563rem !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li{height:2.604rem !important;line-height:2.604rem !important;font-size:1.25rem !important;padding-left:0.833rem;border-radius:1.563rem !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li:after{height:1px !important;left:1.042rem !important;right:1.042rem !important;bottom:-1px !important}.home[data-v-29db67ae]  .lang-select .fd-select-box .fd-select-list li:hover{border-radius:1.563rem !important}.home[data-v-29db67ae]  .videodialogpc .vjs_video_3-dimensions{width:37.5rem}}\n", ""]),
        e.exports = l
    },
    628: function(e, t, n) {
        e.exports = n.p + "img/platform_bg.c66f229.png"
    },
    629: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAAtCAMAAAB/AuVyAAAAe1BMVEUAAAAEBAT+/v7///8AAAD///////////////////////////////////8AAAD////////////9/f3///////8MDAz///8ICAj///8HBwcDAwP////8/Pz////9/f3+/v7+/v78/Pz////6+vqFhYXJycm2trZ/f3/b29sapy9KAAAAKXRSTlMAAQMGBQgPChsWJRQhDQgTEhkrHgwPJxIvCw0fDik0Pzo3RRsMIBsZKRTDQlAAAALXSURBVGje7NLLCsMgEIVhnYvShUkWLrPM+z9jNRSKDKEQypws/JFIBEE+Jsxms9ls9ofiUHhG0fNVFoECPvJFsAqEVyByNrAITOjYG8EqPAABYBDisxQ4ii+CVRBhrAKziDgbWARSQqYkEYEQBgRRRqbS8jSwCNIrjKvImSuCVWgOOTOqnDEGdhQoMevFsPal/Kvb9xPhEMIwCbJXxVR3OfM1sAi9Y1VM64FECMMkyJYyopQWOUMY2FF45Zpb7fPZXP5fBxYhDAjLutVaamnru/fs2dX5jfvvZs23t1UQisNvbpoWHZs0KDgFrIJ+/094z7lx9wzZlm1plYdG/jQk5env2KbpyzPnxzlIJUzj01MHD2grNKd1Wkj5xf5xOkgCQRIAXhQnoDvFdPEIu66j1Ygf7y+Kwx1so3A97c31+CDEUeC8ql72pao4STjAQRoFzqfyeV/KCSQcFQQiksDHc7En51GThIMcpPUwsculgIYX7FdoDo//6zSmeVH8YH/FphyqIYlCx6rLbrAujyBso6Av9VjtBBu1ziMIYCGSoL24nr9khLZdile+t7++apJwpIO0HrQOqjw/nlcx6nyCkEShnWpRXh8MU6Ft8wkCSNhaaIMSZfmKDS//+rvOmWJt2+YUhLQg4PV5I1j5IJhSQcpW5/LR8FEUOEiQUnpjevYAhEEFEkRn8h3h84JADUE4Je5twNWzBHIrhkgCVYREvHKD6uu70KvBKS+b1QHPLAhfWGikFxZECNGLvu8FgiO4YP82BmgOJM+DACuCbN4UZOgAJGwtkIammb2y1hmjxC9QyjhrlZ8bQL5z8Ofw3xFSC/F9ge4MYAGZw2LsDVwMRn0TMzgHW8wSUACyKsjUQWwh1kAiMBOLGuzthjacGwCD4IkRXIB1a+0NGMSC7z8JANqoFHL771hkgTREHoh5Dn4RCo69nnj1Ak7Esvgw0+E3BkjBfR38BcthwqFr5mKOAAAAAElFTkSuQmCC"
    },
    630: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAaBAMAAABIsxEJAAAAJ1BMVEUAAAD///////////////////////////////////////////////+uPUo5AAAADHRSTlMACEzIWEUe3g/VuUDN2BwPAAAAeUlEQVQY02OgNmDdCKakAxiYXAWADMYQBQZGlUAgS9QJyBdyFQAKKQK5QEGIEEhQECQEFgwFCYEFXcBCzCsYGJUEGLoMGDgPNwD5HDYTGNhqLICs5uMJDAzpQEEOmzIgFygIEQIJdoCEwILGICGw4BmgEERwZgKKkwG4RRhxOm2BAQAAAABJRU5ErkJggg=="
    },
    631: function(e, t, n) {
        "use strict";
        n(555)
    },
    632: function(e, t, n) {
        var a = n(43)(!1);
        a.push([e.i, ".app{height:100%;width:100%;background:#121923;color:rgba(255,255,255,0.6);padding:0;max-width:100vw;position:relative}\n@media (orientation: landscape){\n.app{max-width:39.063rem}}\n", ""]),
        e.exports = a
    },
    736: function(e, t, n) {
        "use strict";
        n.r(t);
        n(505);
        var a = [function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "cooperate-container"
            }, [a("div", {
                staticClass: "row"
            }, [a("a", {
                staticClass: "c-platform wow fadeInUp",
                attrs: {
                    href: "https://token.im",
                    target: "_blank"
                }
            }, [a("img", {
                attrs: {
                    src: n(513)
                }
            })]), e._v(" "), a("a", {
                staticClass: "c-platform wow fadeInUp",
                attrs: {
                    "data-wow-delay": "0.1s",
                    href: "https://ownbit.pro",
                    target: "_blank"
                }
            }, [a("img", {
                attrs: {
                    src: n(514)
                }
            })]), e._v(" "), a("a", {
                staticClass: "c-platform wow fadeInUp",
                attrs: {
                    "data-wow-delay": "0.2s",
                    href: "https://trustwallet.com",
                    target: "_blank"
                }
            }, [a("img", {
                attrs: {
                    src: n(515)
                }
            })])]), e._v(" "), a("div", {
                staticClass: "row"
            }, [a("a", {
                staticClass: "c-platform wow fadeInUp",
                attrs: {
                    "data-wow-delay": "0.3s",
                    href: "https://www.tronlink.org",
                    target: "_blank"
                }
            }, [a("img", {
                attrs: {
                    src: n(516)
                }
            })]), e._v(" "), a("a", {
                staticClass: "c-platform wow fadeInUp",
                attrs: {
                    "data-wow-delay": "0.4s",
                    href: "https://bitpie.com",
                    target: "_blank"
                }
            }, [a("img", {
                attrs: {
                    src: n(517)
                }
            })])]), e._v(" "), a("div", {
                staticClass: "row"
            }, [a("a", {
                staticClass: "c-platform wow fadeInUp",
                attrs: {
                    "data-wow-delay": "0.5s",
                    href: "https://www.huobi.com",
                    target: "_blank"
                }
            }, [a("img", {
                attrs: {
                    src: n(518)
                }
            })])])])
        }
        ]
          , o = (n(52),
        n(45),
        n(508),
        n(593))
          , r = n(498)
          , i = n(520)
          , s = {
            clickOutside: {
                bind: function(e, t) {
                    function n(n) {
                        return !e.contains(n.target) && (t.expression && t.value(n),
                        !0)
                    }
                    e.vueClickOutside = n,
                    document.addEventListener("click", n)
                },
                unbind: function(e) {
                    document.removeEventListener("click", e.vueClickOutside),
                    delete e.vueClickOutside
                }
            }
        }
          , l = {
            name: "Modal",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                title: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    x: 0,
                    y: 0,
                    node: null,
                    isCanMove: !1
                }
            },
            mounted: function() {
                this.node = document.querySelector(".modal-container")
            },
            methods: {
                hideModal: function() {
                    this.$emit("hideModal")
                },
                submit: function() {
                    this.$emit("submit")
                },
                setStartingPoint: function(e) {
                    this.x = e.clientX - this.node.offsetLeft,
                    this.y = e.clientY - this.node.offsetTop,
                    this.isCanMove = !0
                },
                modalMove: function(e) {
                    this.isCanMove && (this.node.style.left = e.clientX - this.x + "px",
                    this.node.style.top = e.clientY - this.y + "px")
                },
                cancelMove: function() {
                    this.isCanMove = !1
                }
            }
        }
          , d = (n(594),
        n(58))
          , c = {
            name: "FdSelect",
            components: {
                modal: Object(d.a)(l, (function() {
                    var e = this
                      , t = e.$createElement
                      , n = e._self._c || t;
                    return n("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.show,
                            expression: "show"
                        }],
                        staticClass: "modal-bg",
                        on: {
                            mousemove: e.modalMove,
                            mouseup: e.cancelMove
                        }
                    }, [n("div", {
                        staticClass: "modal-container"
                    }, [n("div", {
                        staticClass: "modal-header",
                        on: {
                            mousedown: e.setStartingPoint
                        }
                    }, [e._v("\n      " + e._s(e.title) + "\n    ")]), e._v(" "), n("div", {
                        staticClass: "modal-main"
                    }, [e._t("default")], 2), e._v(" "), n("div", {
                        staticClass: "modal-footer"
                    }, [n("div", {
                        staticClass: "cancel",
                        attrs: {
                            round: ""
                        },
                        on: {
                            click: e.hideModal
                        }
                    }, [e._v("\n        " + e._s(e.$t("lang_cancel")) + "\n      ")]), e._v(" "), n("div", {
                        staticClass: "sure",
                        attrs: {
                            round: "",
                            type: "primary"
                        },
                        on: {
                            click: e.submit
                        }
                    }, [e._v("\n        " + e._s(e.$t("lang_ok")) + "\n      ")])])])])
                }
                ), [], !1, null, "135a636a", null).exports
            },
            directives: {
                clickOutside: s.clickOutside
            },
            model: {
                prop: "selected",
                event: "changeValue"
            },
            props: {
                list: {
                    type: Array,
                    required: !0
                },
                selected: {
                    type: Object,
                    required: !0
                },
                disabledDialog: {
                    type: Boolean,
                    default: !1
                },
                showFlag: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    scoped: {
                        selected: this.selected
                    },
                    items: this.selected
                }
            },
            methods: {
                changeValue: function() {
                    this.scoped.selected = this.items,
                    this.modalShow = !1,
                    this.$store.commit("SET_LANG_MODEL", !1),
                    this.$emit("changeValue", this.scoped.selected)
                },
                showModal: function(e) {
                    this.items = e,
                    this.disabledDialog ? this.changeValue() : this.modalShow = !0
                },
                hideModal: function() {
                    this.modalShow = !1
                },
                changeShow: function() {
                    this.$store.commit("SET_LANG_MODEL", !this.showFlag)
                },
                closeDialog: function() {
                    this.$store.commit("SET_LANG_MODEL", !1)
                }
            }
        }
          , p = (n(596),
        Object(d.a)(c, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", [n("div", {
                directives: [{
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: e.closeDialog,
                    expression: "closeDialog"
                }],
                staticClass: "fd-select-box",
                on: {
                    click: e.changeShow
                }
            }, [n("span", {
                class: ["icon-lang", e.scoped.selected.code]
            }), e._v(" "), n("p", {
                domProps: {
                    textContent: e._s(e.scoped.selected && e.scoped.selected.name ? e.scoped.selected.short : "请选择")
                }
            }), e._v(" "), n("span", {
                class: ["fd-arrow", {
                    "fd-down": e.showFlag
                }]
            }), e._v(" "), n("ul", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showFlag,
                    expression: "showFlag"
                }],
                staticClass: "fd-select-list"
            }, e._l(e.list, (function(t, a) {
                return n("li", {
                    key: a + "select",
                    class: {
                        active: e.scoped.selected && t.code === e.scoped.selected.code
                    },
                    on: {
                        click: function(n) {
                            return n.stopPropagation(),
                            e.showModal(t)
                        }
                    }
                }, [n("span", {
                    class: ["icon-lang", t.code]
                }), e._v("\n        " + e._s(t.name) + "\n      ")])
            }
            )), 0)]), e._v(" "), e.disabledDialog ? e._e() : n("modal", {
                attrs: {
                    show: e.modalShow,
                    title: e.$t("lang_setting")
                },
                on: {
                    hideModal: e.hideModal,
                    submit: e.changeValue
                }
            }, [n("span", {
                staticStyle: {
                    "font-weight": "400"
                },
                attrs: {
                    slot: ""
                },
                slot: "default"
            }, [e._v("\n      " + e._s(e.$t("lang_info", [e.items.name])) + "\n    ")])])], 1)
        }
        ), [], !1, null, "ee95536e", null).exports)
          , m = n(525)
          , u = n(550)
          , h = n(576)
          , g = {
            mixins: [n(502).a],
            props: {
                games: {
                    type: Array,
                    default: function() {
                        return []
                    }
                }
            },
            data: function() {
                return {
                    currentProgress: "progress1",
                    walletPlatform: Object.freeze([{
                        platform: "imtoken",
                        link: "token.im",
                        teach: "/mobile/teach?id=help_imtoken"
                    }, {
                        platform: "trustwallet",
                        link: "trustwallet.com",
                        teach: "/mobile/teach?id=help_trustwallet"
                    }, {
                        platform: "ownbit",
                        link: "ownbit.io",
                        teach: "/mobile/teach?id=help_ownbit"
                    }, {
                        platform: "trolink",
                        link: "tronlink.org",
                        teach: "/mobile/teach?id=help_trolink"
                    }, {
                        platform: "bitpie",
                        link: "bitpie.com",
                        teach: "/mobile/teach?id=help_bitpie"
                    }, {
                        platform: "tokenpocket",
                        link: "tokenpocket.pro",
                        teach: "/mobile/teach?id=help_tokenpocket"
                    }])
                }
            },
            computed: {
                lang: function() {
                    return this.$i18n.locale
                },
                progressMenu: function() {
                    return Object.freeze([{
                        key: "progress1",
                        label: this.$t("home.progress.p_register")
                    }, {
                        key: "progress2",
                        label: this.$t("home.progress.p_buy_coin")
                    }, {
                        key: "progress3",
                        label: this.$t("home.progress.p_transfer")
                    }, {
                        key: "progress4",
                        label: this.$t("home.progress.p_win")
                    }])
                },
                coinPlatform: function() {
                    var e = this.$i18n.locale;
                    return Object.freeze([{
                        platform: "gate",
                        link: "gate.io",
                        teach: "https://www.gate.io/".concat("zh-CN" === e ? "cn" : "en", "/help/guide")
                    }, {
                        platform: "binance",
                        link: "binance.com",
                        teach: "https://academy.binance.com/".concat("zh-CN" === e ? "zh" : "en", "/articles/binance-beginner-s-guide")
                    }, {
                        platform: "huobi",
                        link: "huobi.com",
                        teach: "https://www.huobi.com/support/".concat("zh-CN" === e ? "zh-cn" : "en-us", "/list/360000010372")
                    }, {
                        platform: "okex",
                        link: "okx.com",
                        teach: "https://www.okx.com/support/hc/".concat("zh-CN" === e ? "zh-cn" : "en-us", "/sections/360000033031-%E6%96%B0%E6%89%8B%E5%BF%85%E8%AF%BB")
                    }, {
                        platform: "zb",
                        link: "zb.com",
                        teach: "https://m.zb.com/".concat("zh-CN" === e ? "cn" : "en", "/index/")
                    }])
                }
            },
            methods: {
                formateAddress: function(e) {
                    return e ? e.substr(0, 5) + "......" + e.substr(-5) : ""
                },
                changeProgress: function(e) {
                    this.currentProgress = e
                }
            }
        }
          , f = (n(619),
        Object(d.a)(g, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "content-block progress-container"
            }, [a("div", {
                staticClass: "p-title progress1 wow fadeInUp"
            }, [a("i", [e._v("1")]), e._v(e._s(e.progressMenu[0].label) + "\n  ")]), e._v(" "), a("div", {
                staticClass: "progress-content progress1 wow fadeInUp"
            }, [a("div", {
                staticClass: "table"
            }, [a("div", {
                staticClass: "t-body"
            }, e._l(e.walletPlatform, (function(t, n) {
                return a("div", {
                    key: n,
                    class: "row wow fadeInUp"
                }, [a("span", [a("i", {
                    class: "platform-icon " + t.platform
                })]), e._v(" "), a("span", [a("a", {
                    staticClass: "link",
                    attrs: {
                        href: "http://" + t.link,
                        target: "_blank"
                    }
                }, [e._v(e._s(t.link))])]), e._v(" "), a("span", [a("NuxtLink", {
                    staticClass: "link-btn",
                    attrs: {
                        to: t.teach
                    }
                }, [e._v(e._s(e.$t("home.progress.detail_teach")))])], 1)])
            }
            )), 0)])]), e._v(" "), a("div", {
                staticClass: "p-title progress1 wow fadeInUp"
            }, [a("i", [e._v("2")]), e._v(e._s(e.progressMenu[1].label) + "\n  ")]), e._v(" "), a("div", {
                staticClass: "progress-content wow fadeInUp"
            }, [a("div", {
                staticClass: "table"
            }, [a("div", {
                staticClass: "t-body"
            }, e._l(e.coinPlatform, (function(t, n) {
                return a("div", {
                    key: n,
                    class: "row wow fadeInUp"
                }, [a("span", [a("i", {
                    class: "platform-icon " + t.platform
                })]), e._v(" "), a("span", [a("a", {
                    staticClass: "link",
                    attrs: {
                        href: "http://" + t.link,
                        target: "_blank"
                    }
                }, [e._v(e._s(t.link))])]), e._v(" "), a("span", [a("a", {
                    staticClass: "link-btn",
                    attrs: {
                        href: t.teach,
                        target: "_blank"
                    }
                }, [e._v(e._s(e.$t("home.progress.detail_teach")))])])])
            }
            )), 0)])]), e._v(" "), a("div", {
                staticClass: "p-title progress1 wow fadeInUp"
            }, [a("i", [e._v("3")]), e._v(e._s(e.progressMenu[2].label) + "\n  ")]), e._v(" "), a("div", {
                staticClass: "progress-content wow fadeInUp"
            }, [a("div", {
                staticClass: "progress3"
            }, [a("div", {
                staticClass: "table"
            }, [a("div", {
                staticClass: "t-body"
            }, e._l(e.games, (function(t) {
                return a("div", {
                    key: t.type,
                    class: "row wow fadeInUp"
                }, [a("span", [e._v(e._s(t.name))]), e._v(" "), a("span", {
                    directives: [{
                        name: "clipboard",
                        rawName: "v-clipboard:copy",
                        value: t.address,
                        expression: "item.address",
                        arg: "copy"
                    }, {
                        name: "clipboard",
                        rawName: "v-clipboard:success",
                        value: e.onCopy,
                        expression: "onCopy",
                        arg: "success"
                    }, {
                        name: "clipboard",
                        rawName: "v-clipboard:error",
                        value: e.onError,
                        expression: "onError",
                        arg: "error"
                    }]
                }, [e._v(e._s(e.formateAddress(t.address)) + " "), a("i", {
                    staticClass: "copy"
                })]), e._v(" "), a("span", {
                    staticClass: "red"
                }, [e._v(e._s(t.odds))])])
            }
            )), 0)])])]), e._v(" "), a("div", {
                staticClass: "p-title progress1 wow fadeInUp"
            }, [a("i", [e._v("4")]), e._v(e._s(e.progressMenu[3].label) + "\n  ")]), e._v(" "), a("div", {
                staticClass: "progress-content wow fadeInUp"
            }, [a("div", {
                staticClass: "progress4 center"
            }, [a("div", {
                staticClass: "desc"
            }, [e._v("\n        " + e._s(e.$t("home.progress.p_win_desc")) + "\n      ")]), e._v(" "), a("img", {
                staticClass: "title",
                attrs: {
                    src: n(616)("./" + e.lang + "/progress-4-title.png")
                }
            })])])])
        }
        ), [], !1, null, "0b2ed9fa", null).exports)
          , v = n(577)
          , b = (n(353),
        {
            components: {
                Header: r.a,
                LangSelect: p,
                QrAddress: i.a,
                GameRule: h.a,
                HomeProgress: f,
                transitionCollapse: v.a,
                videoPlayer: o.videoPlayer
            },
            mixins: [m.a, u.a],
            data: function() {
                return this.mainDom = null,
                {
                    player: null,
                    isMobile: navigator.userAgent.includes("Mobile"),
                    headerBackgroundColor: "transparent",
                    currentGameIndex: 0,
                    showGameExample: !1,
                    showQuestion: !0,
                    showProgress: !0,
                    videoDialogVisible: !1,
                    playerOptions: {
                        muted: !1,
                        language: "en",
                        playbackRates: [.7, 1, 1.5, 2],
                        sources: [{
                            type: "video/mp4",
                            src: n(625)
                        }],
                        poster: "/static/images/author.jpg"
                    }
                }
            },
            computed: {
                lang: function() {
                    return this.$i18n.locale
                },
                userInfo: function() {
                    return this.$store.getters.userInfo
                },
                langModel: function() {
                    return this.$store.getters.langModelVisible
                },
                question: function() {
                    return Object.freeze([{
                        title: this.$t("home.question.q1"),
                        content: this.$t("home.question.a1") + '（<span style="color: #d34c0b;">'.concat(this.$t("home.question.tips"), "</span>）")
                    }, {
                        title: this.$t("home.question.q2"),
                        content: this.$t("home.question.a2")
                    }, {
                        title: this.$t("home.question.q3"),
                        content: this.$t("home.question.a3")
                    }, {
                        title: this.$t("home.question.q4"),
                        content: this.$t("home.question.a4")
                    }, {
                        title: this.$t("home.question.q5"),
                        content: this.$t("home.question.a5")
                    }])
                }
            },
            watch: {
                $route: {
                    handler: function(e, t) {
                        var n = this;
                        this.$nextTick((function() {
                            new n.$wow({
                                offset: 50,
                                scrollContainer: ".app"
                            }).init()
                        }
                        ))
                    },
                    immediate: !0
                }
            },
            mounted: function() {
                this.mainDom = document.querySelector(".app"),
                this.mainDom.addEventListener("scroll", this.handleScroll)
            },
            beforeDestroy: function() {
                this.mainDom && this.mainDom.removeEventListener("scroll", this.handleScroll),
                this.$store.commit("SET_LANG_MODEL", !1)
            },
            methods: {
                goShare: function() {
                    this.userInfo && this.userInfo.token ? this.$router.push("/mobile/commission") : this.$router.push("/mobile/login")
                },
                goMine: function() {
                    this.userInfo && this.userInfo.token ? this.$router.push("/mobile/pageMine") : this.$router.push("/mobile/login")
                },
                handleScroll: function() {
                    if (this.mainDom) {
                        var e = this.mainDom.pageYOffset || this.mainDom.scrollTop || this.mainDom.scrollTop;
                        e ? this.headerBackgroundColor = "rgba(28, 42, 55,".concat(e / 180, ")") : 0 === e && (this.headerBackgroundColor = "transparent"),
                        this.langModel && this.$store.commit("SET_LANG_MODEL", !1)
                    }
                },
                changeMenu: function(e) {
                    this.currentGameIndex = e
                },
                _showDialog: function(e) {
                    0 === e && (this.videoDialogVisible = !0,
                    this.player && this.player.play())
                },
                onPlayerPlay: function(e) {},
                onPlayerPause: function(e) {},
                onPlayerEnded: function(e) {},
                onPlayerLoadeddata: function(e) {},
                onPlayerWaiting: function(e) {},
                onPlayerPlaying: function(e) {},
                onPlayerTimeupdate: function(e) {},
                onPlayerCanplay: function(e) {},
                onPlayerCanplaythrough: function(e) {
                    this.player = e,
                    e.play()
                },
                playerStateChanged: function(e) {},
                playerReadied: function(e) {},
                _popupClosed: function() {
                    this.player.pause()
                }
            }
        })
          , w = (n(626),
        {
            components: {
                Home: Object(d.a)(b, (function() {
                    var e = this
                      , t = e.$createElement
                      , a = e._self._c || t;
                    return a("div", {
                        staticClass: "home"
                    }, [e.videoDialogVisible ? e._e() : a("Header", {
                        staticClass: "header-transparent"
                    }, [a("div", {
                        staticClass: "home-header",
                        style: "background: " + e.headerBackgroundColor
                    }, [a("img", {
                        staticClass: "logo",
                        attrs: {
                            src: n(580)("./logo-" + e.lang + ".png")
                        }
                    }), e._v(" "), a("span", [a("lang-select", {
                        staticClass: "lang-select",
                        attrs: {
                            list: e.langs,
                            selected: e.selected,
                            "show-flag": e.langModel,
                            "disabled-dialog": ""
                        },
                        on: {
                            changeValue: e.changeLang
                        }
                    }), e._v(" "), a("span", {
                        on: {
                            click: e.goShare
                        }
                    }, [a("img", {
                        staticClass: "header-icon",
                        attrs: {
                            src: n(521)
                        }
                    })]), e._v(" "), a("span", {
                        on: {
                            click: e.goMine
                        }
                    }, [a("img", {
                        staticClass: "header-icon user",
                        attrs: {
                            src: n(581)
                        }
                    })])], 1)])]), e._v(" "), a("div", {
                        staticClass: "banner"
                    }, [a("img", {
                        attrs: {
                            src: n(582)("./" + e.lang + "/banner.jpg")
                        }
                    })]), e._v(" "), a("div", {
                        class: ["content-block", "game-container", {
                            open: e.showGameExample
                        }]
                    }, [a("ul", {
                        staticClass: "game-menu"
                    }, e._l(e.games, (function(t, n) {
                        return a("li", {
                            key: t.key,
                            class: ["gm-item", {
                                active: e.currentGameIndex === n
                            }],
                            on: {
                                click: function(t) {
                                    return e.changeMenu(n)
                                }
                            }
                        }, [a("div", {
                            staticClass: "gm-item-text"
                        }, [e._v(e._s(t.name))])])
                    }
                    )), 0), e._v(" "), e.games[e.currentGameIndex] ? a("div", {
                        key: e.games[e.currentGameIndex].type,
                        staticClass: "game-content"
                    }, [a("div", {
                        staticClass: "address animated animated-delay-1 fadeInUp"
                    }, [a("qr-address", {
                        attrs: {
                            title: e.$t("offical_address"),
                            value: e.games[e.currentGameIndex].address,
                            showCopy: !0
                        }
                    })], 1), e._v(" "), a("game-rule", {
                        attrs: {
                            lang: e.lang,
                            gameInfo: e.games[e.currentGameIndex],
                            animated: !0,
                            showGameExample: e.showGameExample,
                            isSwiper: !0
                        }
                    })], 1) : e._e()]), e._v(" "), a("div", {
                        staticClass: "btn-more",
                        on: {
                            click: function(t) {
                                e.showGameExample = !e.showGameExample
                            }
                        }
                    }, [a("div", {
                        class: ["arrow", {
                            open: e.showGameExample
                        }]
                    })]), e._v(" "), a("div", [a("img", {
                        staticClass: "block-title",
                        attrs: {
                            src: n(583)("./" + e.lang + "/title-process.png")
                        }
                    }), e._v(" "), a("transition-collapse", [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showProgress,
                            expression: "showProgress"
                        }]
                    }, [a("home-progress", {
                        attrs: {
                            games: e.games
                        }
                    })], 1)]), e._v(" "), a("div", {
                        staticClass: "btn-more",
                        on: {
                            click: function(t) {
                                e.showProgress = !e.showProgress
                            }
                        }
                    }, [a("div", {
                        class: ["arrow", {
                            open: e.showProgress
                        }]
                    })])], 1), e._v(" "), a("div", [a("img", {
                        staticClass: "block-title",
                        attrs: {
                            src: n(586)("./" + e.lang + "/title-problem.png")
                        }
                    }), e._v(" "), a("transition-collapse", [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.showQuestion,
                            expression: "showQuestion"
                        }],
                        staticClass: "content-block question-container"
                    }, e._l(e.question, (function(t, n) {
                        return a("div", {
                            key: n,
                            staticClass: "question-item wow fadeInUp"
                        }, [a("div", {
                            staticClass: "title"
                        }, [e._v(e._s(t.title))]), e._v(" "), a("div", {
                            staticClass: "content",
                            domProps: {
                                innerHTML: e._s(t.content)
                            },
                            on: {
                                click: function(t) {
                                    return e._showDialog(n)
                                }
                            }
                        })])
                    }
                    )), 0)]), e._v(" "), a("div", {
                        staticClass: "btn-more",
                        on: {
                            click: function(t) {
                                e.showQuestion = !e.showQuestion
                            }
                        }
                    }, [a("div", {
                        class: ["arrow", {
                            open: e.showQuestion
                        }]
                    })])], 1), e._v(" "), a("img", {
                        staticClass: "block-title wow fadeInUp",
                        attrs: {
                            src: n(589)("./" + e.lang + "/title-cooperate.png")
                        }
                    }), e._v(" "), e._m(0), e._v(" "), a("NuxtLink", {
                        attrs: {
                            to: "/mobile/customer"
                        }
                    }, [a("img", {
                        staticClass: "icon-customer",
                        attrs: {
                            src: n(592)
                        }
                    })]), e._v(" "), a("van-popup", {
                        attrs: {
                            closeable: ""
                        },
                        on: {
                            close: function(t) {
                                return e._popupClosed(t)
                            }
                        },
                        model: {
                            value: e.videoDialogVisible,
                            callback: function(t) {
                                e.videoDialogVisible = t
                            },
                            expression: "videoDialogVisible"
                        }
                    }, [a("video-player", {
                        ref: "videoPlayer",
                        class: {
                            videodialog: e.isMobile,
                            videodialogpc: !e.isMobile
                        },
                        attrs: {
                            options: e.playerOptions,
                            playsinline: !0,
                            customEventName: "customstatechangedeventname"
                        },
                        on: {
                            play: function(t) {
                                return e.onPlayerPlay(t)
                            },
                            pause: function(t) {
                                return e.onPlayerPause(t)
                            },
                            ended: function(t) {
                                return e.onPlayerEnded(t)
                            },
                            waiting: function(t) {
                                return e.onPlayerWaiting(t)
                            },
                            playing: function(t) {
                                return e.onPlayerPlaying(t)
                            },
                            loadeddata: function(t) {
                                return e.onPlayerLoadeddata(t)
                            },
                            timeupdate: function(t) {
                                return e.onPlayerTimeupdate(t)
                            },
                            canplay: function(t) {
                                return e.onPlayerCanplay(t)
                            },
                            canplaythrough: function(t) {
                                return e.onPlayerCanplaythrough(t)
                            },
                            statechanged: function(t) {
                                return e.playerStateChanged(t)
                            },
                            ready: e.playerReadied
                        }
                    })], 1)], 1)
                }
                ), a, !1, null, "29db67ae", null).exports
            },
            data: function() {
                return {
                    active: 2
                }
            },
            created: function() {
                var e = sessionStorage.getItem("pageIndex");
                e ? this.active = Number(e) : (this.active = 2,
                sessionStorage.setItem("pageIndex", 2))
            },
            mounted: function() {
                if (this.$route.query && this.$route.query.memberId) {
                    var e = this.$route.query.memberId;
                    sessionStorage.setItem("memberId", e)
                }
            },
            methods: {
                bottomClick: function(e) {
                    console.log("e",e)
                    this.active = e
                }
            }
        })
          , A = (n(631),
        Object(d.a)(w, (function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("div", {
                staticClass: "app common-not-scroll-bar"
            }, [t("Home")], 1)
        }
        ), [], !1, null, null, null));
        t.default = A.exports
    }
}]);
