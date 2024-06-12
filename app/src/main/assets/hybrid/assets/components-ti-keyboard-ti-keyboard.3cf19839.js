import{h as e,j as a,w as t,a4 as i,n as s,p as l,v as o,k as r,x as d,aI as n,R as y,S as c}from"./index-b6ad87f5.js";import{_ as u,a as k}from"./ti-button.36cec1ba.js";const m=u({__name:"ti-keyboard",props:{isPrimary:{type:Boolean,default:!0},primaryLoading:{type:Boolean,default:!1},isExit:{type:Boolean,default:!0},isDoubleZero:{type:Boolean,default:!0},isCross:{type:Boolean,default:!1},isDrop:{type:Boolean,default:!1}},emits:["input","clear","exit","confirm"],setup(u,{emit:m}){const f=m,b=e=>{f("input",e)},p=()=>{f("clear")},_=()=>{f("exit")},C=()=>{f("confirm")};return(m,f)=>{const g=n,x=s,D=y(c("ti-button"),k);return e(),a(x,{class:"ti-keyboard-box",style:i({gridTemplateColumns:u.isPrimary?"3fr 1fr 1fr":""})},{default:t((()=>[l(x,{class:"ti-keyboard-num"},{default:t((()=>[l(g,{class:"ti-keyboard-item",onClick:f[0]||(f[0]=e=>b("7"))},{default:t((()=>[o("7")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[1]||(f[1]=e=>b("8"))},{default:t((()=>[o("8")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[2]||(f[2]=e=>b("9"))},{default:t((()=>[o("9")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[3]||(f[3]=e=>b("4"))},{default:t((()=>[o("4")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[4]||(f[4]=e=>b("5"))},{default:t((()=>[o("5")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[5]||(f[5]=e=>b("6"))},{default:t((()=>[o("6")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[6]||(f[6]=e=>b("1"))},{default:t((()=>[o("1")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[7]||(f[7]=e=>b("2"))},{default:t((()=>[o("2")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[8]||(f[8]=e=>b("3"))},{default:t((()=>[o("3")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[9]||(f[9]=e=>b("0"))},{default:t((()=>[o("0")])),_:1}),u.isDoubleZero?(e(),a(g,{key:0,class:"ti-keyboard-item",style:i({gridColumn:u.isDrop||u.isCross?"":"2/4"}),onClick:f[10]||(f[10]=e=>b("00"))},{default:t((()=>[o("00")])),_:1},8,["style"])):r("",!0),u.isCross?(e(),a(g,{key:1,class:"ti-keyboard-item",style:i({gridColumn:u.isDrop||u.isDoubleZero?"":"2/4"}),onClick:f[11]||(f[11]=e=>b("-"))},{default:t((()=>[o("-")])),_:1},8,["style"])):r("",!0),u.isDrop?(e(),a(g,{key:2,class:"ti-keyboard-item",style:i({gridColumn:u.isDoubleZero||u.isCross?"":"2/4"}),onClick:f[12]||(f[12]=e=>b("."))},{default:t((()=>[o(".")])),_:1},8,["style"])):r("",!0)])),_:1}),l(x,{class:"ti-keyboard-btn"},{default:t((()=>[l(g,{class:"ti-keyboard-item",onClick:p},{default:t((()=>[o(d(m.$t("清空")),1)])),_:1}),u.isExit?(e(),a(g,{key:0,class:"ti-keyboard-item",onClick:_},{default:t((()=>[o(d(m.$t("退出")),1)])),_:1})):r("",!0)])),_:1}),u.isPrimary?(e(),a(x,{key:0,class:"ti-keyboard-btn"},{default:t((()=>[l(D,{loading:u.primaryLoading,type:"primary",onClick:C},{default:t((()=>[o(d(m.$t("確定")),1)])),_:1},8,["loading"])])),_:1})):r("",!0)])),_:1},8,["style"])}}},[["__scopeId","data-v-6ea26735"]]);export{m as default};
