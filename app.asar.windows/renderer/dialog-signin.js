(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
    [1530, 9891],
    {
      80102: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => r });
        var i = n(23645),
          a = n.n(i)()(function (e) {
            return e[1];
          });
        a.push([
          e.id,
          ".spinner-container[data-v-14a8e261] {\n  margin-top: -16px;\n}\n.spinner-image[data-v-14a8e261] {\n  width: 48px;\n  height: 48px;\n}\n.spinner-text[data-v-14a8e261] {\n  margin-top: 8px;\n}\n",
          "",
        ]);
        const r = a;
      },
      23645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, i) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var a = {};
              if (i)
                for (var r = 0; r < this.length; r++) {
                  var s = this[r][0];
                  null != s && (a[s] = !0);
                }
              for (var o = 0; o < e.length; o++) {
                var c = [].concat(e[o]);
                (i && a[c[0]]) ||
                  (n &&
                    (c[2]
                      ? (c[2] = "".concat(n, " and ").concat(c[2]))
                      : (c[2] = n)),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      88668: (e, t, n) => {
        var i = n(83369),
          a = n(90619),
          r = n(72385);
        function s(e) {
          var t = -1,
            n = null == e ? 0 : e.length;
          for (this.__data__ = new i(); ++t < n; ) this.add(e[t]);
        }
        (s.prototype.add = s.prototype.push = a),
          (s.prototype.has = r),
          (e.exports = s);
      },
      82908: (e) => {
        e.exports = function (e, t) {
          for (var n = -1, i = null == e ? 0 : e.length; ++n < i; )
            if (t(e[n], n, e)) return !0;
          return !1;
        };
      },
      90939: (e, t, n) => {
        var i = n(2492),
          a = n(37005);
        e.exports = function e(t, n, r, s, o) {
          return (
            t === n ||
            (null == t || null == n || (!a(t) && !a(n))
              ? t != t && n != n
              : i(t, n, r, s, e, o))
          );
        };
      },
      2492: (e, t, n) => {
        var i = n(46384),
          a = n(67114),
          r = n(18351),
          s = n(16096),
          o = n(64160),
          c = n(1469),
          u = n(44144),
          l = n(36719),
          d = "[object Arguments]",
          f = "[object Array]",
          p = "[object Object]",
          v = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, g, h, m) {
          var w = c(e),
            y = c(t),
            b = w ? f : o(e),
            k = y ? f : o(t),
            x = (b = b == d ? p : b) == p,
            _ = (k = k == d ? p : k) == p,
            S = b == k;
          if (S && u(e)) {
            if (!u(t)) return !1;
            (w = !0), (x = !1);
          }
          if (S && !x)
            return (
              m || (m = new i()),
              w || l(e) ? a(e, t, n, g, h, m) : r(e, t, b, n, g, h, m)
            );
          if (!(1 & n)) {
            var C = x && v.call(e, "__wrapped__"),
              D = _ && v.call(t, "__wrapped__");
            if (C || D) {
              var O = C ? e.value() : e,
                A = D ? t.value() : t;
              return m || (m = new i()), h(O, A, n, g, m);
            }
          }
          return !!S && (m || (m = new i()), s(e, t, n, g, h, m));
        };
      },
      74757: (e) => {
        e.exports = function (e, t) {
          return e.has(t);
        };
      },
      67114: (e, t, n) => {
        var i = n(88668),
          a = n(82908),
          r = n(74757);
        e.exports = function (e, t, n, s, o, c) {
          var u = 1 & n,
            l = e.length,
            d = t.length;
          if (l != d && !(u && d > l)) return !1;
          var f = c.get(e),
            p = c.get(t);
          if (f && p) return f == t && p == e;
          var v = -1,
            g = !0,
            h = 2 & n ? new i() : void 0;
          for (c.set(e, t), c.set(t, e); ++v < l; ) {
            var m = e[v],
              w = t[v];
            if (s) var y = u ? s(w, m, v, t, e, c) : s(m, w, v, e, t, c);
            if (void 0 !== y) {
              if (y) continue;
              g = !1;
              break;
            }
            if (h) {
              if (
                !a(t, function (e, t) {
                  if (!r(h, t) && (m === e || o(m, e, n, s, c))) return h.push(t);
                })
              ) {
                g = !1;
                break;
              }
            } else if (m !== w && !o(m, w, n, s, c)) {
              g = !1;
              break;
            }
          }
          return c.delete(e), c.delete(t), g;
        };
      },
      18351: (e, t, n) => {
        var i = n(62705),
          a = n(11149),
          r = n(77813),
          s = n(67114),
          o = n(68776),
          c = n(21814),
          u = i ? i.prototype : void 0,
          l = u ? u.valueOf : void 0;
        e.exports = function (e, t, n, i, u, d, f) {
          switch (n) {
            case "[object DataView]":
              if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                return !1;
              (e = e.buffer), (t = t.buffer);
            case "[object ArrayBuffer]":
              return !(e.byteLength != t.byteLength || !d(new a(e), new a(t)));
            case "[object Boolean]":
            case "[object Date]":
            case "[object Number]":
              return r(+e, +t);
            case "[object Error]":
              return e.name == t.name && e.message == t.message;
            case "[object RegExp]":
            case "[object String]":
              return e == t + "";
            case "[object Map]":
              var p = o;
            case "[object Set]":
              var v = 1 & i;
              if ((p || (p = c), e.size != t.size && !v)) return !1;
              var g = f.get(e);
              if (g) return g == t;
              (i |= 2), f.set(e, t);
              var h = s(p(e), p(t), i, u, d, f);
              return f.delete(e), h;
            case "[object Symbol]":
              if (l) return l.call(e) == l.call(t);
          }
          return !1;
        };
      },
      16096: (e, t, n) => {
        var i = n(58234),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, n, r, s, o) {
          var c = 1 & n,
            u = i(e),
            l = u.length;
          if (l != i(t).length && !c) return !1;
          for (var d = l; d--; ) {
            var f = u[d];
            if (!(c ? f in t : a.call(t, f))) return !1;
          }
          var p = o.get(e),
            v = o.get(t);
          if (p && v) return p == t && v == e;
          var g = !0;
          o.set(e, t), o.set(t, e);
          for (var h = c; ++d < l; ) {
            var m = e[(f = u[d])],
              w = t[f];
            if (r) var y = c ? r(w, m, f, t, e, o) : r(m, w, f, e, t, o);
            if (!(void 0 === y ? m === w || s(m, w, n, r, o) : y)) {
              g = !1;
              break;
            }
            h || (h = "constructor" == f);
          }
          if (g && !h) {
            var b = e.constructor,
              k = t.constructor;
            b == k ||
              !("constructor" in e) ||
              !("constructor" in t) ||
              ("function" == typeof b &&
                b instanceof b &&
                "function" == typeof k &&
                k instanceof k) ||
              (g = !1);
          }
          return o.delete(e), o.delete(t), g;
        };
      },
      68776: (e) => {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e, i) {
              n[++t] = [i, e];
            }),
            n
          );
        };
      },
      90619: (e) => {
        e.exports = function (e) {
          return this.__data__.set(e, "__lodash_hash_undefined__"), this;
        };
      },
      72385: (e) => {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      21814: (e) => {
        e.exports = function (e) {
          var t = -1,
            n = Array(e.size);
          return (
            e.forEach(function (e) {
              n[++t] = e;
            }),
            n
          );
        };
      },
      18446: (e, t, n) => {
        var i = n(90939);
        e.exports = function (e, t) {
          return i(e, t);
        };
      },
      70851: (e, t, n) => {
        "use strict";
        n.r(t);
        var i = n(22244),
          a = n(2954),
          r = n(43237);
        const s = (0, a.aZ)({
          __name: "app",
          setup: (e) => ({
            __sfc: !0,
            signInReferer: "dialog-signin",
            SignIn: r.Z,
          }),
        });
        const o = (0, n(51900).Z)(
          s,
          function () {
            var e = this._self._c,
              t = this._self._setupProxy;
            return e(t.SignIn, { attrs: { "sign-in-referer": t.signInReferer } });
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports;
        (0, i.Z)(o, { name: "dialog-signin" });
      },
      13382: (e, t, n) => {
        "use strict";
        n.d(t, {
          G$: () => _,
          N0: () => h,
          Pg: () => C,
          R2: () => x,
          W5: () => k,
          ZZ: () => w,
          am: () => b,
          eq: () => y,
          yr: () => S,
        });
        var i = n(71017),
          a = n.n(i),
          r = n(67657),
          s = n(7104),
          o = n(86633),
          c = n(33394),
          u = n(94593),
          l = n(90435),
          d = n(54856),
          f = n(5893),
          p = n(78152),
          v = n(63111);
        const g = (0, o.ZP)("dialog");
        async function h(e) {
          (e = Object.assign({}, e || {})).icon &&
            "string" == typeof e.icon &&
            (e.icon = a().join((0, s.bY)(), e.icon));
          const t = r.BrowserWindow.fromId(window.id);
          return [r.dialog.showMessageBoxSync(t, e)];
        }
        async function m(e) {
          (e = Object.assign({}, e || {})).icon &&
            "string" == typeof e.icon &&
            (e.icon = a().join((0, s.bY)(), e.icon));
          const t = r.BrowserWindow.fromId(window.id),
            { response: n, checkboxChecked: i } = await r.dialog.showMessageBox(
              t,
              e,
            );
          return [n, i];
        }
        async function w(e) {
          (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
            .suggestPath &&
            !e.defaultPath &&
            ((e.defaultPath = b(e.suggestPath, e.filters)), delete e.suggestPath);
          const {
            canceled: t,
            filePath: n,
            bookmark: i,
          } = await r.dialog.showSaveDialog(r.getCurrentWindow(), e);
          return t
            ? null
            : (n && i && (await c.Z.bindBookmark({ fp: n, bookmark: i })),
              n && (0, p.km)().setLastSaveDirectory(a().dirname(n)),
              n);
        }
        async function y({ folderName: e, dialogOptions: t }) {
          let n = "";
          (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
            .defaultPath || (t.defaultPath = b({}));
          const {
            canceled: i,
            filePaths: s,
            bookmark: o,
          } = await r.dialog.showOpenDialog(r.getCurrentWindow(), t);
          if (i) return null;
          if (
            ((n = s[0]),
            s.length > 0 && o && (await c.Z.bindBookmark({ fp: n, bookmark: o })),
            "string" == typeof e)
          ) {
            let t = e.replace(/[\\/]/g, "");
            (t = (0, f.N6)(t).replace(/\.+$/g, "").trim()), (n = a().join(n, t));
          }
          return (
            u.Z.existsSync(n) || u.Z.ensureDir(n),
            n && (0, p.km)().setLastSaveDirectory(n),
            n
          );
        }
        function b(
          { doc: e = null, oldDoc: t = null, suggestedName: n = null },
          i = null,
        ) {
          let s, o;
          if (
            (!s && n && (s = (0, f.N6)(n.toString())),
            !s &&
              e &&
              e.title &&
              e.source &&
              !e.source.startsWith("new://") &&
              (s = (0, f.N6)(e.title.toString())),
            !s &&
              t &&
              t.title &&
              t.source &&
              !t.source.startsWith("new://") &&
              (s = (0, f.N6)(t.title.toString())),
            s && Array.isArray(i))
          ) {
            const e = i[0] && i[0].extensions;
            Array.isArray(e) && e.length > 0 && (s = `${s}.${e[0]}`);
          }
          if (!o && t && t.source && t.source.startsWith("file://")) {
            let e = t.source.slice(7);
            (e = e.substring(1)), (o = a().dirname(e));
          }
          if (
            (!o &&
              (0, p.km)().lastSaveDirectory &&
              (o = (0, p.km)().lastSaveDirectory),
            !o)
          )
            try {
              o = r.app.getPath("documents");
            } catch (e) {
              g.info(e);
            }
          return o && s ? a().join(o, s) : o || s;
        }
        async function k(e) {
          e.$withUIKit((t) => {
            const n = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T(
              "OK",
            )}\n        </button>\n        </div>`;
            t.toast({
              message: e.$T(
                "The map style has been updated for your current version of Xmind.",
              ),
              pos: "bottom-center",
              timeout: 5e3,
              btn: n,
              style: { width: "500px", height: "auto", padding: "10px 20px" },
              btnClick: t.toast.clearAll(),
            });
          });
        }
        async function x(e) {
          const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
            n = e("Get Latest Version"),
            i = [t, n],
            [a] = await m({
              title: "Xmind",
              message: e(
                "The map style in this file might vary since it was created in a newer version of Xmind.",
              ),
              detail: e(
                "You can continue to open the file or update to the latest version for better compatibility.",
              ),
              buttons: i,
              defaultId: i.indexOf(n),
              cancelId: i.indexOf(t),
              noLink: !0,
            });
          a === i.indexOf(n) && l.ZP.fetch(d.lf.GO_DOWNLOAD);
        }
        async function _(e) {
          if (((e = "function" != typeof e ? (e) => e : e), v.zr))
            return await m({
              title: "Xmind",
              message: e("Failed to Open File"),
              detail: e(
                "The file was created with a newer version of Xmind. Please contact your corporate administrator for the latest update.",
              ),
              buttons: [e("Done")],
              defaultId: 0,
              noLink: !0,
            });
          const t = e("Cancel"),
            n = e("Get Latest Version"),
            i = [n, t],
            [a] = await m({
              title: "Xmind",
              message: e("Failed to Open File"),
              detail: e(
                "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
              ),
              buttons: i,
              defaultId: i.indexOf(n),
              cancelId: i.indexOf(t),
              noLink: !0,
            });
          a === i.indexOf(n) && l.ZP.fetch(d.lf.GO_DOWNLOAD);
        }
        async function S(e) {
          const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
            n = e("Save as"),
            i = e("Cancel"),
            a = [];
          a.push(n, t, i);
          let [r] = await m({
            type: "none",
            title: "Xmind",
            message: e("Saving file from Xmind"),
            detail: e(
              "Once you save the file, it cannot be opened normally in older versions like $1.",
              "Xmind 22.11",
            ),
            buttons: a,
            defaultId: a.indexOf(n),
            cancelId: a.indexOf(i),
            noLink: !0,
          });
          const s = r === a.indexOf(t),
            o = r === a.indexOf(n);
          return { toSave: s, toSaveAs: o, toCancel: !s && !o };
        }
        async function C(e) {
          const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
            n = e("Cancel"),
            i = [t, n],
            [a] = await m({
              title: "Xmind",
              message: e("Failed to Open File"),
              detail: e(
                "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
              ),
              buttons: i,
              defaultId: i.indexOf(t),
              cancelId: i.indexOf(n),
              noLink: !0,
            });
          return { toFix: a === i.indexOf(t), toCancel: a === i.indexOf(n) };
        }
      },
      33394: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => v });
        var i = n(57147),
          a = n.n(i),
          r = n(71017),
          s = n.n(r),
          o = n(73837),
          c = n(86633),
          u = n(96829),
          l = n(56222);
        const d = (0, c.ZP)("renderer:fs");
        async function f(e) {
          return (0, l.A)("OBTAIN_READ_WRITE_ACCESS", e);
        }
        async function p(e) {
          return (0, l.A)("RELEASE_READ_WRITE_ACCESS", e);
        }
        const v = {
          read: async function (e) {
            if (!s().isAbsolute(e)) throw new Error("Must be an absolute path.");
            const t = await (async function (e) {
              return (0, l.A)("OBTAIN_READ_LOCK", e);
            })(e);
            try {
              return await (0, o.promisify)(a().readFile)(e);
            } catch (t) {
              d.error(`path(${e}) read error: ${(0, u.SC)(t)}`);
              try {
                if (!(await f(e))) throw new Error(`No access to '${e}'`);
                return await (0, o.promisify)(a().readFile)(e);
              } catch (e) {
                throw e;
              } finally {
                await p(e);
              }
            } finally {
              await (async function (e) {
                return (0, l.A)("RELEASE_READ_LOCK", e);
              })(t);
            }
          },
          write: async function (e, t) {
            if (!s().isAbsolute(e)) throw new Error("Must be an absolute path.");
            const n = await (async function (e) {
              return (0, l.A)("OBTAIN_WRITE_LOCK", e);
            })(e);
            try {
              return await (0, o.promisify)(a().writeFile)(e, t);
            } catch (n) {
              d.error(`path(${e}) write error: ${(0, u.SC)(n)}`);
              try {
                if (!(await f(e))) throw new Error(`No access to '${e}'`);
                return await (0, o.promisify)(a().writeFile)(e, t);
              } catch (e) {
                throw e;
              } finally {
                await p(e);
              }
            } finally {
              await (async function (e) {
                return (0, l.A)("RELEASE_WRITE_LOCK", e);
              })(n);
            }
          },
          bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
            return (0, l.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
          },
          hasRWAccess: async function (e) {
            return (0, l.A)("HAS_READ_WRITE_ACCESS", e);
          },
          obtainRWAccessFromOS: f,
          releaseRWAccessFromOS: p,
        };
      },
      95185: (e, t, n) => {
        "use strict";
        n.d(t, { q: () => a });
        var i = n(2954);
        n(63111), n(54856), n(96829), n(78152), n(18446), n(90435);
        function a(e, t, n = !1) {
          (0, i.iH)({});
          let a = () => {};
          return { updateTouchBarItems: a };
        }
      },
      19469: (e, t, n) => {
        "use strict";
        n.d(t, { R: () => a });
        var i = n(63477);
        const a = (e) =>
          e.startsWith("?") ? (0, i.parse)(e.slice(1)) : (0, i.parse)(e);
      },
      43237: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => x });
        var i = n(2954),
          a = n(57310),
          r = n.n(a),
          s = n(49891),
          o = n(63111),
          c = n(96829),
          u = n(54856),
          l = n(78152),
          d = n(86633),
          f = n(90435),
          p = (n(13382), n(79409)),
          v = n(18621),
          g = n(69931),
          h = n(19469),
          m = n(95185),
          w = n(5893),
          y = n(7104),
          b = function (e, t, n, i) {
            return new (n || (n = Promise))(function (a, r) {
              function s(e) {
                try {
                  c(i.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function o(e) {
                try {
                  c(i.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(s, o);
              }
              c((i = i.apply(e, t || [])).next());
            });
          };
        const k = (0, i.aZ)({
          __name: "sign-in",
          props: { signInReferer: String },
          setup(e) {
            const t = e,
              n = {
                darwin: (0, g.ju)("static/images/signin-dialog-device-mac.svg"),
                win32: (0, g.ju)(
                  "static/images/signin-dialog-device-windows.svg",
                ),
                linux: (0, g.ju)("static/images/signin-dialog-device-linux.svg"),
              },
              a = (0, g.ju)("static/assets/images/no-wifi.svg"),
              k = (0, d.ZP)("use-sign-in"),
              x = (0, h.R)(window.location.search),
              { T: _ } = (0, l.JE)(),
              S = (0, i.FN)().proxy,
              C = (0, i.iH)(null),
              D = (0, w.u3)(`${(0, y.bY)()}/static/scripts/sign-in-preload.js`),
              O = (0, i.iH)(!0),
              A = (0, i.iH)(!1),
              I = (0, i.iH)(!1),
              E = (0, i.iH)(""),
              L = (0, i.iH)(null),
              R = (0, i.iH)([]),
              B = (0, i.iH)(!1),
              T = (0, i.iH)([]),
              N = (0, i.iH)(!1),
              P = (0, i.Fl)(() => {
                let e = `/in-app/signin?app_platform=${
                  o.IQ.win32
                }&app_version=${(0, p.Z)("version")}`;
                x.targetAccount &&
                  (e += `&account=${encodeURIComponent(x.targetAccount)}`);
                const { language: t } = (0, l.S)();
                return "zh-CN" === t
                  ? `https://www.xmind.cn${e}`
                  : "en-US" === t
                  ? `https://www.xmind.app${e}`
                  : `https://www.xmind.app/${o.cT[t]}${e}`;
              }),
              j = (0, i.Fl)(() => T.value.length > 0 && !B.value);
            (0, i.bv)(() => {
              C.value.addEventListener("ipc-message", (e) => {
                F(e.channel);
              });
            });
            const F = (e) =>
                b(this, void 0, void 0, function* () {
                  const n = JSON.parse(e);
                  if (
                    ("welcome" === t.signInReferer &&
                      (0, v.L9)({
                        eventCategory: "welcome",
                        eventAction: "welcomeSigninClosedBySignIn",
                      }),
                    "signin_success" === n.event)
                  )
                    return (
                      (L.value = {
                        region: E.value || "us",
                        user: n.data.user,
                        token: n.data.token,
                        uid: n.data.user,
                        primaryEmail: n.data.primary_email,
                        fullname: n.data.fullname,
                        groupName: n.data.group_name,
                        phone: n.data.phone,
                      }),
                      yield U(),
                      void (
                        (0, l.Yh)().status === o.wi.VALID &&
                        (0, l.Yh)().updateStartTrial(!0)
                      )
                    );
                }),
              U = () =>
                b(this, void 0, void 0, function* () {
                  let e;
                  try {
                    (e = yield f.ZP.fetch(u.lf.DEVICE_BIND, {
                      account: L.value,
                    })),
                      k.debug("Bind device result:", e);
                  } catch (e) {
                    if (e.code === o.oM) return void (yield U());
                    if (
                      e.code === o.q4 &&
                      e.data &&
                      e.data.devices &&
                      ((R.value = e.data.devices.filter(({ type: e }) => e in n)),
                      R.value.length > 0)
                    )
                      return;
                    throw (
                      (k.error("Error while binding device:", (0, c.SC)(e)), e)
                    );
                  }
                  if (e.license) {
                    const { ss: t } = e.license;
                    t && (N.value = !0);
                  }
                  yield W(e.rawData);
                }),
              Z = (e) => T.value.includes(e),
              $ = () =>
                b(this, void 0, void 0, function* () {
                  let e;
                  try {
                    e = yield f.ZP.fetch(u.lf.DEVICE_BIND, {
                      account: L.value,
                      unbind: T.value,
                    });
                  } catch (e) {
                    return (
                      e.code === o.q4 &&
                        (e.data &&
                          e.data.devices &&
                          (R.value = e.data.devices.filter(
                            ({ type: e }) => e in n,
                          )),
                        (T.value = [])),
                      void k.error("Unbind devices: ", (0, c.SC)(e))
                    );
                  }
                  yield W(e.rawData);
                }),
              W = (e) =>
                b(this, void 0, void 0, function* () {
                  let t;
                  try {
                    t = yield f.ZP.fetch(u.lf.SUBSCRIPTION_DETAILS, {
                      account: L.value,
                    });
                  } catch (e) {
                    k.warn(
                      "Failed to retrieve subscription details:",
                      (0, c.SC)(e),
                    );
                  }
                  const n = Object.assign(Object.assign({}, L.value), {
                    rawSubscriptionData: e,
                    subscriptionDetails: t,
                  });
                  if (
                    (yield Promise.all([
                      f.ZP.fetch(u.Pp, {
                        mutations: [
                          { id: "account", type: "updateAccount", payload: [n] },
                        ],
                      }),
                      f.ZP.fetch((0, u.iM)(window.id), { success: !0 }),
                    ]),
                    setTimeout(() => window.close(), 0),
                    x.ignoreOpenDialog)
                  )
                    return;
                  if (x.openBy)
                    return void (yield f.ZP.fetch(u.Fx, { name: x.openBy }));
                  if (o.X_) return;
                  const i = (0, l.Yh)().subscriptionStatus;
                  i === o.rJ.VALID || "valid" === i
                    ? yield f.ZP.fetch(u.Fx, {
                        name: "dialog-congratulate",
                        query: { isOldUser: N.value },
                      })
                    : (i !== o.rJ.TRIAL && i !== o.rJ.EXPIRED) ||
                      x.innerFeatureName ||
                      (yield f.ZP.fetch(u.Fx, { name: "dialog-activate" }));
                }),
              M = (0, i.iH)([
                { type: "space", size: "flexible" },
                { type: "button", label: _("Cancel"), click: "close" },
                { type: "space", size: "flexible" },
              ]);
            return (
              (0, m.q)(M, { close }),
              {
                __sfc: !0,
                deviceImages: n,
                customNetworkFailLoadIcon: a,
                logger: k,
                query: x,
                $T: _,
                props: t,
                vm: S,
                webviewRef: C,
                preloadScriptURL: D,
                isMac: !1,
                goBackBtnText: "其他登录方式",
                isShowSpinner: O,
                isShowFailLoad: A,
                showGoBackBtn: I,
                region: E,
                account: L,
                devices: R,
                isUnbindingDevices: B,
                devicesToUnbind: T,
                isOldUser: N,
                signinURL: P,
                canUnbindDevices: j,
                handleDidNavigate: (e) => {
                  const t = e.target.getURL(),
                    n = r().parse(t);
                  n.hostname.includes("xmind") && n.pathname.includes("/in-app")
                    ? (n.hostname.includes(".cn")
                        ? (E.value = "cn")
                        : n.hostname.includes(".app") && (E.value = "us"),
                      (I.value = !1))
                    : (I.value = !0);
                },
                handleDomReady: () => {
                  (O.value = !1), C.value.focus();
                },
                handleWebViewMessageResult: F,
                doWebViewSignin: U,
                goBack: () => {
                  C.value.goBack();
                },
                toggleDeviceToUnbind: (e) => {
                  Z(e)
                    ? (T.value = T.value.filter((t) => t !== e))
                    : (T.value = T.value.concat([e]));
                },
                isDeviceToUnbind: Z,
                getStylesForDeviceDescription: (e) =>
                  Z(e) ? { opacity: "0.5" } : "",
                unbindDevices: (e) => {
                  if (
                    (e &&
                      e.preventDefault &&
                      (e.preventDefault(), (e.returnValue = !1)),
                    j.value)
                  )
                    return S.$safeRun(() => $()), !1;
                },
                doUnbindDevices: $,
                saveAndClose: W,
                touchBarItems: M,
                Spinner: s.default,
              }
            );
          },
        });
        const x = (0, n(51900).Z)(
          k,
          function () {
            var e = this,
              t = e._self._c,
              n = e._self._setupProxy;
            return t(
              "div",
              {
                staticClass:
                  "uk-window uk-window-default uk-window-dialog uk-window-dialog-default",
              },
              [
                t(
                  "div",
                  {
                    staticClass: "uk-window-title-bar",
                    class: {
                      "uk-window-title-bar-floating": 0 !== n.devices.length,
                    },
                    style: n.isMac ? { textAlign: "right" } : null,
                  },
                  [
                    t(
                      "button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: n.showGoBackBtn,
                            expression: "showGoBackBtn",
                          },
                        ],
                        staticClass: "uk-button uk-button-link",
                        style: n.isMac ? { marginRight: "12px" } : null,
                        on: { click: n.goBack },
                      },
                      [e._v("\n      " + e._s(n.goBackBtnText) + "\n    ")],
                    ),
                    e._v(" "),
                    t("window-control-button-group"),
                  ],
                  1,
                ),
                e._v(" "),
                t("div", { staticClass: "uk-window-body uk-flex" }, [
                  0 === n.devices.length
                    ? t(
                        "div",
                        { staticClass: "uk-flex-1 uk-flex uk-position-relative" },
                        [
                          t("webview", {
                            ref: "webviewRef",
                            staticStyle: { width: "100%" },
                            attrs: {
                              src: n.signinURL,
                              preload: n.preloadScriptURL,
                              allowpopups: "",
                            },
                            on: {
                              "will-navigate": function (e) {
                                n.isShowSpinner = !0;
                              },
                              "did-navigate": n.handleDidNavigate,
                              "dom-ready": n.handleDomReady,
                              "did-fail-load": function (e) {
                                n.isShowFailLoad = !0;
                              },
                            },
                          }),
                          e._v(" "),
                          t(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: n.isShowSpinner,
                                  expression: "isShowSpinner",
                                },
                              ],
                              staticClass:
                                "uk-background-default uk-position-cover uk-flex uk-flex-1 uk-flex-center uk-flex-middle uk-icon-link",
                            },
                            [
                              t(n.Spinner, {
                                staticStyle: { "padding-bottom": "30px" },
                                attrs: {
                                  text: n.$T("Connecting to Xmind Server..."),
                                },
                              }),
                            ],
                            1,
                          ),
                          e._v(" "),
                          t(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: n.isShowFailLoad,
                                  expression: "isShowFailLoad",
                                },
                              ],
                              staticClass:
                                "uk-background-default uk-position-cover uk-flex uk-flex-1 uk-flex-center uk-flex-middle uk-icon-link",
                            },
                            [
                              t(
                                "div",
                                {
                                  staticClass: "uk-text-center uk-text-muted",
                                  staticStyle: {
                                    "margin-top": "-16px",
                                    "padding-bottom": "30px",
                                  },
                                },
                                [
                                  t("img", {
                                    staticStyle: {
                                      width: "48px",
                                      height: "48px",
                                    },
                                    attrs: {
                                      draggable: "false",
                                      src: n.customNetworkFailLoadIcon,
                                      "uk-svg": "",
                                    },
                                  }),
                                  e._v(" "),
                                  t(
                                    "div",
                                    { staticClass: "uk-margin-small-top" },
                                    [
                                      e._v(
                                        "\n            " +
                                          e._s(
                                            n.$T(
                                              "Please check your network connection and try again later.",
                                            ),
                                          ) +
                                          "\n          ",
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                        1,
                      )
                    : t(
                        "div",
                        {
                          staticClass:
                            "uk-width-expand uk-margin-large-left uk-margin-xlarge-top uk-margin-large-right uk-margin-large-bottom",
                        },
                        [
                          t(
                            "form",
                            {
                              staticClass: "uk-height-1-1",
                              on: {
                                submit: function (e) {
                                  return (
                                    e.preventDefault(),
                                    n.unbindDevices.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [
                              t("h1", { staticClass: "uk-margin-small-top" }, [
                                e._v(
                                  "\n          " +
                                    e._s(n.$T("Exceeded Device Limit.")) +
                                    "\n        ",
                                ),
                              ]),
                              e._v(" "),
                              t(
                                "div",
                                { staticClass: "uk-margin-medium-bottom" },
                                [
                                  e._v(
                                    "\n          " +
                                      e._s(
                                        n.$T(
                                          "Your account has exceeded device limit. Unlink one device to continue.",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ],
                              ),
                              e._v(" "),
                              t(
                                "div",
                                {
                                  staticClass:
                                    "uk-overflow-auto uk-padding-remove-left uk-padding-remove-vertical uk-padding-small",
                                  staticStyle: { "max-height": "340px" },
                                },
                                e._l(n.devices, function (i, a) {
                                  return t("div", { key: a }, [
                                    t(
                                      "div",
                                      {
                                        staticClass:
                                          "uk-flex uk-flex-between uk-flex-middle uk-padding-large uk-padding-remove-horizontal",
                                      },
                                      [
                                        t("div", {
                                          staticClass:
                                            "uk-flex-none uk-background-norepeat uk-background-contain",
                                          staticStyle: {
                                            width: "56px",
                                            height: "42px",
                                          },
                                          style: n.getStylesForDeviceDescription(
                                            i.id,
                                          ),
                                          attrs: {
                                            "data-src": n.deviceImages[i.type],
                                            "uk-svg": "",
                                          },
                                        }),
                                        e._v(" "),
                                        t(
                                          "span",
                                          {
                                            staticClass:
                                              "uk-overflow-hidden uk-text-truncate uk-margin-small-left uk-margin-small-right uk-width-1-1",
                                            style:
                                              n.getStylesForDeviceDescription(
                                                i.id,
                                              ),
                                            attrs: { title: i.name },
                                          },
                                          [e._v(e._s(i.name))],
                                        ),
                                        e._v(" "),
                                        t(
                                          "button",
                                          {
                                            staticClass:
                                              "uk-button uk-flex-none uk-button-default",
                                            attrs: { type: "button" },
                                            on: {
                                              click: function (e) {
                                                return n.toggleDeviceToUnbind(
                                                  i.id,
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                " +
                                                e._s(
                                                  n.isDeviceToUnbind(i.id)
                                                    ? n.$T("Link(verb)")
                                                    : n.$T("Unlink"),
                                                ) +
                                                "\n              ",
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                    e._v(" "),
                                    a !== n.devices.length - 1
                                      ? t("hr", {
                                          staticClass: "uk-margin-remove",
                                        })
                                      : e._e(),
                                  ]);
                                }),
                                0,
                              ),
                              e._v(" "),
                              t(
                                "div",
                                {
                                  staticClass:
                                    "uk-margin-large-top uk-text-right",
                                },
                                [
                                  t(
                                    "button",
                                    {
                                      staticClass:
                                        "uk-button uk-button-primary uk-button-large",
                                      staticStyle: { width: "180px" },
                                      attrs: {
                                        type: "submit",
                                        disabled: !n.canUnbindDevices,
                                      },
                                    },
                                    [
                                      t("span", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: n.isUnbindingDevices,
                                            expression: "isUnbindingDevices",
                                          },
                                        ],
                                        staticClass: "uk-margin-small-right",
                                        attrs: { "uk-spinner": "ratio: 0.6" },
                                      }),
                                      e._v(" "),
                                      t("span", [e._v(e._s(n.$T("Continue")))]),
                                    ],
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ],
                      ),
                ]),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports;
      },
      49891: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => s });
        var i = n(2954),
          a = n(69931);
        const r = (0, i.aZ)({
          __name: "spinner",
          props: { text: { type: String } },
          setup: (e) => ({
            __sfc: !0,
            imageURL: (0, i.Fl)(() =>
              (0, a.ju)("static/assets/images/spinner.gif"),
            ),
          }),
        });
        n(25863);
        const s = (0, n(51900).Z)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass:
                  "uk-panel uk-background-default uk-flex uk-flex-column uk-flex-center uk-flex-middle",
              },
              [
                t(
                  "div",
                  {
                    staticClass: "uk-text-center uk-text-muted spinner-container",
                  },
                  [
                    t("img", {
                      staticClass: "spinner-image",
                      attrs: {
                        draggable: "false",
                        src: e._self._setupProxy.imageURL,
                      },
                    }),
                    e._v(" "),
                    e.text
                      ? t("div", { staticClass: "spinner-text" }, [
                          e._v("\n      " + e._s(e.text) + "\n    "),
                        ])
                      : e._e(),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          "14a8e261",
          null,
        ).exports;
      },
      25863: (e, t, n) => {
        var i = n(80102);
        i.__esModule && (i = i.default),
          "string" == typeof i && (i = [[e.id, i, ""]]),
          i.locals && (e.exports = i.locals);
        (0, n(45346).Z)("1107ca9a", i, !0, {});
      },
      45346: (e, t, n) => {
        "use strict";
        function i(e, t) {
          for (var n = [], i = {}, a = 0; a < t.length; a++) {
            var r = t[a],
              s = r[0],
              o = { id: e + ":" + a, css: r[1], media: r[2], sourceMap: r[3] };
            i[s] ? i[s].parts.push(o) : n.push((i[s] = { id: s, parts: [o] }));
          }
          return n;
        }
        n.d(t, { Z: () => v });
        var a = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !a)
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
          );
        var r = {},
          s = a && (document.head || document.getElementsByTagName("head")[0]),
          o = null,
          c = 0,
          u = !1,
          l = function () {},
          d = null,
          f = "data-vue-ssr-id",
          p =
            "undefined" != typeof navigator &&
            /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function v(e, t, n, a) {
          (u = n), (d = a || {});
          var s = i(e, t);
          return (
            g(s),
            function (t) {
              for (var n = [], a = 0; a < s.length; a++) {
                var o = s[a];
                (c = r[o.id]).refs--, n.push(c);
              }
              t ? g((s = i(e, t))) : (s = []);
              for (a = 0; a < n.length; a++) {
                var c;
                if (0 === (c = n[a]).refs) {
                  for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                  delete r[c.id];
                }
              }
            }
          );
        }
        function g(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              i = r[n.id];
            if (i) {
              i.refs++;
              for (var a = 0; a < i.parts.length; a++) i.parts[a](n.parts[a]);
              for (; a < n.parts.length; a++) i.parts.push(m(n.parts[a]));
              i.parts.length > n.parts.length &&
                (i.parts.length = n.parts.length);
            } else {
              var s = [];
              for (a = 0; a < n.parts.length; a++) s.push(m(n.parts[a]));
              r[n.id] = { id: n.id, refs: 1, parts: s };
            }
          }
        }
        function h() {
          var e = document.createElement("style");
          return (e.type = "text/css"), s.appendChild(e), e;
        }
        function m(e) {
          var t,
            n,
            i = document.querySelector("style[" + f + '~="' + e.id + '"]');
          if (i) {
            if (u) return l;
            i.parentNode.removeChild(i);
          }
          if (p) {
            var a = c++;
            (i = o || (o = h())),
              (t = b.bind(null, i, a, !1)),
              (n = b.bind(null, i, a, !0));
          } else
            (i = h()),
              (t = k.bind(null, i)),
              (n = function () {
                i.parentNode.removeChild(i);
              });
          return (
            t(e),
            function (i) {
              if (i) {
                if (
                  i.css === e.css &&
                  i.media === e.media &&
                  i.sourceMap === e.sourceMap
                )
                  return;
                t((e = i));
              } else n();
            }
          );
        }
        var w,
          y =
            ((w = []),
            function (e, t) {
              return (w[e] = t), w.filter(Boolean).join("\n");
            });
        function b(e, t, n, i) {
          var a = n ? "" : i.css;
          if (e.styleSheet) e.styleSheet.cssText = y(t, a);
          else {
            var r = document.createTextNode(a),
              s = e.childNodes;
            s[t] && e.removeChild(s[t]),
              s.length ? e.insertBefore(r, s[t]) : e.appendChild(r);
          }
        }
        function k(e, t) {
          var n = t.css,
            i = t.media,
            a = t.sourceMap;
          if (
            (i && e.setAttribute("media", i),
            d.ssrId && e.setAttribute(f, t.id),
            a &&
              ((n += "\n/*# sourceURL=" + a.sources[0] + " */"),
              (n +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(a)))) +
                " */")),
            e.styleSheet)
          )
            e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
      },
      6113: (e) => {
        "use strict";
        e.exports = require("crypto");
      },
      72298: (e) => {
        "use strict";
        e.exports = require("electron");
      },
      82361: (e) => {
        "use strict";
        e.exports = require("events");
      },
      57147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      22037: (e) => {
        "use strict";
        e.exports = require("os");
      },
      71017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      63477: (e) => {
        "use strict";
        e.exports = require("querystring");
      },
      57310: (e) => {
        "use strict";
        e.exports = require("url");
      },
      73837: (e) => {
        "use strict";
        e.exports = require("util");
      },
    },
    (e) => {
      e.O(0, [8270, 2244], () => {
        return (t = 70851), e((e.s = t));
        var t;
      });
      var t = e.O();
      module.exports = t;
    },
  ]);
  