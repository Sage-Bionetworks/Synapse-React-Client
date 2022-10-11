import{m as t}from"./CardContainerLogic.8eb79f67.js";import{j as r}from"./jsx-runtime.f6e67d69.js";import"./index.399b1ebb.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./Alert.161bc8be.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./Transition.45107636.js";import"./index.35ce73ec.js";import"./isArray.bbc3389f.js";import"./withStyles.e9153c6c.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b9f91416.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e787fd80.js";import"./use-deep-compare-effect.esm.9fbef6c8.js";import"./uniq.3ac68f6d.js";import"./_baseSlice.50189bc5.js";import"./toInteger.6ecd4cc2.js";import"./isSymbol.817739da.js";import"./_cacheHas.fc28b5e2.js";import"./without.de70e7ae.js";import"./uniqueId.b369d35f.js";import"./_Set.5337c941.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.183d2b65.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.76f9c9ad.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./useTheme.b5d1a103.js";import"./makeStyles.b3ebb6fc.js";import"./InfoOutlined.6b0ecc0d.js";import"./ElementWithTooltip.b5092525.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.1c5534ea.js";import"./Modal.50361e04.js";import"./useWaitForDOMRef.132cafe6.js";import"./inheritsLoose.e00878bc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.9f59499b.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.e9c5d9db.js";import"./queryUtils.78d610e1.js";import"./useInfiniteQuery.409ad78a.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.88bcbe9b.js";import"./_baseClone.ecc3e8dc.js";import"./_getTag.9119bcb7.js";import"./useEntity.50d0ee88.js";import"./useMutation.40e1a364.js";import"./pick.26fadd1c.js";import"./Checkbox.0d1a5d69.js";import"./Collapse.5bef12a9.js";import"./RadioGroup.af506903.js";import"./moment.a565bb48.js";import"./RangeSlider.06468401.js";import"./factory.9dd574be.js";import"./react-sizeme.f3b24b9a.js";import"./Skeleton.e925cd71.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.e87e514d.js";import"./Typography.8482fe8d.js";import"./react-select.esm.7e14925b.js";import"./Select-54ac8379.esm.4ecb5386.js";import"./CustomSelectWidget.3b55fea6.js";import"./index.browser.94009a96.js";import"./WarningModal.f87be017.js";import"./react-intersection-observer.esm.88b7b49d.js";import"./UserCard.c2f5359e.js";import"./IconCopy.bae338e3.js";import"./SkeletonTable.7ca00999.js";import"./times.8c0d57e8.js";import"./ToastMessage.ef3fd930.js";import"./FullWidthAlert.a36cfcd9.js";import"./Overlay.2be5ac15.js";import"./DateFormatter.ddf3e9f0.js";import"./core.esm.e018ab8d.js";import"./isEmpty.fe96177f.js";import"./isEqual.e452e983.js";import"./union.f7dcf0c1.js";import"./isString.172bf1ca.js";import"./useGetDownloadListStatistics.098c2be3.js";import"./QueryCount.3c5279b3.js";import"./NoData.5d71843d.js";import"./useGetAccessRequirement.8d39abbd.js";import"./ManagedACTAccessRequirementStatus.f4931fe7.js";import"./FileUpload.bfe00a27.js";import"./UserSearchBox.24c16fe5.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.b633a9dc.js";import"./EntityLink.58d8c244.js";import"./NoSearchResults.bdc973ca.js";import"./SynapseVideo.7302a8fd.js";import"./IconList.3707af09.js";import"./UserCardList.12bbb1f9.js";const or={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"test-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"no-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"invalid-syn-id-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}}}}},title:"Synapse/ProvenanceGraph",component:t,argTypes:{}},o=n=>r("div",{className:"bootstrap-4-backport",children:r(t,{...n})}),e=o.bind({});e.args={entityRefs:[{targetId:"syn13363290",targetVersionNumber:9}],containerHeight:"500px"};const p=o.bind({});p.args={entityRefs:[{targetId:"syn8075918",targetVersionNumber:void 0}],containerHeight:"500px"};const i=o.bind({});i.args={entityRefs:[{targetId:"synINVALID",targetVersionNumber:1}],containerHeight:"500px"};const rr=["TestProvenanceGraph","NoProvenanceGraph","InvalidSynIDProvenanceGraph"];export{i as InvalidSynIDProvenanceGraph,p as NoProvenanceGraph,e as TestProvenanceGraph,rr as __namedExportsOrder,or as default};
