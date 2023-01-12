import{az as r,f as t}from"./index.0297a0cb.js";import{j as n}from"./jsx-runtime.76b41102.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./SynapseConstants.71946a35.js";import"./Button.83b95483.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.175e5b3e.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";const L={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ErrorBanner } from './ErrorBanner'
import { SynapseClientError } from '../../utils/SynapseClientError'

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
