import{G as r,P as o,O as n}from"./index.059e0d20.js";import{C as i}from"./CardContainerLogic.12b1c447.js";import{j as s}from"./jsx-runtime.00d70968.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./assert.277c07bd.js";import"./iframe.addcd329.js";import"./getEndpoint.bb7ded34.js";import"./sqlFunctions.59c64146.js";import"./useGetInfoFromIds.525da7fb.js";import"./use-deep-compare-effect.esm.76673280.js";import"./uniq.fe26280c.js";import"./toInteger.26df0eb9.js";import"./_cacheHas.af935b3d.js";import"./_baseDifference.66c4a72c.js";import"./_setToArray.a82100c8.js";import"./without.a8a6fd97.js";import"./ColumnType.744125d2.js";import"./EntityTypeUtils.c1fb28b9.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";import"./ElementWithTooltip.a957e315.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.975fa1df.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./index.8ed07549.js";import"./Dropdown.2144a55d.js";import"./Modal.8f4b0da5.js";import"./useWaitForDOMRef.d07b3a07.js";import"./useWillUnmount.4a16e5cd.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./isRequiredForA11y.20ed4857.js";import"./TotalQueryResults.01ac6e01.js";import"./Skeleton.88496afb.js";import"./queryUtils.3cc39073.js";import"./cloneDeep.d8d34688.js";import"./Collapse.c0581257.js";import"./Checkbox.3346a87d.js";import"./IconMinus.3805e4f5.js";import"./RadioGroup.d48d0161.js";import"./moment.a565bb48.js";import"./RangeSlider.6285b13c.js";import"./classCallCheck.8304ed06.js";import"./inherits.0fdbf119.js";import"./MarkdownSynapse.ee5cf257.js";import"./UserCard.0ffebfe2.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.d7bc91d1.js";import"./times.7c60ecae.js";import"./Overlay.3297046e.js";import"./factory.875690b2.js";import"./SynapseVideo.d12575c5.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.39210394.js";import"./index.128923a6.js";import"./index.c68ec8b9.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./IconList.cd761fab.js";import"./FileHandleLink.216aa5a3.js";import"./isEmpty.40fc1a36.js";import"./LoadingScreen.dc53f4e3.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./NoSearchResults.a01d676d.js";import"./UserCardList.373f9249.js";const Dt={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:r,genericCardSchema:{type:o,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:r,genericCardSchema:{type:o,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const jt=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,jt as __namedExportsOrder,Dt as default};
