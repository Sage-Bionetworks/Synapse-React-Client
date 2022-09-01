import{M as n}from"./MarkdownPopover.0d554baa.js";import{j as t}from"./jsx-runtime.2e925369.js";import{B as e}from"./Button.c582ea4c.js";import"./usePopperMarginModifiers.fc55270a.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./useWaitForDOMRef.679b0e64.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./index.f252d424.js";import"./makeStyles.38be5a7f.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./index.06f4a415.js";import"./ToastMessage.093903bc.js";import"./MarkdownSynapse.0738636b.js";import"./index.d8e274a1.js";import"./assert.4df68bf5.js";import"./iframe.066cc533.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./UserCard.510790d6.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.ee346f33.js";import"./times.cfb71dc5.js";import"./toInteger.93f57d6c.js";import"./Skeleton.3d9d9757.js";import"./IconSvg.05ece234.js";import"./InfoOutlined.a7449f61.js";import"./Overlay.7f5ddc31.js";import"./factory.f4988b82.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.237b4bf6.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.baa06737.js";import"./moment.53181859.js";var U={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:n};const o=i=>t(n,{...i,children:t(e,{variant:"sds-primary",children:"Button"})}),r=o.bind({});r.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const s=o.bind({});s.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const a=o.bind({});a.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const V=["NoAction","WithAction","WikiPage"];export{r as NoAction,a as WikiPage,s as WithAction,V as __namedExportsOrder,U as default};
//# sourceMappingURL=MarkdownPopover.stories.8f6305b5.js.map
