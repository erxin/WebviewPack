import{Z as a,c as e,a as l,r as t,g as s,h as n,R as o,S as i,k as u,l as c,w as d,t as r,y as A,z as f,j as v,A as g,B as p,n as b,p as m,K as h,D as w,E as B,G as x,H as U,I as E,J as I,_ as D,N as M,O as H,P as j,e as G,X as y,q as k,a0 as X,a1 as Y,a2 as C,T as J,a3 as S,$ as R,v as P,F,C as L,a4 as Z,a5 as Q}from"./index-91a75986.js";import{i as W,g as T,a as z,b as V,d as K,_ as N,V as O,c as q}from"./platform.9e6cfb3a.js";import{_,a as $}from"./ti-button.e78c5802.js";const aa=_({__name:"ti-layout-setserver",emits:["bind","focus","blur"],setup(X,{emit:Y}){const C=a(),J=e(),S=l(),R=t({ip:"",port:"",device_id:"null",remark:""}),P=()=>{const a=b();R.value.ip=(null==a?void 0:a.ip)||m()||"127.0.0.1",R.value.port=(null==a?void 0:a.port)||"8080"},F=Y;s((()=>{W()?R.value.device_id=T():n({success:a=>{R.value.device_id=a.deviceId}})}));const L=()=>{F("focus")},Z=()=>{F("blur")},Q=a=>{R.value.remark=a},K=a=>{R.value.ip=a},N=a=>{R.value.port=a},O=t(!1),q=t(""),_=t(),aa=t(!1),ea=a=>{aa.value=!1,a&&(_.value=a,q.value=a.table_no)},la=()=>{P(),q.value=h().table_no,_.value=h()},ta=async(a=!1)=>{var e;const l={...R.value};if(l.ip)if(l.port)try{a||(O.value=!0);const t=await w(B(`${null==l?void 0:l.ip}:${l.port}`),!0);1==parseInt(t.data.cashier.order_method.is_table_order)?(x(l),U(t.data.app_id),E(t.data.shop_supplier_id),I(null==(e=t.data)?void 0:e.currency),D(R.value.device_id),a?aa.value=!0:sa(t.data)):uni.showToast({title:g("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(t){-102!=t.code&&uni.showToast({title:g("綁定失敗"),icon:"none"})}finally{O.value=!1}else uni.showToast({title:g("請輸入連接埠"),icon:"none"});else uni.showToast({title:g("請輸入伺服器位址"),icon:"none"})},sa=async a=>{var e;if(!(null==(e=_.value)?void 0:e.table_id))return aa.value=!0,void setTimeout((()=>{uni.showToast({title:g("請選擇桌位"),icon:"none"})}),300);try{const e=await M({table_id:_.value.table_id,key:R.value.device_id,device_remark:R.value.remark});null==S||S.setUserInfo(a),H(_.value),await(null==C?void 0:C.getCategory(!0)),await(null==J?void 0:J.goodsBaseRefresh({},!0,!0)),j({key:"machine_remark",data:R.value.remark}),j({key:"machine_id",data:R.value.device_id}),G({url:"/pages/index/index"}),uni.showToast({title:e.msg,icon:"none"})}catch(l){0===l.code?F("bind",l.msg):uni.showToast({title:l.msg,icon:"none"})}};return P(),(a,e)=>{const l=y,t=k,s=o(i("ti-input"),z),n=o(i("ti-button"),$),b=o(i("ti-layout-table-list"),V);return u(),c(t,null,{default:d((()=>[r(t,{class:"ti-item-input"},{default:d((()=>[r(t,{class:"ti-label-box"},{default:d((()=>[r(t,{class:"ti-label-left"},{default:d((()=>[r(l,{class:"ti-label-server"},{default:d((()=>[A(f(v(g)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-input-box"},{default:d((()=>[r(s,{type:"text",clearable:!1,disabled:!0,value:R.value.device_id},null,8,["value"])])),_:1})])),_:1}),r(t,{class:"ti-item-input"},{default:d((()=>[r(t,{class:"ti-label-box"},{default:d((()=>[r(t,{class:"ti-label-left"},{default:d((()=>[r(l,{class:"ti-label-server"},{default:d((()=>[A(f(v(g)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-input-box"},{default:d((()=>[r(s,{type:"text",onInput:Q,placeholder:v(g)("機器備註"),clearable:!1,maxlength:100,onFocus:L,onBlur:Z},null,8,["placeholder"])])),_:1})])),_:1}),r(t,{class:"ti-item-input"},{default:d((()=>[r(t,{class:"ti-label-box"},{default:d((()=>[r(t,{class:"ti-label-left"},{default:d((()=>[r(l,{class:"ti-label-server"},{default:d((()=>[A(f(v(g)("服務器連接地址")),1)])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-input-box"},{default:d((()=>[r(s,{type:"text",onInput:K,placeholder:v(g)("伺服器位址"),value:R.value.ip,clearable:!1,onFocus:L,onBlur:Z},null,8,["placeholder","value"]),r(t,{class:"ti-colon"},{default:d((()=>[A(":")])),_:1}),r(t,{class:"ti-input-port"},{default:d((()=>[r(s,{type:"number",onInput:N,placeholder:v(g)("端口"),value:R.value.port,clearable:!1,onFocus:L,onBlur:Z},null,8,["placeholder","value"])])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-bottom"},{default:d((()=>[r(n,{title:v(g)("重置"),onClick:la},null,8,["title"]),r(n,{title:v(g)("確定"),loading:O.value,type:"primary",onClick:e[0]||(e[0]=a=>ta())},null,8,["title","loading"])])),_:1}),r(t,{class:"ti-select-table-box",onClick:e[1]||(e[1]=a=>ta(!0))},{default:d((()=>[r(l,{class:"ti-label-table"},{default:d((()=>[A(f(q.value?v(g)("已選 : ")+v(p)(q.value,21):v(g)("查找桌位")),1)])),_:1})])),_:1}),r(b,{show:aa.value,"onUpdate:show":e[2]||(e[2]=a=>aa.value=a),onConfirm:ea},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-91699c1e"]]),ea=""+new URL("binding-page-bg-image-db048039.png",import.meta.url).href,la=""+new URL("monitor-mobbile-8fa7acb0.svg",import.meta.url).href,ta=_({__name:"set-language",props:{firstBind:{type:Boolean,default:!1}},setup(a){const e=a,l=t(X[Y()]),s=t(),n=a=>{s.value.isShow()?s.value.close():s.value.open()},v=()=>{l.value=X[Y()]};return(a,t)=>{const g=o(i("ti-layout-language-item"),K),p=k,b=J,m=y;return u(),c(p,{class:"ti-language",onClick:[n,t[0]||(t[0]=C((()=>{}),["stop"]))]},{default:d((()=>[r(p,{class:"ti-language-box"},{default:d((()=>[r(g,{ref_key:"refShowLanguage",ref:s,firstBind:e.firstBind,onLanguageText:v},null,8,["firstBind"])])),_:1}),r(b,{class:"ti-language-global",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB5VXdcdswDAYUKpXVPrAbeASNoExQZ4ImE7QbxB6hE9gb1BvYnSDaoN6gfOg5PsshA0CyJEbUnZK7vCTfnX9EfvgAkAAE8CGgP8c3ehL/1Wns6s+9nnz6OcY2GhRNL2ckWolY9x0Qpp3tjBa/CY84HMCLHOhU3QG43+BcoTVoQMx7JIRc9ogDDpYU0N0oB5U4zuUhORVwUBkMgfeYI3DzkBP0xBNKNYJlxYeteSiv+KjoODJwaMBZU1lFlJXTUOLalGWhJ2rTZmmvzf5xHQxIzjNRlDol/0Kwjdie7y2UQUWkc+XUH0/GlFBQxSwpm/zZJXOGO1rbmn15q9OLGVjKkI7LGDBdWtSJ/gd9NnCM/0GEG4jVrBbqi1eh8VpeP2RiQ7as0a0q1Rq4GyE2EaLpCA1h2nCxcZxTULy+8jLwxGXHGhgL1+NOGxl4Y7QO+NK6sNH4SsIetwg5WFBXblsjp4OOfew8rvBJA+HX+bG5ZHMoV/Szkh44/KeqqI0Q/pATGCpT+U8NBxcknHyhMjXDd9c2Gryi0SDYaMpjoaWoIq5nclaPijjOIHbUSG7ncSOc0ldh9se1jIojjYpIMr31JHuRpGpOy9XQuiy/SldzE4Vg3ZUMO27OSm5BDudeHM9tzP5EBLeQB29aBuBN27540EHjxFKqiJnMlm51ncHTlveQGxSvQ+KjIZefqvvmlcmvz2T4Lfa+8ARyhNbiDRkX2gAAAABJRU5ErkJggg=="}),r(m,{class:"ti-language-text"},{default:d((()=>[A(f(l.value),1)])),_:1}),r(b,{class:"ti-language-arrow-down",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7Y9BCoUwDESH/w3EuskRPIpH8AZ6M72ZR9ClO60KQRGtYF0ofbRQmslMAgQC70TEHkb6SM8kEkPDfBMqcIFJpz02aF377dSMTt8DalfIXLc6/ehZ4JyIqdSJTjbZTL7oSlzFFXLL3BXixfwwxFDlzfwkxJ+5hph/LjE1i3nUCkcZnkAsCAS+xQhmhzo19D7FAAAAAABJRU5ErkJggg=="})])),_:1})}}},[["__scopeId","data-v-e2382d00"]]),sa=_({__name:"first-binding",setup(a){Q((a=>({"6c8954ba":b.value})));const l=t(!1),n=t(""),c=t(!1),p=S().deviceModel,b=t(""),m=t(0);let h=Date.now();const w=a=>{l.value=!0,n.value=a},B=()=>{"PC"!=p&&(b.value="-25%")},x=()=>{b.value=""},U=()=>{const a=Date.now();a-h>1e3?m.value=1:m.value++,h=a,m.value>=6&&(new O,m.value=0)};return R("authorization",(a=>{c.value=!a})),s((()=>{var a;null==(a=e())||a.setIsContinueGetData(!1)})),(a,e)=>{const t=J,s=k,p=o(i("ti-layout-setserver"),aa),b=o(i("ti-modal"),q);return u(),P(F,null,[r(s,{class:"page",onClick:e[0]||(e[0]=a=>v(L)())},{default:d((()=>[r(s,{class:"ti-page-bg"},{default:d((()=>[r(t,{class:"ti-bg-image",src:ea})])),_:1}),r(s,{class:"ti-flex"},{default:d((()=>[r(s,{class:"ti-flex-round"},{default:d((()=>[r(s,{class:"ti-round-box"},{default:d((()=>[r(s,{class:"ti-round-content"},{default:d((()=>[r(s,{class:"ti-item-logo"},{default:d((()=>[r(t,{class:"ti-logo",src:"data:image/png;base64,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",onClick:U})])),_:1}),r(p,{class:"m-top-32px",onBind:w,onFocus:B,onBlur:x})])),_:1})])),_:1})])),_:1})])),_:1}),r(s,{class:"ti-language-box"},{default:d((()=>[r(ta,{firstBind:!0})])),_:1})])),_:1}),r(b,{class:"ti-action-tips",show:l.value,"onUpdate:show":e[1]||(e[1]=a=>l.value=a),isCancelShow:!1,isConfirmShow:!0,content:n.value,onConfirm:e[2]||(e[2]=a=>l.value=!1)},{title:d((()=>[r(s,{class:"warning-header"},{default:d((()=>[r(s,{class:"warning-image-round"},{default:d((()=>[r(t,{class:"warning-image",src:la,mode:""})])),_:1}),r(s,{class:"warning-text",style:{"font-weight":"bold"}},{default:d((()=>[A(f(v(g)("綁定失敗")),1)])),_:1})])),_:1})])),default:d((()=>[Z("template",null,[r(s)])])),_:1},8,["show","content"]),r(b,{class:"ti-action-tips",show:c.value,title:v(g)("店鋪到期"),isCancelShow:!1,onConfirm:e[3]||(e[3]=a=>c.value=!1),isConfirmShow:!0,content:v(g)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:d((()=>[r(s,{class:"warning-header"},{default:d((()=>[r(s,{class:"warning-image-round"},{default:d((()=>[r(t,{class:"warning-image",src:N,mode:""})])),_:1}),r(s,{class:"warning-text"},{default:d((()=>[A(f(v(g)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])],64)}}},[["__scopeId","data-v-5e913367"]]);export{sa as default};
