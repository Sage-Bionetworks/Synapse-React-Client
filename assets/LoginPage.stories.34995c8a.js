import{aE as p}from"./index.84caca20.js";import{j as e,a as r}from"./jsx-runtime.e45f5946.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./SynapseConstants.290eab74.js";import"./Button.85a360c3.js";import"./styled.11fa6590.js";import"./utils.e1966123.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.35ce73ec.js";import"./isArray.8bc8137e.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Typography.33698c6c.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";const t=o=>{const{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l}=o,n="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:n,className:n,children:[r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(p,{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},a=t;try{t.displayName="LoginPage",t.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:t.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const E={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:51,line:15},endLoc:{col:1,line:17},startBody:{col:51,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/LoginPage",component:a,argTypes:{}},c=o=>e(a,{...o}),M=c.bind({}),U=["Demo"];export{M as Demo,U as __namedExportsOrder,E as default};
