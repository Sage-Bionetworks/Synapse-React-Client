import{M as i}from"./MarkdownPopover.904a3506.js";import{j as t}from"./jsx-runtime.2e925369.js";import{B as r}from"./Button.c582ea4c.js";import"./usePopperMarginModifiers.7a874fe8.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./useWaitForDOMRef.0721218f.js";import"./isObject.f3be1931.js";import"./index.f252d424.js";import"./Transition.d42a873e.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./index.06f4a415.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.e7e458df.js";import"./index.49ae17c2.js";import"./toString.f9b9a371.js";import"./assert.a6457cd0.js";import"./iframe.caf5732c.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./UserCard.a8b70593.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.297a7fee.js";import"./times.60bea9fc.js";import"./toInteger.1984412c.js";import"./toNumber.71be2bd9.js";import"./Skeleton.8dd0668e.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./makeStyles.9dfaa099.js";import"./IconSvg.3d20df6f.js";import"./InfoOutlined.22a371fd.js";import"./ToastMessage.0defc330.js";import"./FullWidthAlert.50041932.js";import"./Typography.bfdf676e.js";import"./debounce.bb67b392.js";import"./removeClass.27874bcb.js";import"./uniqueId.50daefd4.js";import"./Overlay.ac713ce0.js";import"./factory.461c9c70.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.e3ca5b59.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.cd868620.js";import"./moment.53181859.js";var to={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i};const o=n=>t(i,{...n,children:t(r,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const s=o.bind({});s.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const a=o.bind({});a.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const io=["NoAction","WithAction","WikiPage"];export{e as NoAction,a as WikiPage,s as WithAction,io as __namedExportsOrder,to as default};
//# sourceMappingURL=MarkdownPopover.stories.f8255d41.js.map
