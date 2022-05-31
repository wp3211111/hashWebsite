(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    121: function(n, t, e) {
        "use strict";
        e(52),
        e(45),
        e(68),
        e(59),
        e(33),
        e(61),
        e(49),
        e(46),
        e(72),
        e(73),
        e(74);
        var a = e(3);
        function r(n, t) {
            var e = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
            if (!e) {
                if (Array.isArray(n) || (e = function(n, t) {
                    if (!n)
                        return;
                    if ("string" == typeof n)
                        return i(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e)
                        return Array.from(n);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                        return i(n, t)
                }(n)) || t && n && "number" == typeof n.length) {
                    e && (n = e);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= n.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: n[a++]
                            }
                        },
                        e: function(n) {
                            throw n
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, s = !0, c = !1;
            return {
                s: function() {
                    e = e.call(n)
                },
                n: function() {
                    var n = e.next();
                    return s = n.done,
                    n
                },
                e: function(n) {
                    c = !0,
                    o = n
                },
                f: function() {
                    try {
                        s || null == e.return || e.return()
                    } finally {
                        if (c)
                            throw o
                    }
                }
            }
        }
        function i(n, t) {
            (null == t || t > n.length) && (t = n.length);
            for (var e = 0, a = new Array(t); e < t; e++)
                a[e] = n[e];
            return a
        }
        var o = window.requestIdleCallback || function(n) {
            var t = Date.now();
            return setTimeout((function() {
                n({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }
            ), 1)
        }
          , s = window.cancelIdleCallback || function(n) {
            clearTimeout(n)
        }
          , c = window.IntersectionObserver && new window.IntersectionObserver((function(n) {
            n.forEach((function(n) {
                var t = n.intersectionRatio
                  , e = n.target;
                t <= 0 || !e.__prefetch || e.__prefetch()
            }
            ))
        }
        ));
        t.a = {
            name: "NuxtLink",
            extends: a.default.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                s(this.handleId),
                this.__observed && (c.unobserve(this.$el),
                delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    c && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this),
                    c.observe(this.$el),
                    this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var n = navigator.connection;
                    return !(this.$nuxt.isOffline || n && ((n.effectiveType || "").includes("2g") || n.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(n) {
                        return n.components.default
                    }
                    )).filter((function(n) {
                        return "function" == typeof n && !n.options && !n.__prefetched
                    }
                    ))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        c.unobserve(this.$el);
                        var n, t = r(this.getPrefetchComponents());
                        try {
                            for (t.s(); !(n = t.n()).done; ) {
                                var e = n.value
                                  , a = e();
                                a instanceof Promise && a.catch((function() {}
                                )),
                                e.__prefetched = !0
                            }
                        } catch (n) {
                            t.e(n)
                        } finally {
                            t.f()
                        }
                    }
                }
            }
        }
    },
    148: function(n, t, e) {
        "use strict";
        var a = {};
        a.skeleton = e(375),
        a.skeleton = a.skeleton.default || a.skeleton,
        t.a = a
    },
    151: function(n, t, e) {
        var a = e(405);
        function r() {
            return (r = a(regeneratorRuntime.mark((function n() {
                var t, a, r;
                return regeneratorRuntime.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (!(!1 in navigator)) {
                                n.next = 2;
                                break
                            }
                            throw new Error("serviceWorker is not supported in current browser!");
                        case 2:
                            return n.next = 4,
                            e.e(23).then(e.bind(null, 493));
                        case 4:
                            return t = n.sent,
                            a = t.Workbox,
                            r = new a("/sw.js",{
                                scope: "/"
                            }),
                            n.next = 9,
                            r.register();
                        case 9:
                            return n.abrupt("return", r);
                        case 10:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))).apply(this, arguments)
        }
        e(81),
        window.$workbox = function() {
            return r.apply(this, arguments)
        }().catch((function(n) {}
        ))
    },
    153: function(n, t) {
        window.onload = function() {
            document.addEventListener("touchstart", (function(n) {
                n.touches.length > 1 && n.preventDefault()
            }
            ));
            var n = 0;
            document.addEventListener("touchend", (function(t) {
                var e = (new Date).getTime();
                e - n <= 300 && t.preventDefault(),
                n = e
            }
            ), !1),
            document.addEventListener("gesturestart", (function(n) {
                n.preventDefault()
            }
            ))
        }
    },
    154: function(n, t) {
        var e;
        "serviceWorker"in navigator && navigator.serviceWorker.register("/nuxt-chain-bet/dist/sw.js").then((function() {}
        ));
        var a = document.getElementById("AddScreenBtn");
        window.addEventListener("beforeinstallprompt", (function(n) {
            n.preventDefault(),
            e = n,
            a.addEventListener("click", (function() {
                e.prompt(),
                e.userChoice.then((function(n) {
                    n.outcome,
                    e = null
                }
                ))
            }
            ))
        }
        ))
    },
    157: function(n, t, e) {
        "use strict";
        var a, r = e(3), i = (e(459),
        {
            name: "Toast",
            data: function() {
                return {
                    content: "",
                    duration: 1500,
                    type: ""
                }
            },
            mounted: function() {
                var n = this;
                setTimeout((function() {
                    n.$destroy(!0),
                    n.$el.parentNode.removeChild(n.$el)
                }
                ), this.duration)
            }
        }), o = (e(461),
        e(58)), s = Object(o.a)(i, (function() {
            var n = this
              , t = n.$createElement
              , e = n._self._c || t;
            return e("div", {
                staticClass: "toast",
                class: n.type ? "toast--" + n.type : ""
            }, [e("div", {
                staticClass: "content"
            }, ["success" === n.type ? e("van-icon", {
                staticClass: "icon",
                attrs: {
                    name: "success"
                }
            }) : n._e(), n._v(" "), "error" === n.type ? e("van-icon", {
                staticClass: "icon",
                attrs: {
                    name: "fail"
                }
            }) : n._e(), n._v(" "), "loading" === n.type ? e("van-loading", {
                staticClass: "icon"
            }) : n._e(), n._v(" "), e("p", [n._v(n._s(n.content))])], 1)])
        }
        ), [], !1, null, "25fe4e22", null).exports, c = r.default.extend(s), u = function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                content: "",
                duration: 1500
            };
            a = new c({
                data: n
            }),
            document.body.appendChild(a.$mount().$el)
        };
        ["success", "error", "loading"].forEach((function(n) {
            u[n] = function(t) {
                return t.type = n,
                u(t)
            }
        }
        ));
        t.a = u
    },
    180: function(n, t, e) {
        var a = e(389);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[n.i, a, ""]]),
        a.locals && (n.exports = a.locals);
        (0,
        e(44).default)("72daabed", a, !0, {
            sourceMap: !1
        })
    },
    181: function(n, t, e) {
        var a = e(391);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[n.i, a, ""]]),
        a.locals && (n.exports = a.locals);
        (0,
        e(44).default)("3191d5ad", a, !0, {
            sourceMap: !1
        })
    },
    182: function(n, t, e) {
        var a = e(401);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[n.i, a, ""]]),
        a.locals && (n.exports = a.locals);
        (0,
        e(44).default)("84455a9e", a, !0, {
            sourceMap: !1
        })
    },
    336: function(n, t, e) {
        var a = e(462);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[n.i, a, ""]]),
        a.locals && (n.exports = a.locals);
        (0,
        e(44).default)("d942905e", a, !0, {
            sourceMap: !1
        })
    },
    337: function(n, t) {
        n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="
    },
    341: function(n) {
        n.exports = JSON.parse('{"title":"nuxt-chain-bet","meta":[{"hid":"charset","charset":"utf-8"},{"hid":"viewport","name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"nuxt-chain-bet"},{"hid":"description","name":"description","content":"## 哈希客户端"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"nuxt-chain-bet"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"nuxt-chain-bet"},{"hid":"og:description","name":"og:description","property":"og:description","content":"## 哈希客户端"}],"link":[{"hid":"shortcut-icon","rel":"shortcut icon","href":"/favicon.ico"},{"rel":"manifest","href":"/_nuxt/manifest.d424d28d.json","hid":"manifest"}],"htmlAttrs":{"lang":"en"}}')
    },
    349: function(n, t, e) {
        "use strict";
        var a = e(24)
          , r = (e(81),
        e(33),
        e(3))
          , i = e(7)
          , o = window.__NUXT__;
        function s() {
            if (!this._hydrated)
                return this.$fetch()
        }
        function c() {
            if ((n = this).$vnode && n.$vnode.elm && n.$vnode.elm.dataset && n.$vnode.elm.dataset.fetchKey) {
                var n;
                this._hydrated = !0,
                this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var t = o.fetch[this._fetchKey];
                if (t && t._error)
                    this.$fetchState.error = t._error;
                else
                    for (var e in t)
                        r.default.set(this.$data, e, t[e])
            }
        }
        function u() {
            var n = this;
            return this._fetchPromise || (this._fetchPromise = l.call(this).then((function() {
                delete n._fetchPromise
            }
            ))),
            this._fetchPromise
        }
        function l() {
            return p.apply(this, arguments)
        }
        function p() {
            return (p = Object(a.a)(regeneratorRuntime.mark((function n() {
                var t, e, a, r = this;
                return regeneratorRuntime.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return this.$nuxt.nbFetching++,
                            this.$fetchState.pending = !0,
                            this.$fetchState.error = null,
                            this._hydrated = !1,
                            t = null,
                            e = Date.now(),
                            n.prev = 6,
                            n.next = 9,
                            this.$options.fetch.call(this);
                        case 9:
                            n.next = 15;
                            break;
                        case 11:
                            n.prev = 11,
                            n.t0 = n.catch(6),
                            t = Object(i.p)(n.t0);
                        case 15:
                            if (!((a = this._fetchDelay - (Date.now() - e)) > 0)) {
                                n.next = 19;
                                break
                            }
                            return n.next = 19,
                            new Promise((function(n) {
                                return setTimeout(n, a)
                            }
                            ));
                        case 19:
                            this.$fetchState.error = t,
                            this.$fetchState.pending = !1,
                            this.$fetchState.timestamp = Date.now(),
                            this.$nextTick((function() {
                                return r.$nuxt.nbFetching--
                            }
                            ));
                        case 23:
                        case "end":
                            return n.stop()
                        }
                }
                ), n, this, [[6, 11]])
            }
            )))).apply(this, arguments)
        }
        t.a = {
            beforeCreate: function() {
                Object(i.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200,
                r.default.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }),
                this.$fetch = u.bind(this),
                Object(i.a)(this, "created", c),
                Object(i.a)(this, "beforeMount", s))
            }
        }
    },
    352: function(n, t) {
        n.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAD/3qn/26f//8D/3Kj/3Kj/3an/3qj/3Kj/3Kj/3Kf/26j/26f/26j/26j/3af/36r/36f/5bz/3Kj/3Kj/26c696+MAAAAFXRSTlMAJuUE+LNKPfGn5tXIlYdaMCAJ59iK36XCAAABPUlEQVRIx52W2xKDIAxEUUG8i+j+/6/WaesQaVKZ7JuOZ0zCksSwarbgfdgaU6amnUeLt+w4t89Y23e4qevbv4CfwGjyIlA5CHIVT6wWouzKZb3gr5afOkSHB7mY/SMRMnP/z4ICLbfMUaSVVNeWITbV2qFQ7iI8inX5gLpkdzb32EG983Uiko5oqpoSdWXijqSPR3sk9cacDCWyVPv3KXY0jIoyJ5HXs2tIXPSjOnvIIpvBMRKB+Xw3gmUEAuOZigXP8ARsYzaAZyhBtZkAgREIBOMhMAIBzyPDBxl4JAiEyARF+mKRh0Esshl5QjxKhWEUtszNb6+oKNPdzJ9fMZeIxGR3MItsj1+CMPGgcf22iyMfSdbtSJoUTUnR+hQNVtHGFcNCMZIUg08xXhVDXLEqKBYSxdqjW64UK9wLLb+DkfBMEIcAAAAASUVORK5CYII="
    },
    355: function(n, t, e) {
        n.exports = e(356)
    },
    356: function(n, t, e) {
        "use strict";
        e.r(t),
        function(n) {
            e(61),
            e(46),
            e(72);
            var t = e(51)
              , a = e(24)
              , r = (e(134),
            e(364),
            e(370),
            e(372),
            e(81),
            e(49),
            e(59),
            e(78),
            e(52),
            e(45),
            e(68),
            e(73),
            e(33),
            e(74),
            e(3))
              , i = e(338)
              , o = e(148)
              , s = e(7)
              , c = e(57)
              , u = e(349)
              , l = e(121);
            function p(n, t) {
                var e = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                if (!e) {
                    if (Array.isArray(n) || (e = function(n, t) {
                        if (!n)
                            return;
                        if ("string" == typeof n)
                            return m(n, t);
                        var e = Object.prototype.toString.call(n).slice(8, -1);
                        "Object" === e && n.constructor && (e = n.constructor.name);
                        if ("Map" === e || "Set" === e)
                            return Array.from(n);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                            return m(n, t)
                    }(n)) || t && n && "number" == typeof n.length) {
                        e && (n = e);
                        var a = 0
                          , r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return a >= n.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: n[a++]
                                }
                            },
                            e: function(n) {
                                throw n
                            },
                            f: r
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, o = !0, s = !1;
                return {
                    s: function() {
                        e = e.call(n)
                    },
                    n: function() {
                        var n = e.next();
                        return o = n.done,
                        n
                    },
                    e: function(n) {
                        s = !0,
                        i = n
                    },
                    f: function() {
                        try {
                            o || null == e.return || e.return()
                        } finally {
                            if (s)
                                throw i
                        }
                    }
                }
            }
            function m(n, t) {
                (null == t || t > n.length) && (t = n.length);
                for (var e = 0, a = new Array(t); e < t; e++)
                    a[e] = n[e];
                return a
            }
            r.default.__nuxt__fetch__mixin__ || (r.default.mixin(u.a),
            r.default.__nuxt__fetch__mixin__ = !0),
            r.default.component(l.a.name, l.a),
            r.default.component("NLink", l.a),
            n.fetch || (n.fetch = i.a);
            var f, d, h = [], g = window.__NUXT__ || {}, y = g.config || {};
            y._app && (e.p = Object(s.u)(y._app.cdnURL, y._app.assetsPath)),
            Object.assign(r.default.config, {
                silent: !0,
                performance: !1
            });
            var b = r.default.config.errorHandler || console.error;
            function v(n, t, e) {
                for (var a = function(n) {
                    var a = function(n, t) {
                        if (!n || !n.options || !n.options[t])
                            return {};
                        var e = n.options[t];
                        if ("function" == typeof e) {
                            for (var a = arguments.length, r = new Array(a > 2 ? a - 2 : 0), i = 2; i < a; i++)
                                r[i - 2] = arguments[i];
                            return e.apply(void 0, r)
                        }
                        return e
                    }(n, "transition", t, e) || {};
                    return "string" == typeof a ? {
                        name: a
                    } : a
                }, r = e ? Object(s.g)(e) : [], i = Math.max(n.length, r.length), o = [], c = function(t) {
                    var e = Object.assign({}, a(n[t]))
                      , i = Object.assign({}, a(r[t]));
                    Object.keys(e).filter((function(n) {
                        return void 0 !== e[n] && !n.toLowerCase().includes("leave")
                    }
                    )).forEach((function(n) {
                        i[n] = e[n]
                    }
                    )),
                    o.push(i)
                }, u = 0; u < i; u++)
                    c(u);
                return o
            }
            function w(n, t, e) {
                return N.apply(this, arguments)
            }
            function N() {
                return (N = Object(a.a)(regeneratorRuntime.mark((function n(t, e, a) {
                    var r, i, o, c, u = this;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (this._routeChanged = Boolean(f.nuxt.err) || e.name !== t.name,
                                this._paramChanged = !this._routeChanged && e.path !== t.path,
                                this._queryChanged = !this._paramChanged && e.fullPath !== t.fullPath,
                                this._diffQuery = this._queryChanged ? Object(s.i)(t.query, e.query) : [],
                                (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(),
                                n.prev = 5,
                                !this._queryChanged) {
                                    n.next = 12;
                                    break
                                }
                                return n.next = 9,
                                Object(s.r)(t, (function(n, t) {
                                    return {
                                        Component: n,
                                        instance: t
                                    }
                                }
                                ));
                            case 9:
                                r = n.sent,
                                r.some((function(n) {
                                    var a = n.Component
                                      , r = n.instance
                                      , i = a.options.watchQuery;
                                    return !0 === i || (Array.isArray(i) ? i.some((function(n) {
                                        return u._diffQuery[n]
                                    }
                                    )) : "function" == typeof i && i.apply(r, [t.query, e.query]))
                                }
                                )) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                            case 12:
                                a(),
                                n.next = 26;
                                break;
                            case 15:
                                if (n.prev = 15,
                                n.t0 = n.catch(5),
                                i = n.t0 || {},
                                o = i.statusCode || i.status || i.response && i.response.status || 500,
                                c = i.message || "",
                                !/^Loading( CSS)? chunk (\d)+ failed\./.test(c)) {
                                    n.next = 23;
                                    break
                                }
                                return window.location.reload(!0),
                                n.abrupt("return");
                            case 23:
                                this.error({
                                    statusCode: o,
                                    message: c
                                }),
                                this.$nuxt.$emit("routeChanged", t, e, i),
                                a();
                            case 26:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, this, [[5, 15]])
                }
                )))).apply(this, arguments)
            }
            function k(n, t) {
                return g.serverRendered && t && Object(s.b)(n, t),
                n._Ctor = n,
                n
            }
            function _(n) {
                return Object(s.d)(n, function() {
                    var n = Object(a.a)(regeneratorRuntime.mark((function n(t, e, a, r, i) {
                        var o;
                        return regeneratorRuntime.wrap((function(n) {
                            for (; ; )
                                switch (n.prev = n.next) {
                                case 0:
                                    if ("function" != typeof t || t.options) {
                                        n.next = 4;
                                        break
                                    }
                                    return n.next = 3,
                                    t();
                                case 3:
                                    t = n.sent;
                                case 4:
                                    return o = k(Object(s.s)(t), g.data ? g.data[i] : null),
                                    a.components[r] = o,
                                    n.abrupt("return", o);
                                case 7:
                                case "end":
                                    return n.stop()
                                }
                        }
                        ), n)
                    }
                    )));
                    return function(t, e, a, r, i) {
                        return n.apply(this, arguments)
                    }
                }())
            }
            function x(n, t, e) {
                var a = this
                  , r = ["skeleton"]
                  , i = !1;
                if (void 0 !== e && (r = [],
                (e = Object(s.s)(e)).options.middleware && (r = r.concat(e.options.middleware)),
                n.forEach((function(n) {
                    n.options.middleware && (r = r.concat(n.options.middleware))
                }
                ))),
                r = r.map((function(n) {
                    return "function" == typeof n ? n : ("function" != typeof o.a[n] && (i = !0,
                    a.error({
                        statusCode: 500,
                        message: "Unknown middleware " + n
                    })),
                    o.a[n])
                }
                )),
                !i)
                    return Object(s.o)(r, t)
            }
            function O(n, t, e) {
                return j.apply(this, arguments)
            }
            function j() {
                return j = Object(a.a)(regeneratorRuntime.mark((function n(t, e, r) {
                    var i, o, u, l, m, d, g, y, b, w, N, k, _, O, j, E = this;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                    n.next = 2;
                                    break
                                }
                                return n.abrupt("return", r());
                            case 2:
                                return !1,
                                t === e ? (h = [],
                                !0) : (i = [],
                                h = Object(s.g)(e, i).map((function(n, t) {
                                    return Object(s.c)(e.matched[i[t]].path)(e.params)
                                }
                                ))),
                                o = !1,
                                u = function(n) {
                                    e.path === n.path && E.$loading.finish && E.$loading.finish(),
                                    e.path !== n.path && E.$loading.pause && E.$loading.pause(),
                                    o || (o = !0,
                                    r(n))
                                }
                                ,
                                n.next = 8,
                                Object(s.t)(f, {
                                    route: t,
                                    from: e,
                                    next: u.bind(this)
                                });
                            case 8:
                                if (this._dateLastError = f.nuxt.dateErr,
                                this._hadError = Boolean(f.nuxt.err),
                                l = [],
                                (m = Object(s.g)(t, l)).length) {
                                    n.next = 27;
                                    break
                                }
                                return n.next = 15,
                                x.call(this, m, f.context);
                            case 15:
                                if (!o) {
                                    n.next = 17;
                                    break
                                }
                                return n.abrupt("return");
                            case 17:
                                return d = (c.a.options || c.a).layout,
                                n.next = 20,
                                this.loadLayout("function" == typeof d ? d.call(c.a, f.context) : d);
                            case 20:
                                return g = n.sent,
                                n.next = 23,
                                x.call(this, m, f.context, g);
                            case 23:
                                if (!o) {
                                    n.next = 25;
                                    break
                                }
                                return n.abrupt("return");
                            case 25:
                                return f.context.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                n.abrupt("return", r());
                            case 27:
                                return m.forEach((function(n) {
                                    n._Ctor && n._Ctor.options && (n.options.asyncData = n._Ctor.options.asyncData,
                                    n.options.fetch = n._Ctor.options.fetch)
                                }
                                )),
                                this.setTransitions(v(m, t, e)),
                                n.prev = 29,
                                n.next = 32,
                                x.call(this, m, f.context);
                            case 32:
                                if (!o) {
                                    n.next = 34;
                                    break
                                }
                                return n.abrupt("return");
                            case 34:
                                if (!f.context._errored) {
                                    n.next = 36;
                                    break
                                }
                                return n.abrupt("return", r());
                            case 36:
                                return "function" == typeof (y = m[0].options.layout) && (y = y(f.context)),
                                n.next = 40,
                                this.loadLayout(y);
                            case 40:
                                return y = n.sent,
                                n.next = 43,
                                x.call(this, m, f.context, y);
                            case 43:
                                if (!o) {
                                    n.next = 45;
                                    break
                                }
                                return n.abrupt("return");
                            case 45:
                                if (!f.context._errored) {
                                    n.next = 47;
                                    break
                                }
                                return n.abrupt("return", r());
                            case 47:
                                b = !0,
                                n.prev = 48,
                                w = p(m),
                                n.prev = 50,
                                w.s();
                            case 52:
                                if ((N = w.n()).done) {
                                    n.next = 63;
                                    break
                                }
                                if ("function" == typeof (k = N.value).options.validate) {
                                    n.next = 56;
                                    break
                                }
                                return n.abrupt("continue", 61);
                            case 56:
                                return n.next = 58,
                                k.options.validate(f.context);
                            case 58:
                                if (b = n.sent) {
                                    n.next = 61;
                                    break
                                }
                                return n.abrupt("break", 63);
                            case 61:
                                n.next = 52;
                                break;
                            case 63:
                                n.next = 68;
                                break;
                            case 65:
                                n.prev = 65,
                                n.t0 = n.catch(50),
                                w.e(n.t0);
                            case 68:
                                return n.prev = 68,
                                w.f(),
                                n.finish(68);
                            case 71:
                                n.next = 77;
                                break;
                            case 73:
                                return n.prev = 73,
                                n.t1 = n.catch(48),
                                this.error({
                                    statusCode: n.t1.statusCode || "500",
                                    message: n.t1.message
                                }),
                                n.abrupt("return", r());
                            case 77:
                                if (b) {
                                    n.next = 80;
                                    break
                                }
                                return this.error({
                                    statusCode: 404,
                                    message: "This page could not be found"
                                }),
                                n.abrupt("return", r());
                            case 80:
                                return n.next = 82,
                                Promise.all(m.map(function() {
                                    var n = Object(a.a)(regeneratorRuntime.mark((function n(a, r) {
                                        var i, o, c, u, p, m, d, g, y;
                                        return regeneratorRuntime.wrap((function(n) {
                                            for (; ; )
                                                switch (n.prev = n.next) {
                                                case 0:
                                                    if (a._path = Object(s.c)(t.matched[l[r]].path)(t.params),
                                                    a._dataRefresh = !1,
                                                    i = a._path !== h[r],
                                                    E._routeChanged && i ? a._dataRefresh = !0 : E._paramChanged && i ? (o = a.options.watchParam,
                                                    a._dataRefresh = !1 !== o) : E._queryChanged && (!0 === (c = a.options.watchQuery) ? a._dataRefresh = !0 : Array.isArray(c) ? a._dataRefresh = c.some((function(n) {
                                                        return E._diffQuery[n]
                                                    }
                                                    )) : "function" == typeof c && (_ || (_ = Object(s.h)(t)),
                                                    a._dataRefresh = c.apply(_[r], [t.query, e.query]))),
                                                    E._hadError || !E._isMounted || a._dataRefresh) {
                                                        n.next = 6;
                                                        break
                                                    }
                                                    return n.abrupt("return");
                                                case 6:
                                                    return u = [],
                                                    p = a.options.asyncData && "function" == typeof a.options.asyncData,
                                                    m = Boolean(a.options.fetch) && a.options.fetch.length,
                                                    d = p && m ? 30 : 45,
                                                    p && ((g = Object(s.q)(a.options.asyncData, f.context)).then((function(n) {
                                                        Object(s.b)(a, n),
                                                        E.$loading.increase && E.$loading.increase(d)
                                                    }
                                                    )),
                                                    u.push(g)),
                                                    E.$loading.manual = !1 === a.options.loading,
                                                    m && ((y = a.options.fetch(f.context)) && (y instanceof Promise || "function" == typeof y.then) || (y = Promise.resolve(y)),
                                                    y.then((function(n) {
                                                        E.$loading.increase && E.$loading.increase(d)
                                                    }
                                                    )),
                                                    u.push(y)),
                                                    n.abrupt("return", Promise.all(u));
                                                case 14:
                                                case "end":
                                                    return n.stop()
                                                }
                                        }
                                        ), n)
                                    }
                                    )));
                                    return function(t, e) {
                                        return n.apply(this, arguments)
                                    }
                                }()));
                            case 82:
                                o || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(),
                                r()),
                                n.next = 99;
                                break;
                            case 85:
                                if (n.prev = 85,
                                n.t2 = n.catch(29),
                                "ERR_REDIRECT" !== (O = n.t2 || {}).message) {
                                    n.next = 90;
                                    break
                                }
                                return n.abrupt("return", this.$nuxt.$emit("routeChanged", t, e, O));
                            case 90:
                                return h = [],
                                Object(s.k)(O),
                                "function" == typeof (j = (c.a.options || c.a).layout) && (j = j(f.context)),
                                n.next = 96,
                                this.loadLayout(j);
                            case 96:
                                this.error(O),
                                this.$nuxt.$emit("routeChanged", t, e, O),
                                r();
                            case 99:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, this, [[29, 85], [48, 73], [50, 65, 68, 71]])
                }
                ))),
                j.apply(this, arguments)
            }
            function E(n, e) {
                Object(s.d)(n, (function(n, e, a, i) {
                    return "object" !== Object(t.a)(n) || n.options || ((n = r.default.extend(n))._Ctor = n,
                    a.components[i] = n),
                    n
                }
                ))
            }
            function A(n) {
                var t = Boolean(this.$options.nuxt.err);
                this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (t = !1);
                var e = t ? (c.a.options || c.a).layout : n.matched[0].components.default.options.layout;
                "function" == typeof e && (e = e(f.context)),
                this.setLayout(e)
            }
            function R(n) {
                n._hadError && n._dateLastError === n.$options.nuxt.dateErr && n.error()
            }
            function C(n, t) {
                var e = this;
                if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                    var a = Object(s.h)(n)
                      , i = Object(s.g)(n)
                      , o = !1;
                    r.default.nextTick((function() {
                        a.forEach((function(n, t) {
                            if (n && !n._isDestroyed && n.constructor._dataRefresh && i[t] === n.constructor && !0 !== n.$vnode.data.keepAlive && "function" == typeof n.constructor.options.data) {
                                var e = n.constructor.options.data.call(n);
                                for (var a in e)
                                    r.default.set(n.$data, a, e[a]);
                                o = !0
                            }
                        }
                        )),
                        o && window.$nuxt.$nextTick((function() {
                            window.$nuxt.$emit("triggerScroll")
                        }
                        )),
                        R(e)
                    }
                    ))
                }
            }
            function S(n) {
                window.onNuxtReadyCbs.forEach((function(t) {
                    "function" == typeof t && t(n)
                }
                )),
                "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(n),
                d.afterEach((function(t, e) {
                    r.default.nextTick((function() {
                        return n.$nuxt.$emit("routeChanged", t, e)
                    }
                    ))
                }
                ))
            }
            function I() {
                return (I = Object(a.a)(regeneratorRuntime.mark((function n(t) {
                    var e, a, i, o, c;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return f = t.app,
                                d = t.router,
                                t.store,
                                e = new r.default(f),
                                a = g.layout || "default",
                                n.next = 7,
                                e.loadLayout(a);
                            case 7:
                                return e.setLayout(a),
                                i = function() {
                                    e.$mount("#__nuxt"),
                                    d.afterEach(E),
                                    d.afterEach(A.bind(e)),
                                    d.afterEach(C.bind(e)),
                                    r.default.nextTick((function() {
                                        S(e)
                                    }
                                    ))
                                }
                                ,
                                n.next = 11,
                                Promise.all(_(f.context.route));
                            case 11:
                                if (o = n.sent,
                                e.setTransitions = e.$options.nuxt.setTransitions.bind(e),
                                o.length && (e.setTransitions(v(o, d.currentRoute)),
                                h = d.currentRoute.matched.map((function(n) {
                                    return Object(s.c)(n.path)(d.currentRoute.params)
                                }
                                ))),
                                e.$loading = {},
                                g.error && e.error(g.error),
                                d.beforeEach(w.bind(e)),
                                d.beforeEach(O.bind(e)),
                                !g.serverRendered || !Object(s.n)(g.routePath, e.context.route.path)) {
                                    n.next = 20;
                                    break
                                }
                                return n.abrupt("return", i());
                            case 20:
                                return c = function() {
                                    E(d.currentRoute, d.currentRoute),
                                    A.call(e, d.currentRoute),
                                    R(e),
                                    i()
                                }
                                ,
                                n.next = 23,
                                new Promise((function(n) {
                                    return setTimeout(n, 0)
                                }
                                ));
                            case 23:
                                O.call(e, d.currentRoute, d.currentRoute, (function(n) {
                                    if (n) {
                                        var t = d.afterEach((function(n, e) {
                                            t(),
                                            c()
                                        }
                                        ));
                                        d.push(n, void 0, (function(n) {
                                            n && b(n)
                                        }
                                        ))
                                    } else
                                        c()
                                }
                                ));
                            case 24:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))).apply(this, arguments)
            }
            Object(c.b)(null, g.config).then((function(n) {
                return I.apply(this, arguments)
            }
            )).catch(b)
        }
        .call(this, e(39))
    },
    375: function(n, t, e) {
        "use strict";
        e.r(t);
        e(52),
        e(45),
        e(49);
        t.default = function(n) {
            var t = n.store
              , e = n.route
              , a = null;
            -1 !== e.name.includes("index") ? a = "page-index-skeleton" : -1 !== e.name.includes("test") && (a = "page-two-skeleton"),
            t.commit("skeleton/UPDATE_SKELETON", a)
        }
    },
    388: function(n, t, e) {
        "use strict";
        e(180)
    },
    389: function(n, t, e) {
        var a = e(43)(!1);
        a.push([n.i, "\n.__nuxt-error-page {\n  padding: 1rem;\n  background: #F7F8FB;\n  color: #47494E;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-family: sans-serif;\n  font-weight: 100 !important;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -webkit-font-smoothing: antialiased;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.__nuxt-error-page .error {\n  max-width: 60vw;\n}\n.__nuxt-error-page .title {\n  font-size: 1.5rem;\n  margin-top: 2vw;\n  color: #47494E;\n  margin-bottom: 1.067vw;\n}\n.__nuxt-error-page .description {\n  color: #7F828B;\n  line-height: 2.8vw;\n  margin-bottom: 1.333vw;\n}\n.__nuxt-error-page a {\n  color: #7F828B !important;\n  text-decoration: none;\n}\n.__nuxt-error-page .logo {\n  position: fixed;\n  left: 1.6vw;\n  bottom: 1.6vw;\n}\n@media (orientation: landscape) {\n.__nuxt-error-page .error {\n    max-width: 23.438rem;\n}\n.__nuxt-error-page .title {\n    margin-top: 0.781rem;\n    margin-bottom: 0.417rem;\n}\n.__nuxt-error-page .description {\n    line-height: 1.094rem;\n    margin-bottom: 0.521rem;\n}\n.__nuxt-error-page .logo {\n    left: 0.625rem;\n    bottom: 0.625rem;\n}\n}\n", ""]),
        n.exports = a
    },
    390: function(n, t, e) {
        "use strict";
        e(181)
    },
    391: function(n, t, e) {
        var a = e(43)(!1);
        a.push([n.i, "\n.nuxt-progress {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 0.267vw;\n  width: 0%;\n  opacity: 1;\n  transition: width 0.1s, opacity 0.4s;\n  background-color: red;\n  z-index: 999999;\n}\n.nuxt-progress.nuxt-progress-notransition {\n  transition: none;\n}\n.nuxt-progress-failed {\n  background-color: red;\n}\n@media (orientation: landscape) {\n.nuxt-progress {\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    height: 0.104rem;\n}\n}\n", ""]),
        n.exports = a
    },
    394: function(n, t, e) {
        var a = e(395);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[n.i, a, ""]]),
        a.locals && (n.exports = a.locals);
        (0,
        e(44).default)("3943f70a", a, !0, {
            sourceMap: !1
        })
    },
    395: function(n, t, e) {
        var a = e(43)(!1);
        a.push([n.i, '@charset "UTF-8";\n\n/*!\nAnimate.css - http://daneden.me/animate\nLicensed under the MIT license\n\nCopyright (c) 2013 Daniel Eden\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n.animated {\n  -webkit-animation-duration: 0.35s;\n  animation-duration: 0.35s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.animated.hinge {\n  -webkit-animation-duration: 0.8s;\n  animation-duration: 0.8s;\n}\n\n@-webkit-keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n\n  40% {\n    transform: translateY(-4vw);\n  }\n\n  60% {\n    transform: translateY(-2vw);\n  }\n}\n\n@keyframes bounce {\n  0%,\n  20%,\n  50%,\n  80%,\n  100% {\n    transform: translateY(0);\n  }\n\n  40% {\n    transform: translateY(-4vw);\n  }\n\n  60% {\n    transform: translateY(-2vw);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n}\n\n@-webkit-keyframes flash {\n  0%,\n  50%,\n  100% {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n@keyframes flash {\n  0%,\n  50%,\n  100% {\n    opacity: 1;\n  }\n\n  25%,\n  75% {\n    opacity: 0;\n  }\n}\n\n.flash {\n  -webkit-animation-name: flash;\n  animation-name: flash;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(1.1);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.pulse {\n  -webkit-animation-name: pulse;\n  animation-name: pulse;\n}\n\n@-webkit-keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-1.333vw);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(1.333vw);\n  }\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-1.333vw);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(1.333vw);\n  }\n}\n\n.shake {\n  -webkit-animation-name: shake;\n  animation-name: shake;\n}\n\n@-webkit-keyframes swing {\n  20% {\n    transform: rotate(15deg);\n  }\n\n  40% {\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    transform: rotate(5deg);\n  }\n\n  80% {\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes swing {\n  20% {\n    transform: rotate(15deg);\n  }\n\n  40% {\n    transform: rotate(-10deg);\n  }\n\n  60% {\n    transform: rotate(5deg);\n  }\n\n  80% {\n    transform: rotate(-5deg);\n  }\n\n  100% {\n    transform: rotate(0deg);\n  }\n}\n\n.swing {\n  transform-origin: top center;\n  -webkit-animation-name: swing;\n  animation-name: swing;\n}\n\n@-webkit-keyframes tada {\n  0% {\n    transform: scale(1);\n  }\n\n  10%,\n  20% {\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n\n@keyframes tada {\n  0% {\n    transform: scale(1);\n  }\n\n  10%,\n  20% {\n    transform: scale(0.9) rotate(-3deg);\n  }\n\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: scale(1.1) rotate(3deg);\n  }\n\n  40%,\n  60%,\n  80% {\n    transform: scale(1.1) rotate(-3deg);\n  }\n\n  100% {\n    transform: scale(1) rotate(0);\n  }\n}\n\n.tada {\n  -webkit-animation-name: tada;\n  animation-name: tada;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  0% {\n    transform: translateX(0%);\n  }\n\n  15% {\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n@keyframes wobble {\n  0% {\n    transform: translateX(0%);\n  }\n\n  15% {\n    transform: translateX(-25%) rotate(-5deg);\n  }\n\n  30% {\n    transform: translateX(20%) rotate(3deg);\n  }\n\n  45% {\n    transform: translateX(-15%) rotate(-3deg);\n  }\n\n  60% {\n    transform: translateX(10%) rotate(2deg);\n  }\n\n  75% {\n    transform: translateX(-5%) rotate(-1deg);\n  }\n\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n.wobble {\n  -webkit-animation-name: wobble;\n  animation-name: wobble;\n}\n\n@-webkit-keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n\n  70% {\n    transform: scale(0.9);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes bounceIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1.05);\n  }\n\n  70% {\n    transform: scale(0.9);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\n.bounceIn {\n  -webkit-animation-name: bounceIn;\n  animation-name: bounceIn;\n}\n\n@-webkit-keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateY(4vw);\n  }\n\n  80% {\n    transform: translateY(-1.333vw);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateY(4vw);\n  }\n\n  80% {\n    transform: translateY(-1.333vw);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n.bounceInDown {\n  -webkit-animation-name: bounceInDown;\n  animation-name: bounceInDown;\n}\n\n@-webkit-keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateX(4vw);\n  }\n\n  80% {\n    transform: translateX(-1.333vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateX(4vw);\n  }\n\n  80% {\n    transform: translateX(-1.333vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.bounceInLeft {\n  -webkit-animation-name: bounceInLeft;\n  animation-name: bounceInLeft;\n}\n\n@-webkit-keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateX(-4vw);\n  }\n\n  80% {\n    transform: translateX(1.333vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes bounceInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateX(-4vw);\n  }\n\n  80% {\n    transform: translateX(1.333vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.bounceInRight {\n  -webkit-animation-name: bounceInRight;\n  animation-name: bounceInRight;\n}\n\n@-webkit-keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateY(-4vw);\n  }\n\n  80% {\n    transform: translateY(1.333vw);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes bounceInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translateY(-4vw);\n  }\n\n  80% {\n    transform: translateY(1.333vw);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n.bounceInUp {\n  -webkit-animation-name: bounceInUp;\n  animation-name: bounceInUp;\n}\n\n@-webkit-keyframes bounceOut {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0.95);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n}\n\n@keyframes bounceOut {\n  0% {\n    transform: scale(1);\n  }\n\n  25% {\n    transform: scale(0.95);\n  }\n\n  50% {\n    opacity: 1;\n    transform: scale(1.1);\n  }\n\n  100% {\n    opacity: 0;\n    transform: scale(0.3);\n  }\n}\n\n.bounceOut {\n  -webkit-animation-name: bounceOut;\n  animation-name: bounceOut;\n}\n\n@-webkit-keyframes bounceOutDown {\n  0% {\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateY(-2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n}\n\n@keyframes bounceOutDown {\n  0% {\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateY(-2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n}\n\n.bounceOutDown {\n  -webkit-animation-name: bounceOutDown;\n  animation-name: bounceOutDown;\n}\n\n@-webkit-keyframes bounceOutLeft {\n  0% {\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateX(2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n}\n\n@keyframes bounceOutLeft {\n  0% {\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateX(2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n}\n\n.bounceOutLeft {\n  -webkit-animation-name: bounceOutLeft;\n  animation-name: bounceOutLeft;\n}\n\n@-webkit-keyframes bounceOutRight {\n  0% {\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateX(-2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n}\n\n@keyframes bounceOutRight {\n  0% {\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateX(-2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n}\n\n.bounceOutRight {\n  -webkit-animation-name: bounceOutRight;\n  animation-name: bounceOutRight;\n}\n\n@-webkit-keyframes bounceOutUp {\n  0% {\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateY(2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n}\n\n@keyframes bounceOutUp {\n  0% {\n    transform: translateY(0);\n  }\n\n  20% {\n    opacity: 1;\n    transform: translateY(2.667vw);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n}\n\n.bounceOutUp {\n  -webkit-animation-name: bounceOutUp;\n  animation-name: bounceOutUp;\n}\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n@-webkit-keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDownBig {\n  0% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInDownBig {\n  -webkit-animation-name: fadeInDownBig;\n  animation-name: fadeInDownBig;\n}\n\n@-webkit-keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeft {\n  -webkit-animation-name: fadeInLeft;\n  animation-name: fadeInLeft;\n}\n\n@-webkit-keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInLeftBig {\n  0% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.fadeInLeftBig {\n  -webkit-animation-name: fadeInLeftBig;\n  animation-name: fadeInLeftBig;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.fadeInRight {\n  -webkit-animation-name: fadeInRight;\n  animation-name: fadeInRight;\n}\n\n@-webkit-keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n@keyframes fadeInRightBig {\n  0% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n\n.fadeInRightBig {\n  -webkit-animation-name: fadeInRightBig;\n  animation-name: fadeInRightBig;\n}\n\n@-webkit-keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    opacity: 0;\n    transform: translateY(2.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInUp {\n  -webkit-animation-name: fadeInUp;\n  animation-name: fadeInUp;\n}\n\n@-webkit-keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeInUpBig {\n  0% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.fadeInUpBig {\n  -webkit-animation-name: fadeInUpBig;\n  animation-name: fadeInUpBig;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(2.667vw);\n  }\n}\n\n@keyframes fadeOutDown {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(2.667vw);\n  }\n}\n\n.fadeOutDown {\n  -webkit-animation-name: fadeOutDown;\n  animation-name: fadeOutDown;\n}\n\n@-webkit-keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n}\n\n@keyframes fadeOutDownBig {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(266.667vw);\n  }\n}\n\n.fadeOutDownBig {\n  -webkit-animation-name: fadeOutDownBig;\n  animation-name: fadeOutDownBig;\n}\n\n@-webkit-keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-2.667vw);\n  }\n}\n\n@keyframes fadeOutLeft {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-2.667vw);\n  }\n}\n\n.fadeOutLeft {\n  -webkit-animation-name: fadeOutLeft;\n  animation-name: fadeOutLeft;\n}\n\n@-webkit-keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n}\n\n@keyframes fadeOutLeftBig {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n}\n\n.fadeOutLeftBig {\n  -webkit-animation-name: fadeOutLeftBig;\n  animation-name: fadeOutLeftBig;\n}\n\n@-webkit-keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(2.667vw);\n  }\n}\n\n@keyframes fadeOutRight {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(2.667vw);\n  }\n}\n\n.fadeOutRight {\n  -webkit-animation-name: fadeOutRight;\n  animation-name: fadeOutRight;\n}\n\n@-webkit-keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n}\n\n@keyframes fadeOutRightBig {\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n}\n\n.fadeOutRightBig {\n  -webkit-animation-name: fadeOutRightBig;\n  animation-name: fadeOutRightBig;\n}\n\n@-webkit-keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-2.667vw);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-2.667vw);\n  }\n}\n\n.fadeOutUp {\n  -webkit-animation-name: fadeOutUp;\n  animation-name: fadeOutUp;\n}\n\n@-webkit-keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n}\n\n@keyframes fadeOutUpBig {\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n}\n\n.fadeOutUpBig {\n  -webkit-animation-name: fadeOutUpBig;\n  animation-name: fadeOutUpBig;\n}\n\n@-webkit-keyframes flip {\n  0% {\n    transform: perspective(53.333vw) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(53.333vw) translateZ(20vw) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(53.333vw) translateZ(20vw) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(53.333vw) translateZ(0) rotateY(360deg) scale(0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    transform: perspective(53.333vw) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n@keyframes flip {\n  0% {\n    transform: perspective(53.333vw) translateZ(0) rotateY(0) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(53.333vw) translateZ(20vw) rotateY(170deg) scale(1);\n    -webkit-animation-timing-function: ease-out;\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(53.333vw) translateZ(20vw) rotateY(190deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(53.333vw) translateZ(0) rotateY(360deg) scale(0.95);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n\n  100% {\n    transform: perspective(53.333vw) translateZ(0) rotateY(360deg) scale(1);\n    -webkit-animation-timing-function: ease-in;\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  -webkit-animation-name: flip;\n  animation-name: flip;\n}\n\n@-webkit-keyframes flipInX {\n  0% {\n    transform: perspective(53.333vw) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(53.333vw) rotateX(-10deg);\n  }\n\n  70% {\n    transform: perspective(53.333vw) rotateX(10deg);\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInX {\n  0% {\n    transform: perspective(53.333vw) rotateX(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(53.333vw) rotateX(-10deg);\n  }\n\n  70% {\n    transform: perspective(53.333vw) rotateX(10deg);\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateX(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInX {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInX;\n  animation-name: flipInX;\n}\n\n@-webkit-keyframes flipInY {\n  0% {\n    transform: perspective(53.333vw) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(53.333vw) rotateY(-10deg);\n  }\n\n  70% {\n    transform: perspective(53.333vw) rotateY(10deg);\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes flipInY {\n  0% {\n    transform: perspective(53.333vw) rotateY(90deg);\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(53.333vw) rotateY(-10deg);\n  }\n\n  70% {\n    transform: perspective(53.333vw) rotateY(10deg);\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateY(0deg);\n    opacity: 1;\n  }\n}\n\n.flipInY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipInY;\n  animation-name: flipInY;\n}\n\n@-webkit-keyframes flipOutX {\n  0% {\n    transform: perspective(53.333vw) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutX {\n  0% {\n    transform: perspective(53.333vw) rotateX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateX(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX {\n  -webkit-animation-name: flipOutX;\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@-webkit-keyframes flipOutY {\n  0% {\n    transform: perspective(53.333vw) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes flipOutY {\n  0% {\n    transform: perspective(53.333vw) rotateY(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: perspective(53.333vw) rotateY(90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  -webkit-animation-name: flipOutY;\n  animation-name: flipOutY;\n}\n\n@-webkit-keyframes lightSpeedIn {\n  0% {\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n@keyframes lightSpeedIn {\n  0% {\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: translateX(-20%) skewX(30deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: translateX(0%) skewX(-15deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn {\n  -webkit-animation-name: lightSpeedIn;\n  animation-name: lightSpeedIn;\n  -webkit-animation-timing-function: ease-out;\n  animation-timing-function: ease-out;\n}\n\n@-webkit-keyframes lightSpeedOut {\n  0% {\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n@keyframes lightSpeedOut {\n  0% {\n    transform: translateX(0%) skewX(0deg);\n    opacity: 1;\n  }\n\n  100% {\n    transform: translateX(100%) skewX(-30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut {\n  -webkit-animation-name: lightSpeedOut;\n  animation-name: lightSpeedOut;\n  -webkit-animation-timing-function: ease-in;\n  animation-timing-function: ease-in;\n}\n\n@-webkit-keyframes rotateIn {\n  0% {\n    transform-origin: center center;\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: center center;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateIn {\n  0% {\n    transform-origin: center center;\n    transform: rotate(-200deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: center center;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateIn {\n  -webkit-animation-name: rotateIn;\n  animation-name: rotateIn;\n}\n\n@-webkit-keyframes rotateInDownLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft {\n  -webkit-animation-name: rotateInDownLeft;\n  animation-name: rotateInDownLeft;\n}\n\n@-webkit-keyframes rotateInDownRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInDownRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight {\n  -webkit-animation-name: rotateInDownRight;\n  animation-name: rotateInDownRight;\n}\n\n@-webkit-keyframes rotateInUpLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft {\n  -webkit-animation-name: rotateInUpLeft;\n  animation-name: rotateInUpLeft;\n}\n\n@-webkit-keyframes rotateInUpRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n@keyframes rotateInUpRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight {\n  -webkit-animation-name: rotateInUpRight;\n  animation-name: rotateInUpRight;\n}\n\n@-webkit-keyframes rotateOut {\n  0% {\n    transform-origin: center center;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: center center;\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOut {\n  0% {\n    transform-origin: center center;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: center center;\n    transform: rotate(200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut {\n  -webkit-animation-name: rotateOut;\n  animation-name: rotateOut;\n}\n\n@-webkit-keyframes rotateOutDownLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft {\n  -webkit-animation-name: rotateOutDownLeft;\n  animation-name: rotateOutDownLeft;\n}\n\n@-webkit-keyframes rotateOutDownRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutDownRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight {\n  -webkit-animation-name: rotateOutDownRight;\n  animation-name: rotateOutDownRight;\n}\n\n@-webkit-keyframes rotateOutUpLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpLeft {\n  0% {\n    transform-origin: left bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: left bottom;\n    transform: rotate(-90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft {\n  -webkit-animation-name: rotateOutUpLeft;\n  animation-name: rotateOutUpLeft;\n}\n\n@-webkit-keyframes rotateOutUpRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n@keyframes rotateOutUpRight {\n  0% {\n    transform-origin: right bottom;\n    transform: rotate(0);\n    opacity: 1;\n  }\n\n  100% {\n    transform-origin: right bottom;\n    transform: rotate(90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight {\n  -webkit-animation-name: rotateOutUpRight;\n  animation-name: rotateOutUpRight;\n}\n\n@-webkit-keyframes slideInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n@keyframes slideInDown {\n  0% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\n\n.slideInDown {\n  -webkit-animation-name: slideInDown;\n  animation-name: slideInDown;\n}\n\n@-webkit-keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInLeft {\n  0% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.slideInLeft {\n  -webkit-animation-name: slideInLeft;\n  animation-name: slideInLeft;\n}\n\n@-webkit-keyframes slideInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n@keyframes slideInRight {\n  0% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n\n  100% {\n    transform: translateX(0);\n  }\n}\n\n.slideInRight {\n  -webkit-animation-name: slideInRight;\n  animation-name: slideInRight;\n}\n\n@-webkit-keyframes slideOutLeft {\n  0% {\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n}\n\n@keyframes slideOutLeft {\n  0% {\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(-266.667vw);\n  }\n}\n\n.slideOutLeft {\n  -webkit-animation-name: slideOutLeft;\n  animation-name: slideOutLeft;\n}\n\n@-webkit-keyframes slideOutRight {\n  0% {\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n}\n\n@keyframes slideOutRight {\n  0% {\n    transform: translateX(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(266.667vw);\n  }\n}\n\n.slideOutRight {\n  -webkit-animation-name: slideOutRight;\n  animation-name: slideOutRight;\n}\n\n@-webkit-keyframes slideOutUp {\n  0% {\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n}\n\n@keyframes slideOutUp {\n  0% {\n    transform: translateY(0);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-266.667vw);\n  }\n}\n\n.slideOutUp {\n  -webkit-animation-name: slideOutUp;\n  animation-name: slideOutUp;\n}\n\n@-webkit-keyframes hinge {\n  0% {\n    transform: rotate(0);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    transform: rotate(80deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    transform: rotate(60deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    transform: rotate(60deg) translateY(0);\n    opacity: 1;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  100% {\n    transform: translateY(93.333vw);\n    opacity: 0;\n  }\n}\n\n@keyframes hinge {\n  0% {\n    transform: rotate(0);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%,\n  60% {\n    transform: rotate(80deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  40% {\n    transform: rotate(60deg);\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  80% {\n    transform: rotate(60deg) translateY(0);\n    opacity: 1;\n    transform-origin: top left;\n    -webkit-animation-timing-function: ease-in-out;\n    animation-timing-function: ease-in-out;\n  }\n\n  100% {\n    transform: translateY(93.333vw);\n    opacity: 0;\n  }\n}\n\n.hinge {\n  -webkit-animation-name: hinge;\n  animation-name: hinge;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n@keyframes rollIn {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%) rotate(-120deg);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateX(0px) rotate(0deg);\n  }\n}\n\n.rollIn {\n  -webkit-animation-name: rollIn;\n  animation-name: rollIn;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n  0% {\n    opacity: 1;\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n@keyframes rollOut {\n  0% {\n    opacity: 1;\n    transform: translateX(0px) rotate(0deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateX(100%) rotate(120deg);\n  }\n}\n\n.rollOut {\n  -webkit-animation-name: rollOut;\n  animation-name: rollOut;\n}\n', ""]),
        n.exports = a
    },
    396: function(n, t, e) {
        var a = e(397);
        a.__esModule && (a = a.default),
        "string" == typeof a && (a = [[n.i, a, ""]]),
        a.locals && (n.exports = a.locals);
        (0,
        e(44).default)("0085869e", a, !0, {
            sourceMap: !1
        })
    },
    397: function(n, t, e) {
        var a = e(43)(!1);
        a.push([n.i, "/* 路由切换的动画 */\n\n.page-enter-active,\n.page-leave-active {\n  transition: opacity 0.5s;\n}\n.page-enter,\n.page-leave-active {\n  opacity: 0;\n}\n", ""]),
        n.exports = a
    },
    400: function(n, t, e) {
        "use strict";
        e(182)
    },
    401: function(n, t, e) {
        var a = e(43)
          , r = e(156)
          , i = e(402)
          , o = e(352)
          , s = a(!1)
          , c = r(i)
          , u = r(o);
        s.push([n.i, ".van-toast{height:14vh !important;width:60vw !important;word-break:break-word !important}.van-popup--top{max-width:100vw !important;left:50% !important;background:rgba(0,0,0,0.6) !important;transform:translateX(-50%)}.van-dialog{width:calc(100% - 7.467vw) !important;max-width:93.333vw !important;box-sizing:border-box;background:linear-gradient(180deg, #4b586f 1%, #262c38 91%);box-shadow:0 0.667vw 0.267vw rgba(0,0,0,0.1);padding:0 4vw 6.933vw;text-align:center;color:rgba(255,255,255,0.8)}.van-dialog .van-dialog__header{color:rgba(255,255,255,0.8)}.van-dialog .van-dialog__footer{width:58.667vw !important;margin:0 auto}.van-dialog .van-dialog__footer::after{display:none}.van-dialog .van-dialog__footer .van-dialog__confirm{width:58.667vw !important;height:13.333vw;margin:0 auto;background-image:linear-gradient(183deg, #fff1dc 0%, #ffd79d 100%);border-radius:6.667vw;font-size:4vw;color:#20272f;text-align:center}.van-dialog__message--has-title{color:rgba(255,255,255,0.6) !important}.en .gm-item{font-size:3.467vw !important}.en .btn{letter-spacing:1px !important}.en .progress-container .progress4 .title{height:5.333vw !important}.en .share .share-container .share-top .scan-desc{width:36vw !important}.en .home .game-container{min-height:108.8vw !important}.en .home .game-container.open{min-height:172vw !important}@font-face{font-family:PingFangSC-Medium;src:url(" + c + ")}body,html{font-family:PingFangSC-Medium, PingFang SC, -apple-system, BlinkMacSystemFont, Segoe UI, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol !important;color:rgba(255,255,255,0.6);overflow-x:hidden !important;-webkit-overflow-scrolling:touch}input:-webkit-autofill{box-shadow:0 0 0px 13.333vw transparent inset !important}input{-webkit-appearance:none !important}::-webkit-scrollbar{width:0 !important;display:none !important}.common-not-scroll-bar::-webkit-scrollbar{display:none;-webkit-overflow-scrolling:touch}.common-not-scroll-bar{scrollbar-width:none;-ms-overflow-style:none;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}.btn{margin-right:0.13333rem;padding:0 10.667vw;height:9.333vw;text-align:center;background-image:linear-gradient(183deg, #fff1dc 0%, #ffd79d 100%);border-radius:4.667vw;color:#fff;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:3.467vw;color:#20272f;font-weight:500}.btn.btn-40{height:10.667vw}.btn.btn-full{height:10.667vw;border-radius:10.667vw;font-size:4.267vw;padding:0;width:100%}.mark{color:#eeb081}.red{color:#D34C0B}.green{color:#00DA23 !important}.gray{color:#999}.c-link{color:#D34C0B;text-decoration:underline;cursor:pointer}.sub{padding-left:4vw}.tl{text-align:left}.tr{text-align:right}.tc{text-align:center}.content-block{width:calc(100% - 7.467vw);margin:0 3.733vw;padding:3.467vw 4.267vw;border-radius:3.2vw;min-height:13.333vw;box-shadow:0 0.667vw 0.267vw rgba(0,0,0,0.1);background:linear-gradient(180deg, #4b586f 1%, #262c38 91%);box-sizing:border-box;overflow:hidden}.content-block.no-padding{padding:0}.content-block.no-bg{background:transparent}.block-suTitle{height:5.067vw;padding-left:2.933vw;font-size:3.467vw;color:rgba(255,255,255,0.8);font-weight:500;position:relative;margin:0 0 1.6vw}.block-suTitle::before{position:absolute;content:'';left:0;top:50%;margin-top:-1.6vw;height:2.667vw;width:0.533vw;background-image:linear-gradient(180deg, #eeb081 0%, #fde2d0 99%);border-radius:0.4vw}.header-transparent{background:transparent !important}.animated-delay-0{-webkit-animation-delay:0.1s;animation-delay:0.1s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-1{-webkit-animation-delay:0.2s;animation-delay:0.2s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-2{-webkit-animation-delay:0.3s;animation-delay:0.3s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-3{-webkit-animation-delay:0.4s;animation-delay:0.4s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-4{-webkit-animation-delay:0.5s;animation-delay:0.5s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-5{-webkit-animation-delay:0.6s;animation-delay:0.6s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-6{-webkit-animation-delay:0.7s;animation-delay:0.7s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-7{-webkit-animation-delay:0.8s;animation-delay:0.8s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-8{-webkit-animation-delay:0.9s;animation-delay:0.9s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-9{-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-10{-webkit-animation-delay:1.1s;animation-delay:1.1s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-11{-webkit-animation-delay:1.2s;animation-delay:1.2s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-12{-webkit-animation-delay:1.3s;animation-delay:1.3s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-13{-webkit-animation-delay:1.4s;animation-delay:1.4s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-14{-webkit-animation-delay:1.5s;animation-delay:1.5s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.animated-delay-15{-webkit-animation-delay:1.6s;animation-delay:1.6s;-webkit-animation-duration:0.7s !important;animation-duration:0.7s !important}.wow{-webkit-animation-duration:0.5s !important;animation-duration:0.5s !important}.header-right-icon{height:6.667vw;width:6.667vw;position:absolute;right:4vw;top:3.467vw;cursor:pointer}.global-dialog{width:calc(100% - 7.467vw) !important;max-width:93.333vw !important;box-sizing:border-box;background:linear-gradient(180deg, #4b586f 1%, #262c38 91%);box-shadow:0 0.667vw 0.267vw rgba(0,0,0,0.1);padding:16.267vw 4vw 6.933vw;text-align:center;color:rgba(255,255,255,0.8)}.global-dialog ::v-deep .van-dialog__content{position:relative;display:flex;flex-direction:column;justify-content:center}.global-dialog .btn{width:58.667vw;height:13.333vw;margin-top:11.867vw;border-radius:6.667vw;font-size:4vw;color:#20272f}.global-dialog .icon-close{display:block;position:absolute;top:2.667vw;right:2.667vw;height:6.4vw;width:6.4vw;background:url(" + u + ");background-size:100% 100%}.wrapper{position:static;overflow-x:hidden;-webkit-overflow-scrolling:touch;height:100%;background:#121923;max-width:100vw;margin:0 auto}#AddScreenBtn{position:fixed;z-index:9999;opacity:0;width:0;height:0}@media (orientation: landscape){.van-toast{width:23.438rem !important}.van-popup--top{max-width:39.063rem !important}.van-dialog{width:calc(100% - 2.917rem) !important;max-width:36.458rem !important;box-shadow:0 0.26rem 0.104rem rgba(0,0,0,0.1);padding:0 1.563rem 2.708rem}.van-dialog .van-dialog__footer{width:22.917rem !important}.van-dialog .van-dialog__footer .van-dialog__confirm{width:22.917rem !important;height:5.208rem;border-radius:2.604rem;font-size:1.563rem}.en .gm-item{font-size:1.354rem !important}.en .btn{letter-spacing:1px !important}.en .progress-container .progress4 .title{height:2.083rem !important}.en .share .share-container .share-top .scan-desc{width:14.063rem !important}.en .home .game-container{min-height:42.5rem !important}.en .home .game-container.open{min-height:67.188rem !important}input:-webkit-autofill{box-shadow:0 0 0px 5.208rem transparent inset !important}.btn{padding:0 4.167rem;height:3.646rem;border-radius:1.823rem;font-size:1.354rem}.btn.btn-40{height:4.167rem}.btn.btn-full{height:4.167rem;border-radius:4.167rem;font-size:1.667rem}.sub{padding-left:1.563rem}.content-block{width:calc(100% - 2.917rem);margin:0 1.458rem;padding:1.354rem 1.667rem;border-radius:1.25rem;min-height:5.208rem;box-shadow:0 0.26rem 0.104rem rgba(0,0,0,0.1)}.block-suTitle{height:1.979rem;padding-left:1.146rem;font-size:1.354rem;margin:0 0 0.625rem}.block-suTitle::before{margin-top:-0.625rem;height:1.042rem;width:0.208rem;border-radius:0.156rem}.header-right-icon{height:2.604rem;width:2.604rem;right:1.563rem;top:1.354rem}.global-dialog{width:calc(100% - 2.917rem) !important;max-width:36.458rem !important;box-shadow:0 0.26rem 0.104rem rgba(0,0,0,0.1);padding:6.354rem 1.563rem 2.708rem}.global-dialog .btn{width:22.917rem;height:5.208rem;margin-top:4.635rem;border-radius:2.604rem;font-size:1.563rem}.global-dialog .icon-close{top:1.042rem;right:1.042rem;height:2.5rem;width:2.5rem}.wrapper{max-width:39.063rem}}\n", ""]),
        n.exports = s
    },
    402: function(n, t, e) {
        n.exports = e.p + "fonts/PingFangHeiTC-W4.53ffe50.ttf"
    },
    403: function(n, t, e) {
        "use strict";
        e.r(t);
        e(52),
        e(45);
        var a = e(119)
          , r = e.n(a);
        t.default = {
            state: function() {
                return {
                    userInfo: null,
                    langs: [{
                        code: "zh-CN",
                        name: "简体中文",
                        short: "简中"
                    }, {
                        code: "en",
                        name: "English",
                        short: "English"
                    }],
                    locales: ["zh-CN", "en"],
                    locale: "zh-CN",
                    langModelVisible: !1,
                    games: [],
                    onlineCustomer: "https://chatweb.3dd31.com/chat/text/chat_0UQlVI.html?skill=2c9482b68096785e0180a8e4352709c0",
                    onlineTelegram: "https://t.me/obhash001"
                }
            },
            getters: {
                getDomain: function(n) {
                    return n.domain
                },
                langs: function(n) {
                    return n.langs
                },
                games: function(n) {
                    return n.games
                },
                langModelVisible: function(n) {
                    return n.langModelVisible
                },
                userInfo: function(n) {
                    return n.userInfo
                },
                onlineCustomer: function(n) {
                    return n.onlineCustomer
                },
                onlineTelegram: function(n) {
                    return n.onlineTelegram
                }
            },
            mutations: {
                fn: function(n, t) {},
                SET_LANG: function(n, t) {
                    !0 === n.locales.includes(t) && (n.locale = t,
                    r.a.set("dealer-language", t))
                },
                SET_LANG_MODEL: function(n, t) {
                    n.langModelVisible = t
                },
                SET_GAMES: function(n, t) {
                    debugger
                    n.games = t
                },
                LANG_LIST: function(n, t) {
                    n.AllLangs = t
                },
                SET_USER_INFO: function(n, t) {
                    n.userInfo = t
                }
            },
            actions: {
                actionFn: function(n, t) {
                    n.state;
                    (0,
                    n.commit)("fn", t)
                }
            }
        }
    },
    404: function(n, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            state: function() {
                return {
                    skeletonData: null,
                    page_loading: !0
                }
            },
            mutations: {
                UPDATE_SKELETON: function(n, t) {
                    n.skeletonData = t
                },
                UPDATE_LOADING: function(n, t) {
                    n.page_loading = t
                }
            }
        }
    },
    406: function(n, t, e) {
        var a = {
            "./af": 184,
            "./af.js": 184,
            "./ar": 185,
            "./ar-dz": 186,
            "./ar-dz.js": 186,
            "./ar-kw": 187,
            "./ar-kw.js": 187,
            "./ar-ly": 188,
            "./ar-ly.js": 188,
            "./ar-ma": 189,
            "./ar-ma.js": 189,
            "./ar-sa": 190,
            "./ar-sa.js": 190,
            "./ar-tn": 191,
            "./ar-tn.js": 191,
            "./ar.js": 185,
            "./az": 192,
            "./az.js": 192,
            "./be": 193,
            "./be.js": 193,
            "./bg": 194,
            "./bg.js": 194,
            "./bm": 195,
            "./bm.js": 195,
            "./bn": 196,
            "./bn-bd": 197,
            "./bn-bd.js": 197,
            "./bn.js": 196,
            "./bo": 198,
            "./bo.js": 198,
            "./br": 199,
            "./br.js": 199,
            "./bs": 200,
            "./bs.js": 200,
            "./ca": 201,
            "./ca.js": 201,
            "./cs": 202,
            "./cs.js": 202,
            "./cv": 203,
            "./cv.js": 203,
            "./cy": 204,
            "./cy.js": 204,
            "./da": 205,
            "./da.js": 205,
            "./de": 206,
            "./de-at": 207,
            "./de-at.js": 207,
            "./de-ch": 208,
            "./de-ch.js": 208,
            "./de.js": 206,
            "./dv": 209,
            "./dv.js": 209,
            "./el": 210,
            "./el.js": 210,
            "./en-au": 211,
            "./en-au.js": 211,
            "./en-ca": 212,
            "./en-ca.js": 212,
            "./en-gb": 213,
            "./en-gb.js": 213,
            "./en-ie": 214,
            "./en-ie.js": 214,
            "./en-il": 215,
            "./en-il.js": 215,
            "./en-in": 216,
            "./en-in.js": 216,
            "./en-nz": 217,
            "./en-nz.js": 217,
            "./en-sg": 218,
            "./en-sg.js": 218,
            "./eo": 219,
            "./eo.js": 219,
            "./es": 220,
            "./es-do": 221,
            "./es-do.js": 221,
            "./es-mx": 222,
            "./es-mx.js": 222,
            "./es-us": 223,
            "./es-us.js": 223,
            "./es.js": 220,
            "./et": 224,
            "./et.js": 224,
            "./eu": 225,
            "./eu.js": 225,
            "./fa": 226,
            "./fa.js": 226,
            "./fi": 227,
            "./fi.js": 227,
            "./fil": 228,
            "./fil.js": 228,
            "./fo": 229,
            "./fo.js": 229,
            "./fr": 230,
            "./fr-ca": 231,
            "./fr-ca.js": 231,
            "./fr-ch": 232,
            "./fr-ch.js": 232,
            "./fr.js": 230,
            "./fy": 233,
            "./fy.js": 233,
            "./ga": 234,
            "./ga.js": 234,
            "./gd": 235,
            "./gd.js": 235,
            "./gl": 236,
            "./gl.js": 236,
            "./gom-deva": 237,
            "./gom-deva.js": 237,
            "./gom-latn": 238,
            "./gom-latn.js": 238,
            "./gu": 239,
            "./gu.js": 239,
            "./he": 240,
            "./he.js": 240,
            "./hi": 241,
            "./hi.js": 241,
            "./hr": 242,
            "./hr.js": 242,
            "./hu": 243,
            "./hu.js": 243,
            "./hy-am": 244,
            "./hy-am.js": 244,
            "./id": 245,
            "./id.js": 245,
            "./is": 246,
            "./is.js": 246,
            "./it": 247,
            "./it-ch": 248,
            "./it-ch.js": 248,
            "./it.js": 247,
            "./ja": 249,
            "./ja.js": 249,
            "./jv": 250,
            "./jv.js": 250,
            "./ka": 251,
            "./ka.js": 251,
            "./kk": 252,
            "./kk.js": 252,
            "./km": 253,
            "./km.js": 253,
            "./kn": 254,
            "./kn.js": 254,
            "./ko": 255,
            "./ko.js": 255,
            "./ku": 256,
            "./ku.js": 256,
            "./ky": 257,
            "./ky.js": 257,
            "./lb": 258,
            "./lb.js": 258,
            "./lo": 259,
            "./lo.js": 259,
            "./lt": 260,
            "./lt.js": 260,
            "./lv": 261,
            "./lv.js": 261,
            "./me": 262,
            "./me.js": 262,
            "./mi": 263,
            "./mi.js": 263,
            "./mk": 264,
            "./mk.js": 264,
            "./ml": 265,
            "./ml.js": 265,
            "./mn": 266,
            "./mn.js": 266,
            "./mr": 267,
            "./mr.js": 267,
            "./ms": 268,
            "./ms-my": 269,
            "./ms-my.js": 269,
            "./ms.js": 268,
            "./mt": 270,
            "./mt.js": 270,
            "./my": 271,
            "./my.js": 271,
            "./nb": 272,
            "./nb.js": 272,
            "./ne": 273,
            "./ne.js": 273,
            "./nl": 274,
            "./nl-be": 275,
            "./nl-be.js": 275,
            "./nl.js": 274,
            "./nn": 276,
            "./nn.js": 276,
            "./oc-lnc": 277,
            "./oc-lnc.js": 277,
            "./pa-in": 278,
            "./pa-in.js": 278,
            "./pl": 279,
            "./pl.js": 279,
            "./pt": 280,
            "./pt-br": 281,
            "./pt-br.js": 281,
            "./pt.js": 280,
            "./ro": 282,
            "./ro.js": 282,
            "./ru": 283,
            "./ru.js": 283,
            "./sd": 284,
            "./sd.js": 284,
            "./se": 285,
            "./se.js": 285,
            "./si": 286,
            "./si.js": 286,
            "./sk": 287,
            "./sk.js": 287,
            "./sl": 288,
            "./sl.js": 288,
            "./sq": 289,
            "./sq.js": 289,
            "./sr": 290,
            "./sr-cyrl": 291,
            "./sr-cyrl.js": 291,
            "./sr.js": 290,
            "./ss": 292,
            "./ss.js": 292,
            "./sv": 293,
            "./sv.js": 293,
            "./sw": 294,
            "./sw.js": 294,
            "./ta": 295,
            "./ta.js": 295,
            "./te": 296,
            "./te.js": 296,
            "./tet": 297,
            "./tet.js": 297,
            "./tg": 298,
            "./tg.js": 298,
            "./th": 299,
            "./th.js": 299,
            "./tk": 300,
            "./tk.js": 300,
            "./tl-ph": 301,
            "./tl-ph.js": 301,
            "./tlh": 302,
            "./tlh.js": 302,
            "./tr": 303,
            "./tr.js": 303,
            "./tzl": 304,
            "./tzl.js": 304,
            "./tzm": 305,
            "./tzm-latn": 306,
            "./tzm-latn.js": 306,
            "./tzm.js": 305,
            "./ug-cn": 307,
            "./ug-cn.js": 307,
            "./uk": 308,
            "./uk.js": 308,
            "./ur": 309,
            "./ur.js": 309,
            "./uz": 310,
            "./uz-latn": 311,
            "./uz-latn.js": 311,
            "./uz.js": 310,
            "./vi": 312,
            "./vi.js": 312,
            "./x-pseudo": 313,
            "./x-pseudo.js": 313,
            "./yo": 314,
            "./yo.js": 314,
            "./zh-cn": 315,
            "./zh-cn.js": 315,
            "./zh-hk": 316,
            "./zh-hk.js": 316,
            "./zh-mo": 317,
            "./zh-mo.js": 317,
            "./zh-tw": 318,
            "./zh-tw.js": 318
        };
        function r(n) {
            var t = i(n);
            return e(t)
        }
        function i(n) {
            if (!e.o(a, n)) {
                var t = new Error("Cannot find module '" + n + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[n]
        }
        r.keys = function() {
            return Object.keys(a)
        }
        ,
        r.resolve = i,
        n.exports = r,
        r.id = 406
    },
    461: function(n, t, e) {
        "use strict";
        e(336)
    },
    462: function(n, t, e) {
        var a = e(43)(!1);
        a.push([n.i, ".toast[data-v-25fe4e22]{display:flex;flex-direction:column;align-items:center;justify-content:center;position:fixed;top:0;bottom:0;left:0;right:0;color:#fff;z-index:9999;background:transparent}.toast>.content[data-v-25fe4e22]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:4vw 8vw;border-radius:1.6vw;background:rgba(17,17,17,0.7)}.toast>.content .icon[data-v-25fe4e22]{margin-bottom:1.333vw;font-size:5.067vw}.toast>.content p[data-v-25fe4e22]{font-size:3.2vw}@media (orientation: landscape){.toast>.content[data-v-25fe4e22]{padding:1.563rem 3.125rem;border-radius:0.625rem}.toast>.content .icon[data-v-25fe4e22]{margin-bottom:0.521rem;font-size:1.979rem}.toast>.content p[data-v-25fe4e22]{font-size:1.25rem}}\n", ""]),
        n.exports = a
    },
    463: function(n, t, e) {
        (function(n) {
            var t = e(464);
            e(59),
            e(68),
            e(61),
            e(84),
            e(50),
            e(159),
            e(145),
            e(465),
            function(e, a) {
                "use strict";
                "object" === t(n) && "object" === t(n.exports) ? n.exports = e.document ? a(e, !0) : function(n) {
                    if (!n.document)
                        throw new Error("fantast requires a window with a document");
                    return a(n)
                }
                : a(e)
            }("undefined" != typeof window ? window : this, (function(n, e) {
                "use strict";
                var a, r = {}, i = [], o = i.filter, s = {}, c = {}, u = /^\s*<(\w+|!)[^>]*>/, l = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, p = p = /complete|loaded|interactive/, m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, f = /^[\w-]*$/, d = /([A-Z])/g, h = n.document.createElement("table"), g = n.document.createElement("tr"), y = {
                    tr: n.document.createElement("tbody"),
                    tbody: h,
                    thead: h,
                    tfoot: h,
                    td: g,
                    th: g,
                    "*": n.document.createElement("div")
                };
                function b(n, t) {
                    return r.init(n, t)
                }
                function v(n, t, e) {
                    for (var a in t)
                        e && (O(t[a]) || k(t[a])) ? (O(t[a]) && !O(n[a]) && (n[a] = {}),
                        k(t[a]) && !k(n[a]) && (n[a] = []),
                        v(n[a], t[a], e)) : void 0 !== t[a] && (n[a] = t[a])
                }
                function w(n, t) {
                    var e, a = n ? n.length : 0;
                    for (e = 0; e < a; e++)
                        this[e] = n[e];
                    this.length = a,
                    this.selector = t || ""
                }
                function N(n) {
                    return null == n ? String(n) : s[toString.call(n)] || "object"
                }
                function k(n) {
                    return "array" === N(n)
                }
                function _(n) {
                    return "object" === N(n)
                }
                function x(n) {
                    return null != n && n == n.window
                }
                function O(n) {
                    return _(n) && !x(n) && Object.getPrototypeOf(n) == Object.prototype
                }
                function j(n) {
                    return "function" === N(n)
                }
                function x(n) {
                    return null != n && n == n.window
                }
                function E(n) {
                    return n.replace(/-+(.)?/g, (function(n, t) {
                        return t ? t.toUpperCase() : ""
                    }
                    ))
                }
                function A(n) {
                    return n.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
                }
                function R(n) {
                    return n in c ? c[n] : c[n] = new RegExp("(^|\\s)" + n + "(\\s|$)")
                }
                function C(n, t) {
                    var e = n.className || ""
                      , a = e && void 0 !== e.baseVal;
                    if (void 0 === t)
                        return a ? e.baseVal : e;
                    a ? e.baseVal = t : n.className = t
                }
                n.JSON && (b.parseJSON = JSON.parse),
                b.each = function(n, t) {
                    var e, a;
                    if (T(n)) {
                        for (e = 0; e < n.length; e++)
                            if (!1 === t.call(n[e], e, n[e]))
                                return n
                    } else
                        for (a in n)
                            if (!1 === t.call(n[a], a, n[a]))
                                return n;
                    return n
                }
                ,
                b.map = function(n, t) {
                    var e, a, r, o, s = [];
                    if (T(n))
                        for (a = 0; a < n.length; a++)
                            null != (e = t(n[a], a)) && s.push(e);
                    else
                        for (r in n)
                            null != (e = t(n[r], r)) && s.push(e);
                    return (o = s).length > 0 ? i.concat.apply([], o) : o
                }
                ,
                b.contains = document.documentElement.contains ? function(n, t) {
                    return n !== t && n.contains(t)
                }
                : function(n, t) {
                    for (; t && (t = t.parentNode); )
                        if (t === n)
                            return !0;
                    return !1
                }
                ,
                b.extend = function(n) {
                    var t, e = i.slice.call(arguments, 1);
                    return "boolean" == typeof n && (t = n,
                    n = e.shift()),
                    e.forEach((function(e) {
                        v(n, e, t)
                    }
                    )),
                    n
                }
                ,
                b.aniToTop = function() {
                    var n = document.body.scrollTop || document.documentElement.scrollTop
                      , t = 0
                      , e = 0;
                    !function a() {
                        if (e = n - 2 * Math.pow(t, 2),
                        scrollTo(0, e),
                        e <= 0)
                            return void cancelAnimationFrame(a);
                        t++,
                        requestAnimationFrame(a)
                    }()
                }
                ,
                b.fn = {
                    constructor: r.H,
                    forEach: i.forEach,
                    concat: function() {
                        var n, t, e = [];
                        for (n = 0; n < arguments.length; n++)
                            t = arguments[n],
                            e[n] = r.isH(t) ? t.toArray() : t;
                        return i.concat.apply(r.isH(this) ? this.toArray() : this, e)
                    },
                    size: function() {
                        return this.length
                    },
                    get: function(n) {
                        return void 0 === n ? i.slice.call(this) : this[n >= 0 ? n : n + this.length]
                    },
                    toArray: function() {
                        return this.get()
                    },
                    each: function(n) {
                        return i.every.call(this, (function(t, e) {
                            return !1 !== n.call(t, e, t)
                        }
                        )),
                        this
                    },
                    filter: function(n) {
                        return j(n) ? this.not(this.not(n)) : b(o.call(this, (function(t) {
                            return r.matches(t, n)
                        }
                        )))
                    },
                    is: function(n) {
                        return this.length > 0 && r.matches(this[0], n)
                    },
                    add: function(n, t) {
                        return b(a(this.concat(b(n, t))))
                    },
                    offset: function(t) {
                        if (t)
                            return this.each((function(n) {
                                var e = b(this)
                                  , a = L(this, t, n, e.offset())
                                  , r = e.offsetParent().offset()
                                  , i = {
                                    top: a.top - r.top,
                                    left: a.left - r.left
                                };
                                "static" == e.css("position") && (i.position = "relative"),
                                e.css(i)
                            }
                            ));
                        if (!this.length)
                            return null;
                        if (document.documentElement !== this[0] && !b.contains(document.documentElement, this[0]))
                            return {
                                top: 0,
                                left: 0
                            };
                        var e = this[0].getBoundingClientRect();
                        return {
                            left: e.left + n.pageXOffset,
                            top: e.top + n.pageYOffset,
                            width: Math.round(e.width),
                            height: Math.round(e.height)
                        }
                    },
                    not: function(n) {
                        var t = [];
                        if (j(n) && void 0 !== n.call)
                            this.each((function(e) {
                                n.call(this, e) || t.push(this)
                            }
                            ));
                        else {
                            var e = "string" == typeof n ? this.filter(n) : T(n) && j(n.item) ? i.slice.call(n) : b(n);
                            this.forEach((function(n) {
                                e.indexOf(n) < 0 && t.push(n)
                            }
                            ))
                        }
                        return b(t)
                    },
                    remove: function() {
                        return this.each((function() {
                            null != this.parentNode && this.parentNode.removeChild(this)
                        }
                        ))
                    },
                    css: function(n, t) {
                        if (arguments.length < 2) {
                            var e = this[0];
                            if ("string" == typeof n) {
                                if (!e)
                                    return;
                                return e.style[E(n)] || getComputedStyle(e, "").getPropertyValue(n)
                            }
                            if (k(n)) {
                                if (!e)
                                    return;
                                var a = {}
                                  , r = getComputedStyle(e, "");
                                return b.each(n, (function(n, t) {
                                    a[t] = e.style[E(t)] || r.getPropertyValue(t)
                                }
                                )),
                                a
                            }
                        }
                        var i = "";
                        if ("string" == N(n))
                            t || 0 === t ? i = A(n) + ":" + I(n, t) : this.each((function() {
                                this.style.removeProperty(A(n))
                            }
                            ));
                        else
                            for (var o in n)
                                n[o] || 0 === n[o] ? i += A(o) + ":" + I(o, n[o]) + ";" : this.each((function() {
                                    this.style.removeProperty(A(o))
                                }
                                ));
                        return this.each((function() {
                            this.style.cssText += ";" + i
                        }
                        ))
                    },
                    hasClass: function(n) {
                        return !!n && i.some.call(this, (function(n) {
                            return this.test(C(n))
                        }
                        ), R(n))
                    },
                    addClass: function(n) {
                        return n ? this.each((function(t) {
                            if ("className"in this) {
                                var e = []
                                  , a = C(this);
                                L(this, n, t, a).split(/\s+/g).forEach((function(n) {
                                    b(this).hasClass(n) || e.push(n)
                                }
                                ), this),
                                e.length && C(this, a + (a ? " " : "") + e.join(" "))
                            }
                        }
                        )) : this
                    },
                    removeClass: function(n) {
                        return this.each((function(t) {
                            if ("className"in this) {
                                if (void 0 === n)
                                    return C(this, "");
                                classList = C(this),
                                L(this, n, t, classList).split(/\s+/g).forEach((function(n) {
                                    classList = classList.replace(R(n), " ")
                                }
                                )),
                                C(this, classList.trim())
                            }
                        }
                        ))
                    },
                    toggleClass: function(n, t) {
                        return n ? this.each((function(e) {
                            var a = $(this);
                            L(this, n, e, C(this)).split(/\s+/g).forEach((function(n) {
                                (void 0 === t ? !a.hasClass(n) : t) ? a.addClass(n) : a.removeClass(n)
                            }
                            ))
                        }
                        )) : this
                    },
                    prev: function(n) {
                        return b(this.pluck("previousElementSibling")).filter(n || "*")
                    },
                    next: function(n) {
                        return b(this.pluck("nextElementSibling")).filter(n || "*")
                    },
                    html: function(n) {
                        return 0 in arguments ? this.each((function(t) {
                            var e = this.innerHTML;
                            b(this).empty().append(L(this, n, t, e))
                        }
                        )) : 0 in this ? this[0].innerHTML : null
                    },
                    text: function(n) {
                        return 0 in arguments ? this.each((function(t) {
                            var e = L(this, n, t, this.textContent);
                            this.textContent = null == e ? "" : "" + e
                        }
                        )) : 0 in this ? this.pluck("textContent").join("") : null
                    },
                    attr: function(n, t) {
                        var e;
                        return "string" != typeof n || 1 in arguments ? this.each((function(e) {
                            if (1 === this.nodeType)
                                if (_(n))
                                    for (var a in n)
                                        D(this, a, n[a]);
                                else
                                    D(this, n, L(this, t, e, this.getAttribute(n)))
                        }
                        )) : 0 in this && 1 == this[0].nodeType && null != (e = this[0].getAttribute(n)) ? e : void 0
                    },
                    removeAttr: function(n) {
                        return this.each((function() {
                            1 === this.nodeType && n.split(" ").forEach((function(n) {
                                D(this, n)
                            }
                            ), this)
                        }
                        ))
                    },
                    data: function(n, t) {
                        var e = "data-" + n.replace(d, "-$1").toLowerCase()
                          , a = 1 in arguments ? this.attr(e, t) : this.attr(e);
                        return null !== a ? B(a) : void 0
                    },
                    empty: function() {
                        return this.each((function() {
                            this.innerHTML = ""
                        }
                        ))
                    },
                    pluck: function(n) {
                        return b.map(this, (function(t) {
                            return t[n]
                        }
                        ))
                    },
                    val: function(n) {
                        return 0 in arguments ? (null == n && (n = ""),
                        this.each((function(t) {
                            this.value = L(this, n, t, this.value)
                        }
                        ))) : this[0] && (this[0].multiple ? b(this[0]).find("option").filter((function() {
                            return this.selected
                        }
                        )).pluck("value") : this[0].value)
                    },
                    closest: function(n, e) {
                        var a = []
                          , i = "object" == t(n) && $(n);
                        return this.each((function(t, o) {
                            for (; o && !(i ? i.indexOf(o) >= 0 : r.matches(o, n)); )
                                o = o !== e && !isDocument(o) && o.parentNode;
                            o && a.indexOf(o) < 0 && a.push(o)
                        }
                        )),
                        b(a)
                    },
                    ready: function(n) {
                        return p.test(document.readyState) && document.body ? n(this) : document.addEventListener("DOMContentLoaded", (function() {
                            n(this)
                        }
                        ), !1),
                        this
                    },
                    find: function(n) {
                        var e = this;
                        return n ? "object" == t(n) ? b(n).filter((function() {
                            var n = this;
                            return i.some.call(e, (function(t) {
                                return b.contains(t, n)
                            }
                            ))
                        }
                        )) : 1 == this.length ? b(r.qsa(this[0], n)) : this.map((function() {
                            return r.qsa(this, n)
                        }
                        )) : $()
                    }
                },
                r.H = function(n, t) {
                    return new w(n,t)
                }
                ,
                r.matches = function(n, t) {
                    if (!t || !n || 1 !== n.nodeType)
                        return !1;
                    var e = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.matchesSelector;
                    if (e)
                        return e.call(n, t);
                    var a, i = n.parentNode, o = !i;
                    return o && (i = tempParent).appendChild(n),
                    a = ~r.qsa(i, t).indexOf(n),
                    o && tempParent.removeChild(n),
                    a
                }
                ,
                r.fragment = function(n, t, e) {
                    var a, r, o;
                    return l.test(n) && (a = b(document.createElement(RegExp.$1))),
                    a || (n.replace && (n = n.replace(m, "<$1></$2>")),
                    void 0 === t && (t = u.test(n) && RegExp.$1),
                    t in y || (t = "*"),
                    (o = y[t]).innerHTML = "" + n,
                    a = b.each(i.slice.call(o.childNodes), (function() {
                        o.removeChild(this)
                    }
                    ))),
                    O(e) && (r = b(a),
                    b.each(e, (function(n, t) {
                        methodAttributes.indexOf(n) > -1 ? r[n](t) : r.attr(n, t)
                    }
                    ))),
                    a
                }
                ,
                r.qsa = function(n, t) {
                    var e, a = "#" == t[0], r = !a && "." == t[0], o = a || r ? t.slice(1) : t, s = f.test(o);
                    return n.getElementById && s && a ? (e = n.getElementById(o)) ? [e] : [] : 1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType ? [] : i.slice.call(s && !a && n.getElementsByClassName ? r ? n.getElementsByClassName(o) : n.getElementsByTagName(t) : n.querySelectorAll(t))
                }
                ,
                r.isH = function(n) {
                    return n instanceof r.H
                }
                ,
                r.init = function(n, t) {
                    var e, a;
                    if (!n)
                        return r.H();
                    if ("string" == typeof n)
                        if ("<" == (n = n.trim())[0] && u.test(n))
                            e = r.fragment(n, RegExp.$1, t),
                            n = null;
                        else {
                            if (void 0 !== t)
                                return b(t).find(n);
                            e = r.qsa(document, n)
                        }
                    else {
                        if (j(n))
                            return b(document).ready(n);
                        if (r.isH(n))
                            return n;
                        if (k(n))
                            a = n,
                            e = i.filter.call(a, (function(n) {
                                return null != n
                            }
                            ));
                        else if (_(n))
                            e = [n],
                            n = null;
                        else if (u.test(n))
                            e = r.fragment(n.trim(), RegExp.$1, t),
                            n = null;
                        else {
                            if (void 0 !== t)
                                return b(t).find(n);
                            e = r.qsa(document, n)
                        }
                    }
                    return r.H(e, n)
                }
                ,
                "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach((function(n) {
                    s["[object " + n + "]"] = n.toLowerCase()
                }
                ));
                var S = {
                    "column-count": 1,
                    columns: 1,
                    "font-weight": 1,
                    "line-height": 1,
                    opacity: 1,
                    "z-index": 1,
                    zoom: 1
                };
                function I(n, t) {
                    return "number" != typeof t || S[A(n)] ? t : t + "px"
                }
                function T(n) {
                    var t = !!n && "length"in n && n.length
                      , e = b.type(n);
                    return "function" != e && !x(n) && ("array" == e || 0 === t || "number" == typeof t && t > 0 && t - 1 in n)
                }
                function L(n, t, e, a) {
                    return j(t) ? t.call(n, e, a) : t
                }
                function D(n, t, e) {
                    null == e ? n.removeAttribute(t) : n.setAttribute(t, e)
                }
                function B(n) {
                    try {
                        return n ? "true" == n || "false" != n && ("null" == n ? null : +n + "" == n ? +n : /^[\[\{]/.test(n) ? b.parseJSON(n) : n) : n
                    } catch (t) {
                        return n
                    }
                }
                function P(n, t) {
                    t(n);
                    for (var e = 0, a = n.childNodes.length; e < a; e++)
                        P(n.childNodes[e], t)
                }
                return ["after", "prepend", "before", "append"].forEach((function(t, e) {
                    var a = e % 2;
                    b.fn[t] = function() {
                        var t, i, o = b.map(arguments, (function(n) {
                            var e = [];
                            return "array" == (t = N(n)) ? (n.forEach((function(n) {
                                return void 0 !== n.nodeType ? e.push(n) : r.isH(n) ? e = e.concat(n.get()) : void (e = e.concat(r.fragment(n)))
                            }
                            )),
                            e) : "object" == t || null == n ? n : r.fragment(n)
                        }
                        )), s = this.length > 1;
                        return o.length < 1 ? this : this.each((function(t, r) {
                            i = a ? r : r.parentNode,
                            r = 0 == e ? r.nextSibling : 1 == e ? r.firstChild : 2 == e ? r : null;
                            var c = b.contains(document.documentElement, i);
                            o.forEach((function(t) {
                                if (s)
                                    t = t.cloneNode(!0);
                                else if (!i)
                                    return b(t).remove();
                                i.insertBefore(t, r),
                                c && P(t, (function(t) {
                                    if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
                                        var e = t.ownerDocument ? t.ownerDocument.defaultView : n;
                                        e.eval.call(e, t.innerHTML)
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    b.fn[a ? t + "To" : "insert" + (e ? "Before" : "After")] = function(n) {
                        return b(n)[t](this),
                        this
                    }
                }
                )),
                a = function(n) {
                    return o.call(n, (function(t, e) {
                        return n.indexOf(t) == e
                    }
                    ))
                }
                ,
                b.type = N,
                b.isFunction = j,
                b.isWindow = x,
                b.isArray = k,
                r.H.prototype = w.prototype = b.fn,
                function(t) {
                    var e, a = 1, r = Array.prototype.slice, i = t.isFunction, o = function(n) {
                        return "string" == typeof n
                    }, s = {}, c = {}, u = "onfocusin"in n, l = {
                        focus: "focusin",
                        blur: "focusout"
                    }, p = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    };
                    function m(n) {
                        return n._zid || (n._zid = a++)
                    }
                    function f(n, t, e, a) {
                        if ((t = d(t)).ns)
                            var r = (i = t.ns,
                            new RegExp("(?:^| )" + i.replace(" ", " .* ?") + "(?: |$)"));
                        var i;
                        return (s[m(n)] || []).filter((function(n) {
                            return n && (!t.e || n.e == t.e) && (!t.ns || r.test(n.ns)) && (!e || m(n.fn) === m(e)) && (!a || n.sel == a)
                        }
                        ))
                    }
                    function d(n) {
                        var t = ("" + n).split(".");
                        return {
                            e: t[0],
                            ns: t.slice(1).sort().join(" ")
                        }
                    }
                    function h(n, t) {
                        return n.del && !u && n.e in l || !!t
                    }
                    function g(n) {
                        return p[n] || u && l[n] || n
                    }
                    function y(n, a, r, i, o, c, u) {
                        var l = m(n)
                          , f = s[l] || (s[l] = []);
                        a.split(/\s/).forEach((function(a) {
                            if ("ready" == a)
                                return t(document).ready(r);
                            var s = d(a);
                            s.fn = r,
                            s.sel = o,
                            s.e in p && (r = function(n) {
                                var e = n.relatedTarget;
                                if (!e || e !== this && !t.contains(this, e))
                                    return s.fn.apply(this, arguments)
                            }
                            ),
                            s.del = c;
                            var l = c || r;
                            s.proxy = function(t) {
                                if (!(t = _(t)).isImmediatePropagationStopped()) {
                                    t.data = i;
                                    var a = l.apply(n, t._args == e ? [t] : [t].concat(t._args));
                                    return !1 === a && (t.preventDefault(),
                                    t.stopPropagation()),
                                    a
                                }
                            }
                            ,
                            s.i = f.length,
                            f.push(s),
                            "addEventListener"in n && n.addEventListener(g(s.e), s.proxy, h(s, u))
                        }
                        ))
                    }
                    function b(n, t, e, a, r) {
                        var i = m(n);
                        (t || "").split(/\s/).forEach((function(t) {
                            f(n, t, e, a).forEach((function(t) {
                                delete s[i][t.i],
                                "removeEventListener"in n && n.removeEventListener(g(t.e), t.proxy, h(t, r))
                            }
                            ))
                        }
                        ))
                    }
                    c.click = c.mousedown = c.mouseup = c.mousemove = "MouseEvents",
                    t.event = {
                        add: y,
                        remove: b
                    },
                    t.proxy = function(n, e) {
                        var a = 2 in arguments && r.call(arguments, 2);
                        if (i(n)) {
                            var s = function() {
                                return n.apply(e, a ? a.concat(r.call(arguments)) : arguments)
                            };
                            return s._zid = m(n),
                            s
                        }
                        if (o(e))
                            return a ? (a.unshift(n[e], n),
                            t.proxy.apply(null, a)) : t.proxy(n[e], n);
                        throw new TypeError("expected function")
                    }
                    ,
                    t.fn.bind = function(n, t, e) {
                        return this.on(n, t, e)
                    }
                    ,
                    t.fn.unbind = function(n, t) {
                        return this.off(n, t)
                    }
                    ,
                    t.fn.one = function(n, t, e, a) {
                        return this.on(n, t, e, a, 1)
                    }
                    ;
                    var v = function() {
                        return !0
                    }
                      , w = function() {
                        return !1
                    }
                      , N = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/
                      , k = {
                        preventDefault: "isDefaultPrevented",
                        stopImmediatePropagation: "isImmediatePropagationStopped",
                        stopPropagation: "isPropagationStopped"
                    };
                    function _(n, a) {
                        return !a && n.isDefaultPrevented || (a || (a = n),
                        t.each(k, (function(t, e) {
                            var r = a[t];
                            n[t] = function() {
                                return this[e] = v,
                                r && r.apply(a, arguments)
                            }
                            ,
                            n[e] = w
                        }
                        )),
                        n.timeStamp || (n.timeStamp = Date.now()),
                        (a.defaultPrevented !== e ? a.defaultPrevented : "returnValue"in a ? !1 === a.returnValue : a.getPreventDefault && a.getPreventDefault()) && (n.isDefaultPrevented = v)),
                        n
                    }
                    function x(n) {
                        var t, a = {
                            originalEvent: n
                        };
                        for (t in n)
                            N.test(t) || n[t] === e || (a[t] = n[t]);
                        return _(a, n)
                    }
                    t.fn.delegate = function(n, t, e) {
                        return this.on(t, n, e)
                    }
                    ,
                    t.fn.undelegate = function(n, t, e) {
                        return this.off(t, n, e)
                    }
                    ,
                    t.fn.live = function(n, e) {
                        return t(document.body).delegate(this.selector, n, e),
                        this
                    }
                    ,
                    t.fn.die = function(n, e) {
                        return t(document.body).undelegate(this.selector, n, e),
                        this
                    }
                    ,
                    t.fn.on = function(n, a, s, c, u) {
                        var l, p, m = this;
                        return n && !o(n) ? (t.each(n, (function(n, t) {
                            m.on(n, a, s, t, u)
                        }
                        )),
                        m) : (o(a) || i(c) || !1 === c || (c = s,
                        s = a,
                        a = e),
                        c !== e && !1 !== s || (c = s,
                        s = e),
                        !1 === c && (c = w),
                        m.each((function(e, i) {
                            u && (l = function(n) {
                                return b(i, n.type, c),
                                c.apply(this, arguments)
                            }
                            ),
                            a && (p = function(n) {
                                var e, o = t(n.target).closest(a, i).get(0);
                                if (o && o !== i)
                                    return e = t.extend(x(n), {
                                        currentTarget: o,
                                        liveFired: i
                                    }),
                                    (l || c).apply(o, [e].concat(r.call(arguments, 1)))
                            }
                            ),
                            y(i, n, c, s, a, p || l)
                        }
                        )))
                    }
                    ,
                    t.fn.off = function(n, a, r) {
                        var s = this;
                        return n && !o(n) ? (t.each(n, (function(n, t) {
                            s.off(n, a, t)
                        }
                        )),
                        s) : (o(a) || i(r) || !1 === r || (r = a,
                        a = e),
                        !1 === r && (r = w),
                        s.each((function() {
                            b(this, n, r, a)
                        }
                        )))
                    }
                    ,
                    t.fn.trigger = function(n, e) {
                        return (n = o(n) || t.isPlainObject(n) ? t.Event(n) : _(n))._args = e,
                        this.each((function() {
                            n.type in l && "function" == typeof this[n.type] ? this[n.type]() : "dispatchEvent"in this ? this.dispatchEvent(n) : t(this).triggerHandler(n, e)
                        }
                        ))
                    }
                    ,
                    t.fn.triggerHandler = function(n, e) {
                        var a, r;
                        return this.each((function(i, s) {
                            (a = x(o(n) ? t.Event(n) : n))._args = e,
                            a.target = s,
                            t.each(f(s, n.type || n), (function(n, t) {
                                if (r = t.proxy(a),
                                a.isImmediatePropagationStopped())
                                    return !1
                            }
                            ))
                        }
                        )),
                        r
                    }
                    ,
                    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach((function(n) {
                        t.fn[n] = function(t) {
                            return 0 in arguments ? this.bind(n, t) : this.trigger(n)
                        }
                    }
                    )),
                    t.Event = function(n, t) {
                        o(n) || (n = (t = n).type);
                        var e = document.createEvent(c[n] || "Events")
                          , a = !0;
                        if (t)
                            for (var r in t)
                                "bubbles" == r ? a = !!t[r] : e[r] = t[r];
                        return e.initEvent(n, a, !0),
                        _(e)
                    }
                }(b),
                n.fan = b,
                b
            }
            ))
        }
        ).call(this, e(183)(n))
    },
    466: function(n, t, e) {
        var a = {
            "./en.js": 467,
            "./vi.js": 468,
            "./zh-CN.js": 469,
            "./zh-TW.js": 470
        };
        function r(n) {
            var t = i(n);
            return e(t)
        }
        function i(n) {
            if (!e.o(a, n)) {
                var t = new Error("Cannot find module '" + n + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return a[n]
        }
        r.keys = function() {
            return Object.keys(a)
        }
        ,
        r.resolve = i,
        n.exports = r,
        r.id = 466
    },
    467: function(n, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            lang_info: 'Switch language to "{0}"?',
            lang_ok: "OK",
            lang_cancel: "Cancel",
            lang_setting: "Language",
            system: {
                save_success: "Save Success",
                copy_success: "Copy Success",
                copy_fail: "Copy Fail",
                confirm_title: "Hint",
                confirm_sure: "OK",
                operate_fail: "Operate fail",
                loading: "Loading...",
                btn_confirm: "Confirm",
                logout_msg: "Are you sure you want to log out?",
                error_555: "You have lost connection, please refresh the interface!",
                error_500: "Please enter the correct TRC address",
                error_400: "Inputs cannot contain illegal characters",
                error_5000: "Illegal request!",
                error_5001: "Unauthorized access!",
                error_5002: "Login timed out!",
                error_5003: "Your account is already logged in on another device!",
                error_6000: "Query result does not exist!",
                error_7001: "Account already exists, please change!",
                error_7002: "The current wallet address already exists! ",
                error_7003: "Registration failed!",
                error_7004: "Login system exception!",
                error_7005: "Account does not exist!",
                error_7006: "Account freeze!",
                error_7007: "Incorrect account or password, unable to log in!",
                error_7008: "The address is already registered, please try again later!",
                error_7009: "Non-members are not allowed to log in!",
                error_8000: "No commission can be settled at the moment!!",
                error_8001: "Minimum settlement commission 1U"
            },
            meta: {
                title: "OB HASH"
            },
            copy_fast: "Copy",
            save_image: "Save QR code",
            copy: "Copy",
            offical_address: "Official Wallet address",
            address: "Wallet address",
            home: {
                game_rule: "Game Rules",
                game_example: "Winning Rules",
                game_example1: "Example1",
                game_example2: "Example2",
                game_example3: "Example3",
                game_example4: "Example4",
                game_rule_desc: {
                    odds: "Odds",
                    pay: " pay ",
                    zhuangxie: "BANKER&PLAYER",
                    he: "TIE",
                    transfer_limit: "Limit",
                    rule_transfer: "Transfer amount over maximum considered as invalid transfer,refund to same wallet after deduct 0.1% Service fee.",
                    rule_transfer_niuniu: "Join game amount is 10% of your transfer amount.",
                    rule_cut: "Only integer values are accepted, values after decimals are not counted.",
                    rule_no_commission: "No commission for transfer on this game."
                },
                game: {
                    xinyunhaxi: {
                        name: "Lucky draw",
                        example: [[['<p>Transfer Amount: <span class="mark">1001</span></p>', '<p>Block hash of transaction is: 000*****9e<span class="mark">3a</span></p>', '<p>Last 2 digits is "3a" = number & alphabet</p>', '<p><span class="mark">REWARDS</span>: <br/>1001*2.00=2002.00</p>'], ['<p>Transfer Amount: <span class="mark">2800.03</span></p>', '<p>Block hash of transaction is: 000*****9e<span class="mark">c4</span></p>', '<p>The last two digits "c4" of the block hash value are the combination of "alphabet + number"</p>', "<p>Result lottery the system remittance amount is: <br/>2800*2.00=5600.00</p>"]], [['<p>Transfer Amount: <span class="mark">1051</span></p>', '<p>Block hash of transaction is: 000*****9e<span class="mark">ad</span></p>', '<p>The last two digits "ad" of the block hash value are the combination of "alphabet + alphabet"</p>', '<p>Result <span class="gray">NO REWARDS</span> no return of digital currency</p>'], ['<p>Transfer Amount: <span class="mark">2224.31</span></p>', '<p>Block hash of transaction is: 000*****9e<span class="mark">71</span></p>', '<p>Last 2 digits is "71" = both is number</p>', '<p>Result <span class="gray">NO REWARDS</span> no return of digital currency</p>']]]
                    },
                    xinyunshuzi: {
                        name: "Sicbo",
                        example: [[['<p>Transfer Amount: <span class="mark">1000</span></p>', '<p>Considered as play on "SMALL"</p>', '<p>Block hash of transaction is: 000*****<span class="mark">1</span></p>', '<p>Last number is "1" Result is "SMALL"</p>', '<p><span class="mark">REWARDS</span>: <br/>1000*1.95=1950</p>'], ['<p>Transfer Amount: <span class="mark">2309.23</span></p>', '<p>Considered as play on "BIG"</p>', '<p>Block hash of transaction is: 000*****<span class="mark">3</span>a</p>', '<p>Last number is "3" Result is "SMALL"</p>', '<p><span class="gray">NO REWARDS</span></p>']], [['<p>Transfer Amount: <span class="mark">4213.23</span></p>', "<p>The last digit of transfer is other number, consider invalid bet</p>", "<p>REFUND to same wallet after deduct 0.1% Service fee</p>"], ['<p>Transfer Amount: <span class="mark">151.23</span></p>', '<p>Considered as play on "Single"</p>', '<p>Block hash of transaction is: 000*****<span class="mark">7</span>ba</p>', '<p>Last number is "7" Result is "ODD"</p>', '<p><span class="mark">REARDS</span>: <br/>151*1.95=294.45</p>']]]
                    },
                    haxiniuniu: {
                        name: "10X Hash",
                        odds_detail: "player points * 0.95",
                        example: [[['<p>Transfer Amount: <span class="mark">1000</span></p>', '<p>Block hash of transaction is:000*****57<span class="mark">aba</span></p>', '<p>"House" is: 57a，5+7+10=22 "Niu2"</p>', '<p>"User" is: aba，10+10+10=30 "NiuNiu"</p>', '<p><span class="mark">REARDS</span>: </p>', '<p>"User" transfer 100 USDT, pay 1 to 10 = 1000</p>', "<p>After deduct 5% Service fee,REWARDS 1000+(1000-50)=1950</p>", '<p><span class="mark">Even profit</span> <br/>1000+1000-50=1950</p>'], ['<p>Transfer Amount: <span class="mark">2800.03</span></p>', '<p>Block hash of transaction is:000*****89<span class="mark">ec7</span></p>', '<p>"House" is: 89e，8+9+10=27 "Niu7"</p>', '<p>"User" is: ec7，10+10+7=27 "Niu7"</p>', '<p><span class="gray">REARDS</span>:</p>', "<p>Because 1-2 points are the same point,</p>", "<p>the banker will win, and the other points will be deducted 1/1000 of the handling fee and the principal will be refunded 2800-2800*1‰=2797.2</p>"]], [['<p>Transfer Amount: <span class="mark">2224.03</span></p>', '<p>Block hash of transaction is:000*****c1<span class="mark">e1f</span></p>', "<p>Banker's lottery number. c1e, 10+1+10=1 point</p>", "<p>The player's lottery number is: e1f, 10+1+10=1 point</p>", "<p>REARDS：</p>", "<p>Because 1-2 points with the same point, the banker wins</p>", "<p>Player bet 222.4 cattle five, lose 1 multiple 222.4</p>", "<p>Receipt <br/>2224-222.4=2001.6</p>"], ['<p>Transfer Amount: <span class="mark">1051</span></p>', '<p>Block hash of transaction is:000*****c5<span class="mark">e29</span></p>', '<p>"House" is c5e, 10+5+10=25 point "Niu5"</p>', '<p>"User" is e29, 10+2+9=21 point "Niu1"</p>', "<p>REARDS：Player bet 105.1 point,lose 5 times 525.5</p>", "<p>Refund <br/>1051-525.5=525.5</p>"]]]
                    },
                    xingyunzhuangxian: {
                        name: "Baccarat",
                        odds_detail: "BANKER&PLAYER:1 pay 1.95<br />TIE:1 pay 8",
                        example: [[['<p>Transfer Amount：<span class="mark">1001</span></p>', '<p>Considered as play on "BANKER"</p>', '<p>Block hash of transaction is：000*****<span class="mark">a7B41</span></p>', '<p>"BANKER" equal to a+7=7</p>', '<p>"PLAYER" equal to 4+1=5</p>', '<p>"BANKER" Win</p>', "<p>REARDS: <br/>1001*1.95=1951.95</p>"], ['<p>Transfer Amount：<span class="mark">3223</span></p>', '<p>Considered as play on "TIE"</p>', '<p>Block hash of transaction is：000*****<span class="mark">a7B43</span></p>', '<p>"BANKER" equal to a+7=7</p>', '<p>"PLAYER" equal to 4+3=7</p>', '<p>"TIE" Win</p>', "<p>REARDS: <br/>3223*8=25784</p>"]], [['<p>Transfer Amount：<span class="mark">1002.23</span></p>', '<p>Considered as play on "PLAYER"</p>', '<p>Block hash of transaction is：000*****<span class="mark">a7B43</span></p>', '<p>"BANKER" equal to a+7=7</p>', '<p>"PLAYER" equal to 4+3=7</p>', '<p>"TIE" Win</p>', "<p>REFUND to same wallet after deduct 0.1% Service fee</p>"], ['<p>Transfer Amount：<span class="mark">2003</span></p>', '<p>Considered as play on "TIE"</p>', '<p>Block hash of transaction is：000*****<span class="mark">a7Bad</span></p>', '<p>"BANKER" equal to a+7=7</p>', '<p>"PLAYER" equal to a+d=0</p>', '<p>"BANKER" Win</p>', '<p><span class="gray">NO REWARDS</span></p>']]]
                    }
                },
                question: {
                    q1: "Q1:What is Block hash？",
                    a1: "A block hash is the DNA of a piece of data, and each block hash is unique, random, and unbreakable",
                    q2: "Q2:What is blockchain？",
                    a2: "Blockchain is a type of shared database that differs from a typical database in the way that it stores information; blockchains store data in blocks that are then linked together via cryptography",
                    q3: "Q3:Centralized wallet? Decentralized wallets? Why can't centralized wallets inquiry transfers？",
                    a3: "To give an example: your own wallet address is A, you transfer 10 USDT to address E, but you use the transaction hash to inquiry, you can only inquiry the service provider randomly a certain ledger address B (or C or D, etc.) and E transfer. In the same way, E can't know if the 10 USDT were transferred by you, because E can only see that the ledger address B transferred 10 USDT to him. This is why centralized wallets cannot inquiry real transfer information on the blockchain",
                    q4: "Q4:Why do I win or not win consecutively？",
                    a4: 'First of all, the first consecutive number of unsuccessful wins are small probability events (<a href="https://baike.baidu.com/item/%E5%B0%8F%E6%A6%82%E7%8E%87%E4%BA%8B%E4%BB%B6/7339473" target="_blank" class="c-link">small probability event definition</a>), and secondly, winning and not winning the lottery are random events, and the frequency of random events will tend to a stable value. In the case of non-iteration, the probability of things appearing is equal for everyone, in this case, everyone is fair. At the same time, random events will obey the law of large numbers (under the condition that the experiment is unchanged, the experiment is repeated many times, and the frequency of random events is similar to its definition of the law of probability large numbers), and the probability of winning or not winning the lottery will tend to a stable value in the case of increasing transfer frequency. So please continue to transfer money, as the frequency of transfers increases, the total probability of winning the lottery will increase',
                    q5: "Q5:Why is the account funds will delayed？",
                    a5: 'There are many well-known public chains around the world (<a href="https://zhidao.baidu.com/question/271935601941038645.html" target="_blank" class="c-link">click to view the world\'s well-known public chains</a>) that support USDT transfers, and our platform is based on Tron TRC20 technology. So the transfer address of our platform belongs to USDT-TRC20, you should choose USDT-TRC20; if you choose another type, the lucky hash will not receive your USDT, which will cause losses to both you and the lucky hash',
                    tips: "View original video"
                },
                progress: {
                    p_register: "Register Wallet",
                    p_buy_coin: "Exchange Currency",
                    p_transfer: "Join Lucky Draw",
                    p_win: "Rewards",
                    detail_teach: "View",
                    p_win_desc: "After winning, the system will automatically return the money"
                }
            },
            loginReg: {
                login: "Login",
                register: "Register",
                remeber: "Remember TRC20 address and password",
                forgot: "Forgot password?",
                no_account: "No account? Register now",
                have_account: "Already have an account? Login now",
                input_user: "Please enter your username",
                input_pwd: "please enter your password",
                input_pwd_confirm: "Please enter your password again",
                input_trc20: "Please enter TRC20 address",
                v_username_pwd: "TRC20 address and password can not be empty!",
                v_address: "TRC20 address is wrong!",
                v_pwd_confirm: "Password confirm is wrong!",
                v_pwd: "The password is a combination of 8~16 alphanumeric characters!"
            },
            gameRule: ["<p>1.Commission cash out every 10 minutes.</p>", '<p>2.Click "Collect" button to claim commission.</p>', "<p>3.Commission Rate：</p>", '<p class="sub green">Lvl 1 Total transfer *0.8%</p>', '<p class="sub green">Lvl 2 Total Transfer *0.2%</p>'],
            share: {
                title: "Share With Friends",
                scan_desc: "Scan the code to register and play now",
                bottom_item1: "ultra-low threshold betting game",
                bottom_item2: "The result is unique and authentic",
                bottom_item3: "Own secure wallet settlement in seconds",
                bottom_item4: "Sign up for super benefits"
            },
            promotion: {
                no_promotion: "no data"
            },
            commisionPromotion: {
                title: "Make money by promoting",
                btn_checkout: "Collect",
                checkout_success: "Collect Success",
                sub_title: "Minimum settlement amount：{money} USDT",
                f_commission: "Commission",
                f_claimed: "Claimed",
                f_unclaimed: "Unclaimed",
                f_lv1: "Lvl1",
                f_lv2: "Lvl2",
                f_transfer: "Transfer",
                f_numbers: "Members",
                f_rebate: "Rebate",
                activity_rule: "Activity Rule",
                my_wallet: "My Wallet",
                btn_share: "Copy Share Link",
                btn_qr: "Download"
            },
            mine: {
                title_account: "Account ID",
                m_account: "account",
                m_mine: "mine",
                m_trc: "TRC address",
                m_tranfer: "Transfer Details",
                m_rebase: "Rebate Details",
                m_commison: "Commission Details",
                m_app: "Add Screen",
                m_share: "Share to earn",
                m_out: "Sign out",
                m_comm: "Commision",
                m_promotion: "Promotion",
                m_rebate: "Rebate"
            },
            bottom: {
                home: "Home",
                profile: "Profile",
                live: "Live"
            },
            cashback: {
                c_back: "Cash Back",
                c_time: "Application Time",
                c_amount: "Billing Amount",
                c_status: "Billing status",
                c_settlement: "settlement",
                c_success: "successful settlement",
                c_fail: "fail settlement",
                no_data: "No data",
                know: "Know"
            },
            rebate: {
                r_back: "Cash Back",
                r_money: "Wallet",
                r_history: "CashBack History",
                r_amount: "Transcation History",
                r_bet: "Bet",
                r_water: "Rebate",
                r_claimed: "Claimed",
                r_unclaimed: "Unclaimed",
                r_wallet: "Settlement to wallet",
                r_minimum: "Minimum settlement amount",
                r_collect: "Collect",
                r_rules: "Activity Rules",
                r_rules1: "Rebate settlement and distribution time: The system will automatically distribute at 00:00:00 every day (one day before distribution)",
                r_rules2: "Click Collect to claim CashBack",
                r_rules3: "CashBack Rate, Member Transaction*0.5%",
                r_error: "No commission can be settled at the moment!"
            },
            commission: {
                c_back: "Commission Settlement"
            },
            bet: {
                bet1: "Transfer Details",
                bet2: "Lucky draw",
                bet3: "10X Hash",
                bet4: "Sicbo",
                bet5: "Baccarat",
                bet6: "lose",
                bet7: "win",
                bet8: "single and double",
                bet9: "big and small",
                bet10: "single",
                bet11: "double",
                bet12: "Big",
                bet13: "Small",
                bet14: "play",
                bet15: "draw",
                bet16: "bank",
                bet17: "Bet",
                bet18: "Result",
                bet19: "Rebate",
                bet20: "betting time",
                bet21: "lottery",
                bet22: "NO REWARDS",
                bet23: "draw",
                bet24: "INVALID transfer",
                bet25: "no lottery",
                bet26: "No more",
                bet27: "Upcoming prize draw",
                bet28: "Unsettlement",
                bet29: "INVALID transfer",
                bet30: "No commission can be settled at the moment!"
            },
            result: {
                LN00: "(bet: Single | lottery: Single)",
                LN01: "(bet: Single | lottery: Double)",
                LN10: "(bet: Double | lottery: Single)",
                LN11: "(bet: Double | lottery: Double)",
                LN22: "(bet: Big | lottery: Big)",
                LN23: "(bet: Big | lottery: Small)",
                LN32: "(bet: Small | lottery: Big)",
                LN33: "(bet: Small | lottery: Small)",
                LH00: "(player: number+number)",
                LH01: "(player: number+letter)",
                LH10: "(player: letter+number)",
                LH11: "(player: letter+letter)",
                NN00: "(system: NiuNiu | player: NiuNiu)",
                NN01: "(system: NiuNiu | player: Niu1)",
                NN02: "(system: NiuNiu | player: Niu2)",
                NN03: "(system: NiuNiu | player: Niu3)",
                NN04: "(system: NiuNiu | player: Niu4)",
                NN05: "(system: NiuNiu | player: Niu5)",
                NN06: "(system: NiuNiu | player: Niu6)",
                NN07: "(system: NiuNiu | player: Niu7)",
                NN08: "(system: NiuNiu | player: Niu8)",
                NN09: "(system: NiuNiu | player: Niu9)",
                NN10: "(system: Niu1 | player: NiuNiu)",
                NN11: "(system: Niu1 | player: Niu1)",
                NN12: "(system: Niu1 | player: Niu2)",
                NN13: "(system: Niu1 | player: Niu3)",
                NN14: "(system: Niu1 | player: Niu4)",
                NN15: "(system: Niu1 | player: Niu5)",
                NN16: "(system: Niu1 | player: Niu6)",
                NN17: "(system: Niu1 | player: Niu7)",
                NN18: "(system: Niu1 | player: Niu8)",
                NN19: "(system: Niu1 | player: Niu9)",
                NN20: "(system: Niu2 | player: NiuNiu)",
                NN21: "(system: Niu2 | player: Niu1)",
                NN22: "(system: Niu2 | player: Niu2)",
                NN23: "(system: Niu2 | player: Niu3)",
                NN24: "(system: Niu2 | player: Niu4)",
                NN25: "(system: Niu2 | player: Niu5)",
                NN26: "(system: Niu2 | player: Niu6)",
                NN27: "(system: Niu2 | player: Niu7)",
                NN28: "(system: Niu2 | player: Niu8)",
                NN29: "(system: Niu2 | player: Niu9)",
                NN30: "(system: Niu3 | player: NiuNiu)",
                NN31: "(system: Niu3 | player: Niu1)",
                NN32: "(system: Niu3 | player: Niu2)",
                NN33: "(system: Niu3 | player: Niu3)",
                NN34: "(system: Niu3 | player: Niu4)",
                NN35: "(system: Niu3 | player: Niu5)",
                NN36: "(system: Niu3 | player: Niu6)",
                NN37: "(system: Niu3 | player: Niu7)",
                NN38: "(system: Niu3 | player: Niu8)",
                NN39: "(system: Niu3 | player: Niu9)",
                NN40: "(system: Niu4 | player: NiuNiu)",
                NN41: "(system: Niu4 | player: Niu1)",
                NN42: "(system: Niu4 | player: Niu2)",
                NN43: "(system: Niu4 | player: Niu3)",
                NN44: "(system: Niu4 | player: Niu4)",
                NN45: "(system: Niu4 | player: Niu5)",
                NN46: "(system: Niu4 | player: Niu6)",
                NN47: "(system: Niu4 | player: Niu7)",
                NN48: "(system: Niu4 | player: Niu8)",
                NN49: "(system: Niu4 | player: Niu9)",
                NN50: "(system: Niu5 | player: NiuNiu)",
                NN51: "(system: Niu5 | player: Niu1)",
                NN52: "(system: Niu5 | player: Niu2)",
                NN53: "(system: Niu5 | player: Niu3)",
                NN54: "(system: Niu5 | player: Niu4)",
                NN55: "(system: Niu5 | player: Niu5)",
                NN56: "(system: Niu5 | player: Niu6)",
                NN57: "(system: Niu5 | player: Niu7)",
                NN58: "(system: Niu5 | player: Niu8)",
                NN59: "(system: Niu5 | player: Niu9)",
                NN60: "(system: Niu6 | player: NiuNiu)",
                NN61: "(system: Niu6 | player: Niu1)",
                NN62: "(system: Niu6 | player: Niu2)",
                NN63: "(system: Niu6 | player: Niu3)",
                NN64: "(system: Niu6 | player: Niu4)",
                NN65: "(system: Niu6 | player: Niu5)",
                NN66: "(system: Niu6 | player: Niu6)",
                NN67: "(system: Niu6 | player: Niu7)",
                NN68: "(system: Niu6 | player: Niu8)",
                NN69: "(system: Niu6 | player: Niu9)",
                NN70: "(system: Niu7 | player: NiuNiu)",
                NN71: "(system: Niu7 | player: Niu1)",
                NN72: "(system: Niu7 | player: Niu2)",
                NN73: "(system: Niu7 | player: Niu3)",
                NN74: "(system: Niu7 | player: Niu4)",
                NN75: "(system: Niu7 | player: Niu5)",
                NN76: "(system: Niu7 | player: Niu6)",
                NN77: "(system: Niu7 | player: Niu7)",
                NN78: "(system: Niu7 | player: Niu8)",
                NN79: "(system: Niu7 | player: Niu9)",
                NN80: "(system: Niu8 | player: NiuNiu)",
                NN81: "(system: Niu8 | player: Niu1)",
                NN82: "(system: Niu8 | player: Niu2)",
                NN83: "(system: Niu8 | player: Niu3)",
                NN84: "(system: Niu8 | player: Niu4)",
                NN85: "(system: Niu8 | player: Niu5)",
                NN86: "(system: Niu8 | player: Niu6)",
                NN87: "(system: Niu8 | player: Niu7)",
                NN88: "(system: Niu8 | player: Niu8)",
                NN89: "(system: Niu8 | player: Niu9)",
                NN90: "(system: Niu9 | player: NiuNiu)",
                NN91: "(system: Niu9 | player: Niu1)",
                NN92: "(system: Niu9 | player: Niu2)",
                NN93: "(system: Niu9 | player: Niu3)",
                NN94: "(system: Niu9 | player: Niu4)",
                NN95: "(system: Niu9 | player: Niu5)",
                NN96: "(system: Niu9 | player: Niu6)",
                NN97: "(system: Niu9 | player: Niu7)",
                NN98: "(system: Niu9 | player: Niu8)",
                NN99: "(system: Niu9 | player: Niu9)",
                LBP00: "(bet: bank | lottery: bank)",
                LBP01: "(bet: bank | lottery: play)",
                LBP02: "(bet: bank | lottery: draw)",
                LBP10: "(bet: play | lottery: bank)",
                LBP11: "(bet: play | lottery: play)",
                LBP12: "(bet: play | lottery: draw)",
                LBP20: "(bet: draw | lottery: bank)",
                LBP21: "(bet: draw | lottery: play)",
                LBP22: "(bet: draw | lottery: draw)"
            },
            live: {
                live1: "Live",
                live2: "Email",
                live3: "Live",
                live4: "Inqueries"
            }
        }
    },
    468: function(n, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            lang_info: "Đổi ngôn ngữ thành “{0}” không?",
            lang_ok: "Có",
            lang_cancel: "Hủy",
            lang_setting: "Ngôn ngữ",
            redEnvRain2022: {
                go_table: "Cược bàn",
                btn_status_1: "Nắm lấy",
                btn_status_2: "Nắm lấy",
                btn_status_3: "Quá Hạn",
                btn_status_4: "vồ lấy",
                btn_status_5: "Đã kết thúc",
                btn_status_6: "ẩn",
                btn_1: "Giành Lì Xì",
                btn_2: "Đã Giành",
                btn_3: "Lì Xì",
                btn_4: "Quá Hạn",
                btn_5: "Hết hạn sau",
                title: "mưa phong bì đỏ",
                title1: "Khuyến mãi",
                title2: "Quy trình",
                title3: "Câu hỏi thường gặp",
                title4: "Điều khoản khuyến mãi",
                copyright: "2022 OB Live Casino Bảo lưu tất cả quyền   ALL RIGHTS RESERVED",
                text_1: "Tết đến, xuân về! OB Live Casino xin gửi tới quý khách lời chúc mừng năm mới! Hàng triệu lì xì đang chờ quý <br/>khách! Tận hưởng trải nghiệm độc quyền mới! Hẹn năm <br/>Hổ cùng phát tài! Chúc quý khách năm mới nhiều tài lộc, vạn sự như ý!",
                text_2_1: "Trong thời gian khuyến mãi, mỗi tài khoản người chơi, mỗi trận mưa lì xì chỉ được nhận 1 bao lì xì.",
                text_2_2: "Khi lì xì được phát, người chơi nhấp vào biểu tượng khuyến mãi để kích hoạt khuyến mãi phát lì xì.",
                text_2_3: "Nhấn vào các bao lì xì nằm rải rác trên màn hình để tham gia khuyến mãi.",
                text_2_4: "Tiền lì xì giành được sẽ tự động thêm vào tài khoản.",
                text_2_5: "Tiền thưởng dùng để cược trong sòng, đủ 1 vòng cược được rút tiền.",
                text_3_1_q: "Lì xì được phát ngẫu nhiên không?",
                text_3_1_a: "Lì xì được phát ngẫu nhiên, cược càng nhiều, càng dễ giành được lì xì lớn.",
                text_3_2_q: "Khi nào phát lì xì?",
                text_3_2_a: "Lì xì sẽ được phát vào 16h, 20h ngày 31/1 và 1/2 theo giờ Bắc Kinh, đừng quên tới nhận~",
                text_3_3_q: "Làm thế nào để tham gia khuyến mãi?",
                text_3_3_a: "Trong thời gian khuyến mãi, lì xì sẽ được phát theo thời gian đã định, quý khách có thể nhấp vào biểu tượng khuyến mãi để kích hoạt khuyến mãi, nhấn vào lì xì nằm rải rác trên màn hình để nhận.",
                text_3_4_q: "Khi phát lì xì có nhắc nhở gì không?",
                text_3_4_a: "Sẽ có lời nhắc đếm ngược trước khi lì xì được phát, quý khách nên vào chơi trước để tránh bỏ lỡ thời gian khuyến mãi~",
                text_3_5_q: "Lì xì có giới hạn số lượng không?",
                text_3_5_a: "Mỗi trận mưa lì xì chỉ được nhận 1 bao lì xì. Tham gia nhiều trận, có thể nhận tối đa 4 bao lì xì~",
                text_3_6_q: "Tôi có thể xem lì xì mình đã nhận ở đâu?",
                text_3_6_a: "Quý khách có thể xem lì xì đã nhận trong Khuyến mãi-Chi tiết.",
                text_3_7_q: "Lì xì có yêu cầu gì khi rút tiền không?",
                text_3_7_a: "Tiền sẽ tới ví tiền sòng ngay khi nhận lì xì, cược đủ 1 vòng cược trong sòng là được rút tiền, mời vào “Tài khoản của tôi” để xem chi tiết cược",
                text_4_1: "Sau khi nhận lì xì, tiền sẽ tự động chuyển vào ví tiền sòng của người chơi;",
                text_4_2: "Chỉ áp dụng cho người dùng tiền thật của sòng;",
                text_4_3: "Các tài khoản có cùng số điện thoại di động, họ tên, địa chỉ email, tài khoản ngân hàng và các thông tin khác, mỗi đợt phát lì xì chỉ được tham gia một lần;",
                text_4_4: "Nếu người dùng/đoàn thể nào có hành vi gian lận trục lợi tiền khuyến mãi, chúng tôi có quyền đóng băng hoặc đóng tài khoản có liên quan mà không cần thông báo, đồng thời không hoàn lại khoản thanh toán và người dùng sẽ bị đưa vào danh sách đen;",
                text_4_5: "Để tránh sự khác biệt trong cách hiểu văn bản, chúng tôi có quyền giải thích cuối cùng về khuyến mãi này;",
                text_4_6: "Khuyến mãi tuân theo các quy định và điều khoản chung của chúng tôi."
            }
        }
    },
    469: function(n, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            lang_info: '语言是否切换为"{0}"?',
            lang_ok: "确定",
            lang_cancel: "取消",
            lang_setting: "语言设定",
            system: {
                save_success: "保存成功",
                copy_success: "复制成功",
                copy_fail: "复制失败",
                confirm_title: "提示",
                confirm_sure: "确定",
                operate_fail: "操作失败！",
                loading: "加载中...",
                btn_confirm: "确认",
                logout_msg: "是否确认退出?",
                error_555: "您已失去连接，请刷新界面！",
                error_500: "请输入正确的TRC地址",
                error_400: "输入项中不能包含非法字符",
                error_5000: "非法请求!",
                error_5001: "未授权访问!",
                error_5002: "登录超时!",
                error_5003: "您的账号已在其他设备登录!",
                error_6000: "查询结果不存在!",
                error_7001: "账号已存在，请更换!",
                error_7002: "当前钱包地址已存在!",
                error_7003: "注册失败!",
                error_7004: "登录系统异常!",
                error_7005: "账号不存在!",
                error_7006: "您的账号已被冻结!",
                error_7007: "账号或密码不正确，无法登录!",
                error_7008: "地址已经在注册中，请稍后再试!",
                error_7009: "非会员不允许登录!",
                error_8000: "暂无佣金可以结算!",
                error_8001: "最低结算佣金1U"
            },
            meta: {
                title: "OB哈希"
            },
            copy_fast: "一键复制",
            save_image: "保存至相册",
            copy: "复制",
            offical_address: "官方投注地址",
            address: "投注地址",
            home: {
                game_rule: "游戏规则",
                game_example1: "示例一",
                game_example2: "示例二",
                game_example3: "示例三",
                game_example4: "示例四",
                game_rule_desc: {
                    odds: "赔率",
                    pay: "赔",
                    zhuangxie: "庄闲",
                    he: "和",
                    transfer_limit: "转账限额",
                    rule_transfer: "低于限额平台扣除，高于限额扣除千1手续费返回",
                    rule_transfer_niuniu: "转账金额=投注金额*10倍 如投注10需转账100",
                    rule_cut: "转账整数部分参与抽奖，小数扣除",
                    rule_no_commission: "，此游戏投注不返佣"
                },
                game: {
                    xinyunhaxi: {
                        name: "幸运哈希",
                        example: [[['<p>您的转账金额为：<span class="mark">1001</span></p>', '<p>该笔转账的区块哈希为：000*****9e<span class="mark">3a</span></p>', "<p>区块哈希值最后两位3a为“数字+字母”组合</p>", '<p>结果<span class="mark">中奖</span>系统汇款金额为：1001*2.00=2002.00</p>'], ['<p>您的转账金额为：<span class="mark">1051</span></p>', '<p>该笔转账的区块哈希为：000*****9e<span class="mark">ad</span></p>', "<p>区块哈希值最后两位ad为“字母+字母”组合</p>", '<p>结果<span class="gray">未中奖</span>不返还数字币</p>']], [['<p>您的转账金额为：<span class="mark">2800.03</span></p>', '<p>该笔转账的区块哈希为：000*****9e<span class="mark">c4</span></p>', "<p>区块哈希值最后两位c4为“字母+数字”组合</p>", '<p>结果<span class="mark">中奖</span>系统汇款金额为：2800*2.00=5600.00</p>'], ['<p>您的转账金额为：<span class="mark">2224.31</span></p>', '<p>该笔转账的区块哈希为：000*****9e<span class="mark">71</span></p>', "<p>区块哈希值最后两位71为“数字+数字”组合</p>", '<p>结果<span class="gray">未中奖</span>不返还数字币</p>']]]
                    },
                    xinyunshuzi: {
                        name: "幸运数字",
                        example: [[['<p>您的转账金额为：<span class="mark">1000</span></p>', "<p>识别为押小</p>", '<p>该笔转账的Block hash为：000*****<span class="mark">1</span></p>', "<p>Block hash最后一位数字为“1”识别为小</p>", '<p>结果<span class="mark">中奖</span>系统汇款金额为：1000*1.95=1950</p>'], ['<p>您的转账金额为：<span class="mark">2309.23</span></p>', "<p>识别为押大</p>", '<p>该笔转账的Block hash为：000*****<span class="mark">3</span>a</p>', "<p>Block hash最后一位数字为“3”识别为小</p>", '<p>结果<span class="gray">未中奖</span>不返还数字币</p>']], [['<p>您的转账金额为：<span class="mark">4213.23</span></p>', "<p>个位数为其他数字，识别为无效投注</p>", "<p>扣除千分之一手续费后原路退回</p>"], ['<p>您的转账金额为：<span class="mark">151.23</span></p>', "<p>识别为押单</p>", '<p>该笔转账的Block hash为：000*****<span class="mark">7</span>ba</p>', "<p>Block hash最后一位数字为“7”识别为单</p>", '<p>结果<span class="mark">中奖</span>系统汇款金额为：151*1.95=294.45</p>']]]
                    },
                    haxiniuniu: {
                        name: "哈希牛牛",
                        odds_detail: "(1-10)x0.95",
                        example: [[['<p>您的转账金额为：<span class="mark">1000</span></p>', '<p>该笔转账的区块哈希为：000*****57<span class="mark">aba</span></p>', "<p>庄家开奖号码：57a，5+7+10=22 牛二</p>", "<p>闲家开奖号码是：aba，10+10+10=30 牛牛</p>", '<p>结果<span class="mark">中奖</span>系统汇款金额为：</p>', "<p>闲家投注100牛牛，赢10倍1000</p>", "<p>闲赢抽百分5，盈1000抽50</p>", '<p><span class="mark">连本带利</span>1000+1000-50=1950</p>'], ['<p>您的转账金额为：<span class="mark">2800.03</span></p>', '<p>该笔转账的区块哈希为：000*****89<span class="mark">ec7</span></p>', "<p>庄家开奖号码：89e，8+9+10=27 牛七</p>", "<p>闲家开奖号码是：ec7，10+10+7=27 牛七</p>", '<p>结果<span class="gray">未中奖</span>系统汇款金额为：</p>', "<p>因为1-2点同点庄赢</p>", "<p>其他同点扣千分之一手续费退还本金</p>", "<p>回款2800-2800*1‰=2797.2</p>"]], [['<p>您的转账金额为：<span class="mark">2224.03</span></p>', '<p>该笔转账的区块哈希为：000*****c1<span class="mark">e1f</span></p>', "<p>庄家开奖号码：c1e，10+1+10=1 牛一</p>", "<p>闲家开奖号码是：e1f，10+1+10=1 牛一</p>", '<p>结果<span class="gray">未中奖</span>系统汇款金额为：</p>', "<p>因为1-2点同点庄赢</p>", "<p>闲家投注222.4牛一，输1倍222.4</p>", "<p>回款2224-222.4=2001.6</p>"], ['<p>您的转账金额为：<span class="mark">1051</span></p>', '<p>该笔转账的区块哈希为：000*****c5<span class="mark">e29</span></p>', "<p>庄家开奖号码：c5e，10+5+10=25 牛五</p>", "<p>闲家开奖号码是：e29，10+2+9=21 牛一</p>", '<p>结果<span class="gray">未中奖</span>系统汇款金额为：</p>', "<p>闲家投注105.1牛一，输5倍525.5</p>", "<p>回款1051-525.5=525.5</p>"]]]
                    },
                    xingyunzhuangxian: {
                        name: "幸运庄闲",
                        odds_detail: "庄闲:1赔1.95<br />和:1赔8",
                        example: [[['<p>您的转账金额为：<span class="mark">1001</span></p>', "<p>识别为押庄赢</p>", '<p>该笔转账的Block hash为：000*****<span class="mark">a7B41</span></p>', "<p>a、7代表 庄的点数为7点</p>", "<p>4、1代表 闲的点数为5点</p>", "<p>开奖为庄赢</p>", '<p>结果<span class="mark">中奖</span>系统回款金额为:1001*1.95=1951.95</p>'], ['<p>您的转账金额为：<span class="mark">3223</span></p>', "<p>识别为押和赢</p>", '<p>该笔转账的区块哈希为：000*****<span class="mark">a7B43</span></p>', "<p>a、7代表 庄的点数为7点</p>", "<p>4、3代表 闲的点数为7点</p>", "<p>开奖为和赢</p>", '<p>结果<span class="mark">中奖</span>系统回款金额为:3223*8=25784</p>']], [['<p>您的转账金额为：<span class="mark">1002.23</span></p>', "<p>识别为押闲赢</p>", '<p>该笔转账的区块哈希为：000*****<span class="mark">a7B43</span></p>', "<p>a、7代表 庄的点数为7点</p>", "<p>4、3代表 闲的点数为7点</p>", "<p>开奖为和赢</p>", "<p>扣除千分之一手续费后原路退回</p>"], ['<p>您的转账金额为：<span class="mark">2003</span></p>', "<p>识别为押和赢</p>", '<p>该笔转账的区块哈希为：000*****<span class="mark">a7Bad</span></p>', "<p>a、7代表 庄的点数为7点</p>", "<p>a、d代表 闲的点数为0点</p>", "<p>开奖为庄赢</p>", '<p>结果<span class="gray">未中奖</span>不返还数字币</p>']]]
                    }
                },
                question: {
                    q1: "Q1：什么是区块哈希值(Block hash)？",
                    a1: "区块哈希值是一段数据的DNA，每个区块哈希值都是唯一的、随机的且不可破解的。",
                    q2: "Q2：什么是区块链？",
                    a2: "区块链从本质上讲，它是一个共享数据库，存储于其中的数据或信息。具有不可伪造、全程留痕、可以追溯、公开透明、集体维护等特征。",
                    q3: "Q3：中心化钱包？去中心化钱包？为什么中心化钱包无法查询转账？",
                    a3: "举一个例子：您自己的钱包地址是A，您给地址E转入10个USDT，但您用交易哈希值去查询，只能查询到服务商随机某个账本地址B（或C或D等等）与E的转账。 同理E也无法得知这10个USDT是否是您转出的，因为E只能看见是账本地址B给他转入10个USDT。这就是为什么中心化钱包无法在区块链上查询真实转账信息。",
                    q4: "Q4：为什么我会连续中奖或不中奖？",
                    a4: '首先连续多次不中奖的是小概率事件（<a href="https://baike.baidu.com/item/%E5%B0%8F%E6%A6%82%E7%8E%87%E4%BA%8B%E4%BB%B6/7339473" target="_blank" class="c-link">小概率事件定义</a>），其次中奖与不中奖是随机事件，随机事件的发生的频率会趋于一个稳定值。 在非迭代的情况下，事物出现的概率对每个人来讲是相等的，这个情况下，每个人都是公平的。 同时随机事件会遵大数定律（在试验不变的条件下，重复试验多次，随机事件的频率近似于它的概率大数定律定义），在转账频次不断增加的情况下，中奖与不中奖的概率会趋于一个稳定值。 所以请您继续转账，随着转账频次增加则中奖总概率会提升。',
                    q5: "Q5：为什么会延迟到帐？",
                    a5: '全球有许多知名公链（<a href="https://zhidao.baidu.com/question/271935601941038645.html" target="_blank" class="c-link">点击查看全球知名公链</a>）都支持进行USDT转账，而我们平台是基于波场TRC20技术。 所以我们平台的转账地址是属于USDT-TRC20， 您应该选择USDT-TRC20； 如果您选择了其他类型，幸运哈希则无法收到您的USDT，这会造成您和幸运哈希双方的损失。',
                    tips: "查看原视频"
                },
                progress: {
                    p_register: "注册钱包",
                    p_buy_coin: "购买虚拟币",
                    p_transfer: "转账抽奖",
                    p_win: "中奖回款",
                    detail_teach: "详细教程",
                    p_win_desc: "中奖后系统自动回款"
                }
            },
            loginReg: {
                login: "登录",
                register: "注册",
                remeber: "记住钱包地址和密码",
                forgot: "忘记密码?",
                no_account: "没有账号?立即注册",
                have_account: "已有账号?立即登录",
                input_user: "请输入您的用户名",
                input_pwd: "请输入您的密码",
                input_pwd_confirm: "请再次输入您的密码",
                input_trc20: "请输入TRC20地址",
                v_username_pwd: "TRC20地址和密码不能为空!",
                v_address: "TRC20地址格式不正确!",
                v_pwd_confirm: "二次密码输入不一致!",
                v_pwd: "密码为8~16位字母数字组合!"
            },
            gameRule: ["<p>1.佣金结算发放时间：每隔10分钟系统自动派发</p>", "<p>2.“未结算”的佣金，可以通过点击「结算」直接结算到钱包</p>", "<p>3.佣金计算方式：</p>", '<p class="sub green">一级返佣 = 一级用户的总投注*0.8%</p>', '<p class="sub green">二级返佣 = 二级用户的总投注*0.2%</p>'],
            share: {
                title: "分享好友",
                scan_desc: "扫码注册立即游戏",
                bottom_item1: "超低门槛竞猜游戏",
                bottom_item2: "结果唯一真实全网可查",
                bottom_item3: "自有钱包安全注单秒结",
                bottom_item4: "注册即享高额返水返佣福利"
            },
            promotion: {
                no_promotion: "暂无优惠活动"
            },
            commisionPromotion: {
                title: "推广赚钱",
                btn_checkout: "结算",
                checkout_success: "结算成功",
                sub_title: "最低结算金额：{money} USDT",
                f_commission: "总佣金",
                f_claimed: "已结算",
                f_unclaimed: "未结算",
                f_lv1: "一级",
                f_lv2: "二级",
                f_transfer: "总投注",
                f_numbers: "人数",
                f_rebate: "总返佣",
                activity_rule: "活动规则",
                my_wallet: "我的钱包",
                btn_share: "复制分享链接",
                btn_qr: "下载分享二维码"
            },
            mine: {
                title_account: "账号ID",
                m_mine: "我的",
                m_account: "账号",
                m_trc: "TRC地址",
                m_tranfer: "投注记录",
                m_rebase: "我的返水",
                m_commison: "推广赚钱",
                m_app: "添加桌面",
                m_share: "分享好友",
                m_out: "退出登录",
                m_comm: "推广",
                m_promotion: "优惠",
                m_rebate: "返水"
            },
            bottom: {
                home: "主页",
                profile: "我的",
                live: "客服"
            },
            cashback: {
                c_back: "返水记录",
                c_time: "申请时间",
                c_amount: "结算金额",
                c_status: "结算状态",
                c_settlement: "结算中",
                c_success: "结算成功",
                c_fail: "结算失败",
                no_data: "暂无数据",
                know: "明白了"
            },
            rebate: {
                r_back: "我的返水",
                r_money: "我的钱包",
                r_history: "历史总返水",
                r_amount: "历史总投注",
                r_bet: "今日投注",
                r_water: "今日待返水",
                r_claimed: "已结算",
                r_unclaimed: "未结算",
                r_wallet: "结算到钱包",
                r_minimum: "最低结算金额",
                r_collect: "返水结算到钱包",
                r_rules: "活动规则",
                r_rules1: "返水结算发放时间:每日的00:00:00系统自动派发(发放前一日)",
                r_rules2: "“未结算”的返水,可以通过点击【结算】直接结算到钱包",
                r_rules3: "返水计算方式: 返水=用户的总投注*0.5%",
                r_error: "暂无佣金可以结算！"
            },
            commission: {
                c_back: "佣金结算"
            },
            bet: {
                bet1: "投注记录",
                bet2: "幸运哈希",
                bet3: "哈希牛牛",
                bet4: "幸运数字",
                bet5: "幸运庄闲",
                bet6: "输",
                bet7: "赢",
                bet8: "单双",
                bet9: "大小",
                bet10: "单",
                bet11: "双",
                bet12: "大",
                bet13: "小",
                bet14: "闲",
                bet15: "和",
                bet16: "庄",
                bet17: "投注",
                bet18: "结果",
                bet19: "返奖金额",
                bet20: "投注时间",
                bet21: "中奖",
                bet22: "未中奖",
                bet23: "和",
                bet24: "无效投注",
                bet25: "未中奖",
                bet26: "没有更多了",
                bet27: "即将开奖",
                bet28: "未结算",
                bet29: "无效投注",
                bet30: "暂无佣金可以结算!"
            },
            result: {
                LN00: "(下注: 单 | 开奖: 单)",
                LN01: "(下注: 单 | 开奖: 双)",
                LN10: "(下注: 双 | 开奖: 单)",
                LN11: "(下注: 双 | 开奖: 双)",
                LN22: "(下注: 大 | 开奖: 大)",
                LN23: "(下注: 大 | 开奖: 小)",
                LN32: "(下注: 小 | 开奖: 大)",
                LN33: "(下注: 小 | 开奖: 小)",
                LH00: "(玩家: 数字+数字)",
                LH01: "(玩家: 数字+字母)",
                LH10: "(玩家: 字母+数字)",
                LH11: "(玩家: 字母+字母)",
                NN00: "(系统: 牛牛 | 玩家: 牛牛)",
                NN01: "(系统: 牛牛 | 玩家: 牛1)",
                NN02: "(系统: 牛牛 | 玩家: 牛2)",
                NN03: "(系统: 牛牛 | 玩家: 牛3)",
                NN04: "(系统: 牛牛 | 玩家: 牛4)",
                NN05: "(系统: 牛牛 | 玩家: 牛5)",
                NN06: "(系统: 牛牛 | 玩家: 牛6)",
                NN07: "(系统: 牛牛 | 玩家: 牛7)",
                NN08: "(系统: 牛牛 | 玩家: 牛8)",
                NN09: "(系统: 牛牛 | 玩家: 牛9)",
                NN10: "(系统: 牛1 | 玩家: 牛牛)",
                NN11: "(系统: 牛1 | 玩家: 牛1)",
                NN12: "(系统: 牛1 | 玩家: 牛2)",
                NN13: "(系统: 牛1 | 玩家: 牛3)",
                NN14: "(系统: 牛1 | 玩家: 牛4)",
                NN15: "(系统: 牛1 | 玩家: 牛5)",
                NN16: "(系统: 牛1 | 玩家: 牛6)",
                NN17: "(系统: 牛1 | 玩家: 牛7)",
                NN18: "(系统: 牛1 | 玩家: 牛8)",
                NN19: "(系统: 牛1 | 玩家: 牛9)",
                NN20: "(系统: 牛2 | 玩家: 牛牛)",
                NN21: "(系统: 牛2 | 玩家: 牛1)",
                NN22: "(系统: 牛2 | 玩家: 牛2)",
                NN23: "(系统: 牛2 | 玩家: 牛3)",
                NN24: "(系统: 牛2 | 玩家: 牛4)",
                NN25: "(系统: 牛2 | 玩家: 牛5)",
                NN26: "(系统: 牛2 | 玩家: 牛6)",
                NN27: "(系统: 牛2 | 玩家: 牛7)",
                NN28: "(系统: 牛2 | 玩家: 牛8)",
                NN29: "(系统: 牛2 | 玩家: 牛9)",
                NN30: "(系统: 牛3 | 玩家: 牛牛)",
                NN31: "(系统: 牛3 | 玩家: 牛1)",
                NN32: "(系统: 牛3 | 玩家: 牛2)",
                NN33: "(系统: 牛3 | 玩家: 牛3)",
                NN34: "(系统: 牛3 | 玩家: 牛4)",
                NN35: "(系统: 牛3 | 玩家: 牛5)",
                NN36: "(系统: 牛3 | 玩家: 牛6)",
                NN37: "(系统: 牛3 | 玩家: 牛7)",
                NN38: "(系统: 牛3 | 玩家: 牛8)",
                NN39: "(系统: 牛3 | 玩家: 牛9)",
                NN40: "(系统: 牛4 | 玩家: 牛牛)",
                NN41: "(系统: 牛4 | 玩家: 牛1)",
                NN42: "(系统: 牛4 | 玩家: 牛2)",
                NN43: "(系统: 牛4 | 玩家: 牛3)",
                NN44: "(系统: 牛4 | 玩家: 牛4)",
                NN45: "(系统: 牛4 | 玩家: 牛5)",
                NN46: "(系统: 牛4 | 玩家: 牛6)",
                NN47: "(系统: 牛4 | 玩家: 牛7)",
                NN48: "(系统: 牛4 | 玩家: 牛8)",
                NN49: "(系统: 牛4 | 玩家: 牛9)",
                NN50: "(系统: 牛5 | 玩家: 牛牛)",
                NN51: "(系统: 牛5 | 玩家: 牛1)",
                NN52: "(系统: 牛5 | 玩家: 牛2)",
                NN53: "(系统: 牛5 | 玩家: 牛3)",
                NN54: "(系统: 牛5 | 玩家: 牛4)",
                NN55: "(系统: 牛5 | 玩家: 牛5)",
                NN56: "(系统: 牛5 | 玩家: 牛6)",
                NN57: "(系统: 牛5 | 玩家: 牛7)",
                NN58: "(系统: 牛5 | 玩家: 牛8)",
                NN59: "(系统: 牛5 | 玩家: 牛9)",
                NN60: "(系统: 牛6 | 玩家: 牛牛)",
                NN61: "(系统: 牛6 | 玩家: 牛1)",
                NN62: "(系统: 牛6 | 玩家: 牛2)",
                NN63: "(系统: 牛6 | 玩家: 牛3)",
                NN64: "(系统: 牛6 | 玩家: 牛4)",
                NN65: "(系统: 牛6 | 玩家: 牛5)",
                NN66: "(系统: 牛6 | 玩家: 牛6)",
                NN67: "(系统: 牛6 | 玩家: 牛7)",
                NN68: "(系统: 牛6 | 玩家: 牛8)",
                NN69: "(系统: 牛6 | 玩家: 牛9)",
                NN70: "(系统: 牛7 | 玩家: 牛牛)",
                NN71: "(系统: 牛7 | 玩家: 牛1)",
                NN72: "(系统: 牛7 | 玩家: 牛2)",
                NN73: "(系统: 牛7 | 玩家: 牛3)",
                NN74: "(系统: 牛7 | 玩家: 牛4)",
                NN75: "(系统: 牛7 | 玩家: 牛5)",
                NN76: "(系统: 牛7 | 玩家: 牛6)",
                NN77: "(系统: 牛7 | 玩家: 牛7)",
                NN78: "(系统: 牛7 | 玩家: 牛8)",
                NN79: "(系统: 牛7 | 玩家: 牛9)",
                NN80: "(系统: 牛8 | 玩家: 牛牛)",
                NN81: "(系统: 牛8 | 玩家: 牛1)",
                NN82: "(系统: 牛8 | 玩家: 牛2)",
                NN83: "(系统: 牛8 | 玩家: 牛3)",
                NN84: "(系统: 牛8 | 玩家: 牛4)",
                NN85: "(系统: 牛8 | 玩家: 牛5)",
                NN86: "(系统: 牛8 | 玩家: 牛6)",
                NN87: "(系统: 牛8 | 玩家: 牛7)",
                NN88: "(系统: 牛8 | 玩家: 牛8)",
                NN89: "(系统: 牛8 | 玩家: 牛9)",
                NN90: "(系统: 牛9 | 玩家: 牛牛)",
                NN91: "(系统: 牛9 | 玩家: 牛1)",
                NN92: "(系统: 牛9 | 玩家: 牛2)",
                NN93: "(系统: 牛9 | 玩家: 牛3)",
                NN94: "(系统: 牛9 | 玩家: 牛4)",
                NN95: "(系统: 牛9 | 玩家: 牛5)",
                NN96: "(系统: 牛9 | 玩家: 牛6)",
                NN97: "(系统: 牛9 | 玩家: 牛7)",
                NN98: "(系统: 牛9 | 玩家: 牛8)",
                NN99: "(系统: 牛9 | 玩家: 牛9)",
                LBP00: "(下注: 庄 | 开奖: 庄)",
                LBP01: "(下注: 庄 | 开奖: 闲)",
                LBP02: "(下注: 庄 | 开奖: 和)",
                LBP10: "(下注: 闲 | 开奖: 庄)",
                LBP11: "(下注: 闲 | 开奖: 闲)",
                LBP12: "(下注: 闲 | 开奖: 和)",
                LBP20: "(下注: 和 | 开奖: 庄)",
                LBP21: "(下注: 和 | 开奖: 闲)",
                LBP22: "(下注: 和 | 开奖: 和)"
            },
            live: {
                live1: "客服",
                live2: "邮件",
                live3: "线上客服",
                live4: "点击咨询"
            }
        }
    },
    470: function(n, t, e) {
        "use strict";
        e.r(t),
        t.default = {
            lang_info: '語言是否切換為"{0}"?',
            lang_ok: "確定",
            lang_cancel: "取消",
            lang_setting: "語言設定",
            redEnvRain2022: {
                go_table: "進桌投注",
                btn_status_1: "已搶",
                btn_status_2: "已搶",
                btn_status_3: "已過期",
                btn_status_4: "搶紅包",
                btn_status_5: "已結束",
                btn_status_6: "已隱藏",
                btn_1: "搶紅包",
                btn_2: "已搶",
                btn_3: "紅包",
                btn_4: "已過期",
                btn_5: "後過期",
                title: "紅包雨",
                title1: "活動說明",
                title2: "活動流程",
                title3: "常見問題",
                title4: "活動條款",
                copyright: "2022 OB視訊 版權所有 ALL RIGHTS RESERVED",
                text_1: "迎春納福，紅紅火火！OB視訊攜眾廳為您新春送祝福！<br/>百萬紅包零門檻可得！場館上新盡享專屬體驗！<br/>相約虎年，共赴「錢」程！<br/>祝您財源滾滾，虎虎生風，開年見喜，大吉大利！",
                text_2_1: "活動期間每個玩家賬號，單個紅包場次只能領取一個紅包。",
                text_2_2: "紅包派發時，玩家點擊活動浮標即可觸發紅包派發活動。",
                text_2_3: "點擊屏幕上撒落的紅包即可參與活動。",
                text_2_4: "獲得的紅包金額自動到賬，無需申請。",
                text_2_5: "中獎金額可用於場館內任意投注，一倍流水即可出款。",
                text_3_1_q: "紅包是隨機派發嗎？",
                text_3_1_a: "紅包都是隨機派發的，並且投注越多，拆到大額紅包的概率就越大！ ",
                text_3_2_q: "紅包什麼時候發？ ",
                text_3_2_a: "紅包將在北京時間1月31日16點、20點和2月1日16點、20點準時發放，別忘了來領哦！ ",
                text_3_3_q: "怎麼參加活動？ ",
                text_3_3_a: "活動期間紅包會在每個場次準點派發，您可點擊活動浮標來觸發活動，通過點擊灑落的紅包即可領取~",
                text_3_4_q: "紅包派發時有提醒嗎?",
                text_3_4_a: "親，紅包派發之前本場館會有倒計時提醒，建議您提前進入場館遊戲，以免錯過活動時間呢~",
                text_3_5_q: "紅包有數量限制嗎?",
                text_3_5_a: "單一場次只能領取一個紅包。參與多個場次，最多可以獲得4個紅包哦~",
                text_3_6_q: "我領取到的紅包在哪裡可以查看？ ",
                text_3_6_a: "您可在優惠活動-活動記錄中查看領取到的紅包。 ",
                text_3_7_q: "紅包有提款要求嗎？ ",
                text_3_7_a: "領取到紅包即刻到賬場館錢包，可用於本場館的所有投注行為，一倍流水就可以提款，流水詳情可在【個人中心】進行查看哦！ ",
                text_4_1: "紅包領取後會自動派發到玩家場館錢包內；",
                text_4_2: "此活動僅適用於本場館的真錢用戶；",
                text_4_3: "同一手機號、姓名、郵箱地址、銀行卡號等信息的遊戲賬號，單場紅包派發僅可參與一次；",
                text_4_4: "任何用戶或團體以不正常的方式進行套取活動優惠，平台方保留在不通知的情況下凍結或關閉相關賬戶的權利，並不退還款項，且用戶會被列入黑名單；",
                text_4_5: "為避免文字理解差異，本場館保留本活動最終解釋權；",
                text_4_6: "此活動遵循本場館一般規則與條款。 "
            }
        }
    },
    478: function(n, t) {},
    57: function(n, t, e) {
        "use strict";
        e.d(t, "b", (function() {
            return it
        }
        )),
        e.d(t, "a", (function() {
            return j
        }
        ));
        e(78),
        e(46),
        e(59),
        e(92),
        e(93);
        var a = e(24)
          , r = e(47)
          , i = (e(81),
        e(49),
        e(68),
        e(33),
        e(50),
        e(3))
          , o = e(101)
          , s = e(339)
          , c = e(149)
          , u = e.n(c)
          , l = e(91)
          , p = e.n(l)
          , m = e(150)
          , f = e(54)
          , d = e(7);
        function h(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }
                ))),
                e.push.apply(e, a)
            }
            return e
        }
        function g(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(e), !0).forEach((function(t) {
                    Object(r.a)(n, t, e[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : h(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }
                ))
            }
            return n
        }
        var y = function() {
            return Object(d.m)(e.e(4).then(e.bind(null, 751)))
        }
          , b = function() {};
        i.default.use(m.a);
        var v = {
            mode: "hash",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(n, t, e) {
                return {
                    x: 0,
                    y: 0
                }
            },
            routes: [{
                path: "/404",
                component: y,
                name: "404"
            }, {
                path: "/mobile",
                component: function() {
                    return Object(d.m)(Promise.all([e.e(0), e.e(1), e.e(10)]).then(e.bind(null, 736)))
                },
                name: "mobile"
            }, {
                path: "/mobile/betRecord",
                component: function() {
                    return Object(d.m)(Promise.all([e.e(0), e.e(1), e.e(6)]).then(e.bind(null, 737)))
                },
                name: "mobile-betRecord"
            }, {
                path: "/mobile/commission",
                component: function() {
                    return Object(d.m)(Promise.all([e.e(0), e.e(7)]).then(e.bind(null, 738)))
                },
                name: "mobile-commission"
            }, {
                path: "/mobile/commissionRecord",
                component: function() {
                    return Object(d.m)(e.e(8).then(e.bind(null, 739)))
                },
                name: "mobile-commissionRecord"
            }, {
                path: "/mobile/customer",
                component: function() {
                    return Object(d.m)(e.e(9).then(e.bind(null, 740)))
                },
                name: "mobile-customer"
            }, {
                path: "/mobile/login",
                component: function() {
                    return Object(d.m)(e.e(11).then(e.bind(null, 741)))
                },
                name: "mobile-login"
            }, {
                path: "/mobile/pageMine",
                component: function() {
                    return Object(d.m)(Promise.all([e.e(0), e.e(12)]).then(e.bind(null, 742)))
                },
                name: "mobile-pageMine"
            }, {
                path: "/mobile/promotion",
                component: function() {
                    return Object(d.m)(e.e(13).then(e.bind(null, 743)))
                },
                name: "mobile-promotion"
            }, {
                path: "/mobile/rebate",
                component: function() {
                    return Object(d.m)(e.e(14).then(e.bind(null, 744)))
                },
                name: "mobile-rebate"
            }, {
                path: "/mobile/rebateRecord",
                component: function() {
                    return Object(d.m)(e.e(15).then(e.bind(null, 745)))
                },
                name: "mobile-rebateRecord"
            }, {
                path: "/mobile/register",
                component: function() {
                    return Object(d.m)(e.e(16).then(e.bind(null, 746)))
                },
                name: "mobile-register"
            }, {
                path: "/mobile/share",
                component: function() {
                    return Object(d.m)(Promise.all([e.e(0), e.e(22), e.e(17)]).then(e.bind(null, 747)))
                },
                name: "mobile-share"
            }, {
                path: "/mobile/teach",
                component: function() {
                    return Object(d.m)(e.e(18).then(e.bind(null, 748)))
                },
                name: "mobile-teach"
            }, {
                path: "/promotion/pay",
                component: function() {
                    return Object(d.m)(e.e(19).then(e.bind(null, 749)))
                },
                name: "promotion-pay"
            }, {
                path: "/",
                component: function() {
                    return Object(d.m)(e.e(5).then(e.bind(null, 750)))
                },
                name: "index"
            }, {
                path: "*",
                component: y,
                name: "custom"
            }],
            fallback: !1
        };
        function w(n, t) {
            var e = t._app && t._app.basePath || v.base
              , a = new m.a(g(g({}, v), {}, {
                base: e
            }))
              , r = a.push;
            a.push = function(n) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b
                  , e = arguments.length > 2 ? arguments[2] : void 0;
                return r.call(this, n, t, e)
            }
            ;
            var i = a.resolve.bind(a);
            return a.resolve = function(n, t, e) {
                return "string" == typeof n && (n = Object(f.c)(n)),
                i(n, t, e)
            }
            ,
            a
        }
        var N = {
            name: "NuxtChild",
            functional: !0,
            props: {
                nuxtChildKey: {
                    type: String,
                    default: ""
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                }
            },
            render: function(n, t) {
                var e = t.parent
                  , a = t.data
                  , r = t.props
                  , i = e.$createElement;
                a.nuxtChild = !0;
                for (var o = e, s = e.$nuxt.nuxt.transitions, c = e.$nuxt.nuxt.defaultTransition, u = 0; e; )
                    e.$vnode && e.$vnode.data.nuxtChild && u++,
                    e = e.$parent;
                a.nuxtChildDepth = u;
                var l = s[u] || c
                  , p = {};
                k.forEach((function(n) {
                    void 0 !== l[n] && (p[n] = l[n])
                }
                ));
                var m = {};
                _.forEach((function(n) {
                    "function" == typeof l[n] && (m[n] = l[n].bind(o))
                }
                ));
                var f = m.beforeEnter;
                if (m.beforeEnter = function(n) {
                    if (window.$nuxt.$nextTick((function() {
                        window.$nuxt.$emit("triggerScroll")
                    }
                    )),
                    f)
                        return f.call(o, n)
                }
                ,
                !1 === l.css) {
                    var d = m.leave;
                    (!d || d.length < 2) && (m.leave = function(n, t) {
                        d && d.call(o, n),
                        o.$nextTick(t)
                    }
                    )
                }
                var h = i("routerView", a);
                return r.keepAlive && (h = i("keep-alive", {
                    props: r.keepAliveProps
                }, [h])),
                i("transition", {
                    props: p,
                    on: m
                }, [h])
            }
        }
          , k = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"]
          , _ = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"]
          , x = {
            name: "NuxtError",
            props: {
                error: {
                    type: Object,
                    default: null
                }
            },
            computed: {
                statusCode: function() {
                    return this.error && this.error.statusCode || 500
                },
                message: function() {
                    return this.error.message || "Error"
                }
            },
            head: function() {
                return {
                    title: this.message,
                    meta: [{
                        name: "viewport",
                        content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                    }]
                }
            }
        }
          , O = (e(388),
        e(58))
          , j = Object(O.a)(x, (function() {
            var n = this
              , t = n.$createElement
              , e = n._self._c || t;
            return e("div", {
                staticClass: "__nuxt-error-page"
            }, [e("div", {
                staticClass: "error"
            }, [e("svg", {
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "90",
                    height: "90",
                    fill: "#DBE1EC",
                    viewBox: "0 0 48 48"
                }
            }, [e("path", {
                attrs: {
                    d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                }
            })]), n._v(" "), e("div", {
                staticClass: "title"
            }, [n._v(n._s(n.message))]), n._v(" "), 404 === n.statusCode ? e("p", {
                staticClass: "description"
            }, [void 0 === n.$route ? e("a", {
                staticClass: "error-link",
                attrs: {
                    href: "/"
                }
            }) : e("NuxtLink", {
                staticClass: "error-link",
                attrs: {
                    to: "/"
                }
            }, [n._v("Back to the home page")])], 1) : n._e(), n._v(" "), n._m(0)])])
        }
        ), [function() {
            var n = this
              , t = n.$createElement
              , e = n._self._c || t;
            return e("div", {
                staticClass: "logo"
            }, [e("a", {
                attrs: {
                    href: "https://nuxtjs.org",
                    target: "_blank",
                    rel: "noopener"
                }
            }, [n._v("Nuxt")])])
        }
        ], !1, null, null, null).exports
          , E = e(38)
          , A = (e(94),
        e(95),
        {
            name: "Nuxt",
            components: {
                NuxtChild: N,
                NuxtError: j
            },
            props: {
                nuxtChildKey: {
                    type: String,
                    default: void 0
                },
                keepAlive: Boolean,
                keepAliveProps: {
                    type: Object,
                    default: void 0
                },
                name: {
                    type: String,
                    default: "default"
                }
            },
            errorCaptured: function(n) {
                this.displayingNuxtError && (this.errorFromNuxtError = n,
                this.$forceUpdate())
            },
            computed: {
                routerViewKey: function() {
                    if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1)
                        return this.nuxtChildKey || Object(d.c)(this.$route.matched[0].path)(this.$route.params);
                    var n = Object(E.a)(this.$route.matched, 1)[0];
                    if (!n)
                        return this.$route.path;
                    var t = n.components.default;
                    if (t && t.options) {
                        var e = t.options;
                        if (e.key)
                            return "function" == typeof e.key ? e.key(this.$route) : e.key
                    }
                    return /\/$/.test(n.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                }
            },
            beforeCreate: function() {
                i.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
            },
            render: function(n) {
                var t = this;
                return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                    return t.errorFromNuxtError = !1
                }
                )),
                n("div", {}, [n("h2", "An error occurred while showing the error page"), n("p", "Unfortunately an error occurred and while showing the error page another error occurred"), n("p", "Error details: ".concat(this.errorFromNuxtError.toString())), n("nuxt-link", {
                    props: {
                        to: "/"
                    }
                }, "Go back to home")])) : (this.displayingNuxtError = !0,
                this.$nextTick((function() {
                    return t.displayingNuxtError = !1
                }
                )),
                n(j, {
                    props: {
                        error: this.nuxt.err
                    }
                })) : n("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props
                })
            }
        })
          , R = (e(61),
        e(72),
        e(73),
        e(74),
        {
            name: "NuxtLoading",
            data: function() {
                return {
                    percent: 0,
                    show: !1,
                    canSucceed: !0,
                    reversed: !1,
                    skipTimerCount: 0,
                    rtl: !1,
                    throttle: 200,
                    duration: 5e3,
                    continuous: !1
                }
            },
            computed: {
                left: function() {
                    return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                }
            },
            beforeDestroy: function() {
                this.clear()
            },
            methods: {
                clear: function() {
                    clearInterval(this._timer),
                    clearTimeout(this._throttle),
                    this._timer = null
                },
                start: function() {
                    var n = this;
                    return this.clear(),
                    this.percent = 0,
                    this.reversed = !1,
                    this.skipTimerCount = 0,
                    this.canSucceed = !0,
                    this.throttle ? this._throttle = setTimeout((function() {
                        return n.startTimer()
                    }
                    ), this.throttle) : this.startTimer(),
                    this
                },
                set: function(n) {
                    return this.show = !0,
                    this.canSucceed = !0,
                    this.percent = Math.min(100, Math.max(0, Math.floor(n))),
                    this
                },
                get: function() {
                    return this.percent
                },
                increase: function(n) {
                    return this.percent = Math.min(100, Math.floor(this.percent + n)),
                    this
                },
                decrease: function(n) {
                    return this.percent = Math.max(0, Math.floor(this.percent - n)),
                    this
                },
                pause: function() {
                    return clearInterval(this._timer),
                    this
                },
                resume: function() {
                    return this.startTimer(),
                    this
                },
                finish: function() {
                    return this.percent = this.reversed ? 0 : 100,
                    this.hide(),
                    this
                },
                hide: function() {
                    var n = this;
                    return this.clear(),
                    setTimeout((function() {
                        n.show = !1,
                        n.$nextTick((function() {
                            n.percent = 0,
                            n.reversed = !1
                        }
                        ))
                    }
                    ), 500),
                    this
                },
                fail: function(n) {
                    return this.canSucceed = !1,
                    this
                },
                startTimer: function() {
                    var n = this;
                    this.show || (this.show = !0),
                    void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)),
                    this._timer = setInterval((function() {
                        n.skipTimerCount > 0 ? n.skipTimerCount-- : (n.reversed ? n.decrease(n._cut) : n.increase(n._cut),
                        n.continuous && (n.percent >= 100 || n.percent <= 0) && (n.skipTimerCount = 1,
                        n.reversed = !n.reversed))
                    }
                    ), 100)
                }
            },
            render: function(n) {
                var t = n(!1);
                return this.show && (t = n("div", {
                    staticClass: "nuxt-progress",
                    class: {
                        "nuxt-progress-notransition": this.skipTimerCount > 0,
                        "nuxt-progress-failed": !this.canSucceed
                    },
                    style: {
                        width: this.percent + "%",
                        left: this.left
                    }
                })),
                t
            }
        })
          , C = (e(390),
        Object(O.a)(R, undefined, undefined, !1, null, null, null).exports)
          , S = (e(392),
        e(394),
        e(396),
        e(353),
        e(52),
        e(45),
        e(87))
          , I = {
            computed: {
                lang: function() {
                    return this.$i18n.locale
                }
            },
            watch: {
                $route: function(n, t) {
                    "mobile-pageMine" === n.name ? this.addHome() : setTimeout((function() {
                        document.getElementById("AddScreenBtn").style.top = "-10000px"
                    }
                    ), 2e3)
                }
            },
            beforeDestroy: function() {
                window.removeEventListener("beforeunload", this.clear)
            },
            mounted: function() {
                var n = this.$route.query
                  , t = n.activityId;
                t && sessionStorage.setItem("activityId", t);
                var e = Object(S.b)("redirectUrl");
                if (e) {
                    var a = Object(S.a)(e).params.replace(/ /g, "+")
                      , r = Object(S.a)(e).ttl || urlParm.ttl || n.ttl
                      , i = this.$encrypt.aesDecrypt(a.replace(/ /g, "+"), r) || "";
                    if (i) {
                        var o = JSON.parse(i);
                        sessionStorage.setItem("token", o.token)
                    }
                }
                var s = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", "".concat(s, "px")),
                window.addEventListener("resize", (function() {
                    var n = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", "".concat(n, "px"))
                }
                )),
                window.addEventListener("orientationchange", (function() {
                    var n = navigator.userAgent;
                    /(iPhone|iPad|iPod|iOS)/i.test(n) && n.includes("CriOS") && setTimeout((function() {
                        window.location.reload()
                    }
                    ), 500)
                }
                ), !1),
                window.sessionStorage.getItem("store") && this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(window.sessionStorage.getItem("store")))),
                this.addHome(),
                window.addEventListener("beforeunload", this.clear)
            },
            methods: {
                clear: function() {
                    sessionStorage.setItem("store") && sessionStorage.setItem("store", JSON.stringify(this.$store.state))
                },
                addHome: function() {
                    setTimeout((function() {
                        var n = document.getElementById("AddScreenBtn")
                          , t = document.getElementById("AddScreenBtnWrapper");
                        if (n.style.display = "block",
                        t) {
                            var e = t.getBoundingClientRect();
                            n.style.width = e.width + "px",
                            n.style.height = e.height + "px",
                            n.style.top = e.top + "px",
                            n.style.left = e.left + "px"
                        }
                    }
                    ), 2e3)
                }
            }
        }
          , T = (e(400),
        Object(O.a)(I, (function() {
            var n = this
              , t = n.$createElement
              , e = n._self._c || t;
            return e("div", {
                class: "wrapper " + n.lang
            }, [e("client-only", [e("nuxt")], 1), n._v(" "), e("div", {
                attrs: {
                    id: "AddScreenBtn"
                }
            })], 1)
        }
        ), [], !1, null, null, null).exports);
        function L(n, t) {
            var e = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
            if (!e) {
                if (Array.isArray(n) || (e = function(n, t) {
                    if (!n)
                        return;
                    if ("string" == typeof n)
                        return D(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e)
                        return Array.from(n);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                        return D(n, t)
                }(n)) || t && n && "number" == typeof n.length) {
                    e && (n = e);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= n.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: n[a++]
                            }
                        },
                        e: function(n) {
                            throw n
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, o = !0, s = !1;
            return {
                s: function() {
                    e = e.call(n)
                },
                n: function() {
                    var n = e.next();
                    return o = n.done,
                    n
                },
                e: function(n) {
                    s = !0,
                    i = n
                },
                f: function() {
                    try {
                        o || null == e.return || e.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }
        function D(n, t) {
            (null == t || t > n.length) && (t = n.length);
            for (var e = 0, a = new Array(t); e < t; e++)
                a[e] = n[e];
            return a
        }
        var B = {
            _default: Object(d.s)(T)
        }
          , $ = {
            render: function(n, t) {
                var e = n("NuxtLoading", {
                    ref: "loading"
                })
                  , a = n(this.layout || "nuxt")
                  , r = n("div", {
                    domProps: {
                        id: "__layout"
                    },
                    key: this.layoutName
                }, [a])
                  , i = n("transition", {
                    props: {
                        name: "layout",
                        mode: "out-in"
                    },
                    on: {
                        beforeEnter: function(n) {
                            window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            }
                            ))
                        }
                    }
                }, [r]);
                return n("div", {
                    domProps: {
                        id: "__nuxt"
                    }
                }, [e, i])
            },
            data: function() {
                return {
                    isOnline: !0,
                    layout: null,
                    layoutName: "",
                    nbFetching: 0
                }
            },
            beforeCreate: function() {
                i.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
            },
            created: function() {
                this.$root.$options.$nuxt = this,
                window.$nuxt = this,
                this.refreshOnlineStatus(),
                window.addEventListener("online", this.refreshOnlineStatus),
                window.addEventListener("offline", this.refreshOnlineStatus),
                this.error = this.nuxt.error,
                this.context = this.$options.context
            },
            mounted: function() {
                var n = this;
                return Object(a.a)(regeneratorRuntime.mark((function t() {
                    return regeneratorRuntime.wrap((function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                n.$loading = n.$refs.loading;
                            case 1:
                            case "end":
                                return t.stop()
                            }
                    }
                    ), t)
                }
                )))()
            },
            watch: {
                "nuxt.err": "errorChanged"
            },
            computed: {
                isOffline: function() {
                    return !this.isOnline
                },
                isFetching: function() {
                    return this.nbFetching > 0
                },
                isPreview: function() {
                    return Boolean(this.$options.previewData)
                }
            },
            methods: {
                refreshOnlineStatus: function() {
                    void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                },
                refresh: function() {
                    var n = this;
                    return Object(a.a)(regeneratorRuntime.mark((function t() {
                        var e, a;
                        return regeneratorRuntime.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if ((e = Object(d.h)(n.$route)).length) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return n.$loading.start(),
                                    a = e.map((function(t) {
                                        var e = [];
                                        if (t.$options.fetch && t.$options.fetch.length && e.push(Object(d.q)(t.$options.fetch, n.context)),
                                        t.$fetch)
                                            e.push(t.$fetch());
                                        else {
                                            var a, r = L(Object(d.e)(t.$vnode.componentInstance));
                                            try {
                                                for (r.s(); !(a = r.n()).done; ) {
                                                    var o = a.value;
                                                    e.push(o.$fetch())
                                                }
                                            } catch (n) {
                                                r.e(n)
                                            } finally {
                                                r.f()
                                            }
                                        }
                                        return t.$options.asyncData && e.push(Object(d.q)(t.$options.asyncData, n.context).then((function(n) {
                                            for (var e in n)
                                                i.default.set(t.$data, e, n[e])
                                        }
                                        ))),
                                        Promise.all(e)
                                    }
                                    )),
                                    t.prev = 5,
                                    t.next = 8,
                                    Promise.all(a);
                                case 8:
                                    t.next = 15;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(5),
                                    n.$loading.fail(t.t0),
                                    Object(d.k)(t.t0),
                                    n.error(t.t0);
                                case 15:
                                    n.$loading.finish();
                                case 16:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[5, 10]])
                    }
                    )))()
                },
                errorChanged: function() {
                    if (this.nuxt.err) {
                        this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                        this.$loading.finish && this.$loading.finish());
                        var n = (j.options || j).layout;
                        "function" == typeof n && (n = n(this.context)),
                        this.setLayout(n)
                    }
                },
                setLayout: function(n) {
                    return n && B["_" + n] || (n = "default"),
                    this.layoutName = n,
                    this.layout = B["_" + n],
                    this.layout
                },
                loadLayout: function(n) {
                    return n && B["_" + n] || (n = "default"),
                    Promise.resolve(B["_" + n])
                }
            },
            components: {
                NuxtLoading: C
            }
        };
        e(84);
        function P(n, t) {
            var e = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
            if (!e) {
                if (Array.isArray(n) || (e = function(n, t) {
                    if (!n)
                        return;
                    if ("string" == typeof n)
                        return X(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e)
                        return Array.from(n);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                        return X(n, t)
                }(n)) || t && n && "number" == typeof n.length) {
                    e && (n = e);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= n.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: n[a++]
                            }
                        },
                        e: function(n) {
                            throw n
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, o = !0, s = !1;
            return {
                s: function() {
                    e = e.call(n)
                },
                n: function() {
                    var n = e.next();
                    return o = n.done,
                    n
                },
                e: function(n) {
                    s = !0,
                    i = n
                },
                f: function() {
                    try {
                        o || null == e.return || e.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }
        function X(n, t) {
            (null == t || t > n.length) && (t = n.length);
            for (var e = 0, a = new Array(t); e < t; e++)
                a[e] = n[e];
            return a
        }
        i.default.use(o.a);
        var U = ["state", "getters", "actions", "mutations"]
          , Y = {};
        (Y = function(n, t) {
            if ((n = n.default || n).commit)
                throw new Error("[nuxt] ".concat(t, " should export a method that returns a Vuex instance."));
            return "function" != typeof n && (n = Object.assign({}, n)),
            z(n, t)
        }(e(403), "store/index.js")).modules = Y.modules || {},
        function(n, t) {
            n = n.default || n;
            var e = t.replace(/\.(js|mjs)$/, "").split("/")
              , a = e[e.length - 1]
              , r = "store/".concat(t);
            if (n = "state" === a ? function(n, t) {
                if ("function" != typeof n) {
                    var e = Object.assign({}, n);
                    return function() {
                        return e
                    }
                }
                return z(n, t)
            }(n, r) : z(n, r),
            U.includes(a)) {
                var i = a;
                H(M(Y, e, {
                    isProperty: !0
                }), n, i)
            } else {
                "index" === a && (e.pop(),
                a = e[e.length - 1]);
                var o, s = M(Y, e), c = P(U);
                try {
                    for (c.s(); !(o = c.n()).done; ) {
                        var u = o.value;
                        H(s, n[u], u)
                    }
                } catch (n) {
                    c.e(n)
                } finally {
                    c.f()
                }
                !1 === n.namespaced && delete s.namespaced
            }
        }(e(404), "skeleton.js");
        var q = Y instanceof Function ? Y : function() {
            return new o.a.Store(Object.assign({
                strict: !1
            }, Y))
        }
        ;
        function z(n, t) {
            if (n.state && "function" != typeof n.state) {
                var e = Object.assign({}, n.state);
                n = Object.assign({}, n, {
                    state: function() {
                        return e
                    }
                })
            }
            return n
        }
        function M(n, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = e.isProperty
              , r = void 0 !== a && a;
            if (!t.length || r && 1 === t.length)
                return n;
            var i = t.shift();
            return n.modules[i] = n.modules[i] || {},
            n.modules[i].namespaced = !0,
            n.modules[i].modules = n.modules[i].modules || {},
            M(n.modules[i], t, {
                isProperty: r
            })
        }
        function H(n, t, e) {
            t && ("state" === e ? n.state = t || n.state : n[e] = Object.assign({}, n[e], t))
        }
        var F = e(151)
          , W = e.n(F)
          , K = e(51);
        e(159);
        function V(n, t) {
            var e = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
            if (!e) {
                if (Array.isArray(n) || (e = function(n, t) {
                    if (!n)
                        return;
                    if ("string" == typeof n)
                        return G(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e)
                        return Array.from(n);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                        return G(n, t)
                }(n)) || t && n && "number" == typeof n.length) {
                    e && (n = e);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= n.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: n[a++]
                            }
                        },
                        e: function(n) {
                            throw n
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, o = !0, s = !1;
            return {
                s: function() {
                    e = e.call(n)
                },
                n: function() {
                    var n = e.next();
                    return o = n.done,
                    n
                },
                e: function(n) {
                    s = !0,
                    i = n
                },
                f: function() {
                    try {
                        o || null == e.return || e.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }
        function G(n, t) {
            (null == t || t > n.length) && (t = n.length);
            for (var e = 0, a = new Array(t); e < t; e++)
                a[e] = n[e];
            return a
        }
        function Q(n, t, e) {
            return n.find((function(n) {
                return e ? n[t] === e : n[t]
            }
            ))
        }
        var J = e(341)
          , Z = function(n) {
            !function(n, t) {
                if ("function" != typeof n)
                    for (var e in t) {
                        var a = t[e];
                        if (Array.isArray(a)) {
                            n[e] = n[e] || [];
                            var r, i = V(a);
                            try {
                                for (i.s(); !(r = i.n()).done; ) {
                                    var o = r.value;
                                    o.hid && Q(n[e], "hid", o.hid) || o.name && Q(n[e], "name", o.name) || n[e].push(o)
                                }
                            } catch (n) {
                                i.e(n)
                            } finally {
                                i.f()
                            }
                        } else if ("object" === Object(K.a)(a))
                            for (var s in n[e] = n[e] || {},
                            a)
                                n[e][s] = a[s];
                        else
                            void 0 === n[e] && (n[e] = a)
                    }
            }(n.app.head, J)
        }
          , nn = e(1)
          , tn = e.n(nn)
          , en = e(342)
          , an = e(56)
          , rn = e.n(an);
        var on = function() {
            var n = {}
              , t = window.location.href;
            if (t.includes("?"))
                return decodeURIComponent(t).split("?")[1].split(/&/g).forEach((function(t) {
                    n[(t = t.split("="))[0]] = t[1]
                }
                )),
                n
        }();
        if (on)
            "https://gateway.";
        else {
            var sn = window.location.host;
            window.location.origin.replace(sn.split(".")[0], "gateway")
        }
        //rn.a.defaults.baseURL = "https://hash-server.brutb.com/ob-hash-server",
        rn.a.defaults.timeout = 1e4,
        rn.a.interceptors.request.use((function(n) {
            return n.headers["X-Request-Token"] = sessionStorage.token || "null",
            n.headers.authorization = sessionStorage.token || "null",
            n.headers.token = sessionStorage.token || "null",
            n.headers["X-Request-Sys"] = "0",
            n
        }
        ), (function(n) {
            return Promise.resolve({
                code: n.code,
                message: n.message || JSON.stringify(n)
            })
        }
        )),
        rn.a.interceptors.response.use((function(n) {
            var t = n.data;
            return 200 !== t.code ? Promise.reject({
                code: t.code,
                message: t.msg || "Error"
            }) : t
        }
        ), (function(n) {
            var t = n.config;
            return t ? (t.__retryCount = t.__retryCount || 0,
            t.__retryCount >= 2 ? Promise.reject({
                code: n.status || 555,
                message: n.message || JSON.stringify(n)
            }) : (t.__retryCount += 1,
            new Promise((function(n) {
                setTimeout((function() {
                    n()
                }
                ), 500)
            }
            )).then((function() {
                return rn()(t)
            }
            )))) : Promise.reject(n)
        }
        ));
        var cn = rn.a
          , un = {
            getGameDew: function(n) {
                var t = "type=".concat(n.type);
                return t = "type=".concat(n.type),
                cn.get("/member/dew?".concat(t))
            },
            getGameRecord: function(n) {
                var t = "type=".concat(n.type);
                return t = "type=".concat(n.type),
                n.pageSize && (t += "&pageSize=".concat(n.pageSize)),
                n.pageNumber && (t += "&pageNumber=".concat(n.pageNumber)),
                cn.get("/member/gameRecord?".concat(t))
            },
            getBrokerRebate: function(n) {
                return cn.get("/member/brokerRebate")
            },
            getBetRebate: function(n) {
                return cn.get("/member/betRebate")
            },
            getStatistics: function(n) {
                return cn.get("/rebate/statistics")
            },
            sendBetRebate: function(n) {
                return cn.post("/member/betRebate", n)
            },
            getAgentStatistics: function(n) {
                return cn.get("/broker/statistics")
            },
            agentRebate: function(n) {
                return cn.post("/broker/brokerRebate")
            }
        }
          , ln = {
            getGameList: function(n) {
                return cn({
                    url: "/game/list",
                    method: "get"
                })
            }
        };
        function pn(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }
                ))),
                e.push.apply(e, a)
            }
            return e
        }
        function mn(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? pn(Object(e), !0).forEach((function(t) {
                    Object(r.a)(n, t, e[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : pn(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }
                ))
            }
            return n
        }
        var fn = mn(mn(mn({}, {
            login: function(n) {
                return cn({
                    url: "/user/login",
                    method: "post",
                    data: n
                })
            },
            register: function(n) {
                return cn({
                    url: "/user/register",
                    method: "post",
                    data: n
                })
            }
        }), un), ln)
          , dn = (e(423),
        e(23))
          , hn = e.n(dn)
          , gn = e(343)
          , yn = e.n(gn)
          , bn = e(450)
          , vn = function() {}
          , wn = "0123456789ABCDEF";
        function Nn(n) {
            return bn.gzip(n, {
                to: "[object ArrayBuffer]"
            })
        }
        function kn(n) {
            var t = On(bn.inflate(n));
            return hn.a.enc.Utf8.stringify(t)
        }
        function _n(n, t) {
            return "string" != typeof n && (n = On(n)),
            hn.a.AES.encrypt(n, t, {
                iv: t,
                mode: hn.a.mode.CBC,
                padding: hn.a.pad.Pkcs7
            }).toString()
        }
        function xn(n, t) {
            var e = hn.a.AES.decrypt(n, t, {
                iv: t,
                mode: hn.a.mode.CBC,
                padding: hn.a.pad.Pkcs7
            });
            return jn(e)
        }
        function On(n) {
            for (var t = n.length, e = [], a = 0; a < t; a++)
                e[a >>> 2] |= (255 & n[a]) << 24 - a % 4 * 8;
            return hn.a.lib.WordArray.create(e, t)
        }
        vn.encrypt = function(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wn;
            "string" != typeof n && (n = JSON.stringify(n));
            var e = hn.a.enc.Utf8.parse(t)
              , a = Nn(n)
              , r = _n(a, e);
            return r
        }
        ,
        vn.createSign = function(n, t, e, a) {
            var r = n + t + e
              , i = yn()(r, a);
            return hn.a.enc.Base64.stringify(i)
        }
        ,
        vn.createNonce = function() {
            return Math.round(Math.random() * Math.pow(2, 63))
        }
        ,
        vn.createTimestamp = function() {
            return (new Date).getTime()
        }
        ,
        vn.decrypt = function(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wn
              , e = hn.a.enc.Utf8.parse(t)
              , a = xn(n, e)
              , r = kn(a);
            return r
        }
        ,
        vn.aesDecrypt = function(n, t, e) {
            if ("CBC" === e)
                e = hn.a.mode.CBC;
            else
                e = hn.a.mode.ECB;
            return "string" == typeof t && (t = hn.a.enc.Utf8.parse(t)),
            hn.a.AES.decrypt(n, t, {
                iv: t,
                mode: e,
                padding: hn.a.pad.Pkcs7
            }).toString(hn.a.enc.Utf8).toString()
        }
        ;
        var jn = function(n) {
            for (var t = n.words, e = n.sigBytes, a = new Uint8Array(e), r = 0; r < e; r++) {
                var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                a[r] = i
            }
            return a
        }
          , En = vn
          , An = {
            "game-http": "AA4194657AD89A56",
            "activity-http": "C7B07D1C510F945B"
        }
          , Rn = {
            encryptData: function(n) {
                var t = JSON.stringify(n.data || {})
                  , e = En.encrypt(t, An)
                  , a = En.createNonce()
                  , r = En.createTimestamp()
                  , i = En.createSign(e, a, r, An);
                return n.data = e,
                n.headers["Content-Type"] = "application/json",
                n.headers["zr-nonce"] = a,
                n.headers["zr-timestamp"] = r,
                n.headers["zr-gzipped"] = !0,
                n.headers["zr-encrypted"] = !0,
                n.headers["zr-sign"] = i,
                n
            },
            decryptData: function(n, t) {
                return En.decrypt(n, t)
            },
            aesDecrypt: function(n, t) {
                try {
                    return En.aesDecrypt(n, t + "AES")
                } catch (n) {
                    return ""
                }
            }
        }
          , Cn = e(157);
        i.default.prototype.$toast = Cn.a;
        var Sn = e(463);
        i.default.prototype.$encrypt = Rn,
        i.default.prototype.$moment = tn.a,
        i.default.prototype.$api = fn,
        i.default.prototype.$fan = Sn,
        i.default.use(en.a, {
            error: e(337),
            loading: e(337)
        });
        var In = e(344)
          , Tn = e.n(In)
          , Ln = e(77);
        Ln.default.use([Ln.Navigation, Ln.Pagination, Ln.EffectFade, Ln.Autoplay]),
        i.default.use(Tn.a);
        var Dn = e(345);
        i.default.use(Dn.a);
        var Bn = i.default.directive("drag", {
            inserted: function(n) {
                var t = n;
                t.ontouchstart = function(n) {
                    var e = 0;
                    n.preventDefault(),
                    document.ontouchmove = function(n) {
                        if (e > 4) {
                            var a = n.changedTouches[0].clientX - t.offsetWidth / 2
                              , r = n.changedTouches[0].clientY - t.offsetHeight / 2;
                            a < 0 && (a = 0),
                            r < 0 && (r = 0),
                            a > document.documentElement.clientWidth - t.offsetWidth && (a = document.documentElement.clientWidth - t.offsetWidth),
                            r > document.documentElement.clientHeight - t.offsetHeight && (r = document.documentElement.clientHeight - t.offsetHeight),
                            t.style.left = a + "px",
                            t.style.top = r + "px"
                        } else
                            e++
                    }
                    ,
                    document.ontouchend = function(n) {
                        document.ontouchmove = null,
                        document.ontouchend = null,
                        (e < 4 || 4 === e) && t.click()
                    }
                }
            },
            update: function(n) {
                var t = n.children[0];
                t.style.left = "",
                t.style.top = ""
            },
            unbind: function(n) {
                n.children[0].children[0].onmousedown = null
            }
        })
          , $n = e(152)
          , Pn = e(119)
          , Xn = e.n(Pn);
        i.default.use($n.a);
        var Un = function(n) {
            for (var t = n.app, a = n.store, r = n.route, i = {}, o = a.state.locales, s = 0; s < o.length; s++) {
                var c = e(466)("./".concat(o[s], ".js"));
                i[o[s]] = c.default
            }
            a.commit("LANG_LIST", i);
            var u = Object(S.a)().languageCode || r.query.languageCode;
            if (u && u.includes("#/") && (u = u.replace(/#\//g, "")),
            u) {
                var l = {
                    cn: "zh-CN",
                    tc: "zh-TW",
                    tw: "zh-TW",
                    en: "en",
                    vi: "vi"
                };
                u = l[u] ? l[u] : ""
            }
            var p = u || function(n) {
                var t = Xn.a.get("dealer-language");
                if (t)
                    return t;
                for (var e = (navigator.language || navigator.browserLanguage).toLowerCase(), a = 0; a < n.length; a += 1)
                    if (!0 === e.includes(n[a]))
                        return n[a];
                return "zh-CN"
            }(i) || "zh-CN";
            a.commit("SET_LANG", p),
            t.i18n = new $n.a({
                locale: p,
                fallbackLocale: p,
                messages: i,
                missing: function(n, t) {
                    if (t && t.includes(".") && "message" === t.split(".")[0])
                        return "zh-CN" === n ? "参数错误" : "Parameter error"
                }
            }),
            t.i18n.path = function(n) {
                return "/".concat(t.i18n.locale, "/").concat(n)
            }
        };
        i.default.directive("webp", {
            bind: function(n, t) {
                var e = !1
                  , a = document.createElement("canvas");
                a.getContext && a.getContext("2d") && (e = 0 === a.toDataURL("image/webp").indexOf("data:image/webp")),
                n.isWebp = e
            },
            inserted: function(n, t) {
                n.updateImg = function(n, t) {
                    if (n.isWebp) {
                        var e = n.src
                          , a = n.src.replace(/\.(png|jpe?g|gif|svg|bmp)$/g, ".webp");
                        n.src = a,
                        n.onerror = function() {
                            n.src = e
                        }
                    }
                }
                ,
                n.updateImg(n, t)
            },
            update: function(n, t) {}
        });
        var Yn = e(471).WOW;
        i.default.prototype.$wow = Yn;
        var qn = e(347)
          , zn = e.n(qn);
        i.default.use(zn.a);
        var Mn = e(153)
          , Hn = e.n(Mn)
          , Fn = e(30)
          , Wn = e(158);
        e(473);
        Fn.a.setDefaultOptions({
            duration: 1200
        }),
        i.default.use(Wn.a);
        var Kn = e(154)
          , Vn = e.n(Kn)
          , Gn = e(475)
          , Qn = e(161);
        window.videojs = Qn,
        e(492),
        i.default.use(Gn);
        var Jn = e(348)
          , Zn = e.n(Jn);
        function nt(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }
                ))),
                e.push.apply(e, a)
            }
            return e
        }
        function tt(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nt(Object(e), !0).forEach((function(t) {
                    Object(r.a)(n, t, e[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : nt(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }
                ))
            }
            return n
        }
        i.default.use(Zn.a),
        i.default.component(u.a.name, u.a),
        i.default.component(p.a.name, tt(tt({}, p.a), {}, {
            render: function(n, t) {
                return p.a._warned || (p.a._warned = !0),
                p.a.render(n, t)
            }
        })),
        i.default.component(N.name, N),
        i.default.component("NChild", N),
        i.default.component(A.name, A),
        Object.defineProperty(i.default.prototype, "$nuxt", {
            get: function() {
                var n = this.$root.$options.$nuxt;
                return n || "undefined" == typeof window ? n : window.$nuxt
            },
            configurable: !0
        }),
        i.default.use(s.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var et = {
            name: "page",
            mode: "out-in",
            appear: !1,
            appearClass: "appear",
            appearActiveClass: "appear-active",
            appearToClass: "appear-to"
        }
          , at = o.a.Store.prototype.registerModule;
        function rt(n, t) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , a = Array.isArray(n) ? !!n.reduce((function(n, t) {
                return n && n[t]
            }
            ), this.state) : n in this.state;
            return at.call(this, n, t, tt({
                preserveState: a
            }, e))
        }
        function it(n) {
            return ot.apply(this, arguments)
        }
        function ot() {
            return ot = Object(a.a)(regeneratorRuntime.mark((function n(t) {
                var e, r, o, s, c, u, l, p, m = arguments;
                return regeneratorRuntime.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return p = function(n, t) {
                                if (!n)
                                    throw new Error("inject(key, value) has no key provided");
                                if (void 0 === t)
                                    throw new Error("inject('".concat(n, "', value) has no value provided"));
                                s[n = "$" + n] = t,
                                s.context[n] || (s.context[n] = t),
                                o[n] = s[n];
                                var e = "__nuxt_" + n + "_installed__";
                                i.default[e] || (i.default[e] = !0,
                                i.default.use((function() {
                                    Object.prototype.hasOwnProperty.call(i.default.prototype, n) || Object.defineProperty(i.default.prototype, n, {
                                        get: function() {
                                            return this.$root.$options[n]
                                        }
                                    })
                                }
                                )))
                            }
                            ,
                            e = m.length > 1 && void 0 !== m[1] ? m[1] : {},
                            n.next = 4,
                            w(0, e);
                        case 4:
                            return r = n.sent,
                            (o = q(t)).$router = r,
                            o.registerModule = rt,
                            s = tt({
                                head: {
                                    title: "OB哈希",
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "version",
                                        content: "5/28/2022, 16:38:38"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width,height=device-height,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                                    }, {
                                        hid: "description",
                                        name: "description",
                                        content: "## 哈希客户端"
                                    }, {
                                        name: "screen-orientation",
                                        content: "portrait"
                                    }, {
                                        name: "x5-orientation",
                                        content: "portrait"
                                    }, {
                                        name: "renderer",
                                        content: "webkit|ie-comp"
                                    }, {
                                        hid: "charset",
                                        charset: "utf-8"
                                    }, {
                                        hid: "mobile-web-app-capable",
                                        name: "mobile-web-app-capable",
                                        content: "yes"
                                    }, {
                                        hid: "apple-mobile-web-app-title",
                                        name: "apple-mobile-web-app-title",
                                        content: "nuxt-chain-bet"
                                    }, {
                                        hid: "og:type",
                                        name: "og:type",
                                        property: "og:type",
                                        content: "website"
                                    }, {
                                        hid: "og:title",
                                        name: "og:title",
                                        property: "og:title",
                                        content: "nuxt-chain-bet"
                                    }, {
                                        hid: "og:site_name",
                                        name: "og:site_name",
                                        property: "og:site_name",
                                        content: "nuxt-chain-bet"
                                    }, {
                                        hid: "og:description",
                                        name: "og:description",
                                        property: "og:description",
                                        content: "## 哈希客户端"
                                    }],
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/a6tcx-0pxei-001.ico"
                                    }, {
                                        rel: "stylesheet",
                                        href: "/main.css"
                                    }, {
                                        rel: "manifest",
                                        href: "/manifest.webmanifest"
                                    }, {
                                        rel: "apple-touch-icon",
                                        href: "icon/192.png"
                                    }, {
                                        hid: "shortcut-icon",
                                        rel: "shortcut icon",
                                        href: "/favicon.ico"
                                    }, {
                                        rel: "manifest",
                                        href: "/_nuxt/manifest.d424d28d.json",
                                        hid: "manifest"
                                    }],
                                    script: [{
                                        src: "./screen.js"
                                    }, {
                                        src: "https://pv.sohu.com/cityjson?ie=utf-8"
                                    }],
                                    style: [],
                                    htmlAttrs: {
                                        lang: "en"
                                    }
                                },
                                store: o,
                                router: r,
                                nuxt: {
                                    defaultTransition: et,
                                    transitions: [et],
                                    setTransitions: function(n) {
                                        return Array.isArray(n) || (n = [n]),
                                        n = n.map((function(n) {
                                            return n = n ? "string" == typeof n ? Object.assign({}, et, {
                                                name: n
                                            }) : Object.assign({}, et, n) : et
                                        }
                                        )),
                                        this.$options.nuxt.transitions = n,
                                        n
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(n) {
                                        n = n || null,
                                        s.context._errored = Boolean(n),
                                        n = n ? Object(d.p)(n) : null;
                                        var e = s.nuxt;
                                        return this && (e = this.nuxt || this.$options.nuxt),
                                        e.dateErr = Date.now(),
                                        e.err = n,
                                        t && (t.nuxt.error = n),
                                        n
                                    }
                                }
                            }, $),
                            o.app = s,
                            c = t ? t.next : function(n) {
                                return s.router.push(n)
                            }
                            ,
                            t ? u = r.resolve(t.url).route : (l = Object(d.f)(r.options.base, r.options.mode),
                            u = r.resolve(l).route),
                            n.next = 14,
                            Object(d.t)(s, {
                                store: o,
                                route: u,
                                next: c,
                                error: s.nuxt.error.bind(s),
                                payload: t ? t.payload : void 0,
                                req: t ? t.req : void 0,
                                res: t ? t.res : void 0,
                                beforeRenderFns: t ? t.beforeRenderFns : void 0,
                                ssrContext: t
                            });
                        case 14:
                            if (p("config", e),
                            window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state),
                            s.context.enablePreview = function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                s.previewData = Object.assign({}, n),
                                p("preview", n)
                            }
                            ,
                            "function" != typeof W.a) {
                                n.next = 20;
                                break
                            }
                            return n.next = 20,
                            W()(s.context, p);
                        case 20:
                            return n.next = 23,
                            Z(s.context);
                        case 23:
                            n.next = 26;
                            break;
                        case 26:
                            n.next = 29;
                            break;
                        case 29:
                            n.next = 32;
                            break;
                        case 32:
                            if ("function" != typeof Bn) {
                                n.next = 35;
                                break
                            }
                            return n.next = 35,
                            Bn(s.context, p);
                        case 35:
                            return n.next = 38,
                            Un(s.context);
                        case 38:
                            n.next = 41;
                            break;
                        case 41:
                            n.next = 44;
                            break;
                        case 44:
                            n.next = 47;
                            break;
                        case 47:
                            if ("function" != typeof Hn.a) {
                                n.next = 50;
                                break
                            }
                            return n.next = 50,
                            Hn()(s.context, p);
                        case 50:
                            n.next = 53;
                            break;
                        case 53:
                            if ("function" != typeof Vn.a) {
                                n.next = 56;
                                break
                            }
                            return n.next = 56,
                            Vn()(s.context, p);
                        case 56:
                            n.next = 59;
                            break;
                        case 59:
                            n.next = 62;
                            break;
                        case 62:
                            return s.context.enablePreview = function() {}
                            ,
                            n.next = 65,
                            new Promise((function(n, t) {
                                if (!r.resolve(s.context.route.fullPath).route.matched.length)
                                    return n();
                                r.replace(s.context.route.fullPath, n, (function(e) {
                                    if (!e._isRouter)
                                        return t(e);
                                    if (2 !== e.type)
                                        return n();
                                    var i = r.afterEach(function() {
                                        var t = Object(a.a)(regeneratorRuntime.mark((function t(e, a) {
                                            return regeneratorRuntime.wrap((function(t) {
                                                for (; ; )
                                                    switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 3,
                                                        Object(d.j)(e);
                                                    case 3:
                                                        s.context.route = t.sent,
                                                        s.context.params = e.params || {},
                                                        s.context.query = e.query || {},
                                                        i(),
                                                        n();
                                                    case 8:
                                                    case "end":
                                                        return t.stop()
                                                    }
                                            }
                                            ), t)
                                        }
                                        )));
                                        return function(n, e) {
                                            return t.apply(this, arguments)
                                        }
                                    }())
                                }
                                ))
                            }
                            ));
                        case 65:
                            return n.abrupt("return", {
                                store: o,
                                app: s,
                                router: r
                            });
                        case 66:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            ))),
            ot.apply(this, arguments)
        }
    },
    7: function(n, t, e) {
        "use strict";
        e.d(t, "k", (function() {
            return f
        }
        )),
        e.d(t, "m", (function() {
            return d
        }
        )),
        e.d(t, "l", (function() {
            return h
        }
        )),
        e.d(t, "e", (function() {
            return g
        }
        )),
        e.d(t, "b", (function() {
            return y
        }
        )),
        e.d(t, "s", (function() {
            return b
        }
        )),
        e.d(t, "g", (function() {
            return v
        }
        )),
        e.d(t, "h", (function() {
            return w
        }
        )),
        e.d(t, "d", (function() {
            return N
        }
        )),
        e.d(t, "r", (function() {
            return k
        }
        )),
        e.d(t, "j", (function() {
            return _
        }
        )),
        e.d(t, "t", (function() {
            return O
        }
        )),
        e.d(t, "o", (function() {
            return E
        }
        )),
        e.d(t, "q", (function() {
            return A
        }
        )),
        e.d(t, "f", (function() {
            return R
        }
        )),
        e.d(t, "c", (function() {
            return C
        }
        )),
        e.d(t, "i", (function() {
            return S
        }
        )),
        e.d(t, "p", (function() {
            return I
        }
        )),
        e.d(t, "a", (function() {
            return X
        }
        )),
        e.d(t, "u", (function() {
            return U
        }
        )),
        e.d(t, "n", (function() {
            return Y
        }
        ));
        e(46),
        e(72),
        e(92),
        e(93);
        var a = e(51)
          , r = e(24)
          , i = e(47)
          , o = e(38)
          , s = (e(81),
        e(59),
        e(377),
        e(33),
        e(49),
        e(68),
        e(78),
        e(73),
        e(74),
        e(61),
        e(50),
        e(174),
        e(144),
        e(145),
        e(94),
        e(95),
        e(383),
        e(52),
        e(45),
        e(3))
          , c = e(54);
        function u(n, t) {
            var e = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(n);
                t && (a = a.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }
                ))),
                e.push.apply(e, a)
            }
            return e
        }
        function l(n) {
            for (var t = 1; t < arguments.length; t++) {
                var e = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(e), !0).forEach((function(t) {
                    Object(i.a)(n, t, e[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : u(Object(e)).forEach((function(t) {
                    Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(e, t))
                }
                ))
            }
            return n
        }
        function p(n, t) {
            var e = "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
            if (!e) {
                if (Array.isArray(n) || (e = function(n, t) {
                    if (!n)
                        return;
                    if ("string" == typeof n)
                        return m(n, t);
                    var e = Object.prototype.toString.call(n).slice(8, -1);
                    "Object" === e && n.constructor && (e = n.constructor.name);
                    if ("Map" === e || "Set" === e)
                        return Array.from(n);
                    if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                        return m(n, t)
                }(n)) || t && n && "number" == typeof n.length) {
                    e && (n = e);
                    var a = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return a >= n.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: n[a++]
                            }
                        },
                        e: function(n) {
                            throw n
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, o = !0, s = !1;
            return {
                s: function() {
                    e = e.call(n)
                },
                n: function() {
                    var n = e.next();
                    return o = n.done,
                    n
                },
                e: function(n) {
                    s = !0,
                    i = n
                },
                f: function() {
                    try {
                        o || null == e.return || e.return()
                    } finally {
                        if (s)
                            throw i
                    }
                }
            }
        }
        function m(n, t) {
            (null == t || t > n.length) && (t = n.length);
            for (var e = 0, a = new Array(t); e < t; e++)
                a[e] = n[e];
            return a
        }
        function f(n) {
            s.default.config.errorHandler && s.default.config.errorHandler(n)
        }
        function d(n) {
            return n.then((function(n) {
                return n.default || n
            }
            ))
        }
        function h(n) {
            return n.$options && "function" == typeof n.$options.fetch && !n.$options.fetch.length
        }
        function g(n) {
            var t, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], a = n.$children || [], r = p(a);
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var i = t.value;
                    i.$fetch ? e.push(i) : i.$children && g(i, e)
                }
            } catch (n) {
                r.e(n)
            } finally {
                r.f()
            }
            return e
        }
        function y(n, t) {
            if (t || !n.options.__hasNuxtData) {
                var e = n.options._originDataFn || n.options.data || function() {
                    return {}
                }
                ;
                n.options._originDataFn = e,
                n.options.data = function() {
                    var a = e.call(this, this);
                    return this.$ssrContext && (t = this.$ssrContext.asyncData[n.cid]),
                    l(l({}, a), t)
                }
                ,
                n.options.__hasNuxtData = !0,
                n._Ctor && n._Ctor.options && (n._Ctor.options.data = n.options.data)
            }
        }
        function b(n) {
            return n.options && n._Ctor === n || (n.options ? (n._Ctor = n,
            n.extendOptions = n.options) : (n = s.default.extend(n))._Ctor = n,
            !n.options.name && n.options.__file && (n.options.name = n.options.__file)),
            n
        }
        function v(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], n.matched.map((function(n, a) {
                return Object.keys(n[e]).map((function(r) {
                    return t && t.push(a),
                    n[e][r]
                }
                ))
            }
            )))
        }
        function w(n) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return v(n, t, "instances")
        }
        function N(n, t) {
            return Array.prototype.concat.apply([], n.matched.map((function(n, e) {
                return Object.keys(n.components).reduce((function(a, r) {
                    return n.components[r] ? a.push(t(n.components[r], n.instances[r], n, r, e)) : delete n.components[r],
                    a
                }
                ), [])
            }
            )))
        }
        function k(n, t) {
            return Promise.all(N(n, function() {
                var n = Object(r.a)(regeneratorRuntime.mark((function n(e, a, r, i) {
                    var o, s;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                if ("function" != typeof e || e.options) {
                                    n.next = 11;
                                    break
                                }
                                return n.prev = 1,
                                n.next = 4,
                                e();
                            case 4:
                                e = n.sent,
                                n.next = 11;
                                break;
                            case 7:
                                throw n.prev = 7,
                                n.t0 = n.catch(1),
                                n.t0 && "ChunkLoadError" === n.t0.name && "undefined" != typeof window && window.sessionStorage && (o = Date.now(),
                                (!(s = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || s + 6e4 < o) && (window.sessionStorage.setItem("nuxt-reload", o),
                                window.location.reload(!0))),
                                n.t0;
                            case 11:
                                return r.components[i] = e = b(e),
                                n.abrupt("return", "function" == typeof t ? t(e, a, r, i) : e);
                            case 13:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 7]])
                }
                )));
                return function(t, e, a, r) {
                    return n.apply(this, arguments)
                }
            }()))
        }
        function _(n) {
            return x.apply(this, arguments)
        }
        function x() {
            return (x = Object(r.a)(regeneratorRuntime.mark((function n(t) {
                return regeneratorRuntime.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (t) {
                                n.next = 2;
                                break
                            }
                            return n.abrupt("return");
                        case 2:
                            return n.next = 4,
                            k(t);
                        case 4:
                            return n.abrupt("return", l(l({}, t), {}, {
                                meta: v(t).map((function(n, e) {
                                    return l(l({}, n.options.meta), (t.matched[e] || {}).meta)
                                }
                                ))
                            }));
                        case 5:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))).apply(this, arguments)
        }
        function O(n, t) {
            return j.apply(this, arguments)
        }
        function j() {
            return (j = Object(r.a)(regeneratorRuntime.mark((function n(t, e) {
                var r, i, s, u;
                return regeneratorRuntime.wrap((function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return t.context || (t.context = {
                                isStatic: !0,
                                isDev: !1,
                                isHMR: !1,
                                app: t,
                                store: t.store,
                                payload: e.payload,
                                error: e.error,
                                base: t.router.options.base,
                                env: {
                                    //baseUrl: "https://hash-server.brutb.com/ob-hash-server",
                                    encrypted: !0,
                                    VUE_APP_KEY: {
                                        "game-http": "AA4194657AD89A56",
                                        "activity-http": "C7B07D1C510F945B"
                                    }
                                }
                            },
                            e.req && (t.context.req = e.req),
                            e.res && (t.context.res = e.res),
                            e.ssrContext && (t.context.ssrContext = e.ssrContext),
                            t.context.redirect = function(n, e, r) {
                                if (n) {
                                    t.context._redirected = !0;
                                    var i = Object(a.a)(e);
                                    if ("number" == typeof n || "undefined" !== i && "object" !== i || (r = e || {},
                                    e = n,
                                    i = Object(a.a)(e),
                                    n = 302),
                                    "object" === i && (e = t.router.resolve(e).route.fullPath),
                                    !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(e))
                                        throw e = Object(c.d)(e, r),
                                        window.location.replace(e),
                                        new Error("ERR_REDIRECT");
                                    t.context.next({
                                        path: e,
                                        query: r,
                                        status: n
                                    })
                                }
                            }
                            ,
                            t.context.nuxtState = window.__NUXT__),
                            n.next = 3,
                            Promise.all([_(e.route), _(e.from)]);
                        case 3:
                            r = n.sent,
                            i = Object(o.a)(r, 2),
                            s = i[0],
                            u = i[1],
                            e.route && (t.context.route = s),
                            e.from && (t.context.from = u),
                            t.context.next = e.next,
                            t.context._redirected = !1,
                            t.context._errored = !1,
                            t.context.isHMR = !1,
                            t.context.params = t.context.route.params || {},
                            t.context.query = t.context.route.query || {};
                        case 15:
                        case "end":
                            return n.stop()
                        }
                }
                ), n)
            }
            )))).apply(this, arguments)
        }
        function E(n, t) {
            return !n.length || t._redirected || t._errored ? Promise.resolve() : A(n[0], t).then((function() {
                return E(n.slice(1), t)
            }
            ))
        }
        function A(n, t) {
            var e;
            return (e = 2 === n.length ? new Promise((function(e) {
                n(t, (function(n, a) {
                    n && t.error(n),
                    e(a = a || {})
                }
                ))
            }
            )) : n(t)) && e instanceof Promise && "function" == typeof e.then ? e : Promise.resolve(e)
        }
        function R(n, t) {
            if ("hash" === t)
                return window.location.hash.replace(/^#\//, "");
            n = decodeURI(n).slice(0, -1);
            var e = decodeURI(window.location.pathname);
            n && e.startsWith(n) && (e = e.slice(n.length));
            var a = (e || "/") + window.location.search + window.location.hash;
            return Object(c.c)(a)
        }
        function C(n, t) {
            return function(n, t) {
                for (var e = new Array(n.length), r = 0; r < n.length; r++)
                    "object" === Object(a.a)(n[r]) && (e[r] = new RegExp("^(?:" + n[r].pattern + ")$",P(t)));
                return function(t, a) {
                    for (var r = "", i = t || {}, o = (a || {}).pretty ? L : encodeURIComponent, s = 0; s < n.length; s++) {
                        var c = n[s];
                        if ("string" != typeof c) {
                            var u = i[c.name || "pathMatch"]
                              , l = void 0;
                            if (null == u) {
                                if (c.optional) {
                                    c.partial && (r += c.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + c.name + '" to be defined')
                            }
                            if (Array.isArray(u)) {
                                if (!c.repeat)
                                    throw new TypeError('Expected "' + c.name + '" to not repeat, but received `' + JSON.stringify(u) + "`");
                                if (0 === u.length) {
                                    if (c.optional)
                                        continue;
                                    throw new TypeError('Expected "' + c.name + '" to not be empty')
                                }
                                for (var p = 0; p < u.length; p++) {
                                    if (l = o(u[p]),
                                    !e[s].test(l))
                                        throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '", but received `' + JSON.stringify(l) + "`");
                                    r += (0 === p ? c.prefix : c.delimiter) + l
                                }
                            } else {
                                if (l = c.asterisk ? D(u) : o(u),
                                !e[s].test(l))
                                    throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but received "' + l + '"');
                                r += c.prefix + l
                            }
                        } else
                            r += c
                    }
                    return r
                }
            }(function(n, t) {
                var e, a = [], r = 0, i = 0, o = "", s = t && t.delimiter || "/";
                for (; null != (e = T.exec(n)); ) {
                    var c = e[0]
                      , u = e[1]
                      , l = e.index;
                    if (o += n.slice(i, l),
                    i = l + c.length,
                    u)
                        o += u[1];
                    else {
                        var p = n[i]
                          , m = e[2]
                          , f = e[3]
                          , d = e[4]
                          , h = e[5]
                          , g = e[6]
                          , y = e[7];
                        o && (a.push(o),
                        o = "");
                        var b = null != m && null != p && p !== m
                          , v = "+" === g || "*" === g
                          , w = "?" === g || "*" === g
                          , N = e[2] || s
                          , k = d || h;
                        a.push({
                            name: f || r++,
                            prefix: m || "",
                            delimiter: N,
                            optional: w,
                            repeat: v,
                            partial: b,
                            asterisk: Boolean(y),
                            pattern: k ? $(k) : y ? ".*" : "[^" + B(N) + "]+?"
                        })
                    }
                }
                i < n.length && (o += n.substr(i));
                o && a.push(o);
                return a
            }(n, t), t)
        }
        function S(n, t) {
            var e = {}
              , a = l(l({}, n), t);
            for (var r in a)
                String(n[r]) !== String(t[r]) && (e[r] = !0);
            return e
        }
        function I(n) {
            var t;
            if (n.message || "string" == typeof n)
                t = n.message || n;
            else
                try {
                    t = JSON.stringify(n, null, 2)
                } catch (e) {
                    t = "[".concat(n.constructor.name, "]")
                }
            return l(l({}, n), {}, {
                message: t,
                statusCode: n.statusCode || n.status || n.response && n.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [],
        window.onNuxtReady = function(n) {
            window.onNuxtReadyCbs.push(n)
        }
        ;
        var T = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
        function L(n, t) {
            var e = t ? /[?#]/g : /[/?#]/g;
            return encodeURI(n).replace(e, (function(n) {
                return "%" + n.charCodeAt(0).toString(16).toUpperCase()
            }
            ))
        }
        function D(n) {
            return L(n, !0)
        }
        function B(n) {
            return n.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }
        function $(n) {
            return n.replace(/([=!:$/()])/g, "\\$1")
        }
        function P(n) {
            return n && n.sensitive ? "" : "i"
        }
        function X(n, t, e) {
            n.$options[t] || (n.$options[t] = []),
            n.$options[t].includes(e) || n.$options[t].push(e)
        }
        var U = c.b
          , Y = (c.e,
        c.a)
    },
    87: function(n, t, e) {
        "use strict";
        e.d(t, "b", (function() {
            return a
        }
        )),
        e.d(t, "a", (function() {
            return r
        }
        )),
        e.d(t, "c", (function() {
            return i
        }
        ));
        e(144),
        e(52),
        e(45),
        e(84),
        e(145),
        e(179),
        e(33),
        e(94),
        e(95);
        function a(n) {
            var t = new RegExp("(^|&)" + n + "=([^&]*)(&|$)")
              , e = window.location.search.substr(1).match(t) || window.location.hash.substring(window.location.hash.search(/\?/) + 1).match(t);
            if (null != e)
                return decodeURIComponent(e.input.split(n + "=")[1])
        }
        function r(n) {
            var t = window.location.href
              , e = n || t
              , a = new Object;
            if (e.includes("?"))
                for (var r = e.split("?")[1].split("&"), i = 0; i < r.length; i++)
                    a[r[i].split("=")[0]] = unescape(r[i].split("=")[1]);
            return a
        }
        function i(n) {
            var t = function(n) {
                if (isNaN(n))
                    return;
                return Math.round(100 * n) / 100
            }(n).toString()
              , e = t.indexOf(".");
            for (e <= 0 && (e = (t += ".").length - 1); e + 3 != t.length; )
                t += "0";
            return t
        }
    }
}, [[355, 20, 3, 21]]]);
