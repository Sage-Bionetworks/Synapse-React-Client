import{a6 as t}from"./index.aa213b73.js";import{s as r}from"./StorybookComponentWrapper.8d2dbbe0.js";import{d as n}from"./ToastMessage.608252d2.js";import{j as e}from"./jsx-runtime.b98719ac.js";import"./index.f0bb0570.js";import"./iframe.1e793943.js";import"./withStyles.79d10ad6.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.cf52bce4.js";import"./index.57d09176.js";import"./Button.ed04e3a1.js";import"./Transition.ac6e0624.js";import"./index.35ce73ec.js";import"./isArray.3c258aa7.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.4537d0f4.js";import"./moment.a565bb48.js";import"./react-router.a7a8fcdd.js";import"./FullWidthAlert.974c42f3.js";import"./Typography.7f563934.js";import"./makeStyles.9e8f686a.js";import"./Tooltip.5964f419.js";import"./createSvgIcon.63cd09dc.js";import"./slicedToArray.e72f11da.js";import"./useTheme.cca4eae4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ff2face8.js";import"./isSymbol.a85127bf.js";const E={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const O=["LoginDemo"];export{s as LoginDemo,O as __namedExportsOrder,E as default};
