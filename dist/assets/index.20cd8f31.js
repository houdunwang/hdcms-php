import{_ as B}from"./pagination.180fd926.js";import{u as F,_ as V}from"./table.8f1c3db2.js";import{F as E,h as T}from"./element-plus.3904763a.js";import{u as k,_ as A}from"./form.4eb65b63.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import{C,e as $,o as i,c as g,G as z,a as D,b as a,H as p,u as e,A as f,a1 as N,Q as x,O as U,bl as I}from"./@vue.d2db270f.js";import{_ as G}from"./tab.a2965159.js";import{u as L}from"./useUser.ac1570fc.js";import"./dayjs.65d36044.js";import"./@kangc.7a169bfb.js";import"./vue.49864943.js";import"./@element-plus.8bdeac16.js";import"./@vueuse.d99af6d0.js";import"./lodash-es.e24100a0.js";import"./async-validator.6019f6c6.js";import"./@sxzz.69bffcbd.js";import"./escape-html.d3a2e952.js";import"./normalize-wheel-es.25faf228.js";import"./@ctrl.46158b0f.js";import"./error.2a59302a.js";import"./index.c29e1f0e.js";import"./vue-router.cefc97b8.js";import"./@icon-park.3c7e9ece.js";import"./pinia.16fb2893.js";import"./vue-demi.fd44cc08.js";import"./axios.af22a90f.js";import"./lodash.4b59e61b.js";import"./prismjs.e66d8193.js";import"./vee-validate.0e4c74ff.js";import"./@vee-validate.898c8da1.js";import"./yup.905b9289.js";import"./nanoclone.5d6f781b.js";import"./property-expr.8748984a.js";import"./toposort.bf2a2d8a.js";/* empty css                    */import"./upload.663e8b89.js";const O={class:""},P=U("\u663E\u793A"),Q=C({__name:"info",props:{user:null},setup(u){let o=$(!1);return(s,t)=>{const r=A,m=E,l=T;return i(),g(x,null,[(i(),z(N,{to:"body"},[D("div",O,[a(m,{modelValue:e(o),"onUpdate:modelValue":t[0]||(t[0]=n=>f(o)?o.value=n:o=n),title:"\u7528\u6237\u8D44\u6599","custom-class":"dialog",top:"20px"},{default:p(()=>[a(r,{model:u.user,fields:e(k),"show-button":!1},null,8,["model","fields"])]),_:1},8,["modelValue"])])])),a(l,{type:"primary",size:"default",onClick:t[1]||(t[1]=n=>f(o)?o.value=!0:o=!0)},{default:p(()=>[P]),_:1})],64)}}});var R=H(Q,[["__scopeId","data-v-71466f42"]]);const Eo=C({__name:"index",async setup(u){let o,s;const{load:t,users:r}=L();[o,s]=I(()=>t()),await o,s();const m=[{label:"\u7CFB\u7EDF\u7BA1\u7406",route:{name:"system.index"}},{label:"\u7528\u6237\u5217\u8868",route:{name:"user.index"},current:!0}];return(l,n)=>{var _,d,c;const b=G,h=R,v=V,w=B;return i(),g(x,null,[a(b,{tabs:m}),a(v,{data:(_=e(r))==null?void 0:_.data,columns:e(F),"button-width":100},{button:p(({model:y})=>[a(h,{user:y},null,8,["user"])]),_:1},8,["data","columns"]),a(w,{total:(d=e(r))==null?void 0:d.meta.total,size:(c=e(r))==null?void 0:c.meta.per_page,onChange:e(t)},null,8,["total","size","onChange"])],64)}}});export{Eo as default};
