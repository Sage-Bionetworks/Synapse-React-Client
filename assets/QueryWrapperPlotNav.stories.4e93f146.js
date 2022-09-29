import{Q as e}from"./CardContainerLogic.b4825774.js";import{G as n,aK as r}from"./index.8b6b728c.js";import{j as i}from"./jsx-runtime.697357f5.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.360fd141.js";import"./use-deep-compare-effect.esm.a5cd2f2d.js";import"./uniq.4d4e171f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.56f52414.js";import"./isSymbol.ff12d775.js";import"./isArray.c87d30d5.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.742355f2.js";import"./_cacheHas.5063ce48.js";import"./without.faf32d56.js";import"./uniqueId.73448b1f.js";import"./_Set.870b3e0a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.d5b3d424.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.77766464.js";import"./SvgIcon.3010e2d4.js";import"./withStyles.14454601.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.1a172c13.js";import"./createSvgIcon.cf9e16cb.js";import"./slicedToArray.e72f11da.js";import"./index.8f0405d3.js";import"./iframe.1d19b668.js";import"./useTheme.44d9e479.js";import"./Transition.375dbede.js";import"./makeStyles.5e65f24d.js";import"./InfoOutlined.35769386.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.bd2827d1.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.534da499.js";import"./Modal.fcbb73c3.js";import"./Alert.bd767cc3.js";import"./useWaitForDOMRef.828b31fe.js";import"./useWillUnmount.9b5a2c88.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.86bb8f57.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.ef0c2b63.js";import"./queryUtils.8071f269.js";import"./useInfiniteQuery.648d993c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.7e1d80be.js";import"./_baseClone.e9a70637.js";import"./_getTag.43dbf38d.js";import"./useEntity.716de0d7.js";import"./useMutation.ee421791.js";import"./pick.3dd38bcb.js";import"./Checkbox.14ab6e33.js";import"./Collapse.6c4bbd9b.js";import"./RadioGroup.8cd23794.js";import"./moment.a565bb48.js";import"./RangeSlider.fc43c71e.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.43beac83.js";import"./react-sizeme.03435528.js";import"./Skeleton.14ea1888.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.8c45d5c3.js";import"./Typography.d498897e.js";import"./react-select.esm.a37ff2e4.js";import"./Select-54ac8379.esm.5a43974c.js";import"./CustomSelectWidget.b46b6751.js";import"./index.browser.76e49d83.js";import"./react-intersection-observer.esm.0e6b35ce.js";import"./UserCard.95d185a6.js";import"./IconCopy.fecaa4ad.js";import"./SkeletonTable.be714a7f.js";import"./times.f176b5a7.js";import"./ToastMessage.fbccec25.js";import"./FullWidthAlert.429d6e5f.js";import"./Overlay.0e18d899.js";import"./DateFormatter.c104830b.js";import"./core.esm.98d33a43.js";import"./isEmpty.d36a7c65.js";import"./isEqual.4209a9ca.js";import"./union.b16e847f.js";import"./isString.c88d0557.js";import"./useGetDownloadListStatistics.05dcccff.js";import"./QueryCount.b94dfcdc.js";import"./NoData.347c723e.js";import"./useGetAccessRequirement.3a16996b.js";import"./ManagedACTAccessRequirementStatus.16249d41.js";import"./FileUpload.8eb3dc40.js";import"./UserSearchBox.f7e6c1aa.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.00129641.js";import"./EntityLink.41f384d3.js";import"./NoSearchResults.cb67c5a2.js";import"./SynapseVideo.2f614016.js";import"./IconList.91d63bd2.js";import"./UserCardList.1dd01475.js";const se={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:e,argTypes:{}},o=t=>i(e,{...t}),a=o.bind({});a.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:n,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const s=o.bind({});s.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l=o.bind({});l.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const m=o.bind({});m.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const le=["Cards","FileView","Dataset","DatasetCollection"];export{a as Cards,l as Dataset,m as DatasetCollection,s as FileView,le as __namedExportsOrder,se as default};
