(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[3462],{10454:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>i});var r=o(23645),n=o.n(r)()((function(e){return e[1]}));n.push([e.id,".topic-popover-overlay {\n  display: block;\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1010;\n  background-color: transparent;\n  border: none;\n}\n",""]);const i=n},96874:e=>{e.exports=function(e,t,o){switch(o.length){case 0:return e.call(t);case 1:return e.call(t,o[0]);case 2:return e.call(t,o[0],o[1]);case 3:return e.call(t,o[0],o[1],o[2])}return e.apply(t,o)}},34865:(e,t,o)=>{var r=o(89465),n=o(77813),i=Object.prototype.hasOwnProperty;e.exports=function(e,t,o){var a=e[t];i.call(e,t)&&n(a,o)&&(void 0!==o||t in e)||r(e,t,o)}},89465:(e,t,o)=>{var r=o(38777);e.exports=function(e,t,o){"__proto__"==t&&r?r(e,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):e[t]=o}},21078:(e,t,o)=>{var r=o(62488),n=o(37285);e.exports=function e(t,o,i,a,u){var l=-1,c=t.length;for(i||(i=n),u||(u=[]);++l<c;){var p=t[l];o>0&&i(p)?o>1?e(p,o-1,i,a,u):r(u,p):a||(u[u.length]=p)}return u}},25970:(e,t,o)=>{var r=o(63012),n=o(79095);e.exports=function(e,t){return r(e,t,(function(t,o){return n(e,o)}))}},63012:(e,t,o)=>{var r=o(97786),n=o(10611),i=o(71811);e.exports=function(e,t,o){for(var a=-1,u=t.length,l={};++a<u;){var c=t[a],p=r(e,c);o(p,c)&&n(l,i(c,e),p)}return l}},10611:(e,t,o)=>{var r=o(34865),n=o(71811),i=o(65776),a=o(13218),u=o(40327);e.exports=function(e,t,o,l){if(!a(e))return e;for(var c=-1,p=(t=n(t,e)).length,s=p-1,d=e;null!=d&&++c<p;){var f=u(t[c]),v=o;if("__proto__"===f||"constructor"===f||"prototype"===f)return e;if(c!=s){var h=d[f];void 0===(v=l?l(h,f,d):void 0)&&(v=a(h)?h:i(t[c+1])?[]:{})}r(d,f,v),d=d[f]}return e}},56560:(e,t,o)=>{var r=o(75703),n=o(38777),i=o(6557),a=n?function(e,t){return n(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:i;e.exports=a},38777:(e,t,o)=>{var r=o(10852),n=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=n},99021:(e,t,o)=>{var r=o(85564),n=o(45357),i=o(30061);e.exports=function(e){return i(n(e,void 0,r),e+"")}},37285:(e,t,o)=>{var r=o(62705),n=o(35694),i=o(1469),a=r?r.isConcatSpreadable:void 0;e.exports=function(e){return i(e)||n(e)||!!(a&&e&&e[a])}},45357:(e,t,o)=>{var r=o(96874),n=Math.max;e.exports=function(e,t,o){return t=n(void 0===t?e.length-1:t,0),function(){for(var i=arguments,a=-1,u=n(i.length-t,0),l=Array(u);++a<u;)l[a]=i[t+a];a=-1;for(var c=Array(t+1);++a<t;)c[a]=i[a];return c[t]=o(l),r(e,this,c)}}},30061:(e,t,o)=>{var r=o(56560),n=o(21275)(r);e.exports=n},21275:e=>{var t=Date.now;e.exports=function(e){var o=0,r=0;return function(){var n=t(),i=16-(n-r);if(r=n,i>0){if(++o>=800)return arguments[0]}else o=0;return e.apply(void 0,arguments)}}},75703:e=>{e.exports=function(e){return function(){return e}}},85564:(e,t,o)=>{var r=o(21078);e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}},78718:(e,t,o)=>{var r=o(25970),n=o(99021)((function(e,t){return null==e?{}:r(e,t)}));e.exports=n},3462:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var r=o(2954),n=o(96160),i=o(76893),a=o(21029);var u=o(53419);const l=(0,r.aZ)({__name:"marker-editor",setup(e){const{topicRect:t,computedBounds:o,markerResources:l,close:c,changeMarker:p,deleteMarker:s}=(()=>{const{domRectForSelection:e,markerModule:t,executeMutationAction:o}=(0,n.nZ)(),{getMarkerGroupById:u,getMarkerInfoById:l}=t,{updateSelectedMarkerId:c}=(0,i.E)(),{setPopoverEditorVisible:p}=(0,a.$)(),s=(0,r.Fl)((()=>{const e=t.getMarkerInfoById((0,i.E)().selectedMarkerId);if(e){const t=e.groupId,o=u(t);return o?o.markerIds.map((e=>{const{imageSrc:t,id:o,hidden:r}=l(e);if(!r)return t.split("\\").join("/"),{id:o,path:t}})).filter((e=>!!e)):[]}})),d=(0,r.Fl)((()=>{const e=s.value.length;return e<8?{width:24*(e+1)+31,height:40}:{width:186,height:24*Math.ceil(e/7)+54}})),f=()=>{c(""),p("")};return{close:f,changeMarker:e=>{e!=(0,i.E)().selectedMarkerId&&o({name:"mutate:addMarker",inputValue:e}),f()},deleteMarker:()=>{const e={name:"mutate:removeMarker",inputValue:(0,i.E)().selectedMarkerId};o(e),f()},computedBounds:d,markerResources:s,topicRect:e}})(),d=(0,r.Fl)((()=>l.value.length>7?"uk-flex-column uk-flex-center uk-separator":"uk-flex-row uk-flex-middle uk-separator-vertical")),f=(0,r.Fl)((()=>l.value.length>7?"uk-padding-small uk-padding-remove-horizontal uk-padding-remove-top":"uk-padding-small uk-padding-remove-vertical uk-padding-remove-left")),v=(0,r.Fl)((()=>l.value.length>7?"uk-padding-xsmall uk-padding-remove-horizontal uk-padding-remove-bottom uk-flex uk-flex-column uk-flex-center":"uk-padding-xsmall uk-padding-remove-vertical uk-padding-remove-right"));return{__sfc:!0,topicRect:t,computedBounds:o,markerResources:l,close:c,changeMarker:p,deleteMarker:s,containerStyle:d,markersPadding:f,deleteButtonPadding:v,handleKeydown:e=>{"Tab"===e.code&&(e.preventDefault(),e.stopPropagation())},TopicPopoverContainer:u.Z}}});const c=(0,o(51900).Z)(l,(function(){var e=this,t=e._self._c,o=e._self._setupProxy;return t(o.TopicPopoverContainer,{attrs:{"popover-width":o.computedBounds.width,"popover-height":o.computedBounds.height,"topic-width":o.topicRect.width,"topic-height":o.topicRect.height,"topic-left":o.topicRect.x,"topic-top":o.topicRect.y},on:{"popover-close":o.close}},[t("div",{staticClass:"uk-flex uk-flex-wrap uk-padding-small uk-child-separator",class:o.containerStyle,on:{keydown:o.handleKeydown}},[t("div",{staticClass:"uk-flex uk-flex-row uk-flex-middle uk-flex-wrap",class:o.markersPadding},e._l(o.markerResources,(function({id:e,path:r}){return t("button",{key:e,staticClass:"uk-padding-xsmall uk-button uk-button-tile uk-button-icon uk-button-small",on:{mousedown:function(e){e.preventDefault()},click:function(t){return o.changeMarker(e)}}},[t("img",{staticClass:"uk-background-center-center uk-background-norepeat",staticStyle:{height:"16px",width:"16px"},attrs:{draggable:"false","uk-img":"",src:r}})])})),0),e._v(" "),t("div",{class:o.deleteButtonPadding},[t("button",{staticClass:"uk-background-center-center uk-background-norepeat uk-button uk-button-tile uk-button-icon uk-icon uk-button-small uk-padding-xsmall",attrs:{"uk-icon":"icon: trash"},on:{click:o.deleteMarker}})])])])}),[],!1,null,null,null).exports},53419:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var r=o(2954),n=o(78718),i=o.n(n),a=o(96160),u=function(e,t,o,r){return new(o||(o=Promise))((function(n,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function u(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,u)}l((r=r.apply(e,t||[])).next())}))};const l=(0,r.aZ)({__name:"topic-popover-container",props:{topicHeight:null,topicWidth:null,topicLeft:null,topicTop:null,popoverWidth:null,popoverHeight:null,viewPortPadding:null,autoShowOnMounted:null},emits:["popover-close"],setup(e,{emit:t}){const o=e,n=(0,r.FN)(),l=(0,r.iH)(null),c=(0,r.Fl)((()=>{const{viewPortPadding:e}=o;return void 0===e?16:e})),p=(0,r.Fl)((()=>{const{autoShowOnMounted:e}=o;return void 0===e||e})),s=(0,r.Fl)((()=>({top:o.topicTop+"px",left:o.topicLeft+"px",width:o.topicWidth+"px",height:o.topicHeight+"px"}))),d=e=>{const t=e.getBoundingClientRect();return Object.assign({},i()(t,"top","left","right","bottom","width","height"),{offsetTop:e.offsetTop,offsetLeft:e.offsetLeft})},f=()=>{const e=document.querySelector("#editor-container");return e?d(e):null},v=()=>{const e=f();if(!e)return!1;const{popoverHeight:t,popoverWidth:r,topicTop:n,topicLeft:i,topicWidth:u,topicHeight:l}=o,p=i+f().left,s=n+f().top,d=e.offsetTop>s,v=e.offsetTop+e.height<l+s+t,h=p-(e.left+e.offsetLeft)<r/2-u/2,g=e.left+e.offsetLeft+e.width<p+u/2+r/2,k=l+t>e.height,m=u>e.width;let x=e.offsetLeft,w=e.offsetTop;d&&(w=s-c.value),v&&(w=s+l+o.popoverHeight-e.height+c.value),k&&(w=Math.max(l-e.height,0)+s+o.popoverHeight);const b=Math.max((o.popoverWidth-u)/2,0);if(h&&(x=p-e.left-c.value-b),g&&(x=p-e.left+u-e.width+b+c.value),m&&(x=p+b),d||v||h||g||k||m){const{moveViewport:e}=(0,a.nZ)();return e(x,w),!0}return!0},h=()=>u(this,void 0,void 0,(function*(){if(!(yield v()))return g(!1);g(!0)})),g=e=>{setTimeout((()=>{n.proxy.$withUIKit((t=>{const o=t.pop(l.value);o&&(e?o.show():o.hide())}))}),50)};return(0,r.bv)((()=>{p.value&&h(),(0,r.Y3)((()=>{n.proxy.$withUIKit((e=>{e.util.on(l.value,"hidden",(()=>{t("popover-close")}))}))}))})),{__sfc:!0,props:o,emits:t,vm:n,popoverEl:l,viewPortPadding:c,isAutoShowOnMounted:p,topicRectStyle:s,getElementRect:d,getWindowBounds:f,moveViewport:v,showPopover:h,_togglePopover:g}}});o(19455);const c=(0,o(51900).Z)(l,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"focus-contexts",rawName:"v-focus-contexts:group",value:["focus.popover"],expression:"['focus.popover']",arg:"group"}]},[t("div",{staticClass:"uk-position-absolute",style:e._self._setupProxy.topicRectStyle}),e._v(" "),t("div",{ref:"popoverEl",style:{width:e.popoverWidth+"px",height:e.popoverHeight+"px"??"auto"},attrs:{"uk-popover":"","data-cls-overlay":"topic-popover-overlay"}},[e._t("default")],2)])}),[],!1,null,null,null).exports},19455:(e,t,o)=>{var r=o(10454);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);(0,o(45346).Z)("b6d891a8",r,!0,{})}}]);