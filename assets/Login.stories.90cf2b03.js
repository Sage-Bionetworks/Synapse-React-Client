import{ac as t}from"./index.5eb45ec5.js";import{s as n}from"./StorybookComponentWrapper.1b773187.js";import{d as r}from"./ToastMessage.0eedc8b3.js";import{j as e}from"./jsx-runtime.66426239.js";import"./index.06c514da.js";import"./iframe.7709cd8b.js";import"./Button.0925c41b.js";import"./index.57d09176.js";import"./withStyles.c0f84b5f.js";import"./utils.dd2a9ff9.js";import"./Alert.6f0c6d33.js";import"./index.35ce73ec.js";import"./isArray.563d20f4.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.bec2abf5.js";import"./moment.a565bb48.js";import"./react-router.eb0b09a8.js";import"./FullWidthAlert.28f85f7a.js";import"./Typography.23a20d7c.js";import"./makeStyles.c7a35cbe.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2b0d7b31.js";import"./isSymbol.e6b0fab2.js";const I={parameters:{storySource:{source:`import React from 'react'
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
