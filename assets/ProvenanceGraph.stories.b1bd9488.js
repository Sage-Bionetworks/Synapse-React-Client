import{o as t}from"./CardContainerLogic.5070cf39.js";import{j as r}from"./jsx-runtime.470fedf8.js";import"./index.d78db713.js";import"./index.a7a39b73.js";import"./iframe.2c3c563c.js";import"./SynapseConstants.290eab74.js";import"./Button.32652e66.js";import"./styled.ca076b3f.js";import"./utils.de422cb3.js";import"./TransitionGroupContext.f07704a6.js";import"./useTheme.aca7cff5.js";import"./Alert.aa708f58.js";import"./hook.b9a8fbc8.js";import"./createWithBsPrefix.2bae2e8a.js";import"./divWithClassName.b6065814.js";import"./index.35ce73ec.js";import"./Fade.260ddc4e.js";import"./isArray.35667cb8.js";import"./getEndpoint.bb7ded34.js";import"./Link.46681652.js";import"./Typography.c6dffdf6.js";import"./Button.5119f75c.js";import"./ButtonBase.776e8c8b.js";import"./emotion-react.browser.esm.95d336ef.js";import"./sqlFunctions.be5d1a4e.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.cd515180.js";import"./useGetInfoFromIds.662a20cc.js";import"./use-deep-compare-effect.esm.71ecaff2.js";import"./uniq.7877dc80.js";import"./_baseSlice.50189bc5.js";import"./toInteger.4d490e0a.js";import"./isSymbol.d795e13a.js";import"./_cacheHas.6a8d008c.js";import"./without.bad81c9f.js";import"./uniqueId.dfabcedb.js";import"./_Set.96bbcc5a.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.770ced67.js";import"./queryUtils.b5014275.js";import"./useInfiniteQuery.20432a69.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.43e4fd26.js";import"./_baseClone.a93e8b8a.js";import"./_getTag.da3e73a3.js";import"./NoSearchResults.5c6626c4.js";import"./NoData.addfae26.js";import"./unCamelCase.07e38083.js";import"./useEntity.a051f784.js";import"./useMutation.61e704e1.js";import"./pick.ef3fcb56.js";import"./isEqual.b9ce82d6.js";import"./ElementWithTooltip.c4960d74.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.f9cd712e.js";import"./Tooltip.1e1cee1e.js";import"./createSvgIcon.d70ded48.js";import"./InfoOutlined.2a13bef6.js";import"./Dropdown.2a6947a5.js";import"./usePrevious.98cde62f.js";import"./contains.2ee9a4e4.js";import"./usePopperMarginModifiers.12622bfd.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.6638f0fe.js";import"./RadioGroup.e948e185.js";import"./dayjs.min.4f8336ad.js";import"./RangeSlider.2cca730a.js";import"./factory.6c8cd09a.js";import"./react-sizeme.53fda094.js";import"./Skeleton.d220704f.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.28d2c4c6.js";import"./Modal.02af6ee8.js";import"./inheritsLoose.007b7f1b.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.42b83902.js";import"./SelectionCriteriaPill.d6d749de.js";import"./Close.a4bdb366.js";import"./react-select.esm.375ac3d3.js";import"./Select-54ac8379.esm.b34a3580.js";import"./CustomSelectWidget.a05fb370.js";import"./index.browser.ff037ea7.js";import"./UserCard.81f9cb14.js";import"./IconCopy.6e42559c.js";import"./SkeletonTable.9062b54f.js";import"./times.9aa75450.js";import"./ToastMessage.0e3c58b8.js";import"./FullWidthAlert.e4048025.js";import"./Overlay.41a15913.js";import"./WarningModal.cebca19c.js";import"./react-intersection-observer.esm.17b02c14.js";import"./DateFormatter.5fca59d3.js";import"./utc.762ba311.js";import"./EntityIcon.0733b939.js";import"./core.esm.2e89d46d.js";import"./isEmpty.6ee7f7a5.js";import"./union.5b5e6920.js";import"./isString.6b8ee545.js";import"./relativeTime.01e67285.js";import"./useGetDownloadListStatistics.35f95881.js";import"./QueryCount.83c58f8a.js";import"./useGetAccessRequirement.c6d9edea.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.5f986572.js";import"./UserSearchBox.decc11d9.js";import"./UserOrTeamBadge.a535acf5.js";import"./EntityLink.30ea011f.js";import"./SynapseVideo.dd660335.js";import"./IconList.c8b33af8.js";import"./UserCardList.b6c4f6ae.js";const yr={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"test-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"no-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}},"invalid-syn-id-provenance-graph":{startLoc:{col:57,line:15},endLoc:{col:1,line:19},startBody:{col:57,line:15},endBody:{col:1,line:19}}}}},title:"Synapse/ProvenanceGraph",component:t,argTypes:{}},o=n=>r("div",{className:"bootstrap-4-backport",children:r(t,{...n})}),p=o.bind({});p.args={entityRefs:[{targetId:"syn13363290",targetVersionNumber:9}],containerHeight:"500px"};const i=o.bind({});i.args={entityRefs:[{targetId:"syn8075918",targetVersionNumber:void 0}],containerHeight:"500px"};const e=o.bind({});e.args={entityRefs:[{targetId:"synINVALID",targetVersionNumber:1}],containerHeight:"500px"};const hr=["TestProvenanceGraph","NoProvenanceGraph","InvalidSynIDProvenanceGraph"];export{e as InvalidSynIDProvenanceGraph,i as NoProvenanceGraph,p as TestProvenanceGraph,hr as __namedExportsOrder,yr as default};
