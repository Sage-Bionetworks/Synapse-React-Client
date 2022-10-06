import{Q as o}from"./CardContainerLogic.955ba9f1.js";import{G as n,aM as r}from"./index.7be09227.js";import{j as i}from"./jsx-runtime.deeea9fb.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.6804d36e.js";import"./use-deep-compare-effect.esm.e681acb1.js";import"./uniq.29300fd9.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4180d2d6.js";import"./isSymbol.8f6c3bd1.js";import"./isArray.19812eb5.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.467325a1.js";import"./_cacheHas.09d77e08.js";import"./without.bc35064c.js";import"./uniqueId.b5368ced.js";import"./_Set.fa240adf.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.7341bf4d.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.2cea675a.js";import"./SvgIcon.72adc85a.js";import"./withStyles.f2d2f220.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.ae5e0614.js";import"./createSvgIcon.42b31dcf.js";import"./slicedToArray.e72f11da.js";import"./index.f3b69ce7.js";import"./iframe.96756ded.js";import"./useTheme.966b26ad.js";import"./Transition.9b5aa1a6.js";import"./makeStyles.a83d6931.js";import"./InfoOutlined.887e97b0.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.26e18518.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.c0580144.js";import"./Modal.8952bf32.js";import"./Alert.aa68dfe4.js";import"./useWaitForDOMRef.df84dcc7.js";import"./useWillUnmount.1e6d660a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.77a92501.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e934b198.js";import"./queryUtils.1cad3b90.js";import"./useInfiniteQuery.34e4a159.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.bea30b36.js";import"./_baseClone.afcf1b4f.js";import"./_getTag.3d57da1a.js";import"./useEntity.fb522f45.js";import"./useMutation.f78c5fa2.js";import"./pick.abc56384.js";import"./Checkbox.1692e339.js";import"./Collapse.b4263ab8.js";import"./RadioGroup.ce4dfa3c.js";import"./moment.a565bb48.js";import"./RangeSlider.d04dd5f2.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.f2a5de3b.js";import"./react-sizeme.9d2cf550.js";import"./Skeleton.e0164e1b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.1e547951.js";import"./Typography.b3d032a4.js";import"./react-select.esm.b680f708.js";import"./Select-54ac8379.esm.9670758d.js";import"./CustomSelectWidget.25f76d15.js";import"./index.browser.44f4da07.js";import"./react-intersection-observer.esm.0f86e7bf.js";import"./UserCard.57928c55.js";import"./IconCopy.bfd853e2.js";import"./SkeletonTable.ea2a6145.js";import"./times.5ef5fea7.js";import"./ToastMessage.a987dfc7.js";import"./FullWidthAlert.ab2f1882.js";import"./Overlay.10ea0fdc.js";import"./DateFormatter.d24ca1f5.js";import"./core.esm.b08adb16.js";import"./isEmpty.efef9890.js";import"./isEqual.e98f604d.js";import"./union.65d98886.js";import"./isString.a5518a8e.js";import"./useGetDownloadListStatistics.4c2814c2.js";import"./QueryCount.cf5bd4a3.js";import"./NoData.379563f2.js";import"./useGetAccessRequirement.dfa7608e.js";import"./ManagedACTAccessRequirementStatus.52ee5bc9.js";import"./FileUpload.f0d186b4.js";import"./UserSearchBox.a3764785.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.4ee33f77.js";import"./EntityLink.94602156.js";import"./NoSearchResults.74a28494.js";import"./SynapseVideo.bc9c6e76.js";import"./IconList.aa39c54d.js";import"./UserCardList.bd15903c.js";const ao={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import QueryWrapperPlotNav from './QueryWrapperPlotNav'
import { EXPERIMENTAL_TOOL, GENERIC_CARD } from '../../utils/SynapseConstants'

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
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>i(o,{...t}),a=e.bind({});a.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:n,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const s=e.bind({});s.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l=e.bind({});l.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const m=e.bind({});m.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const so=["Cards","FileView","Dataset","DatasetCollection"];export{a as Cards,l as Dataset,m as DatasetCollection,s as FileView,so as __namedExportsOrder,ao as default};
