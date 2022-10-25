import{m as t}from"./CardContainerLogic.966dcb9a.js";import{j as r}from"./jsx-runtime.77363692.js";import"./index.a732538f.js";import"./index.f99e416a.js";import"./iframe.3e104d71.js";import"./Button.a1ee4a46.js";import"./index.57d09176.js";import"./withStyles.42967b9b.js";import"./utils.1575e991.js";import"./Alert.23dfc2a1.js";import"./index.35ce73ec.js";import"./isArray.c7b11016.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.06dbb4d5.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.5d89fb73.js";import"./use-deep-compare-effect.esm.dcb0f3e4.js";import"./uniq.e64e1927.js";import"./_baseSlice.50189bc5.js";import"./toInteger.f0a03622.js";import"./isSymbol.e0bcd831.js";import"./_cacheHas.9de43c93.js";import"./without.2623ee30.js";import"./uniqueId.0aa98db3.js";import"./_Set.114803e0.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.0948e412.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.38b3ef2f.js";import"./Tooltip.be22d41b.js";import"./createSvgIcon.5dedd617.js";import"./makeStyles.5320a651.js";import"./InfoOutlined.f24d250d.js";import"./FacetNav.9c55ad25.js";import"./queryUtils.914d9742.js";import"./useInfiniteQuery.04db0737.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.6ce6697a.js";import"./_baseClone.c2e775d5.js";import"./_getTag.73a622e1.js";import"./ElementWithTooltip.a6fc5c55.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.53c45092.js";import"./Modal.83aa33c5.js";import"./useWaitForDOMRef.d6e52f67.js";import"./inheritsLoose.0dea07e6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.8b85cd62.js";import"./isRequiredForA11y.20ed4857.js";import"./useEntity.e09d1558.js";import"./useMutation.eec4ce2b.js";import"./pick.d2f5354f.js";import"./Checkbox.b51365a3.js";import"./RadioGroup.b9612945.js";import"./moment.a565bb48.js";import"./RangeSlider.2d16df7a.js";import"./factory.3991fa84.js";import"./react-sizeme.f0753498.js";import"./Skeleton.5e1e1a25.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.92385dfe.js";import"./Typography.ce6b431d.js";import"./Close.0cccf407.js";import"./react-select.esm.bb6ed8c2.js";import"./Select-54ac8379.esm.64cb46c5.js";import"./CustomSelectWidget.740bac5b.js";import"./index.browser.8e80d642.js";import"./WarningModal.63841fbd.js";import"./react-intersection-observer.esm.bb6dbf1a.js";import"./UserCard.49fb0f82.js";import"./IconCopy.6cf649ca.js";import"./SkeletonTable.56e7de4d.js";import"./times.6412c2aa.js";import"./ToastMessage.b3f610fb.js";import"./FullWidthAlert.23cfe207.js";import"./Overlay.7aec48c8.js";import"./DateFormatter.2ae44782.js";import"./core.esm.fac6a271.js";import"./isEmpty.05b749b8.js";import"./isEqual.a46c2c02.js";import"./union.a158ee87.js";import"./isString.6eb15be9.js";import"./useGetDownloadListStatistics.c21e74a7.js";import"./QueryCount.6307145e.js";import"./NoData.4d33c0c0.js";import"./useGetAccessRequirement.c02616c6.js";import"./ManagedACTAccessRequirementStatus.196bafed.js";import"./FileUpload.f5a5a9d7.js";import"./UserSearchBox.3e89a8b3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.5896bf5f.js";import"./EntityLink.3426709b.js";import"./NoSearchResults.67a76d07.js";import"./SynapseVideo.6ab04233.js";import"./IconList.41a7ba37.js";import"./UserCardList.fa2df136.js";const $o={parameters:{storySource:{source:`import React from 'react'
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
