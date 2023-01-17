import{B as o}from"./LoadingScreen.08c127bb.js";import{j as r}from"./jsx-runtime.d6be66a9.js";import"./Modal.44d2ca28.js";import"./Button.58f5aaec.js";import"./createWithBsPrefix.139b0869.js";import"./contains.ac446ee4.js";import"./inheritsLoose.a22fc619.js";import"./divWithClassName.f4023709.js";import"./index.3b7d1b21.js";import"./iframe.78dc3b5d.js";import"./index.35ce73ec.js";import"./usePrevious.263ac407.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.8bdf7b9b.js";import"./Typography.079c4f38.js";import"./styled.f07e33c6.js";import"./useTheme.0cbb662e.js";import"./emotion-react.browser.esm.8203c469.js";const M={parameters:{storySource:{source:`import React from 'react'
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
