import{u as a,r as e,e as l,g as t,R as s,S as i,h as o,j as n,w as u,p as c,v as r,x as d,f as p,y as A,z as v,l as f,m as g,B as _,C as m,D as h,E as b,G as w,H as B,Z as x,I as y,L as U,M as C,N as k,c as I,X as S,n as T,_ as R,a0 as E,a1 as j,T as L,a2 as Q,$ as G,q as X,F as Y,a3 as D,A as M,a4 as O}from"./index-e444aa33.js";import{i as H,g as J,a as N,b as z,d as F,_ as Z,c as K}from"./platform.c4b4b37f.js";import{_ as V,a as q}from"./ti-button.b1c15e53.js";const P=V({__name:"ti-layout-setserver",emits:["bind","focus","blur"],setup(R,{emit:E}){const{setUserInfo:j}=a(),L=e({ip:"",port:"",device_id:"null",remark:""}),Q=()=>{const a=f();L.value.ip=(null==a?void 0:a.ip)||g()||"127.0.0.1",L.value.port=(null==a?void 0:a.port)||"8080"},G=E;l((()=>{H()?L.value.device_id=J():t({success:a=>{L.value.device_id=a.deviceId}})}));const X=()=>{G("focus")},Y=()=>{G("blur")},D=a=>{L.value.remark=a},M=a=>{L.value.ip=a},O=a=>{L.value.port=a},F=e("");e([]);const Z=e(),K=e(!1),V=async()=>{var a;const e={...L.value};if(e.ip)if(e.port)try{const l=await _(m(`${null==e?void 0:e.ip}:${e.port}`),!0);1==parseInt(l.data.cashier.order_method.is_table_order)?(h(e),b(l.data.app_id),w(l.data.shop_supplier_id),B(null==(a=l.data)?void 0:a.currency),j(l.data),x(L.value.device_id),setTimeout((()=>{K.value=!0}),150)):uni.showToast({title:A("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102!=l.code&&uni.showToast({title:A("绑定失败"),icon:"none"})}else uni.showToast({title:A("請輸入連接埠"),icon:"none"});else uni.showToast({title:A("請輸入伺服器位址"),icon:"none"})},P=a=>{K.value=!1,a&&(Z.value=a,F.value=a.table_no)},W=()=>{Q(),F.value=y().table_no,Z.value=y()},$=async()=>{var a;const e={...L.value};if(e.ip)if(e.port)try{const l=await _(m(`${null==e?void 0:e.ip}:${e.port}`),!0);if(!Z.value)return void uni.showToast({title:A("請查找桌位"),icon:"none"});1==parseInt(l.data.cashier.order_method.is_table_order)?(h(e),b(l.data.app_id),w(l.data.shop_supplier_id),B(null==(a=l.data)?void 0:a.currency),x(L.value.device_id),setTimeout((()=>{aa()}),150)):uni.showToast({title:A("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102!=l.code&&uni.showToast({title:A("绑定失败"),icon:"none"})}else uni.showToast({title:A("請輸入連接埠"),icon:"none"});else uni.showToast({title:A("請輸入伺服器位址"),icon:"none"})},aa=async()=>{try{const a=await U({table_id:Z.value.table_id,key:L.value.device_id,device_remark:L.value.remark});C(Z.value),k({key:"machine_remark",data:L.value.remark}),k({key:"machine_id",data:L.value.device_id}),I({url:"/pages/index/index"}),uni.showToast({title:a.msg,icon:"none"})}catch(a){0===a.code?G("bind",a.msg):uni.showToast({title:a.msg,icon:"none"})}};return Q(),(a,e)=>{const l=S,t=T,f=s(i("ti-input"),N),g=s(i("ti-button"),q),_=s(i("ti-layout-table-list"),z);return o(),n(t,null,{default:u((()=>[c(t,{class:"ti-item-input"},{default:u((()=>[c(t,{class:"ti-label-box"},{default:u((()=>[c(t,{class:"ti-label-left"},{default:u((()=>[c(l,{class:"ti-label-server"},{default:u((()=>[r(d(p(A)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",clearable:!1,disabled:!0,value:L.value.device_id},null,8,["value"])])),_:1})])),_:1}),c(t,{class:"ti-item-input"},{default:u((()=>[c(t,{class:"ti-label-box"},{default:u((()=>[c(t,{class:"ti-label-left"},{default:u((()=>[c(l,{class:"ti-label-server"},{default:u((()=>[r(d(p(A)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",onInput:D,placeholder:p(A)("機器備註"),clearable:!1,maxlength:100,onFocus:X,onBlur:Y},null,8,["placeholder"])])),_:1})])),_:1}),c(t,{class:"ti-item-input"},{default:u((()=>[c(t,{class:"ti-label-box"},{default:u((()=>[c(t,{class:"ti-label-left"},{default:u((()=>[c(l,{class:"ti-label-server"},{default:u((()=>[r(d(p(A)("服務器連接地址")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",onInput:M,placeholder:p(A)("伺服器位址"),value:L.value.ip,clearable:!1,onFocus:X,onBlur:Y},null,8,["placeholder","value"]),c(t,{class:"ti-colon"},{default:u((()=>[r(":")])),_:1}),c(t,{class:"ti-input-port"},{default:u((()=>[c(f,{type:"number",onInput:O,placeholder:p(A)("端口"),value:L.value.port,clearable:!1,onFocus:X,onBlur:Y},null,8,["placeholder","value"])])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-bottom"},{default:u((()=>[c(g,{title:p(A)("重置"),onClick:W},null,8,["title"]),c(g,{title:p(A)("確定"),type:"primary",onClick:$},null,8,["title"])])),_:1}),c(t,{class:"ti-select-table-box",onClick:V},{default:u((()=>[c(l,{class:"ti-label-table"},{default:u((()=>[r(d(F.value?p(A)("已選 : ")+p(v)(F.value,21):p(A)("查找桌位")),1)])),_:1})])),_:1}),c(_,{show:K.value,"onUpdate:show":e[0]||(e[0]=a=>K.value=a),onConfirm:P},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-48ac0966"]]),W=""+new URL("binding-page-bg-image-db048039.png",import.meta.url).href,$=""+new URL("logo-fcaec045.png",import.meta.url).href,aa=""+new URL("monitor-mobbile-8fa7acb0.svg",import.meta.url).href,ea=V({__name:"set-language",props:{firstBind:{type:Boolean,default:!1}},setup(a){const l=a,t=e(R[E()]),p=e(),A=a=>{p.value.isShow()?p.value.close():p.value.open()},v=()=>{t.value=R[E()]};return(a,e)=>{const f=s(i("ti-layout-language-item"),F),g=T,_=L,m=S;return o(),n(g,{class:"ti-language",onClick:[A,e[0]||(e[0]=j((()=>{}),["stop"]))]},{default:u((()=>[c(g,{class:"ti-language-box"},{default:u((()=>[c(f,{ref_key:"refShowLanguage",ref:p,firstBind:l.firstBind,onLanguageText:v},null,8,["firstBind"])])),_:1}),c(_,{class:"ti-language-global",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB5VXdcdswDAYUKpXVPrAbeASNoExQZ4ImE7QbxB6hE9gb1BvYnSDaoN6gfOg5PsshA0CyJEbUnZK7vCTfnX9EfvgAkAAE8CGgP8c3ehL/1Wns6s+9nnz6OcY2GhRNL2ckWolY9x0Qpp3tjBa/CY84HMCLHOhU3QG43+BcoTVoQMx7JIRc9ogDDpYU0N0oB5U4zuUhORVwUBkMgfeYI3DzkBP0xBNKNYJlxYeteSiv+KjoODJwaMBZU1lFlJXTUOLalGWhJ2rTZmmvzf5xHQxIzjNRlDol/0Kwjdie7y2UQUWkc+XUH0/GlFBQxSwpm/zZJXOGO1rbmn15q9OLGVjKkI7LGDBdWtSJ/gd9NnCM/0GEG4jVrBbqi1eh8VpeP2RiQ7as0a0q1Rq4GyE2EaLpCA1h2nCxcZxTULy+8jLwxGXHGhgL1+NOGxl4Y7QO+NK6sNH4SsIetwg5WFBXblsjp4OOfew8rvBJA+HX+bG5ZHMoV/Szkh44/KeqqI0Q/pATGCpT+U8NBxcknHyhMjXDd9c2Gryi0SDYaMpjoaWoIq5nclaPijjOIHbUSG7ncSOc0ldh9se1jIojjYpIMr31JHuRpGpOy9XQuiy/SldzE4Vg3ZUMO27OSm5BDudeHM9tzP5EBLeQB29aBuBN27540EHjxFKqiJnMlm51ncHTlveQGxSvQ+KjIZefqvvmlcmvz2T4Lfa+8ARyhNbiDRkX2gAAAABJRU5ErkJggg=="}),c(m,{class:"ti-language-text"},{default:u((()=>[r(d(t.value),1)])),_:1}),c(_,{class:"ti-language-arrow-down",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7Y9BCoUwDESH/w3EuskRPIpH8AZ6M72ZR9ClO60KQRGtYF0ofbRQmslMAgQC70TEHkb6SM8kEkPDfBMqcIFJpz02aF377dSMTt8DalfIXLc6/ehZ4JyIqdSJTjbZTL7oSlzFFXLL3BXixfwwxFDlzfwkxJ+5hph/LjE1i3nUCkcZnkAsCAS+xQhmhzo19D7FAAAAAABJRU5ErkJggg=="})])),_:1})}}},[["__scopeId","data-v-990bb9f5"]]),la=V({__name:"first-binding",setup(a){const l=e(!1),t=e(""),n=e(!1);Q().deviceModel;const v=e(""),f=a=>{l.value=!0,t.value=a},g=()=>{v.value="-8%"},_=()=>{v.value=""};return G("authorization",(a=>{n.value=!a})),(a,e)=>{const m=L,h=T,b=s(i("ti-layout-setserver"),P),w=s(i("ti-modal"),K);return o(),X(Y,null,[c(h,{class:"page",onClick:e[0]||(e[0]=a=>p(M)())},{default:u((()=>[c(h,{class:"ti-page-bg"},{default:u((()=>[c(m,{class:"ti-bg-image",src:W})])),_:1}),c(h,{class:"ti-flex"},{default:u((()=>[c(h,{class:"ti-flex-round"},{default:u((()=>[c(h,{class:"ti-round-box",style:D({top:v.value})},{default:u((()=>[c(h,{class:"ti-round-content"},{default:u((()=>[c(h,{class:"ti-item-logo"},{default:u((()=>[c(m,{class:"ti-logo",src:$})])),_:1}),c(b,{class:"m-top-32px",onBind:f,onFocus:g,onBlur:_})])),_:1})])),_:1},8,["style"])])),_:1})])),_:1}),c(h,{class:"ti-language-box"},{default:u((()=>[c(ea,{firstBind:!0})])),_:1})])),_:1}),c(w,{class:"ti-action-tips",show:l.value,"onUpdate:show":e[1]||(e[1]=a=>l.value=a),isCancelShow:!1,isConfirmShow:!0,content:t.value,onConfirm:e[2]||(e[2]=a=>l.value=!1)},{title:u((()=>[c(h,{class:"warning-header"},{default:u((()=>[c(h,{class:"warning-image-round"},{default:u((()=>[c(m,{class:"warning-image",src:aa,mode:""})])),_:1}),c(h,{class:"warning-text",style:{"font-weight":"bold"}},{default:u((()=>[r(d(p(A)("綁定失敗")),1)])),_:1})])),_:1})])),default:u((()=>[O("template",null,[c(h)])])),_:1},8,["show","content"]),c(w,{class:"ti-action-tips",show:n.value,title:p(A)("店鋪到期"),isCancelShow:!1,onConfirm:e[3]||(e[3]=a=>n.value=!1),isConfirmShow:!0,content:p(A)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:u((()=>[c(h,{class:"warning-header"},{default:u((()=>[c(h,{class:"warning-image-round"},{default:u((()=>[c(m,{class:"warning-image",src:Z,mode:""})])),_:1}),c(h,{class:"warning-text"},{default:u((()=>[r(d(p(A)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])],64)}}},[["__scopeId","data-v-6e067058"]]);export{la as default};
