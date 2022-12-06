import{aE as t}from"./index.53b0413e.js";import{s as r}from"./StorybookComponentWrapper.07591f96.js";import{d as n}from"./ToastMessage.f480df01.js";import{j as e}from"./jsx-runtime.076c7567.js";import"./index.3dd8c113.js";import"./iframe.dc9e500a.js";import"./SynapseConstants.290eab74.js";import"./Button.a0002af7.js";import"./styled.65df53fb.js";import"./Tooltip.b4ed2e26.js";import"./TransitionGroupContext.9598a495.js";import"./useTheme.6d85215f.js";import"./Alert.052d6dda.js";import"./hook.fb6ae99a.js";import"./createWithBsPrefix.125a71ed.js";import"./divWithClassName.d855987b.js";import"./index.35ce73ec.js";import"./Fade.476b0ff7.js";import"./isArray.b8ce881a.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.94aeb20a.js";import"./IconButton.81618d29.js";import"./ButtonBase.49fff140.js";import"./emotion-react.browser.esm.74b64aae.js";import"./Link.fd8fbf97.js";import"./Typography.18dd9738.js";import"./Button.855954d3.js";import"./dayjs.min.20a3de16.js";import"./react-router.44fc13bb.js";import"./FullWidthAlert.c3c066c4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0acb56b3.js";import"./isSymbol.353ed4c3.js";const q={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Login from './Login'
import { sessionChangeHandler } from './StorybookComponentWrapper'
import { displayToast } from './ToastMessage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Authentication/Login',
  component: Login,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Login>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Login> = args => <Login {...args} />

export const LoginDemo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoginDemo.args = {
  sessionCallback: () => {
    sessionChangeHandler().then(({ profile }) => {
      displayToast(
        \`You are currently logged in as \${profile.userName}\`,
        'info',
        { autoCloseInMs: 5000 },
      )
    })
  },
  renderBackButton: true,
}
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})},renderBackButton:!0};const v=["LoginDemo"];export{s as LoginDemo,v as __namedExportsOrder,q as default};
