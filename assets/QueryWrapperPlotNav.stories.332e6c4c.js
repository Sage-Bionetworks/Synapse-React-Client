import{Q as o}from"./HelpPopover.dd19c094.js";import{G as i,R as r,t as a}from"./SynapseConstants.d6ba6a96.js";import{j as s}from"./jsx-runtime.cae1efce.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./usePopperMarginModifiers.fb0d551a.js";import"./contains.44df3564.js";import"./createWithBsPrefix.df7fa21f.js";import"./Button.7727704e.js";import"./hasClass.56fd144a.js";import"./EntityTypeUtils.02efa7e4.js";import"./Fade.31660acb.js";import"./styled.893b6037.js";import"./useTheme.6ac8e7e3.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./TransitionGroupContext.bc025aa2.js";import"./isArray.175db850.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./emotion-react.browser.esm.0f705697.js";import"./Link.c5d35787.js";import"./Typography.334f7e13.js";import"./Button.af90093c.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./divWithClassName.5b633697.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.476e63ba.js";import"./Modal.04b387a6.js";import"./inheritsLoose.beda7355.js";import"./usePrevious.0a77b2e0.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.6ca94db7.js";import"./UserCard.60a81442.js";import"./IconCopy.158d0c53.js";import"./SkeletonTable.ef7abf61.js";import"./times.df010a42.js";import"./toInteger.3ed0cd2f.js";import"./isSymbol.87b57363.js";import"./Skeleton.5c3ed137.js";import"./ToastMessage.8e99f4ca.js";import"./FullWidthAlert.9d4713f3.js";import"./uniqueId.fbe1b45a.js";import"./Overlay.879f6140.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.6aa9d3d4.js";import"./useInfiniteQuery.24bd729c.js";import"./DateFormatter.70c7721e.js";import"./dayjs.min.12a0da3a.js";import"./utc.ceb4b169.js";import"./EntityIcon.3f8a3670.js";import"./core.esm.e918ee34.js";import"./pick.9031c658.js";import"./_baseClone.aa2f9924.js";import"./_Set.1fb82960.js";import"./_baseSlice.50189bc5.js";import"./isEmpty.9c14b5b1.js";import"./isEqual.9e278194.js";import"./_cacheHas.ea09e558.js";import"./_setToArray.a82100c8.js";import"./index.browser.505b2ef5.js";import"./union.43cc5201.js";import"./without.ff72cb8b.js";import"./uniq.eb931bff.js";import"./CustomSelectWidget.59b7944a.js";import"./Select-54ac8379.esm.e88de38a.js";import"./isString.3cdad83a.js";import"./factory.8a69d8c4.js";import"./sqlFunctions.2fb5266e.js";import"./QueryFilter.aaa17d3c.js";import"./useEntity.140994a4.js";import"./useMutation.0b342796.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.31a50869.js";import"./queryUtils.d83a955a.js";import"./cloneDeep.3a71c714.js";import"./use-deep-compare-effect.esm.f099afc0.js";import"./NoSearchResults.b80cc10f.js";import"./NoData.d1a26232.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.3e4ddfb9.js";import"./Dropdown.a5829948.js";import"./isRequiredForA11y.20ed4857.js";import"./useGetInfoFromIds.83017b65.js";import"./Checkbox.f51c45ab.js";import"./RadioGroup.3095c202.js";import"./RangeSlider.6882fc88.js";import"./react-sizeme.ccf3609b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.d1a268e5.js";import"./Close.0da26c60.js";import"./relativeTime.e2bd5bcb.js";import"./useDownloadList.ebabec88.js";import"./QueryCount.8660cea9.js";import"./react-select.esm.62a82fbb.js";import"./IconList.5def42e9.js";import"./UserCardList.db0a81ca.js";import"./useAccessRequirements.7ffa9aac.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.7be3edb4.js";import"./UserSearchBox.543e3e02.js";import"./UserOrTeamBadge.fc3f8497.js";import"./EntityLink.a4968051.js";import"./SynapseVideo.1670d9eb.js";const fo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"file-view":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"file-view-with-locked-column":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},dataset:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},"dataset-collection":{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}},people:{startLoc:{col:61,line:21},endLoc:{col:1,line:23},startBody:{col:61,line:21},endBody:{col:1,line:23}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=t=>s(o,{...t}),l=e.bind({});l.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const n=e.bind({});n.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const m={sql:"SELECT * FROM syn11346063.28",additionalFilters:[{concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",columnName:"study",function:"HAS_LIKE",values:["ADMC_ADNI_BakerLipidomics"]}]},p=e.bind({});p.args={...n.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(m),lockedColumn:{columnName:"study",value:""}};const c=e.bind({});c.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const d=e.bind({});d.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const u=e.bind({});u.args={sql:"SELECT * FROM syn13897207",name:"People Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1,cardConfiguration:{type:a}};const Lo=["Cards","FileView","FileViewWithLockedColumn","Dataset","DatasetCollection","People"];export{l as Cards,c as Dataset,d as DatasetCollection,n as FileView,p as FileViewWithLockedColumn,u as People,Lo as __namedExportsOrder,fo as default};
