import{B as p,f as d,h as c,j as u,k as C,l as y,m as g,n as f,E as L,G as o,P as s,O as E}from"./index.b1bae600.js";import{i as b,p as O}from"./sqlFunctions.b49ac766.js";import{I as S,C as _}from"./InfiniteQueryWrapper.a44137ab.js";import{Q as T,a as R}from"./TotalQueryResults.b705f50d.js";import{j as t,a as I}from"./jsx-runtime.2e925369.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Alert.5f67d407.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.8d049b2f.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.024abc98.js";import"./iframe.c68e29f3.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.2998c199.js";import"./useGetInfoFromIds.c4ab08f9.js";import"./use-deep-compare-effect.esm.76673280.js";import"./uniq.dbc5099d.js";import"./toInteger.17f7c8af.js";import"./_cacheHas.6e058e6d.js";import"./_baseDifference.d4e44352.js";import"./_setToArray.a82100c8.js";import"./without.57218429.js";import"./ColumnType.744125d2.js";import"./GenericCard.4b14c8d5.js";import"./EntityTypeUtils.aaaa51a2.js";import"./FileEntity.4f8cb425.js";import"./TypeUtils.a2c41307.js";import"./unCamelCase.d070537b.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./makeStyles.72aedf90.js";import"./index.82ed59e1.js";import"./IconSvg.4a41f208.js";import"./InfoOutlined.d201fe9f.js";import"./index.5ef2ed87.js";import"./MarkdownSynapse.7ff24a62.js";import"./UserCard.62a92ab7.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.3fe7a952.js";import"./times.82d54e8c.js";import"./Skeleton.3847d4da.js";import"./ToastMessage.6439b7b0.js";import"./FullWidthAlert.279e31cc.js";import"./Typography.3a9e45b6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.bf042904.js";import"./useWaitForDOMRef.37941199.js";import"./usePopperMarginModifiers.4ced5867.js";import"./factory.a4dafec8.js";import"./SynapseVideo.973609ac.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.477e6886.js";import"./moment.53181859.js";import"./IconList.6905b420.js";import"./FileHandleLink.6fc7c14c.js";import"./isEmpty.fab48103.js";import"./LoadingScreen.efad5b29.js";import"./Modal.9056450d.js";import"./useWillUnmount.4a16e5cd.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./SearchResultsNotFound.263a233e.js";import"./NoSearchResults.19ed4ed4.js";import"./UserCardList.6f964d0d.js";import"./queryUtils.557bd3ea.js";import"./cloneDeep.4fcc1814.js";import"./ElementWithTooltip.ee55d79e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.b16d4176.js";import"./isRequiredForA11y.61bbc671.js";import"./Collapse.8d0a3062.js";import"./Checkbox.85bb9cd4.js";import"./IconMinus.f135ad99.js";import"./RadioGroup.16868f96.js";import"./RangeSlider.19d66a3c.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";const r=e=>{const a=b(e.sql,e.searchParams,e.sqlOperator),m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:O(a),query:{sql:a,limit:e.limit},partMask:p|d|c|u|C|y|g|f};return t(S,{...e,initQueryRequest:m,children:I(T,{rgbIndex:e.rgbIndex,unitDescription:e.unitDescription,facetAliases:e.facetAliases,children:[t(_,{...e}),t(R,{children:i=>t(L,{error:i==null?void 0:i.error})})]})})};var l=r;try{r.displayName="CardContainerLogic",r.__docgenInfo={description:"Class wraps around CardContainer and serves as a standalone logic container for rendering cards.",displayName:"CardContainerLogic",props:{limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},unitDescription:{defaultValue:null,description:"",name:"unitDescription",required:!1,type:{name:"string"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"KeyValue"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!1,type:{name:"boolean"}},isAlignToLeftNav:{defaultValue:null,description:"",name:"isAlignToLeftNav",required:!1,type:{name:"boolean"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},hasInternalLink:{defaultValue:null,description:"",name:"hasInternalLink",required:!1,type:{name:"boolean"}},iconOptions:{defaultValue:null,description:"",name:"iconOptions",required:!1,type:{name:"IconOptions"}},genericCardSchema:{defaultValue:null,description:"",name:"genericCardSchema",required:!1,type:{name:"GenericCardSchema"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},titleLinkConfig:{defaultValue:null,description:"",name:"titleLinkConfig",required:!1,type:{name:"CardLink"}},ctaLinkConfig:{defaultValue:null,description:"",name:"ctaLinkConfig",required:!1,type:{name:"CTACardLink"}},labelLinkConfig:{defaultValue:null,description:"",name:"labelLinkConfig",required:!1,type:{name:"LabelLinkConfig"}},descriptionConfig:{defaultValue:null,description:"",name:"descriptionConfig",required:!1,type:{name:"DescriptionConfig"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"]={docgenInfo:r.__docgenInfo,name:"CardContainerLogic",path:"src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"})}catch{}var mt={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:l,argTypes:{}};const n=e=>t(l,{...e}),A=n.bind({});A.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const N=n.bind({});N.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const q=n.bind({});q.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:E,limit:3};const pt=["GenericCard","EmptyResults","ObservationCard"];export{N as EmptyResults,A as GenericCard,q as ObservationCard,pt as __namedExportsOrder,mt as default};
//# sourceMappingURL=CardContainerLogic.stories.c50ac9cc.js.map
