import{P as r}from"./CardContainerLogic.56f15356.js";import{j as o,F as t}from"./jsx-runtime.9b9f5ec2.js";import"./index.65b6889e.js";import"./index.9efb4fab.js";import"./iframe.8f6c7ea4.js";import"./withStyles.c4d286cc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a1c2894f.js";import"./index.57d09176.js";import"./Button.17fde95a.js";import"./Transition.95b45c06.js";import"./index.35ce73ec.js";import"./isArray.88d141d1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.59ebdbf7.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.491c328a.js";import"./use-deep-compare-effect.esm.1429f412.js";import"./uniq.9703bf37.js";import"./_baseSlice.50189bc5.js";import"./toInteger.816a2f64.js";import"./isSymbol.29619e0a.js";import"./_cacheHas.66bf6592.js";import"./without.6eda5c4e.js";import"./uniqueId.f1f42f72.js";import"./_Set.ee8a3840.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.728bd872.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.4c036b55.js";import"./Tooltip.6dc32b0d.js";import"./createSvgIcon.0c80d9df.js";import"./slicedToArray.e72f11da.js";import"./useTheme.b4767795.js";import"./makeStyles.3075ce24.js";import"./InfoOutlined.1a2adc17.js";import"./ElementWithTooltip.2814faf5.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.9cd9605c.js";import"./Modal.f6a7e351.js";import"./useWaitForDOMRef.6edb2b10.js";import"./useWillUnmount.a9334a26.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.e3573a90.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f584c833.js";import"./queryUtils.d630e895.js";import"./useInfiniteQuery.63a858a4.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.ed3f4363.js";import"./_baseClone.801a028e.js";import"./_getTag.491e79d0.js";import"./useEntity.ac365d34.js";import"./useMutation.d59a9e88.js";import"./pick.68578698.js";import"./Checkbox.1d278076.js";import"./Collapse.f8b3c179.js";import"./RadioGroup.531df55e.js";import"./moment.a565bb48.js";import"./RangeSlider.b9ebaf58.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.8f21ce6a.js";import"./react-sizeme.8859d798.js";import"./Skeleton.223a1071.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.1cf3fc8a.js";import"./Typography.5121ab9c.js";import"./react-select.esm.280fb03d.js";import"./Select-54ac8379.esm.2e157f03.js";import"./CustomSelectWidget.888b8830.js";import"./core.esm.4e3f6aa1.js";import"./index.90bd3452.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.26f1ae05.js";import"./_baseIsEqual.21cf0439.js";import"./index.browser.2ec99050.js";import"./union.0786fe8c.js";import"./react-intersection-observer.esm.c63d6e7a.js";import"./UserCard.96e69903.js";import"./IconCopy.fcae01ed.js";import"./SkeletonTable.ec89eee6.js";import"./times.3879e401.js";import"./ToastMessage.820cec30.js";import"./FullWidthAlert.4632d904.js";import"./Overlay.940ff29e.js";import"./DateFormatter.e6e193e6.js";import"./useGetDownloadListStatistics.843ab56e.js";import"./QueryCount.00ab6a45.js";import"./NoData.1ba5ff82.js";import"./useGetAccessRequirement.ccba9a7c.js";import"./ManagedACTAccessRequirementStatus.d3292bbe.js";import"./FileUpload.59701399.js";import"./UserSearchBox.c58d209c.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.04f4c3b1.js";import"./EntityLink.d9864344.js";import"./NoSearchResults.a1729ee3.js";import"./SynapseVideo.818e1eb5.js";import"./IconList.a14ba983.js";import"./UserCardList.f3856dea.js";const mt={parameters:{storySource:{source:`import React from 'react'
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
