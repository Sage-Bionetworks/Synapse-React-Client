import{M as n}from"./MarkdownPopover.47b3a8b5.js";import{j as t}from"./jsx-runtime.2e925369.js";import{B as r}from"./Button.c582ea4c.js";import"./usePopperMarginModifiers.31225551.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./useWaitForDOMRef.c89dbc64.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Transition.d42a873e.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./index.06f4a415.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.38db4f19.js";import"./index.3db66154.js";import"./toString.8ef640ae.js";import"./assert.9f8179e3.js";import"./iframe.60747497.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./UserCard.de6de82c.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.0860f581.js";import"./times.c2061355.js";import"./toInteger.594e6c7c.js";import"./Skeleton.8dd0668e.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./IconSvg.3d20df6f.js";import"./InfoOutlined.22a371fd.js";import"./ToastMessage.f82ed562.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./removeClass.27874bcb.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.88992b99.js";import"./factory.854aab19.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.5c829fbb.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.f6ff7474.js";import"./moment.53181859.js";var $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:n};const o=i=>t(n,{...i,children:t(r,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const s=o.bind({});s.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const a=o.bind({});a.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const oo=["NoAction","WithAction","WikiPage"];export{e as NoAction,a as WikiPage,s as WithAction,oo as __namedExportsOrder,$ as default};
//# sourceMappingURL=MarkdownPopover.stories.ca59bea4.js.map
