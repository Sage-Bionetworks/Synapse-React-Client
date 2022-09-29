import{Q as e}from"./CardContainerLogic.4c2772e2.js";import{G as n,aK as r}from"./index.c285f2ad.js";import{j as i}from"./jsx-runtime.94e3dcbc.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.87ab6772.js";import"./use-deep-compare-effect.esm.46a58aa4.js";import"./uniq.4ad2b73b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.f3d0fd1c.js";import"./isSymbol.9ddd9e86.js";import"./isArray.74b811f1.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.ee922916.js";import"./_cacheHas.cd26227f.js";import"./without.227ff1e6.js";import"./uniqueId.5395311d.js";import"./_Set.c5c4b096.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f94adadb.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.6490189f.js";import"./SvgIcon.972646c7.js";import"./withStyles.25512efa.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.7e80f23c.js";import"./createSvgIcon.aba3ff90.js";import"./slicedToArray.e72f11da.js";import"./index.189336ba.js";import"./iframe.7112cc2f.js";import"./useTheme.90c94c01.js";import"./Transition.aafae1a0.js";import"./makeStyles.13257dd8.js";import"./InfoOutlined.c8be42fa.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.7d361f05.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.2bb7fbbe.js";import"./Modal.7dcfaa17.js";import"./Alert.a8f3dea8.js";import"./useWaitForDOMRef.bc6c94c4.js";import"./useWillUnmount.84231f67.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e98e3e3e.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d2cfd964.js";import"./queryUtils.22849ec3.js";import"./useInfiniteQuery.26111c62.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.f4f228fc.js";import"./_baseClone.17fc432f.js";import"./_getTag.3392221e.js";import"./useEntity.d65d96ee.js";import"./useMutation.c5d547ae.js";import"./pick.9facd995.js";import"./Checkbox.833fdcb5.js";import"./Collapse.adc95d49.js";import"./RadioGroup.f950f76d.js";import"./moment.a565bb48.js";import"./RangeSlider.eaa4fa18.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.12497989.js";import"./react-sizeme.44a0d31f.js";import"./Skeleton.01b7e31d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.529ceff5.js";import"./Typography.c058b4a5.js";import"./react-select.esm.215869ba.js";import"./Select-54ac8379.esm.e2fb5a25.js";import"./CustomSelectWidget.21ab911a.js";import"./index.browser.fb81d43f.js";import"./react-intersection-observer.esm.3e3b24c0.js";import"./UserCard.48cdfe31.js";import"./IconCopy.dc0169b8.js";import"./SkeletonTable.7da12e22.js";import"./times.37cc76dc.js";import"./ToastMessage.8eafdcee.js";import"./FullWidthAlert.50b3fdeb.js";import"./Overlay.4edc376f.js";import"./DateFormatter.14ac3320.js";import"./core.esm.9926837d.js";import"./isEmpty.879e59dd.js";import"./isEqual.183dee45.js";import"./union.0417b8dd.js";import"./isString.6ea5fc0d.js";import"./useGetDownloadListStatistics.24d2dedc.js";import"./QueryCount.14514676.js";import"./NoData.a43fb8b4.js";import"./useGetAccessRequirement.73dbc519.js";import"./ManagedACTAccessRequirementStatus.c1aa9693.js";import"./FileUpload.fd2e2f00.js";import"./UserSearchBox.3f6994f4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.235dbb93.js";import"./EntityLink.7a33b226.js";import"./NoSearchResults.aa63dc7b.js";import"./SynapseVideo.8395891c.js";import"./IconList.0d3f8d3d.js";import"./UserCardList.34dd8ba6.js";const se={parameters:{storySource:{source:`import React from 'react'
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
