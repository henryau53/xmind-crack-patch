(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
    [2443],
    {
      27192: (t, e, s) => {
        "use strict";
        s.r(e), s.d(e, { default: () => n });
        var i = s(23645),
          a = s.n(i)()(function (t) {
            return t[1];
          });
        a.push([
          t.id,
          ".uk-button-grey-link[data-v-216610c3] {\n  text-decoration: none;\n}\n.version-text[data-v-216610c3],\n.copyright-text[data-v-216610c3],\n.policy-text[data-v-216610c3] {\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 400;\n}\n.edition-text[data-v-216610c3] {\n  font-size: 13px;\n  line-height: 19px;\n  font-weight: 500;\n}\n.subscribed-text[data-v-216610c3] {\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: -0.08px;\n}\n.about-beta-btn[data-v-216610c3] {\n  padding: 0 4px;\n  background: #e8e8e8;\n  border-radius: 4px;\n}\nhtml[color-scheme='dark'] .about-beta-btn[data-v-216610c3] {\n  background: #2d2f31;\n}\n",
          "",
        ]);
        const n = a;
      },
      40334: (t, e, s) => {
        "use strict";
        s.d(e, { Z: () => c });
        var i = s(92636),
          a = s(54856),
          n = s(16704),
          o = s(92870),
          r = s(90435);
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
                let s = this._touchBarRoutes[e];
                return (
                  s ||
                    ((s = {
                      method: e,
                      endpoint: (0, a.A6)(window.id, (0, n.rs)(e)),
                    }),
                    (this._touchBarRoutes[e] = s)),
                  s.unroute || (s.unroute = r.ZP.route(s.endpoint, this[e])),
                  Object.assign({}, t, { click: s.endpoint })
                );
              };
              (t = (t || this.touchBarItems || []).map(
                (t) => (
                  "button" !== t.type ||
                  "string" != typeof t.click ||
                  i.sq.includes(t.click) ||
                  t.click.startsWith("command:")
                    ? "buttons" === t.type &&
                      (t = {
                        ...t,
                        buttons: t.buttons.map((t) =>
                          "string" != typeof t.click ||
                          i.sq.includes(t.click) ||
                          t.click.startsWith("command:")
                            ? t
                            : e(t),
                        ),
                      })
                    : (t = e(t)),
                  t
                ),
              )),
                (0, o.JS)("window")?.().updateTouchBarItems(t);
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
      63481: (t, e, s) => {
        "use strict";
        s.r(e);
        var i = s(51505),
          a = s(71017),
          n = s.n(a),
          o = s(72298),
          r = s(36625),
          c = s.n(r),
          u = s(77412),
          l = s(92636),
          d = s(54856),
          p = s(92870),
          g = s(90435),
          m = s(7104),
          b = s(69931),
          h = s(79409),
          x = s(40334);
        (async () => {
          const t = document.createElement("style"),
            e = `data:font/ttf;base64,${(
              await (0, b.zD)(
                "static/snowbird/resource/fonts/files/NeverMind-DemiBold.ttf",
              )
            ).toString("base64")}`;
          (t.innerHTML = `\n@font-face {\n  font-family: 'Nevermind';\n  src: url("${e}");\n  font-weight: 400;\n  font-style: normal;\n}\n`),
            document.body.appendChild(t);
        })();
        const v = {
          mixins: [x.Z],
          data: () => ({ isMAS: !1, buildNumber: "", isBetaVersion: !1 }),
          computed: {
            ...(0, u.rn)(p.Yh, {
              activationStatus: (t) => t.status,
              subscriptionData: (t) => t.subscriptionData,
              subscriptionStatus: (t) => t.subscriptionStatus,
              perMachineLicenseStatus: (t) => t.perMachineLicenseStatus,
              perMachineLicenseData: (t) => t.perMachineLicenseData,
              isActivationStatusValid: (t) => t.isStatusValid,
            }),
            primaryEmail: () => (0, p.c7)().primaryEmail,
            groupName: () => (0, p.c7)().groupName,
            activateButtonText() {
              return l.nd || this.activationStatus === l.wi.VALID
                ? null
                : this.$T("Upgrade to Pro");
            },
            proURL() {
              return this.$toResourceURL(
                "static/assets/images/pro/about-pro.svg",
              );
            },
            activateLogoURL() {
              return this.$toResourceURL(
                this.activationStatus === l.wi.VALID && this.subscribedTimeText
                  ? "static/assets/images/about-dialog-activate-logo.png"
                  : "static/assets/images/about-dialog-logo.png",
              );
            },
            activateHDLogoURL() {
              return this.activationStatus === l.wi.VALID &&
                this.subscribedTimeText
                ? `${this.$toResourceURL(
                    "static/assets/images/about-dialog-activate-logo.png",
                  )} 1x, ${this.$toResourceURL(
                    "static/assets/images/about-dialog-activate-logo@2x.png",
                  )} 2x, ${this.$toResourceURL(
                    "static/assets/images/about-dialog-activate-logo@3x.png",
                  )} 3x`
                : `${this.$toResourceURL(
                    "static/assets/images/about-dialog-logo.png",
                  )} 1x, ${this.$toResourceURL(
                    "static/assets/images/about-dialog-logo@2x.png",
                  )} 2x, ${this.$toResourceURL(
                    "static/assets/images/about-dialog-logo@3x.png",
                  )} 3x`;
            },
            editionText() {
              return l.sv || l.zr
                ? l.sv
                  ? this.$T("Small & Medium Enterprises License")
                  : this.$T("Volume License Edition")
                : null;
            },
            versionMarginBottom() {
              return this.licenseeText
                ? "margin-bottom: 12px"
                : this.activateButtonText
                ? "margin-bottom: 20px"
                : "margin-bottom: 32px";
            },
            licenseeText() {
              return this.subscriptionStatus === l.wi.VALID && this.primarEmail
                ? this.primarEmail
                : "";
            },
            subscribedTimeText() {
              return this.subscriptionData?.ss;
            },
            touchBarItems() {
              return [
                { type: "space", size: "flexible" },
                { type: "button", label: this.$T("Close"), click: "close" },
                this.activateButtonText
                  ? {
                      type: "button",
                      label: this.activateButtonText,
                      backgroundColor: "primary",
                      click: "activateNow",
                    }
                  : null,
                { type: "space", size: "flexible" },
                {
                  type: "button",
                  label: this.$T("Acknowledgments"),
                  click: "openAcknowledgments",
                },
                {
                  type: "button",
                  label: this.$T("License Agreement"),
                  click: "openLicenseAgreement",
                },
                { type: "space", size: "flexible" },
              ].filter(Boolean);
            },
            showCheckUpdateIcon() {
              this.isMAS;
              return l.zr, !1;
            },
          },
          mounted() {
            this.$safeRun(() => {
              (this.buildNumber = this.formatBuildNumber(
                (0, h.Z)("version") || "",
              )),
                (this.isBetaVersion = (0, h.Z)("version").includes("beta"));
            });
          },
          methods: {
            formatBuildNumber: (t = "") =>
              `${c().major(t, { loose: !0 })}.${c()
                .minor(t, { loose: !0 })
                .toString()
                .padStart(2, "0")}.${c()
                .patch(t, { loose: !0 })
                .toString()
                .padStart(5, "0")}`,
            activateNow: () => g.ZP.fetch(d.Fx, { name: "dialog-activate" }),
            openAcknowledgments() {
              o.shell.openPath(this.getAcknowledgmentsPath());
            },
            openLicenseAgreement() {
              o.shell.openPath(this.getLicenseAgreementPath());
            },
            openDialogAutoUpdater() {
              (0, p.JX)().handleCommand("checkForUpdates", { isFromMenu: !0 });
            },
            getAcknowledgmentsPath: () =>
              n().join(
                (0, m.bY)(),
                "../app.asar.unpacked/static/license/Acknowledgments.pdf",
              ),
            getLicenseAgreementPath() {
              const t =
                "zh-CN" === (0, p.S)().language ? "license-cn" : "license";
              return n().join(
                (0, m.bY)(),
                "../app.asar.unpacked/static/license",
                `${t}.pdf`,
              );
            },
          },
          components: {
            TermsAndPrivacyTemplate: {
              render(t) {
                const e = this.$T("terms of service"),
                  s = this.$T("privacy policy"),
                  i = this.$T(
                    "We care about your privacy, follow the link to $1 and $2.",
                    e,
                    s,
                  ),
                  a = t(
                    "a",
                    {
                      attrs: {
                        draggable: "false",
                        href: this.isMAS
                          ? "xos://GO_TERMS_MAS"
                          : "xos://GO_TERMS",
                        target: "_blank",
                      },
                    },
                    e,
                  ),
                  n = t(
                    "a",
                    {
                      attrs: {
                        draggable: "false",
                        href: this.isMAS
                          ? "xos://GO_PRIVACY_MAS"
                          : "xos://GO_PRIVACY",
                        target: "_blank",
                      },
                    },
                    s,
                  ),
                  o = t("br"),
                  r = i.split(e)[0],
                  c = i.split(e)[1].split(s);
                return t(
                  "div",
                  { class: "policy-text uk-text-muted uk-text-center" },
                  [r, o, a, c[0], n, c[1]],
                );
              },
            },
          },
        };
        s(13928);
        const k = (0, s(51900).Z)(
          v,
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              { staticClass: "uk-window uk-window-dialog", attrs: { id: "app" } },
              [
                e(
                  "div",
                  {
                    staticClass:
                      "uk-window-title-bar uk-window-title-bar-floating uk-position-z-index uk-position-relative",
                  },
                  [e("window-control-button-group")],
                  1,
                ),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "uk-window-body uk-flex uk-flex-column uk-flex-middle uk-flex-between uk-flex-center uk-position-relative uk-overflow-hidden",
                    staticStyle: { padding: "24px 20px 20px" },
                  },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "uk-panel uk-flex uk-flex-column uk-position-relative uk-position-z-index",
                      },
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "uk-padding-small uk-padding-remove-vertical uk-text-center",
                            staticStyle: { "margin-top": "10px" },
                          },
                          [
                            e("div", {
                              staticClass:
                                "uk-preserve uk-margin-small-bottom uk-background-cover",
                              staticStyle: {
                                width: "48px",
                                height: "48px",
                                display: "inline-block",
                              },
                              attrs: {
                                "uk-img": "",
                                draggable: "false",
                                "data-src": t.activateLogoURL,
                                "data-srcset": t.activateHDLogoURL,
                              },
                            }),
                            t._v(" "),
                            e("br"),
                            t._v(" "),
                            e("img", {
                              staticClass: "uk-margin-small-bottom",
                              staticStyle: {
                                width: "115px",
                                height: "31px",
                                color: "var(--uk-global-color, #27292a)",
                              },
                              attrs: {
                                draggable: "false",
                                "uk-svg": "",
                                "data-src": t.$toResourceURL(
                                  "static/assets/images/about-dialog-logo-text.svg",
                                ),
                              },
                            }),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "version-text uk-text-muted uk-margin-small-top uk-flex uk-flex-middle uk-flex-center",
                                style: t.versionMarginBottom,
                              },
                              [
                                e(
                                  "span",
                                  { staticStyle: { "margin-right": "4px" } },
                                  [
                                    e("span", [
                                      t._v(
                                        t._s(t.$T("Version")) +
                                          " " +
                                          t._s(t.buildNumber),
                                      ),
                                    ]),
                                    t._v(" "),
                                    t.isBetaVersion
                                      ? e(
                                          "span",
                                          { staticClass: "about-beta-btn" },
                                          [t._v(t._s("Beta"))],
                                        )
                                      : t._e(),
                                  ],
                                ),
                                t._v(" "),
                                t.showCheckUpdateIcon
                                  ? e("span", {
                                      staticClass: "uk-button-tile uk-text-muted",
                                      attrs: {
                                        "uk-svg": "",
                                        "data-src": t.$toResourceURL(
                                          "static/assets/images/about-dialog-check-update.svg",
                                        ),
                                      },
                                      on: { click: t.openDialogAutoUpdater },
                                    })
                                  : t._e(),
                              ],
                            ),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "uk-flex uk-flex-center uk-flex-middle",
                              },
                              [
                                t.isActivationStatusValid
                                  ? e("div", {
                                      staticClass: "uk-preserve",
                                      staticStyle: { "margin-top": "-1px" },
                                      attrs: {
                                        "uk-svg": "",
                                        draggable: "false",
                                        "data-src": t.proURL,
                                      },
                                    })
                                  : t._e(),
                                t._v(" "),
                                t.groupName
                                  ? e(
                                      "div",
                                      {
                                        staticClass:
                                          "subscribed-text uk-text-center",
                                        staticStyle: { "margin-left": "6px" },
                                        style: t.activateButtonText && {
                                          marginBottom: "8px",
                                        },
                                      },
                                      [e("span", [t._v(t._s(t.groupName))])],
                                    )
                                  : [
                                      t.subscribedTimeText
                                        ? e(
                                            "div",
                                            {
                                              staticClass:
                                                "subscribed-text uk-text-center uk-flex uk-flex-center uk-flex-middle",
                                              staticStyle: {
                                                "margin-left": "6px",
                                              },
                                            },
                                            [
                                              e("span", [
                                                t._v(t._s(t.$T("Since"))),
                                              ]),
                                              t._v(" "),
                                              e(
                                                "span",
                                                {
                                                  staticClass:
                                                    "uk-margin-xsmall-left",
                                                },
                                                [
                                                  t._v(
                                                    "\n                " +
                                                      t._s(t.subscribedTimeText) +
                                                      "\n              ",
                                                  ),
                                                ],
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                    ],
                              ],
                              2,
                            ),
                            t._v(" "),
                            t.licenseeText
                              ? e(
                                  "div",
                                  {
                                    staticClass: "uk-margin-small-bottom",
                                    staticStyle: { "font-size": "12px" },
                                  },
                                  [
                                    t.editionText
                                      ? e(
                                          "span",
                                          { staticClass: "edition-text" },
                                          [
                                            t._v(
                                              "\n            " +
                                                t._s(t.editionText) +
                                                "\n          ",
                                            ),
                                          ],
                                        )
                                      : t._e(),
                                    t._v(" "),
                                    t.editionText ? e("br") : t._e(),
                                    t._v(" "),
                                    e(
                                      "span",
                                      {
                                        staticClass: "uk-text-muted",
                                        staticStyle: { "line-height": "1" },
                                      },
                                      [t._v(t._s(t.licenseeText))],
                                    ),
                                  ],
                                )
                              : t._e(),
                            t._v(" "),
                            e("div", { staticClass: "uk-button-group" }, [
                              t.activateButtonText
                                ? e(
                                    "button",
                                    {
                                      staticClass: "uk-button uk-button-default",
                                      attrs: { type: "button" },
                                      on: { click: t.activateNow },
                                    },
                                    [
                                      t._v(
                                        "\n            " +
                                          t._s(t.activateButtonText) +
                                          "\n          ",
                                      ),
                                    ],
                                  )
                                : t._e(),
                            ]),
                          ],
                        ),
                      ],
                    ),
                    t._v(" "),
                    e(
                      "div",
                      [
                        e(
                          "div",
                          {
                            staticClass:
                              "copyright-text uk-padding-small uk-padding-remove-bottom uk-text-muted uk-text-center",
                            staticStyle: { "margin-bottom": "8px" },
                          },
                          [t._v("\n        © 2006 - 2023 XMIND LTD.\n      ")],
                        ),
                        t._v(" "),
                        e("TermsAndPrivacyTemplate"),
                      ],
                      1,
                    ),
                  ],
                ),
                t._v(" "),
                e("hr", { staticStyle: { margin: "0 auto", width: "312px" } }),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass:
                      "uk-padding-remove-vertical uk-padding-large uk-window-button-bar uk-flex-center",
                    staticStyle: {
                      "border-color": "rgba(232, 232, 232, 0.12)",
                      "min-height": "52px",
                    },
                  },
                  [
                    e("div", { staticClass: "uk-button-group" }, [
                      e(
                        "button",
                        {
                          staticClass:
                            "uk-button uk-button-text uk-margin-small-right uk-button-grey-link",
                          attrs: { type: "button" },
                          on: { click: t.openAcknowledgments },
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$T("Acknowledgments")) +
                              "\n      ",
                          ),
                        ],
                      ),
                      t._v(" "),
                      e(
                        "button",
                        {
                          staticClass:
                            "uk-button uk-button-text uk-button-grey-link",
                          attrs: { type: "button" },
                          on: { click: t.openLicenseAgreement },
                        },
                        [
                          t._v(
                            "\n        " +
                              t._s(t.$T("License Agreement")) +
                              "\n      ",
                          ),
                        ],
                      ),
                    ]),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          "216610c3",
          null,
        ).exports;
        (0, i.Z)(k, { name: "about" });
      },
      13928: (t, e, s) => {
        var i = s(27192);
        i.__esModule && (i = i.default),
          "string" == typeof i && (i = [[t.id, i, ""]]),
          i.locals && (t.exports = i.locals);
        (0, s(45346).Z)("76cf9ebf", i, !0, {});
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
      t.O(0, [4990, 1505], () => {
        return (e = 63481), t((t.s = e));
        var e;
      });
      var e = t.O();
      module.exports = e;
    },
  ]);
  