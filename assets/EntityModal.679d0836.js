import{a as n,j as a,F as C,r as y}from"./jsx-runtime.e6c7cb0f.js";import{M as q,c0 as w,a3 as K,ch as Y,E as U,ci as $,a4 as j,a5 as G}from"./index.a4d7c90b.js";import{g as F,B as P}from"./getEndpoint.f1f195f5.js";import{c as H,G as z,S as J,E as X,f as W,P as Q,u as B}from"./HasAccessV2.d3489065.js";import{M as p}from"./Modal.65e1d9b7.js";import{T as Z}from"./Typography.491b6426.js";import{S as D}from"./Skeleton.fe2a8391.js";import{a as ee}from"./Tooltip.b8c59786.js";import{B as ae}from"./Button.55945b82.js";import{d as te}from"./ToastMessage.7470eb0d.js";import{u as ne,S as oe}from"./SchemaDrivenAnnotationEditor.1f5741ca.js";import{c as ie}from"./useEntity.ddbaa66e.js";import{S as se}from"./SkeletonTable.eb79cb63.js";import{i as le}from"./isEmpty.ec592bbb.js";import{d as L}from"./dayjs.min.b6e54d5f.js";import{f as V}from"./DateFormatter.1327d068.js";import{U as v}from"./UserCard.d526f464.js";function I(e){var s;const{copy:i,skeleton:t,...o}=e;return e.skeleton?a(D,{variant:"rectangular",width:150}):a(ee,{title:(s=o["data-tip"])!=null?s:"",placement:"top",enterNextDelay:300,children:a(ae,{...o,children:i})})}const A=e=>{var i,t,o;return n(p,{className:`FluidModal bootstrap-4-backport ${(i=e.className)!=null?i:""}`,backdrop:"static",animation:!1,show:e.show,onHide:e.onClose,children:[a(p.Header,{closeButton:!0,children:a(p.Title,{children:n(Z,{variant:"headline1",component:"span",children:[e.title,e.titlePopoverProps&&a(H,{placement:"right",...e.titlePopoverProps,className:"SRC-margin-left-5 "+((o=(t=e.titlePopoverProps)==null?void 0:t.className)!=null?o:"")})]})})}),a(p.Body,{children:e.children}),n(p.Footer,{children:[e.secondaryActions&&e.secondaryActions.reverse().map((s,d)=>a(I,{variant:"outline",...s},d)),e.primaryAction&&a(I,{variant:"sds-primary",...e.primaryAction})]})]})};try{A.displayName="FluidModal",A.__docgenInfo={description:"Full-screen modal that scales with screen size. Fits requirements defined in SWC-5801",displayName:"FluidModal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string | Element"}},titlePopoverProps:{defaultValue:null,description:"",name:"titlePopoverProps",required:!1,type:{name:"HelpPopoverProps"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},primaryAction:{defaultValue:null,description:"",name:"primaryAction",required:!1,type:{name:"ModalAction"}},secondaryActions:{defaultValue:null,description:"",name:"secondaryActions",required:!1,type:{name:"ModalAction[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/FluidModal.tsx#FluidModal"]={docgenInfo:A.__docgenInfo,name:"FluidModal",path:"src/lib/containers/FluidModal.tsx#FluidModal"})}catch{}const N=({entityId:e})=>{const{isInExperimentalMode:i}=q(),{entityMetadata:t,annotations:o,isLoading:s}=ie(e),{data:d}=ne(e,{enabled:i});return s?a(se,{numRows:3,numCols:2}):n(C,{children:[t&&o&&le(o)?n("div",{className:"placeholder",children:["This"," ",w(K(t.concreteType))," ","has no annotations."]}):null,a("table",{className:"AnnotationsTable",children:n("tbody",{children:[o&&Object.keys(o).map(l=>n("tr",{className:"AnnotationsTable__Row",children:[a("td",{className:"AnnotationsTable__Row__Key",children:l}),a("td",{className:"AnnotationsTable__Row__Value",children:Array.isArray(o[l])?o[l].join(", "):o[l].toString()})]},l)),d&&i?n("tr",{className:"AnnotationsTable__Row",children:[a("td",{className:"AnnotationsTable__Row__Key Schema",children:"Validation Schema"}),a("td",{className:"AnnotationsTable__Row__Value",children:a("a",{href:`${F(P.REPO_ENDPOINT)}repo/v1/schema/type/registered/${d.jsonSchemaVersionInfo.$id}`,target:"_blank",rel:"noopener noreferrer",children:d.jsonSchemaVersionInfo.schemaName})})]}):null]})})]})};try{N.displayName="AnnotationsTable",N.__docgenInfo={description:"",displayName:"AnnotationsTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/metadata/AnnotationsTable.tsx#AnnotationsTable"]={docgenInfo:N.__docgenInfo,name:"AnnotationsTable",path:"src/lib/containers/entity/metadata/AnnotationsTable.tsx#AnnotationsTable"})}catch{}function re(e){switch(e.concreteType){case Q:return e.filePath;case W:return e.bucket;case X:return e.externalURL;case J:return e.storageLocationId===1?"Synapse Storage":`s3://${e.bucketName}`;case z:return`gs://${e.bucketName}`;default:throw new Error(`Couldn't determine location name for file handle: ${JSON.stringify(e)}`)}}const S=({entityId:e,versionNumber:i})=>{var l,c,T,m,u,_;const{data:t}=B(e,i),o=t&&Y(t.entity),[s,d]=y.exports.useState();return y.exports.useEffect(()=>{if((t==null?void 0:t.entityType)===U.FILE){const f=t.fileHandles.filter(r=>r.id===t.entity.dataFileHandleId)[0];f&&d(re(f))}},[t]),t?a("table",{className:"MetadataTable",children:n("tbody",{children:[n("tr",{className:"MetadataTable__Row",children:[a("td",{className:"MetadataTable__Row__Key",children:"Name"}),a("td",{className:"MetadataTable__Row__Value",children:(l=t.entity)==null?void 0:l.name})]}),n("tr",{className:"MetadataTable__Row",children:[a("td",{className:"MetadataTable__Row__Key",children:"Type"}),a("td",{className:"MetadataTable__Row__Value",children:w(t.entityType)})]}),n("tr",{className:"MetadataTable__Row",children:[a("td",{className:"MetadataTable__Row__Key",children:"Synapse ID"}),a("td",{className:"MetadataTable__Row__Value",children:(c=t.entity)==null?void 0:c.id})]}),o&&n("tr",{className:"MetadataTable__Row",children:[a("td",{className:"MetadataTable__Row__Key",children:"Version"}),a("td",{className:"MetadataTable__Row__Value",children:$(t.entity)})]}),s&&n("tr",{className:"MetadataTable__Row",children:[a("td",{className:"MetadataTable__Row__Key",children:"Storage"}),a("td",{className:"MetadataTable__Row__Value",children:s})]}),n("tr",{className:"MetadataTable__Row",children:[a("td",{className:"MetadataTable__Row__Key",children:" Last Modified By"}),n("td",{className:"MetadataTable__Row__Value",children:[a(v,{size:"SMALL USER CARD",ownerId:(T=t.entity)==null?void 0:T.modifiedBy})," ","at ",V(L((m=t.entity)==null?void 0:m.modifiedOn))]})]}),n("tr",{className:"MetadataTable__Row",children:[a("td",{className:"MetadataTable__Row__Key",children:"Created By"}),n("td",{className:"MetadataTable__Row__Value",children:[a(v,{size:"SMALL USER CARD",ownerId:(u=t.entity)==null?void 0:u.createdBy})," ","at ",V(L((_=t.entity)==null?void 0:_.createdOn))]})]})]})}):null};try{S.displayName="MetadataTable",S.__docgenInfo={description:"",displayName:"MetadataTable",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/metadata/MetadataTable.tsx#MetadataTable"]={docgenInfo:S.__docgenInfo,name:"MetadataTable",path:"src/lib/containers/entity/metadata/MetadataTable.tsx#MetadataTable"})}catch{}var O=(e=>(e.METADATA="METADATA",e.ANNOTATIONS="ANNOTATIONS",e))(O||{});const R=({entityId:e,versionNumber:i,show:t,onClose:o,initialTab:s="METADATA",showTabs:d=!0})=>{const l=y.exports.useRef(null),[c,T]=y.exports.useState(s),[m,u]=y.exports.useState(!1),[_,f]=y.exports.useState(!1),{data:r}=B(e,i),x=r&&r.permissions.canEdit,M=r&&j(r.entityType),g=M&&r.entity.isLatestVersion;let E,b;return r?window.location.href.includes(e)||(E={skeleton:!1,copy:`Open ${w(r.entityType)}`,onClick:()=>window.open(`${F(P.PORTAL_ENDPOINT)}#!Synapse:${e}`,"_blank","noopener")}):(E={skeleton:!0},b=void 0),c==="ANNOTATIONS"&&(m?(E={copy:"Save Annotations",onClick:()=>{l.current.formElement.dispatchEvent(new CustomEvent("submit",{cancelable:!0,bubbles:!0}))}},b=[{copy:_?"Are you sure? Unsaved changes will be lost":"Cancel",onClick:()=>{_&&u(!1),f(!_)}}]):x&&(b=[{copy:"Edit",disabled:M&&!g,"data-for":"entityModalTooltip","data-tip":M&&!g?"Annotations can only be edited on the latest version":void 0,onClick:()=>{u(!0)}}])),a(C,{children:a(A,{className:`EntityMetadata ${m?"isInEditMode":""}`,title:r?a(p.Title,{children:r.entity.name}):a(D,{width:"40%"}),show:t,onClose:o,primaryAction:E,secondaryActions:b,children:n(C,{children:[d&&!m?a("div",{className:"Tabs",children:Object.keys(O).map(h=>a("div",{className:"Tab",role:"tab",onClick:k=>{k.stopPropagation(),T(O[h])},"aria-selected":h===c,children:h},h))}):null,a("div",{style:c==="ANNOTATIONS"?{}:{display:"none"},children:m?a(G,{children:a(oe,{entityId:e,formRef:l,onSuccess:()=>{te("Annotations successfully updated.","success"),u(!1)},onCancel:()=>u(!1)})}):a(N,{entityId:e,versionNumber:i})}),a("div",{style:c==="METADATA"?{}:{display:"none"},children:a(S,{entityId:e,versionNumber:i})})]})})})};try{R.displayName="EntityModal",R.__docgenInfo={description:"",displayName:"EntityModal",props:{show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}},versionNumber:{defaultValue:null,description:"",name:"versionNumber",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},initialTab:{defaultValue:{value:"EntityModalTabs.METADATA"},description:"",name:"initialTab",required:!1,type:{name:"enum",value:[{value:'"METADATA"'},{value:'"ANNOTATIONS"'}]}},showTabs:{defaultValue:{value:"true"},description:"",name:"showTabs",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/entity/metadata/EntityModal.tsx#EntityModal"]={docgenInfo:R.__docgenInfo,name:"EntityModal",path:"src/lib/containers/entity/metadata/EntityModal.tsx#EntityModal"})}catch{}export{R as E,A as F,O as a};
