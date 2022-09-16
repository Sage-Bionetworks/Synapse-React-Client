import{M as r}from"./MarkdownSynapse.903b32df.js";import{j as n}from"./jsx-runtime.00d70968.js";import"./index.0378956d.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.75d17e29.js";import"./iframe.e59a9506.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./UserCard.20173003.js";import"./IconCopy.095bf867.js";import"./SkeletonTable.bba1da74.js";import"./times.3e2e5312.js";import"./toInteger.cf1886d1.js";import"./Skeleton.99b24529.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./makeStyles.45e8b79c.js";import"./IconSvg.7fcfdfd8.js";import"./InfoOutlined.60e019a4.js";import"./ToastMessage.30a6258e.js";import"./FullWidthAlert.e63d41e9.js";import"./Typography.868473dc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";import"./Overlay.66930c7c.js";import"./useWaitForDOMRef.97759fd7.js";import"./usePopperMarginModifiers.fba68454.js";import"./factory.88dfc2d4.js";import"./sqlFunctions.b49ac766.js";import"./SynapseVideo.557b642e.js";import"./react-intersection-observer.esm.e445ee86.js";import"./DateFormatter.dacc6d60.js";import"./moment.a565bb48.js";import"./index.3011b51e.js";import"./index.3f29013c.js";import"./index.66e0b57e.js";import"./index.440cefe9.js";const ro={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"hard-coded-markdown":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"wiki-page":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}},"image-demo":{startLoc:{col:57,line:15},endLoc:{col:1,line:17},startBody:{col:57,line:15},endBody:{col:1,line:17}}}}},title:"Markdown/MarkdownSynapse",component:r,argTypes:{}},o=t=>n(r,{...t}),e=o.bind({});e.args={markdown:"*markdown* given to the **component**"};const i=o.bind({});i.args={ownerId:"syn12666371",wikiId:"585317"};const p=o.bind({});p.args={ownerId:"syn18142975"};const to=["HardCodedMarkdown","WikiPage","ImageDemo"];export{e as HardCodedMarkdown,p as ImageDemo,i as WikiPage,to as __namedExportsOrder,ro as default};
