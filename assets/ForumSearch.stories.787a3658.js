import{r as i,a,j as r,F as g}from"./jsx-runtime.02fcd003.js";import{j,co as I,p as C}from"./index.91a9706e.js";import{D as k}from"./DiscussionSearchResult.0c06400f.js";import{s as E}from"./NoSearchResults.617c97fc.js";import{I as x}from"./IconSvg.c783b477.js";import{d as B}from"./ToastMessage.5f109185.js";import{T as d}from"./Typography.79e944f5.js";import{B as L}from"./Button.bd4bae0e.js";import"./iframe.25b1a9fc.js";import"./index.0864d1cf.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.094a3a2c.js";import"./utils.62f6c1ea.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./index.35ce73ec.js";import"./isArray.404de5ac.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.66ad72a0.js";import"./moment.a565bb48.js";import"./UserCard.f776b74e.js";import"./IconCopy.5b716459.js";import"./SkeletonTable.8183c23e.js";import"./times.36513370.js";import"./toInteger.3466557e.js";import"./isSymbol.b2b689d7.js";import"./Skeleton.1c99f826.js";import"./emotion-react.browser.esm.a24af408.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./Tooltip.977ea0b9.js";import"./createSvgIcon.37b7d2f8.js";import"./Overlay.712e50d1.js";import"./contains.593a857e.js";import"./usePopperMarginModifiers.417da628.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.abb80557.js";import"./Row.0f10a694.js";import"./InfoOutlined.9adbadde.js";import"./FullWidthAlert.b9addea3.js";import"./removeClass.27874bcb.js";import"./uniqueId.446adc13.js";const u=t=>{const{onSearchResultsVisible:c}=t,{accessToken:m}=j(),[s,f]=i.exports.useState(""),[o,p]=i.exports.useState(),[l,h]=i.exports.useState(),[n,v]=i.exports.useState(),[y,S]=i.exports.useState(!1),F=async()=>{c&&c(!0);try{p(void 0),S(!1);const e=await I({searchString:s,nextPageToken:void 0},t.forumId,m);e.matches.length==0&&S(!0),p(e),h(e.matches)}catch(e){B(e.reason,"danger")}},T=()=>{c&&c(!1),f(""),p(void 0),S(!1),h(void 0)};i.exports.useEffect(()=>{(async()=>{if(t.projectId){const N=await C(m,t.projectId);v(N)}})()},[m,t.projectId]);const R=()=>a("div",{className:"text-center",children:[E,r(d,{variant:"body1",children:"No results with this query"}),r(d,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),_=async()=>{const e=await I({searchString:s,nextPageToken:o==null?void 0:o.nextPageToken},t.forumId,m);p(e),l&&h([...l,...e.matches])};return a("div",{className:"bootstrap-4-backport ForumSearch",children:[a("div",{children:[r("span",{className:"SearchIcon",children:r(x,{icon:"search"})}),r("input",{role:"textbox",type:"search",className:`SearchBar  ${o?"SearchBarResult":""}`,placeholder:"Search discussions",value:s,onChange:e=>{f(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&F()}}),s&&r("button",{className:"ClearSearchIcon",onClick:()=>{T()},children:r(x,{icon:"clear"})})]}),y&&a(g,{children:[t.projectId&&a(d,{variant:"body1Italic",className:"NoResultsText",children:["No results for '",s,"' in ",n==null?void 0:n.name]}),r(R,{})]}),l&&a(g,{children:[t.projectId&&!y&&a(d,{variant:"body1Italic",className:"ResultsText",children:["Results for '",s,"' in ",n==null?void 0:n.name]}),l.map(e=>r("div",{children:r(k,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(o==null?void 0:o.nextPageToken)&&r("div",{className:"text-center",children:r(L,{variant:"primary",onClick:_,children:"Load more"})})]})},b=u;try{u.displayName="ForumSearch",u.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ForumSearch.tsx#ForumSearch"]={docgenInfo:u.__docgenInfo,name:"ForumSearch",path:"src/lib/containers/ForumSearch.tsx#ForumSearch"})}catch{}const Fe={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/ForumSearch",component:b,argTypes:{}},M=t=>r(b,{...t}),V=M.bind({});V.args={forumId:"1032",onSearchResultsVisible:t=>alert(`Is visible? ${t}`)};const Te=["Demo"];export{V as Demo,Te as __namedExportsOrder,Fe as default};
