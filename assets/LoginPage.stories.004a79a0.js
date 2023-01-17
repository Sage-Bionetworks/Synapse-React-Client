import{r as g,j as e,a as r}from"./jsx-runtime.732db4fa.js";import{b0 as m}from"./index.6ade810e.js";import{I as d}from"./IconSvg.f8a92c9e.js";import{I as u}from"./IconButton.4e309ec1.js";import"./iframe.309bdcd0.js";import"./index.f08547e5.js";import"./SynapseConstants.aef18750.js";import"./Button.14842d9b.js";import"./styled.7d1b1387.js";import"./Tooltip.b3eb933e.js";import"./SvgIcon.883206f0.js";import"./useTheme.23d779b8.js";import"./TransitionGroupContext.25f1619e.js";import"./FullWidthAlert.b4689dd3.js";import"./hook.7d829a86.js";import"./createWithBsPrefix.e55f4707.js";import"./divWithClassName.0d41da1a.js";import"./index.35ce73ec.js";import"./Typography.52fcc329.js";import"./Fade.a9768a9d.js";import"./isArray.ab714070.js";import"./getEndpoint.f1f195f5.js";import"./Link.04b76f3f.js";import"./Button.2b5fc967.js";import"./ButtonBase.caa5bbee.js";import"./emotion-react.browser.esm.4ae44601.js";const n=o=>{const{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p}=o,[t,a]=g.exports.useState(),s="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:s,className:s,children:[t&&e(u,{className:"back-button",onClick:()=>a(!1),children:e(d,{icon:"arrowBack"})}),r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(m,{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p,renderBackButton:!1,handleIsOnUsernameOrPasswordScreen:a,showUsernameOrPassword:t})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},i=n;try{n.displayName="LoginPage",n.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:n.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
