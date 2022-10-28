import{r as f,a as h,j as d}from"./jsx-runtime.4eaffca0.js";import{g as v,p as N}from"./sqlFunctions.a660c34a.js";import{f as T,z as O}from"./index.e08ca228.js";import{C as x}from"./ColumnType.744125d2.js";import{U as V}from"./UserCardList.12b6408b.js";import{am as b,i as k}from"./SynapseConstants.b6aa8bf5.js";import{L as w}from"./UserCard.73a822b2.js";import{a as B}from"./use-deep-compare-effect.esm.7fe1b1d8.js";import{B as F}from"./Button.9f15dabf.js";const M="sage_rotate_uids",Q=3,J=(e=[],s=Q,r)=>{let l=[],t=[];const i=localStorage.getItem(r);if(i!=null&&(l=JSON.parse(i)),l.length){const a=e.filter(n=>!l.includes(n));if(a.length>=s)return t=a.slice(0,s),localStorage.setItem(r,JSON.stringify(l.concat(t))),t;{localStorage.removeItem(r);const n=e.slice(0,s-a.length);return localStorage.setItem(r,JSON.stringify(n)),a.concat(n)}}else return t=e.slice(0,s),localStorage.setItem(r,JSON.stringify(t)),t},c=({sql:e,count:s,useQueryResultUserData:r=!1,size:l=b,summaryLink:t,summaryLinkText:i,selectedFacets:a,searchParams:n,sqlOperator:R})=>{const{accessToken:S}=T(),[m,L]=f.exports.useState([]),[U,_]=f.exports.useState(),[p,y]=f.exports.useState();let g=!0;const I=`${M}-${e}-${JSON.stringify(a)}`;return B(()=>(async function(){y(!0);const E=v(n,R),A=N(e),C=await O({partMask:k,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:A,query:{sql:e,additionalFilters:E,selectedFacets:a}},S),{queryResult:u}=C;if(u!=null&&u.queryResults.rows){const D=u.queryResults.headers.findIndex(o=>o.columnType===x.USERID),q=u.queryResults.rows.map(o=>o.values[D]).filter(o=>o!==null);if(g){const o=J(q,s,I);L(o),r&&_(C),y(!1)}}else console.log("UserCardListRotate: Error getting data")}(),()=>{g=!1}),[e,a,s,S,n,R]),h("div",{className:"UserCardListRotate bootstrap-4-backport",children:[p&&d(w,{}),!p&&m.length===0&&d("p",{className:"font-italic",children:"No one was found."}),!p&&m.length>0&&d(V,{list:m,size:l,data:U}),t&&i&&d("div",{className:"UserCardListRotate__summary",children:d(F,{className:"pill",variant:"secondary",size:"lg",href:t,children:i})})]})},te=c;try{c.displayName="UserCardListRotate",c.__docgenInfo={description:"",displayName:"UserCardListRotate",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},useQueryResultUserData:{defaultValue:{value:"false"},description:"",name:"useQueryResultUserData",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"LARGE USER CARD"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"AVATAR"'},{value:'"SMALL USER CARD"'},{value:'"MEDIUM USER CARD"'},{value:'"LARGE USER CARD"'}]}},summaryLink:{defaultValue:null,description:"",name:"summaryLink",required:!1,type:{name:"string"}},summaryLinkText:{defaultValue:null,description:"",name:"summaryLinkText",required:!1,type:{name:"string"}},selectedFacets:{defaultValue:null,description:"",name:"selectedFacets",required:!1,type:{name:"FacetColumnRequest[]"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/UserCardListRotate.tsx#UserCardListRotate"]={docgenInfo:c.__docgenInfo,name:"UserCardListRotate",path:"src/lib/containers/UserCardListRotate.tsx#UserCardListRotate"})}catch{}export{te as U};
