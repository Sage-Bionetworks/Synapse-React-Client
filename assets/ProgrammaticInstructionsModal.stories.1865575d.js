import{e as r}from"./CardContainerLogic.421e4955.js";import{j as o,F as t}from"./jsx-runtime.a232804d.js";import"./index.df4d7189.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./withStyles.1db4abc8.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./isArray.a5a56f48.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.e6e0a308.js";import"./use-deep-compare-effect.esm.2b5691ed.js";import"./uniq.f95d5498.js";import"./_baseSlice.50189bc5.js";import"./toInteger.99850a56.js";import"./isSymbol.af0f15b0.js";import"./_cacheHas.2f6e173d.js";import"./without.49e70119.js";import"./uniqueId.42db352a.js";import"./_Set.13d8dc83.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.d798df03.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.7d220ad3.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./makeStyles.403aaa55.js";import"./InfoOutlined.d81a19b2.js";import"./ElementWithTooltip.6f5c5d8e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.026e24f0.js";import"./Modal.487f443a.js";import"./useWaitForDOMRef.b691e8e9.js";import"./inheritsLoose.5977b5ad.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.2b01b6ad.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f42b17a9.js";import"./queryUtils.9bf0fae4.js";import"./useInfiniteQuery.b7b3231b.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.7282c000.js";import"./_baseClone.1f24ee6e.js";import"./_getTag.c51a4401.js";import"./useEntity.7c42ef40.js";import"./useMutation.4f028f2a.js";import"./pick.aef66a75.js";import"./Checkbox.7ef807c5.js";import"./RadioGroup.cc16eeb1.js";import"./moment.a565bb48.js";import"./RangeSlider.62604c0d.js";import"./factory.6225fee9.js";import"./react-sizeme.aa00de7b.js";import"./Skeleton.e3b72fa9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.01a40955.js";import"./Typography.9247f57a.js";import"./Close.c83b42bd.js";import"./react-select.esm.67e5da67.js";import"./Select-54ac8379.esm.9dfe37c4.js";import"./CustomSelectWidget.ccbb7c74.js";import"./index.browser.d89fac8c.js";import"./WarningModal.a66e9200.js";import"./react-intersection-observer.esm.d5ed9f38.js";import"./UserCard.7296873e.js";import"./IconCopy.5c84b271.js";import"./SkeletonTable.42b69551.js";import"./times.94f8f16d.js";import"./ToastMessage.b42768ca.js";import"./FullWidthAlert.5abd6e7a.js";import"./Overlay.2735c2ff.js";import"./DateFormatter.ce8cc91c.js";import"./core.esm.a7a5cd9f.js";import"./isEmpty.d7fd8764.js";import"./isEqual.18f214cb.js";import"./union.17ff043e.js";import"./isString.75f8fb7d.js";import"./useGetDownloadListStatistics.b9bf89d3.js";import"./QueryCount.ff63676b.js";import"./NoData.8f77bcd7.js";import"./useGetAccessRequirement.cd2c60ff.js";import"./ManagedACTAccessRequirementStatus.c68c8098.js";import"./FileUpload.af61c181.js";import"./UserSearchBox.7bb509e8.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.f72816e7.js";import"./EntityLink.5231b74d.js";import"./NoSearchResults.9dcecf7f.js";import"./SynapseVideo.7d27d405.js";import"./IconList.5039410a.js";import"./UserCardList.17a2ea75.js";const Zo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const $o=["Demo"];export{m as Demo,$o as __namedExportsOrder,Zo as default};
