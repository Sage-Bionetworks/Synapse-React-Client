import{bo as t}from"./index.cdf98c81.js";import{s as r}from"./StyleGuidistComponentWrapper.ca835014.js";import{d as n}from"./ToastMessage.574c0fe0.js";import{j as i}from"./jsx-runtime.2e925369.js";import"./Button.77571428.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./toConsumableArray.5f669646.js";import"./withStyles.4f64abe1.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./index.8cde812d.js";import"./useUserBundle.1e187889.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./_Uint8Array.692793fe.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./moment.81704e1d.js";import"./react-router.2274575a.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./makeStyles.5f6bad01.js";import"./index.es.82d55a6a.js";import"./debounce.6a99f8f3.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Clear.53a62cf5.js";import"./createSvgIcon.53013205.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4eca3697.js";var F={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}};const e=o=>i(t,{...o}),s=e.bind({});s.args={sessionCallback:()=>{r().then(o=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const J=["LoginDemo"];export{s as LoginDemo,J as __namedExportsOrder,F as default};
//# sourceMappingURL=Login.stories.8d4ca961.js.map
