import{_ as t}from"./tab.a2965159.js";import{C as s,o as u,G as n,M as a}from"./@vue.d2db270f.js";const d=s({__name:"tab",props:{site:null,role:null},setup(e){return(r,m)=>{const i=t;return e.site?(u(),n(i,{key:0,tabs:[{label:"\u7AD9\u70B9\u5217\u8868",route:{name:"site.index"}},{label:"\u7AD9\u70B9\u89D2\u8272\u5217\u8868",route:{name:"role.index",params:{sid:e.site.id}},permission:{name:"role-list",site:e.site}},{label:"\u6DFB\u52A0\u89D2\u8272",route:{name:"role.add",params:{sid:e.site.id}},permission:{name:"role-add",site:e.site}},{label:"\u7F16\u8F91\u89D2\u8272",route:{name:"role.edit"},current:!0,permission:{name:"edit-list",site:e.site}},{label:"\u8BBE\u7F6E\u89D2\u8272\u6743\u9650",route:{name:"role.permission"},current:!0,permission:{name:"role-permission-set",site:e.site}},{label:"\u7BA1\u7406\u5458\u5217\u8868",route:{name:"site.admin.index",params:{sid:e.site.id}},permission:{name:"admin-list",site:e.site}},{label:"\u6743\u9650\u8BBE\u7F6E",route:{name:"site.role.permission",params:{sid:e.site.id}},permission:{name:"admin-list",site:e.site},current:!0}]},null,8,["tabs"])):a("",!0)}}});export{d as _};
