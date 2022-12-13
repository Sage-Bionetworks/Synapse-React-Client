import{G as o,P as r,O as n}from"./SynapseConstants.d6ba6a96.js";import{C as i}from"./HelpPopover.61cc5fbd.js";import{j as s}from"./jsx-runtime.d04151d1.js";import"./index.8319c373.js";import"./iframe.d32e0f35.js";import"./usePopperMarginModifiers.eac9bbda.js";import"./contains.5d34513a.js";import"./createWithBsPrefix.f5521544.js";import"./Button.a12385d6.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.9c2483b3.js";import"./Fade.f21ee508.js";import"./styled.1efff5b8.js";import"./useTheme.175bd669.js";import"./Tooltip.4974d54a.js";import"./SvgIcon.d3ec47f0.js";import"./TransitionGroupContext.1ef7d36b.js";import"./isArray.88add67b.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.23552105.js";import"./IconButton.f2c2856c.js";import"./ButtonBase.3d334067.js";import"./emotion-react.browser.esm.b7b35e3a.js";import"./Link.45362a72.js";import"./Typography.73bd7049.js";import"./Button.09b7bba7.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./divWithClassName.2e38eee3.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.49d7a36d.js";import"./Modal.e9042f62.js";import"./inheritsLoose.60fa261c.js";import"./usePrevious.17fca189.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.3ce690e8.js";import"./UserCard.85628e7b.js";import"./IconCopy.f2a5ff5c.js";import"./SkeletonTable.9b156a16.js";import"./times.f1a57eab.js";import"./toInteger.ae0f3fd8.js";import"./isSymbol.4d2b99f3.js";import"./Skeleton.b0e23dcf.js";import"./ToastMessage.7ece14e4.js";import"./FullWidthAlert.8d2b5601.js";import"./uniqueId.55896be5.js";import"./Overlay.68ebd8b3.js";import"./WarningModal.d2b7e88b.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.303a0322.js";import"./useInfiniteQuery.10e21598.js";import"./DateFormatter.520b6d67.js";import"./dayjs.min.8e3f90a2.js";import"./utc.360d2184.js";import"./EntityIcon.2ce1e0a4.js";import"./core.esm.c8184396.js";import"./pick.b8d5c0b8.js";import"./_baseClone.757cef03.js";import"./_Set.dd15e3a3.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.0b253945.js";import"./isEqual.9e44cb41.js";import"./_cacheHas.64f4d1a5.js";import"./_setToArray.a82100c8.js";import"./index.browser.974c266e.js";import"./union.2e94c278.js";import"./without.f73f20c7.js";import"./uniq.485432af.js";import"./CustomSelectWidget.1ea8598c.js";import"./Select-54ac8379.esm.ff4e4b7d.js";import"./isString.c58efe5c.js";import"./factory.5bb06b9a.js";import"./sqlFunctions.6804c648.js";import"./QueryFilter.dd2b8000.js";import"./useEntity.3ee747be.js";import"./useMutation.ce8e7b55.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.fc9cd0a6.js";import"./queryUtils.922f7edc.js";import"./cloneDeep.22f3f931.js";import"./use-deep-compare-effect.esm.3b45ff57.js";import"./NoSearchResults.401bd586.js";import"./NoData.82f8f3c8.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.5969bdd3.js";import"./Dropdown.67b8871d.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.630a7a88.js";import"./Checkbox.71e497ee.js";import"./RadioGroup.7c98ddae.js";import"./RangeSlider.e8aa8b17.js";import"./react-sizeme.dba70c21.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.8e402b92.js";import"./Close.76b8fc30.js";import"./relativeTime.d551b21f.js";import"./useDownloadList.f6c00095.js";import"./QueryCount.9058a4e6.js";import"./react-select.esm.7e5659f3.js";import"./IconList.466d6ff9.js";import"./UserCardList.6612b7e7.js";import"./useAccessRequirements.1d9dafa7.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.d1f1221e.js";import"./UserSearchBox.0ace33e3.js";import"./UserOrTeamBadge.f6190669.js";import"./EntityLink.3ceb26f0.js";import"./SynapseVideo.dc0ade69.js";const uo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
