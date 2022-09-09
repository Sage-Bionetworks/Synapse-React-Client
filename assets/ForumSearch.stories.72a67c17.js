import{f as M,l as L,cm as A,cn as j,co as U,c2 as E,cp as $,cq as F,X as V}from"./index.6ac6fc35.js";import{h as B}from"./moment.a565bb48.js";import{T as f}from"./Typography.e0d7a65e.js";import{U as K}from"./UserCard.103461a8.js";import{I as w}from"./IconSvg.e3afc045.js";import{S as P}from"./SkeletonTable.9c89f8b3.js";import{P as q}from"./getEndpoint.bb7ded34.js";import{j as t,a as n,F as C}from"./jsx-runtime.00d70968.js";import{R as Y}from"./Row.f2388f00.js";import{o as k,k as z}from"./ToastMessage.72011e3e.js";import{S as G}from"./Skeleton.c897a2bf.js";import{s as H}from"./NoSearchResults.a01d676d.js";import{B as X}from"./Button.fda23eee.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./makeStyles.733638f6.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./assert.28421ae9.js";import"./iframe.ec48e4d2.js";import"./IconCopy.095bf867.js";import"./Overlay.b3559176.js";import"./useWaitForDOMRef.064fee4c.js";import"./usePopperMarginModifiers.0428ddea.js";import"./InfoOutlined.31277c73.js";import"./times.3b46d202.js";import"./toInteger.7d422825.js";const R=window.React.useState,J=window.React.useEffect,T=async s=>(await fetch(s,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),b=s=>{const{threadId:m,replyId:c}=s,{accessToken:r}=M(),[o,i]=R(),[u,h]=R(""),[a,l]=R(),[g,y]=R(),[S,_]=R(!1),v=async()=>{let p;const e=await A(m,r);if(_(!0),c){const d=await j(c,r);p=await U(d.messageKey,r),y(await E(r,d.createdBy)),l(d)}else y(await E(r,e.createdBy)),p=await $(e.messageKey,r);h(await T(p.messageUrl)),i(e),_(!1)};return J(()=>{v()},[]),t("div",{className:"search-result-container",children:n(Y,{children:[t(k,{xs:1,children:S?t(G,{variant:"circle",width:"40px",height:"40px"}):c?t(w,{options:{icon:"replyTwoTone"}}):t(w,{options:{icon:"chatTwoTone"}})}),t(k,{xs:11,children:S?t(P,{numCols:1,numRows:4}):n(C,{children:[t(f,{variant:"headline3",children:t("a",{className:"link",href:((p,e,d)=>{let O=`${q.PORTAL}#!Synapse:${e}/discussion/threadId=${p}`;return d&&(O+=`&replyId=${d}`),O})(o==null?void 0:o.id,o==null?void 0:o.projectId,a==null?void 0:a.id),children:o==null?void 0:o.title})}),t("div",{className:"truncated",children:t(f,{variant:"body1",children:u})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(K,{size:L,ownerId:g==null?void 0:g.ownerId})," ",B(a==null?void 0:a.createdOn).format("l LT")]})]})})]})})};try{T.displayName="getMessage",T.__docgenInfo={description:"",displayName:"getMessage",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/DiscussionSearchResult.tsx#getMessage"]={docgenInfo:T.__docgenInfo,name:"getMessage",path:"src/lib/containers/DiscussionSearchResult.tsx#getMessage"})}catch{}try{b.displayName="DiscussionSearchResult",b.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/DiscussionSearchResult.tsx#DiscussionSearchResult"]={docgenInfo:b.__docgenInfo,name:"DiscussionSearchResult",path:"src/lib/containers/DiscussionSearchResult.tsx#DiscussionSearchResult"})}catch{}const Q=window.React.useEffect,I=window.React.useState,x=s=>{const{onSearchResultsVisible:m}=s,{accessToken:c}=M(),[r,o]=I(""),[i,u]=I(),[h,a]=I(),[l,g]=I(),[y,S]=I(!1),_=async()=>{m&&m(!0);try{u(void 0),S(!1);const e=await F({searchString:r,nextPageToken:void 0},s.forumId,c);e.matches.length==0&&S(!0),u(e),a(e.matches)}catch(e){z(e.reason,"danger")}},v=()=>{m&&m(!1),o(""),u(void 0),S(!1),a(void 0)};Q(()=>{(async()=>{if(s.projectId){const d=await V(c,s.projectId);g(d)}})()},[c,s.projectId]);const N=()=>n("div",{className:"text-center",children:[H,t(f,{variant:"body1",children:"No results with this query"}),t(f,{variant:"body2",children:"Search the full text of posts, replies, and titles"})]}),p=async()=>{const e=await F({searchString:r,nextPageToken:i==null?void 0:i.nextPageToken},s.forumId,c);u(e),h&&a([...h,...e.matches])};return n("div",{className:"bootstrap-4-backport ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(w,{options:{icon:"search"}})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${i?"SearchBarResult":""}`,placeholder:"Search discussions",value:r,onChange:e=>{o(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&_()}}),r&&t("button",{className:"ClearSearchIcon",onClick:()=>{v()},children:t(w,{options:{icon:"clear"}})})]}),y&&n(C,{children:[s.projectId&&n(f,{variant:"body2",className:"NoResultsText",children:["No results for '",r,"' in ",l==null?void 0:l.name]}),t(N,{})]}),h&&n(C,{children:[s.projectId&&!y&&n(f,{variant:"body2",className:"ResultsText",children:["Results for '",r,"' in ",l==null?void 0:l.name]}),h.map(e=>t("div",{children:t(b,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(i==null?void 0:i.nextPageToken)&&t("div",{className:"text-center",children:t(X,{variant:"primary",onClick:p,children:"Load more"})})]})},D=x;try{x.displayName="ForumSearch",x.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ForumSearch.tsx#ForumSearch"]={docgenInfo:x.__docgenInfo,name:"ForumSearch",path:"src/lib/containers/ForumSearch.tsx#ForumSearch"})}catch{}const ke={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ForumSearch from './ForumSearch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/ForumSearch',
  component: ForumSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ForumSearch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForumSearch> = args => (
  <ForumSearch {...args} />
)

export const Demo = Template.bind({})

Demo.args = {
  forumId: '1032',
  onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`),
}
`,locationsMap:{demo:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/ForumSearch",component:D,argTypes:{}},W=s=>t(D,{...s}),Z=W.bind({});Z.args={forumId:"1032",onSearchResultsVisible:s=>alert(`Is visible? ${s}`)};const Me=["Demo"];export{Z as Demo,Me as __namedExportsOrder,ke as default};
