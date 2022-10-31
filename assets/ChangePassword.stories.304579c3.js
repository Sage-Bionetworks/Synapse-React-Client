import{r as t,j as s,a}from"./jsx-runtime.b29a5274.js";import{d as n}from"./ToastMessage.cdfb50d6.js";import{f as b,bg as p,b as _,bh as x}from"./index.dcde5598.js";import{c as m,b as g}from"./isArray.0036f9bf.js";import{B as T}from"./Button.c77a6de6.js";import"./iframe.45f65fdb.js";import"./FullWidthAlert.3cefffa2.js";import"./Typography.e39b1a57.js";import"./index.57d09176.js";import"./makeStyles.90bec0f4.js";import"./withStyles.2d1152f5.js";import"./Tooltip.76e779de.js";import"./createSvgIcon.363a4d4a.js";import"./SvgIcon.5f62e5e7.js";import"./utils.c867bc57.js";import"./index.73e3d9d7.js";import"./Alert.5f5d4d35.js";import"./createWithBsPrefix.2e8fbe6b.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.759a0be8.js";import"./isSymbol.9796f8db.js";import"./SynapseConstants.b6aa8bf5.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:e}=b(),[h,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[l,y]=t.exports.useState(""),[c,w]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const r=await _(e);w(r)}e?o():w(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(i!==l)n("New password and confirm password does not match.","danger");else if(e){const r={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:h};await x(r,e).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(r){n(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:h})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const Z={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=e=>s(u,{...e}),O=v.bind({});O.args={};const oo=["ChangePasswordDemo"];export{O as ChangePasswordDemo,oo as __namedExportsOrder,Z as default};
