import{j as t,a as n,r as h}from"./jsx-runtime.a1d381ad.js";import{h as w,E as B,F as V,D as F}from"./index.c07b435e.js";import{u as U,g as p}from"./queryUtils.f36c9064.js";import{u as H}from"./useShowDesktop.5c2f2ae2.js";import{E as K}from"./ExpandableContent.81a55648.js";import{Q as x}from"./QueryCount.3c131b04.js";import{B as O}from"./Button.ebc3484d.js";import{p as P,i as Y}from"./SynapseConstants.b6aa8bf5.js";import"./iframe.81590c6e.js";import"./index.9f535dbb.js";import"./withStyles.697310ee.js";import"./utils.6cb5795e.js";import"./Alert.ae374429.js";import"./index.57d09176.js";import"./createWithBsPrefix.b8918cd7.js";import"./index.35ce73ec.js";import"./isArray.cfd918dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0314c6b1.js";import"./useInfiniteQuery.3fef2ad0.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.bd2e15fe.js";import"./cloneDeep.53ae917a.js";import"./_baseClone.8224a7e6.js";import"./_getTag.25ac8552.js";import"./_Set.3c924fe3.js";import"./IconSvg.61de10c1.js";import"./Tooltip.881da3c6.js";import"./createSvgIcon.8505b138.js";import"./makeStyles.2b248e78.js";import"./InfoOutlined.c00dd9c7.js";import"./sqlFunctions.805519ce.js";import"./RegularExpressions.3cd69849.js";function _({link:a,summary:r,countSql:i,title:l}){return t(K,{title:n("div",{className:"Goals__Mobile__Header",children:[i&&t("span",{className:"Goals__Mobile__Header__Count",children:t(x,{parens:!1,query:{sql:i}})}),n("span",{className:"Goals__Mobile__Header__Title",children:[" ",l," "]})]}),content:n("div",{className:"Goals__Mobile__Content bootstrap-4-backport",children:[t("p",{children:r}),t(O,{variant:"secondary",className:"pill Goals__Mobile__Content__Link",href:a,children:"EXPLORE"})]})})}try{_.displayName="GoalsMobile",_.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/goals/Goals.Mobile.tsx#GoalsMobile"]={docgenInfo:_.__docgenInfo,name:"GoalsMobile",path:"src/lib/containers/home_page/goals/Goals.Mobile.tsx#GoalsMobile"})}catch{}function y({asset:a,link:r,summary:i,countSql:l,title:m}){return n("div",{className:"Goals__Card bootstrap-4-backport",children:[t("div",{className:"Goals__Card__header",style:{background:`url('${a}')`},children:n("p",{children:[n("span",{className:"Goals__Card__header__title",children:[" ",m," "]}),l&&t("span",{className:"Goals__Card__header__count",children:t(x,{parens:!1,query:{sql:l}})})]})}),n("div",{className:"Goals__Card__summary",children:[n("p",{children:[" ",i," "]}),t(O,{className:"pill Goals__Card__summary__link",variant:"secondary",href:r,children:"EXPLORE"})]})]})}try{y.displayName="GoalsDesktop",y.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/goals/Goals.Desktop.tsx#GoalsDesktop"]={docgenInfo:y.__docgenInfo,name:"GoalsDesktop",path:"src/lib/containers/home_page/goals/Goals.Desktop.tsx#GoalsDesktop"})}catch{}const f=a=>{const{entityId:r}=a,{accessToken:i}=w(),[l,m]=h.exports.useState(),[g,b]=h.exports.useState(),C=H(),L={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:r,partMask:P|Y,query:{sql:`select * from ${r} order by ItemOrder`}},{data:e}=U(L);h.exports.useEffect(()=>{(async()=>{var u;try{const o=p("Asset",e);let c=(u=e==null?void 0:e.queryResult.queryResults.rows.map(s=>s.values[o]))!=null?u:[];if(c.some(s=>s===null)&&console.warn("Row has null value(s) when no nulls expected"),c.length===0)return;const d=c.map(s=>({associateObjectId:r,associateObjectType:V.TableEntity,fileHandleId:s})),G=await F({includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:d},i);b(void 0),m(G.requestedFiles.filter(s=>s.preSignedURL!==void 0).map(s=>s.preSignedURL))}catch(o){console.error("Error on get data",o),b(o)}})()},[r,i,e]);const E=p("TableId",e),S=p("CountSql",e),D=p("Title",e),M=p("Summary",e),N=p("Link",e);return n("div",{className:`Goals${C?"__Desktop":""}`,children:[g&&t(B,{error:g}),e==null?void 0:e.queryResult.queryResults.rows.map((R,u)=>{var I;const o=R.values;o.some(v=>v===null)&&console.warn("Row has null value(s) when no nulls expected");const c=E>-1?o[E]:void 0;let d;S>-1&&o[S]?d=o[S]:c&&(d=`SELECT * FROM ${c}`);const q=o[D],G=o[M],s=o[N],A=(I=l==null?void 0:l[u])!=null?I:"",k={countSql:d,title:q,summary:G,link:s,asset:A};return C?t(y,{...k}):t(_,{...k})})]})},T=f;try{f.displayName="Goals",f.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/goals/Goals.tsx#Goals"]={docgenInfo:f.__docgenInfo,name:"Goals",path:"src/lib/containers/home_page/goals/Goals.tsx#Goals"})}catch{}const Ie={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Goals from './Goals'

export default {
  title: 'Home Page/Goals',
  component: Goals,
} as ComponentMeta<typeof Goals>

const Template: ComponentStory<typeof Goals> = args => <Goals {...args} />

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn22315959',
}
`,locationsMap:{demo:{startLoc:{col:47,line:10},endLoc:{col:74,line:10},startBody:{col:47,line:10},endBody:{col:74,line:10}}}}},title:"Home Page/Goals",component:T},Q=a=>t(T,{...a}),j=Q.bind({});j.args={entityId:"syn22315959"};const xe=["Demo"];export{j as Demo,xe as __namedExportsOrder,Ie as default};
