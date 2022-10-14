import{ac as t}from"./index.a3e4acf8.js";import{s as n}from"./StorybookComponentWrapper.e0a264a3.js";import{d as r}from"./ToastMessage.8ffb9391.js";import{j as e}from"./jsx-runtime.1d2001c8.js";import"./index.43d111f8.js";import"./iframe.11c071de.js";import"./Button.850c0905.js";import"./index.57d09176.js";import"./withStyles.706b11e4.js";import"./utils.b5696502.js";import"./Alert.cbdcee9e.js";import"./index.35ce73ec.js";import"./isArray.a059945b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.3fc47b81.js";import"./moment.a565bb48.js";import"./react-router.56951f45.js";import"./FullWidthAlert.6b98829c.js";import"./Typography.e119af63.js";import"./makeStyles.c53704bf.js";import"./Tooltip.76084c23.js";import"./createSvgIcon.6133e741.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.93061bc8.js";import"./isSymbol.ce5fe5c9.js";const I={parameters:{storySource:{source:`import React from 'react'
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
