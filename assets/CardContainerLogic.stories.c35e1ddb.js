import{B as p,f as d,h as c,j as u,k as C,l as y,m as g,n as f,E as L,G as o,P as s,O as E}from"./index.fe051f0b.js";import{i as b,p as O}from"./sqlFunctions.b49ac766.js";import{I as S,C as _}from"./InfiniteQueryWrapper.56440e2b.js";import{Q as T,a as R}from"./TotalQueryResults.81ed9366.js";import{j as t,a as I}from"./jsx-runtime.2e925369.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./isObject.97b5908e.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./index.06f4a415.js";import"./toString.41faaa42.js";import"./assert.5e584fd6.js";import"./iframe.51626e58.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.f6f6da7c.js";import"./useGetInfoFromIds.a990ac3f.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./uniq.e057567d.js";import"./toInteger.ea37b69f.js";import"./toNumber.bfb36d17.js";import"./_cacheHas.6bde2730.js";import"./without.860801c0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./GenericCard.fbe69251.js";import"./index.es.82d55a6a.js";import"./EntityTypeUtils.d4af5db7.js";import"./TypeUtils.a2c41307.js";import"./unCamelCase.d070537b.js";import"./index.f55e5265.js";import"./IconSvg.160dd61c.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";import"./index.5ef2ed87.js";import"./MarkdownSynapse.6304f837.js";import"./UserCard.b71dd93c.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.495aaf83.js";import"./times.b52218a8.js";import"./Skeleton.bcb4a49e.js";import"./ToastMessage.87e58df2.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./debounce.b9f00509.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ce7b286a.js";import"./Overlay.4a980e95.js";import"./useWaitForDOMRef.67fdb4e5.js";import"./usePopperMarginModifiers.ee427a81.js";import"./factory.96a3fb6f.js";import"./SynapseVideo.34a2c372.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.1bbcda56.js";import"./moment.53181859.js";import"./IconList.308b6f4c.js";import"./FileHandleLink.dea4109a.js";import"./isEmpty.77deccd3.js";import"./LoadingScreen.7047b156.js";import"./Modal.59a27718.js";import"./useWillUnmount.4a16e5cd.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./SearchResultsNotFound.263a233e.js";import"./NoSearchResults.19ed4ed4.js";import"./UserCardList.ec2c9e7b.js";import"./queryUtils.0d60979b.js";import"./cloneDeep.ab1b6de4.js";import"./ElementWithTooltip.567bdfcd.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.d77b5878.js";import"./isRequiredForA11y.61bbc671.js";import"./Collapse.6742e3ab.js";import"./Checkbox.a1204c23.js";import"./IconMinus.f135ad99.js";import"./RadioGroup.25f015da.js";import"./classCallCheck.8304ed06.js";import"./inherits.c270e637.js";const r=e=>{const a=b(e.sql,e.searchParams,e.sqlOperator),m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:O(a),query:{sql:a,limit:e.limit},partMask:p|d|c|u|C|y|g|f};return t(S,{...e,initQueryRequest:m,children:I(T,{rgbIndex:e.rgbIndex,unitDescription:e.unitDescription,facetAliases:e.facetAliases,children:[t(_,{...e}),t(R,{children:n=>t(L,{error:n==null?void 0:n.error})})]})})};var l=r;try{r.displayName="CardContainerLogic",r.__docgenInfo={description:"Class wraps around CardContainer and serves as a standalone logic container for rendering cards.",displayName:"CardContainerLogic",props:{limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},unitDescription:{defaultValue:null,description:"",name:"unitDescription",required:!1,type:{name:"string"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"KeyValue"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!1,type:{name:"boolean"}},isAlignToLeftNav:{defaultValue:null,description:"",name:"isAlignToLeftNav",required:!1,type:{name:"boolean"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},hasInternalLink:{defaultValue:null,description:"",name:"hasInternalLink",required:!1,type:{name:"boolean"}},iconOptions:{defaultValue:null,description:"",name:"iconOptions",required:!1,type:{name:"IconOptions"}},genericCardSchema:{defaultValue:null,description:"",name:"genericCardSchema",required:!1,type:{name:"GenericCardSchema"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},titleLinkConfig:{defaultValue:null,description:"",name:"titleLinkConfig",required:!1,type:{name:"CardLink"}},ctaLinkConfig:{defaultValue:null,description:"",name:"ctaLinkConfig",required:!1,type:{name:"CTACardLink"}},labelLinkConfig:{defaultValue:null,description:"",name:"labelLinkConfig",required:!1,type:{name:"LabelLinkConfig"}},descriptionConfig:{defaultValue:null,description:"",name:"descriptionConfig",required:!1,type:{name:"DescriptionConfig"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"]={docgenInfo:r.__docgenInfo,name:"CardContainerLogic",path:"src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"})}catch{}var st={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:l,argTypes:{}};const i=e=>t(l,{...e}),A=i.bind({});A.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const N=i.bind({});N.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const q=i.bind({});q.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:E,limit:3};const lt=["GenericCard","EmptyResults","ObservationCard"];export{N as EmptyResults,A as GenericCard,q as ObservationCard,lt as __namedExportsOrder,st as default};
//# sourceMappingURL=CardContainerLogic.stories.c35e1ddb.js.map
