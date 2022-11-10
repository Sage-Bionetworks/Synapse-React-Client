import{r as i,a,j as r,F as g}from"./jsx-runtime.2ff8811e.js";import{j,co as I,p as C}from"./index.3bd83fcc.js";import{D as k}from"./DiscussionSearchResult.794422bb.js";import{s as E}from"./NoSearchResults.c2856a97.js";import{I as x}from"./IconSvg.6f3c0dc5.js";import{d as B}from"./ToastMessage.e5302c4a.js";import{T as d}from"./Typography.58720d37.js";import{B as L}from"./Button.774b93d6.js";import"./iframe.f6116fbf.js";import"./index.95124b04.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.9a92447e.js";import"./utils.2126a84f.js";import"./TransitionGroupContext.ecfa02dc.js";import"./Alert.d722c515.js";import"./createWithBsPrefix.8ba5f7eb.js";import"./index.35ce73ec.js";import"./isArray.c66fbb5a.js";import"./getEndpoint.bb7ded34.js";import"./Link.1ad1c99a.js";import"./Button.52cb13cc.js";import"./ButtonBase.4576d1dd.js";import"./moment.a565bb48.js";import"./UserCard.91d6c8b2.js";import"./IconCopy.2b591d5d.js";import"./SkeletonTable.0cb13ee1.js";import"./times.55c175b4.js";import"./toInteger.a01bda2a.js";import"./isSymbol.15cce469.js";import"./Skeleton.cb3b50d8.js";import"./Tooltip.5bd16401.js";import"./createSvgIcon.13613b84.js";import"./Overlay.dee00487.js";import"./contains.a3df61d1.js";import"./usePopperMarginModifiers.cc29aef6.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.773b3eb8.js";import"./Row.d20789f7.js";import"./InfoOutlined.419ebcb9.js";import"./FullWidthAlert.b9821286.js";import"./removeClass.27874bcb.js";import"./uniqueId.65424154.js";const u=t=>{const{onSearchResultsVisible:c}=t,{accessToken:m}=j(),[s,f]=i.exports.useState(""),[o,p]=i.exports.useState(),[l,h]=i.exports.useState(),[n,v]=i.exports.useState(),[y,S]=i.exports.useState(!1),F=async()=>{c&&c(!0);try{p(void 0),S(!1);const e=await I({searchString:s,nextPageToken:void 0},t.forumId,m);e.matches.length==0&&S(!0),p(e),h(e.matches)}catch(e){B(e.reason,"danger")}},T=()=>{c&&c(!1),f(""),p(void 0),S(!1),h(void 0)};i.exports.useEffect(()=>{(async()=>{if(t.projectId){const N=await C(m,t.projectId);v(N)}})()},[m,t.projectId]);const R=()=>a("div",{className:"text-center",children:[E,r(d,{variant:"body1",children:"No results with this query"}),r(d,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),_=async()=>{const e=await I({searchString:s,nextPageToken:o==null?void 0:o.nextPageToken},t.forumId,m);p(e),l&&h([...l,...e.matches])};return a("div",{className:"bootstrap-4-backport ForumSearch",children:[a("div",{children:[r("span",{className:"SearchIcon",children:r(x,{icon:"search"})}),r("input",{role:"textbox",type:"search",className:`SearchBar  ${o?"SearchBarResult":""}`,placeholder:"Search discussions",value:s,onChange:e=>{f(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&F()}}),s&&r("button",{className:"ClearSearchIcon",onClick:()=>{T()},children:r(x,{icon:"clear"})})]}),y&&a(g,{children:[t.projectId&&a(d,{variant:"body1Italic",className:"NoResultsText",children:["No results for '",s,"' in ",n==null?void 0:n.name]}),r(R,{})]}),l&&a(g,{children:[t.projectId&&!y&&a(d,{variant:"body1Italic",className:"ResultsText",children:["Results for '",s,"' in ",n==null?void 0:n.name]}),l.map(e=>r("div",{children:r(k,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(o==null?void 0:o.nextPageToken)&&r("div",{className:"text-center",children:r(L,{variant:"primary",onClick:_,children:"Load more"})})]})},b=u;try{u.displayName="ForumSearch",u.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ForumSearch.tsx#ForumSearch"]={docgenInfo:u.__docgenInfo,name:"ForumSearch",path:"src/lib/containers/ForumSearch.tsx#ForumSearch"})}catch{}const Te={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/ForumSearch",component:b,argTypes:{}},M=t=>r(b,{...t}),V=M.bind({});V.args={forumId:"1032",onSearchResultsVisible:t=>alert(`Is visible? ${t}`)};const Re=["Demo"];export{V as Demo,Re as __namedExportsOrder,Te as default};
