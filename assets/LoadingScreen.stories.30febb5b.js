import{B as o}from"./LoadingScreen.2ae08f91.js";import{j as r}from"./jsx-runtime.e45f5946.js";import"./Modal.3cf810c4.js";import"./Button.85a360c3.js";import"./createWithBsPrefix.a2136416.js";import"./contains.82fe9acc.js";import"./inheritsLoose.01564ab7.js";import"./divWithClassName.ba47b910.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./index.35ce73ec.js";import"./usePrevious.820aff42.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.fd0babf1.js";import"./Typography.33698c6c.js";import"./styled.11fa6590.js";import"./useTheme.c90b1c5e.js";import"./emotion-react.browser.esm.1d99b462.js";const M={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { sessionChangeHandler } from './StorybookComponentWrapper'
import { displayToast } from './ToastMessage'
import { BlockingLoader } from './LoadingScreen'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Loaders/BlockingLoader',
  component: BlockingLoader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BlockingLoader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlockingLoader> = args => (
  <BlockingLoader {...args} />
)

export const Demo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Demo.args = {
  show: true,
  currentProgress: 50,
  totalProgress: 100,
  headlineText: 'Loading some content',
  hintText: 'This blocks the whole page, so use sparingly',
}
`,locationsMap:{demo:{startLoc:{col:56,line:16},endLoc:{col:1,line:18},startBody:{col:56,line:16},endBody:{col:1,line:18}}}}},title:"UI/Loaders/BlockingLoader",component:o,argTypes:{}},e=t=>r(o,{...t}),n=e.bind({});n.args={show:!0,currentProgress:50,totalProgress:100,headlineText:"Loading some content",hintText:"This blocks the whole page, so use sparingly"};const w=["Demo"];export{n as Demo,w as __namedExportsOrder,M as default};
