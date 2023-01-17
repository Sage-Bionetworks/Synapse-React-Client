import{b0 as t}from"./index.6ade810e.js";import{s as r}from"./StorybookComponentWrapper.7fd5312d.js";import{d as n}from"./ToastMessage.ca9da849.js";import{j as e}from"./jsx-runtime.732db4fa.js";import"./index.f08547e5.js";import"./iframe.309bdcd0.js";import"./SynapseConstants.aef18750.js";import"./Button.14842d9b.js";import"./styled.7d1b1387.js";import"./Tooltip.b3eb933e.js";import"./SvgIcon.883206f0.js";import"./useTheme.23d779b8.js";import"./TransitionGroupContext.25f1619e.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./createWithBsPrefix.e55f4707.js";import"./divWithClassName.0d41da1a.js";import"./index.35ce73ec.js";import"./Typography.52fcc329.js";import"./Fade.a9768a9d.js";import"./isArray.ab714070.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.f8a92c9e.js";import"./IconButton.4e309ec1.js";import"./ButtonBase.caa5bbee.js";import"./emotion-react.browser.esm.4ae44601.js";import"./Link.04b76f3f.js";import"./Button.2b5fc967.js";import"./dayjs.min.0ad62631.js";import"./react-router.6d6b8cd2.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.68f55a89.js";import"./toString.083d15f6.js";import"./isSymbol.3aa759ff.js";const v={parameters:{storySource:{source:`import React from 'react'
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
