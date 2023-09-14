(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
    [8681],
    {
      95948: (t, e, a) => {
        "use strict";
        a.r(e), a.d(e, { default: () => r });
        var n = a(23645),
          o = a.n(n)()(function (t) {
            return t[1];
          });
        o.push([
          t.id,
          "table tr[data-v-3b66276c] {\n  height: 30px;\n}\n.uk-text-muted[data-v-3b66276c] {\n  font-size: 12px;\n  line-height: 1.3;\n}\n.preview[data-v-3b66276c] {\n  border-radius: 6px;\n  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);\n}\n.preview.is-dark[data-v-3b66276c] {\n  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);\n}\n.uk-window-button-bar[data-v-3b66276c] {\n  min-height: 50px;\n  padding-top: 0;\n}\n",
          "",
        ]);
        const r = o;
      },
      40334: (t, e, a) => {
        "use strict";
        a.d(e, { Z: () => c });
        var n = a(92636),
          o = a(54856),
          r = a(16704),
          i = a(92870),
          s = a(90435);
        const c = {
          computed: {},
          watch: {
            touchBarItems(t) {
              this.updateTouchBarItems(t);
            },
          },
          methods: {
            updateTouchBarItems(t) {
              const e = (t) => {
                const e = t.click;
                let a = this._touchBarRoutes[e];
                return (
                  a ||
                    ((a = {
                      method: e,
                      endpoint: (0, o.A6)(window.id, (0, r.rs)(e)),
                    }),
                    (this._touchBarRoutes[e] = a)),
                  a.unroute || (a.unroute = s.ZP.route(a.endpoint, this[e])),
                  Object.assign({}, t, { click: a.endpoint })
                );
              };
              (t = (t || this.touchBarItems || []).map(
                (t) => (
                  "button" !== t.type ||
                  "string" != typeof t.click ||
                  n.sq.includes(t.click) ||
                  t.click.startsWith("command:")
                    ? "buttons" === t.type &&
                      (t = {
                        ...t,
                        buttons: t.buttons.map((t) =>
                          "string" != typeof t.click ||
                          n.sq.includes(t.click) ||
                          t.click.startsWith("command:")
                            ? t
                            : e(t),
                        ),
                      })
                    : (t = e(t)),
                  t
                ),
              )),
                (0, i.JS)("window")?.().updateTouchBarItems(t);
            },
          },
          beforeCreate() {
            this._touchBarRoutes = {};
          },
          mounted() {
            this.updateTouchBarItems();
          },
          beforeDestroy() {
            Object.values(this._touchBarRoutes).forEach(
              ({ unroute: t }) => t && t(),
            ),
              (this._touchBarRoutes = {});
          },
        };
      },
      2642: (t, e, a) => {
        "use strict";
        a.r(e);
        var n = a(63477),
          o = a.n(n),
          r = a(51505),
          i = a(40334),
          s = a(72917),
          c = a(31945),
          l = a(54856),
          u = a(90435),
          d = a(18621),
          p = a(95246),
          h = a(92870);
        const m = o().parse(window.location.search.slice(1)),
          f = {
            mindmap: { exportContentScope: 0, exportBackground: !0 },
            outliner: { exportContentScope: 0, exportBackground: !0 },
            pitch: { exportContentScope: 0, exportBackground: !0 },
          },
          k = {
            mixins: [i.Z],
            data() {
              return {
                exportContentScope: 0,
                hasWatermark: !1,
                exportToType: 0,
                exportScale: 1,
                exportBackground: !0,
                iconWarning: this.$toResourceURL(
                  "static/images/dialog-export-to-image/warning.svg",
                ),
                iconLock: this.$toResourceURL(
                  "static/images/dialog-export-to-image/lock.svg",
                ),
                proIcon: this.$toResourceURL(
                  "static/assets/images/pro/menu-pro@2x.png",
                ),
                exportAvailableScales: ["100%", "200%", "300%"],
                currentExportCategory: "mindmap",
              };
            },
            computed: {
              preferredLanguage: () => (0, h.S)().preferredLanguage,
              exportContentScopeTypes() {
                return [
                  { title: this.$T("Current Sheet"), trialRequest: null },
                  {
                    title: this.$T("Current File"),
                    trialRequest: "action.export2ScopeFilePdf",
                  },
                ];
              },
              isActivationStatusValid: () => true,
              exportCategories() {
                return {
                  mindmap: this.$T("Mind Map"),
                  outliner: this.$T("Outliner"),
                  pitch: this.$T("Pitch"),
                };
              },
              isDarkAppearance: () => "dark" === (0, h.S)().appearance,
              watermarkEnabled: () => false,
              previewImg() {
                return this.$toResourceURL(
                  `static/assets/images/dialog-export-to-pdf/${
                    this.currentExportCategory
                  }_${this.isDarkAppearance ? "dark" : "default"}.svg`,
                );
              },
              bigMindMap() {
                return Math.max(m.bound[0], m.bound[1]) * this.exportScale > 3e4;
              },
              touchBarItems() {
                return [
                  { type: "space", size: "flexible" },
                  { type: "button", label: this.$T("Cancel"), click: "close" },
                  {
                    type: "button",
                    label: this.$T("Export"),
                    backgroundColor: "primary",
                    click: "doExport",
                  },
                  { type: "space", size: "flexible" },
                ].filter(Boolean);
              },
            },
            watch: {
              async exportScale(t) {
                t > 1 &&
                  !(await this.handlerForLimitedFeature()) &&
                  (this.exportScale = 1);
              },
              exportContentScope(t) {
                this.exportToType = t;
              },
              currentExportCategory(t) {
                (this.exportContentScope = f[t].exportContentScope),
                  (this.exportBackground = f[t].exportBackground);
              },
              preferredLanguage(t) {
                this.adaptWindow(t);
              },
              isActivationStatusValid(t) {
                t ||
                  ((this.exportContentScope = 0),
                  Object.keys(f).forEach((t) => {
                    f[t].exportContentScope = 0;
                  }),
                  (this.hasWatermark = !0));
              },
            },
            methods: {
              adaptWindow(t) {
                const [e, a] = [540, 375];
                "pt-PT" === t ? (0, p.QC)(e + 100, a) : (0, p.QC)(e, a);
              },
              doExport() {
                const t = {
                  contentScope: this.exportContentScope,
                  exportTo: this.exportToType,
                  transparent: !this.exportBackground,
                  exportCategory: this.currentExportCategory,
                  hasWatermark: this.hasWatermark,
                };
                (0, h.S)().updatePreferences({
                  watermarkEnabled: this.hasWatermark,
                }),
                  this.isActivationStatusValid &&
                    (0, d.L9)({
                      eventAction: "watermarkStatus",
                      eventName: this.hasWatermark
                        ? "PDFwithWatermark"
                        : "PDFwithoutWatermark",
                    }),
                  this.$safeRun(() => {
                    u.ZP.fetch((0, l.iM)(window.id), t).then(() =>
                      window.close(),
                    );
                  });
              },
              cancel() {
                window.close();
              },
              handlerForLimitedFeature: async () =>
                u.ZP.fetch(l.Gy, "action.export2ScalePdf"),
              switchCategory(t) {
                this.currentExportCategory = t;
              },
              onChangeBackground() {
                (this.exportBackground = !this.exportBackground),
                  (f[this.currentExportCategory].exportBackground =
                    this.exportBackground);
              },
              async onScopeChanged(t, e) {
                (e.trialRequest && !(await u.ZP.fetch(l.Gy, e.trialRequest))) ||
                  ((this.exportContentScope = t),
                  (f[this.currentExportCategory].exportContentScope = t));
              },
            },
            components: {
              WatermarkCheckbox: s.Z,
              WatermarkTemplate: {
                render(t) {
                  return t(
                    "div",
                    { class: "uk-text-muted" },
                    this.$T(
                      '"Presented with xmind" is locked before upgrading to Xmind Pro.',
                    ),
                  );
                },
              },
            },
            mounted() {
              const t = (0, h.OD)((0, c.aJ)(m.editorId))?.().isOutlinerMode;
              t && (this.currentExportCategory = "outliner"),
                (this.hasWatermark =
                  !this.isActivationStatusValid || this.watermarkEnabled);
            },
          };
        a(47749);
        const g = (0, a(51900).Z)(
            k,
            function () {
              var t = this,
                e = t._self._c;
              return e(
                "div",
                {
                  staticClass:
                    "uk-window uk-window-dialog uk-window-dialog-default",
                  attrs: { id: "app" },
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "uk-window-title-bar uk-window-title-bar-floating",
                    },
                    [e("window-control-button-group")],
                    1,
                  ),
                  t._v(" "),
                  e("div", { staticClass: "uk-window-body uk-flex" }, [
                    e(
                      "div",
                      {
                        staticClass: "uk-flex uk-flex-middle uk-flex-center",
                        staticStyle: { width: "190px", "padding-top": "49px" },
                      },
                      [
                        e("img", {
                          staticClass: "preview",
                          class: { isDark: t.isDarkAppearance },
                          attrs: {
                            draggable: "false",
                            "uk-img": "",
                            "data-src": t.previewImg,
                            alt: "",
                          },
                        }),
                      ],
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "uk-panel uk-margin-top uk-padding-large uk-padding-remove-left uk-flex uk-flex-column uk-height-expand",
                      },
                      [
                        e("h1", { staticClass: "uk-text-bold" }, [
                          t._v(
                            "\n        " +
                              t._s(t.$T("Export to PDF")) +
                              "\n      ",
                          ),
                        ]),
                        t._v(" "),
                        e("div", { staticClass: "uk-flex uk-margin-bottom" }, [
                          e(
                            "ul",
                            {
                              staticClass:
                                "uk-tab uk-tab-capsule uk-flex uk-flex-nowrap uk-padding-remove uk-margin-remove uk-flex-middle uk-flex-no-shrink",
                            },
                            t._l(Object.keys(t.exportCategories), function (a) {
                              return e(
                                "li",
                                {
                                  key: a,
                                  class: {
                                    "uk-active": a === t.currentExportCategory,
                                  },
                                  on: {
                                    click: function (e) {
                                      return t.switchCategory(a);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "a",
                                    { attrs: { draggable: "false", href: "#" } },
                                    [t._v(t._s(t.exportCategories[a]))],
                                  ),
                                ],
                              );
                            }),
                            0,
                          ),
                        ]),
                        t._v(" "),
                        e("table", [
                          e(
                            "tr",
                            { staticClass: "uk-margin-top uk-margin-small" },
                            [
                              e(
                                "td",
                                { staticStyle: { "text-align": "right" } },
                                [
                                  e(
                                    "label",
                                    {
                                      staticClass: "uk-form-label uk-text-nowrap",
                                    },
                                    [t._v(t._s(t.$T("Export:")))],
                                  ),
                                ],
                              ),
                              t._v(" "),
                              e("td", { staticStyle: { width: "100%" } }, [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "uk-form-controls uk-margin-small-left",
                                  },
                                  [
                                    e(
                                      "button",
                                      {
                                        staticClass:
                                          "uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small",
                                        staticStyle: { width: "176px" },
                                        attrs: { name: "content" },
                                      },
                                      [
                                        t._v(
                                          "\n                " +
                                            t._s(
                                              t.exportContentScopeTypes[
                                                t.exportContentScope
                                              ].title,
                                            ) +
                                            "\n              ",
                                        ),
                                      ],
                                    ),
                                    t._v(" "),
                                    e(
                                      "div",
                                      {
                                        attrs: {
                                          "uk-contextual-popover":
                                            "offsetLeft:20",
                                          "data-sel-close": "[uk-menu] button",
                                        },
                                      },
                                      [
                                        e(
                                          "ul",
                                          {
                                            staticClass:
                                              "uk-height-1-1 uk-overflow-auto",
                                            attrs: { "uk-menu": "" },
                                          },
                                          t._l(
                                            t.exportContentScopeTypes,
                                            function (a, n) {
                                              return e("li", { key: n }, [
                                                e(
                                                  "button",
                                                  {
                                                    class: {
                                                      "uk-checked":
                                                        t.exportContentScope ===
                                                        n,
                                                    },
                                                    on: {
                                                      click: function (e) {
                                                        return t.onScopeChanged(
                                                          n,
                                                          a,
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    e(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "uk-flex uk-flex-middle",
                                                      },
                                                      [
                                                        e("span", [
                                                          t._v(t._s(a.title)),
                                                        ]),
                                                        t._v(" "),
                                                        a.trialRequest &&
                                                        !t.isActivationStatusValid
                                                          ? e("img", {
                                                              staticStyle: {
                                                                "margin-left":
                                                                  "8px",
                                                                height: "14px",
                                                              },
                                                              attrs: {
                                                                src: t.proIcon,
                                                              },
                                                            })
                                                          : t._e(),
                                                      ],
                                                    ),
                                                  ],
                                                ),
                                              ]);
                                            },
                                          ),
                                          0,
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                              ]),
                            ],
                          ),
                          t._v(" "),
                          e("tr", [
                            e("td", { staticStyle: { "text-align": "right" } }, [
                              e(
                                "label",
                                { staticClass: "uk-form-label uk-text-nowrap" },
                                [t._v(t._s(t.$T("Options:")))],
                              ),
                            ]),
                            t._v(" "),
                            e(
                              "td",
                              { staticStyle: { width: "100%" } },
                              [
                                "mindmap" === t.currentExportCategory
                                  ? [
                                      e(
                                        "div",
                                        {
                                          staticClass:
                                            "uk-form-controls uk-margin-small-left",
                                        },
                                        [
                                          e("div", [
                                            e("label", [
                                              e("input", {
                                                staticClass:
                                                  "uk-checkbox uk-marsgin-xsmall-right",
                                                attrs: {
                                                  type: "checkbox",
                                                  name: "transparent",
                                                },
                                                domProps: {
                                                  checked: t.exportBackground,
                                                },
                                                on: {
                                                  input: t.onChangeBackground,
                                                },
                                              }),
                                              t._v(
                                                "\n                    " +
                                                  t._s(t.$T("Background Color")) +
                                                  "\n                  ",
                                              ),
                                            ]),
                                          ]),
                                        ],
                                      ),
                                    ]
                                  : [
                                      e("watermark-checkbox", {
                                        staticClass: "uk-margin-small-left",
                                        attrs: { value: t.hasWatermark },
                                        on: {
                                          toggle: (e) => (t.hasWatermark = e),
                                        },
                                      }),
                                    ],
                              ],
                              2,
                            ),
                          ]),
                          t._v(" "),
                          "mindmap" === t.currentExportCategory
                            ? e("tr", [
                                e("td"),
                                t._v(" "),
                                e(
                                  "td",
                                  [
                                    e("watermark-checkbox", {
                                      staticClass: "uk-margin-small-left",
                                      staticStyle: {
                                        transform: "translateY(-5px)",
                                      },
                                      attrs: { value: t.hasWatermark },
                                      on: { toggle: (e) => (t.hasWatermark = e) },
                                    }),
                                  ],
                                  1,
                                ),
                              ])
                            : t._e(),
                        ]),
                        t._v(" "),
                        t.isActivationStatusValid
                          ? t._e()
                          : e("div", [e("WatermarkTemplate")], 1),
                        t._v(" "),
                        "pitch" !== t.currentExportCategory
                          ? [
                              e("hr", { staticClass: "uk-margin-xsmall-bottom" }),
                              t._v(" "),
                              e(
                                "div",
                                { staticClass: "uk-flex-column uk-text-muted" },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$T(
                                          "To change PDF layout settings, choose File > Print > Save as PDF.",
                                        ),
                                      ) +
                                      "\n        ",
                                  ),
                                ],
                              ),
                            ]
                          : t._e(),
                      ],
                      2,
                    ),
                  ]),
                  t._v(" "),
                  e("div", { staticClass: "uk-window-button-bar" }, [
                    e("div", { staticClass: "uk-button-group" }, [
                      e(
                        "button",
                        {
                          staticClass: "uk-button uk-button-primary",
                          attrs: { type: "submit", autofocus: "", tabindex: "1" },
                          on: { click: t.doExport },
                        },
                        [t._v("\n        " + t._s(t.$T("Export")) + "\n      ")],
                      ),
                      t._v(" "),
                      e(
                        "button",
                        {
                          staticClass: "uk-button uk-button-default",
                          attrs: { type: "button" },
                          on: { click: t.cancel },
                        },
                        [t._v("\n        " + t._s(t.$T("Cancel")) + "\n      ")],
                      ),
                    ]),
                  ]),
                ],
              );
            },
            [],
            !1,
            null,
            "3b66276c",
            null,
          ).exports,
          x = o().parse(location.search.slice(1));
        (0, r.Z)(g, { name: "dialog-export-to-pdf", editorId: x.editorId });
      },
      13382: (t, e, a) => {
        "use strict";
        a.d(e, {
          G$: () => C,
          N0: () => k,
          Pg: () => _,
          R2: () => v,
          W5: () => b,
          ZZ: () => x,
          am: () => y,
          eq: () => w,
          yr: () => S,
        });
        var n = a(71017),
          o = a.n(n),
          r = a(67657),
          i = a(7104),
          s = a(86633),
          c = a(33394),
          l = a(94593),
          u = a(90435),
          d = a(54856),
          p = a(5893),
          h = a(92870),
          m = a(92636);
        const f = (0, s.ZP)("dialog");
        async function k(t) {
          (t = Object.assign({}, t || {})).icon &&
            "string" == typeof t.icon &&
            (t.icon = o().join((0, i.bY)(), t.icon));
          const e = r.BrowserWindow.fromId(window.id);
          return [r.dialog.showMessageBoxSync(e, t)];
        }
        async function g(t) {
          (t = Object.assign({}, t || {})).icon &&
            "string" == typeof t.icon &&
            (t.icon = o().join((0, i.bY)(), t.icon));
          const e = r.BrowserWindow.fromId(window.id),
            { response: a, checkboxChecked: n } = await r.dialog.showMessageBox(
              e,
              t,
            );
          return [a, n];
        }
        async function x(t) {
          (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
            .suggestPath &&
            !t.defaultPath &&
            ((t.defaultPath = y(t.suggestPath, t.filters)), delete t.suggestPath);
          const {
            canceled: e,
            filePath: a,
            bookmark: n,
          } = await r.dialog.showSaveDialog(r.getCurrentWindow(), t);
          return e
            ? null
            : (a && n && (await c.Z.bindBookmark({ fp: a, bookmark: n })),
              a && (0, h.km)().setLastSaveDirectory(o().dirname(a)),
              a);
        }
        async function w({ folderName: t, dialogOptions: e }) {
          let a = "";
          (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
            .defaultPath || (e.defaultPath = y({}));
          const {
            canceled: n,
            filePaths: i,
            bookmark: s,
          } = await r.dialog.showOpenDialog(r.getCurrentWindow(), e);
          if (n) return null;
          if (
            ((a = i[0]),
            i.length > 0 && s && (await c.Z.bindBookmark({ fp: a, bookmark: s })),
            "string" == typeof t)
          ) {
            let e = t.replace(/[\\/]/g, "");
            0, (a = o().join(a, e));
          }
          return (
            l.Z.existsSync(a) || l.Z.ensureDir(a),
            a && (0, h.km)().setLastSaveDirectory(a),
            a
          );
        }
        function y(
          { doc: t = null, oldDoc: e = null, suggestedName: a = null },
          n = null,
        ) {
          let i, s;
          if (
            (!i && a && (i = (0, p.N6)(a.toString())),
            !i &&
              t &&
              t.title &&
              t.source &&
              !t.source.startsWith("new://") &&
              (i = (0, p.N6)(t.title.toString())),
            !i &&
              e &&
              e.title &&
              e.source &&
              !e.source.startsWith("new://") &&
              (i = (0, p.N6)(e.title.toString())),
            i && Array.isArray(n))
          ) {
            const t = n[0] && n[0].extensions;
            Array.isArray(t) && t.length > 0 && (i = `${i}.${t[0]}`);
          }
          if (!s && e && e.source && e.source.startsWith("file://")) {
            let t = e.source.slice(7);
            0, (s = o().dirname(t));
          }
          if (
            (!s &&
              (0, h.km)().lastSaveDirectory &&
              (s = (0, h.km)().lastSaveDirectory),
            !s)
          )
            try {
              s = r.app.getPath("documents");
            } catch (t) {
              f.info(t);
            }
          return s && i ? o().join(s, i) : s || i;
        }
        async function b(t) {
          t.$withUIKit((e) => {
            const a = `\n        <button\n        class="uk-button uk-button-text uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${t.$T(
              "OK",
            )}\n        </button>\n        </div>`;
            e.toast({
              message: t.$T(
                "The map style has been updated for your current version of Xmind.",
              ),
              pos: "bottom-center",
              timeout: 5e3,
              btn: a,
              style: { width: "500px", height: "auto", padding: "10px 20px" },
              btnClick: e.toast.clearAll(),
            });
          });
        }
        async function v(t) {
          const e = (t = "function" != typeof t ? (t) => t : t)("OK"),
            a = t("Get Latest Version"),
            n = [e, a],
            [o] = await g({
              title: "Xmind",
              message: t(
                "The map style in this file might vary since it was created in a newer version of Xmind.",
              ),
              detail: t(
                "You can continue to open the file or update to the latest version for better compatibility.",
              ),
              buttons: n,
              defaultId: n.indexOf(a),
              cancelId: n.indexOf(e),
              noLink: !0,
            });
          o === n.indexOf(a) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
        }
        async function C(t) {
          if (((t = "function" != typeof t ? (t) => t : t), m.zr))
            return await g({
              title: "Xmind",
              message: t("Failed to Open File"),
              detail: t(
                "The file was created with a newer version of Xmind. Please contact your corporate administrator for the latest update.",
              ),
              buttons: [t("Done")],
              defaultId: 0,
              noLink: !0,
            });
          const e = t("Cancel"),
            a = t("Get Latest Version"),
            n = [a, e],
            [o] = await g({
              title: "Xmind",
              message: t("Failed to Open File"),
              detail: t(
                "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
              ),
              buttons: n,
              defaultId: n.indexOf(a),
              cancelId: n.indexOf(e),
              noLink: !0,
            });
          o === n.indexOf(a) && u.ZP.fetch(d.lf.GO_DOWNLOAD);
        }
        async function S(t) {
          const e = (t = "function" != typeof t ? (t) => t : t)("Save"),
            a = t("Save as"),
            n = t("Cancel"),
            o = [];
          o.push(e, n, a);
          let [r] = await g({
            type: "none",
            title: "Xmind",
            message: t("Saving file from Xmind"),
            detail: t(
              "Once you save the file, it cannot be opened normally in older versions like $1.",
              "Xmind 22.11",
            ),
            buttons: o,
            defaultId: o.indexOf(a),
            cancelId: o.indexOf(n),
            noLink: !0,
          });
          const i = r === o.indexOf(e),
            s = r === o.indexOf(a);
          return { toSave: i, toSaveAs: s, toCancel: !i && !s };
        }
        async function _(t) {
          const e = (t = "function" != typeof t ? (t) => t : t)("Fix ＆ Open"),
            a = t("Cancel"),
            n = [e, a],
            [o] = await g({
              title: "Xmind",
              message: t("Failed to Open File"),
              detail: t(
                "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
              ),
              buttons: n,
              defaultId: n.indexOf(e),
              cancelId: n.indexOf(a),
              noLink: !0,
            });
          return { toFix: o === n.indexOf(e), toCancel: o === n.indexOf(a) };
        }
      },
      33394: (t, e, a) => {
        "use strict";
        a.d(e, { Z: () => m });
        var n = a(57147),
          o = a.n(n),
          r = a(71017),
          i = a.n(r),
          s = a(73837),
          c = a(86633),
          l = a(16704),
          u = a(56222);
        const d = (0, c.ZP)("renderer:fs");
        async function p(t) {
          return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", t);
        }
        async function h(t) {
          return (0, u.A)("RELEASE_READ_WRITE_ACCESS", t);
        }
        const m = {
          read: async function (t) {
            if (!i().isAbsolute(t)) throw new Error("Must be an absolute path.");
            const e = await (async function (t) {
              return (0, u.A)("OBTAIN_READ_LOCK", t);
            })(t);
            try {
              return await (0, s.promisify)(o().readFile)(t);
            } catch (e) {
              d.error(`path(${t}) read error: ${(0, l.SC)(e)}`);
              try {
                if (!(await p(t))) throw new Error(`No access to '${t}'`);
                return await (0, s.promisify)(o().readFile)(t);
              } catch (t) {
                throw t;
              } finally {
                await h(t);
              }
            } finally {
              await (async function (t) {
                return (0, u.A)("RELEASE_READ_LOCK", t);
              })(e);
            }
          },
          write: async function (t, e) {
            if (!i().isAbsolute(t)) throw new Error("Must be an absolute path.");
            const a = await (async function (t) {
              return (0, u.A)("OBTAIN_WRITE_LOCK", t);
            })(t);
            try {
              return await (0, s.promisify)(o().writeFile)(t, e);
            } catch (a) {
              d.error(`path(${t}) write error: ${(0, l.SC)(a)}`);
              try {
                if (!(await p(t))) throw new Error(`No access to '${t}'`);
                return await (0, s.promisify)(o().writeFile)(t, e);
              } catch (t) {
                throw t;
              } finally {
                await h(t);
              }
            } finally {
              await (async function (t) {
                return (0, u.A)("RELEASE_WRITE_LOCK", t);
              })(a);
            }
          },
          bindBookmark: async function ({ fp: t, bookmark: e } = {}) {
            return (0, u.A)("BIND_BOOKMARK", { fp: t, bookmark: e });
          },
          hasRWAccess: async function (t) {
            return (0, u.A)("HAS_READ_WRITE_ACCESS", t);
          },
          obtainRWAccessFromOS: p,
          releaseRWAccessFromOS: h,
        };
      },
      95246: (t, e, a) => {
        "use strict";
        a.d(e, {
          RS: () => d,
          lF: () => p,
          gP: () => f,
          sF: () => u,
          GI: () => h,
          Ni: () => m,
          mi: () => b,
          QC: () => g,
          Sr: () => x,
          yB: () => y,
          SX: () => w,
          RL: () => k,
        });
        a(13382), a(81296), a(90435), a(54856), a(71017);
        var n = a(72298),
          o = a(67657),
          r = (a(92636), a(41809));
        require("posthtml");
        var i = a(97234),
          s = a(26601),
          c = a(92870);
        const l = { cache: !1 },
          u = (t) => {
            const e = (t) => parseInt(t, 16);
            if (
              "string" == typeof (t = (0, i.Z)(t).toHexString()) &&
              /^#[A-Z0-9]{6}$/.test(t.toUpperCase())
            ) {
              return (
                0.2126 * e(t.slice(1, 3)) +
                0.7152 * e(t.slice(3, 5)) +
                0.0722 * e(t.slice(5))
              );
            }
            return 0;
          },
          d = (t = {}) => {
            const e = Object.assign({}, l, t);
            let a = null;
            const n = {};
            return function (t = "", o = "") {
              if (e.cache && n[t]) return n[t];
              a || (a = document.createElement("canvas"));
              const r = a.getContext("2d");
              r.font = o;
              const i = r.measureText(t);
              return e.cache && (n[t] = i.width), i.width;
            };
          };
        const p = (t, e = 1) => {
          const a = (function () {
              const t = o.screen.getAllDisplays().map((t) => t.scaleFactor);
              return Math.max.apply(null, t);
            })(),
            n = (0, r.Hv)(t, 72 * a * e);
          return Buffer.from(n.slice(22), "base64");
        };
        function h(t) {
          let e = parseInt(t);
          return Number.isInteger(e) ? e : 100;
        }
        function m(t) {
          return `${parseInt(t)}%`;
        }
        const f = (function () {
          let t = null;
          return function () {
            if (!t)
              if (window.screen.deviceXDPI && window.screen.deviceYDPI)
                t = { x: window.screen.deviceXDPI, y: window.screen.deviceYDPI };
              else {
                const e = document.createElement("div");
                (e.style.cssText =
                  "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden"),
                  document.body.appendChild(e),
                  (t = {
                    x: parseInt(e.offsetWidth),
                    y: parseInt(e.offsetHeight),
                  }),
                  e.parentNode.removeChild(e);
              }
            return t;
          };
        })();
        function k(t, e) {
          let a = (0, c.f7)().keybindingByCommandIdAndGroup(e);
          const n = [];
          return (
            "string" == typeof a &&
              a.split("+").forEach((t) => {
                let e = t;
                "=" === e && (e = "+"), e && n.push(e);
              }),
            n.length > 0 ? `${t} ${n.join(" ")}` : t
          );
        }
        const g = (t, e) => {
            o.getCurrentWindow().setSize(t, e);
          },
          x = (t) => {
            const e = (t, ...e) => (0, c.JE)().T(t, ...e),
              a = o.Menu,
              r = o.MenuItem,
              i = new a();
            setTimeout(() => {
              const a = document.getSelection().toString(),
                s = n.clipboard.readText();
              i.append(
                new r({
                  label: e("Cut"),
                  enabled: Boolean(a),
                  click: () => document.execCommand("cut"),
                }),
              ),
                i.append(
                  new r({
                    label: e("Copy"),
                    enabled: Boolean(a),
                    click: () => document.execCommand("copy"),
                  }),
                ),
                i.append(
                  new r({
                    label: e("Paste"),
                    enabled: Boolean(s),
                    click: () => document.execCommand("paste"),
                  }),
                ),
                i.append(new r({ type: "separator" })),
                i.append(
                  new r({
                    label: e("Select All"),
                    enabled: Boolean(t),
                    click: () => document.execCommand("selectAll"),
                  }),
                ),
                i.popup({ window: o.getCurrentWindow() });
            }, 50);
          };
        async function w() {
          await new Promise((t) =>
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                requestIdleCallback(t);
              });
            }),
          );
        }
        const y = (t, e) => s.Z.test({ width: t, height: e, sizes: [t, e] }),
          b = async (t, e, a = 1) => {
            if (y(t * a, e * a)) return a;
            const n = await s.Z.maxWidth({ usePromise: !0 }),
              o = await s.Z.maxHeight({ usePromise: !0 }),
              r = await s.Z.maxArea({ usePromise: !0 }),
              i = n.width,
              c = o.height,
              l = r.width * r.height;
            let u = a;
            if (t * a > i) {
              const e = i / t;
              u = Math.min(u, e);
            }
            if (e * a > c) {
              const t = c / e;
              u = Math.min(u, t);
            }
            if (t * a * e * a > l) {
              const a = Math.sqrt(l / (t * e));
              u = Math.min(u, a);
            }
            return u;
          };
      },
      72917: (t, e, a) => {
        "use strict";
        a.d(e, { Z: () => i });
        var n = a(2954),
          o = a(92870);
        const r = (0, n.aZ)({
          props: {
            value: { type: Boolean, default: !1 },
            textStyle: { type: String, default: "" },
          },
          setup(t, e) {
            const a = (0, n.Fl)(() => true);
            return {
              handleWatermarkClick: (t) => {
                return true;
              },
              handleWatermarkChange: (t) => {
                e.emit("toggle", t.target.checked);
              },
            };
          },
        });
        const i = (0, a(51900).Z)(
          r,
          function () {
            var t = this,
              e = t._self._c;
            t._self._setupProxy;
            return e("div", { staticClass: "uk-form-controls" }, [
              e("label", { on: { click: t.handleWatermarkClick } }, [
                e("input", {
                  staticClass: "uk-checkbox",
                  attrs: { type: "checkbox" },
                  domProps: { checked: false },
                  on: { change: t.handleWatermarkChange },
                }),
                t._v(" "),
                e("span", { style: t.textStyle }, [
                  t._v(t._s(t.$T('Show "Presented with xmind"'))),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports;
      },
      47749: (t, e, a) => {
        var n = a(95948);
        n.__esModule && (n = n.default),
          "string" == typeof n && (n = [[t.id, n, ""]]),
          n.locals && (t.exports = n.locals);
        (0, a(45346).Z)("3b1f3d77", n, !0, {});
      },
      6113: (t) => {
        "use strict";
        t.exports = require("crypto");
      },
      72298: (t) => {
        "use strict";
        t.exports = require("electron");
      },
      82361: (t) => {
        "use strict";
        t.exports = require("events");
      },
      57147: (t) => {
        "use strict";
        t.exports = require("fs");
      },
      22037: (t) => {
        "use strict";
        t.exports = require("os");
      },
      71017: (t) => {
        "use strict";
        t.exports = require("path");
      },
      63477: (t) => {
        "use strict";
        t.exports = require("querystring");
      },
      57310: (t) => {
        "use strict";
        t.exports = require("url");
      },
      73837: (t) => {
        "use strict";
        t.exports = require("util");
      },
    },
    (t) => {
      t.O(0, [6620, 1505], () => {
        return (e = 2642), t((t.s = e));
        var e;
      });
      var e = t.O();
      module.exports = e;
    },
  ]);
  