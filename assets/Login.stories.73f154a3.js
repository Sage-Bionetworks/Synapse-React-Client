import{ab as t}from"./index.a7b4e4df.js";import{s as n}from"./StorybookComponentWrapper.80c62679.js";import{d as r}from"./ToastMessage.9c9a0082.js";import{j as e}from"./jsx-runtime.f7cf66fc.js";import"./index.1e38edd3.js";import"./iframe.7a93df40.js";import"./Alert.a83e08c9.js";import"./Button.8c8504e0.js";import"./index.57d09176.js";import"./Transition.9d380883.js";import"./index.35ce73ec.js";import"./isArray.a5837af6.js";import"./withStyles.ddbf8a64.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d61a6d98.js";import"./moment.a565bb48.js";import"./react-router.075042d0.js";import"./FullWidthAlert.73cdbacd.js";import"./Typography.dfe40719.js";import"./makeStyles.c3ae2cc2.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./useTheme.af842711.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bff82890.js";import"./isSymbol.c2dfe727.js";const N={parameters:{storySource:{source:`import React from 'react'
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
