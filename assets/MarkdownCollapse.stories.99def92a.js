import{R as x,r as i,j as r,a as E}from"./jsx-runtime.0721b30f.js";import{I as V,s as L}from"./FacetNav.ef313e7e.js";import{I as b}from"./IconCopy.343b69cc.js";import{a as U}from"./CardContainerLogic.405dc753.js";import{d as B}from"./ToastMessage.c03bf450.js";import{_ as W,a as f,c as q,S as k}from"./Button.c6170972.js";import{_ as F}from"./createWithBsPrefix.60042f33.js";import{E as G,c as Y,e as j,f as $,T as H,g as K,h as Q,s as M}from"./divWithClassName.ae2eac7f.js";import"./iframe.d07454b7.js";import"./index.96fee529.js";import"./index.84874f77.js";import"./SynapseConstants.290eab74.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./index.35ce73ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./queryUtils.bc241af6.js";import"./useInfiniteQuery.160050ed.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.c86a5cbb.js";import"./cloneDeep.d4824e0e.js";import"./_baseClone.d846e333.js";import"./_getTag.374494a2.js";import"./_Set.530d31c3.js";import"./use-deep-compare-effect.esm.401fba4c.js";import"./NoSearchResults.37564460.js";import"./NoData.48f5a675.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./useEntity.77265cb8.js";import"./useMutation.5bff6e5b.js";import"./pick.7c26c579.js";import"./uniqueId.22a08d1e.js";import"./isSymbol.2a2fd570.js";import"./_baseSlice.50189bc5.js";import"./sqlFunctions.b0106d41.js";import"./RegularExpressions.3cd69849.js";import"./isEqual.587a056a.js";import"./_cacheHas.f0b8833d.js";import"./_setToArray.a82100c8.js";import"./ElementWithTooltip.0beed2ed.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.69d2b3a3.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./InfoOutlined.1d86a385.js";import"./Dropdown.cda3e88c.js";import"./usePrevious.7579f6d6.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.58b9ed31.js";import"./uniq.ab7ea7a6.js";import"./toInteger.0c46f3eb.js";import"./without.b89900d5.js";import"./Checkbox.ad5f9514.js";import"./RadioGroup.9418e1f9.js";import"./dayjs.min.d1781a3e.js";import"./RangeSlider.84b56ff1.js";import"./factory.c5c0659e.js";import"./react-sizeme.31f58fbd.js";import"./Skeleton.bcaf6f06.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.596009c1.js";import"./Modal.ffe20d01.js";import"./inheritsLoose.53a219d1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.65459bf1.js";import"./SelectionCriteriaPill.e84841d0.js";import"./Close.b5d307a6.js";import"./react-select.esm.16cf96dd.js";import"./Select-54ac8379.esm.6a29fbfd.js";import"./CustomSelectWidget.b6d556eb.js";import"./index.browser.72232f2a.js";import"./UserCard.9a1acc17.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./Overlay.d556696c.js";import"./WarningModal.1a2883db.js";import"./react-intersection-observer.esm.3ef9875c.js";import"./DateFormatter.f6dc5f9a.js";import"./utc.ffadba9e.js";import"./EntityIcon.1e92edc0.js";import"./core.esm.4ab3feef.js";import"./isEmpty.f6cb9f52.js";import"./union.067c0c88.js";import"./isString.cb81128d.js";import"./relativeTime.5f274717.js";import"./useGetDownloadListStatistics.8c5e991c.js";import"./QueryCount.de45b2ad.js";import"./useGetAccessRequirement.306475cd.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.4ab691de.js";import"./UserSearchBox.f1e02549.js";import"./UserOrTeamBadge.d5bf5d62.js";import"./EntityLink.40497b38.js";import"./SynapseVideo.878bc81a.js";import"./IconList.e1c0dfc0.js";import"./UserCardList.1e3a2a6f.js";import"./FullWidthAlert.f41552e4.js";var X=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],d,z={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function h(o,n){var s="offset"+o[0].toUpperCase()+o.slice(1),a=n[s],l=z[o];return a+parseInt(M(n,l[0]),10)+parseInt(M(n,l[1]),10)}var J=(d={},d[G]="collapse",d[Y]="collapsing",d[j]="collapsing",d[$]="collapse show",d),Z={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:h},y=x.forwardRef(function(o,n){var s=o.onEnter,a=o.onEntering,l=o.onEntered,c=o.onExit,w=o.onExiting,I=o.className,u=o.children,C=o.dimension,p=C===void 0?"height":C,m=o.getDimensionValue,v=m===void 0?h:m,g=W(o,X),e=typeof p=="function"?p():p,R=i.exports.useMemo(function(){return f(function(t){t.style[e]="0"},s)},[e,s]),N=i.exports.useMemo(function(){return f(function(t){var T="scroll"+e[0].toUpperCase()+e.slice(1);t.style[e]=t[T]+"px"},a)},[e,a]),O=i.exports.useMemo(function(){return f(function(t){t.style[e]=null},l)},[e,l]),D=i.exports.useMemo(function(){return f(function(t){t.style[e]=v(e,t)+"px",Q(t)},c)},[c,v,e]),P=i.exports.useMemo(function(){return f(function(t){t.style[e]=null},w)},[e,w]);return r(H,{ref:n,addEndListener:K,...g,"aria-expanded":g.role?g.in:null,onEnter:R,onEntering:N,onEntered:O,onExit:D,onExiting:P,children:function(t,T){return x.cloneElement(u,F({},T,{className:q(I,u.props.className,J[t],e==="width"&&"width")}))}})});y.defaultProps=Z;const oo=y,S=o=>{const[n,s]=i.exports.useState(!1),[a,l]=i.exports.useState(),[c,w]=i.exports.useState(),I=p=>{const m=p==null?void 0:p.textContent;m&&(w(m.trim()),l(m.trim().split(/\s+/).length))},{textDescription:u="full text",showCopyPlainText:C}=o;return E("div",{className:"MarkdownCollapse bootstrap-4-backport",children:[E("p",{children:[n?r(V,{}):r(L,{}),E(k,{className:"highlight-link",onClick:()=>s(!n),"aria-controls":"collapse-text","aria-expanded":n,children:[n?"Hide":"View"," ",u," ",a?`(${a} words)`:""]})]}),C&&E("p",{children:[r(b,{className:"primary"}),E(k,{className:"highlight-link",onClick:()=>{c&&navigator.clipboard.writeText(c).then(()=>{B("Successfully copied to the clipboard")})},children:["Copy ",u," to clipboard"]})]}),r(oo,{in:n,children:r("div",{id:"collapse-text",children:r(U,{onMarkdownProcessingDone:I,...o})})})]})},_=S;try{S.displayName="MarkdownCollapse",S.__docgenInfo={description:`Wraps a MarkdownSynapse in a Collapse area, with customizable text description.
Will pass down all properties to the MarkdownSynapse component, so this can be used in
the portal detail pages.`,displayName:"MarkdownCollapse",props:{textDescription:{defaultValue:null,description:"",name:"textDescription",required:!1,type:{name:"string"}},showCopyPlainText:{defaultValue:null,description:"",name:"showCopyPlainText",required:!1,type:{name:"boolean"}},ownerId:{defaultValue:null,description:"",name:"ownerId",required:!1,type:{name:"string"}},wikiId:{defaultValue:null,description:"",name:"wikiId",required:!1,type:{name:"string"}},markdown:{defaultValue:null,description:"",name:"markdown",required:!1,type:{name:"string"}},renderInline:{defaultValue:null,description:"",name:"renderInline",required:!1,type:{name:"boolean"}},objectType:{defaultValue:null,description:"",name:"objectType",required:!1,type:{name:"enum",value:[{value:'"ENTITY"'},{value:'"ENTITY_CONTAINER"'},{value:'"PRINCIPAL"'},{value:'"ACTIVITY"'},{value:'"EVALUATION"'},{value:'"SUBMISSION"'},{value:'"EVALUATION_SUBMISSIONS"'},{value:'"FILE"'},{value:'"MESSAGE"'},{value:'"WIKI"'},{value:'"FAVORITE"'},{value:'"ACCESS_REQUIREMENT"'},{value:'"ACCESS_APPROVAL"'},{value:'"TEAM"'},{value:'"TABLE"'},{value:'"ACCESS_CONTROL_LIST"'},{value:'"PROJECT_SETTING"'},{value:'"VERIFICATION_SUBMISSION"'},{value:'"CERTIFIED_USER_PASSING_RECORD"'},{value:'"FORUM"'},{value:'"THREAD"'},{value:'"REPLY"'},{value:'"FORM_GROUP"'},{value:'"FORM_DATA"'},{value:'"ENTITY_VIEW"'},{value:'"USER_PROFILE"'},{value:'"DATA_ACCESS_REQUEST"'},{value:'"DATA_ACCESS_SUBMISSION"'},{value:'"DATA_ACCESS_SUBMISSION_STATUS"'},{value:'"MEMBERSHIP_INVITATION"'}]}},loadingSkeletonRowCount:{defaultValue:null,description:"",name:"loadingSkeletonRowCount",required:!1,type:{name:"number"}},onMarkdownProcessingDone:{defaultValue:null,description:"",name:"onMarkdownProcessingDone",required:!1,type:{name:"((ref: HTMLInputElement | null) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/MarkdownCollapse.tsx#MarkdownCollapse"]={docgenInfo:S.__docgenInfo,name:"MarkdownCollapse",path:"src/lib/containers/MarkdownCollapse.tsx#MarkdownCollapse"})}catch{}const mt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MarkdownCollapse from './MarkdownCollapse'

export default {
  title: 'Markdown/MarkdownCollapse',
  component: MarkdownCollapse,
} as ComponentMeta<typeof MarkdownCollapse>

const Template: ComponentStory<typeof MarkdownCollapse> = args => (
  <MarkdownCollapse {...args} />
)

export const Markdown = Template.bind({})
Markdown.args = {
  markdown: '*markdown* given to the **component**',
  textDescription: 'full statement',
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  ownerId: 'syn12666371',
  wikiId: '585317',
  textDescription: 'text',
  showCopyPlainText: true,
}
`,locationsMap:{markdown:{startLoc:{col:58,line:10},endLoc:{col:1,line:12},startBody:{col:58,line:10},endBody:{col:1,line:12}},"wiki-page":{startLoc:{col:58,line:10},endLoc:{col:1,line:12},startBody:{col:58,line:10},endBody:{col:1,line:12}}}}},title:"Markdown/MarkdownCollapse",component:_},A=o=>r(_,{...o}),eo=A.bind({});eo.args={markdown:"*markdown* given to the **component**",textDescription:"full statement"};const to=A.bind({});to.args={ownerId:"syn12666371",wikiId:"585317",textDescription:"text",showCopyPlainText:!0};const dt=["Markdown","WikiPage"];export{eo as Markdown,to as WikiPage,dt as __namedExportsOrder,mt as default};
