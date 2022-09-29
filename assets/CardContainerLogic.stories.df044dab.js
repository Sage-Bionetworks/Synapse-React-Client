import{G as o,P as r,O as n}from"./index.c285f2ad.js";import{C as i}from"./CardContainerLogic.4c2772e2.js";import{j as s}from"./jsx-runtime.94e3dcbc.js";import"./index.189336ba.js";import"./iframe.7112cc2f.js";import"./withStyles.25512efa.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a8f3dea8.js";import"./index.57d09176.js";import"./Button.ee922916.js";import"./Transition.aafae1a0.js";import"./index.35ce73ec.js";import"./isArray.74b811f1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.972646c7.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.87ab6772.js";import"./use-deep-compare-effect.esm.46a58aa4.js";import"./uniq.4ad2b73b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.f3d0fd1c.js";import"./isSymbol.9ddd9e86.js";import"./_cacheHas.cd26227f.js";import"./without.227ff1e6.js";import"./uniqueId.5395311d.js";import"./_Set.c5c4b096.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f94adadb.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.6490189f.js";import"./Tooltip.7e80f23c.js";import"./createSvgIcon.aba3ff90.js";import"./slicedToArray.e72f11da.js";import"./useTheme.90c94c01.js";import"./makeStyles.13257dd8.js";import"./InfoOutlined.c8be42fa.js";import"./ElementWithTooltip.7d361f05.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2bb7fbbe.js";import"./Modal.7dcfaa17.js";import"./useWaitForDOMRef.bc6c94c4.js";import"./useWillUnmount.84231f67.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e98e3e3e.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d2cfd964.js";import"./queryUtils.22849ec3.js";import"./useInfiniteQuery.26111c62.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.f4f228fc.js";import"./_baseClone.17fc432f.js";import"./_getTag.3392221e.js";import"./useEntity.d65d96ee.js";import"./useMutation.c5d547ae.js";import"./pick.9facd995.js";import"./Checkbox.833fdcb5.js";import"./Collapse.adc95d49.js";import"./RadioGroup.f950f76d.js";import"./moment.a565bb48.js";import"./RangeSlider.eaa4fa18.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.12497989.js";import"./react-sizeme.44a0d31f.js";import"./Skeleton.01b7e31d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.529ceff5.js";import"./Typography.c058b4a5.js";import"./react-select.esm.215869ba.js";import"./Select-54ac8379.esm.e2fb5a25.js";import"./CustomSelectWidget.21ab911a.js";import"./index.browser.fb81d43f.js";import"./react-intersection-observer.esm.3e3b24c0.js";import"./UserCard.48cdfe31.js";import"./IconCopy.dc0169b8.js";import"./SkeletonTable.7da12e22.js";import"./times.37cc76dc.js";import"./ToastMessage.8eafdcee.js";import"./FullWidthAlert.50b3fdeb.js";import"./Overlay.4edc376f.js";import"./DateFormatter.14ac3320.js";import"./core.esm.9926837d.js";import"./isEmpty.879e59dd.js";import"./isEqual.183dee45.js";import"./union.0417b8dd.js";import"./isString.6ea5fc0d.js";import"./useGetDownloadListStatistics.24d2dedc.js";import"./QueryCount.14514676.js";import"./NoData.a43fb8b4.js";import"./useGetAccessRequirement.73dbc519.js";import"./ManagedACTAccessRequirementStatus.c1aa9693.js";import"./FileUpload.fd2e2f00.js";import"./UserSearchBox.3f6994f4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.235dbb93.js";import"./EntityLink.7a33b226.js";import"./NoSearchResults.aa63dc7b.js";import"./SynapseVideo.8395891c.js";import"./IconList.0d3f8d3d.js";import"./UserCardList.34dd8ba6.js";const so={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react'
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
`,locationsMap:{"generic-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"empty-results":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}},"observation-card":{startLoc:{col:60,line:19},endLoc:{col:1,line:21},startBody:{col:60,line:19},endBody:{col:1,line:21}}}}},title:"Explore/CardContainerLogic",component:i,argTypes:{}},t=e=>s(i,{...e}),a=t.bind({});a.args={sql:"SELECT * FROM syn22095937.4 order by authors asc",limit:2,type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]},sortConfig:{defaultColumn:"authors",defaultDirection:"ASC",sortableColumns:["authors","title","createdOn","journal"]}};const p=t.bind({});p.args={sql:"SELECT * FROM syn22095937.4 WHERE study='not a study value'",type:o,genericCardSchema:{type:r,title:"title",description:"abstract",subTitle:"authors",secondaryLabels:["year","journal","study","grants","DOI"]}};const m=t.bind({});m.args={sql:'SELECT "Observation Submitter Name" as "submitterName", Synapse_id as "submitterUserId", "Observation Time" as "time", "Observation Time Units" as "timeUnits", "Observation Text" as "text", "Observation Type" as "tag" FROM syn26344832 WHERE "Observation Time" IS NOT NULL',type:n,limit:3};const ao=["GenericCard","EmptyResults","ObservationCard"];export{p as EmptyResults,a as GenericCard,m as ObservationCard,ao as __namedExportsOrder,so as default};
