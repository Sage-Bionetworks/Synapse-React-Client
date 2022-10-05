import{a6 as t}from"./index.a1936379.js";import{s as r}from"./StorybookComponentWrapper.081809f9.js";import{d as n}from"./ToastMessage.8993ec69.js";import{j as e}from"./jsx-runtime.af56d2f4.js";import"./index.34222f2e.js";import"./iframe.51f26e37.js";import"./withStyles.95bfae1f.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b7090dbd.js";import"./index.57d09176.js";import"./Button.288689e2.js";import"./Transition.66d770ee.js";import"./index.35ce73ec.js";import"./isArray.05e742d7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.fd305cf0.js";import"./moment.a565bb48.js";import"./react-router.c0a3224f.js";import"./FullWidthAlert.e0d9cdf3.js";import"./Typography.add999d3.js";import"./makeStyles.0eb241f0.js";import"./Tooltip.4363549c.js";import"./createSvgIcon.c99f3a66.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f557cee5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fe0a6f5d.js";import"./isSymbol.691d7973.js";const E={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const O=["LoginDemo"];export{s as LoginDemo,O as __namedExportsOrder,E as default};
