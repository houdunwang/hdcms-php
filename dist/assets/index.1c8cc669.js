import{r as b,_ as y}from"./table.c8ddd116.js";import{g as C,r as n}from"./index.11963c04.js";import{u as h}from"./useRole.822d039d.js";import{_ as x}from"./tab.32d92875.js";import{C as B,bl as F,o as g,c as w,b as a,u as r,Q as E}from"./@vue.ac3c99c7.js";import"./element-plus.da21f900.js";import"./dayjs.0c888375.js";import"./@kangc.1996ede0.js";import"./vue.3a73d106.js";import"./@vueuse.bdb320bd.js";import"./@element-plus.9265bdf6.js";import"./lodash-es.e24100a0.js";import"./async-validator.6019f6c6.js";import"./@sxzz.69bffcbd.js";import"./escape-html.d3a2e952.js";import"./normalize-wheel-es.25faf228.js";import"./@ctrl.46158b0f.js";import"./vue-router.ee40a60b.js";import"./@icon-park.f131a0de.js";import"./pinia.3af4ac7f.js";import"./vue-demi.fd44cc08.js";import"./axios.af22a90f.js";import"./lodash.2484672c.js";import"./prismjs.80502f0c.js";import"./vee-validate.c3c37b64.js";import"./@vee-validate.898c8da1.js";import"./yup.bddae821.js";import"./nanoclone.5d6f781b.js";import"./property-expr.8748984a.js";import"./toposort.bf2a2d8a.js";/* empty css                    */import"./tab.c0fcca23.js";import"./plugin-vue_export-helper.21dcd24c.js";const st=B({__name:"index",async setup(S){let e,m;const{site:i,currentSite:u}=C(),{del:l,roles:c,load:s}=h();[e,m]=F(()=>Promise.all([s(),u()])),await e,m();const d=[{title:"\u7F16\u8F91",type:"success",permission:"role-edit",action:o=>{var t;return n.push({name:"role.edit",query:{sid:(t=i.value)==null?void 0:t.id,id:o.id}})}},{title:"\u5220\u9664",type:"danger",permission:"role-del",action:o=>l(o)},{title:"\u6743\u9650\u8BBE\u7F6E",type:"primary",action:o=>{var t;return n.push({name:"site.role.permission",query:{sid:(t=i.value)==null?void 0:t.id,id:o.id}})}}];return(o,t)=>{var p;const _=y;return g(),w(E,null,[a(x,{site:r(i)},null,8,["site"]),a(_,{data:(p=r(c))==null?void 0:p.data,columns:r(b),"button-width":210,buttons:r(d),onSearch:t[0]||(t[0]=f=>r(s)(1,f))},null,8,["data","columns","buttons"])],64)}}});export{st as default};
