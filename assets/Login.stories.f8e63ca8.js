import{ac as t}from"./index.6f245744.js";import{s as n}from"./StorybookComponentWrapper.2669146a.js";import{d as r}from"./ToastMessage.1747dfd4.js";import{j as e}from"./jsx-runtime.7534b5a0.js";import"./index.5a0550e3.js";import"./iframe.cb5f3f40.js";import"./Button.facab635.js";import"./index.57d09176.js";import"./withStyles.ecbbcd0d.js";import"./utils.b18b59db.js";import"./Alert.9c82c23c.js";import"./index.35ce73ec.js";import"./isArray.1150e90d.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.9b76f9a1.js";import"./moment.a565bb48.js";import"./react-router.cbe5ab53.js";import"./FullWidthAlert.95dc5339.js";import"./Typography.31b00c6c.js";import"./makeStyles.c0018ba8.js";import"./Tooltip.71890e59.js";import"./createSvgIcon.ae6f4177.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4137f4c9.js";import"./isSymbol.c1d6cf65.js";const I={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sessionCallback:()=>{n().then(({profile:o})=>{r(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const N=["LoginDemo"];export{i as LoginDemo,N as __namedExportsOrder,I as default};
