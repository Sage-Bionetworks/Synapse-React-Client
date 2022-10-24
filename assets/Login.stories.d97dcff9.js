import{ac as t}from"./index.7cb9050b.js";import{s as n}from"./StorybookComponentWrapper.ff1cc616.js";import{d as r}from"./ToastMessage.7ffa621b.js";import{j as e}from"./jsx-runtime.4cd7f6c3.js";import"./index.c5ec5593.js";import"./iframe.27dce855.js";import"./Button.cfb6901e.js";import"./index.57d09176.js";import"./withStyles.3f185fef.js";import"./utils.3d3cd8c3.js";import"./Alert.151390cd.js";import"./index.35ce73ec.js";import"./isArray.cef144cc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.7b92dd2c.js";import"./moment.a565bb48.js";import"./react-router.65d88117.js";import"./FullWidthAlert.6976790a.js";import"./Typography.ad724512.js";import"./makeStyles.e394e1e5.js";import"./Tooltip.6e492e82.js";import"./createSvgIcon.eca8b7b9.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.e78092cb.js";import"./isSymbol.678ebc7d.js";const I={parameters:{storySource:{source:`import React from 'react'
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
