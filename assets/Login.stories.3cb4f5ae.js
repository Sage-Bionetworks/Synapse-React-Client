import{a7 as t}from"./index.3873d60b.js";import{s as r}from"./StorybookComponentWrapper.b53fba81.js";import{d as n}from"./ToastMessage.8bfc5f39.js";import{j as e}from"./jsx-runtime.f5c871f2.js";import"./index.50924579.js";import"./iframe.0956ae8e.js";import"./withStyles.b9d3b2a9.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b56cd3e7.js";import"./index.57d09176.js";import"./Button.de05f508.js";import"./Transition.a0ca267e.js";import"./index.35ce73ec.js";import"./isArray.8eaae8ca.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0b86e17f.js";import"./moment.a565bb48.js";import"./react-router.95a4e746.js";import"./FullWidthAlert.76b02069.js";import"./Typography.d381f643.js";import"./makeStyles.c6d0cd33.js";import"./Tooltip.0cafe8cc.js";import"./createSvgIcon.c8dc0ea7.js";import"./slicedToArray.e72f11da.js";import"./useTheme.b6731b0b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.a603395d.js";import"./isSymbol.6fc733ac.js";const E={parameters:{storySource:{source:`import React from 'react'
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
