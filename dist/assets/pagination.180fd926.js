import{k as i}from"./element-plus.3904763a.js";import{C as l,o as s,G as r}from"./@vue.d2db270f.js";const m=l({__name:"pagination",props:{total:null,size:null},emits:["change"],setup(e){return(t,n)=>{const a=i;return s(),r(a,{background:"",layout:"prev, pager, next",total:e.total,"hide-on-single-page":!0,"page-size":e.size,onCurrentChange:n[0]||(n[0]=o=>t.$emit("change",o)),class:"mt-3"},null,8,["total","page-size"])}}});export{m as _};
