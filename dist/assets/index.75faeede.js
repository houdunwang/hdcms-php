import{f as m,g as y}from"./element-plus.3904763a.js";import{C as f,e as g,S as b,o as n,c as d,a as e,Q as _,ad as x,G as B,H as t,O as c,P as l,b as o,K as w}from"./@vue.d2db270f.js";import"./dayjs.65d36044.js";import"./@kangc.7a169bfb.js";import"./vue.49864943.js";import"./@vueuse.d99af6d0.js";import"./@element-plus.8bdeac16.js";import"./lodash-es.e24100a0.js";import"./async-validator.6019f6c6.js";import"./@sxzz.69bffcbd.js";import"./escape-html.d3a2e952.js";import"./normalize-wheel-es.25faf228.js";import"./@ctrl.46158b0f.js";const i=window.echarts,A={title:{text:"ECharts \u5165\u95E8\u793A\u4F8B"},tooltip:{},xAxis:{data:["\u886C\u886B","\u7F8A\u6BDB\u886B","\u96EA\u7EBA\u886B","\u88E4\u5B50","\u9AD8\u8DDF\u978B","\u889C\u5B50"]},yAxis:{},series:[{name:"\u9500\u91CF",type:"bar",data:[5,20,36,10,10,20]}]},S={color:["#80FFA5","#00DDFF","#37A2FF","#FF0087","#FFBF00"],title:{text:"Gradient Stacked Area Chart"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["Line 1","Line 2","Line 3","Line 4","Line 5"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Line 1",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new i.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},emphasis:{focus:"series"},data:[140,232,101,264,90,340,250]},{name:"Line 2",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new i.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},data:[120,282,111,234,220,340,310]},{name:"Line 3",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new i.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(55, 162, 255)"},{offset:1,color:"rgb(116, 21, 219)"}])},emphasis:{focus:"series"},data:[320,132,201,334,190,130,220]},{name:"Line 4",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new i.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 0, 135)"},{offset:1,color:"rgb(135, 0, 157)"}])},emphasis:{focus:"series"},data:[220,402,231,134,190,230,120]},{name:"Line 5",type:"line",stack:"Total",smooth:!0,lineStyle:{width:0},showSymbol:!1,label:{show:!0,position:"top"},areaStyle:{opacity:.8,color:new i.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(255, 191, 0)"},{offset:1,color:"rgb(224, 62, 76)"}])},emphasis:{focus:"series"},data:[220,302,181,234,210,290,150]}]},E={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}],yAxis:[{type:"value"}],series:[{name:"Direct",type:"bar",emphasis:{focus:"series"},data:[320,332,301,334,390,330,320]},{name:"Email",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"bar",stack:"Ad",emphasis:{focus:"series"},data:[150,232,201,154,190,330,410]},{name:"Search Engine",type:"bar",data:[862,1018,964,1026,1679,1600,1570],emphasis:{focus:"series"},markLine:{lineStyle:{type:"dashed"},data:[[{type:"min"},{type:"max"}]]}},{name:"Baidu",type:"bar",barWidth:5,stack:"Search Engine",emphasis:{focus:"series"},data:[620,732,701,734,1090,1130,1120]},{name:"Google",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},data:[120,132,101,134,290,230,220]},{name:"Bing",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},data:[60,72,71,74,190,130,110]},{name:"Others",type:"bar",stack:"Search Engine",emphasis:{focus:"series"},data:[62,82,91,84,109,110,120]}]},k={angleAxis:{},radiusAxis:{type:"category",data:["Mon","Tue","Wed","Thu"],z:10},polar:{},series:[{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"A",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[2,4,6,8],coordinateSystem:"polar",name:"B",stack:"a",emphasis:{focus:"series"}},{type:"bar",data:[1,2,3,4],coordinateSystem:"polar",name:"C",stack:"a",emphasis:{focus:"series"}}],legend:{show:!0,data:["A","B","C"]}},C={class:"grid md:grid-cols-4 gap-3 bg-gray-100"},F={class:"flex justify-between items-center"},L=c("\u6708"),T={class:"flex mt-3 justify-between items-center"},v={class:"text-3xl"},D={class:"text-base mt-6 flex justify-between"},G={class:""},O={class:"mt-5 grid md:grid-cols-2 gap-3"},I=e("div",null,"\u7528\u6237\u7EDF\u8BA1",-1),V=e("div",{id:"echart1",class:"h-72 w-full"},null,-1),W=e("div",null,"\u9500\u552E\u5BA2",-1),j=e("div",{id:"echart2",class:"h-72 w-full"},null,-1),z=e("div",null,"\u7528\u6237\u7EDF\u8BA1",-1),M=e("div",{id:"echart3",class:"h-72 w-full"},null,-1),N=e("div",null,"\u9500\u552E\u5BA2",-1),P=e("div",{id:"echart4",class:"h-72 w-full"},null,-1),ie=f({__name:"index",setup(H){const u=g([{title:"\u603B\u4EBA\u6570",price:23343,iconColor:"text-violet-500",icon:"fas fa-address-card",total:2892982,totalTitle:"\u603B\u4EBA\u6570"},{title:"\u9500\u552E\u989D",price:18393,iconColor:"text-green-600",icon:"fas fa-apple-alt",total:9783212,totalTitle:"\u603B\u9500\u552E\u989D"},{title:"\u8BA2\u5355\u6570",price:63803,iconColor:"text-blue-500",icon:"fas fa-award",total:83493,totalTitle:"\u603B\u8BA2\u5355\u6570"},{title:"\u8BC4\u8BBA\u6570",price:528994,iconColor:"text-red-500",icon:"fas fa-baseball-ball",total:48920,totalTitle:"\u603B\u8BC4\u8BBA"}]),r=window.echarts;return b(()=>{r.init(document.getElementById("echart1")).setOption(A),r.init(document.getElementById("echart2")).setOption(S),r.init(document.getElementById("echart3")).setOption(E),r.init(document.getElementById("echart4")).setOption(k)}),(K,Q)=>{const p=m,s=y;return n(),d("div",null,[e("div",C,[(n(!0),d(_,null,x(u.value,(a,h)=>(n(),B(s,{shadow:"hover","body-style":{padding:"20px"},key:h,class:"cursor-pointer"},{header:t(()=>[e("div",F,[c(l(a.title)+" ",1),o(p,{type:"danger",size:"small",effect:"dark"},{default:t(()=>[L]),_:1})])]),default:t(()=>[e("section",T,[e("span",v,l(a.total),1),e("i",{class:w([[a.icon,a.iconColor],"text-5xl"])},null,2)]),e("section",D,[c(l(a.totalTitle)+" ",1),e("span",G,l(a.total),1)])]),_:2},1024))),128))]),e("div",O,[o(s,{shadow:"always","body-style":{padding:"20px"}},{header:t(()=>[I]),default:t(()=>[V]),_:1}),o(s,{shadow:"always","body-style":{padding:"20px"}},{header:t(()=>[W]),default:t(()=>[j]),_:1}),o(s,{shadow:"always","body-style":{padding:"20px"}},{header:t(()=>[z]),default:t(()=>[M]),_:1}),o(s,{shadow:"always","body-style":{padding:"20px"}},{header:t(()=>[N]),default:t(()=>[P]),_:1})])])}}});export{ie as default};
