import{a8 as t}from"./index.dae95658.js";import{s as r}from"./StorybookComponentWrapper.577a5bf9.js";import{d as n}from"./ToastMessage.c7bcf1c5.js";import{j as e}from"./jsx-runtime.ef6dd6ca.js";import"./index.0c4c5f34.js";import"./iframe.60aac2d9.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.a73b55da.js";import"./styled.e27331e3.js";import"./utils.e96b9b4f.js";import"./TransitionGroupContext.7ee16c7e.js";import"./Alert.ca959f09.js";import"./createWithBsPrefix.fd753f10.js";import"./index.35ce73ec.js";import"./isArray.aa335c2b.js";import"./getEndpoint.bb7ded34.js";import"./Link.3eeff9dd.js";import"./Typography.4e908f90.js";import"./Button.325fe68b.js";import"./ButtonBase.acc32807.js";import"./moment.a565bb48.js";import"./react-router.58db6816.js";import"./FullWidthAlert.d500669b.js";import"./Tooltip.3430fa1d.js";import"./createSvgIcon.f73758be.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d637a5d8.js";import"./isSymbol.3aa79a3a.js";const $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const E=["LoginDemo"];export{s as LoginDemo,E as __namedExportsOrder,$ as default};
