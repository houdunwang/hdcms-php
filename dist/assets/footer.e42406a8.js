import{k as p,o as s,c as d,a1 as m,H as r,I as n,O as a,P as u,a as f}from"./@vue.93d749de.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";import{h as t}from"./index.18d78123.js";const x=["value"],h=p({__name:"inputComponent",props:{modelValue:null},setup(e){const c=e;return(o,i)=>(s(),d("input",{type:"text",class:"hd-input",value:c.modelValue,onInput:i[0]||(i[0]=l=>o.$emit("update:modelValue",l.target.value))},null,40,x))}});const P=_(h,[["__scopeId","data-v-ff0d4921"]]);function B(){return t.request({baseURL:"/captcha/api/math"})}function N(e){return t.request({url:"code/send",method:"POST",data:{account:e}})}function O(e){return t.request({url:"code/not_exist_user",method:"POST",data:{account:e}})}function E(e){return t.request({url:"code/exist_user",method:"POST",data:{account:e}})}function I(e){return t.request({url:"login",method:"post",data:e})}function S(e){return t.request({url:"register",method:"post",data:e})}function U(e){return t.request({url:"account/forget-password",method:"post",data:e})}const g={},y={class:"flex gap-2 justify-center mt-5"},C=u("\u7528\u6237\u767B\u5F55"),k=u("\u4F1A\u5458\u6CE8\u518C"),v=u(" \u627E\u56DE\u5BC6\u7801 "),q=f("a",{href:"/",class:"text-xs text-gray-700"},"\u7F51\u7AD9\u9996\u9875",-1);function T(e,c){const o=m("router-link");return s(),d("div",y,[e.$route.name!="login"?(s(),r(o,{key:0,to:"/login",class:"text-xs text-gray-700"},{default:n(()=>[C]),_:1})):a("",!0),e.$route.name!="register"?(s(),r(o,{key:1,to:"/register",class:"text-xs text-gray-700"},{default:n(()=>[k]),_:1})):a("",!0),e.$route.name!="password"?(s(),r(o,{key:2,to:{name:"password"},class:"text-xs text-gray-700"},{default:n(()=>[v]),_:1})):a("",!0),q])}const b=_(g,[["render",T]]);export{b as F,P as _,B as a,N as b,O as c,E as d,U as f,I as l,S as r};
