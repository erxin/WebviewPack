import{aU as t,aV as e,aW as o,ay as i,j as a,k as n,w as l,ac as d,a4 as r,t as s,F as c,v as u,l as g,x as f,y as p,p as y,Y as m,S as h,T as b,q as _,a6 as v,aJ as w}from"./index-a66dc72a.js";const S=(t,e)=>{const o=t.__vccOpts||t;for(const[i,a]of e)o[i]=a;return o};const x=S({name:"u-loading-icon",mixins:[e,o,{props:{show:{type:Boolean,default:t.loadingIcon.show},color:{type:String,default:t.loadingIcon.color},textColor:{type:String,default:t.loadingIcon.textColor},vertical:{type:Boolean,default:t.loadingIcon.vertical},mode:{type:String,default:t.loadingIcon.mode},size:{type:[String,Number],default:t.loadingIcon.size},textSize:{type:[String,Number],default:t.loadingIcon.textSize},text:{type:[String,Number],default:t.loadingIcon.text},timingFunction:{type:String,default:t.loadingIcon.timingFunction},duration:{type:[String,Number],default:t.loadingIcon.duration},inactiveColor:{type:String,default:t.loadingIcon.inactiveColor}}}],data:()=>({array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}),computed:{otherBorderColor(){const t=uni.$u.colorGradient(this.color,"#ffffff",100)[80];return"circle"===this.mode?this.inactiveColor?this.inactiveColor:t:"transparent"}},watch:{show(t){}},mounted(){this.init()},methods:{init(){setTimeout((()=>{}),20)},addEventListenerToWebview(){const t=i(),e=t[t.length-1].$getAppWebview();e.addEventListener("hide",(()=>{this.webviewHide=!0})),e.addEventListener("show",(()=>{this.webviewHide=!1}))}}},[["render",function(t,e,o,i,h,b){const _=y,v=m;return t.show?(a(),n(_,{key:0,class:d(["u-loading-icon",[t.vertical&&"u-loading-icon--vertical"]]),style:r([t.$u.addStyle(t.customStyle)])},{default:l((()=>[h.webviewHide?g("",!0):(a(),n(_,{key:0,class:d(["u-loading-icon__spinner",[`u-loading-icon__spinner--${t.mode}`]]),ref:"ani",style:r({color:t.color,width:t.$u.addUnit(t.size),height:t.$u.addUnit(t.size),borderTopColor:t.color,borderBottomColor:b.otherBorderColor,borderLeftColor:b.otherBorderColor,borderRightColor:b.otherBorderColor,"animation-duration":`${t.duration}ms`,"animation-timing-function":"semicircle"===t.mode||"circle"===t.mode?t.timingFunction:""})},{default:l((()=>["spinner"===t.mode?(a(!0),s(c,{key:0},u(h.array12,((t,e)=>(a(),n(_,{key:e,class:"u-loading-icon__dot"})))),128)):g("",!0)])),_:1},8,["class","style"])),t.text?(a(),n(v,{key:1,class:"u-loading-icon__text",style:r({fontSize:t.$u.addUnit(t.textSize),color:t.textColor})},{default:l((()=>[f(p(t.text),1)])),_:1},8,["style"])):g("",!0)])),_:1},8,["style","class"])):g("",!0)}],["__scopeId","data-v-b393fde9"]]),C=S({__name:"ti-button",props:{title:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},type:{type:String,default:"default"}},setup:t=>(e,o)=>{const i=h(b("u-loading-icon"),x),r=m,s=w;return a(),n(s,{class:d(["ti-button",`ti-${t.type}`]),disabled:t.disabled||t.loading},{default:l((()=>[_(i,{show:t.loading,color:"danger"==t.type?"#e50028":"#100a05",size:"15"},null,8,["show","color"]),_(r,{class:"ti-button-text"},{default:l((()=>[v(e.$slots,"default",{},(()=>[f(p(t.title),1)]),!0)])),_:3})])),_:3},8,["class","disabled"])}},[["__scopeId","data-v-3c52454c"]]);export{S as _,C as a};
