import{i as j,a as M,h as x,b as p,e as Mt,t as xt,d as Tt,c as L,N as yt,f as U,g as A,j as z,m as Kt}from"./@vue.shared-ccdbf9b9.js";let f;class Pt{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=f,!e&&f&&(this.index=(f.scopes||(f.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=f;try{return f=this,e()}finally{f=s}}}on(){f=this}off(){f=this.parent}stop(e){if(this._active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function ce(t){return new Pt(t)}function at(t,e=f){e&&e.active&&e.effects.push(t)}function fe(){return f}function le(t){f&&f.cleanups.push(t)}const J=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ot=t=>(t.w&m)>0,ct=t=>(t.n&m)>0,Ot=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=m},Ht=t=>{const{deps:e}=t;if(e.length){let s=0;for(let n=0;n<e.length;n++){const r=e[n];ot(r)&&!ct(r)?r.delete(t):e[s++]=r,r.w&=~m,r.n&=~m}e.length=s}},C=new WeakMap;let I=0,m=1;const F=30;let u;const b=Symbol(""),G=Symbol("");class Y{constructor(e,s=null,n){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,at(this,n)}run(){if(!this.active)return this.fn();let e=u,s=R;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=u,u=this,R=!0,m=1<<++I,I<=F?Ot(this):k(this),this.fn()}finally{I<=F&&Ht(this),m=1<<--I,u=this.parent,R=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){u===this?this.deferStop=!0:this.active&&(k(this),this.onStop&&this.onStop(),this.active=!1)}}function k(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}function ue(t,e){t.effect instanceof Y&&(t=t.effect.fn);const s=new Y(t);e&&(Mt(s,e),e.scope&&at(s,e.scope)),(!e||!e.lazy)&&s.run();const n=s.run.bind(s);return n.effect=s,n}function he(t){t.effect.stop()}let R=!0;const ft=[];function zt(){ft.push(R),R=!1}function At(){const t=ft.pop();R=t===void 0?!0:t}function l(t,e,s){if(R&&u){let n=C.get(t);n||C.set(t,n=new Map);let r=n.get(s);r||n.set(s,r=J()),lt(r)}}function lt(t,e){let s=!1;I<=F?ct(t)||(t.n|=m,s=!ot(t)):s=!t.has(u),s&&(t.add(u),u.deps.push(t))}function v(t,e,s,n,r,i){const o=C.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(s==="length"&&p(t)){const _=Number(n);o.forEach((w,d)=>{(d==="length"||!j(d)&&d>=_)&&a.push(w)})}else switch(s!==void 0&&a.push(o.get(s)),e){case"add":p(t)?U(s)&&a.push(o.get("length")):(a.push(o.get(b)),z(t)&&a.push(o.get(G)));break;case"delete":p(t)||(a.push(o.get(b)),z(t)&&a.push(o.get(G)));break;case"set":z(t)&&a.push(o.get(b));break}if(a.length===1)a[0]&&q(a[0]);else{const _=[];for(const w of a)w&&_.push(...w);q(J(_))}}function q(t,e){const s=p(t)?t:[...t];for(const n of s)n.computed&&tt(n);for(const n of s)n.computed||tt(n)}function tt(t,e){(t!==u||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Ct(t,e){var s;return(s=C.get(t))==null?void 0:s.get(e)}const jt=Kt("__proto__,__v_isRef,__isVue"),ut=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(j)),et=Dt();function Dt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const n=c(this);for(let i=0,o=this.length;i<o;i++)l(n,"get",i+"");const r=n[e](...s);return r===-1||r===!1?n[e](...s.map(c)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){zt();const n=c(this)[e].apply(this,s);return At(),n}}),t}function Nt(t){const e=c(this);return l(e,"has",t),e.hasOwnProperty(t)}class ht{constructor(e=!1,s=!1){this._isReadonly=e,this._shallow=s}get(e,s,n){const r=this._isReadonly,i=this._shallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return i;if(s==="__v_raw"&&n===(r?i?Rt:gt:i?wt:pt).get(e))return e;const o=p(e);if(!r){if(o&&A(et,s))return Reflect.get(et,s,n);if(s==="hasOwnProperty")return Nt}const a=Reflect.get(e,s,n);return(j(s)?ut.has(s):jt(s))||(r||l(e,"get",s),i)?a:h(a)?o&&U(s)?a:a.value:M(a)?r?mt(a):vt(a):a}}class _t extends ht{constructor(e=!1){super(!1,e)}set(e,s,n,r){let i=e[s];if(E(i)&&h(i)&&!h(n))return!1;if(!this._shallow&&(!bt(n)&&!E(n)&&(i=c(i),n=c(n)),!p(e)&&h(i)&&!h(n)))return i.value=n,!0;const o=p(e)&&U(s)?Number(s)<e.length:A(e,s),a=Reflect.set(e,s,n,r);return e===c(r)&&(o?x(n,i)&&v(e,"set",s,n):v(e,"add",s,n)),a}deleteProperty(e,s){const n=A(e,s);e[s];const r=Reflect.deleteProperty(e,s);return r&&n&&v(e,"delete",s,void 0),r}has(e,s){const n=Reflect.has(e,s);return(!j(s)||!ut.has(s))&&l(e,"has",s),n}ownKeys(e){return l(e,"iterate",p(e)?"length":b),Reflect.ownKeys(e)}}class dt extends ht{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const Vt=new _t,Wt=new dt,Bt=new _t(!0),Ft=new dt(!0),Q=t=>t,D=t=>Reflect.getPrototypeOf(t);function y(t,e,s=!1,n=!1){t=t.__v_raw;const r=c(t),i=c(e);s||(x(e,i)&&l(r,"get",e),l(r,"get",i));const{has:o}=D(r),a=n?Q:s?Z:S;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function K(t,e=!1){const s=this.__v_raw,n=c(s),r=c(t);return e||(x(t,r)&&l(n,"has",t),l(n,"has",r)),t===r?s.has(t):s.has(t)||s.has(r)}function P(t,e=!1){return t=t.__v_raw,!e&&l(c(t),"iterate",b),Reflect.get(t,"size",t)}function st(t){t=c(t);const e=c(this);return D(e).has.call(e,t)||(e.add(t),v(e,"add",t,t)),this}function nt(t,e){e=c(e);const s=c(this),{has:n,get:r}=D(s);let i=n.call(s,t);i||(t=c(t),i=n.call(s,t));const o=r.call(s,t);return s.set(t,e),i?x(e,o)&&v(s,"set",t,e):v(s,"add",t,e),this}function rt(t){const e=c(this),{has:s,get:n}=D(e);let r=s.call(e,t);r||(t=c(t),r=s.call(e,t)),n&&n.call(e,t);const i=e.delete(t);return r&&v(e,"delete",t,void 0),i}function it(){const t=c(this),e=t.size!==0,s=t.clear();return e&&v(t,"clear",void 0,void 0),s}function O(t,e){return function(n,r){const i=this,o=i.__v_raw,a=c(o),_=e?Q:t?Z:S;return!t&&l(a,"iterate",b),o.forEach((w,d)=>n.call(r,_(w),_(d),i))}}function H(t,e,s){return function(...n){const r=this.__v_raw,i=c(r),o=z(i),a=t==="entries"||t===Symbol.iterator&&o,_=t==="keys"&&o,w=r[t](...n),d=s?Q:e?Z:S;return!e&&l(i,"iterate",_?G:b),{next(){const{value:T,done:B}=w.next();return B?{value:T,done:B}:{value:a?[d(T[0]),d(T[1])]:d(T),done:B}},[Symbol.iterator](){return this}}}}function g(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gt(){const t={get(i){return y(this,i)},get size(){return P(this)},has:K,add:st,set:nt,delete:rt,clear:it,forEach:O(!1,!1)},e={get(i){return y(this,i,!1,!0)},get size(){return P(this)},has:K,add:st,set:nt,delete:rt,clear:it,forEach:O(!1,!0)},s={get(i){return y(this,i,!0)},get size(){return P(this,!0)},has(i){return K.call(this,i,!0)},add:g("add"),set:g("set"),delete:g("delete"),clear:g("clear"),forEach:O(!0,!1)},n={get(i){return y(this,i,!0,!0)},get size(){return P(this,!0)},has(i){return K.call(this,i,!0)},add:g("add"),set:g("set"),delete:g("delete"),clear:g("clear"),forEach:O(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=H(i,!1,!1),s[i]=H(i,!0,!1),e[i]=H(i,!1,!0),n[i]=H(i,!0,!0)}),[t,s,e,n]}const[Yt,qt,Lt,Ut]=Gt();function N(t,e){const s=e?t?Ut:Lt:t?qt:Yt;return(n,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?n:Reflect.get(A(s,r)&&r in n?s:n,r,i)}const Jt={get:N(!1,!1)},Qt={get:N(!1,!0)},Xt={get:N(!0,!1)},Zt={get:N(!0,!0)},pt=new WeakMap,wt=new WeakMap,gt=new WeakMap,Rt=new WeakMap;function $t(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kt(t){return t.__v_skip||!Object.isExtensible(t)?0:$t(xt(t))}function vt(t){return E(t)?t:V(t,!1,Vt,Jt,pt)}function _e(t){return V(t,!1,Bt,Qt,wt)}function mt(t){return V(t,!0,Wt,Xt,gt)}function de(t){return V(t,!0,Ft,Zt,Rt)}function V(t,e,s,n,r){if(!M(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=kt(t);if(o===0)return t;const a=new Proxy(t,o===2?n:s);return r.set(t,a),a}function X(t){return E(t)?X(t.__v_raw):!!(t&&t.__v_isReactive)}function E(t){return!!(t&&t.__v_isReadonly)}function bt(t){return!!(t&&t.__v_isShallow)}function pe(t){return X(t)||E(t)}function c(t){const e=t&&t.__v_raw;return e?c(e):t}function we(t){return Tt(t,"__v_skip",!0),t}const S=t=>M(t)?vt(t):t,Z=t=>M(t)?mt(t):t;function $(t){R&&u&&(t=c(t),lt(t.dep||(t.dep=J())))}function W(t,e){t=c(t);const s=t.dep;s&&q(s)}function h(t){return!!(t&&t.__v_isRef===!0)}function te(t){return Et(t,!1)}function ge(t){return Et(t,!0)}function Et(t,e){return h(t)?t:new ee(t,e)}class ee{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:c(e),this._value=s?e:S(e)}get value(){return $(this),this._value}set value(e){const s=this.__v_isShallow||bt(e)||E(e);e=s?e:c(e),x(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:S(e),W(this))}}function Re(t){W(t)}function It(t){return h(t)?t.value:t}function ve(t){return L(t)?t():It(t)}const se={get:(t,e,s)=>It(Reflect.get(t,e,s)),set:(t,e,s,n)=>{const r=t[e];return h(r)&&!h(s)?(r.value=s,!0):Reflect.set(t,e,s,n)}};function me(t){return X(t)?t:new Proxy(t,se)}class ne{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:n}=e(()=>$(this),()=>W(this));this._get=s,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function be(t){return new ne(t)}function Ee(t){const e=p(t)?new Array(t.length):{};for(const s in t)e[s]=St(t,s);return e}class re{constructor(e,s,n){this._object=e,this._key=s,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ct(c(this._object),this._key)}}class ie{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ie(t,e,s){return h(t)?t:L(t)?new ie(t):M(t)&&arguments.length>1?St(t,e,s):te(t)}function St(t,e,s){const n=t[e];return h(n)?n:new re(t,e,s)}class ae{constructor(e,s,n,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Y(e,()=>{this._dirty||(this._dirty=!0,W(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=c(this);return $(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Se(t,e,s=!1){let n,r;const i=L(t);return i?(n=t,r=yt):(n=t.get,r=t.set),new ae(n,r,i||!r,s)}export{E as A,de as B,he as C,ve as D,Pt as E,Y as R,bt as a,X as b,pe as c,Se as d,At as e,me as f,fe as g,l as h,h as i,vt as j,v as k,ge as l,we as m,mt as n,le as o,zt as p,Ie as q,te as r,_e as s,c as t,It as u,be as v,Ee as w,ce as x,Re as y,ue as z};