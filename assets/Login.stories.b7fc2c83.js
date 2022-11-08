import{a8 as t}from"./index.f37f3b8f.js";import{s as n}from"./StorybookComponentWrapper.626e6986.js";import{d as r}from"./ToastMessage.3b077507.js";import{j as e}from"./jsx-runtime.e755df9d.js";import"./index.46e2a3d6.js";import"./iframe.2151c0e3.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ce5d2622.js";import"./styled.134e90bd.js";import"./utils.61686747.js";import"./Alert.7ac348fd.js";import"./createWithBsPrefix.c5475a12.js";import"./index.35ce73ec.js";import"./isArray.32035835.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.26fd4209.js";import"./moment.a565bb48.js";import"./react-router.fc9c55ce.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./FullWidthAlert.4c671361.js";import"./Typography.c9ad912d.js";import"./Tooltip.68fb53f0.js";import"./createSvgIcon.4e7dae8f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.05b48118.js";import"./isSymbol.449c22fe.js";const N={parameters:{storySource:{source:`import React from 'react'
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
