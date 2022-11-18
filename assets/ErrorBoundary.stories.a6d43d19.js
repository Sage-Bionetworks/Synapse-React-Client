import{R as r,s as t}from"./index.84caca20.js";import{j as n}from"./jsx-runtime.e45f5946.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./SynapseConstants.290eab74.js";import"./Button.85a360c3.js";import"./styled.11fa6590.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Typography.33698c6c.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";const k={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{error:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/ErrorBoundary",component:r,argTypes:{}},e=o=>n(r,{...o}),s=e.bind({});s.args={error:new t(403,"The user must be validated in order to review data access submissions.","")};const v=["Error"];export{s as Error,v as __namedExportsOrder,k as default};
