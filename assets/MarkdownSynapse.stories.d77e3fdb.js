import{M as n}from"./MarkdownSynapse.d883b932.js";import{j as t}from"./jsx-runtime.00d70968.js";import"./index.6ac6fc35.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./assert.28421ae9.js";import"./iframe.ec48e4d2.js";import"./getEndpoint.bb7ded34.js";import"./UserCard.103461a8.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.9c89f8b3.js";import"./times.3b46d202.js";import"./toInteger.7d422825.js";import"./Skeleton.c897a2bf.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./Overlay.b3559176.js";import"./useWaitForDOMRef.064fee4c.js";import"./usePopperMarginModifiers.0428ddea.js";import"./factory.29907778.js";import"./sqlFunctions.59c64146.js";import"./SynapseVideo.3d6e2c0a.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.ef532573.js";import"./moment.a565bb48.js";import"./index.2c7c76ba.js";import"./index.87b84479.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";const Q={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:n,argTypes:{}},o=r=>t(n,{...r}),e=o.bind({});e.args={markdown:"*markdown* given to the **component**"};const i=o.bind({});i.args={ownerId:"syn12666371",wikiId:"585317"};const a=o.bind({});a.args={ownerId:"syn18142975"};const U=["HardCodedMarkdown","WikiPage","ImageDemo"];export{e as HardCodedMarkdown,a as ImageDemo,i as WikiPage,U as __namedExportsOrder,Q as default};
