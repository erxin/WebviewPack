import{aG as e,aH as l,a8 as a,aI as t,aJ as s,aK as o,aL as n,aM as u,aN as i,aO as c,aP as f,k as d,l as r,w as _,t as p,y as v,z as A,m,T as b,X as g,q as y,ao as h,a as w,s as x,b as C,r as B,a1 as k,a2 as I,$ as U,g as S,R as E,S as T,j as Q,A as D,B as F,a3 as M,aC as Y,aD as R,C as N,d as O,av as K,K as j,aQ as X,aR as G,ac as P,a5 as Z,an as H,aS as L,ah as z,ak as q,am as W,aT as V,v as J,F as $,x as ee,ar as le,as as ae,aB as te,M as se,aU as oe,Y as ne,aV as ue}from"./index-e86eaeef.js";import{d as ie,e as ce,c as fe}from"./platform.a585759a.js";import{_ as de}from"./ti-button.30993252.js";import re from"./components-ti-keyboard-ti-keyboard.40ce9f0c.js";var _e=Date.now;var pe=function(){try{var l=e(Object,"defineProperty");return l({},"",{}),l}catch(a){}}();const ve=pe;var Ae=ve?function(e,l){return ve(e,"toString",{configurable:!0,enumerable:!1,value:(a=l,function(){return a}),writable:!0});var a}:l;var me,be,ge;const ye=(me=Ae,be=0,ge=0,function(){var e=_e(),l=16-(e-ge);if(ge=e,l>0){if(++be>=800)return arguments[0]}else be=0;return me.apply(void 0,arguments)});var he=Math.max;function we(e,l,n){if(!a(n))return!1;var u=typeof l;return!!("number"==u?t(n)&&s(l,n.length):"string"==u&&l in n)&&o(n[l],e)}var xe=n?n.isConcatSpreadable:void 0;function Ce(e){return u(e)||i(e)||!!(xe&&e&&e[xe])}function Be(e,l,a,t,s){var o=-1,n=e.length;for(a||(a=Ce),s||(s=[]);++o<n;){var u=e[o];l>0&&a(u)?l>1?Be(u,l-1,a,t,s):c(s,u):t||(s[s.length]=u)}return s}var ke=function(e,a){return ye(function(e,l,a){return l=he(void 0===l?e.length-1:l,0),function(){for(var t=arguments,s=-1,o=he(t.length-l,0),n=Array(o);++s<o;)n[s]=t[l+s];s=-1;for(var u=Array(l+1);++s<l;)u[s]=t[s];return u[l]=a(n),function(e,l,a){switch(a.length){case 0:return e.call(l);case 1:return e.call(l,a[0]);case 2:return e.call(l,a[0],a[1]);case 3:return e.call(l,a[0],a[1],a[2])}return e.apply(l,a)}(e,this,u)}}(e,a,l),e+"")}((function(e,l){if(null==e)return[];var a=l.length;return a>1&&we(e,l[0],l[1])?l=[]:a>2&&we(l[0],l[1],l[2])&&(l=[l[0]]),f(e,Be(l,1),[])}));const Ie=ke,Ue=""+new URL("notification-yellow-5a0f90af.svg",import.meta.url).href,Se=de({__name:"ti-call-toast",props:{title:{type:String,default:null},showTips:{type:Boolean,default:!1}},setup(e){const l=e;return(e,a)=>{const t=b,s=g,o=y;return l.showTips?(d(),r(o,{key:0,class:"ti-toast"},{default:_((()=>[p(t,{class:"ti-toast-image",src:Ue}),p(s,{class:"ti-toast-title"},{default:_((()=>[v(A(l.title),1)])),_:1})])),_:1})):m("",!0)}}},[["__scopeId","data-v-9c80bb27"]]);const Ee=de({__name:"ti-layout-head",props:{isPay:{type:Boolean,default:!1},isTableNo:{type:Boolean,default:!1},is_call_service:{type:Number,default:1}},emits:["doubleLogo"],setup(e,{expose:l,emit:a}){const t=w(),{userInfo:s}=x(t),o=C(),{tableInfo:n}=x(o),u=B(!1),i=B(!0),c=B(!1),f=B(0),P=B(),Z=B(!1),H=B(0),L=e,z=B(k[I()]),q=()=>{z.value=k[I()]},W=a,V=()=>{W("doubleLogo")},J=async()=>{null==t||t.getUserInfo(!0),null==o||o.getTableInfoAsync(!0),O()&&K("goodsListRefresh")};U("change",(()=>{z.value=k[I()]}));const $=()=>{P.value.isShow()?P.value.close():P.value.open()},ee=B(!1),le=e=>{ee.value||(ee.value=!0,setTimeout((()=>{ee.value=!1}),2e3),oe(e))},ae=B(!1),te=B({table_id:"",call_type:"",shop_supplier_id:""}),se=B(),oe=async e=>{se.value=j(),te.value.table_id=se.value.table_id,te.value.call_type=e,te.value.shop_supplier_id=se.value.shop_supplier_id;try{u.value=!0;await(l=te.value,h("call.call/call",l));ae.value=!0,setTimeout((()=>{ae.value=!1}),3e3)}catch(a){}finally{u.value=!1}var l},ne=B(!1),ue=B(0),ce=e=>{e.cache_id!==H.value?(H.value=e.cache_id,Z.value=-1==parseInt(e.buffet.buffet_expired_time),c.value=!0,0!=e.buffet.remain_continue_time?ne.value=!0:ne.value=!1,f.value=e.buffet.buffet_remaining_time,ue.value=e.buffet.buffet_order_remaining_time,clearInterval(de),de=setInterval((()=>{f.value>0?(f.value--,fe.value=pe(f.value)):(fe.value="00:00:00",clearInterval(de))}),1e3),clearInterval(_e),_e=setInterval((()=>{ue.value>0?(ue.value--,re.value=pe(ue.value)):(re.value="00:00:00",clearInterval(_e))}),1e3)):0!=e.buffet.remain_continue_time?(ne.value=!0,ue.value=e.buffet.buffet_order_remaining_time):ne.value=!1},fe=B("");let de;const re=B("");let _e;const pe=e=>{let l=Math.floor(e/3600),a=Math.floor(e%3600/60),t=e%60;return`${ve(l)}:${ve(a)}:${ve(t)}`},ve=e=>String(e).padStart(2,"0"),Ae=B(!0);return S((()=>{var e;(async()=>{const e=X();if("pages/index/opentable-index"!=e[e.length-1].route)return;const l=await G();1==l.data.buffet.is_buffet&&(H.value=l.data.cache_id,c.value=!0,f.value=l.data.buffet.buffet_remaining_time,ue.value=l.data.buffet.buffet_order_remaining_time,Z.value=-1==parseInt(l.data.buffet.buffet_expired_time)),H.value=""})(),U("sendHead",(e=>{ce(e)})),0==(null==(e=w())?void 0:e.getIsConnected())&&(Ae.value=!1)})),l({tiCallClick:le,showBuffet:(e,l)=>{i.value=e}}),(l,a)=>{const t=b,o=y,u=g,f=E(T("ti-layout-language-item"),ie),h=E(T("ti-call-toast"),Se);return d(),r(o,{class:"ti-head",onClick:a[3]||(a[3]=e=>Q(N)(!1))},{default:_((()=>[p(o,{class:"ti-head-left"},{default:_((()=>{var e;return[p(o,{class:"ti-logo-box"},{default:_((()=>{var e,l,a,o,n,u;return[(null==(a=null==(l=null==(e=Q(s))?void 0:e.cloud_basic)?void 0:l.base)?void 0:a.brand_logo_long)?(d(),r(t,{key:0,class:"ti-logo",onDblclick:V,src:null==(u=null==(n=null==(o=Q(s))?void 0:o.cloud_basic)?void 0:n.base)?void 0:u.brand_logo_long},null,8,["src"])):(d(),r(t,{key:1,class:"ti-logo",src:"data:image/png;base64,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",onDblclick:V}))]})),_:1}),(null==(e=Q(n))?void 0:e.table_no)?(d(),r(o,{key:0,class:"ti-table-no"},{default:_((()=>{var e;return[v(A(Q(D)("桌號：")+Q(F)(null==(e=Q(n))?void 0:e.table_no,17)),1)]})),_:1})):m("",!0),i.value&&c.value&&!Z.value?(d(),r(o,{key:1,class:"ti-table-no"},{default:_((()=>[v(A(Q(D)("剩餘用餐：")),1)])),_:1})):m("",!0),i.value&&c.value&&!Z.value?(d(),r(o,{key:2,class:"ti-table-no",style:{color:"red","margin-left":"0","padding-left":"0"}},{default:_((()=>[v(A(fe.value),1)])),_:1})):m("",!0),i.value&&ne.value&&!Z.value?(d(),r(o,{key:3,class:"ti-table-no remaining-time"},{default:_((()=>[v("("+A(Q(D)("剩餘點餐：")),1)])),_:1})):m("",!0),i.value&&ne.value&&!Z.value?(d(),r(o,{key:4,class:"ti-table-no remaining-time",style:{color:"red","margin-left":"0","padding-left":"0"}},{default:_((()=>[v(A(re.value),1)])),_:1})):m("",!0),i.value&&ne.value&&!Z.value?(d(),r(o,{key:5,class:"ti-table-no remaining-time",style:{"padding-left":"0","margin-left":"0"}},{default:_((()=>[v(")")])),_:1})):m("",!0),i.value&&c.value&&Z.value?(d(),r(o,{key:6,class:"ti-table-no"},{default:_((()=>[v(A(Q(D)("剩餘用餐：")+Q(D)("不限制")),1)])),_:1})):m("",!0)]})),_:1}),p(o,{class:"ti-head-right"},{default:_((()=>[p(o,{class:"ti-image-box",onClick:J},{default:_((()=>[p(t,{class:"ti-refresh-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgB7ZjtbcIwEIYvVf+XEbxB2aCMQDfICGwAnaDtBGEDukFgAugEsAFscD2Xs+K4iXU2diUkP9LJJLHPby7+OgAKhUKhUAigggQg4oSKmuyFbGo9urDtyLZVVW1H2us2F3p+gpxQRzOyFuUcyWrHR83PWsgJdfA+ImhD1rDp3/uReor9rM09yIH+/ANRbXS0PW0UR/LotFv+h+CN1eHeRCqg/coRfc4mmCNii51ABBzxoyM8rWDuxB6DwWJ5ONVsq9yCG8u5ggjQv6KkE+xEt4FIqO3CI/gDUoHdWqmZwg3wsFCuQUqwWxnyLD0BPAjrKS6/IQP6q0knsVSwcXaGxOB1q96TbST1pYJPXO4gPTMulaTyI8h41Q7pNHWA9DxxeYF7ALsd70tSXxph41yP5T+TI/Ycy0uk4kuR4BDntW+XwriturF8KEgJdsfAMYIEY+TuGTQkHD7JzCQ80bAQTxp+OTvDeIPUDERYn2PnEAhvzXYWsoIceIbEMsDHFPvnYNFmcatg3eEcu0zB3Ks9bWfYn2C/YjEyAQgWzNdDWYN+iRb7SahbR5PuKOkRbDKE1rm/GBE1RIs3Hk+D/kjBa2Z8GFoReEjo58/Q31y2cD3lrUNWkkKhUCgUkvAD5MmZuUxCRYMAAAAASUVORK5CYII="})])),_:1}),p(o,{class:"ti-buttons-box",onClick:[a[0]||(a[0]=M((()=>{}),["stop"])),$]},{default:_((()=>[p(o,{class:"yx-language-box",style:{position:"relative"}},{default:_((()=>[p(t,{class:"ti-pay-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB1Va7TtxAFL0bkSZF7CZFmuwPZJ0fIKFIIiJYSJMiCY8GBIhHg4S0AtHwdI8QIFEBgn6Xl0QDuytRUNlGNDTs8gF4kGhozJyBMbZ3DKYAiSONNPLM3DP3njtnN6W/e+vRM+INPTMSEfxr7yTr5JQurq7FKB4eUd/gUJKj8QRNLa3UN3Ab5H9bB31Kp/21jPGFmrOtYo49uEAsoEF0zE5NeEC28buX/vjBiwPWsAeYnZ7wVLEoLrgM0Nz4I5YgegEVSV201rmxcTEvlw6IMZd0XSNzepIu+Zy5TKxp/Nt7TRfrGOXiAdV/a6Dc6DgdWxZtbeb9mKlgm6Kex7ZFjmPzYC49BZquUyZj0Geuz+L8nJpAbOQ3w6ZL90IQzS8tU/3XhpDIQLVSEVkO9HYLwV3GxOWQkVLk3MiwVyru39dz6raelbOzWA2wFtUNMfp7umpFti0rdBiE+P4Y5OVUxBj+O8gYRigzxhglhRRfIljOl7MKiBaEpmmUFGjbIBwudg2BOTMp+vmeQFcSByHX5F4AnfVwm971Mw7hwSRpU+iH/ar3U/PQHNtW9/MjkO8HZMEMQlZxzm+1ubvnp9ry66c40JT9XVMqZOQ4Fm0X8lTY2RNWASCjEKLmZEbMTrplErMzFWantGvzCXYt3daMses6VT3RUdVqRfywlEtF3y2DkG5r8BK2//1DW4W8UhslAbC+tuLPt3k3ie7ihAD02FhbFfOFgKAqpF79v4obedc8+SUx1RUAAAAASUVORK5CYII="}),p(u,{class:"ti-pay-text"},{default:_((()=>[v(A(z.value),1)])),_:1}),p(o,{class:"ti-language-box"},{default:_((()=>[p(f,{ref_key:"refShowLanguage",ref:P,onLanguageText:q},null,512)])),_:1})])),_:1})])),_:1}),1===e.is_call_service||"1"===e.is_call_service?Y((d(),r(o,{key:0,class:"ti-buttons-box"},{default:_((()=>[L.isPay?(d(),r(o,{key:0,class:"ti-pay-box",onClick:a[1]||(a[1]=e=>le("2"))},{default:_((()=>[p(t,{class:"ti-pay-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgB5ZXhEYIwDIWDxwBuICM4QkfQCdQJdAMdQSdQJ9ANYAPcgBFgg/qiQXNaegL1j3537wq0zaNJoUR/g7V2DK2hAsr5nvqCIENoBaX2SSomKXUFkw20h0oVdMOG0n9gE2oLJs1UUG63bOYY194AExIJnMsKhp6xHxvE6nou7VRaLmrTvJEYGfWsiqLoQp632qh8d6XgTOi4A4eXoe4kUKrTO6DwJNCkvok9A3fQ2dPPQZYekxu+FVjy09RfQe/FVkXuWlzjcgtVgyOUKMNVaINGYgoDF3uBDy167Qi1At73J0lPqevxjRSxmXEZZBSOzPnU9vsP1TQfRPZ+gm1lX7eFc/84lH6HK0WszDSg1bNEAAAAAElFTkSuQmCC"}),p(u,{class:"ti-pay-text"},{default:_((()=>[v(A(Q(D)("結賬")),1)])),_:1})])),_:1})):m("",!0),p(o,{class:"ti-call-box",onClick:a[2]||(a[2]=e=>le("1"))},{default:_((()=>[p(t,{class:"ti-call-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgB5ZXRTcMwFEXvS+IoMT8eISOUCQgbsAHZADZINqAbICZgBMoG3YBugD+jtvB4LhUIWjd2KepHr/IUyXbusSP7GjgZGZ23RmevqyrVHQ4lY+TR6l6Kf1SZP5oC1dD3tNPcGZB6klGVZ8gM74tL28t7L0CpXnaYf0Pyxbm1sNs6E695oZoAc6cK8/zW1+kFgPgaoWK+iAeAKoSKMEI8IEoG/wxAPID8s/ozYH2AogCmyOpgABLVIlZEbRBgtf+BBtEA1EanV4MAaamxrzhtNu02ZsJbj3yQEp4NA9SyA/vDyyvmCd7S8e9mb9gZpUbI3O+SGPjMJCla7yxZJZOslKfS9izmU9svJziGKGSQxLZLyxu4aHYHkF3Rg+3nHQ4lc5aNv65MnXU4GX0AyjBH7Mx/5MAAAAAASUVORK5CYII="}),p(u,{class:"ti-call-text"},{default:_((()=>[v(A(Q(D)("呼叫服務員")),1)])),_:1})])),_:1})])),_:1},512)),[[R,Ae.value]]):m("",!0)])),_:1}),ae.value?(d(),r(o,{key:0,class:"ti-call-toast-box"},{default:_((()=>[p(h,{showTips:ae.value,title:Q(D)("已呼叫服務員，請稍等...")},null,8,["showTips","title"])])),_:1})):m("",!0)])),_:1})}}},[["__scopeId","data-v-bc4b6476"]]),Te=[{font_class:"arrow-down",unicode:""},{font_class:"arrow-left",unicode:""},{font_class:"arrow-right",unicode:""},{font_class:"arrow-up",unicode:""},{font_class:"auth",unicode:""},{font_class:"auth-filled",unicode:""},{font_class:"back",unicode:""},{font_class:"bars",unicode:""},{font_class:"calendar",unicode:""},{font_class:"calendar-filled",unicode:""},{font_class:"camera",unicode:""},{font_class:"camera-filled",unicode:""},{font_class:"cart",unicode:""},{font_class:"cart-filled",unicode:""},{font_class:"chat",unicode:""},{font_class:"chat-filled",unicode:""},{font_class:"chatboxes",unicode:""},{font_class:"chatboxes-filled",unicode:""},{font_class:"chatbubble",unicode:""},{font_class:"chatbubble-filled",unicode:""},{font_class:"checkbox",unicode:""},{font_class:"checkbox-filled",unicode:""},{font_class:"checkmarkempty",unicode:""},{font_class:"circle",unicode:""},{font_class:"circle-filled",unicode:""},{font_class:"clear",unicode:""},{font_class:"close",unicode:""},{font_class:"closeempty",unicode:""},{font_class:"cloud-download",unicode:""},{font_class:"cloud-download-filled",unicode:""},{font_class:"cloud-upload",unicode:""},{font_class:"cloud-upload-filled",unicode:""},{font_class:"color",unicode:""},{font_class:"color-filled",unicode:""},{font_class:"compose",unicode:""},{font_class:"contact",unicode:""},{font_class:"contact-filled",unicode:""},{font_class:"down",unicode:""},{font_class:"bottom",unicode:""},{font_class:"download",unicode:""},{font_class:"download-filled",unicode:""},{font_class:"email",unicode:""},{font_class:"email-filled",unicode:""},{font_class:"eye",unicode:""},{font_class:"eye-filled",unicode:""},{font_class:"eye-slash",unicode:""},{font_class:"eye-slash-filled",unicode:""},{font_class:"fire",unicode:""},{font_class:"fire-filled",unicode:""},{font_class:"flag",unicode:""},{font_class:"flag-filled",unicode:""},{font_class:"folder-add",unicode:""},{font_class:"folder-add-filled",unicode:""},{font_class:"font",unicode:""},{font_class:"forward",unicode:""},{font_class:"gear",unicode:""},{font_class:"gear-filled",unicode:""},{font_class:"gift",unicode:""},{font_class:"gift-filled",unicode:""},{font_class:"hand-down",unicode:""},{font_class:"hand-down-filled",unicode:""},{font_class:"hand-up",unicode:""},{font_class:"hand-up-filled",unicode:""},{font_class:"headphones",unicode:""},{font_class:"heart",unicode:""},{font_class:"heart-filled",unicode:""},{font_class:"help",unicode:""},{font_class:"help-filled",unicode:""},{font_class:"home",unicode:""},{font_class:"home-filled",unicode:""},{font_class:"image",unicode:""},{font_class:"image-filled",unicode:""},{font_class:"images",unicode:""},{font_class:"images-filled",unicode:""},{font_class:"info",unicode:""},{font_class:"info-filled",unicode:""},{font_class:"left",unicode:""},{font_class:"link",unicode:""},{font_class:"list",unicode:""},{font_class:"location",unicode:""},{font_class:"location-filled",unicode:""},{font_class:"locked",unicode:""},{font_class:"locked-filled",unicode:""},{font_class:"loop",unicode:""},{font_class:"mail-open",unicode:""},{font_class:"mail-open-filled",unicode:""},{font_class:"map",unicode:""},{font_class:"map-filled",unicode:""},{font_class:"map-pin",unicode:""},{font_class:"map-pin-ellipse",unicode:""},{font_class:"medal",unicode:""},{font_class:"medal-filled",unicode:""},{font_class:"mic",unicode:""},{font_class:"mic-filled",unicode:""},{font_class:"micoff",unicode:""},{font_class:"micoff-filled",unicode:""},{font_class:"minus",unicode:""},{font_class:"minus-filled",unicode:""},{font_class:"more",unicode:""},{font_class:"more-filled",unicode:""},{font_class:"navigate",unicode:""},{font_class:"navigate-filled",unicode:""},{font_class:"notification",unicode:""},{font_class:"notification-filled",unicode:""},{font_class:"paperclip",unicode:""},{font_class:"paperplane",unicode:""},{font_class:"paperplane-filled",unicode:""},{font_class:"person",unicode:""},{font_class:"person-filled",unicode:""},{font_class:"personadd",unicode:""},{font_class:"personadd-filled",unicode:""},{font_class:"personadd-filled-copy",unicode:""},{font_class:"phone",unicode:""},{font_class:"phone-filled",unicode:""},{font_class:"plus",unicode:""},{font_class:"plus-filled",unicode:""},{font_class:"plusempty",unicode:""},{font_class:"pulldown",unicode:""},{font_class:"pyq",unicode:""},{font_class:"qq",unicode:""},{font_class:"redo",unicode:""},{font_class:"redo-filled",unicode:""},{font_class:"refresh",unicode:""},{font_class:"refresh-filled",unicode:""},{font_class:"refreshempty",unicode:""},{font_class:"reload",unicode:""},{font_class:"right",unicode:""},{font_class:"scan",unicode:""},{font_class:"search",unicode:""},{font_class:"settings",unicode:""},{font_class:"settings-filled",unicode:""},{font_class:"shop",unicode:""},{font_class:"shop-filled",unicode:""},{font_class:"smallcircle",unicode:""},{font_class:"smallcircle-filled",unicode:""},{font_class:"sound",unicode:""},{font_class:"sound-filled",unicode:""},{font_class:"spinner-cycle",unicode:""},{font_class:"staff",unicode:""},{font_class:"staff-filled",unicode:""},{font_class:"star",unicode:""},{font_class:"star-filled",unicode:""},{font_class:"starhalf",unicode:""},{font_class:"trash",unicode:""},{font_class:"trash-filled",unicode:""},{font_class:"tune",unicode:""},{font_class:"tune-filled",unicode:""},{font_class:"undo",unicode:""},{font_class:"undo-filled",unicode:""},{font_class:"up",unicode:""},{font_class:"top",unicode:""},{font_class:"upload",unicode:""},{font_class:"upload-filled",unicode:""},{font_class:"videocam",unicode:""},{font_class:"videocam-filled",unicode:""},{font_class:"vip",unicode:""},{font_class:"vip-filled",unicode:""},{font_class:"wallet",unicode:""},{font_class:"wallet-filled",unicode:""},{font_class:"weibo",unicode:""},{font_class:"weixin",unicode:""}];const Qe=de({name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customPrefix:{type:String,default:""},fontFamily:{type:String,default:""}},data:()=>({icons:Te}),computed:{unicode(){let e=this.icons.find((e=>e.font_class===this.type));return e?e.unicode:""},iconSize(){return"number"==typeof(e=this.size)||/^[0-9]*$/g.test(e)?e+"px":e;var e},styleObj(){return""!==this.fontFamily?`color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`:`color: ${this.color}; font-size: ${this.iconSize};`}},methods:{_onClick(){this.$emit("click")}}},[["render",function(e,l,a,t,s,o){const n=g;return d(),r(n,{style:Z(o.styleObj),class:H(["uni-icons",["uniui-"+a.type,a.customPrefix,a.customPrefix?a.type:""]]),onClick:o._onClick},{default:_((()=>[P(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])}],["__scopeId","data-v-d0013c3d"]]),De=de({__name:"ti-input-d",props:{modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"},focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!0},readonly:{type:Boolean,default:!0},password:{type:Boolean,default:!1},placeholder:{type:String,default:null},prefixIcon:{type:String,default:null},suffixIcon:{type:String,default:"../../static/arrow-left.png"}},emits:["update:modelValue","focus","blur","click"],setup(e,{emit:l}){const a=l,t=e,s=e=>{a("update:modelValue",e.detail.value)},o=()=>{t.modelValue&&a("update:modelValue",t.modelValue.substring(0,t.modelValue.length-1))},n=()=>{a("click")};return(e,l)=>{const a=b,u=y,i=L;return d(),r(u,{class:H(["ti-input-box",{focus:t.focus}]),onClick:n},{default:_((()=>[P(e.$slots,"prefix",{},(()=>[t.prefixIcon?(d(),r(u,{key:0,class:"ti-input-prefix"},{default:_((()=>[p(a,{class:"ti-prefix-icon",src:t.prefixIcon},null,8,["src"])])),_:1})):m("",!0)]),!0),p(i,{class:"ti-input",value:t.modelValue,type:t.type,password:t.password,disabled:t.disabled,placeholder:t.placeholder,focus:!1,readonly:!0,onInput:s},null,8,["value","type","password","disabled","placeholder"]),P(e.$slots,"suffix",{},(()=>[t.suffixIcon?(d(),r(u,{key:0,class:"ti-input-suffix",onClick:o},{default:_((()=>[p(a,{class:"ti-suffix-icon",src:t.suffixIcon},null,8,["src"])])),_:1})):m("",!0)]),!0)])),_:3},8,["class"])}}},[["__scopeId","data-v-cd8e9f17"]]),Fe=de({__name:"diners-number",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},placeholder:{type:String,default:null},password:{type:Boolean,default:!1},isBuffet:{type:Boolean,default:!1}},emits:["update:show","exit","confirm"],setup(e,{emit:l}){const a=w(),t=C(),{userInfo:s}=x(a),o=l,n=e,u=B({table_id:"",meal_num:"",is_buffet:n.isBuffet,buffet_ids:[],number:"",buffet_customer_type:[]}),i=B(1150);function c(){N.value=!0,i.value=1150,u.value.number=""}function f(){N.value=!1,i.value=824,u.value.buffet_ids=[],u.value.buffet_customer_type=[]}const b=B(!1),h=B(null),k=B(!1),I=B(""),U=B([]),F=z((()=>{var e;const l=[];return null==(e=U.value)||e.map((e=>{var a;(null==(a=u.value)?void 0:a.buffet_ids.includes(e.id))&&l.push(e.name_text)})),l})),M=z((()=>{var e;return((null==(e=u.value)?void 0:e.buffet_customer_type)||[]).reduce(((e,l)=>e+Number(l.num)),0)||0})),Y=B(0),R=B(!1),N=B(n.isBuffet),O=e=>{e&&1==R.value&&(u.value.number+=e)},K=()=>{1==R.value&&(u.value.number="")},j=()=>{K(),o("exit")},X=()=>{var e;if(N.value&&!n.password){if(!F.value||F.value.length<=0)return uni.showToast({title:D("请选择自助餐套餐"),icon:"none"});if(!u.value.buffet_customer_type||u.value.buffet_customer_type.length<=0)return uni.showToast({title:te("[{title}]暂无用户类型，请选择其他自助餐",{title:F.value[0]}),icon:"none"});let l="";if(((null==(e=u.value)?void 0:e.buffet_ids)||[]).some((e=>{var a;const t=null==(a=U.value)?void 0:a.find((l=>l.id==e));if(!t.buffetCustomerType||t.buffetCustomerType.length<=0)return l=t.name_text,!0})),l)return k.value=!0,void(I.value=l);if(!M.value)return uni.showToast({title:D("請輸入人數"),icon:"none"});if(!/^(?!0+$)\d{1,3}$/.test(M.value))return uni.showToast({title:D("用餐人數支持1-999"),icon:"none"});G()}else if(N.value||n.password)o("confirm",u.value.number,N.value&&"1"==(null==s?void 0:s.value.buffet.is_open));else{if(!u.value.number)return uni.showToast({title:D("請輸入人數"),icon:"none"});if(!/^(?!0+$)\d{1,3}$/.test(u.value.number))return uni.showToast({title:D("用餐人數支持1-999"),icon:"none"});G()}},G=async()=>{if(!b.value){u.value.meal_num=u.value.number,u.value.is_buffet=N.value?1:0,u.value.table_id=se(),delete u.value.number;try{b.value=!0,await oe(u.value),null==t||t.openTablePage(u.value.is_buffet)}catch(e){o("exit",e)}finally{b.value=!1}}};S((()=>{setTimeout((()=>{R.value=!0}),500)})),q((()=>u.value.buffet_ids),(()=>{var e;let l=[];((null==(e=u.value)?void 0:e.buffet_ids)||[]).map((e=>{var a;const t=null==(a=U.value)?void 0:a.find((l=>l.id==e));t.buffetCustomerType&&t.buffetCustomerType.length>0&&t.buffetCustomerType.map((e=>{l.findIndex((l=>l.customer_type_id==e.customer_type_id))<0&&l.push({name_text:e.name_text,customer_type_id:e.customer_type_id,num:0})}))})),u.value.buffet_customer_type=Ie(l,"customer_type_id")}),{deep:!0}),q((()=>n.password),(e=>{i.value=e?824:1150})),q((()=>n.show),(async e=>{await W(),1==n.isBuffet&&n.show?(V().then((e=>{var l;if(U.value=e.data,n.isUpdate&&n.buffetIds&&n.buffetIds.length>0){const e=null==(l=U.value)?void 0:l.find((e=>e.id==n.buffetIds[0]));h.value=null==e?void 0:e.is_comb}})),e&&K(),c()):f()}),{immediate:!0});const P=()=>{!u.value.buffet_customer_type||u.value.buffet_customer_type.length<=0||(u.value.buffet_customer_type[Y.value].num=0)},L=e=>{u.value.buffet_customer_type[Y.value].num=Number(`${(u.value.buffet_customer_type[Y.value].num||"").toString()}${e}`)};return(l,a)=>{const t=y,w=g,x=E(T("ti-empty-data"),ce),C=ne,B=E(T("uni-icons"),Qe),S=ue,G=E(T("ti-keyboard"),re),z=E(T("ti-input-d"),De),q=E(T("ti-modal"),fe);return d(),J($,null,[p(q,{show:n.show,isBgGray:!0,title:n.title,width:i.value,isBuffet:N.value,isCancelShow:!1,isConfirmShow:!1,onCancel:a[4]||(a[4]=e=>o("update:show",!1))},{content:_((()=>[p(t,{class:"ti-dialog-content"},{default:_((()=>{var l;return[e.password||"1"!=(null==(l=Q(s))?void 0:l.buffet.is_open)?m("",!0):(d(),r(t,{key:0,class:"ti-dinner-select"},{default:_((()=>[p(t,{class:H(["ti-dinner-select-item",{select:N.value,unselect:!N.value}]),onClick:a[0]||(a[0]=e=>c())},{default:_((()=>[v(A(Q(D)("自助餐")),1)])),_:1},8,["class"]),p(t,{class:H(["ti-dinner-select-item",{select:!N.value,unselect:N.value}]),onClick:a[1]||(a[1]=e=>f())},{default:_((()=>[v(A(Q(D)("非自助餐")),1)])),_:1},8,["class"])])),_:1})),N.value&&!e.password?(d(),r(t,{key:1,class:"ti-buffet-box",style:Z({"grid-template-columns":n.isBuffetProduct?"1fr":""})},{default:_((()=>[n.isBuffetProduct?m("",!0):(d(),r(C,{key:0,class:"ti-buffet-scroll","scroll-y":""},{default:_((()=>[U.value&&U.value.length>0?(d(),r(t,{key:0,class:"ti-buffet-list"},{default:_((()=>[(d(!0),J($,null,ee(U.value,(e=>(d(),r(t,{key:e.id,class:H(["ti-buffet-item",{active:u.value.buffet_ids.includes(e.id),disabled:u.value.buffet_ids.length>0&&h.value!=e.is_comb}]),onClick:l=>(e=>{if(!(u.value.buffet_ids.length>0&&h.value!=e.is_comb))if(h.value=e.is_comb,0==h.value)u.value.buffet_ids=u.value.buffet_ids[0]!=e.id?[e.id]:[];else{const l=u.value.buffet_ids.indexOf(e.id);if(l>-1)u.value.buffet_ids.splice(l,1);else{if(u.value.buffet_ids.length>=2)return uni.showToast({title:te("最多只能选择{count}个",{count:2}),icon:"none"});u.value.buffet_ids.push(e.id)}}})(e)},{default:_((()=>[p(t,{class:"ti-buffet-name"},{default:_((()=>[v(A(e.name_text||e.name),1)])),_:2},1024),p(t,null,{default:_((()=>[p(w,{class:"ti-buffet-price"},{default:_((()=>{var l;return[v(A(Q(le)(e.buffetCustomerType?null==(l=e.buffetCustomerType[0])?void 0:l.price:0)),1)]})),_:2},1024),p(w,{class:"ti-buffet-subPrice"},{default:_((()=>{var l;return[v(A(Q(ae)(e.buffetCustomerType?null==(l=e.buffetCustomerType[0])?void 0:l.price:0)),1)]})),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})):(d(),r(x,{key:1}))])),_:1})),p(t,{style:{overflow:"hidden"}},{default:_((()=>[p(t,{class:"ti-buffet-info"},{default:_((()=>[F.value&&0!=F.value.length?(d(),J($,{key:1},[p(t,{class:"ti-buffet-select"},{default:_((()=>[(d(!0),J($,null,ee(F.value,((e,l)=>(d(),r(t,{key:l,class:"ti-buffet-select-item"},{default:_((()=>[v(A(e),1)])),_:2},1024)))),128))])),_:1}),u.value.buffet_customer_type&&u.value.buffet_customer_type.length>0?(d(),J($,{key:0},[p(t,{class:"ti-buffet-num"},{default:_((()=>[(d(!0),J($,null,ee(u.value.buffet_customer_type,((e,l)=>(d(),r(t,{key:e.customer_type_id,class:"ti-buffet-num-item"},{default:_((()=>[p(t,{class:"ti-buffet-num-label"},{default:_((()=>[v(A(e.name_text.length>8?e.name_text.slice(0,6)+"...":e.name_text),1)])),_:2},1024),p(t,{class:"ti-buffet-num-input"},{default:_((()=>[p(S,{class:"ti-input-minus",disabled:e.num<=0,onClick:l=>e.num--},{default:_((()=>[p(B,{"custom-prefix":"iconfont",type:"icon-minus",size:"16",color:"#FFBE00"})])),_:2},1032,["disabled","onClick"]),p(t,{class:H(["ti-input-box",{active:Y.value==l}]),onClick:e=>Y.value=l},{default:_((()=>[v(A(e.num),1)])),_:2},1032,["class","onClick"]),p(S,{class:"ti-input-plus",disabled:M.value>=999,onClick:l=>e.num++},{default:_((()=>[p(B,{type:"plusempty",size:"16",color:"#FFBE00"})])),_:2},1032,["disabled","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),p(t,{class:"ti-buffet-num-total"},{default:_((()=>[p(w,null,{default:_((()=>[v(A(Q(D)("共")),1)])),_:1}),p(w,{class:"orange"},{default:_((()=>[v(A(M.value),1)])),_:1}),p(w,null,{default:_((()=>[v(A(Q(D)("人")),1)])),_:1})])),_:1})],64)):(d(),r(t,{key:1,class:"ti-buffet-num-empty"},{default:_((()=>[v(A(Q(D)("暂无可选顾客类型")),1)])),_:1}))],64)):(d(),r(t,{key:0,class:"ti-buffet-info-empty"},{default:_((()=>[v(A(Q(D)("请选择自助餐套餐")),1)])),_:1}))])),_:1}),p(t,{class:"ti-dialog-btn",style:{padding:"16px","border-radius":"10px"}},{default:_((()=>[p(G,{primaryLoading:b.value,isDoubleZero:!0,isCross:!1,isDrop:!1,onInput:L,onClear:P,onConfirm:X,onExit:j},null,8,["primaryLoading"])])),_:1})])),_:1})])),_:1},8,["style"])):m("",!0),!N.value||e.password?(d(),r(z,{key:2,modelValue:u.value.number,"onUpdate:modelValue":a[2]||(a[2]=e=>u.value.number=e),password:n.password,placeholder:n.placeholder,focus:R.value,onClick:a[3]||(a[3]=e=>{return l="number",void(R.value="number"===l);var l})},null,8,["modelValue","password","placeholder","focus"])):m("",!0)]})),_:1})])),footer:_((()=>[!N.value||e.password?(d(),r(t,{key:0,class:"ti-dialog-footer"},{default:_((()=>[p(G,{onInput:O,onClear:K,onExit:j,onConfirm:X})])),_:1})):m("",!0)])),_:1},8,["show","title","width","isBuffet"]),p(q,{class:"ti-action-tips",show:k.value,"onUpdate:show":a[5]||(a[5]=e=>k.value=e),title:Q(D)("溫馨提示"),content:Q(te)("[{title}]暂无用户类型，请选择其他自助餐",{title:I.value}),isCancelShow:!1,onConfirm:a[6]||(a[6]=e=>k.value=!1)},null,8,["show","title","content"])],64)}}},[["__scopeId","data-v-d58a7ab0"]]);function Me(e){return h("base.base/verifyPassword",e)}export{Fe as D,Ee as _,Qe as a,Me as v};
