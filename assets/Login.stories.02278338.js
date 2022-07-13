import{c4 as t}from"./index.8a2242e1.js";import{s as r}from"./StyleGuidistComponentWrapper.439d3738.js";import{d as n}from"./ToastMessage.507eac51.js";import{j as e}from"./jsx-runtime.2e925369.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./isObject.f3be1931.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.f9b9a371.js";import"./assert.3cfd2c72.js";import"./iframe.5219a3a2.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./moment.53181859.js";import"./react-router.1298da01.js";import"./FullWidthAlert.1eea41b0.js";import"./Typography.53c43c81.js";import"./makeStyles.9dfaa099.js";import"./debounce.bb67b392.js";import"./toNumber.71be2bd9.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./useTheme.8804f8cd.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.50daefd4.js";var E={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=Login.stories.02278338.js.map
