import{a0 as a,c as e,a as l,r as t,g as s,h as n,R as o,S as i,k as u,l as c,w as d,v as r,z as A,A as f,j as g,B as v,C as p,n as b,p as m,L as h,E as w,G as x,H as B,I as U,J as E,K as I,a1 as j,O as M,P as D,Q as H,e as y,V as k,t as G,a2 as X,a3 as Y,X as J,T as S,a4 as C,$ as R,x as F,F as L,m as P,D as Q,a5 as Z,a6 as W}from"./index-5117b5e4.js";import{i as T,g as z,a as V,b as K,d as N,_ as O,V as q,c as _}from"./platform.2f9037e9.js";import{_ as $,a as aa}from"./ti-button.263bb588.js";const ea=$({__name:"ti-layout-setserver",emits:["bind","focus","blur"],setup(X,{emit:Y}){const J=a(),S=e(),C=l(),R=t({ip:"",port:"",device_id:"null",remark:""}),F=()=>{const a=b();R.value.ip=(null==a?void 0:a.ip)||m()||"127.0.0.1",R.value.port=(null==a?void 0:a.port)||"8080"},L=Y;s((()=>{T()?R.value.device_id=z():n({success:a=>{R.value.device_id=a.deviceId}})}));const P=()=>{L("focus")},Q=()=>{L("blur")},Z=a=>{R.value.remark=a},W=a=>{R.value.ip=a},N=a=>{R.value.port=a},O=t(!1),q=t(""),_=t(),$=t(!1),ea=a=>{$.value=!1,a&&(_.value=a,q.value=a.table_no)},la=()=>{F(),q.value=h().table_no,_.value=h()},ta=async(a=!1)=>{var e;const l={...R.value};if(l.ip)if(l.port)try{a||(O.value=!0);const t=await w(x(`${null==l?void 0:l.ip}:${l.port}`),!0);1==parseInt(t.data.cashier.order_method.is_table_order)?(B(l),U(t.data.app_id),E(t.data.shop_supplier_id),I(null==(e=t.data)?void 0:e.currency),j(R.value.device_id),a?$.value=!0:sa(t.data)):uni.showToast({title:v("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(t){-102!=t.code&&uni.showToast({title:v("綁定失敗"),icon:"none"})}finally{O.value=!1}else uni.showToast({title:v("請輸入連接埠"),icon:"none"});else uni.showToast({title:v("請輸入伺服器位址"),icon:"none"})},sa=async a=>{var e;if(!(null==(e=_.value)?void 0:e.table_id))return $.value=!0,void setTimeout((()=>{uni.showToast({title:v("請選擇桌位"),icon:"none"})}),300);try{const e=await M({table_id:_.value.table_id,key:R.value.device_id,device_remark:R.value.remark});null==C||C.setUserInfo(a),D(_.value),await(null==J?void 0:J.getCategory(!0)),await(null==S?void 0:S.goodsBaseRefresh({},!0)),H({key:"machine_remark",data:R.value.remark}),H({key:"machine_id",data:R.value.device_id}),y({url:"/pages/index/index"}),uni.showToast({title:e.msg,icon:"none"})}catch(l){0===l.code?L("bind",l.msg):uni.showToast({title:l.msg,icon:"none"})}};return F(),(a,e)=>{const l=k,t=G,s=o(i("ti-input"),V),n=o(i("ti-button"),aa),b=o(i("ti-layout-table-list"),K);return u(),c(t,null,{default:d((()=>[r(t,{class:"ti-item-input"},{default:d((()=>[r(t,{class:"ti-label-box"},{default:d((()=>[r(t,{class:"ti-label-left"},{default:d((()=>[r(l,{class:"ti-label-server"},{default:d((()=>[A(f(g(v)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-input-box"},{default:d((()=>[r(s,{type:"text",clearable:!1,disabled:!0,value:R.value.device_id},null,8,["value"])])),_:1})])),_:1}),r(t,{class:"ti-item-input"},{default:d((()=>[r(t,{class:"ti-label-box"},{default:d((()=>[r(t,{class:"ti-label-left"},{default:d((()=>[r(l,{class:"ti-label-server"},{default:d((()=>[A(f(g(v)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-input-box"},{default:d((()=>[r(s,{type:"text",onInput:Z,placeholder:g(v)("機器備註"),clearable:!1,maxlength:100,onFocus:P,onBlur:Q},null,8,["placeholder"])])),_:1})])),_:1}),r(t,{class:"ti-item-input"},{default:d((()=>[r(t,{class:"ti-label-box"},{default:d((()=>[r(t,{class:"ti-label-left"},{default:d((()=>[r(l,{class:"ti-label-server"},{default:d((()=>[A(f(g(v)("服務器連接地址")),1)])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-input-box"},{default:d((()=>[r(s,{type:"text",onInput:W,placeholder:g(v)("伺服器位址"),value:R.value.ip,clearable:!1,onFocus:P,onBlur:Q},null,8,["placeholder","value"]),r(t,{class:"ti-colon"},{default:d((()=>[A(":")])),_:1}),r(t,{class:"ti-input-port"},{default:d((()=>[r(s,{type:"number",onInput:N,placeholder:g(v)("端口"),value:R.value.port,clearable:!1,onFocus:P,onBlur:Q},null,8,["placeholder","value"])])),_:1})])),_:1})])),_:1}),r(t,{class:"ti-bottom"},{default:d((()=>[r(n,{title:g(v)("重置"),onClick:la},null,8,["title"]),r(n,{title:g(v)("確定"),loading:O.value,type:"primary",onClick:e[0]||(e[0]=a=>ta())},null,8,["title","loading"])])),_:1}),r(t,{class:"ti-select-table-box",onClick:e[1]||(e[1]=a=>ta(!0))},{default:d((()=>[r(l,{class:"ti-label-table"},{default:d((()=>[A(f(q.value?g(v)("已選 : ")+g(p)(q.value,21):g(v)("查找桌位")),1)])),_:1})])),_:1}),r(b,{show:$.value,"onUpdate:show":e[2]||(e[2]=a=>$.value=a),onConfirm:ea},null,8,["show"])])),_:1})}}},[["__scopeId","data-v-781841c6"]]),la=""+new URL("binding-page-bg-image-db048039.png",import.meta.url).href,ta=""+new URL("logo-fcaec045.png",import.meta.url).href,sa=""+new URL("monitor-mobbile-8fa7acb0.svg",import.meta.url).href,na=$({__name:"set-language",props:{firstBind:{type:Boolean,default:!1}},setup(a){const e=a,l=t(X[Y()]),s=t(),n=a=>{s.value.isShow()?s.value.close():s.value.open()},g=()=>{l.value=X[Y()]};return(a,t)=>{const v=o(i("ti-layout-language-item"),N),p=G,b=S,m=k;return u(),c(p,{class:"ti-language",onClick:[n,t[0]||(t[0]=J((()=>{}),["stop"]))]},{default:d((()=>[r(p,{class:"ti-language-box"},{default:d((()=>[r(v,{ref_key:"refShowLanguage",ref:s,firstBind:e.firstBind,onLanguageText:g},null,8,["firstBind"])])),_:1}),r(b,{class:"ti-language-global",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIeSURBVHgB5VXdcdswDAYUKpXVPrAbeASNoExQZ4ImE7QbxB6hE9gb1BvYnSDaoN6gfOg5PsshA0CyJEbUnZK7vCTfnX9EfvgAkAAE8CGgP8c3ehL/1Wns6s+9nnz6OcY2GhRNL2ckWolY9x0Qpp3tjBa/CY84HMCLHOhU3QG43+BcoTVoQMx7JIRc9ogDDpYU0N0oB5U4zuUhORVwUBkMgfeYI3DzkBP0xBNKNYJlxYeteSiv+KjoODJwaMBZU1lFlJXTUOLalGWhJ2rTZmmvzf5xHQxIzjNRlDol/0Kwjdie7y2UQUWkc+XUH0/GlFBQxSwpm/zZJXOGO1rbmn15q9OLGVjKkI7LGDBdWtSJ/gd9NnCM/0GEG4jVrBbqi1eh8VpeP2RiQ7as0a0q1Rq4GyE2EaLpCA1h2nCxcZxTULy+8jLwxGXHGhgL1+NOGxl4Y7QO+NK6sNH4SsIetwg5WFBXblsjp4OOfew8rvBJA+HX+bG5ZHMoV/Szkh44/KeqqI0Q/pATGCpT+U8NBxcknHyhMjXDd9c2Gryi0SDYaMpjoaWoIq5nclaPijjOIHbUSG7ncSOc0ldh9se1jIojjYpIMr31JHuRpGpOy9XQuiy/SldzE4Vg3ZUMO27OSm5BDudeHM9tzP5EBLeQB29aBuBN27540EHjxFKqiJnMlm51ncHTlveQGxSvQ+KjIZefqvvmlcmvz2T4Lfa+8ARyhNbiDRkX2gAAAABJRU5ErkJggg=="}),r(m,{class:"ti-language-text"},{default:d((()=>[A(f(l.value),1)])),_:1}),r(b,{class:"ti-language-arrow-down",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACPSURBVHgB7Y9BCoUwDESH/w3EuskRPIpH8AZ6M72ZR9ClO60KQRGtYF0ofbRQmslMAgQC70TEHkb6SM8kEkPDfBMqcIFJpz02aF377dSMTt8DalfIXLc6/ehZ4JyIqdSJTjbZTL7oSlzFFXLL3BXixfwwxFDlzfwkxJ+5hph/LjE1i3nUCkcZnkAsCAS+xQhmhzo19D7FAAAAAABJRU5ErkJggg=="})])),_:1})}}},[["__scopeId","data-v-e2382d00"]]),oa=$({__name:"first-binding",setup(a){W((a=>({"3713191e":b.value})));const e=t(!1),l=t(""),n=t(!1),p=C().deviceModel,b=t(""),m=t(0);let h=Date.now();const w=t("jbc");window.config&&(w.value=window.config().brand||"jbc");const x=t("");window.config&&(x.value=window.config().webLogo);const B=a=>{e.value=!0,l.value=a},U=()=>{"PC"!=p&&(b.value="-25%")},E=()=>{b.value=""},I=()=>{const a=Date.now();a-h>1e3?m.value=1:m.value++,h=a,m.value>=6&&(new q,m.value=0)};return R("authorization",(a=>{n.value=!a})),s((()=>{document.title=window.config().title})),(a,t)=>{const s=S,p=G,b=o(i("ti-layout-setserver"),ea),m=o(i("ti-modal"),_);return u(),F(L,null,[r(p,{class:"page",onClick:t[0]||(t[0]=a=>g(Q)())},{default:d((()=>[r(p,{class:"ti-page-bg"},{default:d((()=>[r(s,{class:"ti-bg-image",src:la})])),_:1}),r(p,{class:"ti-flex"},{default:d((()=>[r(p,{class:"ti-flex-round"},{default:d((()=>[r(p,{class:"ti-round-box"},{default:d((()=>[r(p,{class:"ti-round-content"},{default:d((()=>[r(p,{class:"ti-item-logo",onClick:I},{default:d((()=>[x.value?(u(),c(s,{key:0,class:"ti-logo",src:x.value,mode:"widthFix"},null,8,["src"])):"tiger"==w.value?(u(),c(s,{key:1,class:"ti-logo",src:"data:image/png;base64,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",mode:"widthFix"})):"jbc"==w.value?(u(),c(s,{key:2,class:"ti-logo",src:ta,mode:"widthFix"})):P("",!0)])),_:1}),r(b,{class:"m-top-32px",onBind:B,onFocus:U,onBlur:E})])),_:1})])),_:1})])),_:1})])),_:1}),r(p,{class:"ti-language-box"},{default:d((()=>[r(na,{firstBind:!0})])),_:1})])),_:1}),r(m,{class:"ti-action-tips",show:e.value,"onUpdate:show":t[1]||(t[1]=a=>e.value=a),isCancelShow:!1,isConfirmShow:!0,content:l.value,onConfirm:t[2]||(t[2]=a=>e.value=!1)},{title:d((()=>[r(p,{class:"warning-header"},{default:d((()=>[r(p,{class:"warning-image-round"},{default:d((()=>[r(s,{class:"warning-image",src:sa,mode:""})])),_:1}),r(p,{class:"warning-text",style:{"font-weight":"bold"}},{default:d((()=>[A(f(g(v)("綁定失敗")),1)])),_:1})])),_:1})])),default:d((()=>[Z("template",null,[r(p)])])),_:1},8,["show","content"]),r(m,{class:"ti-action-tips",show:n.value,title:g(v)("店鋪到期"),isCancelShow:!1,onConfirm:t[3]||(t[3]=a=>n.value=!1),isConfirmShow:!0,content:g(v)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:d((()=>[r(p,{class:"warning-header"},{default:d((()=>[r(p,{class:"warning-image-round"},{default:d((()=>[r(s,{class:"warning-image",src:O,mode:""})])),_:1}),r(p,{class:"warning-text"},{default:d((()=>[A(f(g(v)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])],64)}}},[["__scopeId","data-v-10aee044"]]);export{oa as default};
