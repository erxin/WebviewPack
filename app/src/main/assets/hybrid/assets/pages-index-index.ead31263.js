import{u as e,a,b as l,s as t,r as s,o as i,i as o,c as u,d as n,e as r,f as c,g as d,$ as v,h as f,j as _,k as p,w as m,l as b,m as h,n as w,p as g,q as y,t as k,v as x,F as T,x as C,y as I,z as F,A as j,B as D,C as B,D as E,E as M,G as $,H as S,I as U,J as q,K as z,L as A,M as L,N as R,O as G,P as H,Q as J,R as K,S as N,T as O,U as P,V as Q,W as V,X as W,Y as X,Z as Y}from"./index-80f03bdb.js";import{D as Z,v as ee,_ as ae}from"./verify.502f572f.js";import{i as le,g as te,_ as se,a as ie,b as oe,c as ue}from"./platform.3700e8ce.js";import{_ as ne}from"./ti-button.190e798b.js";import"./components-ti-keyboard-ti-keyboard.28a96c08.js";const re=ne({__name:"index",setup(ne){const re=e(),ce=a(),de=l(),{userInfo:ve}=t(ce),{tableInfo:fe}=t(de),{getUserInfo:_e,setUserInfo:pe}=a(),{getTableInfoAsync:me}=l(),be=s(!1),he=s(!1);me();const we=()=>{Ne()},ge=()=>{n({url:"/pages/index/index"})},ye=s(),ke=s("");s([]);const xe=s(),Te=s(!1),Ce=s({ip:"",port:"",device_id:"",remark:""}),Ie=()=>{const e=h();Ce.value.ip=(null==e?void 0:e.ip)||w()||"127.0.0.1",Ce.value.port=(null==e?void 0:e.port)||"8080"},Fe=e=>{Ce.value.remark=e},je=e=>{Ce.value.ip=e},De=e=>{Ce.value.port=e},Be=async()=>{var e;const a={...Ce.value};if(a.ip)if(a.port)try{const l=await B(E(`${null==a?void 0:a.ip}:${a.port}`),!1);1==parseInt(l.data.cashier.order_method.is_table_order)?(M(a),$(l.data.app_id),S(l.data.shop_supplier_id),U(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{Te.value=!0}),150),re.clearCartData()):uni.showToast({title:F("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:F("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:F("绑定失败"),icon:"none"})}else uni.showToast({title:F("請輸入連接埠"),icon:"none"});else uni.showToast({title:F("請輸入伺服器位址"),icon:"none"})},Ee=e=>{Te.value=!1,e&&(xe.value=e,ke.value=e.table_no)},Me=()=>{Ie(),ke.value=q().table_no,xe.value=q(),Ce.value.remark=z("machine_remark")},$e=async()=>{var e;const a={...Ce.value};if(a.ip)if(a.port)try{const l=await B(E(`${null==a?void 0:a.ip}:${a.port}`),!1);if(!xe.value)return void uni.showToast({title:F("請查找桌位"),icon:"none"});1==parseInt(l.data.cashier.order_method.is_table_order)?(M(a),$(l.data.app_id),S(l.data.shop_supplier_id),U(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{Se()}),150)):uni.showToast({title:F("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:F("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:F("绑定失败"),icon:"none"})}else uni.showToast({title:F("請輸入連接埠"),icon:"none"});else uni.showToast({title:F("請輸入伺服器位址"),icon:"none"})},Se=async()=>{if(A()===xe.value.table_id&&Ce.value.remark==z("machine_remark"))return uni.showToast({title:F("绑定成功"),icon:"none"}),void(ye.value=!1);try{const e=await L({key:z("machine_id"),table_id:xe.value.table_id,old_table_id:A(),device_remark:Ce.value.remark});R(xe.value),_e(),me(),uni.showToast({title:e.msg,icon:"none"}),ye.value=!1,Ce.value.remark!=z("machine_remark")&&G({key:"machine_remark",data:Ce.value.remark}),re.clearCartData()}catch(e){uni.showToast({title:e.msg||e.errMsg,icon:"none"})}},Ue=s(),qe=s(!1),ze=async()=>{var e,a,l,t;if(await _e(),1==parseInt(null==(e=null==ve?void 0:ve.value)?void 0:e.cashier.order_method.is_table_order))try{const e=await H({table_id:A()});if(30===e.data.status){if(1==(null==(l=e.data.order)?void 0:l.is_buffet))return qe.value=!0,he.value=!0,void la();Ae()}else 1===parseInt(e.data.tablet.is_customer_order)?Ge():null==(t=Ue.value)||t.tiCallClick("1")}catch(s){}else null==(a=Ue.value)||a.tiCallClick("1")},Ae=()=>{J(!0),n({url:"/pages/index/opentable-index"})},Le=s(!1),Re=s(!0),Ge=()=>{Re.value=1==ve.value.buffet.is_open,Le.value=!0},He=e=>{var a;Le.value=!1,e&&(null==(a=Ue.value)||a.tiCallClick("1"))},Je=s(!1),Ke=s(!1),Ne=()=>{Je.value=!0,Ke.value=!0},Oe=async e=>{if(e)try{await ee({password:e});ye.value=!0,Ce.value.remark=z("machine_remark")||"",xe.value=q(),ke.value=xe.value.table_no,Pe()}catch(a){"request:fail"==a.errMsg||"request:fail"==a.errmsg?uni.showToast({title:F("网络异常，请检查您的网络设置"),icon:"none"}):(a.errMsg||a.msg)&&uni.showToast({title:a.msg||a.errMsg,icon:"none"})}else uni.showToast({title:F("請輸入密碼"),icon:"none",duration:3e3})},Pe=()=>{(()=>{Je.value=!1,Ke.value=!1;const e=setTimeout((()=>{ye.value,clearTimeout(e)}),300)})()};s({name:"",logo:"",table_no:"",is_call_service:1,is_customer_order:1});const Qe=s(0),Ve=s(!0),We=s(!1),Xe=s(!1),Ye=s(),Ze=e=>{var a,l;Qe.value=e.detail.current,ea(null==(l=null==(a=ve.value)?void 0:a.tablet)?void 0:l.carousel,Qe.value)};s([]);const ea=(e,a)=>{const l=e[a];"video"==K(l.real_name)?setTimeout((()=>{Ye.value=l,Xe.value=!0,Ve.value=!1,We.value=!0}),50):We.value=!1},aa=()=>{var e,a,l,t;Xe.value=!1,Ve.value=!0,Qe.value==(null==(a=null==(e=ve.value)?void 0:e.tablet)?void 0:a.carousel.length)-1?(Qe.value=0,ea(null==(t=null==(l=ve.value)?void 0:l.tablet)?void 0:t.carousel,Qe.value)):Qe.value+=1},la=()=>{};return i((()=>{o()&&u()&&n({url:"/pages/index/opentable-index"})})),r((()=>{var e;null==(e=Ue.value)||e.showBuffet(!1,0)})),Ie(),c((()=>{_e(),le()?Ce.value.device_id=te():d({success:e=>{Ce.value.device_id=e.deviceId}})})),v("authorization",(e=>{be.value=!e})),(e,a)=>{const l=N(O("ti-layout-head"),ae),t=g,s=P,i=Q,n=V,r=W,c=X,d=N(O("ti-input"),ie),v=N(O("ti-layout-table-list"),oe),h=N(O("ti-modal"),ue),w=Y;return f(o)()&&!f(u)()?(_(),p(t,{key:0,class:"ti-page",onClick:a[3]||(a[3]=e=>f(D)())},{default:m((()=>[y(t,null,{default:m((()=>{var e,a;return[y(l,{ref_key:"refCallServer",ref:Ue,onDoubleLogo:we,onRefresh:ge,is_call_service:parseInt(null==(a=null==(e=f(ve))?void 0:e.tablet)?void 0:a.is_call_service)},null,8,["is_call_service"])]})),_:1}),y(t,{class:"ti-page-content"},{default:m((()=>{var e;return[y(t,{class:"ti-page-left"},{default:m((()=>[Xe.value?b("",!0):(_(),p(n,{key:0,onChange:Ze,class:"ti-swiper",current:Qe.value,autoplay:Ve.value,circular:"",interval:"30000","indicator-dots":!0,"indicator-color":"#FFFFFF80","indicator-active-color":"#FFBE00"},{default:m((()=>{var e,a;return[(_(!0),k(T,null,x(null==(a=null==(e=f(ve))?void 0:e.tablet)?void 0:a.carousel,((e,a)=>(_(),p(i,{class:"ti-swiper-item",key:a},{default:m((()=>["image"===f(K)(e.real_name)?(_(),p(s,{key:0,class:"ti-swiper-item-image",mode:"scaleToFill",src:e.file_path},null,8,["src"])):b("",!0),"video"===f(K)(e.real_name)?(_(),p(s,{key:1,class:"ti-swiper-item-image",mode:"scaleToFill",src:""})):b("",!0)])),_:2},1024)))),128))]})),_:1},8,["current","autoplay"])),Xe.value?(_(),p(n,{key:1,class:"ti-swiper"},{default:m((()=>[y(i,{class:"ti-swiper-item"},{default:m((()=>{var e;return[y(r,{onEnded:aa,class:"ti-swiper-item-video",controls:!1,"show-fullscreen-btn":!1,autoplay:!0,src:null==(e=Ye.value)?void 0:e.file_path},null,8,["src"])]})),_:1})])),_:1})):b("",!0)])),_:1}),y(t,{class:"ti-page-right"},{default:m((()=>[y(t,{class:"ti-store-box"},{default:m((()=>[y(t,{class:"ti-store-item"},{default:m((()=>{var e;return[y(s,{class:"ti-store-logo",src:null==(e=f(ve))?void 0:e.logo},null,8,["src"]),y(c,{class:"ti-store-name"},{default:m((()=>{var e;return[C(I(null==(e=f(ve))?void 0:e.name),1)]})),_:1})]})),_:1}),y(t,{class:"ti-table-item"},{default:m((()=>[y(t,{class:"ti-table-number"},{default:m((()=>{var e;return[C(I(f(F)("當前桌號："))+I(null==(e=f(fe))?void 0:e.table_no),1)]})),_:1}),y(t,{class:"ti-table-button",onClick:ze},{default:m((()=>[y(c,{class:"ti-table-button-text"},{default:m((()=>[C(I(f(F)("開始點餐")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),y(Z,{show:Le.value,title:"["+(null==(e=f(fe))?void 0:e.table_no)+"]"+f(F)("就餐人数"),placeholder:f(F)("請輸入人數"),isBuffet:Re.value,password:Ke.value,onExit:He},null,8,["show","title","placeholder","isBuffet","password"]),y(Z,{show:Je.value,title:f(F)("密碼"),password:Ke.value,placeholder:f(F)("請輸入密碼"),onExit:Pe,onConfirm:Oe},null,8,["show","title","password","placeholder"])]})),_:1}),y(h,{show:ye.value,title:f(F)("設置"),cancelText:f(F)("重置"),confirmText:f(F)("確定"),onCancel:Me,onConfirm:$e},{content:m((()=>[y(t,{class:"ti-item-input"},{default:m((()=>[y(t,{class:"ti-label-box"},{default:m((()=>[y(t,{class:"ti-label-left"},{default:m((()=>[y(c,{class:"ti-label-server"},{default:m((()=>[C(I(f(F)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),y(t,{class:"ti-input-box"},{default:m((()=>[y(d,{type:"text",clearable:!1,disabled:!0,value:Ce.value.device_id},null,8,["value"])])),_:1})])),_:1}),y(t,{class:"ti-item-input"},{default:m((()=>[y(t,{class:"ti-label-box"},{default:m((()=>[y(t,{class:"ti-label-left"},{default:m((()=>[y(c,{class:"ti-label-server"},{default:m((()=>[C(I(f(F)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),y(t,{class:"ti-input-box"},{default:m((()=>[y(d,{type:"text",value:Ce.value.remark,onInput:Fe,placeholder:f(F)("機器備註"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),y(t,{class:"ti-item-input"},{default:m((()=>[y(t,{class:"ti-label-box"},{default:m((()=>[y(t,{class:"ti-label-left"},{default:m((()=>[y(c,{class:"ti-label-server"},{default:m((()=>[C(I(f(F)("服務器連接地址")),1)])),_:1})])),_:1}),y(t,{class:"ti-label-right",onClick:Be},{default:m((()=>[y(c,{class:"ti-label-table"},{default:m((()=>[C(I(ke.value?f(F)("已選 : ")+f(j)(ke.value,19):f(F)("查找桌位")),1)])),_:1})])),_:1})])),_:1}),y(t,{class:"ti-input-box"},{default:m((()=>[y(d,{type:"text",onInput:je,value:Ce.value.ip,placeholder:f(F)("伺服器位址"),clearable:!1},null,8,["value","placeholder"]),y(t,{class:"ti-colon"},{default:m((()=>[C(":")])),_:1}),y(t,{class:"ti-input-port"},{default:m((()=>[y(d,{type:"number",onInput:De,value:Ce.value.port,placeholder:f(F)("端口"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),y(v,{show:Te.value,"onUpdate:show":a[0]||(a[0]=e=>Te.value=e),onConfirm:Ee},null,8,["show"])])),_:1})])),_:1},8,["show","title","cancelText","confirmText"]),y(h,{class:"ti-dialog-buffet",show:he.value,title:f(F)("提示"),onCancel:a[1]||(a[1]=e=>(he.value=!1,void(qe.value=!1))),onConfirm:a[2]||(a[2]=e=>Ae())},{content:m((()=>[y(t,{class:"ti-dialog-content"},{default:m((()=>[y(w,{class:"ti-buffet-scroll","scroll-y":""},{default:m((()=>[y(t,{class:"ti-buffet-message"},{default:m((()=>[y(t,{class:"ti-buffet-case"}),y(t,{class:"ti-buffet-text"},{default:m((()=>[C(I(f(F)("如有剩餘食物，可能產生額外費用")),1)])),_:1})])),_:1}),y(t,{class:"ti-buffet-message"},{default:m((()=>[y(t,{class:"ti-buffet-case"}),y(t,{class:"ti-buffet-text"},{default:m((()=>[C(I(f(F)("點菜時請考慮您的飽食量，只訂購能夠完全食用的食品數量")),1)])),_:1})])),_:1}),y(t,{class:"ti-buffet-message"},{default:m((()=>[y(t,{class:"ti-buffet-case"}),y(t,{class:"ti-buffet-text"},{default:m((()=>[C(I(f(F)("對於食品和飲品的過度點單，可能會引發額外費用")),1)])),_:1})])),_:1}),y(t,{class:"ti-buffet-message"},{default:m((()=>[y(t,{class:"ti-buffet-case"}),y(t,{class:"ti-buffet-text"},{default:m((()=>[C(I(f(F)("如有多餘食物或飲品浪費的情況，我們可能會視情況追加費用")),1)])),_:1})])),_:1}),y(t,{class:"ti-buffet-tips"},{default:m((()=>[C(I(f(F)("我们鼓励客人谨慎点菜，仅订购会食用完的食品，避免剩菜问题和额外费用")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title"]),y(h,{class:"ti-action-tips",show:be.value,title:f(F)("店鋪到期"),isCancelShow:!1,isConfirmShow:!1,content:f(F)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:m((()=>[y(t,{class:"warning-header"},{default:m((()=>[y(t,{class:"warning-image-round"},{default:m((()=>[y(s,{class:"warning-image",src:se,mode:""})])),_:1}),y(t,{class:"warning-text"},{default:m((()=>[C(I(f(F)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])])),_:1})):b("",!0)}}},[["__scopeId","data-v-1a827a7b"]]);export{re as default};
