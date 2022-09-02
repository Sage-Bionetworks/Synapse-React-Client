import{M as n}from"./MarkdownPopover.8b990f1b.js";import{j as t}from"./jsx-runtime.00d70968.js";import{B as e}from"./Button.fda23eee.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./useWaitForDOMRef.d07b3a07.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./MarkdownSynapse.d86f7b16.js";import"./index.6da2bee4.js";import"./assert.d4810e08.js";import"./iframe.abd6b882.js";import"./getEndpoint.bb7ded34.js";import"./UserCard.0e5c85b8.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.3566e849.js";import"./times.5e760663.js";import"./toInteger.73b1b5d3.js";import"./Skeleton.88496afb.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./Overlay.3297046e.js";import"./factory.13751b6d.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.59d1e4cc.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.e7e66a00.js";import"./moment.a565bb48.js";const Q={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:n},o=i=>t(n,{...i,children:t(e,{variant:"sds-primary",children:"Button"})}),r=o.bind({});r.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const s=o.bind({});s.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const a=o.bind({});a.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const U=["NoAction","WithAction","WikiPage"];export{r as NoAction,a as WikiPage,s as WithAction,U as __namedExportsOrder,Q as default};
