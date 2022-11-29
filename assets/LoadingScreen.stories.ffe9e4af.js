import{B as o}from"./LoadingScreen.0123b906.js";import{j as r}from"./jsx-runtime.23bcdc09.js";import"./Modal.fcfac98b.js";import"./Button.9cfa11f8.js";import"./createWithBsPrefix.26026502.js";import"./contains.e26e64f1.js";import"./inheritsLoose.efe8b24a.js";import"./divWithClassName.fcb14682.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./index.35ce73ec.js";import"./usePrevious.f1fd94eb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./useWaitForDOMRef.1d1fe719.js";import"./Typography.17940352.js";import"./styled.8da6873c.js";import"./useTheme.26e47b20.js";import"./emotion-react.browser.esm.599684c1.js";const M={parameters:{storySource:{source:`import React from 'react'
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
