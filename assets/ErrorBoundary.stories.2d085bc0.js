import{E as r,c as t}from"./index.444e3572.js";import{j as n}from"./jsx-runtime.ed0bc2e8.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./Button.ead7d59a.js";import"./index.57d09176.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";const b={parameters:{storySource:{source:`import React from 'react'
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
