import{e as x}from"./element-plus.3904763a.js";import{u as v,l as y}from"./index.c29e1f0e.js";import{d as k,e as b,f as w,g as S,h as z}from"./@icon-park.3c7e9ece.js";import{C as d,o as s,c as f,a as t,u as n,G as i,M as B,P as C,b as l,e as E}from"./@vue.d2db270f.js";import{g as F}from"./system.0b6df1a0.js";import{d as $}from"./pinia.16fb2893.js";const D={class:"group relative"},N={class:"flex justify-center items-center"},V={class:"ml-1 text-sm"},A={class:"group-hover:block absolute right-0 top-full z-50 bg-white shadow-sm px-5 whitespace-nowrap border rounded-md hidden"},I={href:"https://doc.houdunren.com",target:"_blank",class:"flex items-center cursor-pointer border-b py-3"},j=t("span",{class:"text-xs text-gray-600 ml-2"},"\u6587\u6863\u8D44\u6599",-1),q={class:"flex items-center cursor-pointer py-3",href:"/"},G=t("span",{class:"text-xs text-gray-600 ml-2"},"\u7F51\u7AD9\u9996\u9875",-1),L=t("span",{class:"text-xs text-gray-600 ml-2"},"\u9000\u51FA\u767B\u5F55",-1),T=d({__name:"drop",setup(h){const e=v();return(c,o)=>{var u,m,p;const _=x,a=k,r=b,g=w;return s(),f("div",D,[t("div",N,[(u=n(e).info)!=null&&u.avatar?(s(),i(_,{key:0,src:(m=n(e).info)==null?void 0:m.avatar,fit:"cover",class:"w-8 h-8 rounded-full border-white"},null,8,["src"])):B("",!0),t("span",V,C((p=n(e).info)==null?void 0:p.name),1)]),t("section",A,[t("a",I,[l(a,{theme:"outline",size:"18",fill:"#333"}),j]),t("a",q,[l(r,{theme:"outline",size:"18",fill:"#333"}),G]),t("div",{class:"flex items-center cursor-pointer py-3",onClick:o[0]||(o[0]=P=>n(y)())},[l(g,{theme:"outline",size:"18",fill:"#333"}),L])])])}}}),M={class:"flex items-center"},U=d({__name:"fullscreen",setup(h){const e=E(!1),c=()=>{e.value?document.exitFullscreen():document.documentElement.requestFullscreen(),e.value=!e.value};return document.addEventListener("fullscreenchange",o=>{e.value=Boolean(document.fullscreenElement)}),(o,_)=>{const a=S,r=z;return s(),f("div",M,[e.value?(s(),i(a,{key:0,theme:"outline",size:"24",onClick:c,class:"mr-5"})):(s(),i(r,{key:1,theme:"outline",size:"24",onClick:c,class:"mr-5"}))])}}});var W=$("system",{state:()=>({data:{}}),actions:{async load(){this.data=await F()}}});export{U as _,T as a,W as s};
