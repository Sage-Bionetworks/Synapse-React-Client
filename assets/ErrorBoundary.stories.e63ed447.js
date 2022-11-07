import{E as r,c as t}from"./index.8c58329a.js";import{j as n}from"./jsx-runtime.189701ee.js";import"./index.1acdd9cd.js";import"./iframe.d1747881.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.870eaf25.js";import"./styled.6dbd55b6.js";import"./utils.7f7b7d48.js";import"./Alert.e0d24906.js";import"./createWithBsPrefix.6d9f981e.js";import"./index.35ce73ec.js";import"./isArray.f833655b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2c64a678.js";const C={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{error:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/ErrorBoundary",component:r,argTypes:{}},e=o=>n(r,{...o}),s=e.bind({});s.args={error:new t(403,"The user must be validated in order to review data access submissions.","")};const T=["Error"];export{s as Error,T as __namedExportsOrder,C as default};
