import{d as v}from"./index-1e0489aa.js";import{u as b}from"./index-eba40255.js";import{d as l,q as V,f as g,X as j,o as h,c as x,e as y}from"./@vue.runtime-core-0029b467.js";import{r as s,j as C}from"./@vue.reactivity-b2e38c7a.js";import{_ as B}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.runtime-dom-592c53ed.js";import"./@vue.shared-ccdbf9b9.js";import"./element-plus-7426fe99.js";import"./lodash-es-74a5df03.js";import"./@element-plus.icons-vue-c499527b.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./dayjs-20b85df8.js";import"./chardet-cfd7d38a.js";import"./async-validator-8a4f889d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f47942fe.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-4390772d.js";import"./@floating-ui.core-1d013f45.js";import"./@floating-ui.utils-1e4a7d10.js";import"./@vueuse.core-bf8dfe85.js";import"./@vueuse.shared-501e3e4b.js";import"./store-acb3382e.js";import"./mitt-b509fb6d.js";import"./axios-f6771985.js";import"./nprogress-5ff42f71.js";import"./pinia-6d4e9d4f.js";import"./monaco-editor-f913c445.js";import"./vue-echarts-8be4a346.js";import"./resize-detector-a5205554.js";import"./echarts-eea5b079.js";import"./tslib-54e39b60.js";import"./zrender-ecf5ed03.js";import"./vue-router-6b15fa8a.js";import"./mockjs-597bdf6e.js";import"./vue-aac48648.js";const k={class:"cl-menu-perms"},P=l({name:"cl-menu-perms"}),q=l({...P,props:{modelValue:{type:String,default:""},disabled:Boolean},emits:["update:modelValue"],setup(a,{emit:n}){const c=a,d=n,{service:u}=b(),r=s([]),i=s([]),_=C({multiple:!0});function f(e){d("update:modelValue",e.map(o=>o.join(":")).join(","))}return V(()=>c.modelValue,e=>{r.value=e?e.split(",").map(o=>o.split(":")):[]},{immediate:!0}),g(()=>{const e=[];function o(t){if(typeof t=="object")for(const p in t){const{permission:m}=t[p];m?e.push(...Object.values(m)):o(t[p])}}o(u),i.value=v(e,":")}),(e,o)=>{const t=j("el-cascader");return h(),x("div",k,[y(t,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=p=>r.value=p),separator:":",clearable:"",filterable:"","collapse-tags":"","collapse-tags-tooltip":"",disabled:a.disabled,options:i.value,props:_,onChange:f},null,8,["modelValue","disabled","options","props"])])}}});const uo=B(q,[["__scopeId","data-v-1e2faca0"]]);export{uo as default};