import{a6 as c}from"./index.26ad4be5.js";import{j as e,a as n}from"./jsx-runtime.325e7137.js";import"./index.1c9fa93d.js";import"./iframe.d25110d4.js";import"./SynapseConstants.b6aa8bf5.js";import"./Button.2661b6a1.js";import"./styled.8997d4d9.js";import"./utils.373161e6.js";import"./Alert.29e6a249.js";import"./createWithBsPrefix.2155bd3d.js";import"./index.35ce73ec.js";import"./isArray.ba495a61.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.ac4cf4e1.js";const r=o=>{const{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l}=o,t="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:n("div",{id:t,className:t,children:[n("div",{className:"login-panel panel-left",children:[n("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(c,{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l})]}),e("div",{className:"login-panel panel-right",children:n("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},a=r;try{r.displayName="LoginPage",r.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:r.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const T={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:51,line:15},endLoc:{col:1,line:17},startBody:{col:51,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/LoginPage",component:a,argTypes:{}},p=o=>e(a,{...o}),N=p.bind({}),O=["Demo"];export{N as Demo,O as __namedExportsOrder,T as default};
