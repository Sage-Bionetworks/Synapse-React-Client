import{G as o,P as r,O as n}from"./SynapseConstants.d6ba6a96.js";import{C as i}from"./HelpPopover.dd19c094.js";import{j as s}from"./jsx-runtime.cae1efce.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./usePopperMarginModifiers.fb0d551a.js";import"./contains.44df3564.js";import"./createWithBsPrefix.df7fa21f.js";import"./Button.7727704e.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.02efa7e4.js";import"./Fade.31660acb.js";import"./styled.893b6037.js";import"./useTheme.6ac8e7e3.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./TransitionGroupContext.bc025aa2.js";import"./isArray.175db850.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./emotion-react.browser.esm.0f705697.js";import"./Link.c5d35787.js";import"./Typography.334f7e13.js";import"./Button.af90093c.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./divWithClassName.5b633697.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.476e63ba.js";import"./Modal.04b387a6.js";import"./inheritsLoose.beda7355.js";import"./usePrevious.0a77b2e0.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.6ca94db7.js";import"./UserCard.60a81442.js";import"./IconCopy.158d0c53.js";import"./SkeletonTable.ef7abf61.js";import"./times.df010a42.js";import"./toInteger.3ed0cd2f.js";import"./isSymbol.87b57363.js";import"./Skeleton.5c3ed137.js";import"./ToastMessage.8e99f4ca.js";import"./FullWidthAlert.9d4713f3.js";import"./uniqueId.fbe1b45a.js";import"./Overlay.879f6140.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.6aa9d3d4.js";import"./useInfiniteQuery.24bd729c.js";import"./DateFormatter.70c7721e.js";import"./dayjs.min.12a0da3a.js";import"./utc.ceb4b169.js";import"./EntityIcon.3f8a3670.js";import"./core.esm.e918ee34.js";import"./pick.9031c658.js";import"./_baseClone.aa2f9924.js";import"./_Set.1fb82960.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.9c14b5b1.js";import"./isEqual.9e278194.js";import"./_cacheHas.ea09e558.js";import"./_setToArray.a82100c8.js";import"./index.browser.505b2ef5.js";import"./union.43cc5201.js";import"./without.ff72cb8b.js";import"./uniq.eb931bff.js";import"./CustomSelectWidget.59b7944a.js";import"./Select-54ac8379.esm.e88de38a.js";import"./isString.3cdad83a.js";import"./factory.8a69d8c4.js";import"./sqlFunctions.2fb5266e.js";import"./QueryFilter.aaa17d3c.js";import"./useEntity.140994a4.js";import"./useMutation.0b342796.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.31a50869.js";import"./queryUtils.d83a955a.js";import"./cloneDeep.3a71c714.js";import"./use-deep-compare-effect.esm.f099afc0.js";import"./NoSearchResults.b80cc10f.js";import"./NoData.d1a26232.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.3e4ddfb9.js";import"./Dropdown.a5829948.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.83017b65.js";import"./Checkbox.f51c45ab.js";import"./RadioGroup.3095c202.js";import"./RangeSlider.6882fc88.js";import"./react-sizeme.ccf3609b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.d1a268e5.js";import"./Close.0da26c60.js";import"./relativeTime.e2bd5bcb.js";import"./useDownloadList.ebabec88.js";import"./QueryCount.8660cea9.js";import"./react-select.esm.62a82fbb.js";import"./IconList.5def42e9.js";import"./UserCardList.db0a81ca.js";import"./useAccessRequirements.7ffa9aac.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.7be3edb4.js";import"./UserSearchBox.543e3e02.js";import"./UserOrTeamBadge.fc3f8497.js";import"./EntityLink.a4968051.js";import"./SynapseVideo.1670d9eb.js";const yo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const uo=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,uo as __namedExportsOrder,yo as default};
