"use strict";(global.webpackChunkxmind_vana=global.webpackChunkxmind_vana||[]).push([[8585],{23645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,s){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(s)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(i[l]=!0)}for(var o=0;o<e.length;o++){var a=[].concat(e[o]);s&&i[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},78198:(e,t,n)=>{n.d(t,{Y1:()=>r,ZP:()=>i,d_:()=>l,lY:()=>o,sC:()=>a});const s=[500,400,300,200,150,120,100,80,50,20,10],i=s,r=s[0],l=s[s.length-1];function o(e){let t=s[s.length-1];for(let n=s.length-2;n>=0&&!(s[n]>=e);n--)t=s[n];return t}function a(e){let t=s[0];for(let n=1;n<s.length&&!(s[n]<=e);n++)t=s[n];return t}},45412:(e,t,n)=>{n.d(t,{A:()=>g});var s,i=n(2954),r=n(82361),l=n(72298),o=n(67657),a=n(85786),c=n(67214),u=n(57507),d=n(78152),p=function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function l(e){try{a(s.next(e))}catch(e){r(e)}}function o(e){try{a(s.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}a((s=s.apply(e,t||[])).next())}))};!function(e){e.DEFAULT="DEFAULT",e.LINK="LINK"}(s||(s={}));class h extends r.EventEmitter{constructor(){super(),this.spellcheckerData={},this.spellchecker={isMisspelled:e=>this.spellcheckerData.misspelledWord===e,getCorrectionsForMisspelling:e=>this.spellcheckerData.misspelledWord===e?this.spellcheckerData.dictionarySuggestions:[]},this.$T=(e,...t)=>(0,d.JE)().T(e,...t)}init(){o.getCurrentWebContents().on("context-menu",((e,t)=>{this.spellcheckerData={misspelledWord:t.misspelledWord,dictionarySuggestions:t.dictionarySuggestions}}));const e=(e,t)=>{let n;if(t.includes(e))n=e;else{const[s]=e.split(/[-_]/),i=t.map((e=>e.split(/[-_]/)[0])).indexOf(s);i>-1&&(n=t[i])}return n};(0,i.YP)((()=>(0,d.S)().language),(t=>{const n=o.getCurrentWebContents().session,s=n.availableSpellCheckerLanguages,i=e(t,s)||"en-US",r=(0,d.S)().systemLanguage,l=e(r,s)||"en-US";n.setSpellCheckerLanguages([...new Set([i,l,"en-US"])])})),window.addEventListener("contextmenu",(e=>{const t=e.target;t.closest('textarea, input[type="text"], [contenteditable="true"], [contenteditable=""]')&&setTimeout((()=>p(this,void 0,void 0,(function*(){const e=yield n.e(7462).then(n.bind(n,17462));let i=s.DEFAULT;e.Editor.getHref(t)&&(i=s.LINK,(0,c.FW)(t.closest("a"))),this.buildSpellContextMenu({content:document.getSelection().toString(),target:t,menuType:i})}))),100)}))}buildSpellContextMenu({content:e,target:t,menuType:n}){"function"==typeof this.suggestedBuildSpellContextMenu?(this.suggestedBuildSpellContextMenu(),this.suggestedBuildSpellContextMenu=null):this.buildDefaultSpellContextMenu({content:e,target:t,menuType:n})}genDefaultMenuPart(e){const t=[],n=this.getCorrectionsForMisspelling(e);if(this.spellchecker.isMisspelled(e)&&n&&n.length)for(const e of n)t.push({label:e,click:()=>document.execCommand("insertText",!1,e)});else t.push({label:this.$T("No Guesses Found"),enabled:!1});return t.push({type:"separator"}),t.push({label:this.$T("Learn Spelling"),click:()=>this.add(e)}),t}genLinkMenuPart(e){const t=[],n=e.closest("a");if(n)return t.push({label:this.$T("Open Link"),click:()=>(0,a.DL)(n.href,this.$T)}),t.push({label:this.$T("Copy Link"),click:()=>l.clipboard.writeText(n.href)}),t.push({label:this.$T("Edit Link"),click:()=>(0,d.JX)().handleCommand("notes.editLink")}),t.push({label:this.$T("Remove Link"),click:()=>{(0,d.JX)().handleCommand("notes.removeLink")}}),t}buildDefaultSpellContextMenu({content:e,target:t,menuType:n}){let i=[];n===s.DEFAULT?i=this.genDefaultMenuPart(e):n===s.LINK&&(i=this.genLinkMenuPart(t)),i.push({type:"separator"}),i.push({label:this.$T("Cut"),click:()=>document.execCommand("cut")}),i.push({label:this.$T("Copy"),enabled:"string"==typeof e&&""!=e,click:()=>document.execCommand("copy")}),i.push({label:this.$T("Paste"),enabled:l.clipboard.readText()&&""!=l.clipboard.readText(),click:()=>document.execCommand("insertText",!1,l.clipboard.readText())}),i.push({type:"separator"}),i.push({label:this.$T("Select All"),click:()=>document.execCommand("selectAll")}),(0,u.k)(i)}getCorrectionsForMisspelling(e){return this.spellchecker.getCorrectionsForMisspelling(e)}add(e){o.getCurrentWebContents().session.addWordToSpellCheckerDictionary(e)}setSuggestedBuildSpellContextMenuFn(e){this.suggestedBuildSpellContextMenu=e}}const g=new h},57507:(e,t,n)=>{n.d(t,{I:()=>l,k:()=>r});var s=n(67657);const{Menu:i}=s,r=(e,t={})=>{const n=i.buildFromTemplate(e);return n.popup(Object.assign({window:s.getCurrentWindow()},t)),n},l=()=>{const e=i.getApplicationMenu();return e&&e.items||[]}},45346:(e,t,n)=>{function s(e,t){for(var n=[],s={},i=0;i<t.length;i++){var r=t[i],l=r[0],o={id:e+":"+i,css:r[1],media:r[2],sourceMap:r[3]};s[l]?s[l].parts.push(o):n.push(s[l]={id:l,parts:[o]})}return n}n.d(t,{Z:()=>g});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},l=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,a=0,c=!1,u=function(){},d=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function g(e,t,n,i){c=n,d=i||{};var l=s(e,t);return f(l),function(t){for(var n=[],i=0;i<l.length;i++){var o=l[i];(a=r[o.id]).refs--,n.push(a)}t?f(l=s(e,t)):l=[];for(i=0;i<n.length;i++){var a;if(0===(a=n[i]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete r[a.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],s=r[n.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](n.parts[i]);for(;i<n.parts.length;i++)s.parts.push(v(n.parts[i]));s.parts.length>n.parts.length&&(s.parts.length=n.parts.length)}else{var l=[];for(i=0;i<n.parts.length;i++)l.push(v(n.parts[i]));r[n.id]={id:n.id,refs:1,parts:l}}}}function m(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function v(e){var t,n,s=document.querySelector("style["+p+'~="'+e.id+'"]');if(s){if(c)return u;s.parentNode.removeChild(s)}if(h){var i=a++;s=o||(o=m()),t=y.bind(null,s,i,!1),n=y.bind(null,s,i,!0)}else s=m(),t=k.bind(null,s),n=function(){s.parentNode.removeChild(s)};return t(e),function(s){if(s){if(s.css===e.css&&s.media===e.media&&s.sourceMap===e.sourceMap)return;t(e=s)}else n()}}var C,b=(C=[],function(e,t){return C[e]=t,C.filter(Boolean).join("\n")});function y(e,t,n,s){var i=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=b(t,i);else{var r=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}function k(e,t){var n=t.css,s=t.media,i=t.sourceMap;if(s&&e.setAttribute("media",s),d.ssrId&&e.setAttribute(p,t.id),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);