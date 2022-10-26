import{Q as o}from"./CardContainerLogic.61d570e4.js";import{G as n,aK as r}from"./index.1b5679ea.js";import{j as i}from"./jsx-runtime.eafcb716.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.dcdb7bde.js";import"./use-deep-compare-effect.esm.32d4302a.js";import"./uniq.a7654786.js";import"./_baseSlice.50189bc5.js";import"./toInteger.877b19a2.js";import"./isSymbol.4226a630.js";import"./isArray.58b2754e.js";import"./Button.2a9ceb49.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./_cacheHas.4d761572.js";import"./without.ba9da4ea.js";import"./uniqueId.6b2e4177.js";import"./_Set.a93a6693.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.51f27a34.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.625594e1.js";import"./SvgIcon.b014c401.js";import"./withStyles.58225468.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./utils.57f84b27.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./makeStyles.ba00c68d.js";import"./InfoOutlined.f91cf818.js";import"./getEndpoint.bb7ded34.js";import"./FacetNav.ff7b4976.js";import"./queryUtils.dade1562.js";import"./useInfiniteQuery.0ce0255d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.e13ce5b9.js";import"./_baseClone.705a7ff1.js";import"./_getTag.35a70f0d.js";import"./NoSearchResults.c9c55f7c.js";import"./NoData.6637f170.js";import"./ElementWithTooltip.fe39892b.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.7162bc12.js";import"./Modal.b6a2ef3c.js";import"./Alert.3a69b0d7.js";import"./useWaitForDOMRef.883e5955.js";import"./inheritsLoose.bfa631c4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8d1cac1c.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.bf1c9bc1.js";import"./useMutation.884ae33f.js";import"./pick.359c1a4c.js";import"./Checkbox.6d5555ef.js";import"./RadioGroup.e5def0a0.js";import"./moment.a565bb48.js";import"./RangeSlider.f407560b.js";import"./factory.a50674f0.js";import"./react-sizeme.dd262d7d.js";import"./Skeleton.7d351d4d.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.c34152cb.js";import"./Typography.049c6864.js";import"./Close.0b1926a3.js";import"./react-select.esm.b2d311d5.js";import"./Select-54ac8379.esm.349182a5.js";import"./CustomSelectWidget.881b9f9a.js";import"./index.browser.4cb65851.js";import"./WarningModal.c3d992db.js";import"./react-intersection-observer.esm.a05776db.js";import"./UserCard.a35d5b7e.js";import"./IconCopy.f88536dd.js";import"./SkeletonTable.aa50450b.js";import"./times.5f1a3032.js";import"./ToastMessage.a4b76c0b.js";import"./FullWidthAlert.a684bfe0.js";import"./Overlay.ae4ca009.js";import"./DateFormatter.ac7d7939.js";import"./core.esm.70554193.js";import"./isEmpty.31b01d03.js";import"./isEqual.f5035d64.js";import"./union.44090b51.js";import"./isString.19ecf57a.js";import"./useGetDownloadListStatistics.b986f94a.js";import"./QueryCount.6c5b0a28.js";import"./useGetAccessRequirement.d431fc61.js";import"./ManagedACTAccessRequirementStatus.53c8ed1d.js";import"./FileUpload.aa6d26aa.js";import"./UserSearchBox.52f13629.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.98cec68e.js";import"./EntityLink.777bfa8f.js";import"./SynapseVideo.4a63498d.js";import"./IconList.289dc51f.js";import"./UserCardList.0a47a3c6.js";const oo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>i(o,{...t}),a=e.bind({});a.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:n,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const s=e.bind({});s.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l=e.bind({});l.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const m=e.bind({});m.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const to=["Cards","FileView","Dataset","DatasetCollection"];export{a as Cards,l as Dataset,m as DatasetCollection,s as FileView,to as __namedExportsOrder,oo as default};
