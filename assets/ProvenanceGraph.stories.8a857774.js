import{o as t}from"./CardContainerLogic.7d4d4d71.js";import{j as r}from"./jsx-runtime.e72699d7.js";import"./index.34864443.js";import"./index.71f9d2b1.js";import"./iframe.e515b461.js";import"./SynapseConstants.290eab74.js";import"./Button.69f4aad2.js";import"./styled.113fc281.js";import"./Tooltip.626a672e.js";import"./TransitionGroupContext.2e90d9c8.js";import"./useTheme.3c585c97.js";import"./Alert.d9dcb62e.js";import"./hook.dcb03d67.js";import"./createWithBsPrefix.93be1871.js";import"./divWithClassName.15ce1beb.js";import"./index.35ce73ec.js";import"./Fade.2e614c5f.js";import"./isArray.768225e0.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.91cc0bda.js";import"./IconButton.53297fa9.js";import"./ButtonBase.1e74724a.js";import"./emotion-react.browser.esm.6478344e.js";import"./Link.2241f35d.js";import"./Typography.4509eb0e.js";import"./Button.5bebd4e9.js";import"./sqlFunctions.d0b07571.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.550dbb5b.js";import"./useGetInfoFromIds.55c50f91.js";import"./use-deep-compare-effect.esm.d647c715.js";import"./uniq.6af65afc.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0bf55458.js";import"./isSymbol.24e67468.js";import"./_cacheHas.a009177f.js";import"./without.0d5b4379.js";import"./uniqueId.7182a54a.js";import"./_Set.73e28bcb.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.e1da9b5b.js";import"./queryUtils.fcfc7b8f.js";import"./useInfiniteQuery.2bc38fa4.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.4df8e91c.js";import"./_baseClone.29baa335.js";import"./_getTag.5ec99d73.js";import"./NoSearchResults.e9d8f715.js";import"./NoData.4a2fbcdb.js";import"./unCamelCase.07e38083.js";import"./useEntity.a8e793ee.js";import"./useMutation.7ca0393e.js";import"./pick.3d0a4cbb.js";import"./isEqual.45b9eef1.js";import"./ElementWithTooltip.b8adcd1e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.bb8e092c.js";import"./usePrevious.e7a96701.js";import"./contains.92c769a2.js";import"./usePopperMarginModifiers.a580fc17.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.51a2ff0c.js";import"./RadioGroup.cf5e2f8c.js";import"./dayjs.min.9844fde9.js";import"./RangeSlider.f58ce2c4.js";import"./factory.f23e6d8b.js";import"./react-sizeme.9e0eb750.js";import"./Skeleton.015bfbc5.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.14f06136.js";import"./Modal.f7e6106d.js";import"./inheritsLoose.ed0377a8.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.48aa9bb3.js";import"./SelectionCriteriaPill.24c0a363.js";import"./Close.c63a0c55.js";import"./react-select.esm.9886f966.js";import"./Select-54ac8379.esm.a705b656.js";import"./CustomSelectWidget.3ea71536.js";import"./index.browser.93244f29.js";import"./UserCard.b40dfa65.js";import"./IconCopy.5e3a4916.js";import"./SkeletonTable.7fae5ea1.js";import"./times.a7510402.js";import"./ToastMessage.0ac4744b.js";import"./FullWidthAlert.2ca2db91.js";import"./Overlay.8e7d4967.js";import"./WarningModal.3e689365.js";import"./react-intersection-observer.esm.8f335372.js";import"./DateFormatter.002c6239.js";import"./utc.a90651d9.js";import"./EntityIcon.a079b3d9.js";import"./core.esm.0d56749d.js";import"./isEmpty.3cac19cb.js";import"./union.3d218bc3.js";import"./isString.7663035e.js";import"./relativeTime.cd5fda9a.js";import"./useGetDownloadListStatistics.a50360cc.js";import"./QueryCount.c99e21ca.js";import"./useGetAccessRequirement.9c48ddf0.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5cbf5fa0.js";import"./UserSearchBox.8343efec.js";import"./UserOrTeamBadge.b5ed1dfe.js";import"./EntityLink.c2a8cd8a.js";import"./SynapseVideo.dc2838dc.js";import"./IconList.6127531d.js";import"./UserCardList.539428fb.js";const lr={parameters:{storySource:{source:`import React from 'react'
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
