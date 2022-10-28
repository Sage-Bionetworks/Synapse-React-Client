import{Z as t}from"./index.3643f9f4.js";import{s as n}from"./StorybookComponentWrapper.dee43842.js";import{d as r}from"./ToastMessage.75433d78.js";import{j as e}from"./jsx-runtime.f2f98a5a.js";import"./index.9f26ffd6.js";import"./iframe.3db3203a.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.498cd291.js";import"./index.57d09176.js";import"./withStyles.c893a568.js";import"./utils.b0185ad4.js";import"./Alert.df9cc8b6.js";import"./createWithBsPrefix.859b1c88.js";import"./index.35ce73ec.js";import"./isArray.7423227f.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.aef32627.js";import"./moment.a565bb48.js";import"./react-router.ccceae5b.js";import"./FullWidthAlert.007c198f.js";import"./Typography.32e9e32f.js";import"./makeStyles.b901d8a5.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.cb398276.js";import"./isSymbol.b0b5d283.js";const Y={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{n().then(({profile:o})=>{r(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const $=["LoginDemo"];export{s as LoginDemo,$ as __namedExportsOrder,Y as default};
