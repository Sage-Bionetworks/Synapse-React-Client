import{G as o,Q as r,O as n}from"./SynapseConstants.aef18750.js";import{C as i}from"./AccessRequirementList.bc8b0d43.js";import{j as s}from"./jsx-runtime.32974a61.js";import"./index.ffb97e36.js";import"./index.3765caa7.js";import"./iframe.1b774001.js";import"./Button.335f67c9.js";import"./styled.d39d5dc5.js";import"./Tooltip.86d343dc.js";import"./SvgIcon.85beeea7.js";import"./useTheme.6433d807.js";import"./TransitionGroupContext.a684d657.js";import"./FullWidthAlert.1407f383.js";import"./hook.b7735453.js";import"./createWithBsPrefix.9bd79cbf.js";import"./divWithClassName.5dac844d.js";import"./index.35ce73ec.js";import"./Typography.c2c9dd4b.js";import"./Fade.40b5902b.js";import"./isArray.c8bb4df8.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.13ae9a2f.js";import"./IconButton.adda85b8.js";import"./ButtonBase.38f61443.js";import"./emotion-react.browser.esm.34fe7ce7.js";import"./Link.7609fc67.js";import"./Button.a71922e0.js";import"./useGetInfoFromIds.45ab9686.js";import"./use-deep-compare-effect.esm.baa92912.js";import"./uniq.12386300.js";import"./_baseSlice.50189bc5.js";import"./toInteger.79c7525f.js";import"./isSymbol.99aea655.js";import"./_cacheHas.0a931368.js";import"./without.171c241f.js";import"./toString.77379481.js";import"./_Set.157e39ea.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.cff5abbc.js";import"./Modal.a001dbc2.js";import"./contains.bd6ce983.js";import"./inheritsLoose.3e2b8649.js";import"./usePrevious.ac877c6e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8d2f766c.js";import"./UserCard.e7305117.js";import"./IconCopy.ef0119b7.js";import"./SkeletonTable.46544d69.js";import"./times.2bf5fee2.js";import"./Skeleton.391d7134.js";import"./ToastMessage.65ccc322.js";import"./uniqueId.74860187.js";import"./Overlay.506fb03e.js";import"./usePopperMarginModifiers.c268b183.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.43c513c3.js";import"./useInfiniteQuery.bfd93c41.js";import"./DateFormatter.ba89c93b.js";import"./dayjs.min.f6270a69.js";import"./utc.7644977b.js";import"./EntityIcon.f7da1a51.js";import"./core.esm.31645efe.js";import"./pick.166fd329.js";import"./_baseClone.91bfbf6a.js";import"./isEmpty.41b614a4.js";import"./isEqual.58fe1d87.js";import"./index.browser.d02228ce.js";import"./union.c8c81301.js";import"./CustomSelectWidget.2ec2217c.js";import"./Select-54ac8379.esm.9cd67400.js";import"./isString.3e1e0992.js";import"./factory.e685adc3.js";import"./sqlFunctions.e5de3b71.js";import"./QueryFilter.1f16af57.js";import"./useEntity.7a358b53.js";import"./useMutation.3e2306a1.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.49a80bc8.js";import"./queryUtils.9304d19c.js";import"./cloneDeep.a6dc1322.js";import"./NoSearchResults.34ec5390.js";import"./NoData.e978c6e6.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.ba6bede4.js";import"./ElementWithTooltip.dcdbf6a9.js";import"./Dropdown.076e64ad.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7235d29e.js";import"./RadioGroup.08a3ac42.js";import"./RangeSlider.8d2ad265.js";import"./react-sizeme.26dbee9b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.2f9a75e7.js";import"./Close.d5bdecd2.js";import"./relativeTime.786c950a.js";import"./useDownloadList.afadcde6.js";import"./QueryCount.e62cfd62.js";import"./react-select.esm.1daf9799.js";import"./IconList.13f5f345.js";import"./UserCardList.816f281b.js";import"./useAccessRequirements.8bda7ea9.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.610b7c00.js";import"./UserSearchBox.f3b56ee6.js";import"./UserOrTeamBadge.bfb42768.js";import"./EntityLink.3b649763.js";import"./ErrorChip.50333a30.js";import"./SynapseVideo.78b91440.js";const bo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const go=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,go as __namedExportsOrder,bo as default};
