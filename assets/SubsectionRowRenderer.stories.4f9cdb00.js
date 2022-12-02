import{r as q,a as y,j as e,F as v}from"./jsx-runtime.e72699d7.js";import{g as O,p as V}from"./sqlFunctions.d0b07571.js";import{V as D,aT as F}from"./index.34864443.js";import{C as p}from"./ColumnType.744125d2.js";import{a as L}from"./CardContainerLogic.7d4d4d71.js";import{S as A}from"./SkeletonTable.7fae5ea1.js";import{a as j}from"./use-deep-compare-effect.esm.d647c715.js";import{T as B}from"./Typography.4509eb0e.js";import{j as P}from"./SynapseConstants.290eab74.js";import"./iframe.e515b461.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.550dbb5b.js";import"./index.71f9d2b1.js";import"./Button.69f4aad2.js";import"./styled.113fc281.js";import"./Tooltip.626a672e.js";import"./TransitionGroupContext.2e90d9c8.js";import"./useTheme.3c585c97.js";import"./Alert.d9dcb62e.js";import"./hook.dcb03d67.js";import"./createWithBsPrefix.93be1871.js";import"./divWithClassName.15ce1beb.js";import"./index.35ce73ec.js";import"./Fade.2e614c5f.js";import"./isArray.768225e0.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.91cc0bda.js";import"./IconButton.53297fa9.js";import"./ButtonBase.1e74724a.js";import"./emotion-react.browser.esm.6478344e.js";import"./Link.2241f35d.js";import"./Button.5bebd4e9.js";import"./useGetInfoFromIds.55c50f91.js";import"./uniq.6af65afc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0bf55458.js";import"./isSymbol.24e67468.js";import"./_cacheHas.a009177f.js";import"./without.0d5b4379.js";import"./uniqueId.7182a54a.js";import"./_Set.73e28bcb.js";import"./_setToArray.a82100c8.js";import"./FacetNav.e1da9b5b.js";import"./queryUtils.fcfc7b8f.js";import"./useInfiniteQuery.2bc38fa4.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.4df8e91c.js";import"./_baseClone.29baa335.js";import"./_getTag.5ec99d73.js";import"./NoSearchResults.e9d8f715.js";import"./NoData.4a2fbcdb.js";import"./unCamelCase.07e38083.js";import"./useEntity.a8e793ee.js";import"./useMutation.7ca0393e.js";import"./pick.3d0a4cbb.js";import"./isEqual.45b9eef1.js";import"./ElementWithTooltip.b8adcd1e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.bb8e092c.js";import"./usePrevious.e7a96701.js";import"./contains.92c769a2.js";import"./usePopperMarginModifiers.a580fc17.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.51a2ff0c.js";import"./RadioGroup.cf5e2f8c.js";import"./dayjs.min.9844fde9.js";import"./RangeSlider.f58ce2c4.js";import"./factory.f23e6d8b.js";import"./react-sizeme.9e0eb750.js";import"./Skeleton.015bfbc5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.14f06136.js";import"./Modal.f7e6106d.js";import"./inheritsLoose.ed0377a8.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.48aa9bb3.js";import"./SelectionCriteriaPill.24c0a363.js";import"./Close.c63a0c55.js";import"./react-select.esm.9886f966.js";import"./Select-54ac8379.esm.a705b656.js";import"./CustomSelectWidget.3ea71536.js";import"./index.browser.93244f29.js";import"./UserCard.b40dfa65.js";import"./IconCopy.5e3a4916.js";import"./ToastMessage.0ac4744b.js";import"./FullWidthAlert.2ca2db91.js";import"./Overlay.8e7d4967.js";import"./WarningModal.3e689365.js";import"./react-intersection-observer.esm.8f335372.js";import"./DateFormatter.002c6239.js";import"./utc.a90651d9.js";import"./EntityIcon.a079b3d9.js";import"./core.esm.0d56749d.js";import"./isEmpty.3cac19cb.js";import"./union.3d218bc3.js";import"./isString.7663035e.js";import"./relativeTime.cd5fda9a.js";import"./useGetDownloadListStatistics.a50360cc.js";import"./QueryCount.c99e21ca.js";import"./useGetAccessRequirement.9c48ddf0.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5cbf5fa0.js";import"./UserSearchBox.8343efec.js";import"./UserOrTeamBadge.b5ed1dfe.js";import"./EntityLink.c2a8cd8a.js";import"./SynapseVideo.dc2838dc.js";import"./IconList.6127531d.js";import"./UserCardList.539428fb.js";import"./times.a7510402.js";const Y=[p.BOOLEAN_LIST,p.DATE_LIST,p.ENTITYID_LIST,p.INTEGER_LIST,p.STRING_LIST],d=({sql:a,searchParams:b,sqlOperator:_,isMarkdown:f=!1,columnLink:m,friendlyValuesMap:w,columnNameIsSectionTitle:T=!1,limit:x})=>{const{accessToken:g}=D(),[s,M]=q.exports.useState(),[h,E]=q.exports.useState();let C=!0;j(()=>(async function(){var r;E(!0);const n=O(b,_),l=V(a),i=await F({partMask:P,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:l,query:{sql:a,limit:x,additionalFilters:n}},g);E(!1);const t=(r=i==null?void 0:i.queryResult)==null?void 0:r.queryResults;t?C&&M(t):console.log("SubsectionRowRenderer: Error getting data")}(),()=>{C=!1}),[a,g,b,_]);const R=o=>{if(!w)return o;const n=w[o];return n||o};return y("div",{className:"SubsectionRowRenderer bootstrap-4-backport",children:[h&&e(A,{numRows:2,numCols:1}),!h&&s&&s.rows.length>0&&s.headers.map((o,n)=>m&&o.name==m.linkColumnName?e(v,{}):y("div",{className:"SubsectionRowRenderer__item",role:"table",children:[e(B,{variant:T?"sectionTitle":"subsectionHeader",role:"heading",children:o.name}),T&&e("hr",{}),e("div",{role:"rowgroup",children:s.rows.map((l,N)=>{const c=l.values[n];if(!c)return e(v,{});let i;if(Y.includes(o.columnType))i=JSON.parse(c).map((r,u)=>y("div",{className:"SubsectionRowRenderer__item__value",role:"row",children:[f&&e(L,{markdown:R(r)}),!f&&e("p",{children:R(r)})]},u));else{let t;const r=R(c);if(f)t=e(L,{markdown:r});else if(m&&m.matchColumnName==o.name){const u=s.headers.findIndex(S=>S.name==m.linkColumnName),I=l.values;I.some(S=>S===null)&&console.warn("Row has null value(s) when no nulls expected"),u>-1?t=e("a",{rel:"noopener noreferrer",target:"_blank",href:I[u],children:r}):t=e("p",{children:r})}else t=e("p",{children:r});i=e("div",{className:"SubsectionRowRenderer__item__value",role:"row",children:t},N)}return i})})]},`${n}`))]})},k=d;try{d.displayName="SubsectionRowRenderer",d.__docgenInfo={description:"",displayName:"SubsectionRowRenderer",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},isMarkdown:{defaultValue:{value:"false"},description:"",name:"isMarkdown",required:!1,type:{name:"boolean"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"Record<string, string>"}},columnLink:{defaultValue:null,description:"",name:"columnLink",required:!1,type:{name:"ColumnSpecifiedLink"}},friendlyValuesMap:{defaultValue:null,description:"",name:"friendlyValuesMap",required:!1,type:{name:"FriendlyValuesMap"}},columnNameIsSectionTitle:{defaultValue:{value:"false"},description:"",name:"columnNameIsSectionTitle",required:!1,type:{name:"boolean"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/SubsectionRowRenderer.tsx#SubsectionRowRenderer"]={docgenInfo:d.__docgenInfo,name:"SubsectionRowRenderer",path:"src/lib/containers/SubsectionRowRenderer.tsx#SubsectionRowRenderer"})}catch{}const Jr={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SubsectionRowRenderer from './SubsectionRowRenderer'

export default {
  title: 'Explore/SubsectionRowRenderer',
  component: SubsectionRowRenderer,
} as ComponentMeta<typeof SubsectionRowRenderer>

const Template: ComponentStory<typeof SubsectionRowRenderer> = args => (
  <SubsectionRowRenderer {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  sql: 'SELECT funderName as "Funding Agency" FROM syn26344829',
  searchParams: { Resource_id: '844b598c-0171-4972-91c3-27aa21b45d52' },
  isMarkdown: false,
}
`,locationsMap:{demo:{startLoc:{col:63,line:10},endLoc:{col:1,line:12},startBody:{col:63,line:10},endBody:{col:1,line:12}}}}},title:"Explore/SubsectionRowRenderer",component:k},K=a=>e(k,{...a}),Q=K.bind({});Q.args={sql:'SELECT funderName as "Funding Agency" FROM syn26344829',searchParams:{Resource_id:"844b598c-0171-4972-91c3-27aa21b45d52"},isMarkdown:!1};const zr=["Demo"];export{Q as Demo,zr as __namedExportsOrder,Jr as default};
