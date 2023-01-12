import{G as o,Q as r,O as n}from"./SynapseConstants.aef18750.js";import{C as i}from"./AccessRequirementList.3ac35bdf.js";import{j as s}from"./jsx-runtime.30b0b063.js";import"./index.004e53d6.js";import"./index.a3b83451.js";import"./iframe.7f20f630.js";import"./Button.4f0daaa4.js";import"./styled.4350a8f3.js";import"./Tooltip.f326ea8a.js";import"./SvgIcon.a1d78dff.js";import"./useTheme.bbb702a0.js";import"./TransitionGroupContext.4dd5d6a9.js";import"./FullWidthAlert.12957b45.js";import"./hook.82358120.js";import"./createWithBsPrefix.67525ed1.js";import"./divWithClassName.fc6b9e1a.js";import"./index.35ce73ec.js";import"./Typography.e0f3806f.js";import"./Fade.13693e7f.js";import"./isArray.1ceec0fc.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9b38face.js";import"./IconButton.32d1d9ea.js";import"./ButtonBase.32a6d369.js";import"./emotion-react.browser.esm.f592d4ba.js";import"./Link.671fdc30.js";import"./Button.9f139960.js";import"./useGetInfoFromIds.31a24e96.js";import"./use-deep-compare-effect.esm.482de782.js";import"./uniq.4b667121.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ac8d0258.js";import"./isSymbol.a68e106b.js";import"./_cacheHas.9d395393.js";import"./without.353d343d.js";import"./toString.0784e7f5.js";import"./_Set.24e6e8e7.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.667d64ee.js";import"./Modal.4b6f87a4.js";import"./contains.4aff3092.js";import"./inheritsLoose.acddc658.js";import"./usePrevious.407c8514.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.0fac0f63.js";import"./UserCard.8f93d708.js";import"./IconCopy.b0b77e27.js";import"./SkeletonTable.d4ad4639.js";import"./times.9e428882.js";import"./Skeleton.12921ce3.js";import"./ToastMessage.0ad637d7.js";import"./uniqueId.11b542f1.js";import"./Overlay.6a310082.js";import"./usePopperMarginModifiers.ff236d51.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.2bc67909.js";import"./useInfiniteQuery.26f32ba1.js";import"./DateFormatter.b0142474.js";import"./dayjs.min.bbadf1b7.js";import"./utc.ab78fb46.js";import"./EntityIcon.14de104d.js";import"./core.esm.edaed8bc.js";import"./pick.b621d971.js";import"./_baseClone.0658ca9d.js";import"./isEmpty.2b33ff63.js";import"./isEqual.69f0b7e9.js";import"./index.browser.1f9bb947.js";import"./union.b9c69b1b.js";import"./CustomSelectWidget.37b0e148.js";import"./Select-54ac8379.esm.dc31b5d3.js";import"./isString.04e79eb0.js";import"./factory.1406cd1d.js";import"./sqlFunctions.1f9ba8fc.js";import"./QueryFilter.24d6853f.js";import"./useEntity.12f188e0.js";import"./useMutation.8683269e.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.22d6495c.js";import"./queryUtils.8f39e513.js";import"./cloneDeep.0550986a.js";import"./NoSearchResults.f96c3e8d.js";import"./NoData.a592f593.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.eca6bae5.js";import"./ElementWithTooltip.80ed4983.js";import"./Dropdown.eeff7c4d.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.805098d5.js";import"./RadioGroup.e718da9a.js";import"./RangeSlider.27c005be.js";import"./react-sizeme.bc565794.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.b3bc1b97.js";import"./Close.5ba53f36.js";import"./relativeTime.9e7dcaa0.js";import"./useDownloadList.3c79b040.js";import"./QueryCount.6252e08a.js";import"./react-select.esm.8c0efa9b.js";import"./IconList.691fbf90.js";import"./UserCardList.09054a1e.js";import"./useAccessRequirements.c825da38.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.e6793fd9.js";import"./UserSearchBox.47fd0364.js";import"./UserOrTeamBadge.2750084f.js";import"./EntityLink.e6477167.js";import"./ErrorChip.2b68e6ed.js";import"./SynapseVideo.f01de7a7.js";const bo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
