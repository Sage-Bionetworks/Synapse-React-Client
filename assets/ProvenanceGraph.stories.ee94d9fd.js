import{m as t}from"./CardContainerLogic.0db4d935.js";import{j as r}from"./jsx-runtime.ef6dd6ca.js";import"./index.dae95658.js";import"./index.0c4c5f34.js";import"./iframe.60aac2d9.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.a73b55da.js";import"./styled.e27331e3.js";import"./utils.e96b9b4f.js";import"./TransitionGroupContext.7ee16c7e.js";import"./Alert.ca959f09.js";import"./createWithBsPrefix.fd753f10.js";import"./index.35ce73ec.js";import"./isArray.aa335c2b.js";import"./getEndpoint.bb7ded34.js";import"./Link.3eeff9dd.js";import"./Typography.4e908f90.js";import"./Button.325fe68b.js";import"./ButtonBase.acc32807.js";import"./sqlFunctions.dd1a2d89.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.643bbd26.js";import"./useGetInfoFromIds.8d8b8550.js";import"./use-deep-compare-effect.esm.840ab13d.js";import"./uniq.342b0f91.js";import"./_baseSlice.50189bc5.js";import"./toInteger.135bf95f.js";import"./isSymbol.3aa79a3a.js";import"./_cacheHas.2e3690ee.js";import"./without.f35cc972.js";import"./uniqueId.d637a5d8.js";import"./_Set.13c0b9e0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.e48e05ae.js";import"./queryUtils.061a421f.js";import"./useInfiniteQuery.4c4e2780.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.c88aad01.js";import"./_baseClone.3778e881.js";import"./_getTag.078c4477.js";import"./NoSearchResults.81006957.js";import"./NoData.a13d1896.js";import"./unCamelCase.07e38083.js";import"./useEntity.cf38bb31.js";import"./useMutation.0f84c358.js";import"./pick.8d20f9a6.js";import"./isEqual.ced93aa6.js";import"./ElementWithTooltip.392f8e12.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.afd54b28.js";import"./Tooltip.3430fa1d.js";import"./createSvgIcon.f73758be.js";import"./InfoOutlined.cee1fdf4.js";import"./Dropdown.db32552a.js";import"./usePrevious.c9110e8d.js";import"./contains.96785999.js";import"./usePopperMarginModifiers.a06f6977.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b07ab425.js";import"./RadioGroup.b78e3435.js";import"./moment.a565bb48.js";import"./RangeSlider.b6c432b7.js";import"./factory.e181f874.js";import"./react-sizeme.904d0769.js";import"./Skeleton.537bc7c9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.cd1ee187.js";import"./Modal.872b66f0.js";import"./inheritsLoose.794eb6d0.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.c2e120f2.js";import"./SelectionCriteriaPill.1584ce2c.js";import"./Close.f27360ac.js";import"./react-select.esm.185efe94.js";import"./Select-54ac8379.esm.5ff88fb9.js";import"./CustomSelectWidget.3e0d96f2.js";import"./index.browser.bf7e0108.js";import"./UserCard.04a38507.js";import"./IconCopy.9ed3993d.js";import"./SkeletonTable.ef6c1801.js";import"./times.e0b5d62b.js";import"./ToastMessage.c7bcf1c5.js";import"./FullWidthAlert.d500669b.js";import"./Overlay.f0beb85a.js";import"./WarningModal.8c339799.js";import"./react-intersection-observer.esm.bb8d3d5f.js";import"./DateFormatter.d96edae2.js";import"./EntityIcon.56756943.js";import"./core.esm.5a121c07.js";import"./isEmpty.cbc52aef.js";import"./union.63ad5718.js";import"./isString.def3f496.js";import"./useGetDownloadListStatistics.67ff0062.js";import"./QueryCount.ae10ab02.js";import"./useGetAccessRequirement.c14e61d7.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.cf0e24de.js";import"./UserSearchBox.5740d963.js";import"./UserOrTeamBadge.609fa8d0.js";import"./EntityLink.de485e3a.js";import"./SynapseVideo.c6f39fda.js";import"./IconList.621f316c.js";import"./UserCardList.1476199b.js";const ir={parameters:{storySource:{source:`import React from 'react'
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
