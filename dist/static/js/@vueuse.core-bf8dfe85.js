import{n as H,t as j,i as q,a as T,u as B,b as z,c as K,d as P,w as Q}from"./@vueuse.shared-501e3e4b.js";import{q as J,t as A,g as I,f as $,n as G,v as U}from"./@vue.runtime-core-0029b467.js";import{r as _,l as X}from"./@vue.reactivity-b2e38c7a.js";function R(e){var a;const t=T(e);return(a=t==null?void 0:t.$el)!=null?a:t}const L=z?window:void 0,Y=z?window.navigator:void 0;function x(...e){let a,t,i,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,i,r]=e,a=L):[a,t,i,r]=e,!a)return H;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const u=[],s=()=>{u.forEach(m=>m()),u.length=0},f=(m,l,S,h)=>(m.addEventListener(l,S,h),()=>m.removeEventListener(l,S,h)),w=J(()=>[R(a),T(r)],([m,l])=>{if(s(),!m)return;const S=q(l)?{...l}:l;u.push(...t.flatMap(h=>i.map(c=>f(m,h,c,S))))},{immediate:!0,flush:"post"}),p=()=>{w(),s()};return j(p),p}function Z(){const e=_(!1);return I()&&$(()=>{e.value=!0}),e}function W(e){const a=Z();return A(()=>(a.value,!!e()))}function ee(e,a={}){const{window:t=L}=a,i=W(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const u=_(!1),s=p=>{u.value=p.matches},f=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s))},w=U(()=>{i.value&&(f(),r=t.matchMedia(T(e)),"addEventListener"in r?r.addEventListener("change",s):r.addListener(s),u.value=r.matches)});return j(()=>{w(),f(),r=void 0}),u}function de(e={}){const{navigator:a=Y,read:t=!1,source:i,copiedDuring:r=1500,legacy:u=!1}=e,s=W(()=>a&&"clipboard"in a),f=A(()=>s.value||u),w=_(""),p=_(!1),m=B(()=>p.value=!1,r);function l(){s.value?a.clipboard.readText().then(o=>{w.value=o}):w.value=c()}f.value&&t&&x(["copy","cut"],l);async function S(o=T(i)){f.value&&o!=null&&(s.value?await a.clipboard.writeText(o):h(o),w.value=o,p.value=!0,m.start())}function h(o){const g=document.createElement("textarea");g.value=o??"",g.style.position="absolute",g.style.opacity="0",document.body.appendChild(g),g.select(),document.execCommand("copy"),g.remove()}function c(){var o,g,b;return(b=(g=(o=document==null?void 0:document.getSelection)==null?void 0:o.call(document))==null?void 0:g.toString())!=null?b:""}return{isSupported:f,text:w,copied:p,copy:S}}const N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O="__vueuse_ssr_handlers__",te=ne();function ne(){return O in N||(N[O]=N[O]||{}),N[O]}function F(e,a){return te[e]||a}function re(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ae={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},V="vueuse-storage";function oe(e,a,t,i={}){var r;const{flush:u="pre",deep:s=!0,listenToStorageChanges:f=!0,writeDefaults:w=!0,mergeDefaults:p=!1,shallow:m,window:l=L,eventFilter:S,onError:h=n=>{}}=i,c=(m?X:_)(a);if(!t)try{t=F("getDefaultStorage",()=>{var n;return(n=L)==null?void 0:n.localStorage})()}catch(n){h(n)}if(!t)return c;const o=T(a),g=re(o),b=(r=i.serializer)!=null?r:ae[g],{pause:k,resume:M}=Q(c,()=>v(c.value),{flush:u,deep:s,eventFilter:S});return l&&f&&(x(l,"storage",C),x(l,V,D)),C(),c;function v(n){try{if(n==null)t.removeItem(e);else{const d=b.write(n),y=t.getItem(e);y!==d&&(t.setItem(e,d),l&&l.dispatchEvent(new CustomEvent(V,{detail:{key:e,oldValue:y,newValue:d,storageArea:t}})))}}catch(d){h(d)}}function E(n){const d=n?n.newValue:t.getItem(e);if(d==null)return w&&o!==null&&t.setItem(e,b.write(o)),o;if(!n&&p){const y=b.read(d);return typeof p=="function"?p(y,o):g==="object"&&!Array.isArray(y)?{...o,...y}:y}else return typeof d!="string"?d:b.read(d)}function D(n){C(n.detail)}function C(n){if(!(n&&n.storageArea!==t)){if(n&&n.key==null){c.value=o;return}if(!(n&&n.key!==e)){k();try{(n==null?void 0:n.newValue)!==b.write(c.value)&&(c.value=E(n))}catch(d){h(d)}finally{n?G(M):M()}}}}}function se(e){return ee("(prefers-color-scheme: dark)",e)}function ie(e={}){const{selector:a="html",attribute:t="class",initialValue:i="auto",window:r=L,storage:u,storageKey:s="vueuse-color-scheme",listenToStorageChanges:f=!0,storageRef:w,emitAuto:p,disableTransition:m=!0}=e,l={auto:"",light:"light",dark:"dark",...e.modes||{}},S=se({window:r}),h=A(()=>S.value?"dark":"light"),c=w||(s==null?K(i):oe(s,i,u,{window:r,listenToStorageChanges:f})),o=A(()=>c.value==="auto"?h.value:c.value),g=F("updateHTMLAttrs",(v,E,D)=>{const C=typeof v=="string"?r==null?void 0:r.document.querySelector(v):R(v);if(!C)return;let n;if(m){n=r.document.createElement("style");const d="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";n.appendChild(document.createTextNode(d)),r.document.head.appendChild(n)}if(E==="class"){const d=D.split(/\s/g);Object.values(l).flatMap(y=>(y||"").split(/\s/g)).filter(Boolean).forEach(y=>{d.includes(y)?C.classList.add(y):C.classList.remove(y)})}else C.setAttribute(E,D);m&&(r.getComputedStyle(n).opacity,document.head.removeChild(n))});function b(v){var E;g(a,t,(E=l[v])!=null?E:v)}function k(v){e.onChanged?e.onChanged(v,b):b(v)}J(o,k,{flush:"post",immediate:!0}),P(()=>k(o.value));const M=A({get(){return p?c.value:o.value},set(v){c.value=v}});try{return Object.assign(M,{store:c,system:h,state:o})}catch{return M}}function fe(e={}){const{valueDark:a="dark",valueLight:t=""}=e,i=ie({...e,onChanged:(u,s)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,u==="dark",s,u):s(u)},modes:{dark:a,light:t}});return A({get(){return i.value==="dark"},set(u){const s=u?"dark":"light";i.system.value===s?i.value="auto":i.value=s}})}export{de as a,fe as b,x as u};