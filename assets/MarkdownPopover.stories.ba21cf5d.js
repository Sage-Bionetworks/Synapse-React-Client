import{M as i}from"./CardContainerLogic.3996d247.js";import{j as t}from"./jsx-runtime.f8072c65.js";import{B as n}from"./Button.cb7914f2.js";import"./index.1df77ce9.js";import"./index.1d2a784c.js";import"./iframe.aa82293a.js";import"./withStyles.630b025d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.53bb8599.js";import"./index.57d09176.js";import"./Transition.5983a677.js";import"./index.35ce73ec.js";import"./isArray.903292fc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.761f4d42.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.fd4d15c4.js";import"./use-deep-compare-effect.esm.7a42a356.js";import"./uniq.583f1864.js";import"./_baseSlice.50189bc5.js";import"./toInteger.7ac537e3.js";import"./isSymbol.28b01415.js";import"./_cacheHas.a5b7fc64.js";import"./without.10a59cc7.js";import"./uniqueId.6d4b83b5.js";import"./_Set.add49772.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.5a3dcc6a.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.a024e3c2.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./slicedToArray.e72f11da.js";import"./useTheme.bc44ba71.js";import"./makeStyles.9cff04c5.js";import"./InfoOutlined.ec29d19f.js";import"./ElementWithTooltip.4eb14c25.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.98c5d266.js";import"./Modal.c915c8f9.js";import"./useWaitForDOMRef.c9a921b3.js";import"./useWillUnmount.0b84e1f0.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.d6f64b11.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.f90eb9ca.js";import"./queryUtils.eff52af2.js";import"./useInfiniteQuery.767b6e5c.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.96c3704a.js";import"./_baseClone.a8b81e25.js";import"./_getTag.4be430c6.js";import"./useEntity.78ae4d57.js";import"./useMutation.920a6fd3.js";import"./pick.8cf499ad.js";import"./Checkbox.e6642c32.js";import"./Collapse.efb59460.js";import"./RadioGroup.d95fc9b1.js";import"./moment.a565bb48.js";import"./RangeSlider.2fd4fe28.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.1a6ada4e.js";import"./react-sizeme.3ee9624f.js";import"./Skeleton.050d0fcb.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.9f0ce41d.js";import"./Typography.3dd8fe93.js";import"./react-select.esm.46a4c1bc.js";import"./Select-54ac8379.esm.56fc177e.js";import"./CustomSelectWidget.d726cc3b.js";import"./index.browser.f8b2da96.js";import"./react-intersection-observer.esm.1e854c5c.js";import"./UserCard.c3fe1aa7.js";import"./IconCopy.69a201bb.js";import"./SkeletonTable.be12aa25.js";import"./times.1eb14036.js";import"./ToastMessage.37d9d7b6.js";import"./FullWidthAlert.5a306575.js";import"./Overlay.84bc18bd.js";import"./DateFormatter.ad473e26.js";import"./core.esm.fc975ec9.js";import"./isEmpty.7f2a4b5d.js";import"./isEqual.d89d7a06.js";import"./union.e41d574b.js";import"./isString.0b4aad35.js";import"./useGetDownloadListStatistics.63081e1e.js";import"./QueryCount.75474e42.js";import"./NoData.5b126f72.js";import"./useGetAccessRequirement.2d5420de.js";import"./ManagedACTAccessRequirementStatus.ed0e9563.js";import"./FileUpload.4c732c24.js";import"./UserSearchBox.3704a104.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.0fcb71f3.js";import"./EntityLink.36306b90.js";import"./NoSearchResults.434cd460.js";import"./SynapseVideo.a1ad708e.js";import"./IconList.b63ecb91.js";import"./UserCardList.4b406a92.js";const et={parameters:{storySource:{source:`import React from 'react'
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
