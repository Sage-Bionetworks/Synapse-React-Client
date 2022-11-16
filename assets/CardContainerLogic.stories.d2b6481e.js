import{G as o,P as r,O as n}from"./SynapseConstants.b6aa8bf5.js";import{C as i}from"./CardContainerLogic.06afd42a.js";import{j as s}from"./jsx-runtime.cf19754d.js";import"./index.68bd09f4.js";import"./index.b04ce0ac.js";import"./iframe.bb4f3d50.js";import"./Button.724ba963.js";import"./styled.db2da3d6.js";import"./utils.621f5968.js";import"./TransitionGroupContext.49564fef.js";import"./Alert.00c62036.js";import"./createWithBsPrefix.5ad4e507.js";import"./index.35ce73ec.js";import"./isArray.eece51ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.e3bd49f6.js";import"./Typography.5f784a3a.js";import"./Button.a3c516df.js";import"./ButtonBase.213ee5c8.js";import"./sqlFunctions.8588a52a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.4a4b03fa.js";import"./useGetInfoFromIds.9c4785d9.js";import"./use-deep-compare-effect.esm.82a451e2.js";import"./uniq.2b68584f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.8755c25e.js";import"./isSymbol.c5104d65.js";import"./_cacheHas.83662752.js";import"./without.fb9ecf3e.js";import"./uniqueId.964022b9.js";import"./_Set.feb77c45.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.b5e0d4c1.js";import"./queryUtils.3642b017.js";import"./useInfiniteQuery.6e921c50.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.17c2c9da.js";import"./_baseClone.9bb0a840.js";import"./_getTag.21dbd333.js";import"./NoSearchResults.80935cb9.js";import"./NoData.c3cdc179.js";import"./unCamelCase.07e38083.js";import"./useEntity.c29c28a1.js";import"./useMutation.c6d1756f.js";import"./pick.d6ce1dfc.js";import"./isEqual.e7ed054e.js";import"./ElementWithTooltip.ba397cb2.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.2a376753.js";import"./Tooltip.0925b53e.js";import"./createSvgIcon.4f04198d.js";import"./InfoOutlined.c84a4381.js";import"./Dropdown.f96637bf.js";import"./usePrevious.1220947a.js";import"./contains.cdccf4e2.js";import"./usePopperMarginModifiers.52c89a14.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.08ea4895.js";import"./RadioGroup.f82878ba.js";import"./moment.a565bb48.js";import"./RangeSlider.0bc7d708.js";import"./factory.a95b6b4e.js";import"./react-sizeme.128193e9.js";import"./Skeleton.9037b65a.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a30ece2a.js";import"./Modal.648837f7.js";import"./inheritsLoose.9827a00e.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.7a25338b.js";import"./SelectionCriteriaPill.f5a5ac48.js";import"./Close.2bce18e3.js";import"./react-select.esm.9218a32e.js";import"./Select-54ac8379.esm.679747cc.js";import"./CustomSelectWidget.987458dd.js";import"./index.browser.1cff9475.js";import"./UserCard.83a32219.js";import"./IconCopy.becd3049.js";import"./SkeletonTable.bb55eb7d.js";import"./times.cccc8bac.js";import"./ToastMessage.25510bc7.js";import"./FullWidthAlert.338c252c.js";import"./Overlay.50c4b250.js";import"./WarningModal.3720e479.js";import"./react-intersection-observer.esm.85c6e916.js";import"./DateFormatter.78dd1eef.js";import"./EntityIcon.27f1ecfc.js";import"./core.esm.b497b9ca.js";import"./isEmpty.41ec6983.js";import"./union.fda36a34.js";import"./isString.23541df7.js";import"./useGetDownloadListStatistics.63faa088.js";import"./QueryCount.c4304d87.js";import"./useGetAccessRequirement.7ae4ffe9.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.2693c5e3.js";import"./UserSearchBox.ff0ca92f.js";import"./UserOrTeamBadge.17b3273e.js";import"./EntityLink.8c9f2f24.js";import"./SynapseVideo.f3c5b620.js";import"./IconList.f65ef7d4.js";import"./UserCardList.32ffbdcf.js";const po={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
