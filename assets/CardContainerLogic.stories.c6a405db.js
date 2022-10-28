import{G as o,P as r,O as n}from"./SynapseConstants.b6aa8bf5.js";import{C as i}from"./CardContainerLogic.7c5ad173.js";import{j as s}from"./jsx-runtime.e32e0509.js";import"./index.97694b3a.js";import"./index.5045cbed.js";import"./iframe.83901080.js";import"./Button.9a335f28.js";import"./index.57d09176.js";import"./withStyles.43181c03.js";import"./utils.93cc3c4b.js";import"./Alert.1890d96c.js";import"./createWithBsPrefix.eb076d55.js";import"./index.35ce73ec.js";import"./isArray.f12d1068.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.6a1c92b0.js";import"./sqlFunctions.a660c34a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c3d3eddf.js";import"./TypeUtils.a2c41307.js";import"./useGetInfoFromIds.0a154e04.js";import"./use-deep-compare-effect.esm.dd43b526.js";import"./uniq.761fb0b8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.57b1f05f.js";import"./isSymbol.e91009b1.js";import"./_cacheHas.5fe5dab6.js";import"./without.7e9a3297.js";import"./uniqueId.44a1c424.js";import"./_Set.04490f3e.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.4fc0e2fc.js";import"./IconSvg.c4d27427.js";import"./Tooltip.e08987f2.js";import"./createSvgIcon.3a3703dd.js";import"./makeStyles.46d23ebd.js";import"./InfoOutlined.f22ec2f2.js";import"./FacetNav.8171539b.js";import"./queryUtils.806de55d.js";import"./useInfiniteQuery.103bebeb.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.bd25ca37.js";import"./_baseClone.b8e349c4.js";import"./_getTag.2e663a0d.js";import"./NoSearchResults.1994d83f.js";import"./NoData.f1689c62.js";import"./unCamelCase.07e38083.js";import"./useEntity.f6a61b5e.js";import"./useMutation.89b98481.js";import"./pick.18fdaf34.js";import"./isEqual.ee804c54.js";import"./ElementWithTooltip.75d4f6d2.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.7f73793a.js";import"./usePrevious.46fdb48a.js";import"./contains.72bfd5e5.js";import"./usePopperMarginModifiers.82fc73ef.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6c2997fd.js";import"./RadioGroup.90bd6466.js";import"./moment.a565bb48.js";import"./RangeSlider.71872fdc.js";import"./factory.c5ae267e.js";import"./react-sizeme.31d8aaea.js";import"./Skeleton.4b3eac05.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.958957b5.js";import"./Typography.c79b8528.js";import"./Modal.8135d006.js";import"./inheritsLoose.17c3e2eb.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.7cce2362.js";import"./SelectionCriteriaPill.2976b969.js";import"./Close.152ec82d.js";import"./react-select.esm.d0cdd911.js";import"./Select-54ac8379.esm.581490dd.js";import"./CustomSelectWidget.a255ed95.js";import"./index.browser.44df1914.js";import"./WarningModal.6258278a.js";import"./react-intersection-observer.esm.5fd5d043.js";import"./UserCard.ece400b9.js";import"./IconCopy.aaebe1d6.js";import"./SkeletonTable.4d088d12.js";import"./times.14f43a6f.js";import"./ToastMessage.80ffeafc.js";import"./FullWidthAlert.2f8dcb3c.js";import"./Overlay.6daf49cd.js";import"./DateFormatter.5d3d76de.js";import"./core.esm.ec4e8443.js";import"./isEmpty.2363fa72.js";import"./union.fa0eb3f8.js";import"./isString.db30e8df.js";import"./useGetDownloadListStatistics.73fb8407.js";import"./QueryCount.3d9b8a92.js";import"./useGetAccessRequirement.cabfd831.js";import"./ManagedACTAccessRequirementStatus.88c0719f.js";import"./FileUpload.757b08a1.js";import"./UserSearchBox.436d6331.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.859cd8be.js";import"./EntityLink.64362d09.js";import"./SynapseVideo.bd959498.js";import"./IconList.0951ba60.js";import"./UserCardList.02357afc.js";const mo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
