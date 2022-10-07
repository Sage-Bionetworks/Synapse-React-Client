import{M as i}from"./CardContainerLogic.e57c0c47.js";import{j as t}from"./jsx-runtime.f5c871f2.js";import{B as n}from"./Button.de05f508.js";import"./index.3873d60b.js";import"./index.50924579.js";import"./iframe.0956ae8e.js";import"./withStyles.b9d3b2a9.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b56cd3e7.js";import"./index.57d09176.js";import"./Transition.a0ca267e.js";import"./index.35ce73ec.js";import"./isArray.8eaae8ca.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0b86e17f.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.82f46abe.js";import"./use-deep-compare-effect.esm.a671d83b.js";import"./uniq.d521f81f.js";import"./_baseSlice.50189bc5.js";import"./toInteger.53bb9ac6.js";import"./isSymbol.6fc733ac.js";import"./_cacheHas.9091fa95.js";import"./without.2ae72518.js";import"./uniqueId.a603395d.js";import"./_Set.6d780b59.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.7a7fa7a7.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.dc985627.js";import"./Tooltip.0cafe8cc.js";import"./createSvgIcon.c8dc0ea7.js";import"./slicedToArray.e72f11da.js";import"./useTheme.b6731b0b.js";import"./makeStyles.c6d0cd33.js";import"./InfoOutlined.51194332.js";import"./ElementWithTooltip.e228e903.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.d656d809.js";import"./Modal.7bb7db10.js";import"./useWaitForDOMRef.a6ce9c71.js";import"./useWillUnmount.dbfa145e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.5f820ad2.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.daf510c3.js";import"./queryUtils.ff75f567.js";import"./useInfiniteQuery.4ef28758.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.57b9c4b3.js";import"./_baseClone.06b754dc.js";import"./_getTag.379eaf53.js";import"./useEntity.361c2459.js";import"./useMutation.be01f1d2.js";import"./pick.abe17532.js";import"./Checkbox.a7dd2989.js";import"./Collapse.d8919e60.js";import"./RadioGroup.a7947df0.js";import"./moment.a565bb48.js";import"./RangeSlider.23df776c.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.c8cbdf0a.js";import"./react-sizeme.e17a24b5.js";import"./Skeleton.4bed26ee.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.6d441172.js";import"./Typography.d381f643.js";import"./react-select.esm.3178895b.js";import"./Select-54ac8379.esm.70eb0da2.js";import"./CustomSelectWidget.f25e61ee.js";import"./index.browser.b008f2b5.js";import"./react-intersection-observer.esm.8c292c78.js";import"./UserCard.b0df8a65.js";import"./IconCopy.81cd725e.js";import"./SkeletonTable.9e1bb6d3.js";import"./times.22265925.js";import"./ToastMessage.8bfc5f39.js";import"./FullWidthAlert.76b02069.js";import"./Overlay.69580c44.js";import"./DateFormatter.258c1a22.js";import"./core.esm.37752518.js";import"./isEmpty.810e02d2.js";import"./isEqual.fd37b6f2.js";import"./union.6ef17c5c.js";import"./isString.1113ffe6.js";import"./useGetDownloadListStatistics.5db64180.js";import"./QueryCount.f05a1e37.js";import"./NoData.9e73a221.js";import"./useGetAccessRequirement.e18fe474.js";import"./ManagedACTAccessRequirementStatus.79666a96.js";import"./FileUpload.69f47ce9.js";import"./UserSearchBox.3376b177.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.62f8c15d.js";import"./EntityLink.a3057be0.js";import"./NoSearchResults.007fc4f0.js";import"./SynapseVideo.6e3db619.js";import"./IconList.1457ac7d.js";import"./UserCardList.22f90a50.js";const et={parameters:{storySource:{source:`import React from 'react'
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
