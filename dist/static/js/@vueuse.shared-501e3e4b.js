import{g as m,o as v,u as d,r as a,n as f,q as h,v as w}from"./@vue.reactivity-b2e38c7a.js";import{g as y,f as F,n as b,q as g}from"./@vue.runtime-core-0029b467.js";function O(t){return m()?(v(t),!0):!1}function P(t){return typeof t=="function"?t():d(t)}const S=typeof window<"u"&&typeof document<"u",j=Object.prototype.toString,D=t=>j.call(t)==="[object Object]",A=()=>{};function T(t,e){function i(...s){return new Promise((n,o)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(n).catch(o)})}return i}const p=t=>t();function C(t=p){const e=a(!0);function i(){e.value=!1}function s(){e.value=!0}const n=(...o)=>{e.value&&t(...o)};return{isActive:f(e),pause:i,resume:s,eventFilter:n}}function M(...t){if(t.length!==1)return h(...t);const e=t[0];return typeof e=="function"?f(w(()=>({get:e,set:A}))):a(e)}function R(t,e,i={}){const{eventFilter:s=p,...n}=i;return g(t,T(s,e),n)}function W(t,e,i={}){const{eventFilter:s,...n}=i,{eventFilter:o,pause:r,resume:u,isActive:c}=C(s);return{stop:R(t,e,{...n,eventFilter:o}),pause:r,resume:u,isActive:c}}function k(t,e=!0){y()?F(t):e?t():b(t)}function I(t,e,i={}){const{immediate:s=!0}=i,n=a(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function u(){n.value=!1,r()}function c(...l){r(),n.value=!0,o=setTimeout(()=>{n.value=!1,o=null,t(...l)},P(e))}return s&&(n.value=!0,S&&c()),O(u),{isPending:f(n),start:c,stop:u}}export{P as a,S as b,M as c,k as d,D as i,A as n,O as t,I as u,W as w};