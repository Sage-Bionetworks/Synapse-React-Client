import{r as t}from"./AccessRequirementList.8929065e.js";import{j as r}from"./jsx-runtime.d6be66a9.js";import"./index.b3fc12c1.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./SynapseConstants.aef18750.js";import"./Button.58f5aaec.js";import"./styled.f07e33c6.js";import"./Tooltip.c89a275a.js";import"./SvgIcon.b9658c5d.js";import"./useTheme.0cbb662e.js";import"./TransitionGroupContext.27368eb3.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./index.35ce73ec.js";import"./Typography.079c4f38.js";import"./Fade.c734522e.js";import"./isArray.3ed41029.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.67904b39.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";import"./useGetInfoFromIds.5d6c53d1.js";import"./use-deep-compare-effect.esm.bde19c32.js";import"./uniq.6aeaecd1.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5e3c3f3b.js";import"./isSymbol.eb29c468.js";import"./_cacheHas.4141299d.js";import"./without.8ff8fd5d.js";import"./toString.62a6def8.js";import"./_Set.a2615e3e.js";import"./_setToArray.a82100c8.js";import"./queryKeys.f96c2872.js";import"./LoadingScreen.08c127bb.js";import"./Modal.44d2ca28.js";import"./contains.ac446ee4.js";import"./inheritsLoose.a22fc619.js";import"./usePrevious.263ac407.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8bdf7b9b.js";import"./UserCard.3b30c3b3.js";import"./IconCopy.120eb6a8.js";import"./SkeletonTable.8490bedb.js";import"./times.b541d215.js";import"./Skeleton.c281df81.js";import"./ToastMessage.1551e33e.js";import"./uniqueId.1755aefe.js";import"./Overlay.16f87717.js";import"./usePopperMarginModifiers.f5f095e7.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.a21388e4.js";import"./useInfiniteQuery.153ac882.js";import"./DateFormatter.941811ce.js";import"./dayjs.min.4289f877.js";import"./utc.d9b8a8fe.js";import"./EntityIcon.6af9736b.js";import"./core.esm.cbeede07.js";import"./pick.91e2fa22.js";import"./_baseClone.ecc77bcc.js";import"./isEmpty.42a8d070.js";import"./isEqual.d44fbeea.js";import"./index.browser.50c90814.js";import"./union.f5913534.js";import"./CustomSelectWidget.55025853.js";import"./Select-54ac8379.esm.38c93b4e.js";import"./isString.7b803664.js";import"./factory.bdcf20a6.js";import"./sqlFunctions.09325119.js";import"./QueryFilter.8e32ecc7.js";import"./useEntity.1de6dff7.js";import"./useMutation.4d42a75f.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.81a39fd5.js";import"./queryUtils.a5d117dc.js";import"./cloneDeep.dc50f27a.js";import"./NoSearchResults.bd3638d3.js";import"./NoData.8a38dc26.js";import"./unCamelCase.07e38083.js";import"./ColumnType.0fc7f115.js";import"./useGetQueryResultBundle.0449041a.js";import"./ElementWithTooltip.80516f88.js";import"./Dropdown.917b5c6c.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.d89150eb.js";import"./RadioGroup.8ef25fc2.js";import"./RangeSlider.dddcb200.js";import"./react-sizeme.ebc4edb7.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.c4c4885d.js";import"./Close.cbbfd41e.js";import"./relativeTime.392da430.js";import"./useDownloadList.b75a79e5.js";import"./QueryCount.4a520d14.js";import"./react-select.esm.f0ac9c54.js";import"./IconList.9ab198d6.js";import"./UserCardList.a9b81b89.js";import"./useAccessRequirements.610d1a58.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.74c81e67.js";import"./UserSearchBox.b59a0ed3.js";import"./UserOrTeamBadge.8113a51e.js";import"./EntityLink.bcf3716e.js";import"./ErrorChip.f30fc8e5.js";import"./SynapseVideo.de56516d.js";const gr={parameters:{storySource:{source:`import React from 'react'
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
