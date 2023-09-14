(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
    [1363],
    {
      78933: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, { default: () => i });
        var n = a(23645),
          o = a.n(n)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".map-shot-border[data-v-0c88a99b],\n.map-shot-frame[data-v-0c88a99b],\n[class*='map-shot-handler'][data-v-0c88a99b] {\n  border: 2px solid #5499f5;\n}\n.map-shot-frame.map-shot-frame-taking-shot[data-v-0c88a99b] {\n  border-color: transparent;\n}\n.map-shot-frame.map-shot-frame-taking-shot [class*='map-shot-handler'][data-v-0c88a99b] {\n  display: none;\n}\n.map-shot-frame-display-size[data-v-0c88a99b] {\n  color: #fff;\n  font-size: 13px;\n  position: absolute;\n  left: 0;\n  line-height: 1em;\n  bottom: calc(100% + 8px);\n  white-space: nowrap;\n}\n[class*='map-shot-handler'][data-v-0c88a99b] {\n  position: absolute;\n  background-color: #fff;\n  width: 6px;\n  height: 6px;\n}\n.map-shot-handler-right[data-v-0c88a99b] {\n  right: -6px;\n  top: calc((100% - 10px) / 2);\n  cursor: ew-resize;\n}\n.map-shot-handler-left[data-v-0c88a99b] {\n  left: -6px;\n  top: calc((100% - 10px) / 2);\n  cursor: ew-resize;\n}\n.map-shot-handler-bottom[data-v-0c88a99b] {\n  bottom: -6px;\n  left: calc((100% - 10px) / 2);\n  cursor: ns-resize;\n}\n.map-shot-handler-top[data-v-0c88a99b] {\n  top: -6px;\n  left: calc((100% - 10px) / 2);\n  cursor: ns-resize;\n}\n.map-shot-handler-right-bottom[data-v-0c88a99b] {\n  right: -6px;\n  bottom: -6px;\n  cursor: nwse-resize;\n}\n.map-shot-handler-right-top[data-v-0c88a99b] {\n  right: -6px;\n  top: -6px;\n  cursor: nesw-resize;\n}\n.map-shot-handler-left-bottom[data-v-0c88a99b] {\n  left: -6px;\n  bottom: -6px;\n  cursor: nesw-resize;\n}\n.map-shot-handler-left-top[data-v-0c88a99b] {\n  left: -6px;\n  top: -6px;\n  cursor: nwse-resize;\n}\n#tool-bar[data-v-0c88a99b] {\n  position: absolute;\n  display: flex;\n}\n#tool-bar .btn[data-v-0c88a99b] {\n  height: 28px;\n  white-space: nowrap;\n}\n#tool-bar .btn-icon[data-v-0c88a99b] {\n  width: 42px;\n  line-height: 25px;\n}\n#tool-bar .btn-segment[data-v-0c88a99b] {\n  padding-left: 8px;\n  padding-right: 23px;\n  background-position: right 8px top 50%;\n}\n.folder[data-v-0c88a99b] {\n  background: #ffffff;\n  transition-timing-function: ease-in;\n  transition: 0.2s;\n}\n",
          "",
        ]);
        const i = o;
      },
      75126: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, { default: () => i });
        var n = a(23645),
          o = a.n(n)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          "#map-shot-modal[data-v-5fb0b975] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n@keyframes springish-5fb0b975 {\n0.00% {\n    transform: scale(0.9);\n    opacity: 0.3;\n}\n40% {\n    transform: scale(1.1106);\n    opacity: 1;\n}\n80% {\n    transform: scale(0.9591);\n    opacity: 1;\n}\n100.00% {\n    transform: scale(1);\n    opacity: 1;\n}\n}\n.springish[data-v-5fb0b975] {\n  animation: springish-5fb0b975;\n  animation-duration: 0.5s;\n  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\n}\n.activation-text[data-v-5fb0b975] {\n  margin-top: 8px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 14px;\n  letter-spacing: 0.07px;\n}\n.uk-lang-ru-RU .map-shot-save-btn[data-v-5fb0b975] {\n  padding: 4px 18px;\n  line-height: 14px;\n}\n",
          "",
        ]);
        const i = o;
      },
      70403: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, { default: () => i });
        var n = a(23645),
          o = a.n(n)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".uk-animation-duration-500ms[data-v-d6a50b24] {\n  animation-duration: 0.5s !important;\n}\n",
          "",
        ]);
        const i = o;
      },
      23645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var a = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(a, "}") : a;
              }).join("");
            }),
            (t.i = function (e, a, n) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (n)
                for (var i = 0; i < this.length; i++) {
                  var l = this[i][0];
                  null != l && (o[l] = !0);
                }
              for (var r = 0; r < e.length; r++) {
                var s = [].concat(e[r]);
                (n && o[s[0]]) ||
                  (a &&
                    (s[2]
                      ? (s[2] = "".concat(a, " and ").concat(s[2]))
                      : (s[2] = a)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      78198: (e, t, a) => {
        "use strict";
        a.d(t, {
          Y1: () => i,
          ZP: () => o,
          d_: () => l,
          lY: () => r,
          sC: () => s,
        });
        const n = [500, 400, 300, 200, 150, 120, 100, 80, 50, 20, 10],
          o = n,
          i = n[0],
          l = n[n.length - 1];
        function r(e) {
          let t = n[n.length - 1];
          for (let a = n.length - 2; a >= 0 && !(n[a] >= e); a--) t = n[a];
          return t;
        }
        function s(e) {
          let t = n[0];
          for (let a = 1; a < n.length && !(n[a] <= e); a++) t = n[a];
          return t;
        }
      },
      14025: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => o });
        const n = {
          name: "ColorWall",
          props: {
            gridOptions: { type: Array, default: () => [] },
            value: { type: String, default: "" },
          },
          data() {
            return { internalValue: this.normalizeValue(this.value) };
          },
          computed: {
            computedGridOptions() {
              const e = new Set();
              return this.gridOptions
                .map((e) =>
                  "string" == typeof e
                    ? { value: this.normalizeValue(e) }
                    : Object.assign({}, e, {
                        value: this.normalizeValue(e && e.value),
                      }),
                )
                .filter(({ value: t }) => !e.has(t) && (e.add(t), !0));
            },
          },
          watch: {
            value(e) {
              this.internalValue = this.normalizeValue(e);
            },
          },
          methods: {
            normalizeValue: (e) =>
              e && /#[0-9a-f]{6}/i.test(e) ? e.toUpperCase() : e,
            handleClickInsideColorPicker({ target: e }) {
              (e = this.getButton(e)) &&
                e.hasAttribute("value") &&
                ((this.internalValue = this.normalizeValue(
                  e.getAttribute("value"),
                )),
                this.$emit("input", this.internalValue));
            },
            getButton(e) {
              for (; e && e.classList; ) {
                if (e.classList.contains("uk-color-picker-button")) return e;
                e = e.parentNode;
              }
              return null;
            },
          },
        };
        const o = (0, a(51900).Z)(
          n,
          function () {
            var e = this,
              t = e._self._c;
            return t("div", [
              t(
                "ul",
                {
                  staticClass: "uk-color-picker-grid",
                  attrs: {
                    "uk-list-select": "",
                    "uk-traverse": "",
                    "data-item": "li > button:not(:disabled)",
                    "data-columns": "9",
                    "data-cls-active": "false",
                  },
                  on: { click: e.handleClickInsideColorPicker },
                },
                e._l(e.computedGridOptions, function (a, n) {
                  return t("li", { key: "grid@" + n }, [
                    t("button", {
                      ref: "gridButton",
                      refInFor: !0,
                      staticClass: "uk-button uk-color-picker-button",
                      class: {
                        "uk-color-picker-button-selected":
                          e.internalValue === a.value,
                      },
                      style: { "background-color": a.value },
                      attrs: {
                        title: a.label || "",
                        value: a.value,
                        "data-ref": "gridButton",
                      },
                    }),
                  ]);
                }),
                0,
              ),
            ]);
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports;
      },
      59180: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => s });
        var n = a(7836),
          o = a(96829),
          i = a(14025);
        let l = 1;
        const r = {
          name: "ColorWell",
          components: { ColorWall: i.Z, Teleport: n.Z },
          props: {
            name: { type: String, default: "" },
            value: { type: String, default: "" },
            isDisabled: { type: Boolean, default: !1 },
            inputId: { type: String, default: "" },
            popoverPos: { type: String, default: "left-center" },
            popoverOffsetTop: { type: Number, default: 0 },
            popoverOffsetLeft: { type: Number, default: 0 },
            noneValue: { type: String, default: "" },
            dynamicValue: { type: String, default: "inherited" },
            hasDynamic: { type: Boolean, default: !1 },
            intermediateValue: { type: String, default: "intermediate" },
            iconUrl: { type: String, default: null },
            gridOptions: { type: Array, default: () => [] },
            autofocusOnClose: { type: Boolean, default: !1 },
            title: { type: String, default: "" },
            colorValueTooltips: { type: String, default: "" },
            colorOpacityTooltips: { type: String, default: "" },
            colorSelectorTooltips: { type: String, default: "" },
            popoverContainerId: { type: String, default: "body" },
          },
          data() {
            const e = l.toString();
            return (
              l++,
              {
                popoverId: `popover-${(0, o.hb)()}`,
                internalValue: this.normalizeValue(this.value) ?? "",
                internalInputId: `uk_color_well_input_${e}`,
                initValue: "",
              }
            );
          },
          computed: {
            computedInputId() {
              return this.inputId || this.internalInputId;
            },
            computedInputValue() {
              return this.noneValue && this.value === this.noneValue
                ? ""
                : (this.noneValue && this.internalValue === this.noneValue) ||
                  this.internalValue === this.intermediateValue ||
                  this.internalValue === this.dynamicValue
                ? "#000000"
                : this.internalValue || "#000000";
            },
            computedInputColor() {
              return this.iconUrl ||
                (this.noneValue && this.internalValue === this.noneValue) ||
                this.internalValue === this.intermediateValue ||
                this.internalValue === this.dynamicValue
                ? ""
                : this.internalValue;
            },
            computedColorTypeValue() {
              return this.computedInputValue.slice(0, 7);
            },
            computedOpacity() {
              return !this.computedInputValue ||
                this.computedInputValue.length <= 7
                ? "FF"
                : this.computedInputValue.slice(7, 9);
            },
            computedOpacityNumber() {
              return parseInt((parseInt(this.computedOpacity, 16) / 255) * 100);
            },
          },
          watch: {
            value(e) {
              this.internalValue = this.normalizeValue(e);
            },
          },
          methods: {
            handleColorInput(e) {
              (this.internalValue = e + this.computedOpacity),
                this.$emit("input", this.internalValue);
            },
            normalizeValue: (e) =>
              e && /#[0-9a-f]{6}/i.test(e) ? e.toUpperCase() : e,
            handleHexInput(e) {
              let t = e.target.value;
              if (this.value !== this.noneValue || "" !== t) {
                if (((t = t.replace(/^#/, "")), t.length > 6)) t = "FFFFFF";
                else
                  for (
                    t = t.replace(/[^0-9a-f]/gi, "0"),
                      3 === t.length &&
                        (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                    6 !== t.length;
  
                  )
                    t += "0";
                (this.internalValue = "#" + t + this.computedOpacity),
                  this.$emit("input", this.internalValue);
              }
            },
            colorCompletion(e) {
              if (e.length <= 1 || e.length > 7) return e;
              let t = e;
              for (; t.length < 7; ) t += e.slice(-1);
              return t;
            },
            handleOpacityInput(e) {
              let t = parseInt(e.target.value);
              t || 0 === t || (t = 100), t < 0 && (t = 0), t > 100 && (t = 100);
              let a = Math.ceil((t / 100) * 255).toString(16);
              1 === a.length && (a = `0${a}`),
                (this.internalValue =
                  this.colorCompletion(this.computedColorTypeValue) + a),
                this.$emit("input", this.internalValue);
            },
            handleInputClick({ target: e }) {
              e.value = this.computedInputValue;
            },
            close() {
              this.$refs.popover &&
                this.$withUIKit((e) => {
                  e.pop(this.$refs.popover).close();
                });
            },
          },
          mounted() {
            this.$withUIKit((e) => {
              e.util.on(this.$refs.popover, "show", () => {
                (this.initValue = this.internalValue), this.$emit("popover-show");
              }),
                e.util.on(this.$refs.popover, "hidden", () => {
                  this.value !== this.intermediateValue
                    ? (this.initValue.length < this.internalValue.length &&
                        (this.initValue = this.initValue + "FF"),
                      this.internalValue.toUpperCase() !==
                        this.initValue.toUpperCase() &&
                        this.$emit("recent-color-change", this.internalValue),
                      this.$emit("popover-hide"))
                    : this.$emit("popover-hide");
                });
            });
          },
        };
        const s = (0, a(51900).Z)(
          r,
          function () {
            var e = this,
              t = e._self._c;
            return t(
              "div",
              {
                staticClass: "uk-color-well",
                staticStyle: { display: "inline-block" },
              },
              [
                t(
                  "button",
                  {
                    ref: "button",
                    staticClass:
                      "uk-color-well-button uk-button uk-button-default uk-button-compact",
                    class: {
                      "uk-box-shadow-none uk-overflow-hidden": e.isDisabled,
                    },
                    style: !e.isDisabled && {
                      "background-color": e.computedInputColor,
                    },
                    attrs: {
                      id: e.popoverId,
                      type: "button",
                      disabled: e.isDisabled,
                      title: e.title,
                    },
                  },
                  [
                    e.iconUrl
                      ? t("img", {
                          staticClass: "uk-height-1-1",
                          attrs: { "uk-svg": "", src: e.iconUrl, alt: "" },
                        })
                      : e.internalValue === e.noneValue || e.isDisabled
                      ? t("svg", { attrs: { width: "100%", height: "100%" } }, [
                          t("line", {
                            attrs: {
                              x1: "0%",
                              y1: "100%",
                              x2: "100%",
                              y2: "0%",
                              "stroke-dasharray": "2,1",
                              stroke: "currentcolor",
                            },
                          }),
                        ])
                      : e.internalValue === e.dynamicValue && e.hasDynamic
                      ? t("span", { attrs: { width: "100%", height: "100%" } }, [
                          e._v("\n      " + e._s(e.$T("Dynamic")) + "\n    "),
                        ])
                      : e.internalValue === e.intermediateValue
                      ? t("svg", { attrs: { width: "100%", height: "100%" } }, [
                          t("circle", {
                            attrs: {
                              cx: "50%",
                              cy: "50%",
                              r: "2",
                              fill: "currentcolor",
                            },
                          }),
                          e._v(" "),
                          t("circle", {
                            attrs: {
                              cx: "calc(50% - 7px)",
                              cy: "50%",
                              r: "2",
                              fill: "currentcolor",
                            },
                          }),
                          e._v(" "),
                          t("circle", {
                            attrs: {
                              cx: "calc(50% + 7px)",
                              cy: "50%",
                              r: "2",
                              fill: "currentcolor",
                            },
                          }),
                        ])
                      : e._e(),
                  ],
                ),
                e._v(" "),
                t("teleport", { attrs: { to: e.popoverContainerId } }, [
                  t(
                    "div",
                    {
                      ref: "popover",
                      staticClass: "uk-color-well-popover",
                      attrs: {
                        "uk-popover": "",
                        "data-pos": e.popoverPos,
                        "data-offset-top": e.popoverOffsetTop,
                        "data-offset-left": e.popoverOffsetLeft,
                        "data-autofocus-on-close": e.autofocusOnClose
                          ? "true"
                          : "false",
                        "data-target": `#${e.popoverId}`,
                        "data-toggle": `#${e.popoverId}`,
                        "data-sel-close":
                          "> * .uk-color-picker-button, .uk-color-picker-button-trigger",
                      },
                    },
                    [
                      t(
                        "div",
                        { staticClass: "uk-padding-small" },
                        [
                          e._t("header"),
                          e._v(" "),
                          t(
                            "ul",
                            { staticClass: "uk-color-picker" },
                            [
                              e.gridOptions.length > 0
                                ? t(
                                    "li",
                                    [
                                      t("color-wall", {
                                        attrs: {
                                          "grid-options": e.gridOptions,
                                          value: e.value,
                                        },
                                        on: { input: e.handleColorInput },
                                      }),
                                    ],
                                    1,
                                  )
                                : e._e(),
                              e._v(" "),
                              t(
                                "li",
                                {
                                  staticClass:
                                    "uk-color-picker-customize uk-flex uk-flex-between",
                                },
                                [
                                  t(
                                    "div",
                                    {
                                      staticClass:
                                        "uk-color-picker-input uk-flex uk-flex-middle",
                                    },
                                    [
                                      t(
                                        "div",
                                        {
                                          staticClass:
                                            "uk-color-picker-hex-input uk-inline uk-input",
                                          staticStyle: {
                                            padding: "0",
                                            "box-sizing": "content-box",
                                            width: "127px",
                                          },
                                        },
                                        [
                                          t("span", {
                                            staticClass: "uk-form-icon",
                                            attrs: { "uk-icon": "icon: hashtag" },
                                          }),
                                          e._v(" "),
                                          t("input", {
                                            ref: "hexColorInput",
                                            staticClass:
                                              "uk-input uk-text-muted uk-text-justify uk-overflow-hidden",
                                            staticStyle: {
                                              width: "72px",
                                              height: "18px",
                                              margin: "2px 0 2px 1px",
                                              "padding-right": "0 !important",
                                              border: "none",
                                              "box-shadow": "none",
                                            },
                                            attrs: {
                                              title: e.colorValueTooltips,
                                            },
                                            domProps: {
                                              value:
                                                e.computedColorTypeValue.replace(
                                                  "#",
                                                  "",
                                                ),
                                            },
                                            on: {
                                              blur: e.handleHexInput,
                                              keydown: function (t) {
                                                return !t.type.indexOf("key") &&
                                                  e._k(
                                                    t.keyCode,
                                                    "enter",
                                                    13,
                                                    t.key,
                                                    "Enter",
                                                  )
                                                  ? null
                                                  : e.handleHexInput.apply(
                                                      null,
                                                      arguments,
                                                    );
                                              },
                                            },
                                          }),
                                          e._v(" "),
                                          t("input", {
                                            staticClass:
                                              "uk-input uk-text-center uk-overflow-hidden divider-vertical-border-color",
                                            staticStyle: {
                                              border: "none",
                                              "border-left": "1px solid",
                                              "border-radius": "0",
                                              "box-shadow": "none",
                                              width: "31px",
                                              height: "11px",
                                              padding: "0 0 0 6px !important",
                                              "vertical-align": "middle",
                                            },
                                            attrs: {
                                              disabled: !e.computedInputValue,
                                              title: e.colorOpacityTooltips,
                                            },
                                            domProps: {
                                              value: e.computedOpacityNumber,
                                            },
                                            on: {
                                              blur: e.handleOpacityInput,
                                              keydown: function (t) {
                                                return !t.type.indexOf("key") &&
                                                  e._k(
                                                    t.keyCode,
                                                    "enter",
                                                    13,
                                                    t.key,
                                                    "Enter",
                                                  )
                                                  ? null
                                                  : e.handleOpacityInput.apply(
                                                      null,
                                                      arguments,
                                                    );
                                              },
                                            },
                                          }),
                                          e._v(" "),
                                          t(
                                            "span",
                                            {
                                              staticStyle: {
                                                "margin-left": "-2px",
                                                display: "inline-block",
                                                "vertical-align": "middle",
                                              },
                                            },
                                            [e._v("%")],
                                          ),
                                        ],
                                      ),
                                      e._v(" "),
                                      t("div", {
                                        staticClass:
                                          "uk-color-picker-input-preview uk-margin-small-left",
                                        style: {
                                          "background-color":
                                            e.computedInputValue,
                                        },
                                      }),
                                    ],
                                  ),
                                  e._v(" "),
                                  t(
                                    "label",
                                    {
                                      staticClass: "uk-color-well-label",
                                      attrs: {
                                        for: e.computedInputId,
                                        title: e.colorSelectorTooltips,
                                      },
                                    },
                                    [
                                      t("input", {
                                        ref: "input",
                                        staticClass: "uk-color-well-input",
                                        attrs: {
                                          id: e.computedInputId,
                                          type: "color",
                                          name: e.name,
                                        },
                                        domProps: {
                                          value: e.computedColorTypeValue,
                                        },
                                        on: {
                                          input: e.handleHexInput,
                                          click: e.handleInputClick,
                                        },
                                      }),
                                    ],
                                  ),
                                ],
                              ),
                              e._v(" "),
                              e._t("default"),
                            ],
                            2,
                          ),
                          e._v(" "),
                          e._t("footer"),
                        ],
                        2,
                      ),
                      e._v(" "),
                      e._t("bottom"),
                    ],
                    2,
                  ),
                ]),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          "604f4d07",
          null,
        ).exports;
      },
      72917: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => l });
        var n = a(2954),
          o = a(78152);
        const i = (0, n.aZ)({
          props: {
            value: { type: Boolean, default: !1 },
            textStyle: { type: String, default: "" },
          },
          setup(e, t) {
            const a = (0, n.Fl)(() => true);
            return {
              handleWatermarkClick: (e) => {
                return true;
              },
              handleWatermarkChange: (e) => {
                t.emit("toggle", e.target.checked);
              },
            };
          },
        });
        const l = (0, a(51900).Z)(
          i,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t("div", { staticClass: "uk-form-controls" }, [
              t("label", { on: { click: e.handleWatermarkClick } }, [
                t("input", {
                  staticClass: "uk-checkbox",
                  attrs: { type: "checkbox" },
                  domProps: { checked: false },
                  on: { change: e.handleWatermarkChange },
                }),
                e._v(" "),
                t("span", { style: e.textStyle }, [
                  e._v(e._s(e.$T('Show "Presented with xmind"'))),
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
      61363: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, { default: () => G });
        var n = a(2954),
          o = a(71017),
          i = a.n(o),
          l = a(78198),
          r = a(13382),
          s = a(86633),
          u = a(18621),
          d = a(94593),
          c = a(96829),
          h = a(72298),
          p = a(67657);
        function v() {
          return p.BrowserWindow.fromId(window.id);
        }
        var f = function (e, t, a, n) {
          return new (a || (a = Promise))(function (o, i) {
            function l(e) {
              try {
                s(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function r(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(l, r);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
        const m = (0, n.aZ)({
          __name: "map-shot-frame",
          props: {
            visible: { type: Boolean },
            backgroundGrayscale: null,
            defaultSize: null,
            defaultRate: null,
            containerStyle: null,
            isTakingShot: { type: Boolean },
            appearance: null,
            sheetContainerElement: null,
            canvasWidth: null,
            canvasHeight: null,
            topBarHeight: null,
          },
          emits: ["mousewheel", "close", "takeshot"],
          setup(e, { expose: t, emit: a }) {
            const o = e,
              i = {
                side: [["left"], ["top"], ["right"], ["bottom"]],
                corner: [
                  ["left", "top"],
                  ["left", "bottom"],
                  ["right", "top"],
                  ["right", "bottom"],
                ],
              };
            function l(e) {
              let t = !1;
              return function (...a) {
                t ||
                  (window.requestAnimationFrame(function () {
                    e.apply(null, a), (t = !1);
                  }),
                  (t = !0));
              };
            }
            const r = (0, n.FN)().proxy,
              s = (0, n.Fl)(() => o.sheetContainerElement),
              u = (0, n.Fl)(() => o.canvasWidth),
              d = (0, n.Fl)(() => o.canvasHeight),
              c = (0, n.iH)(null),
              h = (0, n.iH)(null),
              p = (0, n.iH)(null),
              v = (0, n.iH)(null);
            let m = (0, n.iH)(null);
            const g = (0, n.iH)(!1),
              w = (0, n.iH)(!1),
              b = (0, n.iH)("default"),
              k = (0, n.iH)(null),
              y = (0, n.iH)(null),
              S = (0, n.iH)(null),
              x = (0, n.iH)(null),
              C = (0, n.iH)(o.defaultRate),
              _ = (0, n.iH)([0, 0]),
              F = (0, n.iH)(null),
              M = (0, n.iH)(null),
              B = (0, n.iH)(!1),
              T = (0, n.iH)(null),
              I = (0, n.iH)(null),
              V = (0, n.iH)(),
              A = (0, n.iH)(r.$toResourceURL("static/images/map-shot/close.svg")),
              H = (0, n.iH)(
                r.$toResourceURL("static/images/map-shot/camera.svg"),
              );
            (0, n.bv)(() => {
              D(), P(!0);
            }),
              (0, n.Jd)(() => {
                P(!1);
              });
            const R = (0, n.Fl)(() => Math.max(d.value, u.value) + 500),
              W = (0, n.Fl)(() => {
                const e = {
                  width: "auto",
                  height: "auto",
                  overflow: "hidden",
                  "z-index": 1020,
                  cursor: b.value,
                };
                return Object.assign({}, e, o.containerStyle);
              }),
              $ = (0, n.Fl)(() => [
                { key: "1:1", text: r.$T("Square (1:1)") },
                { key: "free", text: r.$T("Custom") },
              ]),
              E = (0, n.Fl)({
                set(e) {
                  C.value = e.key;
                },
                get: () => $.value.find((e) => e.key === C.value),
              }),
              L = (0, n.Fl)(() =>
                "free" === E.value.key ? i.side.concat(i.corner) : i.corner,
              );
            (0, n.YP)(E, (e) => {
              const { value: t } = h;
              if ("free" === e.key) return;
              if (!t) return;
              const { clientHeight: a } = t,
                n = E.value.key.split(":"),
                o = a * (parseInt(n[0]) / parseInt(n[1]));
              U({ width: o });
            });
            const P = (e) => {
                const { value: t } = s;
                t[e ? "addEventListener" : "removeEventListener"]("scroll", O),
                  e || ((F.value = null), (M.value = null));
              },
              O = () => {
                if (g.value) return;
                if (o.isTakingShot) return;
                const { value: e } = s,
                  { value: t } = h,
                  a = [e.scrollLeft, e.scrollTop],
                  n = [u.value, d.value];
                if (
                  null !== M.value &&
                  (n[0] !== M.value[0] || n[1] !== M.value[1])
                )
                  return (F.value = a), void (M.value = n);
                if (F.value) {
                  const e = window.getComputedStyle(t),
                    n = parseFloat(e.getPropertyValue("top").replace("px", "")),
                    o = parseFloat(e.getPropertyValue("left").replace("px", ""));
                  (t.style.left = o - (a[0] - F.value[0]) + "px"),
                    (t.style.top = n - (a[1] - F.value[1]) + "px");
                }
                (F.value = a), N({});
              },
              z = () => {
                const { value: e } = s;
                (F.value = [e.scrollLeft, e.scrollTop]),
                  (M.value = [u.value, d.value]);
              },
              D = () => {
                const { value: e } = s,
                  { value: t } = c,
                  { clientWidth: a, clientHeight: n } = t;
                let [i, l] = o.defaultSize;
                const r = i / l;
                let d = (n - (l + 4)) / 2;
                if (d < 60) {
                  let t = d - (0.5 * (l + 2) - 0.5 * n) - 60;
                  const a = e.scrollTop + t;
                  a < 0 &&
                    ((t = -e.scrollTop),
                    (l -= Math.abs(a)),
                    (i -= Math.abs(a) * r)),
                    (d = t);
                }
                let h = (a - (i + 4)) / 2;
                if (h < 0) {
                  let t = h + (0.5 * (i + 2) - 0.5 * a) + 1;
                  if (e.scrollLeft + t + i > u.value) {
                    i = u.value - (e.scrollLeft + t);
                    const a = i / r;
                    (d += 0.5 * Math.abs(a - l)), (l = a);
                  }
                  h = t;
                }
                U({ width: i, height: l, left: h, top: d }), z(), (w.value = !1);
              },
              U = (e) => {
                const { value: t } = h;
                let a = !1;
                const n = ["left", "top", "right", "bottom", "width", "height"];
                for (const o in e) {
                  let i = e[o];
                  null !== i &&
                    (["width", "height"].includes(o) && (a = !0),
                    n.includes(o) && (i = `${i}px`),
                    (t.style[o] = i));
                }
                N(e),
                  a &&
                    r.$nextTick(() => {
                      const { clientWidth: e, clientHeight: a } = t;
                      _.value = [e, a];
                    });
              },
              N = (e) => {
                const { value: t } = s,
                  { value: a } = h,
                  { value: n } = p,
                  { value: i } = v;
                let { left: l, top: r, height: u, width: c } = e;
                (l = "number" == typeof l ? l : parseInt(l)),
                  (r = "number" == typeof r ? r : parseInt(r)),
                  (u = "number" == typeof u ? u : parseInt(u)),
                  (c = "number" == typeof c ? c : parseInt(c));
                const f = n,
                  m = i,
                  { clientHeight: g, clientWidth: b } = f,
                  { clientHeight: k, clientWidth: y } = t;
                if (!l || !r) {
                  const e = getComputedStyle(a);
                  (l = parseInt(e.getPropertyValue("left").replace("px", ""))),
                    (r = parseInt(e.getPropertyValue("top").replace("px", "")));
                }
                (u && c) || ((u = a.clientHeight), (c = a.clientWidth));
                const S = { top: r + u + 14 + 4, left: l },
                  x = { bottom: "calc(100% + 8px)", color: "#FFF" };
                if (
                  (t.scrollTop + r - 16 <= 0 &&
                    ((x.bottom = "calc(100% - 16px)"),
                    o.backgroundGrayscale > 128 && (x.color = "#333")),
                  t.scrollTop + k >= d.value - 5)
                ) {
                  let e = !1;
                  S.top + g > k && ((S.top = r + u - 14 - g), (e = !0)),
                    e && S.top + 14 + g >= k && (S.top = k - g - 14);
                }
                (f.style.top = `${S.top}px`),
                  (f.style.left = `${S.left}px`),
                  (m.style.color = x.color),
                  (m.style.bottom = x.bottom);
                const C =
                  0 < S.top && S.top + g <= k && -10 < S.left && S.left + b <= y;
                C && w.value && (w.value = !1), C || w.value || (w.value = !0);
              };
            let Z = (e) => {
              const { value: t } = s,
                { value: a } = h;
              if (0 === e.buttons && "handler" === k.value) return Y();
              if (!g.value && "handler" !== k.value) return;
              const n = (n = { vertical: !0, horizontal: !0 }) => {
                  const { width: o, height: i } = a.getBoundingClientRect(),
                    { offsetLeft: l, offsetTop: r } = a,
                    s = r + i,
                    c = l + o,
                    { scrollTop: h, scrollLeft: p } = t,
                    v = p + l,
                    f = p + c,
                    m = h + r,
                    g = h + s,
                    w = {
                      left: n.horizontal && e.clientX - T.value.offsetX,
                      top: n.vertical && e.clientY - T.value.offsetY,
                    };
                  "number" == typeof w.left &&
                    ((v <= 0 && w.left <= l) ||
                      (f >= u.value && w.left + o >= c)) &&
                    (w.left = null),
                    "number" == typeof w.top &&
                      ((m <= 0 && w.top <= r) ||
                        (g >= d.value && w.top + i >= s)) &&
                      (w.top = null),
                    U(w);
                },
                i = () => {
                  t.scroll(
                    I.value.scrollLeft - (e.clientX - T.value.mouseClientX),
                    I.value.scrollTop - (e.clientY - T.value.mouseClientY),
                  );
                },
                r = () => {
                  const e = { vertical: !0, horizontal: !0 };
                  return (
                    (t.scrollTop <= 1 ||
                      t.scrollTop + t.clientHeight >= d.value - 1) &&
                      (e.vertical = !1),
                    (t.scrollLeft <= 1 ||
                      t.scrollLeft + t.clientWidth >= u.value - 1) &&
                      (e.horizontal = !1),
                    e
                  );
                };
              if ("frame" === k.value && "left" === y.value) n();
              else if ("container" === k.value && "right" === y.value)
                i(), n(r());
              else if ("frame" === k.value && "right" === y.value) i(), n(r());
              else if ("handler" === k.value) {
                const n = x.value.getBoundingClientRect();
                let i,
                  r,
                  s,
                  c = null;
                const h = { top: !1, left: !1, right: !1, bottom: !1 },
                  p = 50,
                  v = 15;
                if (
                  (S.value.includes("right") &&
                    ((i = e.clientX - V.value.frameClientRectLeft),
                    i < 1 && (i = 1),
                    t.offsetWidth - n.x < p + v && (h.right = !0)),
                  S.value.includes("bottom") &&
                    ((r =
                      e.clientY - V.value.frameClientRectTop - o.topBarHeight),
                    r < 1 && (r = 1),
                    t.offsetHeight - (n.y - o.topBarHeight) < p + v &&
                      (h.bottom = !0)),
                  S.value.includes("left"))
                ) {
                  const t =
                    V.value.frameClientRectLeft + V.value.frameClientWidth - 1;
                  (s = e.clientX),
                    (i =
                      V.value.frameClientWidth -
                      (e.clientX - V.value.frameClientRectLeft)),
                    i < 1 && (i = 1),
                    s > t && (s = t),
                    n.x < p && (h.left = !0);
                }
                if (S.value.includes("top")) {
                  const t =
                    V.value.frameClientRectTop + V.value.frameClientHeight - 1;
                  (c = e.clientY - o.topBarHeight),
                    (r =
                      V.value.frameClientHeight -
                      (e.clientY - o.topBarHeight - V.value.frameClientRectTop)),
                    r < 1 && (r = 1),
                    c > t && (c = t),
                    n.y - o.topBarHeight < p && (h.top = !0);
                }
                const f = () => {
                  const e = E.value.key.split(":");
                  if (h.top || h.bottom) {
                    let t = i;
                    (t = Math.floor(
                      Math.floor(r) * (parseInt(e[0]) / parseInt(e[1])),
                    )),
                      s && (s += i - t),
                      (i = t);
                  } else if (h.right || h.left) {
                    let t = Math.floor(
                      Math.floor(i) * (parseInt(e[1]) / parseInt(e[0])),
                    );
                    c && (c += r - t), (r = t);
                  } else {
                    let t = i;
                    (t = Math.floor(
                      Math.floor(r) * (parseInt(e[0]) / parseInt(e[1])),
                    )),
                      s && (s += i - t),
                      (i = t);
                  }
                };
                if ((clearInterval(m.value), Object.values(h).some((e) => e))) {
                  let e = 8;
                  "free" !== E.value.key && (e = 4);
                  const a = () => {
                    if (!V.value) return;
                    const a = { left: t.scrollLeft, top: t.scrollTop },
                      n = new Set();
                    h.left &&
                      a.left > 1 &&
                      ((a.left -= e),
                      (i += e),
                      (V.value.frameClientRectLeft += e),
                      n.add("width")),
                      h.right &&
                        a.left + t.clientWidth < u.value - 1 &&
                        ((a.left += e),
                        (i += e),
                        (V.value.frameClientRectLeft -= e),
                        n.add("width")),
                      h.top &&
                        a.top > 1 &&
                        ((a.top -= e),
                        (r += e),
                        (V.value.frameClientRectTop += e),
                        n.add("height")),
                      h.bottom &&
                        a.top + t.clientHeight < d.value - 1 &&
                        ((a.top += e),
                        (r += e),
                        (V.value.frameClientRectTop -= e),
                        n.add("height")),
                      t.scroll(a),
                      "free" !== E.value.key && f(),
                      U({ width: i, height: r, top: c, left: s });
                  };
                  m.value = setInterval(l(a), 1);
                }
                "free" !== E.value.key && f(),
                  null !== c &&
                    t.scrollTop + c <= 0 &&
                    ((c = 0), (i = null), (r = null));
                let g = c;
                g || (g = a.offsetTop),
                  null !== r &&
                    t.scrollTop + g + r > d.value &&
                    ((i = null), (r = null)),
                  U({ width: i, height: r, top: c, left: s });
              }
            };
            Z = l(Z);
            const Y = (e) => {
              e && "mouseup" === e.type && clearInterval(m.value),
                (e && "mouseleave" === e.type && "handler" === k.value) ||
                  (e &&
                    "mouseup" === e.type &&
                    0 === e.button &&
                    e.target === c.value &&
                    !B.value &&
                    a("close"),
                  (k.value = null),
                  (g.value = !1),
                  (T.value = null),
                  (V.value = null),
                  (I.value = null),
                  (S.value = null),
                  (b.value = "default"),
                  z());
            };
            return (
              t({ isShowGoMapShotBar: w, updateMapShotFrameStyle: U }),
              {
                __sfc: !0,
                MAP_SHOT_FRAME_BORDER_WIDTH: 2,
                MAP_SHOT_FRAME_MIN_HEIGHT: 1,
                MAP_SHOT_FRAME_MIN_WIDTH: 1,
                MAP_SHOT_HANDLER_CONFIG_MAP: i,
                throttle: l,
                props: o,
                emits: a,
                vm: r,
                scrollContainerEl: s,
                canvasWidth: u,
                canvasHeight: d,
                mapShotFrameContainerEl: c,
                mapShotFrameEl: h,
                mapShotToolbarEl: p,
                mapShotFrameDisplaySizeEl: v,
                containerScrollIntervalHanlder: m,
                isDragging: g,
                isShowGoMapShotBar: w,
                containerCursorStyle: b,
                targetType: k,
                mouseType: y,
                handlerType: S,
                currentMapShotHandler: x,
                selectedRate: C,
                currentFrameSize: _,
                lastScrollBarPosition: F,
                lastSbContainerSize: M,
                mouseDownOnSafeZone: B,
                dragStartData: T,
                scrollContainerStartPoint: I,
                resizeStartData: V,
                closeMapShotIcon: A,
                cameraIcon: H,
                commputedBoxShadow: R,
                computedContainerStyle: W,
                frameSizeList: $,
                computedSelectedRate: E,
                mapShotHandlers: L,
                setScrollContainerListener: P,
                scrollActionHandler: O,
                updateLastScrollBarPosition: z,
                initMapShotFrameOnMounted: D,
                updateMapShotFrameStyle: U,
                updateToolbarAndDisplaySize: N,
                onMapShotMouseDown: (e) => {
                  const { value: t } = s,
                    { value: a } = h,
                    { value: n } = c;
                  if (
                    (e.target === a && (k.value = "frame"),
                    e.target === n && (k.value = "container"),
                    0 === e.button && (y.value = "left"),
                    2 === e.button && (y.value = "right"),
                    null !== k.value && null !== y.value)
                  ) {
                    const { offsetLeft: n, offsetTop: o } = a;
                    (T.value = {
                      offsetX: e.clientX - n,
                      offsetY: e.clientY - o,
                      mouseClientX: e.clientX,
                      mouseClientY: e.clientY,
                    }),
                      "right" === y.value &&
                        (I.value = {
                          scrollTop: t.scrollTop,
                          scrollLeft: t.scrollLeft,
                        }),
                      (g.value = !0);
                  }
                  "right" === y.value && (b.value = "grab!important"),
                    (B.value = e.target !== c.value);
                },
                onMapShotMouseMove: Z,
                onMapShotMouseUpOrLeave: Y,
                onMapShotHandlerDown: (e, t) => {
                  B.value = !0;
                  const { value: a } = h,
                    { offsetLeft: n, offsetTop: o } = a,
                    i = window
                      .getComputedStyle(t.target, null)
                      .getPropertyValue("cursor");
                  (b.value = i),
                    (k.value = "handler"),
                    (S.value = e.slice()),
                    (x.value = document.querySelector(
                      `.map-shot-handler-${S.value[0]}` +
                        (S.value[1] ? `-${S.value[1]}` : ""),
                    )),
                    (V.value = {
                      frameClientRectLeft: n,
                      frameClientRectTop: o,
                      frameClientWidth: a.clientWidth,
                      frameClientHeight: a.clientHeight,
                    });
                },
                goMapShotBar: () =>
                  f(this, void 0, void 0, function* () {
                    const { value: e } = h,
                      { value: t } = s,
                      { offsetLeft: a, offsetTop: n } = e,
                      o = e.clientWidth + 4,
                      i = e.clientHeight + 4,
                      { clientWidth: l, clientHeight: u } = t;
                    let d =
                        t.scrollLeft +
                        a -
                        (l - o) / 2 -
                        (l < o ? (o - l) / 2 + 1 : 0),
                      c =
                        t.scrollTop +
                        n -
                        (u - i) / 2 +
                        (u / 2 < i / 2 + 60 ? (i - u) / 2 + 60 : 0);
                    t.scrollTo(d, c), yield r.$nextTick(), O();
                  }),
                onWheelAndPinch: (e) => {
                  a("mousewheel", e);
                },
                onClose: () => {
                  a("close");
                },
                onTakeShot: () => {
                  const { offsetLeft: e, offsetTop: t } = h.value,
                    { width: n, height: o } = h.value.getBoundingClientRect();
                  a(
                    "takeshot",
                    { width: n, height: o, left: e, top: t },
                    C.value,
                    _.value,
                  );
                },
              }
            );
          },
        });
        a(20748);
        var g = a(51900);
        const w = (0, g.Z)(
          m,
          function () {
            var e = this,
              t = e._self._c,
              a = e._self._setupProxy;
            return t(
              "div",
              {
                ref: "mapShotFrameContainerEl",
                staticClass: "uk-position-fixed uk-panel uk-position-cover",
                style: a.computedContainerStyle,
                on: {
                  mousedown: a.onMapShotMouseDown,
                  mousemove: a.onMapShotMouseMove,
                  mouseup: a.onMapShotMouseUpOrLeave,
                  mouseleave: a.onMapShotMouseUpOrLeave,
                  mousewheel: a.onWheelAndPinch,
                },
              },
              [
                t(
                  "div",
                  {
                    ref: "mapShotFrameEl",
                    staticClass: "map-shot-frame uk-position-absolute",
                    style: {
                      "box-shadow":
                        "0 0 0 " + a.commputedBoxShadow + "px rgba(0, 0, 0, 0.6)",
                      visibility: e.visible ? "visible" : "hidden",
                      cursor:
                        "default" === a.computedContainerStyle.cursor
                          ? "all-scroll"
                          : a.computedContainerStyle.cursor,
                    },
                  },
                  [
                    t("div", {
                      staticClass: "click-safe-zone",
                      style: {
                        position: "absolute",
                        width: "calc(100% + 30px)",
                        height: "calc(100% + 30px)",
                        left: "-15px",
                        top: "-15px",
                        cursor: "default",
                        "z-index": "-1",
                      },
                    }),
                    e._v(" "),
                    t(
                      "div",
                      {
                        ref: "mapShotFrameDisplaySizeEl",
                        staticClass: "map-shot-frame-display-size",
                      },
                      [
                        e._v(
                          "\n      " +
                            e._s(a.currentFrameSize[0]) +
                            " × " +
                            e._s(a.currentFrameSize[1]) +
                            "\n    ",
                        ),
                      ],
                    ),
                    e._v(" "),
                    e._l(a.mapShotHandlers, function (e, n) {
                      return t("div", {
                        key: n,
                        class:
                          `map-shot-handler-${e[0]}` + (e[1] ? `-${e[1]}` : ""),
                        on: {
                          mousedown: function (t) {
                            return t.target !== t.currentTarget
                              ? null
                              : (t.stopPropagation(),
                                a.onMapShotHandlerDown(e, t));
                          },
                        },
                      });
                    }),
                  ],
                  2,
                ),
                e._v(" "),
                t(
                  "div",
                  {
                    ref: "mapShotToolbarEl",
                    staticStyle: {
                      height: "28px",
                      "padding-bottom": "16px",
                      "padding-right": "24px",
                    },
                    style: { visibility: e.visible ? "visible" : "hidden" },
                    attrs: { id: "tool-bar" },
                  },
                  [
                    t(
                      "ul",
                      {
                        staticClass:
                          "uk-button-segment-group uk-button-segment-divider",
                        class: { "uk-background-muted": "dark" === e.appearance },
                      },
                      [
                        t("li", { attrs: { title: e.$T("Exit Map Shot.") } }, [
                          t(
                            "div",
                            {
                              staticClass:
                                "uk-preserve uk-button uk-button-segment uk-button-compact btn-icon btn",
                              on: { click: a.onClose },
                            },
                            [
                              t("img", {
                                attrs: {
                                  draggable: "false",
                                  "data-src": a.closeMapShotIcon,
                                  "uk-svg": "",
                                },
                              }),
                            ],
                          ),
                        ]),
                        e._v(" "),
                        t(
                          "li",
                          { attrs: { title: e.$T("Choose the aspect ratio.") } },
                          [
                            t(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "focus-contexts",
                                    rawName: "v-focus-contexts:no",
                                    arg: "no",
                                  },
                                ],
                                staticClass:
                                  "uk-button uk-button-segment uk-button-select uk-button-compact btn btn-segment",
                                staticStyle: { "line-height": "27px" },
                              },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(a.computedSelectedRate.text) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                ref: "popover",
                                staticClass: "uk-width-small",
                                attrs: {
                                  "uk-popover": "",
                                  "data-sel-close": "[uk-menu] > li",
                                },
                              },
                              [
                                t(
                                  "ul",
                                  {
                                    staticClass: "uk-height-1-1 uk-overflow-auto",
                                    attrs: { "uk-menu": "" },
                                  },
                                  e._l(a.frameSizeList, function (n) {
                                    return t(
                                      "li",
                                      {
                                        key: n.key,
                                        on: {
                                          click: function (e) {
                                            a.computedSelectedRate = n;
                                          },
                                        },
                                      },
                                      [
                                        t(
                                          "button",
                                          {
                                            class: {
                                              "uk-checked":
                                                n.key ===
                                                a.computedSelectedRate.key,
                                            },
                                            attrs: {
                                              autofocus:
                                                n.key ===
                                                a.computedSelectedRate.key,
                                            },
                                          },
                                          [
                                            e._v(
                                              "\n                " +
                                                e._s(n.text) +
                                                "\n              ",
                                            ),
                                          ],
                                        ),
                                      ],
                                    );
                                  }),
                                  0,
                                ),
                              ],
                            ),
                          ],
                        ),
                        e._v(" "),
                        t(
                          "li",
                          { attrs: { title: e.$T("Capture the screenshot.") } },
                          [
                            t(
                              "div",
                              {
                                staticClass:
                                  "uk-preserve uk-button uk-button-segment uk-button-compact btn-icon btn",
                                on: { click: a.onTakeShot },
                              },
                              [
                                t("img", {
                                  attrs: {
                                    draggable: "false",
                                    "data-src": a.cameraIcon,
                                    "uk-svg": "",
                                  },
                                }),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
                e._v(" "),
                a.isShowGoMapShotBar
                  ? t(
                      "div",
                      {
                        staticClass:
                          "uk-button uk-button-primary uk-flex uk-flex-middle uk-position-fixed",
                        staticStyle: { left: "20px", "z-index": "1030" },
                        style: {
                          visibility: e.visible ? "visible" : "hidden",
                          top: `${20 + e.topBarHeight}px`,
                        },
                        on: {
                          mouseup: function (e) {
                            return (
                              e.preventDefault(),
                              a.goMapShotBar.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [e._v("\n    " + e._s(e.$T("Go Map Shot Bar")) + "\n  ")],
                    )
                  : e._e(),
              ],
            );
          },
          [],
          !1,
          null,
          "0c88a99b",
          null,
        ).exports;
        var b = a(78152),
          k = a(95246),
          y = a(72917),
          S = a(59180),
          x = a(14025),
          C = a(18264);
        const _ = [
            "#FFFFFF",
            "#EEEEEE",
            "#D0D0D0",
            "#ADADAD",
            "#999999",
            "#666666",
            "#333333",
            "#111111",
            "#000000",
            "#FDD834",
            "#FF9595",
            "#8EDE99",
            "#0CE6CF",
            "#8EDDF9",
            "#50C3F7",
            "#7986CB",
            "#BA69C8",
            "#FFABD5",
            "#FFC009",
            "#FF5252",
            "#2CD551",
            "#00A99D",
            "#2ABEE0",
            "#05A8F4",
            "#4051B5",
            "#9C27B0",
            "#EA8ABA",
            "#FF9F00",
            "#FF3C00",
            "#19A719",
            "#007C74",
            "#0096BF",
            "#0288D1",
            "#303E9F",
            "#7B1FA2",
            "#CE4289",
            "#FF6F00",
            "#E32C2D",
            "#15831C",
            "#025A5A",
            "#00526B",
            "#00579B",
            "#1A227E",
            "#4A148C",
            "#A34075",
          ],
          F = (0, n.aZ)({
            name: "ColorPicker",
            props: {
              value: { type: String, default: "#FFF" },
              noneValue: { type: String, default: "none" },
              isMultiple: { type: Boolean, default: !1 },
              isDisabled: { type: Boolean, default: !1 },
              pos: { type: String, default: "left-center" },
              offsetTop: { type: Number, default: 0 },
              offsetLeft: { type: Number, default: 0 },
            },
            components: { colorWell: S.Z, colorWall: x.Z },
            setup(e, t) {
              const a = (0, n.iH)(null),
                o = (0, n.iH)(""),
                i = (0, n.FN)().proxy;
              (0, n.Jd)(() => {
                r();
              }),
                (0, n.YP)(
                  () => e.value,
                  (e) => {
                    o.value = e;
                  },
                  { immediate: !0 },
                );
              const l = (0, n.Fl)(() => (e.isMultiple ? "multi-color" : o.value)),
                r = () => {
                  if (!a.value) return;
                  const e = a.value.$el.querySelector("[uk-popover]");
                  i.$withUIKit((t) => {
                    var a;
                    null === (a = t.pop(e)) || void 0 === a || a.close();
                  });
                },
                s = (0, n.Fl)(() => (0, b.km)().recentlyUsedColors);
              return {
                colorWellElement: a,
                computedInternalValue: l,
                handleColorInput: (e) => {
                  (o.value = e), t.emit("input", e);
                },
                presetColors: _,
                popoverHide: () => {
                  setTimeout(() => {
                    (0, C.U)().updateLastFocusedElementTag(null);
                  }, 100);
                },
                recentlyUsedColors: s,
                recentColorChange: (e) => (0, b.km)().updateRecentlyUsedColor(e),
              };
            },
          });
        const M = (0, g.Z)(
          F,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t(
              "color-well",
              {
                directives: [
                  {
                    name: "focus-contexts",
                    rawName: "v-focus-contexts:group",
                    value: ["focus.input"],
                    expression: "['focus.input']",
                    arg: "group",
                  },
                ],
                ref: "colorWellElement",
                staticStyle: { "max-width": "65px" },
                attrs: {
                  "intermediate-value": "multi-color",
                  "grid-options": e.presetColors,
                  "none-value": e.noneValue,
                  title: e.$T("Click to choose a color."),
                  value: e.computedInternalValue,
                  "popover-container-id": "#map-shot-modal-body",
                  "is-disabled": e.isDisabled,
                  "color-value-tooltips": e.$T("Set the color value (hex)."),
                  "color-opacity-tooltips": e.$T("Set the opacity."),
                  "color-selector-tooltips": e.$T(
                    "Click to show more colors or create your own.",
                  ),
                  "popover-pos": e.pos,
                  "popover-offset-top": e.offsetTop,
                  "popover-offset-left": e.offsetLeft,
                },
                on: {
                  input: e.handleColorInput,
                  "popover-hide": e.popoverHide,
                  "recent-color-change": e.recentColorChange,
                },
              },
              [
                t(
                  "div",
                  { attrs: { slot: "bottom" }, slot: "bottom" },
                  [
                    e.recentlyUsedColors.length > 0
                      ? [
                          t("hr", {
                            staticClass: "uk-format-panel-divider",
                            staticStyle: { margin: "4px 0" },
                          }),
                          e._v(" "),
                          t(
                            "div",
                            { staticClass: "uk-padding-small" },
                            [
                              t(
                                "div",
                                { staticStyle: { "margin-bottom": "4px" } },
                                [e._v(e._s(e.$T("Recently Used")))],
                              ),
                              e._v(" "),
                              t("color-wall", {
                                attrs: {
                                  "grid-options": e.recentlyUsedColors,
                                  value: e.value,
                                },
                                on: { input: e.handleColorInput },
                              }),
                            ],
                            1,
                          ),
                        ]
                      : e._e(),
                  ],
                  2,
                ),
              ],
            );
          },
          [],
          !1,
          null,
          null,
          null,
        ).exports;
        var B = function (e, t, a, n) {
          return new (a || (a = Promise))(function (o, i) {
            function l(e) {
              try {
                s(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function r(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(l, r);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
        const T = (0, n.aZ)({
          props: {
            pngBuffer: Buffer,
            appearance: String,
            defaultCheckedFrame: Boolean,
            defaultCheckedShadow: Boolean,
            defaultCheckedWatermark: Boolean,
            defaultFrameColor: String,
            defaultFrameWidth: String,
          },
          components: { ColorPicker: M, WatermarkCheckbox: y.Z },
          setup(e, t) {
            const a = (0, n.FN)().proxy,
              o = (0, n.iH)(e.defaultCheckedShadow),
              i = (0, n.iH)(!1),
              l = (0, n.iH)(e.defaultCheckedFrame),
              r = (0, n.iH)(e.defaultFrameColor),
              s = (0, n.iH)(
                e.defaultCheckedFrame ? e.defaultFrameWidth : "normal",
              ),
              u = (0, n.iH)({ width: 400, height: 360 });
            ["thin", "normal", "thick"].includes(s.value) || (s.value = "normal");
            const d = (0, n.iH)(null),
              c = (0, n.iH)(
                a.$toResourceURL("static/images/map-shot/watermark.svg"),
              ),
              h = (0, n.iH)({
                dark: "rgba(0, 0, 0, 0.3)",
                light: "rgba(255, 255, 255, 0.3)",
              }),
              p = (0, n.Fl)(() => {
                const e = [
                    {
                      name: a.$T("Thin"),
                      id: "thin",
                      ratio: 0.1,
                      borderWidth: 0,
                    },
                    {
                      name: a.$T("Medium"),
                      id: "normal",
                      ratio: 0.2,
                      borderWidth: 0,
                    },
                    {
                      name: a.$T("Thick"),
                      id: "thick",
                      ratio: 0.3,
                      borderWidth: 0,
                    },
                  ],
                  t = (e, t) =>
                    e.map((e) => ((e.borderWidth = Math.floor(t * e.ratio)), e));
                if (!d.value) return t(e, 100);
                const n = (() => {
                  const { width: e, height: t } = d.value;
                  return e < t ? "width" : "height";
                })();
                return t(e, d.value[n]);
              }),
              v = (0, n.Fl)(() => p.value.find((e) => e.id === s.value)),
              f = (0, n.Fl)(() => {
                if (!d.value) return { width: 0, height: 0 };
                const e = p.value.find((e) => "thick" === e.id).borderWidth;
                return {
                  width:
                    (d.value.width / (d.value.width + 2 * e)) * u.value.width,
                  height:
                    (d.value.height / (d.value.height + 2 * e)) * u.value.height,
                };
              }),
              m = (0, n.Fl)(() => {
                if (!d.value) return 1;
                const e = (() => {
                  const { width: e, height: t } = d.value;
                  return e > t ? "width" : "height";
                })();
                return Math.min(1, f.value[e] / d.value[e]);
              }),
              g = (0, n.Fl)(() => {
                const { pngBuffer: t } = e;
                if (!t) return "";
                let a = "";
                for (let e = 0; e < t.byteLength; e++)
                  a += String.fromCharCode(t[e]);
                return `data:image/png;base64,${window.btoa(a)}`;
              }),
              w = (0, n.Fl)(() => {
                const e = p.value.find((e) => "normal" === e.id).borderWidth,
                  t = (l.value ? v.value.borderWidth : e) * m.value;
                return Math.max(Math.floor(t), 2);
              }),
              y = (0, n.Fl)(() =>
                l.value
                  ? (0, k.sF)(r.value) > 127.5
                    ? "dark"
                    : "light"
                  : "dark",
              ),
              S = (0, n.Fl)(() => ({
                bottom: (w.value - Math.max(0.15 * w.value, 6)) / 2 + "px",
              }));
            (0, n.YP)(g, (e) => {
              const t = new Image();
              (t.src = e),
                (t.onload = () => {
                  d.value = { width: t.width, height: t.height };
                });
            });
            const x = (0, n.Fl)(() => true);
            return {
              shrinkRatio: m,
              previewCinatinerMaxSize: u,
              maxPreviewImageSize: f,
              checkedFrame: l,
              checkedShadow: o,
              checkedWatermark: i,
              watermarkImage: c,
              watermarkColor: y,
              watermarkImgStyle: S,
              watermarkColors: h,
              selectedFrame: s,
              pickedColor: r,
              frameListConfig: p,
              selectedFrameData: v,
              previewPadding: w,
              pngDataURL: g,
              onSave: () =>
                B(this, void 0, void 0, function* () {
                  t.emit("save", g.value, {
                    frame: l.value,
                    shadow: o.value,
                    watermark: i.value,
                    watermarkColor: y.value,
                    frameColor: r.value,
                    frameWidth: s.value,
                    frameRatio: v.value.ratio,
                  });
                }),
              onCancel: () => {
                t.emit("cancel");
              },
              isActivationValid: x,
            };
          },
        });
        a(59343);
        const I = (0, g.Z)(
          T,
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t(
              "div",
              {
                staticClass: "uk-flex-top uk-overflow-hidden",
                staticStyle: { "z-index": "1030" },
                attrs: { id: "map-shot-modal", "uk-modal": "" },
              },
              [
                t(
                  "div",
                  {
                    staticClass:
                      "uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-format-panel uk-flex springish",
                    style: {
                      height: "400px",
                      width: "740px",
                      padding: 0,
                      borderRadius: "8px",
                      boxShadow: "0px 12px 36px 0px rgba(0,0,0,0.3)",
                    },
                    attrs: { id: "map-shot-modal-body" },
                  },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "uk-text-center uk-flex uk-flex-middle uk-flex-center",
                        style: {
                          backgroundColor:
                            "dark" === e.appearance ? "#949699" : "#fafafb",
                          boxSizing: "border-box",
                          height: "100%",
                          width: "440px",
                          borderTopLeftRadius: "8px",
                          borderBottomLeftRadius: "8px",
                        },
                        attrs: { id: "map-shot-preview" },
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "uk-display-inline-block",
                            style: {
                              position: "relative",
                              overflow: "hidden",
                              backgroundColor: e.checkedFrame
                                ? e.pickedColor
                                : "transparent",
                              padding: e.previewPadding + "px",
                            },
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "uk-position-relative",
                                style: {
                                  boxShadow: e.checkedShadow
                                    ? `0px 0px ${parseInt(
                                        0.4 * e.previewPadding,
                                      )}px 0px rgba(0, 0, 0, 0.2)`
                                    : "",
                                },
                              },
                              [
                                e.pngDataURL
                                  ? t("img", {
                                      staticClass: "uk-display-inline-block",
                                      style: {
                                        maxWidth: `${e.maxPreviewImageSize.width}px`,
                                        maxHeight: `${e.maxPreviewImageSize.height}px`,
                                      },
                                      attrs: {
                                        draggable: "false",
                                        src: e.pngDataURL,
                                      },
                                    })
                                  : e._e(),
                                e._v(" "),
                                e.checkedFrame || e.checkedShadow
                                  ? e._e()
                                  : t("div", {
                                      staticClass:
                                        "uk-position-absolute uk-height-1-1 uk-width-1-1",
                                      staticStyle: { top: "0", left: "0" },
                                      style: {
                                        border:
                                          "1px solid " +
                                          ("dark" === e.appearance
                                            ? "rgba(255, 255, 255, 0.05)"
                                            : "rgba(0, 0, 0, 0.05)"),
                                      },
                                    }),
                              ],
                            ),
                            e._v(" "),
                            e.checkedWatermark
                              ? t(
                                  "div",
                                  {
                                    staticClass:
                                      "uk-text-center uk-flex uk-flex-column",
                                    staticStyle: { justifycontent: "center" },
                                    style: {
                                      ...e.watermarkImgStyle,
                                      width: "100%",
                                      position: "absolute",
                                      left: 0,
                                      color: e.watermarkColors[e.watermarkColor],
                                      backgroundColor: "transparent",
                                    },
                                  },
                                  [
                                    t("img", {
                                      staticClass: "uk-display-inline-block",
                                      style: {
                                        height: 0.15 * e.previewPadding + "px",
                                        width: "auto",
                                        minHeight: "6px",
                                        maxHeight: 0.8 * e.previewPadding + "px",
                                      },
                                      attrs: {
                                        src: e.watermarkImage,
                                        "uk-svg": "",
                                        draggable: "false",
                                      },
                                    }),
                                  ],
                                )
                              : e._e(),
                          ],
                        ),
                      ],
                    ),
                    e._v(" "),
                    t(
                      "div",
                      {
                        staticClass: "uk-flex-column uk-flex uk-flex-between",
                        style: { width: "300px" },
                      },
                      [
                        t(
                          "div",
                          {
                            staticClass: "uk-flex uk-flex-column",
                            style: { padding: "48px 20px 0 24px" },
                          },
                          [
                            t(
                              "div",
                              {
                                staticClass: "uk-format-panel-section-heading",
                                style: {
                                  fontSize: "20px",
                                  paddingBottom: "25px",
                                },
                              },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(e.$T("Options")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass:
                                  "uk-flex uk-flex-between uk-flex-middle",
                                style: { marginBottom: "8px" },
                              },
                              [
                                t(
                                  "label",
                                  { staticClass: "uk-flex uk-flex-middle" },
                                  [
                                    t("input", {
                                      directives: [
                                        {
                                          name: "focus-contexts",
                                          rawName: "v-focus-contexts:no",
                                          arg: "no",
                                        },
                                      ],
                                      staticClass: "uk-checkbox",
                                      attrs: { type: "checkbox" },
                                      domProps: { checked: e.checkedFrame },
                                      on: {
                                        change: function (t) {
                                          e.checkedFrame = !e.checkedFrame;
                                        },
                                      },
                                    }),
                                    e._v(" "),
                                    t(
                                      "span",
                                      {
                                        staticClass:
                                          "uk-format-panel-sub-section-heading uk-format-panel-inline-ml",
                                      },
                                      [e._v(e._s(e.$T("Frame")))],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass:
                                  "uk-format-panel-sub-section uk-flex-middle uk-padding-remove uk-width-1-1",
                              },
                              [
                                t(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "focus-contexts",
                                        rawName: "v-focus-contexts:group",
                                        value: ["focus.popover"],
                                        expression: "['focus.popover']",
                                        arg: "group",
                                      },
                                    ],
                                    style: { width: "210px" },
                                  },
                                  [
                                    t(
                                      "button",
                                      {
                                        directives: [
                                          {
                                            name: "focus-contexts",
                                            rawName: "v-focus-contexts:no",
                                            arg: "no",
                                          },
                                        ],
                                        staticClass:
                                          "uk-width-1-1 uk-button uk-button-popover-toggle uk-select-icon uk-text-left",
                                        attrs: {
                                          disabled: !e.checkedFrame,
                                          title: e.$T("Choose a frame style"),
                                        },
                                      },
                                      [
                                        e._v(
                                          "\n              " +
                                            e._s(e.selectedFrameData.name) +
                                            "\n            ",
                                        ),
                                      ],
                                    ),
                                    e._v(" "),
                                    t(
                                      "div",
                                      {
                                        ref: "popover",
                                        staticClass:
                                          "uk-height-medium uk-height-medium uk-popover-contextual",
                                        style: { width: "210px", height: "91px" },
                                        attrs: {
                                          "uk-contextual-popover": "",
                                          "align-checked": "false",
                                          "data-sel-close":
                                            "[uk-menu] > li > button",
                                        },
                                      },
                                      [
                                        t(
                                          "ul",
                                          {
                                            staticClass:
                                              "uk-overflow-hidden uk-height-1-1",
                                            style: { height: "91px" },
                                            attrs: { "uk-menu": "" },
                                          },
                                          e._l(
                                            e.frameListConfig,
                                            function (a, n) {
                                              return t(
                                                "li",
                                                {
                                                  key: n,
                                                  attrs: { index: n, value: n },
                                                  on: {
                                                    click: function (t) {
                                                      e.selectedFrame = a.id;
                                                    },
                                                  },
                                                },
                                                [
                                                  t(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "uk-button uk-button-icon uk-button-tile",
                                                      class: {
                                                        "uk-checked":
                                                          a.id ===
                                                          e.selectedFrame,
                                                      },
                                                      attrs: {
                                                        autofocus:
                                                          a.id ===
                                                          e.selectedFrame,
                                                      },
                                                    },
                                                    [
                                                      e._v(
                                                        "\n                    " +
                                                          e._s(a.name) +
                                                          "\n                  ",
                                                      ),
                                                    ],
                                                  ),
                                                ],
                                              );
                                            },
                                          ),
                                          0,
                                        ),
                                      ],
                                    ),
                                  ],
                                ),
                                e._v(" "),
                                t("color-picker", {
                                  staticClass:
                                    "uk-format-panel-inline-ml uk-flex-no-shrink",
                                  attrs: { "is-disabled": !e.checkedFrame },
                                  model: {
                                    value: e.pickedColor,
                                    callback: function (t) {
                                      e.pickedColor = t;
                                    },
                                    expression: "pickedColor",
                                  },
                                }),
                              ],
                              1,
                            ),
                            e._v(" "),
                            t(
                              "div",
                              {
                                staticClass:
                                  "uk-flex uk-flex-between uk-flex-middle",
                                style: { marginTop: "13px" },
                              },
                              [
                                t(
                                  "label",
                                  { staticClass: "uk-flex uk-flex-middle" },
                                  [
                                    t("input", {
                                      directives: [
                                        {
                                          name: "focus-contexts",
                                          rawName: "v-focus-contexts:no",
                                          arg: "no",
                                        },
                                      ],
                                      staticClass: "uk-checkbox",
                                      attrs: { type: "checkbox" },
                                      domProps: { checked: e.checkedShadow },
                                      on: {
                                        change: function (t) {
                                          e.checkedShadow = !e.checkedShadow;
                                        },
                                      },
                                    }),
                                    e._v(" "),
                                    t(
                                      "span",
                                      {
                                        staticClass:
                                          "uk-format-panel-sub-section-heading uk-format-panel-inline-ml",
                                      },
                                      [e._v(e._s(e.$T("Shadow")))],
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            e._v(" "),
                            t(
                              "div",
                              { style: { marginTop: "13px" } },
                              [
                                t("watermark-checkbox", {
                                  attrs: {
                                    value: e.checkedWatermark,
                                    "text-style":
                                      "margin-left: 3px; font-size: 13px; font-weight: 500; line-height: 13px;",
                                  },
                                  on: { toggle: (t) => (e.checkedWatermark = t) },
                                }),
                              ],
                              1,
                            ),
                            e._v(" "),
                            e.isActivationValid
                              ? e._e()
                              : t(
                                  "div",
                                  {
                                    staticClass: "uk-text-muted activation-text",
                                  },
                                  [
                                    e._v(
                                      "\n          " +
                                        e._s(
                                          e.$T(
                                            '"Presented with xmind" is locked before upgrading to Xmind Pro.',
                                          ),
                                        ) +
                                        "\n        ",
                                    ),
                                  ],
                                ),
                          ],
                        ),
                        e._v(" "),
                        t(
                          "div",
                          {
                            staticClass: "uk-flex uk-button-group uk-flex-right",
                            style: { marginRight: "21px", marginBottom: "22px" },
                          },
                          [
                            t(
                              "button",
                              {
                                staticClass: "uk-button uk-button-default",
                                on: { click: e.onCancel },
                              },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(e.$T("Cancel")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                            e._v(" "),
                            t(
                              "button",
                              {
                                staticClass:
                                  "uk-button uk-button-primary map-shot-save-btn",
                                on: { click: e.onSave },
                              },
                              [
                                e._v(
                                  "\n          " +
                                    e._s(e.$T("Copy & Save")) +
                                    "\n        ",
                                ),
                              ],
                            ),
                          ],
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          "5fb0b975",
          null,
        ).exports;
        var V = a(28914),
          A = a(69931),
          H = a(67214),
          R = function (e, t, a, n) {
            return new (a || (a = Promise))(function (o, i) {
              function l(e) {
                try {
                  s(n.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function r(e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof a
                      ? t
                      : new a(function (e) {
                          e(t);
                        })).then(l, r);
              }
              s((n = n.apply(e, t || [])).next());
            });
          };
        const { BrowserWindow: W, screen: $, BrowserView: E } = p;
        const L = (e) => (0, k.lF)(e),
          P = class {
            constructor(e) {
              const t = $.getAllDisplays().reduce(
                (e, t) =>
                  e
                    ? e.workArea.y + e.workArea.height <
                      t.workArea.y + t.workArea.height
                      ? t
                      : e
                    : t,
                null,
              );
              (this.window = new W({
                show: !1,
                enableLargerThanScreen: !0,
                maxWidth: 1 / 0,
                maxHeight: 1 / 0,
                x: t.workArea.x + t.workArea.width - 1,
                y: t.workArea.y + t.workArea.height - 1,
                skipTaskbar: !0,
                focusable: !1,
                frame: !1,
                fullscreenable: !1,
                alwaysOnTop: !0,
              })),
                (this.view = new E()),
                this.view.setAutoResize({ horizontal: !0, vertical: !0 }),
                this.view.webContents.loadURL(
                  (0, A.ju)("static/html/map-shot-placeholder.html"),
                ),
                (this.currentBrowserWindowId = e.currentBrowserWindowId);
            }
            capturePage(e, t, a, n) {
              return R(this, void 0, void 0, function* () {
                const { result: o } = yield (function (e, t) {
                  return R(this, void 0, void 0, function* () {
                    const a = {};
                    for (let n = 0; n < e.length; n++) {
                      const { name: o, fn: i } = e[n];
                      `before/${o}` in t && (yield t[`before/${o}`]()),
                        yield i(a),
                        `after/${o}` in t && (yield t[`after/${o}`]());
                    }
                    return a;
                  });
                })(
                  [
                    {
                      name: "init",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          (e.currentBrowserView = (function () {
                            const e = V.Z.sendSync(
                              "get-current-browser-view-index",
                              window.editorId,
                            );
                            return p.getCurrentWindow().getBrowserViews()[e];
                          })()),
                            (e.currentBrowserWindow = W.fromId(
                              this.currentBrowserWindowId,
                            )),
                            (e.originBrowserViewSize =
                              e.currentBrowserView.getBounds()),
                            (e.originBrowserWindowSize =
                              e.currentBrowserWindow.getBounds());
                        }),
                    },
                    {
                      name: "showWindow",
                      fn: () =>
                        R(this, void 0, void 0, function* () {
                          this.window.show();
                        }),
                    },
                    {
                      name: "moveBrowserViewBeforeCapture",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          this.window.removeBrowserView(this.view),
                            e.currentBrowserWindow.addBrowserView(this.view),
                            e.currentBrowserWindow.setTopBrowserView(this.view),
                            this.view.setBounds(e.originBrowserViewSize),
                            e.currentBrowserWindow.removeBrowserView(
                              e.currentBrowserView,
                            ),
                            this.window.addBrowserView(e.currentBrowserView);
                        }),
                    },
                    {
                      name: "setBoundsBeforeCapture",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          this.window.setSize(
                            Math.round(n.width),
                            Math.round(n.height),
                          ),
                            yield (0, k.SX)(),
                            yield (0, c._v)(100),
                            e.currentBrowserView.setBounds({
                              width: Math.round(n.width),
                              height: Math.round(n.height),
                              x: 0,
                              y: 0,
                            }),
                            yield (0, k.SX)(),
                            yield (0, c._v)(100);
                        }),
                    },
                    {
                      name: "appendMapShotSvgPreview",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          document.body.appendChild(t),
                            yield (0, k.SX)(),
                            yield (0, c._v)(100),
                            (e.mapShotStyle = document.createElement("style")),
                            (e.mapShotStyle.innerHTML = O),
                            document.head.append(e.mapShotStyle),
                            yield (0, k.SX)(),
                            yield (0, c._v)(100);
                        }),
                    },
                    {
                      name: "capturePage",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          const { ctx: o, canvas: i } = (0, H.d5)();
                          o.clearRect(0, 0, i.width, i.height),
                            (o.imageSmoothingEnabled = !1);
                          const l = yield (0, k.mi)(a.width, a.height, 2);
                          (i.width = a.width * l), (i.height = a.height * l);
                          const r = Math.ceil(a.width / n.width),
                            s = Math.ceil(a.height / n.height),
                            u = t.querySelector('g[data-view-id="preview"]'),
                            d = u.getAttribute("transform");
                          for (let t = 0; t < s; t++)
                            for (let a = 0; a < r; a++) {
                              const o = a * n.width,
                                r = t * n.height,
                                s = d + ` translate(${-o}, ${-r})`;
                              u.setAttribute("transform", s),
                                yield (0, k.SX)(),
                                yield (0, c._v)(100);
                              const h =
                                yield e.currentBrowserView.webContents.capturePage(
                                  {
                                    x: 0,
                                    y: 0,
                                    width: n.width,
                                    height: n.height,
                                  },
                                );
                              yield (0, H.vV)(
                                i,
                                h.toDataURL(),
                                o * l,
                                r * l,
                                n.width * l,
                                n.height * l,
                              );
                            }
                          e.img = i.toDataURL();
                        }),
                    },
                    {
                      name: "createChangedPngDpiBuffer",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          e.result = this.createChangedPngDpiBuffer(e.img);
                        }),
                    },
                    {
                      name: "removeMapShotSvgPreview",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          t.remove(), e.mapShotStyle.remove();
                        }),
                    },
                    {
                      name: "setBoundsAfterCapture",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          const { width: t, height: a } = e.originBrowserViewSize,
                            { width: n, height: o } = e.originBrowserWindowSize;
                          this.window.setSize(n, o),
                            e.currentBrowserView.setBounds({
                              width: t,
                              height: a,
                              x: 0,
                              y: 0,
                            }),
                            yield (0, k.SX)();
                        }),
                    },
                    {
                      name: "moveBrowserViewAfterCapture",
                      fn: (e) =>
                        R(this, void 0, void 0, function* () {
                          e.currentBrowserWindow.addBrowserView(
                            e.currentBrowserView,
                          ),
                            e.currentBrowserWindow.removeBrowserView(this.view),
                            this.window.removeBrowserView(e.currentBrowserView);
                        }),
                    },
                    {
                      name: "hideWindow",
                      fn: () =>
                        R(this, void 0, void 0, function* () {
                          this.window.hide(), p.getCurrentWindow().focus();
                        }),
                    },
                  ],
                  e,
                );
                return o;
              });
            }
            createChangedPngDpiBuffer(e) {
              return L(e);
            }
            destroy() {
              this.window.destroy(), (this.window = null), (this.view = null);
            }
          },
          O =
            "\n#app{\n  opacity: 0 !important;\n}\n.uk-toast{\n  opacity: 0 !important;\n}\n";
        var z = function (e, t, a, n) {
          return new (a || (a = Promise))(function (o, i) {
            function l(e) {
              try {
                s(n.next(e));
              } catch (e) {
                i(e);
              }
            }
            function r(e) {
              try {
                s(n.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              var t;
              e.done
                ? o(e.value)
                : ((t = e.value),
                  t instanceof a
                    ? t
                    : new a(function (e) {
                        e(t);
                      })).then(l, r);
            }
            s((n = n.apply(e, t || [])).next());
          });
        };
        class D {
          constructor(e, t) {
            (this.canvas = document.createElement("canvas")),
              (this.options = t),
              (this.imageDataUrl = e),
              (this.shadowColor = "rgba(0, 0, 0, 0.1)"),
              (this.shadowBlurRatio = 0.4),
              (this.shadowBlurWidth = 10),
              (this.watermarkFrameRatio = 0.15),
              (this.watermarkNoFrameRatio = 0.015),
              (this.watermarkBottomBorderNoFrameMaxRatio = 0.2),
              (this.watermarkUrl = (0, A.ju)(
                "static/images/map-shot/watermark-light.svg",
              )),
              (this.watermarkDarkUrl = (0, A.ju)(
                "static/images/map-shot/watermark-dark.svg",
              )),
              (this.watermarkColor = t.watermarkColor || "dark"),
              (this.canvasScale = 1);
          }
          loadImage(e) {
            return new Promise((t, a) => {
              const n = new Image();
              (n.src = e),
                (n.onload = () => {
                  t(n);
                }),
                (n.onerror = (e) => a(e));
            });
          }
          initCanvas(e, t) {
            return z(this, void 0, void 0, function* () {
              const {
                  frame: a,
                  shadow: n,
                  watermark: o,
                  frameRatio: i,
                } = this.options,
                l = { width: e.width, height: e.height },
                r = l.width < l.height ? "width" : "height",
                s = "width" === r ? "height" : "width",
                u = { width: 400, height: 360 };
              let d = [0, 0, 0, 0];
              a
                ? (d = d.map(() => l[r] * i))
                : n
                ? (d = d.map(
                    () => l[r] * this.shadowBlurRatio * this.shadowBlurRatio,
                  ))
                : o &&
                  (d[2] = l[r] * this.shadowBlurRatio * this.shadowBlurRatio);
              const c = () => l.width + d[1] + d[3],
                h = () => l.height + d[0] + d[2],
                p = { width: c(), height: h() };
              let v = { [s]: u[s], [r]: u[s] * (p[r] / p[s]) };
              (v.width < u.width + 1 && v.height < u.height + 1) ||
                (v = { [r]: u[r], [s]: u[r] * (p[s] / p[r]) });
              const f = v.height * (l.height / p.height);
              let m = null;
              if (o) {
                const e = Math.max(
                    6,
                    v.height *
                      (d[2] / p.height) *
                      (a ? this.watermarkFrameRatio : this.watermarkNoFrameRatio),
                  ),
                  n = l.height * (e / f),
                  o = p.width / v.width,
                  i = p.height / v.height;
                (m = { height: n, width: n * (t.width / t.height) }),
                  m.width > c() &&
                    (d[1] = d[3] = (m.width - l.width) / 2 + 1 * o),
                  m.height + d[0] + l.height > h() &&
                    (d[2] = m.height + 2 * i * 2),
                  !a &&
                    m.height / d[2] > this.watermarkBottomBorderNoFrameMaxRatio &&
                    (d[2] = m.height / this.watermarkBottomBorderNoFrameMaxRatio);
              }
              let g = null;
              if (n) {
                g = l.height * (this.shadowBlurWidth / f);
                const e = Math.min.apply(null, d);
                g > Math.min.apply(null, d) && (g = e);
              }
              const w = { width: c(), height: h() };
              return (
                (this.canvasScale = yield (0, k.mi)(w.width, w.height)),
                (this.canvas.width = w.width * this.canvasScale),
                (this.canvas.height = w.height * this.canvasScale),
                {
                  context: this.canvas.getContext("2d"),
                  border: d.map((e) => e * this.canvasScale),
                  watermarkSize: {
                    width: (null == m ? void 0 : m.width) * this.canvasScale,
                    height: (null == m ? void 0 : m.height) * this.canvasScale,
                  },
                  shadowBlur: g * this.canvasScale,
                }
              );
            });
          }
          drawFrame(e) {
            const { frame: t, frameColor: a } = this.options;
            (e.fillStyle = t ? a : "rgba(0, 0, 0, 0)"),
              e.fillRect(0, 0, this.canvas.width, this.canvas.height);
          }
          drawShadow(e, t, a, n) {
            const { shadow: o } = this.options;
            o &&
              ((e.fillStyle = "#FFF"),
              (e.shadowBlur = n),
              (e.shadowColor = this.shadowColor),
              e.fillRect(
                a[3],
                a[0],
                t.width * this.canvasScale,
                t.height * this.canvasScale,
              ));
          }
          drawImage(e, t, a) {
            (e.imageSmoothingEnabled = !1),
              e.drawImage(
                t,
                a[3],
                a[0],
                t.width * this.canvasScale,
                t.height * this.canvasScale,
              );
          }
          drawWatermark(e, t, a, n, o) {
            const { watermark: i } = this.options;
            if (!i) return;
            e.imageSmoothingEnabled = !1;
            const l = n[2],
              { width: r, height: s } = o;
            let u = n[3],
              d = n[0] + t.height * this.canvasScale;
            (u += (t.width * this.canvasScale - r) / 2),
              (d += (l - s) / 2),
              e.drawImage(a, u, d, r, s);
          }
          getPngDataURL() {
            return this.canvas.toDataURL("image/png");
          }
          build() {
            return z(this, void 0, void 0, function* () {
              const e = yield this.loadImage(this.imageDataUrl),
                t = yield this.loadImage(
                  this.options.frame
                    ? "light" === this.watermarkColor
                      ? this.watermarkDarkUrl
                      : this.watermarkUrl
                    : this.watermarkDarkUrl,
                ),
                {
                  context: a,
                  border: n,
                  watermarkSize: o,
                  shadowBlur: i,
                } = yield this.initCanvas(e, t);
              return (
                this.drawFrame(a),
                this.drawShadow(a, e, n, i),
                this.drawImage(a, e, n),
                this.drawWatermark(a, e, t, n, o),
                this.getPngDataURL()
              );
            });
          }
        }
        var U = a(27049),
          N = a(84374),
          Z = a(12455),
          Y = function (e, t, a, n) {
            return new (a || (a = Promise))(function (o, i) {
              function l(e) {
                try {
                  s(n.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function r(e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                var t;
                e.done
                  ? o(e.value)
                  : ((t = e.value),
                    t instanceof a
                      ? t
                      : new a(function (e) {
                          e(t);
                        })).then(l, r);
              }
              s((n = n.apply(e, t || [])).next());
            });
          };
        const X = (0, n.aZ)({
          __name: "map-shot-v2",
          setup(e) {
            const t = [400, 400],
              a = "free",
              o = (0, s.ZP)("map-shot"),
              f = (0, n.FN)().proxy,
              { T: m } = (0, b.JE)();
            let g = null;
            const k = (0, n.iH)(!1),
              y = (0, n.iH)(!1),
              S = (0, n.iH)(!1),
              x = (0, n.iH)(null),
              C = (0, n.iH)(null),
              _ = (0, n.iH)(!1),
              F = (0, n.iH)(null),
              M = (0, n.iH)(null);
            let B = null;
            (0, n.bv)(() => {
              q(!1),
                (x.value = new P({ currentBrowserWindowId: window.id })),
                f.$el.focus(),
                (oe = ne());
            }),
              (0, n.Jd)(() => {
                q(!0), x.value.destroy(), oe && oe(), le();
              });
            const T = (0, n.Fl)(() => (0, b.S)().appearance),
              V = (0, n.Fl)(() =>
                (0, U.E)().getZoomScaleForSheet((0, N.nZ)().activeSheetId.value),
              ),
              A = (0, n.Fl)(() => (0, b.tP)().screenshot.size || t),
              H = (0, n.Fl)(() => (0, b.tP)().screenshot.rate || a),
              R = (0, n.Fl)(() => (0, N.nZ)().editorContainer.value),
              W = (0, n.Fl)(() => {
                const e = Object.assign({}, (0, b.tP)().modalOptions);
                return (
                  true
                    ? (e.watermark = (0, b.S)().watermarkEnabled)
                    : (e.watermark = !0),
                  e
                );
              }),
              $ = (0, n.Fl)(() => {
                const e = (0, Z.r)(),
                  t = (null == e ? void 0 : e.editorViewInfos.length) > 1;
                return (null == e ? void 0 : e.isShowTabBar) || t;
              }),
              E = (0, n.Fl)(() => 52 + ($.value ? 28 : 0)),
              O = (0, n.Fl)(() => {
                const e = j.value.children[0];
                return {
                  width: parseFloat(e.getAttribute("width")),
                  height: parseFloat(e.getAttribute("height")),
                };
              }),
              z = (0, n.Fl)(() =>
                j.value.children[0].children[0].getAttribute("transform"),
              ),
              X = (0, n.Fl)(() => {
                const [e] = v().getSize();
                let t = 10;
                return (
                  j.value.clientWidth === e && (t = 0),
                  { bottom: `${30 + t}px`, right: `${t}px`, top: `${E.value}px` }
                );
              }),
              G = (0, n.Fl)(() => {
                var e, t, a, n;
                const o =
                    null !==
                      (n =
                        null ===
                          (a =
                            null ===
                              (t =
                                null === (e = (0, N.nZ)().styles) || void 0 === e
                                  ? void 0
                                  : e.value) || void 0 === t
                              ? void 0
                              : t.mapBackgroundColor) || void 0 === a
                          ? void 0
                          : a.value) && void 0 !== n
                      ? n
                      : "none",
                  i = "none" === o ? "#FFFFFF" : o,
                  l = [
                    parseInt("0x" + i.slice(1, 3)),
                    parseInt("0x" + i.slice(3, 5)),
                    parseInt("0x" + i.slice(5, 7)),
                  ];
                return (l[0] + l[1] + l[2]) / 3;
              }),
              j = (0, n.Fl)(() => {
                const { sheets: e, activeSheetId: t } = (0, N.nZ)(),
                  a = e.value.findIndex((e) => e.id === t.value);
                if (a < 0) return;
                const n = R.value.children[a];
                return n || null;
              }),
              q = (e) => {
                const t = v();
                t.setResizable(e), t.setMaximizable(e), t.setFullScreenable(e);
              },
              J = (e) =>
                Y(this, void 0, void 0, function* () {
                  y.value = !0;
                  const t = `Xmind ${Date.now()}`,
                    a = i().join(ue(), `${t}.png`);
                  F.value = a;
                  try {
                    yield (function (e, t, a) {
                      const { nativeImage: n, clipboard: o } = p,
                        { mimetype: i = "image/png" } = a;
                      let l;
                      return (
                        Buffer.isBuffer(t)
                          ? (l = t)
                          : "string" == typeof t &&
                            (l = Buffer.from(
                              t.replace(`data:${i};base64,`, ""),
                              "base64",
                            )),
                        a.clipboard && o.writeImage(n.createFromBuffer(l)),
                        d.Z.writeFile(e, l)
                      );
                    })(a, e, { clipboard: !0 });
                  } catch (t) {
                    let [a] = yield (0, r.N0)({
                      type: "info",
                      message: m("Failed to save image"),
                      detail: m(
                        "Xmind has no permission to access this folder. Please change another one.",
                      ),
                      buttons: [m("Continue"), m("Cancel")],
                      defaultId: 0,
                      cancelId: 1,
                    });
                    if (0 == a) {
                      let t = yield (0, r.ZZ)({
                        suggestPath: (0, r.am)({}),
                        filters: [{ name: "PNG", extensions: ["png"] }],
                      });
                      t && d.Z.writeFile(t, e);
                    }
                  }
                  y.value = !1;
                }),
              K = { width: 2e3, height: 2e3 },
              Q = (e) =>
                Y(this, void 0, void 0, function* () {
                  const { activeSheetViewer: t } = (0, N.nZ)(),
                    a = yield t.value.exportSVGElement({
                      opaqueBackground: !0,
                      disableEmbedFonts: !0,
                    }),
                    n = document.createElement("div");
                  (n.style.width = K.width + "px"),
                    (n.style.height = K.height + "px"),
                    (n.style.position = "fixed"),
                    (n.style.left = "0"),
                    (n.style.top = "0"),
                    (n.style.overflow = "hidden"),
                    n.appendChild(a);
                  const { width: o, height: i } = O.value;
                  a.setAttribute("width", o.toString()),
                    a.setAttribute("height", i.toString()),
                    a.removeAttribute("viewBox");
                  const l = a.querySelector('g[data-view-id="preview"]'),
                    r =
                      `translate(${-(e.left + j.value.scrollLeft)}, ${-(
                        e.top + j.value.scrollTop
                      )}) ` + z.value;
                  return l.setAttribute("transform", r), n;
                }),
              ee = (e) =>
                Y(this, void 0, void 0, function* () {
                  const t = yield Q(e);
                  return x.value.capturePage(
                    {
                      "after/showWindow": () =>
                        Y(this, void 0, void 0, function* () {
                          (S.value = !0), yield (0, n.Y3)();
                        }),
                      "after/capturePage": () =>
                        Y(this, void 0, void 0, function* () {
                          k.value = !0;
                        }),
                    },
                    t,
                    { width: e.width, height: e.height },
                    K,
                  );
                }),
              te = (e, t) => {
                (0, u.L9)({
                  eventAction: "clickCaptureMap",
                  eventName: "mapShotRatio",
                  eventValue: e,
                }),
                  (0, u.L9)({
                    eventAction: "clickCaptureMap",
                    eventName: "mapShotResolution",
                    eventValue: JSON.stringify(t),
                  });
              },
              ae = (() => {
                let e = null;
                return () => (
                  e || (e = document.getElementById("map-shot-modal")), e
                );
              })(),
              ne = () => {
                const e = document.querySelector("#map-shot-modal"),
                  t = new MutationObserver((t) => {
                    t.forEach((t) => {
                      "attributes" === t.type &&
                        "class" === t.attributeName &&
                        (!t.oldValue.includes("uk-open") &&
                        e.getAttribute("class").includes("uk-open")
                          ? (_.value = !0)
                          : t.oldValue.includes("uk-open") &&
                            !e.getAttribute("class").includes("uk-open") &&
                            (_.value = !1));
                    });
                  });
                return (
                  t.observe(e, {
                    attributes: !0,
                    attributeFilter: ["class"],
                    attributeOldValue: !0,
                  }),
                  () => {
                    t.disconnect();
                  }
                );
              };
            let oe = null;
            const ie = () => {
                const { UIkit: e } = window,
                  t = ae();
                return e.modal(t);
              },
              le = () => {
                const e = ie();
                e && (e.hide(), e.$destroy(!0));
              },
              re = (e) =>
                Y(this, void 0, void 0, function* () {
                  var t;
                  (C.value = e),
                    yield (0, n.Y3)(),
                    null === (t = ie()) || void 0 === t || t.show();
                }),
              se = (e, t, a, n, o) => {
                true &&
                  (0, u.L9)({
                    eventAction: "watermarkStatus",
                    eventName: a
                      ? "MapShotwithWatermark"
                      : "MapShotwithoutWatermark",
                  }),
                  (0, u.L9)({ eventAction: "addBorder", eventValue: e }),
                  (0, u.L9)({ eventAction: "addShadow", eventValue: t }),
                  (0, u.L9)({ eventAction: "addWatermark", eventValue: a }),
                  e &&
                    ((0, u.L9)({ eventAction: "borderWidth", eventValue: n }),
                    (0, u.L9)({ eventAction: "borderColor", eventValue: o }));
              },
              ue = () => {
                let e = null;
                try {
                  e = p.app.getPath("desktop");
                } catch (t) {
                  o.error((0, c.SC)(t)), (e = (0, r.am)({}));
                }
                return e;
              },
              de = () => {
                var e, t;
                F.value
                  ? ((t = F.value), h.shell.showItemInFolder(t))
                  : ((e = ue()), h.shell.openPath(e));
              };
            return {
              __sfc: !0,
              WIN_SCROLL_BAR_WIDTH: 10,
              MAC_LINUX_SCROLL_BAR_WIDTH: 15,
              WHEEL_MAX_DELTA_Y: 10,
              MAP_SHOT_DEFAULT_SIZE: t,
              MAP_SHOT_DEFAULT_RATE: a,
              logger: o,
              vm: f,
              $T: m,
              resetMapShotFrameStyle: g,
              isShowMapShotMask: k,
              isSaving: y,
              isTakingShot: S,
              pageCapturer: x,
              tmpPngBuffer: C,
              isShowModal: _,
              mapShotFilePath: F,
              mapShotFrameComponent: M,
              uikitSaveToast: B,
              appearance: T,
              zoomScaleForActiveSheet: V,
              defaultSize: A,
              defaultRate: H,
              editorContainer: R,
              defaultModalOptions: W,
              isShowTabBar: $,
              topbarHeight: E,
              canvasClient: O,
              canvasContentTransform: z,
              containerStyle: X,
              mindMapBackgroundGrayscale: G,
              activeSheetContainer: j,
              onWheelAndPinch: (e) => {
                if (e.ctrlKey) {
                  const t =
                    Math.abs(e.deltaY) > 10
                      ? (e.deltaY / Math.abs(e.deltaY)) * 10
                      : e.deltaY;
                  let a = Math.floor(-t) + V.value;
                  a > l.Y1 ? (a = l.Y1) : a < l.d_ && (a = l.d_),
                    (0, U.E)().updateSheetStatus({
                      id: (0, N.nZ)().activeSheetId.value,
                      zoomScale: a,
                    });
                } else j.value.scrollBy(e.deltaX, e.deltaY);
              },
              setBrowserWindowResizable: q,
              saveImg: J,
              CHUNK_SIZE: K,
              makeCaptureSVG: Q,
              capturePage: ee,
              onTakeShot: (e, t, a) =>
                Y(this, void 0, void 0, function* () {
                  if (y.value) return;
                  if (null == B ? void 0 : B.close) {
                    const e = !0;
                    B.close(e), (B = null);
                  }
                  const o = yield ee(e);
                  re(o),
                    yield (0, n.Y3)(),
                    (S.value = !1),
                    (k.value = !1),
                    (M.value.isShowGoMapShotBar = !1),
                    (0, b.tP)().updateScreenshot({ rate: t, size: a }),
                    te(t, a);
                }),
              trackClickMapShotEvent: te,
              getMapShotModalEl: ae,
              addMapShotModalEventListener: ne,
              removeMapShotModalEventListener: oe,
              getMapShotModal: ie,
              closeMapShotModal: le,
              openMapShotModal: re,
              onMapShotModalCancel: () => {
                le();
              },
              onMapShotModalSave: (e, t) =>
                Y(this, void 0, void 0, function* () {
                  const a = new D(e, t),
                    o = yield a.build();
                  J(L(o)),
                    (0, n.Y3)(() => {
                      le(),
                        (0, b.tP)().updateModalOptions({
                          frame: t.frame,
                          shadow: t.shadow,
                          frameColor: t.frameColor,
                          frameWidth: t.frameWidth,
                        }),
                        (0, b.S)().updatePreferences({
                          watermarkEnabled: t.watermark,
                        }),
                        f.$withUIKit((e) => {
                          const t = `<div class="uk-button-group">\n            <button\n            class="uk-button uk-button-link"\n            focustrigger="cannotGetFocusByMouse">\n              ${m(
                            "Open Folder",
                          )}\n            </button>\n            </div>`;
                          B = e.toast({
                            message: m(
                              "The map you captured is saved and copied.",
                            ),
                            pos: "bottom-center",
                            timeout: 4e3,
                            btn: t,
                            onclose: () => {
                              var e, t;
                              null ===
                                (t =
                                  null === (e = null == B ? void 0 : B.$el) ||
                                  void 0 === e
                                    ? void 0
                                    : e.parentElement) ||
                                void 0 === t ||
                                t.remove();
                            },
                            style: { width: "360px" },
                            btnClick: de,
                          });
                        }),
                        se(
                          t.frame,
                          t.shadow,
                          t.watermark,
                          t.frameWidth,
                          t.frameColor,
                        );
                    });
                }),
              trackSaveMapShotModalEvent: se,
              onCloseMapShot: () => {
                (0, b.JX)().handleCommand("mapShot");
              },
              getMapShotFolder: ue,
              onOpenMapShotFolder: de,
              MapShotFrame: w,
              MapShotModal: I,
            };
          },
        });
        a(74955);
        const G = (0, g.Z)(
          X,
          function () {
            var e = this,
              t = e._self._c,
              a = e._self._setupProxy;
            return t(
              "div",
              {
                attrs: { tabindex: "0" },
                on: {
                  keyup: function (t) {
                    return !t.type.indexOf("key") &&
                      e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"])
                      ? null
                      : a.onCloseMapShot.apply(null, arguments);
                  },
                },
              },
              [
                t(a.MapShotFrame, {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !a.isShowModal,
                      expression: "!isShowModal",
                    },
                  ],
                  ref: "mapShotFrameComponent",
                  attrs: {
                    visible: !a.isTakingShot,
                    "default-size": a.defaultSize,
                    "default-rate": a.defaultRate,
                    appearance: a.appearance,
                    "container-style": a.containerStyle,
                    "background-grayscale": a.mindMapBackgroundGrayscale,
                    "sheet-container-element": a.activeSheetContainer,
                    "canvas-width": a.canvasClient.width,
                    "canvas-height": a.canvasClient.height,
                    "top-bar-height": a.topbarHeight,
                    "is-taking-shot": a.isTakingShot,
                  },
                  on: {
                    mousewheel: a.onWheelAndPinch,
                    close: a.onCloseMapShot,
                    takeshot: a.onTakeShot,
                  },
                }),
                e._v(" "),
                t(a.MapShotModal, {
                  attrs: {
                    "png-buffer": a.tmpPngBuffer,
                    appearance: a.appearance,
                    "default-checked-frame": a.defaultModalOptions.frame,
                    "default-checked-shadow": a.defaultModalOptions.shadow,
                    "default-checked-watermark": a.defaultModalOptions.watermark,
                    "default-frame-color": a.defaultModalOptions.frameColor,
                    "default-frame-width": a.defaultModalOptions.frameWidth,
                  },
                  on: {
                    save: a.onMapShotModalSave,
                    cancel: a.onMapShotModalCancel,
                  },
                }),
                e._v(" "),
                t(
                  "keep-alive",
                  [
                    t(
                      "transition",
                      {
                        attrs: {
                          "leave-active-class":
                            "uk-animation-fade uk-animation-reverse uk-animation-duration-500ms",
                        },
                      },
                      [
                        a.isShowMapShotMask
                          ? t("div", {
                              staticClass:
                                "uk-position-fixed uk-height-1-1 uk-width-1-1 uk-panel uk-position-cover",
                              staticStyle: {
                                "z-index": "1021",
                                "background-color": "white",
                              },
                            })
                          : e._e(),
                      ],
                    ),
                  ],
                  1,
                ),
              ],
              1,
            );
          },
          [],
          !1,
          null,
          "d6a50b24",
          null,
        ).exports;
      },
      20748: (e, t, a) => {
        var n = a(78933);
        n.__esModule && (n = n.default),
          "string" == typeof n && (n = [[e.id, n, ""]]),
          n.locals && (e.exports = n.locals);
        (0, a(45346).Z)("fa99620a", n, !0, {});
      },
      59343: (e, t, a) => {
        var n = a(75126);
        n.__esModule && (n = n.default),
          "string" == typeof n && (n = [[e.id, n, ""]]),
          n.locals && (e.exports = n.locals);
        (0, a(45346).Z)("0a5b7d4a", n, !0, {});
      },
      74955: (e, t, a) => {
        var n = a(70403);
        n.__esModule && (n = n.default),
          "string" == typeof n && (n = [[e.id, n, ""]]),
          n.locals && (e.exports = n.locals);
        (0, a(45346).Z)("9e8e6a5e", n, !0, {});
      },
      45346: (e, t, a) => {
        "use strict";
        function n(e, t) {
          for (var a = [], n = {}, o = 0; o < t.length; o++) {
            var i = t[o],
              l = i[0],
              r = { id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3] };
            n[l] ? n[l].parts.push(r) : a.push((n[l] = { id: l, parts: [r] }));
          }
          return a;
        }
        a.d(t, { Z: () => v });
        var o = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !o)
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
          );
        var i = {},
          l = o && (document.head || document.getElementsByTagName("head")[0]),
          r = null,
          s = 0,
          u = !1,
          d = function () {},
          c = null,
          h = "data-vue-ssr-id",
          p =
            "undefined" != typeof navigator &&
            /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function v(e, t, a, o) {
          (u = a), (c = o || {});
          var l = n(e, t);
          return (
            f(l),
            function (t) {
              for (var a = [], o = 0; o < l.length; o++) {
                var r = l[o];
                (s = i[r.id]).refs--, a.push(s);
              }
              t ? f((l = n(e, t))) : (l = []);
              for (o = 0; o < a.length; o++) {
                var s;
                if (0 === (s = a[o]).refs) {
                  for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                  delete i[s.id];
                }
              }
            }
          );
        }
        function f(e) {
          for (var t = 0; t < e.length; t++) {
            var a = e[t],
              n = i[a.id];
            if (n) {
              n.refs++;
              for (var o = 0; o < n.parts.length; o++) n.parts[o](a.parts[o]);
              for (; o < a.parts.length; o++) n.parts.push(g(a.parts[o]));
              n.parts.length > a.parts.length &&
                (n.parts.length = a.parts.length);
            } else {
              var l = [];
              for (o = 0; o < a.parts.length; o++) l.push(g(a.parts[o]));
              i[a.id] = { id: a.id, refs: 1, parts: l };
            }
          }
        }
        function m() {
          var e = document.createElement("style");
          return (e.type = "text/css"), l.appendChild(e), e;
        }
        function g(e) {
          var t,
            a,
            n = document.querySelector("style[" + h + '~="' + e.id + '"]');
          if (n) {
            if (u) return d;
            n.parentNode.removeChild(n);
          }
          if (p) {
            var o = s++;
            (n = r || (r = m())),
              (t = k.bind(null, n, o, !1)),
              (a = k.bind(null, n, o, !0));
          } else
            (n = m()),
              (t = y.bind(null, n)),
              (a = function () {
                n.parentNode.removeChild(n);
              });
          return (
            t(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                t((e = n));
              } else a();
            }
          );
        }
        var w,
          b =
            ((w = []),
            function (e, t) {
              return (w[e] = t), w.filter(Boolean).join("\n");
            });
        function k(e, t, a, n) {
          var o = a ? "" : n.css;
          if (e.styleSheet) e.styleSheet.cssText = b(t, o);
          else {
            var i = document.createTextNode(o),
              l = e.childNodes;
            l[t] && e.removeChild(l[t]),
              l.length ? e.insertBefore(i, l[t]) : e.appendChild(i);
          }
        }
        function y(e, t) {
          var a = t.css,
            n = t.media,
            o = t.sourceMap;
          if (
            (n && e.setAttribute("media", n),
            c.ssrId && e.setAttribute(h, t.id),
            o &&
              ((a += "\n/*# sourceURL=" + o.sources[0] + " */"),
              (a +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                " */")),
            e.styleSheet)
          )
            e.styleSheet.cssText = a;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(a));
          }
        }
      },
      7836: (e, t, a) => {
        "use strict";
        a.d(t, { Z: () => v });
        var n = {
          name: "teleport",
          props: {
            to: { type: String, required: !0 },
            where: { type: String, default: "after" },
            disabled: Boolean,
          },
          data: function () {
            return { nodes: [], waiting: !1, observer: null, parent: null };
          },
          watch: {
            to: "maybeMove",
            where: "maybeMove",
            disabled: function (e) {
              e
                ? (this.disable(), this.teardownObserver())
                : (this.bootObserver(), this.move());
            },
          },
          mounted: function () {
            (this.nodes = Array.from(this.$el.childNodes)),
              this.disabled || this.bootObserver(),
              this.maybeMove();
          },
          beforeDestroy: function () {
            this.disable(), this.teardownObserver();
          },
          computed: {
            classes: function () {
              return this.disabled ? ["teleporter"] : ["teleporter", "hidden"];
            },
          },
          methods: {
            maybeMove: function () {
              this.disabled || this.move();
            },
            move: function () {
              if (
                ((this.waiting = !1),
                (this.parent = document.querySelector(this.to)),
                !this.parent)
              )
                return this.disable(), void (this.waiting = !0);
              "before" === this.where
                ? this.parent.prepend(this.getFragment())
                : this.parent.appendChild(this.getFragment());
            },
            disable: function () {
              this.$el.appendChild(this.getFragment()), (this.parent = null);
            },
            getFragment: function () {
              var e = document.createDocumentFragment();
              return (
                this.nodes.forEach(function (t) {
                  return e.appendChild(t);
                }),
                e
              );
            },
            onMutations: function (e) {
              for (var t = this, a = !1, n = 0; n < e.length; n++) {
                var o = e[n],
                  i = Array.from(o.addedNodes).filter(function (e) {
                    return !t.nodes.includes(e);
                  });
                Array.from(o.removedNodes).includes(this.parent)
                  ? (this.disable(), (this.waiting = !this.disabled))
                  : this.waiting && i.length > 0 && (a = !0);
              }
              a && this.move();
            },
            bootObserver: function () {
              var e = this;
              this.observer ||
                ((this.observer = new MutationObserver(function (t) {
                  return e.onMutations(t);
                })),
                this.observer.observe(document.body, {
                  childList: !0,
                  subtree: !0,
                  attributes: !1,
                  characterData: !1,
                }));
            },
            teardownObserver: function () {
              this.observer &&
                (this.observer.disconnect(), (this.observer = null));
            },
          },
        };
        function o(e, t, a, n, o, i, l, r, s, u) {
          "boolean" != typeof l && ((s = r), (r = l), (l = !1));
          var d,
            c = "function" == typeof a ? a.options : a;
          if (
            (e &&
              e.render &&
              ((c.render = e.render),
              (c.staticRenderFns = e.staticRenderFns),
              (c._compiled = !0),
              o && (c.functional = !0)),
            n && (c._scopeId = n),
            i
              ? ((d = function (e) {
                  (e =
                    e ||
                    (this.$vnode && this.$vnode.ssrContext) ||
                    (this.parent &&
                      this.parent.$vnode &&
                      this.parent.$vnode.ssrContext)) ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                    t && t.call(this, s(e)),
                    e &&
                      e._registeredComponents &&
                      e._registeredComponents.add(i);
                }),
                (c._ssrRegister = d))
              : t &&
                (d = l
                  ? function (e) {
                      t.call(this, u(e, this.$root.$options.shadowRoot));
                    }
                  : function (e) {
                      t.call(this, r(e));
                    }),
            d)
          )
            if (c.functional) {
              var h = c.render;
              c.render = function (e, t) {
                return d.call(t), h(e, t);
              };
            } else {
              var p = c.beforeCreate;
              c.beforeCreate = p ? [].concat(p, d) : [d];
            }
          return a;
        }
        var i,
          l =
            "undefined" != typeof navigator &&
            /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
        function r(e) {
          return function (e, t) {
            return (function (e, t) {
              var a = l ? t.media || "default" : e,
                n = s[a] || (s[a] = { ids: new Set(), styles: [] });
              if (!n.ids.has(e)) {
                n.ids.add(e);
                var o = t.source;
                if (
                  (t.map &&
                    ((o += "\n/*# sourceURL=" + t.map.sources[0] + " */"),
                    (o +=
                      "\n/*# sourceMappingURL=data:application/json;base64," +
                      btoa(unescape(encodeURIComponent(JSON.stringify(t.map)))) +
                      " */")),
                  n.element ||
                    ((n.element = document.createElement("style")),
                    (n.element.type = "text/css"),
                    t.media && n.element.setAttribute("media", t.media),
                    void 0 === i &&
                      (i =
                        document.head ||
                        document.getElementsByTagName("head")[0]),
                    i.appendChild(n.element)),
                  "styleSheet" in n.element)
                )
                  n.styles.push(o),
                    (n.element.styleSheet.cssText = n.styles
                      .filter(Boolean)
                      .join("\n"));
                else {
                  var r = n.ids.size - 1,
                    u = document.createTextNode(o),
                    d = n.element.childNodes;
                  d[r] && n.element.removeChild(d[r]),
                    d.length
                      ? n.element.insertBefore(u, d[r])
                      : n.element.appendChild(u);
                }
              }
            })(e, t);
          };
        }
        var s = {};
        var u = n,
          d = function () {
            var e = this,
              t = e.$createElement;
            return (e._self._c || t)(
              "div",
              { class: e.classes },
              [e._t("default")],
              2,
            );
          };
        d._withStripped = !0;
        var c = o(
          { render: d, staticRenderFns: [] },
          function (e) {
            e &&
              e("data-v-d4e6e290_0", {
                source:
                  ".hidden[data-v-d4e6e290] {\n  visibility: hidden;\n  display: none;\n}\n\n/*# sourceMappingURL=Teleport.vue.map */",
                map: {
                  version: 3,
                  sources: [
                    "/Users/shodan/Projects/vue2-teleport/src/Teleport.vue",
                    "Teleport.vue",
                  ],
                  names: [],
                  mappings: "AAuJA;EACA,kBAAA;EACA,aAAA;ACtJA;;AAEA,uCAAuC",
                  file: "Teleport.vue",
                  sourcesContent: [
                    "<template>\n  <div :class=\"classes\">\n    <slot/>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'teleport',\n  props: {\n    to: {\n      type: String,\n      required: true,\n    },\n    where: {\n      type: String,\n      default: 'after',\n    },\n    disabled: Boolean,\n  },\n  data() {\n    return {\n      nodes: [],\n      waiting: false,\n      observer: null,\n      parent: null,\n    };\n  },\n  watch: {\n    to: 'maybeMove',\n    where: 'maybeMove',\n    disabled(value) {\n      if (value) {\n        this.disable();\n        this.teardownObserver();\n      } else {\n        this.bootObserver();\n        this.move();\n      }\n    },\n  },\n  mounted() {\n    // Store a reference to the nodes\n    this.nodes = Array.from(this.$el.childNodes);\n\n    if (!this.disabled) {\n      this.bootObserver();\n    }\n\n    // Move slot content to target\n    this.maybeMove();\n  },\n  beforeDestroy() {\n    // Move back\n    this.disable();\n\n    // Stop observing\n    this.teardownObserver();\n  },\n  computed: {\n    classes() {\n      if (this.disabled) {\n        return ['teleporter'];\n      }\n\n      return ['teleporter', 'hidden'];\n    },\n  },\n  methods: {\n    maybeMove() {\n      if (!this.disabled) {\n        this.move();\n      }\n    },\n    move() {\n      this.waiting = false;\n\n      this.parent = document.querySelector(this.to);\n\n      if (!this.parent) {\n        this.disable();\n\n        this.waiting = true;\n\n        return;\n      }\n\n      if (this.where === 'before') {\n        this.parent.prepend(this.getFragment());\n      } else {\n        this.parent.appendChild(this.getFragment());\n      }\n    },\n    disable() {\n      this.$el.appendChild(this.getFragment());\n      this.parent = null;\n    },\n    // Using a fragment is faster because it'll trigger only a single reflow\n    // See https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment\n    getFragment() {\n      const fragment = document.createDocumentFragment();\n\n      this.nodes.forEach(node => fragment.appendChild(node));\n\n      return fragment;\n    },\n    onMutations(mutations) {\n      // Makes sure the move operation is only done once\n      let shouldMove = false;\n\n      for (let i = 0; i < mutations.length; i++) {\n        const mutation = mutations[i];\n        const filteredAddedNodes = Array.from(mutation.addedNodes).filter(node => !this.nodes.includes(node));\n\n        if (Array.from(mutation.removedNodes).includes(this.parent)) {\n          this.disable();\n          this.waiting = !this.disabled;\n        } else if (this.waiting && filteredAddedNodes.length > 0) {\n          shouldMove = true;\n        }\n      }\n\n      if (shouldMove) {\n        this.move();\n      }\n    },\n    bootObserver() {\n      if (this.observer) {\n        return;\n      }\n\n      this.observer = new MutationObserver(mutations => this.onMutations(mutations));\n\n      this.observer.observe(document.body, {\n        childList: true,\n        subtree: true,\n        attributes: false,\n        characterData: false,\n      });\n    },\n    teardownObserver() {\n      if (this.observer) {\n        this.observer.disconnect();\n        this.observer = null;\n      }\n    },\n  },\n};\n</script>\n\n<style scoped lang=\"scss\">\n.hidden {\n  visibility: hidden;\n  display: none;\n}\n</style>\n",
                    ".hidden {\n  visibility: hidden;\n  display: none;\n}\n\n/*# sourceMappingURL=Teleport.vue.map */",
                  ],
                },
                media: void 0,
              });
          },
          u,
          "data-v-d4e6e290",
          false,
          undefined,
          !1,
          r,
          void 0,
          void 0,
        );
        var h = {
            install: function e(t) {
              e.installed || ((e.installed = !0), t.component("Teleport", c));
            },
          },
          p = null;
        "undefined" != typeof window
          ? (p = window.Vue)
          : "undefined" != typeof global && (p = global.Vue),
          p && p.use(h);
        const v = c;
      },
    },
  ]);
  