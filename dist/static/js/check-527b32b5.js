import{i as C,e as b}from"./index-1e0489aa.js";import{u as w}from"./index-eba40255.js";import{d as n,q as B,X as c,o as g,c as N,a as l,e as i,K as T}from"./@vue.runtime-core-0029b467.js";import{r as s}from"./@vue.reactivity-b2e38c7a.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.runtime-dom-592c53ed.js";import"./@vue.shared-ccdbf9b9.js";import"./element-plus-7426fe99.js";import"./lodash-es-74a5df03.js";import"./@element-plus.icons-vue-c499527b.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./dayjs-20b85df8.js";import"./chardet-cfd7d38a.js";import"./async-validator-8a4f889d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f47942fe.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-4390772d.js";import"./@floating-ui.core-1d013f45.js";import"./@floating-ui.utils-1e4a7d10.js";import"./@vueuse.core-bf8dfe85.js";import"./@vueuse.shared-501e3e4b.js";import"./store-acb3382e.js";import"./mitt-b509fb6d.js";import"./axios-f6771985.js";import"./nprogress-5ff42f71.js";import"./pinia-6d4e9d4f.js";import"./monaco-editor-f913c445.js";import"./vue-echarts-8be4a346.js";import"./resize-detector-a5205554.js";import"./echarts-eea5b079.js";import"./tslib-54e39b60.js";import"./zrender-ecf5ed03.js";import"./vue-router-6b15fa8a.js";import"./mockjs-597bdf6e.js";import"./vue-aac48648.js";const K={class:"cl-dept-check"},S={class:"cl-dept-check__search"},U={class:"cl-dept-check__tree"},q=n({name:"cl-dept-check"}),A=n({...q,props:{modelValue:{type:Array,default:()=>[]},checkStrictly:Boolean},emits:["update:modelValue"],setup(p,{emit:m}){const d=p,_=m,{service:u}=w(),o=s(),a=s(),r=s("");async function h(){return u.base.sys.department.list().then(e=>{a.value=b(e)})}function f(e,t){return e?t.name.includes(e):!0}function k(e,{checkedKeys:t}){_("update:modelValue",t)}return B(r,e=>{o.value.filter(e)}),C.useUpsert({async onOpened(){await h(),o.value.setCheckedKeys(d.modelValue||[])}}),(e,t)=>{const y=c("el-input"),v=c("el-tree"),x=c("el-scrollbar");return g(),N("div",K,[l("div",S,[i(y,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=V=>r.value=V),placeholder:"输入关键字进行过滤"},null,8,["modelValue"])]),l("div",U,[i(x,{"max-height":"200px"},{default:T(()=>[i(v,{ref_key:"Tree",ref:o,"node-key":"id","show-checkbox":"",data:a.value,props:{label:"name",children:"children"},"filter-node-method":f,"check-strictly":p.checkStrictly,onCheck:k},null,8,["data","check-strictly"])]),_:1})])])}}});const ye=E(A,[["__scopeId","data-v-9a2838ce"]]);export{ye as default};
