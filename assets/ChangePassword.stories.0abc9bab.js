import{r as t,j as s,a}from"./jsx-runtime.aa766aaf.js";import{d as n}from"./ToastMessage.167572b3.js";import{V as b,bQ as p,r as _,bR as x}from"./index.0a2c4939.js";import{c as m,b as g}from"./isArray.24130e12.js";import{B as T}from"./Button.c2cc208f.js";import"./iframe.bd885096.js";import"./FullWidthAlert.8371c9c1.js";import"./Alert.f1eda723.js";import"./createWithBsPrefix.2cafb9ec.js";import"./index.2efb6d36.js";import"./index.35ce73ec.js";import"./Typography.57d7ee2f.js";import"./styled.2fe8edb9.js";import"./Tooltip.e4334ac7.js";import"./createSvgIcon.d27817df.js";import"./TransitionGroupContext.4c6d8009.js";import"./utils.b239c5dc.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.bdc3b93e.js";import"./isSymbol.36b96d1e.js";import"./SynapseConstants.290eab74.js";import"./getEndpoint.bb7ded34.js";import"./Link.d09d0f36.js";import"./Button.d4a39ac2.js";import"./ButtonBase.4c393dc9.js";const d=()=>{const{accessToken:r}=b(),[l,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await _(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(i!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await x(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const oo={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ChangePassword from './ChangePassword'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Authentication/ChangePassword',
  component: ChangePassword,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ChangePassword>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChangePassword> = args => (
  <ChangePassword {...args} />
)

export const ChangePasswordDemo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ChangePasswordDemo.args = {}
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=r=>s(u,{...r}),O=v.bind({});O.args={};const so=["ChangePasswordDemo"];export{O as ChangePasswordDemo,so as __namedExportsOrder,oo as default};
