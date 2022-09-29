import{Q as e}from"./CardContainerLogic.3cfe2288.js";import{G as n,aG as r}from"./index.68dc45f9.js";import{j as i}from"./jsx-runtime.6c466647.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.37160ba9.js";import"./use-deep-compare-effect.esm.59a8a695.js";import"./uniq.881ae797.js";import"./_baseSlice.50189bc5.js";import"./toInteger.58fbb23b.js";import"./isSymbol.e84dbf07.js";import"./isArray.8f8da701.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.6bac135e.js";import"./_cacheHas.5da960e3.js";import"./without.1e3142d0.js";import"./uniqueId.b6a045ed.js";import"./_Set.16f6c7c4.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.cdc6f276.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.d55eaa4b.js";import"./SvgIcon.ccae0824.js";import"./withStyles.7bec7826.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.a8448a48.js";import"./createSvgIcon.aebcdc24.js";import"./slicedToArray.e72f11da.js";import"./index.836cff5f.js";import"./iframe.d58db294.js";import"./useTheme.94a4bd67.js";import"./Transition.fdaeb9d2.js";import"./makeStyles.0f5b4992.js";import"./InfoOutlined.b03aa53e.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.e718efbb.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.789504d1.js";import"./Modal.e870b920.js";import"./Alert.6302caff.js";import"./useWaitForDOMRef.d7c5dee1.js";import"./useWillUnmount.3d2fd5eb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.29aa4eae.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e18544db.js";import"./queryUtils.798bc848.js";import"./useInfiniteQuery.1c313722.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.00031296.js";import"./_baseClone.cc594dc4.js";import"./_getTag.2bbcfb52.js";import"./useEntity.186b0ec3.js";import"./useMutation.b09ed22d.js";import"./pick.6d11dacb.js";import"./Checkbox.d30401c0.js";import"./Collapse.3ec40aa5.js";import"./RadioGroup.3681d686.js";import"./moment.a565bb48.js";import"./RangeSlider.d5ad57ca.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.c42f2560.js";import"./react-sizeme.cba75d0d.js";import"./Skeleton.78629bcd.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ad9a5942.js";import"./Typography.88b87e8c.js";import"./react-select.esm.6182fa0f.js";import"./Select-54ac8379.esm.6642ddc9.js";import"./CustomSelectWidget.8cf0fafc.js";import"./react-intersection-observer.esm.ed481dc5.js";import"./UserCard.36c5101f.js";import"./IconCopy.489a58ed.js";import"./SkeletonTable.a7c50e8f.js";import"./times.cd1f7524.js";import"./ToastMessage.f1ac94ca.js";import"./FullWidthAlert.6101322c.js";import"./Overlay.cbf5f9b5.js";import"./DateFormatter.dd69913a.js";import"./useGetDownloadListStatistics.5bb3ee43.js";import"./core.esm.529435ff.js";import"./isEmpty.e86902c5.js";import"./_baseIsEqual.bd1f4122.js";import"./index.browser.042c4e1b.js";import"./union.16449719.js";import"./QueryCount.4656ccb2.js";import"./NoData.a418d2e8.js";import"./useGetAccessRequirement.5608db0c.js";import"./ManagedACTAccessRequirementStatus.b88b720b.js";import"./FileUpload.ea555d14.js";import"./UserSearchBox.2aae51b4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.d1d99b88.js";import"./EntityLink.37d6739c.js";import"./NoSearchResults.38aa00d2.js";import"./SynapseVideo.3b575d65.js";import"./IconList.ba0edab6.js";import"./UserCardList.3c8411ce.js";const ae={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:e,argTypes:{}},o=t=>i(e,{...t}),a=o.bind({});a.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:n,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const s=o.bind({});s.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l=o.bind({});l.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const m=o.bind({});m.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const se=["Cards","FileView","Dataset","DatasetCollection"];export{a as Cards,l as Dataset,m as DatasetCollection,s as FileView,se as __namedExportsOrder,ae as default};
