import{Q as o}from"./CardContainerLogic.da758215.js";import{G as n,aR as r}from"./index.f0d19726.js";import{j as i}from"./jsx-runtime.4ed473f6.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.38c666e1.js";import"./use-deep-compare-effect.esm.6d2ce1a1.js";import"./uniq.9de4015f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7b9ab0b9.js";import"./isSymbol.24e18969.js";import"./isArray.1c017e06.js";import"./Button.c5f20cc4.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./_cacheHas.efaa38b2.js";import"./without.27a5177f.js";import"./uniqueId.021a8dc5.js";import"./_Set.daed5fd0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.f6e82d52.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.8a81e89b.js";import"./SvgIcon.d67caae4.js";import"./withStyles.78cfa842.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./utils.75253d0f.js";import"./index.02b86482.js";import"./iframe.b5feb82b.js";import"./makeStyles.dc0e46d4.js";import"./InfoOutlined.ab4f4d01.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.b0001074.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.40037d76.js";import"./Modal.9b653448.js";import"./Alert.a88bb07f.js";import"./useWaitForDOMRef.8efcf25e.js";import"./inheritsLoose.770f8727.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.a69073a2.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e19b8b94.js";import"./queryUtils.e30d5f04.js";import"./useInfiniteQuery.4e1afba3.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b72e9c73.js";import"./_baseClone.9b5f1ba9.js";import"./_getTag.fae99e50.js";import"./useEntity.22931e79.js";import"./useMutation.fce6b629.js";import"./pick.5b898932.js";import"./Checkbox.03065006.js";import"./RadioGroup.4063cb90.js";import"./moment.a565bb48.js";import"./RangeSlider.a961b08b.js";import"./factory.4c95ade6.js";import"./react-sizeme.855188a3.js";import"./Skeleton.1c1dc171.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a8097300.js";import"./Typography.742205fe.js";import"./Close.d121cd8d.js";import"./react-select.esm.29ffe28c.js";import"./Select-54ac8379.esm.783ef3ce.js";import"./CustomSelectWidget.df3cace7.js";import"./index.browser.3f673f01.js";import"./WarningModal.2decb7b9.js";import"./react-intersection-observer.esm.2f02f02c.js";import"./UserCard.62605ce0.js";import"./IconCopy.536ed2bb.js";import"./SkeletonTable.09b1c379.js";import"./times.c42e571b.js";import"./ToastMessage.576eb4d8.js";import"./FullWidthAlert.2db361a7.js";import"./Overlay.eafb065e.js";import"./DateFormatter.f67e8fd7.js";import"./core.esm.18dd4a62.js";import"./isEmpty.56410ed1.js";import"./isEqual.3c63a371.js";import"./union.97ae755f.js";import"./isString.c58b182a.js";import"./useGetDownloadListStatistics.e88301d5.js";import"./QueryCount.93ac4b57.js";import"./NoData.f416e565.js";import"./useGetAccessRequirement.939fa1ec.js";import"./ManagedACTAccessRequirementStatus.b9ffa0ec.js";import"./FileUpload.e909bde4.js";import"./UserSearchBox.65acd310.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.7feeccf6.js";import"./EntityLink.cc63f57a.js";import"./NoSearchResults.f7877fe5.js";import"./SynapseVideo.49a47260.js";import"./IconList.9a1ff75a.js";import"./UserCardList.4c2bc9bc.js";const oo={parameters:{storySource:{source:`import React from 'react'
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
