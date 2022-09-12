import{G as r,P as o,O as n}from"./index.a1e07a70.js";import{C as i}from"./CardContainerLogic.bc9116cb.js";import{j as s}from"./jsx-runtime.00d70968.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./assert.085e20d8.js";import"./iframe.81df3a6e.js";import"./getEndpoint.bb7ded34.js";import"./sqlFunctions.59c64146.js";import"./useGetInfoFromIds.4af94a0d.js";import"./use-deep-compare-effect.esm.76673280.js";import"./uniq.a9e89d95.js";import"./toInteger.a17e9bfa.js";import"./_cacheHas.5070c2c3.js";import"./_baseDifference.ea8b7af2.js";import"./_setToArray.a82100c8.js";import"./without.e7883e5e.js";import"./ColumnType.744125d2.js";import"./EntityTypeUtils.19d55b11.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";import"./ElementWithTooltip.bf6a2e44.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.7dfc89b8.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./index.8ed07549.js";import"./Dropdown.13d94a98.js";import"./Modal.ec8bc390.js";import"./useWaitForDOMRef.064fee4c.js";import"./useWillUnmount.4a16e5cd.js";import"./usePopperMarginModifiers.0428ddea.js";import"./isRequiredForA11y.20ed4857.js";import"./TotalQueryResults.b4dfdf0d.js";import"./Skeleton.c897a2bf.js";import"./queryUtils.235bc32f.js";import"./cloneDeep.33ad6620.js";import"./Collapse.a100796c.js";import"./Checkbox.96de280e.js";import"./IconMinus.3805e4f5.js";import"./RadioGroup.7c46be31.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./MarkdownSynapse.94f07ba7.js";import"./UserCard.e9887ce4.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.b010af00.js";import"./times.70c713ca.js";import"./Overlay.b3559176.js";import"./factory.077bf1a0.js";import"./SynapseVideo.fa3a0f3c.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.db050d7e.js";import"./index.be94670d.js";import"./index.2f45a4ed.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./IconList.47bd9f12.js";import"./FileHandleLink.6cc78e41.js";import"./isEmpty.5b6f8173.js";import"./LoadingScreen.b468edab.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./NoSearchResults.a01d676d.js";import"./UserCardList.bd8164e7.js";const Ut={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:r,genericCardSchema:{type:o,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:r,genericCardSchema:{type:o,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const _t=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,_t as __namedExportsOrder,Ut as default};
