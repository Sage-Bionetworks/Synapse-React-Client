import{j as t,a as n,r as h}from"./jsx-runtime.8ee42ca4.js";import{a4 as w,az as B,af as V,an as U}from"./index.6e226ad1.js";import{u as F,g as p}from"./queryUtils.fd75f684.js";import{u as H}from"./useShowDesktop.d52e2d2d.js";import{E as K}from"./ExpandableContent.33064ba4.js";import{Q as x}from"./QueryCount.c03f6405.js";import{B as O}from"./Button.32185a3f.js";import{n as P,i as Y}from"./SynapseConstants.4792b5b5.js";import"./iframe.57558d86.js";import"./index.c68764fa.js";import"./styled.cab085b6.js";import"./Tooltip.53b3d1bd.js";import"./SvgIcon.e7d9e8d5.js";import"./useTheme.a650b60c.js";import"./TransitionGroupContext.d40bca5e.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./createWithBsPrefix.1fcef933.js";import"./divWithClassName.4fa3ddf0.js";import"./index.35ce73ec.js";import"./Fade.8d5d2209.js";import"./isArray.649754a9.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9744025b.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./emotion-react.browser.esm.755544ae.js";import"./Link.f5b0fcd9.js";import"./Typography.dc67c84b.js";import"./Button.73b6fb95.js";import"./useInfiniteQuery.c55a2f77.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.78bffa27.js";import"./cloneDeep.afef7fdc.js";import"./_baseClone.3c4d3b67.js";import"./_Set.07f8d416.js";import"./sqlFunctions.e821b8e9.js";import"./RegularExpressions.3cd69849.js";function _({link:a,summary:r,countSql:i,title:l}){return t(K,{title:n("div",{className:"Goals__Mobile__Header",children:[i&&t("span",{className:"Goals__Mobile__Header__Count",children:t(x,{parens:!1,query:{sql:i}})}),n("span",{className:"Goals__Mobile__Header__Title",children:[" ",l," "]})]}),content:n("div",{className:"Goals__Mobile__Content bootstrap-4-backport",children:[t("p",{children:r}),t(O,{variant:"secondary",className:"pill Goals__Mobile__Content__Link",href:a,children:"EXPLORE"})]})})}try{_.displayName="GoalsMobile",_.__docgenInfo={description:"",displayName:"GoalsMobile",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/goals/Goals.Mobile.tsx#GoalsMobile"]={docgenInfo:_.__docgenInfo,name:"GoalsMobile",path:"src/lib/containers/home_page/goals/Goals.Mobile.tsx#GoalsMobile"})}catch{}function y({asset:a,link:r,summary:i,countSql:l,title:d}){return n("div",{className:"Goals__Card bootstrap-4-backport",children:[t("div",{className:"Goals__Card__header",style:{background:`url('${a}')`},children:n("p",{children:[n("span",{className:"Goals__Card__header__title",children:[" ",d," "]}),l&&t("span",{className:"Goals__Card__header__count",children:t(x,{parens:!1,query:{sql:l}})})]})}),n("div",{className:"Goals__Card__summary",children:[n("p",{children:[" ",i," "]}),t(O,{className:"pill Goals__Card__summary__link",variant:"secondary",href:r,children:"EXPLORE"})]})]})}try{y.displayName="GoalsDesktop",y.__docgenInfo={description:"",displayName:"GoalsDesktop",props:{countSql:{defaultValue:null,description:"",name:"countSql",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!0,type:{name:"string"}},asset:{defaultValue:null,description:"",name:"asset",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/goals/Goals.Desktop.tsx#GoalsDesktop"]={docgenInfo:y.__docgenInfo,name:"GoalsDesktop",path:"src/lib/containers/home_page/goals/Goals.Desktop.tsx#GoalsDesktop"})}catch{}const f=a=>{const{entityId:r}=a,{accessToken:i}=w(),[l,d]=h.exports.useState(),[g,b]=h.exports.useState(),C=H(),L={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:r,partMask:P|Y,query:{sql:`select * from ${r} order by ItemOrder`}},{data:e}=F(L);h.exports.useEffect(()=>{(async()=>{var u;try{const o=p("Asset",e);let c=(u=e==null?void 0:e.queryResult.queryResults.rows.map(s=>s.values[o]))!=null?u:[];if(c.some(s=>s===null)&&console.warn("Row has null value(s) when no nulls expected"),c.length===0)return;const m=c.map(s=>({associateObjectId:r,associateObjectType:V.TableEntity,fileHandleId:s})),G=await U({includeFileHandles:!1,includePreSignedURLs:!0,includePreviewPreSignedURLs:!1,requestedFiles:m},i);b(void 0),d(G.requestedFiles.filter(s=>s.preSignedURL!==void 0).map(s=>s.preSignedURL))}catch(o){console.error("Error on get data",o),b(o)}})()},[r,i,e]);const E=p("TableId",e),S=p("CountSql",e),M=p("Title",e),N=p("Summary",e),D=p("Link",e);return n("div",{className:`Goals${C?"__Desktop":""}`,children:[g&&t(B,{error:g}),e==null?void 0:e.queryResult.queryResults.rows.map((R,u)=>{var I;const o=R.values;o.some(v=>v===null)&&console.warn("Row has null value(s) when no nulls expected");const c=E>-1?o[E]:void 0;let m;S>-1&&o[S]?m=o[S]:c&&(m=`SELECT * FROM ${c}`);const q=o[M],G=o[N],s=o[D],A=(I=l==null?void 0:l[u])!=null?I:"",k={countSql:m,title:q,summary:G,link:s,asset:A};return C?t(y,{...k}):t(_,{...k})})]})},T=f;try{f.displayName="Goals",f.__docgenInfo={description:"",displayName:"Goals",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/goals/Goals.tsx#Goals"]={docgenInfo:f.__docgenInfo,name:"Goals",path:"src/lib/containers/home_page/goals/Goals.tsx#Goals"})}catch{}const Me={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:47,line:10},endLoc:{col:74,line:10},startBody:{col:47,line:10},endBody:{col:74,line:10}}}}},title:"Home Page/Goals",component:T},Q=a=>t(T,{...a}),j=Q.bind({});j.args={entityId:"syn22315959"};const Ne=["Demo"];export{j as Demo,Ne as __namedExportsOrder,Me as default};
