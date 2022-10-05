import{H as o}from"./CardContainerLogic.85094e92.js";import{j as r}from"./jsx-runtime.e50ee014.js";import"./index.b742691b.js";import"./index.f04aa5e6.js";import"./iframe.ed5db637.js";import"./withStyles.8f619333.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.9942996b.js";import"./index.57d09176.js";import"./Button.3658dda2.js";import"./Transition.bad86374.js";import"./index.35ce73ec.js";import"./isArray.bf4f000b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.c8899896.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.d89abd16.js";import"./use-deep-compare-effect.esm.20647236.js";import"./uniq.f14349e8.js";import"./_baseSlice.50189bc5.js";import"./toInteger.5d2f4b0e.js";import"./isSymbol.5d0c998d.js";import"./_cacheHas.82e3ba6e.js";import"./without.269ffb6f.js";import"./uniqueId.b8a4404e.js";import"./_Set.d949c813.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.e4714c7a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.f9f187ed.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f39e60b9.js";import"./makeStyles.436c1230.js";import"./InfoOutlined.06cf4881.js";import"./ElementWithTooltip.34c4c875.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.6b97ac7e.js";import"./Modal.dbfb920f.js";import"./useWaitForDOMRef.19e54275.js";import"./useWillUnmount.c562dce3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.cad35c33.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.5fbb561e.js";import"./queryUtils.b793be1c.js";import"./useInfiniteQuery.be01094f.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.0414e1ff.js";import"./_baseClone.711d1a04.js";import"./_getTag.291304b4.js";import"./useEntity.44357283.js";import"./useMutation.6d9babbc.js";import"./pick.08c10745.js";import"./Checkbox.d21081cb.js";import"./Collapse.261e02d1.js";import"./RadioGroup.dcb4db4a.js";import"./moment.a565bb48.js";import"./RangeSlider.dd25bc15.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.1a0d6246.js";import"./react-sizeme.6eb3369a.js";import"./Skeleton.09528c75.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.4753e31c.js";import"./Typography.710a5cec.js";import"./react-select.esm.34809225.js";import"./Select-54ac8379.esm.e66ee859.js";import"./CustomSelectWidget.a78e83ff.js";import"./index.browser.f19486ac.js";import"./react-intersection-observer.esm.ad9bf078.js";import"./UserCard.2fd34122.js";import"./IconCopy.e7e13389.js";import"./SkeletonTable.fbfdf495.js";import"./times.193d0ecb.js";import"./ToastMessage.c7c8ad52.js";import"./FullWidthAlert.dc80d875.js";import"./Overlay.9ef918a3.js";import"./DateFormatter.ff205244.js";import"./core.esm.506cff9d.js";import"./isEmpty.67b3a200.js";import"./isEqual.eb83054b.js";import"./union.e911ba3a.js";import"./isString.77865ac7.js";import"./useGetDownloadListStatistics.4e723e09.js";import"./QueryCount.328adff2.js";import"./NoData.7f1bc903.js";import"./useGetAccessRequirement.1e37d564.js";import"./ManagedACTAccessRequirementStatus.65fdeea6.js";import"./FileUpload.d40b695f.js";import"./UserSearchBox.7d6d6541.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.2a022306.js";import"./EntityLink.e38d8006.js";import"./NoSearchResults.04e1840e.js";import"./SynapseVideo.79cfe0f1.js";import"./IconList.842b4f10.js";import"./UserCardList.83f186e8.js";const rt={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { HelpPopover } from './HelpPopover'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/HelpPopover',
  component: HelpPopover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HelpPopover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelpPopover> = args => (
  <HelpPopover {...args} />
)

export const HelpPopoverDemo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelpPopoverDemo.args = {
  markdownText:
    'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',
  helpUrl: 'https://help.synapse.org/',
  placement: 'right',
}
`,locationsMap:{"help-popover-demo":{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/HelpPopover",component:o,argTypes:{}},p=t=>r(o,{...t}),i=p.bind({});i.args={markdownText:'Help that supports _rendering_ basic **Markdown**. If a helpUrl is provided then a "More info" button will be available.',helpUrl:"https://help.synapse.org/",placement:"right"};const pt=["HelpPopoverDemo"];export{i as HelpPopoverDemo,pt as __namedExportsOrder,rt as default};
