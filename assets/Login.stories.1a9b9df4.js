import{a6 as t}from"./index.8c58329a.js";import{s as n}from"./StorybookComponentWrapper.bf38990d.js";import{d as r}from"./ToastMessage.34ffacc9.js";import{j as e}from"./jsx-runtime.189701ee.js";import"./index.1acdd9cd.js";import"./iframe.d1747881.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.870eaf25.js";import"./styled.6dbd55b6.js";import"./utils.7f7b7d48.js";import"./Alert.e0d24906.js";import"./createWithBsPrefix.6d9f981e.js";import"./index.35ce73ec.js";import"./isArray.f833655b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2c64a678.js";import"./moment.a565bb48.js";import"./react-router.95d665bf.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./FullWidthAlert.15bf5cc7.js";import"./Typography.98c54a5a.js";import"./Tooltip.23ad89d7.js";import"./createSvgIcon.4942519b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d6d54f39.js";import"./isSymbol.9e8ac4ca.js";const N={parameters:{storySource:{source:`import React from 'react'
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
}
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sessionCallback:()=>{n().then(({profile:o})=>{r(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const Y=["LoginDemo"];export{i as LoginDemo,Y as __namedExportsOrder,N as default};
