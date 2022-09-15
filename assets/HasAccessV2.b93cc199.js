import{f as _,c7 as E,aH as C,cr as I}from"./index.857eb08b.js";import{g as q,B as k}from"./getEndpoint.bb7ded34.js";import{d as H}from"./useGetAccessRequirement.29432996.js";import{u as x}from"./useEntityBundle.73b55363.js";import{i as O}from"./FileEntity.69b7bd86.js";import"./assert.761db4f8.js";import{R as b,a as D,A as N,c as F}from"./AccessRequirementList.5083a544.js";import{I as B}from"./IconSvg.e3afc045.js";import{j as t,F as m,a as w}from"./jsx-runtime.00d70968.js";const d=window.React,v=window.React.useMemo,L={AccessBlockedToAnonymous:{icon:"accessClosed",color:e=>e.colors.warning,tooltipText:"You must sign in to access this file."},AccessBlockedByRestriction:{icon:"accessClosed",color:e=>e.colors.warning,tooltipText:"You must request access to this restricted file."},AccessBlockedByACL:{icon:"accessClosed",color:e=>e.colors.warning,tooltipText:"You do not have download access for this item."},Accessible:{icon:"accessOpen",color:e=>e.colors.success,tooltipText:""},NoFileHandle:{icon:"accessOpen",color:e=>e.colors.success,tooltipText:""}};function R(e){const{downloadType:n}=e;if(n){const i=L[n];return t(I.Consumer,{children:c=>t(B,{options:{icon:i.icon,color:i.color(c),label:i.tooltipText}})})}return t(m,{})}function f(e,n){const[i,c]=d.useState(),{accessToken:p}=_(),{data:o,error:A}=x(e,{includeEntity:!0,includePermissions:!0},parseInt(n!=null?n:"")),r=d.useMemo(()=>({restrictableObjectType:b.ENTITY,objectId:e}),[e]),{data:u}=H(r),l=o==null?void 0:o.entity,s=o==null?void 0:o.permissions;return d.useEffect(()=>{u&&u.hasUnmetAccessRequirement?c("AccessBlockedByRestriction"):l&&(s==null?void 0:s.canDownload)?O(l)&&l.dataFileHandleId?c("Accessible"):c("NoFileHandle"):s&&!s.canDownload&&c(p?"AccessBlockedByACL":"AccessBlockedToAnonymous")},[p,l,A,s,u]),i}function h(e){const[n,i]=d.useState(!1),[c,p]=d.useState([]),{entityId:o,entityVersionNumber:A}=e,r=f(o,A),{accessToken:u}=_(),l=d.useMemo(()=>({restrictableObjectType:b.ENTITY,objectId:o}),[o]),{data:s}=H(l),g=()=>{E(u,o).then(a=>{F(a)?window.open(`${q(k.PORTAL_ENDPOINT)}#!AccessRequirements:ID=${o}&TYPE=ENTITY`,"_blank"):(p(a),i(!0))})},S=v(()=>{if(!s)return t(m,{});const a=s==null?void 0:s.hasUnmetAccessRequirement,T=s==null?void 0:s.restrictionLevel;let y="";if(a)y="Request Access";else{if(D.OPEN===T)return t(m,{});y="View Terms"}return w(m,{children:[t("a",{style:{fontSize:"14px",cursor:"pointer",marginLeft:"5px",verticalAlign:"middle"},className:e.className,onClick:g,children:y}),n&&t(N,{entityId:o,accessRequirementFromProps:c,renderAsModal:!0,onHide:()=>{i(!1)}})]})},[o,s,c,n]);return r===void 0?t(m,{}):w("span",{style:{whiteSpace:"nowrap"},children:[r==="AccessBlockedToAnonymous"?t("button",{type:"button",className:C,onClick:a=>{if(a.isTrusted){const T=new MouseEvent("click",{bubbles:!0});a.currentTarget.dispatchEvent(T)}},children:t(R,{downloadType:r})}):t(R,{downloadType:r}),S]})}try{f.displayName="useGetFileHandleDownloadType",f.__docgenInfo={description:`Determines whether an Entity is accessible for download, or if it is blocked by the ACL or unmet Access Requirements.

To make download available, and determine if the file is downloadable via the web, see {@link DirectDownload.tsx }`,displayName:"useGetFileHandleDownloadType",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/HasAccessV2.tsx#useGetFileHandleDownloadType"]={docgenInfo:f.__docgenInfo,name:"useGetFileHandleDownloadType",path:"src/lib/containers/HasAccessV2.tsx#useGetFileHandleDownloadType"})}catch{}try{h.displayName="HasAccessV2",h.__docgenInfo={description:`HasAccess shows if the user has access to the file or not.

The component's behavior changes whether it's passed in a FileHandle or not.
If passed a file handle then it will give more detailed information about the download.`,displayName:"HasAccessV2",props:{onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void)"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},entityVersionNumber:{defaultValue:null,description:"",name:"entityVersionNumber",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/HasAccessV2.tsx#HasAccessV2"]={docgenInfo:h.__docgenInfo,name:"HasAccessV2",path:"src/lib/containers/HasAccessV2.tsx#HasAccessV2"})}catch{}export{h as H};
