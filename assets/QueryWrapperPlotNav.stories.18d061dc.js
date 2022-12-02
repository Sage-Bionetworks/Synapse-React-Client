import{Q as o}from"./CardContainerLogic.7d4d4d71.js";import{G as i,N as r,w as a}from"./SynapseConstants.290eab74.js";import{j as s}from"./jsx-runtime.e72699d7.js";import"./index.34864443.js";import"./index.71f9d2b1.js";import"./iframe.e515b461.js";import"./Button.69f4aad2.js";import"./styled.113fc281.js";import"./Tooltip.626a672e.js";import"./TransitionGroupContext.2e90d9c8.js";import"./useTheme.3c585c97.js";import"./Alert.d9dcb62e.js";import"./hook.dcb03d67.js";import"./createWithBsPrefix.93be1871.js";import"./divWithClassName.15ce1beb.js";import"./index.35ce73ec.js";import"./Fade.2e614c5f.js";import"./isArray.768225e0.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.91cc0bda.js";import"./IconButton.53297fa9.js";import"./ButtonBase.1e74724a.js";import"./emotion-react.browser.esm.6478344e.js";import"./Link.2241f35d.js";import"./Typography.4509eb0e.js";import"./Button.5bebd4e9.js";import"./sqlFunctions.d0b07571.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.550dbb5b.js";import"./useGetInfoFromIds.55c50f91.js";import"./use-deep-compare-effect.esm.d647c715.js";import"./uniq.6af65afc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0bf55458.js";import"./isSymbol.24e67468.js";import"./_cacheHas.a009177f.js";import"./without.0d5b4379.js";import"./uniqueId.7182a54a.js";import"./_Set.73e28bcb.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.e1da9b5b.js";import"./queryUtils.fcfc7b8f.js";import"./useInfiniteQuery.2bc38fa4.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.4df8e91c.js";import"./_baseClone.29baa335.js";import"./_getTag.5ec99d73.js";import"./NoSearchResults.e9d8f715.js";import"./NoData.4a2fbcdb.js";import"./unCamelCase.07e38083.js";import"./useEntity.a8e793ee.js";import"./useMutation.7ca0393e.js";import"./pick.3d0a4cbb.js";import"./isEqual.45b9eef1.js";import"./ElementWithTooltip.b8adcd1e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.bb8e092c.js";import"./usePrevious.e7a96701.js";import"./contains.92c769a2.js";import"./usePopperMarginModifiers.a580fc17.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.51a2ff0c.js";import"./RadioGroup.cf5e2f8c.js";import"./dayjs.min.9844fde9.js";import"./RangeSlider.f58ce2c4.js";import"./factory.f23e6d8b.js";import"./react-sizeme.9e0eb750.js";import"./Skeleton.015bfbc5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.14f06136.js";import"./Modal.f7e6106d.js";import"./inheritsLoose.ed0377a8.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.48aa9bb3.js";import"./SelectionCriteriaPill.24c0a363.js";import"./Close.c63a0c55.js";import"./react-select.esm.9886f966.js";import"./Select-54ac8379.esm.a705b656.js";import"./CustomSelectWidget.3ea71536.js";import"./index.browser.93244f29.js";import"./UserCard.b40dfa65.js";import"./IconCopy.5e3a4916.js";import"./SkeletonTable.7fae5ea1.js";import"./times.a7510402.js";import"./ToastMessage.0ac4744b.js";import"./FullWidthAlert.2ca2db91.js";import"./Overlay.8e7d4967.js";import"./WarningModal.3e689365.js";import"./react-intersection-observer.esm.8f335372.js";import"./DateFormatter.002c6239.js";import"./utc.a90651d9.js";import"./EntityIcon.a079b3d9.js";import"./core.esm.0d56749d.js";import"./isEmpty.3cac19cb.js";import"./union.3d218bc3.js";import"./isString.7663035e.js";import"./relativeTime.cd5fda9a.js";import"./useGetDownloadListStatistics.a50360cc.js";import"./QueryCount.c99e21ca.js";import"./useGetAccessRequirement.9c48ddf0.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5cbf5fa0.js";import"./UserSearchBox.8343efec.js";import"./UserOrTeamBadge.b5ed1dfe.js";import"./EntityLink.c2a8cd8a.js";import"./SynapseVideo.dc2838dc.js";import"./IconList.6127531d.js";import"./UserCardList.539428fb.js";const Lo={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import QueryWrapperPlotNav from './QueryWrapperPlotNav'
import {
  EXPERIMENTAL_TOOL,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
} from '../../utils/SynapseConstants'
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

export const People = Template.bind({})
People.args = {
  sql: 'SELECT * FROM syn13897207',

  name: 'People Demo',
  sqlOperator: '=',
  hideSqlEditorControl: false,
  shouldDeepLink: false,
  cardConfiguration: {
    type: MEDIUM_USER_CARD,
  },
}
`,locationsMap:{cards:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"file-view":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"file-view-with-locked-column":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},dataset:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"dataset-collection":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},people:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>s(o,{...t}),l=e.bind({});l.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const n=e.bind({});n.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const m={sql:"SELECT * FROM syn11346063.28",additionalFilters:[{concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",columnName:"study",function:"HAS_LIKE",values:["ADMC_ADNI_BakerLipidomics"]}]},p=e.bind({});p.args={...n.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(m),lockedColumn:{columnName:"study",value:""}};const c=e.bind({});c.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const d=e.bind({});d.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const u=e.bind({});u.args={sql:"SELECT * FROM syn13897207",name:"People Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1,cardConfiguration:{type:a}};const To=["Cards","FileView","FileViewWithLockedColumn","Dataset","DatasetCollection","People"];export{l as Cards,c as Dataset,d as DatasetCollection,n as FileView,p as FileViewWithLockedColumn,u as People,To as __namedExportsOrder,Lo as default};
