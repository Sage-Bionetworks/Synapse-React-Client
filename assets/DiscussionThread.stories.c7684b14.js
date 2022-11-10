import{h as H}from"./moment.a565bb48.js";import{r as n,a as s,j as e,F as C}from"./jsx-runtime.2ff8811e.js";import{f as G}from"./DateFormatter.7f5d1a7b.js";import{u as z,a as ie,F as w,b as se,c as re,d as ne}from"./ForumThreadEditor.2bce1988.js";import{h as K,g as ae,A as le}from"./SynapseConstants.b6aa8bf5.js";import{u as de,S as pe}from"./useSubscription.01a4ac78.js";import{U as V}from"./UserCard.91d6c8b2.js";import{d as N}from"./ToastMessage.e5302c4a.js";import{j as ce,a7 as W,bR as q,bS as me}from"./index.3bd83fcc.js";import{g as ue}from"./DiscussionSearchResult.794422bb.js";import{u as X,a as U}from"./CardContainerLogic.8738f78f.js";import{I as m}from"./IconSvg.6f3c0dc5.js";import{W as J}from"./WarningModal.473de042.js";import{M as r}from"./Modal.f3959c32.js";import{B as _}from"./Button.774b93d6.js";import{T as he}from"./Typography.58720d37.js";import{b as j}from"./isArray.c66fbb5a.js";import"./iframe.f6116fbf.js";import"./useMutation.8573a168.js";import"./useInfiniteQuery.9f4576d7.js";import"./UserSearchBoxV2.1ef80bda.js";import"./react-select.esm.b673df8f.js";import"./Select-54ac8379.esm.aa8b90fd.js";import"./styled.9a92447e.js";import"./ButtonBase.4576d1dd.js";import"./TransitionGroupContext.ecfa02dc.js";import"./index.95124b04.js";import"./UserOrTeamBadge.d6cd9cf2.js";import"./getEndpoint.bb7ded34.js";import"./Skeleton.cb3b50d8.js";import"./useGetInfoFromIds.018ad2a0.js";import"./use-deep-compare-effect.esm.840878a7.js";import"./uniq.460f3110.js";import"./_baseSlice.50189bc5.js";import"./toInteger.a01bda2a.js";import"./isSymbol.15cce469.js";import"./_cacheHas.9af2c547.js";import"./without.b3a8be93.js";import"./uniqueId.65424154.js";import"./_Set.3fad48f0.js";import"./_setToArray.a82100c8.js";import"./startCase.15afac2d.js";import"./upperFirst.9fb3441b.js";import"./EntityChildren.50133102.js";import"./IconCopy.2b591d5d.js";import"./SkeletonTable.0cb13ee1.js";import"./times.55c175b4.js";import"./Tooltip.5bd16401.js";import"./createSvgIcon.13613b84.js";import"./utils.2126a84f.js";import"./Overlay.dee00487.js";import"./createWithBsPrefix.8ba5f7eb.js";import"./contains.a3df61d1.js";import"./index.35ce73ec.js";import"./usePopperMarginModifiers.cc29aef6.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.773b3eb8.js";import"./Alert.d722c515.js";import"./FullWidthAlert.b9821286.js";import"./removeClass.27874bcb.js";import"./Link.1ad1c99a.js";import"./Button.52cb13cc.js";import"./Row.d20789f7.js";import"./sqlFunctions.d75b690e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.45c2d0f9.js";import"./ColumnType.744125d2.js";import"./FacetNav.798c6533.js";import"./queryUtils.3da00fc0.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.352b0762.js";import"./_baseClone.423855ff.js";import"./_getTag.a95b6cf9.js";import"./NoSearchResults.c2856a97.js";import"./NoData.376b9d1a.js";import"./unCamelCase.07e38083.js";import"./useEntity.1cb2c62f.js";import"./pick.1b052ae0.js";import"./isEqual.bb3cc7d6.js";import"./ElementWithTooltip.bfc6e6c7.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.3950f75a.js";import"./usePrevious.93022d6c.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.003ebaf2.js";import"./RadioGroup.fc17b5de.js";import"./RangeSlider.8c1e8ecd.js";import"./factory.6b3571c3.js";import"./react-sizeme.e0d723cf.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9279b0dc.js";import"./InfoOutlined.419ebcb9.js";import"./SelectionCriteriaPill.5e112945.js";import"./Close.eea7c9a0.js";import"./CustomSelectWidget.785a5201.js";import"./index.browser.4632bf29.js";import"./react-intersection-observer.esm.7066a935.js";import"./EntityIcon.bcb8e0ae.js";import"./core.esm.eb80af35.js";import"./isEmpty.4e08ba4c.js";import"./union.dbaa5d43.js";import"./isString.766ccc31.js";import"./useGetDownloadListStatistics.06536ac9.js";import"./QueryCount.6a12394d.js";import"./useGetAccessRequirement.08874b7b.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.a6f8dc7b.js";import"./UserSearchBox.059f19fc.js";import"./EntityLink.8ccdc8d6.js";import"./SynapseVideo.f0d286ac.js";import"./IconList.0aae24ee.js";import"./UserCardList.e01834cb.js";import"./inheritsLoose.9d3c5159.js";const R=({reply:t,onClickLink:a=()=>alert("This functionality has not been implemented yet")})=>{var d;const{accessToken:b}=ce(),[p,D]=n.exports.useState(),[I,c]=n.exports.useState(!1),[M,u]=n.exports.useState(!1),{data:l}=W(),{data:h}=z(t.forumId),{data:f}=X(t.projectId),{mutate:T}=ie({onSuccess:()=>{u(!1),N("A reply has been deleted.","info")}}),x=t.createdBy==(l==null?void 0:l.ownerId);return h==null||h.results.includes((d=l==null?void 0:l.ownerId)!=null?d:""),n.exports.useEffect(()=>{(async()=>{const S=await me(t.messageKey,b),i=await ue(S.messageUrl);D(i)})()},[b,t.messageKey]),s("div",{className:"reply-container",children:[p&&s("div",{children:[e(V,{withAvatar:!0,avatarSize:"MEDIUM",showCardOnHover:!0,size:K,ownerId:t.createdBy}),s("div",{className:"message-body",children:[e(U,{markdown:p,objectType:q.REPLY}),s("span",{children:["posted ",G(H(t.createdOn),"M/D/YYYY")]}),s("div",{style:{float:"right"},children:[e("button",{onClick:()=>a(),children:e(m,{icon:"link"})}),x&&e("button",{onClick:()=>c(!0),children:e(m,{icon:"edit"})}),(f==null?void 0:f.permissions.canModerate)&&e("button",{onClick:()=>u(!0),children:e(m,{icon:"delete"})})]})]})]}),s(r,{size:"lg",show:I,onHide:()=>c(!1),animation:!1,children:[e(r.Header,{children:e(r.Title,{children:"Edit Reply"})}),e(r.Body,{children:e(w,{isReply:!0,initialText:p,onClose:()=>c(!1),id:t.id})})]}),e(J,{show:M,className:"bootstrap-4-backport",title:"Confirm Deletion",modalBody:"Are you sure you want to delete this reply?",onCancel:()=>u(!1),onConfirm:()=>T({forumId:t.forumId,threadId:t.threadId,replyId:t.id}),confirmButtonVariant:"danger",confirmButtonText:"Delete"})]})};try{R.displayName="DiscussionReply",R.__docgenInfo={description:"",displayName:"DiscussionReply",props:{reply:{defaultValue:null,description:"",name:"reply",required:!0,type:{name:"DiscussionReplyBundle"}},onClickLink:{defaultValue:{value:"() => alert('This functionality has not been implemented yet')"},description:"",name:"onClickLink",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/discussion_forum/DiscussionReply.tsx#DiscussionReply"]={docgenInfo:R.__docgenInfo,name:"DiscussionReply",path:"src/lib/containers/discussion_forum/DiscussionReply.tsx#DiscussionReply"})}catch{}const ye="You are following this topic. Click to stop following.",fe="You are not following this topic. Click to follow.",Te="You will need to sign in for access to that resource";function g(t){var A,L,Y,F;const{threadId:a,limit:b}=t,[p,D]=n.exports.useState(!0),[I,c]=n.exports.useState(!1),[M,u]=n.exports.useState(!1),[l,h]=n.exports.useState(!1),[f,T]=n.exports.useState(!1),[x,d]=n.exports.useState(!1),{threadData:o,threadBody:S}=se(a),{data:i}=W(),{data:E}=X((A=o==null?void 0:o.projectId)!=null?A:"",void 0,le,{enabled:!!o}),{data:k}=z((L=o==null?void 0:o.forumId)!=null?L:"",{enabled:!!o}),{subscription:v,toggleSubscribed:Q,isLoading:Z}=de(a,pe.THREAD),{mutate:$}=re({onSuccess:()=>{T(!1),N("A thread has been deleted.","info")}}),P=(o==null?void 0:o.createdBy)==(i==null?void 0:i.ownerId);k==null||k.results.includes((Y=i==null?void 0:i.ownerId)!=null?Y:"");function ee(){if((i==null?void 0:i.userName)=="anonymous")d(!0);else try{Q()}catch(y){N(y.reason,"danger")}}const{data:B,hasNextPage:oe,fetchNextPage:te}=ne(a,p,b),O=(F=B==null?void 0:B.pages.flatMap(y=>y.results))!=null?F:[];return s("div",{className:"bootstrap-4-backport DiscussionThread",children:[o&&S?s(C,{children:[s("div",{style:{textAlign:"center"},children:[e(_,{variant:p?"primary":"outline-primary",onClick:()=>D(!0),children:"Date Posted"}),e(_,{variant:p?"outline-primary":"primary",onClick:()=>D(!1),children:"Most Recent"})]}),e(V,{withAvatar:!0,avatarSize:"MEDIUM",showCardOnHover:!0,size:K,ownerId:o.createdBy}),e(he,{style:{marginTop:"4px"},variant:"headline2",children:o.title}),e("div",{children:e(U,{markdown:S,objectType:q.THREAD})}),s("span",{children:["posted ",G(H(o.createdOn),"M/D/YYYY")]})]}):e(C,{}),s("div",{className:"control-container",children:[e("span",{children:e("button",{className:"follow-button","aria-label":v?"Unfollow thread":"Follow thread",disabled:Z,onClick:()=>ee(),children:v?e(m,{icon:"visibility",label:ye}):e(m,{icon:"visibilityOff",label:fe})})}),P&&e("button",{onClick:()=>c(!0),children:e(m,{icon:"edit",label:"Edit thread"})}),E!=null&&E.permissions.canModerate?e("button",{onClick:()=>T(!0),children:e(m,{icon:"delete",label:"Delete thread"})}):null]}),M?e(w,{id:a,isReply:!0,onClose:()=>u(!1)}):e(j,{type:"text",placeholder:"Write a reply...",onClick:()=>{(i==null?void 0:i.userName)=="anonymous"?d(!0):u(!0)}}),e("div",{children:O.map(y=>e(R,{reply:y},y.id))}),O.length>0&&e(C,{children:l?e(w,{id:a,isReply:!0,onClose:()=>h(!1)}):e(j,{type:"text",placeholder:"Write a reply...",onClick:()=>{(i==null?void 0:i.userName)=="anonymous"?d(!0):h(!0)}})}),oe?e(_,{variant:"outline-primary",onClick:()=>{te()},children:"Show more results"}):e(C,{}),s(r,{size:"lg",show:I,onHide:()=>c(!1),animation:!1,children:[e(r.Header,{children:e(r.Title,{children:"Edit Thread"})}),e(r.Body,{children:e(w,{isReply:!1,initialText:S,onClose:()=>c(!1),initialTitle:o==null?void 0:o.title,id:a})})]}),e(J,{show:f,className:"bootstrap-4-backport",title:"Confirm Deletion",modalBody:"Are you sure you want to delete this thread?",onCancel:()=>T(!1),onConfirm:()=>$(a),confirmButtonVariant:"danger",confirmButtonText:"Delete"}),s(r,{className:"bootstrap-4-backport",show:x,onHide:()=>d(!1),animation:!1,children:[e(r.Header,{closeButton:!0}),e(r.Body,{children:Te}),e(r.Footer,{children:e(_,{onClick:()=>d(!1),className:ae,children:"Sign In"})})]})]})}try{g.displayName="DiscussionThread",g.__docgenInfo={description:"",displayName:"DiscussionThread",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},limit:{defaultValue:null,description:"",name:"limit",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/discussion_forum/DiscussionThread.tsx#DiscussionThread"]={docgenInfo:g.__docgenInfo,name:"DiscussionThread",path:"src/lib/containers/discussion_forum/DiscussionThread.tsx#DiscussionThread"})}catch{}const Mt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { DiscussionThread } from './DiscussionThread'

export default {
  title: 'Synapse/DiscussionThread',
  component: DiscussionThread,
  argTypes: {},
} as ComponentMeta<typeof DiscussionThread>

const Template: ComponentStory<typeof DiscussionThread> = args => (
  <DiscussionThread {...args} />
)

export const DiscussionThreadDemo = Template.bind({})
DiscussionThreadDemo.args = {
  threadId: '1138',
  limit: 30,
}
`,locationsMap:{"discussion-thread-demo":{startLoc:{col:58,line:11},endLoc:{col:1,line:13},startBody:{col:58,line:11},endBody:{col:1,line:13}}}}},title:"Synapse/DiscussionThread",component:g,argTypes:{}},Se=t=>e(g,{...t}),ge=Se.bind({});ge.args={threadId:"1138",limit:30};const xt=["DiscussionThreadDemo"];export{ge as DiscussionThreadDemo,xt as __namedExportsOrder,Mt as default};
