import{G as o,P as r,O as n}from"./SynapseConstants.b6aa8bf5.js";import{C as i}from"./CardContainerLogic.160cd6dc.js";import{j as s}from"./jsx-runtime.08584073.js";import"./index.8d274cce.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./Button.19eb0a0d.js";import"./styled.49e31bee.js";import"./utils.564f56d5.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./index.35ce73ec.js";import"./isArray.e00a52bc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.52412c7b.js";import"./sqlFunctions.356c1293.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.e3984af8.js";import"./useGetInfoFromIds.0b77420b.js";import"./use-deep-compare-effect.esm.fad3e301.js";import"./uniq.832d3855.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ebd6ba2e.js";import"./isSymbol.bad84e3a.js";import"./_cacheHas.8d045655.js";import"./without.d57c7f92.js";import"./uniqueId.2262e339.js";import"./_Set.2974cbe7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.f0b491fb.js";import"./queryUtils.ef308bba.js";import"./useInfiniteQuery.e2feb110.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5688d850.js";import"./_baseClone.54734e5a.js";import"./_getTag.64bd74dc.js";import"./NoSearchResults.f15840a6.js";import"./NoData.5d93d435.js";import"./unCamelCase.07e38083.js";import"./useEntity.ac75c1c8.js";import"./useMutation.fa3cdf0e.js";import"./pick.4ca0ebc5.js";import"./isEqual.aa92ca80.js";import"./ElementWithTooltip.3eef2d7f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.47050332.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./InfoOutlined.aab3ebaf.js";import"./Dropdown.8b1a32a3.js";import"./usePrevious.eb4668df.js";import"./contains.dc8b0910.js";import"./usePopperMarginModifiers.e5eb18a0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.0589ad6c.js";import"./RadioGroup.884be978.js";import"./moment.a565bb48.js";import"./RangeSlider.3d031b55.js";import"./factory.89a755c8.js";import"./react-sizeme.8d569517.js";import"./Skeleton.caf11574.js";import"./emotion-react.browser.esm.17352205.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.39f2fb11.js";import"./Modal.6973cbd4.js";import"./inheritsLoose.e43b22d1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.5ed53cb9.js";import"./Typography.afe1a60b.js";import"./SelectionCriteriaPill.8f9f19a7.js";import"./Close.e48a33b3.js";import"./react-select.esm.fadcd49f.js";import"./Select-54ac8379.esm.305999be.js";import"./CustomSelectWidget.17052bbc.js";import"./index.browser.fb0b4558.js";import"./UserCard.94c6876c.js";import"./IconCopy.28a6d75f.js";import"./SkeletonTable.c5426c0e.js";import"./times.6ff56ad1.js";import"./ToastMessage.b76b29fc.js";import"./FullWidthAlert.c938c0bd.js";import"./Overlay.c4937a08.js";import"./WarningModal.437479d1.js";import"./react-intersection-observer.esm.dee0153b.js";import"./DateFormatter.ea5a9994.js";import"./EntityIcon.4f13962d.js";import"./core.esm.2c37a07f.js";import"./isEmpty.cc673e81.js";import"./union.e9db0191.js";import"./isString.1b0717a4.js";import"./useGetDownloadListStatistics.41fd99c5.js";import"./QueryCount.c7aad442.js";import"./useGetAccessRequirement.7772742c.js";import"./ManagedACTAccessRequirementStatus.8dc4cd07.js";import"./FileUpload.87b2b521.js";import"./UserSearchBox.93d24c31.js";import"./UserOrTeamBadge.b4d762a1.js";import"./EntityLink.4b34ca07.js";import"./SynapseVideo.70b05cce.js";import"./IconList.da9ad884.js";import"./UserCardList.1c49604c.js";const ao={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const po=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,po as __namedExportsOrder,ao as default};
