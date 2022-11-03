import{a6 as t}from"./index.9252e43c.js";import{s as n}from"./StorybookComponentWrapper.cbe437ac.js";import{d as r}from"./ToastMessage.25625655.js";import{j as e}from"./jsx-runtime.34ce7573.js";import"./index.440cbb05.js";import"./iframe.2f145b9b.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.ce0bd2bc.js";import"./styled.20fad266.js";import"./utils.02697a41.js";import"./Alert.6db3bf6f.js";import"./createWithBsPrefix.b3a1d38c.js";import"./index.35ce73ec.js";import"./isArray.c4020594.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.be1787bd.js";import"./moment.a565bb48.js";import"./react-router.f77b1e68.js";import"./hoist-non-react-statics.cjs.a7086e34.js";import"./FullWidthAlert.9e017ef2.js";import"./Typography.40039e1c.js";import"./Tooltip.ba09745a.js";import"./createSvgIcon.b38e43ed.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d34fd1e6.js";import"./isSymbol.a6cfa1b9.js";const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},s=o=>e(t,{...o}),i=s.bind({});i.args={sessionCallback:()=>{n().then(({profile:o})=>{r(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const Y=["LoginDemo"];export{i as LoginDemo,Y as __namedExportsOrder,N as default};
