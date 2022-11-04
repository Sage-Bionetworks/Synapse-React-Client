import{a6 as t}from"./index.a967ac4c.js";import{s as n}from"./StorybookComponentWrapper.5fe0eea6.js";import{d as r}from"./ToastMessage.1b9e5ec3.js";import{j as e}from"./jsx-runtime.d95d6493.js";import"./index.7a9149c6.js";import"./iframe.7f51ef58.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.a2dbd16c.js";import"./styled.3f404f86.js";import"./utils.39b72e5d.js";import"./Alert.ac443a97.js";import"./createWithBsPrefix.4fb80af1.js";import"./index.35ce73ec.js";import"./isArray.6553b885.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.67322144.js";import"./moment.a565bb48.js";import"./react-router.d042e1a2.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./FullWidthAlert.c5df0de8.js";import"./Typography.5462d0e3.js";import"./Tooltip.bdb5981c.js";import"./createSvgIcon.54e8e52e.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.82d1329f.js";import"./isSymbol.641f0fe1.js";const N={parameters:{storySource:{source:`import React from 'react'
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
