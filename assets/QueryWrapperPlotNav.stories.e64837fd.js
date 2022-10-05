import{Q as e}from"./CardContainerLogic.65b099cd.js";import{G as n,aL as r}from"./index.a1936379.js";import{j as i}from"./jsx-runtime.af56d2f4.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.f2ce4d84.js";import"./use-deep-compare-effect.esm.60be9ac1.js";import"./uniq.5db71bfa.js";import"./_baseSlice.50189bc5.js";import"./toInteger.66d32cd8.js";import"./isSymbol.691d7973.js";import"./isArray.05e742d7.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.288689e2.js";import"./_cacheHas.e498e8a2.js";import"./without.06c5a2bd.js";import"./uniqueId.fe0a6f5d.js";import"./_Set.739f8f8a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.6198377b.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.c0856984.js";import"./SvgIcon.fd305cf0.js";import"./withStyles.95bfae1f.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.4363549c.js";import"./createSvgIcon.c99f3a66.js";import"./slicedToArray.e72f11da.js";import"./index.34222f2e.js";import"./iframe.51f26e37.js";import"./useTheme.f557cee5.js";import"./Transition.66d770ee.js";import"./makeStyles.0eb241f0.js";import"./InfoOutlined.8f86cf66.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.a938605e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.07d6548d.js";import"./Modal.62623140.js";import"./Alert.b7090dbd.js";import"./useWaitForDOMRef.7c7cad70.js";import"./useWillUnmount.7ff8c062.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.abd0b162.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.7db17a6c.js";import"./queryUtils.2f601fb6.js";import"./useInfiniteQuery.cc62287f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.64f407e4.js";import"./_baseClone.8b67dcaf.js";import"./_getTag.69b57b30.js";import"./useEntity.94a0f4bb.js";import"./useMutation.ab9dcaa8.js";import"./pick.21d20b3f.js";import"./Checkbox.1aab543e.js";import"./Collapse.65e9209c.js";import"./RadioGroup.8a51300e.js";import"./moment.a565bb48.js";import"./RangeSlider.469608ef.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.9d9616a9.js";import"./react-sizeme.e05ae4a4.js";import"./Skeleton.b1045233.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ccaf5fac.js";import"./Typography.add999d3.js";import"./react-select.esm.46680d71.js";import"./Select-54ac8379.esm.f2d2d1c1.js";import"./CustomSelectWidget.99b3c48d.js";import"./index.browser.df438e04.js";import"./react-intersection-observer.esm.589d763b.js";import"./UserCard.2d2cc6f4.js";import"./IconCopy.992e7a95.js";import"./SkeletonTable.88eb5d4e.js";import"./times.41b100ff.js";import"./ToastMessage.8993ec69.js";import"./FullWidthAlert.e0d9cdf3.js";import"./Overlay.a4a42f09.js";import"./DateFormatter.5e09e6a5.js";import"./core.esm.5c6f00d3.js";import"./isEmpty.cacb1333.js";import"./isEqual.cb4edeb2.js";import"./union.4ecb3091.js";import"./isString.ecef5eed.js";import"./useGetDownloadListStatistics.ef9f1eb7.js";import"./QueryCount.db2aa427.js";import"./NoData.1468047f.js";import"./useGetAccessRequirement.8ecd9c93.js";import"./ManagedACTAccessRequirementStatus.a005139e.js";import"./FileUpload.6c56e348.js";import"./UserSearchBox.8bae26c4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.309089ec.js";import"./EntityLink.ad9d6fdb.js";import"./NoSearchResults.c9ebbd49.js";import"./SynapseVideo.a550c112.js";import"./IconList.63d9fa55.js";import"./UserCardList.5aa92928.js";const se={parameters:{storySource:{source:`import React from 'react'
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
