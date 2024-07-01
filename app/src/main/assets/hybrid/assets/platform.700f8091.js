import{Z as t,a as e,s,aZ as i,ah as a,a0 as o,a1 as n,r as l,k as r,l as c,w as h,v as u,F as d,x as p,t as m,an as f,j as g,y,z as w,m as k,a2 as b,C,ax as S,a_ as v,a$ as _,$ as x,aA as A,q as T,T as B,ab as $,ac as I,b0 as R,aV as E,A as D,aB as M,ak as P,R as L,am as V,S as F,b1 as X,M as Y,B as U,X as N,Y as j,ae as z,aD as O,aE as H,a9 as K,ag as W}from"./index-56d42c59.js";import{_ as Q,a as J}from"./ti-button.4bd7953a.js";const Z=Q({__name:"ti-layout-language-item",props:{firstBind:{type:Boolean,default:!1}},emits:["languageText"],setup($,{expose:I,emit:R}){t();const E=$,D=e(),{userInfo:M}=s(D),{changeLocale:P}=i(),L=a((()=>o[n()])),V=l(),F=l(!1),X=()=>{F.value=!1,_(F.value),A("closeShowLanguage",(t=>{}))};I({open:()=>{V.value=v()||[],F.value=!0,_(F.value),x("closeShowLanguage",(t=>{X()}))},close:X,isShow:()=>F.value,languageText:L});const Y=R;return(t,e)=>{const s=T,i=B;return F.value?(r(),c(s,{key:0,class:"ti-language-bg",onClick:e[0]||(e[0]=b((()=>{}),["stop"]))},{default:h((()=>{return[(r(!0),u(d,null,p(1==E.firstBind?V.value||[]:(null==(a=null==(e=null==(t=M.value)?void 0:t.tablet)?void 0:e.language_list)?void 0:a.length)>0?null==(l=null==(o=M.value)?void 0:o.tablet)?void 0:l.language_list:V.value,((t,e)=>(r(),c(s,{class:"ti-item-box",key:e},{default:h((()=>[m(s,{class:f(t.key==g(n)()?"ti-item-content-select":"ti-item-content"),onClick:e=>((t,e)=>{t&&t!==n()&&(C(!0),P(t,e),Y("languageText"),1!=E.firstBind&&S("languageRefresh"))})(t.key,t.index)},{default:h((()=>[m(s,{class:"ti-content-title"},{default:h((()=>[y(w(t.value),1)])),_:2},1024),t.disable?(r(),c(i,{key:0,class:"ti-content-tick",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZLdDcIgFIUPjYmPOgIjOIKJP886kTqJI9Q3X9S6Qd1AR3AAE7wgGmxpCoW+cRKSWyjf195cICUlNAwRInKMMUJOJccLa7bE7XuWITAaXlA5VYKMlpEggQGffDawY3McECMSLi4oaQm1zti6XTyCqy+LBP9rkThhhSHu9NulFDXBa22ZOQro5aeuOImKqsQXXhOwBa7ykk3SBa6Ytk3VU4aNfnzI2cYAe194o8AiMQ7c4a2Rkt+k+IxiJ0kf8JQUp7wBvkBoT4kIzsUAAAAASUVORK5CYII="})):k("",!0)])),_:2},1032,["class","onClick"])])),_:2},1024)))),128))];var t,e,a,o,l})),_:1})):k("",!0)}}},[["__scopeId","data-v-7911e7e4"]]),q=""+new URL("clear-icon-16ceeab3.png",import.meta.url).href;function G(t){let e="";for(let s in t){e+=`${s}:${t[s]};`}return e}const tt=Q({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change","keyboardheightchange"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:18},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!1},cursorSpacing:{type:Number,default:0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#FFBE00"},styles:{type:Object,default:()=>({color:"#100A05",backgroundColor:"#fff",disableColor:"#F7F6F6",borderColor:"#24160B26"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1,floor:.733}),computed:{isVal(){const t=this.val;return!(!t&&0!==t)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(t){let e="";for(let s in t)t[s]&&(e+=`${s} `);return e}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled,"is-focused":this.focusShow})},inputContentStyle(){const t=this.focusShow?this.primaryColor:this.styles.borderColor;return G({"border-color":(this.inputBorder&&this.msg?"#dd524d":t)||"#24160B26","background-color":this.disabled?this.styles.disableColor:this.styles.backgroundColor})},inputStyle(){return G({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":16*this.floor+"px","padding-left":this.prefixIcon?"":16*this.floor+"px"})}},watch:{value(t){this.val=t},modelValue(t){this.val=t},focus(t){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(t=>{this.localMsg=t}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue||""===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(t){this.$emit("iconClick",t)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(t){let e=t.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(e=this.trimStr(e)),"string"==typeof this.trim&&(e=this.trimStr(e,this.trim))),this.errMsg&&(this.errMsg=""),this.val=e,this.$emit("input",e),this.$emit("update:modelValue",e)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(t){this.focusShow=!0,this.$emit("focus",t)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(t){if(t.detail.value,this.focusShow=!1,this.$emit("blur",t),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:t}=this.form;"blur"===t&&this.formItem.onFieldChange()}},onConfirm(t){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(t){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},onkeyboardheightchange(t){this.$emit("keyboardheightchange",t)},trimStr:(t,e="both")=>"both"===e?t.trim():"left"===e?t.trimLeft():"right"===e?t.trimRight():"start"===e?t.trimStart():"end"===e?t.trimEnd():"all"===e?t.replace(/\s+/g,""):t}},[["render",function(t,e,s,i,a,o){const n=R,l=E,p=B,g=T;return r(),c(g,{class:f(["uni-easyinput",{"uni-easyinput-error":o.msg}]),style:$(o.boxStyle)},{default:h((()=>[m(g,{class:f(["uni-easyinput__content",o.inputContentClass]),style:$(o.inputContentStyle)},{default:h((()=>["textarea"===s.type?(r(),c(n,{key:0,class:f(["uni-easyinput__content-textarea",{"input-padding":s.inputBorder}]),name:s.name,value:a.val,placeholder:s.placeholder,placeholderStyle:s.placeholderStyle,disabled:s.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:o.inputMaxlength,focus:a.focused,autoHeight:s.autoHeight,"cursor-spacing":s.cursorSpacing,onInput:o.onInput,onBlur:o._Blur,onFocus:o._Focus,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","cursor-spacing","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])):(r(),c(l,{key:1,type:"password"===s.type?"text":s.type,class:"uni-easyinput__content-input",style:$(o.inputStyle),name:s.name,value:a.val,password:!a.showPassword&&"password"===s.type,placeholder:s.placeholder,placeholderStyle:s.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:s.disabled,maxlength:o.inputMaxlength,focus:a.focused,confirmType:s.confirmType,"cursor-spacing":s.cursorSpacing,onFocus:o._Focus,onBlur:o._Blur,onInput:o.onInput,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","onFocus","onBlur","onInput","onConfirm","onKeyboardheightchange"])),"password"===s.type&&s.passwordIcon?(r(),u(d,{key:2},[o.isVal?(r(),c(p,{key:0,class:f(["content-clear-icon",{"is-textarea-icon":"textarea"===s.type}]),src:a.showPassword?"../../static/eye.png":"../../static/eye-off.png",style:$({width:s.clearSize+"px",height:s.clearSize+"px"}),onClick:o.onEyes},null,8,["class","src","style","onClick"])):k("",!0)],64)):(r(),u(d,{key:3},[s.clearable&&o.isVal&&!s.disabled&&"textarea"!==s.type?(r(),c(p,{key:0,class:f(["content-clear-icon",{"is-textarea-icon":"textarea"===s.type}]),style:$({width:s.clearSize+"px",height:s.clearSize+"px"}),src:q,onClick:o.onClear},null,8,["class","style","onClick"])):k("",!0)],64)),I(t.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-9cf5eec2"]]),et=""+new URL("empty-16cbc551.svg",import.meta.url).href,st=Q({__name:"ti-empty-data",props:{title:{type:String,default:""},image:{type:String,default:et}},setup(t){const e=t;return(t,s)=>{const i=B,a=T;return r(),c(a,{class:"ti-empty-data"},{default:h((()=>[m(a,{class:"ti-empty-image"},{default:h((()=>[m(i,{src:e.image,mode:"widthFix"},null,8,["src"])])),_:1}),m(a,{class:"ti-empty-text"},{default:h((()=>[y(w(e.title||g(D)("暫無數據")),1)])),_:1})])),_:1})}}},[["__scopeId","data-v-d7d52e83"]]);const it=Q({name:"UniDrawer",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const s=Object.keys(t).find((s=>{const i=e.key,a=t[s];return a===i||Array.isArray(a)&&a.includes(i)}));s&&setTimeout((()=>{this.$emit(s,{})}),0)}))},render:()=>{}}},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:()=>({visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}),created(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear(){},close(t){("mask"!==t||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change(t,e,s){this[t]=s,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((()=>{this[e]=s,this.$emit("change",s)}),s?50:300)}}},[["render",function(t,e,s,i,a,o){const n=T,l=M("keypress");return a.visibleSync?(r(),c(n,{key:0,class:f([{"uni-drawer--visible":a.showDrawer},"uni-drawer"]),onTouchmove:b(o.clear,["stop","prevent"])},{default:h((()=>[m(n,{class:f(["uni-drawer__mask",{"uni-drawer__mask--visible":a.showDrawer&&s.mask}]),onClick:e[0]||(e[0]=t=>o.close("mask"))},null,8,["class"]),m(n,{class:f(["uni-drawer__content",{"uni-drawer--right":a.rightMode,"uni-drawer--left":!a.rightMode,"uni-drawer__content--visible":a.showDrawer}]),style:$({width:a.drawerWidth+"px"})},{default:h((()=>[I(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),m(l,{onEsc:e[1]||(e[1]=t=>o.close("mask"))})])),_:3},8,["class","onTouchmove"])):k("",!0)}],["__scopeId","data-v-2fca6e47"]]),at=Q({__name:"ti-drawer",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:D("退出")},confirmText:{type:String,default:D("確定")},width:{type:Number,default:552},mode:{type:String,default:"right"}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=e,i=t,a=l();P((()=>i.show),(async t=>{var e,s;t?(await V(),null==(e=a.value)||e.open()):null==(s=a.value)||s.close()}),{immediate:!0});const o=()=>{s("update:show",!1),s("cancel")},n=()=>{s("confirm")};return(e,l)=>{const u=T,d=L(F("ti-button"),J),p=L(F("uni-drawer"),it);return r(),c(p,{class:"ti-drawer",ref_key:"drawerRef",ref:a,"mask-click":i.maskClick,width:i.width,mode:i.mode,onChange:l[0]||(l[0]=t=>{t||(s("update:show",!1),s("cancel"))})},{default:h((()=>[m(u,{class:"ti-drawer-box"},{default:h((()=>[I(e.$slots,"title",{},(()=>[m(u,{class:"ti-drawer-title"},{default:h((()=>[y(w(t.title),1)])),_:1})]),!0),m(u,{class:"ti-drawer-content"},{default:h((()=>[I(e.$slots,"content",{},void 0,!0)])),_:3}),I(e.$slots,"footer",{},(()=>[m(u,{class:"ti-drawer-footer"},{default:h((()=>[t.isCancelShow?(r(),c(d,{key:0,onClick:o},{default:h((()=>[y(w(t.cancelText),1)])),_:1})):k("",!0),t.isConfirmShow?(r(),c(d,{key:1,loading:t.confirmLoading,type:"primary",onClick:n},{default:h((()=>[y(w(t.confirmText),1)])),_:1},8,["loading"])):k("",!0)])),_:1})]),!0)])),_:3})])),_:3},8,["mask-click","width","mode"])}}},[["__scopeId","data-v-7d7bb03c"]]),ot=Q({__name:"ti-layout-table-list",props:{show:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=t,i=e,a=()=>{i("update:show",!1),i("cancel","")},o=()=>{i("confirm",b.value)};P((()=>s.show),(async t=>{await V(),t&&C()}),{immediate:!0});const n=l([]),b=l(),C=async()=>{try{const t=await X({table_id:Y()});n.value=t.data.list,t.data.curTable&&n.value.push(t.data.curTable),0!==n.value.length&&(t.data.curTable?b.value=t.data.curTable:b.value=n.value[0],n.value.forEach(((t,e)=>{t.table_no===b.value.table_no?t.isSelect=!0:t.isSelect=!1})))}catch(t){}};return(t,e)=>{const i=N,l=T,C=L(F("ti-empty-data"),st),S=j,v=L(F("ti-drawer"),at);return r(),c(v,{show:s.show,width:603.992,title:t.$t("選擇當前平板對應桌位"),cancelText:t.$t("退出"),confirmText:t.$t("確定"),maskClick:!0,onCancel:a,onConfirm:o},{content:h((()=>[m(l,{class:"ti-drawer-page"},{default:h((()=>[m(l,{class:"ti-drawer-container"},{default:h((()=>[m(S,{class:"ti-scroll","scroll-y":!0,"show-scrollbar":!0},{default:h((()=>[0!==n.value.length?(r(),c(l,{key:0,class:"ti-grid-box"},{default:h((()=>[(r(!0),u(d,null,p(n.value,((t,e)=>(r(),c(l,{index:e,key:e},{default:h((()=>[m(l,{class:f([!0===t.isSelect?"ti-grid-item-box-selected":"ti-grid-item-box"]),onClick:e=>(t=>{n.value.forEach(((e,s)=>{e.table_no===t.table_no?(b.value=t,e.isSelect=!0):e.isSelect=!1}))})(t)},{default:h((()=>[m(i,{class:"ti-grid-table-number"},{default:h((()=>[y(w(g(U)(t.table_no,12)),1)])),_:2},1024)])),_:2},1032,["class","onClick"])])),_:2},1032,["index"])))),128))])),_:1})):k("",!0),0===n.value.length?(r(),c(C,{key:1,class:"ti-empty-data-top",title:t.$t("當前無桌位")},null,8,["title"])):k("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title","cancelText","confirmText"])}}},[["__scopeId","data-v-589a4276"]]);class nt{constructor(t,e){this.options=t,this.animation=z({...t}),this.currentStepAnimates={},this.next=0,this.$=e}_nvuePushAnimates(t,e){let s=this.currentStepAnimates[this.next],i={};if(i=s||{styles:{},config:{}},lt.includes(t)){i.styles.transform||(i.styles.transform="");let s="";"rotate"===t&&(s="deg"),i.styles.transform+=`${t}(${e+s}) `}else i.styles[t]=`${e}`;this.currentStepAnimates[this.next]=i}_animateRun(t={},e={}){let s=this.$.$refs.ani.ref;if(s)return new Promise(((i,a)=>{nvueAnimation.transition(s,{styles:t,...e},(t=>{i()}))}))}_nvueNextAnimate(t,e=0,s){let i=t[e];if(i){let{styles:a,config:o}=i;this._animateRun(a,o).then((()=>{e+=1,this._nvueNextAnimate(t,e,s)}))}else this.currentStepAnimates={},"function"==typeof s&&s(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const lt=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function rt(t,e){if(e)return clearTimeout(e.timer),new nt(t,e)}lt.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{nt.prototype[t]=function(...e){return this.animation[t](...e),this}}));const ct=Q({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},e="";for(let s in t){e+=this.toLine(s)+":"+t[s]+";"}return e},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=rt(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,e={}){if(this.animation){for(let e in t)try{"object"==typeof t[e]?this.animation[e](...t[e]):this.animation[e](t[e])}catch(s){}return this.animation.step(e),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:e}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=e,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=rt(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:e}=this.styleInit(!1);this.opacity=t||1,this.transform=e,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let e={transform:""},s=(t,s)=>{"fade"===s?e.opacity=this.animationType(t)[s]:e.transform+=this.animationType(t)[s]+" "};return"string"==typeof this.modeClass?s(t,this.modeClass):this.modeClass.forEach((e=>{s(t,e)})),e},tranfromInit(t){let e=(t,e)=>{let s=null;"fade"===e?s=t?0:1:(s=t?"-100%":"0","zoom-in"===e&&(s=t?.8:1),"zoom-out"===e&&(s=t?1.2:1),"slide-right"===e&&(s=t?"100%":"0"),"slide-bottom"===e&&(s=t?"100%":"0")),this.animation[this.animationMode()[e]](s)};return"string"==typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((s=>{e(t,s)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,e,s,i,a,o){const n=T;return O((r(),c(n,{ref:"ani",animation:a.animationData,class:f(s.customClass),style:$(o.transformStyles),onClick:o.onClick},{default:h((()=>[I(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])),[[H,a.isShow]])}]]);const ht=Q({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const s=Object.keys(t).find((s=>{const i=e.key,a=t[s];return a===i||Array.isArray(a)&&a.includes(i)}));s&&setTimeout((()=>{this.$emit(s,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"},borderRadius:{type:String}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{backgroundColor:"transparent",borderRadius:this.borderRadius||"0",position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},computed:{getStyles(){let t={backgroundColor:this.bg};return this.borderRadius,t=Object.assign(t,{borderRadius:this.borderRadius}),t},isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:e,windowTop:s,safeArea:i,screenHeight:a,safeAreaInsets:o}=K();this.popupWidth=t,this.popupHeight=e+(s||0),i&&this.safeArea?this.safeAreaInsets=o.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},activated(){this.setH5Visible(!this.showPopup)},deactivated(){this.setH5Visible(!0)},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(t=!0){document.getElementsByTagName("body")[0].style.overflow=t?"visible":"hidden"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]&&(this[this.config[t]](),this.$emit("change",{show:!0,type:t}))},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg,borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center",borderRadius:this.borderRadius||"0"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0",display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,borderRadius:this.borderRadius||"0",display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,e,s,i,a,o){const n=L(F("uni-transition"),ct),l=T,u=M("keypress");return a.showPopup?(r(),c(l,{key:0,class:f(["uni-popup",[a.popupstyle,o.isDesktop?"fixforpc-z-index":""]])},{default:h((()=>[m(l,{onTouchstart:o.touchstart},{default:h((()=>[a.maskShow?(r(),c(n,{key:"1",name:"mask","mode-class":"fade",styles:a.maskClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},null,8,["styles","duration","show","onClick"])):k("",!0),m(n,{key:"2","mode-class":a.ani,name:"content",styles:a.transClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},{default:h((()=>[m(l,{class:f(["uni-popup__wrapper",[a.popupstyle]]),style:$(o.getStyles),onClick:o.clear},{default:h((()=>[I(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),a.maskShow?(r(),c(u,{key:0,onEsc:o.onTap},null,8,["onEsc"])):k("",!0)])),_:3},8,["class"])):k("",!0)}],["__scopeId","data-v-a025ab8e"]]),ut=Q({__name:"ti-modal",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""},content:{type:String,default:null},width:Number,isBuffet:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const s=e,i=t,a=l();W({width:i.width+"px"});P((()=>i.show),(async t=>{var e,s;t?(await V(),null==(e=a.value)||e.open()):null==(s=a.value)||s.close()}),{immediate:!0});const o=()=>{s("update:show",!1),s("cancel")},n=()=>{s("confirm")};return(e,s)=>{const l=T,u=L(F("ti-button"),J),d=L(F("uni-popup"),ht);return r(),c(d,{ref_key:"dialogRef",ref:a,"mask-click":i.maskClick,maskBackgroundColor:"#100A05B3"},{default:h((()=>{return[m(l,{class:"ti-dialog-box",style:$({width:(s=t.width,Math.floor(.733*s)+"px")})},{default:h((()=>[m(l,{class:"ti-dialog-top"},{default:h((()=>[I(e.$slots,"title",{},(()=>[m(l,{class:"ti-dialog-title"},{default:h((()=>[y(w(i.title),1)])),_:1})]),!0),I(e.$slots,"content",{},(()=>[m(l,{class:"ti-dialog-content"},{default:h((()=>[y(w(i.content),1)])),_:1})]),!0)])),_:3}),I(e.$slots,"footer",{},(()=>[m(l,{class:f(["ti-dialog-btn",{"not-padding":i.isBuffet}])},{default:h((()=>[t.isCancelShow?(r(),c(u,{key:0,onClick:o},{default:h((()=>[y(w(i.cancelText||g(D)("退出")),1)])),_:1})):k("",!0),t.isConfirmShow?(r(),c(u,{key:1,loading:t.confirmLoading,type:"primary",onClick:n},{default:h((()=>[y(w(i.confirmText||g(D)("確定")),1)])),_:1},8,["loading"])):k("",!0)])),_:1},8,["class"])]),!0)])),_:3},8,["style"])];var s})),_:3},8,["mask-click"])}}},[["__scopeId","data-v-9484592a"]]),dt=""+new URL("icon-ring-192350e1.svg",import.meta.url).href;function pt(){return/JBCWeb/.test(navigator.userAgent)}function mt(){var t;return(null==(t=window.androidIDInterface)?void 0:t.getAndroidID())||""}export{dt as _,tt as a,ot as b,ut as c,Z as d,st as e,at as f,mt as g,pt as i};
