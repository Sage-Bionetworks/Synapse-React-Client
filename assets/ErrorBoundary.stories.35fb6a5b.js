import{ao as r,u as t}from"./EntityTypeUtils.02efa7e4.js";import{j as n}from"./jsx-runtime.cae1efce.js";import"./index.3a565a91.js";import"./iframe.61f567f7.js";import"./Fade.31660acb.js";import"./styled.893b6037.js";import"./useTheme.6ac8e7e3.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./TransitionGroupContext.bc025aa2.js";import"./isArray.175db850.js";import"./Button.7727704e.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./createWithBsPrefix.df7fa21f.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./emotion-react.browser.esm.0f705697.js";import"./Link.c5d35787.js";import"./Typography.334f7e13.js";import"./Button.af90093c.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./divWithClassName.5b633697.js";const L={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{error:{startLoc:{col:53,line:15},endLoc:{col:1,line:17},startBody:{col:53,line:15},endBody:{col:1,line:17}}}}},title:"UI/ErrorBoundary",component:r,argTypes:{}},e=o=>n(r,{...o}),s=e.bind({});s.args={error:new t(403,"The user must be validated in order to review data access submissions.","")};const U=["Error"];export{s as Error,U as __namedExportsOrder,L as default};
