import{ac as t}from"./index.8be8b52c.js";import{s as n}from"./StorybookComponentWrapper.286ed656.js";import{d as r}from"./ToastMessage.9511113a.js";import{j as e}from"./jsx-runtime.bdebd148.js";import"./index.131112ec.js";import"./iframe.92685df1.js";import"./Button.2b7fb582.js";import"./index.57d09176.js";import"./withStyles.d0c35d1c.js";import"./utils.d8861539.js";import"./Alert.2a491573.js";import"./index.35ce73ec.js";import"./isArray.b696739b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.2b88c9a1.js";import"./moment.a565bb48.js";import"./react-router.24ba6e5c.js";import"./FullWidthAlert.25897ee9.js";import"./Typography.d5646d3f.js";import"./makeStyles.93952b3f.js";import"./Tooltip.3d6e7019.js";import"./createSvgIcon.27bceae9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fdacb119.js";import"./isSymbol.a301e13d.js";const I={parameters:{storySource:{source:`import React from 'react'
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
