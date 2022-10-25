import{ac as t}from"./index.bff2d9c7.js";import{s as n}from"./StorybookComponentWrapper.24e0d700.js";import{d as r}from"./ToastMessage.c1cdbab7.js";import{j as e}from"./jsx-runtime.6fc4771b.js";import"./index.4e1486f8.js";import"./iframe.14db13df.js";import"./Button.297619c8.js";import"./index.57d09176.js";import"./withStyles.f9df3835.js";import"./utils.6fc55841.js";import"./Alert.bb2e2328.js";import"./index.35ce73ec.js";import"./isArray.3cde12a0.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e84ee4e0.js";import"./moment.a565bb48.js";import"./react-router.e6eb627b.js";import"./FullWidthAlert.7459bb3c.js";import"./Typography.1c5796c6.js";import"./makeStyles.f8fe9b08.js";import"./Tooltip.45d64ebd.js";import"./createSvgIcon.3ee235fb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.aecb96d3.js";import"./isSymbol.6068a581.js";const I={parameters:{storySource:{source:`import React from 'react'
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
