import{Q as o}from"./CardContainerLogic.6f45f82a.js";import{G as n,aR as r}from"./index.a3e4acf8.js";import{j as i}from"./jsx-runtime.1d2001c8.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.c58c98fd.js";import"./use-deep-compare-effect.esm.35b1b1d3.js";import"./uniq.c7f1c7dc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4e0bd265.js";import"./isSymbol.ce5fe5c9.js";import"./isArray.a059945b.js";import"./Button.850c0905.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./_cacheHas.d2172efb.js";import"./without.58f717b2.js";import"./uniqueId.93061bc8.js";import"./_Set.5a0c9836.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.c3a44665.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.d9bd3780.js";import"./SvgIcon.3fc47b81.js";import"./withStyles.706b11e4.js";import"./Tooltip.76084c23.js";import"./createSvgIcon.6133e741.js";import"./utils.b5696502.js";import"./index.43d111f8.js";import"./iframe.11c071de.js";import"./makeStyles.c53704bf.js";import"./InfoOutlined.31363277.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.3a42da93.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.ff857418.js";import"./Modal.efedf678.js";import"./Alert.cbdcee9e.js";import"./useWaitForDOMRef.9ab82534.js";import"./inheritsLoose.24b31555.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e6ab3cb1.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.80de24b3.js";import"./queryUtils.d979d4bc.js";import"./useInfiniteQuery.70f427eb.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.20eefbed.js";import"./_baseClone.5b2e016e.js";import"./_getTag.778e1018.js";import"./useEntity.63b9480e.js";import"./useMutation.ea300502.js";import"./pick.a2970581.js";import"./Checkbox.7dc394cb.js";import"./RadioGroup.0b985b24.js";import"./moment.a565bb48.js";import"./RangeSlider.913d2f10.js";import"./factory.e7dbcdd8.js";import"./react-sizeme.2bf63c15.js";import"./Skeleton.b5215bc5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e720d5f8.js";import"./Typography.e119af63.js";import"./Close.efb216d7.js";import"./react-select.esm.494d337f.js";import"./Select-54ac8379.esm.e5fa35ad.js";import"./CustomSelectWidget.b21aa545.js";import"./index.browser.125461a7.js";import"./WarningModal.cb5b2f6e.js";import"./react-intersection-observer.esm.fc4fd008.js";import"./UserCard.4c7789bc.js";import"./IconCopy.42575155.js";import"./SkeletonTable.b6dfba04.js";import"./times.665c5ee8.js";import"./ToastMessage.8ffb9391.js";import"./FullWidthAlert.6b98829c.js";import"./Overlay.1b6445a2.js";import"./DateFormatter.0f7db532.js";import"./core.esm.7c2a6c35.js";import"./isEmpty.64cbcef1.js";import"./isEqual.fcde4806.js";import"./union.cf0f8f5e.js";import"./isString.068e405c.js";import"./useGetDownloadListStatistics.1820e480.js";import"./QueryCount.cff24e02.js";import"./NoData.268faa0c.js";import"./useGetAccessRequirement.a9c65df6.js";import"./ManagedACTAccessRequirementStatus.f4ac2fbe.js";import"./FileUpload.ea5c997e.js";import"./UserSearchBox.0318f300.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.5d5f6ffd.js";import"./EntityLink.d75c7d95.js";import"./NoSearchResults.ff2816e8.js";import"./SynapseVideo.b3019f1d.js";import"./IconList.8bf9407a.js";import"./UserCardList.6bc225bd.js";const oo={parameters:{storySource:{source:`import React from 'react'
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
