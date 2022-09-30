import{a5 as t}from"./index.a37d8dd7.js";import{s as r}from"./StorybookComponentWrapper.83df4cbb.js";import{d as n}from"./ToastMessage.1a804d30.js";import{j as e}from"./jsx-runtime.05444945.js";import"./index.849f5f8d.js";import"./iframe.ff4ba921.js";import"./withStyles.2a0b3149.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.1016cb8e.js";import"./index.57d09176.js";import"./Button.0b1296fc.js";import"./Transition.4ed8243e.js";import"./index.35ce73ec.js";import"./isArray.fbf85b3b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.44b5863d.js";import"./moment.a565bb48.js";import"./react-router.0219c125.js";import"./FullWidthAlert.27fd0db2.js";import"./Typography.9965ffbe.js";import"./makeStyles.29b4f0d4.js";import"./Tooltip.e02d1bf4.js";import"./createSvgIcon.49bfc951.js";import"./slicedToArray.e72f11da.js";import"./useTheme.48f15230.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.24a4cbf4.js";import"./isSymbol.bfa8ae0b.js";const E={parameters:{storySource:{source:`import React from 'react'
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
