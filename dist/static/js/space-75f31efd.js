import"./index-1e0489aa.js";import"./store-acb3382e.js";import{u as w}from"./index-eba40255.js";import{_ as N}from"./space-inner.vue_vue_type_style_index_0_lang-4e079a9a.js";import{d as x,t as S,X as _,o as g,c as O,G as $,e as l,K as o,O as s,H as T,n as j,J as D,N as E}from"./@vue.runtime-core-0029b467.js";import{r as k,u as G}from"./@vue.reactivity-b2e38c7a.js";import{O as c}from"./@vue.shared-ccdbf9b9.js";import"./@vue.runtime-dom-592c53ed.js";import"./element-plus-7426fe99.js";import"./lodash-es-74a5df03.js";import"./@element-plus.icons-vue-c499527b.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./dayjs-20b85df8.js";import"./chardet-cfd7d38a.js";import"./async-validator-8a4f889d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f47942fe.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-4390772d.js";import"./@floating-ui.core-1d013f45.js";import"./@floating-ui.utils-1e4a7d10.js";import"./@vueuse.core-bf8dfe85.js";import"./@vueuse.shared-501e3e4b.js";import"./mitt-b509fb6d.js";import"./axios-f6771985.js";import"./nprogress-5ff42f71.js";import"./pinia-6d4e9d4f.js";import"./monaco-editor-f913c445.js";import"./vue-echarts-8be4a346.js";import"./resize-detector-a5205554.js";import"./echarts-eea5b079.js";import"./tslib-54e39b60.js";import"./zrender-ecf5ed03.js";import"./vue-router-6b15fa8a.js";import"./mockjs-597bdf6e.js";import"./vue-aac48648.js";import"./hook-6b6f6a66.js";import"./index-8ca809a2.js";import"./ts-wps-c1dd0e62.js";import"./_plugin-vue_export-helper-c27b6911.js";const H={class:"cl-upload-space__wrap"},J=x({name:"cl-upload-space"}),Vt=x({...J,props:{title:{type:String,default:"文件空间"},text:{type:String,default:"点击上传"},limit:{type:Number,default:9},accept:String,showBtn:{type:Boolean,default:!0}},emits:["confirm"],setup(n,{expose:C,emit:b}){const y=n,h=b,{refs:u,setRefs:B}=w(),i=k(!1),r=k({title:"",limit:9}),a=S(()=>{var t;return((t=u.inner)==null?void 0:t.selection)||[]});function f(t){i.value=!0,r.value=Object.assign({...y},t),j(()=>{var e;(e=u.inner)==null||e.clear()})}function m(){i.value=!1}function d(t){h("confirm",t||a.value),m()}return C({open:f,close:m}),(t,e)=>{const p=_("el-button"),V=_("cl-dialog");return g(),O("div",H,[$(t.$slots,"default",{},()=>[n.showBtn?(g(),D(p,{key:0,onClick:f},{default:o(()=>[s(c(n.text),1)]),_:1})):E("",!0)]),l(V,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=v=>i.value=v),title:r.value.title,height:"650px",width:"1070px",padding:"0","keep-alive":"","close-on-click-modal":!1,"close-on-press-escape":!1},{footer:o(()=>[l(p,{onClick:m},{default:o(()=>[s("取消")]),_:1}),l(p,{disabled:a.value.length==0,type:"success",onClick:e[0]||(e[0]=v=>d())},{default:o(()=>[s(" 选择 "+c(a.value.length)+"/"+c(r.value.limit),1)]),_:1},8,["disabled"])]),default:o(()=>[l(N,T({ref:G(B)("inner")},r.value,{onConfirm:d}),null,16)]),_:1},8,["modelValue","title"])])}}});export{Vt as default};
