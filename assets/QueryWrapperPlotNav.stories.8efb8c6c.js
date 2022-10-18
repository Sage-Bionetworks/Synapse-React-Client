import{Q as o}from"./CardContainerLogic.836d5c1f.js";import{G as n,aR as r}from"./index.845be1a0.js";import{j as i}from"./jsx-runtime.a4497586.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.dc6e91e8.js";import"./use-deep-compare-effect.esm.97258745.js";import"./uniq.a2b94e52.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0f367a79.js";import"./isSymbol.7191624c.js";import"./isArray.c41320ad.js";import"./Button.7ac62e85.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./_cacheHas.5a4b096a.js";import"./without.27df27c9.js";import"./uniqueId.d008468a.js";import"./_Set.0ea9e224.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.c2b44a8a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.840b4acb.js";import"./SvgIcon.22d8eb07.js";import"./withStyles.e58effce.js";import"./Tooltip.a6d04027.js";import"./createSvgIcon.e5aecfe8.js";import"./utils.815e1282.js";import"./index.917fd15d.js";import"./iframe.ee324841.js";import"./makeStyles.589ac29c.js";import"./InfoOutlined.5d54a47c.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.4569d621.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.efcfb1fd.js";import"./Modal.8e373f50.js";import"./Alert.ea5d26f8.js";import"./useWaitForDOMRef.e71a20e5.js";import"./inheritsLoose.3afb7370.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8523f7d7.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.32e180c2.js";import"./queryUtils.a41a3769.js";import"./useInfiniteQuery.61b1e683.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d2ac0db5.js";import"./_baseClone.0d27c7e1.js";import"./_getTag.e16a82bc.js";import"./useEntity.9bdacd03.js";import"./useMutation.ac0673eb.js";import"./pick.e2ee535b.js";import"./Checkbox.e9f9feef.js";import"./RadioGroup.8eea9b11.js";import"./moment.a565bb48.js";import"./RangeSlider.c1a90a81.js";import"./factory.c28b2d87.js";import"./react-sizeme.595c45d1.js";import"./Skeleton.9af51d39.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a29748b1.js";import"./Typography.15373abf.js";import"./Close.0c3b37eb.js";import"./react-select.esm.fa71d62c.js";import"./Select-54ac8379.esm.1b620f4e.js";import"./CustomSelectWidget.05a3828a.js";import"./index.browser.48facac8.js";import"./WarningModal.49e6d1d4.js";import"./react-intersection-observer.esm.360ca53f.js";import"./UserCard.ea6608ec.js";import"./IconCopy.6d9a9cc0.js";import"./SkeletonTable.5f0641c1.js";import"./times.53464203.js";import"./ToastMessage.29ea9537.js";import"./FullWidthAlert.6e6e96b4.js";import"./Overlay.7abe92df.js";import"./DateFormatter.bc7fcbb4.js";import"./core.esm.e85b24d4.js";import"./isEmpty.ce343696.js";import"./isEqual.dcdf7c74.js";import"./union.6518de9c.js";import"./isString.c48687a7.js";import"./useGetDownloadListStatistics.b2b3a576.js";import"./QueryCount.e6efbfd3.js";import"./NoData.35d75376.js";import"./useGetAccessRequirement.20a2228d.js";import"./ManagedACTAccessRequirementStatus.3d74029d.js";import"./FileUpload.897dc886.js";import"./UserSearchBox.1dfa0f09.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.34f13a28.js";import"./EntityLink.b8238cd5.js";import"./NoSearchResults.705442e7.js";import"./SynapseVideo.d503a679.js";import"./IconList.6148c9b2.js";import"./UserCardList.6980500a.js";const oo={parameters:{storySource:{source:`import React from 'react'
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
