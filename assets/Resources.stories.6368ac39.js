import{E as x}from"./index.4fdef5f4.js";import{u as D,g as S}from"./queryUtils.7f349eb5.js";import{r as N,a,j as o,F as T}from"./jsx-runtime.02a28547.js";import{a as g}from"./CardContainerLogic.97af0146.js";import{E as M}from"./ExpandableContent.116c4a12.js";import{u as w}from"./useShowDesktop.7f07464e.js";import{p as A,i as B}from"./SynapseConstants.b6aa8bf5.js";import"./index.a309e2be.js";import"./iframe.0b294b31.js";import"./Button.47e26dba.js";import"./styled.2f449268.js";import"./utils.34aadcdd.js";import"./TransitionGroupContext.70688128.js";import"./Alert.3df3eb36.js";import"./createWithBsPrefix.c66fa874.js";import"./index.35ce73ec.js";import"./isArray.46d1af5d.js";import"./getEndpoint.bb7ded34.js";import"./Link.4b81c1ee.js";import"./Typography.67a640f4.js";import"./Button.1972b2d6.js";import"./ButtonBase.9cc6b40c.js";import"./useInfiniteQuery.47c688b2.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.d8464a8f.js";import"./cloneDeep.ab339cb4.js";import"./_baseClone.be7945a8.js";import"./_getTag.eceaa81f.js";import"./_Set.323c8e8c.js";import"./sqlFunctions.ead23534.js";import"./RegularExpressions.3cd69849.js";import"./useGetInfoFromIds.258331ba.js";import"./use-deep-compare-effect.esm.7ded1864.js";import"./uniq.69f3520c.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d773cbc0.js";import"./isSymbol.f23d6818.js";import"./_cacheHas.2b87484d.js";import"./without.a4daf102.js";import"./uniqueId.77032a6a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.bff1bb1e.js";import"./NoSearchResults.3298bc25.js";import"./NoData.aba686a4.js";import"./unCamelCase.07e38083.js";import"./useEntity.518b6229.js";import"./useMutation.76b94172.js";import"./pick.ae4dc1a6.js";import"./isEqual.a8d1bf93.js";import"./ElementWithTooltip.a41fbda5.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.19fd41bf.js";import"./Tooltip.edd9e9f0.js";import"./createSvgIcon.d569702c.js";import"./InfoOutlined.88356fd8.js";import"./Dropdown.c4adefef.js";import"./usePrevious.769406c5.js";import"./contains.81250605.js";import"./usePopperMarginModifiers.129c8d3b.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.cf382583.js";import"./RadioGroup.b47f6073.js";import"./moment.a565bb48.js";import"./RangeSlider.4e835942.js";import"./factory.6b033540.js";import"./react-sizeme.b9df939a.js";import"./Skeleton.441b86fc.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.5743cf69.js";import"./Modal.a86dbf9d.js";import"./inheritsLoose.d59fe2ec.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.030a4d07.js";import"./SelectionCriteriaPill.e9c5356b.js";import"./Close.18e94b90.js";import"./react-select.esm.79446879.js";import"./Select-54ac8379.esm.0973ae43.js";import"./CustomSelectWidget.d7e54740.js";import"./index.browser.f5189fc5.js";import"./UserCard.8e05b9f1.js";import"./IconCopy.4f34e504.js";import"./SkeletonTable.71120aff.js";import"./times.0912663f.js";import"./ToastMessage.a8e621dc.js";import"./FullWidthAlert.4f5282fe.js";import"./Overlay.f4a71f57.js";import"./WarningModal.e3204aa1.js";import"./react-intersection-observer.esm.15c9b8c9.js";import"./DateFormatter.aa2aa69b.js";import"./EntityIcon.2959aa7e.js";import"./core.esm.181bea6f.js";import"./isEmpty.796beee9.js";import"./union.b8f595c3.js";import"./isString.12e1a271.js";import"./useGetDownloadListStatistics.5a7566b6.js";import"./QueryCount.5c6cac7e.js";import"./useGetAccessRequirement.98d533d9.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.b1fb6521.js";import"./UserSearchBox.d6476648.js";import"./UserOrTeamBadge.dfa3bce5.js";import"./EntityLink.763851bf.js";import"./SynapseVideo.7ac2064d.js";import"./IconList.8e64c16b.js";import"./UserCardList.352af1af.js";function p({data:e}){const[s,i]=N.exports.useState(0);return a("div",{className:"control-container",children:[a("div",{className:"button-container",children:[e==null?void 0:e.map((t,r)=>o("button",{className:s===r?"isSelected":"",onClick:()=>i(r),children:t.name},t.name)),o("button",{className:"gap-fill"})]}),o("div",{className:"content-container",children:e==null?void 0:e.map((t,r)=>{const{ownerId:n,wikiId:l}=t;return o("span",{className:s===r?"":"hide",children:o(g,{ownerId:n,wikiId:l})},n)})})]})}try{p.displayName="ResourcesDesktop",p.__docgenInfo={description:"",displayName:"ResourcesDesktop",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.Desktop.tsx#ResourcesDesktop"]={docgenInfo:p.__docgenInfo,name:"ResourcesDesktop",path:"src/lib/containers/home_page/resources/Resources.Desktop.tsx#ResourcesDesktop"})}catch{}function m({data:e}){return o("div",{className:"Resources_Mobile",children:e.map(({name:s,ownerId:i,wikiId:t})=>o(M,{title:a(T,{children:[" ",s," "]}),content:o(g,{ownerId:i,wikiId:t})}))})}try{m.displayName="ResourcesMobile",m.__docgenInfo={description:"",displayName:"ResourcesMobile",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.Mobile.tsx#ResourcesMobile"]={docgenInfo:m.__docgenInfo,name:"ResourcesMobile",path:"src/lib/containers/home_page/resources/Resources.Mobile.tsx#ResourcesMobile"})}catch{}const c=e=>{var R,_;const{entityId:s}=e,i=w(),t={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:s,partMask:A|B,query:{sql:`SELECT Name, Wiki FROM ${s} ORDER BY ItemOrder`}},{data:r,error:n}=D(t),l=S("Name",r),h=S("Wiki",r),d=(_=(R=r==null?void 0:r.queryResult)==null?void 0:R.queryResults.rows.map(b=>{var f;const u=b.values;u.some(C=>C===null)&&console.warn("Row has null value(s) when no nulls expected");const k=u[l],y=((f=u[h])!=null?f:"").split("/"),O=y[0],I=y[2];return{name:k,ownerId:O,wikiId:I}}))!=null?_:[];return a("div",{className:"Resources",children:[o(x,{error:n}),i?o(p,{data:d}):o(m,{data:d})]})},E=c;try{c.displayName="Resources",c.__docgenInfo={description:"",displayName:"Resources",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.tsx#Resources"]={docgenInfo:c.__docgenInfo,name:"Resources",path:"src/lib/containers/home_page/resources/Resources.tsx#Resources"})}catch{}const Ko={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Resources from './Resources'

export default {
  title: 'Home Page/Resources',
  component: Resources,
} as ComponentMeta<typeof Resources>

const Template: ComponentStory<typeof Resources> = args => (
  <Resources {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  entityId: 'syn22311127',
}
`,locationsMap:{demo:{startLoc:{col:51,line:10},endLoc:{col:1,line:12},startBody:{col:51,line:10},endBody:{col:1,line:12}}}}},title:"Home Page/Resources",component:E},L=e=>o(E,{...e}),q=L.bind({});q.args={entityId:"syn22311127"};const Uo=["Demo"];export{q as Demo,Uo as __namedExportsOrder,Ko as default};
