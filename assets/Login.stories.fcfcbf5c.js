import{a7 as t}from"./index.22793847.js";import{s as r}from"./StorybookComponentWrapper.49e2bfb2.js";import{d as n}from"./ToastMessage.0f10ae0c.js";import{j as e}from"./jsx-runtime.0547954a.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./withStyles.5f371c18.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.320f728d.js";import"./index.57d09176.js";import"./Button.faa197e5.js";import"./Transition.c74a9bc3.js";import"./index.35ce73ec.js";import"./isArray.dc0d9748.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.20c60b09.js";import"./moment.a565bb48.js";import"./react-router.a907e7b6.js";import"./FullWidthAlert.8329478a.js";import"./Typography.5de44d5b.js";import"./makeStyles.68b76b6a.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f4071482.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d625886.js";import"./isSymbol.56654682.js";const E={parameters:{storySource:{source:`import React from 'react'
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
