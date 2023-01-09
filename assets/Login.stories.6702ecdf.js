import{a$ as t}from"./index.6e226ad1.js";import{s as r}from"./StorybookComponentWrapper.84708e58.js";import{d as n}from"./ToastMessage.43b52073.js";import{j as e}from"./jsx-runtime.8ee42ca4.js";import"./index.c68764fa.js";import"./iframe.57558d86.js";import"./SynapseConstants.4792b5b5.js";import"./Button.32185a3f.js";import"./styled.cab085b6.js";import"./Tooltip.53b3d1bd.js";import"./SvgIcon.e7d9e8d5.js";import"./useTheme.a650b60c.js";import"./TransitionGroupContext.d40bca5e.js";import"./Alert.4adbe9cb.js";import"./hook.b75ee742.js";import"./createWithBsPrefix.1fcef933.js";import"./divWithClassName.4fa3ddf0.js";import"./index.35ce73ec.js";import"./Fade.8d5d2209.js";import"./isArray.649754a9.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9744025b.js";import"./IconButton.0dfca4e0.js";import"./ButtonBase.442ee4f8.js";import"./emotion-react.browser.esm.755544ae.js";import"./Link.f5b0fcd9.js";import"./Typography.dc67c84b.js";import"./Button.73b6fb95.js";import"./dayjs.min.605c11f2.js";import"./react-router.19c87f2d.js";import"./FullWidthAlert.a54f59d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d7153eca.js";import"./isSymbol.4962e9a9.js";const v={parameters:{storySource:{source:`import React from 'react'
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
  renderBackButton: true,
}
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})},renderBackButton:!0};const z=["LoginDemo"];export{s as LoginDemo,z as __namedExportsOrder,v as default};
