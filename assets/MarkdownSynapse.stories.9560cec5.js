import{M as r}from"./MarkdownSynapse.0a663573.js";import{j as n}from"./jsx-runtime.2e925369.js";import"./index.272215ce.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Alert.5f67d407.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.8d049b2f.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.caef3bfc.js";import"./iframe.6ce0a742.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.2998c199.js";import"./UserCard.667db179.js";import"./IconCopy.b1eba79c.js";import"./SkeletonTable.355cadb6.js";import"./times.ff2f1d49.js";import"./toInteger.e5135150.js";import"./Skeleton.3847d4da.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./makeStyles.72aedf90.js";import"./IconSvg.4a41f208.js";import"./InfoOutlined.d201fe9f.js";import"./ToastMessage.6439b7b0.js";import"./FullWidthAlert.279e31cc.js";import"./Typography.3a9e45b6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./Overlay.bf042904.js";import"./useWaitForDOMRef.37941199.js";import"./usePopperMarginModifiers.4ced5867.js";import"./factory.44e1c15f.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.5a7160d6.js";import"./react-intersection-observer.m.66de6abb.js";import"./DateFormatter.ca47405e.js";import"./moment.53181859.js";var oo={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MarkdownSynapse from './MarkdownSynapse'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Markdown/MarkdownSynapse',
  component: MarkdownSynapse,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MarkdownSynapse>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MarkdownSynapse> = args => (
  <MarkdownSynapse {...args} />
)

export const HardCodedMarkdown = Template.bind({})
HardCodedMarkdown.args = {
  markdown: '*markdown* given to the **component**',
}

export const WikiPage = Template.bind({})
WikiPage.args = {
  ownerId: 'syn12666371',
  wikiId: '585317',
}

export const ImageDemo = Template.bind({})
ImageDemo.args = {
  ownerId: 'syn18142975',
}
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:r,argTypes:{}};const o=t=>n(r,{...t}),e=o.bind({});e.args={markdown:"*markdown* given to the **component**"};const i=o.bind({});i.args={ownerId:"syn12666371",wikiId:"585317"};const p=o.bind({});p.args={ownerId:"syn18142975"};const ro=["HardCodedMarkdown","WikiPage","ImageDemo"];export{e as HardCodedMarkdown,p as ImageDemo,i as WikiPage,ro as __namedExportsOrder,oo as default};
//# sourceMappingURL=MarkdownSynapse.stories.9560cec5.js.map
