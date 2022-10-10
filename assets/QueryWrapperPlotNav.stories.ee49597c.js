import{Q as o}from"./CardContainerLogic.2ee1000e.js";import{G as n,aQ as r}from"./index.68699958.js";import{j as i}from"./jsx-runtime.416d8946.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.3bbc649f.js";import"./use-deep-compare-effect.esm.911cf7a2.js";import"./uniq.87f6f6b2.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e9d9a3f9.js";import"./isSymbol.110be719.js";import"./isArray.48d04961.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.34feb441.js";import"./_cacheHas.76528ad6.js";import"./without.3d9e3582.js";import"./uniqueId.89dba59c.js";import"./_Set.24c716a1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.7437a5cd.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.e25d1511.js";import"./SvgIcon.95ef1484.js";import"./withStyles.c595751b.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.032eb6cc.js";import"./createSvgIcon.55245163.js";import"./slicedToArray.e72f11da.js";import"./index.9d682600.js";import"./iframe.51e9009e.js";import"./useTheme.512d0ce3.js";import"./Transition.b4776308.js";import"./makeStyles.c2ff9465.js";import"./InfoOutlined.a31d8d84.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.faae6c0d.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.37234235.js";import"./Modal.ed9c7214.js";import"./Alert.a75301f2.js";import"./useWaitForDOMRef.b3b34f09.js";import"./useWillUnmount.996d585d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.71f755a4.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.60f84bda.js";import"./queryUtils.e6b4280c.js";import"./useInfiniteQuery.44a5eea1.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.b38775df.js";import"./_baseClone.aa5164db.js";import"./_getTag.d8ab6a75.js";import"./useEntity.5e3ba4ff.js";import"./useMutation.1d252209.js";import"./pick.a8c44bb6.js";import"./Checkbox.a67729ee.js";import"./Collapse.7a92c3a1.js";import"./RadioGroup.ae49130c.js";import"./moment.a565bb48.js";import"./RangeSlider.1a093288.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.7cebd781.js";import"./react-sizeme.6b6a6aad.js";import"./Skeleton.102fc0c3.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2e92386a.js";import"./Typography.5433f83a.js";import"./react-select.esm.554acdb0.js";import"./Select-54ac8379.esm.a10c9ff0.js";import"./CustomSelectWidget.ca745bf5.js";import"./index.browser.c9ece89f.js";import"./WarningModal.5a5ec7e8.js";import"./react-intersection-observer.esm.53060fae.js";import"./UserCard.3e52a486.js";import"./IconCopy.30c66d8a.js";import"./SkeletonTable.83d9d8ad.js";import"./times.e2ae8ec1.js";import"./ToastMessage.644c1427.js";import"./FullWidthAlert.a1bdb9b5.js";import"./Overlay.651ab348.js";import"./DateFormatter.9f89cf0c.js";import"./core.esm.b53b67fd.js";import"./isEmpty.b25382de.js";import"./isEqual.7b6bfecb.js";import"./union.e03df24a.js";import"./isString.93041002.js";import"./useGetDownloadListStatistics.6e7aa4af.js";import"./QueryCount.d97a9a23.js";import"./NoData.c00ea909.js";import"./useGetAccessRequirement.d52b3b3c.js";import"./ManagedACTAccessRequirementStatus.5f87b05b.js";import"./FileUpload.6f396c4f.js";import"./UserSearchBox.4eb9ba8d.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.006e69ca.js";import"./EntityLink.76d9b026.js";import"./NoSearchResults.9a5ac96a.js";import"./SynapseVideo.52c43ed3.js";import"./IconList.ce367970.js";import"./UserCardList.cb1d9739.js";const so={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"file-view":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},dataset:{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}},"dataset-collection":{startLoc:{col:61,line:16},endLoc:{col:1,line:18},startBody:{col:61,line:16},endBody:{col:1,line:18}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>i(o,{...t}),a=e.bind({});a.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:n,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const s=e.bind({});s.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l=e.bind({});l.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const m=e.bind({});m.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const lo=["Cards","FileView","Dataset","DatasetCollection"];export{a as Cards,l as Dataset,m as DatasetCollection,s as FileView,lo as __namedExportsOrder,so as default};
