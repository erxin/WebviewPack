import{_ as e,s as a,u as s,r as l,o as t,a as n,b as o,c as r,w as u,i,d,e as c,g as p,f as h,h as v,l as f,n as m,j as g,k as _,m as x,p as w,q as L}from"./index-221e2336.js";const j=""+new URL("launch-41645d40.mp4",import.meta.url).href,k=""+new URL("splash-ad554bb8.png",import.meta.url).href,y=""+new URL("launch_tiger-f579ec96.mp4",import.meta.url).href,E=""+new URL("splash_tiger-fdf9ae77.png",import.meta.url).href,b=e({__name:"index",setup(e){const{cashier:b}=a(s()),R=l(!0),U=l(!1),T=l("");T.value=window.config().area||"ja";const q=()=>{var e;if(p())if(1==(null==(e=b.value)?void 0:e.is_auto_lock_screen)||h()){let e=v(),a=e[e.length-1];"pages/launch/index"==(null==a?void 0:a.route)&&f()}else m((()=>{g({title:"加载中..."})})),_({url:"/pages/index/index"});else _({url:"/pages/login/index"})},I=()=>{var e;if(p())if(1==(null==(e=b.value)?void 0:e.is_auto_lock_screen)||h()){let e=v(),a=e[e.length-1];"pages/launch/index"==(null==a?void 0:a.route)&&f()}else m((()=>{g({title:"加载中..."})})),_({url:"/pages/index/index"});else _({url:"/pages/login/index"})},z=()=>{setTimeout((()=>{R.value=!1}),400)},A=()=>{setTimeout((()=>{U.value=!0}),100)};return t((()=>{})),n((()=>{})),(e,a)=>{const s=x,l=w,t=L,n=i;return o(),r(n,{class:"ti-launch-view"},{default:u((()=>["ja"==T.value&&U.value?(o(),r(l,{key:0,class:"ti-launch-video",controls:!1,"object-fit":"fill",autoplay:!0,muted:!0,src:j,poster:k,onError:I,onEnded:q,onLoadedmetadata:z},{default:u((()=>[d(s)])),_:1})):c("",!0),"th"==T.value&&U.value?(o(),r(l,{key:1,class:"ti-launch-video",controls:!1,"object-fit":"fill",autoplay:!0,muted:!0,src:y,poster:E,onError:I,onEnded:q,onLoadedmetadata:z})):c("",!0),R.value&&"ja"==T.value?(o(),r(t,{key:2,class:"ti-launch-splash",onLoad:A,onError:A,src:k})):c("",!0),R.value&&"th"==T.value?(o(),r(t,{key:3,class:"ti-launch-splash",onLoad:A,onError:A,src:E})):c("",!0)])),_:1})}}},[["__scopeId","data-v-36e84c0f"]]);export{b as default};
