import{aE as t}from"./index.22d2125e.js";import{s as r}from"./StorybookComponentWrapper.102f734c.js";import{d as n}from"./ToastMessage.a10582c4.js";import{j as e}from"./jsx-runtime.31268528.js";import"./index.d5f32449.js";import"./iframe.c7567c2d.js";import"./SynapseConstants.290eab74.js";import"./Button.3eb9449f.js";import"./styled.0bfd4c69.js";import"./utils.033d23ab.js";import"./TransitionGroupContext.43d26755.js";import"./useTheme.910eaec3.js";import"./Alert.d1d035f0.js";import"./hook.78e5dc31.js";import"./createWithBsPrefix.4103f011.js";import"./divWithClassName.a05c647c.js";import"./index.35ce73ec.js";import"./Fade.4ca82ca8.js";import"./isArray.e45ce668.js";import"./getEndpoint.bb7ded34.js";import"./Link.df009298.js";import"./Typography.7deb443e.js";import"./Button.5756842c.js";import"./ButtonBase.34890086.js";import"./emotion-react.browser.esm.d60ec8ed.js";import"./dayjs.min.fa03b112.js";import"./react-router.5b70f4d2.js";import"./FullWidthAlert.0f9fa90d.js";import"./Tooltip.5176c19c.js";import"./createSvgIcon.f7c19e7b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.23cb78c9.js";import"./isSymbol.32cdb41a.js";const q={parameters:{storySource:{source:`import React from 'react'
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
