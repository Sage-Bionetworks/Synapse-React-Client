import{G as o,P as r,O as n}from"./index.a10c4deb.js";import{C as i}from"./CardContainerLogic.69646425.js";import{j as s}from"./jsx-runtime.00d70968.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./assert.488d80ba.js";import"./iframe.c8ac3523.js";import"./getEndpoint.bb7ded34.js";import"./sqlFunctions.59c64146.js";import"./useGetInfoFromIds.0f434cfa.js";import"./use-deep-compare-effect.esm.76673280.js";import"./uniq.bb7197ed.js";import"./toInteger.203805b9.js";import"./_cacheHas.8768cc57.js";import"./_baseDifference.7dfddb62.js";import"./_setToArray.a82100c8.js";import"./without.45e88ac0.js";import"./ColumnType.744125d2.js";import"./EntityTypeUtils.784fdd55.js";import"./FileEntity.69b7bd86.js";import"./TypeUtils.a2c41307.js";import"./ElementWithTooltip.bfecb0fa.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.3c1bea14.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./index.8ed07549.js";import"./Dropdown.13d94a98.js";import"./Modal.ec8bc390.js";import"./useWaitForDOMRef.064fee4c.js";import"./useWillUnmount.4a16e5cd.js";import"./usePopperMarginModifiers.0428ddea.js";import"./isRequiredForA11y.20ed4857.js";import"./TotalQueryResults.e9f3bd49.js";import"./Skeleton.c897a2bf.js";import"./queryUtils.5580f44f.js";import"./cloneDeep.1192ea57.js";import"./Collapse.a100796c.js";import"./Checkbox.96de280e.js";import"./IconMinus.3805e4f5.js";import"./RadioGroup.7c46be31.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./Select-54ac8379.esm.12410bf4.js";import"./CustomSelectWidget.0e70c1f5.js";import"./MarkdownSynapse.7ef6f751.js";import"./UserCard.c0221aea.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.a15c0bf6.js";import"./times.d1598664.js";import"./Overlay.b3559176.js";import"./factory.5feb0853.js";import"./SynapseVideo.67dc9910.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.85b46dc0.js";import"./index.fd28b4d1.js";import"./index.ed194d05.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./IconList.47bd9f12.js";import"./FileHandleLink.b1f72341.js";import"./isEmpty.19ed7e30.js";import"./LoadingScreen.b468edab.js";import"./calculateFriendlyFileSize.9c20c573.js";import"./NoSearchResults.a01d676d.js";import"./UserCardList.9ea50dab.js";const Ut={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const _t=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,_t as __namedExportsOrder,Ut as default};
