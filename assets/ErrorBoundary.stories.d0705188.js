import{E as r,c as t}from"./index.0305e6df.js";import{j as n}from"./jsx-runtime.50ef6bf8.js";import"./index.c6db38ab.js";import"./iframe.ac4a915a.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.d599da1d.js";import"./index.57d09176.js";import"./withStyles.99d8f96c.js";import"./utils.7e5b3029.js";import"./Alert.2486ab7d.js";import"./createWithBsPrefix.62795558.js";import"./index.35ce73ec.js";import"./isArray.20493a87.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2cd0146b.js";const T={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{error:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/ErrorBoundary",component:r,argTypes:{}},e=o=>n(r,{...o}),s=e.bind({});s.args={error:new t(403,"The user must be validated in order to review data access submissions.","")};const x=["Error"];export{s as Error,x as __namedExportsOrder,T as default};
