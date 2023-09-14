(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
    [495],
    {
      3372: (t, e, a) => {
        "use strict";
        a.r(e), a.d(e, { default: () => n });
        var i = a(23645),
          s = a.n(i)()(function (t) {
            return t[1];
          });
        s.push([
          t.id,
          ".uk-form-aligned > div > .uk-form-label[data-v-036abc77] {\n  width: 90px;\n}\n.selection-checkbox[data-v-036abc77] {\n  width: auto;\n  min-width: 150px;\n  max-width: 200px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding: 4px 16px 4px 22px;\n}\n.selection-checkbox[data-v-036abc77]:first-child {\n  padding-top: 16px;\n}\n.selection-checkbox[data-v-036abc77]:last-child {\n  padding-bottom: 14px;\n}\n",
          "",
        ]);
        const n = s;
      },
      40334: (t, e, a) => {
        "use strict";
        a.d(e, { Z: () => l });
        var i = a(63111),
          s = a(54856),
          n = a(96829),
          r = a(78152),
          o = a(90435);
        const l = {
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
                      endpoint: (0, s.A6)(window.id, (0, n.rs)(e)),
                    }),
                    (this._touchBarRoutes[e] = a)),
                  a.unroute || (a.unroute = o.ZP.route(a.endpoint, this[e])),
                  Object.assign({}, t, { click: a.endpoint })
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
                (0, r.JS)("window")?.().updateTouchBarItems(t);
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
      18931: (t, e, a) => {
        "use strict";
        a.r(e);
        var i = a(22244),
          s = a(63477),
          n = a.n(s),
          r = a(54856),
          o = a(90435),
          l = a(18621),
          c = a(40334),
          u = a(72917),
          p = a(11248),
          d = a.n(p);
        var h = a(78152),
          x = a(95246);
        const k = n().parse(window.location.search.slice(1)),
          m = {
            mixins: [c.Z],
            data() {
              return {
                exportType: k.type || "png",
                exportContentScope: 0,
                exportScale: 1,
                exportTransparent: !1,
                exportSplitByMainBranch: !1,
                iconWarning: this.$toResourceURL(
                  "static/images/dialog-export-to-image/warning.svg",
                ),
                iconLock: this.$toResourceURL(
                  "static/images/dialog-export-to-image/lock.svg",
                ),
                proIcon: this.$toResourceURL(
                  "static/assets/images/pro/menu-pro@2x.png",
                ),
                exportAvailableScales: [
                  { title: "100%", trialRequest: null },
                  { title: "200%", trialRequest: "action.export2ScaleImage" },
                  { title: "300%", trialRequest: "action.export2ScaleImage" },
                ],
                hasWatermark: !1,
                editorId: k.editorId,
                routeId: k.routeId,
                sheetIds: Array.isArray(k.sheetIds) ? k.sheetIds : [k.sheetIds],
                sheetTitles: Array.isArray(k.sheetTitles)
                  ? k.sheetTitles
                  : [k.sheetTitles],
                currentSheetId: k.currentSheetId,
                splitAbleSheetIds: Array.isArray(k.splitAbleSheetIds)
                  ? k.splitAbleSheetIds
                  : [k.splitAbleSheetIds],
                smartSplitInUpdate: !1,
                allSheetPreviews: {},
                allSmartSplitPreviews: {},
                allTransparentSmartSplitPreviews: {},
                currentIndex: 1,
                mapSelectionIndexes: [],
              };
            },
            created() {
              this.sheetIds.forEach((t, e) => this.mapSelectionIndexes.push(e)),
                "svg" !== this.exportType &&
                  (this.hasWatermark =
                    !this.isActivationStatusValid || this.watermarkEnabled),
                this.getPreview();
            },
            mounted() {
              !(function (t) {
                const e = JSON.parse(
                  '{"v":"5.6.8","fr":60,"ip":0,"op":145,"w":400,"h":400,"nm":"split loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Rectangle 195","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,-1,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":114,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-20],[33.988,-12],[27.988,-6],[-28.012,-6],[-34.012,-12],[-34,-20],[-28,-26],[28,-26]],"c":true}]},{"t":144,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.051,8],[34.028,38.25],[28.028,44.25],[-27.972,44.25],[-33.972,38.25],[-33.949,8],[-27.949,2],[28.051,2]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 185","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":114,"op":342,"st":35,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Rectangle 194","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,95,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":114,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[33.988,-43.875],[34.051,-17.875],[28.051,-11.875],[-27.949,-11.875],[-33.949,-17.875],[-34.012,-43.875],[-28.012,-49.875],[27.988,-49.875]],"c":true}]},{"t":144,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.028,-40.25],[33.997,-4.875],[27.997,1.125],[-28.003,1.125],[-34.003,-4.875],[-33.972,-40.25],[-27.972,-46.25],[28.028,-46.25]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":114,"op":342,"st":35,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Rectangle 198","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,95,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":114,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[1.528,-1.875],[1.5,12],[-4.5,18],[-28,18],[-34,12],[-33.972,-1.875],[-27.972,-7.875],[-4.472,-7.875]],"c":true}]},{"t":144,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[33.587,-37.688],[33.545,-5.312],[27.545,0.688],[-27.955,0.75],[-33.955,-5.25],[-33.913,-37.625],[-27.913,-43.625],[27.587,-43.688]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":114,"op":306,"st":35,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Rectangle 197","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,95,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":114,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.028,-1.875],[34,12],[28,18],[12.25,18],[6.25,12],[6.278,-1.875],[12.278,-7.875],[28.028,-7.875]],"c":true}]},{"t":144,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.087,-39.125],[34.045,-5.5],[28.045,0.5],[-27.455,0.438],[-33.455,-5.562],[-33.413,-39.188],[-27.413,-45.188],[28.087,-45.125]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":114,"op":306,"st":35,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Rectangle 191","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,-1,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":78,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-20],[34.045,2.625],[28.045,8.625],[-27.955,8.625],[-33.955,2.625],[-34,-20],[-28,-26],[28,-26]],"c":true}]},{"t":108,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-20],[33.988,-12],[27.988,-6],[-28.012,-6],[-34.012,-12],[-34,-20],[-28,-26],[28,-26]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 185","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":78,"op":114,"st":24,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Rectangle 190","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,95,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":78,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.045,-29.75],[34,12],[28,18],[-28,18],[-34,12],[-33.955,-29.75],[-27.955,-35.75],[28.045,-35.75]],"c":true}]},{"t":108,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[33.988,-43.875],[34.051,-17.875],[28.051,-11.875],[-27.949,-11.875],[-33.949,-17.875],[-34.012,-43.875],[-28.012,-49.875],[27.988,-49.875]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":78,"op":114,"st":24,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Rectangle 192","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,95,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":78,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.051,-26.875],[34,12],[28,18],[-28,18],[-34,12],[-33.949,-26.875],[-27.949,-32.875],[28.051,-32.875]],"c":true}]},{"t":108,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[1.528,-1.875],[1.5,12],[-4.5,18],[-28,18],[-34,12],[-33.972,-1.875],[-27.972,-7.875],[-4.472,-7.875]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":78,"op":114,"st":24,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Rectangle 196","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,95,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":78,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.051,-26.875],[34,12],[28,18],[-28,18],[-34,12],[-33.949,-26.875],[-27.949,-32.875],[28.051,-32.875]],"c":true}]},{"t":108,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.028,-1.875],[34,12],[28,18],[12.25,18],[6.25,12],[6.278,-1.875],[12.278,-7.875],[28.028,-7.875]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":78,"op":114,"st":24,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Rectangle 189","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,-1,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":42,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-20],[34,20],[28,26],[-28,26],[-34,20],[-34,-20],[-28,-26],[28,-26]],"c":true}]},{"t":72,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-20],[34.045,2.625],[28.045,8.625],[-27.955,8.625],[-33.955,2.625],[-34,-20],[-28,-26],[28,-26]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 185","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":42,"op":78,"st":11,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Rectangle 188","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,95,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":42,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-12],[34,12],[28,18],[-28,18],[-34,12],[-34,-12],[-28,-18],[28,-18]],"c":true}]},{"t":72,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.045,-29.75],[34,12],[28,18],[-28,18],[-34,12],[-33.955,-29.75],[-27.955,-35.75],[28.045,-35.75]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":42,"op":78,"st":11,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Rectangle 187","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":6,"s":[50.091,62,0],"to":[0,5.5,0],"ti":[0,-5.5,0]},{"t":36,"s":[50.091,95,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-12],[34,12],[28,18],[-28,18],[-34,12],[-34,-12],[-28,-18],[28,-18]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 187","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":42,"st":-5,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Rectangle 199","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,49.916,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.5,"y":1},"o":{"x":0.5,"y":0},"t":6,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34,-18],[34,18],[28,24],[-28,24],[-34,18],[-34,-18],[-28,-24],[28,-24]],"c":true}]},{"t":36,"s":[{"i":[[0,-3.314],[0,0],[3.314,0],[0,0],[0,3.314],[0,0],[-3.314,0],[0,0]],"o":[[0,0],[0,3.314],[0,0],[-3.314,0],[0,0],[0,-3.314],[0,0],[3.314,0]],"v":[[34.045,-45],[34.045,-5.5],[28.045,0.5],[-27.955,0.5],[-33.955,-5.5],[-33.955,-45],[-27.955,-51],[28.045,-51]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 184","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":6,"op":42,"st":-6,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Rectangle 184","parent":14,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.091,49.916,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[68,48],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":6,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"fl","c":{"a":0,"k":[0.854901969433,0.854901969433,0.858823537827,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[200,200],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"Rectangle 184","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":6,"st":-6,"bm":0},{"ddd":0,"ind":14,"ty":3,"nm":"空 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[200,200,0],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}',
                );
                d().loadAnimation({
                  container: t,
                  renderer: "svg",
                  loop: !0,
                  autoplay: !0,
                  animationData: e,
                });
              })(this.$refs.slideLoadingAnimation);
            },
            computed: {
              displayPreviews() {
                if (this.exportSplitByMainBranch) {
                  const t = [];
                  return (
                    this.selectedSheetIds.forEach((e) => {
                      t.push(
                        ...(this.exportTransparent
                          ? this.allTransparentSmartSplitPreviews[e] || []
                          : this.allSmartSplitPreviews[e] || []),
                      );
                    }),
                    t
                  );
                }
                return this.selectedSheetIds
                  .map((t) => this.allSheetPreviews[t])
                  .filter(Boolean);
              },
              currentPreviewSVG() {
                const t = this.displayPreviews[this.currentIndex - 1];
                return t
                  ? `data:image/svg+xml;utf8,${encodeURIComponent(t.data)}`
                  : null;
              },
              previewSize() {
                const t = this.displayPreviews[this.currentIndex - 1];
                if (!t) return { width: 0, height: 0 };
                const { width: e, height: a } = t,
                  i = e / a;
                let s, n;
                return (
                  i > 200 / 130
                    ? ((s = 200), (n = s / i))
                    : ((n = 130), (s = n * i)),
                  { width: s, height: n }
                );
              },
              selectedSheetIds() {
                return 0 === this.exportContentScope
                  ? [this.currentSheetId]
                  : this.mapSelectionIndexes.map((t) => this.sheetIds[t]);
              },
              isSplitAble() {
                return this.selectedSheetIds.some((t) =>
                  this.splitAbleSheetIds.includes(t),
                );
              },
              selectionName() {
                return 0 === this.exportContentScope
                  ? this.sheetTitles[
                      this.sheetIds.findIndex((t) => t === this.currentSheetId)
                    ]
                  : 1 === this.mapSelectionIndexes.length
                  ? this.sheetTitles[this.mapSelectionIndexes[0]]
                  : this.mapSelectionIndexes.length === this.sheetIds.length
                  ? this.$T("All Sheets")
                  : this.$T("Multiple");
              },
              exportContentScopeTypes() {
                return [
                  { title: this.$T("Current Map"), trialRequest: null },
                  {
                    title: this.$T("Current File"),
                    trialRequest: "action.export2ScopeFileImage",
                  },
                ];
              },
              heading() {
                return {
                  png: this.$T("Export to PNG"),
                  svg: this.$T("Export to SVG"),
                };
              },
              isActivationStatusValid: () => true,
              watermarkEnabled: () => false,
              bigMindMap() {
                return !(0, x.yB)(
                  k.bound[0] * this.exportScale * 2,
                  k.bound[1] * this.exportScale * 2,
                );
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
                const e = this.exportAvailableScales[t - 1];
                e &&
                  e.trialRequest &&
                  !(await o.ZP.fetch(r.Gy, e.trialRequest)) &&
                  (this.exportScale = 1);
              },
              async exportContentScope(t, e) {
                const a = this.exportContentScopeTypes[t];
                a && a.trialRequest && !(await o.ZP.fetch(r.Gy, a.trialRequest))
                  ? (this.exportContentScope = e)
                  : (t !== e && (this.currentIndex = 1),
                    this.updateSplitPreviews());
              },
              mapSelectionIndexes() {
                (this.currentIndex = 1), this.updateSplitPreviews();
              },
              exportSplitByMainBranch() {
                (this.currentIndex = 1), this.updateSplitPreviews();
              },
              exportTransparent() {
                this.getPreview(), this.updateSplitPreviews();
              },
              isSplitAble(t) {
                !t &&
                  this.exportSplitByMainBranch &&
                  (this.exportSplitByMainBranch = !1);
              },
              isActivationStatusValid(t) {
                t ||
                  ((this.exportContentScope = 0),
                  (this.exportScale = 1),
                  (this.hasWatermark = !0),
                  (this.exportSplitByMainBranch = !1));
              },
            },
            methods: {
              doExport() {
                const t = {
                  contentScope: this.exportContentScope,
                  transparent: this.exportTransparent,
                  type: this.exportType,
                  isSmartSplit: this.exportSplitByMainBranch,
                  hasWatermark: this.hasWatermark,
                  sheetSelection: this.selectedSheetIds,
                };
                "png" === this.exportType &&
                  Object.assign(t, { scale: this.exportScale }),
                  (0, h.S)().updatePreferences({
                    watermarkEnabled: this.hasWatermark,
                  }),
                  this.isActivationStatusValid &&
                    ((0, l.L9)({
                      eventAction: "watermarkStatus",
                      eventName: this.hasWatermark
                        ? "PNGwithWatermark"
                        : "PNGwithoutWatermark",
                    }),
                    (0, l.L9)({
                      eventCategory: "export",
                      eventAction: "exportPNGwithSplit",
                      eventName: this.exportSplitByMainBranch
                        ? "PNGwithSplit"
                        : "PNGwithoutSplit",
                    })),
                  this.$safeRun(() => {
                    o.ZP.fetch((0, r.iM)(window.id), t).then(() =>
                      window.close(),
                    );
                  });
              },
              cancel() {
                window.close();
              },
              handlerForLimitedFeature: async () =>
                o.ZP.fetch(r.Gy, "action.export2ScaleImage"),
              getPreview() {
                this.$safeRun(() => {
                  Promise.all(
                    this.sheetIds.map((t) =>
                      o.ZP.fetch((0, r.vN)(this.routeId), {
                        sheetId: t,
                        opaqueBackground: !this.exportTransparent,
                        hasWatermark: this.hasWatermark,
                      }).then((e) => {
                        this.allSheetPreviews = {
                          ...this.allSheetPreviews,
                          [t]: { ...e, sheetId: t },
                        };
                      }),
                    ),
                  );
                });
              },
              async getSmartSplitPreview(t) {
                (this.allSmartSplitPreviews[t] &&
                  this.allTransparentSmartSplitPreviews[t]) ||
                  ((this.smartSplitInUpdate = !0),
                  await o.ZP.fetch((0, r.Yo)(this.routeId, "export"), {
                    sheetId: t,
                    opaqueBackground: !this.exportTransparent,
                    disableEmbedFonts: !0,
                    hasWatermark: this.hasWatermark,
                  }).then((e) => {
                    this.exportTransparent
                      ? (this.allTransparentSmartSplitPreviews = {
                          ...this.allTransparentSmartSplitPreviews,
                          [t]: e,
                        })
                      : (this.allSmartSplitPreviews = {
                          ...this.allSmartSplitPreviews,
                          [t]: e,
                        });
                  }),
                  (this.smartSplitInUpdate = !1));
              },
              updateSplitPreviews() {
                this.exportSplitByMainBranch &&
                  this.selectedSheetIds.forEach((t) =>
                    this.getSmartSplitPreview(t),
                  );
              },
              selectSheet(t) {
                const e = Number(t.target.value);
                t.target.checked
                  ? (this.mapSelectionIndexes.push(e),
                    this.mapSelectionIndexes.sort())
                  : 1 === this.mapSelectionIndexes.length
                  ? t.preventDefault()
                  : (this.mapSelectionIndexes = this.mapSelectionIndexes.filter(
                      (t) => t !== e,
                    )),
                  (this.mapSelectionIndexes = [
                    ...new Set(this.mapSelectionIndexes),
                  ]);
              },
              handleActivationCheck(t) {
                this.isActivationStatusValid ||
                  (t.preventDefault(), (0, h.JX)().handleCommand("activate"));
              },
              handleWatermarkToggle(t) {
                (this.hasWatermark = t),
                  this.getPreview(),
                  this.updateSplitPreviews();
              },
            },
            components: {
              WatermarkCheckbox: u.Z,
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
          };
        a(40895);
        const f = (0, a(51900).Z)(
          m,
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
                e(
                  "div",
                  { staticClass: "uk-window-body uk-flex uk-overflow-hidden" },
                  [
                    e(
                      "div",
                      {
                        staticClass:
                          "uk-flex uk-flex-column uk-flex-middle uk-flex-center uk-position-relative uk-background-inverse",
                        staticStyle: { width: "240px" },
                      },
                      [
                        [
                          e(
                            "div",
                            { staticStyle: { width: "208px", height: "138px" } },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "uk-flex uk-flex-center uk-flex-middle uk-width-1-1 uk-height-1-1",
                                },
                                [
                                  t.currentPreviewSVG
                                    ? e(
                                        "div",
                                        {
                                          staticClass: "uk-box-shadow-small",
                                          staticStyle: {
                                            padding: "8px",
                                            "border-radius": "8px",
                                          },
                                        },
                                        [
                                          e("img", {
                                            staticClass: "uk-preserve",
                                            attrs: {
                                              "uk-svg": "",
                                              draggable: "false",
                                              "data-src": t.currentPreviewSVG,
                                              width: t.previewSize.width,
                                              height: t.previewSize.height,
                                              alt: "",
                                            },
                                          }),
                                        ],
                                      )
                                    : e("div", {
                                        staticClass:
                                          "uk-flex uk-flex-center uk-flex-middle",
                                        attrs: { "uk-spinner": "ratio: 1.5" },
                                      }),
                                ],
                              ),
                            ],
                          ),
                          t._v(" "),
                          e(
                            "div",
                            {
                              staticClass:
                                "uk-margin-top uk-flex uk-flex-center uk-flex-middle",
                            },
                            [
                              e("button", {
                                staticClass:
                                  "uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",
                                attrs: {
                                  "uk-icon": "fast-backward",
                                  disabled: 1 === t.currentIndex,
                                },
                                on: {
                                  click: function (e) {
                                    t.currentIndex = 1;
                                  },
                                },
                              }),
                              t._v(" "),
                              e("button", {
                                staticClass:
                                  "uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",
                                attrs: {
                                  "uk-icon": "previous",
                                  disabled: 1 === t.currentIndex,
                                },
                                on: {
                                  click: function (e) {
                                    t.currentIndex > 1 && t.currentIndex--;
                                  },
                                },
                              }),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  staticStyle: {
                                    margin: "0 4px",
                                    "min-width": "38px",
                                    "text-align": "center",
                                  },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(
                                        `${t.currentIndex}/${t.displayPreviews.length}`,
                                      ) +
                                      "\n          ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              e("button", {
                                staticClass:
                                  "uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",
                                attrs: {
                                  "uk-icon": "next",
                                  disabled:
                                    t.currentIndex === t.displayPreviews.length,
                                },
                                on: {
                                  click: function (e) {
                                    t.currentIndex < t.displayPreviews.length &&
                                      t.currentIndex++;
                                  },
                                },
                              }),
                              t._v(" "),
                              e("button", {
                                staticClass:
                                  "uk-button uk-button-tile uk-padding-xsmall uk-padding-remove-vertical uk-button-icon",
                                attrs: {
                                  "uk-icon": "fast-forward",
                                  disabled:
                                    t.currentIndex === t.displayPreviews.length,
                                },
                                on: {
                                  click: function (e) {
                                    t.currentIndex = t.displayPreviews.length;
                                  },
                                },
                              }),
                            ],
                          ),
                        ],
                      ],
                      2,
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        staticClass:
                          "uk-panel uk-padding-large uk-flex uk-flex-column uk-background-default",
                        staticStyle: { width: "calc(100% - 240px)" },
                      },
                      [
                        e("hr", {
                          staticClass:
                            "uk-separator-vertical uk-separator uk-height-1-1 uk-position-absolute uk-position-left",
                        }),
                        t._v(" "),
                        e(
                          "h1",
                          {
                            staticStyle: {
                              "margin-left": "24px",
                              "margin-top": "16px",
                            },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.heading[t.exportType]) +
                                "\n      ",
                            ),
                          ],
                        ),
                        t._v(" "),
                        e("div", { staticClass: "uk-panel uk-form-aligned" }, [
                          e(
                            "div",
                            {
                              staticClass: "uk-margin-small-top uk-margin-small",
                            },
                            [
                              e("label", { staticClass: "uk-form-label" }, [
                                t._v(t._s(t.$T("Content:"))),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "uk-form-controls" }, [
                                e(
                                  "button",
                                  {
                                    staticClass:
                                      "uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small",
                                    staticStyle: { width: "220px" },
                                    attrs: { name: "content" },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(
                                          t.exportContentScopeTypes[
                                            t.exportContentScope
                                          ].title,
                                        ) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    attrs: {
                                      "uk-contextual-popover": "offsetLeft:20",
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
                                        function (a, i) {
                                          return e("li", { key: i }, [
                                            e(
                                              "button",
                                              {
                                                class: {
                                                  "uk-checked":
                                                    t.exportContentScope === i,
                                                },
                                                on: {
                                                  click: function (e) {
                                                    t.exportContentScope = i;
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
                                                            "margin-left": "8px",
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
                              ]),
                            ],
                          ),
                          t._v(" "),
                          e(
                            "div",
                            { staticClass: "uk-margin-top uk-margin-small" },
                            [
                              e("label", { staticClass: "uk-form-label" }, [
                                t._v(t._s(t.$T("Selection:"))),
                              ]),
                              t._v(" "),
                              e("div", { staticClass: "uk-form-controls" }, [
                                e(
                                  "button",
                                  {
                                    staticClass:
                                      "uk-button uk-button-popover-toggle uk-text-left",
                                    staticStyle: { width: "220px" },
                                    attrs: {
                                      name: "content",
                                      disabled: 0 === t.exportContentScope,
                                    },
                                  },
                                  [
                                    t._v(
                                      "\n              " +
                                        t._s(t.selectionName) +
                                        "\n            ",
                                    ),
                                  ],
                                ),
                                t._v(" "),
                                e(
                                  "div",
                                  {
                                    attrs: {
                                      "uk-popover": "",
                                      "data-pos": "bottom",
                                    },
                                  },
                                  [
                                    e(
                                      "ul",
                                      {
                                        staticClass:
                                          "uk-height-1-1 uk-overflow-auto uk-padding-remove uk-margin-remove",
                                        staticStyle: { "max-height": "150px" },
                                      },
                                      t._l(t.sheetTitles, function (a, i) {
                                        return e(
                                          "li",
                                          {
                                            key: i,
                                            staticClass: "selection-checkbox",
                                          },
                                          [
                                            e("label", [
                                              e("input", {
                                                staticClass: "uk-checkbox",
                                                attrs: { type: "checkbox" },
                                                domProps: {
                                                  value: i,
                                                  checked:
                                                    t.mapSelectionIndexes.includes(
                                                      i,
                                                    ),
                                                },
                                                on: { click: t.selectSheet },
                                              }),
                                              t._v(
                                                "\n                    " +
                                                  t._s(a) +
                                                  "\n                  ",
                                              ),
                                            ]),
                                          ],
                                        );
                                      }),
                                      0,
                                    ),
                                  ],
                                ),
                              ]),
                            ],
                          ),
                          t._v(" "),
                          e("div", [
                            e("label", { staticClass: "uk-form-label" }, [
                              t._v(t._s(t.$T("Scale:"))),
                            ]),
                            t._v(" "),
                            e("div", { staticClass: "uk-form-controls" }, [
                              e(
                                "button",
                                {
                                  staticClass:
                                    "uk-button uk-button-popover-toggle uk-select-icon uk-text-left uk-width-small",
                                  staticStyle: { width: "220px" },
                                  attrs: {
                                    name: "scale",
                                    disabled: "svg" === t.exportType,
                                  },
                                },
                                [
                                  t._v(
                                    "\n              " +
                                      t._s(
                                        t.exportAvailableScales[t.exportScale - 1]
                                          .title,
                                      ) +
                                      "\n            ",
                                  ),
                                ],
                              ),
                              t._v(" "),
                              e(
                                "div",
                                {
                                  attrs: {
                                    "uk-contextual-popover": "offsetLeft:20",
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
                                      t.exportAvailableScales,
                                      function (a, i) {
                                        return e("li", { key: i }, [
                                          e(
                                            "button",
                                            {
                                              class: {
                                                "uk-checked":
                                                  t.exportScale === i + 1,
                                              },
                                              on: {
                                                click: function (e) {
                                                  t.exportScale = i + 1;
                                                },
                                              },
                                            },
                                            [
                                              e(
                                                "div",
                                                {
                                                  staticClass:
                                                    "ul-flex uk-flex-middle",
                                                },
                                                [
                                                  e("span", [
                                                    t._v(" " + t._s(a.title)),
                                                  ]),
                                                  t._v(" "),
                                                  a.trialRequest &&
                                                  !t.isActivationStatusValid
                                                    ? e("img", {
                                                        staticStyle: {
                                                          "margin-left": "8px",
                                                          height: "14px",
                                                        },
                                                        attrs: { src: t.proIcon },
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
                              t._v(" "),
                              t.bigMindMap && "png" === t.exportType
                                ? e(
                                    "div",
                                    {
                                      staticClass: "uk-flex uk-margin-small-top",
                                    },
                                    [
                                      e("div", {
                                        staticClass:
                                          "uk-preserve uk-margin-xsmall-right",
                                        attrs: {
                                          "data-src": t.iconWarning,
                                          "uk-svg": "",
                                        },
                                      }),
                                      t._v(" "),
                                      e("div", { staticClass: "uk-text-muted" }, [
                                        t._v(
                                          "\n                " +
                                            t._s(
                                              t.$T(
                                                "The image size will be reduced because the currently set size is over the maximum.",
                                              ),
                                            ) +
                                            "\n              ",
                                        ),
                                      ]),
                                    ],
                                  )
                                : t._e(),
                            ]),
                          ]),
                          t._v(" "),
                          e("div", { staticClass: "uk-margin-small" }, [
                            e("label", { staticClass: "uk-form-label" }, [
                              t._v(t._s(t.$T("Options:"))),
                            ]),
                            t._v(" "),
                            e(
                              "div",
                              {
                                staticClass:
                                  "uk-form-controls uk-margin-xsmall-top",
                              },
                              [
                                e("div", { staticClass: "uk-margin-small" }, [
                                  e("label", [
                                    e("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.exportTransparent,
                                          expression: "exportTransparent",
                                        },
                                      ],
                                      staticClass: "uk-checkbox",
                                      attrs: {
                                        type: "checkbox",
                                        name: "transparent",
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.exportTransparent,
                                        )
                                          ? t._i(t.exportTransparent, null) > -1
                                          : t.exportTransparent,
                                      },
                                      on: {
                                        change: function (e) {
                                          var a = t.exportTransparent,
                                            i = e.target,
                                            s = !!i.checked;
                                          if (Array.isArray(a)) {
                                            var n = t._i(a, null);
                                            i.checked
                                              ? n < 0 &&
                                                (t.exportTransparent = a.concat([
                                                  null,
                                                ]))
                                              : n > -1 &&
                                                (t.exportTransparent = a
                                                  .slice(0, n)
                                                  .concat(a.slice(n + 1)));
                                          } else t.exportTransparent = s;
                                        },
                                      },
                                    }),
                                    t._v(
                                      "\n                " +
                                        t._s(t.$T("Transparent Background")) +
                                        "\n              ",
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                e("div", { staticClass: "uk-margin-small" }, [
                                  e(
                                    "label",
                                    { on: { click: t.handleActivationCheck } },
                                    [
                                      e("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.exportSplitByMainBranch,
                                            expression: "exportSplitByMainBranch",
                                          },
                                        ],
                                        staticClass: "uk-checkbox",
                                        attrs: {
                                          type: "checkbox",
                                          name: "split",
                                          disabled: !t.isSplitAble,
                                        },
                                        domProps: {
                                          checked: Array.isArray(
                                            t.exportSplitByMainBranch,
                                          )
                                            ? t._i(
                                                t.exportSplitByMainBranch,
                                                null,
                                              ) > -1
                                            : t.exportSplitByMainBranch,
                                        },
                                        on: {
                                          change: function (e) {
                                            var a = t.exportSplitByMainBranch,
                                              i = e.target,
                                              s = !!i.checked;
                                            if (Array.isArray(a)) {
                                              var n = t._i(a, null);
                                              i.checked
                                                ? n < 0 &&
                                                  (t.exportSplitByMainBranch =
                                                    a.concat([null]))
                                                : n > -1 &&
                                                  (t.exportSplitByMainBranch = a
                                                    .slice(0, n)
                                                    .concat(a.slice(n + 1)));
                                            } else t.exportSplitByMainBranch = s;
                                          },
                                        },
                                      }),
                                      t._v(" "),
                                      e(
                                        "span",
                                        {
                                          class: {
                                            "uk-text-muted": !t.isSplitAble,
                                          },
                                        },
                                        [
                                          t._v(
                                            t._s(t.$T("Split By Main Branch")),
                                          ),
                                        ],
                                      ),
                                    ],
                                  ),
                                ]),
                                t._v(" "),
                                "png" === t.exportType
                                  ? e(
                                      "div",
                                      { staticClass: "uk-margin-small" },
                                      [
                                        e("watermark-checkbox", {
                                          attrs: { value: t.hasWatermark },
                                          on: { toggle: t.handleWatermarkToggle },
                                        }),
                                      ],
                                      1,
                                    )
                                  : t._e(),
                                t._v(" "),
                                t.isActivationStatusValid ||
                                "png" !== t.exportType
                                  ? t._e()
                                  : e("div", [e("WatermarkTemplate")], 1),
                              ],
                            ),
                          ]),
                          t._v(" "),
                          "svg" === t.exportType
                            ? e("hr", {
                                staticClass:
                                  "uk-margin-xsmall-bottom uk-separator",
                              })
                            : t._e(),
                          t._v(" "),
                          "svg" === t.exportType
                            ? e(
                                "div",
                                { staticClass: "uk-flex-column uk-text-muted" },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(
                                        t.$T(
                                          "For complete image display, please make sure the font has been installed.",
                                        ),
                                      ) +
                                      "\n        ",
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
                  {
                    staticClass:
                      "uk-window-button-bar uk-position-absolute uk-background-default",
                    staticStyle: { right: "0", bottom: "0" },
                  },
                  [
                    e("div", { staticClass: "uk-button-group" }, [
                      e(
                        "button",
                        {
                          staticClass: "uk-button uk-button-primary",
                          attrs: { type: "submit", autofocus: "" },
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
                  ],
                ),
              ],
            );
          },
          [],
          !1,
          null,
          "036abc77",
          null,
        ).exports;
        (0, i.Z)(f, { name: "dialog-export-to-image" });
      },
      13382: (t, e, a) => {
        "use strict";
        a.d(e, {
          G$: () => w,
          N0: () => m,
          Pg: () => C,
          R2: () => S,
          W5: () => b,
          ZZ: () => y,
          am: () => g,
          eq: () => v,
          yr: () => A,
        });
        var i = a(71017),
          s = a.n(i),
          n = a(67657),
          r = a(7104),
          o = a(86633),
          l = a(33394),
          c = a(94593),
          u = a(90435),
          p = a(54856),
          d = a(5893),
          h = a(78152),
          x = a(63111);
        const k = (0, o.ZP)("dialog");
        async function m(t) {
          (t = Object.assign({}, t || {})).icon &&
            "string" == typeof t.icon &&
            (t.icon = s().join((0, r.bY)(), t.icon));
          const e = n.BrowserWindow.fromId(window.id);
          return [n.dialog.showMessageBoxSync(e, t)];
        }
        async function f(t) {
          (t = Object.assign({}, t || {})).icon &&
            "string" == typeof t.icon &&
            (t.icon = s().join((0, r.bY)(), t.icon));
          const e = n.BrowserWindow.fromId(window.id),
            { response: a, checkboxChecked: i } = await n.dialog.showMessageBox(
              e,
              t,
            );
          return [a, i];
        }
        async function y(t) {
          (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
            .suggestPath &&
            !t.defaultPath &&
            ((t.defaultPath = g(t.suggestPath, t.filters)), delete t.suggestPath);
          const {
            canceled: e,
            filePath: a,
            bookmark: i,
          } = await n.dialog.showSaveDialog(n.getCurrentWindow(), t);
          return e
            ? null
            : (a && i && (await l.Z.bindBookmark({ fp: a, bookmark: i })),
              a && (0, h.km)().setLastSaveDirectory(s().dirname(a)),
              a);
        }
        async function v({ folderName: t, dialogOptions: e }) {
          let a = "";
          (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
            .defaultPath || (e.defaultPath = g({}));
          const {
            canceled: i,
            filePaths: r,
            bookmark: o,
          } = await n.dialog.showOpenDialog(n.getCurrentWindow(), e);
          if (i) return null;
          if (
            ((a = r[0]),
            r.length > 0 && o && (await l.Z.bindBookmark({ fp: a, bookmark: o })),
            "string" == typeof t)
          ) {
            let e = t.replace(/[\\/]/g, "");
            (e = (0, d.N6)(e).replace(/\.+$/g, "").trim()), (a = s().join(a, e));
          }
          return (
            c.Z.existsSync(a) || c.Z.ensureDir(a),
            a && (0, h.km)().setLastSaveDirectory(a),
            a
          );
        }
        function g(
          { doc: t = null, oldDoc: e = null, suggestedName: a = null },
          i = null,
        ) {
          let r, o;
          if (
            (!r && a && (r = (0, d.N6)(a.toString())),
            !r &&
              t &&
              t.title &&
              t.source &&
              !t.source.startsWith("new://") &&
              (r = (0, d.N6)(t.title.toString())),
            !r &&
              e &&
              e.title &&
              e.source &&
              !e.source.startsWith("new://") &&
              (r = (0, d.N6)(e.title.toString())),
            r && Array.isArray(i))
          ) {
            const t = i[0] && i[0].extensions;
            Array.isArray(t) && t.length > 0 && (r = `${r}.${t[0]}`);
          }
          if (!o && e && e.source && e.source.startsWith("file://")) {
            let t = e.source.slice(7);
            (t = t.substring(1)), (o = s().dirname(t));
          }
          if (
            (!o &&
              (0, h.km)().lastSaveDirectory &&
              (o = (0, h.km)().lastSaveDirectory),
            !o)
          )
            try {
              o = n.app.getPath("documents");
            } catch (t) {
              k.info(t);
            }
          return o && r ? s().join(o, r) : o || r;
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
        async function S(t) {
          const e = (t = "function" != typeof t ? (t) => t : t)("OK"),
            a = t("Get Latest Version"),
            i = [e, a],
            [s] = await f({
              title: "Xmind",
              message: t(
                "The map style in this file might vary since it was created in a newer version of Xmind.",
              ),
              detail: t(
                "You can continue to open the file or update to the latest version for better compatibility.",
              ),
              buttons: i,
              defaultId: i.indexOf(a),
              cancelId: i.indexOf(e),
              noLink: !0,
            });
          s === i.indexOf(a) && u.ZP.fetch(p.lf.GO_DOWNLOAD);
        }
        async function w(t) {
          if (((t = "function" != typeof t ? (t) => t : t), x.zr))
            return await f({
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
            i = [a, e],
            [s] = await f({
              title: "Xmind",
              message: t("Failed to Open File"),
              detail: t(
                "The file was created by a newer version of Xmind. Please update Xmind and try to open it again.",
              ),
              buttons: i,
              defaultId: i.indexOf(a),
              cancelId: i.indexOf(e),
              noLink: !0,
            });
          s === i.indexOf(a) && u.ZP.fetch(p.lf.GO_DOWNLOAD);
        }
        async function A(t) {
          const e = (t = "function" != typeof t ? (t) => t : t)("Save"),
            a = t("Save as"),
            i = t("Cancel"),
            s = [];
          s.push(a, e, i);
          let [n] = await f({
            type: "none",
            title: "Xmind",
            message: t("Saving file from Xmind"),
            detail: t(
              "Once you save the file, it cannot be opened normally in older versions like $1.",
              "Xmind 22.11",
            ),
            buttons: s,
            defaultId: s.indexOf(a),
            cancelId: s.indexOf(i),
            noLink: !0,
          });
          const r = n === s.indexOf(e),
            o = n === s.indexOf(a);
          return { toSave: r, toSaveAs: o, toCancel: !r && !o };
        }
        async function C(t) {
          const e = (t = "function" != typeof t ? (t) => t : t)("Fix ＆ Open"),
            a = t("Cancel"),
            i = [e, a],
            [s] = await f({
              title: "Xmind",
              message: t("Failed to Open File"),
              detail: t(
                "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it.",
              ),
              buttons: i,
              defaultId: i.indexOf(e),
              cancelId: i.indexOf(a),
              noLink: !0,
            });
          return { toFix: s === i.indexOf(e), toCancel: s === i.indexOf(a) };
        }
      },
      33394: (t, e, a) => {
        "use strict";
        a.d(e, { Z: () => x });
        var i = a(57147),
          s = a.n(i),
          n = a(71017),
          r = a.n(n),
          o = a(73837),
          l = a(86633),
          c = a(96829),
          u = a(56222);
        const p = (0, l.ZP)("renderer:fs");
        async function d(t) {
          return (0, u.A)("OBTAIN_READ_WRITE_ACCESS", t);
        }
        async function h(t) {
          return (0, u.A)("RELEASE_READ_WRITE_ACCESS", t);
        }
        const x = {
          read: async function (t) {
            if (!r().isAbsolute(t)) throw new Error("Must be an absolute path.");
            const e = await (async function (t) {
              return (0, u.A)("OBTAIN_READ_LOCK", t);
            })(t);
            try {
              return await (0, o.promisify)(s().readFile)(t);
            } catch (e) {
              p.error(`path(${t}) read error: ${(0, c.SC)(e)}`);
              try {
                if (!(await d(t))) throw new Error(`No access to '${t}'`);
                return await (0, o.promisify)(s().readFile)(t);
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
            if (!r().isAbsolute(t)) throw new Error("Must be an absolute path.");
            const a = await (async function (t) {
              return (0, u.A)("OBTAIN_WRITE_LOCK", t);
            })(t);
            try {
              return await (0, o.promisify)(s().writeFile)(t, e);
            } catch (a) {
              p.error(`path(${t}) write error: ${(0, c.SC)(a)}`);
              try {
                if (!(await d(t))) throw new Error(`No access to '${t}'`);
                return await (0, o.promisify)(s().writeFile)(t, e);
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
          obtainRWAccessFromOS: d,
          releaseRWAccessFromOS: h,
        };
      },
      95246: (t, e, a) => {
        "use strict";
        a.d(e, {
          RS: () => p,
          lF: () => d,
          gP: () => k,
          sF: () => u,
          GI: () => h,
          Ni: () => x,
          mi: () => b,
          QC: () => f,
          Sr: () => y,
          yB: () => g,
          SX: () => v,
          RL: () => m,
        });
        a(13382), a(81296), a(90435), a(54856), a(71017);
        var i = a(72298),
          s = a(67657),
          n = (a(63111), a(41809));
        require("posthtml");
        var r = a(97234),
          o = a(26601),
          l = a(78152);
        const c = { cache: !1 },
          u = (t) => {
            const e = (t) => parseInt(t, 16);
            if (
              "string" == typeof (t = (0, r.Z)(t).toHexString()) &&
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
          p = (t = {}) => {
            const e = Object.assign({}, c, t);
            let a = null;
            const i = {};
            return function (t = "", s = "") {
              if (e.cache && i[t]) return i[t];
              a || (a = document.createElement("canvas"));
              const n = a.getContext("2d");
              n.font = s;
              const r = n.measureText(t);
              return e.cache && (i[t] = r.width), r.width;
            };
          };
        const d = (t, e = 1) => {
          const a = (function () {
              const t = s.screen.getAllDisplays().map((t) => t.scaleFactor);
              return Math.max.apply(null, t);
            })(),
            i = (0, n.Hv)(t, 72 * a * e);
          return Buffer.from(i.slice(22), "base64");
        };
        function h(t) {
          let e = parseInt(t);
          return Number.isInteger(e) ? e : 100;
        }
        function x(t) {
          return `${parseInt(t)}%`;
        }
        const k = (function () {
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
        function m(t, e) {
          let a = (0, l.f7)().keybindingByCommandIdAndGroup(e);
          const i = [];
          return (
            "string" == typeof a &&
              a.split("+").forEach((t) => {
                let e = t;
                "=" === e && (e = "+"), e && i.push(e);
              }),
            i.length > 0 ? `${t} ${i.join(" ")}` : t
          );
        }
        const f = (t, e) => {
            s.getCurrentWindow().setSize(t, e);
          },
          y = (t) => {
            const e = (t, ...e) => (0, l.JE)().T(t, ...e),
              a = s.Menu,
              n = s.MenuItem,
              r = new a();
            setTimeout(() => {
              const a = document.getSelection().toString(),
                o = i.clipboard.readText();
              r.append(
                new n({
                  label: e("Cut"),
                  enabled: Boolean(a),
                  click: () => document.execCommand("cut"),
                }),
              ),
                r.append(
                  new n({
                    label: e("Copy"),
                    enabled: Boolean(a),
                    click: () => document.execCommand("copy"),
                  }),
                ),
                r.append(
                  new n({
                    label: e("Paste"),
                    enabled: Boolean(o),
                    click: () => document.execCommand("paste"),
                  }),
                ),
                r.append(new n({ type: "separator" })),
                r.append(
                  new n({
                    label: e("Select All"),
                    enabled: Boolean(t),
                    click: () => document.execCommand("selectAll"),
                  }),
                ),
                r.popup({ window: s.getCurrentWindow() });
            }, 50);
          };
        async function v() {
          await new Promise((t) =>
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                requestIdleCallback(t);
              });
            }),
          );
        }
        const g = (t, e) => o.Z.test({ width: t, height: e, sizes: [t, e] }),
          b = async (t, e, a = 1) => {
            if (g(t * a, e * a)) return a;
            const i = await o.Z.maxWidth({ usePromise: !0 }),
              s = await o.Z.maxHeight({ usePromise: !0 }),
              n = await o.Z.maxArea({ usePromise: !0 }),
              r = i.width,
              l = s.height,
              c = n.width * n.height;
            let u = a;
            if (t * a > r) {
              const e = r / t;
              u = Math.min(u, e);
            }
            if (e * a > l) {
              const t = l / e;
              u = Math.min(u, t);
            }
            if (t * a * e * a > c) {
              const a = Math.sqrt(c / (t * e));
              u = Math.min(u, a);
            }
            return u;
          };
      },
      72917: (t, e, a) => {
        "use strict";
        a.d(e, { Z: () => r });
        var i = a(2954),
          s = a(78152);
        const n = (0, i.aZ)({
          props: {
            value: { type: Boolean, default: !1 },
            textStyle: { type: String, default: "" },
          },
          setup(t, e) {
            const a = (0, i.Fl)(() => true);
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
        const r = (0, a(51900).Z)(
          n,
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
      40895: (t, e, a) => {
        var i = a(3372);
        i.__esModule && (i = i.default),
          "string" == typeof i && (i = [[t.id, i, ""]]),
          i.locals && (t.exports = i.locals);
        (0, a(45346).Z)("5d70d12e", i, !0, {});
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
      t.O(0, [1248, 4983, 2244], () => {
        return (e = 18931), t((t.s = e));
        var e;
      });
      var e = t.O();
      module.exports = e;
    },
  ]);
  