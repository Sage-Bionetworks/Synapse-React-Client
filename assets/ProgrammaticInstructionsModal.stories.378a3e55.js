import{P as r}from"./CardContainerLogic.9969f463.js";import{j as o,F as t}from"./jsx-runtime.00d70968.js";import"./index.a536ed12.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.fddb1cad.js";import"./iframe.f8de4d79.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.9ad81144.js";import"./use-deep-compare-effect.esm.0387ba0e.js";import"./uniq.21cfaf51.js";import"./toInteger.0e6612b4.js";import"./_cacheHas.cc87b06a.js";import"./without.067eb9a7.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.51001575.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.debd858a.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./InfoOutlined.60e019a4.js";import"./ElementWithTooltip.78af9f5c.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.8ed07549.js";import"./Dropdown.b0dc465f.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.44e3343c.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.9e234cde.js";import"./queryUtils.5251d1e3.js";import"./cloneDeep.01d4ff36.js";import"./Checkbox.c68b07e0.js";import"./uniqueId.eba72690.js";import"./Collapse.1f37bc76.js";import"./RadioGroup.d19dd04f.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.b55dfb91.js";import"./react-sizeme.35566800.js";import"./Skeleton.99b24529.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.91642215.js";import"./Typography.868473dc.js";import"./Select-54ac8379.esm.edd779c2.js";import"./CustomSelectWidget.b1e9ceda.js";import"./core.esm.7e77fe07.js";import"./index.4d54b1e5.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.e0c76c4b.js";import"./_baseIsEqual.464c1a19.js";import"./index.browser.36271dcc.js";import"./union.f396c337.js";import"./react-intersection-observer.esm.e445ee86.js";import"./UserCard.0eeb2c8e.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.ec4e7fc2.js";import"./times.b28c51b3.js";import"./ToastMessage.de6992d0.js";import"./FullWidthAlert.6afa82c9.js";import"./Overlay.7bb560f6.js";import"./DateFormatter.a5d74ef1.js";import"./useGetDownloadListStatistics.4a5e49e5.js";import"./QueryCount.32c1bf4b.js";import"./NoData.22383cce.js";import"./useGetAccessRequirement.daa359ed.js";import"./ManagedACTAccessRequirementStatus.13dcc250.js";import"./FileUpload.535eee0c.js";import"./UserSearchBox.d2a579a3.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.3c5ed09e.js";import"./EntityLink.75067f88.js";import"./NoSearchResults.a01d676d.js";import"./SynapseVideo.481872ef.js";import"./IconList.43e19c16.js";import"./UserCardList.c357a617.js";const Wo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const Xo=["Demo"];export{m as Demo,Xo as __namedExportsOrder,Wo as default};
