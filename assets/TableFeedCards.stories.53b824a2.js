import{h as w,ax as E,B as R}from"./index.aa213b73.js";import{r as l,a as C,j as e}from"./jsx-runtime.b98719ac.js";import{h as N}from"./moment.a565bb48.js";import{a as v}from"./CardContainerLogic.0bb2be6b.js";import{l as M}from"./LoadingScreen.2f4c0bf8.js";import{B}from"./Button.ed04e3a1.js";import"./index.f0bb0570.js";import"./iframe.1e793943.js";import"./withStyles.79d10ad6.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.cf52bce4.js";import"./index.57d09176.js";import"./Transition.ac6e0624.js";import"./index.35ce73ec.js";import"./isArray.3c258aa7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4537d0f4.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.b6e5afcc.js";import"./use-deep-compare-effect.esm.50735a27.js";import"./uniq.09cd5a40.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c2538338.js";import"./isSymbol.a85127bf.js";import"./_cacheHas.aa561bc1.js";import"./without.31ba113b.js";import"./uniqueId.ff2face8.js";import"./_Set.f8baf759.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.a013333a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.3b0efcae.js";import"./Tooltip.5964f419.js";import"./createSvgIcon.63cd09dc.js";import"./slicedToArray.e72f11da.js";import"./useTheme.cca4eae4.js";import"./makeStyles.9e8f686a.js";import"./InfoOutlined.d5bf38f7.js";import"./ElementWithTooltip.924c8e47.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.da2cde4b.js";import"./Modal.2e6706f7.js";import"./useWaitForDOMRef.c589d2c1.js";import"./useWillUnmount.dd64b5e7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.6073b2bb.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d41bdf6d.js";import"./queryUtils.eabcf05a.js";import"./useInfiniteQuery.791ee0ea.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.14f585b8.js";import"./_baseClone.890585db.js";import"./_getTag.9bd73f4c.js";import"./useEntity.27566552.js";import"./useMutation.ac6d7a73.js";import"./pick.cb474b1a.js";import"./Checkbox.6b2c2336.js";import"./Collapse.c32d9e10.js";import"./RadioGroup.8ce3add8.js";import"./RangeSlider.f70af8d7.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.9b1d9c3f.js";import"./react-sizeme.d363bd46.js";import"./Skeleton.f404fa8e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./Typography.7f563934.js";import"./react-select.esm.77c55a34.js";import"./Select-54ac8379.esm.cc7c718b.js";import"./CustomSelectWidget.637430c8.js";import"./index.browser.7422f34a.js";import"./react-intersection-observer.esm.536fb05c.js";import"./UserCard.549fd8e6.js";import"./IconCopy.da365123.js";import"./SkeletonTable.385954e0.js";import"./times.b847c83d.js";import"./ToastMessage.608252d2.js";import"./FullWidthAlert.974c42f3.js";import"./Overlay.c6e37c77.js";import"./DateFormatter.a70ec294.js";import"./core.esm.f75f708e.js";import"./isEmpty.a203c2fe.js";import"./isEqual.1aee220f.js";import"./union.9d096b47.js";import"./isString.9e2ade47.js";import"./useGetDownloadListStatistics.c0cafcda.js";import"./QueryCount.41149181.js";import"./NoData.1a1f481a.js";import"./useGetAccessRequirement.566e1590.js";import"./ManagedACTAccessRequirementStatus.8e140c9c.js";import"./FileUpload.0973ea3c.js";import"./UserSearchBox.630138eb.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.11369adf.js";import"./EntityLink.650443f0.js";import"./NoSearchResults.e7aeb895.js";import"./SynapseVideo.dbd7e6b3.js";import"./IconList.cac1d00b.js";import"./UserCardList.6574b6c8.js";const p=({tableEntityId:r})=>{const{accessToken:c}=w(),[i,f]=l.exports.useState(),[n,T]=l.exports.useState(3);let u=!0;if(l.exports.useEffect(()=>((()=>{if(u){if(i)return;const m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:`SELECT "categories", "date", "title", "mdDescription" FROM ${r} ORDER BY "date" desc`},entityId:r,partMask:R};E(m,c).then(o=>{var a;f((a=o.queryResult)==null?void 0:a.queryResults)})}})(),()=>{u=!1}),[r,c]),!i)return M;const s=i.headers,b=s.findIndex(t=>t.name==="categories"),S=s.findIndex(t=>t.name==="date"),F=s.findIndex(t=>t.name==="title"),g=s.findIndex(t=>t.name==="mdDescription");return C("div",{className:"Feed bootstrap-4-backport",children:[e("div",{className:"FeedItems",children:i.rows.map((t,m)=>{if(m>n-1)return;const o=t.values;o.some(d=>d===null)&&console.warn("Row has null value(s) when no nulls expected");const a=JSON.parse(o[b]),I=o[S],h=o[F],x=o[g];return e("div",{className:"FeedItem",children:C("div",{children:[a&&e("div",{className:"FeedItemCategories",children:a.map((d,_)=>e("div",{className:"FeedItemCategory",children:d},`row-${m},categoryIndex-${_}`))}),e("p",{className:"FeedItemDate",children:N(new Date(parseInt(I))).format("MMMM YYYY")}),e("p",{className:"FeedItemTitle",children:h}),e("div",{className:"FeedItemDescription",children:e(v,{markdown:x})})]})},`row-${m}`)})}),i.rows.length>n&&e("div",{className:"FeedViewAllNewsButtonContainer",children:e(B,{variant:"primary",size:"lg",className:"pill",onClick:()=>T(n+3),children:"VIEW MORE NEWS"})})]})},y=p;try{p.displayName="TableFeedCards",p.__docgenInfo={description:"",displayName:"TableFeedCards",props:{tableEntityId:{defaultValue:null,description:"",name:"tableEntityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/TableFeedCards.tsx#TableFeedCards"]={docgenInfo:p.__docgenInfo,name:"TableFeedCards",path:"src/lib/containers/TableFeedCards.tsx#TableFeedCards"})}catch{}const Mt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/TableFeedCards",component:y},D=r=>e(y,{...r}),O=D.bind({});O.args={tableEntityId:"syn23520190"};const Bt=["Demo"];export{O as Demo,Bt as __namedExportsOrder,Mt as default};
