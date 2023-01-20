import{s as t}from"./AccessRequirementList.bc8b0d43.js";import{j as r}from"./jsx-runtime.32974a61.js";import"./index.ffb97e36.js";import"./index.3765caa7.js";import"./iframe.1b774001.js";import"./SynapseConstants.aef18750.js";import"./Button.335f67c9.js";import"./styled.d39d5dc5.js";import"./Tooltip.86d343dc.js";import"./SvgIcon.85beeea7.js";import"./useTheme.6433d807.js";import"./TransitionGroupContext.a684d657.js";import"./FullWidthAlert.1407f383.js";import"./hook.b7735453.js";import"./createWithBsPrefix.9bd79cbf.js";import"./divWithClassName.5dac844d.js";import"./index.35ce73ec.js";import"./Typography.c2c9dd4b.js";import"./Fade.40b5902b.js";import"./isArray.c8bb4df8.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.13ae9a2f.js";import"./IconButton.adda85b8.js";import"./ButtonBase.38f61443.js";import"./emotion-react.browser.esm.34fe7ce7.js";import"./Link.7609fc67.js";import"./Button.a71922e0.js";import"./useGetInfoFromIds.45ab9686.js";import"./use-deep-compare-effect.esm.baa92912.js";import"./uniq.12386300.js";import"./_baseSlice.50189bc5.js";import"./toInteger.79c7525f.js";import"./isSymbol.99aea655.js";import"./_cacheHas.0a931368.js";import"./without.171c241f.js";import"./toString.77379481.js";import"./_Set.157e39ea.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.cff5abbc.js";import"./Modal.a001dbc2.js";import"./contains.bd6ce983.js";import"./inheritsLoose.3e2b8649.js";import"./usePrevious.ac877c6e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8d2f766c.js";import"./UserCard.e7305117.js";import"./IconCopy.ef0119b7.js";import"./SkeletonTable.46544d69.js";import"./times.2bf5fee2.js";import"./Skeleton.391d7134.js";import"./ToastMessage.65ccc322.js";import"./uniqueId.74860187.js";import"./Overlay.506fb03e.js";import"./usePopperMarginModifiers.c268b183.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.43c513c3.js";import"./useInfiniteQuery.bfd93c41.js";import"./DateFormatter.ba89c93b.js";import"./dayjs.min.f6270a69.js";import"./utc.7644977b.js";import"./EntityIcon.f7da1a51.js";import"./core.esm.31645efe.js";import"./pick.166fd329.js";import"./_baseClone.91bfbf6a.js";import"./isEmpty.41b614a4.js";import"./isEqual.58fe1d87.js";import"./index.browser.d02228ce.js";import"./union.c8c81301.js";import"./CustomSelectWidget.2ec2217c.js";import"./Select-54ac8379.esm.9cd67400.js";import"./isString.3e1e0992.js";import"./factory.e685adc3.js";import"./sqlFunctions.e5de3b71.js";import"./QueryFilter.1f16af57.js";import"./useEntity.7a358b53.js";import"./useMutation.3e2306a1.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.49a80bc8.js";import"./queryUtils.9304d19c.js";import"./cloneDeep.a6dc1322.js";import"./NoSearchResults.34ec5390.js";import"./NoData.e978c6e6.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.ba6bede4.js";import"./ElementWithTooltip.dcdbf6a9.js";import"./Dropdown.076e64ad.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7235d29e.js";import"./RadioGroup.08a3ac42.js";import"./RangeSlider.8d2ad265.js";import"./react-sizeme.26dbee9b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.2f9a75e7.js";import"./Close.d5bdecd2.js";import"./relativeTime.786c950a.js";import"./useDownloadList.afadcde6.js";import"./QueryCount.e62cfd62.js";import"./react-select.esm.1daf9799.js";import"./IconList.13f5f345.js";import"./UserCardList.816f281b.js";import"./useAccessRequirements.8bda7ea9.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.610b7c00.js";import"./UserSearchBox.f3b56ee6.js";import"./UserOrTeamBadge.bfb42768.js";import"./EntityLink.3b649763.js";import"./ErrorChip.50333a30.js";import"./SynapseVideo.78b91440.js";const gr={parameters:{storySource:{source:`import React from 'react'
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
