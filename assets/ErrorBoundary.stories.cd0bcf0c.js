import{R as r,s as t}from"./index.a70ddfd8.js";import{j as n}from"./jsx-runtime.f5d212d1.js";import"./index.9c9305ea.js";import"./iframe.89bb5feb.js";import"./SynapseConstants.290eab74.js";import"./Button.8170df20.js";import"./styled.f405056b.js";import"./utils.0b8153da.js";import"./TransitionGroupContext.7656eb12.js";import"./useTheme.e9ed9b1c.js";import"./Alert.257c6bb8.js";import"./hook.70591bc2.js";import"./createWithBsPrefix.91f140d5.js";import"./divWithClassName.5b1e6cb1.js";import"./index.35ce73ec.js";import"./isArray.b1617f44.js";import"./getEndpoint.bb7ded34.js";import"./Link.3fccb4a8.js";import"./Typography.513a1f2d.js";import"./Button.25b7a851.js";import"./ButtonBase.5d7dfd7c.js";import"./emotion-react.browser.esm.6d1cbddb.js";const k={parameters:{storySource:{source:`import React from 'react'
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
