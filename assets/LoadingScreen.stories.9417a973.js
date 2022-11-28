import{B as o}from"./LoadingScreen.596009c1.js";import{j as r}from"./jsx-runtime.0721b30f.js";import"./Modal.ffe20d01.js";import"./Button.c6170972.js";import"./createWithBsPrefix.60042f33.js";import"./contains.4df2422e.js";import"./inheritsLoose.53a219d1.js";import"./divWithClassName.ae2eac7f.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./index.35ce73ec.js";import"./usePrevious.7579f6d6.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.65459bf1.js";import"./Typography.f634a419.js";import"./styled.b8cd841c.js";import"./useTheme.210faaa5.js";import"./emotion-react.browser.esm.4fe99834.js";const M={parameters:{storySource:{source:`import React from 'react'
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
