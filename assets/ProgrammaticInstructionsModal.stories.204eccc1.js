import{f as r}from"./CardContainerLogic.8a51ae9f.js";import{j as o,F as t}from"./jsx-runtime.e45f5946.js";import"./index.84caca20.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./SynapseConstants.290eab74.js";import"./Button.85a360c3.js";import"./styled.11fa6590.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Typography.33698c6c.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";import"./sqlFunctions.cedc0d99.js";import"./RegularExpressions.3cd69849.js";import"./QueryFilter.68a47eb2.js";import"./useGetInfoFromIds.b7e31f92.js";import"./use-deep-compare-effect.esm.6947367c.js";import"./uniq.1d7ae387.js";import"./_baseSlice.50189bc5.js";import"./toInteger.836ec642.js";import"./isSymbol.564875b4.js";import"./_cacheHas.a4903518.js";import"./without.046078f0.js";import"./uniqueId.c6c12783.js";import"./_Set.5d4d075d.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./FacetNav.b1ef8918.js";import"./queryUtils.5b9bb8c0.js";import"./useInfiniteQuery.8572f9ef.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.53475be9.js";import"./_baseClone.7677870c.js";import"./_getTag.adac27b6.js";import"./NoSearchResults.7acf193a.js";import"./NoData.a9d8f4b7.js";import"./unCamelCase.07e38083.js";import"./useEntity.87d22d65.js";import"./useMutation.33a42727.js";import"./pick.44941d26.js";import"./isEqual.989f48ab.js";import"./ElementWithTooltip.ca2e949f.js";import"./SynapseTableConstants.07ecdebd.js";import"./IconSvg.fd56a75b.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./InfoOutlined.c1b233d2.js";import"./Dropdown.6d186adc.js";import"./usePrevious.820aff42.js";import"./contains.82fe9acc.js";import"./usePopperMarginModifiers.40113aa3.js";import"./hasClass.56fd144a.js";import"./isRequiredForA11y.20ed4857.js";import"./Checkbox.7c7046f9.js";import"./RadioGroup.83968d9b.js";import"./moment.a565bb48.js";import"./RangeSlider.973fdfc9.js";import"./factory.371506bb.js";import"./react-sizeme.e3a57323.js";import"./Skeleton.d7dd8f63.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2ae08f91.js";import"./Modal.3cf810c4.js";import"./inheritsLoose.01564ab7.js";import"./removeClass.27874bcb.js";import"./useWaitForDOMRef.fd0babf1.js";import"./SelectionCriteriaPill.5950976b.js";import"./Close.bd4ed5e0.js";import"./react-select.esm.f2c082aa.js";import"./Select-54ac8379.esm.1506e5bc.js";import"./CustomSelectWidget.afd0ca63.js";import"./index.browser.e3fed4e8.js";import"./UserCard.8473dff8.js";import"./IconCopy.9bac9114.js";import"./SkeletonTable.3b39696e.js";import"./times.dc5c8712.js";import"./ToastMessage.dffa6777.js";import"./FullWidthAlert.1145dd98.js";import"./Overlay.2b8a7b39.js";import"./WarningModal.b9cdddf8.js";import"./react-intersection-observer.esm.69fbb5ff.js";import"./DateFormatter.a9cbfa7c.js";import"./EntityIcon.6b3ffc55.js";import"./core.esm.d3bdc97d.js";import"./isEmpty.c7d7f52e.js";import"./union.7d62ae42.js";import"./isString.b5efd261.js";import"./useGetDownloadListStatistics.69268546.js";import"./QueryCount.a23c9445.js";import"./useGetAccessRequirement.0efba7a1.js";import"./RestrictionInformation.edfbac5a.js";import"./ManagedACTAccessRequirementStatus.be369a71.js";import"./FileUpload.3dfa701d.js";import"./UserSearchBox.84eaecbc.js";import"./UserOrTeamBadge.0dc6e448.js";import"./EntityLink.3232d5b6.js";import"./SynapseVideo.b76f842e.js";import"./IconList.7e9376dc.js";import"./UserCardList.45c04af5.js";const ct={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const lt=["Demo"];export{m as Demo,lt as __namedExportsOrder,ct as default};
