import{G as o,P as r,O as n}from"./SynapseConstants.b6aa8bf5.js";import{C as i}from"./CardContainerLogic.b4a346d5.js";import{j as s}from"./jsx-runtime.34c6f27f.js";import"./index.c107377d.js";import"./index.01abc564.js";import"./iframe.678b52ee.js";import"./Button.e09f83de.js";import"./styled.0edb18ff.js";import"./utils.e76a203c.js";import"./TransitionGroupContext.3999b8b4.js";import"./Alert.894f722a.js";import"./createWithBsPrefix.37ad16b9.js";import"./index.35ce73ec.js";import"./isArray.2797ec7c.js";import"./getEndpoint.bb7ded34.js";import"./Link.31ef5031.js";import"./Typography.1460c8bf.js";import"./Button.115b5334.js";import"./ButtonBase.14266c5d.js";import"./sqlFunctions.4e0acdd8.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.45b7f017.js";import"./useGetInfoFromIds.76ba54fd.js";import"./use-deep-compare-effect.esm.6bfbbd83.js";import"./uniq.998c494a.js";import"./_baseSlice.50189bc5.js";import"./toInteger.cb259a17.js";import"./isSymbol.95cae313.js";import"./_cacheHas.c8647c3d.js";import"./without.36c17bb9.js";import"./uniqueId.0644964e.js";import"./_Set.3fd1f5c1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.5e8bd64f.js";import"./queryUtils.b9ee5c57.js";import"./useInfiniteQuery.b706301d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ed697980.js";import"./_baseClone.0ccc8d5a.js";import"./_getTag.e421155e.js";import"./NoSearchResults.55058bef.js";import"./NoData.64d7525f.js";import"./unCamelCase.07e38083.js";import"./useEntity.de0f05d0.js";import"./useMutation.9de5aae1.js";import"./pick.e2925ea6.js";import"./isEqual.eafb3d0a.js";import"./ElementWithTooltip.bdc8c303.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.61b16659.js";import"./Tooltip.6150c4ad.js";import"./createSvgIcon.62fb05ce.js";import"./InfoOutlined.7facd530.js";import"./Dropdown.76cbfb27.js";import"./usePrevious.55ee8b3e.js";import"./contains.d2a56144.js";import"./usePopperMarginModifiers.c16405c7.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.a69086d1.js";import"./RadioGroup.4711ebe8.js";import"./moment.a565bb48.js";import"./RangeSlider.49336264.js";import"./factory.72357d20.js";import"./react-sizeme.64006c31.js";import"./Skeleton.88fd9d9d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.76addac9.js";import"./Modal.b47efd91.js";import"./inheritsLoose.6c462130.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.f2961cc7.js";import"./SelectionCriteriaPill.40c5acd3.js";import"./Close.8bb9acba.js";import"./react-select.esm.ad04556f.js";import"./Select-54ac8379.esm.b35db36d.js";import"./CustomSelectWidget.164363f2.js";import"./index.browser.62966e5f.js";import"./UserCard.c83edded.js";import"./IconCopy.fd458d39.js";import"./SkeletonTable.569bfb79.js";import"./times.efc4769c.js";import"./ToastMessage.720e11e8.js";import"./FullWidthAlert.79a1e2fc.js";import"./Overlay.d3987c47.js";import"./WarningModal.6fd4c0ba.js";import"./react-intersection-observer.esm.2b0ab64d.js";import"./DateFormatter.e8b68d66.js";import"./EntityIcon.797f7811.js";import"./core.esm.ae65f762.js";import"./isEmpty.bddd142e.js";import"./union.94cc665f.js";import"./isString.e96f76cc.js";import"./useGetDownloadListStatistics.95835988.js";import"./QueryCount.48e2da33.js";import"./useGetAccessRequirement.5e22a027.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.00f8732e.js";import"./UserSearchBox.627e64fb.js";import"./UserOrTeamBadge.7c843cb7.js";import"./EntityLink.948faec8.js";import"./SynapseVideo.e3bb63f7.js";import"./IconList.cdde77ef.js";import"./UserCardList.7d28e5d5.js";const po={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const mo=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,mo as __namedExportsOrder,po as default};
