import{aM as t}from"./index.fd010cb7.js";import{s as r}from"./StorybookComponentWrapper.fa089e77.js";import{d as n}from"./ToastMessage.32c452c3.js";import{j as e}from"./jsx-runtime.254b3176.js";import"./index.0a919fcb.js";import"./iframe.75dade87.js";import"./SynapseConstants.4792b5b5.js";import"./Button.87a6ff9f.js";import"./styled.0b0d8b8c.js";import"./Tooltip.8deb04e4.js";import"./SvgIcon.3abc547b.js";import"./useTheme.c977df4e.js";import"./TransitionGroupContext.8e2c28aa.js";import"./Alert.a3cded27.js";import"./hook.f1fe8c77.js";import"./createWithBsPrefix.df6e431b.js";import"./divWithClassName.7005b84b.js";import"./index.35ce73ec.js";import"./Fade.feae1643.js";import"./isArray.f97a9bbd.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.f20d6379.js";import"./IconButton.903dfe6a.js";import"./ButtonBase.373062e6.js";import"./emotion-react.browser.esm.2f156512.js";import"./Link.a0ec5041.js";import"./Typography.770de0a7.js";import"./Button.1f777938.js";import"./dayjs.min.f047e958.js";import"./react-router.cd80fe84.js";import"./FullWidthAlert.3a145ad4.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.45db3035.js";import"./isSymbol.26d1d746.js";const v={parameters:{storySource:{source:`import React from 'react'
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
