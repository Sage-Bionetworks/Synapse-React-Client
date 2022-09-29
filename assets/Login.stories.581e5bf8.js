import{a5 as t}from"./index.c285f2ad.js";import{s as r}from"./StorybookComponentWrapper.63a68812.js";import{d as n}from"./ToastMessage.8eafdcee.js";import{j as e}from"./jsx-runtime.94e3dcbc.js";import"./index.189336ba.js";import"./iframe.7112cc2f.js";import"./withStyles.25512efa.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a8f3dea8.js";import"./index.57d09176.js";import"./Button.ee922916.js";import"./Transition.aafae1a0.js";import"./index.35ce73ec.js";import"./isArray.74b811f1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.972646c7.js";import"./moment.a565bb48.js";import"./react-router.0809f19c.js";import"./FullWidthAlert.50b3fdeb.js";import"./Typography.c058b4a5.js";import"./makeStyles.13257dd8.js";import"./Tooltip.7e80f23c.js";import"./createSvgIcon.aba3ff90.js";import"./slicedToArray.e72f11da.js";import"./useTheme.90c94c01.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5395311d.js";import"./isSymbol.9ddd9e86.js";const E={parameters:{storySource:{source:`import React from 'react'
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
