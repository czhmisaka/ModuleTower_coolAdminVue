import{u as B,m as Z,a as ee,i as te}from"./index-1e0489aa.js";import"./store-acb3382e.js";import{u as T}from"./index-eba40255.js";import{n as oe,Q as se}from"./@element-plus.icons-vue-c499527b.js";import{h as ne,B as G,q as ae}from"./lodash-es-74a5df03.js";import{d as k,t as F,X as b,o as l,c as w,J as S,K as $,F as D,V as j,O as le,q as J,e as c,N as L,a as o,f as O,as as Q,ar as U,M as X,y as re,h as K,L as ce,i as ie,a1 as _e}from"./@vue.runtime-core-0029b467.js";import{u as m,r as Y,j as pe,m as ue}from"./@vue.reactivity-b2e38c7a.js";import{O as N,o as q}from"./@vue.shared-ccdbf9b9.js";import{_ as P}from"./_plugin-vue_export-helper-c27b6911.js";import{a as de,b as me}from"./element-plus-7426fe99.js";import{_ as fe}from"./logo-5b4cc875.js";import{v as he,w as W,T as ve}from"./@vue.runtime-dom-592c53ed.js";import"./@vueuse.core-bf8dfe85.js";import"./@vueuse.shared-501e3e4b.js";import"./mitt-b509fb6d.js";import"./axios-f6771985.js";import"./nprogress-5ff42f71.js";import"./chardet-cfd7d38a.js";import"./pinia-6d4e9d4f.js";import"./monaco-editor-f913c445.js";import"./vue-echarts-8be4a346.js";import"./resize-detector-a5205554.js";import"./echarts-eea5b079.js";import"./tslib-54e39b60.js";import"./zrender-ecf5ed03.js";import"./vue-router-6b15fa8a.js";import"./mockjs-597bdf6e.js";import"./vue-aac48648.js";import"./dayjs-20b85df8.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-f8748455.js";import"./async-validator-8a4f889d.js";import"./memoize-one-297ddbcb.js";import"./escape-html-f47942fe.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-4390772d.js";import"./@floating-ui.core-1d013f45.js";import"./@floating-ui.utils-1e4a7d10.js";const be={class:"route-nav"},we={key:0,class:"route-nav__title"},ye=k({name:"route-nav"}),ke=k({...ye,setup(u){const{route:i,browser:h}=T(),{menu:_}=B(),r=F(()=>{function s(n){if(i.path==="/")return!1;if(n.path==i.path)return n;if(n.children){const p=n.children.map(s).find(Boolean);return p?[n,p]:!1}else return!1}return ne(_.group.map(s).filter(Boolean))}),y=F(()=>{var s;return(s=G(r.value))==null?void 0:s.name});return(s,n)=>{const p=b("el-breadcrumb-item"),t=b("el-breadcrumb");return l(),w("div",be,[m(h).isMini?(l(),w("p",we,N(y.value),1)):(l(),S(t,{key:1,"separator-icon":m(oe)},{default:$(()=>[(l(!0),w(D,null,j(r.value,(e,a)=>(l(),S(p,{key:a},{default:$(()=>{var d;return[le(N(((d=e.meta)==null?void 0:d.label)||e.name),1)]}),_:2},1024))),128))]),_:1},8,["separator-icon"]))])}}});const $e=P(ke,[["__scopeId","data-v-c12fbba9"]]),ge={class:"a-menu"},xe={class:"a-menu__name"},Ce=k({name:"a-menu"}),Me=k({...Ce,setup(u){const{router:i,route:h}=T(),{menu:_}=B(),r=Y("0"),y=F(()=>_.group.filter(p=>p.isShow));function s(p){var a;if(String(p)==r.value)return!1;const t=y.value[p],e=_.getPath(t);e?(_.setMenu(p),i.push(e)):de.warning(`“${(a=t.meta)==null?void 0:a.label}”下没有菜单，请先添加`)}function n(){let p=0;function t(e,a){switch(e.type){case 0:e.children&&e.children.forEach(d=>{t(d,a)});break;case 1:h.path.includes(e.path)&&(p=a);break}}y.value.forEach(t),r.value=String(p),_.setMenu(p)}return J(()=>[h.path,_.group.length],()=>{n()},{immediate:!0}),(p,t)=>{const e=b("cl-svg"),a=b("el-menu-item"),d=b("el-menu");return l(),w("div",ge,[c(d,{"default-active":r.value,mode:"horizontal","background-color":"transparent",onSelect:s},{default:$(()=>[(l(!0),w(D,null,j(y.value,(g,x)=>(l(),S(a,{key:g.id,index:`${x}`},{default:$(()=>{var C;return[g.icon?(l(),S(e,{key:0,name:g.icon,size:18},null,8,["name"])):L("",!0),o("span",xe,N((C=g.meta)==null?void 0:C.label),1)]}),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])])}}});const Se=P(Me,[["__scopeId","data-v-e2d4ff6b"]]),R=u=>(Q("data-v-a10b4d89"),u=u(),U(),u),Be={class:"app-topbar"},Ie=R(()=>o("i",{class:"cl-iconfont cl-icon-fold"},null,-1)),Ne=[Ie],Te=R(()=>o("div",{class:"flex1"},null,-1)),Pe={class:"app-topbar__tools"},Re={key:0,class:"app-topbar__user"},Ve={class:"el-dropdown-link"},Ee={class:"name"},Fe=R(()=>o("i",{class:"cl-iconfont cl-icon-user"},null,-1)),De=R(()=>o("span",null,"个人中心",-1)),Le=R(()=>o("i",{class:"cl-iconfont cl-icon-exit"},null,-1)),je=R(()=>o("span",null,"退出",-1)),ze=k({name:"app-topbar"}),Oe=k({...ze,setup(u){const{router:i,service:h,browser:_}=T(),{user:r,app:y}=B();async function s(t){switch(t){case"my":i.push("/my/info");break;case"exit":me.confirm("确定退出登录吗？","提示",{type:"warning"}).then(async()=>{await h.base.comm.logout(),r.logout()}).catch(()=>null);break}}const n=pe({list:[],async init(){const t=ae(Z.list.map(e=>e.toolbar).filter(Boolean),"order");this.list=await Promise.all(t.map(async e=>{if(e)return{...e,component:ue((await e.component).default)}}))}}),p=F(()=>n.list.filter(t=>_.isMini?(t==null?void 0:t.h5)??!0:(t==null?void 0:t.pc)??!0));return O(()=>{n.init()}),(t,e)=>{const a=b("cl-avatar"),d=b("el-dropdown-item"),g=b("el-dropdown-menu"),x=b("el-dropdown");return l(),w(D,null,[m(y).info.menu.isGroup?(l(),S(Se,{key:0})):L("",!0),o("div",Be,[o("div",{class:q(["app-topbar__collapse",{unfold:!m(y).isFold}]),onClick:e[0]||(e[0]=C=>m(y).fold())},Ne,2),c($e),Te,o("ul",Pe,[(l(!0),w(D,null,j(p.value,(C,v)=>(l(),w("li",{key:v},[(l(),S(X(C.component)))]))),128))]),m(r).info?(l(),w("div",Re,[c(x,{trigger:"click","hide-on-click":"",onCommand:s},{dropdown:$(()=>[c(g,null,{default:$(()=>[c(d,{command:"my"},{default:$(()=>[Fe,De]),_:1}),c(d,{command:"exit"},{default:$(()=>[Le,je]),_:1})]),_:1})]),default:$(()=>[o("span",Ve,[o("span",Ee,N(m(r).info.nickName),1),c(a,{size:32,src:m(r).info.headImg},null,8,["src"])])]),_:1})])):L("",!0)])],64)}}});const qe=P(Oe,[["__scopeId","data-v-a10b4d89"]]);function Ae(u){return typeof u=="function"||Object.prototype.toString.call(u)==="[object Object]"&&!re(u)}const He=k({name:"b-menu",setup(){const{router:u,route:i,browser:h}=T(),{menu:_,app:r}=B();function y(n){n!=i.path&&u.push(n),h.isMini&&r.fold(!0)}function s(){function n(p,t){return p.filter(e=>e.isShow).map(e=>{var g;let a=null;const d=x=>{var C;return c("div",{class:"wrap"},[c(b("cl-svg"),{name:x.icon},null),ce(c("span",null,[(C=x.meta)==null?void 0:C.label]),[[he,!r.isFold||t!=1]])])};return e.type==0?a=K(c(b("el-sub-menu"),null,null),{index:String(e.id),key:e.id,popperClass:"app-slider__menu"},{title(){return d(e)},default(){return n(e.children||[],t+1)}}):a=K(c(b("el-menu-item"),null,null),{index:i.path=="/"&&(g=e.meta)!=null&&g.isHome?"/":e.path,key:e.id},{default(){return d(e)}}),a})}return n(_.list,1)}return()=>{let n;return c("div",{class:"app-slider__menu"},[c(b("el-menu"),{"default-active":i.path,"background-color":"transparent","collapse-transition":!1,collapse:h.isMini?!1:r.isFold,onSelect:y},Ae(n=s())?n:{default:()=>[n]})])}}}),Ke={class:"app-slider"},We={class:"app-slider__logo"},Ge=o("img",{src:fe},null,-1),Je={key:0},Qe={class:"app-slider__container"},Ue=k({name:"app-slider"}),Xe=k({...Ue,setup(u){const{browser:i}=ee(),{app:h}=B();return(_,r)=>(l(),w("div",Ke,[o("div",We,[Ge,!m(h).isFold||m(i).isMini?(l(),w("span",Je,N(m(h).info.name),1)):L("",!0)]),o("div",Qe,[c(m(He))])]))}});const A=u=>(Q("data-v-882a9c6c"),u=u(),U(),u),Ye={class:"app-process"},Ze=A(()=>o("i",{class:"cl-iconfont cl-icon-back"},null,-1)),et=[Ze],tt=A(()=>o("i",{class:"cl-iconfont cl-icon-refresh"},null,-1)),ot=[tt],st=A(()=>o("i",{class:"cl-iconfont cl-icon-home"},null,-1)),nt=[st],at={class:"app-process__container"},lt=["data-index","onClick","onContextmenu"],rt=k({name:"app-process"}),ct=k({...rt,setup(u){const{refs:i,setRefs:h,route:_,router:r,mitt:y}=T(),{process:s}=B();function n(){y.emit("view.refresh")}function p(){r.push("/")}function t(){r.back()}function e(){if(!s.list.find(f=>f.active)){const f=G(s.list);r.push(f?f.fullPath:"/")}}function a(v){i.scroller.wrapRef.scrollTo({left:v,behavior:"smooth"})}function d(v){const f=i[`item-${v}`];f&&a(f.offsetLeft-(i.scroller.wrapRef.clientWidth+f.clientWidth)/2)}function g(v,f){d(f),r.push(v.fullPath)}function x(v){s.remove(v),e()}function C(v,f){te.ContextMenu.open(v,{hover:{target:"app-process__item"},list:[{label:"关闭当前",hidden:f.fullPath!==_.path,callback(M){x(s.list.findIndex(V=>V.fullPath==f.fullPath)),M(),e()}},{label:"关闭其他",callback(M){s.set(s.list.filter(V=>V.fullPath==f.fullPath)),M(),e()}},{label:"关闭所有",callback(M){s.clear(),M(),e()}}]})}return J(()=>_.path,function(v){d(s.list.findIndex(f=>f.fullPath===v)||0)}),O(()=>{i.scroller.wrapRef.addEventListener("wheel",function(v){v.preventDefault();const f=2,M=v.deltaY*f;a(i.scroller.wrapRef.scrollLeft+M)})}),(v,f)=>{const M=b("el-icon"),V=b("el-scrollbar");return l(),w("div",Ye,[o("ul",{class:"app-process__op"},[o("li",{class:"item",onClick:t},et),o("li",{class:"item",onClick:n},ot),o("li",{class:"item",onClick:p},nt)]),o("div",at,[c(V,{ref:m(h)("scroller"),class:"app-process__scroller"},{default:$(()=>[(l(!0),w(D,null,j(m(s).list,(I,E)=>{var H;return l(),w("div",{key:E,ref_for:!0,ref:m(h)(`item-${E}`),class:q(["app-process__item",{active:I.active}]),"data-index":E,onClick:z=>g(I,Number(E)),onContextmenu:W(z=>C(z,I),["stop","prevent"])},[o("span",null,N(((H=I.meta)==null?void 0:H.label)||I.name||I.path),1),c(M,{onMousedown:W(z=>x(Number(E)),["stop"])},{default:$(()=>[c(m(se))]),_:2},1032,["onMousedown"])],42,lt)}),128))]),_:1},512)])])}}});const it=P(ct,[["__scopeId","data-v-882a9c6c"]]),_t={class:"app-views"},pt=k({name:"app-views"}),ut=k({...pt,setup(u){const{refs:i,setRefs:h,mitt:_}=T(),{process:r,app:y}=B(),s=Y(1),n=F(()=>r.list.filter(e=>{var a;return(a=e.meta)==null?void 0:a.keepAlive}).map(e=>e.path.substring(1,e.path.length).replace(/\//g,"-")));function p(){s.value+=1}function t({el:e,top:a}){const d=i.scrollbar.wrapRef;e&&(a=d.querySelector(e).offsetTop),d.scrollTo({top:a,behavior:"smooth"})}return O(()=>{_.on("view.scrollTo",t),_.on("view.refresh",p)}),ie(()=>{_.off("view.scrollTo"),_.off("view.refresh")}),(e,a)=>{const d=b("el-scrollbar"),g=b("router-view");return l(),w("div",_t,[c(g,null,{default:$(({Component:x})=>[(l(),S(d,{ref:m(h)("scrollbar"),key:s.value},{default:$(()=>[c(ve,{name:m(y).info.router.transition||"none"},{default:$(()=>[(l(),S(_e,{include:n.value},[(l(),S(X(x)))],1032,["include"]))]),_:2},1032,["name"])]),_:2},1024))]),_:1})])}}});const dt=P(ut,[["__scopeId","data-v-d693ab08"]]),mt={class:"app-layout__left"},ft={class:"app-layout__right"},ht=k({name:"app-layout"}),vt=k({...ht,setup(u){const{app:i}=B();return(h,_)=>(l(),w("div",{class:q(["app-layout",{collapse:m(i).isFold}])},[o("div",{class:"app-layout__mask",onClick:_[0]||(_[0]=r=>m(i).fold(!0))}),o("div",mt,[c(Xe)]),o("div",ft,[c(qe),c(it),c(dt)])],2))}});const oo=P(vt,[["__scopeId","data-v-8159229a"]]);export{oo as default};