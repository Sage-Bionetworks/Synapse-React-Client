import{aE as t}from"./index.f6d21e1b.js";import{s as r}from"./StorybookComponentWrapper.fb0996b2.js";import{d as n}from"./ToastMessage.c90a289b.js";import{j as e}from"./jsx-runtime.9272ed69.js";import"./index.dc51ea0b.js";import"./iframe.e4b610a3.js";import"./SynapseConstants.290eab74.js";import"./Button.db898533.js";import"./styled.0de421fa.js";import"./utils.6e1717b5.js";import"./TransitionGroupContext.54f3d5ea.js";import"./useTheme.75529918.js";import"./Alert.2534b0a8.js";import"./hook.0361e512.js";import"./createWithBsPrefix.9ea76fe5.js";import"./divWithClassName.c5203597.js";import"./index.35ce73ec.js";import"./Fade.cc51c470.js";import"./isArray.f757e7ba.js";import"./getEndpoint.bb7ded34.js";import"./Link.8b0bf192.js";import"./Typography.1f221702.js";import"./Button.0c0c729f.js";import"./ButtonBase.3405045f.js";import"./emotion-react.browser.esm.1c97b976.js";import"./dayjs.min.18cbb91e.js";import"./react-router.a1dde3c8.js";import"./FullWidthAlert.5512750c.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f24c8a17.js";import"./isSymbol.04dc93d5.js";const q={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const v=["LoginDemo"];export{s as LoginDemo,v as __namedExportsOrder,q as default};
