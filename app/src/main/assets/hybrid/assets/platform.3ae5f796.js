import{aI as t,ac as e,aJ as i,u as s,s as a,_ as o,a0 as n,r as l,h as r,j as c,w as h,q as d,F as u,t as p,p as m,ab as f,f as g,v as y,x as w,k,a1 as b,aw as C,A as _,aK as v,aL as S,$ as x,ao as A,n as B,T,a4 as $,a5 as I,aM as D,aE as E,aa as M,y as P,aN as L,a7 as R,R as N,a9 as U,S as F,aO as V,L as X,z as Y,X as z,Y as j,aA as O,aP as H,aQ as K,ay as Q,aC as W}from"./index-cabbde78.js";import{_ as q,a as J}from"./ti-button.c5a194af.js";function Z(){const s=t();return{currentLocale:e((()=>s.locale.value)),changeLocale:t=>{s.locale.value!==t&&(s.locale.value=t,i(t))}}}const G=q({__name:"ti-layout-language-item",props:{firstBind:{type:Boolean,default:!1}},emits:["languageText"],setup(t,{expose:i,emit:$}){const I=t,D=s(),{userInfo:E}=a(D),{changeLocale:M}=Z(),P=e((()=>o[n()])),L=l(),R=l(!1),N=()=>{R.value=!1,S(R.value),A("closeShowLanguage",(t=>{}))};i({open:()=>{L.value=v()||[],R.value=!0,S(R.value),x("closeShowLanguage",(t=>{N()}))},close:N,isShow:()=>R.value,languageText:P});const U=$;return(t,e)=>{const i=B,s=T;return R.value?(r(),c(i,{key:0,class:"ti-language-bg",onClick:e[0]||(e[0]=b((()=>{}),["stop"]))},{default:h((()=>{return[(r(!0),d(u,null,p(1==I.firstBind?L.value||[]:(null==(a=null==(e=null==(t=E.value)?void 0:t.tablet)?void 0:e.language_list)?void 0:a.length)>0?null==(l=null==(o=E.value)?void 0:o.tablet)?void 0:l.language_list:L.value,((t,e)=>(r(),c(i,{class:"ti-item-box",key:e},{default:h((()=>[m(i,{class:f(t.key==g(n)()?"ti-item-content-select":"ti-item-content"),onClick:e=>(t=>{const e=C();e[e.length-1].route,t&&t!==n()&&(_(!0),M(t),setTimeout((()=>{U("languageText")}),300))})(t.key)},{default:h((()=>[m(i,{class:"ti-content-title"},{default:h((()=>[y(w(t.value),1)])),_:2},1024),t.disable?(r(),c(s,{key:0,class:"ti-content-tick",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB7ZLdDcIgFIUPjYmPOgIjOIKJP886kTqJI9Q3X9S6Qd1AR3AAE7wgGmxpCoW+cRKSWyjf195cICUlNAwRInKMMUJOJccLa7bE7XuWITAaXlA5VYKMlpEggQGffDawY3McECMSLi4oaQm1zti6XTyCqy+LBP9rkThhhSHu9NulFDXBa22ZOQro5aeuOImKqsQXXhOwBa7ykk3SBa6Ytk3VU4aNfnzI2cYAe194o8AiMQ7c4a2Rkt+k+IxiJ0kf8JQUp7wBvkBoT4kIzsUAAAAASUVORK5CYII="})):k("",!0)])),_:2},1032,["class","onClick"])])),_:2},1024)))),128))];var t,e,a,o,l})),_:1})):k("",!0)}}},[["__scopeId","data-v-c861e7b0"]]),tt=""+new URL("clear-icon-16ceeab3.png",import.meta.url).href;function et(t){let e="";for(let i in t){e+=`${i}:${t[i]};`}return e}const it=q({name:"uni-easyinput",emits:["click","iconClick","update:modelValue","input","focus","blur","confirm","clear","eyes","change","keyboardheightchange"],model:{prop:"modelValue",event:"update:modelValue"},options:{virtualHost:!0},inject:{form:{from:"uniForm",default:null},formItem:{from:"uniFormItem",default:null}},props:{name:String,value:[Number,String],modelValue:[Number,String],type:{type:String,default:"text"},clearable:{type:Boolean,default:!0},autoHeight:{type:Boolean,default:!1},placeholder:{type:String,default:" "},placeholderStyle:String,focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},confirmType:{type:String,default:"done"},clearSize:{type:[Number,String],default:18},inputBorder:{type:Boolean,default:!0},prefixIcon:{type:String,default:""},suffixIcon:{type:String,default:""},trim:{type:[Boolean,String],default:!1},cursorSpacing:{type:Number,default:0},passwordIcon:{type:Boolean,default:!0},primaryColor:{type:String,default:"#FFBE00"},styles:{type:Object,default:()=>({color:"#100A05",backgroundColor:"#fff",disableColor:"#F7F6F6",borderColor:"#24160B26"})},errorMessage:{type:[String,Boolean],default:""}},data:()=>({focused:!1,val:"",showMsg:"",border:!1,isFirstBorder:!1,showClearIcon:!1,showPassword:!1,focusShow:!1,localMsg:"",isEnter:!1,floor:.733}),computed:{isVal(){const t=this.val;return!(!t&&0!==t)},msg(){return this.localMsg||this.errorMessage},inputMaxlength(){return Number(this.maxlength)},boxStyle(){return`color:${this.inputBorder&&this.msg?"#e43d33":this.styles.color};`},inputContentClass(){return function(t){let e="";for(let i in t)t[i]&&(e+=`${i} `);return e}({"is-input-border":this.inputBorder,"is-input-error-border":this.inputBorder&&this.msg,"is-textarea":"textarea"===this.type,"is-disabled":this.disabled,"is-focused":this.focusShow})},inputContentStyle(){const t=this.focusShow?this.primaryColor:this.styles.borderColor;return et({"border-color":(this.inputBorder&&this.msg?"#dd524d":t)||"#24160B26","background-color":this.disabled?this.styles.disableColor:this.styles.backgroundColor})},inputStyle(){return et({"padding-right":"password"===this.type||this.clearable||this.prefixIcon?"":16*this.floor+"px","padding-left":this.prefixIcon?"":16*this.floor+"px"})}},watch:{value(t){this.val=t},modelValue(t){this.val=t},focus(t){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))}},created(){this.init(),this.form&&this.formItem&&this.$watch("formItem.errMsg",(t=>{this.localMsg=t}))},mounted(){this.$nextTick((()=>{this.focused=this.focus,this.focusShow=this.focus}))},methods:{init(){this.value||0===this.value?this.val=this.value:this.modelValue||0===this.modelValue||""===this.modelValue?this.val=this.modelValue:this.val=null},onClickIcon(t){this.$emit("iconClick",t)},onEyes(){this.showPassword=!this.showPassword,this.$emit("eyes",this.showPassword)},onInput(t){let e=t.detail.value;this.trim&&("boolean"==typeof this.trim&&this.trim&&(e=this.trimStr(e)),"string"==typeof this.trim&&(e=this.trimStr(e,this.trim))),this.errMsg&&(this.errMsg=""),this.val=e,this.$emit("input",e),this.$emit("update:modelValue",e)},onFocus(){this.$nextTick((()=>{this.focused=!0})),this.$emit("focus",null)},_Focus(t){this.focusShow=!0,this.$emit("focus",t)},onBlur(){this.focused=!1,this.$emit("focus",null)},_Blur(t){if(t.detail.value,this.focusShow=!1,this.$emit("blur",t),!1===this.isEnter&&this.$emit("change",this.val),this.form&&this.formItem){const{validateTrigger:t}=this.form;"blur"===t&&this.formItem.onFieldChange()}},onConfirm(t){this.$emit("confirm",this.val),this.isEnter=!0,this.$emit("change",this.val),this.$nextTick((()=>{this.isEnter=!1}))},onClear(t){this.val="",this.$emit("input",""),this.$emit("update:modelValue",""),this.$emit("clear")},onkeyboardheightchange(t){this.$emit("keyboardheightchange",t)},trimStr:(t,e="both")=>"both"===e?t.trim():"left"===e?t.trimLeft():"right"===e?t.trimRight():"start"===e?t.trimStart():"end"===e?t.trimEnd():"all"===e?t.replace(/\s+/g,""):t}},[["render",function(t,e,i,s,a,o){const n=D,l=E,p=T,g=B;return r(),c(g,{class:f(["uni-easyinput",{"uni-easyinput-error":o.msg}]),style:$(o.boxStyle)},{default:h((()=>[m(g,{class:f(["uni-easyinput__content",o.inputContentClass]),style:$(o.inputContentStyle)},{default:h((()=>["textarea"===i.type?(r(),c(n,{key:0,class:f(["uni-easyinput__content-textarea",{"input-padding":i.inputBorder}]),name:i.name,value:a.val,placeholder:i.placeholder,placeholderStyle:i.placeholderStyle,disabled:i.disabled,"placeholder-class":"uni-easyinput__placeholder-class",maxlength:o.inputMaxlength,focus:a.focused,autoHeight:i.autoHeight,"cursor-spacing":i.cursorSpacing,onInput:o.onInput,onBlur:o._Blur,onFocus:o._Focus,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["class","name","value","placeholder","placeholderStyle","disabled","maxlength","focus","autoHeight","cursor-spacing","onInput","onBlur","onFocus","onConfirm","onKeyboardheightchange"])):(r(),c(l,{key:1,type:"password"===i.type?"text":i.type,class:"uni-easyinput__content-input",style:$(o.inputStyle),name:i.name,value:a.val,password:!a.showPassword&&"password"===i.type,placeholder:i.placeholder,placeholderStyle:i.placeholderStyle,"placeholder-class":"uni-easyinput__placeholder-class",disabled:i.disabled,maxlength:o.inputMaxlength,focus:a.focused,confirmType:i.confirmType,"cursor-spacing":i.cursorSpacing,onFocus:o._Focus,onBlur:o._Blur,onInput:o.onInput,onConfirm:o.onConfirm,onKeyboardheightchange:o.onkeyboardheightchange},null,8,["type","style","name","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","onFocus","onBlur","onInput","onConfirm","onKeyboardheightchange"])),"password"===i.type&&i.passwordIcon?(r(),d(u,{key:2},[o.isVal?(r(),c(p,{key:0,class:f(["content-clear-icon",{"is-textarea-icon":"textarea"===i.type}]),src:a.showPassword?"../../static/eye.png":"../../static/eye-off.png",style:$({width:i.clearSize+"px",height:i.clearSize+"px"}),onClick:o.onEyes},null,8,["class","src","style","onClick"])):k("",!0)],64)):(r(),d(u,{key:3},[i.clearable&&o.isVal&&!i.disabled&&"textarea"!==i.type?(r(),c(p,{key:0,class:f(["content-clear-icon",{"is-textarea-icon":"textarea"===i.type}]),style:$({width:i.clearSize+"px",height:i.clearSize+"px"}),src:tt,onClick:o.onClear},null,8,["class","style","onClick"])):k("",!0)],64)),I(t.$slots,"right",{},void 0,!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}],["__scopeId","data-v-9cf5eec2"]]);const st=q({name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:()=>({column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}),created(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy(){this.grid.children.forEach(((t,e)=>{t===this&&this.grid.children.splice(e,1)}))},methods:{_onClick(){this.grid.change({detail:{index:this.index}})}}},[["render",function(t,e,i,s,a,o){const n=B;return a.width?(r(),c(n,{key:0,style:$("width:"+a.width+";"+(a.square?"height:"+a.width:"")),class:"uni-grid-item"},{default:h((()=>[m(n,{class:f([{"uni-grid-item--border":a.showBorder,"uni-grid-item--border-top":a.showBorder&&i.index<a.column,"uni-highlight":a.highlight},"uni-grid-item__box"]),style:$({"border-right-color":a.borderColor,"border-bottom-color":a.borderColor,"border-top-color":a.borderColor}),onClick:o._onClick},{default:h((()=>[I(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])])),_:3},8,["style"])):k("",!0)}],["__scopeId","data-v-bcc8bb70"]]);const at=q({name:"UniGrid",emits:["change"],props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#D2D2D2"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide(){return{grid:this}},data:()=>({elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,width:0}),created(){this.children=[]},mounted(){this.$nextTick((()=>{this.init()}))},methods:{init(){setTimeout((()=>{this._getSize((t=>{this.children.forEach(((e,i)=>{e.width=t}))}))}),50)},change(t){this.$emit("change",t)},_getSize(t){M().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.width=parseInt((e[0].width-1)/this.column)+"px",t(this.width)}))}}},[["render",function(t,e,i,s,a,o){const n=B;return r(),c(n,{class:"uni-grid-wrap"},{default:h((()=>[m(n,{id:a.elId,ref:"uni-grid",class:f(["uni-grid",{"uni-grid--border":i.showBorder}]),style:$({"border-left-color":i.borderColor})},{default:h((()=>[I(t.$slots,"default",{},void 0,!0)])),_:3},8,["id","class","style"])])),_:3})}],["__scopeId","data-v-2c2326dc"]]),ot=""+new URL("empty-16cbc551.svg",import.meta.url).href,nt=q({__name:"ti-empty-data",props:{title:{type:String,default:""},image:{type:String,default:ot}},setup(t){const e=t;return(t,i)=>{const s=T,a=B;return r(),c(a,{class:"ti-empty-data"},{default:h((()=>[m(a,{class:"ti-empty-image"},{default:h((()=>[m(s,{src:e.image,mode:"widthFix"},null,8,["src"])])),_:1}),m(a,{class:"ti-empty-text"},{default:h((()=>[y(w(e.title||g(P)("暫無數據")),1)])),_:1})])),_:1})}}},[["__scopeId","data-v-d7d52e83"]]);const lt=q({name:"UniDrawer",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const i=Object.keys(t).find((i=>{const s=e.key,a=t[i];return a===s||Array.isArray(a)&&a.includes(s)}));i&&setTimeout((()=>{this.$emit(i,{})}),0)}))},render:()=>{}}},emits:["change"],props:{mode:{type:String,default:""},mask:{type:Boolean,default:!0},maskClick:{type:Boolean,default:!0},width:{type:Number,default:220}},data:()=>({visibleSync:!1,showDrawer:!1,rightMode:!1,watchTimer:null,drawerWidth:220}),created(){this.drawerWidth=this.width,this.rightMode="right"===this.mode},methods:{clear(){},close(t){("mask"!==t||this.maskClick)&&this.visibleSync&&this._change("showDrawer","visibleSync",!1)},open(){this.visibleSync||this._change("visibleSync","showDrawer",!0)},_change(t,e,i){this[t]=i,this.watchTimer&&clearTimeout(this.watchTimer),this.watchTimer=setTimeout((()=>{this[e]=i,this.$emit("change",i)}),i?50:300)}}},[["render",function(t,e,i,s,a,o){const n=B,l=L("keypress");return a.visibleSync?(r(),c(n,{key:0,class:f([{"uni-drawer--visible":a.showDrawer},"uni-drawer"]),onTouchmove:b(o.clear,["stop","prevent"])},{default:h((()=>[m(n,{class:f(["uni-drawer__mask",{"uni-drawer__mask--visible":a.showDrawer&&i.mask}]),onClick:e[0]||(e[0]=t=>o.close("mask"))},null,8,["class"]),m(n,{class:f(["uni-drawer__content",{"uni-drawer--right":a.rightMode,"uni-drawer--left":!a.rightMode,"uni-drawer__content--visible":a.showDrawer}]),style:$({width:a.drawerWidth+"px"})},{default:h((()=>[I(t.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),m(l,{onEsc:e[1]||(e[1]=t=>o.close("mask"))})])),_:3},8,["class","onTouchmove"])):k("",!0)}],["__scopeId","data-v-472e46ff"]]),rt=q({__name:"ti-drawer",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:P("退出")},confirmText:{type:String,default:P("確定")},width:{type:Number,default:552},mode:{type:String,default:"right"}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const i=e,s=t,a=l();R((()=>s.show),(async t=>{var e,i;t?(await U(),null==(e=a.value)||e.open()):null==(i=a.value)||i.close()}),{immediate:!0});const o=()=>{i("update:show",!1),i("cancel")},n=()=>{i("confirm")};return(e,l)=>{const d=B,u=N(F("ti-button"),J),p=N(F("uni-drawer"),lt);return r(),c(p,{class:"ti-drawer",ref_key:"drawerRef",ref:a,"mask-click":s.maskClick,width:s.width,mode:s.mode,onChange:l[0]||(l[0]=t=>{t||(i("update:show",!1),i("cancel"))})},{default:h((()=>[m(d,{class:"ti-drawer-box"},{default:h((()=>[I(e.$slots,"title",{},(()=>[m(d,{class:"ti-drawer-title"},{default:h((()=>[y(w(t.title),1)])),_:1})]),!0),m(d,{class:"ti-drawer-content"},{default:h((()=>[I(e.$slots,"content",{},void 0,!0)])),_:3}),I(e.$slots,"footer",{},(()=>[m(d,{class:"ti-drawer-footer"},{default:h((()=>[t.isCancelShow?(r(),c(u,{key:0,onClick:o},{default:h((()=>[y(w(t.cancelText),1)])),_:1})):k("",!0),t.isConfirmShow?(r(),c(u,{key:1,loading:t.confirmLoading,type:"primary",onClick:n},{default:h((()=>[y(w(t.confirmText),1)])),_:1},8,["loading"])):k("",!0)])),_:1})]),!0)])),_:3})])),_:3},8,["mask-click","width","mode"])}}},[["__scopeId","data-v-7d7bb03c"]]),ct=q({__name:"ti-layout-table-list",props:{show:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const i=t,s=e,a=()=>{s("update:show",!1),s("cancel","")},o=()=>{s("confirm",b.value)};R((()=>i.show),(async t=>{await U(),t&&C()}),{immediate:!0});const n=l([]),b=l(),C=async()=>{try{const t=await V({table_id:X()});n.value=t.data.list,t.data.curTable&&n.value.push(t.data.curTable),0!==n.value.length&&(t.data.curTable?b.value=t.data.curTable:b.value=n.value[0],n.value.forEach(((t,e)=>{t.table_no===b.value.table_no?t.isSelect=!0:t.isSelect=!1})))}catch(t){}};return(t,e)=>{const s=z,l=B,C=N(F("uni-grid-item"),st),_=N(F("uni-grid"),at),v=N(F("ti-empty-data"),nt),S=j,x=N(F("ti-drawer"),rt);return r(),c(x,{show:i.show,width:603.992,title:t.$t("選擇當前平板對應桌位"),cancelText:t.$t("退出"),confirmText:t.$t("確定"),maskClick:!0,onCancel:a,onConfirm:o},{content:h((()=>[m(l,{class:"ti-drawer-page"},{default:h((()=>[m(l,{class:"ti-drawer-container"},{default:h((()=>[m(S,{class:"ti-scroll","scroll-y":!0,"show-scrollbar":!0},{default:h((()=>[0!==n.value.length?(r(),c(_,{key:0,class:"ti-grid-box",column:3,"show-border":!1,square:!1,highlight:!1},{default:h((()=>[(r(!0),d(u,null,p(n.value,((t,e)=>(r(),c(C,{index:e,key:e},{default:h((()=>[m(l,{class:f([!0===t.isSelect?"ti-grid-item-box-selected":"ti-grid-item-box"]),onClick:e=>(t=>{n.value.forEach(((e,i)=>{e.table_no===t.table_no?(b.value=t,e.isSelect=!0):e.isSelect=!1}))})(t)},{default:h((()=>[m(s,{class:"ti-grid-table-number"},{default:h((()=>[y(w(g(Y)(t.table_no,12)),1)])),_:2},1024)])),_:2},1032,["class","onClick"])])),_:2},1032,["index"])))),128))])),_:1})):k("",!0),0===n.value.length?(r(),c(v,{key:1,class:"ti-empty-data-top",title:t.$t("當前無桌位")},null,8,["title"])):k("",!0)])),_:1})])),_:1})])),_:1})])),_:1},8,["show","title","cancelText","confirmText"])}}},[["__scopeId","data-v-c94ad521"]]);class ht{constructor(t,e){this.options=t,this.animation=O({...t}),this.currentStepAnimates={},this.next=0,this.$=e}_nvuePushAnimates(t,e){let i=this.currentStepAnimates[this.next],s={};if(s=i||{styles:{},config:{}},dt.includes(t)){s.styles.transform||(s.styles.transform="");let i="";"rotate"===t&&(i="deg"),s.styles.transform+=`${t}(${e+i}) `}else s.styles[t]=`${e}`;this.currentStepAnimates[this.next]=s}_animateRun(t={},e={}){let i=this.$.$refs.ani.ref;if(i)return new Promise(((s,a)=>{nvueAnimation.transition(i,{styles:t,...e},(t=>{s()}))}))}_nvueNextAnimate(t,e=0,i){let s=t[e];if(s){let{styles:a,config:o}=s;this._animateRun(a,o).then((()=>{e+=1,this._nvueNextAnimate(t,e,i)}))}else this.currentStepAnimates={},"function"==typeof i&&i(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const dt=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function ut(t,e){if(e)return clearTimeout(e.timer),new ht(t,e)}dt.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{ht.prototype[t]=function(...e){return this.animation[t](...e),this}}));const pt=q({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},e="";for(let i in t){e+=this.toLine(i)+":"+t[i]+";"}return e},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=ut(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,e={}){if(this.animation){for(let e in t)try{"object"==typeof t[e]?this.animation[e](...t[e]):this.animation[e](t[e])}catch(i){}return this.animation.step(e),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:e}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=e,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=ut(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:e}=this.styleInit(!1);this.opacity=t||1,this.transform=e,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let e={transform:""},i=(t,i)=>{"fade"===i?e.opacity=this.animationType(t)[i]:e.transform+=this.animationType(t)[i]+" "};return"string"==typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((e=>{i(t,e)})),e},tranfromInit(t){let e=(t,e)=>{let i=null;"fade"===e?i=t?0:1:(i=t?"-100%":"0","zoom-in"===e&&(i=t?.8:1),"zoom-out"===e&&(i=t?1.2:1),"slide-right"===e&&(i=t?"100%":"0"),"slide-bottom"===e&&(i=t?"100%":"0")),this.animation[this.animationMode()[e]](i)};return"string"==typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((i=>{e(t,i)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,e,i,s,a,o){const n=B;return H((r(),c(n,{ref:"ani",animation:a.animationData,class:f(i.customClass),style:$(o.transformStyles),onClick:o.onClick},{default:h((()=>[I(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])),[[K,a.isShow]])}]]);const mt=q({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const i=Object.keys(t).find((i=>{const s=e.key,a=t[i];return a===s||Array.isArray(a)&&a.includes(s)}));i&&setTimeout((()=>{this.$emit(i,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data:()=>({duration:0,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}),computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:e,windowTop:i,safeArea:s,screenHeight:a,safeAreaInsets:o}=Q();this.popupWidth=t,this.popupHeight=e+(i||0),s&&this.safeArea?this.safeAreaInsets=o.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=150:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]&&(this[this.config[t]](),this.$emit("change",{show:!0,type:t}))},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,e,i,s,a,o){const n=N(F("uni-transition"),pt),l=B,d=L("keypress");return a.showPopup?(r(),c(l,{key:0,class:f(["uni-popup",[a.popupstyle,o.isDesktop?"fixforpc-z-index":""]])},{default:h((()=>[m(l,{onTouchstart:o.touchstart},{default:h((()=>[a.maskShow?(r(),c(n,{key:"1",name:"mask","mode-class":"fade",styles:a.maskClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},null,8,["styles","duration","show","onClick"])):k("",!0),m(n,{key:"2","mode-class":a.ani,name:"content",styles:a.transClass,duration:a.duration,show:a.showTrans,onClick:o.onTap},{default:h((()=>[m(l,{class:f(["uni-popup__wrapper",[a.popupstyle]]),style:$({backgroundColor:o.bg}),onClick:o.clear},{default:h((()=>[I(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),a.maskShow?(r(),c(d,{key:0,onEsc:o.onTap},null,8,["onEsc"])):k("",!0)])),_:3},8,["class"])):k("",!0)}],["__scopeId","data-v-dfe6db22"]]),ft=q({__name:"ti-modal",props:{show:{type:Boolean,default:!1},title:{type:String,default:null},maskClick:{type:Boolean,default:!1},isCancelShow:{type:Boolean,default:!0},isConfirmShow:{type:Boolean,default:!0},confirmLoading:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""},content:{type:String,default:null},width:Number,isBuffet:{type:Boolean,default:!1}},emits:["update:show","cancel","confirm"],setup(t,{emit:e}){const i=e,s=t,a=l();W({width:s.width+"px"});R((()=>s.show),(async t=>{var e,i;t?(await U(),null==(e=a.value)||e.open()):null==(i=a.value)||i.close()}),{immediate:!0});const o=()=>{i("update:show",!1),i("cancel")},n=()=>{i("confirm")};return(e,i)=>{const l=B,d=N(F("ti-button"),J),u=N(F("uni-popup"),mt);return r(),c(u,{ref_key:"dialogRef",ref:a,"mask-click":s.maskClick,maskBackgroundColor:"#100A05B3"},{default:h((()=>{return[m(l,{class:"ti-dialog-box",style:$({width:(i=t.width,Math.floor(.733*i)+"px")})},{default:h((()=>[m(l,{class:"ti-dialog-top"},{default:h((()=>[I(e.$slots,"title",{},(()=>[m(l,{class:"ti-dialog-title"},{default:h((()=>[y(w(s.title),1)])),_:1})]),!0),I(e.$slots,"content",{},(()=>[m(l,{class:"ti-dialog-content"},{default:h((()=>[y(w(s.content),1)])),_:1})]),!0)])),_:3}),I(e.$slots,"footer",{},(()=>[m(l,{class:f(["ti-dialog-btn",{"not-padding":s.isBuffet}])},{default:h((()=>[t.isCancelShow?(r(),c(d,{key:0,onClick:o},{default:h((()=>[y(w(s.cancelText||g(P)("退出")),1)])),_:1})):k("",!0),t.isConfirmShow?(r(),c(d,{key:1,loading:t.confirmLoading,type:"primary",onClick:n},{default:h((()=>[y(w(s.confirmText||g(P)("確定")),1)])),_:1},8,["loading"])):k("",!0)])),_:1},8,["class"])]),!0)])),_:3},8,["style"])];var i})),_:3},8,["mask-click"])}}},[["__scopeId","data-v-9484592a"]]),gt=""+new URL("icon-ring-192350e1.svg",import.meta.url).href;function yt(){return/JBCWeb/.test(navigator.userAgent)}function wt(){var t;return(null==(t=window.androidIDInterface)?void 0:t.getAndroidID())||""}export{gt as _,it as a,ct as b,ft as c,G as d,nt as e,rt as f,wt as g,yt as i,Z as u};
