import{r as g,j as e,a as r}from"./jsx-runtime.b9dbe3f2.js";import{b0 as m}from"./index.5da0c2fe.js";import{I as d}from"./IconSvg.e161b9ac.js";import{I as u}from"./IconButton.92911f6e.js";import"./iframe.daa7e99b.js";import"./index.1d295946.js";import"./SynapseConstants.aef18750.js";import"./Button.5e8fef04.js";import"./styled.b8523d56.js";import"./Tooltip.48a3285f.js";import"./SvgIcon.07fafc9f.js";import"./useTheme.0510b97a.js";import"./TransitionGroupContext.550f3593.js";import"./FullWidthAlert.4c795642.js";import"./hook.8a461b2d.js";import"./createWithBsPrefix.e49426e0.js";import"./divWithClassName.39a68f1e.js";import"./index.35ce73ec.js";import"./Typography.67fe2a50.js";import"./Fade.79c18b91.js";import"./isArray.cd664950.js";import"./getEndpoint.f1f195f5.js";import"./Link.da3e8d7d.js";import"./Button.7c5736c7.js";import"./ButtonBase.a93e0872.js";import"./emotion-react.browser.esm.c079a2eb.js";const n=o=>{const{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p}=o,[t,a]=g.exports.useState(),s="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:s,className:s,children:[t&&e(u,{className:"back-button",onClick:()=>a(!1),children:e(d,{icon:"arrowBack"})}),r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(m,{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p,renderBackButton:!1,handleIsOnUsernameOrPasswordScreen:a,showUsernameOrPassword:t})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},i=n;try{n.displayName="LoginPage",n.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:n.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
