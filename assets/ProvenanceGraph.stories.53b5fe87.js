import{l as t}from"./CardContainerLogic.955ba9f1.js";import{j as r}from"./jsx-runtime.deeea9fb.js";import"./index.7be09227.js";import"./index.f3b69ce7.js";import"./iframe.96756ded.js";import"./withStyles.f2d2f220.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.aa68dfe4.js";import"./index.57d09176.js";import"./Button.467325a1.js";import"./Transition.9b5aa1a6.js";import"./index.35ce73ec.js";import"./isArray.19812eb5.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.72adc85a.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.6804d36e.js";import"./use-deep-compare-effect.esm.e681acb1.js";import"./uniq.29300fd9.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4180d2d6.js";import"./isSymbol.8f6c3bd1.js";import"./_cacheHas.09d77e08.js";import"./without.bc35064c.js";import"./uniqueId.b5368ced.js";import"./_Set.fa240adf.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.7341bf4d.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.2cea675a.js";import"./Tooltip.ae5e0614.js";import"./createSvgIcon.42b31dcf.js";import"./slicedToArray.e72f11da.js";import"./useTheme.966b26ad.js";import"./makeStyles.a83d6931.js";import"./InfoOutlined.887e97b0.js";import"./ElementWithTooltip.26e18518.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.c0580144.js";import"./Modal.8952bf32.js";import"./useWaitForDOMRef.df84dcc7.js";import"./useWillUnmount.1e6d660a.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.77a92501.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e934b198.js";import"./queryUtils.1cad3b90.js";import"./useInfiniteQuery.34e4a159.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.bea30b36.js";import"./_baseClone.afcf1b4f.js";import"./_getTag.3d57da1a.js";import"./useEntity.fb522f45.js";import"./useMutation.f78c5fa2.js";import"./pick.abc56384.js";import"./Checkbox.1692e339.js";import"./Collapse.b4263ab8.js";import"./RadioGroup.ce4dfa3c.js";import"./moment.a565bb48.js";import"./RangeSlider.d04dd5f2.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.f2a5de3b.js";import"./react-sizeme.9d2cf550.js";import"./Skeleton.e0164e1b.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.1e547951.js";import"./Typography.b3d032a4.js";import"./react-select.esm.b680f708.js";import"./Select-54ac8379.esm.9670758d.js";import"./CustomSelectWidget.25f76d15.js";import"./index.browser.44f4da07.js";import"./react-intersection-observer.esm.0f86e7bf.js";import"./UserCard.57928c55.js";import"./IconCopy.bfd853e2.js";import"./SkeletonTable.ea2a6145.js";import"./times.5ef5fea7.js";import"./ToastMessage.a987dfc7.js";import"./FullWidthAlert.ab2f1882.js";import"./Overlay.10ea0fdc.js";import"./DateFormatter.d24ca1f5.js";import"./core.esm.b08adb16.js";import"./isEmpty.efef9890.js";import"./isEqual.e98f604d.js";import"./union.65d98886.js";import"./isString.a5518a8e.js";import"./useGetDownloadListStatistics.4c2814c2.js";import"./QueryCount.cf5bd4a3.js";import"./NoData.379563f2.js";import"./useGetAccessRequirement.dfa7608e.js";import"./ManagedACTAccessRequirementStatus.52ee5bc9.js";import"./FileUpload.f0d186b4.js";import"./UserSearchBox.a3764785.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.4ee33f77.js";import"./EntityLink.94602156.js";import"./NoSearchResults.74a28494.js";import"./SynapseVideo.bc9c6e76.js";import"./IconList.aa39c54d.js";import"./UserCardList.bd15903c.js";const er={parameters:{storySource:{source:`import React from 'react'
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
