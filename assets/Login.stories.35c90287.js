import{a6 as t}from"./index.5bc63636.js";import{s as r}from"./StorybookComponentWrapper.44a31d89.js";import{d as n}from"./ToastMessage.d2af582b.js";import{j as e}from"./jsx-runtime.53ec3a99.js";import"./index.c935dff9.js";import"./iframe.707dd820.js";import"./withStyles.2fbec1dd.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.89d8effb.js";import"./index.57d09176.js";import"./Button.aa21b764.js";import"./Transition.feec5299.js";import"./index.35ce73ec.js";import"./isArray.afa3346a.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.0bcbfb3f.js";import"./moment.a565bb48.js";import"./react-router.ea2e7ff6.js";import"./FullWidthAlert.a76adc9d.js";import"./Typography.d6d23e6c.js";import"./makeStyles.0544ad0e.js";import"./Tooltip.6a46e0c0.js";import"./createSvgIcon.80ece60c.js";import"./slicedToArray.e72f11da.js";import"./useTheme.f82ec4e5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.84a1f40d.js";import"./isSymbol.c005a6aa.js";const E={parameters:{storySource:{source:`import React from 'react'
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
