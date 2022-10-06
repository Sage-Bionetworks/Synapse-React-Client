import{a7 as t}from"./index.1df77ce9.js";import{s as r}from"./StorybookComponentWrapper.723f32fe.js";import{d as n}from"./ToastMessage.37d9d7b6.js";import{j as e}from"./jsx-runtime.f8072c65.js";import"./index.1d2a784c.js";import"./iframe.aa82293a.js";import"./withStyles.630b025d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.53bb8599.js";import"./index.57d09176.js";import"./Button.cb7914f2.js";import"./Transition.5983a677.js";import"./index.35ce73ec.js";import"./isArray.903292fc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.761f4d42.js";import"./moment.a565bb48.js";import"./react-router.654bdfeb.js";import"./FullWidthAlert.5a306575.js";import"./Typography.3dd8fe93.js";import"./makeStyles.9cff04c5.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./slicedToArray.e72f11da.js";import"./useTheme.bc44ba71.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d4b83b5.js";import"./isSymbol.28b01415.js";const E={parameters:{storySource:{source:`import React from 'react'
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
