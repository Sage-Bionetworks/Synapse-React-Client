import{G as o,P as r,O as n}from"./SynapseConstants.4792b5b5.js";import{C as i}from"./AccessRequirementList.3e05cfbf.js";import{j as s}from"./jsx-runtime.8ee42ca4.js";import"./index.6e226ad1.js";import"./index.c68764fa.js";import"./iframe.57558d86.js";import"./Button.32185a3f.js";import"./styled.cab085b6.js";import"./Tooltip.53b3d1bd.js";import"./SvgIcon.e7d9e8d5.js";import"./useTheme.a650b60c.js";import"./TransitionGroupContext.d40bca5e.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./createWithBsPrefix.1fcef933.js";import"./divWithClassName.4fa3ddf0.js";import"./index.35ce73ec.js";import"./Fade.8d5d2209.js";import"./isArray.649754a9.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9744025b.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./emotion-react.browser.esm.755544ae.js";import"./Link.f5b0fcd9.js";import"./Typography.dc67c84b.js";import"./Button.73b6fb95.js";import"./useGetInfoFromIds.7d1c77e1.js";import"./use-deep-compare-effect.esm.9021590c.js";import"./uniq.c7c3eeb4.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c3531c4d.js";import"./isSymbol.4962e9a9.js";import"./_cacheHas.81596850.js";import"./without.4399bd14.js";import"./uniqueId.d7153eca.js";import"./_Set.07f8d416.js";import"./_setToArray.a82100c8.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.84b042dc.js";import"./Modal.5b3f34eb.js";import"./contains.3c554215.js";import"./inheritsLoose.c323c5df.js";import"./usePrevious.5f3c6b24.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.b0e44e89.js";import"./UserCard.0ebf5c75.js";import"./IconCopy.fedbd76c.js";import"./SkeletonTable.7edc5c07.js";import"./times.2c182ff5.js";import"./Skeleton.3af709e7.js";import"./ToastMessage.43b52073.js";import"./FullWidthAlert.a54f59d5.js";import"./Overlay.0bda75db.js";import"./usePopperMarginModifiers.78486f26.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.457fb7fa.js";import"./useInfiniteQuery.c55a2f77.js";import"./DateFormatter.d036e8e7.js";import"./dayjs.min.605c11f2.js";import"./utc.c1f9545e.js";import"./EntityIcon.b3ec5c45.js";import"./core.esm.c4390328.js";import"./pick.5830cd73.js";import"./_baseClone.3c4d3b67.js";import"./isEmpty.befb9208.js";import"./isEqual.16b05841.js";import"./index.browser.ddb6d3b8.js";import"./union.d4e5124f.js";import"./CustomSelectWidget.3ad03376.js";import"./Select-54ac8379.esm.e007142b.js";import"./isString.dee50017.js";import"./factory.1c3ac14e.js";import"./sqlFunctions.e821b8e9.js";import"./QueryFilter.78bffa27.js";import"./useEntity.37947b1b.js";import"./useMutation.ac2022a1.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.d7245251.js";import"./queryUtils.fd75f684.js";import"./cloneDeep.afef7fdc.js";import"./NoSearchResults.c784f53b.js";import"./NoData.fa2db807.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.a8bb807d.js";import"./Dropdown.fb14a480.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.c4d81bdc.js";import"./RadioGroup.8d8e38c4.js";import"./RangeSlider.fba192e5.js";import"./react-sizeme.38aa0109.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.ad2bd521.js";import"./Close.b6d5cd77.js";import"./relativeTime.5a20f2dd.js";import"./useDownloadList.2d5013fe.js";import"./QueryCount.c03f6405.js";import"./react-select.esm.b272b6ca.js";import"./IconList.4d01a009.js";import"./UserCardList.a770fc3f.js";import"./useAccessRequirements.94c7e453.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.a3e58444.js";import"./UserSearchBox.95ebc121.js";import"./UserOrTeamBadge.1c9fb323.js";import"./EntityLink.3f5e6d34.js";import"./SynapseVideo.1f25d323.js";const yo={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
