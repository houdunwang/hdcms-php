import{A as v,B as g}from"./element-plus.da21f900.js";import{a as n,_ as F}from"./form.8fb205d6.js";import{_ as S}from"./tab.c0fcca23.js";import{g as C,u as E}from"./system.6659e58b.js";import{d as c,C as w,bl as x,o as B,c as A,b as o,a as V,H as a,u as t,Q as h}from"./@vue.ac3c99c7.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import"./dayjs.0c888375.js";import"./@kangc.1996ede0.js";import"./vue.3a73d106.js";import"./@vueuse.bdb320bd.js";import"./@element-plus.9265bdf6.js";import"./lodash-es.e24100a0.js";import"./async-validator.6019f6c6.js";import"./@sxzz.69bffcbd.js";import"./escape-html.d3a2e952.js";import"./normalize-wheel-es.25faf228.js";import"./@ctrl.46158b0f.js";import"./wangEditor.2287c350.js";import"./upload.422b2bec.js";import"./index.11963c04.js";import"./vue-router.ee40a60b.js";import"./@icon-park.f131a0de.js";import"./pinia.3af4ac7f.js";import"./vue-demi.fd44cc08.js";import"./axios.af22a90f.js";import"./lodash.2484672c.js";import"./prismjs.80502f0c.js";import"./vee-validate.c3c37b64.js";import"./@vee-validate.898c8da1.js";import"./yup.bddae821.js";import"./nanoclone.5d6f781b.js";import"./property-expr.8748984a.js";import"./toposort.bf2a2d8a.js";/* empty css                    */import"./error.b1da2840.js";var T=()=>{const s=c();return{system:s,find:async()=>{s.value=await C()},update:async()=>{await E(s.value)}}};const D={class:"tabs"},H=w({__name:"edit",async setup(s){let u,d;const{find:b,system:m,update:i}=T();[u,d]=x(()=>b()),await u,d();const p=c("base");return(N,_)=>{const f=S,l=F,r=v,y=g;return B(),A(h,null,[o(f,{tabs:[{label:"\u7CFB\u7EDF\u7BA1\u7406",route:{name:"system.index"}},{label:"\u4FEE\u6539\u6570\u636E",route:{name:"system.edit"}}]},null,8,["tabs"]),V("div",D,[o(y,{modelValue:p.value,"onUpdate:modelValue":_[0]||(_[0]=e=>p.value=e)},{default:a(()=>[o(r,{label:"\u7F51\u7AD9\u4FE1\u606F",name:"base"},{default:a(()=>[o(l,{model:t(m),fields:t(n).base,onSubmit:t(i)},null,8,["model","fields","onSubmit"])]),_:1}),o(r,{label:"\u9A8C\u8BC1\u7801",name:"code"},{default:a(()=>{var e;return[o(l,{model:(e=t(m))==null?void 0:e.config.code,fields:t(n).code,onSubmit:t(i)},null,8,["model","fields","onSubmit"])]}),_:1}),o(r,{label:"\u963F\u91CC\u4E91",name:"aliyun"},{default:a(()=>{var e;return[o(l,{model:(e=t(m))==null?void 0:e.config.aliyun,fields:t(n).aliyun,onSubmit:t(i)},null,8,["model","fields","onSubmit"])]}),_:1}),o(r,{label:"\u7528\u6237\u5934\u50CF",name:"avatar"},{default:a(()=>{var e;return[o(l,{model:(e=t(m))==null?void 0:e.config.avatar,fields:t(n).avatar,onSubmit:t(i)},null,8,["model","fields","onSubmit"])]}),_:1}),o(r,{label:"\u6587\u4EF6\u4E0A\u4F20",name:"upload"},{default:a(()=>{var e;return[o(l,{model:(e=t(m))==null?void 0:e.config.upload,fields:t(n).upload,onSubmit:t(i)},null,8,["model","fields","onSubmit"])]}),_:1})]),_:1},8,["modelValue"])])],64)}}});var ft=k(H,[["__scopeId","data-v-1fd4b832"]]);export{ft as default};