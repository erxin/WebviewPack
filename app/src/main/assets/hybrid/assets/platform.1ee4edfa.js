import{ae as t,aK as e,r as i,aL as s,a8 as a,aM as o,aN as n,K as r,ak as l,a as u,s as c,av as d,ad as h,a0 as p,a1 as f,j as m,k as g,w as y,t as _,F as w,v as b,q as v,ac as k,h as C,x as S,y as x,l as A,a2 as T,B,aO as $,aP as I,$ as P,ar as E,p as j,U as R,a4 as M,a6 as D,aQ as O,aG as z,ab as L,z as N,as as F,S as U,aa as V,T as Y,aR as X,L as H,A as K,Y as Q,Z as W,aC as q,aS as G,aT as J,aA as Z,aE as tt}from"./index-c2df6da8.js";import{_ as et,a as it}from"./ti-button.6b9b3c7a.js";const st="object"==typeof global&&global&&global.Object===Object&&global;var at="object"==typeof self&&self&&self.Object===Object&&self;const ot=st||at||Function("return this")();const nt=ot.Symbol;var rt=Object.prototype,lt=rt.hasOwnProperty,ut=rt.toString,ct=nt?nt.toStringTag:void 0;var dt=Object.prototype.toString;var ht="[object Null]",pt="[object Undefined]",ft=nt?nt.toStringTag:void 0;function mt(t){return null==t?void 0===t?pt:ht:ft&&ft in Object(t)?function(t){var e=lt.call(t,ct),i=t[ct];try{t[ct]=void 0;var s=!0}catch(o){}var a=ut.call(t);return s&&(e?t[ct]=i:delete t[ct]),a}(t):function(t){return dt.call(t)}(t)}function gt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var yt="[object AsyncFunction]",_t="[object Function]",wt="[object GeneratorFunction]",bt="[object Proxy]";function vt(t){if(!gt(t))return!1;var e=mt(t);return e==_t||e==wt||e==yt||e==bt}const kt=ot["__core-js_shared__"];var Ct,St=(Ct=/[^.]+$/.exec(kt&&kt.keys&&kt.keys.IE_PROTO||""))?"Symbol(src)_1."+Ct:"";var xt=Function.prototype.toString;function At(t){if(null!=t){try{return xt.call(t)}catch(e){}try{return t+""}catch(e){}}return""}var Tt=/^\[object .+?Constructor\]$/,Bt=Function.prototype,$t=Object.prototype,It=Bt.toString,Pt=$t.hasOwnProperty,Et=RegExp("^"+It.call(Pt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function jt(t){return!(!gt(t)||(e=t,St&&St in e))&&(vt(t)?Et:Tt).test(At(t));var e}function Rt(t,e){var i=function(t,e){return null==t?void 0:t[e]}(t,e);return jt(i)?i:void 0}function Mt(t){return t!=t}function Dt(t,e){return!!(null==t?0:t.length)&&function(t,e,i){return e==e?function(t,e,i){for(var s=i-1,a=t.length;++s<a;)if(t[s]===e)return s;return-1}(t,e,i):function(t,e,i,s){for(var a=t.length,o=i+(s?1:-1);s?o--:++o<a;)if(e(t[o],o,t))return o;return-1}(t,Mt,i)}(t,e,0)>-1}function Ot(t,e){return t===e||t!=t&&e!=e}const zt=Rt(Object,"create");var Lt=Object.prototype.hasOwnProperty;var Nt=Object.prototype.hasOwnProperty;function Ft(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var s=t[e];this.set(s[0],s[1])}}function Ut(t,e){for(var i=t.length;i--;)if(Ot(t[i][0],e))return i;return-1}Ft.prototype.clear=function(){this.__data__=zt?zt(null):{},this.size=0},Ft.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Ft.prototype.get=function(t){var e=this.__data__;if(zt){var i=e[t];return"__lodash_hash_undefined__"===i?void 0:i}return Lt.call(e,t)?e[t]:void 0},Ft.prototype.has=function(t){var e=this.__data__;return zt?void 0!==e[t]:Nt.call(e,t)},Ft.prototype.set=function(t,e){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=zt&&void 0===e?"__lodash_hash_undefined__":e,this};var Vt=Array.prototype.splice;function Yt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var s=t[e];this.set(s[0],s[1])}}Yt.prototype.clear=function(){this.__data__=[],this.size=0},Yt.prototype.delete=function(t){var e=this.__data__,i=Ut(e,t);return!(i<0)&&(i==e.length-1?e.pop():Vt.call(e,i,1),--this.size,!0)},Yt.prototype.get=function(t){var e=this.__data__,i=Ut(e,t);return i<0?void 0:e[i][1]},Yt.prototype.has=function(t){return Ut(this.__data__,t)>-1},Yt.prototype.set=function(t,e){var i=this.__data__,s=Ut(i,t);return s<0?(++this.size,i.push([t,e])):i[s][1]=e,this};const Xt=Rt(ot,"Map");function Ht(t,e){var i,s,a=t.__data__;return("string"==(s=typeof(i=e))||"number"==s||"symbol"==s||"boolean"==s?"__proto__"!==i:null===i)?a["string"==typeof e?"string":"hash"]:a.map}function Kt(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var s=t[e];this.set(s[0],s[1])}}Kt.prototype.clear=function(){this.size=0,this.__data__={hash:new Ft,map:new(Xt||Yt),string:new Ft}},Kt.prototype.delete=function(t){var e=Ht(this,t).delete(t);return this.size-=e?1:0,e},Kt.prototype.get=function(t){return Ht(this,t).get(t)},Kt.prototype.has=function(t){return Ht(this,t).has(t)},Kt.prototype.set=function(t,e){var i=Ht(this,t),s=i.size;return i.set(t,e),this.size+=i.size==s?0:1,this};const Qt=Rt(ot,"Set");function Wt(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new Kt;++e<i;)this.add(t[e])}function qt(t,e){return t.has(e)}function Gt(t){var e=-1,i=Array(t.size);return t.forEach((function(t){i[++e]=t})),i}function Jt(t,e,i){for(var s=-1,a=null==t?0:t.length;++s<a;)if(i(e,t[s]))return!0;return!1}Wt.prototype.add=Wt.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Wt.prototype.has=function(t){return this.__data__.has(t)};const Zt=Qt&&1/Gt(new Qt([,-0]))[1]==1/0?function(t){return new Qt(t)}:function(){};var te=200;function ee(t){return t&&t.length?function(t,e,i){var s=-1,a=Dt,o=t.length,n=!0,r=[],l=r;if(i)n=!1,a=Jt;else if(o>=te){var u=e?null:Zt(t);if(u)return Gt(u);n=!1,a=qt,l=new Wt}else l=e?[]:r;t:for(;++s<o;){var c=t[s],d=e?e(c):c;if(c=i||0!==c?c:0,n&&d==d){for(var h=l.length;h--;)if(l[h]===d)continue t;e&&l.push(d),r.push(c)}else a(l,d,i)||(l!==r&&l.push(d),r.push(c))}return r}(t):[]}const ie=`${{}.VITE_APP_NAME}_goods_list`.toUpperCase(),se=`${{}.VITE_APP_NAME}_goods_page`.toUpperCase(),ae=e("goodsList",(()=>{const e=i([]),u=i({}),c=i(!1),d=i({}),h=i({}),{nameTranslate:p}=s();a((()=>e.value),(()=>{o(ie,e.value)}),{deep:!0}),a((()=>u.value),(()=>{o(se,u.value)}),{deep:!0});return{goodsInfo:h,goodsLoading:c,getGoodsInfo:t=>{const i=[];return t&&t.length>0&&t.map((t=>{const s=e.value.find((e=>e.product_id==t));s&&i.push(s)})),i},getCacheGoodsList:async(i,s=!1)=>{var a,o,f,m,g,y,_,w,b,v;let k={};!0===i?(n(se),k=d.value):(d.value=i,k=i),e.value=r(ie)||[],u.value=r(se)||{},k.page=1,k.list_rows=100,k.order_id=l();const C=u.value[k.category_id||"0"];if(!0!==i&&(null==C?void 0:C.list)){if(null==C||C.list_rows,null==k||k.list_rows,!(null==C?void 0:C.isNextPage)||!s)return void(h.value=C);k.page=(null==C?void 0:C.page)+1}try{1==k.page&&(c.value=!0);const i=await function(e){return t("product.product/index",e,{isLoading:!1})}(k),s=[],n=[];(null==(o=null==(a=i.data)?void 0:a.list)?void 0:o.data)&&(null==(m=null==(f=i.data)?void 0:f.list)?void 0:m.data.length)>0&&(null==(y=null==(g=i.data)?void 0:g.list)||y.data.map((t=>{var i;const a=null==(i=e.value)?void 0:i.findIndex((e=>e.product_id==t.product_id));t.product_name=p(t.product_name),t.product_unit=p(t.product_unit),t.sku&&t.sku.length>0&&t.sku.map(((e,i)=>{e.spec_name_i18n=p(e.spec_name),t.sku[i]=e})),t.product_attr&&t.product_attr.length>0&&t.product_attr.map(((e,i)=>{e.attribute_name_i18n=p(e.attribute_name),t.product_attr[i]=e;const s=[];((null==e?void 0:e.attribute_value)||[]).map((t=>{s.push(p(t))})),e.attribute_value_i18n=s,t.product_attr[i]=e})),t.feed&&t.feed.length>0&&t.feed.map(((e,i)=>{e.feed_name_i18n=p(e.feed_name),t.feed[i]=e})),-1===a?s.push(t):e.value.splice(a,1,t),n.push(t.product_id)}))),e.value=(e.value||[]).concat(s);const r={...k,list:ee(((null==C?void 0:C.list)||[]).concat(n)),isNextPage:(null==(w=null==(_=i.data)?void 0:_.list)?void 0:w.last_page)>(null==(v=null==(b=i.data)?void 0:b.list)?void 0:v.current_page)};u.value[k.category_id||"0"]=r,h.value=r}catch(S){}finally{c.value=!1}},clearGoodsData:()=>{e.value=[],u.value={}}}})),oe={name:{en:"All",zh:"全部",zhtw:"所有",th:"ทั้งหมด",ja:"全部",ko:"모두",tr:"Tümü"},name_text:"All",category_id:0},ne=`${{}.VITE_APP_NAME}_category`.toUpperCase(),re=e("categoryStore",(()=>{const e=i(!1),n=i([]),l=i(),{nameTranslate:u}=s();a((()=>n.value),(()=>{o(ne,n.value)}),{deep:!0});const c=async(i=!1)=>{var s;if(e.value)return;const a=r(ne)||[];if(!i&&a&&a.length>0)return n.value=a,void d();try{e.value=!0;const i=await t("product.category/index"),a=[];i.data.list&&i.data.list.length>0&&(null==(s=i.data.list)||s.map((t=>{t.name=u(t.name),t.child&&t.child.length>0&&t.child.map((t=>{t.name=u(t.name)})),a.push(t)})),a.push(oe)),n.value=a,Promise.resolve(a)}catch(o){Promise.resolve(arr)}finally{e.value=!1,d()}},d=()=>{l.value&&clearTimeout(l.value),l.value=setTimeout((()=>{c(!0)}),6e5)};return{categoryLoading:e,categoryList:n,getCategory:c,clearCategory:()=>{n.value=[]}}})),le=et({__name:"ti-layout-language-item",props:{firstBind:{type:Boolean,default:!1}},emits:["languageText"],setup(t,{expose:e,emit:s}){const a=re(),o=t,n=u(),{userInfo:r}=c(n),{changeLocale:l}=d(),M=h((()=>p[f()])),D=i(),O=i(!1),z=()=>{O.value=!1,I(O.value),E("closeShowLanguage",(t=>{}))};e({open:()=>{D.value=$()||[],O.value=!0,I(O.value),P("closeShowLanguage",(t=>{z()}))},close:z,isShow:()=>O.value,languageText:M});const L=s;return(t,e)=>{const i=j,s=R;return O.value?(m(),g(i,{key:0,class:"ti-language-bg",onClick:e[0]||(e[0]=T((()=>{}),["stop"]))},{default:y((()=>{return[(m(!0),_(w,null,b(1==o.firstBind?D.value||[]:(null==(n=null==(e=null==(t=r.value)?void 0:t.tablet)?void 0:e.language_list)?void 0:n.length)>0?null==(c=null==(u=r.value)?void 0:u.tablet)?void 0:c.language_list:D.value,((t,e)=>(m(),g(i,{class:"ti-item-box",key:e},{default:y((()=>[v(i,{class:k(t.key==C(f)()?"ti-item-content-select":"ti-item-content"),onClick:e=>((t,e)=>{t&&t!==f()&&(B(!0),l(t,e),L("languageText"),a.getCategory())})(t.key,t.index)},{default:y((()=>[v(i,{class:"ti-content-title"},{default:y((()=>[S(x(t.value),1)])),_:2},1024),t.disable?(m(),g(s,{key:0,class:"ti-content-tick",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZLdDcIgFIUPjYmPOgIjOIKJP886kTqJI9Q3X9S6Qd1AR3AAE7wgGmxpCoW+cRKSWyjf195cICUlNAwRInKMMUJOJccLa7bE7XuWITAaXlA5VYKMlpEggQGffDawY3McECMSLi4oaQm1zti6XTyCqy+LBP9rkThhhSHu9NulFDXBa22ZOQro5aeuOImKqsQXXhOwBa7ykk3SBa6Ytk3VU4aNfnzI2cYAe194o8AiMQ7c4a2Rkt+k+IxiJ0kf8JQUp7wBvkBoT4kIzsUAAAAASUVORK5CYII="})):A("",!0)])),_:2},1032,["class","onClick"])])),_:2},1024)))),128))];var t,e,n,u,c})),_:1})):A("",!0)}}},[["__scopeId","data-v-6de96af5"]]),ue=""+new URL("clear-icon-16ceeab3.png",import.meta.url).href;function ce(t){let e="";for(let i in t){e+=`${i}:${t[i]};`}return e}const de=et({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change","keyboardheightchange"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:18},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!1},cursorSpacing:{type:Number,default:0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#FFBE00"},styles:{type:Object,default:()=>({color:"#100A05",backgroundColor:"#fff",disableColor:"#F7F6F6",borderColor:"#24160B26"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1,floor:.733}),computed:{isVal(){const t=this.val;return!(!t&&0!==t)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(t){let e="";for(let i in t)t[i]&&(e+=`${i} `);return e}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled,"is-focused":this.focusShow})},inputContentStyle(){const t=this.focusShow?this.primaryColor:this.styles.borderColor;return ce({"border-color":(this.inputBorder&&this.msg?"#dd524d":t)||"#24160B26","background-color":this.disabled?this.styles.disableColor:this.styles.backgroundColor})},inputStyle(){return ce({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":16*this.floor+"px","padding-left":this.prefixIcon?"":16*this.floor+"px"})}},watch:{value(t){this.val=t},modelValue(t){this.val=t},focus(t){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(t=>{this.localMsg=t}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue||""===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(t){this.$emit("iconClick",t)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(t){let e=t.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(e=this.trimStr(e)),"string"==typeof this.trim&&(e=this.trimStr(e,this.trim))),this.errMsg&&(this.errMsg=""),this.val=e,this.$emit("input",e),this.$emit("update:modelValue",e)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(t){this.focusShow=!0,this.$emit("focus",t)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(t){if(t.detail.value,this.focusShow=!1,this.$emit("blur",t),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:t}=this.form;"blur"===t&&this.formItem.onFieldChange()}},onConfirm(t){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(t){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},onkeyboardheightchange(t){this.$emit("keyboardheightchange",t)},trimStr:(t,e="both")=>"both"===e?t.trim():"left"===e?t.trimLeft():"right"===e?t.trimRight():"start"===e?t.trimStart():"end"===e?t.trimEnd():"all"===e?t.replace(/\s+/g,""):t}},[["render",function(t,e,i,s,a,o){const n=O,r=z,l=R,u=j;return m(),g(u,{class:k(["uni-easyinput",{"uni-easyinput-error":o.msg}]),style:M(o.boxStyle)},{default:y((()=>[v(u,{class:k(["uni-easyinput__content",o.inputContentClass]),style:M(o.inputContentStyle)},{default:y((()=>["textarea"===i.type?(m(),g(n,{key:0,class:k(["uni-easyinput__content-textarea",{"input-padding":i.inputBorder}]),name:i.name,value:a.val,placeholder:i.placeholder,placeholderStyle:i.placeholderStyle,disabled:i.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:o.inputMaxlength,focus:a.focused,autoHeight:i.autoHeight,"cursor-spacing":i.cursorSpacing,onInput:o.onInput,onBlur:o._Blur,onFocus:o._Focus,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","cursor-spacing","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])):(m(),g(r,{key:1,type:"password"===i.type?"text":i.type,class:"uni-easyinput__content-input",style:M(o.inputStyle),name:i.name,value:a.val,password:!a.showPassword&&"password"===i.type,placeholder:i.placeholder,placeholderStyle:i.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:i.disabled,maxlength:o.inputMaxlength,focus:a.focused,confirmType:i.confirmType,"cursor-spacing":i.cursorSpacing,onFocus:o._Focus,onBlur:o._Blur,onInput:o.onInput,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","onFocus","onBlur","onInput","onConfirm","onKeyboardheightchange"])),"password"===i.type&&i.passwordIcon?(m(),_(w,{key:2},[o.isVal?(m(),g(l,{key:0,class:k(["content-clear-icon",{"is-textarea-icon":"textarea"===i.type}]),src:a.showPassword?"../../static/eye.png":"../../static/eye-off.png",style:M({width:i.clearSize+"px",height:i.clearSize+"px"}),onClick:o.onEyes},null,8,["class","src","style","onClick"])):A("",!0)],64)):(m(),_(w,{key:3},[i.clearable&&o.isVal&&!i.disabled&&"textarea"!==i.type?(m(),g(l,{key:0,class:k(["content-clear-icon",{"is-textarea-icon":"textarea"===i.type}]),style:M({width:i.clearSize+"px",height:i.clearSize+"px"}),src:ue,onClick:o.onClear},null,8,["class","style","onClick"])):A("",!0)],64)),D(t.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-9cf5eec2"]]);const he=et({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((t,e)=>{t===this&&this.grid.children.splice(e,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(t,e,i,s,a,o){const n=j;return a.width?(m(),g(n,{key:0,style:M("width:"+a.width+";"+(a.square?"height:"+a.width:"")),class:"uni-grid-item"},{default:y((()=>[v(n,{class:k([{"uni-grid-item--border":a.showBorder,"uni-grid-item--border-top":a.showBorder&&i.index<a.column,"uni-highlight":a.highlight},"uni-grid-item__box"]),style:M({"border-right-color":a.borderColor,"border-bottom-color":a.borderColor,"border-top-color":a.borderColor}),onClick:o._onClick},{default:y((()=>[D(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):A("",!0)}],["__scopeId","data-v-3455ce29"]]);const pe=et({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((t=>{this.children.forEach(((e,i)=>{e.width=t}))}))}),50)},change(t){this.$emit("change",t)},_getSize(t){L().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.width=parseInt((e[0].width-1)/this.column)+"px",t(this.width)}))}}},[["render",function(t,e,i,s,a,o){const n=j;return m(),g(n,{class:"uni-grid-wrap"},{default:y((()=>[v(n,{id:a.elId,ref:"uni-grid",class:k(["uni-grid",{"uni-grid--border":i.showBorder}]),style:M({"border-left-color":i.borderColor})},{default:y((()=>[D(t.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-5a104fd6"]]),fe=""+new URL("empty-16cbc551.svg",import.meta.url).href,me=et({__name:"ti-empty-data",props:{title:{type:String,default:""},image:{type:String,default:fe}},setup(t){const e=t;return(t,i)=>{const s=R,a=j;return m(),g(a,{class:"ti-empty-data"},{default:y((()=>[v(a,{class:"ti-empty-image"},{default:y((()=>[v(s,{src:e.image,mode:"widthFix"},null,8,["src"])])),_:1}),v(a,{class:"ti-empty-text"},{default:y((()=>[S(x(e.title||C(N)("暫無數據")),1)])),_:1})])),_:1})}}},[["__scopeId","data-v-d7d52e83"]]);const ge=et({name:"UniDrawer",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const i=Object.keys(t).find((i=>{const s=e.key,a=t[i];return a===s||Array.isArray(a)&&a.includes(s)}));i&&setTimeout((()=>{this.$emit(i,{})}),0)}))},render:()=>{}}},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:()=>({visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}),created(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear(){},close(t){("mask"!==t||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change(t,e,i){this[t]=i,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((()=>{this[e]=i,this.$emit("change",i)}),i?50:300)}}},[["render",function(t,e,i,s,a,o){const n=j,r=F("keypress");return a.visibleSync?(m(),g(n,{key:0,class:k([{"uni-drawer--visible":a.showDrawer},"uni-drawer"]),onTouchmove:T(o.clear,["stop","prevent"])},{default:y((()=>[v(n,{class:k(["uni-drawer__mask",{"uni-drawer__mask--visible":a.showDrawer&&i.mask}]),onClick:e[0]||(e[0]=t=>o.close("mask"))},null,8,["class"]),v(n,{class:k(["uni-drawer__content",{"uni-drawer--right":a.rightMode,"uni-drawer--left":!a.rightMode,"uni-drawer__content--visible":a.showDrawer}]),style:M({width:a.drawerWidth+"px"})},{default:y((()=>[D(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),v(r,{onEsc:e[1]||(e[1]=t=>o.close("mask"))})])),_:3},8,["class","onTouchmove"])):A("",!0)}],["__scopeId","data-v-2fca6e47"]]),ye=et({__name:"ti-drawer",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:N("退出")},confirmText:{type:String,default:N("確定")},width:{type:Number,default:552},mode:{type:String,default:"right"}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=e,o=t,n=i();a((()=>o.show),(async t=>{var e,i;t?(await V(),null==(e=n.value)||e.open()):null==(i=n.value)||i.close()}),{immediate:!0});const r=()=>{s("update:show",!1),s("cancel")},l=()=>{s("confirm")};return(e,i)=>{const a=j,u=U(Y("ti-button"),it),c=U(Y("uni-drawer"),ge);return m(),g(c,{class:"ti-drawer",ref_key:"drawerRef",ref:n,"mask-click":o.maskClick,width:o.width,mode:o.mode,onChange:i[0]||(i[0]=t=>{t||(s("update:show",!1),s("cancel"))})},{default:y((()=>[v(a,{class:"ti-drawer-box"},{default:y((()=>[D(e.$slots,"title",{},(()=>[v(a,{class:"ti-drawer-title"},{default:y((()=>[S(x(t.title),1)])),_:1})]),!0),v(a,{class:"ti-drawer-content"},{default:y((()=>[D(e.$slots,"content",{},void 0,!0)])),_:3}),D(e.$slots,"footer",{},(()=>[v(a,{class:"ti-drawer-footer"},{default:y((()=>[t.isCancelShow?(m(),g(u,{key:0,onClick:r},{default:y((()=>[S(x(t.cancelText),1)])),_:1})):A("",!0),t.isConfirmShow?(m(),g(u,{key:1,loading:t.confirmLoading,type:"primary",onClick:l},{default:y((()=>[S(x(t.confirmText),1)])),_:1},8,["loading"])):A("",!0)])),_:1})]),!0)])),_:3})])),_:3},8,["mask-click","width","mode"])}}},[["__scopeId","data-v-7d7bb03c"]]),_e=et({__name:"ti-layout-table-list",props:{show:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=t,o=e,n=()=>{o("update:show",!1),o("cancel","")},r=()=>{o("confirm",u.value)};a((()=>s.show),(async t=>{await V(),t&&c()}),{immediate:!0});const l=i([]),u=i(),c=async()=>{try{const t=await X({table_id:H()});l.value=t.data.list,t.data.curTable&&l.value.push(t.data.curTable),0!==l.value.length&&(t.data.curTable?u.value=t.data.curTable:u.value=l.value[0],l.value.forEach(((t,e)=>{t.table_no===u.value.table_no?t.isSelect=!0:t.isSelect=!1})))}catch(t){}};return(t,e)=>{const i=Q,a=j,o=U(Y("uni-grid-item"),he),c=U(Y("uni-grid"),pe),d=U(Y("ti-empty-data"),me),h=W,p=U(Y("ti-drawer"),ye);return m(),g(p,{show:s.show,width:603.992,title:t.$t("選擇當前平板對應桌位"),cancelText:t.$t("退出"),confirmText:t.$t("確定"),maskClick:!0,onCancel:n,onConfirm:r},{content:y((()=>[v(a,{class:"ti-drawer-page"},{default:y((()=>[v(a,{class:"ti-drawer-container"},{default:y((()=>[v(h,{class:"ti-scroll","scroll-y":!0,"show-scrollbar":!0},{default:y((()=>[0!==l.value.length?(m(),g(c,{key:0,class:"ti-grid-box",column:3,"show-border":!1,square:!1,highlight:!1},{default:y((()=>[(m(!0),_(w,null,b(l.value,((t,e)=>(m(),g(o,{index:e,key:e},{default:y((()=>[v(a,{class:k([!0===t.isSelect?"ti-grid-item-box-selected":"ti-grid-item-box"]),onClick:e=>(t=>{l.value.forEach(((e,i)=>{e.table_no===t.table_no?(u.value=t,e.isSelect=!0):e.isSelect=!1}))})(t)},{default:y((()=>[v(i,{class:"ti-grid-table-number"},{default:y((()=>[S(x(C(K)(t.table_no,12)),1)])),_:2},1024)])),_:2},1032,["class","onClick"])])),_:2},1032,["index"])))),128))])),_:1})):A("",!0),0===l.value.length?(m(),g(d,{key:1,class:"ti-empty-data-top",title:t.$t("當前無桌位")},null,8,["title"])):A("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title","cancelText","confirmText"])}}},[["__scopeId","data-v-c94ad521"]]);class we{constructor(t,e){this.options=t,this.animation=q({...t}),this.currentStepAnimates={},this.next=0,this.$=e}_nvuePushAnimates(t,e){let i=this.currentStepAnimates[this.next],s={};if(s=i||{styles:{},config:{}},be.includes(t)){s.styles.transform||(s.styles.transform="");let i="";"rotate"===t&&(i="deg"),s.styles.transform+=`${t}(${e+i}) `}else s.styles[t]=`${e}`;this.currentStepAnimates[this.next]=s}_animateRun(t={},e={}){let i=this.$.$refs.ani.ref;if(i)return new Promise(((s,a)=>{nvueAnimation.transition(i,{styles:t,...e},(t=>{s()}))}))}_nvueNextAnimate(t,e=0,i){let s=t[e];if(s){let{styles:a,config:o}=s;this._animateRun(a,o).then((()=>{e+=1,this._nvueNextAnimate(t,e,i)}))}else this.currentStepAnimates={},"function"==typeof i&&i(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const be=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function ve(t,e){if(e)return clearTimeout(e.timer),new we(t,e)}be.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{we.prototype[t]=function(...e){return this.animation[t](...e),this}}));const ke=et({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},e="";for(let i in t){e+=this.toLine(i)+":"+t[i]+";"}return e},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=ve(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,e={}){if(this.animation){for(let e in t)try{"object"==typeof t[e]?this.animation[e](...t[e]):this.animation[e](t[e])}catch(i){}return this.animation.step(e),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:e}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=e,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=ve(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:e}=this.styleInit(!1);this.opacity=t||1,this.transform=e,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let e={transform:""},i=(t,i)=>{"fade"===i?e.opacity=this.animationType(t)[i]:e.transform+=this.animationType(t)[i]+" "};return"string"==typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((e=>{i(t,e)})),e},tranfromInit(t){let e=(t,e)=>{let i=null;"fade"===e?i=t?0:1:(i=t?"-100%":"0","zoom-in"===e&&(i=t?.8:1),"zoom-out"===e&&(i=t?1.2:1),"slide-right"===e&&(i=t?"100%":"0"),"slide-bottom"===e&&(i=t?"100%":"0")),this.animation[this.animationMode()[e]](i)};return"string"==typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((i=>{e(t,i)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,e,i,s,a,o){const n=j;return G((m(),g(n,{ref:"ani",animation:a.animationData,class:k(i.customClass),style:M(o.transformStyles),onClick:o.onClick},{default:y((()=>[D(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])),[[J,a.isShow]])}]]);const Ce=et({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const i=Object.keys(t).find((i=>{const s=e.key,a=t[i];return a===s||Array.isArray(a)&&a.includes(s)}));i&&setTimeout((()=>{this.$emit(i,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},borderRadius:{type:String}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{backgroundColor:"transparent",borderRadius:this.borderRadius||"0",position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},computed:{getStyles(){let t={backgroundColor:this.bg};return this.borderRadius,t=Object.assign(t,{borderRadius:this.borderRadius}),t},isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:e,windowTop:i,safeArea:s,screenHeight:a,safeAreaInsets:o}=Z();this.popupWidth=t,this.popupHeight=e+(i||0),s&&this.safeArea?this.safeAreaInsets=o.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},activated(){this.setH5Visible(!this.showPopup)},deactivated(){this.setH5Visible(!0)},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(t=!0){document.getElementsByTagName("body")[0].style.overflow=t?"visible":"hidden"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]&&(this[this.config[t]](),this.$emit("change",{show:!0,type:t}))},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg,borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center",borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0",display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0",display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,e,i,s,a,o){const n=U(Y("uni-transition"),ke),r=j,l=F("keypress");return a.showPopup?(m(),g(r,{key:0,class:k(["uni-popup",[a.popupstyle,o.isDesktop?"fixforpc-z-index":""]])},{default:y((()=>[v(r,{onTouchstart:o.touchstart},{default:y((()=>[a.maskShow?(m(),g(n,{key:"1",name:"mask","mode-class":"fade",styles:a.maskClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},null,8,["styles","duration","show","onClick"])):A("",!0),v(n,{key:"2","mode-class":a.ani,name:"content",styles:a.transClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},{default:y((()=>[v(r,{class:k(["uni-popup__wrapper",[a.popupstyle]]),style:M(o.getStyles),onClick:o.clear},{default:y((()=>[D(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),a.maskShow?(m(),g(l,{key:0,onEsc:o.onTap},null,8,["onEsc"])):A("",!0)])),_:3},8,["class"])):A("",!0)}],["__scopeId","data-v-a025ab8e"]]),Se=et({__name:"ti-modal",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""},content:{type:String,default:null},width:Number,isBuffet:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=e,o=t,n=i();tt({width:o.width+"px"});a((()=>o.show),(async t=>{var e,i;t?(await V(),null==(e=n.value)||e.open()):null==(i=n.value)||i.close()}),{immediate:!0});const r=()=>{s("update:show",!1),s("cancel")},l=()=>{s("confirm")};return(e,i)=>{const s=j,a=U(Y("ti-button"),it),u=U(Y("uni-popup"),Ce);return m(),g(u,{ref_key:"dialogRef",ref:n,"mask-click":o.maskClick,maskBackgroundColor:"#100A05B3"},{default:y((()=>{return[v(s,{class:"ti-dialog-box",style:M({width:(i=t.width,Math.floor(.733*i)+"px")})},{default:y((()=>[v(s,{class:"ti-dialog-top"},{default:y((()=>[D(e.$slots,"title",{},(()=>[v(s,{class:"ti-dialog-title"},{default:y((()=>[S(x(o.title),1)])),_:1})]),!0),D(e.$slots,"content",{},(()=>[v(s,{class:"ti-dialog-content"},{default:y((()=>[S(x(o.content),1)])),_:1})]),!0)])),_:3}),D(e.$slots,"footer",{},(()=>[v(s,{class:k(["ti-dialog-btn",{"not-padding":o.isBuffet}])},{default:y((()=>[t.isCancelShow?(m(),g(a,{key:0,onClick:r},{default:y((()=>[S(x(o.cancelText||C(N)("退出")),1)])),_:1})):A("",!0),t.isConfirmShow?(m(),g(a,{key:1,loading:t.confirmLoading,type:"primary",onClick:l},{default:y((()=>[S(x(o.confirmText||C(N)("確定")),1)])),_:1},8,["loading"])):A("",!0)])),_:1},8,["class"])]),!0)])),_:3},8,["style"])];var i})),_:3},8,["mask-click"])}}},[["__scopeId","data-v-9484592a"]]),xe=""+new URL("icon-ring-192350e1.svg",import.meta.url).href;function Ae(){return/JBCWeb/.test(navigator.userAgent)}function Te(){var t;return(null==(t=window.androidIDInterface)?void 0:t.getAndroidID())||""}export{Yt as L,Kt as M,nt as S,xe as _,de as a,_e as b,Se as c,le as d,gt as e,oe as f,Te as g,me as h,Ae as i,ae as j,ye as k,mt as l,Rt as m,vt as n,Ot as o,st as p,Xt as q,ot as r,Qt as s,At as t,re as u,Wt as v,qt as w,Gt as x};
