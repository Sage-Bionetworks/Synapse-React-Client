import{ab as t}from"./index.9501be1c.js";import{s as n}from"./StorybookComponentWrapper.4e4d6cdb.js";import{d as r}from"./ToastMessage.9b5c3655.js";import{j as e}from"./jsx-runtime.4c3515e4.js";import"./index.e847bba9.js";import"./iframe.37f2588a.js";import"./Alert.54d65423.js";import"./Button.28efd16b.js";import"./index.57d09176.js";import"./Transition.840176b2.js";import"./index.35ce73ec.js";import"./isArray.7ff8d0ef.js";import"./withStyles.9c7b3093.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.d7dd9197.js";import"./moment.a565bb48.js";import"./react-router.acb8ca75.js";import"./FullWidthAlert.c9de56f1.js";import"./Typography.48c24744.js";import"./makeStyles.96934dd6.js";import"./Tooltip.92206031.js";import"./createSvgIcon.8e9e6f8f.js";import"./useTheme.5faeeca8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.129d2094.js";import"./isSymbol.6b184f44.js";const N={parameters:{storySource:{source:`import React from 'react'
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
