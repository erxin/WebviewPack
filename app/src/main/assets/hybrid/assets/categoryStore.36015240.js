import{aW as a,r as e,aX as t,ak as r,aY as l,L as s,aZ as n}from"./index-e86eaeef.js";const o={name:{en:"All",zh:"全部",zhtw:"所有",th:"ทั้งหมด",ja:"全部",ko:"모두",tr:"Tümü"},name_text:"All",category_id:0},u=`${{}.VITE_APP_NAME}_category`.toUpperCase(),i=a("categoryStore",(()=>{const a=e(!1),i=e([]),c=e(),{nameTranslate:m}=t();r((()=>i.value),(()=>{l(u,i.value)}),{deep:!0});const v=async(e=!1)=>{var t;if(a.value)return;const r=s(u)||[];if(!e&&r&&r.length>0)return i.value=r,void g();try{a.value=!0;const e=await n(),r=[];return e.data.list&&e.data.list.length>0&&(null==(t=e.data.list)||t.map((a=>{a.name=m(a.name),a.child&&a.child.length>0&&a.child.map((a=>{a.name=m(a.name)})),r.push(a)})),r.push(o)),i.value=r,Promise.resolve(r)}catch(l){return Promise.reject(l)}finally{a.value=!1,g()}},g=()=>{c.value&&clearTimeout(c.value),c.value=setTimeout((()=>{v(!0)}),6e5)};return{categoryLoading:a,categoryList:i,getCategory:v,clearCategory:()=>{i.value=[]}}}));export{o as a,i as u};
