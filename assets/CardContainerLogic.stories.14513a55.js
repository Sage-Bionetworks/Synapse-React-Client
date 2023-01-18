import{G as o,Q as r,O as n}from"./SynapseConstants.aef18750.js";import{C as i}from"./AccessRequirementList.f4adc840.js";import{j as s}from"./jsx-runtime.2345241f.js";import"./index.3aece391.js";import"./index.5a7af4ba.js";import"./iframe.b6c45fd3.js";import"./Button.dd9fc4ec.js";import"./styled.8a79803b.js";import"./Tooltip.c4c31d9f.js";import"./SvgIcon.c3dd5893.js";import"./useTheme.7300f82e.js";import"./TransitionGroupContext.ce30fb83.js";import"./FullWidthAlert.f758387e.js";import"./hook.40948bbb.js";import"./createWithBsPrefix.767a2de5.js";import"./divWithClassName.ada2c499.js";import"./index.35ce73ec.js";import"./Typography.5428f494.js";import"./Fade.544d2c09.js";import"./isArray.594b9061.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.c0ad7b85.js";import"./IconButton.479fa89c.js";import"./ButtonBase.37e9a56e.js";import"./emotion-react.browser.esm.782cdb58.js";import"./Link.10558e7e.js";import"./Button.2a6d5e68.js";import"./useGetInfoFromIds.0475603f.js";import"./use-deep-compare-effect.esm.172e5a35.js";import"./uniq.3e57be38.js";import"./_baseSlice.50189bc5.js";import"./toInteger.accec1ae.js";import"./isSymbol.f2edf3f1.js";import"./_cacheHas.444d0de0.js";import"./without.fdcdbb83.js";import"./toString.f6d778fc.js";import"./_Set.9e8317f4.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.2eed530c.js";import"./Modal.d74fe065.js";import"./contains.ca3b169c.js";import"./inheritsLoose.13574b27.js";import"./usePrevious.87cbdf7d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.6e025e2e.js";import"./UserCard.ba59470c.js";import"./IconCopy.96dd679a.js";import"./SkeletonTable.a46ba30a.js";import"./times.cf7726b4.js";import"./Skeleton.153caf19.js";import"./ToastMessage.67e8dd8b.js";import"./uniqueId.15511b65.js";import"./Overlay.38d5df1d.js";import"./usePopperMarginModifiers.279ac1d5.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.03df17ea.js";import"./useInfiniteQuery.9f720242.js";import"./DateFormatter.5a5aee7a.js";import"./dayjs.min.08f55bec.js";import"./utc.ea4d26d5.js";import"./EntityIcon.4499e1cb.js";import"./core.esm.6fa18c80.js";import"./pick.4daa287c.js";import"./_baseClone.917156e4.js";import"./isEmpty.cf2813c7.js";import"./isEqual.389c33db.js";import"./index.browser.ffb67eb2.js";import"./union.9ee7bb2c.js";import"./CustomSelectWidget.f2975d6b.js";import"./Select-54ac8379.esm.e28782ed.js";import"./isString.0282577e.js";import"./factory.b43af774.js";import"./sqlFunctions.2fd3fba9.js";import"./QueryFilter.a3eb9749.js";import"./useEntity.8bf3c388.js";import"./useMutation.1f6b4381.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.9125323f.js";import"./queryUtils.3d9a8b34.js";import"./cloneDeep.4edbf6d2.js";import"./NoSearchResults.a5221c5b.js";import"./NoData.42b2b531.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.fd8402b4.js";import"./ElementWithTooltip.cc59464c.js";import"./Dropdown.1de75e35.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.90f0cc6b.js";import"./RadioGroup.293e52dc.js";import"./RangeSlider.765e12f1.js";import"./react-sizeme.8f705d02.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.33f9f454.js";import"./Close.bf8fe8a1.js";import"./relativeTime.98f5c2df.js";import"./useDownloadList.55e1fa91.js";import"./QueryCount.78040131.js";import"./react-select.esm.2244a417.js";import"./IconList.1efc798b.js";import"./UserCardList.15756da8.js";import"./useAccessRequirements.175d805e.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.059ff184.js";import"./UserSearchBox.976219e3.js";import"./UserOrTeamBadge.11ab92e9.js";import"./EntityLink.32811989.js";import"./ErrorChip.124f27be.js";import"./SynapseVideo.3f73dbfc.js";const bo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
