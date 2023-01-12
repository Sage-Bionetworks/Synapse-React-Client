import{r as g,j as e,a as r}from"./jsx-runtime.a638b984.js";import{a$ as m}from"./index.b83134ec.js";import{I as d}from"./IconSvg.9dec1c98.js";import{I as u}from"./IconButton.7cd1b748.js";import"./iframe.73217397.js";import"./index.357ef824.js";import"./SynapseConstants.aef18750.js";import"./Button.9991ffcd.js";import"./styled.d7b43787.js";import"./Tooltip.9be437e1.js";import"./SvgIcon.e74d0ad6.js";import"./useTheme.207e8da2.js";import"./TransitionGroupContext.f8911474.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./createWithBsPrefix.86af4a28.js";import"./divWithClassName.979a7568.js";import"./index.35ce73ec.js";import"./Typography.1d6efe32.js";import"./Fade.cb073591.js";import"./isArray.dae1198f.js";import"./getEndpoint.f1f195f5.js";import"./Link.e9eeb2e9.js";import"./Button.666a2c38.js";import"./ButtonBase.bc378f3c.js";import"./emotion-react.browser.esm.3d42de74.js";const n=o=>{const{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p}=o,[t,a]=g.exports.useState(),s="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:s,className:s,children:[t&&e(u,{className:"back-button",onClick:()=>a(!1),children:e(d,{icon:"arrowBack"})}),r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(m,{ssoRedirectUrl:l,redirectUrl:c,sessionCallback:p,renderBackButton:!1,handleIsOnUsernameOrPasswordScreen:a,showUsernameOrPassword:t})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},i=n;try{n.displayName="LoginPage",n.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:n.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
