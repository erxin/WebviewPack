import{_ as a,v as s,r as e,u as l,s as o,y as i,a8 as t,a9 as d,A as n,B as u,F as r,G as c,H as v,b as f,c as _,w as m,i as p,d as g,J as w,K as h,L as b,e as x,M as y,N as k,O as C,$ as I,S as j,Q as F,Y as K,aa as S,Z as U,j as V,k as A,q as B,a0 as E,a1 as $,a3 as q,a5 as z,a4 as G,a6 as H,a7 as J}from"./index-221e2336.js";const L=a({__name:"index",setup(a){const L=s(),M=e("");M.value=window.config().area||"ja";const N=e(!1),O=l(),{userInfo:P,cloudBase:Q}=o(O),T=e(!1),Y=e({user_name:"",password:"",device_id:""}),Z=i((()=>!Y.value.password)),D=async()=>{var a;const s={...Y.value};if(!s.password)return uni.showToast({title:I("输入登录密码"),icon:"none"});s.user_name=null==(a=P.value)?void 0:a.account;try{T.value=!0;const a=await K(s);a.data.token&&(S(),U(a.data.token),O.getUserInfo(!0),V({title:I("加载中...")}),A({url:"/pages/index/index"}))}catch(e){}finally{T.value=!1}},R=a=>{Y.value.password+=a},W=()=>{Y.value.password=""},X=e(!1);return t("authorization",(a=>{X.value=!a,d(!0)})),n((()=>{var a;N.value=(null==(a=u())?void 0:a.is_cloud_deploy)||!1,r()?(L.showAd(),Y.value.device_id=c()):v({success:a=>{Y.value.device_id=a.deviceId}})})),(a,s)=>{const e=B,l=p,o=E($("ti-image"),q),i=E($("ti-input"),z),t=E($("ti-button"),G),d=E($("ti-keyboard"),H),n=E($("ti-modal"),J);return f(),_(l,{class:"ti-login"},{default:m((()=>[g(l,{class:"ti-login-img"},{default:m((()=>[g(e,{src:w,mode:"widthFix"})])),_:1}),g(l,{class:"ti-login-box"},{default:m((()=>[g(l,{class:"ti-login-form"},{default:m((()=>[g(l,{class:"ti-form-box"},{default:m((()=>[g(l,{class:"ti-form-head"},{default:m((()=>[g(l,{class:"ti-login-logo"},{default:m((()=>{var a,s;return[g(o,{src:(null==(s=null==(a=h(Q))?void 0:a.base)?void 0:s.brand_logo_long)||"11"},{default:m((()=>["ja"==M.value?(f(),_(e,{key:0,class:"image-placeholder",src:b,mode:"widthFix"})):x("",!0),"th"==M.value?(f(),_(e,{key:1,class:"image-placeholder",src:y,mode:"widthFix"})):x("",!0)])),_:1},8,["src"])]})),_:1}),g(l,{class:"ti-login-title"},{default:m((()=>[k(C(h(I)("系统已锁定，请输入登录密码解锁")),1)])),_:1})])),_:1}),g(l,{class:"ti-form-username"},{default:m((()=>{var a;return[k(C(h(I)("当前用户："))+C(null==(a=h(P))?void 0:a.account),1)]})),_:1}),g(l,{class:"ti-form-password"},{default:m((()=>[g(i,{modelValue:Y.value.password,"onUpdate:modelValue":s[0]||(s[0]=a=>Y.value.password=a),popKeyboard:N.value,disabled:!N.value,prefixIcon:"icon-lock",placeholder:h(I)("請輸入登錄密碼"),focus:!0,password:!0,regex:N.value?null:/^\d+$/},null,8,["modelValue","popKeyboard","disabled","placeholder","regex"])])),_:1}),g(l,{class:"ti-form-btn"},{default:m((()=>[g(t,{type:"primary",loading:T.value,disabled:Z.value,onClick:D},{default:m((()=>[k(C(h(I)("确定")),1)])),_:1},8,["loading","disabled"])])),_:1})])),_:1}),N.value?x("",!0):(f(),_(l,{key:0,class:"ti-form-keyboard"},{default:m((()=>[g(d,{isExit:!1,isExitConfirm:!0,isPrimary:!1,onInput:R,onClear:W,onConfirm:D})])),_:1}))])),_:1})])),_:1}),g(l,{class:"ti-language-box"},{default:m((()=>[g(j)])),_:1}),g(n,{class:"ti-action-tips",show:X.value,"onUpdate:show":s[1]||(s[1]=a=>X.value=a),content:h(I)("店铺状态已到期，如需使用，请联系销售代表"),isConfirmShow:!1,isCancelShow:!1},{title:m((()=>[g(l,{class:"warning-header"},{default:m((()=>[g(l,{class:"warning-image-round"},{default:m((()=>[g(e,{class:"warning-image",src:F})])),_:1}),g(l,{class:"warning-title"},{default:m((()=>[k(C(h(I)("店铺到期")),1)])),_:1})])),_:1})])),_:1},8,["show","content"])])),_:1})}}},[["__scopeId","data-v-0bb7c396"]]);export{L as default};
