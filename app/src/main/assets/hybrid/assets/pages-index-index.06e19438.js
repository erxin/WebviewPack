import{u as e,a,s as l,r as t,o as s,i,b as o,c as u,d as n,e as r,g as c,$ as d,f as v,h as f,j as _,w as p,k as m,l as b,m as h,n as w,p as g,q as y,t as k,F as x,v as T,x as C,y as I,z as F,A as j,B as E,C as $,D as B,E as D,G as M,H as S,I as U,J as z,K as A,L,M as R,N as q,O as G,P as H,Q as J,R as K,S as N,T as O,U as P,V as Q,W as V,X as W,Y as X}from"./index-0ffa3f98.js";import{D as Y,v as Z,_ as ee}from"./verify.3ba49cf5.js";import{i as ae,g as le,_ as te,a as se,b as ie,c as oe}from"./platform.af04db20.js";import{_ as ue}from"./ti-button.b3fd8333.js";import"./components-ti-keyboard-ti-keyboard.4615d4f3.js";const ne=ue({__name:"index",setup(ue){const ne=e(),re=a(),{userInfo:ce}=l(ne),{tableInfo:de}=l(re),{getUserInfo:ve,setUserInfo:fe}=e(),{getTableInfoAsync:_e}=a(),pe=t(!1),me=t(!1);_e();const be=t(0),he=t(!0),we=t(!1),ge=t(!1),ye=t(),ke=e=>{var a,l;be.value=e.detail.current,xe(null==(l=null==(a=ce.value)?void 0:a.tablet)?void 0:l.carousel,be.value)};t([]);const xe=(e,a)=>{const l=e[a];"video"==E(l.real_name)?setTimeout((()=>{ye.value=l,ge.value=!0,he.value=!1,we.value=!0}),50):we.value=!1},Te=()=>{var e,a,l,t;ge.value=!1,he.value=!0,be.value==(null==(a=null==(e=ce.value)?void 0:e.tablet)?void 0:a.carousel.length)-1?(be.value=0,xe(null==(t=null==(l=ce.value)?void 0:l.tablet)?void 0:t.carousel,be.value)):be.value+=1},Ce=()=>{We()},Ie=()=>{u({url:"/pages/index/index"})},Fe=t(),je=t("");t([]);const Ee=t(),$e=t(!1),Be=t({ip:"",port:"",device_id:"",remark:""}),De=()=>{const e=b();Be.value.ip=(null==e?void 0:e.ip)||h()||"127.0.0.1",Be.value.port=(null==e?void 0:e.port)||"8080"},Me=e=>{Be.value.remark=e},Se=e=>{Be.value.ip=e},Ue=e=>{Be.value.port=e},ze=async()=>{var e;const a={...Be.value};if(a.ip)if(a.port)try{const l=await $(B(`${null==a?void 0:a.ip}:${a.port}`),!1);1==parseInt(l.data.cashier.order_method.is_table_order)?(D(a),M(l.data.app_id),S(l.data.shop_supplier_id),U(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{$e.value=!0}),150)):uni.showToast({title:I("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:I("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:I("绑定失败"),icon:"none"})}else uni.showToast({title:I("請輸入連接埠"),icon:"none"});else uni.showToast({title:I("請輸入伺服器位址"),icon:"none"})},Ae=e=>{$e.value=!1,e&&(Ee.value=e,je.value=e.table_no)},Le=()=>{De(),je.value=z().table_no,Ee.value=z(),Be.value.remark=A("machine_remark")},Re=async()=>{var e;const a={...Be.value};if(a.ip)if(a.port)try{const l=await $(B(`${null==a?void 0:a.ip}:${a.port}`),!1);if(!Ee.value)return void uni.showToast({title:I("請查找桌位"),icon:"none"});1==parseInt(l.data.cashier.order_method.is_table_order)?(D(a),M(l.data.app_id),S(l.data.shop_supplier_id),U(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{qe()}),150)):uni.showToast({title:I("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:I("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:I("绑定失败"),icon:"none"})}else uni.showToast({title:I("請輸入連接埠"),icon:"none"});else uni.showToast({title:I("請輸入伺服器位址"),icon:"none"})},qe=async()=>{if(L()===Ee.value.table_id&&Be.value.remark==A("machine_remark"))return uni.showToast({title:I("绑定成功"),icon:"none"}),void(Fe.value=!1);try{const e=await R({key:A("machine_id"),table_id:Ee.value.table_id,old_table_id:L(),device_remark:Be.value.remark});q(Ee.value),ve(),_e(),uni.showToast({title:e.msg,icon:"none"}),Fe.value=!1,Be.value.remark!=A("machine_remark")&&G({key:"machine_remark",data:Be.value.remark})}catch(e){uni.showToast({title:e.msg||e.errMsg,icon:"none"})}},Ge=t(),He=t(!1),Je=async()=>{var e,a,l,t,s;if(ve(),1===parseInt(null==(e=null==ce?void 0:ce.value)?void 0:e.tablet.is_customer_order)&&1===parseInt(null==(a=null==ce?void 0:ce.value)?void 0:a.cashier.order_method.is_table_order))try{const e=await H({table_id:L()});if(1===parseInt(e.data.tablet.is_customer_order))if(10===e.data.status)Oe();else{if(1==(null==(t=e.data.order)?void 0:t.is_buffet))return He.value=!0,void(me.value=!0);Ke()}else null==(s=Ge.value)||s.tiCallClick("1")}catch(i){}else null==(l=Ge.value)||l.tiCallClick("1")},Ke=()=>{J(!0),u({url:"/pages/index/opentable-index"})},Ne=t(!1),Oe=()=>{Ne.value=!0},Pe=e=>{var a;Ne.value=!1,e&&(null==(a=Ge.value)||a.tiCallClick("1"))},Qe=t(!1),Ve=t(!1),We=()=>{Qe.value=!0,Ve.value=!0},Xe=async e=>{if(e)try{await Z({password:e});Fe.value=!0,Be.value.remark=A("machine_remark")||"",Ee.value=z(),je.value=Ee.value.table_no,Ye()}catch(a){(a.errMsg||a.msg)&&uni.showToast({title:a.msg||a.errMsg,icon:"none"})}else uni.showToast({title:I("請輸入密碼"),icon:"none",duration:3e3})},Ye=()=>{(()=>{Qe.value=!1,Ve.value=!1;const e=setTimeout((()=>{Fe.value,clearTimeout(e)}),300)})()};return t({name:"",logo:"",table_no:"",is_call_service:1,is_customer_order:1}),s((()=>{i()&&o()&&u({url:"/pages/index/opentable-index"})})),n((()=>{var e;null==(e=Ge.value)||e.showBuffet(!1,0)})),De(),r((()=>{ae()?Be.value.device_id=le():c({success:e=>{Be.value.device_id=e.deviceId}})})),d("authorization",(e=>{pe.value=!e})),(e,a)=>{const l=K(N("ti-layout-head"),ee),t=w,s=O,u=P,n=Q,r=V,c=W,d=K(N("ti-input"),se),b=K(N("ti-layout-table-list"),ie),h=K(N("ti-modal"),oe),$=X;return v(i)()&&!v(o)()?(f(),_(t,{key:0,class:"ti-page",onClick:a[3]||(a[3]=e=>v(j)())},{default:p((()=>[g(t,null,{default:p((()=>{var e,a;return[g(l,{ref_key:"refCallServer",ref:Ge,onDoubleLogo:Ce,onRefresh:Ie,is_call_service:parseInt(null==(a=null==(e=v(ce))?void 0:e.tablet)?void 0:a.is_call_service)},null,8,["is_call_service"])]})),_:1}),g(t,{class:"ti-page-content"},{default:p((()=>{var e;return[g(t,{class:"ti-page-left"},{default:p((()=>[ge.value?m("",!0):(f(),_(n,{key:0,onChange:ke,class:"ti-swiper",current:be.value,autoplay:he.value,circular:"",interval:"30000","indicator-dots":!0,"indicator-color":"#FFFFFF80","indicator-active-color":"#FFBE00"},{default:p((()=>{var e,a;return[(f(!0),y(x,null,k(null==(a=null==(e=v(ce))?void 0:e.tablet)?void 0:a.carousel,((e,a)=>(f(),_(u,{class:"ti-swiper-item",key:a},{default:p((()=>["image"===v(E)(e.real_name)?(f(),_(s,{key:0,class:"ti-swiper-item-image",mode:"scaleToFill",src:e.file_path},null,8,["src"])):m("",!0),"video"===v(E)(e.real_name)?(f(),_(s,{key:1,class:"ti-swiper-item-image",mode:"scaleToFill",src:""})):m("",!0)])),_:2},1024)))),128))]})),_:1},8,["current","autoplay"])),ge.value?(f(),_(n,{key:1,class:"ti-swiper"},{default:p((()=>[g(u,{class:"ti-swiper-item"},{default:p((()=>{var e;return[g(r,{onEnded:Te,class:"ti-swiper-item-video",controls:!1,"show-fullscreen-btn":!1,autoplay:!0,src:null==(e=ye.value)?void 0:e.file_path},null,8,["src"])]})),_:1})])),_:1})):m("",!0)])),_:1}),g(t,{class:"ti-page-right"},{default:p((()=>[g(t,{class:"ti-store-box"},{default:p((()=>[g(t,{class:"ti-store-item"},{default:p((()=>{var e;return[g(s,{class:"ti-store-logo",src:null==(e=v(ce))?void 0:e.logo},null,8,["src"]),g(c,{class:"ti-store-name"},{default:p((()=>{var e;return[T(C(null==(e=v(ce))?void 0:e.name),1)]})),_:1})]})),_:1}),g(t,{class:"ti-table-item"},{default:p((()=>[g(t,{class:"ti-table-number"},{default:p((()=>{var e;return[T(C(v(I)("當前桌號："))+C(null==(e=v(de))?void 0:e.table_no),1)]})),_:1}),g(t,{class:"ti-table-button",onClick:Je},{default:p((()=>[g(c,{class:"ti-table-button-text"},{default:p((()=>[T(C(v(I)("開始點餐")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),g(Y,{show:Ne.value,title:"["+(null==(e=v(de))?void 0:e.table_no)+"]"+v(I)("就餐人数"),placeholder:v(I)("請輸入人數"),isBuffet:!0,password:Ve.value,onExit:Pe},null,8,["show","title","placeholder","password"]),g(Y,{show:Qe.value,title:v(I)("密碼"),password:Ve.value,placeholder:v(I)("請輸入密碼"),onExit:Ye,onConfirm:Xe},null,8,["show","title","password","placeholder"])]})),_:1}),g(h,{show:Fe.value,title:v(I)("設置"),cancelText:v(I)("重置"),confirmText:v(I)("確定"),onCancel:Le,onConfirm:Re},{content:p((()=>[g(t,{class:"ti-item-input"},{default:p((()=>[g(t,{class:"ti-label-box"},{default:p((()=>[g(t,{class:"ti-label-left"},{default:p((()=>[g(c,{class:"ti-label-server"},{default:p((()=>[T(C(v(I)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),g(t,{class:"ti-input-box"},{default:p((()=>[g(d,{type:"text",clearable:!1,disabled:!0,value:Be.value.device_id},null,8,["value"])])),_:1})])),_:1}),g(t,{class:"ti-item-input"},{default:p((()=>[g(t,{class:"ti-label-box"},{default:p((()=>[g(t,{class:"ti-label-left"},{default:p((()=>[g(c,{class:"ti-label-server"},{default:p((()=>[T(C(v(I)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),g(t,{class:"ti-input-box"},{default:p((()=>[g(d,{type:"text",value:Be.value.remark,onInput:Me,placeholder:v(I)("機器備註"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),g(t,{class:"ti-item-input"},{default:p((()=>[g(t,{class:"ti-label-box"},{default:p((()=>[g(t,{class:"ti-label-left"},{default:p((()=>[g(c,{class:"ti-label-server"},{default:p((()=>[T(C(v(I)("服務器連接地址")),1)])),_:1})])),_:1}),g(t,{class:"ti-label-right",onClick:ze},{default:p((()=>[g(c,{class:"ti-label-table"},{default:p((()=>[T(C(je.value?v(I)("已選 : ")+v(F)(je.value,19):v(I)("查找桌位")),1)])),_:1})])),_:1})])),_:1}),g(t,{class:"ti-input-box"},{default:p((()=>[g(d,{type:"text",onInput:Se,value:Be.value.ip,placeholder:v(I)("伺服器位址"),clearable:!1},null,8,["value","placeholder"]),g(t,{class:"ti-colon"},{default:p((()=>[T(":")])),_:1}),g(t,{class:"ti-input-port"},{default:p((()=>[g(d,{type:"number",onInput:Ue,value:Be.value.port,placeholder:v(I)("端口"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),g(b,{show:$e.value,"onUpdate:show":a[0]||(a[0]=e=>$e.value=e),onConfirm:Ae},null,8,["show"])])),_:1})])),_:1},8,["show","title","cancelText","confirmText"]),g(h,{class:"ti-dialog-buffet",show:me.value,title:v(I)("提示"),onCancel:a[1]||(a[1]=e=>(me.value=!1,void(He.value=!1))),onConfirm:a[2]||(a[2]=e=>Ke())},{content:p((()=>[g(t,{class:"ti-dialog-content"},{default:p((()=>[g($,{class:"ti-buffet-scroll","scroll-y":""},{default:p((()=>[g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("如有剩餘食物，可能產生額外費用")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("點菜時請考慮您的飽食量，只訂購能夠完全食用的食品數量")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("對於食品和飲品的過度點單，可能會引發額外費用")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("如有多餘食物或飲品浪費的情況，我們可能會視情況追加費用")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-tips"},{default:p((()=>[T(C(v(I)("我们鼓励客人谨慎点菜，仅订购会食用完的食品，避免剩菜问题和额外费用")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title"]),g(h,{class:"ti-action-tips",show:pe.value,title:v(I)("店鋪到期"),isCancelShow:!1,isConfirmShow:!1,content:v(I)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:p((()=>[g(t,{class:"warning-header"},{default:p((()=>[g(t,{class:"warning-image-round"},{default:p((()=>[g(s,{class:"warning-image",src:te,mode:""})])),_:1}),g(t,{class:"warning-text"},{default:p((()=>[T(C(v(I)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])])),_:1})):m("",!0)}}},[["__scopeId","data-v-b3481601"]]);export{ne as default};
