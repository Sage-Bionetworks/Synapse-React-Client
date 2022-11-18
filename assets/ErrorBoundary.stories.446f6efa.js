import{R as r,s as t}from"./index.0a2c4939.js";import{j as n}from"./jsx-runtime.aa766aaf.js";import"./index.2efb6d36.js";import"./iframe.bd885096.js";import"./SynapseConstants.290eab74.js";import"./Button.c2cc208f.js";import"./styled.2fe8edb9.js";import"./utils.b239c5dc.js";import"./TransitionGroupContext.4c6d8009.js";import"./Alert.f1eda723.js";import"./createWithBsPrefix.2cafb9ec.js";import"./index.35ce73ec.js";import"./isArray.24130e12.js";import"./getEndpoint.bb7ded34.js";import"./Link.d09d0f36.js";import"./Typography.57d7ee2f.js";import"./Button.d4a39ac2.js";import"./ButtonBase.4c393dc9.js";const w={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{error:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/ErrorBoundary",component:r,argTypes:{}},e=o=>n(r,{...o}),s=e.bind({});s.args={error:new t(403,"The user must be validated in order to review data access submissions.","")};const M=["Error"];export{s as Error,M as __namedExportsOrder,w as default};
