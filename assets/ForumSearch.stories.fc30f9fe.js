import{r as a,j as t,a as i,F as v}from"./jsx-runtime.e6c7cb0f.js";import{M,cC as k,c_ as A,cB as L,aH as w,cK as j,c$ as E,Y as U}from"./index.a4d7c90b.js";import{d as $}from"./dayjs.min.b6e54d5f.js";import{U as B}from"./UserCard.d526f464.js";import{h as K}from"./SynapseConstants.4792b5b5.js";import{I as b}from"./IconSvg.7c6c26ba.js";import{S as V}from"./SkeletonTable.eb79cb63.js";import{P}from"./getEndpoint.f1f195f5.js";import{f as q}from"./DateFormatter.1327d068.js";import{R as Y}from"./Row.c3dde2f5.js";import{C as F}from"./isArray.d7f4d705.js";import{S as z}from"./Skeleton.fe2a8391.js";import{T as y}from"./Typography.491b6426.js";import{s as G}from"./NoSearchResults.f1ecdb1f.js";import{d as H}from"./ToastMessage.7470eb0d.js";import{B as J}from"./Button.55945b82.js";import"./iframe.62902f49.js";import"./index.2be90583.js";import"./styled.defe1bf4.js";import"./Tooltip.b8c59786.js";import"./SvgIcon.277e4012.js";import"./useTheme.78ea417a.js";import"./TransitionGroupContext.9be55353.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./createWithBsPrefix.d521861c.js";import"./divWithClassName.f3083196.js";import"./index.35ce73ec.js";import"./Fade.43ac51c5.js";import"./IconButton.3458b12d.js";import"./ButtonBase.c32891f3.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./Link.f733bec4.js";import"./Button.6ec7c4e8.js";import"./IconCopy.137bbf05.js";import"./Overlay.eaf422e6.js";import"./contains.d4d1085c.js";import"./usePopperMarginModifiers.667559d9.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.0aadaf3e.js";import"./times.f6524aef.js";import"./toInteger.e34afcf8.js";import"./isSymbol.361bd2a3.js";import"./utc.88a72a89.js";import"./FullWidthAlert.194d0790.js";import"./removeClass.27874bcb.js";import"./uniqueId.3a766a50.js";const _=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),x=r=>{const{threadId:m,replyId:c}=r,{accessToken:s}=M(),[o,l]=a.exports.useState(),[h,S]=a.exports.useState(""),[n,d]=a.exports.useState(),[g,I]=a.exports.useState(),[f,R]=a.exports.useState(!1),C=async()=>{let u;const e=await k(m,s);if(R(!0),c){const p=await A(c,s);u=await L(p.messageKey,s),I(await w(s,p.createdBy)),d(p)}else I(await w(s,e.createdBy)),u=await j(e.messageKey,s);S(await _(u.messageUrl)),l(e),R(!1)};return a.exports.useEffect(()=>{C()},[]),t("div",{className:"search-result-container",children:i(Y,{children:[t(F,{xs:1,children:f?t(z,{variant:"circular",width:"40px",height:"40px"}):c?t(b,{icon:"replyTwoTone"}):t(b,{icon:"chatTwoTone"})}),t(F,{xs:11,children:f?t(V,{numCols:1,numRows:4}):i(v,{children:[t(y,{variant:"headline3",children:t("a",{className:"link",href:((u,e,p)=>{let O=`${P.PORTAL}#!Synapse:${e}/discussion/threadId=${u}`;return p&&(O+=`&replyId=${p}`),O})(o==null?void 0:o.id,o==null?void 0:o.projectId,n==null?void 0:n.id),children:o==null?void 0:o.title})}),t("div",{className:"truncated",children:t(y,{variant:"body1",children:h})}),i("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(B,{size:K,ownerId:g==null?void 0:g.ownerId})," ",q($(n==null?void 0:n.createdOn))]})]})})]})})};try{_.displayName="getMessage",_.__docgenInfo={description:"",displayName:"getMessage",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/DiscussionSearchResult.tsx#getMessage"]={docgenInfo:_.__docgenInfo,name:"getMessage",path:"src/lib/containers/DiscussionSearchResult.tsx#getMessage"})}catch{}try{x.displayName="DiscussionSearchResult",x.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/DiscussionSearchResult.tsx#DiscussionSearchResult"]={docgenInfo:x.__docgenInfo,name:"DiscussionSearchResult",path:"src/lib/containers/DiscussionSearchResult.tsx#DiscussionSearchResult"})}catch{}const T=r=>{const{onSearchResultsVisible:m}=r,{accessToken:c}=M(),[s,o]=a.exports.useState(""),[l,h]=a.exports.useState(),[S,n]=a.exports.useState(),[d,g]=a.exports.useState(),[I,f]=a.exports.useState(!1),R=async()=>{m&&m(!0);try{h(void 0),f(!1);const e=await E({searchString:s,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&f(!0),h(e),n(e.matches)}catch(e){H(e.reason,"danger")}},C=()=>{m&&m(!1),o(""),h(void 0),f(!1),n(void 0)};a.exports.useEffect(()=>{(async()=>{if(r.projectId){const p=await U(c,r.projectId);g(p)}})()},[c,r.projectId]);const N=()=>i("div",{className:"text-center",children:[G,t(y,{variant:"body1",children:"No results with this query"}),t(y,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),u=async()=>{const e=await E({searchString:s,nextPageToken:l==null?void 0:l.nextPageToken},r.forumId,c);h(e),S&&n([...S,...e.matches])};return i("div",{className:"bootstrap-4-backport ForumSearch",children:[i("div",{children:[t("span",{className:"SearchIcon",children:t(b,{icon:"search"})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${l?"SearchBarResult":""}`,placeholder:"Search discussions",value:s,onChange:e=>{o(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&R()}}),s&&t("button",{className:"ClearSearchIcon",onClick:()=>{C()},children:t(b,{icon:"clear"})})]}),I&&i(v,{children:[r.projectId&&i(y,{variant:"body1Italic",className:"NoResultsText",children:["No results for '",s,"' in ",d==null?void 0:d.name]}),t(N,{})]}),S&&i(v,{children:[r.projectId&&!I&&i(y,{variant:"body1Italic",className:"ResultsText",children:["Results for '",s,"' in ",d==null?void 0:d.name]}),S.map(e=>t("div",{children:t(x,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(l==null?void 0:l.nextPageToken)&&t("div",{className:"text-center",children:t(J,{variant:"primary",onClick:u,children:"Load more"})})]})},D=T;try{T.displayName="ForumSearch",T.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ForumSearch.tsx#ForumSearch"]={docgenInfo:T.__docgenInfo,name:"ForumSearch",path:"src/lib/containers/ForumSearch.tsx#ForumSearch"})}catch{}const Ye={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/ForumSearch",component:D,argTypes:{}},Q=r=>t(D,{...r}),W=Q.bind({});W.args={forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)};const ze=["Demo"];export{W as Demo,ze as __namedExportsOrder,Ye as default};
