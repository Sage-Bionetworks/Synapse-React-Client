import{f as M,o as A,cz as L,cA as j,cB as U,Z as E,cC as $,cD as F,p as B}from"./index.a536ed12.js";import{h as V}from"./moment.a565bb48.js";import{T as S}from"./Typography.868473dc.js";import{U as K}from"./UserCard.0eeb2c8e.js";import{I as C}from"./IconSvg.debd858a.js";import{S as P}from"./SkeletonTable.ec4e7fc2.js";import{P as q}from"./getEndpoint.bb7ded34.js";import{j as t,a as n,F as v}from"./jsx-runtime.00d70968.js";import{R as Y}from"./Row.f2388f00.js";import{C as D}from"./toString.d84aaeca.js";import{S as z}from"./Skeleton.99b24529.js";import{s as G}from"./NoSearchResults.a01d676d.js";import{d as H}from"./ToastMessage.de6992d0.js";import{B as Z}from"./Button.fda23eee.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./assert.fddb1cad.js";import"./iframe.f8de4d79.js";import"./SvgIcon.e37b9412.js";import"./makeStyles.45e8b79c.js";import"./IconCopy.095bf867.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./Overlay.7bb560f6.js";import"./useWaitForDOMRef.97759fd7.js";import"./usePopperMarginModifiers.44e3343c.js";import"./hasClass.56fd144a.js";import"./InfoOutlined.60e019a4.js";import"./times.b28c51b3.js";import"./toInteger.0e6612b4.js";import"./FullWidthAlert.6afa82c9.js";import"./removeClass.27874bcb.js";import"./uniqueId.eba72690.js";const R=window.React.useState,J=window.React.useEffect,T=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),b=r=>{const{threadId:m,replyId:c}=r,{accessToken:o}=M(),[s,i]=R(),[u,h]=R(""),[a,l]=R(),[g,y]=R(),[f,_]=R(!1),w=async()=>{let p;const e=await L(m,o);if(_(!0),c){const d=await j(c,o);p=await U(d.messageKey,o),y(await E(o,d.createdBy)),l(d)}else y(await E(o,e.createdBy)),p=await $(e.messageKey,o);h(await T(p.messageUrl)),i(e),_(!1)};return J(()=>{w()},[]),t("div",{className:"search-result-container",children:n(Y,{children:[t(D,{xs:1,children:f?t(z,{variant:"circle",width:"40px",height:"40px"}):c?t(C,{options:{icon:"replyTwoTone"}}):t(C,{options:{icon:"chatTwoTone"}})}),t(D,{xs:11,children:f?t(P,{numCols:1,numRows:4}):n(v,{children:[t(S,{variant:"headline3",children:t("a",{className:"link",href:((p,e,d)=>{let O=`${q.PORTAL}#!Synapse:${e}/discussion/threadId=${p}`;return d&&(O+=`&replyId=${d}`),O})(s==null?void 0:s.id,s==null?void 0:s.projectId,a==null?void 0:a.id),children:s==null?void 0:s.title})}),t("div",{className:"truncated",children:t(S,{variant:"body1",children:u})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(K,{size:A,ownerId:g==null?void 0:g.ownerId})," ",V(a==null?void 0:a.createdOn).format("l LT")]})]})})]})})};try{T.displayName="getMessage",T.__docgenInfo={description:"",displayName:"getMessage",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/DiscussionSearchResult.tsx#getMessage"]={docgenInfo:T.__docgenInfo,name:"getMessage",path:"src/lib/containers/DiscussionSearchResult.tsx#getMessage"})}catch{}try{b.displayName="DiscussionSearchResult",b.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/DiscussionSearchResult.tsx#DiscussionSearchResult"]={docgenInfo:b.__docgenInfo,name:"DiscussionSearchResult",path:"src/lib/containers/DiscussionSearchResult.tsx#DiscussionSearchResult"})}catch{}const Q=window.React.useEffect,I=window.React.useState,x=r=>{const{onSearchResultsVisible:m}=r,{accessToken:c}=M(),[o,s]=I(""),[i,u]=I(),[h,a]=I(),[l,g]=I(),[y,f]=I(!1),_=async()=>{m&&m(!0);try{u(void 0),f(!1);const e=await F({searchString:o,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&f(!0),u(e),a(e.matches)}catch(e){H(e.reason,"danger")}},w=()=>{m&&m(!1),s(""),u(void 0),f(!1),a(void 0)};Q(()=>{(async()=>{if(r.projectId){const d=await B(c,r.projectId);g(d)}})()},[c,r.projectId]);const N=()=>n("div",{className:"text-center",children:[G,t(S,{variant:"body1",children:"No results with this query"}),t(S,{variant:"body2",children:"Search the full text of posts, replies, and titles"})]}),p=async()=>{const e=await F({searchString:o,nextPageToken:i==null?void 0:i.nextPageToken},r.forumId,c);u(e),h&&a([...h,...e.matches])};return n("div",{className:"bootstrap-4-backport ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(C,{options:{icon:"search"}})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${i?"SearchBarResult":""}`,placeholder:"Search discussions",value:o,onChange:e=>{s(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&_()}}),o&&t("button",{className:"ClearSearchIcon",onClick:()=>{w()},children:t(C,{options:{icon:"clear"}})})]}),y&&n(v,{children:[r.projectId&&n(S,{variant:"body2",className:"NoResultsText",children:["No results for '",o,"' in ",l==null?void 0:l.name]}),t(N,{})]}),h&&n(v,{children:[r.projectId&&!y&&n(S,{variant:"body2",className:"ResultsText",children:["Results for '",o,"' in ",l==null?void 0:l.name]}),h.map(e=>t("div",{children:t(b,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(i==null?void 0:i.nextPageToken)&&t("div",{className:"text-center",children:t(Z,{variant:"primary",onClick:p,children:"Load more"})})]})},k=x;try{x.displayName="ForumSearch",x.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ForumSearch.tsx#ForumSearch"]={docgenInfo:x.__docgenInfo,name:"ForumSearch",path:"src/lib/containers/ForumSearch.tsx#ForumSearch"})}catch{}const Be={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/ForumSearch",component:k,argTypes:{}},W=r=>t(k,{...r}),X=W.bind({});X.args={forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)};const Ve=["Demo"];export{X as Demo,Ve as __namedExportsOrder,Be as default};
