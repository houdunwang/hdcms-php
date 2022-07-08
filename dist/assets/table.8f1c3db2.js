import{l as $,m as j,n as O,e as U,o as W,p as q,q as H,r as J,s as L,t as P,a as Q,h as R,j as X,f as Z}from"./element-plus.3904763a.js";import{C as ee,e as E,o as t,c as n,a as te,b as u,H as a,Q as d,ad as m,I as v,J as D,G as i,ai as ae,D as k,O as c,P as h,u as T,M as F}from"./@vue.d2db270f.js";import{a as le}from"./dayjs.65d36044.js";import{C as ue}from"./@element-plus.8bdeac16.js";const oe={key:0},ne={class:"grid grid-cols-[auto_1fr_auto] items-center bg-white p-2 border rounded-sm mb-2"},re=c("\u641C\u7D22"),se=c(" \u64CD\u4F5C "),me=ee({__name:"tableComponent",props:{data:null,buttons:null,buttonWidth:null,buttonType:{default:"drop"},columns:null},emits:["action","search"],setup(l,{emit:V}){let b=E(l.columns&&l.columns.filter(o=>o.search==!0).map(o=>o.prop)),g=E("");const w=async()=>{if(!b.value.length)return Q.error("\u8BF7\u9009\u62E9\u641C\u7D22\u7C7B\u578B");V("search",{searchFields:b.value,searchContent:g.value})},x=async o=>{var s,_,f;(f=(_=(s=l.buttons)==null?void 0:s[o.command])==null?void 0:_.action)==null||f.call(null,o.model)};return(o,s)=>{const _=$,f=j,A=O,C=R,I=X,N=U,B=Z,y=W,S=q,Y=H,z=J,G=L,K=P;return l.data?(t(),n("div",oe,[te("div",ne,[u(f,{modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=e=>b.value=e),"collapse-tags":"",placeholder:"\u8BF7\u9009\u62E9\u5B57\u6BB5",filterable:"",class:"mr-1",multiple:""},{default:a(()=>[(t(!0),n(d,null,m(l.columns,e=>v((t(),i(_,{key:e.prop,label:e.label,value:e.prop},null,8,["label","value"])),[[D,e.search===!0]])),128))]),_:1},8,["modelValue"]),u(A,{modelValue:g.value,"onUpdate:modelValue":s[1]||(s[1]=e=>g.value=e),placeholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",size:"default",class:"mr-1",onKeyup:ae(w,["enter"])},null,8,["modelValue","onKeyup"]),u(I,{class:"ml-1"},{default:a(()=>[u(C,{type:"success",size:"default",onClick:w},{default:a(()=>[re]),_:1}),k(o.$slots,"search-button")]),_:3})]),u(K,{data:l.data,border:"",stripe:"","highlight-current-row":!0,style:{width:"100%"}},{default:a(()=>[(t(!0),n(d,null,m(l.columns,e=>(t(),i(y,{fixed:e.fixed||!1,prop:e.prop,key:e.prop,label:e.label,width:e.width,align:e.align},{default:a(({row:r})=>[e.type==="image"?(t(),i(N,{key:0,"preview-teleported":"","hide-on-click-modal":!0,"preview-src-list":[r[e.prop]],src:r[e.prop],fit:"cover",class:"w-10 h-10 rounded-lg"},null,8,["preview-src-list","src"])):e.type==="radio"?(t(!0),n(d,{key:1},m(e.options,p=>v((t(),n("span",null,[u(B,null,{default:a(()=>[c(h(p[0]),1)]),_:2},1024)],512)),[[D,p[1]==r[e.prop]]])),256)):e.type==="tag"?(t(!0),n(d,{key:2},m(r[e.prop],(p,M)=>(t(),i(B,{type:"success",size:"small",effect:"dark",key:M,class:"m-1"},{default:a(()=>[c(h(p[e.tag_field]),1)]),_:2},1024))),128)):e.type==="date"?(t(),n(d,{key:3},[c(h(T(le)(r[e.prop]).format("YYYY-mm-DD")),1)],64)):(t(),n(d,{key:4},[c(h(r[e.prop]),1)],64))]),_:2},1032,["fixed","prop","label","width","align"]))),128)),l.buttons&&l.buttonType=="drop"?(t(),i(y,{key:0,align:"center",width:"110",fixed:"right",id:"buttonGroup"},{default:a(({row:e})=>[u(G,{onCommand:x},{dropdown:a(()=>[u(z,null,{default:a(()=>[(t(!0),n(d,null,m(l.buttons,(r,p)=>(t(),i(Y,{key:p,command:{model:e,command:p}},{default:a(()=>[c(h(r.title),1)]),_:2},1032,["command"]))),128))]),_:2},1024)]),default:a(()=>[u(C,{type:"primary"},{default:a(()=>[se,u(S,{class:"el-icon--right"},{default:a(()=>[u(T(ue))]),_:1})]),_:1})]),_:2},1024)]),_:1})):F("",!0),o.$slots.button?(t(),i(y,{key:1,width:l.buttonWidth,align:"center",fixed:"right"},{default:a(({row:e})=>[e.id?k(o.$slots,"button",{key:0,model:e}):F("",!0)]),_:3},8,["width"])):F("",!0)]),_:3},8,["data"])])):F("",!0)}}}),he=[{prop:"id",label:"ID",align:"center",width:80},{prop:"name",label:"\u6635\u79F0",search:!0},{prop:"avatar",label:"\u5934\u50CF",type:"image",align:"center",width:80},{prop:"email",label:"\u90AE\u7BB1",width:300,search:!0},{prop:"mobile",label:"\u624B\u673A\u53F7",width:200,search:!0},{prop:"sex",label:"\u6027\u522B",align:"center",type:"radio",options:[["\u7537",1],["\u5973",2]],width:80},{prop:"created_at",label:"\u6CE8\u518C\u65F6\u95F4",type:"date",width:120},{prop:"updated_at",label:"\u66F4\u65B0\u65F6\u95F4",type:"date",width:120}],be=[{prop:"id",label:"\u7F16\u53F7",width:80,align:"center"},{prop:"title",label:"\u6A21\u5757\u540D\u79F0",search:!0},{prop:"name",label:"\u6807\u8BC6",search:!0},{prop:"author",label:"\u4F5C\u8005",search:!0},{prop:"version",label:"\u7248\u672C\u53F7"},{prop:"preview",label:"\u9884\u89C8\u56FE",type:"image",width:80,align:"center"},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",type:"date",width:120}],_e=[{prop:"id",label:"\u7F16\u53F7",width:80,align:"center"},{prop:"name",label:"\u89D2\u8272\u540D\u79F0",search:!0},{prop:"description",label:"\u89D2\u8272\u63CF\u8FF0",search:!0},{prop:"permissions",label:"\u6743\u9650",type:"tag",tag_field:"title"},{prop:"created_at",label:"\u521B\u5EFA\u65F6\u95F4",type:"date",width:120},{prop:"updated_at",label:"\u66F4\u65B0\u65F6\u95F4",type:"date",width:120}],fe=[{prop:"id",label:"ID",align:"center",width:80},{prop:"name",label:"\u6635\u79F0",search:!0},{prop:"roles",label:"\u89D2\u8272",type:"tag",tag_field:"name"},{prop:"avatar",label:"\u5934\u50CF",type:"image",align:"center",width:80},{prop:"email",label:"\u90AE\u7BB1",width:300,search:!0},{prop:"mobile",label:"\u624B\u673A\u53F7",width:200,search:!0},{prop:"created_at",label:"\u6CE8\u518C\u65F6\u95F4",type:"date",width:120}];export{me as _,fe as a,be as m,_e as r,he as u};
