import{u as e,a,s as l,r as t,o as s,i,b as o,c as u,d as n,e as r,g as c,$ as d,f as v,h as f,j as _,w as p,k as m,l as b,m as h,n as w,p as g,q as y,t as k,F as x,v as T,x as C,y as I,z as F,A as j,B,C as E,D as $,E as D,G as M,H as S,I as U,J as z,K as A,L,M as R,N as q,O as G,P as H,Q as J,R as K,S as N,T as O,U as P,V as Q,W as V,X as W,Y as X}from"./index-460cc507.js";import{D as Y,v as Z,_ as ee}from"./verify.a48223e1.js";import{i as ae,g as le,_ as te,a as se,b as ie,c as oe}from"./platform.1ad4fc4f.js";import{_ as ue}from"./ti-button.c3e1aef7.js";import"./components-ti-keyboard-ti-keyboard.81fedd2e.js";const ne=ue({__name:"index",setup(ue){const ne=e(),re=a(),{userInfo:ce}=l(ne),{tableInfo:de}=l(re),{getUserInfo:ve,setUserInfo:fe}=e(),{getTableInfoAsync:_e}=a(),pe=t(!1),me=t(!1);_e();const be=()=>{Je()},he=()=>{u({url:"/pages/index/index"})},we=t(),ge=t("");t([]);const ye=t(),ke=t(!1),xe=t({ip:"",port:"",device_id:"",remark:""}),Te=()=>{const e=b();xe.value.ip=(null==e?void 0:e.ip)||h()||"127.0.0.1",xe.value.port=(null==e?void 0:e.port)||"8080"},Ce=e=>{xe.value.remark=e},Ie=e=>{xe.value.ip=e},Fe=e=>{xe.value.port=e},je=async()=>{var e;const a={...xe.value};if(a.ip)if(a.port)try{const l=await B(E(`${null==a?void 0:a.ip}:${a.port}`),!1);1==parseInt(l.data.cashier.order_method.is_table_order)?($(a),D(l.data.app_id),M(l.data.shop_supplier_id),S(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{ke.value=!0}),150)):uni.showToast({title:I("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:I("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:I("绑定失败"),icon:"none"})}else uni.showToast({title:I("請輸入連接埠"),icon:"none"});else uni.showToast({title:I("請輸入伺服器位址"),icon:"none"})},Be=e=>{ke.value=!1,e&&(ye.value=e,ge.value=e.table_no)},Ee=()=>{Te(),ge.value=U().table_no,ye.value=U(),xe.value.remark=z("machine_remark")},$e=async()=>{var e;const a={...xe.value};if(a.ip)if(a.port)try{const l=await B(E(`${null==a?void 0:a.ip}:${a.port}`),!1);if(!ye.value)return void uni.showToast({title:I("請查找桌位"),icon:"none"});1==parseInt(l.data.cashier.order_method.is_table_order)?($(a),D(l.data.app_id),M(l.data.shop_supplier_id),S(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{De()}),150)):uni.showToast({title:I("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:I("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:I("绑定失败"),icon:"none"})}else uni.showToast({title:I("請輸入連接埠"),icon:"none"});else uni.showToast({title:I("請輸入伺服器位址"),icon:"none"})},De=async()=>{if(A()===ye.value.table_id&&xe.value.remark==z("machine_remark"))return uni.showToast({title:I("绑定成功"),icon:"none"}),void(we.value=!1);try{const e=await L({key:z("machine_id"),table_id:ye.value.table_id,old_table_id:A(),device_remark:xe.value.remark});R(ye.value),ve(),_e(),uni.showToast({title:e.msg,icon:"none"}),we.value=!1,xe.value.remark!=z("machine_remark")&&q({key:"machine_remark",data:xe.value.remark})}catch(e){uni.showToast({title:e.msg||e.errMsg,icon:"none"})}},Me=t(),Se=t(!1),Ue=async()=>{var e,a,l,t;if(await ve(),1==parseInt(null==(e=null==ce?void 0:ce.value)?void 0:e.cashier.order_method.is_table_order))try{const e=await G({table_id:A()});if(30===e.data.status){if(1==(null==(l=e.data.order)?void 0:l.is_buffet))return Se.value=!0,me.value=!0,void ea();ze()}else 1===parseInt(e.data.tablet.is_customer_order)?Re():null==(t=Me.value)||t.tiCallClick("1")}catch(s){}else null==(a=Me.value)||a.tiCallClick("1")},ze=()=>{H(!0),u({url:"/pages/index/opentable-index"})},Ae=t(!1),Le=t(!0),Re=()=>{Le.value=1==ce.value.buffet.is_open,Ae.value=!0},qe=e=>{var a;Ae.value=!1,e&&(null==(a=Me.value)||a.tiCallClick("1"))},Ge=t(!1),He=t(!1),Je=()=>{Ge.value=!0,He.value=!0},Ke=async e=>{if(e)try{await Z({password:e});we.value=!0,xe.value.remark=z("machine_remark")||"",ye.value=U(),ge.value=ye.value.table_no,Ne()}catch(a){(a.errMsg||a.msg)&&uni.showToast({title:a.msg||a.errMsg,icon:"none"})}else uni.showToast({title:I("請輸入密碼"),icon:"none",duration:3e3})},Ne=()=>{(()=>{Ge.value=!1,He.value=!1;const e=setTimeout((()=>{we.value,clearTimeout(e)}),300)})()};t({name:"",logo:"",table_no:"",is_call_service:1,is_customer_order:1});const Oe=t(0),Pe=t(!0),Qe=t(!1),Ve=t(!1),We=t(),Xe=e=>{var a,l;Oe.value=e.detail.current,Ye(null==(l=null==(a=ce.value)?void 0:a.tablet)?void 0:l.carousel,Oe.value)};t([]);const Ye=(e,a)=>{const l=e[a];"video"==J(l.real_name)?setTimeout((()=>{We.value=l,Ve.value=!0,Pe.value=!1,Qe.value=!0}),50):Qe.value=!1},Ze=()=>{var e,a,l,t;Ve.value=!1,Pe.value=!0,Oe.value==(null==(a=null==(e=ce.value)?void 0:e.tablet)?void 0:a.carousel.length)-1?(Oe.value=0,Ye(null==(t=null==(l=ce.value)?void 0:l.tablet)?void 0:t.carousel,Oe.value)):Oe.value+=1},ea=()=>{};return s((()=>{i()&&o()&&u({url:"/pages/index/opentable-index"})})),n((()=>{var e;null==(e=Me.value)||e.showBuffet(!1,0)})),Te(),r((()=>{ve(),ae()?xe.value.device_id=le():c({success:e=>{xe.value.device_id=e.deviceId}})})),d("authorization",(e=>{pe.value=!e})),(e,a)=>{const l=K(N("ti-layout-head"),ee),t=w,s=O,u=P,n=Q,r=V,c=W,d=K(N("ti-input"),se),b=K(N("ti-layout-table-list"),ie),h=K(N("ti-modal"),oe),B=X;return v(i)()&&!v(o)()?(f(),_(t,{key:0,class:"ti-page",onClick:a[3]||(a[3]=e=>v(j)())},{default:p((()=>[g(t,null,{default:p((()=>{var e,a;return[g(l,{ref_key:"refCallServer",ref:Me,onDoubleLogo:be,onRefresh:he,is_call_service:parseInt(null==(a=null==(e=v(ce))?void 0:e.tablet)?void 0:a.is_call_service)},null,8,["is_call_service"])]})),_:1}),g(t,{class:"ti-page-content"},{default:p((()=>{var e;return[g(t,{class:"ti-page-left"},{default:p((()=>[Ve.value?m("",!0):(f(),_(n,{key:0,onChange:Xe,class:"ti-swiper",current:Oe.value,autoplay:Pe.value,circular:"",interval:"30000","indicator-dots":!0,"indicator-color":"#FFFFFF80","indicator-active-color":"#FFBE00"},{default:p((()=>{var e,a;return[(f(!0),y(x,null,k(null==(a=null==(e=v(ce))?void 0:e.tablet)?void 0:a.carousel,((e,a)=>(f(),_(u,{class:"ti-swiper-item",key:a},{default:p((()=>["image"===v(J)(e.real_name)?(f(),_(s,{key:0,class:"ti-swiper-item-image",mode:"scaleToFill",src:e.file_path},null,8,["src"])):m("",!0),"video"===v(J)(e.real_name)?(f(),_(s,{key:1,class:"ti-swiper-item-image",mode:"scaleToFill",src:""})):m("",!0)])),_:2},1024)))),128))]})),_:1},8,["current","autoplay"])),Ve.value?(f(),_(n,{key:1,class:"ti-swiper"},{default:p((()=>[g(u,{class:"ti-swiper-item"},{default:p((()=>{var e;return[g(r,{onEnded:Ze,class:"ti-swiper-item-video",controls:!1,"show-fullscreen-btn":!1,autoplay:!0,src:null==(e=We.value)?void 0:e.file_path},null,8,["src"])]})),_:1})])),_:1})):m("",!0)])),_:1}),g(t,{class:"ti-page-right"},{default:p((()=>[g(t,{class:"ti-store-box"},{default:p((()=>[g(t,{class:"ti-store-item"},{default:p((()=>{var e;return[g(s,{class:"ti-store-logo",src:null==(e=v(ce))?void 0:e.logo},null,8,["src"]),g(c,{class:"ti-store-name"},{default:p((()=>{var e;return[T(C(null==(e=v(ce))?void 0:e.name),1)]})),_:1})]})),_:1}),g(t,{class:"ti-table-item"},{default:p((()=>[g(t,{class:"ti-table-number"},{default:p((()=>{var e;return[T(C(v(I)("當前桌號："))+C(null==(e=v(de))?void 0:e.table_no),1)]})),_:1}),g(t,{class:"ti-table-button",onClick:Ue},{default:p((()=>[g(c,{class:"ti-table-button-text"},{default:p((()=>[T(C(v(I)("開始點餐")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),g(Y,{show:Ae.value,title:"["+(null==(e=v(de))?void 0:e.table_no)+"]"+v(I)("就餐人数"),placeholder:v(I)("請輸入人數"),isBuffet:Le.value,password:He.value,onExit:qe},null,8,["show","title","placeholder","isBuffet","password"]),g(Y,{show:Ge.value,title:v(I)("密碼"),password:He.value,placeholder:v(I)("請輸入密碼"),onExit:Ne,onConfirm:Ke},null,8,["show","title","password","placeholder"])]})),_:1}),g(h,{show:we.value,title:v(I)("設置"),cancelText:v(I)("重置"),confirmText:v(I)("確定"),onCancel:Ee,onConfirm:$e},{content:p((()=>[g(t,{class:"ti-item-input"},{default:p((()=>[g(t,{class:"ti-label-box"},{default:p((()=>[g(t,{class:"ti-label-left"},{default:p((()=>[g(c,{class:"ti-label-server"},{default:p((()=>[T(C(v(I)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),g(t,{class:"ti-input-box"},{default:p((()=>[g(d,{type:"text",clearable:!1,disabled:!0,value:xe.value.device_id},null,8,["value"])])),_:1})])),_:1}),g(t,{class:"ti-item-input"},{default:p((()=>[g(t,{class:"ti-label-box"},{default:p((()=>[g(t,{class:"ti-label-left"},{default:p((()=>[g(c,{class:"ti-label-server"},{default:p((()=>[T(C(v(I)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),g(t,{class:"ti-input-box"},{default:p((()=>[g(d,{type:"text",value:xe.value.remark,onInput:Ce,placeholder:v(I)("機器備註"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),g(t,{class:"ti-item-input"},{default:p((()=>[g(t,{class:"ti-label-box"},{default:p((()=>[g(t,{class:"ti-label-left"},{default:p((()=>[g(c,{class:"ti-label-server"},{default:p((()=>[T(C(v(I)("服務器連接地址")),1)])),_:1})])),_:1}),g(t,{class:"ti-label-right",onClick:je},{default:p((()=>[g(c,{class:"ti-label-table"},{default:p((()=>[T(C(ge.value?v(I)("已選 : ")+v(F)(ge.value,19):v(I)("查找桌位")),1)])),_:1})])),_:1})])),_:1}),g(t,{class:"ti-input-box"},{default:p((()=>[g(d,{type:"text",onInput:Ie,value:xe.value.ip,placeholder:v(I)("伺服器位址"),clearable:!1},null,8,["value","placeholder"]),g(t,{class:"ti-colon"},{default:p((()=>[T(":")])),_:1}),g(t,{class:"ti-input-port"},{default:p((()=>[g(d,{type:"number",onInput:Fe,value:xe.value.port,placeholder:v(I)("端口"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),g(b,{show:ke.value,"onUpdate:show":a[0]||(a[0]=e=>ke.value=e),onConfirm:Be},null,8,["show"])])),_:1})])),_:1},8,["show","title","cancelText","confirmText"]),g(h,{class:"ti-dialog-buffet",show:me.value,title:v(I)("提示"),onCancel:a[1]||(a[1]=e=>(me.value=!1,void(Se.value=!1))),onConfirm:a[2]||(a[2]=e=>ze())},{content:p((()=>[g(t,{class:"ti-dialog-content"},{default:p((()=>[g(B,{class:"ti-buffet-scroll","scroll-y":""},{default:p((()=>[g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("如有剩餘食物，可能產生額外費用")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("點菜時請考慮您的飽食量，只訂購能夠完全食用的食品數量")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("對於食品和飲品的過度點單，可能會引發額外費用")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-message"},{default:p((()=>[g(t,{class:"ti-buffet-case"}),g(t,{class:"ti-buffet-text"},{default:p((()=>[T(C(v(I)("如有多餘食物或飲品浪費的情況，我們可能會視情況追加費用")),1)])),_:1})])),_:1}),g(t,{class:"ti-buffet-tips"},{default:p((()=>[T(C(v(I)("我们鼓励客人谨慎点菜，仅订购会食用完的食品，避免剩菜问题和额外费用")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title"]),g(h,{class:"ti-action-tips",show:pe.value,title:v(I)("店鋪到期"),isCancelShow:!1,isConfirmShow:!1,content:v(I)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:p((()=>[g(t,{class:"warning-header"},{default:p((()=>[g(t,{class:"warning-image-round"},{default:p((()=>[g(s,{class:"warning-image",src:te,mode:""})])),_:1}),g(t,{class:"warning-text"},{default:p((()=>[T(C(v(I)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])])),_:1})):m("",!0)}}},[["__scopeId","data-v-761bc616"]]);export{ne as default};
