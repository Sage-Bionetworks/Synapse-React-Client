import{aE as p}from"./index.20c1822f.js";import{j as e,a as r}from"./jsx-runtime.23bcdc09.js";import"./index.a2bbbebe.js";import"./iframe.c49fa417.js";import"./SynapseConstants.290eab74.js";import"./Button.9cfa11f8.js";import"./styled.8da6873c.js";import"./utils.2eab32fe.js";import"./TransitionGroupContext.b9a824ce.js";import"./useTheme.26e47b20.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./index.35ce73ec.js";import"./Fade.5c08504a.js";import"./isArray.1d31a80d.js";import"./getEndpoint.bb7ded34.js";import"./Link.e49ccf51.js";import"./Typography.17940352.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./emotion-react.browser.esm.599684c1.js";const t=o=>{const{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l}=o,n="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:n,className:n,children:[r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(p,{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},a=t;try{t.displayName="LoginPage",t.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:t.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const M={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:51,line:15},endLoc:{col:1,line:17},startBody:{col:51,line:15},endBody:{col:1,line:17}}}}},title:"Synapse/LoginPage",component:a,argTypes:{}},c=o=>e(a,{...o}),U=c.bind({}),A=["Demo"];export{U as Demo,A as __namedExportsOrder,M as default};
