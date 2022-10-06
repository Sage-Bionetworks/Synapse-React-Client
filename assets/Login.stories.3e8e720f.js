import{a7 as t}from"./index.7be09227.js";import{s as r}from"./StorybookComponentWrapper.528d5365.js";import{d as n}from"./ToastMessage.a987dfc7.js";import{j as e}from"./jsx-runtime.deeea9fb.js";import"./index.f3b69ce7.js";import"./iframe.96756ded.js";import"./withStyles.f2d2f220.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.aa68dfe4.js";import"./index.57d09176.js";import"./Button.467325a1.js";import"./Transition.9b5aa1a6.js";import"./index.35ce73ec.js";import"./isArray.19812eb5.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.72adc85a.js";import"./moment.a565bb48.js";import"./react-router.b403bc14.js";import"./FullWidthAlert.ab2f1882.js";import"./Typography.b3d032a4.js";import"./makeStyles.a83d6931.js";import"./Tooltip.ae5e0614.js";import"./createSvgIcon.42b31dcf.js";import"./slicedToArray.e72f11da.js";import"./useTheme.966b26ad.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b5368ced.js";import"./isSymbol.8f6c3bd1.js";const E={parameters:{storySource:{source:`import React from 'react'
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
