import{G as o,Q as r,O as n}from"./SynapseConstants.71946a35.js";import{C as i}from"./AccessRequirementList.e3110584.js";import{j as s}from"./jsx-runtime.76b41102.js";import"./index.0297a0cb.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./Button.83b95483.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.175e5b3e.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";import"./useGetInfoFromIds.ad8b47c2.js";import"./use-deep-compare-effect.esm.c9075b1e.js";import"./uniq.4862c17b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e94666c7.js";import"./isSymbol.945d9b60.js";import"./_cacheHas.0d545133.js";import"./without.79d3af29.js";import"./toString.30e0c932.js";import"./_Set.6089be3d.js";import"./_setToArray.a82100c8.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.37cafde6.js";import"./Modal.907a4a1e.js";import"./contains.015a7c6d.js";import"./inheritsLoose.9c2697f4.js";import"./usePrevious.4c8906d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.ad8cb22c.js";import"./UserCard.29055287.js";import"./IconCopy.ae28a5e2.js";import"./SkeletonTable.4585cee0.js";import"./times.5539d7c0.js";import"./Skeleton.439e65be.js";import"./ToastMessage.a7db9b8d.js";import"./uniqueId.db618dfa.js";import"./Overlay.e607fdf1.js";import"./usePopperMarginModifiers.f84a16be.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.0ced2b23.js";import"./useInfiniteQuery.6628dc0b.js";import"./DateFormatter.405593b2.js";import"./dayjs.min.a3177bfa.js";import"./utc.57c73dc3.js";import"./EntityIcon.409d700e.js";import"./core.esm.5ccb1dc5.js";import"./pick.77527010.js";import"./_baseClone.59c3ed7e.js";import"./isEmpty.8d6ae8cd.js";import"./isEqual.f3cbd38f.js";import"./index.browser.dfdbc042.js";import"./union.8f08a467.js";import"./CustomSelectWidget.0f29881d.js";import"./Select-54ac8379.esm.04a57595.js";import"./isString.64d04794.js";import"./factory.0ec07d04.js";import"./sqlFunctions.e7dd183a.js";import"./QueryFilter.b81da185.js";import"./useEntity.d0924c07.js";import"./useMutation.bf55f3f5.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.22071321.js";import"./queryUtils.cba9940e.js";import"./cloneDeep.e7a3eeef.js";import"./NoSearchResults.74466cf1.js";import"./NoData.e5f1e807.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.05b87c21.js";import"./Dropdown.f708dbe5.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b4d66a68.js";import"./RadioGroup.7d7338a2.js";import"./RangeSlider.8c92159c.js";import"./react-sizeme.e70bce6e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.938aa7f9.js";import"./Close.64702cf9.js";import"./relativeTime.7e299a09.js";import"./useDownloadList.5afd9cdb.js";import"./QueryCount.ea7052b8.js";import"./react-select.esm.6272fded.js";import"./IconList.d9d0dd5d.js";import"./UserCardList.025f49c3.js";import"./useAccessRequirements.dc76750b.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8f9a5007.js";import"./UserSearchBox.2300e4da.js";import"./UserOrTeamBadge.e0170d2a.js";import"./EntityLink.de0eb36e.js";import"./ErrorChip.fe210de4.js";import"./SynapseVideo.9b0ef7ab.js";const uo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const bo=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,bo as __namedExportsOrder,uo as default};
