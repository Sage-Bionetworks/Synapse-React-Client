import{Q as o}from"./CardContainerLogic.9810a91e.js";import{G as i,N as r}from"./SynapseConstants.290eab74.js";import{j as a}from"./jsx-runtime.23bcdc09.js";import"./index.20c1822f.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./Button.9cfa11f8.js";import"./styled.8da6873c.js";import"./utils.2eab32fe.js";import"./TransitionGroupContext.b9a824ce.js";import"./useTheme.26e47b20.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./index.35ce73ec.js";import"./Fade.5c08504a.js";import"./isArray.1d31a80d.js";import"./getEndpoint.bb7ded34.js";import"./Link.e49ccf51.js";import"./Typography.17940352.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./emotion-react.browser.esm.599684c1.js";import"./sqlFunctions.f9b9cbac.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.bb36e699.js";import"./useGetInfoFromIds.2e06391d.js";import"./use-deep-compare-effect.esm.c436bf33.js";import"./uniq.3868c1f1.js";import"./_baseSlice.50189bc5.js";import"./toInteger.dfc8aa00.js";import"./isSymbol.017a619a.js";import"./_cacheHas.990f1aa2.js";import"./without.cde801d5.js";import"./uniqueId.5a455c2a.js";import"./_Set.ca1709e5.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.828b0ea4.js";import"./queryUtils.19a52aee.js";import"./useInfiniteQuery.6d6d1422.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.a4dd16c1.js";import"./_baseClone.5f0a5f2c.js";import"./_getTag.6f0edf19.js";import"./NoSearchResults.939072af.js";import"./NoData.da21ba5e.js";import"./unCamelCase.07e38083.js";import"./useEntity.9c9803bf.js";import"./useMutation.a00e5fbd.js";import"./pick.7185c6d7.js";import"./isEqual.325afd29.js";import"./ElementWithTooltip.5a678880.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.1982fde5.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./InfoOutlined.61048ddd.js";import"./Dropdown.824bdf6d.js";import"./usePrevious.f1fd94eb.js";import"./contains.e26e64f1.js";import"./usePopperMarginModifiers.2032f396.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.4c21f830.js";import"./RadioGroup.b1b3d150.js";import"./dayjs.min.175e5ee6.js";import"./RangeSlider.80a9f111.js";import"./factory.945e3686.js";import"./react-sizeme.50cdb1a3.js";import"./Skeleton.93cf864e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.0123b906.js";import"./Modal.fcfac98b.js";import"./inheritsLoose.efe8b24a.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.1d1fe719.js";import"./SelectionCriteriaPill.d4d12bc2.js";import"./Close.0f2d06e3.js";import"./react-select.esm.cd1a70c9.js";import"./Select-54ac8379.esm.6a208b47.js";import"./CustomSelectWidget.f29cd2d8.js";import"./index.browser.e71d7dd0.js";import"./UserCard.b277597c.js";import"./IconCopy.3d0604ac.js";import"./SkeletonTable.7a076046.js";import"./times.e12d7030.js";import"./ToastMessage.52d73997.js";import"./FullWidthAlert.465c2909.js";import"./Overlay.177b926b.js";import"./WarningModal.8ba465c6.js";import"./react-intersection-observer.esm.8699b4f1.js";import"./DateFormatter.6d192042.js";import"./utc.9b4935b5.js";import"./EntityIcon.cd2765eb.js";import"./core.esm.6dd03b50.js";import"./isEmpty.9a508fc8.js";import"./union.1195c535.js";import"./isString.3a866e5e.js";import"./relativeTime.efd786e6.js";import"./useGetDownloadListStatistics.e5a0a533.js";import"./QueryCount.d35559d0.js";import"./useGetAccessRequirement.cee49857.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.af585b5c.js";import"./UserSearchBox.c1fe0c21.js";import"./UserOrTeamBadge.7709bc8d.js";import"./EntityLink.2e71dd10.js";import"./SynapseVideo.81bbfb30.js";import"./IconList.c4ebe30a.js";import"./UserCardList.4bff2bca.js";const Lo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view-with-locked-column":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},dataset:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"dataset-collection":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=n=>a(o,{...n}),s=e.bind({});s.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const t=e.bind({});t.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l={sql:"SELECT * FROM syn11346063.28",additionalFilters:[{concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",columnName:"study",function:"HAS_LIKE",values:["ADMC_ADNI_BakerLipidomics"]}]},m=e.bind({});m.args={...t.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(l),lockedColumn:{columnName:"study",value:""}};const p=e.bind({});p.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const c=e.bind({});c.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const To=["Cards","FileView","FileViewWithLockedColumn","Dataset","DatasetCollection"];export{s as Cards,p as Dataset,c as DatasetCollection,t as FileView,m as FileViewWithLockedColumn,To as __namedExportsOrder,Lo as default};
