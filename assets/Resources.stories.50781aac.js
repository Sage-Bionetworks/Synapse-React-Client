import{E as x}from"./index.c07b435e.js";import{u as D,g as S}from"./queryUtils.f36c9064.js";import{r as N,a,j as o,F as T}from"./jsx-runtime.a1d381ad.js";import{a as g}from"./CardContainerLogic.0110c040.js";import{E as M}from"./ExpandableContent.81a55648.js";import{u as w}from"./useShowDesktop.5c2f2ae2.js";import{p as A,i as B}from"./SynapseConstants.b6aa8bf5.js";import"./index.9f535dbb.js";import"./iframe.81590c6e.js";import"./Button.ebc3484d.js";import"./index.57d09176.js";import"./withStyles.697310ee.js";import"./utils.6cb5795e.js";import"./Alert.ae374429.js";import"./createWithBsPrefix.b8918cd7.js";import"./index.35ce73ec.js";import"./isArray.cfd918dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0314c6b1.js";import"./useInfiniteQuery.3fef2ad0.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.bd2e15fe.js";import"./cloneDeep.53ae917a.js";import"./_baseClone.8224a7e6.js";import"./_getTag.25ac8552.js";import"./_Set.3c924fe3.js";import"./sqlFunctions.805519ce.js";import"./RegularExpressions.3cd69849.js";import"./useGetInfoFromIds.abdb800c.js";import"./use-deep-compare-effect.esm.9ef0fe73.js";import"./uniq.4ff00730.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6a5fcd60.js";import"./isSymbol.9201fb1c.js";import"./_cacheHas.e93d1118.js";import"./without.325b87a0.js";import"./uniqueId.cac1ac91.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.881da3c6.js";import"./createSvgIcon.8505b138.js";import"./makeStyles.2b248e78.js";import"./FacetNav.bcb76897.js";import"./NoSearchResults.c61448a7.js";import"./NoData.ebfea370.js";import"./unCamelCase.07e38083.js";import"./useEntity.ca1adaf1.js";import"./useMutation.0c99a4c1.js";import"./pick.13f2ab52.js";import"./isEqual.fddce197.js";import"./ElementWithTooltip.4022e237.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.61de10c1.js";import"./InfoOutlined.c00dd9c7.js";import"./Dropdown.20321050.js";import"./usePrevious.d92e7738.js";import"./contains.f621b86d.js";import"./usePopperMarginModifiers.7bfa5684.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.e50ea0fd.js";import"./RadioGroup.23c1b7a0.js";import"./moment.a565bb48.js";import"./RangeSlider.5627c006.js";import"./factory.772ba702.js";import"./react-sizeme.756b4b38.js";import"./Skeleton.00fa93e7.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.dc2de5f4.js";import"./Typography.1abf3c12.js";import"./Modal.f3a6a5d9.js";import"./inheritsLoose.bb535a25.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f4d59a83.js";import"./SelectionCriteriaPill.f6044d63.js";import"./Close.3b7d3bee.js";import"./react-select.esm.918aabd4.js";import"./Select-54ac8379.esm.bfe16fe6.js";import"./CustomSelectWidget.bf7014d1.js";import"./index.browser.033cf97b.js";import"./UserCard.0e32065f.js";import"./IconCopy.9e4bc935.js";import"./SkeletonTable.eecd7a8b.js";import"./times.3a1a85cc.js";import"./ToastMessage.204b2104.js";import"./FullWidthAlert.9cc3b3c7.js";import"./Overlay.ba0f781a.js";import"./WarningModal.3103bc16.js";import"./react-intersection-observer.esm.037889e1.js";import"./DateFormatter.83954225.js";import"./EntityIcon.28fea333.js";import"./core.esm.ae41dce5.js";import"./isEmpty.3ee393d3.js";import"./union.1a7f9980.js";import"./isString.a75165dc.js";import"./useGetDownloadListStatistics.4b65d66f.js";import"./QueryCount.3c131b04.js";import"./useGetAccessRequirement.b1289395.js";import"./ManagedACTAccessRequirementStatus.85df5b7f.js";import"./FileUpload.beef5d48.js";import"./UserSearchBox.aaaa86a0.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.8b869895.js";import"./EntityLink.c3a48de1.js";import"./SynapseVideo.e60d111b.js";import"./IconList.02a063f1.js";import"./UserCardList.56a389de.js";function p({data:e}){const[s,i]=N.exports.useState(0);return a("div",{className:"control-container",children:[a("div",{className:"button-container",children:[e==null?void 0:e.map((t,r)=>o("button",{className:s===r?"isSelected":"",onClick:()=>i(r),children:t.name},t.name)),o("button",{className:"gap-fill"})]}),o("div",{className:"content-container",children:e==null?void 0:e.map((t,r)=>{const{ownerId:n,wikiId:l}=t;return o("span",{className:s===r?"":"hide",children:o(g,{ownerId:n,wikiId:l})},n)})})]})}try{p.displayName="ResourcesDesktop",p.__docgenInfo={description:"",displayName:"ResourcesDesktop",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.Desktop.tsx#ResourcesDesktop"]={docgenInfo:p.__docgenInfo,name:"ResourcesDesktop",path:"src/lib/containers/home_page/resources/Resources.Desktop.tsx#ResourcesDesktop"})}catch{}function m({data:e}){return o("div",{className:"Resources_Mobile",children:e.map(({name:s,ownerId:i,wikiId:t})=>o(M,{title:a(T,{children:[" ",s," "]}),content:o(g,{ownerId:i,wikiId:t})}))})}try{m.displayName="ResourcesMobile",m.__docgenInfo={description:"",displayName:"ResourcesMobile",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.Mobile.tsx#ResourcesMobile"]={docgenInfo:m.__docgenInfo,name:"ResourcesMobile",path:"src/lib/containers/home_page/resources/Resources.Mobile.tsx#ResourcesMobile"})}catch{}const c=e=>{var R,_;const{entityId:s}=e,i=w(),t={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:s,partMask:A|B,query:{sql:`SELECT Name, Wiki FROM ${s} ORDER BY ItemOrder`}},{data:r,error:n}=D(t),l=S("Name",r),h=S("Wiki",r),d=(_=(R=r==null?void 0:r.queryResult)==null?void 0:R.queryResults.rows.map(b=>{var f;const u=b.values;u.some(C=>C===null)&&console.warn("Row has null value(s) when no nulls expected");const k=u[l],y=((f=u[h])!=null?f:"").split("/"),O=y[0],I=y[2];return{name:k,ownerId:O,wikiId:I}}))!=null?_:[];return a("div",{className:"Resources",children:[o(x,{error:n}),i?o(p,{data:d}):o(m,{data:d})]})},E=c;try{c.displayName="Resources",c.__docgenInfo={description:"",displayName:"Resources",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.tsx#Resources"]={docgenInfo:c.__docgenInfo,name:"Resources",path:"src/lib/containers/home_page/resources/Resources.tsx#Resources"})}catch{}const Ko={parameters:{storySource:{source:`import React from 'react'
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
