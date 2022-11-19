import{aE as t}from"./index.a70ddfd8.js";import{s as r}from"./StorybookComponentWrapper.e00838f9.js";import{d as n}from"./ToastMessage.276b1811.js";import{j as e}from"./jsx-runtime.f5d212d1.js";import"./index.9c9305ea.js";import"./iframe.89bb5feb.js";import"./SynapseConstants.290eab74.js";import"./Button.8170df20.js";import"./styled.f405056b.js";import"./utils.0b8153da.js";import"./TransitionGroupContext.7656eb12.js";import"./useTheme.e9ed9b1c.js";import"./Alert.257c6bb8.js";import"./hook.70591bc2.js";import"./createWithBsPrefix.91f140d5.js";import"./divWithClassName.5b1e6cb1.js";import"./index.35ce73ec.js";import"./isArray.b1617f44.js";import"./getEndpoint.bb7ded34.js";import"./Link.3fccb4a8.js";import"./Typography.513a1f2d.js";import"./Button.25b7a851.js";import"./ButtonBase.5d7dfd7c.js";import"./emotion-react.browser.esm.6d1cbddb.js";import"./dayjs.min.cec940d1.js";import"./react-router.15a1a1ca.js";import"./FullWidthAlert.c92729a8.js";import"./Tooltip.b3e9245c.js";import"./createSvgIcon.2626c7dc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.7666cadc.js";import"./isSymbol.4571438c.js";const W={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const q=["LoginDemo"];export{s as LoginDemo,q as __namedExportsOrder,W as default};
