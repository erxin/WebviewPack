import{aH as e,aI as l,a7 as a,aJ as t,aK as s,aL as o,aM as n,aN as u,aO as i,aP as c,aQ as f,k as d,l as r,w as _,t as v,y as p,z as m,m as b,T as A,X as g,q as y,ap as h,a as w,s as x,b as k,r as C,a0 as I,a1 as B,$ as S,g as U,ak as E,R as T,S as R,j as Y,A as D,B as Q,a2 as V,aD as F,aE as N,C as M,d as P,ax as K,K as X,aR as O,aS as Z,ac as L,ab as z,an as j,aT as G,c as W,ah as H,am as J,aU as q,v as $,F as ee,x as le,as as ae,at as te,aC as se,M as oe,aV as ne,Y as ue,aW as ie}from"./index-16d8f957.js";import{d as ce,V as fe,e as de,c as re}from"./platform.9c84fbb6.js";import{_ as _e}from"./ti-button.d3e0b739.js";import ve from"./components-ti-keyboard-ti-keyboard.53bd1b7b.js";var pe=Date.now;var me=function(){try{var l=e(Object,"defineProperty");return l({},"",{}),l}catch(a){}}();const be=me;var Ae=be?function(e,l){return be(e,"toString",{configurable:!0,enumerable:!1,value:(a=l,function(){return a}),writable:!0});var a}:l;var ge,ye,he;const we=(ge=Ae,ye=0,he=0,function(){var e=pe(),l=16-(e-he);if(he=e,l>0){if(++ye>=800)return arguments[0]}else ye=0;return ge.apply(void 0,arguments)});var xe=Math.max;function ke(e,l,n){if(!a(n))return!1;var u=typeof l;return!!("number"==u?t(n)&&s(l,n.length):"string"==u&&l in n)&&o(n[l],e)}var Ce=n?n.isConcatSpreadable:void 0;function Ie(e){return u(e)||i(e)||!!(Ce&&e&&e[Ce])}function Be(e,l,a,t,s){var o=-1,n=e.length;for(a||(a=Ie),s||(s=[]);++o<n;){var u=e[o];l>0&&a(u)?l>1?Be(u,l-1,a,t,s):c(s,u):t||(s[s.length]=u)}return s}var Se=function(e,a){return we(function(e,l,a){return l=xe(void 0===l?e.length-1:l,0),function(){for(var t=arguments,s=-1,o=xe(t.length-l,0),n=Array(o);++s<o;)n[s]=t[l+s];s=-1;for(var u=Array(l+1);++s<l;)u[s]=t[s];return u[l]=a(n),function(e,l,a){switch(a.length){case 0:return e.call(l);case 1:return e.call(l,a[0]);case 2:return e.call(l,a[0],a[1]);case 3:return e.call(l,a[0],a[1],a[2])}return e.apply(l,a)}(e,this,u)}}(e,a,l),e+"")}((function(e,l){if(null==e)return[];var a=l.length;return a>1&&ke(e,l[0],l[1])?l=[]:a>2&&ke(l[0],l[1],l[2])&&(l=[l[0]]),f(e,Be(l,1),[])}));const Ue=Se,Ee=""+new URL("notification-yellow-5a0f90af.svg",import.meta.url).href,Te=_e({__name:"ti-call-toast",props:{title:{type:String,default:null},showTips:{type:Boolean,default:!1}},setup(e){const l=e;return(e,a)=>{const t=A,s=g,o=y;return l.showTips?(d(),r(o,{key:0,class:"ti-toast"},{default:_((()=>[v(t,{class:"ti-toast-image",src:Ee}),v(s,{class:"ti-toast-title"},{default:_((()=>[p(m(l.title),1)])),_:1})])),_:1})):b("",!0)}}},[["__scopeId","data-v-9c80bb27"]]),Re=""+new URL("tiger-logo-white-797fa25e.svg",import.meta.url).href;const Ye=_e({__name:"ti-layout-head",props:{isPay:{type:Boolean,default:!1},isTableNo:{type:Boolean,default:!1},is_call_service:{type:Number,default:1}},emits:["doubleLogo"],setup(e,{expose:l,emit:a}){const t=w(),{userInfo:s}=x(t),o=k(),{tableInfo:n}=x(o),u=C(!1),i=C(!0),c=C(!1),f=C(0),L=C(),z=C(!1),j=C(0),G=e,W=C(I[B()]),H=()=>{W.value=I[B()]},J=a,q=()=>{J("doubleLogo")},$=async()=>{try{await(null==t?void 0:t.getUserInfo(!0)),null==o||o.getTableInfoAsync(!0),P()&&K("goodsListRefresh")}catch(e){}};S("change",(()=>{W.value=I[B()]}));const ee=()=>{L.value.isShow()?L.value.close():L.value.open()},le=C(!1),ae=e=>{le.value||(le.value=!0,setTimeout((()=>{le.value=!1}),2e3),ne(e))},te=C(!1),se=C({table_id:"",call_type:"",shop_supplier_id:""}),oe=C(),ne=async e=>{oe.value=X(),se.value.table_id=oe.value.table_id,se.value.call_type=e,se.value.shop_supplier_id=oe.value.shop_supplier_id;try{u.value=!0;await(l=se.value,h("call.call/call",l));te.value=!0,setTimeout((()=>{te.value=!1}),3e3)}catch(a){}finally{u.value=!1}var l},ue=C(!1),ie=C(0),de=e=>{e.cache_id!==j.value?(j.value=e.cache_id,z.value=-1==parseInt(e.buffet.buffet_expired_time),c.value=!0,0!=e.buffet.remain_continue_time?ue.value=!0:ue.value=!1,f.value=e.buffet.buffet_remaining_time,ie.value=e.buffet.buffet_order_remaining_time,clearInterval(_e),_e=setInterval((()=>{f.value>0?(f.value--,re.value=me(f.value)):(re.value="00:00:00",clearInterval(_e))}),1e3),clearInterval(pe),pe=setInterval((()=>{ie.value>0?(ie.value--,ve.value=me(ie.value)):(ve.value="00:00:00",clearInterval(pe))}),1e3)):0!=e.buffet.remain_continue_time?(ue.value=!0,ie.value=e.buffet.buffet_order_remaining_time):ue.value=!1},re=C("");let _e;const ve=C("");let pe;const me=e=>{let l=Math.floor(e/3600),a=Math.floor(e%3600/60),t=e%60;return`${be(l)}:${be(a)}:${be(t)}`},be=e=>String(e).padStart(2,"0"),Ae=C(0);let ge=Date.now();const ye=C(!0),he=()=>{const e=Date.now();e-ge>1e3?Ae.value=1:Ae.value++,ge=e,Ae.value>=10&&(new fe,Ae.value=0)};return U((()=>{(async()=>{const e=O();if("pages/index/opentable-index"!=e[e.length-1].route)return;const l=await Z();1==l.data.buffet.is_buffet&&(j.value=l.data.cache_id,c.value=!0,f.value=l.data.buffet.buffet_remaining_time,ie.value=l.data.buffet.buffet_order_remaining_time,z.value=-1==parseInt(l.data.buffet.buffet_expired_time)),j.value=""})(),S("sendHead",(e=>{de(e)}))})),S("isConnect",(e=>{ye.value=e})),E((()=>ye.value),((e,l)=>{e&&(showNetWorkConnect.value=!0)})),l({tiCallClick:ae,showBuffet:(e,l)=>{i.value=e}}),(l,a)=>{const t=A,o=y,u=g,f=T(R("ti-layout-language-item"),ce),h=T(R("ti-call-toast"),Te);return d(),r(o,{class:"ti-head",onClick:a[3]||(a[3]=e=>Y(M)(!1))},{default:_((()=>[v(o,{class:"ti-head-left"},{default:_((()=>{var e;return[v(o,{class:"ti-logo-box",onDblclick:q},{default:_((()=>{var e,l,a,o,n,u;return[(null==(a=null==(l=null==(e=Y(s))?void 0:e.cloud_basic)?void 0:l.base)?void 0:a.brand_logo_long)?(d(),r(t,{key:0,class:"ti-logo",src:null==(u=null==(n=null==(o=Y(s))?void 0:o.cloud_basic)?void 0:n.base)?void 0:u.brand_logo_long},null,8,["src"])):(d(),r(t,{key:1,class:"ti-logo",src:Re}))]})),_:1}),(null==(e=Y(n))?void 0:e.table_no)?(d(),r(o,{key:0,class:"ti-table-no"},{default:_((()=>{var e;return[p(m(Y(D)("桌號：")+Y(Q)(null==(e=Y(n))?void 0:e.table_no,17)),1)]})),_:1})):b("",!0),i.value&&c.value&&!z.value?(d(),r(o,{key:1,class:"ti-table-no"},{default:_((()=>[p(m(Y(D)("剩餘用餐：")),1)])),_:1})):b("",!0),i.value&&c.value&&!z.value?(d(),r(o,{key:2,class:"ti-table-no",style:{color:"red","margin-left":"0","padding-left":"0"}},{default:_((()=>[p(m(re.value),1)])),_:1})):b("",!0),i.value&&ue.value&&!z.value?(d(),r(o,{key:3,class:"ti-table-no remaining-time"},{default:_((()=>[p("("+m(Y(D)("剩餘點餐：")),1)])),_:1})):b("",!0),i.value&&ue.value&&!z.value?(d(),r(o,{key:4,class:"ti-table-no remaining-time",style:{color:"red","margin-left":"0","padding-left":"0"}},{default:_((()=>[p(m(ve.value),1)])),_:1})):b("",!0),i.value&&ue.value&&!z.value?(d(),r(o,{key:5,class:"ti-table-no remaining-time",style:{"padding-left":"0","margin-left":"0"}},{default:_((()=>[p(")")])),_:1})):b("",!0),i.value&&c.value&&z.value?(d(),r(o,{key:6,class:"ti-table-no"},{default:_((()=>[p(m(Y(D)("剩餘用餐：")+Y(D)("不限制")),1)])),_:1})):b("",!0)]})),_:1}),v(o,{class:"ti-head-right"},{default:_((()=>[v(o,{class:"yx-private-box",onClick:he}),v(o,{class:"ti-image-box",onClick:$},{default:_((()=>[v(t,{class:"ti-refresh-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHgSURBVHgB7ZjtbcIwEIYvVf+XEbxB2aCMQDfICGwAnaDtBGEDukFgAugEsAFscD2Xs+K4iXU2diUkP9LJJLHPby7+OgAKhUKhUAigggQg4oSKmuyFbGo9urDtyLZVVW1H2us2F3p+gpxQRzOyFuUcyWrHR83PWsgJdfA+ImhD1rDp3/uReor9rM09yIH+/ANRbXS0PW0UR/LotFv+h+CN1eHeRCqg/coRfc4mmCNii51ABBzxoyM8rWDuxB6DwWJ5ONVsq9yCG8u5ggjQv6KkE+xEt4FIqO3CI/gDUoHdWqmZwg3wsFCuQUqwWxnyLD0BPAjrKS6/IQP6q0knsVSwcXaGxOB1q96TbST1pYJPXO4gPTMulaTyI8h41Q7pNHWA9DxxeYF7ALsd70tSXxph41yP5T+TI/Ycy0uk4kuR4BDntW+XwriturF8KEgJdsfAMYIEY+TuGTQkHD7JzCQ80bAQTxp+OTvDeIPUDERYn2PnEAhvzXYWsoIceIbEMsDHFPvnYNFmcatg3eEcu0zB3Ks9bWfYn2C/YjEyAQgWzNdDWYN+iRb7SahbR5PuKOkRbDKE1rm/GBE1RIs3Hk+D/kjBa2Z8GFoReEjo58/Q31y2cD3lrUNWkkKhUCgUkvAD5MmZuUxCRYMAAAAASUVORK5CYII="})])),_:1}),v(o,{class:"ti-buttons-box",onClick:[a[0]||(a[0]=V((()=>{}),["stop"])),ee]},{default:_((()=>[v(o,{class:"yx-language-box",style:{position:"relative"}},{default:_((()=>[v(t,{class:"ti-pay-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIxSURBVHgB1Va7TtxAFL0bkSZF7CZFmuwPZJ0fIKFIIiJYSJMiCY8GBIhHg4S0AtHwdI8QIFEBgn6Xl0QDuytRUNlGNDTs8gF4kGhozJyBMbZ3DKYAiSONNPLM3DP3njtnN6W/e+vRM+INPTMSEfxr7yTr5JQurq7FKB4eUd/gUJKj8QRNLa3UN3Ab5H9bB31Kp/21jPGFmrOtYo49uEAsoEF0zE5NeEC28buX/vjBiwPWsAeYnZ7wVLEoLrgM0Nz4I5YgegEVSV201rmxcTEvlw6IMZd0XSNzepIu+Zy5TKxp/Nt7TRfrGOXiAdV/a6Dc6DgdWxZtbeb9mKlgm6Kex7ZFjmPzYC49BZquUyZj0Geuz+L8nJpAbOQ3w6ZL90IQzS8tU/3XhpDIQLVSEVkO9HYLwV3GxOWQkVLk3MiwVyru39dz6raelbOzWA2wFtUNMfp7umpFti0rdBiE+P4Y5OVUxBj+O8gYRigzxhglhRRfIljOl7MKiBaEpmmUFGjbIBwudg2BOTMp+vmeQFcSByHX5F4AnfVwm971Mw7hwSRpU+iH/ar3U/PQHNtW9/MjkO8HZMEMQlZxzm+1ubvnp9ry66c40JT9XVMqZOQ4Fm0X8lTY2RNWASCjEKLmZEbMTrplErMzFWantGvzCXYt3daMses6VT3RUdVqRfywlEtF3y2DkG5r8BK2//1DW4W8UhslAbC+tuLPt3k3ie7ihAD02FhbFfOFgKAqpF79v4obedc8+SUx1RUAAAAASUVORK5CYII="}),v(u,{class:"ti-pay-text"},{default:_((()=>[p(m(W.value),1)])),_:1}),v(o,{class:"ti-language-box"},{default:_((()=>[v(f,{ref_key:"refShowLanguage",ref:L,onLanguageText:H},null,512)])),_:1})])),_:1})])),_:1}),1===e.is_call_service||"1"===e.is_call_service?F((d(),r(o,{key:0,class:"ti-buttons-box"},{default:_((()=>[G.isPay?(d(),r(o,{key:0,class:"ti-pay-box",onClick:a[1]||(a[1]=e=>ae("2"))},{default:_((()=>[v(t,{class:"ti-pay-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEMSURBVHgB5ZXhEYIwDIWDxwBuICM4QkfQCdQJdAMdQSdQJ9ANYAPcgBFgg/qiQXNaegL1j3537wq0zaNJoUR/g7V2DK2hAsr5nvqCIENoBaX2SSomKXUFkw20h0oVdMOG0n9gE2oLJs1UUG63bOYY194AExIJnMsKhp6xHxvE6nou7VRaLmrTvJEYGfWsiqLoQp632qh8d6XgTOi4A4eXoe4kUKrTO6DwJNCkvok9A3fQ2dPPQZYekxu+FVjy09RfQe/FVkXuWlzjcgtVgyOUKMNVaINGYgoDF3uBDy167Qi1At73J0lPqevxjRSxmXEZZBSOzPnU9vsP1TQfRPZ+gm1lX7eFc/84lH6HK0WszDSg1bNEAAAAAElFTkSuQmCC"}),v(u,{class:"ti-pay-text"},{default:_((()=>[p(m(Y(D)("結賬")),1)])),_:1})])),_:1})):b("",!0),v(o,{class:"ti-call-box",onClick:a[2]||(a[2]=e=>ae("1"))},{default:_((()=>[v(t,{class:"ti-call-image",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEvSURBVHgB5ZXRTcMwFEXvS+IoMT8eISOUCQgbsAHZADZINqAbICZgBMoG3YBugD+jtvB4LhUIWjd2KepHr/IUyXbusSP7GjgZGZ23RmevqyrVHQ4lY+TR6l6Kf1SZP5oC1dD3tNPcGZB6klGVZ8gM74tL28t7L0CpXnaYf0Pyxbm1sNs6E695oZoAc6cK8/zW1+kFgPgaoWK+iAeAKoSKMEI8IEoG/wxAPID8s/ozYH2AogCmyOpgABLVIlZEbRBgtf+BBtEA1EanV4MAaamxrzhtNu02ZsJbj3yQEp4NA9SyA/vDyyvmCd7S8e9mb9gZpUbI3O+SGPjMJCla7yxZJZOslKfS9izmU9svJziGKGSQxLZLyxu4aHYHkF3Rg+3nHQ4lc5aNv65MnXU4GX0AyjBH7Mx/5MAAAAAASUVORK5CYII="}),v(u,{class:"ti-call-text"},{default:_((()=>[p(m(Y(D)("呼叫服務員")),1)])),_:1})])),_:1})])),_:1},512)),[[N,ye.value]]):b("",!0)])),_:1}),te.value?(d(),r(o,{key:0,class:"ti-call-toast-box"},{default:_((()=>[v(h,{showTips:te.value,title:Y(D)("已呼叫服務員，請稍等...")},null,8,["showTips","title"])])),_:1})):b("",!0)])),_:1})}}},[["__scopeId","data-v-e36e2759"]]),De=[{font_class:"arrow-down",unicode:""},{font_class:"arrow-left",unicode:""},{font_class:"arrow-right",unicode:""},{font_class:"arrow-up",unicode:""},{font_class:"auth",unicode:""},{font_class:"auth-filled",unicode:""},{font_class:"back",unicode:""},{font_class:"bars",unicode:""},{font_class:"calendar",unicode:""},{font_class:"calendar-filled",unicode:""},{font_class:"camera",unicode:""},{font_class:"camera-filled",unicode:""},{font_class:"cart",unicode:""},{font_class:"cart-filled",unicode:""},{font_class:"chat",unicode:""},{font_class:"chat-filled",unicode:""},{font_class:"chatboxes",unicode:""},{font_class:"chatboxes-filled",unicode:""},{font_class:"chatbubble",unicode:""},{font_class:"chatbubble-filled",unicode:""},{font_class:"checkbox",unicode:""},{font_class:"checkbox-filled",unicode:""},{font_class:"checkmarkempty",unicode:""},{font_class:"circle",unicode:""},{font_class:"circle-filled",unicode:""},{font_class:"clear",unicode:""},{font_class:"close",unicode:""},{font_class:"closeempty",unicode:""},{font_class:"cloud-download",unicode:""},{font_class:"cloud-download-filled",unicode:""},{font_class:"cloud-upload",unicode:""},{font_class:"cloud-upload-filled",unicode:""},{font_class:"color",unicode:""},{font_class:"color-filled",unicode:""},{font_class:"compose",unicode:""},{font_class:"contact",unicode:""},{font_class:"contact-filled",unicode:""},{font_class:"down",unicode:""},{font_class:"bottom",unicode:""},{font_class:"download",unicode:""},{font_class:"download-filled",unicode:""},{font_class:"email",unicode:""},{font_class:"email-filled",unicode:""},{font_class:"eye",unicode:""},{font_class:"eye-filled",unicode:""},{font_class:"eye-slash",unicode:""},{font_class:"eye-slash-filled",unicode:""},{font_class:"fire",unicode:""},{font_class:"fire-filled",unicode:""},{font_class:"flag",unicode:""},{font_class:"flag-filled",unicode:""},{font_class:"folder-add",unicode:""},{font_class:"folder-add-filled",unicode:""},{font_class:"font",unicode:""},{font_class:"forward",unicode:""},{font_class:"gear",unicode:""},{font_class:"gear-filled",unicode:""},{font_class:"gift",unicode:""},{font_class:"gift-filled",unicode:""},{font_class:"hand-down",unicode:""},{font_class:"hand-down-filled",unicode:""},{font_class:"hand-up",unicode:""},{font_class:"hand-up-filled",unicode:""},{font_class:"headphones",unicode:""},{font_class:"heart",unicode:""},{font_class:"heart-filled",unicode:""},{font_class:"help",unicode:""},{font_class:"help-filled",unicode:""},{font_class:"home",unicode:""},{font_class:"home-filled",unicode:""},{font_class:"image",unicode:""},{font_class:"image-filled",unicode:""},{font_class:"images",unicode:""},{font_class:"images-filled",unicode:""},{font_class:"info",unicode:""},{font_class:"info-filled",unicode:""},{font_class:"left",unicode:""},{font_class:"link",unicode:""},{font_class:"list",unicode:""},{font_class:"location",unicode:""},{font_class:"location-filled",unicode:""},{font_class:"locked",unicode:""},{font_class:"locked-filled",unicode:""},{font_class:"loop",unicode:""},{font_class:"mail-open",unicode:""},{font_class:"mail-open-filled",unicode:""},{font_class:"map",unicode:""},{font_class:"map-filled",unicode:""},{font_class:"map-pin",unicode:""},{font_class:"map-pin-ellipse",unicode:""},{font_class:"medal",unicode:""},{font_class:"medal-filled",unicode:""},{font_class:"mic",unicode:""},{font_class:"mic-filled",unicode:""},{font_class:"micoff",unicode:""},{font_class:"micoff-filled",unicode:""},{font_class:"minus",unicode:""},{font_class:"minus-filled",unicode:""},{font_class:"more",unicode:""},{font_class:"more-filled",unicode:""},{font_class:"navigate",unicode:""},{font_class:"navigate-filled",unicode:""},{font_class:"notification",unicode:""},{font_class:"notification-filled",unicode:""},{font_class:"paperclip",unicode:""},{font_class:"paperplane",unicode:""},{font_class:"paperplane-filled",unicode:""},{font_class:"person",unicode:""},{font_class:"person-filled",unicode:""},{font_class:"personadd",unicode:""},{font_class:"personadd-filled",unicode:""},{font_class:"personadd-filled-copy",unicode:""},{font_class:"phone",unicode:""},{font_class:"phone-filled",unicode:""},{font_class:"plus",unicode:""},{font_class:"plus-filled",unicode:""},{font_class:"plusempty",unicode:""},{font_class:"pulldown",unicode:""},{font_class:"pyq",unicode:""},{font_class:"qq",unicode:""},{font_class:"redo",unicode:""},{font_class:"redo-filled",unicode:""},{font_class:"refresh",unicode:""},{font_class:"refresh-filled",unicode:""},{font_class:"refreshempty",unicode:""},{font_class:"reload",unicode:""},{font_class:"right",unicode:""},{font_class:"scan",unicode:""},{font_class:"search",unicode:""},{font_class:"settings",unicode:""},{font_class:"settings-filled",unicode:""},{font_class:"shop",unicode:""},{font_class:"shop-filled",unicode:""},{font_class:"smallcircle",unicode:""},{font_class:"smallcircle-filled",unicode:""},{font_class:"sound",unicode:""},{font_class:"sound-filled",unicode:""},{font_class:"spinner-cycle",unicode:""},{font_class:"staff",unicode:""},{font_class:"staff-filled",unicode:""},{font_class:"star",unicode:""},{font_class:"star-filled",unicode:""},{font_class:"starhalf",unicode:""},{font_class:"trash",unicode:""},{font_class:"trash-filled",unicode:""},{font_class:"tune",unicode:""},{font_class:"tune-filled",unicode:""},{font_class:"undo",unicode:""},{font_class:"undo-filled",unicode:""},{font_class:"up",unicode:""},{font_class:"top",unicode:""},{font_class:"upload",unicode:""},{font_class:"upload-filled",unicode:""},{font_class:"videocam",unicode:""},{font_class:"videocam-filled",unicode:""},{font_class:"vip",unicode:""},{font_class:"vip-filled",unicode:""},{font_class:"wallet",unicode:""},{font_class:"wallet-filled",unicode:""},{font_class:"weibo",unicode:""},{font_class:"weixin",unicode:""}];const Qe=_e({name:"UniIcons",emits:["click"],props:{type:{type:String,default:""},color:{type:String,default:"#333333"},size:{type:[Number,String],default:16},customPrefix:{type:String,default:""},fontFamily:{type:String,default:""}},data:()=>({icons:De}),computed:{unicode(){let e=this.icons.find((e=>e.font_class===this.type));return e?e.unicode:""},iconSize(){return"number"==typeof(e=this.size)||/^[0-9]*$/g.test(e)?e+"px":e;var e},styleObj(){return""!==this.fontFamily?`color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`:`color: ${this.color}; font-size: ${this.iconSize};`}},methods:{_onClick(){this.$emit("click")}}},[["render",function(e,l,a,t,s,o){const n=g;return d(),r(n,{style:z(o.styleObj),class:j(["uni-icons",["uniui-"+a.type,a.customPrefix,a.customPrefix?a.type:""]]),onClick:o._onClick},{default:_((()=>[L(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])}],["__scopeId","data-v-d0013c3d"]]),Ve=_e({__name:"ti-input-d",props:{modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"},focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!0},readonly:{type:Boolean,default:!0},password:{type:Boolean,default:!1},placeholder:{type:String,default:null},prefixIcon:{type:String,default:null},suffixIcon:{type:String,default:"../../static/arrow-left.png"}},emits:["update:modelValue","focus","blur","click"],setup(e,{emit:l}){const a=l,t=e,s=e=>{a("update:modelValue",e.detail.value)},o=()=>{t.modelValue&&a("update:modelValue",t.modelValue.substring(0,t.modelValue.length-1))},n=()=>{a("click")};return(e,l)=>{const a=A,u=y,i=G;return d(),r(u,{class:j(["ti-input-box",{focus:t.focus}]),onClick:n},{default:_((()=>[L(e.$slots,"prefix",{},(()=>[t.prefixIcon?(d(),r(u,{key:0,class:"ti-input-prefix"},{default:_((()=>[v(a,{class:"ti-prefix-icon",src:t.prefixIcon},null,8,["src"])])),_:1})):b("",!0)]),!0),v(i,{class:"ti-input",value:t.modelValue,type:t.type,password:t.password,disabled:t.disabled,placeholder:t.placeholder,focus:!1,readonly:!0,onInput:s},null,8,["value","type","password","disabled","placeholder"]),L(e.$slots,"suffix",{},(()=>[t.suffixIcon?(d(),r(u,{key:0,class:"ti-input-suffix",onClick:o},{default:_((()=>[v(a,{class:"ti-suffix-icon",src:t.suffixIcon},null,8,["src"])])),_:1})):b("",!0)]),!0)])),_:3},8,["class"])}}},[["__scopeId","data-v-cd8e9f17"]]),Fe=_e({__name:"diners-number",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},placeholder:{type:String,default:null},password:{type:Boolean,default:!1},isBuffet:{type:Boolean,default:!1}},emits:["update:show","exit","confirm"],setup(e,{emit:l}){W();const a=w(),t=k(),{userInfo:s}=x(a),o=e,n=l,u=C({table_id:"",meal_num:"",is_buffet:o.isBuffet,buffet_ids:[],number:"",buffet_customer_type:[]}),i=C(1150),c=C(!1),f=H((()=>{var e;return((null==(e=u.value)?void 0:e.buffet_customer_type)||[]).reduce(((e,l)=>e+Number(l.num)),0)||0})),A=C(0),h=C(null),I=C(!1),B=C(""),S=C([]),Q=C(!1),V=C(!1),F=C(o.isBuffet);function N(){F.value=!0,i.value=1150,u.value.number=""}function M(){F.value=!1,i.value=824,u.value.buffet_ids=[],u.value.buffet_customer_type=[]}const P=H((()=>{var e;const l=[];return null==(e=S.value)||e.map((e=>{var a;(null==(a=u.value)?void 0:a.buffet_ids.includes(e.id))&&l.push(e.name_text)})),l})),K=e=>{e&&1==V.value&&(u.value.number+=e)},X=()=>{1==V.value&&(u.value.number="")},O=()=>{X(),n("exit")},Z=()=>{var e;if(F.value&&!o.password){if(!P.value||P.value.length<=0)return uni.showToast({title:D("请选择自助餐套餐"),icon:"none"});if(!u.value.buffet_customer_type||u.value.buffet_customer_type.length<=0)return uni.showToast({title:se("[{title}]暂无用户类型，请选择其他自助餐",{title:P.value[0]}),icon:"none"});let l="";if(((null==(e=u.value)?void 0:e.buffet_ids)||[]).some((e=>{var a;const t=null==(a=S.value)?void 0:a.find((l=>l.id==e));if(!t.buffetCustomerType||t.buffetCustomerType.length<=0)return l=t.name_text,!0})),l)return I.value=!0,void(B.value=l);if(!f.value)return uni.showToast({title:D("請輸入人數"),icon:"none"});if(!/^(?!0+$)\d{1,3}$/.test(f.value))return uni.showToast({title:D("用餐人數支持1-999"),icon:"none"});Q.value=!0}else if(F.value||o.password)n("confirm",u.value.number,F.value&&"1"==(null==s?void 0:s.value.buffet.is_open)),u.value.number="";else{if(!u.value.number)return uni.showToast({title:D("請輸入人數"),icon:"none"});if(!/^(?!0+$)\d{1,3}$/.test(u.value.number))return uni.showToast({title:D("用餐人數支持1-999"),icon:"none"});L()}},L=async()=>{if(!c.value){u.value.meal_num=u.value.number,u.value.is_buffet=F.value?1:0,u.value.table_id=oe(),delete u.value.number;try{c.value=!0,await ne(u.value),null==t||t.openTablePage(u.value.is_buffet)}catch(e){n("exit",e)}finally{c.value=!1}}},G=()=>{!u.value.buffet_customer_type||u.value.buffet_customer_type.length<=0||(u.value.buffet_customer_type[A.value].num=0)},ce=e=>{u.value.buffet_customer_type[A.value].num=Number(`${(u.value.buffet_customer_type[A.value].num||"").toString()}${e}`)};return U((()=>{setTimeout((()=>{V.value=!0}),500)})),E((()=>u.value.buffet_ids),(()=>{var e;let l=[];((null==(e=u.value)?void 0:e.buffet_ids)||[]).map((e=>{var a;const t=null==(a=S.value)?void 0:a.find((l=>l.id==e));t.buffetCustomerType&&t.buffetCustomerType.length>0&&t.buffetCustomerType.map((e=>{l.findIndex((l=>l.customer_type_id==e.customer_type_id))<0&&l.push({name_text:e.name_text,customer_type_id:e.customer_type_id,num:0})}))})),u.value.buffet_customer_type=Ue(l,"customer_type_id")}),{deep:!0}),E((()=>o.password),(e=>{i.value=e?824:1150})),E((()=>o.show),(async e=>{await J(),1==o.isBuffet&&o.show?(q().then((e=>{var l;if(S.value=e.data,o.isUpdate&&o.buffetIds&&o.buffetIds.length>0){const e=null==(l=S.value)?void 0:l.find((e=>e.id==o.buffetIds[0]));h.value=null==e?void 0:e.is_comb}})),e&&X(),N()):M()}),{immediate:!0}),(l,a)=>{const t=y,w=g,x=T(R("ti-empty-data"),de),k=ue,C=T(R("uni-icons"),Qe),U=ie,E=T(R("ti-keyboard"),ve),W=T(R("ti-input-d"),Ve),H=T(R("ti-modal"),re);return d(),$(ee,null,[v(H,{show:o.show,isBgGray:!0,title:o.title,width:i.value,isBuffet:F.value,isCancelShow:!1,isConfirmShow:!1,onCancel:a[4]||(a[4]=e=>n("update:show",!1))},{content:_((()=>[v(t,{class:"ti-dialog-content"},{default:_((()=>{var l;return[e.password||"1"!=(null==(l=Y(s))?void 0:l.buffet.is_open)?b("",!0):(d(),r(t,{key:0,class:"ti-dinner-select"},{default:_((()=>[v(t,{class:j(["ti-dinner-select-item",{select:F.value,unselect:!F.value}]),onClick:a[0]||(a[0]=e=>N())},{default:_((()=>[p(m(Y(D)("自助餐")),1)])),_:1},8,["class"]),v(t,{class:j(["ti-dinner-select-item",{select:!F.value,unselect:F.value}]),onClick:a[1]||(a[1]=e=>M())},{default:_((()=>[p(m(Y(D)("非自助餐")),1)])),_:1},8,["class"])])),_:1})),F.value&&!e.password?(d(),r(t,{key:1,class:"ti-buffet-box",style:z({"grid-template-columns":o.isBuffetProduct?"1fr":""})},{default:_((()=>[o.isBuffetProduct?b("",!0):(d(),r(k,{key:0,class:"ti-buffet-scroll","scroll-y":""},{default:_((()=>[S.value&&S.value.length>0?(d(),r(t,{key:0,class:"ti-buffet-list"},{default:_((()=>[(d(!0),$(ee,null,le(S.value,(e=>(d(),r(t,{key:e.id,class:j(["ti-buffet-item",{active:u.value.buffet_ids.includes(e.id),disabled:u.value.buffet_ids.length>0&&h.value!=e.is_comb}]),onClick:l=>(e=>{if(!(u.value.buffet_ids.length>0&&h.value!=e.is_comb))if(h.value=e.is_comb,0==h.value)u.value.buffet_ids=u.value.buffet_ids[0]!=e.id?[e.id]:[];else{const l=u.value.buffet_ids.indexOf(e.id);if(l>-1)u.value.buffet_ids.splice(l,1);else{if(u.value.buffet_ids.length>=2)return uni.showToast({title:se("最多只能选择{count}个",{count:2}),icon:"none"});u.value.buffet_ids.push(e.id)}}})(e)},{default:_((()=>[v(t,{class:"ti-buffet-name"},{default:_((()=>[p(m(e.name_text||e.name),1)])),_:2},1024),v(t,null,{default:_((()=>[v(w,{class:"ti-buffet-price"},{default:_((()=>{var l;return[p(m(Y(ae)(e.buffetCustomerType?null==(l=e.buffetCustomerType[0])?void 0:l.price:0)),1)]})),_:2},1024),v(w,{class:"ti-buffet-subPrice"},{default:_((()=>{var l;return[p(m(Y(te)(e.buffetCustomerType?null==(l=e.buffetCustomerType[0])?void 0:l.price:0)),1)]})),_:2},1024)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1})):(d(),r(x,{key:1}))])),_:1})),v(t,{style:{overflow:"hidden"}},{default:_((()=>[v(t,{class:"ti-buffet-info"},{default:_((()=>[P.value&&0!=P.value.length?(d(),$(ee,{key:1},[v(t,{class:"ti-buffet-select"},{default:_((()=>[(d(!0),$(ee,null,le(P.value,((e,l)=>(d(),r(t,{key:l,class:"ti-buffet-select-item"},{default:_((()=>[p(m(e),1)])),_:2},1024)))),128))])),_:1}),u.value.buffet_customer_type&&u.value.buffet_customer_type.length>0?(d(),$(ee,{key:0},[v(t,{class:"ti-buffet-num"},{default:_((()=>[(d(!0),$(ee,null,le(u.value.buffet_customer_type,((e,l)=>(d(),r(t,{key:e.customer_type_id,class:"ti-buffet-num-item"},{default:_((()=>[v(t,{class:"ti-buffet-num-label"},{default:_((()=>[p(m(e.name_text.length>8?e.name_text.slice(0,6)+"...":e.name_text),1)])),_:2},1024),v(t,{class:"ti-buffet-num-input"},{default:_((()=>[v(U,{class:"ti-input-minus",disabled:e.num<=0,onClick:l=>e.num--},{default:_((()=>[v(C,{"custom-prefix":"iconfont",type:"icon-minus",size:"16",color:"#FFBE00"})])),_:2},1032,["disabled","onClick"]),v(t,{class:j(["ti-input-box",{active:A.value==l}]),onClick:e=>A.value=l},{default:_((()=>[p(m(e.num),1)])),_:2},1032,["class","onClick"]),v(U,{class:"ti-input-plus",disabled:f.value>=999,onClick:l=>e.num++},{default:_((()=>[v(C,{type:"plusempty",size:"16",color:"#FFBE00"})])),_:2},1032,["disabled","onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),v(t,{class:"ti-buffet-num-total"},{default:_((()=>[v(w,null,{default:_((()=>[p(m(Y(D)("共")),1)])),_:1}),v(w,{class:"orange"},{default:_((()=>[p(m(f.value),1)])),_:1}),v(w,null,{default:_((()=>[p(m(Y(D)("人")),1)])),_:1})])),_:1})],64)):(d(),r(t,{key:1,class:"ti-buffet-num-empty"},{default:_((()=>[p(m(Y(D)("暂无可选顾客类型")),1)])),_:1}))],64)):(d(),r(t,{key:0,class:"ti-buffet-info-empty"},{default:_((()=>[p(m(Y(D)("请选择自助餐套餐")),1)])),_:1}))])),_:1}),v(t,{class:"ti-dialog-btn",style:{padding:"16px","border-radius":"10px"}},{default:_((()=>[v(E,{primaryLoading:c.value,isDoubleZero:!0,isCross:!1,isDrop:!1,onInput:ce,onClear:G,onConfirm:Z,onExit:O},null,8,["primaryLoading"])])),_:1})])),_:1})])),_:1},8,["style"])):b("",!0),!F.value||e.password?(d(),r(W,{key:2,modelValue:u.value.number,"onUpdate:modelValue":a[2]||(a[2]=e=>u.value.number=e),password:o.password,placeholder:o.placeholder,focus:V.value,onClick:a[3]||(a[3]=e=>{return l="number",void(V.value="number"===l);var l})},null,8,["modelValue","password","placeholder","focus"])):b("",!0)]})),_:1})])),footer:_((()=>[!F.value||e.password?(d(),r(t,{key:0,class:"ti-dialog-footer"},{default:_((()=>[v(E,{onInput:K,onClear:X,onExit:O,onConfirm:Z})])),_:1})):b("",!0)])),_:1},8,["show","title","width","isBuffet"]),v(H,{class:"ti-action-tips",show:I.value,"onUpdate:show":a[5]||(a[5]=e=>I.value=e),title:Y(D)("溫馨提示"),content:Y(se)("[{title}]暂无用户类型，请选择其他自助餐",{title:B.value}),isCancelShow:!1,onConfirm:a[6]||(a[6]=e=>I.value=!1)},null,8,["show","title","content"]),v(H,{class:"ti-dialog-buffet",show:Q.value,title:Y(D)("提示"),onCancel:a[7]||(a[7]=e=>(Q.value=!1,l.directGo=!1)),onConfirm:a[8]||(a[8]=e=>L())},{content:_((()=>[v(t,{class:"ti-dialog-content"},{default:_((()=>[v(k,{class:"ti-buffet-dialog-scroll","scroll-y":""},{default:_((()=>[v(t,{class:"ti-buffet-message"},{default:_((()=>[v(t,{class:"ti-buffet-case"}),v(t,{class:"ti-buffet-text"},{default:_((()=>[p(m(Y(D)("如有剩餘食物，可能產生額外費用")),1)])),_:1})])),_:1}),v(t,{class:"ti-buffet-message"},{default:_((()=>[v(t,{class:"ti-buffet-case"}),v(t,{class:"ti-buffet-text"},{default:_((()=>[p(m(Y(D)("點菜時請考慮您的飽食量，只訂購能夠完全食用的食品數量")),1)])),_:1})])),_:1}),v(t,{class:"ti-buffet-message"},{default:_((()=>[v(t,{class:"ti-buffet-case"}),v(t,{class:"ti-buffet-text"},{default:_((()=>[p(m(Y(D)("對於食品和飲品的過度點單，可能會引發額外費用")),1)])),_:1})])),_:1}),v(t,{class:"ti-buffet-message"},{default:_((()=>[v(t,{class:"ti-buffet-case"}),v(t,{class:"ti-buffet-text"},{default:_((()=>[p(m(Y(D)("如有多餘食物或飲品浪費的情況，我們可能會視情況追加費用")),1)])),_:1})])),_:1}),v(t,{class:"ti-buffet-tips"},{default:_((()=>[p(m(Y(D)("我们鼓励客人谨慎点菜，仅订购会食用完的食品，避免剩菜问题和额外费用")),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title"])],64)}}},[["__scopeId","data-v-404598ef"]]);function Ne(e){return h("base.base/verifyPassword",e)}export{Fe as D,Ye as _,Qe as a,Ne as v};
