import{_ as e,t as a,r as l,v as s,x as o,u as i,s as u,y as t,z as d,A as n,B as r,C as c,D as v,E as p,F as _,G as f,H as m,I as h,b as g,c as w,w as b,i as y,d as x,J as k,K as V,L as C,e as U,M as I,N as T,O as F,$,S as K,P as j,Q as B,R as L,T as S,U as D,V as E,W as P,X as R,Y as q,Z as z,k as A,q as G,a0 as H,a1 as J,a2 as M,a3 as N,a4 as O,a5 as Q,a6 as W,a7 as X}from"./index-e5033089.js";const Y=e({__name:"index",setup(e){const Y=a(),Z=l(!1),ee=s(),ae=o(),le=i(),{cloudBase:se}=u(le),oe=l(!0),ie=l(!1),ue=l(!1),te=l({user_name:"",password:"",device_id:""}),de=t((()=>!te.value.user_name||!te.value.password)),ne=l(!1),re=l(!0),ce=l(!1),ve=l({ip:"",port:"",device_id:"",device_remark:""}),pe=l(!1),_e=l(""),fe=l("");fe.value=window.config().area||"ja",d((()=>re.value),(()=>{re.value&&me()})),n((()=>{var e,a;Z.value=(null==(e=r())?void 0:e.is_cloud_deploy)||!1,(null==(a=r())?void 0:a.api_url)&&c()&&v()&&(re.value=!1),p().clearRecieve(),me(),_()?(ve.value.device_id=f(),te.value.device_id=f()):m({success:e=>{ve.value.device_id=e.deviceId,te.value.device_id=e.deviceId}})}));const me=()=>{const e=r();ve.value.ip=(null==e?void 0:e.ip)||h()||"127.0.0.1",ve.value.port=(null==e?void 0:e.port)||"8080"},he=async()=>{var e,a,l,s,o,i,u,t,d,n,c,v={...ve.value};if(!v.ip)return uni.showToast({title:$("请输入服务器地址"),icon:"none"});if(!v.port)return uni.showToast({title:$("请输入端口"),icon:"none"});try{ne.value=!0;const p=await L(S(`${null==v?void 0:v.ip}:${v.port}`),{key:ve.value.device_id,address:ve.value.ip,port:ve.value.port,device_remark:ve.value.device_remark});(null==(a=null==(e=p.data)?void 0:e.shop)?void 0:a.app_id)&&(null==(s=null==(l=p.data)?void 0:l.shop)?void 0:s.shop_supplier_id)?(re.value=!1,uni.showToast({title:$("绑定成功"),icon:"none"}),D(null==(i=null==(o=p.data)?void 0:o.shop)?void 0:i.app_id),E(null==(t=null==(u=p.data)?void 0:u.shop)?void 0:t.shop_supplier_id),v.is_cloud_deploy=null==(d=p.data)?void 0:d.is_cloud_deploy,Z.value=null==(n=p.data)?void 0:n.is_cloud_deploy,P(v),le.setCloudBase(null==(c=p.data)?void 0:c.cloud_basic),setTimeout((()=>{var e;r()&&R(`${null==(e=r())?void 0:e.api_url}/cashier-mini`)}),100),ae.getList()):uni.showToast({title:$("绑定失败"),icon:"none"})}catch(p){0==p.code?(_e.value=p.msg,pe.value=!0):-102==p.code?ce.value=!0:uni.showToast({title:p.msg||$("绑定失败"),icon:"none"})}finally{ne.value=!1}},ge=async()=>{var e;if(!te.value.user_name)return uni.showToast({title:$("請輸入賬號"),icon:"none"});if(!te.value.password)return uni.showToast({title:$("输入登录密码"),icon:"none"});try{ue.value=!0;const e=await q(te.value);e.data.token&&(z(e.data.token),e.data.base_info?le.setUserInfo(e.data.base_info):await le.getUserInfo(!0),await(null==Y?void 0:Y.getCategory(!0,!0)),ee.getList(),A({url:"/pages/index/index"}))}catch(a){-102==a.code?ce.value=!0:uni.showToast({title:a.msg,icon:"none"}),(null==(e=r())?void 0:e.api_url)||(re.value=!0)}finally{ue.value=!1}},we=e=>{e&&(1==oe.value&&(te.value.user_name+=e),1==ie.value&&(te.value.password+=e))},be=e=>{oe.value="username"===e,ie.value="password"===e},ye=()=>{1==oe.value&&(te.value.user_name=""),1==ie.value&&(te.value.password="")},xe=()=>{re.value=!re.value};return(e,a)=>{const l=G,s=y,o=H(J("ti-image"),N),i=M,u=H(J("ti-button"),O),t=H(J("ti-input"),Q),d=H(J("ti-keyboard"),W),n=H(J("ti-modal"),X);return g(),w(s,{class:"ti-login"},{default:b((()=>[x(s,{class:"ti-login-img"},{default:b((()=>[x(l,{src:k,mode:"widthFix"})])),_:1}),x(s,{class:"ti-login-box"},{default:b((()=>[re.value?(g(),w(s,{key:0,class:"ti-serve-box"},{default:b((()=>[x(s,{class:"ti-serve-head"},{default:b((()=>[x(s,{class:"ti-serve-logo"},{default:b((()=>{var e,a;return[x(o,{src:(null==(a=null==(e=V(se))?void 0:e.base)?void 0:a.brand_logo_long)||"11"},{default:b((()=>["ja"==fe.value?(g(),w(l,{key:0,class:"image-placeholder",src:C,mode:"widthFix"})):U("",!0),"th"==fe.value?(g(),w(l,{key:1,class:"image-placeholder",src:I,mode:"widthFix"})):U("",!0)])),_:1},8,["src"])]})),_:1}),x(s,{class:"ti-serve-title"},{default:b((()=>[T(F(V($)("收银机")),1)])),_:1})])),_:1}),x(s,{class:"ti-serve-input-box"},{default:b((()=>[x(s,{class:"ti-serve-label"},{default:b((()=>[T(F(V($)("当前机器ID")),1)])),_:1}),x(s,{class:"ti-serve-input"},{default:b((()=>[x(s,{class:"ti-serve-ip disable"},{default:b((()=>[x(i,{modelValue:ve.value.device_id,"onUpdate:modelValue":a[0]||(a[0]=e=>ve.value.device_id=e),type:"text",disabled:!0,placeholder:V($)("服务器地址")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1}),x(s,{class:"ti-serve-input-box"},{default:b((()=>[x(s,{class:"ti-serve-label"},{default:b((()=>[T(F(V($)("机器备注 (非必填)")),1)])),_:1}),x(s,{class:"ti-serve-input"},{default:b((()=>[x(s,{class:"ti-serve-ip"},{default:b((()=>[x(i,{modelValue:ve.value.device_remark,"onUpdate:modelValue":a[1]||(a[1]=e=>ve.value.device_remark=e),maxlength:100,type:"text",placeholder:V($)("机器备注")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1}),x(s,{class:"ti-serve-input-box"},{default:b((()=>[x(s,{class:"ti-serve-label"},{default:b((()=>[T(F(V($)("服务器连接地址")),1)])),_:1}),x(s,{class:"ti-serve-input"},{default:b((()=>[x(s,{class:"ti-serve-ip"},{default:b((()=>[x(i,{modelValue:ve.value.ip,"onUpdate:modelValue":a[2]||(a[2]=e=>ve.value.ip=e),type:"text",placeholder:V($)("服务器地址")},null,8,["modelValue","placeholder"])])),_:1}),x(s,{class:"ti-serve-colon"},{default:b((()=>[T(":")])),_:1}),x(s,{class:"ti-serve-port"},{default:b((()=>[x(i,{modelValue:ve.value.port,"onUpdate:modelValue":a[3]||(a[3]=e=>ve.value.port=e),type:"number",placeholder:V($)("端口")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1}),x(s,{class:"ti-serve-btn"},{default:b((()=>[x(u,{onClick:me},{default:b((()=>[T(F(V($)("重置")),1)])),_:1}),x(u,{loading:ne.value,type:"primary",onClick:he},{default:b((()=>[T(F(V($)("確定")),1)])),_:1},8,["loading"])])),_:1})])),_:1})):(g(),w(s,{key:1,class:"ti-login-form"},{default:b((()=>[x(s,{class:"ti-form-box"},{default:b((()=>[x(s,{class:"ti-form-head"},{default:b((()=>[x(s,{class:"ti-login-logo"},{default:b((()=>{var e,a;return[x(o,{src:(null==(a=null==(e=V(se))?void 0:e.base)?void 0:a.brand_logo_long)||"11"},{default:b((()=>["ja"==fe.value?(g(),w(l,{key:0,class:"image-placeholder",src:C,mode:"widthFix"})):U("",!0),"th"==fe.value?(g(),w(l,{key:1,class:"image-placeholder",src:I,mode:"widthFix"})):U("",!0)])),_:1},8,["src"])]})),_:1}),x(s,{class:"ti-login-title"},{default:b((()=>[T(F(V($)("收银机")),1)])),_:1})])),_:1}),x(s,{class:"ti-form-username"},{default:b((()=>[x(t,{modelValue:te.value.user_name,"onUpdate:modelValue":a[4]||(a[4]=e=>te.value.user_name=e),popKeyboard:Z.value,prefixIcon:"icon-user",placeholder:V($)("請輸入用戶名"),focus:oe.value,disabled:!Z.value,autoFucus:Z.value,regex:Z.value?null:/^\d+$/,onClick:a[5]||(a[5]=e=>be("username"))},null,8,["modelValue","popKeyboard","placeholder","focus","disabled","autoFucus","regex"])])),_:1}),x(s,{class:"ti-form-password"},{default:b((()=>[x(t,{modelValue:te.value.password,"onUpdate:modelValue":a[6]||(a[6]=e=>te.value.password=e),popKeyboard:Z.value,prefixIcon:"icon-lock",placeholder:V($)("請輸入登錄密碼"),focus:ie.value,password:!0,disabled:!Z.value,regex:Z.value?null:/^\d+$/,onClick:a[7]||(a[7]=e=>be("password"))},null,8,["modelValue","popKeyboard","placeholder","focus","disabled","regex"])])),_:1}),x(s,{class:"ti-form-btn"},{default:b((()=>[x(u,{type:"primary",loading:ue.value,disabled:de.value,onClick:ge},{default:b((()=>[T(F(V($)("登錄")),1)])),_:1},8,["loading","disabled"])])),_:1}),x(s,{class:"ti-form-link",onClick:xe},{default:b((()=>[T(F(V($)("更换服务器")),1)])),_:1})])),_:1}),Z.value?U("",!0):(g(),w(s,{key:0,class:"ti-form-keyboard"},{default:b((()=>[x(d,{isExit:!1,isPrimary:!1,onInput:we,onClear:ye})])),_:1}))])),_:1}))])),_:1}),x(s,{class:"ti-language-box"},{default:b((()=>[x(K)])),_:1}),x(n,{class:"ti-action-tips",show:pe.value,"onUpdate:show":a[8]||(a[8]=e=>pe.value=e),isCancelShow:!1,content:_e.value,onConfirm:a[9]||(a[9]=e=>pe.value=!1)},{title:b((()=>[x(s,{class:"warning-header"},{default:b((()=>[x(s,{class:"warning-image-round"},{default:b((()=>[x(l,{class:"warning-image",src:j,mode:"aspectFit"})])),_:1}),x(s,{class:"warning-title"},{default:b((()=>[T(F(V($)("绑定失败")),1)])),_:1})])),_:1})])),_:1},8,["show","content"]),x(n,{class:"ti-action-tips",show:ce.value,"onUpdate:show":a[10]||(a[10]=e=>ce.value=e),content:V($)("店铺状态已到期，如需使用，请联系销售代表"),isCancelShow:!1,onConfirm:a[11]||(a[11]=e=>ce.value=!1)},{title:b((()=>[x(s,{class:"warning-header"},{default:b((()=>[x(s,{class:"warning-image-round"},{default:b((()=>[x(l,{class:"warning-image",src:B})])),_:1}),x(s,{class:"warning-title"},{default:b((()=>[T(F(V($)("店铺到期")),1)])),_:1})])),_:1})])),_:1},8,["show","content"])])),_:1})}}},[["__scopeId","data-v-4582c095"]]);export{Y as default};
