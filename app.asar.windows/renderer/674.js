"use strict";(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[674],{57390:(t,e,a)=>{a.d(e,{J3:()=>u,M7:()=>l,QC:()=>c});var n=a(51189),s=a(2954),i=a(78152);function u(){const t=(0,s.iH)((0,i.Fw)().userConfig.autoChecked);return(0,s.YP)(t,(t=>{t||(0,i.Fw)().setAction({type:n._Q.UPDATE_AUTO_CHECKED,payload:!1})}),{immediate:!1}),{checked:t,trySetAutoUpdateType:function(){t.value&&(0,i.S)().updatePreferences({autoUpdateType:"auto"})}}}function l(){let t=null;const e=new Promise((e=>{t=e})),a=(0,s.YP)((()=>(0,i.Fw)().status),(e=>{e===n.A8.INSTALLED&&(t(),a())}));return{whenInstalled:e}}const o={small:[540,371],big:[640,570]};function c(t){const[e,a]=o[t];(0,i.JX)().handleCommand("setWindowSize",{id:window.id,width:e,height:a})}},20674:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var n=a(2954),s=a(69931),i=a(57390);const u=(0,n.aZ)({setup:()=>((0,i.QC)("small"),{iconURL:(0,s.ju)("static/assets/images/auto-updater/update-unavailable.png"),HDiconURL:`${(0,s.ju)("static/assets/images/auto-updater/update-unavailable.png")} 1x, ${(0,s.ju)("static/assets/images/auto-updater/update-unavailable@2x.png")} 2x`,ok:function(){window.close()}})});const l=(0,a(51900).Z)(u,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"uk-height-1-1 uk-flex uk-flex-column uk-flex-between"},[e("div",[e("img",{attrs:{draggable:"false",src:t.iconURL,srcset:t.HDiconURL}}),t._v(" "),e("div",{staticClass:"title title-middle"},[t._v("\n      "+t._s(t.$T("Your Xmind is Up to Date"))+"\n    ")]),t._v(" "),e("div",{staticClass:"desc-content"},[t._v("\n      "+t._s(t.$T("Last checked:")+" "+(new Date).toLocaleString())+"\n    ")])]),t._v(" "),e("div",{staticClass:"action-area uk-flex uk-flex-right"},[e("button",{staticClass:"uk-button uk-button-default",on:{click:t.ok}},[t._v("\n      "+t._s(t.$T("OK"))+"\n    ")])])])}),[],!1,null,null,null).exports}}]);