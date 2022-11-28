import{Q as o}from"./CardContainerLogic.405dc753.js";import{G as i,N as r}from"./SynapseConstants.290eab74.js";import{j as a}from"./jsx-runtime.0721b30f.js";import"./index.96fee529.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./Button.c6170972.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./sqlFunctions.b0106d41.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c86a5cbb.js";import"./useGetInfoFromIds.58b9ed31.js";import"./use-deep-compare-effect.esm.401fba4c.js";import"./uniq.ab7ea7a6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0c46f3eb.js";import"./isSymbol.2a2fd570.js";import"./_cacheHas.f0b8833d.js";import"./without.b89900d5.js";import"./uniqueId.22a08d1e.js";import"./_Set.530d31c3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ef313e7e.js";import"./queryUtils.bc241af6.js";import"./useInfiniteQuery.160050ed.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d4824e0e.js";import"./_baseClone.d846e333.js";import"./_getTag.374494a2.js";import"./NoSearchResults.37564460.js";import"./NoData.48f5a675.js";import"./unCamelCase.07e38083.js";import"./useEntity.77265cb8.js";import"./useMutation.5bff6e5b.js";import"./pick.7c26c579.js";import"./isEqual.587a056a.js";import"./ElementWithTooltip.0beed2ed.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.69d2b3a3.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./InfoOutlined.1d86a385.js";import"./Dropdown.cda3e88c.js";import"./usePrevious.7579f6d6.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ad5f9514.js";import"./RadioGroup.9418e1f9.js";import"./dayjs.min.d1781a3e.js";import"./RangeSlider.84b56ff1.js";import"./factory.c5c0659e.js";import"./react-sizeme.31f58fbd.js";import"./Skeleton.bcaf6f06.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.596009c1.js";import"./Modal.ffe20d01.js";import"./inheritsLoose.53a219d1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.65459bf1.js";import"./SelectionCriteriaPill.e84841d0.js";import"./Close.b5d307a6.js";import"./react-select.esm.16cf96dd.js";import"./Select-54ac8379.esm.6a29fbfd.js";import"./CustomSelectWidget.b6d556eb.js";import"./index.browser.72232f2a.js";import"./UserCard.9a1acc17.js";import"./IconCopy.343b69cc.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./ToastMessage.c03bf450.js";import"./FullWidthAlert.f41552e4.js";import"./Overlay.d556696c.js";import"./WarningModal.1a2883db.js";import"./react-intersection-observer.esm.3ef9875c.js";import"./DateFormatter.f6dc5f9a.js";import"./utc.ffadba9e.js";import"./EntityIcon.1e92edc0.js";import"./core.esm.4ab3feef.js";import"./isEmpty.f6cb9f52.js";import"./union.067c0c88.js";import"./isString.cb81128d.js";import"./relativeTime.5f274717.js";import"./useGetDownloadListStatistics.8c5e991c.js";import"./QueryCount.de45b2ad.js";import"./useGetAccessRequirement.306475cd.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.4ab691de.js";import"./UserSearchBox.f1e02549.js";import"./UserOrTeamBadge.d5bf5d62.js";import"./EntityLink.40497b38.js";import"./SynapseVideo.878bc81a.js";import"./IconList.e1c0dfc0.js";import"./UserCardList.1e3a2a6f.js";const Lo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{cards:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"file-view-with-locked-column":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},dataset:{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}},"dataset-collection":{startLoc:{col:61,line:17},endLoc:{col:1,line:19},startBody:{col:61,line:17},endBody:{col:1,line:19}}}}},title:"Explore/QueryWrapperPlotNav",component:o,argTypes:{}},e=n=>a(o,{...n}),s=e.bind({});s.args={name:"Tools",sql:"SELECT * FROM syn26438037",limit:5,defaultShowFacetVisualization:!1,defaultShowSearchBox:!0,shouldDeepLink:!0,searchConfiguration:{fullTextSearchHelpURL:"https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html"},cardConfiguration:{type:i,titleLinkConfig:{isMarkdown:!1,baseURL:"Explore/Tools/DetailsPage",URLColumnName:"resourceId",matchColumnName:"resourceId",overrideLinkURLColumnName:"biobankURL"},secondaryLabelLimit:4,genericCardSchema:{type:r,title:"resourceName",subTitle:"resourceType",description:"description",secondaryLabels:["rrid","synonyms","cellLineCategory","cellLineDisease","modelofManifestation","backgroundStrain","backgroundSubstrain","animalModelDisease","animalModelOfManifestation","targetAntigen","reactiveSpecies","hostOrganism","specimenTissueType","specimenPreparationMethod","diseaseType","tumorType","specimenFormat","specimenType"]},labelLinkConfig:[{isMarkdown:!0,matchColumnName:"rrid",tooltipText:"This is to demo a custom tooltip that describes column data"}]}};const t=e.bind({});t.args={tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0,columnLinks:[{matchColumnName:"study",isMarkdown:!1,baseURL:"Explore/Studies/DetailsPage",URLColumnName:"Study_Name",wrapValueWithParens:!0},{matchColumnName:"name",isMarkdown:!1,baseURL:"Explore/Files/DetailsPage",URLColumnName:"FileId",overrideValueWithRowID:!0,wrapValueWithParens:!1}]},searchConfiguration:{searchable:["study","dataType","assay","organ","tissue","species","diagnosis","sex","consortium","grant","modelSystemName","treatmentType","specimenID","individualID","individualIdSource","specimenIdSource","resourceType","dataSubtype","metadataType","assayTarget","analysisType","cellType","nucleicAcidSource","fileFormat","group","name","isModelSystem","isConsortiumAnalysis","isMultiSpecimen","metaboliteType","chromosome"]},shouldDeepLink:!0,visibleColumnCount:10,rgbIndex:1,name:"Data",sqlOperator:"=",sql:"SELECT * FROM syn11346063.28",hideSqlEditorControl:!1};const l={sql:"SELECT * FROM syn11346063.28",additionalFilters:[{concreteType:"org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter",columnName:"study",function:"HAS_LIKE",values:["ADMC_ADNI_BakerLipidomics"]}]},m=e.bind({});m.args={...t.args,shouldDeepLink:!1,initQueryJson:JSON.stringify(l),lockedColumn:{columnName:"study",value:""}};const p=e.bind({});p.args={sql:"SELECT * FROM syn26302617",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const c=e.bind({});c.args={sql:"SELECT * FROM syn33199585",tableConfiguration:{showAccessColumn:!0,showDownloadColumn:!0},name:"Dataset Collection Demo",sqlOperator:"=",hideSqlEditorControl:!1,shouldDeepLink:!1};const To=["Cards","FileView","FileViewWithLockedColumn","Dataset","DatasetCollection"];export{s as Cards,p as Dataset,c as DatasetCollection,t as FileView,m as FileViewWithLockedColumn,To as __namedExportsOrder,Lo as default};
