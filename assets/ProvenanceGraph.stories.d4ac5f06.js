import{m as t}from"./CardContainerLogic.836d5c1f.js";import{j as r}from"./jsx-runtime.a4497586.js";import"./index.845be1a0.js";import"./index.917fd15d.js";import"./iframe.ee324841.js";import"./Button.7ac62e85.js";import"./index.57d09176.js";import"./withStyles.e58effce.js";import"./utils.815e1282.js";import"./Alert.ea5d26f8.js";import"./index.35ce73ec.js";import"./isArray.c41320ad.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.22d8eb07.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.dc6e91e8.js";import"./use-deep-compare-effect.esm.97258745.js";import"./uniq.a2b94e52.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0f367a79.js";import"./isSymbol.7191624c.js";import"./_cacheHas.5a4b096a.js";import"./without.27df27c9.js";import"./uniqueId.d008468a.js";import"./_Set.0ea9e224.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.c2b44a8a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.840b4acb.js";import"./Tooltip.a6d04027.js";import"./createSvgIcon.e5aecfe8.js";import"./makeStyles.589ac29c.js";import"./InfoOutlined.5d54a47c.js";import"./ElementWithTooltip.4569d621.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.efcfb1fd.js";import"./Modal.8e373f50.js";import"./useWaitForDOMRef.e71a20e5.js";import"./inheritsLoose.3afb7370.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8523f7d7.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.32e180c2.js";import"./queryUtils.a41a3769.js";import"./useInfiniteQuery.61b1e683.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d2ac0db5.js";import"./_baseClone.0d27c7e1.js";import"./_getTag.e16a82bc.js";import"./useEntity.9bdacd03.js";import"./useMutation.ac0673eb.js";import"./pick.e2ee535b.js";import"./Checkbox.e9f9feef.js";import"./RadioGroup.8eea9b11.js";import"./moment.a565bb48.js";import"./RangeSlider.c1a90a81.js";import"./factory.c28b2d87.js";import"./react-sizeme.595c45d1.js";import"./Skeleton.9af51d39.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.a29748b1.js";import"./Typography.15373abf.js";import"./Close.0c3b37eb.js";import"./react-select.esm.fa71d62c.js";import"./Select-54ac8379.esm.1b620f4e.js";import"./CustomSelectWidget.05a3828a.js";import"./index.browser.48facac8.js";import"./WarningModal.49e6d1d4.js";import"./react-intersection-observer.esm.360ca53f.js";import"./UserCard.ea6608ec.js";import"./IconCopy.6d9a9cc0.js";import"./SkeletonTable.5f0641c1.js";import"./times.53464203.js";import"./ToastMessage.29ea9537.js";import"./FullWidthAlert.6e6e96b4.js";import"./Overlay.7abe92df.js";import"./DateFormatter.bc7fcbb4.js";import"./core.esm.e85b24d4.js";import"./isEmpty.ce343696.js";import"./isEqual.dcdf7c74.js";import"./union.6518de9c.js";import"./isString.c48687a7.js";import"./useGetDownloadListStatistics.b2b3a576.js";import"./QueryCount.e6efbfd3.js";import"./NoData.35d75376.js";import"./useGetAccessRequirement.20a2228d.js";import"./ManagedACTAccessRequirementStatus.3d74029d.js";import"./FileUpload.897dc886.js";import"./UserSearchBox.1dfa0f09.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.34f13a28.js";import"./EntityLink.b8238cd5.js";import"./NoSearchResults.705442e7.js";import"./SynapseVideo.d503a679.js";import"./IconList.6148c9b2.js";import"./UserCardList.6980500a.js";const $o={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"test-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"no-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"invalid-syn-id-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}}}}},title:"Synapse/ProvenanceGraph",component:t,argTypes:{}},o=n=>r("div",{className:"bootstrap-4-backport",children:r(t,{...n})}),e=o.bind({});e.args={entityRefs:[{targetId:"syn13363290",targetVersionNumber:9}],containerHeight:"500px"};const p=o.bind({});p.args={entityRefs:[{targetId:"syn8075918",targetVersionNumber:void 0}],containerHeight:"500px"};const i=o.bind({});i.args={entityRefs:[{targetId:"synINVALID",targetVersionNumber:1}],containerHeight:"500px"};const or=["TestProvenanceGraph","NoProvenanceGraph","InvalidSynIDProvenanceGraph"];export{i as InvalidSynIDProvenanceGraph,p as NoProvenanceGraph,e as TestProvenanceGraph,or as __namedExportsOrder,$o as default};
