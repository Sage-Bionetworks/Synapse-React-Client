import{r as I,a as y,j as e,F as v}from"./jsx-runtime.f2f98a5a.js";import{b as O,p as V}from"./sqlFunctions.cfb3693d.js";import{f as D,aa as A}from"./index.3643f9f4.js";import{C as p}from"./ColumnType.744125d2.js";import{a as L}from"./CardContainerLogic.a531654b.js";import{S as F}from"./SkeletonTable.ca71276a.js";import{T as B}from"./Typography.32e9e32f.js";import{a as j}from"./use-deep-compare-effect.esm.75ab9336.js";import{i as K}from"./SynapseConstants.b6aa8bf5.js";import"./iframe.3db3203a.js";import"./RegularExpressions.3cd69849.js";import"./index.9f26ffd6.js";import"./Button.498cd291.js";import"./index.57d09176.js";import"./withStyles.c893a568.js";import"./utils.b0185ad4.js";import"./Alert.df9cc8b6.js";import"./createWithBsPrefix.859b1c88.js";import"./index.35ce73ec.js";import"./isArray.7423227f.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.aef32627.js";import"./useGetInfoFromIds.dee63691.js";import"./uniq.f6e69c09.js";import"./_baseSlice.50189bc5.js";import"./toInteger.61038943.js";import"./isSymbol.b0b5d283.js";import"./_cacheHas.0df8aa76.js";import"./without.bf4df2b6.js";import"./uniqueId.cb398276.js";import"./_Set.1e7c39d4.js";import"./_setToArray.a82100c8.js";import"./EntityIcon.1708c7bc.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.9332b201.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./makeStyles.b901d8a5.js";import"./InfoOutlined.23b933db.js";import"./FacetNav.10b5acd6.js";import"./queryUtils.82f82d8f.js";import"./useInfiniteQuery.d88b8f82.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.92b40bb7.js";import"./_baseClone.d7dd3b79.js";import"./_getTag.0d376f55.js";import"./NoSearchResults.e8898963.js";import"./NoData.3761e7ff.js";import"./unCamelCase.07e38083.js";import"./useEntity.1acb6de0.js";import"./useMutation.5188b311.js";import"./pick.daf39fc4.js";import"./isEqual.4273d607.js";import"./ElementWithTooltip.eb1a78b1.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2aef55d7.js";import"./usePrevious.9b92c2d2.js";import"./contains.afe7b6ba.js";import"./usePopperMarginModifiers.4a57f45c.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ebe302e0.js";import"./RadioGroup.fd8c3de8.js";import"./moment.a565bb48.js";import"./RangeSlider.b7c5ee53.js";import"./factory.3d6c3e3e.js";import"./react-sizeme.757d9013.js";import"./Skeleton.756bfafa.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.29e644c3.js";import"./Modal.c41c729a.js";import"./inheritsLoose.ec71a7aa.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.0d0b5d6b.js";import"./SelectionCriteriaPill.18e85a8a.js";import"./Close.6a8ce9f7.js";import"./react-select.esm.cb4bcd26.js";import"./Select-54ac8379.esm.7808e908.js";import"./CustomSelectWidget.564e86c9.js";import"./index.browser.9aabe7e1.js";import"./WarningModal.1a9379eb.js";import"./react-intersection-observer.esm.331de87d.js";import"./UserCard.0ebe4f67.js";import"./IconCopy.31ff040b.js";import"./ToastMessage.75433d78.js";import"./FullWidthAlert.007c198f.js";import"./Overlay.792e9294.js";import"./DateFormatter.7ed4e1d9.js";import"./core.esm.253133f0.js";import"./isEmpty.263d607f.js";import"./union.4ae19367.js";import"./isString.3beac074.js";import"./useGetDownloadListStatistics.5fd81fea.js";import"./QueryCount.453a8b8f.js";import"./useGetAccessRequirement.84b06265.js";import"./ManagedACTAccessRequirementStatus.ae6bcf55.js";import"./FileUpload.23d845e4.js";import"./UserSearchBox.fc4a64bc.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.48e66733.js";import"./EntityLink.edc77977.js";import"./SynapseVideo.509439dc.js";import"./IconList.3d9ea341.js";import"./UserCardList.087ea18c.js";import"./times.408344a9.js";const P=[p.BOOLEAN_LIST,p.DATE_LIST,p.ENTITYID_LIST,p.INTEGER_LIST,p.STRING_LIST],d=({sql:a,searchParams:b,sqlOperator:_,isMarkdown:f=!1,columnLink:s,friendlyValuesMap:w,columnNameIsSectionTitle:T=!1,limit:x})=>{const{accessToken:h}=D(),[m,M]=I.exports.useState(),[g,E]=I.exports.useState();let C=!0;j(()=>(async function(){var r;E(!0);const n=O(a,b,_),l=V(a),i=await A({partMask:K,concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:l,query:{sql:n,limit:x}},h);E(!1);const t=(r=i==null?void 0:i.queryResult)==null?void 0:r.queryResults;t?C&&M(t):console.log("SubsectionRowRenderer: Error getting data")}(),()=>{C=!1}),[a,h,b,_]);const R=o=>{if(!w)return o;const n=w[o];return n||o};return y("div",{className:"SubsectionRowRenderer bootstrap-4-backport",children:[g&&e(F,{numRows:2,numCols:1}),!g&&m&&m.rows.length>0&&m.headers.map((o,n)=>s&&o.name==s.linkColumnName?e(v,{}):y("div",{className:"SubsectionRowRenderer__item",role:"table",children:[e(B,{variant:T?"sectionTitle":"subsectionHeader",role:"heading",children:o.name}),T&&e("hr",{}),e("div",{role:"rowgroup",children:m.rows.map((l,q)=>{const c=l.values[n];if(!c)return e(v,{});let i;if(P.includes(o.columnType))i=JSON.parse(c).map((r,u)=>y("div",{className:"SubsectionRowRenderer__item__value",role:"row",children:[f&&e(L,{markdown:R(r)}),!f&&e("p",{children:R(r)})]},u));else{let t;const r=R(c);if(f)t=e(L,{markdown:r});else if(s&&s.matchColumnName==o.name){const u=m.headers.findIndex(S=>S.name==s.linkColumnName),N=l.values;N.some(S=>S===null)&&console.warn("Row has null value(s) when no nulls expected"),u>-1?t=e("a",{rel:"noopener noreferrer",target:"_blank",href:N[u],children:r}):t=e("p",{children:r})}else t=e("p",{children:r});i=e("div",{className:"SubsectionRowRenderer__item__value",role:"row",children:t},q)}return i})})]},`${n}`))]})},k=d;try{d.displayName="SubsectionRowRenderer",d.__docgenInfo={description:"",displayName:"SubsectionRowRenderer",props:{sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},isMarkdown:{defaultValue:{value:"false"},description:"",name:"isMarkdown",required:!1,type:{name:"boolean"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"KeyValue"}},columnLink:{defaultValue:null,description:"",name:"columnLink",required:!1,type:{name:"ColumnSpecifiedLink"}},friendlyValuesMap:{defaultValue:null,description:"",name:"friendlyValuesMap",required:!1,type:{name:"FriendlyValuesMap"}},columnNameIsSectionTitle:{defaultValue:{value:"false"},description:"",name:"columnNameIsSectionTitle",required:!1,type:{name:"boolean"}},limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/SubsectionRowRenderer.tsx#SubsectionRowRenderer"]={docgenInfo:d.__docgenInfo,name:"SubsectionRowRenderer",path:"src/lib/containers/SubsectionRowRenderer.tsx#SubsectionRowRenderer"})}catch{}const Ur={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:63,line:10},endLoc:{col:1,line:12},startBody:{col:63,line:10},endBody:{col:1,line:12}}}}},title:"Explore/SubsectionRowRenderer",component:k},U=a=>e(k,{...a}),Y=U.bind({});Y.args={sql:'SELECT funderName as "Funding Agency" FROM syn26344829',searchParams:{Resource_id:"844b598c-0171-4972-91c3-27aa21b45d52"},isMarkdown:!1};const Yr=["Demo"];export{Y as Demo,Yr as __namedExportsOrder,Ur as default};
