import{u as a,r as e,e as t,g as l,R as s,S as i,h as n,j as o,w as u,p as c,v as d,x as r,f as p,y as A,z as v,l as f,m as g,B as _,C as m,D as h,E as b,G as w,H as x,Z as B,I as U,L as y,M as C,N as k,c as I,X as S,n as T,_ as R,a0 as E,a1 as j,T as L,a2 as Q,$ as G,q as X,F as Y,A as D,a3 as M}from"./index-be611963.js";import{i as O,g as H,a as J,b as N,d as z,_ as Z,c as K}from"./platform.b716349c.js";import{_ as V,a as q}from"./ti-button.63f62e8d.js";const F=V({__name:"ti-layout-setserver",emits:["bind"],setup(R,{emit:E}){const{setUserInfo:j}=a(),L=e({ip:"",port:"",device_id:"null",remark:""}),Q=()=>{const a=f();L.value.ip=(null==a?void 0:a.ip)||g()||"127.0.0.1",L.value.port=(null==a?void 0:a.port)||"8080"},G=E;t((()=>{O()?L.value.device_id=H():l({success:a=>{L.value.device_id=a.deviceId}})}));const X=a=>{L.value.remark=a},Y=a=>{L.value.ip=a},D=a=>{L.value.port=a},M=e("");e([]);const z=e(),Z=e(!1),K=async()=>{var a;const e={...L.value};if(e.ip)if(e.port)try{const t=await _(m(`${null==e?void 0:e.ip}:${e.port}`),!0);1==parseInt(t.data.cashier.order_method.is_table_order)?(h(e),b(t.data.app_id),w(t.data.shop_supplier_id),x(null==(a=t.data)?void 0:a.currency),j(t.data),B(L.value.device_id),setTimeout((()=>{Z.value=!0}),150)):uni.showToast({title:A("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(t){-102!=t.code&&uni.showToast({title:A("绑定失败"),icon:"none"})}else uni.showToast({title:A("請輸入連接埠"),icon:"none"});else uni.showToast({title:A("請輸入伺服器位址"),icon:"none"})},V=a=>{Z.value=!1,a&&(z.value=a,M.value=a.table_no)},F=()=>{Q(),M.value=U().table_no,z.value=U()},P=async()=>{var a;const e={...L.value};if(e.ip)if(e.port)try{const t=await _(m(`${null==e?void 0:e.ip}:${e.port}`),!0);if(!z.value)return void uni.showToast({title:A("請查找桌位"),icon:"none"});1==parseInt(t.data.cashier.order_method.is_table_order)?(h(e),b(t.data.app_id),w(t.data.shop_supplier_id),x(null==(a=t.data)?void 0:a.currency),B(L.value.device_id),setTimeout((()=>{W()}),150)):uni.showToast({title:A("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(t){-102!=t.code&&uni.showToast({title:A("绑定失败"),icon:"none"})}else uni.showToast({title:A("請輸入連接埠"),icon:"none"});else uni.showToast({title:A("請輸入伺服器位址"),icon:"none"})},W=async()=>{try{const a=await y({table_id:z.value.table_id,key:L.value.device_id,device_remark:L.value.remark});C(z.value),k({key:"machine_remark",data:L.value.remark}),k({key:"machine_id",data:L.value.device_id}),I({url:"/pages/index/index"}),uni.showToast({title:a.msg,icon:"none"})}catch(a){0===a.code?G("bind",a.msg):uni.showToast({title:a.msg,icon:"none"})}};return Q(),(a,e)=>{const t=S,l=T,f=s(i("ti-input"),J),g=s(i("ti-button"),q),_=s(i("ti-layout-table-list"),N);return n(),o(l,null,{default:u((()=>[c(l,{class:"ti-item-input"},{default:u((()=>[c(l,{class:"ti-label-box"},{default:u((()=>[c(l,{class:"ti-label-left"},{default:u((()=>[c(t,{class:"ti-label-server"},{default:u((()=>[d(r(p(A)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),c(l,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",clearable:!1,disabled:!0,value:L.value.device_id},null,8,["value"])])),_:1})])),_:1}),c(l,{class:"ti-item-input"},{default:u((()=>[c(l,{class:"ti-label-box"},{default:u((()=>[c(l,{class:"ti-label-left"},{default:u((()=>[c(t,{class:"ti-label-server"},{default:u((()=>[d(r(p(A)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),c(l,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",onInput:X,placeholder:p(A)("機器備註"),clearable:!1,maxlength:100},null,8,["placeholder"])])),_:1})])),_:1}),c(l,{class:"ti-item-input"},{default:u((()=>[c(l,{class:"ti-label-box"},{default:u((()=>[c(l,{class:"ti-label-left"},{default:u((()=>[c(t,{class:"ti-label-server"},{default:u((()=>[d(r(p(A)("服務器連接地址")),1)])),_:1})])),_:1})])),_:1}),c(l,{class:"ti-input-box"},{default:u((()=>[c(f,{type:"text",onInput:Y,placeholder:p(A)("伺服器位址"),value:L.value.ip,clearable:!1},null,8,["placeholder","value"]),c(l,{class:"ti-colon"},{default:u((()=>[d(":")])),_:1}),c(l,{class:"ti-input-port"},{default:u((()=>[c(f,{type:"number",onInput:D,placeholder:p(A)("端口"),value:L.value.port,clearable:!1},null,8,["placeholder","value"])])),_:1})])),_:1})])),_:1}),c(l,{class:"ti-bottom"},{default:u((()=>[c(g,{title:p(A)("重置"),onClick:F},null,8,["title"]),c(g,{title:p(A)("確定"),type:"primary",onClick:P},null,8,["title"])])),_:1}),c(l,{class:"ti-select-table-box",onClick:K},{default:u((()=>[c(t,{class:"ti-label-table"},{default:u((()=>[d(r(M.value?p(A)("已選 : ")+p(v)(M.value,21):p(A)("查找桌位")),1)])),_:1})])),_:1}),c(_,{show:Z.value,"onUpdate:show":e[0]||(e[0]=a=>Z.value=a),onConfirm:V},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-97a125cc"]]),P=""+new URL("binding-page-bg-image-db048039.png",import.meta.url).href,W=""+new URL("logo-fcaec045.png",import.meta.url).href,$=""+new URL("monitor-mobbile-8fa7acb0.svg",import.meta.url).href,aa=V({__name:"set-language",props:{firstBind:{type:Boolean,default:!1}},setup(a){const t=a,l=e(R[E()]),p=e(),A=a=>{p.value.isShow()?p.value.close():p.value.open()},v=()=>{l.value=R[E()]};return(a,e)=>{const f=s(i("ti-layout-language-item"),z),g=T,_=L,m=S;return n(),o(g,{class:"ti-language",onClick:[A,e[0]||(e[0]=j((()=>{}),["stop"]))]},{default:u((()=>[c(g,{class:"ti-language-box"},{default:u((()=>[c(f,{ref_key:"refShowLanguage",ref:p,firstBind:t.firstBind,onLanguageText:v},null,8,["firstBind"])])),_:1}),c(_,{class:"ti-language-global",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB5VXdcdswDAYUKpXVPrAbeASNoExQZ4ImE7QbxB6hE9gb1BvYnSDaoN6gfOg5PsshA0CyJEbUnZK7vCTfnX9EfvgAkAAE8CGgP8c3ehL/1Wns6s+9nnz6OcY2GhRNL2ckWolY9x0Qpp3tjBa/CY84HMCLHOhU3QG43+BcoTVoQMx7JIRc9ogDDpYU0N0oB5U4zuUhORVwUBkMgfeYI3DzkBP0xBNKNYJlxYeteSiv+KjoODJwaMBZU1lFlJXTUOLalGWhJ2rTZmmvzf5xHQxIzjNRlDol/0Kwjdie7y2UQUWkc+XUH0/GlFBQxSwpm/zZJXOGO1rbmn15q9OLGVjKkI7LGDBdWtSJ/gd9NnCM/0GEG4jVrBbqi1eh8VpeP2RiQ7as0a0q1Rq4GyE2EaLpCA1h2nCxcZxTULy+8jLwxGXHGhgL1+NOGxl4Y7QO+NK6sNH4SsIetwg5WFBXblsjp4OOfew8rvBJA+HX+bG5ZHMoV/Szkh44/KeqqI0Q/pATGCpT+U8NBxcknHyhMjXDd9c2Gryi0SDYaMpjoaWoIq5nclaPijjOIHbUSG7ncSOc0ldh9se1jIojjYpIMr31JHuRpGpOy9XQuiy/SldzE4Vg3ZUMO27OSm5BDudeHM9tzP5EBLeQB29aBuBN27540EHjxFKqiJnMlm51ncHTlveQGxSvQ+KjIZefqvvmlcmvz2T4Lfa+8ARyhNbiDRkX2gAAAABJRU5ErkJggg=="}),c(m,{class:"ti-language-text"},{default:u((()=>[d(r(l.value),1)])),_:1}),c(_,{class:"ti-language-arrow-down",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7Y9BCoUwDESH/w3EuskRPIpH8AZ6M72ZR9ClO60KQRGtYF0ofbRQmslMAgQC70TEHkb6SM8kEkPDfBMqcIFJpz02aF377dSMTt8DalfIXLc6/ehZ4JyIqdSJTjbZTL7oSlzFFXLL3BXixfwwxFDlzfwkxJ+5hph/LjE1i3nUCkcZnkAsCAS+xQhmhzo19D7FAAAAAABJRU5ErkJggg=="})])),_:1})}}},[["__scopeId","data-v-990bb9f5"]]),ea=V({__name:"first-binding",setup(a){const t=e(!1),l=e(""),o=e(!1);Q().deviceModel;const v=a=>{t.value=!0,l.value=a};return G("authorization",(a=>{o.value=!a})),(a,e)=>{const f=L,g=T,_=s(i("ti-layout-setserver"),F),m=s(i("ti-modal"),K);return n(),X(Y,null,[c(g,{class:"page",onClick:e[0]||(e[0]=a=>p(D)())},{default:u((()=>[c(g,{class:"ti-page-bg"},{default:u((()=>[c(f,{class:"ti-bg-image",src:P})])),_:1}),c(g,{class:"ti-flex"},{default:u((()=>[c(g,{class:"ti-flex-round"},{default:u((()=>[c(g,{class:"ti-round-box"},{default:u((()=>[c(g,{class:"ti-round-content"},{default:u((()=>[c(g,{class:"ti-item-logo"},{default:u((()=>[c(f,{class:"ti-logo",src:W})])),_:1}),c(_,{class:"m-top-32px",onBind:v})])),_:1})])),_:1})])),_:1})])),_:1}),c(g,{class:"ti-language-box"},{default:u((()=>[c(aa,{firstBind:!0})])),_:1})])),_:1}),c(m,{class:"ti-action-tips",show:t.value,"onUpdate:show":e[1]||(e[1]=a=>t.value=a),isCancelShow:!1,isConfirmShow:!0,content:l.value,onConfirm:e[2]||(e[2]=a=>t.value=!1)},{title:u((()=>[c(g,{class:"warning-header"},{default:u((()=>[c(g,{class:"warning-image-round"},{default:u((()=>[c(f,{class:"warning-image",src:$,mode:""})])),_:1}),c(g,{class:"warning-text",style:{"font-weight":"bold"}},{default:u((()=>[d(r(p(A)("綁定失敗")),1)])),_:1})])),_:1})])),default:u((()=>[M("template",null,[c(g)])])),_:1},8,["show","content"]),c(m,{class:"ti-action-tips",show:o.value,title:p(A)("店鋪到期"),isCancelShow:!1,onConfirm:e[3]||(e[3]=a=>o.value=!1),isConfirmShow:!0,content:p(A)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:u((()=>[c(g,{class:"warning-header"},{default:u((()=>[c(g,{class:"warning-image-round"},{default:u((()=>[c(f,{class:"warning-image",src:Z,mode:""})])),_:1}),c(g,{class:"warning-text"},{default:u((()=>[d(r(p(A)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])],64)}}},[["__scopeId","data-v-c87b24d2"]]);export{ea as default};
