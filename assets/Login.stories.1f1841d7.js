import{c4 as t}from"./index.272215ce.js";import{s as r}from"./StyleGuidistComponentWrapper.a552d3af.js";import{d as n}from"./ToastMessage.6439b7b0.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Alert.5f67d407.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.8d049b2f.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.caef3bfc.js";import"./iframe.6ce0a742.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.2998c199.js";import"./moment.53181859.js";import"./react-router.8a85c8dd.js";import"./FullWidthAlert.279e31cc.js";import"./Typography.3a9e45b6.js";import"./makeStyles.72aedf90.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";var G={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}};const i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const O=["LoginDemo"];export{s as LoginDemo,O as __namedExportsOrder,G as default};
//# sourceMappingURL=Login.stories.1f1841d7.js.map
