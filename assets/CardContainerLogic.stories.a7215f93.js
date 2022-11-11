import{G as o,P as r,O as n}from"./SynapseConstants.b6aa8bf5.js";import{C as i}from"./CardContainerLogic.3396ec86.js";import{j as s}from"./jsx-runtime.2b71273f.js";import"./index.3d089af5.js";import"./index.7aa8b9f8.js";import"./iframe.2ab16825.js";import"./Button.9a34c287.js";import"./styled.ffa42780.js";import"./utils.4bc122e2.js";import"./TransitionGroupContext.ec9d4526.js";import"./Alert.dab3d922.js";import"./createWithBsPrefix.64e0cb3b.js";import"./index.35ce73ec.js";import"./isArray.f3e4211e.js";import"./getEndpoint.bb7ded34.js";import"./Link.fcffcbaa.js";import"./Typography.e75e6cdf.js";import"./Button.f0ab2e0d.js";import"./ButtonBase.1d993e3f.js";import"./sqlFunctions.18713ca7.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.d1a5c2d4.js";import"./useGetInfoFromIds.5f634da8.js";import"./use-deep-compare-effect.esm.44ef78ce.js";import"./uniq.ef833a9e.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b7a3730e.js";import"./isSymbol.6a44fdec.js";import"./_cacheHas.0114790d.js";import"./without.e0a6465c.js";import"./uniqueId.775c431b.js";import"./_Set.bc19c004.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.cbcf4a48.js";import"./queryUtils.d71455d5.js";import"./useInfiniteQuery.9dc12884.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d5cf2850.js";import"./_baseClone.4e49c1b9.js";import"./_getTag.46bb0c58.js";import"./NoSearchResults.f592033b.js";import"./NoData.9ac0d394.js";import"./unCamelCase.07e38083.js";import"./useEntity.20292701.js";import"./useMutation.a0a78509.js";import"./pick.64e130de.js";import"./isEqual.18b445fb.js";import"./ElementWithTooltip.0ea67f43.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.31630328.js";import"./Tooltip.7c243246.js";import"./createSvgIcon.8400397d.js";import"./InfoOutlined.49fd3aca.js";import"./Dropdown.86cfdcd3.js";import"./usePrevious.c75e8e8b.js";import"./contains.7e5b5926.js";import"./usePopperMarginModifiers.a1dad7e0.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ee3fd59e.js";import"./RadioGroup.b7c3164f.js";import"./moment.a565bb48.js";import"./RangeSlider.4c50112e.js";import"./factory.4925aa2f.js";import"./react-sizeme.dcf8c0d4.js";import"./Skeleton.aec42867.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9c8df6fc.js";import"./Modal.76abb664.js";import"./inheritsLoose.ec7bf850.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.45bec7c5.js";import"./SelectionCriteriaPill.e52c1527.js";import"./Close.5cfe5581.js";import"./react-select.esm.c1d11ad8.js";import"./Select-54ac8379.esm.e1f0cef1.js";import"./CustomSelectWidget.68c08cc6.js";import"./index.browser.a16f7b2f.js";import"./UserCard.2ecf62d0.js";import"./IconCopy.24e1b7a1.js";import"./SkeletonTable.257b688b.js";import"./times.99997936.js";import"./ToastMessage.486f16ec.js";import"./FullWidthAlert.d57a412d.js";import"./Overlay.b78a7481.js";import"./WarningModal.b01b5a03.js";import"./react-intersection-observer.esm.ede5d37f.js";import"./DateFormatter.656c0705.js";import"./EntityIcon.7fcfa9cd.js";import"./core.esm.c770b2d9.js";import"./isEmpty.0de19e08.js";import"./union.6af1fe91.js";import"./isString.b6bf14ae.js";import"./useGetDownloadListStatistics.1c84e0b3.js";import"./QueryCount.bf26b7bc.js";import"./useGetAccessRequirement.ac090de8.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.96b74be5.js";import"./UserSearchBox.95a380da.js";import"./UserOrTeamBadge.66876747.js";import"./EntityLink.6339cd5b.js";import"./SynapseVideo.7424b0a8.js";import"./IconList.c0271e14.js";import"./UserCardList.52b6e9ed.js";const po={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
