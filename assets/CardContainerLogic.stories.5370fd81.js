import{B as p,f as d,h as c,j as u,k as C,l as y,m as g,n as f,E as L,G as o,P as s,O as E}from"./index.0f0c3e99.js";import{i as b,p as O}from"./sqlFunctions.b49ac766.js";import{I as S,C as _}from"./InfiniteQueryWrapper.12dc6d4c.js";import{Q as T,a as R}from"./TotalQueryResults.579151b0.js";import{j as t,a as I}from"./jsx-runtime.2e925369.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.340f490f.js";import"./iframe.4b961c8e.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./useGetInfoFromIds.9c81dd9d.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./uniq.d51ebb05.js";import"./toInteger.1478d8e4.js";import"./_cacheHas.f10195af.js";import"./_baseDifference.4f0c411e.js";import"./_setToArray.a82100c8.js";import"./without.138f190a.js";import"./ColumnType.744125d2.js";import"./GenericCard.f58a27d2.js";import"./EntityTypeUtils.b3938164.js";import"./TypeUtils.a2c41307.js";import"./unCamelCase.d070537b.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./index.b3409856.js";import"./IconSvg.c485205d.js";import"./InfoOutlined.22a371fd.js";import"./index.5ef2ed87.js";import"./MarkdownSynapse.770a4ec7.js";import"./UserCard.b2cefd11.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.31f5bbae.js";import"./times.5e60be52.js";import"./Skeleton.8dd0668e.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./useWaitForDOMRef.c89dbc64.js";import"./usePopperMarginModifiers.31225551.js";import"./factory.f059b955.js";import"./SynapseVideo.2bf196a2.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.720d62ec.js";import"./moment.53181859.js";import"./IconList.61c80547.js";import"./FileHandleLink.e405c041.js";import"./isEmpty.6cec50e9.js";import"./LoadingScreen.56f18e4f.js";import"./Modal.58357e58.js";import"./useWillUnmount.4a16e5cd.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./SearchResultsNotFound.263a233e.js";import"./NoSearchResults.19ed4ed4.js";import"./UserCardList.8c521f9b.js";import"./queryUtils.b71f805a.js";import"./cloneDeep.981ec950.js";import"./ElementWithTooltip.c0eedee3.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.c29f5884.js";import"./isRequiredForA11y.61bbc671.js";import"./Collapse.fe074047.js";import"./Checkbox.85bb9cd4.js";import"./IconMinus.f135ad99.js";import"./RadioGroup.16868f96.js";import"./classCallCheck.8304ed06.js";import"./inherits.98d6a15d.js";const r=e=>{const a=b(e.sql,e.searchParams,e.sqlOperator),m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:O(a),query:{sql:a,limit:e.limit},partMask:p|d|c|u|C|y|g|f};return t(S,{...e,initQueryRequest:m,children:I(T,{rgbIndex:e.rgbIndex,unitDescription:e.unitDescription,facetAliases:e.facetAliases,children:[t(_,{...e}),t(R,{children:n=>t(L,{error:n==null?void 0:n.error})})]})})};var l=r;try{r.displayName="CardContainerLogic",r.__docgenInfo={description:"Class wraps around CardContainer and serves as a standalone logic container for rendering cards.",displayName:"CardContainerLogic",props:{limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},unitDescription:{defaultValue:null,description:"",name:"unitDescription",required:!1,type:{name:"string"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"KeyValue"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!1,type:{name:"boolean"}},isAlignToLeftNav:{defaultValue:null,description:"",name:"isAlignToLeftNav",required:!1,type:{name:"boolean"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},hasInternalLink:{defaultValue:null,description:"",name:"hasInternalLink",required:!1,type:{name:"boolean"}},iconOptions:{defaultValue:null,description:"",name:"iconOptions",required:!1,type:{name:"IconOptions"}},genericCardSchema:{defaultValue:null,description:"",name:"genericCardSchema",required:!1,type:{name:"GenericCardSchema"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},titleLinkConfig:{defaultValue:null,description:"",name:"titleLinkConfig",required:!1,type:{name:"CardLink"}},ctaLinkConfig:{defaultValue:null,description:"",name:"ctaLinkConfig",required:!1,type:{name:"CTACardLink"}},labelLinkConfig:{defaultValue:null,description:"",name:"labelLinkConfig",required:!1,type:{name:"LabelLinkConfig"}},descriptionConfig:{defaultValue:null,description:"",name:"descriptionConfig",required:!1,type:{name:"DescriptionConfig"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"]={docgenInfo:r.__docgenInfo,name:"CardContainerLogic",path:"src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"})}catch{}var it={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:l,argTypes:{}};const i=e=>t(l,{...e}),A=i.bind({});A.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const N=i.bind({});N.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const q=i.bind({});q.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:E,limit:3};const at=["GenericCard","EmptyResults","ObservationCard"];export{N as EmptyResults,A as GenericCard,q as ObservationCard,at as __namedExportsOrder,it as default};
//# sourceMappingURL=CardContainerLogic.stories.5370fd81.js.map
