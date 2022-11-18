import{G as o,P as r,O as n}from"./SynapseConstants.290eab74.js";import{C as i}from"./CardContainerLogic.fb6258f8.js";import{j as s}from"./jsx-runtime.aa766aaf.js";import"./index.0a2c4939.js";import"./index.2efb6d36.js";import"./iframe.bd885096.js";import"./Button.c2cc208f.js";import"./styled.2fe8edb9.js";import"./utils.b239c5dc.js";import"./TransitionGroupContext.4c6d8009.js";import"./Alert.f1eda723.js";import"./createWithBsPrefix.2cafb9ec.js";import"./index.35ce73ec.js";import"./isArray.24130e12.js";import"./getEndpoint.bb7ded34.js";import"./Link.d09d0f36.js";import"./Typography.57d7ee2f.js";import"./Button.d4a39ac2.js";import"./ButtonBase.4c393dc9.js";import"./sqlFunctions.9bdc2c6c.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.aa422047.js";import"./useGetInfoFromIds.4eb73be0.js";import"./use-deep-compare-effect.esm.7ff43efb.js";import"./uniq.54fc3048.js";import"./_baseSlice.50189bc5.js";import"./toInteger.36ff5a11.js";import"./isSymbol.36b96d1e.js";import"./_cacheHas.f9705cd4.js";import"./without.33def38b.js";import"./uniqueId.bdc3b93e.js";import"./_Set.f82bf539.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ce0bb6d2.js";import"./queryUtils.4b8af5d0.js";import"./useInfiniteQuery.9a0fe06d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ad6bb155.js";import"./_baseClone.c6c5507c.js";import"./_getTag.416f77c8.js";import"./NoSearchResults.ed7d85d5.js";import"./NoData.4f4cb96e.js";import"./unCamelCase.07e38083.js";import"./useEntity.3fe82088.js";import"./useMutation.c00b8089.js";import"./pick.e97e604b.js";import"./isEqual.5b182270.js";import"./ElementWithTooltip.9e2e3ff2.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.d73f159f.js";import"./Tooltip.e4334ac7.js";import"./createSvgIcon.d27817df.js";import"./InfoOutlined.548f9119.js";import"./Dropdown.346eb87c.js";import"./usePrevious.82adf379.js";import"./contains.91b3e071.js";import"./usePopperMarginModifiers.77eb36d9.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7ee8aada.js";import"./RadioGroup.dbc26deb.js";import"./moment.a565bb48.js";import"./RangeSlider.3c4afffb.js";import"./factory.65c30f6f.js";import"./react-sizeme.738acc05.js";import"./Skeleton.b9cd2726.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c4224e86.js";import"./Modal.47c74737.js";import"./inheritsLoose.37c69c63.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.dcf70bcc.js";import"./SelectionCriteriaPill.2ce4cff8.js";import"./Close.da59ddfe.js";import"./react-select.esm.7c42975f.js";import"./Select-54ac8379.esm.d21451eb.js";import"./CustomSelectWidget.036d76f7.js";import"./index.browser.851f0bde.js";import"./UserCard.e95fdc99.js";import"./IconCopy.0f69ca31.js";import"./SkeletonTable.e0c4ca45.js";import"./times.33cd8aa8.js";import"./ToastMessage.167572b3.js";import"./FullWidthAlert.8371c9c1.js";import"./Overlay.70cfa399.js";import"./WarningModal.25805129.js";import"./react-intersection-observer.esm.0c7146a8.js";import"./DateFormatter.b979f188.js";import"./EntityIcon.6506c628.js";import"./core.esm.14729251.js";import"./isEmpty.963ee042.js";import"./union.85080a9c.js";import"./isString.5c25b498.js";import"./useGetDownloadListStatistics.e68dab14.js";import"./QueryCount.4ac97521.js";import"./useGetAccessRequirement.0c595617.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.6c178d44.js";import"./UserSearchBox.61d2cf0f.js";import"./UserOrTeamBadge.bf49a816.js";import"./EntityLink.101d699f.js";import"./SynapseVideo.4652fc0e.js";import"./IconList.c1c0cda3.js";import"./UserCardList.f3efa500.js";const mo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const lo=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,lo as __namedExportsOrder,mo as default};
