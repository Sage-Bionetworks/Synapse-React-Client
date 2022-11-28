import{V as w,aT as E}from"./index.78005489.js";import{r as l,a as C,j as e}from"./jsx-runtime.f4a5fef7.js";import{d as R}from"./dayjs.min.03134d36.js";import{a as N}from"./CardContainerLogic.2afc3e41.js";import{l as v}from"./LoadingScreen.1bd379c3.js";import{B as M}from"./Button.6c384231.js";import{j as D}from"./SynapseConstants.290eab74.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./styled.02bbe28b.js";import"./utils.c51ff475.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.35ce73ec.js";import"./Fade.f600cb07.js";import"./isArray.c85c7bf8.js";import"./getEndpoint.bb7ded34.js";import"./Link.880594dd.js";import"./Typography.839bb703.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";import"./sqlFunctions.3ae34c19.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.6972a42a.js";import"./useGetInfoFromIds.b9ea821c.js";import"./use-deep-compare-effect.esm.50e2f1c1.js";import"./uniq.6266853d.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7b500fdb.js";import"./isSymbol.f04221fe.js";import"./_cacheHas.dd9da3b5.js";import"./without.831c836d.js";import"./uniqueId.f0e21060.js";import"./_Set.2a56fd01.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.2cdabd29.js";import"./queryUtils.6717467d.js";import"./useInfiniteQuery.61e681b6.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5758621c.js";import"./_baseClone.4215a3d5.js";import"./_getTag.9e31a874.js";import"./NoSearchResults.2a875ab0.js";import"./NoData.cfdac4bc.js";import"./unCamelCase.07e38083.js";import"./useEntity.7ee59141.js";import"./useMutation.db5d91df.js";import"./pick.68ed5305.js";import"./isEqual.8ad8e333.js";import"./ElementWithTooltip.f80f82bf.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.d54f7f38.js";import"./Tooltip.8a367305.js";import"./createSvgIcon.5d1f0251.js";import"./InfoOutlined.b6a78282.js";import"./Dropdown.ba5311c1.js";import"./usePrevious.7d29e7c5.js";import"./contains.9e492dba.js";import"./usePopperMarginModifiers.c2cb8c2e.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.86c981e0.js";import"./RadioGroup.e7d00023.js";import"./RangeSlider.9f946964.js";import"./factory.09868547.js";import"./react-sizeme.a278fee9.js";import"./Skeleton.c4f2e78a.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./Modal.99d56cea.js";import"./inheritsLoose.6b8ca8e2.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.a74f5535.js";import"./SelectionCriteriaPill.ec34bcc2.js";import"./Close.0076500b.js";import"./react-select.esm.3ef19952.js";import"./Select-54ac8379.esm.5a35ae0a.js";import"./CustomSelectWidget.540fd9f6.js";import"./index.browser.74e9a6f3.js";import"./UserCard.759836bb.js";import"./IconCopy.bde4919e.js";import"./SkeletonTable.0785797a.js";import"./times.2d68f6f5.js";import"./ToastMessage.715b02dd.js";import"./FullWidthAlert.dfc3d6c6.js";import"./Overlay.c82b84a8.js";import"./WarningModal.688d0f1c.js";import"./react-intersection-observer.esm.bbb91cee.js";import"./DateFormatter.3a10c1e5.js";import"./utc.5929ab00.js";import"./EntityIcon.08c8e7b5.js";import"./core.esm.631f96e4.js";import"./isEmpty.7f389cd9.js";import"./union.6ec24068.js";import"./isString.7d2b4e5a.js";import"./relativeTime.310cd65e.js";import"./useGetDownloadListStatistics.f5ed43fc.js";import"./QueryCount.f734d68e.js";import"./useGetAccessRequirement.fb88d496.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.6a8eea9e.js";import"./UserSearchBox.f7e1c5a9.js";import"./UserOrTeamBadge.a5cc953c.js";import"./EntityLink.2900e45e.js";import"./SynapseVideo.a848d92b.js";import"./IconList.7a69fe92.js";import"./UserCardList.acde4723.js";const s=({tableEntityId:o})=>{const{accessToken:c}=w(),[i,f]=l.exports.useState(),[n,T]=l.exports.useState(3);let u=!0;if(l.exports.useEffect(()=>((()=>{if(u){if(i)return;const m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",query:{sql:`SELECT "categories", "date", "title", "mdDescription" FROM ${o} ORDER BY "date" desc`},entityId:o,partMask:D};E(m,c).then(r=>{var p;f((p=r.queryResult)==null?void 0:p.queryResults)})}})(),()=>{u=!1}),[o,c]),!i)return v;const a=i.headers,b=a.findIndex(t=>t.name==="categories"),S=a.findIndex(t=>t.name==="date"),F=a.findIndex(t=>t.name==="title"),g=a.findIndex(t=>t.name==="mdDescription");return C("div",{className:"Feed bootstrap-4-backport",children:[e("div",{className:"FeedItems",children:i.rows.map((t,m)=>{if(m>n-1)return;const r=t.values;r.some(d=>d===null)&&console.warn("Row has null value(s) when no nulls expected");const p=JSON.parse(r[b]),I=r[S],x=r[F],h=r[g];return e("div",{className:"FeedItem",children:C("div",{children:[p&&e("div",{className:"FeedItemCategories",children:p.map((d,_)=>e("div",{className:"FeedItemCategory",children:d},`row-${m},categoryIndex-${_}`))}),e("p",{className:"FeedItemDate",children:R(new Date(parseInt(I))).format("MMMM YYYY")}),e("p",{className:"FeedItemTitle",children:x}),e("div",{className:"FeedItemDescription",children:e(N,{markdown:h})})]})},`row-${m}`)})}),i.rows.length>n&&e("div",{className:"FeedViewAllNewsButtonContainer",children:e(M,{variant:"primary",size:"lg",className:"pill",onClick:()=>T(n+3),children:"VIEW MORE NEWS"})})]})},y=s;try{s.displayName="TableFeedCards",s.__docgenInfo={description:"",displayName:"TableFeedCards",props:{tableEntityId:{defaultValue:null,description:"",name:"tableEntityId",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/TableFeedCards.tsx#TableFeedCards"]={docgenInfo:s.__docgenInfo,name:"TableFeedCards",path:"src/lib/containers/TableFeedCards.tsx#TableFeedCards"})}catch{}const Qt={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:56,line:10},endLoc:{col:1,line:12},startBody:{col:56,line:10},endBody:{col:1,line:12}}}}},title:"Synapse/TableFeedCards",component:y},O=o=>e(y,{...o}),B=O.bind({});B.args={tableEntityId:"syn23520190"};const $t=["Demo"];export{B as Demo,$t as __namedExportsOrder,Qt as default};
