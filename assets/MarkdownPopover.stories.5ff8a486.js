import{M as i}from"./MarkdownPopover.6da29553.js";import{j as t}from"./jsx-runtime.00d70968.js";import{B as r}from"./Button.fda23eee.js";import"./usePopperMarginModifiers.fba68454.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./useWaitForDOMRef.97759fd7.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.ac892534.js";import"./index.edede199.js";import"./toString.d84aaeca.js";import"./assert.ccac0074.js";import"./iframe.91fe6dc0.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./UserCard.abb73b30.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.0ec45aaf.js";import"./times.398d9368.js";import"./toInteger.e9173c29.js";import"./Skeleton.99b24529.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./IconSvg.7fcfdfd8.js";import"./InfoOutlined.60e019a4.js";import"./ToastMessage.00694747.js";import"./FullWidthAlert.c5a09425.js";import"./Typography.35a81ae4.js";import"./removeClass.27874bcb.js";import"./uniqueId.eba72690.js";import"./Overlay.66930c7c.js";import"./factory.2d5ac1f5.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.3475e146.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.b4c818ca.js";import"./moment.a565bb48.js";import"./index.881f6844.js";import"./index.8d87c780.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";const no={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i},o=n=>t(i,{...n,children:t(r,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const s=o.bind({});s.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const m=o.bind({});m.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const ro=["NoAction","WithAction","WikiPage"];export{e as NoAction,m as WikiPage,s as WithAction,ro as __namedExportsOrder,no as default};
