import{u as S,_ as v,a as g}from"./table.8f1c3db2.js";import{F as B,h as k}from"./element-plus.3904763a.js";import{u as T}from"./useUser.ac1570fc.js";import{C as b,bl as C,e as V,o as y,c as E,b as a,H as d,u as t,O as h,ah as $,I as D,Q as A}from"./@vue.d2db270f.js";import{b as F}from"./vue-router.cefc97b8.js";import{u as H,_ as U}from"./tab.869f8e6b.js";import{g as z}from"./index.c29e1f0e.js";import"./dayjs.65d36044.js";import"./@kangc.7a169bfb.js";import"./vue.49864943.js";import"./@element-plus.8bdeac16.js";import"./@vueuse.d99af6d0.js";import"./lodash-es.e24100a0.js";import"./async-validator.6019f6c6.js";import"./@sxzz.69bffcbd.js";import"./escape-html.d3a2e952.js";import"./normalize-wheel-es.25faf228.js";import"./@ctrl.46158b0f.js";import"./tab.a2965159.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./@icon-park.3c7e9ece.js";import"./pinia.16fb2893.js";import"./vue-demi.fd44cc08.js";import"./axios.af22a90f.js";import"./lodash.4b59e61b.js";import"./prismjs.e66d8193.js";import"./vee-validate.0e4c74ff.js";import"./@vee-validate.898c8da1.js";import"./yup.905b9289.js";import"./nanoclone.5d6f781b.js";import"./property-expr.8748984a.js";import"./toposort.bf2a2d8a.js";/* empty css                    */const N=h("\u9009\u62E9"),G=h(" \u9009\u62E9\u7528\u6237 "),I=b({__name:"get",emits:["select"],async setup(w,{emit:u}){let r,l;const{load:e,users:s}=T();[r,l]=C(()=>e()),await r,l();const o=V(!1),i=_=>{u("select",_),o.value=!1};return(_,n)=>{const p=k,f=v,c=B;return y(),E("div",null,[a(c,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=m=>o.value=m),width:"95%",top:"20px",title:"\u9009\u62E9\u7528\u6237"},{default:d(()=>{var m;return[a(f,{data:(m=t(s))==null?void 0:m.data,columns:t(S),buttons:[{command:"select",title:"\u9009\u62E9",type:"primary"}],"button-type":"default","button-width":90},{button:d(({model:x})=>[a(p,{type:"primary",size:"default",onClick:O=>i(x)},{default:d(()=>[N]),_:2},1032,["onClick"])]),_:1},8,["data","columns"])]}),_:1},8,["modelValue"]),a(p,{type:"primary",size:"default",onClick:n[1]||(n[1]=m=>o.value=!o.value)},{default:d(()=>[G]),_:1})])}}}),Et=b({__name:"index",async setup(w){let u,r;const l=F(),e=H(),s=z();[u,r]=C(()=>Promise.all([s.currentSite(),e.load()])),await u,r();const o=[{title:"\u8BBE\u7F6E\u89D2\u8272",action(i){l.push({name:"site.admin.role",params:{sid:s.sid,id:i.id}})}},{title:"\u5220\u9664\u7BA1\u7406\u5458",async action(i){await e.del(i)}}];return(i,_)=>{var c;const n=I,p=v,f=$("access");return y(),E(A,null,[a(U,{site:t(s).site.value},null,8,["site"]),D(a(n,{onSelect:t(e).add,class:"mb-2"},null,8,["onSelect"]),[[f,t(s).site.value,"admin-add"]]),a(p,{data:(c=t(e).admins.value)==null?void 0:c.data,columns:t(g),api:t(e).load,buttons:t(o)},null,8,["data","columns","api","buttons"])],64)}}});export{Et as default};
