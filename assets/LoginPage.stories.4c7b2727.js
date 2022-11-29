import{aE as p}from"./index.d78db713.js";import{j as e,a as r}from"./jsx-runtime.470fedf8.js";import"./index.a7a39b73.js";import"./iframe.2c3c563c.js";import"./SynapseConstants.290eab74.js";import"./Button.32652e66.js";import"./styled.ca076b3f.js";import"./utils.de422cb3.js";import"./TransitionGroupContext.f07704a6.js";import"./useTheme.aca7cff5.js";import"./Alert.aa708f58.js";import"./hook.b9a8fbc8.js";import"./createWithBsPrefix.2bae2e8a.js";import"./divWithClassName.b6065814.js";import"./index.35ce73ec.js";import"./Fade.260ddc4e.js";import"./isArray.35667cb8.js";import"./getEndpoint.bb7ded34.js";import"./Link.46681652.js";import"./Typography.c6dffdf6.js";import"./Button.5119f75c.js";import"./ButtonBase.776e8c8b.js";import"./emotion-react.browser.esm.95d336ef.js";const t=o=>{const{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l}=o,n="login-panel-wrapper";return e("div",{className:"login-panel-wrapper-bg",children:r("div",{id:n,className:n,children:[r("div",{className:"login-panel panel-left",children:[r("div",{className:"panel-logo",children:[e("img",{alt:"Synapse logo",src:"https://s3.amazonaws.com/static.synapse.org/images/synapse-logo-blue.svg"}),e("p",{className:"panel-tagline",children:"Organize. Get credit. Collaborate."})]}),e(p,{ssoRedirectUrl:i,redirectUrl:s,sessionCallback:l})]}),e("div",{className:"login-panel panel-right",children:r("div",{className:"panel-tagline",children:[e("strong",{children:"Organize"})," your digital research assets.",e("br",{}),e("strong",{children:"Get credit"})," for your research.",e("br",{}),e("strong",{children:"Collaborate"})," with your colleagues and the public."]})})]})})},a=t;try{t.displayName="LoginPage",t.__docgenInfo={description:"",displayName:"LoginPage",props:{ssoRedirectUrl:{defaultValue:null,description:"",name:"ssoRedirectUrl",required:!1,type:{name:"string"}},redirectUrl:{defaultValue:null,description:"",name:"redirectUrl",required:!1,type:{name:"string"}},sessionCallback:{defaultValue:null,description:"",name:"sessionCallback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/LoginPage.tsx#LoginPage"]={docgenInfo:t.__docgenInfo,name:"LoginPage",path:"src/lib/containers/LoginPage.tsx#LoginPage"})}catch{}const M={parameters:{storySource:{source:`import React from 'react'
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
