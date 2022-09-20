import{c6 as t}from"./index.84210d7d.js";import{s as r}from"./StyleGuidistComponentWrapper.faed7446.js";import{d as n}from"./ToastMessage.30a6258e.js";import{j as e}from"./jsx-runtime.00d70968.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.9b56e417.js";import"./iframe.c18f9f1c.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./moment.a565bb48.js";import"./react-router.c0d6a067.js";import"./index.440cefe9.js";import"./FullWidthAlert.e63d41e9.js";import"./Typography.868473dc.js";import"./makeStyles.45e8b79c.js";import"./Tooltip.b1e63f93.js";import"./createSvgIcon.99e72c0f.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";const E={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Login from './Login'
import { sessionChangeHandler } from './StyleGuidistComponentWrapper'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const G=["LoginDemo"];export{s as LoginDemo,G as __namedExportsOrder,E as default};
