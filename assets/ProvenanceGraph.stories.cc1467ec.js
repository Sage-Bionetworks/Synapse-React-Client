import{m as t}from"./CardContainerLogic.65b099cd.js";import{j as r}from"./jsx-runtime.af56d2f4.js";import"./index.a1936379.js";import"./index.34222f2e.js";import"./iframe.51f26e37.js";import"./withStyles.95bfae1f.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b7090dbd.js";import"./index.57d09176.js";import"./Button.288689e2.js";import"./Transition.66d770ee.js";import"./index.35ce73ec.js";import"./isArray.05e742d7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.fd305cf0.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.f2ce4d84.js";import"./use-deep-compare-effect.esm.60be9ac1.js";import"./uniq.5db71bfa.js";import"./_baseSlice.50189bc5.js";import"./toInteger.66d32cd8.js";import"./isSymbol.691d7973.js";import"./_cacheHas.e498e8a2.js";import"./without.06c5a2bd.js";import"./uniqueId.fe0a6f5d.js";import"./_Set.739f8f8a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.6198377b.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.c0856984.js";import"./Tooltip.4363549c.js";import"./createSvgIcon.c99f3a66.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f557cee5.js";import"./makeStyles.0eb241f0.js";import"./InfoOutlined.8f86cf66.js";import"./ElementWithTooltip.a938605e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.07d6548d.js";import"./Modal.62623140.js";import"./useWaitForDOMRef.7c7cad70.js";import"./useWillUnmount.7ff8c062.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.abd0b162.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.7db17a6c.js";import"./queryUtils.2f601fb6.js";import"./useInfiniteQuery.cc62287f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.64f407e4.js";import"./_baseClone.8b67dcaf.js";import"./_getTag.69b57b30.js";import"./useEntity.94a0f4bb.js";import"./useMutation.ab9dcaa8.js";import"./pick.21d20b3f.js";import"./Checkbox.1aab543e.js";import"./Collapse.65e9209c.js";import"./RadioGroup.8a51300e.js";import"./moment.a565bb48.js";import"./RangeSlider.469608ef.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.9d9616a9.js";import"./react-sizeme.e05ae4a4.js";import"./Skeleton.b1045233.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.ccaf5fac.js";import"./Typography.add999d3.js";import"./react-select.esm.46680d71.js";import"./Select-54ac8379.esm.f2d2d1c1.js";import"./CustomSelectWidget.99b3c48d.js";import"./index.browser.df438e04.js";import"./react-intersection-observer.esm.589d763b.js";import"./UserCard.2d2cc6f4.js";import"./IconCopy.992e7a95.js";import"./SkeletonTable.88eb5d4e.js";import"./times.41b100ff.js";import"./ToastMessage.8993ec69.js";import"./FullWidthAlert.e0d9cdf3.js";import"./Overlay.a4a42f09.js";import"./DateFormatter.5e09e6a5.js";import"./core.esm.5c6f00d3.js";import"./isEmpty.cacb1333.js";import"./isEqual.cb4edeb2.js";import"./union.4ecb3091.js";import"./isString.ecef5eed.js";import"./useGetDownloadListStatistics.ef9f1eb7.js";import"./QueryCount.db2aa427.js";import"./NoData.1468047f.js";import"./useGetAccessRequirement.8ecd9c93.js";import"./ManagedACTAccessRequirementStatus.a005139e.js";import"./FileUpload.6c56e348.js";import"./UserSearchBox.8bae26c4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.309089ec.js";import"./EntityLink.ad9d6fdb.js";import"./NoSearchResults.c9ebbd49.js";import"./SynapseVideo.a550c112.js";import"./IconList.63d9fa55.js";import"./UserCardList.5aa92928.js";const er={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"test-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"no-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"invalid-syn-id-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}}}}},title:"Synapse/ProvenanceGraph",component:t,argTypes:{}},o=n=>r("div",{className:"bootstrap-4-backport",children:r(t,{...n})}),e=o.bind({});e.args={entityRefs:[{targetId:"syn13363290",targetVersionNumber:9}],containerHeight:"500px"};const p=o.bind({});p.args={entityRefs:[{targetId:"syn8075918",targetVersionNumber:void 0}],containerHeight:"500px"};const i=o.bind({});i.args={entityRefs:[{targetId:"synINVALID",targetVersionNumber:1}],containerHeight:"500px"};const pr=["TestProvenanceGraph","NoProvenanceGraph","InvalidSynIDProvenanceGraph"];export{i as InvalidSynIDProvenanceGraph,p as NoProvenanceGraph,e as TestProvenanceGraph,pr as __namedExportsOrder,er as default};
