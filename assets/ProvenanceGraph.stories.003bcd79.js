import{o as t}from"./CardContainerLogic.405dc753.js";import{j as r}from"./jsx-runtime.0721b30f.js";import"./index.96fee529.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./SynapseConstants.290eab74.js";import"./Button.c6170972.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";import"./sqlFunctions.b0106d41.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.c86a5cbb.js";import"./useGetInfoFromIds.58b9ed31.js";import"./use-deep-compare-effect.esm.401fba4c.js";import"./uniq.ab7ea7a6.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0c46f3eb.js";import"./isSymbol.2a2fd570.js";import"./_cacheHas.f0b8833d.js";import"./without.b89900d5.js";import"./uniqueId.22a08d1e.js";import"./_Set.530d31c3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.ef313e7e.js";import"./queryUtils.bc241af6.js";import"./useInfiniteQuery.160050ed.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.d4824e0e.js";import"./_baseClone.d846e333.js";import"./_getTag.374494a2.js";import"./NoSearchResults.37564460.js";import"./NoData.48f5a675.js";import"./unCamelCase.07e38083.js";import"./useEntity.77265cb8.js";import"./useMutation.5bff6e5b.js";import"./pick.7c26c579.js";import"./isEqual.587a056a.js";import"./ElementWithTooltip.0beed2ed.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.69d2b3a3.js";import"./Tooltip.95391ddc.js";import"./createSvgIcon.8972a51f.js";import"./InfoOutlined.1d86a385.js";import"./Dropdown.cda3e88c.js";import"./usePrevious.7579f6d6.js";import"./contains.4df2422e.js";import"./usePopperMarginModifiers.eef01d88.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.ad5f9514.js";import"./RadioGroup.9418e1f9.js";import"./dayjs.min.d1781a3e.js";import"./RangeSlider.84b56ff1.js";import"./factory.c5c0659e.js";import"./react-sizeme.31f58fbd.js";import"./Skeleton.bcaf6f06.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.596009c1.js";import"./Modal.ffe20d01.js";import"./inheritsLoose.53a219d1.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.65459bf1.js";import"./SelectionCriteriaPill.e84841d0.js";import"./Close.b5d307a6.js";import"./react-select.esm.16cf96dd.js";import"./Select-54ac8379.esm.6a29fbfd.js";import"./CustomSelectWidget.b6d556eb.js";import"./index.browser.72232f2a.js";import"./UserCard.9a1acc17.js";import"./IconCopy.343b69cc.js";import"./SkeletonTable.12d4458e.js";import"./times.938b95b0.js";import"./ToastMessage.c03bf450.js";import"./FullWidthAlert.f41552e4.js";import"./Overlay.d556696c.js";import"./WarningModal.1a2883db.js";import"./react-intersection-observer.esm.3ef9875c.js";import"./DateFormatter.f6dc5f9a.js";import"./utc.ffadba9e.js";import"./EntityIcon.1e92edc0.js";import"./core.esm.4ab3feef.js";import"./isEmpty.f6cb9f52.js";import"./union.067c0c88.js";import"./isString.cb81128d.js";import"./relativeTime.5f274717.js";import"./useGetDownloadListStatistics.8c5e991c.js";import"./QueryCount.de45b2ad.js";import"./useGetAccessRequirement.306475cd.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.4ab691de.js";import"./UserSearchBox.f1e02549.js";import"./UserOrTeamBadge.d5bf5d62.js";import"./EntityLink.40497b38.js";import"./SynapseVideo.878bc81a.js";import"./IconList.e1c0dfc0.js";import"./UserCardList.1e3a2a6f.js";const yr={parameters:{storySource:{source:`import React from 'react'
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
