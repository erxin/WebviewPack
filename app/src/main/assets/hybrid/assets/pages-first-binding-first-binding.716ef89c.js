import{a,r as e,f as l,g as t,S as s,T as i,j as o,k as n,w as u,q as c,x as r,y as d,h as p,z as A,A as v,m as f,n as g,C as _,D as m,E as b,G as h,H as w,I as B,_ as x,J as y,M as U,N as k,O as C,d as I,Y as S,p as T,a0 as E,a1 as R,a2 as j,U as Q,a3 as G,$ as L,t as Y,F as O,a4 as D,B as M,a5 as X}from"./index-f5d57385.js";import{i as H,g as J,a as N,b as z,d as F,_ as Z,c as K}from"./platform.268fa896.js";import{_ as V,a as q}from"./ti-button.5bc0d071.js";const P=V({__name:"ti-layout-setserver",emits:["bind","focus","blur"],setup(E,{emit:R}){const{setUserInfo:j}=a(),Q=e({ip:"",port:"",device_id:"null",remark:""}),G=()=>{const a=f();Q.value.ip=(null==a?void 0:a.ip)||g()||"127.0.0.1",Q.value.port=(null==a?void 0:a.port)||"8080"},L=R;l((()=>{H()?Q.value.device_id=J():t({success:a=>{Q.value.device_id=a.deviceId}})}));const Y=()=>{L("focus")},O=()=>{L("blur")},D=a=>{Q.value.remark=a},M=a=>{Q.value.ip=a},X=a=>{Q.value.port=a},F=e("");e([]);const Z=e(),K=e(!1),V=async()=>{var a;const e={...Q.value};if(e.ip)if(e.port)try{const l=await _(m(`${null==e?void 0:e.ip}:${e.port}`),!0);1==parseInt(l.data.cashier.order_method.is_table_order)?(b(e),h(l.data.app_id),w(l.data.shop_supplier_id),B(null==(a=l.data)?void 0:a.currency),j(l.data),x(Q.value.device_id),setTimeout((()=>{K.value=!0}),150)):uni.showToast({title:A("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102!=l.code&&uni.showToast({title:A("绑定失败"),icon:"none"})}else uni.showToast({title:A("請輸入連接埠"),icon:"none"});else uni.showToast({title:A("請輸入伺服器位址"),icon:"none"})},P=a=>{K.value=!1,a&&(Z.value=a,F.value=a.table_no)},W=()=>{G(),F.value=y().table_no,Z.value=y()},$=async()=>{var a;const e={...Q.value};if(e.ip)if(e.port)try{const l=await _(m(`${null==e?void 0:e.ip}:${e.port}`),!0);1==parseInt(l.data.cashier.order_method.is_table_order)?(b(e),h(l.data.app_id),w(l.data.shop_supplier_id),B(null==(a=l.data)?void 0:a.currency),x(Q.value.device_id),aa()):uni.showToast({title:A("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102!=l.code&&uni.showToast({title:A("绑定失败"),icon:"none"})}else uni.showToast({title:A("請輸入連接埠"),icon:"none"});else uni.showToast({title:A("請輸入伺服器位址"),icon:"none"})},aa=async()=>{var a;if(!(null==(a=Z.value)?void 0:a.table_id))return K.value=!0,void setTimeout((()=>{uni.showToast({title:A("請选择桌位"),icon:"none"})}),300);try{const a=await U({table_id:Z.value.table_id,key:Q.value.device_id,device_remark:Q.value.remark});k(Z.value),C({key:"machine_remark",data:Q.value.remark}),C({key:"machine_id",data:Q.value.device_id}),I({url:"/pages/index/index"}),uni.showToast({title:a.msg,icon:"none"})}catch(e){0===e.code?L("bind",e.msg):uni.showToast({title:e.msg,icon:"none"})}};return G(),(a,e)=>{const l=S,t=T,f=s(i("ti-input"),N),g=s(i("ti-button"),q),_=s(i("ti-layout-table-list"),z);return o(),n(t,null,{default:u((()=>[c(t,{class:"ti-item-input"},{default:u((()=>[c(t,{class:"ti-label-box"},{default:u((()=>[c(t,{class:"ti-label-left"},{default:u((()=>[c(l,{class:"ti-label-server"},{default:u((()=>[r(d(p(A)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",clearable:!1,disabled:!0,value:Q.value.device_id},null,8,["value"])])),_:1})])),_:1}),c(t,{class:"ti-item-input"},{default:u((()=>[c(t,{class:"ti-label-box"},{default:u((()=>[c(t,{class:"ti-label-left"},{default:u((()=>[c(l,{class:"ti-label-server"},{default:u((()=>[r(d(p(A)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",onInput:D,placeholder:p(A)("機器備註"),clearable:!1,maxlength:100,onFocus:Y,onBlur:O},null,8,["placeholder"])])),_:1})])),_:1}),c(t,{class:"ti-item-input"},{default:u((()=>[c(t,{class:"ti-label-box"},{default:u((()=>[c(t,{class:"ti-label-left"},{default:u((()=>[c(l,{class:"ti-label-server"},{default:u((()=>[r(d(p(A)("服務器連接地址")),1)])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",onInput:M,placeholder:p(A)("伺服器位址"),value:Q.value.ip,clearable:!1,onFocus:Y,onBlur:O},null,8,["placeholder","value"]),c(t,{class:"ti-colon"},{default:u((()=>[r(":")])),_:1}),c(t,{class:"ti-input-port"},{default:u((()=>[c(f,{type:"number",onInput:X,placeholder:p(A)("端口"),value:Q.value.port,clearable:!1,onFocus:Y,onBlur:O},null,8,["placeholder","value"])])),_:1})])),_:1})])),_:1}),c(t,{class:"ti-bottom"},{default:u((()=>[c(g,{title:p(A)("重置"),onClick:W},null,8,["title"]),c(g,{title:p(A)("確定"),type:"primary",onClick:$},null,8,["title"])])),_:1}),c(t,{class:"ti-select-table-box",onClick:V},{default:u((()=>[c(l,{class:"ti-label-table"},{default:u((()=>[r(d(F.value?p(A)("已選 : ")+p(v)(F.value,21):p(A)("查找桌位")),1)])),_:1})])),_:1}),c(_,{show:K.value,"onUpdate:show":e[0]||(e[0]=a=>K.value=a),onConfirm:P},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-6cc9bea7"]]),W=""+new URL("binding-page-bg-image-db048039.png",import.meta.url).href,$=""+new URL("logo-fcaec045.png",import.meta.url).href,aa=""+new URL("monitor-mobbile-8fa7acb0.svg",import.meta.url).href,ea=V({__name:"set-language",props:{firstBind:{type:Boolean,default:!1}},setup(a){const l=a,t=e(E[R()]),p=e(),A=a=>{p.value.isShow()?p.value.close():p.value.open()},v=()=>{t.value=E[R()]};return(a,e)=>{const f=s(i("ti-layout-language-item"),F),g=T,_=Q,m=S;return o(),n(g,{class:"ti-language",onClick:[A,e[0]||(e[0]=j((()=>{}),["stop"]))]},{default:u((()=>[c(g,{class:"ti-language-box"},{default:u((()=>[c(f,{ref_key:"refShowLanguage",ref:p,firstBind:l.firstBind,onLanguageText:v},null,8,["firstBind"])])),_:1}),c(_,{class:"ti-language-global",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB5VXdcdswDAYUKpXVPrAbeASNoExQZ4ImE7QbxB6hE9gb1BvYnSDaoN6gfOg5PsshA0CyJEbUnZK7vCTfnX9EfvgAkAAE8CGgP8c3ehL/1Wns6s+9nnz6OcY2GhRNL2ckWolY9x0Qpp3tjBa/CY84HMCLHOhU3QG43+BcoTVoQMx7JIRc9ogDDpYU0N0oB5U4zuUhORVwUBkMgfeYI3DzkBP0xBNKNYJlxYeteSiv+KjoODJwaMBZU1lFlJXTUOLalGWhJ2rTZmmvzf5xHQxIzjNRlDol/0Kwjdie7y2UQUWkc+XUH0/GlFBQxSwpm/zZJXOGO1rbmn15q9OLGVjKkI7LGDBdWtSJ/gd9NnCM/0GEG4jVrBbqi1eh8VpeP2RiQ7as0a0q1Rq4GyE2EaLpCA1h2nCxcZxTULy+8jLwxGXHGhgL1+NOGxl4Y7QO+NK6sNH4SsIetwg5WFBXblsjp4OOfew8rvBJA+HX+bG5ZHMoV/Szkh44/KeqqI0Q/pATGCpT+U8NBxcknHyhMjXDd9c2Gryi0SDYaMpjoaWoIq5nclaPijjOIHbUSG7ncSOc0ldh9se1jIojjYpIMr31JHuRpGpOy9XQuiy/SldzE4Vg3ZUMO27OSm5BDudeHM9tzP5EBLeQB29aBuBN27540EHjxFKqiJnMlm51ncHTlveQGxSvQ+KjIZefqvvmlcmvz2T4Lfa+8ARyhNbiDRkX2gAAAABJRU5ErkJggg=="}),c(m,{class:"ti-language-text"},{default:u((()=>[r(d(t.value),1)])),_:1}),c(_,{class:"ti-language-arrow-down",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7Y9BCoUwDESH/w3EuskRPIpH8AZ6M72ZR9ClO60KQRGtYF0ofbRQmslMAgQC70TEHkb6SM8kEkPDfBMqcIFJpz02aF377dSMTt8DalfIXLc6/ehZ4JyIqdSJTjbZTL7oSlzFFXLL3BXixfwwxFDlzfwkxJ+5hph/LjE1i3nUCkcZnkAsCAS+xQhmhzo19D7FAAAAAABJRU5ErkJggg=="})])),_:1})}}},[["__scopeId","data-v-990bb9f5"]]),la=V({__name:"first-binding",setup(a){const l=e(!1),t=e(""),n=e(!1);G().deviceModel;const v=e(""),f=a=>{l.value=!0,t.value=a},g=()=>{},_=()=>{v.value=""};return L("authorization",(a=>{n.value=!a})),(a,e)=>{const m=Q,b=T,h=s(i("ti-layout-setserver"),P),w=s(i("ti-modal"),K);return o(),Y(O,null,[c(b,{class:"page",onClick:e[0]||(e[0]=a=>p(M)())},{default:u((()=>[c(b,{class:"ti-page-bg"},{default:u((()=>[c(m,{class:"ti-bg-image",src:W})])),_:1}),c(b,{class:"ti-flex"},{default:u((()=>[c(b,{class:"ti-flex-round"},{default:u((()=>[c(b,{class:"ti-round-box",style:D({top:v.value})},{default:u((()=>[c(b,{class:"ti-round-content"},{default:u((()=>[c(b,{class:"ti-item-logo"},{default:u((()=>[c(m,{class:"ti-logo",src:$})])),_:1}),c(h,{class:"m-top-32px",onBind:f,onFocus:g,onBlur:_})])),_:1})])),_:1},8,["style"])])),_:1})])),_:1}),c(b,{class:"ti-language-box"},{default:u((()=>[c(ea,{firstBind:!0})])),_:1})])),_:1}),c(w,{class:"ti-action-tips",show:l.value,"onUpdate:show":e[1]||(e[1]=a=>l.value=a),isCancelShow:!1,isConfirmShow:!0,content:t.value,onConfirm:e[2]||(e[2]=a=>l.value=!1)},{title:u((()=>[c(b,{class:"warning-header"},{default:u((()=>[c(b,{class:"warning-image-round"},{default:u((()=>[c(m,{class:"warning-image",src:aa,mode:""})])),_:1}),c(b,{class:"warning-text",style:{"font-weight":"bold"}},{default:u((()=>[r(d(p(A)("綁定失敗")),1)])),_:1})])),_:1})])),default:u((()=>[X("template",null,[c(b)])])),_:1},8,["show","content"]),c(w,{class:"ti-action-tips",show:n.value,title:p(A)("店鋪到期"),isCancelShow:!1,onConfirm:e[3]||(e[3]=a=>n.value=!1),isConfirmShow:!0,content:p(A)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:u((()=>[c(b,{class:"warning-header"},{default:u((()=>[c(b,{class:"warning-image-round"},{default:u((()=>[c(m,{class:"warning-image",src:Z,mode:""})])),_:1}),c(b,{class:"warning-text"},{default:u((()=>[r(d(p(A)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])],64)}}},[["__scopeId","data-v-6a3edd92"]]);export{la as default};
