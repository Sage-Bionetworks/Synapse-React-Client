import{Z as t}from"./index.97694b3a.js";import{s as n}from"./StorybookComponentWrapper.7dec7cca.js";import{d as r}from"./ToastMessage.80ffeafc.js";import{j as e}from"./jsx-runtime.e32e0509.js";import"./index.5045cbed.js";import"./iframe.83901080.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.9a335f28.js";import"./index.57d09176.js";import"./withStyles.43181c03.js";import"./utils.93cc3c4b.js";import"./Alert.1890d96c.js";import"./createWithBsPrefix.eb076d55.js";import"./index.35ce73ec.js";import"./isArray.f12d1068.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.6a1c92b0.js";import"./moment.a565bb48.js";import"./react-router.8bc55bf9.js";import"./FullWidthAlert.2f8dcb3c.js";import"./Typography.c79b8528.js";import"./makeStyles.46d23ebd.js";import"./Tooltip.e08987f2.js";import"./createSvgIcon.3a3703dd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.44a1c424.js";import"./isSymbol.e91009b1.js";const Y={parameters:{storySource:{source:`import React from 'react'
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
