import{Q as o}from"./CardContainerLogic.8a51ae9f.js";import{G as i,N as r}from"./SynapseConstants.290eab74.js";import{j as a}from"./jsx-runtime.e45f5946.js";import"./index.84caca20.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./Button.85a360c3.js";import"./styled.11fa6590.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Typography.33698c6c.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";import"./sqlFunctions.cedc0d99.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.68a47eb2.js";import"./useGetInfoFromIds.b7e31f92.js";import"./use-deep-compare-effect.esm.6947367c.js";import"./uniq.1d7ae387.js";import"./_baseSlice.50189bc5.js";import"./toInteger.836ec642.js";import"./isSymbol.564875b4.js";import"./_cacheHas.a4903518.js";import"./without.046078f0.js";import"./uniqueId.c6c12783.js";import"./_Set.5d4d075d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.b1ef8918.js";import"./queryUtils.5b9bb8c0.js";import"./useInfiniteQuery.8572f9ef.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.53475be9.js";import"./_baseClone.7677870c.js";import"./_getTag.adac27b6.js";import"./NoSearchResults.7acf193a.js";import"./NoData.a9d8f4b7.js";import"./unCamelCase.07e38083.js";import"./useEntity.87d22d65.js";import"./useMutation.33a42727.js";import"./pick.44941d26.js";import"./isEqual.989f48ab.js";import"./ElementWithTooltip.ca2e949f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.fd56a75b.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./InfoOutlined.c1b233d2.js";import"./Dropdown.6d186adc.js";import"./usePrevious.820aff42.js";import"./contains.82fe9acc.js";import"./usePopperMarginModifiers.40113aa3.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7c7046f9.js";import"./RadioGroup.83968d9b.js";import"./moment.a565bb48.js";import"./RangeSlider.973fdfc9.js";import"./factory.371506bb.js";import"./react-sizeme.e3a57323.js";import"./Skeleton.d7dd8f63.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2ae08f91.js";import"./Modal.3cf810c4.js";import"./inheritsLoose.01564ab7.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.fd0babf1.js";import"./SelectionCriteriaPill.5950976b.js";import"./Close.bd4ed5e0.js";import"./react-select.esm.f2c082aa.js";import"./Select-54ac8379.esm.1506e5bc.js";import"./CustomSelectWidget.afd0ca63.js";import"./index.browser.e3fed4e8.js";import"./UserCard.8473dff8.js";import"./IconCopy.9bac9114.js";import"./SkeletonTable.3b39696e.js";import"./times.dc5c8712.js";import"./ToastMessage.dffa6777.js";import"./FullWidthAlert.1145dd98.js";import"./Overlay.2b8a7b39.js";import"./WarningModal.b9cdddf8.js";import"./react-intersection-observer.esm.69fbb5ff.js";import"./DateFormatter.a9cbfa7c.js";import"./EntityIcon.6b3ffc55.js";import"./core.esm.d3bdc97d.js";import"./isEmpty.c7d7f52e.js";import"./union.7d62ae42.js";import"./isString.b5efd261.js";import"./useGetDownloadListStatistics.69268546.js";import"./QueryCount.a23c9445.js";import"./useGetAccessRequirement.0efba7a1.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.3dfa701d.js";import"./UserSearchBox.84eaecbc.js";import"./UserOrTeamBadge.0dc6e448.js";import"./EntityLink.3232d5b6.js";import"./SynapseVideo.b76f842e.js";import"./IconList.7e9376dc.js";import"./UserCardList.45c04af5.js";const Co={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import QueryWrapperPlotNav from './QueryWrapperPlotNav'
import { EXPERIMENTAL_TOOL, GENERIC_CARD } from '../../utils/SynapseConstants'
import { Query } from '../../utils/synapseTypes'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Explore/QueryWrapperPlotNav',
  component: QueryWrapperPlotNav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof QueryWrapperPlotNav>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QueryWrapperPlotNav> = args => (
  <QueryWrapperPlotNav {...args} />
)

export const Cards = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cards.args = {
  name: 'Tools',
  sql: 'SELECT * FROM syn26438037',
  limit: 5,
  defaultShowFacetVisualization: false,
  defaultShowSearchBox: true,
  shouldDeepLink: true,
  searchConfiguration: {
    fullTextSearchHelpURL:
      'https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html',
  },
  cardConfiguration: {
    type: GENERIC_CARD,
    titleLinkConfig: {
      isMarkdown: false,
      baseURL: 'Explore/Tools/DetailsPage',
      URLColumnName: 'resourceId',
      matchColumnName: 'resourceId',
      overrideLinkURLColumnName: 'biobankURL',
      // target: TargetEnum.NEW_WINDOW
    },
    secondaryLabelLimit: 4,
    genericCardSchema: {
      type: EXPERIMENTAL_TOOL,
      title: 'resourceName',
      subTitle: 'resourceType',
      description: 'description',
      secondaryLabels: [
        'rrid',
        'synonyms',
        'cellLineCategory',
        'cellLineDisease',
        'modelofManifestation',
        'backgroundStrain',
        'backgroundSubstrain',
        'animalModelDisease',
        'animalModelOfManifestation',
        'targetAntigen',
        'reactiveSpecies',
        'hostOrganism',
        'specimenTissueType',
        'specimenPreparationMethod',
        'diseaseType',
        'tumorType',
        'specimenFormat',
        'specimenType',
      ],
    },
    labelLinkConfig: [
      {
        isMarkdown: true,
        matchColumnName: 'rrid',
        tooltipText:
          'This is to demo a custom tooltip that describes column data',
      },
    ],
  },
}

export const FileView = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FileView.args = {
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
    columnLinks: [
      {
        matchColumnName: 'study',
        isMarkdown: false,
        baseURL: 'Explore/Studies/DetailsPage',
        URLColumnName: 'Study_Name',
        wrapValueWithParens: true,
      },
      {
        matchColumnName: 'name',
        isMarkdown: false,
        baseURL: 'Explore/Files/DetailsPage',
        URLColumnName: 'FileId',
        overrideValueWithRowID: true,
        wrapValueWithParens: false,
      },
    ],
  },
  searchConfiguration: {
    searchable: [
      'study',
      'dataType',
      'assay',
      'organ',
      'tissue',
      'species',
      'diagnosis',
      'sex',
      'consortium',
      'grant',
      'modelSystemName',
      'treatmentType',
      'specimenID',
      'individualID',
      'individualIdSource',
      'specimenIdSource',
      'resourceType',
      'dataSubtype',
      'metadataType',
      'assayTarget',
      'analysisType',
      'cellType',
      'nucleicAcidSource',
      'fileFormat',
      'group',
      'name',
      'isModelSystem',
      'isConsortiumAnalysis',
      'isMultiSpecimen',
      'metaboliteType',
      'chromosome',
    ],
  },
  shouldDeepLink: true,
  visibleColumnCount: 10,
  rgbIndex: 1,
  name: 'Data',
  sqlOperator: '=',
  sql: 'SELECT * FROM syn11346063.28',
  hideSqlEditorControl: false,
}

const queryWithAdditionalFilter: Query = {
  sql: 'SELECT * FROM syn11346063.28',
  additionalFilters: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
      columnName: 'study',
      function: 'HAS_LIKE',
      values: ['ADMC_ADNI_BakerLipidomics'],
    },
  ],
}

/**
 * This demo contains a filter on a locked column. This type of configuration should hide that the filter on the locked
 * column is applied, making it seem as if the total contents of the table are just the filtered results. Common in
 * DetailsPages in portals.
 */
export const FileViewWithLockedColumn = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FileViewWithLockedColumn.args = {
  ...FileView.args,
  shouldDeepLink: false,
  initQueryJson: JSON.stringify(queryWithAdditionalFilter),
  lockedColumn: {
    columnName: 'study',
    value: '',
  },
}

export const Dataset = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dataset.args = {
  sql: 'SELECT * FROM syn26302617',
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  name: 'Dataset Demo',
  sqlOperator: '=',
  hideSqlEditorControl: false,
  shouldDeepLink: false,
}

export const DatasetCollection = Template.bind({})
DatasetCollection.args = {
  sql: 'SELECT * FROM syn33199585',
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  name: 'Dataset Collection Demo',
  sqlOperator: '=',
  hideSqlEditorControl: false,
  shouldDeepLink: false,
}
`,locationsMap:{cards:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view-with-locked-column":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},dataset:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"dataset-collection":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=n=>a(o,{...n}),s=e.bind({});s.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const t=e.bind({});t.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l={sql:"SELECT * FROM syn11346063.28",additionalFilters:[{concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",columnName:"study",function:"HAS_LIKE",values:["ADMC_ADNI_BakerLipidomics"]}]},m=e.bind({});m.args={...t.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(l),lockedColumn:{columnName:"study",value:""}};const p=e.bind({});p.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const c=e.bind({});c.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const ho=["Cards","FileView","FileViewWithLockedColumn","Dataset","DatasetCollection"];export{s as Cards,p as Dataset,c as DatasetCollection,t as FileView,m as FileViewWithLockedColumn,ho as __namedExportsOrder,Co as default};
