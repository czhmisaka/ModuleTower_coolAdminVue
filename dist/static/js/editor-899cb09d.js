import{d as c,X as t,o as u,c as i,e,K as n}from"./@vue.runtime-core-0029b467.js";import{r}from"./@vue.reactivity-b2e38c7a.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.shared-ccdbf9b9.js";const g={class:"editor"},v=c({name:"demo-editor"}),b=c({...v,setup(x){const l=r('<p><span style="font-size: 22px;"><em>富文本编</em></span><span style="color: rgb(216, 68, 147); font-size: 22px;"><em>辑器</em></span></p>'),s=r(`class User {
  main() {
    console.log('Name', '神仙都没用')
  }
}

const user = new User();
user.main();
`);return(y,o)=>{const d=t("cl-editor-monaco"),_=t("el-tab-pane"),p=t("cl-editor-wang"),m=t("el-tabs");return u(),i("div",g,[e(m,{type:"card"},{default:n(()=>[e(_,{label:"Monaco"},{default:n(()=>[e(d,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=a=>s.value=a),language:"typescript"},null,8,["modelValue"])]),_:1}),e(_,{label:"Wang",lazy:""},{default:n(()=>[e(p,{modelValue:l.value,"onUpdate:modelValue":o[1]||(o[1]=a=>l.value=a)},null,8,["modelValue"])]),_:1})]),_:1})])}}});const C=f(b,[["__scopeId","data-v-462a7d41"]]);export{C as default};
