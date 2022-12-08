import{r as g,j as e,a as r}from"./jsx-runtime.e6c7cb0f.js";import{aM as m}from"./index.a4d7c90b.js";import{I as d}from"./IconSvg.7c6c26ba.js";import{I as u}from"./IconButton.3458b12d.js";import"./iframe.62902f49.js";import"./index.2be90583.js";import"./SynapseConstants.4792b5b5.js";import"./Button.55945b82.js";import"./styled.defe1bf4.js";import"./Tooltip.b8c59786.js";import"./SvgIcon.277e4012.js";import"./useTheme.78ea417a.js";import"./TransitionGroupContext.9be55353.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./createWithBsPrefix.d521861c.js";import"./divWithClassName.f3083196.js";import"./index.35ce73ec.js";import"./Fade.43ac51c5.js";import"./isArray.d7f4d705.js";import"./getEndpoint.f1f195f5.js";import"./Link.f733bec4.js";import"./Typography.491b6426.js";import"./Button.6ec7c4e8.js";import"./ButtonBase.c32891f3.js";import"./emotion-react.browser.esm.0fa712d1.js";const n=o=>{const{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p}=o,[t,a]=g.exports.useState(),s="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:s,className:s,children:[t&&e(u,{className:"back-button",onClick:()=>a(!1),children:e(d,{icon:"arrowBack"})}),r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(m,{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p,renderBackButton:!1,handleIsOnUsernameOrPasswordScreen:a,showUsernameOrPassword:t})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},i=n;try{n.displayName="LoginPage",n.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:n.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LoginPage from './LoginPage'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Synapse/LoginPage',
  component: LoginPage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LoginPage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginPage> = args => (
  <LoginPage {...args} />
)

export const Demo = Template.bind({})
`,locationsMap:{demo:{startLoc:{col:51,line:15},endLoc:{col:1,line:17},startBody:{col:51,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/LoginPage",component:i,argTypes:{}},y=o=>e(i,{...o}),G=y.bind({}),K=["Demo"];export{G as Demo,K as __namedExportsOrder,V as default};
