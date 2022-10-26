import{E as r,c as t}from"./index.a2edd6ac.js";import{j as n}from"./jsx-runtime.8900a285.js";import"./index.912828a9.js";import"./iframe.c24069c1.js";import"./Button.e50f7fc9.js";import"./index.57d09176.js";import"./withStyles.1744e3f1.js";import"./utils.d7ed0c75.js";import"./Alert.3046b0d1.js";import"./index.35ce73ec.js";import"./isArray.4e3f2043.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4e934e01.js";const b={parameters:{storySource:{source:`import React from 'react'
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
