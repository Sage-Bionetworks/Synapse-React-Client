import{a6 as t}from"./index.26ad4be5.js";import{s as n}from"./StorybookComponentWrapper.f2a49f2e.js";import{d as r}from"./ToastMessage.356d6e1c.js";import{j as e}from"./jsx-runtime.325e7137.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2661b6a1.js";import"./styled.8997d4d9.js";import"./utils.373161e6.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./index.35ce73ec.js";import"./isArray.ba495a61.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ac4cf4e1.js";import"./moment.a565bb48.js";import"./react-router.73518b6b.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./FullWidthAlert.3575feb9.js";import"./Typography.46ba432f.js";import"./Tooltip.4e888661.js";import"./createSvgIcon.3ee89089.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.69d847eb.js";import"./isSymbol.2f09fe74.js";const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sessionCallback:()=>{n().then(({profile:o})=>{r(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const Y=["LoginDemo"];export{i as LoginDemo,Y as __namedExportsOrder,N as default};
