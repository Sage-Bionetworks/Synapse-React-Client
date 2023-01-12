import{r as t}from"./AccessRequirementList.e3110584.js";import{j as r}from"./jsx-runtime.76b41102.js";import"./index.0297a0cb.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./SynapseConstants.71946a35.js";import"./Button.83b95483.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.175e5b3e.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";import"./useGetInfoFromIds.ad8b47c2.js";import"./use-deep-compare-effect.esm.c9075b1e.js";import"./uniq.4862c17b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.e94666c7.js";import"./isSymbol.945d9b60.js";import"./_cacheHas.0d545133.js";import"./without.79d3af29.js";import"./toString.30e0c932.js";import"./_Set.6089be3d.js";import"./_setToArray.a82100c8.js";import"./queryKeys.e0d3085f.js";import"./LoadingScreen.37cafde6.js";import"./Modal.907a4a1e.js";import"./contains.015a7c6d.js";import"./inheritsLoose.9c2697f4.js";import"./usePrevious.4c8906d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.ad8cb22c.js";import"./UserCard.29055287.js";import"./IconCopy.ae28a5e2.js";import"./SkeletonTable.4585cee0.js";import"./times.5539d7c0.js";import"./Skeleton.439e65be.js";import"./ToastMessage.a7db9b8d.js";import"./uniqueId.db618dfa.js";import"./Overlay.e607fdf1.js";import"./usePopperMarginModifiers.f84a16be.js";import"./RegularExpressions.3cd69849.js";import"./react-intersection-observer.esm.0ced2b23.js";import"./useInfiniteQuery.6628dc0b.js";import"./DateFormatter.405593b2.js";import"./dayjs.min.a3177bfa.js";import"./utc.57c73dc3.js";import"./EntityIcon.409d700e.js";import"./core.esm.5ccb1dc5.js";import"./pick.77527010.js";import"./_baseClone.59c3ed7e.js";import"./isEmpty.8d6ae8cd.js";import"./isEqual.f3cbd38f.js";import"./index.browser.dfdbc042.js";import"./union.8f08a467.js";import"./CustomSelectWidget.0f29881d.js";import"./Select-54ac8379.esm.04a57595.js";import"./isString.64d04794.js";import"./factory.0ec07d04.js";import"./sqlFunctions.e7dd183a.js";import"./QueryFilter.b81da185.js";import"./useEntity.d0924c07.js";import"./useMutation.bf55f3f5.js";import"./SynapseTableConstants.07ecdebd.js";import"./FacetNav.22071321.js";import"./queryUtils.cba9940e.js";import"./cloneDeep.e7a3eeef.js";import"./NoSearchResults.74466cf1.js";import"./NoData.e5f1e807.js";import"./unCamelCase.07e38083.js";import"./ColumnType.744125d2.js";import"./ElementWithTooltip.05b87c21.js";import"./Dropdown.f708dbe5.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.b4d66a68.js";import"./RadioGroup.7d7338a2.js";import"./RangeSlider.8c92159c.js";import"./react-sizeme.e70bce6e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./SelectionCriteriaPill.938aa7f9.js";import"./Close.64702cf9.js";import"./relativeTime.7e299a09.js";import"./useDownloadList.5afd9cdb.js";import"./QueryCount.ea7052b8.js";import"./react-select.esm.6272fded.js";import"./IconList.d9d0dd5d.js";import"./UserCardList.025f49c3.js";import"./useAccessRequirements.dc76750b.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.8f9a5007.js";import"./UserSearchBox.2300e4da.js";import"./UserOrTeamBadge.e0170d2a.js";import"./EntityLink.de0eb36e.js";import"./ErrorChip.fe210de4.js";import"./SynapseVideo.9b0ef7ab.js";const lr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"test-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"no-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"invalid-syn-id-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}}}}},title:"Synapse/ProvenanceGraph",component:t,argTypes:{}},o=n=>r("div",{className:"bootstrap-4-backport",children:r(t,{...n})}),p=o.bind({});p.args={entityRefs:[{targetId:"syn13363290",targetVersionNumber:9}],containerHeight:"500px"};const e=o.bind({});e.args={entityRefs:[{targetId:"syn8075918",targetVersionNumber:void 0}],containerHeight:"500px"};const i=o.bind({});i.args={entityRefs:[{targetId:"synINVALID",targetVersionNumber:1}],containerHeight:"500px"};const gr=["TestProvenanceGraph","NoProvenanceGraph","InvalidSynIDProvenanceGraph"];export{i as InvalidSynIDProvenanceGraph,e as NoProvenanceGraph,p as TestProvenanceGraph,gr as __namedExportsOrder,lr as default};
