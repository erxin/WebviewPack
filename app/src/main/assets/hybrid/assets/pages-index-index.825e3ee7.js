import{u as e,a,b as l,c as t,s,r as i,o,i as u,d as n,e as r,f as c,g as d,h as v,$ as f,j as _,k as p,l as b,w as m,m as h,n as w,p as g,q as y,t as k,v as T,x,F as C,y as I,z as F,A as B,B as j,C as D,D as M,E as A,G as E,H as U,I as $,J as q,K as P,L as S,M as L,N as z,O as G,P as R,Q as H,R as J,S as K,T as N,U as O,V as Q,W as V,X as W,Y as X}from"./index-f138260e.js";import{D as Y,v as Z,_ as ee}from"./verify.1beb0a6b.js";import{i as ae,g as le,_ as te,a as se,b as ie,c as oe}from"./platform.13f2f8fd.js";import{_ as ue,a as ne}from"./ti-button.2af2c381.js";import"./components-ti-keyboard-ti-keyboard.53ea8e07.js";const re=ue({__name:"index",setup(ue){const re=e(),ce=a(),de=l(),ve=t(),{userInfo:fe}=s(ce),{tableInfo:_e}=s(de),pe=i(!1),be=i(!1),me=()=>{Re()},he=i(),we=i("");i([]);const ge=i(),ye=i(!1),ke=i({ip:"",port:"",device_id:"",remark:""}),Te=()=>{const e=w();ke.value.ip=(null==e?void 0:e.ip)||g()||"127.0.0.1",ke.value.port=(null==e?void 0:e.port)||"8080"},xe=e=>{ke.value.remark=e},Ce=e=>{ke.value.ip=e},Ie=e=>{ke.value.port=e},Fe=async()=>{var e;const a={...ke.value};if(a.ip)if(a.port)try{const l=await M(A(`${null==a?void 0:a.ip}:${a.port}`),!1);1==parseInt(l.data.cashier.order_method.is_table_order)?(E(a),U(l.data.app_id),$(l.data.shop_supplier_id),q(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{ye.value=!0}),150),re.clearCartData()):uni.showToast({title:B("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:B("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:B("绑定失败"),icon:"none"})}else uni.showToast({title:B("請輸入連接埠"),icon:"none"});else uni.showToast({title:B("請輸入伺服器位址"),icon:"none"})},Be=e=>{ye.value=!1,e&&(ge.value=e,we.value=e.table_no)},je=()=>{null==ve||ve.goodsBaseRefresh({},!0,!0),setTimeout((()=>{uni.showToast({title:B("清除成功"),icon:"none"})}),100)},De=()=>{Te(),we.value=P().table_no,ge.value=P(),ke.value.remark=S("machine_remark")},Me=async()=>{var e;const a={...ke.value};if(a.ip)if(a.port)try{const l=await M(A(`${null==a?void 0:a.ip}:${a.port}`),!1);if(!ge.value)return void uni.showToast({title:B("請查找桌位"),icon:"none"});1==parseInt(l.data.cashier.order_method.is_table_order)?(E(a),U(l.data.app_id),$(l.data.shop_supplier_id),q(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{Ae()}),150)):uni.showToast({title:B("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:B("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:B("綁定失敗"),icon:"none"})}else uni.showToast({title:B("請輸入連接埠"),icon:"none"});else uni.showToast({title:B("請輸入伺服器位址"),icon:"none"})},Ae=async()=>{if(L()===ge.value.table_id&&ke.value.remark==S("machine_remark"))return uni.showToast({title:B("绑定成功"),icon:"none"}),void(he.value=!1);try{const e=await z({key:S("machine_id"),table_id:ge.value.table_id,old_table_id:L(),device_remark:ke.value.remark});G(ge.value),null==ce||ce.getUserInfo(!0),null==de||de.getTableInfoAsync(!0),uni.showToast({title:e.msg,icon:"none"}),he.value=!1,ke.value.remark!=S("machine_remark")&&R({key:"machine_remark",data:ke.value.remark}),re.clearCartData()}catch(e){uni.showToast({title:e.msg||e.errMsg,icon:"none"})}},Ee=i(),Ue=i(!1),$e=async()=>{var e,a,l,t,s,i;try{if(await(null==ce?void 0:ce.getUserInfo(!0)),1!=parseInt(null==(e=null==fe?void 0:fe.value)?void 0:e.cashier.order_method.is_table_order))return void(null==(a=Ee.value)||a.tiCallClick("1"));const o=await(null==de?void 0:de.getTableInfoAsync(!0));if(30===o.data.status){if(1==(null==(l=o.data.order)?void 0:l.is_buffet))return Ue.value=!0,be.value=!0,void Ze();null==de||de.openTablePage(null==(s=null==(t=o.data)?void 0:t.order)?void 0:s.is_buffet)}else 1===parseInt(o.data.tablet.is_customer_order)?Se():null==(i=Ee.value)||i.tiCallClick("1")}catch(o){"request:fail"==o.errMsg&&null!=(null==ve?void 0:ve.getGoodsBaseList())&&(null==de||de.openTablePage())}},qe=i(!1),Pe=i(!0),Se=()=>{Pe.value=1==fe.value.buffet.is_open,qe.value=!0},Le=e=>{var a;qe.value=!1,e&&(null==(a=Ee.value)||a.tiCallClick("1"))},ze=i(!1),Ge=i(!1),Re=()=>{ze.value=!0,Ge.value=!0},He=async e=>{if(e)try{await Z({password:e});he.value=!0,ke.value.remark=S("machine_remark")||"",ge.value=P(),we.value=ge.value.table_no,Je()}catch(a){"request:fail"==a.errMsg||"request:fail"==a.errmsg?uni.showToast({title:B("网络异常，请检查您的网络设置"),icon:"none"}):(a.errMsg||a.msg)&&uni.showToast({title:a.msg||a.errMsg,icon:"none"})}else uni.showToast({title:B("請輸入密碼"),icon:"none",duration:3e3})},Je=()=>{(()=>{ze.value=!1,Ge.value=!1;const e=setTimeout((()=>{he.value,clearTimeout(e)}),300)})()};i({name:"",logo:"",table_no:"",is_call_service:1,is_customer_order:1});const Ke=i(0),Ne=i(!0),Oe=i(!1),Qe=i(!1),Ve=i(),We=e=>{var a,l;Ke.value=e.detail.current,Xe(null==(l=null==(a=fe.value)?void 0:a.tablet)?void 0:l.carousel,Ke.value)};i([]);const Xe=(e,a)=>{const l=e[a];"video"==H(l.real_name)?setTimeout((()=>{Ve.value=l,Qe.value=!0,Ne.value=!1,Oe.value=!0}),50):Oe.value=!1},Ye=()=>{var e,a,l,t;Qe.value=!1,Ne.value=!0,Ke.value==(null==(a=null==(e=fe.value)?void 0:e.tablet)?void 0:a.carousel.length)-1?(Ke.value=0,Xe(null==(t=null==(l=fe.value)?void 0:l.tablet)?void 0:t.carousel,Ke.value)):Ke.value+=1},Ze=()=>{};return o((()=>{null==de||de.getTableInfoAsync(),u()&&n()&&r({url:"/pages/index/opentable-index"})})),c((()=>{var e;null==(e=Ee.value)||e.showBuffet(!1,0)})),Te(),d((()=>{null==ce||ce.getUserInfo(!0),null==de||de.getTableInfoAsync(!0),ae()?ke.value.device_id=le():v({success:e=>{ke.value.device_id=e.deviceId}})})),f("authorization",(e=>{pe.value=!e})),(e,a)=>{const l=J(K("ti-layout-head"),ee),t=y,s=N,i=O,o=Q,r=V,c=W,d=J(K("ti-input"),se),v=J(K("ti-layout-table-list"),ie),f=J(K("ti-button"),ne),w=J(K("ti-modal"),oe),g=X;return _(u)()&&!_(n)()?(p(),b(t,{key:0,class:"ti-page",onClick:a[3]||(a[3]=e=>_(D)())},{default:m((()=>[k(t,null,{default:m((()=>{var e,a;return[k(l,{ref_key:"refCallServer",ref:Ee,onDoubleLogo:me,is_call_service:parseInt(null==(a=null==(e=_(fe))?void 0:e.tablet)?void 0:a.is_call_service)},null,8,["is_call_service"])]})),_:1}),k(t,{class:"ti-page-content"},{default:m((()=>{var e;return[k(t,{class:"ti-page-left"},{default:m((()=>[Qe.value?h("",!0):(p(),b(o,{key:0,onChange:We,class:"ti-swiper",current:Ke.value,autoplay:Ne.value,circular:"",interval:"30000","indicator-dots":!0,"indicator-color":"#FFFFFF80","indicator-active-color":"#FFBE00"},{default:m((()=>{var e,a;return[(p(!0),T(C,null,x(null==(a=null==(e=_(fe))?void 0:e.tablet)?void 0:a.carousel,((e,a)=>(p(),b(i,{class:"ti-swiper-item",key:a},{default:m((()=>["image"===_(H)(e.real_name)?(p(),b(s,{key:0,class:"ti-swiper-item-image",mode:"scaleToFill",src:e.file_path},null,8,["src"])):h("",!0),"video"===_(H)(e.real_name)?(p(),b(s,{key:1,class:"ti-swiper-item-image",mode:"scaleToFill",src:""})):h("",!0)])),_:2},1024)))),128))]})),_:1},8,["current","autoplay"])),Qe.value?(p(),b(o,{key:1,class:"ti-swiper"},{default:m((()=>[k(i,{class:"ti-swiper-item"},{default:m((()=>{var e;return[k(r,{onEnded:Ye,class:"ti-swiper-item-video",controls:!1,"show-fullscreen-btn":!1,autoplay:!0,src:null==(e=Ve.value)?void 0:e.file_path},null,8,["src"])]})),_:1})])),_:1})):h("",!0)])),_:1}),k(t,{class:"ti-page-right"},{default:m((()=>[k(t,{class:"ti-store-box"},{default:m((()=>[k(t,{class:"ti-store-item"},{default:m((()=>{var e;return[k(s,{class:"ti-store-logo",src:null==(e=_(fe))?void 0:e.logo},null,8,["src"]),k(c,{class:"ti-store-name"},{default:m((()=>{var e;return[I(F(null==(e=_(fe))?void 0:e.name),1)]})),_:1})]})),_:1}),k(t,{class:"ti-table-item"},{default:m((()=>[k(t,{class:"ti-table-number"},{default:m((()=>{var e;return[I(F(_(B)("桌號："))+F(null==(e=_(_e))?void 0:e.table_no),1)]})),_:1}),k(t,{class:"ti-table-button",onClick:$e},{default:m((()=>[k(c,{class:"ti-table-button-text"},{default:m((()=>[I(F(_(B)("開始點餐")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),k(Y,{show:qe.value,title:"["+(null==(e=_(_e))?void 0:e.table_no)+"]"+_(B)("就餐人数"),placeholder:_(B)("請輸入人數"),isBuffet:Pe.value,password:Ge.value,onExit:Le},null,8,["show","title","placeholder","isBuffet","password"]),k(Y,{show:ze.value,title:_(B)("密碼"),password:Ge.value,placeholder:_(B)("請輸入密碼"),onExit:Je,onConfirm:He},null,8,["show","title","password","placeholder"])]})),_:1}),k(w,{show:he.value,title:_(B)("設置")},{content:m((()=>[k(t,{class:"ti-item-input"},{default:m((()=>[k(t,{class:"ti-label-box"},{default:m((()=>[k(t,{class:"ti-label-left"},{default:m((()=>[k(c,{class:"ti-label-server"},{default:m((()=>[I(F(_(B)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),k(t,{class:"ti-input-box"},{default:m((()=>[k(d,{type:"text",clearable:!1,disabled:!0,value:ke.value.device_id},null,8,["value"])])),_:1})])),_:1}),k(t,{class:"ti-item-input"},{default:m((()=>[k(t,{class:"ti-label-box"},{default:m((()=>[k(t,{class:"ti-label-left"},{default:m((()=>[k(c,{class:"ti-label-server"},{default:m((()=>[I(F(_(B)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),k(t,{class:"ti-input-box"},{default:m((()=>[k(d,{type:"text",value:ke.value.remark,onInput:xe,placeholder:_(B)("機器備註"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),k(t,{class:"ti-item-input"},{default:m((()=>[k(t,{class:"ti-label-box"},{default:m((()=>[k(t,{class:"ti-label-left"},{default:m((()=>[k(c,{class:"ti-label-server"},{default:m((()=>[I(F(_(B)("服務器連接地址")),1)])),_:1})])),_:1}),k(t,{class:"ti-label-right",onClick:Fe},{default:m((()=>[k(c,{class:"ti-label-table"},{default:m((()=>[I(F(we.value?_(B)("已選 : ")+_(j)(we.value,19):_(B)("查找桌位")),1)])),_:1})])),_:1})])),_:1}),k(t,{class:"ti-input-box"},{default:m((()=>[k(d,{type:"text",onInput:Ce,value:ke.value.ip,placeholder:_(B)("伺服器位址"),clearable:!1},null,8,["value","placeholder"]),k(t,{class:"ti-colon"},{default:m((()=>[I(":")])),_:1}),k(t,{class:"ti-input-port"},{default:m((()=>[k(d,{type:"number",onInput:Ie,value:ke.value.port,placeholder:_(B)("端口"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),k(v,{show:ye.value,"onUpdate:show":a[0]||(a[0]=e=>ye.value=e),onConfirm:Be},null,8,["show"])])),_:1})])),footer:m((()=>[k(t,{class:"footer-button"},{default:m((()=>[k(f,{onClick:je},{default:m((()=>[I(F(_(B)("清除緩存")),1)])),_:1}),k(f,{onClick:De},{default:m((()=>[I(F(_(B)("重置")),1)])),_:1}),k(f,{type:"primary",onClick:Me},{default:m((()=>[I(F(_(B)("確定")),1)])),_:1})])),_:1})])),_:1},8,["show","title"]),k(w,{class:"ti-dialog-buffet",show:be.value,title:_(B)("提示"),onCancel:a[1]||(a[1]=e=>(be.value=!1,void(Ue.value=!1))),onConfirm:a[2]||(a[2]=e=>{null==de||de.openTablePage(1)})},{content:m((()=>[k(t,{class:"ti-dialog-content"},{default:m((()=>[k(g,{class:"ti-buffet-scroll","scroll-y":""},{default:m((()=>[k(t,{class:"ti-buffet-message"},{default:m((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:m((()=>[I(F(_(B)("如有剩餘食物，可能產生額外費用")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-message"},{default:m((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:m((()=>[I(F(_(B)("點菜時請考慮您的飽食量，只訂購能夠完全食用的食品數量")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-message"},{default:m((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:m((()=>[I(F(_(B)("對於食品和飲品的過度點單，可能會引發額外費用")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-message"},{default:m((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:m((()=>[I(F(_(B)("如有多餘食物或飲品浪費的情況，我們可能會視情況追加費用")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-tips"},{default:m((()=>[I(F(_(B)("我们鼓励客人谨慎点菜，仅订购会食用完的食品，避免剩菜问题和额外费用")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title"]),k(w,{class:"ti-action-tips",show:pe.value,title:_(B)("店鋪到期"),isCancelShow:!1,isConfirmShow:!1,content:_(B)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:m((()=>[k(t,{class:"warning-header"},{default:m((()=>[k(t,{class:"warning-image-round"},{default:m((()=>[k(s,{class:"warning-image",src:te,mode:""})])),_:1}),k(t,{class:"warning-text"},{default:m((()=>[I(F(_(B)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])])),_:1})):h("",!0)}}},[["__scopeId","data-v-a7b2f1b1"]]);export{re as default};
