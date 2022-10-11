import{G as o,P as r,O as n}from"./index.9501be1c.js";import{C as i}from"./CardContainerLogic.5708db66.js";import{j as s}from"./jsx-runtime.4c3515e4.js";import"./index.e847bba9.js";import"./iframe.37f2588a.js";import"./Alert.54d65423.js";import"./Button.28efd16b.js";import"./index.57d09176.js";import"./Transition.840176b2.js";import"./index.35ce73ec.js";import"./isArray.7ff8d0ef.js";import"./withStyles.9c7b3093.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d7dd9197.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.22f02f58.js";import"./use-deep-compare-effect.esm.c8b81a3e.js";import"./uniq.a9f39746.js";import"./_baseSlice.50189bc5.js";import"./toInteger.010334bc.js";import"./isSymbol.6b184f44.js";import"./_cacheHas.53644ed3.js";import"./without.c05f29e9.js";import"./uniqueId.129d2094.js";import"./_Set.bda6b03e.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.bbc58c26.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.c8b7f299.js";import"./Tooltip.92206031.js";import"./createSvgIcon.8e9e6f8f.js";import"./useTheme.5faeeca8.js";import"./makeStyles.96934dd6.js";import"./InfoOutlined.20c203c5.js";import"./ElementWithTooltip.d6818df7.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.de6d85a9.js";import"./Modal.728c56cb.js";import"./useWaitForDOMRef.261cbd7a.js";import"./inheritsLoose.1ddc474e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.bef4af84.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d51baf06.js";import"./queryUtils.2fb7203a.js";import"./useInfiniteQuery.b0fd5972.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.e32a16c9.js";import"./_baseClone.ad7eae0e.js";import"./_getTag.81a6b460.js";import"./useEntity.06e3375e.js";import"./useMutation.ea7a4bb4.js";import"./pick.8c1990ef.js";import"./Checkbox.595559f6.js";import"./Collapse.5eb33ae1.js";import"./RadioGroup.cee220e2.js";import"./moment.a565bb48.js";import"./RangeSlider.875b2c80.js";import"./factory.f3a74e63.js";import"./react-sizeme.b45ab793.js";import"./Skeleton.dccb1004.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e019a26a.js";import"./Typography.48c24744.js";import"./react-select.esm.be81d946.js";import"./Select-54ac8379.esm.4527fff6.js";import"./CustomSelectWidget.2071af3c.js";import"./index.browser.11d6a0ee.js";import"./WarningModal.509f858a.js";import"./react-intersection-observer.esm.6734a5fd.js";import"./UserCard.8b720891.js";import"./IconCopy.b18e1da4.js";import"./SkeletonTable.0b50ae3a.js";import"./times.224503e4.js";import"./ToastMessage.9b5c3655.js";import"./FullWidthAlert.c9de56f1.js";import"./Overlay.9b2a4e52.js";import"./DateFormatter.e82037eb.js";import"./core.esm.c8d2fb38.js";import"./isEmpty.95a5d68b.js";import"./isEqual.50f256ae.js";import"./union.d28f2d6a.js";import"./isString.8dcca74c.js";import"./useGetDownloadListStatistics.76f3c559.js";import"./QueryCount.a71e18d1.js";import"./NoData.7b164148.js";import"./useGetAccessRequirement.9b9918ba.js";import"./ManagedACTAccessRequirementStatus.c3ccc32c.js";import"./FileUpload.84bb18b9.js";import"./UserSearchBox.6bc136c7.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.c4bcdce7.js";import"./EntityLink.3624bc06.js";import"./NoSearchResults.ce6c9f83.js";import"./SynapseVideo.27c84693.js";import"./IconList.8e7dd342.js";import"./UserCardList.fef008a0.js";const ro={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const io=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,io as __namedExportsOrder,ro as default};
