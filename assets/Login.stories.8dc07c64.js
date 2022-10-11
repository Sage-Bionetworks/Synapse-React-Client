import{ab as t}from"./index.399b1ebb.js";import{s as n}from"./StorybookComponentWrapper.2133a8bd.js";import{d as r}from"./ToastMessage.ef3fd930.js";import{j as e}from"./jsx-runtime.f6e67d69.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./Alert.161bc8be.js";import"./Button.bb6df31f.js";import"./index.57d09176.js";import"./Transition.45107636.js";import"./index.35ce73ec.js";import"./isArray.bbc3389f.js";import"./withStyles.e9153c6c.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.b9f91416.js";import"./moment.a565bb48.js";import"./react-router.61b3ec7b.js";import"./FullWidthAlert.a36cfcd9.js";import"./Typography.8482fe8d.js";import"./makeStyles.b3ebb6fc.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./useTheme.b5d1a103.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b369d35f.js";import"./isSymbol.817739da.js";const N={parameters:{storySource:{source:`import React from 'react'
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
