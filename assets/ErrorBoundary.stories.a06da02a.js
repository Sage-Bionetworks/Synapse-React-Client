import{al as r,t}from"./index.05d3527e.js";import{j as n}from"./jsx-runtime.43a8fcf9.js";import"./index.91cff701.js";import"./iframe.f725ca92.js";import"./SynapseConstants.4792b5b5.js";import"./Button.1bf4e27e.js";import"./styled.76b26431.js";import"./Tooltip.9e1c2716.js";import"./SvgIcon.6442358d.js";import"./useTheme.af9f301b.js";import"./TransitionGroupContext.b91ad5da.js";import"./Alert.52cd8abc.js";import"./hook.21b06627.js";import"./createWithBsPrefix.5369d369.js";import"./divWithClassName.ce1df20c.js";import"./index.35ce73ec.js";import"./Fade.b7951dc7.js";import"./isArray.ef4abd22.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.710ae2ef.js";import"./IconButton.f195eccf.js";import"./ButtonBase.48ba7e09.js";import"./emotion-react.browser.esm.4fa41df1.js";import"./Link.fae97ed4.js";import"./Typography.1c91c940.js";import"./Button.c355b500.js";const L={parameters:{storySource:{source:`import React from 'react'
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
