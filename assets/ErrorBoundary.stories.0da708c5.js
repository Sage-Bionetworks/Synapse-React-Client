import{E as r,e as t}from"./index.c107377d.js";import{j as n}from"./jsx-runtime.34c6f27f.js";import"./index.01abc564.js";import"./iframe.678b52ee.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.e09f83de.js";import"./styled.0edb18ff.js";import"./utils.e76a203c.js";import"./TransitionGroupContext.3999b8b4.js";import"./Alert.894f722a.js";import"./createWithBsPrefix.37ad16b9.js";import"./index.35ce73ec.js";import"./isArray.2797ec7c.js";import"./getEndpoint.bb7ded34.js";import"./Link.31ef5031.js";import"./Typography.1460c8bf.js";import"./Button.115b5334.js";import"./ButtonBase.14266c5d.js";const w={parameters:{storySource:{source:`import React from 'react'
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
