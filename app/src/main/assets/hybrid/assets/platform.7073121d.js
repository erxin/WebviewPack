import{a as t,s as e,a_ as s,ah as i,a1 as a,a2 as o,r as n,k as l,l as r,w as c,v as h,F as u,x as d,t as p,an as m,j as f,y as g,z as y,m as w,a3 as k,C as b,a$ as C,b0 as S,$ as v,az as _,q as x,T as A,a5 as T,ac as B,b1 as $,aS as I,A as R,aA as D,ak as E,R as M,am as P,S as L,b2 as V,M as F,B as X,X as Y,Y as U,ae as z,aC as N,aD as j,aa as O,ag as H}from"./index-9d308072.js";import{_ as K,a as W}from"./ti-button.3002c198.js";const Q=K({__name:"ti-layout-language-item",props:{firstBind:{type:Boolean,default:!1}},emits:["languageText"],setup(T,{expose:B,emit:$}){const I=T,R=t(),{userInfo:D}=e(R),{changeLocale:E}=s(),M=i((()=>a[o()])),P=n(),L=n(!1),V=()=>{L.value=!1,S(L.value),_("closeShowLanguage",(t=>{}))};B({open:()=>{P.value=C()||[],L.value=!0,S(L.value),v("closeShowLanguage",(t=>{V()}))},close:V,isShow:()=>L.value,languageText:M});const F=$;return(t,e)=>{const s=x,i=A;return L.value?(l(),r(s,{key:0,class:"ti-language-bg",onClick:e[0]||(e[0]=k((()=>{}),["stop"]))},{default:c((()=>{return[(l(!0),h(u,null,d(1==I.firstBind?P.value||[]:(null==(a=null==(e=null==(t=D.value)?void 0:t.tablet)?void 0:e.language_list)?void 0:a.length)>0?null==(k=null==(n=D.value)?void 0:n.tablet)?void 0:k.language_list:P.value,((t,e)=>(l(),r(s,{class:"ti-item-box",key:e},{default:c((()=>[p(s,{class:m(t.key==f(o)()?"ti-item-content-select":"ti-item-content"),onClick:e=>((t,e)=>{t&&t!==o()&&(b(!0),E(t,e),F("languageText"))})(t.key,t.index)},{default:c((()=>[p(s,{class:"ti-content-title"},{default:c((()=>[g(y(t.value),1)])),_:2},1024),t.disable?(l(),r(i,{key:0,class:"ti-content-tick",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZLdDcIgFIUPjYmPOgIjOIKJP886kTqJI9Q3X9S6Qd1AR3AAE7wgGmxpCoW+cRKSWyjf195cICUlNAwRInKMMUJOJccLa7bE7XuWITAaXlA5VYKMlpEggQGffDawY3McECMSLi4oaQm1zti6XTyCqy+LBP9rkThhhSHu9NulFDXBa22ZOQro5aeuOImKqsQXXhOwBa7ykk3SBa6Ytk3VU4aNfnzI2cYAe194o8AiMQ7c4a2Rkt+k+IxiJ0kf8JQUp7wBvkBoT4kIzsUAAAAASUVORK5CYII="})):w("",!0)])),_:2},1032,["class","onClick"])])),_:2},1024)))),128))];var t,e,a,n,k})),_:1})):w("",!0)}}},[["__scopeId","data-v-de4852df"]]),J=""+new URL("clear-icon-16ceeab3.png",import.meta.url).href;function Z(t){let e="";for(let s in t){e+=`${s}:${t[s]};`}return e}const q=K({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change","keyboardheightchange"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:18},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!1},cursorSpacing:{type:Number,default:0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#FFBE00"},styles:{type:Object,default:()=>({color:"#100A05",backgroundColor:"#fff",disableColor:"#F7F6F6",borderColor:"#24160B26"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1,floor:.733}),computed:{isVal(){const t=this.val;return!(!t&&0!==t)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(t){let e="";for(let s in t)t[s]&&(e+=`${s} `);return e}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled,"is-focused":this.focusShow})},inputContentStyle(){const t=this.focusShow?this.primaryColor:this.styles.borderColor;return Z({"border-color":(this.inputBorder&&this.msg?"#dd524d":t)||"#24160B26","background-color":this.disabled?this.styles.disableColor:this.styles.backgroundColor})},inputStyle(){return Z({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":16*this.floor+"px","padding-left":this.prefixIcon?"":16*this.floor+"px"})}},watch:{value(t){this.val=t},modelValue(t){this.val=t},focus(t){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(t=>{this.localMsg=t}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue||""===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(t){this.$emit("iconClick",t)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(t){let e=t.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(e=this.trimStr(e)),"string"==typeof this.trim&&(e=this.trimStr(e,this.trim))),this.errMsg&&(this.errMsg=""),this.val=e,this.$emit("input",e),this.$emit("update:modelValue",e)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(t){this.focusShow=!0,this.$emit("focus",t)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(t){if(t.detail.value,this.focusShow=!1,this.$emit("blur",t),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:t}=this.form;"blur"===t&&this.formItem.onFieldChange()}},onConfirm(t){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(t){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},onkeyboardheightchange(t){this.$emit("keyboardheightchange",t)},trimStr:(t,e="both")=>"both"===e?t.trim():"left"===e?t.trimLeft():"right"===e?t.trimRight():"start"===e?t.trimStart():"end"===e?t.trimEnd():"all"===e?t.replace(/\s+/g,""):t}},[["render",function(t,e,s,i,a,o){const n=$,d=I,f=A,g=x;return l(),r(g,{class:m(["uni-easyinput",{"uni-easyinput-error":o.msg}]),style:T(o.boxStyle)},{default:c((()=>[p(g,{class:m(["uni-easyinput__content",o.inputContentClass]),style:T(o.inputContentStyle)},{default:c((()=>["textarea"===s.type?(l(),r(n,{key:0,class:m(["uni-easyinput__content-textarea",{"input-padding":s.inputBorder}]),name:s.name,value:a.val,placeholder:s.placeholder,placeholderStyle:s.placeholderStyle,disabled:s.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:o.inputMaxlength,focus:a.focused,autoHeight:s.autoHeight,"cursor-spacing":s.cursorSpacing,onInput:o.onInput,onBlur:o._Blur,onFocus:o._Focus,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","cursor-spacing","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])):(l(),r(d,{key:1,type:"password"===s.type?"text":s.type,class:"uni-easyinput__content-input",style:T(o.inputStyle),name:s.name,value:a.val,password:!a.showPassword&&"password"===s.type,placeholder:s.placeholder,placeholderStyle:s.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:s.disabled,maxlength:o.inputMaxlength,focus:a.focused,confirmType:s.confirmType,"cursor-spacing":s.cursorSpacing,onFocus:o._Focus,onBlur:o._Blur,onInput:o.onInput,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","onFocus","onBlur","onInput","onConfirm","onKeyboardheightchange"])),"password"===s.type&&s.passwordIcon?(l(),h(u,{key:2},[o.isVal?(l(),r(f,{key:0,class:m(["content-clear-icon",{"is-textarea-icon":"textarea"===s.type}]),src:a.showPassword?"../../static/eye.png":"../../static/eye-off.png",style:T({width:s.clearSize+"px",height:s.clearSize+"px"}),onClick:o.onEyes},null,8,["class","src","style","onClick"])):w("",!0)],64)):(l(),h(u,{key:3},[s.clearable&&o.isVal&&!s.disabled&&"textarea"!==s.type?(l(),r(f,{key:0,class:m(["content-clear-icon",{"is-textarea-icon":"textarea"===s.type}]),style:T({width:s.clearSize+"px",height:s.clearSize+"px"}),src:J,onClick:o.onClear},null,8,["class","style","onClick"])):w("",!0)],64)),B(t.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-9cf5eec2"]]),G=""+new URL("empty-16cbc551.svg",import.meta.url).href,tt=K({__name:"ti-empty-data",props:{title:{type:String,default:""},image:{type:String,default:G}},setup(t){const e=t;return(t,s)=>{const i=A,a=x;return l(),r(a,{class:"ti-empty-data"},{default:c((()=>[p(a,{class:"ti-empty-image"},{default:c((()=>[p(i,{src:e.image,mode:"widthFix"},null,8,["src"])])),_:1}),p(a,{class:"ti-empty-text"},{default:c((()=>[g(y(e.title||f(R)("暫無數據")),1)])),_:1})])),_:1})}}},[["__scopeId","data-v-d7d52e83"]]);const et=K({name:"UniDrawer",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const s=Object.keys(t).find((s=>{const i=e.key,a=t[s];return a===i||Array.isArray(a)&&a.includes(i)}));s&&setTimeout((()=>{this.$emit(s,{})}),0)}))},render:()=>{}}},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:()=>({visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}),created(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear(){},close(t){("mask"!==t||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change(t,e,s){this[t]=s,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((()=>{this[e]=s,this.$emit("change",s)}),s?50:300)}}},[["render",function(t,e,s,i,a,o){const n=x,h=D("keypress");return a.visibleSync?(l(),r(n,{key:0,class:m([{"uni-drawer--visible":a.showDrawer},"uni-drawer"]),onTouchmove:k(o.clear,["stop","prevent"])},{default:c((()=>[p(n,{class:m(["uni-drawer__mask",{"uni-drawer__mask--visible":a.showDrawer&&s.mask}]),onClick:e[0]||(e[0]=t=>o.close("mask"))},null,8,["class"]),p(n,{class:m(["uni-drawer__content",{"uni-drawer--right":a.rightMode,"uni-drawer--left":!a.rightMode,"uni-drawer__content--visible":a.showDrawer}]),style:T({width:a.drawerWidth+"px"})},{default:c((()=>[B(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),p(h,{onEsc:e[1]||(e[1]=t=>o.close("mask"))})])),_:3},8,["class","onTouchmove"])):w("",!0)}],["__scopeId","data-v-2fca6e47"]]),st=K({__name:"ti-drawer",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:R("退出")},confirmText:{type:String,default:R("確定")},width:{type:Number,default:552},mode:{type:String,default:"right"}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=e,i=t,a=n();E((()=>i.show),(async t=>{var e,s;t?(await P(),null==(e=a.value)||e.open()):null==(s=a.value)||s.close()}),{immediate:!0});const o=()=>{s("update:show",!1),s("cancel")},h=()=>{s("confirm")};return(e,n)=>{const u=x,d=M(L("ti-button"),W),m=M(L("uni-drawer"),et);return l(),r(m,{class:"ti-drawer",ref_key:"drawerRef",ref:a,"mask-click":i.maskClick,width:i.width,mode:i.mode,onChange:n[0]||(n[0]=t=>{t||(s("update:show",!1),s("cancel"))})},{default:c((()=>[p(u,{class:"ti-drawer-box"},{default:c((()=>[B(e.$slots,"title",{},(()=>[p(u,{class:"ti-drawer-title"},{default:c((()=>[g(y(t.title),1)])),_:1})]),!0),p(u,{class:"ti-drawer-content"},{default:c((()=>[B(e.$slots,"content",{},void 0,!0)])),_:3}),B(e.$slots,"footer",{},(()=>[p(u,{class:"ti-drawer-footer"},{default:c((()=>[t.isCancelShow?(l(),r(d,{key:0,onClick:o},{default:c((()=>[g(y(t.cancelText),1)])),_:1})):w("",!0),t.isConfirmShow?(l(),r(d,{key:1,loading:t.confirmLoading,type:"primary",onClick:h},{default:c((()=>[g(y(t.confirmText),1)])),_:1},8,["loading"])):w("",!0)])),_:1})]),!0)])),_:3})])),_:3},8,["mask-click","width","mode"])}}},[["__scopeId","data-v-7d7bb03c"]]),it=K({__name:"ti-layout-table-list",props:{show:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=t,i=e,a=()=>{i("update:show",!1),i("cancel","")},o=()=>{i("confirm",b.value)};E((()=>s.show),(async t=>{await P(),t&&C()}),{immediate:!0});const k=n([]),b=n(),C=async()=>{try{const t=await V({table_id:F()});k.value=t.data.list,t.data.curTable&&k.value.push(t.data.curTable),0!==k.value.length&&(t.data.curTable?b.value=t.data.curTable:b.value=k.value[0],k.value.forEach(((t,e)=>{t.table_no===b.value.table_no?t.isSelect=!0:t.isSelect=!1})))}catch(t){}};return(t,e)=>{const i=Y,n=x,C=M(L("ti-empty-data"),tt),S=U,v=M(L("ti-drawer"),st);return l(),r(v,{show:s.show,width:603.992,title:t.$t("選擇當前平板對應桌位"),cancelText:t.$t("退出"),confirmText:t.$t("確定"),maskClick:!0,onCancel:a,onConfirm:o},{content:c((()=>[p(n,{class:"ti-drawer-page"},{default:c((()=>[p(n,{class:"ti-drawer-container"},{default:c((()=>[p(S,{class:"ti-scroll","scroll-y":!0,"show-scrollbar":!0},{default:c((()=>[0!==k.value.length?(l(),r(n,{key:0,class:"ti-grid-box"},{default:c((()=>[(l(!0),h(u,null,d(k.value,((t,e)=>(l(),r(n,{index:e,key:e},{default:c((()=>[p(n,{class:m([!0===t.isSelect?"ti-grid-item-box-selected":"ti-grid-item-box"]),onClick:e=>(t=>{k.value.forEach(((e,s)=>{e.table_no===t.table_no?(b.value=t,e.isSelect=!0):e.isSelect=!1}))})(t)},{default:c((()=>[p(i,{class:"ti-grid-table-number"},{default:c((()=>[g(y(f(X)(t.table_no,12)),1)])),_:2},1024)])),_:2},1032,["class","onClick"])])),_:2},1032,["index"])))),128))])),_:1})):w("",!0),0===k.value.length?(l(),r(C,{key:1,class:"ti-empty-data-top",title:t.$t("當前無桌位")},null,8,["title"])):w("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title","cancelText","confirmText"])}}},[["__scopeId","data-v-589a4276"]]);class at{constructor(t,e){this.options=t,this.animation=z({...t}),this.currentStepAnimates={},this.next=0,this.$=e}_nvuePushAnimates(t,e){let s=this.currentStepAnimates[this.next],i={};if(i=s||{styles:{},config:{}},ot.includes(t)){i.styles.transform||(i.styles.transform="");let s="";"rotate"===t&&(s="deg"),i.styles.transform+=`${t}(${e+s}) `}else i.styles[t]=`${e}`;this.currentStepAnimates[this.next]=i}_animateRun(t={},e={}){let s=this.$.$refs.ani.ref;if(s)return new Promise(((i,a)=>{nvueAnimation.transition(s,{styles:t,...e},(t=>{i()}))}))}_nvueNextAnimate(t,e=0,s){let i=t[e];if(i){let{styles:a,config:o}=i;this._animateRun(a,o).then((()=>{e+=1,this._nvueNextAnimate(t,e,s)}))}else this.currentStepAnimates={},"function"==typeof s&&s(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const ot=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function nt(t,e){if(e)return clearTimeout(e.timer),new at(t,e)}ot.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{at.prototype[t]=function(...e){return this.animation[t](...e),this}}));const lt=K({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},e="";for(let s in t){e+=this.toLine(s)+":"+t[s]+";"}return e},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=nt(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,e={}){if(this.animation){for(let e in t)try{"object"==typeof t[e]?this.animation[e](...t[e]):this.animation[e](t[e])}catch(s){}return this.animation.step(e),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:e}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=e,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=nt(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:e}=this.styleInit(!1);this.opacity=t||1,this.transform=e,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let e={transform:""},s=(t,s)=>{"fade"===s?e.opacity=this.animationType(t)[s]:e.transform+=this.animationType(t)[s]+" "};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((e=>{s(t,e)})),e},tranfromInit(t){let e=(t,e)=>{let s=null;"fade"===e?s=t?0:1:(s=t?"-100%":"0","zoom-in"===e&&(s=t?.8:1),"zoom-out"===e&&(s=t?1.2:1),"slide-right"===e&&(s=t?"100%":"0"),"slide-bottom"===e&&(s=t?"100%":"0")),this.animation[this.animationMode()[e]](s)};return"string"==typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((s=>{e(t,s)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,e,s,i,a,o){const n=x;return N((l(),r(n,{ref:"ani",animation:a.animationData,class:m(s.customClass),style:T(o.transformStyles),onClick:o.onClick},{default:c((()=>[B(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])),[[j,a.isShow]])}]]);const rt=K({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const s=Object.keys(t).find((s=>{const i=e.key,a=t[s];return a===i||Array.isArray(a)&&a.includes(i)}));s&&setTimeout((()=>{this.$emit(s,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},borderRadius:{type:String}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{backgroundColor:"transparent",borderRadius:this.borderRadius||"0",position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},computed:{getStyles(){let t={backgroundColor:this.bg};return this.borderRadius,t=Object.assign(t,{borderRadius:this.borderRadius}),t},isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:e,windowTop:s,safeArea:i,screenHeight:a,safeAreaInsets:o}=O();this.popupWidth=t,this.popupHeight=e+(s||0),i&&this.safeArea?this.safeAreaInsets=o.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},activated(){this.setH5Visible(!this.showPopup)},deactivated(){this.setH5Visible(!0)},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(t=!0){document.getElementsByTagName("body")[0].style.overflow=t?"visible":"hidden"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]&&(this[this.config[t]](),this.$emit("change",{show:!0,type:t}))},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg,borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center",borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0",display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0",display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,e,s,i,a,o){const n=M(L("uni-transition"),lt),h=x,u=D("keypress");return a.showPopup?(l(),r(h,{key:0,class:m(["uni-popup",[a.popupstyle,o.isDesktop?"fixforpc-z-index":""]])},{default:c((()=>[p(h,{onTouchstart:o.touchstart},{default:c((()=>[a.maskShow?(l(),r(n,{key:"1",name:"mask","mode-class":"fade",styles:a.maskClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},null,8,["styles","duration","show","onClick"])):w("",!0),p(n,{key:"2","mode-class":a.ani,name:"content",styles:a.transClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},{default:c((()=>[p(h,{class:m(["uni-popup__wrapper",[a.popupstyle]]),style:T(o.getStyles),onClick:o.clear},{default:c((()=>[B(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),a.maskShow?(l(),r(u,{key:0,onEsc:o.onTap},null,8,["onEsc"])):w("",!0)])),_:3},8,["class"])):w("",!0)}],["__scopeId","data-v-a025ab8e"]]),ct=K({__name:"ti-modal",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""},content:{type:String,default:null},width:Number,isBuffet:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=e,i=t,a=n();H({width:i.width+"px"});E((()=>i.show),(async t=>{var e,s;t?(await P(),null==(e=a.value)||e.open()):null==(s=a.value)||s.close()}),{immediate:!0});const o=()=>{s("update:show",!1),s("cancel")},h=()=>{s("confirm")};return(e,s)=>{const n=x,u=M(L("ti-button"),W),d=M(L("uni-popup"),rt);return l(),r(d,{ref_key:"dialogRef",ref:a,"mask-click":i.maskClick,maskBackgroundColor:"#100A05B3"},{default:c((()=>{return[p(n,{class:"ti-dialog-box",style:T({width:(s=t.width,Math.floor(.733*s)+"px")})},{default:c((()=>[p(n,{class:"ti-dialog-top"},{default:c((()=>[B(e.$slots,"title",{},(()=>[p(n,{class:"ti-dialog-title"},{default:c((()=>[g(y(i.title),1)])),_:1})]),!0),B(e.$slots,"content",{},(()=>[p(n,{class:"ti-dialog-content"},{default:c((()=>[g(y(i.content),1)])),_:1})]),!0)])),_:3}),B(e.$slots,"footer",{},(()=>[p(n,{class:m(["ti-dialog-btn",{"not-padding":i.isBuffet}])},{default:c((()=>[t.isCancelShow?(l(),r(u,{key:0,onClick:o},{default:c((()=>[g(y(i.cancelText||f(R)("退出")),1)])),_:1})):w("",!0),t.isConfirmShow?(l(),r(u,{key:1,loading:t.confirmLoading,type:"primary",onClick:h},{default:c((()=>[g(y(i.confirmText||f(R)("確定")),1)])),_:1},8,["loading"])):w("",!0)])),_:1},8,["class"])]),!0)])),_:3},8,["style"])];var s})),_:3},8,["mask-click"])}}},[["__scopeId","data-v-9484592a"]]),ht=""+new URL("icon-ring-192350e1.svg",import.meta.url).href;function ut(){return/JBCWeb/.test(navigator.userAgent)}function dt(){var t;return(null==(t=window.androidIDInterface)?void 0:t.getAndroidID())||""}export{ht as _,q as a,it as b,ct as c,Q as d,tt as e,st as f,dt as g,ut as i};
