import{Q as o}from"./CardContainerLogic.06afd42a.js";import{G as i,L as r}from"./SynapseConstants.b6aa8bf5.js";import{j as a}from"./jsx-runtime.cf19754d.js";import"./index.68bd09f4.js";import"./index.b04ce0ac.js";import"./iframe.bb4f3d50.js";import"./Button.724ba963.js";import"./styled.db2da3d6.js";import"./utils.621f5968.js";import"./TransitionGroupContext.49564fef.js";import"./Alert.00c62036.js";import"./createWithBsPrefix.5ad4e507.js";import"./index.35ce73ec.js";import"./isArray.eece51ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.e3bd49f6.js";import"./Typography.5f784a3a.js";import"./Button.a3c516df.js";import"./ButtonBase.213ee5c8.js";import"./sqlFunctions.8588a52a.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.4a4b03fa.js";import"./useGetInfoFromIds.9c4785d9.js";import"./use-deep-compare-effect.esm.82a451e2.js";import"./uniq.2b68584f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.8755c25e.js";import"./isSymbol.c5104d65.js";import"./_cacheHas.83662752.js";import"./without.fb9ecf3e.js";import"./uniqueId.964022b9.js";import"./_Set.feb77c45.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.b5e0d4c1.js";import"./queryUtils.3642b017.js";import"./useInfiniteQuery.6e921c50.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.17c2c9da.js";import"./_baseClone.9bb0a840.js";import"./_getTag.21dbd333.js";import"./NoSearchResults.80935cb9.js";import"./NoData.c3cdc179.js";import"./unCamelCase.07e38083.js";import"./useEntity.c29c28a1.js";import"./useMutation.c6d1756f.js";import"./pick.d6ce1dfc.js";import"./isEqual.e7ed054e.js";import"./ElementWithTooltip.ba397cb2.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.2a376753.js";import"./Tooltip.0925b53e.js";import"./createSvgIcon.4f04198d.js";import"./InfoOutlined.c84a4381.js";import"./Dropdown.f96637bf.js";import"./usePrevious.1220947a.js";import"./contains.cdccf4e2.js";import"./usePopperMarginModifiers.52c89a14.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.08ea4895.js";import"./RadioGroup.f82878ba.js";import"./moment.a565bb48.js";import"./RangeSlider.0bc7d708.js";import"./factory.a95b6b4e.js";import"./react-sizeme.128193e9.js";import"./Skeleton.9037b65a.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a30ece2a.js";import"./Modal.648837f7.js";import"./inheritsLoose.9827a00e.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.7a25338b.js";import"./SelectionCriteriaPill.f5a5ac48.js";import"./Close.2bce18e3.js";import"./react-select.esm.9218a32e.js";import"./Select-54ac8379.esm.679747cc.js";import"./CustomSelectWidget.987458dd.js";import"./index.browser.1cff9475.js";import"./UserCard.83a32219.js";import"./IconCopy.becd3049.js";import"./SkeletonTable.bb55eb7d.js";import"./times.cccc8bac.js";import"./ToastMessage.25510bc7.js";import"./FullWidthAlert.338c252c.js";import"./Overlay.50c4b250.js";import"./WarningModal.3720e479.js";import"./react-intersection-observer.esm.85c6e916.js";import"./DateFormatter.78dd1eef.js";import"./EntityIcon.27f1ecfc.js";import"./core.esm.b497b9ca.js";import"./isEmpty.41ec6983.js";import"./union.fda36a34.js";import"./isString.23541df7.js";import"./useGetDownloadListStatistics.63faa088.js";import"./QueryCount.c4304d87.js";import"./useGetAccessRequirement.7ae4ffe9.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.2693c5e3.js";import"./UserSearchBox.ff0ca92f.js";import"./UserOrTeamBadge.17b3273e.js";import"./EntityLink.8c9f2f24.js";import"./SynapseVideo.f3c5b620.js";import"./IconList.f65ef7d4.js";import"./UserCardList.32ffbdcf.js";const po={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import QueryWrapperPlotNav from './QueryWrapperPlotNav'
import { EXPERIMENTAL_TOOL, GENERIC_CARD } from '../../utils/SynapseConstants'
import { Query } from '../../utils/synapseTypes'

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

const queryWithAdditionalFilter: Query = {
  sql: 'SELECT * FROM syn11346063.28',
  additionalFilters: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
      columnName: 'study',
      function: 'HAS_LIKE',
      values: ['ADMC_ADNI_BakerLipidomics'],
    },
  ],
}

/**
 * This demo contains a filter on a locked column. This type of configuration should hide that the filter on the locked
 * column is applied, making it seem as if the total contents of the table are just the filtered results. Common in
 * DetailsPages in portals.
 */
export const FileViewWithLockedColumn = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FileViewWithLockedColumn.args = {
  ...FileView.args,
  shouldDeepLink: false,
  initQueryJson: JSON.stringify(queryWithAdditionalFilter),
  lockedColumn: {
    columnName: 'study',
    value: '',
  },
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
`,locationsMap:{cards:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view-with-locked-column":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},dataset:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"dataset-collection":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>a(o,{...t}),s=e.bind({});s.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const n=e.bind({});n.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l={sql:"SELECT * FROM syn11346063.28",additionalFilters:[{concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",columnName:"study",function:"HAS_LIKE",values:["ADMC_ADNI_BakerLipidomics"]}]},m=e.bind({});m.args={...n.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(l),lockedColumn:{columnName:"study",value:""}};const p=e.bind({});p.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const c=e.bind({});c.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const co=["Cards","FileView","FileViewWithLockedColumn","Dataset","DatasetCollection"];export{s as Cards,p as Dataset,c as DatasetCollection,n as FileView,m as FileViewWithLockedColumn,co as __namedExportsOrder,po as default};
