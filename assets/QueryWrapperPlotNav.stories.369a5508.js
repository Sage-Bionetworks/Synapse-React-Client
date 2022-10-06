import{Q as o}from"./CardContainerLogic.4868b183.js";import{G as n,aM as r}from"./index.22793847.js";import{j as i}from"./jsx-runtime.0547954a.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.481bb687.js";import"./use-deep-compare-effect.esm.4976a8bf.js";import"./uniq.c41b546c.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0a662c7d.js";import"./isSymbol.56654682.js";import"./isArray.dc0d9748.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.faa197e5.js";import"./_cacheHas.88e0e600.js";import"./without.f6119cfc.js";import"./uniqueId.6d625886.js";import"./_Set.3f09d130.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.48e580f3.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.b92ea12f.js";import"./SvgIcon.20c60b09.js";import"./withStyles.5f371c18.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./slicedToArray.e72f11da.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./useTheme.f4071482.js";import"./Transition.c74a9bc3.js";import"./makeStyles.68b76b6a.js";import"./InfoOutlined.5164ccbb.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.c802fa1e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.b5b5b14d.js";import"./Modal.b4906af9.js";import"./Alert.320f728d.js";import"./useWaitForDOMRef.f571d6d7.js";import"./useWillUnmount.7d35f155.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.692ae3ac.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.68e7a946.js";import"./queryUtils.ad5ed7d4.js";import"./useInfiniteQuery.cb887234.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.798853ad.js";import"./_baseClone.2f23fbad.js";import"./_getTag.d668d291.js";import"./useEntity.c38cbc1b.js";import"./useMutation.bc8b1814.js";import"./pick.8d03c6fd.js";import"./Checkbox.f5838e99.js";import"./Collapse.c3e8e528.js";import"./RadioGroup.c420300f.js";import"./moment.a565bb48.js";import"./RangeSlider.605e469d.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.6d5f7452.js";import"./react-sizeme.1d475b1d.js";import"./Skeleton.ef288fce.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.05f09278.js";import"./Typography.5de44d5b.js";import"./react-select.esm.95790458.js";import"./Select-54ac8379.esm.46a0827d.js";import"./CustomSelectWidget.1878bd21.js";import"./index.browser.3e0c1c5e.js";import"./react-intersection-observer.esm.9e0b6fc2.js";import"./UserCard.8cf176e1.js";import"./IconCopy.a47d91ec.js";import"./SkeletonTable.bc06b926.js";import"./times.ccd7af32.js";import"./ToastMessage.0f10ae0c.js";import"./FullWidthAlert.8329478a.js";import"./Overlay.3bbd300f.js";import"./DateFormatter.483ace28.js";import"./core.esm.cc7a450a.js";import"./isEmpty.443bf1e0.js";import"./isEqual.adb44ebd.js";import"./union.05e04a14.js";import"./isString.18ee8e39.js";import"./useGetDownloadListStatistics.1131e7c7.js";import"./QueryCount.0ec6e9c7.js";import"./NoData.71b44b9c.js";import"./useGetAccessRequirement.f7c36ef5.js";import"./ManagedACTAccessRequirementStatus.d48e92d0.js";import"./FileUpload.b34b9f80.js";import"./UserSearchBox.abe28ee4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.6c6b0801.js";import"./EntityLink.87749aec.js";import"./NoSearchResults.347f9d24.js";import"./SynapseVideo.de275625.js";import"./IconList.e44c22b6.js";import"./UserCardList.09c42190.js";const ao={parameters:{storySource:{source:`import React from 'react'
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
