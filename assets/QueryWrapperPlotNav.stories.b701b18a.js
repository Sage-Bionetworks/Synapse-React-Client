import{Q as e}from"./CardContainerLogic.3996d247.js";import{G as n,aM as r}from"./index.1df77ce9.js";import{j as i}from"./jsx-runtime.f8072c65.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.fd4d15c4.js";import"./use-deep-compare-effect.esm.7a42a356.js";import"./uniq.583f1864.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7ac537e3.js";import"./isSymbol.28b01415.js";import"./isArray.903292fc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.cb7914f2.js";import"./_cacheHas.a5b7fc64.js";import"./without.10a59cc7.js";import"./uniqueId.6d4b83b5.js";import"./_Set.add49772.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.5a3dcc6a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.a024e3c2.js";import"./SvgIcon.761f4d42.js";import"./withStyles.630b025d.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./slicedToArray.e72f11da.js";import"./index.1d2a784c.js";import"./iframe.aa82293a.js";import"./useTheme.bc44ba71.js";import"./Transition.5983a677.js";import"./makeStyles.9cff04c5.js";import"./InfoOutlined.ec29d19f.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.4eb14c25.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.98c5d266.js";import"./Modal.c915c8f9.js";import"./Alert.53bb8599.js";import"./useWaitForDOMRef.c9a921b3.js";import"./useWillUnmount.0b84e1f0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.d6f64b11.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f90eb9ca.js";import"./queryUtils.eff52af2.js";import"./useInfiniteQuery.767b6e5c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.96c3704a.js";import"./_baseClone.a8b81e25.js";import"./_getTag.4be430c6.js";import"./useEntity.78ae4d57.js";import"./useMutation.920a6fd3.js";import"./pick.8cf499ad.js";import"./Checkbox.e6642c32.js";import"./Collapse.efb59460.js";import"./RadioGroup.d95fc9b1.js";import"./moment.a565bb48.js";import"./RangeSlider.2fd4fe28.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.1a6ada4e.js";import"./react-sizeme.3ee9624f.js";import"./Skeleton.050d0fcb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9f0ce41d.js";import"./Typography.3dd8fe93.js";import"./react-select.esm.46a4c1bc.js";import"./Select-54ac8379.esm.56fc177e.js";import"./CustomSelectWidget.d726cc3b.js";import"./index.browser.f8b2da96.js";import"./react-intersection-observer.esm.1e854c5c.js";import"./UserCard.c3fe1aa7.js";import"./IconCopy.69a201bb.js";import"./SkeletonTable.be12aa25.js";import"./times.1eb14036.js";import"./ToastMessage.37d9d7b6.js";import"./FullWidthAlert.5a306575.js";import"./Overlay.84bc18bd.js";import"./DateFormatter.ad473e26.js";import"./core.esm.fc975ec9.js";import"./isEmpty.7f2a4b5d.js";import"./isEqual.d89d7a06.js";import"./union.e41d574b.js";import"./isString.0b4aad35.js";import"./useGetDownloadListStatistics.63081e1e.js";import"./QueryCount.75474e42.js";import"./NoData.5b126f72.js";import"./useGetAccessRequirement.2d5420de.js";import"./ManagedACTAccessRequirementStatus.ed0e9563.js";import"./FileUpload.4c732c24.js";import"./UserSearchBox.3704a104.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.0fcb71f3.js";import"./EntityLink.36306b90.js";import"./NoSearchResults.434cd460.js";import"./SynapseVideo.a1ad708e.js";import"./IconList.b63ecb91.js";import"./UserCardList.4b406a92.js";const se={parameters:{storySource:{source:`import React from 'react'
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
