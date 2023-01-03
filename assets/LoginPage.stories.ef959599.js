import{r as g,j as e,a as r}from"./jsx-runtime.abb726e8.js";import{aF as m}from"./EntityTypeUtils.68b1ba2e.js";import{I as d}from"./IconSvg.7db66457.js";import{I as u}from"./IconButton.ed9fd281.js";import"./iframe.eb3e4e59.js";import"./index.2c5f845c.js";import"./Fade.a8b10681.js";import"./styled.f63790d0.js";import"./useTheme.8f8018ca.js";import"./Tooltip.6e0804a9.js";import"./SvgIcon.e2be6ff9.js";import"./TransitionGroupContext.bebd881a.js";import"./isArray.ab001f9e.js";import"./Button.adf7cc86.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./createWithBsPrefix.1bfef79f.js";import"./Link.27f5a2e0.js";import"./Typography.1b6708c1.js";import"./Button.aed7d197.js";import"./ButtonBase.5b0e8114.js";import"./emotion-react.browser.esm.e1070f55.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.955b55b4.js";import"./hook.f27fbe2d.js";import"./divWithClassName.dfc40d29.js";const n=o=>{const{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p}=o,[t,a]=g.exports.useState(),s="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:s,className:s,children:[t&&e(u,{className:"back-button",onClick:()=>a(!1),children:e(d,{icon:"arrowBack"})}),r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(m,{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p,renderBackButton:!1,handleIsOnUsernameOrPasswordScreen:a,showUsernameOrPassword:t})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},i=n;try{n.displayName="LoginPage",n.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:n.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
