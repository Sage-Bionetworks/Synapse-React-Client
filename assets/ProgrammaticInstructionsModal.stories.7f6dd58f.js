import{e as r}from"./CardContainerLogic.ff1a25a1.js";import{j as o,F as t}from"./jsx-runtime.66426239.js";import"./index.5eb45ec5.js";import"./index.06c514da.js";import"./iframe.7709cd8b.js";import"./Button.0925c41b.js";import"./index.57d09176.js";import"./withStyles.c0f84b5f.js";import"./utils.dd2a9ff9.js";import"./Alert.6f0c6d33.js";import"./index.35ce73ec.js";import"./isArray.563d20f4.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.bec2abf5.js";import"./sqlFunctions.1d7d9843.js";import"./useGetInfoFromIds.119a9443.js";import"./use-deep-compare-effect.esm.1637ad2d.js";import"./uniq.e2f0285b.js";import"./_baseSlice.50189bc5.js";import"./toInteger.ba340474.js";import"./isSymbol.e6b0fab2.js";import"./_cacheHas.6245eac1.js";import"./without.f02e359a.js";import"./uniqueId.2b0d7b31.js";import"./_Set.1a050ac1.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.a4645a13.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.43ff89f7.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./makeStyles.c7a35cbe.js";import"./InfoOutlined.009cccae.js";import"./ElementWithTooltip.7dedc88e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.c6a10ffa.js";import"./Modal.291f0168.js";import"./useWaitForDOMRef.3996ecc7.js";import"./inheritsLoose.225e3cf9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.ba99acc1.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.3d8d5548.js";import"./queryUtils.ca38c309.js";import"./useInfiniteQuery.3f76db01.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.7afd2120.js";import"./_baseClone.055cb747.js";import"./_getTag.89d7bb96.js";import"./useEntity.58b03ce0.js";import"./useMutation.ea725d86.js";import"./pick.6bb06e02.js";import"./Checkbox.1a22a1aa.js";import"./RadioGroup.f8494210.js";import"./moment.a565bb48.js";import"./RangeSlider.030b69d1.js";import"./factory.6ce2258f.js";import"./react-sizeme.2f27ae3e.js";import"./Skeleton.b36923c9.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.047fc901.js";import"./Typography.23a20d7c.js";import"./Close.1abe447b.js";import"./react-select.esm.2061b8b8.js";import"./Select-54ac8379.esm.55f4ced4.js";import"./CustomSelectWidget.c1a40e61.js";import"./index.browser.cea0bcba.js";import"./WarningModal.3dab13dd.js";import"./react-intersection-observer.esm.415ae57d.js";import"./UserCard.11db0e1e.js";import"./IconCopy.e9990250.js";import"./SkeletonTable.0efda436.js";import"./times.0a791da1.js";import"./ToastMessage.0eedc8b3.js";import"./FullWidthAlert.28f85f7a.js";import"./Overlay.99b543ad.js";import"./DateFormatter.a4e434c7.js";import"./core.esm.4c8f2701.js";import"./isEmpty.4789c1d4.js";import"./isEqual.c4465f8d.js";import"./union.b9382c01.js";import"./isString.d5517332.js";import"./useGetDownloadListStatistics.73be1e4d.js";import"./QueryCount.4865baae.js";import"./NoData.15f21b05.js";import"./useGetAccessRequirement.4709fedf.js";import"./ManagedACTAccessRequirementStatus.7164d615.js";import"./FileUpload.de0396a9.js";import"./UserSearchBox.bf763e8f.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.17035e13.js";import"./EntityLink.61591bea.js";import"./NoSearchResults.e6d50f64.js";import"./SynapseVideo.c3eb3bc1.js";import"./IconList.1b4d3d3d.js";import"./UserCardList.181a41e6.js";const Zo={parameters:{storySource:{source:`import React from 'react'
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
