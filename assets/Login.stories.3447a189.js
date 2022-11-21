import{aE as t}from"./index.09dc23e8.js";import{s as r}from"./StorybookComponentWrapper.466c9d73.js";import{d as n}from"./ToastMessage.2604ce43.js";import{j as e}from"./jsx-runtime.ed9254b2.js";import"./index.6a4b5ee2.js";import"./iframe.99e068ca.js";import"./SynapseConstants.290eab74.js";import"./Button.f70cf9a8.js";import"./styled.83fecbff.js";import"./utils.ce7a07fb.js";import"./TransitionGroupContext.335c91bc.js";import"./useTheme.fd34ae61.js";import"./Alert.5c7a73ee.js";import"./hook.8985ff56.js";import"./createWithBsPrefix.a83dfdb4.js";import"./divWithClassName.2b7a9e20.js";import"./index.35ce73ec.js";import"./isArray.9c9c9c65.js";import"./getEndpoint.bb7ded34.js";import"./Link.4533b1ea.js";import"./Typography.754ee5d4.js";import"./Button.3c46c29a.js";import"./ButtonBase.7ff40024.js";import"./emotion-react.browser.esm.c3af8cc3.js";import"./dayjs.min.33c1da17.js";import"./react-router.c7b5ff43.js";import"./FullWidthAlert.adc5f173.js";import"./Tooltip.f5ebbadc.js";import"./createSvgIcon.90f6b4eb.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0aa69bea.js";import"./isSymbol.18579460.js";const W={parameters:{storySource:{source:`import React from 'react'
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
