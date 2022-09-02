import{B as p,f as d,h as c,j as u,k as C,l as y,m as g,n as f,E as L,G as o,P as s,O as E}from"./index.6da2bee4.js";import{i as b,p as O}from"./sqlFunctions.b49ac766.js";import{I as S,C as _}from"./InfiniteQueryWrapper.3b761a0f.js";import{Q as T,a as R}from"./TotalQueryResults.ed32df7d.js";import{j as t,a as I}from"./jsx-runtime.00d70968.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./assert.d4810e08.js";import"./iframe.abd6b882.js";import"./getEndpoint.bb7ded34.js";import"./useGetInfoFromIds.5ec2a440.js";import"./use-deep-compare-effect.esm.76673280.js";import"./uniq.66104e63.js";import"./toInteger.73b1b5d3.js";import"./_cacheHas.6d697e58.js";import"./_baseDifference.72a78da8.js";import"./_setToArray.a82100c8.js";import"./without.864b4b65.js";import"./ColumnType.744125d2.js";import"./GenericCard.218caacf.js";import"./EntityTypeUtils.91298823.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";import"./unCamelCase.d070537b.js";import"./index.e14d6e17.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./index.8ed07549.js";import"./MarkdownSynapse.d86f7b16.js";import"./UserCard.0e5c85b8.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.3566e849.js";import"./times.5e760663.js";import"./Skeleton.88496afb.js";import"./Overlay.3297046e.js";import"./useWaitForDOMRef.d07b3a07.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./factory.13751b6d.js";import"./SynapseVideo.59d1e4cc.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.e7e66a00.js";import"./moment.a565bb48.js";import"./IconList.cd761fab.js";import"./FileHandleLink.c28e5ce3.js";import"./isEmpty.4d8f2830.js";import"./LoadingScreen.dc53f4e3.js";import"./Modal.8f4b0da5.js";import"./useWillUnmount.4a16e5cd.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./SearchResultsNotFound.e35d4db9.js";import"./NoSearchResults.a01d676d.js";import"./UserCardList.9faa9c38.js";import"./queryUtils.ba8707e5.js";import"./cloneDeep.a19fcb41.js";import"./ElementWithTooltip.b8c0c749.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2144a55d.js";import"./isRequiredForA11y.20ed4857.js";import"./Collapse.c0581257.js";import"./Checkbox.3346a87d.js";import"./IconMinus.3805e4f5.js";import"./RadioGroup.d48d0161.js";import"./RangeSlider.6285b13c.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";const r=e=>{const a=b(e.sql,e.searchParams,e.sqlOperator),m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:O(a),query:{sql:a,limit:e.limit},partMask:p|d|c|u|C|y|g|f};return t(S,{...e,initQueryRequest:m,children:I(T,{rgbIndex:e.rgbIndex,unitDescription:e.unitDescription,facetAliases:e.facetAliases,children:[t(_,{...e}),t(R,{children:n=>t(L,{error:n==null?void 0:n.error})})]})})},l=r;try{r.displayName="CardContainerLogic",r.__docgenInfo={description:"Class wraps around CardContainer and serves as a standalone logic container for rendering cards.",displayName:"CardContainerLogic",props:{limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},unitDescription:{defaultValue:null,description:"",name:"unitDescription",required:!1,type:{name:"string"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"KeyValue"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!1,type:{name:"boolean"}},isAlignToLeftNav:{defaultValue:null,description:"",name:"isAlignToLeftNav",required:!1,type:{name:"boolean"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},hasInternalLink:{defaultValue:null,description:"",name:"hasInternalLink",required:!1,type:{name:"boolean"}},iconOptions:{defaultValue:null,description:"",name:"iconOptions",required:!1,type:{name:"IconOptions"}},genericCardSchema:{defaultValue:null,description:"",name:"genericCardSchema",required:!1,type:{name:"GenericCardSchema"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},titleLinkConfig:{defaultValue:null,description:"",name:"titleLinkConfig",required:!1,type:{name:"CardLink"}},ctaLinkConfig:{defaultValue:null,description:"",name:"ctaLinkConfig",required:!1,type:{name:"CTACardLink"}},labelLinkConfig:{defaultValue:null,description:"",name:"labelLinkConfig",required:!1,type:{name:"LabelLinkConfig"}},descriptionConfig:{defaultValue:null,description:"",name:"descriptionConfig",required:!1,type:{name:"DescriptionConfig"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"]={docgenInfo:r.__docgenInfo,name:"CardContainerLogic",path:"src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"})}catch{}const et={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import {
  GENERIC_CARD,
  OBSERVATION_CARD,
  PUBLICATION,
} from '../utils/SynapseConstants'
import CardContainerLogic from './CardContainerLogic'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Explore/CardContainerLogic',
  component: CardContainerLogic,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CardContainerLogic>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardContainerLogic> = args => (
  <CardContainerLogic {...args} />
)

export const GenericCard = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GenericCard.args = {
  sql: 'SELECT * FROM syn22095937.4 order by authors asc',
  limit: 2,
  type: GENERIC_CARD,
  genericCardSchema: {
    type: PUBLICATION,
    title: 'title',
    description: 'abstract',
    subTitle: 'authors',
    secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
  },
}

export const EmptyResults = Template.bind({})
EmptyResults.args = {
  sql: "SELECT * FROM syn22095937.4 WHERE study='not a study value'",
  type: GENERIC_CARD,
  genericCardSchema: {
    type: PUBLICATION,
    title: 'title',
    description: 'abstract',
    subTitle: 'authors',
    secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
  },
}

export const ObservationCard = Template.bind({})
ObservationCard.args = {
  sql: \`SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL\`,
  type: OBSERVATION_CARD,
  limit: 3,
}
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:l,argTypes:{}},i=e=>t(l,{...e}),A=i.bind({});A.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const N=i.bind({});N.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const q=i.bind({});q.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:E,limit:3};const tt=["GenericCard","EmptyResults","ObservationCard"];export{N as EmptyResults,A as GenericCard,q as ObservationCard,tt as __namedExportsOrder,et as default};
