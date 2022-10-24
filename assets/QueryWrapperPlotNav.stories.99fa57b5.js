import{Q as o}from"./CardContainerLogic.8fd991da.js";import{G as n,aR as r}from"./index.7cb9050b.js";import{j as i}from"./jsx-runtime.4cd7f6c3.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.ec0a93c7.js";import"./use-deep-compare-effect.esm.385e4e00.js";import"./uniq.160e9df6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.d15c5de9.js";import"./isSymbol.678ebc7d.js";import"./isArray.cef144cc.js";import"./Button.cfb6901e.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./_cacheHas.c7472e8e.js";import"./without.fb12d218.js";import"./uniqueId.e78092cb.js";import"./_Set.899b48a3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.6e720173.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.79902b8b.js";import"./SvgIcon.7b92dd2c.js";import"./withStyles.3f185fef.js";import"./Tooltip.6e492e82.js";import"./createSvgIcon.eca8b7b9.js";import"./utils.3d3cd8c3.js";import"./index.c5ec5593.js";import"./iframe.27dce855.js";import"./makeStyles.e394e1e5.js";import"./InfoOutlined.51a57d77.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.33ef3f15.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.599241b8.js";import"./Modal.434f2321.js";import"./Alert.151390cd.js";import"./useWaitForDOMRef.29c68d44.js";import"./inheritsLoose.a675f57d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.bf256e8b.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.7c323179.js";import"./queryUtils.a3edefc3.js";import"./useInfiniteQuery.434b28c9.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d1e1f319.js";import"./_baseClone.dd6d5204.js";import"./_getTag.709594e5.js";import"./useEntity.c6428aa0.js";import"./useMutation.6d3cc29c.js";import"./pick.22144651.js";import"./Checkbox.e8fb2f35.js";import"./RadioGroup.8469addd.js";import"./moment.a565bb48.js";import"./RangeSlider.97251b5c.js";import"./factory.f33f2ea2.js";import"./react-sizeme.b7d24b87.js";import"./Skeleton.a445d31b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2d10a928.js";import"./Typography.ad724512.js";import"./Close.d3395515.js";import"./react-select.esm.6df07d80.js";import"./Select-54ac8379.esm.b71cede4.js";import"./CustomSelectWidget.8fdd3b39.js";import"./index.browser.9cb314e6.js";import"./WarningModal.35db236b.js";import"./react-intersection-observer.esm.f5010878.js";import"./UserCard.e68af1d5.js";import"./IconCopy.d103f0a0.js";import"./SkeletonTable.b62e268e.js";import"./times.d7ad11d2.js";import"./ToastMessage.7ffa621b.js";import"./FullWidthAlert.6976790a.js";import"./Overlay.cc756cad.js";import"./DateFormatter.e81071da.js";import"./core.esm.86cff8d0.js";import"./isEmpty.3d7ee96d.js";import"./isEqual.0f537726.js";import"./union.5b8016cf.js";import"./isString.17de64d3.js";import"./useGetDownloadListStatistics.7a98d943.js";import"./QueryCount.6dfb9cf4.js";import"./NoData.9d58c31e.js";import"./useGetAccessRequirement.916ee0ac.js";import"./ManagedACTAccessRequirementStatus.dc008bff.js";import"./FileUpload.9b09768a.js";import"./UserSearchBox.d4819085.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.8b6edb1b.js";import"./EntityLink.c2453954.js";import"./NoSearchResults.7ff9fab4.js";import"./SynapseVideo.7d5e4403.js";import"./IconList.f8fae304.js";import"./UserCardList.7a2d22c9.js";const oo={parameters:{storySource:{source:`import React from 'react'
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
