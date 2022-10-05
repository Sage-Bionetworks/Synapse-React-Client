import{M as i}from"./CardContainerLogic.0bb2be6b.js";import{j as t}from"./jsx-runtime.b98719ac.js";import{B as n}from"./Button.ed04e3a1.js";import"./index.aa213b73.js";import"./index.f0bb0570.js";import"./iframe.1e793943.js";import"./withStyles.79d10ad6.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.cf52bce4.js";import"./index.57d09176.js";import"./Transition.ac6e0624.js";import"./index.35ce73ec.js";import"./isArray.3c258aa7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4537d0f4.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.b6e5afcc.js";import"./use-deep-compare-effect.esm.50735a27.js";import"./uniq.09cd5a40.js";import"./_baseSlice.50189bc5.js";import"./toInteger.c2538338.js";import"./isSymbol.a85127bf.js";import"./_cacheHas.aa561bc1.js";import"./without.31ba113b.js";import"./uniqueId.ff2face8.js";import"./_Set.f8baf759.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.a013333a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.3b0efcae.js";import"./Tooltip.5964f419.js";import"./createSvgIcon.63cd09dc.js";import"./slicedToArray.e72f11da.js";import"./useTheme.cca4eae4.js";import"./makeStyles.9e8f686a.js";import"./InfoOutlined.d5bf38f7.js";import"./ElementWithTooltip.924c8e47.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.da2cde4b.js";import"./Modal.2e6706f7.js";import"./useWaitForDOMRef.c589d2c1.js";import"./useWillUnmount.dd64b5e7.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.6073b2bb.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.d41bdf6d.js";import"./queryUtils.eabcf05a.js";import"./useInfiniteQuery.791ee0ea.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.14f585b8.js";import"./_baseClone.890585db.js";import"./_getTag.9bd73f4c.js";import"./useEntity.27566552.js";import"./useMutation.ac6d7a73.js";import"./pick.cb474b1a.js";import"./Checkbox.6b2c2336.js";import"./Collapse.c32d9e10.js";import"./RadioGroup.8ce3add8.js";import"./moment.a565bb48.js";import"./RangeSlider.f70af8d7.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.9b1d9c3f.js";import"./react-sizeme.d363bd46.js";import"./Skeleton.f404fa8e.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.2f4c0bf8.js";import"./Typography.7f563934.js";import"./react-select.esm.77c55a34.js";import"./Select-54ac8379.esm.cc7c718b.js";import"./CustomSelectWidget.637430c8.js";import"./index.browser.7422f34a.js";import"./react-intersection-observer.esm.536fb05c.js";import"./UserCard.549fd8e6.js";import"./IconCopy.da365123.js";import"./SkeletonTable.385954e0.js";import"./times.b847c83d.js";import"./ToastMessage.608252d2.js";import"./FullWidthAlert.974c42f3.js";import"./Overlay.c6e37c77.js";import"./DateFormatter.a70ec294.js";import"./core.esm.f75f708e.js";import"./isEmpty.a203c2fe.js";import"./isEqual.1aee220f.js";import"./union.9d096b47.js";import"./isString.9e2ade47.js";import"./useGetDownloadListStatistics.c0cafcda.js";import"./QueryCount.41149181.js";import"./NoData.1a1f481a.js";import"./useGetAccessRequirement.566e1590.js";import"./ManagedACTAccessRequirementStatus.8e140c9c.js";import"./FileUpload.0973ea3c.js";import"./UserSearchBox.630138eb.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.11369adf.js";import"./EntityLink.650443f0.js";import"./NoSearchResults.e7aeb895.js";import"./SynapseVideo.dbd7e6b3.js";import"./IconList.cac1d00b.js";import"./UserCardList.6574b6c8.js";const et={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MarkdownPopover } from './MarkdownPopover'
import { Button } from 'react-bootstrap'

export default {
  title: 'Markdown/MarkdownPopover',
  component: MarkdownPopover,
} as ComponentMeta<typeof MarkdownPopover>

const Template: ComponentStory<typeof MarkdownPopover> = args => (
  <MarkdownPopover {...args}>
    <Button variant="sds-primary">Button</Button>
  </MarkdownPopover>
)

export const NoAction = Template.bind({})
NoAction.args = {
  contentProps: { markdown: 'Supports _rendering_ basic **Markdown**.' },
  placement: 'bottom',
}

export const WithAction = Template.bind({})
WithAction.args = {
  contentProps: {
    markdown:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis.',
  },
  placement: 'right',
  actionButton: {
    content: 'Show/Hide Hidden Text',
  },
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  contentProps: {
    ownerId: 'syn12666371',
    wikiId: '585317',
  },
  showCloseButton: false,
  placement: 'right',
}
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const mt=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,mt as __namedExportsOrder,et as default};
