import{a6 as t}from"./index.8d274cce.js";import{s as n}from"./StorybookComponentWrapper.e51bf546.js";import{d as r}from"./ToastMessage.b76b29fc.js";import{j as e}from"./jsx-runtime.08584073.js";import"./index.10a6a474.js";import"./iframe.46cf6f9c.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.19eb0a0d.js";import"./styled.49e31bee.js";import"./utils.564f56d5.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./index.35ce73ec.js";import"./isArray.e00a52bc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.52412c7b.js";import"./moment.a565bb48.js";import"./react-router.431ca703.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./FullWidthAlert.c938c0bd.js";import"./Typography.afe1a60b.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2262e339.js";import"./isSymbol.bad84e3a.js";const N={parameters:{storySource:{source:`import React from 'react'
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
