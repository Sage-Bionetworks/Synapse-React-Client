import{G as o,P as r,O as n}from"./SynapseConstants.b6aa8bf5.js";import{C as i}from"./CardContainerLogic.4ac1f764.js";import{j as s}from"./jsx-runtime.41b63a18.js";import"./index.95357afa.js";import"./index.fb0baffa.js";import"./iframe.1b6f62a5.js";import"./Button.d66b1296.js";import"./index.57d09176.js";import"./withStyles.bf9f4c29.js";import"./utils.8566b4fb.js";import"./Alert.2d23c399.js";import"./createWithBsPrefix.4703bb5e.js";import"./index.35ce73ec.js";import"./isArray.9516ce6b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d8df91d8.js";import"./sqlFunctions.be6fa141.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.425a36f4.js";import"./useGetInfoFromIds.440675b0.js";import"./use-deep-compare-effect.esm.89e0b2bf.js";import"./uniq.d1401db4.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d13e0983.js";import"./isSymbol.fc7173a4.js";import"./_cacheHas.fa44402d.js";import"./without.b74e3938.js";import"./uniqueId.7743d6ef.js";import"./_Set.cf46f4c7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./Tooltip.50b065de.js";import"./createSvgIcon.3e6e5789.js";import"./makeStyles.3de8ae0d.js";import"./FacetNav.93a63650.js";import"./queryUtils.d3ddbdc4.js";import"./useInfiniteQuery.afb80f09.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.972a710a.js";import"./_baseClone.80c04804.js";import"./_getTag.5b9f1be5.js";import"./NoSearchResults.f5a12ecf.js";import"./NoData.33ecea8a.js";import"./unCamelCase.07e38083.js";import"./useEntity.f187f17a.js";import"./useMutation.75197862.js";import"./pick.d71ecd11.js";import"./isEqual.c98a7e38.js";import"./ElementWithTooltip.a20fbba5.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.83d367d8.js";import"./InfoOutlined.62b2381c.js";import"./Dropdown.1ea1e7ae.js";import"./usePrevious.b2a56b43.js";import"./contains.35f158bd.js";import"./usePopperMarginModifiers.3543b56f.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.f849d68d.js";import"./RadioGroup.42f82ea0.js";import"./moment.a565bb48.js";import"./RangeSlider.a2b8db98.js";import"./factory.4d558efc.js";import"./react-sizeme.6754aec4.js";import"./Skeleton.2b632001.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.8b1b27b2.js";import"./Typography.dc699c3a.js";import"./Modal.493b8aac.js";import"./inheritsLoose.f9ee6081.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.054fdf82.js";import"./SelectionCriteriaPill.5fe230c2.js";import"./Close.a124524c.js";import"./react-select.esm.d77ac0dd.js";import"./Select-54ac8379.esm.a8e92046.js";import"./CustomSelectWidget.95995941.js";import"./index.browser.d13d238d.js";import"./UserCard.7b85d80c.js";import"./IconCopy.6ff102ac.js";import"./SkeletonTable.5fcf404b.js";import"./times.d1737d14.js";import"./ToastMessage.3d8ba4da.js";import"./FullWidthAlert.5cb2b687.js";import"./Overlay.b83155ef.js";import"./WarningModal.460ec494.js";import"./react-intersection-observer.esm.51a65a7f.js";import"./DateFormatter.ae20191a.js";import"./EntityIcon.d51583e3.js";import"./core.esm.4412e42d.js";import"./isEmpty.7f33a473.js";import"./union.b1c15149.js";import"./isString.eb351700.js";import"./useGetDownloadListStatistics.d1d39b56.js";import"./QueryCount.d74d4572.js";import"./useGetAccessRequirement.0e54bbee.js";import"./ManagedACTAccessRequirementStatus.e6c92b93.js";import"./FileUpload.e43615b9.js";import"./UserSearchBox.084d038d.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.b8080351.js";import"./EntityLink.e671807d.js";import"./SynapseVideo.1efe460d.js";import"./IconList.f6f41d07.js";import"./UserCardList.43b2352c.js";const po={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
