import{Q as e}from"./CardContainerLogic.e7146078.js";import{G as n,aL as r}from"./index.5bc63636.js";import{j as i}from"./jsx-runtime.53ec3a99.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.7977be83.js";import"./use-deep-compare-effect.esm.76dab31b.js";import"./uniq.4eed699f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.82734360.js";import"./isSymbol.c005a6aa.js";import"./isArray.afa3346a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./Button.aa21b764.js";import"./_cacheHas.5b560c8b.js";import"./without.51d00043.js";import"./uniqueId.84a1f40d.js";import"./_Set.bde41139.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.abcfe016.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.21136110.js";import"./SvgIcon.0bcbfb3f.js";import"./withStyles.2fbec1dd.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.6a46e0c0.js";import"./createSvgIcon.80ece60c.js";import"./slicedToArray.e72f11da.js";import"./index.c935dff9.js";import"./iframe.707dd820.js";import"./useTheme.f82ec4e5.js";import"./Transition.feec5299.js";import"./makeStyles.0544ad0e.js";import"./InfoOutlined.72aa66a9.js";import"./getEndpoint.bb7ded34.js";import"./ElementWithTooltip.c89f258e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.ae5a36af.js";import"./Modal.c19caf32.js";import"./Alert.89d8effb.js";import"./useWaitForDOMRef.40b36c07.js";import"./useWillUnmount.d1dfdc7e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e458f391.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.3afd597e.js";import"./queryUtils.b32e00ab.js";import"./useInfiniteQuery.0347999d.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.5a2bdd9b.js";import"./_baseClone.51a24973.js";import"./_getTag.96ae8cbb.js";import"./useEntity.26e2f507.js";import"./useMutation.d2f1dba7.js";import"./pick.208f5b17.js";import"./Checkbox.4a339933.js";import"./Collapse.089ddc7f.js";import"./RadioGroup.ff6eb1c1.js";import"./moment.a565bb48.js";import"./RangeSlider.0b9fee28.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.d4777b6b.js";import"./react-sizeme.1c12ebad.js";import"./Skeleton.9def93da.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9496470b.js";import"./Typography.d6d23e6c.js";import"./react-select.esm.194cafc8.js";import"./Select-54ac8379.esm.2e959863.js";import"./CustomSelectWidget.d8bae787.js";import"./index.browser.d857f987.js";import"./react-intersection-observer.esm.51e0956e.js";import"./UserCard.cd843c54.js";import"./IconCopy.65395139.js";import"./SkeletonTable.32a35c51.js";import"./times.3460d620.js";import"./ToastMessage.d2af582b.js";import"./FullWidthAlert.a76adc9d.js";import"./Overlay.973a4260.js";import"./DateFormatter.3544d538.js";import"./core.esm.d9592e6e.js";import"./isEmpty.ac55f7e4.js";import"./isEqual.be980044.js";import"./union.4d10b684.js";import"./isString.e9ef92d3.js";import"./useGetDownloadListStatistics.c01bf7d3.js";import"./QueryCount.db0eb4c4.js";import"./NoData.c38fa66d.js";import"./useGetAccessRequirement.ee7e9ed0.js";import"./ManagedACTAccessRequirementStatus.76ac6345.js";import"./FileUpload.188e4c63.js";import"./UserSearchBox.dc9c716c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.99f73ac4.js";import"./EntityLink.2c972cbe.js";import"./NoSearchResults.9f09815f.js";import"./SynapseVideo.22e3631b.js";import"./IconList.e59db63e.js";import"./UserCardList.f9998796.js";const se={parameters:{storySource:{source:`import React from 'react'
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
