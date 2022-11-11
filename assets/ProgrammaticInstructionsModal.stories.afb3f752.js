import{e as r}from"./CardContainerLogic.f2f93b1a.js";import{j as o,F as t}from"./jsx-runtime.1f7e2749.js";import"./index.f68a6cae.js";import"./index.59f4cc8a.js";import"./iframe.6a6b78dc.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2ee39cf1.js";import"./styled.228dca89.js";import"./utils.03e93c91.js";import"./TransitionGroupContext.1be95f81.js";import"./Alert.6d227703.js";import"./createWithBsPrefix.ef9ee852.js";import"./index.35ce73ec.js";import"./isArray.4b374ec1.js";import"./getEndpoint.bb7ded34.js";import"./Link.78173b1f.js";import"./Typography.07e15eab.js";import"./Button.a8e6e6bc.js";import"./ButtonBase.1b6ed208.js";import"./sqlFunctions.65ecca18.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.7116bdbb.js";import"./useGetInfoFromIds.eb5a2a75.js";import"./use-deep-compare-effect.esm.f85f24b2.js";import"./uniq.94fd4f21.js";import"./_baseSlice.50189bc5.js";import"./toInteger.681218b6.js";import"./isSymbol.71d03595.js";import"./_cacheHas.2df41ce9.js";import"./without.1e6ad0b6.js";import"./uniqueId.1ab068bd.js";import"./_Set.45a3d0a3.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.9ab3c6f6.js";import"./queryUtils.91e7c692.js";import"./useInfiniteQuery.45f793da.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.4fb85486.js";import"./_baseClone.ddac7b1c.js";import"./_getTag.da12c300.js";import"./NoSearchResults.6abaf654.js";import"./NoData.641d1e6e.js";import"./unCamelCase.07e38083.js";import"./useEntity.1f1affc7.js";import"./useMutation.899c237a.js";import"./pick.76d76182.js";import"./isEqual.899892cd.js";import"./ElementWithTooltip.4a6504ef.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.8bc0ae7f.js";import"./Tooltip.24f13342.js";import"./createSvgIcon.78845d16.js";import"./InfoOutlined.48f0d414.js";import"./Dropdown.2bcb95fc.js";import"./usePrevious.14150b43.js";import"./contains.ed33f850.js";import"./usePopperMarginModifiers.8d5f418f.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.f8ef0ec3.js";import"./RadioGroup.77eab356.js";import"./moment.a565bb48.js";import"./RangeSlider.9d50332a.js";import"./factory.256a2519.js";import"./react-sizeme.3f589b51.js";import"./Skeleton.5856d9ed.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.f44a6596.js";import"./Modal.f7648653.js";import"./inheritsLoose.762b68e4.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.165f6c89.js";import"./SelectionCriteriaPill.0a4f30a2.js";import"./Close.f4dea683.js";import"./react-select.esm.db9c4861.js";import"./Select-54ac8379.esm.42cdf544.js";import"./CustomSelectWidget.fe4a18fc.js";import"./index.browser.bffaec12.js";import"./UserCard.b1c715fb.js";import"./IconCopy.f0404146.js";import"./SkeletonTable.fa74e546.js";import"./times.5455f6d7.js";import"./ToastMessage.26e3c87f.js";import"./FullWidthAlert.aa236ca8.js";import"./Overlay.c88a9d83.js";import"./WarningModal.227ca6c4.js";import"./react-intersection-observer.esm.152a9ed7.js";import"./DateFormatter.4d793d5b.js";import"./EntityIcon.6c24044c.js";import"./core.esm.e0cf77b0.js";import"./isEmpty.d4d30759.js";import"./union.32ad02c3.js";import"./isString.bbd53519.js";import"./useGetDownloadListStatistics.6fb7b380.js";import"./QueryCount.4fcad50d.js";import"./useGetAccessRequirement.15967366.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.18edc2ca.js";import"./UserSearchBox.cfcd8d73.js";import"./UserOrTeamBadge.8a1d9249.js";import"./EntityLink.d2dbfd3b.js";import"./SynapseVideo.b6a332b7.js";import"./IconList.f645a498.js";import"./UserCardList.52d14b6c.js";const mt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProgrammaticInstructionsModal } from './ProgrammaticInstructionsModal'

export default {
  title: 'Download/ProgrammaticInstructionsModal',
  component: ProgrammaticInstructionsModal,
} as ComponentMeta<typeof ProgrammaticInstructionsModal>

const Template: ComponentStory<typeof ProgrammaticInstructionsModal> = args => (
  <ProgrammaticInstructionsModal {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  show: true,
  title: 'Programmatic Instructions',
  cliNotes: <>Can provide Synapse CLI specific notes</>,
  cliCode: 'Synapse CLI client code',
  rNotes: <>Can provide Synapse R Client specific notes</>,
  rCode: 'Synapse R client code',
  pythonNotes: <>Can provide Synapse Python Client specific notes</>,
  pythonCode: 'Synapse Python client code',
  helpUrl: 'https://help.synapse.org',
  helpMarkdown:
    'Option to show a _HelpPopover_ in the title bar with a link to the docs site',
}
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const nt=["Demo"];export{m as Demo,nt as __namedExportsOrder,mt as default};
