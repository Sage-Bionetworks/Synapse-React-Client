import{h as w,as as E,B as R}from"./index.65b6889e.js";import{r as l,a as C,j as e}from"./jsx-runtime.9b9f5ec2.js";import{h as N}from"./moment.a565bb48.js";import{a as v}from"./CardContainerLogic.56f15356.js";import{l as M}from"./LoadingScreen.1cf3fc8a.js";import{B}from"./Button.17fde95a.js";import"./index.9efb4fab.js";import"./iframe.8f6c7ea4.js";import"./withStyles.c4d286cc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a1c2894f.js";import"./index.57d09176.js";import"./Transition.95b45c06.js";import"./index.35ce73ec.js";import"./isArray.88d141d1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.59ebdbf7.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.491c328a.js";import"./use-deep-compare-effect.esm.1429f412.js";import"./uniq.9703bf37.js";import"./_baseSlice.50189bc5.js";import"./toInteger.816a2f64.js";import"./isSymbol.29619e0a.js";import"./_cacheHas.66bf6592.js";import"./without.6eda5c4e.js";import"./uniqueId.f1f42f72.js";import"./_Set.ee8a3840.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.728bd872.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.4c036b55.js";import"./Tooltip.6dc32b0d.js";import"./createSvgIcon.0c80d9df.js";import"./slicedToArray.e72f11da.js";import"./useTheme.b4767795.js";import"./makeStyles.3075ce24.js";import"./InfoOutlined.1a2adc17.js";import"./ElementWithTooltip.2814faf5.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.9cd9605c.js";import"./Modal.f6a7e351.js";import"./useWaitForDOMRef.6edb2b10.js";import"./useWillUnmount.a9334a26.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e3573a90.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f584c833.js";import"./queryUtils.d630e895.js";import"./useInfiniteQuery.63a858a4.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ed3f4363.js";import"./_baseClone.801a028e.js";import"./_getTag.491e79d0.js";import"./useEntity.ac365d34.js";import"./useMutation.d59a9e88.js";import"./pick.68578698.js";import"./Checkbox.1d278076.js";import"./Collapse.f8b3c179.js";import"./RadioGroup.531df55e.js";import"./RangeSlider.b9ebaf58.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.8f21ce6a.js";import"./react-sizeme.8859d798.js";import"./Skeleton.223a1071.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./Typography.5121ab9c.js";import"./react-select.esm.280fb03d.js";import"./Select-54ac8379.esm.2e157f03.js";import"./CustomSelectWidget.888b8830.js";import"./core.esm.4e3f6aa1.js";import"./index.90bd3452.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.26f1ae05.js";import"./_baseIsEqual.21cf0439.js";import"./index.browser.2ec99050.js";import"./union.0786fe8c.js";import"./react-intersection-observer.esm.c63d6e7a.js";import"./UserCard.96e69903.js";import"./IconCopy.fcae01ed.js";import"./SkeletonTable.ec89eee6.js";import"./times.3879e401.js";import"./ToastMessage.820cec30.js";import"./FullWidthAlert.4632d904.js";import"./Overlay.940ff29e.js";import"./DateFormatter.e6e193e6.js";import"./useGetDownloadListStatistics.843ab56e.js";import"./QueryCount.00ab6a45.js";import"./NoData.1ba5ff82.js";import"./useGetAccessRequirement.ccba9a7c.js";import"./ManagedACTAccessRequirementStatus.d3292bbe.js";import"./FileUpload.59701399.js";import"./UserSearchBox.c58d209c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.04f4c3b1.js";import"./EntityLink.d9864344.js";import"./NoSearchResults.a1729ee3.js";import"./SynapseVideo.818e1eb5.js";import"./IconList.a14ba983.js";import"./UserCardList.f3856dea.js";const a=({tableEntityId:r})=>{const{accessToken:c}=w(),[i,f]=l.exports.useState(),[n,T]=l.exports.useState(3);let u=!0;if(l.exports.useEffect(()=>((()=>{if(u){if(i)return;const m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:`SELECT "categories", "date", "title", "mdDescription" FROM ${r} ORDER BY "date" desc`},entityId:r,partMask:R};E(m,c).then(o=>{var p;f((p=o.queryResult)==null?void 0:p.queryResults)})}})(),()=>{u=!1}),[r,c]),!i)return M;const s=i.headers,b=s.findIndex(t=>t.name==="categories"),S=s.findIndex(t=>t.name==="date"),F=s.findIndex(t=>t.name==="title"),g=s.findIndex(t=>t.name==="mdDescription");return C("div",{className:"Feed bootstrap-4-backport",children:[e("div",{className:"FeedItems",children:i.rows.map((t,m)=>{if(m>n-1)return;const o=t.values;o.some(d=>d===null)&&console.warn("Row has null value(s) when no nulls expected");const p=JSON.parse(o[b]),I=o[S],h=o[F],x=o[g];return e("div",{className:"FeedItem",children:C("div",{children:[p&&e("div",{className:"FeedItemCategories",children:p.map((d,_)=>e("div",{className:"FeedItemCategory",children:d},`row-${m},categoryIndex-${_}`))}),e("p",{className:"FeedItemDate",children:N(new Date(parseInt(I))).format("MMMM YYYY")}),e("p",{className:"FeedItemTitle",children:h}),e("div",{className:"FeedItemDescription",children:e(v,{markdown:x})})]})},`row-${m}`)})}),i.rows.length>n&&e("div",{className:"FeedViewAllNewsButtonContainer",children:e(B,{variant:"primary",size:"lg",className:"pill",onClick:()=>T(n+3),children:"VIEW MORE NEWS"})})]})},y=a;try{a.displayName="TableFeedCards",a.__docgenInfo={description:"",displayName:"TableFeedCards",props:{tableEntityId:{defaultValue:null,description:"",name:"tableEntityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/TableFeedCards.tsx#TableFeedCards"]={docgenInfo:a.__docgenInfo,name:"TableFeedCards",path:"src/lib/containers/TableFeedCards.tsx#TableFeedCards"})}catch{}const Dt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TableFeedCards from './TableFeedCards'

export default {
  title: 'Synapse/TableFeedCards',
  component: TableFeedCards,
} as ComponentMeta<typeof TableFeedCards>

const Template: ComponentStory<typeof TableFeedCards> = args => (
  <TableFeedCards {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  tableEntityId: 'syn23520190',
}
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/TableFeedCards",component:y},D=r=>e(y,{...r}),O=D.bind({});O.args={tableEntityId:"syn23520190"};const Ot=["Demo"];export{O as Demo,Ot as __namedExportsOrder,Dt as default};
