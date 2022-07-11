import{c4 as t}from"./index.fe051f0b.js";import{s as r}from"./StyleGuidistComponentWrapper.2ba36e4f.js";import{d as n}from"./ToastMessage.87e58df2.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./isObject.97b5908e.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./index.06f4a415.js";import"./toString.41faaa42.js";import"./assert.5e584fd6.js";import"./iframe.51626e58.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.f6f6da7c.js";import"./moment.53181859.js";import"./react-router.2fed5473.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./makeStyles.9976e655.js";import"./index.es.82d55a6a.js";import"./debounce.b9f00509.js";import"./toNumber.bfb36d17.js";import"./Clear.eb427cfa.js";import"./createSvgIcon.88863916.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ce7b286a.js";var E={parameters:{storySource:{source:`import React from 'react'
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
    sessionChangeHandler().then(profile => {
      displayToast(
        \`You are currently logged in as \${profile.userName}\`,
        'info',
        { autoCloseInMs: 5000 },
      )
    })
  },
}
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}};const i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(o=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const G=["LoginDemo"];export{s as LoginDemo,G as __namedExportsOrder,E as default};
//# sourceMappingURL=Login.stories.927c434e.js.map
