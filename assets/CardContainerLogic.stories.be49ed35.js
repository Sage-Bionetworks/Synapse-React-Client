import{B as p,r as d,s as c,t as u,u as C,v as y,w as g,x as f,G as o,P as s,O as L}from"./index.d0718e00.js";import{i as E,p as b}from"./sqlFunctions.9bad0aa7.js";import{I as O,C as S}from"./InfiniteQueryWrapper.f7f71a37.js";import{E as _}from"./useUserBundle.4175341b.js";import{Q as T,a as R}from"./TotalQueryResults.99368baa.js";import{j as t,a as I}from"./jsx-runtime.2e925369.js";import"./Button.77571428.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./toConsumableArray.5f669646.js";import"./withStyles.4f64abe1.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./assert.134145c1.js";import"./iframe.382b757a.js";import"./index.8cde812d.js";import"./RegularExpressions.b87376bf.js";import"./useGetInfoFromIds.3fe270d1.js";import"./use-deep-compare-effect.esm.9d3fc03b.js";import"./uniq.503b4de6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.9c26e41e.js";import"./toNumber.81238efb.js";import"./isObject.7e2c8eb3.js";import"./isSymbol.a6e5b306.js";import"./_cacheHas.e524ea96.js";import"./_Uint8Array.692793fe.js";import"./isArray.949e1480.js";import"./without.d8f84954.js";import"./uniqueId.4eca3697.js";import"./_setToArray.78d992a5.js";import"./ColumnType.744125d2.js";import"./SearchResultsNotFound.f7c9d25b.js";import"./index.es.82d55a6a.js";import"./EntityTypeUtils.ab2c1a12.js";import"./TypeUtils.a2c41307.js";import"./ElementWithTooltip.93ae62b9.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.316b0c5e.js";import"./IconSvg.d5022c82.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./Transition.f54f11c8.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./index.5ef2ed87.js";import"./Dropdown.edf6576c.js";import"./Modal.739750b1.js";import"./Fade.7bfbed49.js";import"./useWaitForDOMRef.088a2ede.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./Alert.ad748791.js";import"./usePopperMarginModifiers.09a60569.js";import"./isRequiredForA11y.61bbc671.js";import"./MarkdownSynapse.c0d7687f.js";import"./UserCard.9678f981.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.ca282b5e.js";import"./times.c9d2a3a1.js";import"./Skeleton.bf1489f0.js";import"./ToastMessage.69468422.js";import"./FullWidthAlert.b79b9dd5.js";import"./Typography.6d04db0e.js";import"./debounce.6a99f8f3.js";import"./Overlay.5ce67f19.js";import"./factory.fb7f6567.js";import"./SynapseVideo.0ccab7dc.js";import"./react-intersection-observer.m.66de6abb.js";import"./useInfiniteQuery.80524e18.js";import"./DateFormatter.fdf3b8c7.js";import"./moment.81704e1d.js";import"./IconList.cef13322.js";import"./FileHandleLink.08c1655b.js";import"./isEmpty.12a3904b.js";import"./_getTag.260cb500.js";import"./NoSearchResults.19ed4ed4.js";import"./LoadingScreen.ddfba534.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./UserCardList.a09eafac.js";import"./useGetQueryResultBundle.6d872b14.js";import"./queryKeys.e0d3085f.js";import"./useEntity.9104e58a.js";import"./pick.9721c6a1.js";import"./hasIn.d2b152d7.js";import"./cloneDeep.5da7e312.js";import"./Checkbox.995e1545.js";import"./IconMinus.f135ad99.js";import"./RadioGroup.ff23c1de.js";import"./classCallCheck.8304ed06.js";import"./inherits.428c75c6.js";const r=e=>{const a=E(e.sql,e.searchParams,e.sqlOperator),m={concreteType:"org.sagebionetworks.repo.model.table.QueryBundleRequest",entityId:b(a),query:{sql:a,limit:e.limit},partMask:p|d|c|u|C|y|g|f};return t(O,{...e,initQueryRequest:m,children:I(T,{rgbIndex:e.rgbIndex,unitDescription:e.unitDescription,facetAliases:e.facetAliases,children:[t(S,{...e}),t(R,{children:i=>t(_,{error:i==null?void 0:i.error})})]})})};var l=r;try{r.displayName="CardContainerLogic",r.__docgenInfo={description:"Class wraps around CardContainer and serves as a standalone logic container for rendering cards.",displayName:"CardContainerLogic",props:{limit:{defaultValue:null,description:"",name:"limit",required:!1,type:{name:"number"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},unitDescription:{defaultValue:null,description:"",name:"unitDescription",required:!1,type:{name:"string"}},sqlOperator:{defaultValue:null,description:"",name:"sqlOperator",required:!1,type:{name:"enum",value:[{value:'"LIKE"'},{value:'"="'},{value:'"HAS"'}]}},searchParams:{defaultValue:null,description:"",name:"searchParams",required:!1,type:{name:"KeyValue"}},facetAliases:{defaultValue:null,description:"",name:"facetAliases",required:!1,type:{name:"Record<string, string>"}},rgbIndex:{defaultValue:null,description:"",name:"rgbIndex",required:!1,type:{name:"number"}},isHeader:{defaultValue:null,description:"",name:"isHeader",required:!1,type:{name:"boolean"}},isAlignToLeftNav:{defaultValue:null,description:"",name:"isAlignToLeftNav",required:!1,type:{name:"boolean"}},sql:{defaultValue:null,description:"",name:"sql",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},hasInternalLink:{defaultValue:null,description:"",name:"hasInternalLink",required:!1,type:{name:"boolean"}},iconOptions:{defaultValue:null,description:"",name:"iconOptions",required:!1,type:{name:"IconOptions"}},genericCardSchema:{defaultValue:null,description:"",name:"genericCardSchema",required:!1,type:{name:"GenericCardSchema"}},secondaryLabelLimit:{defaultValue:null,description:"",name:"secondaryLabelLimit",required:!1,type:{name:"number"}},titleLinkConfig:{defaultValue:null,description:"",name:"titleLinkConfig",required:!1,type:{name:"CardLink"}},ctaLinkConfig:{defaultValue:null,description:"",name:"ctaLinkConfig",required:!1,type:{name:"CTACardLink"}},labelLinkConfig:{defaultValue:null,description:"",name:"labelLinkConfig",required:!1,type:{name:"LabelLinkConfig"}},descriptionConfig:{defaultValue:null,description:"",name:"descriptionConfig",required:!1,type:{name:"DescriptionConfig"}},columnIconOptions:{defaultValue:null,description:"",name:"columnIconOptions",required:!1,type:{name:"ColumnIconConfigs"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"]={docgenInfo:r.__docgenInfo,name:"CardContainerLogic",path:"src/lib/containers/CardContainerLogic.tsx#CardContainerLogic"})}catch{}var Et={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:l,argTypes:{}};const n=e=>t(l,{...e}),A=n.bind({});A.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const N=n.bind({});N.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:s,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const q=n.bind({});q.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:L,limit:3};const bt=["GenericCard","EmptyResults","ObservationCard"];export{N as EmptyResults,A as GenericCard,q as ObservationCard,bt as __namedExportsOrder,Et as default};
//# sourceMappingURL=CardContainerLogic.stories.be49ed35.js.map
