import{Q as o}from"./CardContainerLogic.8eb79f67.js";import{G as n,aQ as r}from"./index.399b1ebb.js";import{j as i}from"./jsx-runtime.f6e67d69.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e787fd80.js";import"./use-deep-compare-effect.esm.9fbef6c8.js";import"./uniq.3ac68f6d.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6ecd4cc2.js";import"./isSymbol.817739da.js";import"./isArray.bbc3389f.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./_cacheHas.fc28b5e2.js";import"./without.de70e7ae.js";import"./uniqueId.b369d35f.js";import"./_Set.5337c941.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.183d2b65.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.76f9c9ad.js";import"./SvgIcon.b9f91416.js";import"./withStyles.e9153c6c.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./useTheme.b5d1a103.js";import"./Transition.45107636.js";import"./makeStyles.b3ebb6fc.js";import"./InfoOutlined.6b0ecc0d.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.b5092525.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.1c5534ea.js";import"./Modal.50361e04.js";import"./Alert.161bc8be.js";import"./useWaitForDOMRef.132cafe6.js";import"./inheritsLoose.e00878bc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.9f59499b.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e9c5d9db.js";import"./queryUtils.78d610e1.js";import"./useInfiniteQuery.409ad78a.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.88bcbe9b.js";import"./_baseClone.ecc3e8dc.js";import"./_getTag.9119bcb7.js";import"./useEntity.50d0ee88.js";import"./useMutation.40e1a364.js";import"./pick.26fadd1c.js";import"./Checkbox.0d1a5d69.js";import"./Collapse.5bef12a9.js";import"./RadioGroup.af506903.js";import"./moment.a565bb48.js";import"./RangeSlider.06468401.js";import"./factory.9dd574be.js";import"./react-sizeme.f3b24b9a.js";import"./Skeleton.e925cd71.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e87e514d.js";import"./Typography.8482fe8d.js";import"./react-select.esm.7e14925b.js";import"./Select-54ac8379.esm.4ecb5386.js";import"./CustomSelectWidget.3b55fea6.js";import"./index.browser.94009a96.js";import"./WarningModal.f87be017.js";import"./react-intersection-observer.esm.88b7b49d.js";import"./UserCard.c2f5359e.js";import"./IconCopy.bae338e3.js";import"./SkeletonTable.7ca00999.js";import"./times.8c0d57e8.js";import"./ToastMessage.ef3fd930.js";import"./FullWidthAlert.a36cfcd9.js";import"./Overlay.2be5ac15.js";import"./DateFormatter.ddf3e9f0.js";import"./core.esm.e018ab8d.js";import"./isEmpty.fe96177f.js";import"./isEqual.e452e983.js";import"./union.f7dcf0c1.js";import"./isString.172bf1ca.js";import"./useGetDownloadListStatistics.098c2be3.js";import"./QueryCount.3c5279b3.js";import"./NoData.5d71843d.js";import"./useGetAccessRequirement.8d39abbd.js";import"./ManagedACTAccessRequirementStatus.f4931fe7.js";import"./FileUpload.bfe00a27.js";import"./UserSearchBox.24c16fe5.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.b633a9dc.js";import"./EntityLink.58d8c244.js";import"./NoSearchResults.bdc973ca.js";import"./SynapseVideo.7302a8fd.js";import"./IconList.3707af09.js";import"./UserCardList.12bbb1f9.js";const to={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>i(o,{...t}),a=e.bind({});a.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:n,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const s=e.bind({});s.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l=e.bind({});l.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const m=e.bind({});m.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const no=["Cards","FileView","Dataset","DatasetCollection"];export{a as Cards,l as Dataset,m as DatasetCollection,s as FileView,no as __namedExportsOrder,to as default};
