import{h as O}from"./moment.a565bb48.js";import{r as T,a as i,j as r,F as k}from"./jsx-runtime.6cb91464.js";import{S as s}from"./Sort.14d5feba.js";import"./getEndpoint.bb7ded34.js";import{a as M,S as w,c as B,F as U}from"./useSubscription.1c738e5d.js";import{h as V,an as x}from"./SynapseConstants.b6aa8bf5.js";import{D as t}from"./EntityChildren.50133102.js";import{c2 as a}from"./index.253aaada.js";import{I as P}from"./IconSvg.e72d865a.js";import{d as Y}from"./ToastMessage.5ece0449.js";import{U as C}from"./UserCard.e4c786fd.js";import{B as h}from"./Button.719dc857.js";import{T as H}from"./Table.d9e33fc4.js";import{M as c}from"./Modal.79aadbe2.js";import"./iframe.77de7a8b.js";import"./useMutation.3ad2be87.js";import"./useInfiniteQuery.62a8c625.js";import"./DiscussionSearchResult.aa102976.js";import"./SkeletonTable.ab3ce48c.js";import"./times.231664f9.js";import"./toInteger.70d616ab.js";import"./isSymbol.116fae96.js";import"./isArray.c85446b1.js";import"./index.35ce73ec.js";import"./Skeleton.2376d7a3.js";import"./styled.9d49d23e.js";import"./emotion-react.browser.esm.63b80b77.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./Row.8790b3c5.js";import"./Typography.c072ef4f.js";import"./MarkdownEditor.78fe2041.js";import"./CardContainerLogic.8943b1aa.js";import"./sqlFunctions.1830f92f.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.3c469190.js";import"./useGetInfoFromIds.1e4ac22b.js";import"./use-deep-compare-effect.esm.7ae859ab.js";import"./uniq.1102b3bc.js";import"./_baseSlice.50189bc5.js";import"./_cacheHas.9d7b6529.js";import"./without.095365fb.js";import"./uniqueId.4f03145e.js";import"./_Set.f07c2c40.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.7c91c12d.js";import"./queryUtils.9424e4b1.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.f408eeac.js";import"./_baseClone.21067d4e.js";import"./_getTag.23171a9a.js";import"./NoSearchResults.b263a0fc.js";import"./NoData.1a51e057.js";import"./unCamelCase.07e38083.js";import"./useEntity.eab415d6.js";import"./pick.7b3b1cb8.js";import"./isEqual.3875cd1f.js";import"./ElementWithTooltip.a2bf3b61.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.a7c1bd76.js";import"./usePrevious.05e36544.js";import"./createWithBsPrefix.c2eb45fa.js";import"./contains.6a52d65a.js";import"./usePopperMarginModifiers.8332b5d5.js";import"./index.13becb40.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Tooltip.9b073f35.js";import"./createSvgIcon.c493b6c9.js";import"./SvgIcon.7bbcd48d.js";import"./utils.11d89a6f.js";import"./Checkbox.7069d805.js";import"./RadioGroup.dba2ae1a.js";import"./RangeSlider.9e136d78.js";import"./factory.4a76326a.js";import"./react-sizeme.87853ccd.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.5bb8c5fe.js";import"./InfoOutlined.04f2d1df.js";import"./SelectionCriteriaPill.bf7e136e.js";import"./Close.e45ac9a4.js";import"./react-select.esm.4209b07f.js";import"./Select-54ac8379.esm.e3131d5c.js";import"./CustomSelectWidget.3cfd30a9.js";import"./index.browser.e6c4f87b.js";import"./WarningModal.d990b25d.js";import"./Alert.f130f9d6.js";import"./react-intersection-observer.esm.2bfa2c2a.js";import"./DateFormatter.6c0f3d6c.js";import"./EntityIcon.973857d5.js";import"./core.esm.a0032c0a.js";import"./isEmpty.2b3beab2.js";import"./union.d74c3967.js";import"./isString.729987f0.js";import"./useGetDownloadListStatistics.82077613.js";import"./QueryCount.47ab349c.js";import"./useGetAccessRequirement.30b0033c.js";import"./ManagedACTAccessRequirementStatus.b5318817.js";import"./FileUpload.1c9d038a.js";import"./UserSearchBox.91caec0d.js";import"./UserOrTeamBadge.7ea7b8dc.js";import"./EntityLink.fc84c7f7.js";import"./SynapseVideo.323e4355.js";import"./IconList.f8668156.js";import"./UserCardList.a366786c.js";import"./UserSearchBoxV2.c96f4585.js";import"./startCase.de7385bf.js";import"./upperFirst.afa567c6.js";import"./FullWidthAlert.771b5ce8.js";import"./removeClass.27874bcb.js";import"./IconCopy.af1c96f6.js";import"./Overlay.b1b8d860.js";import"./useWaitForDOMRef.8c62de15.js";import"./inheritsLoose.1e598ca9.js";const p=({forumId:n,limit:y,filter:F,onClickLink:A})=>{var _;const[e,S]=T.exports.useState(a.PINNED_AND_LAST_ACTIVITY),[m,f]=T.exports.useState(!1),[I,d]=T.exports.useState(!1),{subscription:b,isLoading:N,toggleSubscribed:D}=M(n,w.FORUM);function R(){try{D()}catch(o){Y(o.reason,"danger")}}const{data:u,hasNextPage:L,fetchNextPage:v}=B(n,y,e,m,F),g=(_=u==null?void 0:u.pages.flatMap(o=>o.results))!=null?_:[],l=o=>{e==o?(S(o),f(!m)):(S(o),f(!1))};return i("div",{className:"ForumTable bootstrap-4-backport",children:[i("div",{className:"ForumTable__top-level-control",children:[r(h,{variant:b?"outline-primary":"primary",onClick:()=>R(),disabled:N,children:b?"Unfollow":"Follow"}),r(h,{variant:"primary",onClick:()=>d(!0),children:"New Thread"})]}),i(H,{children:[r("thead",{children:i("tr",{children:[r("th",{children:i("span",{className:"SRC-split",children:[r("span",{children:"Topic"}),r(s,{role:"button","aria-label":"Sort by Topic",active:e===a.THREAD_TITLE,direction:e==="THREAD_TITLE"?m===!1?t.DESC:t.ASC:t.DESC,onClick:()=>l(a.THREAD_TITLE)})]})}),r("th",{children:"Author"}),r("th",{children:"Active Users"}),r("th",{children:i("span",{className:"SRC-split",children:[r("span",{children:"Replies"}),r(s,{role:"button","aria-label":"Sort by Replies",active:e===a.NUMBER_OF_REPLIES,direction:e==="NUMBER_OF_REPLIES"?m===!1?t.DESC:t.ASC:t.DESC,onClick:()=>l(a.NUMBER_OF_REPLIES)})]})}),r("th",{children:i("span",{className:"SRC-split",children:[r("span",{children:"Views"}),r(s,{role:"button","aria-label":"Sort by Views",active:e===a.NUMBER_OF_VIEWS,direction:e==="NUMBER_OF_VIEWS"?m===!1?t.DESC:t.ASC:t.DESC,onClick:()=>l(a.NUMBER_OF_VIEWS)})]})}),r("th",{children:i("span",{className:"SRC-split",children:[r("span",{children:"Activity"}),r(s,{role:"button","aria-label":"Sort by Last Activity",active:e===a.PINNED_AND_LAST_ACTIVITY,direction:e==="PINNED_AND_LAST_ACTIVITY"?m===!1?t.DESC:t.ASC:t.DESC,onClick:()=>l(a.PINNED_AND_LAST_ACTIVITY)})]})})]})}),r("tbody",{children:g.map(o=>i("tr",{children:[r("td",{children:i("a",{onClick:()=>A(),children:[o.isPinned?r(P,{icon:"pushpin"}):r(k,{}),o.title]})}),r("td",{children:r(C,{size:V,ownerId:o.createdBy})}),r("td",{children:o.activeAuthors.map(E=>r("div",{className:"avatarContainer",children:r(C,{showCardOnHover:!0,className:"ActiveUsers",size:x,avatarSize:"MEDIUM",ownerId:E})},E))}),r("td",{children:o.numberOfReplies}),r("td",{children:o.numberOfViews}),r("td",{children:O(o.lastActivity).format("L")})]},o.id))})]}),L&&r(h,{variant:"outline-primary",onClick:()=>{v()},children:"Show more results"}),i(c,{size:"lg",show:I,onHide:()=>d(!1),animation:!1,children:[r(c.Header,{children:r(c.Title,{children:"New Thread"})}),r(c.Body,{children:r(U,{isReply:!1,id:n,onClose:()=>d(!1)})})]})]})};try{p.displayName="ForumTable",p.__docgenInfo={description:"",displayName:"ForumTable",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}},onClickLink:{defaultValue:null,description:"",name:"onClickLink",required:!0,type:{name:"() => void"}},filter:{defaultValue:null,description:"",name:"filter",required:!1,type:{name:"enum",value:[{value:'"NO_FILTER"'},{value:'"DELETED_ONLY"'},{value:'"EXCLUDE_DELETED"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/discussion_forum/ForumTable.tsx#ForumTable"]={docgenInfo:p.__docgenInfo,name:"ForumTable",path:"src/lib/containers/discussion_forum/ForumTable.tsx#ForumTable"})}catch{}const $o={parameters:{storySource:{source:`import React from 'react'
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
  onClickLink: () => alert('This functionality has not been implemented yet'),
}
`,locationsMap:{"forum-table-demo":{startLoc:{col:52,line:12},endLoc:{col:1,line:14},startBody:{col:52,line:12},endBody:{col:1,line:14}}}}},title:"Synapse/ForumTable",component:p,argTypes:{}},j=n=>r(p,{...n}),q=j.bind({});q.args={forumId:"1032",limit:20,onClickLink:()=>alert("This functionality has not been implemented yet")};const rt=["ForumTableDemo"];export{q as ForumTableDemo,rt as __namedExportsOrder,$o as default};
