import{h as M}from"./moment.a565bb48.js";import{r as S,a as s,j as e,F as D}from"./jsx-runtime.1a5a2715.js";import{S as I}from"./Sort.25a7428d.js";import{h as F,cD as P,cE as i,v as x,bs as w,cF as V,cG as k,cH as Y}from"./index.ee300637.js";import{P as H}from"./getEndpoint.bb7ded34.js";import{u as J}from"./useInfiniteQuery.142046cf.js";import{D as a}from"./EntityChildren.50133102.js";import{I as j}from"./IconSvg.29727645.js";import{d as q}from"./ToastMessage.373e274f.js";import{U as N}from"./UserCard.5b59af51.js";import{B as R}from"./Button.47fead8e.js";import{T as z}from"./Table.cfd583a1.js";import"./iframe.cf33b896.js";import"./index.6dbf9fa2.js";import"./withStyles.7c3d6aba.js";import"./utils.6069a350.js";import"./Alert.9d12ab40.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.627abb94.js";import"./SvgIcon.43465c61.js";import"./Tooltip.5c94c0fd.js";import"./createSvgIcon.d6b9a03c.js";import"./makeStyles.bd855ff6.js";import"./InfoOutlined.9735fa89.js";import"./FullWidthAlert.1624915d.js";import"./Typography.51984e68.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.395c9d56.js";import"./isSymbol.eee16a1e.js";import"./IconCopy.6ad8cebf.js";import"./SkeletonTable.733c6fe6.js";import"./times.fbcd0673.js";import"./toInteger.72a0ddde.js";import"./Skeleton.1753a711.js";import"./Overlay.494df0cd.js";import"./useWaitForDOMRef.4377410d.js";import"./usePopperMarginModifiers.118ff728.js";function G(r,c,p,n,o,_){const{accessToken:d}=F();return J(["forumthread","infinite",r,c,o,p,n],async m=>P(d,r,m.pageParam,c,p,n,o),{..._,getNextPageParam:(m,l)=>{if(m.results.length>0)return l.length*c}})}var f=(r=>(r.FORUM="FORUM",r.THREAD="THREAD",r.DATA_ACCESS_SUBMISSION="DATA_ACCESS_SUBMISSION",r.DATA_ACCESS_SUBMISSION_STATUS="DATA_ACCESS_SUBMISSION_STATUS",r))(f||{}),O=(r=>(r.SUBSCRIPTION_ID="SUBSCRIPTION_ID",r.SUBSCRIBER_ID="SUBSCRIBER_ID",r.OBJECT_ID="OBJECT_ID",r.OBJECT_TYPE="OBJECT_TYPE",r.CREATED_ON="CREATED_ON",r))(O||{});async function W(r,c){const p={objectType:f.FORUM,idList:[c],sortByType:O.OBJECT_ID,sortDirection:a.ASC},n=await V(r,p);if(n.totalNumberOfResults>0)return n.results[0]}const T=({forumId:r,limit:c,filter:p})=>{var A;const{accessToken:n}=F(),[o,_]=S.exports.useState(i.PINNED_AND_LAST_ACTIVITY),[d,m]=S.exports.useState(),[l,h]=S.exports.useState(!1),[y,b]=S.exports.useState(!1);S.exports.useEffect(()=>{W(n,r).then(t=>m(t))},[n,r]);const{data:C,hasNextPage:U,fetchNextPage:v}=G(r,c,o,l,p),L=(A=C==null?void 0:C.pages.flatMap(t=>t.results))!=null?A:[],g=(t,u)=>`${H.PORTAL}#!Synapse:${u}/discussion/threadId=${t}`,B=async()=>{try{if(b(!0),d)await k(n,d.subscriptionId),m(void 0);else{const t={objectId:r,objectType:f.FORUM},u=await Y(n,t);m(u)}}catch(t){q(t.reason,"danger")}finally{b(!1)}},E=t=>{o==t?(_(t),h(!l)):(_(t),h(!1))};return s("div",{className:"ForumTable bootstrap-4-backport",children:[e("div",{className:"ForumTable__top-level-control",children:e(R,{variant:d?"outline-primary":"primary",onClick:()=>B(),disabled:y,children:d?"Unfollow":"Follow"})}),s(z,{children:[e("thead",{children:s("tr",{children:[e("th",{children:s("span",{className:"SRC-split",children:[e("span",{children:"Topic"}),e(I,{role:"button","aria-label":"Sort by Topic",active:o===i.THREAD_TITLE,direction:o==="THREAD_TITLE"?l===!1?a.DESC:a.ASC:a.DESC,onClick:()=>E(i.THREAD_TITLE)})]})}),e("th",{children:"Author"}),e("th",{children:"Active Users"}),e("th",{children:s("span",{className:"SRC-split",children:[e("span",{children:"Replies"}),e(I,{role:"button","aria-label":"Sort by Replies",active:o===i.NUMBER_OF_REPLIES,direction:o==="NUMBER_OF_REPLIES"?l===!1?a.DESC:a.ASC:a.DESC,onClick:()=>E(i.NUMBER_OF_REPLIES)})]})}),e("th",{children:s("span",{className:"SRC-split",children:[e("span",{children:"Views"}),e(I,{role:"button","aria-label":"Sort by Views",active:o===i.NUMBER_OF_VIEWS,direction:o==="NUMBER_OF_VIEWS"?l===!1?a.DESC:a.ASC:a.DESC,onClick:()=>E(i.NUMBER_OF_VIEWS)})]})}),e("th",{children:s("span",{className:"SRC-split",children:[e("span",{children:"Activity"}),e(I,{role:"button","aria-label":"Sort by Last Activity",active:o===i.PINNED_AND_LAST_ACTIVITY,direction:o==="PINNED_AND_LAST_ACTIVITY"?l===!1?a.DESC:a.ASC:a.DESC,onClick:()=>E(i.PINNED_AND_LAST_ACTIVITY)})]})})]})}),e("tbody",{children:L.map(t=>s("tr",{children:[e("td",{children:s("a",{href:g(t.id,t.projectId),children:[t.isPinned?e(j,{options:{icon:"pushpin"}}):e(D,{}),t.title]})}),e("td",{children:e(N,{size:x,ownerId:t.createdBy})}),e("td",{children:t.activeAuthors.map(u=>e("div",{className:"avatarContainer",children:e(N,{showCardOnHover:!0,className:"ActiveUsers",size:w,avatarSize:"MEDIUM",ownerId:u})},u))}),e("td",{children:t.numberOfReplies}),e("td",{children:t.numberOfViews}),e("td",{children:M(t.lastActivity).format("L")})]},t.id))})]}),U?e(R,{variant:"outline-primary",onClick:()=>v(),children:"Show more results"}):e(D,{})]})};try{T.displayName="ForumTable",T.__docgenInfo={description:"",displayName:"ForumTable",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"enum",value:[{value:'"NO_FILTER"'},{value:'"DELETED_ONLY"'},{value:'"EXCLUDE_DELETED"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/discussion_forum/ForumTable.tsx#ForumTable"]={docgenInfo:T.__docgenInfo,name:"ForumTable",path:"src/lib/containers/discussion_forum/ForumTable.tsx#ForumTable"})}catch{}const Pe={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ForumTable } from './ForumTable'

export default {
  title: 'Synapse/ForumTable',
  component: ForumTable,
  argTypes: {},
} as ComponentMeta<typeof ForumTable>

const Template: ComponentStory<typeof ForumTable> = args => (
  <ForumTable {...args} />
)

export const ForumTableDemo = Template.bind({})
ForumTableDemo.args = {
  forumId: '1032',
  limit: 20,
}
`,locationsMap:{"forum-table-demo":{startLoc:{col:52,line:12},endLoc:{col:1,line:14},startBody:{col:52,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/ForumTable",component:T,argTypes:{}},$=r=>e(T,{...r}),K=$.bind({});K.args={forumId:"1032",limit:20};const xe=["ForumTableDemo"];export{K as ForumTableDemo,xe as __namedExportsOrder,Pe as default};
