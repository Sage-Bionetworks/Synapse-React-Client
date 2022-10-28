import{r as t,j as s,a}from"./jsx-runtime.f2f98a5a.js";import{d as n}from"./ToastMessage.75433d78.js";import{f as b,bg as p,b as _,bh as x}from"./index.3643f9f4.js";import{c as m,b as g}from"./isArray.7423227f.js";import{B as T}from"./Button.498cd291.js";import"./iframe.3db3203a.js";import"./FullWidthAlert.007c198f.js";import"./Typography.32e9e32f.js";import"./index.57d09176.js";import"./makeStyles.b901d8a5.js";import"./withStyles.c893a568.js";import"./Tooltip.1481a07d.js";import"./createSvgIcon.6b81a395.js";import"./SvgIcon.aef32627.js";import"./utils.b0185ad4.js";import"./index.9f26ffd6.js";import"./Alert.df9cc8b6.js";import"./createWithBsPrefix.859b1c88.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.cb398276.js";import"./isSymbol.b0b5d283.js";import"./SynapseConstants.b6aa8bf5.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:e}=b(),[h,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[l,y]=t.exports.useState(""),[c,w]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const r=await _(e);w(r)}e?o():w(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(i!==l)n("New password and confirm password does not match.","danger");else if(e){const r={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:h};await x(r,e).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(r){n(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:h})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const Z={parameters:{storySource:{source:`import React from 'react'
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
