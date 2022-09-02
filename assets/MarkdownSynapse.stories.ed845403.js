import{M as n}from"./MarkdownSynapse.11143e6e.js";import{j as t}from"./jsx-runtime.00d70968.js";import"./index.83cd4268.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.0ffd35ff.js";import"./assert.fe14baa7.js";import"./iframe.809c86e7.js";import"./getEndpoint.bb7ded34.js";import"./UserCard.c7556a91.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.a5be41ff.js";import"./times.49810acf.js";import"./toInteger.0eadce58.js";import"./Skeleton.88496afb.js";import"./IconSvg.45071707.js";import"./InfoOutlined.303a7ed9.js";import"./Overlay.3297046e.js";import"./useWaitForDOMRef.d07b3a07.js";import"./usePopperMarginModifiers.1c4b2def.js";import"./factory.d6a1d2a5.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.f2101abf.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.a1d6819d.js";import"./moment.a565bb48.js";const K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:n,argTypes:{}},o=r=>t(n,{...r}),e=o.bind({});e.args={markdown:"*markdown* given to the **component**"};const a=o.bind({});a.args={ownerId:"syn12666371",wikiId:"585317"};const i=o.bind({});i.args={ownerId:"syn18142975"};const N=["HardCodedMarkdown","WikiPage","ImageDemo"];export{e as HardCodedMarkdown,i as ImageDemo,a as WikiPage,N as __namedExportsOrder,K as default};
