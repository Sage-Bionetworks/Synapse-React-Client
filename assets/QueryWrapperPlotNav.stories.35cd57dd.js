import{Q as e}from"./CardContainerLogic.85094e92.js";import{G as n,aL as r}from"./index.b742691b.js";import{j as i}from"./jsx-runtime.e50ee014.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.d89abd16.js";import"./use-deep-compare-effect.esm.20647236.js";import"./uniq.f14349e8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5d2f4b0e.js";import"./isSymbol.5d0c998d.js";import"./isArray.bf4f000b.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.3658dda2.js";import"./_cacheHas.82e3ba6e.js";import"./without.269ffb6f.js";import"./uniqueId.b8a4404e.js";import"./_Set.d949c813.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.e4714c7a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.f9f187ed.js";import"./SvgIcon.c8899896.js";import"./withStyles.8f619333.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./slicedToArray.e72f11da.js";import"./index.f04aa5e6.js";import"./iframe.ed5db637.js";import"./useTheme.f39e60b9.js";import"./Transition.bad86374.js";import"./makeStyles.436c1230.js";import"./InfoOutlined.06cf4881.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.34c4c875.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.6b97ac7e.js";import"./Modal.dbfb920f.js";import"./Alert.9942996b.js";import"./useWaitForDOMRef.19e54275.js";import"./useWillUnmount.c562dce3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.cad35c33.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.5fbb561e.js";import"./queryUtils.b793be1c.js";import"./useInfiniteQuery.be01094f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.0414e1ff.js";import"./_baseClone.711d1a04.js";import"./_getTag.291304b4.js";import"./useEntity.44357283.js";import"./useMutation.6d9babbc.js";import"./pick.08c10745.js";import"./Checkbox.d21081cb.js";import"./Collapse.261e02d1.js";import"./RadioGroup.dcb4db4a.js";import"./moment.a565bb48.js";import"./RangeSlider.dd25bc15.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.1a0d6246.js";import"./react-sizeme.6eb3369a.js";import"./Skeleton.09528c75.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.4753e31c.js";import"./Typography.710a5cec.js";import"./react-select.esm.34809225.js";import"./Select-54ac8379.esm.e66ee859.js";import"./CustomSelectWidget.a78e83ff.js";import"./index.browser.f19486ac.js";import"./react-intersection-observer.esm.ad9bf078.js";import"./UserCard.2fd34122.js";import"./IconCopy.e7e13389.js";import"./SkeletonTable.fbfdf495.js";import"./times.193d0ecb.js";import"./ToastMessage.c7c8ad52.js";import"./FullWidthAlert.dc80d875.js";import"./Overlay.9ef918a3.js";import"./DateFormatter.ff205244.js";import"./core.esm.506cff9d.js";import"./isEmpty.67b3a200.js";import"./isEqual.eb83054b.js";import"./union.e911ba3a.js";import"./isString.77865ac7.js";import"./useGetDownloadListStatistics.4e723e09.js";import"./QueryCount.328adff2.js";import"./NoData.7f1bc903.js";import"./useGetAccessRequirement.1e37d564.js";import"./ManagedACTAccessRequirementStatus.65fdeea6.js";import"./FileUpload.d40b695f.js";import"./UserSearchBox.7d6d6541.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.2a022306.js";import"./EntityLink.e38d8006.js";import"./NoSearchResults.04e1840e.js";import"./SynapseVideo.79cfe0f1.js";import"./IconList.842b4f10.js";import"./UserCardList.83f186e8.js";const se={parameters:{storySource:{source:`import React from 'react'
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
