import{B as o}from"./LoadingScreen.1bd379c3.js";import{j as r}from"./jsx-runtime.f4a5fef7.js";import"./Modal.99d56cea.js";import"./Button.6c384231.js";import"./createWithBsPrefix.54f05b7e.js";import"./contains.9e492dba.js";import"./inheritsLoose.6b8ca8e2.js";import"./divWithClassName.967bfcd9.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./index.35ce73ec.js";import"./usePrevious.7d29e7c5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.a74f5535.js";import"./Typography.839bb703.js";import"./styled.02bbe28b.js";import"./useTheme.cb95caa9.js";import"./emotion-react.browser.esm.e2223364.js";const M={parameters:{storySource:{source:`import React from 'react'
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
