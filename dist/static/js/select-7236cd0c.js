import{i as C}from"./index-1e0489aa.js";import{a6 as V,a7 as h}from"./@element-plus.icons-vue-c499527b.js";import{x}from"./lodash-es-74a5df03.js";import{d as f,f as y,X as u,o as i,c as l,F,V as b,e,K as d}from"./@vue.runtime-core-0029b467.js";import{u as a}from"./@vue.reactivity-b2e38c7a.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.runtime-dom-592c53ed.js";import"./@vue.shared-ccdbf9b9.js";import"./element-plus-7426fe99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./dayjs-20b85df8.js";import"./chardet-cfd7d38a.js";import"./async-validator-8a4f889d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f47942fe.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-4390772d.js";import"./@floating-ui.core-1d013f45.js";import"./@floating-ui.utils-1e4a7d10.js";import"./@vueuse.core-bf8dfe85.js";import"./@vueuse.shared-501e3e4b.js";import"./store-acb3382e.js";import"./mitt-b509fb6d.js";import"./axios-f6771985.js";import"./nprogress-5ff42f71.js";import"./pinia-6d4e9d4f.js";import"./monaco-editor-f913c445.js";import"./vue-echarts-8be4a346.js";import"./resize-detector-a5205554.js";import"./echarts-eea5b079.js";import"./tslib-54e39b60.js";import"./zrender-ecf5ed03.js";import"./vue-router-6b15fa8a.js";import"./mockjs-597bdf6e.js";import"./vue-aac48648.js";const $={class:"demo-select"},g=f({name:"demo-select"}),B=f({...g,setup(U){const r=C.useForm();function n(o){var t;(t=r.value)==null||t.form.options.splice(o+1,0,{label:""})}function v(o){var t;(t=r.value)==null||t.form.options.splice(o,1)}return y(()=>{var o;x((o=r.value)==null?void 0:o.form.options)&&n(0)}),(o,t)=>{var c;const k=u("el-input"),s=u("el-icon");return i(),l("div",$,[(i(!0),l(F,null,b((c=a(r))==null?void 0:c.form.options,(_,m)=>(i(),l("div",{class:"item",key:m},[e(k,{modelValue:_.label,"onUpdate:modelValue":p=>_.label=p,placeholder:`请输入选项${m+1}`},null,8,["modelValue","onUpdate:modelValue","placeholder"]),e(s,{onClick:p=>n(m)},{default:d(()=>[e(a(V))]),_:2},1032,["onClick"]),e(s,{onClick:p=>v(m)},{default:d(()=>[e(a(h))]),_:2},1032,["onClick"])]))),128))])}}});const _o=E(B,[["__scopeId","data-v-6f03fa82"]]);export{_o as default};