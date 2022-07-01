import{M as i}from"./MarkdownPopover.48d66d51.js";import{j as t}from"./jsx-runtime.2e925369.js";import{B as r}from"./Button.77571428.js";import"./usePopperMarginModifiers.09a60569.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./useWaitForDOMRef.088a2ede.js";import"./Fade.7bfbed49.js";import"./index.f252d424.js";import"./Transition.f54f11c8.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./hasClass.56fd144a.js";import"./MarkdownSynapse.385ce618.js";import"./index.cdf98c81.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./index.8cde812d.js";import"./UserCard.07b3e3b1.js";import"./useUserBundle.1e187889.js";import"./Alert.ad748791.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./index.es.82d55a6a.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.874b8571.js";import"./times.0a9ef28a.js";import"./toInteger.9c26e41e.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Skeleton.bf1489f0.js";import"./IconSvg.d5022c82.js";import"./utils.ebacc06c.js";import"./useTheme.735ed160.js";import"./makeStyles.5f6bad01.js";import"./createSvgIcon.53013205.js";import"./InfoOutlined.748401db.js";import"./Clear.53a62cf5.js";import"./ToastMessage.574c0fe0.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./debounce.6a99f8f3.js";import"./removeClass.27874bcb.js";import"./uniqueId.4eca3697.js";import"./Overlay.5ce67f19.js";import"./factory.0d7085b4.js";import"./sqlFunctions.9bad0aa7.js";import"./RegularExpressions.b87376bf.js";import"./SynapseVideo.5ad46b8f.js";import"./react-intersection-observer.m.66de6abb.js";import"./useInfiniteQuery.29c04cdc.js";import"./DateFormatter.70edf4bc.js";import"./moment.81704e1d.js";var uo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"no-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"with-action":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}},"wiki-page":{startLoc:{col:57,line:11},endLoc:{col:1,line:15},startBody:{col:57,line:11},endBody:{col:1,line:15}}}}},title:"Markdown/MarkdownPopover",component:i};const o=n=>t(i,{...n,children:t(r,{variant:"sds-primary",children:"Button"})}),e=o.bind({});e.args={contentProps:{markdown:"Supports _rendering_ basic **Markdown**."},placement:"bottom"};const m=o.bind({});m.args={contentProps:{markdown:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed tellus lorem. In varius dui nec porttitor tristique. Suspendisse purus orci, dictum at lacus et, egestas commodo tortor. Mauris elementum, ligula in aliquet volutpat, sem arcu vestibulum enim, at scelerisque justo diam ut velit. Fusce iaculis tincidunt velit, vel dignissim dolor condimentum et. Sed ut nibh ac nunc facilisis facilisis."},placement:"right",actionButton:{content:"Show/Hide Hidden Text"}};const p=o.bind({});p.args={contentProps:{ownerId:"syn12666371",wikiId:"585317"},showCloseButton:!1,placement:"right"};const wo=["NoAction","WithAction","WikiPage"];export{e as NoAction,p as WikiPage,m as WithAction,wo as __namedExportsOrder,uo as default};
//# sourceMappingURL=MarkdownPopover.stories.e37363e4.js.map
