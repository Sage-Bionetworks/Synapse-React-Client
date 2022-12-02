import{aE as t}from"./index.90ee2b5e.js";import{s as r}from"./StorybookComponentWrapper.16d382ef.js";import{d as n}from"./ToastMessage.10c98715.js";import{j as e}from"./jsx-runtime.0db21b62.js";import"./index.9eb164f8.js";import"./iframe.55601028.js";import"./SynapseConstants.290eab74.js";import"./Button.8dd67db9.js";import"./styled.04f8a540.js";import"./utils.8a121841.js";import"./TransitionGroupContext.59a59a19.js";import"./useTheme.6f96ca98.js";import"./Alert.476644bc.js";import"./hook.d21c687b.js";import"./createWithBsPrefix.cf2ded3d.js";import"./divWithClassName.9349f2fc.js";import"./index.35ce73ec.js";import"./Fade.002da28b.js";import"./isArray.051b97b8.js";import"./getEndpoint.bb7ded34.js";import"./Link.400989ff.js";import"./Typography.fc802d4f.js";import"./Button.c393a679.js";import"./ButtonBase.9b5b9b75.js";import"./emotion-react.browser.esm.e326a50f.js";import"./dayjs.min.8ecbf49a.js";import"./react-router.2b265a48.js";import"./FullWidthAlert.257257d5.js";import"./Tooltip.137fb27a.js";import"./createSvgIcon.2669ec85.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.9af27e73.js";import"./isSymbol.70fe8399.js";const q={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"login-demo":{startLoc:{col:47,line:16},endLoc:{col:74,line:16},startBody:{col:47,line:16},endBody:{col:74,line:16}}}}},title:"Authentication/Login",component:t,argTypes:{}},i=o=>e(t,{...o}),s=i.bind({});s.args={sessionCallback:()=>{r().then(({profile:o})=>{n(`You are currently logged in as ${o.userName}`,"info",{autoCloseInMs:5e3})})}};const v=["LoginDemo"];export{s as LoginDemo,v as __namedExportsOrder,q as default};
