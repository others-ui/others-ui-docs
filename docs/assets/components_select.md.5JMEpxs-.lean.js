import"./chunks/theme.F8oPZ2st.js";import{h as o,c as h,m as t,t as u,a as p,o as _}from"./chunks/framework.FMYHWrFI.js";const m=t("h1",{id:"select",tabindex:"-1"},[p("Select "),t("a",{class:"header-anchor",href:"#select","aria-label":'Permalink to "Select"'},"​")],-1),v=t("br",null,null,-1),f=["options"],k=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/select.md","filePath":"components/select.md"}'),b={name:"components/select.md"},B=Object.assign(b,{setup(g){const l=o(0),n=[{label:"第一个",value:"1"},{label:"第二个",value:"2"},{label:"第三个",value:"3"},{label:"第四个",value:"4"},{label:"第五个",value:"5"}],s=(e,a)=>a.filter(d=>d.label.startsWith(e)),c=e=>{console.log("onSearch",e.detail)},r=o(n),i=e=>{l.value=e.detail,console.log("onChange",e.detail)};return(e,a)=>(_(),h("div",null,[m,v,t("div",null,[t("div",null,u(l.value),1),t("ot-select",{search:"",options:r.value,onChange:i,placeholder:"请输入",onSearch:c,filter:s},null,40,f)])]))}});export{k as __pageData,B as default};
