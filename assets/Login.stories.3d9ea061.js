import{aE as t}from"./EntityTypeUtils.f136fe8e.js";import{s as r}from"./StorybookComponentWrapper.e3bb9618.js";import{d as n}from"./ToastMessage.fe900393.js";import{j as e}from"./jsx-runtime.edcee20f.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./Fade.e73bdacf.js";import"./styled.57026967.js";import"./useTheme.c864c010.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./Button.beed9c8a.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a36fd00f.js";import"./createWithBsPrefix.fb2e744c.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";import"./dayjs.min.d5c6140e.js";import"./react-router.8bb63a62.js";import"./FullWidthAlert.15c58824.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d49ff0ce.js";import"./isSymbol.4e401305.js";const v={parameters:{storySource:{source:`import React from 'react'
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
  renderBackButton: true,
}
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})},renderBackButton:!0};const z=["LoginDemo"];export{s as LoginDemo,z as __namedExportsOrder,v as default};
