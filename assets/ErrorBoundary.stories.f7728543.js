import{R as r,s as t}from"./index.62dd2683.js";import{j as n}from"./jsx-runtime.e3bfef16.js";import"./index.5b26081f.js";import"./iframe.2f11fea3.js";import"./SynapseConstants.290eab74.js";import"./Button.d5f5019a.js";import"./styled.2799bbab.js";import"./utils.09644bf2.js";import"./TransitionGroupContext.f0c2dee6.js";import"./useTheme.9f954659.js";import"./Alert.a811cd40.js";import"./hook.1b918640.js";import"./createWithBsPrefix.af2c57e3.js";import"./divWithClassName.0eda4494.js";import"./index.35ce73ec.js";import"./Fade.8c636cf5.js";import"./isArray.1a1d4e26.js";import"./getEndpoint.bb7ded34.js";import"./Link.7c4fde04.js";import"./Typography.7dc1d80a.js";import"./Button.9a993919.js";import"./ButtonBase.4ded6e01.js";import"./emotion-react.browser.esm.7b70ec33.js";const v={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{error:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/ErrorBoundary",component:r,argTypes:{}},e=o=>n(r,{...o}),s=e.bind({});s.args={error:new t(403,"The user must be validated in order to review data access submissions.","")};const _=["Error"];export{s as Error,_ as __namedExportsOrder,v as default};
