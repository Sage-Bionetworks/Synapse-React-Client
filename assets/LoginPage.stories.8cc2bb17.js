import{a0 as c}from"./index.65b6889e.js";import{j as e,a as n}from"./jsx-runtime.9b9f5ec2.js";import"./index.9efb4fab.js";import"./iframe.8f6c7ea4.js";import"./withStyles.c4d286cc.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.a1c2894f.js";import"./index.57d09176.js";import"./Button.17fde95a.js";import"./Transition.95b45c06.js";import"./index.35ce73ec.js";import"./isArray.88d141d1.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.59ebdbf7.js";const r=o=>{const{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l}=o,t="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:n("div",{id:t,className:t,children:[n("div",{className:"login-panel panel-left",children:[n("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(c,{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l})]}),e("div",{className:"login-panel panel-right",children:n("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},a=r;try{r.displayName="LoginPage",r.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:r.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:51,line:15},endLoc:{col:1,line:17},startBody:{col:51,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/LoginPage",component:a,argTypes:{}},p=o=>e(a,{...o}),O=p.bind({}),v=["Demo"];export{O as Demo,v as __namedExportsOrder,N as default};
