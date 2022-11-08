import{m as t}from"./CardContainerLogic.981340ae.js";import{j as r}from"./jsx-runtime.325e7137.js";import"./index.26ad4be5.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2661b6a1.js";import"./styled.8997d4d9.js";import"./utils.373161e6.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./index.35ce73ec.js";import"./isArray.ba495a61.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ac4cf4e1.js";import"./sqlFunctions.f22affb5.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.590cf756.js";import"./useGetInfoFromIds.243ff3e5.js";import"./use-deep-compare-effect.esm.7f3b729f.js";import"./uniq.fe60be5f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ab08c53c.js";import"./isSymbol.2f09fe74.js";import"./_cacheHas.25c52fb1.js";import"./without.122c9dff.js";import"./uniqueId.69d847eb.js";import"./_Set.a3bc86a9.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.6a2d1b44.js";import"./queryUtils.80dabcf7.js";import"./useInfiniteQuery.afe5b6da.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c276ab46.js";import"./_baseClone.d743d757.js";import"./_getTag.f336c79f.js";import"./NoSearchResults.87a6bf00.js";import"./NoData.7c6227e7.js";import"./unCamelCase.07e38083.js";import"./useEntity.83926ac9.js";import"./useMutation.f1179de1.js";import"./pick.a485f6d7.js";import"./isEqual.f9f51665.js";import"./ElementWithTooltip.54bff3a8.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.a4adfbe0.js";import"./Tooltip.4e888661.js";import"./createSvgIcon.3ee89089.js";import"./InfoOutlined.191e0556.js";import"./Dropdown.3db05cd7.js";import"./usePrevious.b109b72f.js";import"./contains.26318f11.js";import"./usePopperMarginModifiers.f4fd333a.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7370b8fc.js";import"./RadioGroup.1d2bcaaa.js";import"./moment.a565bb48.js";import"./RangeSlider.410d56a0.js";import"./factory.3c8144b9.js";import"./react-sizeme.0043ad26.js";import"./Skeleton.4f13b0c1.js";import"./emotion-react.browser.esm.f1e534da.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.96557e43.js";import"./Modal.ffdd738d.js";import"./inheritsLoose.fe1a6d58.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.25f83f82.js";import"./Typography.46ba432f.js";import"./SelectionCriteriaPill.180359c3.js";import"./Close.8a7ab13a.js";import"./react-select.esm.37f0bd31.js";import"./Select-54ac8379.esm.7d4435ca.js";import"./CustomSelectWidget.8aa014ba.js";import"./index.browser.d3f051c7.js";import"./UserCard.c35f579d.js";import"./IconCopy.73ef776f.js";import"./SkeletonTable.a881218b.js";import"./times.a7f9fd68.js";import"./ToastMessage.356d6e1c.js";import"./FullWidthAlert.3575feb9.js";import"./Overlay.4ea04f69.js";import"./WarningModal.d2809462.js";import"./react-intersection-observer.esm.3d7339a4.js";import"./DateFormatter.5ab10a51.js";import"./EntityIcon.214316ad.js";import"./core.esm.4df43147.js";import"./isEmpty.222398e6.js";import"./union.16201132.js";import"./isString.ccf264c0.js";import"./useGetDownloadListStatistics.309757f4.js";import"./QueryCount.761f554c.js";import"./useGetAccessRequirement.2e163384.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.cbea3817.js";import"./UserSearchBox.642720d5.js";import"./UserOrTeamBadge.100cabc8.js";import"./EntityLink.1360d713.js";import"./ButtonBase.4ea13919.js";import"./SynapseVideo.85edd752.js";import"./IconList.1e564fd3.js";import"./UserCardList.0ea15755.js";const ir={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProvenanceGraph from './ProvenanceGraph'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/ProvenanceGraph',
  component: ProvenanceGraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProvenanceGraph>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProvenanceGraph> = args => (
  <div className="bootstrap-4-backport">
    <ProvenanceGraph {...args} />
  </div>
)

export const TestProvenanceGraph = Template.bind({})
TestProvenanceGraph.args = {
  entityRefs: [
    {
      targetId: 'syn13363290',
      targetVersionNumber: 9,
    },
  ],
  containerHeight: '500px',
}

export const NoProvenanceGraph = Template.bind({})
NoProvenanceGraph.args = {
  entityRefs: [
    {
      targetId: 'syn8075918',
      targetVersionNumber: undefined,
    },
  ],
  containerHeight: '500px',
}

export const InvalidSynIDProvenanceGraph = Template.bind({})
InvalidSynIDProvenanceGraph.args = {
  entityRefs: [
    {
      targetId: 'synINVALID',
      targetVersionNumber: 1,
    },
  ],
  containerHeight: '500px',
}
`,locationsMap:{"test-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"no-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"invalid-syn-id-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}}}}},title:"Synapse/ProvenanceGraph",component:t,argTypes:{}},o=n=>r("div",{className:"bootstrap-4-backport",children:r(t,{...n})}),e=o.bind({});e.args={entityRefs:[{targetId:"syn13363290",targetVersionNumber:9}],containerHeight:"500px"};const p=o.bind({});p.args={entityRefs:[{targetId:"syn8075918",targetVersionNumber:void 0}],containerHeight:"500px"};const i=o.bind({});i.args={entityRefs:[{targetId:"synINVALID",targetVersionNumber:1}],containerHeight:"500px"};const mr=["TestProvenanceGraph","NoProvenanceGraph","InvalidSynIDProvenanceGraph"];export{i as InvalidSynIDProvenanceGraph,p as NoProvenanceGraph,e as TestProvenanceGraph,mr as __namedExportsOrder,ir as default};
