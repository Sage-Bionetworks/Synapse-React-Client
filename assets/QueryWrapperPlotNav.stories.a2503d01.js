import{Q as o}from"./HelpPopover.a6da761d.js";import{G as i,R as r,t as a}from"./SynapseConstants.d6ba6a96.js";import{j as s}from"./jsx-runtime.7f415a49.js";import"./index.322ef20a.js";import"./iframe.f0eb7e4f.js";import"./usePopperMarginModifiers.1e19fcd3.js";import"./contains.12125dea.js";import"./createWithBsPrefix.1ec397ad.js";import"./Button.03e30a54.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.a88da157.js";import"./Fade.91bde074.js";import"./styled.681e07cb.js";import"./useTheme.93fabebb.js";import"./Tooltip.532ca871.js";import"./SvgIcon.67c4bd7a.js";import"./TransitionGroupContext.d6cb07c1.js";import"./isArray.22a05d29.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.4536f7bc.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./Link.962b4b54.js";import"./Typography.b9cf5e4f.js";import"./Button.7a13a013.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./divWithClassName.4f7ac618.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.993b2e3f.js";import"./Modal.20d66332.js";import"./inheritsLoose.d3989491.js";import"./usePrevious.9195f9b8.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.96d00667.js";import"./UserCard.d1f4475d.js";import"./IconCopy.02e8b48e.js";import"./SkeletonTable.ce10e001.js";import"./times.9ff12fd4.js";import"./toInteger.d64e3f97.js";import"./isSymbol.9047c28e.js";import"./Skeleton.cf05128e.js";import"./ToastMessage.475a246a.js";import"./FullWidthAlert.58605d4c.js";import"./uniqueId.706d73bf.js";import"./Overlay.34589b18.js";import"./WarningModal.c247c3c8.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.bfefb20b.js";import"./useInfiniteQuery.e949b068.js";import"./DateFormatter.da568cbd.js";import"./dayjs.min.4b01dff6.js";import"./utc.4bce6490.js";import"./EntityIcon.fb6d531d.js";import"./core.esm.bf59ba7b.js";import"./pick.e08076aa.js";import"./_baseClone.12caf01d.js";import"./_Set.ec3b2e10.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.539a569a.js";import"./isEqual.309ab92d.js";import"./_cacheHas.6bb37714.js";import"./_setToArray.a82100c8.js";import"./index.browser.5040e3d3.js";import"./union.b8f06866.js";import"./without.0cb61de1.js";import"./uniq.c00c44c0.js";import"./CustomSelectWidget.6c72a496.js";import"./Select-54ac8379.esm.3030d7a9.js";import"./isString.00645f3c.js";import"./factory.29902721.js";import"./sqlFunctions.317acf55.js";import"./QueryFilter.98e21063.js";import"./useEntity.87b43ab4.js";import"./useMutation.7bebd2d5.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.4f7cb853.js";import"./queryUtils.d40da240.js";import"./cloneDeep.b6d34995.js";import"./use-deep-compare-effect.esm.a50fe12d.js";import"./NoSearchResults.47339e1b.js";import"./NoData.f6f90db5.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.500e59a6.js";import"./Dropdown.d617d4af.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.da2e88a2.js";import"./Checkbox.d15514ef.js";import"./RadioGroup.63fe795a.js";import"./RangeSlider.870cef18.js";import"./react-sizeme.aa998ef5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.19e6487c.js";import"./Close.d7f6c298.js";import"./relativeTime.99226a0e.js";import"./useDownloadList.779cc4f6.js";import"./QueryCount.f359aa00.js";import"./react-select.esm.402ddf92.js";import"./IconList.8602b5e5.js";import"./UserCardList.a6514bc6.js";import"./useAccessRequirements.3fafc689.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.9cbea4f7.js";import"./UserSearchBox.a454ac17.js";import"./UserOrTeamBadge.45c75721.js";import"./EntityLink.6e5c3005.js";import"./SynapseVideo.9d2c4478.js";const Lo={parameters:{storySource:{source:`import React from 'react'
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
