(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[2454],{82038:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(23645),a=i.n(n)()((function(e){return e[1]}));a.push([e.id,".statusbar-divider-vertical[data-v-7e311ed6] {\n  margin: 0 1px;\n  width: 1px;\n  height: 11px;\n}\n",""]);const l=a},14457:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>l});var n=i(23645),a=i.n(n)()((function(e){return e[1]}));a.push([e.id,".sheetbar-tab-a-element[data-v-3864e1f0] {\n  min-width: 24px;\n  max-width: 220px;\n  cursor: default;\n  padding: 2px;\n}\n",""]);const l=a},78198:(e,t,i)=>{"use strict";i.d(t,{Y1:()=>l,ZP:()=>a,d_:()=>o,lY:()=>r,sC:()=>s});const n=[500,400,300,200,150,120,100,80,50,20,10],a=n,l=n[0],o=n[n.length-1];function r(e){let t=n[n.length-1];for(let i=n.length-2;i>=0&&!(n[i]>=e);i--)t=n[i];return t}function s(e){let t=n[0];for(let i=1;i<n.length&&!(n[i]<=e);i++)t=n[i];return t}},92454:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>y});var n=i(2954),a=i(12455),l=i(46016),o=i(84374),r=i(27049),s=i(78152),u=i(96829),d=function(e,t,i,n){return new(i||(i=Promise))((function(a,l){function o(e){try{s(n.next(e))}catch(e){l(e)}}function r(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,r)}s((n=n.apply(e,t||[])).next())}))};var c=i(67657);const h=(0,n.aZ)({__name:"sheet-slide-button",props:{slideLeftDisable:{type:Boolean},slideRightDisable:{type:Boolean},slideRightHandler:null,slideLeftHandler:null},setup:e=>({__sfc:!0})});var v=i(51900);const p=(0,v.Z)(h,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"uk-flex uk-flex-row uk-flex-middle uk-height-1-1"},[t("div",{staticClass:"uk-padding-remove uk-margin-remove uk-height-1-1",class:[{"uk-disabled":e.slideLeftDisable}],attrs:{disabled:e.slideLeftDisable}},[t("button",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts:no",arg:"no"}],staticClass:"uk-button uk-button-tile uk-button-icon uk-padding-xsmall uk-padding-remove-vertical uk-border-none uk-height-1-1",staticStyle:{"border-radius":"0"},attrs:{"uk-icon":"previous"},on:{click:e.slideLeftHandler}})]),e._v(" "),t("div",{staticClass:"uk-padding-remove uk-margin-remove uk-height-1-1",class:[{"uk-disabled":e.slideRightDisable}],attrs:{disabled:e.slideRightDisable}},[t("button",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts:no",arg:"no"}],staticClass:"uk-button uk-button-tile uk-button-icon uk-padding-xsmall uk-padding-remove-vertical uk-border-none uk-height-1-1",staticStyle:{"border-radius":"0"},attrs:{"uk-icon":"next"},on:{click:e.slideRightHandler}})])])}),[],!1,null,null,null).exports,f=(0,n.aZ)({__name:"sheet-bar",emits:["work-in-process"],setup(e,{emit:t}){const i=(0,n.iH)(),h=(0,n.iH)(),v=(0,n.iH)(),f=(0,n.iH)(),{sheets:g,activeSheetId:k,sheetIdTitleList:m,switchSheet:b,newSheet:S,copySheet:x,changeSheetTitle:w,saveSheetAs:C,testSheetPasteVisible:_,pasteSheet:M,duplicateSheet:y,deleteSheet:D}=function(){const{sheets:e,activeSheetId:t,executeAction:i,executeEditorAction:a,isMapOverviewShowing:c,getSheetViewer:h}=(0,o.nZ)(),{testSheetPasteVisible:v}=(0,o.pk)(),{handleCommand:p}=(0,s.JX)(),f=(0,n.Fl)((()=>e.value.map((e=>({id:e.id,title:e.title})))));return{sheets:e,activeSheetId:t,sheetIdTitleList:f,isMapOverviewShowing:c,switchSheet:e=>d(this,void 0,void 0,(function*(){const i=h(e);(null==i?void 0:i.isInited())&&!(0,l.$)().isOutlinerMode||t.value!==e&&((0,r.E)().updateSheetRendering({sheetRendering:!0,sheetRenderingStartAt:(new Date).getTime()}),yield(0,u._v)(100)),a({name:"mutateEditor:switchSheet",inputValue:e})})),newSheet:e=>a({name:"mutateEditor:newSheet",inputValue:e}),changeShowMapOverview:e=>a({name:"mutateEditor:changeShowMapOverview",inputValue:e}),changeSheetTitle:(e,t)=>{a({name:"mutateEditor:changeSheetTitle",inputValue:e,payload:{title:t}})},deleteSheet:e=>{a({name:"mutateEditor:deleteSheet",inputValue:e})},testSheetPasteVisible:v,copySheet:(e,t)=>{i({name:"copySheet",payload:{index:e,title:t}})},duplicateSheet:e=>d(this,void 0,void 0,(function*(){(0,r.E)().updateSheetRendering({sheetRendering:!0,sheetRenderingStartAt:(new Date).getTime()}),yield(0,u._v)(100),a({name:"mutateEditor:duplicateSheet",inputValue:e})})),pasteSheet:t=>d(this,void 0,void 0,(function*(){var n;(0,r.E)().updateSheetRendering({sheetRendering:!0,sheetRenderingStartAt:(new Date).getTime()}),yield(0,u._v)(100),i({name:"pasteSheet",payload:{index:t,sheetId:null===(n=e.value[t])||void 0===n?void 0:n.id}})})),saveSheetAs:({sheetIndex:e})=>{p("saveSheetAs",e)}}}(),{isDragArea:I,sheetsForDragging:E,onDrop:T,onDragEnd:Z,onDragOver:A,onDragEnter:L,onDragLeave:F,onDragStart:O}=((e,t,i)=>{const a=(0,n.iH)(),l=(0,n.iH)(""),r=(0,n.iH)(!1),s="application/x-sheetbar-id",{executeEditorAction:u}=(0,o.nZ)();return{isDragArea:r,sheetsForDragging:a,onDragStart:(t,i)=>{const n=t.target;e.value.includes(n)?(t.dataTransfer.effectAllowed="all",t.dataTransfer.setData(s,i),l.value=i):t.preventDefault()},onDragEnter:i=>{const n=i.dataTransfer.types.includes(s);if(!l.value||!n)return;i.preventDefault();const o=e.value.slice().sort(((e,t)=>Number(e.dataset.index)-Number(t.dataset.index)));let r,u=0;for(;u<e.value.length;){let e=-1/0;if(o[u-1]){const t=o[u-1].getBoundingClientRect();e=(t.right+t.left)/2}let t=1/0;if(o[u]){const e=o[u].getBoundingClientRect();t=(e.right+e.left)/2}if(i.clientX>e&&i.clientX<t)break;u++}const d=t.value.filter((e=>e.id!==l.value||(r=e,!1)));d.splice(u,0,{id:l.value,title:r&&r.title}),a.value=d},onDragOver:e=>{l.value&&(e.preventDefault(),r.value=!0,e.dataTransfer.dropEffect="move")},onDrop:e=>{if(e.preventDefault(),r.value=!1,!t.value||!t.value.length)return;const i=e.dataTransfer.getData(s);if(l.value===i&&l.value){const e=a.value.findIndex((e=>e.id===l.value));u({name:"mutateEditor:moveSheetTo",inputValue:l.value,payload:{targetIndex:e}})}},onDragLeave:e=>{if(!l.value)return;const t=document.elementFromPoint(e.clientX,e.clientY);i.value.contains(t)||(r.value=!1)},onDragEnd:()=>{l.value=null}}})(f,m,i),{T:R}=(0,s.JE)(),{zenMode:P}=(0,l.$)(),N=(0,a.A)(),z={observeobser:null,inserted:e=>{z.observeobser=new ResizeObserver((()=>{j(e),J()})),z.observeobser.observe(e)},unbind:e=>{z.observeobser.unobserve(e)}},B=(0,n.iH)(!1),H=(0,n.iH)(!1),V=(0,n.iH)(!1),W=(0,n.iH)(null),G=(0,n.Fl)((()=>P)),$=(0,n.Fl)((()=>null==N?void 0:N.aggregatedContexts["editor.inMapShotMode"])),Y=(0,n.Fl)((()=>I.value&&E.value||g.value)),X=(e,i)=>{W.value=e;const a=g.value.findIndex((t=>t.id===e));if(-1===a)return void(W.value=null);const l=f.value[a].clientWidth;t("work-in-process",!0),(0,n.Y3)((function(){v.value[0].value=i,v.value[0].style.width=l+"px",v.value[0].focus(),v.value[0].setSelectionRange(0,i.length)}))},J=()=>{(0,n.Y3)((()=>{h.value&&(H.value=0===h.value.scrollLeft,V.value=h.value.scrollLeft+h.value.offsetWidth>=h.value.scrollWidth)}))},j=e=>{if(!e)return!1;B.value=e.scrollWidth>e.offsetWidth};return(0,n.YP)((()=>k.value),(e=>{if(!f.value)return;const t=f.value.find((t=>t.getAttribute("data-sheet-id")===e));t&&t.scrollIntoView({behavior:"smooth",block:"center"})})),{__sfc:!0,emit:t,container:i,sheetBarTab:h,sheetTitleEditor:v,sheetBarTabItems:f,sheets:g,activeSheetId:k,sheetIdTitleList:m,switchSheet:b,newSheet:S,copySheet:x,changeSheetTitle:w,saveSheetAs:C,testSheetPasteVisible:_,pasteSheet:M,duplicateSheet:y,deleteSheet:D,isDragArea:I,sheetsForDragging:E,onDrop:T,onDragEnd:Z,onDragOver:A,onDragEnter:L,onDragLeave:F,onDragStart:O,$T:R,zenMode:P,editorSharedStore:N,vResized:z,isSheetGroupOverflow:B,slideLeftDisable:H,slideRightDisable:V,editingSheetTitleId:W,isZenMode:G,isInMapShotMode:$,currentSheets:Y,handleSheetItemClick:e=>b(e),handleAddSheet:()=>S(),showTitleEditor:X,openSheetItemContextMenu:(e,t)=>{const i=g.value.findIndex((t=>t.id===e)),n=new c.Menu;[{label:R("Rename"),click:()=>X(e,t)},{type:"separator"},{label:R("Copy"),click:()=>x(i,t)},{label:R("Paste"),visible:_(),click:()=>M(i)},{label:R("Duplicate"),click:()=>y(e)},{label:R("Delete"),enabled:g&&g.value.length>1,click:()=>D(e)},{type:"separator"},{label:R("New Sheet"),click:()=>S(e)},{type:"separator"},{label:R("Save Sheet As")+"...",click:()=>C({sheetIndex:i})}].forEach((e=>n.append(new c.MenuItem(e)))),n.popup({window:(0,c.getCurrentWindow)()})},saveAndHideTitleEditor:e=>{const i=g.value.find((t=>t.id===e)),n=i&&i.id;if(n){const e=v.value[0].value,t=i.title;e&&e!==t&&w(n,e)}W.value=null,t("work-in-process",!1)},slideSheet:e=>{if(!h.value||!f.value)return;let t=0;if("left"===e){const e=h.value.scrollLeft;for(let i of f.value){if(t+i.offsetWidth+1>e)return void(h.value.scrollLeft=t-1);t+=i.offsetWidth+1}}else if("right"===e){const e=h.value.scrollLeft+h.value.offsetWidth;for(let i of f.value)if(t+=i.offsetWidth+1,t>e)return void(h.value.scrollLeft=t-h.value.offsetWidth+1)}},isSheetBarAbleSlide:J,checkSheetGroupOverflow:j,sheetSlideButton:p}}});i(48295);const g=(0,v.Z)(f,(function(){var e=this,t=e._self._c,i=e._self._setupProxy;return i.currentSheets.length>0?t("div",{ref:"container",staticClass:"uk-visible-toggle uk-flex uk-flex-row uk-flex-middle uk-height-1-1 uk-position-relative",style:{visibility:i.isInMapShotMode?"hidden":"visible"},on:{dragover:function(e){return i.onDragOver(e)},dragleave:function(e){return i.onDragLeave(e)},drop:function(e){return i.onDrop(e)},dragenter:function(e){return e.stopPropagation(),i.onDragEnter.apply(null,arguments)}}},[i.isInMapShotMode?t("div",{staticClass:"uk-height-1-1 uk-width-1-1 uk-position-absolute",staticStyle:{"z-index":"2"}}):e._e(),e._v(" "),t("div",{staticClass:"uk-workbench-sheet-bar uk-height-1-1 uk-overflow-hidden",class:[{"uk-invisible-hover":1===i.currentSheets.length&&null===i.editingSheetTitleId&&!i.isZenMode}]},[t("ul",{directives:[{name:"resized",rawName:"v-resized"}],ref:"sheetBarTab",staticClass:"uk-tab uk-tab-capsule uk-flex uk-flex-row uk-flex-nowrap uk-overflow-auto uk-scrollbar-hidden uk-height-1-1 uk-margin-remove-bottom",attrs:{"uk-tab":""},on:{scroll:i.isSheetBarAbleSlide}},e._l(i.currentSheets,(function({id:n,title:a},l){return t("li",{key:n,ref:"sheetBarTabItems",refInFor:!0,staticClass:"uk-height-1-1 divider-vertical",class:{"uk-active":i.activeSheetId===n,"divider-vertical-active":i.activeSheetId===n,"divider-vertical-clear":0===l},attrs:{"data-index":l,draggable:null===i.editingSheetTitleId,"data-sheet-id":n},on:{dragstart:function(e){return i.onDragStart(e,n)},dragend:i.onDragEnd}},[t("a",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts:no",arg:"no"}],staticClass:"uk-visible-toggle uk-flex uk-flex-row uk-flex-top uk-padding-remove uk-margin-remove uk-overflow-hidden uk-height-1-1 sheetbar-tab-a-element",attrs:{draggable:"false"},on:{click:function(e){return i.handleSheetItemClick(n)},dblclick:function(e){return i.showTitleEditor(n,a)},contextmenu:function(e){return i.openSheetItemContextMenu(n,a??"")}}},[i.editingSheetTitleId!==n?t("div",{staticClass:"uk-flex uk-flex-row uk-flex-middle uk-padding-xsmall uk-padding-remove-vertical"},[t("div",{staticClass:"uk-padding-remove uk-margin-left uk-text-truncate"},[e._v("\n              "+e._s(a||"")+"\n            ")]),e._v(" "),t("div",{staticClass:"uk-icon uk-padding-remove uk-margin-remove uk-invisible-hover",staticStyle:{"line-height":"17px"},attrs:{"uk-icon":"icon: chevron-down"},on:{click:function(e){return i.openSheetItemContextMenu(n,a||"")}}})]):t("div",{staticClass:"uk-flex uk-flex-row uk-flex-middle uk-padding-remove"},[t("input",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts",value:["focus.input"],expression:"['focus.input']"}],ref:"sheetTitleEditor",refInFor:!0,staticClass:"uk-input uk-padding-remove-vertical",staticStyle:{border:"none",width:"100%"},attrs:{type:"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:i.saveAndHideTitleEditor(n)},blur:function(e){return i.saveAndHideTitleEditor(n)}}})])])])})),0)]),e._v(" "),t("div",{staticClass:"divider-vertical",class:{"divider-vertical-clear":i.activeSheetId===i.currentSheets[i.currentSheets.length-1].id},staticStyle:{width:"1px",height:"22px","margin-right":"1px"}}),e._v(" "),t("div",{staticClass:"uk-child-separator uk-separator-vertical uk-flex uk-flex-row uk-flex-middle uk-height-1-1"},[t(i.sheetSlideButton,{directives:[{name:"show",rawName:"v-show",value:i.isSheetGroupOverflow,expression:"isSheetGroupOverflow"}],attrs:{"slide-left-disable":i.slideLeftDisable,"slide-right-disable":i.slideRightDisable,"slide-left-handler":()=>i.slideSheet("left"),"slide-right-handler":()=>i.slideSheet("right")}}),e._v(" "),t("div",{staticClass:"uk-padding-remove uk-margin-remove",class:[{"uk-invisible-hover":i.currentSheets.length<=1}]},[t("button",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts:no",arg:"no"}],staticClass:"uk-button uk-button-tile uk-button-icon uk-border-rounded uk-height-1-1",staticStyle:{width:"22px",height:"22px","min-height":"22px"},attrs:{"uk-icon":"add"},on:{click:i.handleAddSheet}})])],1)]):e._e()}),[],!1,null,"3864e1f0",null).exports;var k=i(78198),m=i(86842),b=i(95246),S=function(e,t,i,n){return new(i||(i=Promise))((function(a,l){function o(e){try{s(n.next(e))}catch(e){l(e)}}function r(e){try{s(n.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(o,r)}s((n=n.apply(e,t||[])).next())}))};const x=(0,n.aZ)({__name:"zoom-control",setup(e){const{isZoomGroupDisabled:t,handleZoomControlBtnClick:i,zoomControlLabel:a}=(()=>{const{T:e}=(0,m.C)(),{updateOutlinerSheetStatus:t,updateSheetStatus:i,getOutlinerZoomScaleForSheet:a}=(0,r.E)(),{executeEditorAction:s,activeSheetId:u,currentZoomScale:d}=(0,o.nZ)(),h=(0,n.Fl)((()=>(0,r.E)().sheetRendering||(0,l.$)().mapshotMode)),v=(0,n.Fl)((()=>"outliner"===(0,l.$)().editorMode)),p=(0,n.Fl)((()=>v.value?k.ZP.filter((e=>e>=80&&e<=300)):k.ZP)),f=(0,n.Fl)((()=>v.value?a(u.value):100*d.value)),g=(0,n.Fl)((()=>{let e=[...p.value,f.value];return e=Array.from(new Set(e)),e=e.sort(((e,t)=>Number(t)-Number(e))),e.map((e=>({text:(0,b.Ni)(e),value:e})))})),x=(0,n.Fl)((()=>(0,b.Ni)(f.value))),w=({value:e,isFitMap:n})=>{n?s({name:"mutateEditor:fitMap"}):isNaN(e)||(v.value?t({id:u.value,zoomScale:e}):(i({id:u.value,zoomScale:e}),s({name:"mutateEditor:zoomScale",inputValue:Number(e)/100})))};return{zoomValue:f,zoomOptions:g,zoomScaleLists:p,zoomControlLabel:x,isZoomGroupDisabled:h,handleZoomControlBtnClick:()=>{const t=new c.Menu;for(const e of g.value)t.append(new c.MenuItem({label:e.text,type:"checkbox",checked:f.value===e.value,click:()=>S(void 0,void 0,void 0,(function*(){w({value:Number(e.value),isFitMap:!1})}))}));v.value||(t.append(new c.MenuItem({type:"separator"})),t.append(new c.MenuItem({label:e("Fit Map"),type:"checkbox",click:()=>{w({isFitMap:!0})}}))),t.popup({window:(0,c.getCurrentWindow)()})}}})();return{__sfc:!0,isZoomGroupDisabled:t,handleZoomControlBtnClick:i,zoomControlLabel:a}}});const w=(0,v.Z)(x,(function(){var e=this,t=e._self._c,i=e._self._setupProxy;return t("button",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts:no",arg:"no"}],staticClass:"uk-button uk-button-tile uk-padding-remove-vertical uk-flex uk-flex-middle",staticStyle:{"min-width":"64px","padding-right":"6px"},attrs:{disabled:i.isZoomGroupDisabled},on:{click:i.handleZoomControlBtnClick}},[t("span",{staticClass:"uk-padding-small uk-padding-remove-vertical",attrs:{title:e.$T("Zoom in/out.")}},[e._v("\n    "+e._s(i.zoomControlLabel)+"\n  ")]),e._v(" "),t("span",{attrs:{"uk-icon":"icon: form-arrow-up-down"}})])}),[],!1,null,"8e28b9ba",null).exports;const C=(0,n.aZ)({setup(){const e=(0,l.$)(),t=(e,...t)=>(0,s.JE)().T(e,...t),i=(0,n.Fl)((()=>e.isOutlinerMode)),a=(0,n.Fl)((()=>e.mapshotMode));return{editorModeLabel:(0,n.Fl)((()=>i.value?t("Mind Map"):t("Outliner"))),isMapshotMode:a,handleEditorModeChange:()=>{const e=(0,s.JX)();i.value?e.handleCommand("workbench.mapMode"):e.handleCommand("workbench.outlineMode")}}}});const _=(0,v.Z)(C,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("button",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts:no",arg:"no"}],staticClass:"uk-button uk-button-tile",staticStyle:{padding:"0 8px"},attrs:{disabled:e.isMapshotMode},on:{click:e.handleEditorModeChange}},[e._v("\n  "+e._s(e.editorModeLabel)+"\n")])}),[],!1,null,"1c435f41",null).exports,M=(0,n.aZ)({__name:"index",emits:["work-in-process"],setup(e,{emit:t}){const o=(0,n.RC)((()=>i.e(7272).then(i.bind(i,7272)))),r=(0,n.RC)((()=>Promise.all([i.e(6486),i.e(2118),i.e(7462),i.e(4718),i.e(4325)]).then(i.bind(i,64325)))),s=(0,l.$)(),u=(0,n.Fl)((()=>s.isOutlinerMode)),d=(0,n.Fl)((()=>(0,a.A)().aggregatedContexts["editor.inMapShotMode"]));return{__sfc:!0,emit:t,EditorTopicCount:o,OutlinerTopicCount:r,workbenchStore:s,isOutlineMode:u,isInMapShotMode:d,handleWorkInProcessChange:e=>{t("work-in-process",e)},SheetBar:g,ZoomControl:w,EditorMode:_}}});i(65333);const y=(0,v.Z)(M,(function(){var e=this,t=e._self._c,i=e._self._setupProxy;return t("div",{staticClass:"workbench-status-bar",staticStyle:{height:"33px"}},[t("hr",{staticClass:"uk-separator"}),e._v(" "),t("div",{staticClass:"uk-flex uk-flex-row uk-flex-middle uk-padding-xsmall",staticStyle:{height:"22px"}},[t("div",{staticClass:"uk-width-expand"},[t(i.SheetBar,{on:{"work-in-process":i.handleWorkInProcessChange}})],1),e._v(" "),t("div",{staticClass:"uk-flex uk-flex-row uk-flex-middle uk-height-1-1",staticStyle:{right:"2px"}},[i.isOutlineMode||i.isInMapShotMode?e._e():t(i.EditorTopicCount),e._v(" "),i.isOutlineMode&&!i.isInMapShotMode?t(i.OutlinerTopicCount):e._e(),e._v(" "),i.isInMapShotMode?e._e():t("div",{staticClass:"statusbar-divider-vertical divider-vertical-color"}),e._v(" "),t(i.ZoomControl),e._v(" "),t("div",{staticClass:"statusbar-divider-vertical divider-vertical-color"}),e._v(" "),t(i.EditorMode)],1)])])}),[],!1,null,"7e311ed6",null).exports},65333:(e,t,i)=>{var n=i(82038);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,i(45346).Z)("a8d12862",n,!0,{})},48295:(e,t,i)=>{var n=i(14457);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);(0,i(45346).Z)("61b1d836",n,!0,{})}}]);