import{M as i}from"./CardContainerLogic.4868b183.js";import{j as t}from"./jsx-runtime.0547954a.js";import{B as n}from"./Button.faa197e5.js";import"./index.22793847.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./withStyles.5f371c18.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.320f728d.js";import"./index.57d09176.js";import"./Transition.c74a9bc3.js";import"./index.35ce73ec.js";import"./isArray.dc0d9748.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.20c60b09.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.481bb687.js";import"./use-deep-compare-effect.esm.4976a8bf.js";import"./uniq.c41b546c.js";import"./_baseSlice.50189bc5.js";import"./toInteger.0a662c7d.js";import"./isSymbol.56654682.js";import"./_cacheHas.88e0e600.js";import"./without.f6119cfc.js";import"./uniqueId.6d625886.js";import"./_Set.3f09d130.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.48e580f3.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.b92ea12f.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f4071482.js";import"./makeStyles.68b76b6a.js";import"./InfoOutlined.5164ccbb.js";import"./ElementWithTooltip.c802fa1e.js";import"./SynapseTableConstants.07ecdebd.js";import"./Dropdown.b5b5b14d.js";import"./Modal.b4906af9.js";import"./useWaitForDOMRef.f571d6d7.js";import"./useWillUnmount.7d35f155.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.692ae3ac.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.68e7a946.js";import"./queryUtils.ad5ed7d4.js";import"./useInfiniteQuery.cb887234.js";import"./queryKeys.e0d3085f.js";import"./cloneDeep.798853ad.js";import"./_baseClone.2f23fbad.js";import"./_getTag.d668d291.js";import"./useEntity.c38cbc1b.js";import"./useMutation.bc8b1814.js";import"./pick.8d03c6fd.js";import"./Checkbox.f5838e99.js";import"./Collapse.c3e8e528.js";import"./RadioGroup.c420300f.js";import"./moment.a565bb48.js";import"./RangeSlider.605e469d.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.6d5f7452.js";import"./react-sizeme.1d475b1d.js";import"./Skeleton.ef288fce.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.05f09278.js";import"./Typography.5de44d5b.js";import"./react-select.esm.95790458.js";import"./Select-54ac8379.esm.46a0827d.js";import"./CustomSelectWidget.1878bd21.js";import"./index.browser.3e0c1c5e.js";import"./react-intersection-observer.esm.9e0b6fc2.js";import"./UserCard.8cf176e1.js";import"./IconCopy.a47d91ec.js";import"./SkeletonTable.bc06b926.js";import"./times.ccd7af32.js";import"./ToastMessage.0f10ae0c.js";import"./FullWidthAlert.8329478a.js";import"./Overlay.3bbd300f.js";import"./DateFormatter.483ace28.js";import"./core.esm.cc7a450a.js";import"./isEmpty.443bf1e0.js";import"./isEqual.adb44ebd.js";import"./union.05e04a14.js";import"./isString.18ee8e39.js";import"./useGetDownloadListStatistics.1131e7c7.js";import"./QueryCount.0ec6e9c7.js";import"./NoData.71b44b9c.js";import"./useGetAccessRequirement.f7c36ef5.js";import"./ManagedACTAccessRequirementStatus.d48e92d0.js";import"./FileUpload.b34b9f80.js";import"./UserSearchBox.abe28ee4.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.6c6b0801.js";import"./EntityLink.87749aec.js";import"./NoSearchResults.347f9d24.js";import"./SynapseVideo.de275625.js";import"./IconList.e44c22b6.js";import"./UserCardList.09c42190.js";const et={parameters:{storySource:{source:`import React from 'react'
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
