import{ac as t}from"./index.df4d7189.js";import{s as n}from"./StorybookComponentWrapper.45302a2f.js";import{d as r}from"./ToastMessage.b42768ca.js";import{j as e}from"./jsx-runtime.a232804d.js";import"./index.ba62157d.js";import"./iframe.10584503.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./withStyles.1db4abc8.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./isArray.a5a56f48.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";import"./moment.a565bb48.js";import"./react-router.f00a3b4e.js";import"./FullWidthAlert.5abd6e7a.js";import"./Typography.9247f57a.js";import"./makeStyles.403aaa55.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.42db352a.js";import"./isSymbol.af0f15b0.js";const I={parameters:{storySource:{source:`import React from 'react'
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
