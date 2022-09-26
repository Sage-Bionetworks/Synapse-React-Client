import{M as i}from"./CardContainerLogic.b1c74f84.js";import{j as t}from"./jsx-runtime.00d70968.js";import{B as n}from"./Button.fda23eee.js";import"./index.37b550c9.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./sqlFunctions.02978512.js";import"./useGetInfoFromIds.fd465434.js";import"./use-deep-compare-effect.esm.0387ba0e.js";import"./uniq.d25770fc.js";import"./toInteger.c88d1d59.js";import"./_cacheHas.b066c48b.js";import"./without.0c83ea01.js";import"./_setToArray.a82100c8.js";import"./ColumnType.744125d2.js";import"./EntityIcon.7f34d786.js";import"./TypeUtils.a2c41307.js";import"./IconSvg.debd858a.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./InfoOutlined.60e019a4.js";import"./ElementWithTooltip.006d538d.js";import"./SynapseTableConstants.07ecdebd.js";import"./index.8ed07549.js";import"./Dropdown.b0dc465f.js";import"./Modal.1fb607f9.js";import"./useWaitForDOMRef.97759fd7.js";import"./useWillUnmount.4a16e5cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./usePopperMarginModifiers.44e3343c.js";import"./isRequiredForA11y.20ed4857.js";import"./FacetNav.03376650.js";import"./queryUtils.0d791f39.js";import"./cloneDeep.ba6088ca.js";import"./Checkbox.c68b07e0.js";import"./uniqueId.eba72690.js";import"./Collapse.1f37bc76.js";import"./RadioGroup.d19dd04f.js";import"./moment.a565bb48.js";import"./RangeSlider.df5d4da8.js";import"./classCallCheck.8304ed06.js";import"./inherits.82916e50.js";import"./factory.68f82ea9.js";import"./iframe.4489e661.js";import"./react-sizeme.9668ba10.js";import"./Skeleton.99b24529.js";import"./ColorGradient.16f0e0f2.js";import"./colorPalette.8145e2e2.js";import"./LoadingScreen.91642215.js";import"./Typography.868473dc.js";import"./react-select.esm.f5386c8f.js";import"./Select-54ac8379.esm.edd779c2.js";import"./CustomSelectWidget.b1e9ceda.js";import"./core.esm.f40d41d6.js";import"./index.495f14a2.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";import"./isEmpty.7af1f9fd.js";import"./_baseIsEqual.906847b7.js";import"./index.browser.1d820de4.js";import"./union.ce3be239.js";import"./react-intersection-observer.esm.e445ee86.js";import"./UserCard.c58a6416.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.5ec0edbd.js";import"./times.262ff791.js";import"./ToastMessage.de6992d0.js";import"./FullWidthAlert.6afa82c9.js";import"./Overlay.7bb560f6.js";import"./DateFormatter.509bc346.js";import"./useGetDownloadListStatistics.75650c79.js";import"./QueryCount.94f48188.js";import"./NoData.22383cce.js";import"./useGetAccessRequirement.0be5e16c.js";import"./ManagedACTAccessRequirementStatus.13dcc250.js";import"./FileUpload.3fc2a6a5.js";import"./UserSearchBox.bb546e3b.js";import"./index.582f6d03.js";import"./UserOrTeamBadge.0eea9d35.js";import"./EntityLink.7e5e6d64.js";import"./NoSearchResults.a01d676d.js";import"./SynapseVideo.adb37db8.js";import"./IconList.43e19c16.js";import"./UserCardList.84c465d6.js";const Yo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=r=>t(i,{...r,children:t(n,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const Zo=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,Zo as __namedExportsOrder,Yo as default};
