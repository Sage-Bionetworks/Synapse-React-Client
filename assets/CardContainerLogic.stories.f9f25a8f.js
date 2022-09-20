import{G as o,P as r,O as n}from"./index.84210d7d.js";import{C as i}from"./CardContainerLogic.00827df9.js";import{j as s}from"./jsx-runtime.00d70968.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.9b56e417.js";import"./iframe.c18f9f1c.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./sqlFunctions.b49ac766.js";import"./useGetInfoFromIds.a977dc58.js";import"./use-deep-compare-effect.esm.357a0ad8.js";import"./uniq.7adac9ef.js";import"./toInteger.ada06091.js";import"./_cacheHas.f8ac99cc.js";import"./_baseDifference.473c5fc3.js";import"./_setToArray.a82100c8.js";import"./without.f32c0c19.js";import"./ColumnType.744125d2.js";import"./EntityTypeUtils.ee2bd52a.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";import"./ElementWithTooltip.0744baa1.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.4a84ded8.js";import"./IconSvg.7fcfdfd8.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./InfoOutlined.60e019a4.js";import"./index.8ed07549.js";import"./Dropdown.65d7027b.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.fba68454.js";import"./isRequiredForA11y.20ed4857.js";import"./TotalQueryResults.8a414ebf.js";import"./Skeleton.99b24529.js";import"./queryUtils.20ce6ade.js";import"./cloneDeep.ea1bb0ac.js";import"./Collapse.675410da.js";import"./Checkbox.c68b07e0.js";import"./uniqueId.eba72690.js";import"./IconMinus.3805e4f5.js";import"./RadioGroup.d19dd04f.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./Typography.868473dc.js";import"./Select-54ac8379.esm.edd779c2.js";import"./CustomSelectWidget.b1e9ceda.js";import"./MarkdownSynapse.e2c6e56e.js";import"./UserCard.10579c32.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.b4ef3e04.js";import"./times.7d6137c1.js";import"./ToastMessage.30a6258e.js";import"./FullWidthAlert.e63d41e9.js";import"./Overlay.66930c7c.js";import"./factory.ad4beeb1.js";import"./SynapseVideo.2044bb7f.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.715d8b98.js";import"./index.a04826db.js";import"./index.a30bf6ee.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./IconList.4a3fcd8a.js";import"./FileHandleLink.0895dffc.js";import"./isEmpty.fc6d098b.js";import"./LoadingScreen.91642215.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./NoSearchResults.a01d676d.js";import"./UserCardList.e6465f81.js";const Wt={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
  sortConfig: {
    defaultColumn: 'authors',
    defaultDirection: 'ASC',
    sortableColumns: ['authors', 'title', 'createdOn', 'journal'],
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const wt=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,wt as __namedExportsOrder,Wt as default};
