import{a8 as t}from"./index.68bd09f4.js";import{s as r}from"./StorybookComponentWrapper.ee6f8503.js";import{d as n}from"./ToastMessage.25510bc7.js";import{j as e}from"./jsx-runtime.cf19754d.js";import"./index.b04ce0ac.js";import"./iframe.bb4f3d50.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.724ba963.js";import"./styled.db2da3d6.js";import"./utils.621f5968.js";import"./TransitionGroupContext.49564fef.js";import"./Alert.00c62036.js";import"./createWithBsPrefix.5ad4e507.js";import"./index.35ce73ec.js";import"./isArray.eece51ec.js";import"./getEndpoint.bb7ded34.js";import"./Link.e3bd49f6.js";import"./Typography.5f784a3a.js";import"./Button.a3c516df.js";import"./ButtonBase.213ee5c8.js";import"./moment.a565bb48.js";import"./react-router.2df937f4.js";import"./FullWidthAlert.338c252c.js";import"./Tooltip.0925b53e.js";import"./createSvgIcon.4f04198d.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.964022b9.js";import"./isSymbol.c5104d65.js";const $={parameters:{storySource:{source:`import React from 'react'
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
