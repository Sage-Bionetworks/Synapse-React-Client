import{e as r}from"./CardContainerLogic.f69dae4e.js";import{j as o,F as t}from"./jsx-runtime.1225fe79.js";import"./index.5ba93209.js";import"./index.ecba92b3.js";import"./iframe.0fc0719c.js";import"./withStyles.65e61172.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.ffb572e5.js";import"./index.57d09176.js";import"./Button.63b1a959.js";import"./Transition.e362bf9f.js";import"./index.35ce73ec.js";import"./isArray.12f7965d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e9f5a006.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.a0a2160f.js";import"./use-deep-compare-effect.esm.4142315a.js";import"./uniq.074f12a5.js";import"./_baseSlice.50189bc5.js";import"./toInteger.b9b2999c.js";import"./isSymbol.aedbfa18.js";import"./_cacheHas.b0dcf809.js";import"./without.841d30b7.js";import"./uniqueId.e4d116e8.js";import"./_Set.bd47b98f.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.301d752e.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.194d4170.js";import"./Tooltip.ef3cac5b.js";import"./createSvgIcon.e824e175.js";import"./slicedToArray.e72f11da.js";import"./useTheme.ec45c4f6.js";import"./makeStyles.3ea686be.js";import"./InfoOutlined.a9437cb5.js";import"./ElementWithTooltip.2bd102e3.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.81d7ee62.js";import"./Modal.a0e2b98e.js";import"./useWaitForDOMRef.f0f2f2e1.js";import"./useWillUnmount.9fae65cc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.0a21972a.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.8d813cfe.js";import"./queryUtils.4bbd7789.js";import"./useInfiniteQuery.ec5dd77c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.9049580f.js";import"./_baseClone.d7be4d9e.js";import"./_getTag.05216d42.js";import"./useEntity.8206b3c7.js";import"./useMutation.2c776238.js";import"./pick.e68a58ee.js";import"./Checkbox.81ac9770.js";import"./Collapse.db882e02.js";import"./RadioGroup.880a066b.js";import"./moment.a565bb48.js";import"./RangeSlider.8adaf485.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.4da8ff9f.js";import"./react-sizeme.6e834905.js";import"./Skeleton.ad3e32c6.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9db387c0.js";import"./Typography.f29a9c1b.js";import"./react-select.esm.60203cdd.js";import"./Select-54ac8379.esm.79fa9ed4.js";import"./CustomSelectWidget.877f0e9a.js";import"./index.browser.dcec01dc.js";import"./react-intersection-observer.esm.ce392905.js";import"./UserCard.bfed225a.js";import"./IconCopy.86985968.js";import"./SkeletonTable.fa38a229.js";import"./times.0d5d25c2.js";import"./ToastMessage.55c99787.js";import"./FullWidthAlert.697d5521.js";import"./Overlay.4005d66e.js";import"./DateFormatter.59dc89d9.js";import"./core.esm.9c88542e.js";import"./isEmpty.1db83ad6.js";import"./isEqual.9819111f.js";import"./union.e086287a.js";import"./isString.6af799c1.js";import"./useGetDownloadListStatistics.6cf6ac68.js";import"./QueryCount.20e6713f.js";import"./NoData.2b664c92.js";import"./useGetAccessRequirement.09510a5a.js";import"./ManagedACTAccessRequirementStatus.625a8fa7.js";import"./FileUpload.f580243b.js";import"./UserSearchBox.c0389190.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.116c0c23.js";import"./EntityLink.b3b78eaf.js";import"./NoSearchResults.2986a599.js";import"./SynapseVideo.9defc544.js";import"./IconList.807147f2.js";import"./UserCardList.1d2578d3.js";const it={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:71,line:10},endLoc:{col:1,line:12},startBody:{col:71,line:10},endBody:{col:1,line:12}}}}},title:"Download/ProgrammaticInstructionsModal",component:r},p=i=>o(r,{...i}),m=p.bind({});m.args={show:!0,title:"Programmatic Instructions",cliNotes:o(t,{children:"Can provide Synapse CLI specific notes"}),cliCode:"Synapse CLI client code",rNotes:o(t,{children:"Can provide Synapse R Client specific notes"}),rCode:"Synapse R client code",pythonNotes:o(t,{children:"Can provide Synapse Python Client specific notes"}),pythonCode:"Synapse Python client code",helpUrl:"https://help.synapse.org",helpMarkdown:"Option to show a _HelpPopover_ in the title bar with a link to the docs site"};const pt=["Demo"];export{m as Demo,pt as __namedExportsOrder,it as default};
