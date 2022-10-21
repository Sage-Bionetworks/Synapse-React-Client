import{E as r,c as t}from"./index.df4d7189.js";import{j as n}from"./jsx-runtime.a232804d.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./withStyles.1db4abc8.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./isArray.a5a56f48.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";const b={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ErrorBanner } from './ErrorBanner'
import { SynapseClientError } from '../utils/SynapseClientError'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/ErrorBoundary',
  component: ErrorBanner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ErrorBanner>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ErrorBanner> = args => (
  <ErrorBanner {...args} />
)

export const Error = Template.bind({})

Error.args = {
  error: new SynapseClientError(
    403,
    'The user must be validated in order to review data access submissions.',
    '',
  ),
}
`,locationsMap:{error:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/ErrorBoundary",component:r,argTypes:{}},e=o=>n(r,{...o}),s=e.bind({});s.args={error:new t(403,"The user must be validated in order to review data access submissions.","")};const C=["Error"];export{s as Error,C as __namedExportsOrder,b as default};
