import{Q as o}from"./CardContainerLogic.dd3b6d75.js";import{G as i,N as r,w as a}from"./SynapseConstants.290eab74.js";import{j as s}from"./jsx-runtime.e5135412.js";import"./index.71230ff4.js";import"./index.42a076b6.js";import"./iframe.4ad064c2.js";import"./Button.63ea176a.js";import"./styled.a3d17504.js";import"./utils.1cb744a4.js";import"./TransitionGroupContext.772c7333.js";import"./useTheme.2346f1e9.js";import"./Alert.4963c7c8.js";import"./hook.85ae367a.js";import"./createWithBsPrefix.315d8008.js";import"./divWithClassName.1423062f.js";import"./index.35ce73ec.js";import"./Fade.d1d2b883.js";import"./isArray.bee4a7aa.js";import"./getEndpoint.bb7ded34.js";import"./Link.1aa3c056.js";import"./Typography.1aa4ae65.js";import"./Button.e272e789.js";import"./ButtonBase.ace65aea.js";import"./emotion-react.browser.esm.078eca06.js";import"./sqlFunctions.57836cf5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.f6f25762.js";import"./useGetInfoFromIds.f42eb5d5.js";import"./use-deep-compare-effect.esm.8703b180.js";import"./uniq.a6b08cac.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5990edab.js";import"./isSymbol.0f809a04.js";import"./_cacheHas.9fb171dd.js";import"./without.26bee3cb.js";import"./uniqueId.c448d212.js";import"./_Set.994e97c6.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.e3964af5.js";import"./queryUtils.8210254b.js";import"./useInfiniteQuery.b7e5a6aa.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ef561af6.js";import"./_baseClone.dcb08082.js";import"./_getTag.fbf18d30.js";import"./NoSearchResults.44968580.js";import"./NoData.9d11c959.js";import"./unCamelCase.07e38083.js";import"./useEntity.38c12d6c.js";import"./useMutation.3762bbaa.js";import"./pick.7210121c.js";import"./isEqual.54206e34.js";import"./ElementWithTooltip.6c0350ba.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.c42d8cfc.js";import"./Tooltip.512cb681.js";import"./createSvgIcon.a94a426c.js";import"./InfoOutlined.1b7aba21.js";import"./Dropdown.23d7d6c9.js";import"./usePrevious.6b2d96e9.js";import"./contains.6f7ec0ab.js";import"./usePopperMarginModifiers.f1f361c8.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6b247052.js";import"./RadioGroup.0f192c4c.js";import"./dayjs.min.546fe469.js";import"./RangeSlider.bf782f2e.js";import"./factory.b6e552e4.js";import"./react-sizeme.4a820ce0.js";import"./Skeleton.6f010adf.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e187fc8f.js";import"./Modal.ea5ae4d0.js";import"./inheritsLoose.c10d0fd3.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.9e9d0981.js";import"./SelectionCriteriaPill.b5c5a042.js";import"./Close.9a15ec8f.js";import"./react-select.esm.e600ae2b.js";import"./Select-54ac8379.esm.ecc76f78.js";import"./CustomSelectWidget.61cecce6.js";import"./index.browser.14eee51c.js";import"./UserCard.f43fc2a4.js";import"./IconCopy.d207b265.js";import"./SkeletonTable.d5a10fc2.js";import"./times.92d567ce.js";import"./ToastMessage.14ac3753.js";import"./FullWidthAlert.dbd163b4.js";import"./Overlay.0cf59319.js";import"./WarningModal.68f6a016.js";import"./react-intersection-observer.esm.28d6b5d3.js";import"./DateFormatter.c57874a5.js";import"./utc.1ed3407a.js";import"./EntityIcon.b4c3d0c8.js";import"./core.esm.06b27e4f.js";import"./isEmpty.236d890e.js";import"./union.93498efa.js";import"./isString.582e0c86.js";import"./relativeTime.358f1b58.js";import"./useGetDownloadListStatistics.99b5f817.js";import"./QueryCount.482d314d.js";import"./useGetAccessRequirement.b8c42ad8.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.eadf91ed.js";import"./UserSearchBox.f5cec04f.js";import"./UserOrTeamBadge.1462357f.js";import"./EntityLink.f56b75a3.js";import"./SynapseVideo.46108d56.js";import"./IconList.11961a8c.js";import"./UserCardList.d28c131b.js";const Do={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import QueryWrapperPlotNav from './QueryWrapperPlotNav'
import {
  EXPERIMENTAL_TOOL,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
} from '../../utils/SynapseConstants'
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

export const People = Template.bind({})
People.args = {
  sql: 'SELECT * FROM syn13897207',

  name: 'People Demo',
  sqlOperator: '=',
  hideSqlEditorControl: false,
  shouldDeepLink: false,
  cardConfiguration: {
    type: MEDIUM_USER_CARD,
  },
}
`,locationsMap:{cards:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"file-view":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"file-view-with-locked-column":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},dataset:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"dataset-collection":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},people:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>s(o,{...t}),l=e.bind({});l.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const n=e.bind({});n.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const m={sql:"SELECT * FROM syn11346063.28",additionalFilters:[{concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",columnName:"study",function:"HAS_LIKE",values:["ADMC_ADNI_BakerLipidomics"]}]},p=e.bind({});p.args={...n.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(m),lockedColumn:{columnName:"study",value:""}};const c=e.bind({});c.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const d=e.bind({});d.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const u=e.bind({});u.args={sql:"SELECT * FROM syn13897207",name:"People Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1,cardConfiguration:{type:a}};const bo=["Cards","FileView","FileViewWithLockedColumn","Dataset","DatasetCollection","People"];export{l as Cards,c as Dataset,d as DatasetCollection,n as FileView,p as FileViewWithLockedColumn,u as People,bo as __namedExportsOrder,Do as default};
