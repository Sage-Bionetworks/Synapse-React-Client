import{a as g,j as s,r as l,F as _}from"./jsx-runtime.6cb91464.js";import{k as m,bs as y,h as c,af as T}from"./index.253aaada.js";import{h}from"./SynapseConstants.b6aa8bf5.js";import{P as S}from"./getEndpoint.bb7ded34.js";import{I as O}from"./IconSvg.e72d865a.js";import{U as b}from"./UserCard.e4c786fd.js";import{S as B}from"./Skeleton.2376d7a3.js";function H(r,e){const{accessToken:n}=c();return m(["userGroupHeader",r],async()=>{const a=await T([r],n);if(a.children.length!==1)throw new Error(`Expected one response in useGetUserGroupHeader for id: ${r}, got ${a.children.length}`);return a.children[0]},e)}function R(r,e,n){return m(["userGroupHeader","search",r,e],async()=>(await y(r,e)).children,n)}function d(r){const{teamId:e,teamName:n,disableHref:t}=r;return g("span",{children:[s(O,{icon:"team"}),s("a",{style:{marginLeft:"5px"},href:t?void 0:`${S.PORTAL}#!Team:${e}`,children:n})]})}try{d.displayName="TeamBadge",d.__docgenInfo={description:"",displayName:"TeamBadge",props:{teamId:{defaultValue:null,description:"",name:"teamId",required:!0,type:{name:"string | number"}},teamName:{defaultValue:null,description:"",name:"teamName",required:!0,type:{name:"string"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/TeamBadge.tsx#TeamBadge"]={docgenInfo:d.__docgenInfo,name:"TeamBadge",path:"src/lib/containers/TeamBadge.tsx#TeamBadge"})}catch{}function u(r){let e=r.principalId;const{disableHref:n,showFullName:t,userGroupHeader:a}=r;e==null&&(e=a==null?void 0:a.ownerId);const{accessToken:p}=c(),[o,f]=l.exports.useState(a),{data:i}=H((e!=null?e:"").toString(),{enabled:!a});return l.exports.useEffect(()=>{e&&o==null&&i&&f(i)},[p,e,o,i]),e==null&&a==null?(console.error("Expected one of principalId or userGroupHeader to be defined but both were null or undefined"),s(_,{})):o===void 0?s(B,{width:125,height:30}):o.isIndividual?s(b,{ownerId:e.toString(),size:h,disableLink:n,showFullName:t}):s(d,{teamId:e,teamName:o.userName,disableHref:n})}try{u.displayName="UserOrTeamBadge",u.__docgenInfo={description:"",displayName:"UserOrTeamBadge",props:{principalId:{defaultValue:null,description:"",name:"principalId",required:!1,type:{name:"string | number"}},userGroupHeader:{defaultValue:null,description:"",name:"userGroupHeader",required:!1,type:{name:"UserGroupHeader"}},showFullName:{defaultValue:null,description:"",name:"showFullName",required:!1,type:{name:"boolean"}},disableHref:{defaultValue:null,description:"",name:"disableHref",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/UserOrTeamBadge.tsx#UserOrTeamBadge"]={docgenInfo:u.__docgenInfo,name:"UserOrTeamBadge",path:"src/lib/containers/UserOrTeamBadge.tsx#UserOrTeamBadge"})}catch{}export{u as U,R as u};
