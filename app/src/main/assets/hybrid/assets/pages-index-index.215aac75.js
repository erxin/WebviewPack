import{u as e,a,s as l,r as t,o as s,i,b as o,c as u,d as n,e as r,g as c,f as d,h as v,$ as f,j as _,k as p,l as m,w as b,m as h,n as w,p as g,q as y,t as k,v as x,x as T,F as C,y as I,z as F,A as j,B as E,C as $,D as B,E as D,G as M,H as S,I as U,J as z,K as A,L,M as R,N as q,O as G,P as H,Q as J,R as K,S as N,T as O,U as P,V as Q,W as V,X as W,Y as X,Z as Y,_ as Z}from"./index-cc3c4136.js";import{D as ee,v as ae,_ as le}from"./verify.063b340b.js";import{i as te,g as se,_ as ie,a as oe,b as ue,c as ne}from"./platform.3cd59a7f.js";import{_ as re}from"./ti-button.b35f9005.js";import"./components-ti-keyboard-ti-keyboard.40adf60b.js";const ce=re({__name:"index",setup(c){const re=e(),ce=a(),{userInfo:de}=l(re),{tableInfo:ve}=l(ce),{getUserInfo:fe,setUserInfo:_e}=e(),{getTableInfoAsync:pe}=a(),me=t(!1),be=t(!1);pe();const he=t(0),we=t(!0),ge=t(!1),ye=t(!1),ke=t(),xe=e=>{var a,l;he.value=e.detail.current,Te(null==(l=null==(a=de.value)?void 0:a.tablet)?void 0:l.carousel,he.value)};t([]);const Te=(e,a)=>{const l=e[a];"video"==B(l.real_name)?setTimeout((()=>{ke.value=l,ye.value=!0,we.value=!1,ge.value=!0}),50):ge.value=!1},Ce=()=>{var e,a,l,t;ye.value=!1,we.value=!0,he.value==(null==(a=null==(e=de.value)?void 0:e.tablet)?void 0:a.carousel.length)-1?(he.value=0,Te(null==(t=null==(l=de.value)?void 0:l.tablet)?void 0:t.carousel,he.value)):he.value+=1},Ie=()=>{Xe()},Fe=()=>{u({url:"/pages/index/index"})},je=t(),Ee=t("");t([]);const $e=t(),Be=t(!1),De=t({ip:"",port:"",device_id:"",remark:""}),Me=()=>{const e=w();De.value.ip=(null==e?void 0:e.ip)||g()||"127.0.0.1",De.value.port=(null==e?void 0:e.port)||"8080"},Se=e=>{De.value.remark=e},Ue=e=>{De.value.ip=e},ze=e=>{De.value.port=e},Ae=async()=>{var e;const a={...De.value};if(a.ip)if(a.port)try{const l=await D(M(`${null==a?void 0:a.ip}:${a.port}`),!1);1==parseInt(l.data.tablet.is_customer_order)?(S(a),U(l.data.app_id),z(l.data.shop_supplier_id),A(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{Be.value=!0}),150)):uni.showToast({title:j("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:j("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:j("绑定失败"),icon:"none"})}else uni.showToast({title:j("請輸入連接埠"),icon:"none"});else uni.showToast({title:j("請輸入伺服器位址"),icon:"none"})},Le=e=>{Be.value=!1,e&&($e.value=e,Ee.value=e.table_no)},Re=()=>{Me(),Ee.value=L().table_no,$e.value=L(),De.value.remark=R("machine_remark")},qe=async()=>{var e;const a={...De.value};if(a.ip)if(a.port)try{const l=await D(M(`${null==a?void 0:a.ip}:${a.port}`),!1);if(!$e.value)return void uni.showToast({title:j("請查找桌位"),icon:"none"});1==parseInt(l.data.tablet.is_customer_order)?(S(a),U(l.data.app_id),z(l.data.shop_supplier_id),A(null==(e=l.data)?void 0:e.currency),setTimeout((()=>{Ge()}),150)):uni.showToast({title:j("桌台用餐方式已关闭，请联系管理员"),icon:"none"})}catch(l){-102==l.code?uni.showToast({title:j("綁定失敗,該商家授權已過期"),icon:"none"}):uni.showToast({title:j("绑定失败"),icon:"none"})}else uni.showToast({title:j("請輸入連接埠"),icon:"none"});else uni.showToast({title:j("請輸入伺服器位址"),icon:"none"})},Ge=async()=>{if(q()===$e.value.table_id&&De.value.remark==R("machine_remark"))return uni.showToast({title:j("绑定成功"),icon:"none"}),void(je.value=!1);try{const e=await G({key:R("machine_id"),table_id:$e.value.table_id,old_table_id:q(),device_remark:De.value.remark});H($e.value),fe(),pe(),uni.showToast({title:e.msg,icon:"none"}),je.value=!1,De.value.remark!=R("machine_remark")&&J({key:"machine_remark",data:De.value.remark})}catch(e){uni.showToast({title:e.msg||e.errMsg,icon:"none"})}},He=t(),Je=t(!1),Ke=async()=>{var e,a;fe();try{const l=await K({table_id:q()});if(1===parseInt(l.data.tablet.is_customer_order))if(10===l.data.status)Pe();else{if(1==(null==(e=l.data.order)?void 0:e.is_buffet))return Je.value=!0,void(be.value=!0);Ne()}else null==(a=He.value)||a.tiCallClick("1")}catch(l){}},Ne=()=>{N(!0),u({url:"/pages/index/opentable-index"})},Oe=t(!1),Pe=()=>{Oe.value=!0},Qe=e=>{var a;Oe.value=!1,e&&(null==(a=He.value)||a.tiCallClick("1"))},Ve=t(!1),We=t(!1),Xe=()=>{Ve.value=!0,We.value=!0},Ye=async e=>{if(e)try{await ae({password:e});je.value=!0,De.value.remark=R("machine_remark")||"",$e.value=L(),Ee.value=$e.value.table_no,Ze()}catch(a){(a.errMsg||a.msg)&&uni.showToast({title:a.msg||a.errMsg,icon:"none"})}else uni.showToast({title:j("請輸入密碼"),icon:"none",duration:3e3})},Ze=()=>{(()=>{Ve.value=!1,We.value=!1;const e=setTimeout((()=>{je.value,clearTimeout(e)}),300)})()};return t({name:"",logo:"",table_no:"",is_call_service:1,is_customer_order:1}),s((()=>{i()&&o()&&u({url:"/pages/index/opentable-index"})})),n((()=>{var e;null==(e=He.value)||e.showBuffet(!1,0)})),Me(),r((()=>{d||(te()?De.value.device_id=se():v({success:e=>{De.value.device_id=e.deviceId}}))})),f("authorization",(e=>{me.value=!e})),(e,a)=>{const l=O(P("ti-layout-head"),le),t=y,s=Q,u=V,n=W,r=X,c=Y,d=O(P("ti-input"),oe),v=O(P("ti-layout-table-list"),ue),f=O(P("ti-modal"),ne),w=Z;return _(i)()&&!_(o)()?(p(),m(t,{key:0,class:"ti-page",onClick:a[3]||(a[3]=e=>_($)())},{default:b((()=>[k(t,null,{default:b((()=>{var e,a;return[k(l,{ref_key:"refCallServer",ref:He,onDoubleLogo:Ie,onRefresh:Fe,is_call_service:parseInt(null==(a=null==(e=_(de))?void 0:e.tablet)?void 0:a.is_call_service)},null,8,["is_call_service"])]})),_:1}),k(t,{class:"ti-page-content"},{default:b((()=>{var e;return[k(t,{class:"ti-page-left"},{default:b((()=>[ye.value?h("",!0):(p(),m(n,{key:0,onChange:xe,class:"ti-swiper",current:he.value,autoplay:we.value,circular:"",interval:"30000","indicator-dots":!0,"indicator-color":"#FFFFFF80","indicator-active-color":"#FFBE00"},{default:b((()=>{var e,a;return[(p(!0),x(C,null,T(null==(a=null==(e=_(de))?void 0:e.tablet)?void 0:a.carousel,((e,a)=>(p(),m(u,{class:"ti-swiper-item",key:a},{default:b((()=>["image"===_(B)(e.real_name)?(p(),m(s,{key:0,class:"ti-swiper-item-image",mode:"scaleToFill",src:e.file_path},null,8,["src"])):h("",!0),"video"===_(B)(e.real_name)?(p(),m(s,{key:1,class:"ti-swiper-item-image",mode:"scaleToFill",src:""})):h("",!0)])),_:2},1024)))),128))]})),_:1},8,["current","autoplay"])),ye.value?(p(),m(n,{key:1,class:"ti-swiper"},{default:b((()=>[k(u,{class:"ti-swiper-item"},{default:b((()=>{var e;return[k(r,{onEnded:Ce,class:"ti-swiper-item-video",controls:!1,"show-fullscreen-btn":!1,autoplay:!0,src:null==(e=ke.value)?void 0:e.file_path},null,8,["src"])]})),_:1})])),_:1})):h("",!0)])),_:1}),k(t,{class:"ti-page-right"},{default:b((()=>[k(t,{class:"ti-store-box"},{default:b((()=>[k(t,{class:"ti-store-item"},{default:b((()=>{var e;return[k(s,{class:"ti-store-logo",src:null==(e=_(de))?void 0:e.logo},null,8,["src"]),k(c,{class:"ti-store-name"},{default:b((()=>{var e;return[I(F(null==(e=_(de))?void 0:e.name),1)]})),_:1})]})),_:1}),k(t,{class:"ti-table-item"},{default:b((()=>[k(t,{class:"ti-table-number"},{default:b((()=>{var e;return[I(F(_(j)("當前桌號："))+F(null==(e=_(ve))?void 0:e.table_no),1)]})),_:1}),k(t,{class:"ti-table-button",onClick:Ke},{default:b((()=>[k(c,{class:"ti-table-button-text"},{default:b((()=>[I(F(_(j)("開始點餐")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),k(ee,{show:Oe.value,title:"["+(null==(e=_(ve))?void 0:e.table_no)+"]"+_(j)("就餐人数"),placeholder:_(j)("請輸入人數"),isBuffet:!0,password:We.value,onExit:Qe},null,8,["show","title","placeholder","password"]),k(ee,{show:Ve.value,title:_(j)("密碼"),password:We.value,placeholder:_(j)("請輸入密碼"),onExit:Ze,onConfirm:Ye},null,8,["show","title","password","placeholder"])]})),_:1}),k(f,{show:je.value,title:_(j)("設置"),cancelText:_(j)("重置"),confirmText:_(j)("確定"),onCancel:Re,onConfirm:qe},{content:b((()=>[k(t,{class:"ti-item-input"},{default:b((()=>[k(t,{class:"ti-label-box"},{default:b((()=>[k(t,{class:"ti-label-left"},{default:b((()=>[k(c,{class:"ti-label-server"},{default:b((()=>[I(F(_(j)("當前機器ID")),1)])),_:1})])),_:1})])),_:1}),k(t,{class:"ti-input-box"},{default:b((()=>[k(d,{type:"text",clearable:!1,disabled:!0,value:De.value.device_id},null,8,["value"])])),_:1})])),_:1}),k(t,{class:"ti-item-input"},{default:b((()=>[k(t,{class:"ti-label-box"},{default:b((()=>[k(t,{class:"ti-label-left"},{default:b((()=>[k(c,{class:"ti-label-server"},{default:b((()=>[I(F(_(j)("機器備註(非必填)")),1)])),_:1})])),_:1})])),_:1}),k(t,{class:"ti-input-box"},{default:b((()=>[k(d,{type:"text",value:De.value.remark,onInput:Se,placeholder:_(j)("機器備註"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),k(t,{class:"ti-item-input"},{default:b((()=>[k(t,{class:"ti-label-box"},{default:b((()=>[k(t,{class:"ti-label-left"},{default:b((()=>[k(c,{class:"ti-label-server"},{default:b((()=>[I(F(_(j)("服務器連接地址")),1)])),_:1})])),_:1}),k(t,{class:"ti-label-right",onClick:Ae},{default:b((()=>[k(c,{class:"ti-label-table"},{default:b((()=>[I(F(Ee.value?_(j)("已選 : ")+_(E)(Ee.value,19):_(j)("查找桌位")),1)])),_:1})])),_:1})])),_:1}),k(t,{class:"ti-input-box"},{default:b((()=>[k(d,{type:"text",onInput:Ue,value:De.value.ip,placeholder:_(j)("伺服器位址"),clearable:!1},null,8,["value","placeholder"]),k(t,{class:"ti-colon"},{default:b((()=>[I(":")])),_:1}),k(t,{class:"ti-input-port"},{default:b((()=>[k(d,{type:"number",onInput:ze,value:De.value.port,placeholder:_(j)("端口"),clearable:!1},null,8,["value","placeholder"])])),_:1})])),_:1}),k(v,{show:Be.value,"onUpdate:show":a[0]||(a[0]=e=>Be.value=e),onConfirm:Le},null,8,["show"])])),_:1})])),_:1},8,["show","title","cancelText","confirmText"]),k(f,{class:"ti-dialog-buffet",show:be.value,title:_(j)("提示"),onCancel:a[1]||(a[1]=e=>(be.value=!1,void(Je.value=!1))),onConfirm:a[2]||(a[2]=e=>Ne())},{content:b((()=>[k(t,{class:"ti-dialog-content"},{default:b((()=>[k(w,{class:"ti-buffet-scroll","scroll-y":""},{default:b((()=>[k(t,{class:"ti-buffet-message"},{default:b((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:b((()=>[I(F(_(j)("如有剩餘食物，可能產生額外費用")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-message"},{default:b((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:b((()=>[I(F(_(j)("點菜時請考慮您的飽食量，只訂購能夠完全食用的食品數量")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-message"},{default:b((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:b((()=>[I(F(_(j)("對於食品和飲品的過度點單，可能會引發額外費用")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-message"},{default:b((()=>[k(t,{class:"ti-buffet-case"}),k(t,{class:"ti-buffet-text"},{default:b((()=>[I(F(_(j)("如有多餘食物或飲品浪費的情況，我們可能會視情況追加費用")),1)])),_:1})])),_:1}),k(t,{class:"ti-buffet-tips"},{default:b((()=>[I(F(_(j)("我们鼓励客人谨慎点菜，仅订购会食用完的食品，避免剩菜问题和额外费用")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title"]),k(f,{class:"ti-action-tips",show:me.value,title:_(j)("店鋪到期"),isCancelShow:!1,isConfirmShow:!1,content:_(j)("店鋪狀態已到期，如需使用，請聯繫銷售代表")},{title:b((()=>[k(t,{class:"warning-header"},{default:b((()=>[k(t,{class:"warning-image-round"},{default:b((()=>[k(s,{class:"warning-image",src:ie,mode:""})])),_:1}),k(t,{class:"warning-text"},{default:b((()=>[I(F(_(j)("店鋪到期")),1)])),_:1})])),_:1})])),_:1},8,["show","title","content"])])),_:1})):h("",!0)}}},[["__scopeId","data-v-5d660bb3"]]);export{ce as default};
