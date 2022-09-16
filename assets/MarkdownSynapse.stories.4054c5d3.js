import{M as n}from"./MarkdownSynapse.133b4afb.js";import{j as t}from"./jsx-runtime.00d70968.js";import"./index.99627ca9.js";import"./withStyles.d50e1a5a.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./index.57d09176.js";import"./makeStyles.733638f6.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./Button.fda23eee.js";import"./index.35ce73ec.js";import"./ToastMessage.72011e3e.js";import"./assert.d26b71b0.js";import"./iframe.37379422.js";import"./getEndpoint.bb7ded34.js";import"./UserCard.7149a202.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.00dacf51.js";import"./times.fe5cf68a.js";import"./toInteger.0af450f8.js";import"./Skeleton.c897a2bf.js";import"./IconSvg.e3afc045.js";import"./InfoOutlined.31277c73.js";import"./Overlay.b3559176.js";import"./useWaitForDOMRef.064fee4c.js";import"./usePopperMarginModifiers.0428ddea.js";import"./factory.cc93336f.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.f30d4273.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.54530cd4.js";import"./moment.a565bb48.js";import"./index.953841f3.js";import"./index.b9529b57.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";const Q={parameters:{storySource:{source:`import React from 'react'
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
