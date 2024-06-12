import{k as e,l as t,w as a,a5 as i,q as s,t as l,y as o,m as r,z as d,aJ as y,T as n,U as c}from"./index-15b1af2d.js";import{_ as u,a as k}from"./ti-button.e8df1600.js";const m=u({__name:"ti-keyboard",props:{isPrimary:{type:Boolean,default:!0},primaryLoading:{type:Boolean,default:!1},isExit:{type:Boolean,default:!0},isDoubleZero:{type:Boolean,default:!0},isCross:{type:Boolean,default:!1},isDrop:{type:Boolean,default:!1}},emits:["input","clear","exit","confirm"],setup(u,{emit:m}){const f=m,b=e=>{f("input",e)},_=()=>{f("clear")},p=()=>{f("exit")},C=()=>{f("confirm")};return(m,f)=>{const g=y,D=s,x=n(c("ti-button"),k);return e(),t(D,{class:"ti-keyboard-box",style:i({gridTemplateColumns:u.isPrimary?"3fr 1fr 1fr":""})},{default:a((()=>[l(D,{class:"ti-keyboard-num"},{default:a((()=>[l(g,{class:"ti-keyboard-item",onClick:f[0]||(f[0]=e=>b("7"))},{default:a((()=>[o("7")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[1]||(f[1]=e=>b("8"))},{default:a((()=>[o("8")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[2]||(f[2]=e=>b("9"))},{default:a((()=>[o("9")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[3]||(f[3]=e=>b("4"))},{default:a((()=>[o("4")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[4]||(f[4]=e=>b("5"))},{default:a((()=>[o("5")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[5]||(f[5]=e=>b("6"))},{default:a((()=>[o("6")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[6]||(f[6]=e=>b("1"))},{default:a((()=>[o("1")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[7]||(f[7]=e=>b("2"))},{default:a((()=>[o("2")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[8]||(f[8]=e=>b("3"))},{default:a((()=>[o("3")])),_:1}),l(g,{class:"ti-keyboard-item",onClick:f[9]||(f[9]=e=>b("0"))},{default:a((()=>[o("0")])),_:1}),u.isDoubleZero?(e(),t(g,{key:0,class:"ti-keyboard-item",style:i({gridColumn:u.isDrop||u.isCross?"":"2/4"}),onClick:f[10]||(f[10]=e=>b("00"))},{default:a((()=>[o("00")])),_:1},8,["style"])):r("",!0),u.isCross?(e(),t(g,{key:1,class:"ti-keyboard-item",style:i({gridColumn:u.isDrop||u.isDoubleZero?"":"2/4"}),onClick:f[11]||(f[11]=e=>b("-"))},{default:a((()=>[o("-")])),_:1},8,["style"])):r("",!0),u.isDrop?(e(),t(g,{key:2,class:"ti-keyboard-item",style:i({gridColumn:u.isDoubleZero||u.isCross?"":"2/4"}),onClick:f[12]||(f[12]=e=>b("."))},{default:a((()=>[o(".")])),_:1},8,["style"])):r("",!0)])),_:1}),l(D,{class:"ti-keyboard-btn"},{default:a((()=>[l(g,{class:"ti-keyboard-item",onClick:_},{default:a((()=>[o(d(m.$t("清空")),1)])),_:1}),u.isExit?(e(),t(g,{key:0,class:"ti-keyboard-item",onClick:p},{default:a((()=>[o(d(m.$t("退出")),1)])),_:1})):r("",!0)])),_:1}),u.isPrimary?(e(),t(D,{key:0,class:"ti-keyboard-btn"},{default:a((()=>[l(x,{loading:u.primaryLoading,type:"primary",onClick:C},{default:a((()=>[o(d(m.$t("確定")),1)])),_:1},8,["loading"])])),_:1})):r("",!0)])),_:1},8,["style"])}}},[["__scopeId","data-v-6ea26735"]]);export{m as default};
