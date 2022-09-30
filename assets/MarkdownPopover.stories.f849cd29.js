import{M as i}from"./CardContainerLogic.56bbe4cb.js";import{j as t}from"./jsx-runtime.05444945.js";import{B as n}from"./Button.0b1296fc.js";import"./index.a37d8dd7.js";import"./index.849f5f8d.js";import"./iframe.ff4ba921.js";import"./withStyles.2a0b3149.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.1016cb8e.js";import"./index.57d09176.js";import"./Transition.4ed8243e.js";import"./index.35ce73ec.js";import"./isArray.fbf85b3b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.44b5863d.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.086a064f.js";import"./use-deep-compare-effect.esm.c3934740.js";import"./uniq.9715b41f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.1bd4a41d.js";import"./isSymbol.bfa8ae0b.js";import"./_cacheHas.14b94b6b.js";import"./without.b749f98e.js";import"./uniqueId.24a4cbf4.js";import"./_Set.be17e97c.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.ef6419ba.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.abab09ee.js";import"./Tooltip.e02d1bf4.js";import"./createSvgIcon.49bfc951.js";import"./slicedToArray.e72f11da.js";import"./useTheme.48f15230.js";import"./makeStyles.29b4f0d4.js";import"./InfoOutlined.f00577f5.js";import"./ElementWithTooltip.7f3d40d3.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.c0afb78a.js";import"./Modal.45a88cca.js";import"./useWaitForDOMRef.c50253c8.js";import"./useWillUnmount.8489e947.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.19dcb48e.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.c72e1ef0.js";import"./queryUtils.517a1103.js";import"./useInfiniteQuery.f58a924e.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.9c8853b8.js";import"./_baseClone.6032478b.js";import"./_getTag.ba399069.js";import"./useEntity.44d8fc6d.js";import"./useMutation.44e72348.js";import"./pick.8c3849c9.js";import"./Checkbox.d8bed1f5.js";import"./Collapse.3aa549d7.js";import"./RadioGroup.54d38b7b.js";import"./moment.a565bb48.js";import"./RangeSlider.f92e6857.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.e3a5734d.js";import"./react-sizeme.3e30a9b5.js";import"./Skeleton.7e3a4321.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.fb5f4d08.js";import"./Typography.9965ffbe.js";import"./react-select.esm.88a0d1b6.js";import"./Select-54ac8379.esm.f96f27a9.js";import"./CustomSelectWidget.69493359.js";import"./index.browser.b6f8f8d7.js";import"./react-intersection-observer.esm.91822557.js";import"./UserCard.42f90b17.js";import"./IconCopy.1dead822.js";import"./SkeletonTable.62b12d1a.js";import"./times.948706c3.js";import"./ToastMessage.1a804d30.js";import"./FullWidthAlert.27fd0db2.js";import"./Overlay.42a8a4d5.js";import"./DateFormatter.d42d6702.js";import"./core.esm.b50696ea.js";import"./isEmpty.2928b40e.js";import"./isEqual.569c8d60.js";import"./union.7a7b547b.js";import"./isString.519849ac.js";import"./useGetDownloadListStatistics.7a7fb0e6.js";import"./QueryCount.8f76a005.js";import"./NoData.b3a8e6f2.js";import"./useGetAccessRequirement.aff2243e.js";import"./ManagedACTAccessRequirementStatus.7aa6b053.js";import"./FileUpload.f33eac52.js";import"./UserSearchBox.e85629df.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.5d545e84.js";import"./EntityLink.eabec8c9.js";import"./NoSearchResults.c8563c37.js";import"./SynapseVideo.1f3e14b2.js";import"./IconList.d0325451.js";import"./UserCardList.80e4d56d.js";const et={parameters:{storySource:{source:`import React from 'react'
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
