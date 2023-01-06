import{ao as r,u as t}from"./EntityTypeUtils.a88da157.js";import{j as n}from"./jsx-runtime.7f415a49.js";import"./index.322ef20a.js";import"./iframe.f0eb7e4f.js";import"./Fade.91bde074.js";import"./styled.681e07cb.js";import"./useTheme.93fabebb.js";import"./Tooltip.532ca871.js";import"./SvgIcon.67c4bd7a.js";import"./TransitionGroupContext.d6cb07c1.js";import"./isArray.22a05d29.js";import"./Button.03e30a54.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.4536f7bc.js";import"./createWithBsPrefix.1ec397ad.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./Link.962b4b54.js";import"./Typography.b9cf5e4f.js";import"./Button.7a13a013.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./divWithClassName.4f7ac618.js";const L={parameters:{storySource:{source:`import React from 'react'
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
