import{a5 as t}from"./index.8b6b728c.js";import{s as r}from"./StorybookComponentWrapper.434ae299.js";import{d as n}from"./ToastMessage.fbccec25.js";import{j as e}from"./jsx-runtime.697357f5.js";import"./index.8f0405d3.js";import"./iframe.1d19b668.js";import"./withStyles.14454601.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.bd767cc3.js";import"./index.57d09176.js";import"./Button.742355f2.js";import"./Transition.375dbede.js";import"./index.35ce73ec.js";import"./isArray.c87d30d5.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.3010e2d4.js";import"./moment.a565bb48.js";import"./react-router.51117a9c.js";import"./FullWidthAlert.429d6e5f.js";import"./Typography.d498897e.js";import"./makeStyles.5e65f24d.js";import"./Tooltip.1a172c13.js";import"./createSvgIcon.cf9e16cb.js";import"./slicedToArray.e72f11da.js";import"./useTheme.44d9e479.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.73448b1f.js";import"./isSymbol.ff12d775.js";const E={parameters:{storySource:{source:`import React from 'react'
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
