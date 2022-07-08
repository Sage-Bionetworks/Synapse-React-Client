import{M as i}from"./MarkdownPopover.582eb3e3.js";import{j as t}from"./jsx-runtime.2e925369.js";import{B as r}from"./Button.c582ea4c.js";import"./usePopperMarginModifiers.ee427a81.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./useWaitForDOMRef.67fdb4e5.js";import"./isObject.97b5908e.js";import"./index.f252d424.js";import"./Transition.c5966bcb.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./index.06f4a415.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.46a192d7.js";import"./index.e94f1e56.js";import"./toString.41faaa42.js";import"./assert.f88a2d20.js";import"./iframe.a56f5c43.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.f6f6da7c.js";import"./UserCard.60c6e9c5.js";import"./index.es.82d55a6a.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.9c2d923f.js";import"./times.e9ba47eb.js";import"./toInteger.ea37b69f.js";import"./toNumber.bfb36d17.js";import"./Skeleton.bcb4a49e.js";import"./IconSvg.160dd61c.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";import"./ToastMessage.87e58df2.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./debounce.b9f00509.js";import"./removeClass.27874bcb.js";import"./uniqueId.ce7b286a.js";import"./Overlay.4a980e95.js";import"./factory.db4683b0.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.3ad8429a.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.e6da0921.js";import"./moment.81704e1d.js";var no={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i};const o=n=>t(i,{...n,children:t(r,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const s=o.bind({});s.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const a=o.bind({});a.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const ro=["NoAction","WithAction","WikiPage"];export{e as NoAction,a as WikiPage,s as WithAction,ro as __namedExportsOrder,no as default};
//# sourceMappingURL=MarkdownPopover.stories.3f37acdd.js.map
