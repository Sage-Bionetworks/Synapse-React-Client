import{az as x}from"./index.7e720d98.js";import{u as D,g as S}from"./queryUtils.da582c94.js";import{r as N,a,j as o,F as T}from"./jsx-runtime.8deabff4.js";import{e as g}from"./AccessRequirementList.817e3656.js";import{E as M}from"./ExpandableContent.3128787d.js";import{u as w}from"./useShowDesktop.24335775.js";import{n as A,i as B}from"./SynapseConstants.71946a35.js";import"./index.57c4b3f6.js";import"./iframe.9a9f3456.js";import"./Button.7f145214.js";import"./styled.4ed13d54.js";import"./Tooltip.1a090672.js";import"./SvgIcon.68c0612f.js";import"./useTheme.4dbd8795.js";import"./TransitionGroupContext.f0e5bdf3.js";import"./FullWidthAlert.5c7c6876.js";import"./hook.1ef6fcec.js";import"./createWithBsPrefix.10b29307.js";import"./divWithClassName.17daa550.js";import"./index.35ce73ec.js";import"./Typography.d2c075af.js";import"./Fade.5eff05c6.js";import"./isArray.60ef1f80.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.c37effa3.js";import"./IconButton.88d7d90d.js";import"./ButtonBase.f183321e.js";import"./emotion-react.browser.esm.3c5e03a0.js";import"./Link.150a4582.js";import"./Button.eb6e2031.js";import"./useInfiniteQuery.7899d034.js";import"./queryKeys.e0d3085f.js";import"./QueryFilter.2f81cd8b.js";import"./cloneDeep.ad631675.js";import"./_baseClone.42d84618.js";import"./_Set.efe7ce99.js";import"./useGetInfoFromIds.31729f6a.js";import"./use-deep-compare-effect.esm.d674fd6b.js";import"./uniq.001d5121.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5c373204.js";import"./isSymbol.0aefb815.js";import"./_cacheHas.3e10b9ea.js";import"./without.2bdc7411.js";import"./uniqueId.d83e1a92.js";import"./_setToArray.a82100c8.js";import"./LoadingScreen.d8050d22.js";import"./Modal.8812f470.js";import"./contains.28185ff5.js";import"./inheritsLoose.1bd8d1a6.js";import"./usePrevious.1aaea82b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.c2404935.js";import"./UserCard.c70cf940.js";import"./IconCopy.fec0e03b.js";import"./SkeletonTable.d18d0ed3.js";import"./times.bce2a9cd.js";import"./Skeleton.75c9e7ec.js";import"./ToastMessage.0865ace5.js";import"./Overlay.0adb623b.js";import"./usePopperMarginModifiers.008c5a4d.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1f53a19c.js";import"./DateFormatter.cae52781.js";import"./dayjs.min.98c05744.js";import"./utc.4f3f9a8c.js";import"./EntityIcon.1c3aa2c3.js";import"./core.esm.61a3890e.js";import"./pick.c46cc8e3.js";import"./isEmpty.57a750a7.js";import"./isEqual.ae5ef449.js";import"./index.browser.a7937415.js";import"./union.16123856.js";import"./CustomSelectWidget.c237440f.js";import"./Select-54ac8379.esm.6d25abbe.js";import"./isString.aafd0bdb.js";import"./factory.aa9033b5.js";import"./sqlFunctions.9f009227.js";import"./useEntity.a8ca5bca.js";import"./useMutation.1145132d.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.beb51b71.js";import"./NoSearchResults.64813bfd.js";import"./NoData.c6c08618.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.77cbdb9a.js";import"./Dropdown.313b39ce.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a8a5985b.js";import"./RadioGroup.d2e54988.js";import"./RangeSlider.6336bea5.js";import"./react-sizeme.19b651a3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.ca478ed5.js";import"./Close.33c9f782.js";import"./relativeTime.2a9aa701.js";import"./useDownloadList.da07dda4.js";import"./QueryCount.42db340b.js";import"./react-select.esm.3b319a5d.js";import"./IconList.6aa6455f.js";import"./UserCardList.984aaece.js";import"./useAccessRequirements.3fb1eea2.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.64bea603.js";import"./UserSearchBox.143f00a6.js";import"./UserOrTeamBadge.c2dd3799.js";import"./EntityLink.e95bcbe1.js";import"./SynapseVideo.e9faf7fd.js";function n({data:e}){const[s,i]=N.exports.useState(0);return a("div",{className:"control-container",children:[a("div",{className:"button-container",children:[e==null?void 0:e.map((t,r)=>o("button",{className:s===r?"isSelected":"",onClick:()=>i(r),children:t.name},t.name)),o("button",{className:"gap-fill"})]}),o("div",{className:"content-container",children:e==null?void 0:e.map((t,r)=>{const{ownerId:p,wikiId:l}=t;return o("span",{className:s===r?"":"hide",children:o(g,{ownerId:p,wikiId:l})},p)})})]})}try{n.displayName="ResourcesDesktop",n.__docgenInfo={description:"",displayName:"ResourcesDesktop",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.Desktop.tsx#ResourcesDesktop"]={docgenInfo:n.__docgenInfo,name:"ResourcesDesktop",path:"src/lib/containers/home_page/resources/Resources.Desktop.tsx#ResourcesDesktop"})}catch{}function m({data:e}){return o("div",{className:"Resources_Mobile",children:e.map(({name:s,ownerId:i,wikiId:t})=>o(M,{title:a(T,{children:[" ",s," "]}),content:o(g,{ownerId:i,wikiId:t})}))})}try{m.displayName="ResourcesMobile",m.__docgenInfo={description:"",displayName:"ResourcesMobile",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"Data"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.Mobile.tsx#ResourcesMobile"]={docgenInfo:m.__docgenInfo,name:"ResourcesMobile",path:"src/lib/containers/home_page/resources/Resources.Mobile.tsx#ResourcesMobile"})}catch{}const c=e=>{var R,_;const{entityId:s}=e,i=w(),t={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:s,partMask:A|B,query:{sql:`SELECT Name, Wiki FROM ${s} ORDER BY ItemOrder`}},{data:r,error:p}=D(t),l=S("Name",r),h=S("Wiki",r),d=(_=(R=r==null?void 0:r.queryResult)==null?void 0:R.queryResults.rows.map(b=>{var f;const u=b.values;u.some(C=>C===null)&&console.warn("Row has null value(s) when no nulls expected");const k=u[l],y=((f=u[h])!=null?f:"").split("/"),O=y[0],I=y[2];return{name:k,ownerId:O,wikiId:I}}))!=null?_:[];return a("div",{className:"Resources",children:[o(x,{error:p}),i?o(n,{data:d}):o(m,{data:d})]})},E=c;try{c.displayName="Resources",c.__docgenInfo={description:"",displayName:"Resources",props:{entityId:{defaultValue:null,description:"",name:"entityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/home_page/resources/Resources.tsx#Resources"]={docgenInfo:c.__docgenInfo,name:"Resources",path:"src/lib/containers/home_page/resources/Resources.tsx#Resources"})}catch{}const Qo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:51,line:10},endLoc:{col:1,line:12},startBody:{col:51,line:10},endBody:{col:1,line:12}}}}},title:"Home Page/Resources",component:E},L=e=>o(E,{...e}),q=L.bind({});q.args={entityId:"syn22311127"};const jo=["Demo"];export{q as Demo,jo as __namedExportsOrder,Qo as default};
