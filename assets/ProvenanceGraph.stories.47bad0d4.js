import{s as t}from"./AccessRequirementList.81b763e8.js";import{j as r}from"./jsx-runtime.732db4fa.js";import"./index.6ade810e.js";import"./index.f08547e5.js";import"./iframe.309bdcd0.js";import"./SynapseConstants.aef18750.js";import"./Button.14842d9b.js";import"./styled.7d1b1387.js";import"./Tooltip.b3eb933e.js";import"./SvgIcon.883206f0.js";import"./useTheme.23d779b8.js";import"./TransitionGroupContext.25f1619e.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./createWithBsPrefix.e55f4707.js";import"./divWithClassName.0d41da1a.js";import"./index.35ce73ec.js";import"./Typography.52fcc329.js";import"./Fade.a9768a9d.js";import"./isArray.ab714070.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.f8a92c9e.js";import"./IconButton.4e309ec1.js";import"./ButtonBase.caa5bbee.js";import"./emotion-react.browser.esm.4ae44601.js";import"./Link.04b76f3f.js";import"./Button.2b5fc967.js";import"./useGetInfoFromIds.cff80146.js";import"./use-deep-compare-effect.esm.629c5c42.js";import"./uniq.4b39b2c8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e9616708.js";import"./isSymbol.3aa759ff.js";import"./_cacheHas.e143a942.js";import"./without.2d4a20d2.js";import"./toString.083d15f6.js";import"./_Set.592281c9.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.33c72bbe.js";import"./Modal.4f0d6f21.js";import"./contains.d723cb84.js";import"./inheritsLoose.7bb86332.js";import"./usePrevious.90faff06.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.08d8bdbd.js";import"./UserCard.5dc8ad35.js";import"./IconCopy.8fbe8f6c.js";import"./SkeletonTable.cff03cd3.js";import"./times.37016f17.js";import"./Skeleton.00a5a513.js";import"./ToastMessage.ca9da849.js";import"./uniqueId.68f55a89.js";import"./Overlay.c9c798f2.js";import"./usePopperMarginModifiers.7728e467.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.1a638807.js";import"./useInfiniteQuery.bc11444b.js";import"./DateFormatter.98d76ad0.js";import"./dayjs.min.0ad62631.js";import"./utc.36b0c74c.js";import"./EntityIcon.e00edf1c.js";import"./core.esm.62da8fa1.js";import"./pick.059515ca.js";import"./_baseClone.99830f2a.js";import"./isEmpty.6e4b20fe.js";import"./isEqual.60e31e78.js";import"./index.browser.1426cdde.js";import"./union.cd76b5cb.js";import"./CustomSelectWidget.de8d3d0a.js";import"./Select-54ac8379.esm.9fd4da62.js";import"./isString.0a68f6ae.js";import"./factory.4e484438.js";import"./sqlFunctions.fb8b0140.js";import"./QueryFilter.776eed93.js";import"./useEntity.84240992.js";import"./useMutation.ba47f1f7.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.158b67aa.js";import"./queryUtils.752d1e6f.js";import"./cloneDeep.20d4205c.js";import"./NoSearchResults.61aade90.js";import"./NoData.f4f8ad10.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.04254d85.js";import"./ElementWithTooltip.65064a09.js";import"./Dropdown.77cad14f.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.c545cc03.js";import"./RadioGroup.12a07e83.js";import"./RangeSlider.e6b14cf1.js";import"./react-sizeme.1de254a4.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.98801b8b.js";import"./Close.b8c3677a.js";import"./relativeTime.7988bd7a.js";import"./useDownloadList.9ca9a463.js";import"./QueryCount.02b64b89.js";import"./react-select.esm.76f05765.js";import"./IconList.abb797f2.js";import"./UserCardList.615341b8.js";import"./useAccessRequirements.53cc195c.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.09f14730.js";import"./UserSearchBox.04090696.js";import"./UserOrTeamBadge.294b1b2d.js";import"./EntityLink.a579d43a.js";import"./ErrorChip.37f500a9.js";import"./SynapseVideo.70c89d2b.js";const gr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"test-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"no-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"invalid-syn-id-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}}}}},title:"Synapse/ProvenanceGraph",component:t,argTypes:{}},o=n=>r("div",{className:"bootstrap-4-backport",children:r(t,{...n})}),p=o.bind({});p.args={entityRefs:[{targetId:"syn13363290",targetVersionNumber:9}],containerHeight:"500px"};const i=o.bind({});i.args={entityRefs:[{targetId:"syn8075918",targetVersionNumber:void 0}],containerHeight:"500px"};const e=o.bind({});e.args={entityRefs:[{targetId:"synINVALID",targetVersionNumber:1}],containerHeight:"500px"};const yr=["TestProvenanceGraph","NoProvenanceGraph","InvalidSynIDProvenanceGraph"];export{e as InvalidSynIDProvenanceGraph,i as NoProvenanceGraph,p as TestProvenanceGraph,yr as __namedExportsOrder,gr as default};
