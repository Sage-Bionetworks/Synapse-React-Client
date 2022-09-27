import{a0 as t}from"./index.a6d709ad.js";import{s as r}from"./StorybookComponentWrapper.6776077d.js";import{d as n}from"./ToastMessage.d368c817.js";import{j as e}from"./jsx-runtime.8cf0c657.js";import"./index.0d47cfe5.js";import"./iframe.6f47dcc9.js";import"./withStyles.f22e9c75.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.70f23d9f.js";import"./index.57d09176.js";import"./Button.89087c87.js";import"./Transition.2fb6e5a0.js";import"./index.35ce73ec.js";import"./isArray.62d496dc.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.af962ab3.js";import"./moment.a565bb48.js";import"./react-router.a3c48d96.js";import"./index.440cefe9.js";import"./FullWidthAlert.c513e3cd.js";import"./Typography.0dca8b10.js";import"./makeStyles.14efd907.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./slicedToArray.e72f11da.js";import"./useTheme.daa899de.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ba83e708.js";import"./isSymbol.57088814.js";const O={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const R=["LoginDemo"];export{s as LoginDemo,R as __namedExportsOrder,O as default};
