import{G as o,P as r,O as n}from"./index.1b5679ea.js";import{C as i}from"./CardContainerLogic.61d570e4.js";import{j as s}from"./jsx-runtime.eafcb716.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./Button.2a9ceb49.js";import"./index.57d09176.js";import"./withStyles.58225468.js";import"./utils.57f84b27.js";import"./Alert.3a69b0d7.js";import"./index.35ce73ec.js";import"./isArray.58b2754e.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b014c401.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.dcdb7bde.js";import"./use-deep-compare-effect.esm.32d4302a.js";import"./uniq.a7654786.js";import"./_baseSlice.50189bc5.js";import"./toInteger.877b19a2.js";import"./isSymbol.4226a630.js";import"./_cacheHas.4d761572.js";import"./without.ba9da4ea.js";import"./uniqueId.6b2e4177.js";import"./_Set.a93a6693.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.51f27a34.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.625594e1.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./makeStyles.ba00c68d.js";import"./InfoOutlined.f91cf818.js";import"./FacetNav.ff7b4976.js";import"./queryUtils.dade1562.js";import"./useInfiniteQuery.0ce0255d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.e13ce5b9.js";import"./_baseClone.705a7ff1.js";import"./_getTag.35a70f0d.js";import"./NoSearchResults.c9c55f7c.js";import"./NoData.6637f170.js";import"./ElementWithTooltip.fe39892b.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.7162bc12.js";import"./Modal.b6a2ef3c.js";import"./useWaitForDOMRef.883e5955.js";import"./inheritsLoose.bfa631c4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8d1cac1c.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.bf1c9bc1.js";import"./useMutation.884ae33f.js";import"./pick.359c1a4c.js";import"./Checkbox.6d5555ef.js";import"./RadioGroup.e5def0a0.js";import"./moment.a565bb48.js";import"./RangeSlider.f407560b.js";import"./factory.a50674f0.js";import"./react-sizeme.dd262d7d.js";import"./Skeleton.7d351d4d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c34152cb.js";import"./Typography.049c6864.js";import"./Close.0b1926a3.js";import"./react-select.esm.b2d311d5.js";import"./Select-54ac8379.esm.349182a5.js";import"./CustomSelectWidget.881b9f9a.js";import"./index.browser.4cb65851.js";import"./WarningModal.c3d992db.js";import"./react-intersection-observer.esm.a05776db.js";import"./UserCard.a35d5b7e.js";import"./IconCopy.f88536dd.js";import"./SkeletonTable.aa50450b.js";import"./times.5f1a3032.js";import"./ToastMessage.a4b76c0b.js";import"./FullWidthAlert.a684bfe0.js";import"./Overlay.ae4ca009.js";import"./DateFormatter.ac7d7939.js";import"./core.esm.70554193.js";import"./isEmpty.31b01d03.js";import"./isEqual.f5035d64.js";import"./union.44090b51.js";import"./isString.19ecf57a.js";import"./useGetDownloadListStatistics.b986f94a.js";import"./QueryCount.6c5b0a28.js";import"./useGetAccessRequirement.d431fc61.js";import"./ManagedACTAccessRequirementStatus.53c8ed1d.js";import"./FileUpload.aa6d26aa.js";import"./UserSearchBox.52f13629.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.98cec68e.js";import"./EntityLink.777bfa8f.js";import"./SynapseVideo.4a63498d.js";import"./IconList.289dc51f.js";import"./UserCardList.0a47a3c6.js";const oo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const ro=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,ro as __namedExportsOrder,oo as default};
