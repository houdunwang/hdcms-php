import{i as Y}from"./vue-demi.fd44cc08.js";import{h as V,i as Z,ab as E,d as H,e as G,X as M,ac as z,A as L,ar as B,ae as T,z as tt,S as et,$ as st,j as nt}from"./@vue.ac3c99c7.js";/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let J;const R=t=>J=t,N=Symbol();function O(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var k;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(k||(k={}));function it(){const t=z(!0),r=t.run(()=>H({}));let s=[],e=[];const o=E({install(u){R(o),o._a=u,u.provide(N,o),u.config.globalProperties.$pinia=o,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!Y?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:r});return o}const U=()=>{};function F(t,r,s,e=U){t.push(r);const o=()=>{const u=t.indexOf(r);u>-1&&(t.splice(u,1),e())};return!s&&V()&&tt(o),o}function _(t,...r){t.slice().forEach(s=>{s(...r)})}function x(t,r){for(const s in r){if(!r.hasOwnProperty(s))continue;const e=r[s],o=t[s];O(o)&&O(e)&&t.hasOwnProperty(s)&&!L(e)&&!B(e)?t[s]=x(o,e):t[s]=e}return t}const ot=Symbol();function ct(t){return!O(t)||!t.hasOwnProperty(ot)}const{assign:h}=Object;function rt(t){return!!(L(t)&&t.effect)}function ut(t,r,s,e){const{state:o,actions:u,getters:f}=r,a=s.state.value[t];let d;function b(){a||(s.state.value[t]=o?o():{});const y=st(s.state.value[t]);return h(y,u,Object.keys(f||{}).reduce((v,p)=>(v[p]=E(nt(()=>{R(s);const m=s._s.get(t);return f[p].call(m,m)})),v),{}))}return d=W(t,b,r,s,e,!0),d.$reset=function(){const v=o?o():{};this.$patch(p=>{h(p,v)})},d}function W(t,r,s={},e,o,u){let f;const a=h({actions:{}},s),d={deep:!0};let b,y,v=E([]),p=E([]),m;const g=e.state.value[t];!u&&!g&&(e.state.value[t]={}),H({});let C;function A(c){let n;b=y=!1,typeof c=="function"?(c(e.state.value[t]),n={type:k.patchFunction,storeId:t,events:m}):(x(e.state.value[t],c),n={type:k.patchObject,payload:c,storeId:t,events:m});const S=C=Symbol();et().then(()=>{C===S&&(b=!0)}),y=!0,_(v,n,e.state.value[t])}const X=U;function $(){f.stop(),v=[],p=[],e._s.delete(t)}function q(c,n){return function(){R(e);const S=Array.from(arguments),P=[],w=[];function K(i){P.push(i)}function Q(i){w.push(i)}_(p,{args:S,name:c,store:l,after:K,onError:Q});let I;try{I=n.apply(this&&this.$id===t?this:l,S)}catch(i){throw _(w,i),i}return I instanceof Promise?I.then(i=>(_(P,i),i)).catch(i=>(_(w,i),Promise.reject(i))):(_(P,I),I)}}const D={_p:e,$id:t,$onAction:F.bind(null,p),$patch:A,$reset:X,$subscribe(c,n={}){const S=F(v,c,n.detached,()=>P()),P=f.run(()=>G(()=>e.state.value[t],w=>{(n.flush==="sync"?y:b)&&c({storeId:t,type:k.direct,events:m},w)},h({},d,n)));return S},$dispose:$},l=M(h({},D));e._s.set(t,l);const j=e._e.run(()=>(f=z(),f.run(()=>r())));for(const c in j){const n=j[c];if(L(n)&&!rt(n)||B(n))u||(g&&ct(n)&&(L(n)?n.value=g[c]:x(n,g[c])),e.state.value[t][c]=n);else if(typeof n=="function"){const S=q(c,n);j[c]=S,a.actions[c]=n}}return h(l,j),h(T(l),j),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:c=>{A(n=>{h(n,c)})}}),e._p.forEach(c=>{h(l,f.run(()=>c({store:l,app:e._a,pinia:e,options:a})))}),g&&u&&s.hydrate&&s.hydrate(l.$state,g),b=!0,y=!0,l}function lt(t,r,s){let e,o;const u=typeof r=="function";typeof t=="string"?(e=t,o=u?s:r):(o=t,e=t.id);function f(a,d){const b=V();return a=a||b&&Z(N),a&&R(a),a=J,a._s.has(e)||(u?W(e,r,o,a):ut(e,o,a)),a._s.get(e)}return f.$id=e,f}export{it as c,lt as d};
