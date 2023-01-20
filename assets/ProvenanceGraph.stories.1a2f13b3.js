import{s as t}from"./AccessRequirementList.bce081ba.js";import{j as r}from"./jsx-runtime.590681cd.js";import"./index.bb7b660b.js";import"./index.220fbbb9.js";import"./iframe.d3c6f1d5.js";import"./SynapseConstants.aef18750.js";import"./Button.d3c811d3.js";import"./styled.1c864c13.js";import"./Tooltip.0f7aeb46.js";import"./SvgIcon.01f2428a.js";import"./useTheme.fa81c060.js";import"./TransitionGroupContext.e7de7ea1.js";import"./FullWidthAlert.8cff24d3.js";import"./hook.5f699942.js";import"./createWithBsPrefix.4b46c4d7.js";import"./divWithClassName.638b701c.js";import"./index.35ce73ec.js";import"./Typography.62f204bb.js";import"./Fade.dfa4b9be.js";import"./isArray.b759bc77.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.88997e16.js";import"./IconButton.7622d68d.js";import"./ButtonBase.c831f7af.js";import"./emotion-react.browser.esm.a07d05d9.js";import"./Link.3f8a0a55.js";import"./Button.6aee65d4.js";import"./useGetInfoFromIds.fe484232.js";import"./use-deep-compare-effect.esm.e5e25a62.js";import"./uniq.1eb55587.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4e5bd8ec.js";import"./isSymbol.acb677d8.js";import"./_cacheHas.c3ef5294.js";import"./without.3cab2d82.js";import"./toString.e4762266.js";import"./_Set.13ddd322.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.8ce9c0f0.js";import"./Modal.4704072e.js";import"./contains.5e789a3e.js";import"./inheritsLoose.16461593.js";import"./usePrevious.a5299ce0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1c0cdf8b.js";import"./UserCard.f8a4e9c0.js";import"./IconCopy.a05a23c9.js";import"./SkeletonTable.69520a2f.js";import"./times.58442ccf.js";import"./Skeleton.95aeb5c4.js";import"./ToastMessage.06f6548f.js";import"./uniqueId.ac4a52ef.js";import"./Overlay.08bde75f.js";import"./usePopperMarginModifiers.fa06e499.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.6d171a39.js";import"./useInfiniteQuery.582193b6.js";import"./DateFormatter.5dc1cf20.js";import"./dayjs.min.fc41a394.js";import"./utc.d4722960.js";import"./EntityIcon.f20fbcec.js";import"./core.esm.dff18696.js";import"./pick.cd3085d6.js";import"./_baseClone.5541a1cb.js";import"./isEmpty.ffb8061e.js";import"./isEqual.6e289403.js";import"./index.browser.c38bfbad.js";import"./union.96ffd9ca.js";import"./CustomSelectWidget.019e7101.js";import"./Select-54ac8379.esm.b77d0c67.js";import"./isString.0b29996a.js";import"./factory.f9864e7a.js";import"./sqlFunctions.7c5ea660.js";import"./QueryFilter.ee6936f9.js";import"./useEntity.e9c8ccf5.js";import"./useMutation.fbb1c8e7.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.ed2cb769.js";import"./queryUtils.b6571b13.js";import"./cloneDeep.399b0d62.js";import"./NoSearchResults.76b8e076.js";import"./NoData.43470a81.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.42b5d08f.js";import"./ElementWithTooltip.8e8a071c.js";import"./Dropdown.ebc0212b.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.adb21e17.js";import"./RadioGroup.63697a5f.js";import"./RangeSlider.be60d483.js";import"./react-sizeme.4669bd7b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.d3927ba9.js";import"./Close.fe4e1b6f.js";import"./relativeTime.810a453b.js";import"./useDownloadList.92dbf79d.js";import"./QueryCount.eb0c34ec.js";import"./react-select.esm.0e965a92.js";import"./IconList.b09a9d03.js";import"./UserCardList.988f8d92.js";import"./useAccessRequirements.e8d4b6d5.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.48f16211.js";import"./UserSearchBox.03bb705a.js";import"./UserOrTeamBadge.b7d40120.js";import"./EntityLink.edd798d8.js";import"./ErrorChip.ab8c6b0c.js";import"./SynapseVideo.cbf89cbf.js";const gr={parameters:{storySource:{source:`import React from 'react'
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
