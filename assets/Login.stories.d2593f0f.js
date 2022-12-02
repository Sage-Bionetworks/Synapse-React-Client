import{aE as t}from"./index.34864443.js";import{s as r}from"./StorybookComponentWrapper.70724678.js";import{d as n}from"./ToastMessage.0ac4744b.js";import{j as e}from"./jsx-runtime.e72699d7.js";import"./index.71f9d2b1.js";import"./iframe.e515b461.js";import"./SynapseConstants.290eab74.js";import"./Button.69f4aad2.js";import"./styled.113fc281.js";import"./Tooltip.626a672e.js";import"./TransitionGroupContext.2e90d9c8.js";import"./useTheme.3c585c97.js";import"./Alert.d9dcb62e.js";import"./hook.dcb03d67.js";import"./createWithBsPrefix.93be1871.js";import"./divWithClassName.15ce1beb.js";import"./index.35ce73ec.js";import"./Fade.2e614c5f.js";import"./isArray.768225e0.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.91cc0bda.js";import"./IconButton.53297fa9.js";import"./ButtonBase.1e74724a.js";import"./emotion-react.browser.esm.6478344e.js";import"./Link.2241f35d.js";import"./Typography.4509eb0e.js";import"./Button.5bebd4e9.js";import"./dayjs.min.9844fde9.js";import"./react-router.8ae8c9e6.js";import"./FullWidthAlert.2ca2db91.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7182a54a.js";import"./isSymbol.24e67468.js";const q={parameters:{storySource:{source:`import React from 'react'
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
