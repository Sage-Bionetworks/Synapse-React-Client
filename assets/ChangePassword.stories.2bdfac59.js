import{r as t,j as s,a}from"./jsx-runtime.bdebd148.js";import{d as n}from"./ToastMessage.9511113a.js";import{h as _,cn as p,b,co as x}from"./index.8be8b52c.js";import{c as m,b as g}from"./isArray.b696739b.js";import{B as T}from"./Button.2b7fb582.js";import"./iframe.92685df1.js";import"./FullWidthAlert.25897ee9.js";import"./Typography.d5646d3f.js";import"./index.57d09176.js";import"./makeStyles.93952b3f.js";import"./withStyles.d0c35d1c.js";import"./Tooltip.3d6e7019.js";import"./createSvgIcon.27bceae9.js";import"./SvgIcon.2b88c9a1.js";import"./utils.d8861539.js";import"./index.131112ec.js";import"./Alert.2a491573.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fdacb119.js";import"./isSymbol.a301e13d.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:e}=_(),[h,C]=t.exports.useState(""),[c,f]=t.exports.useState(""),[l,y]=t.exports.useState(""),[i,w]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const r=await b(e);w(r)}e?o():w(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(c!==l)n("New password and confirm password does not match.","danger");else if(e){const r={newPassword:c,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:i==null?void 0:i.userName,currentPassword:h};await x(r,e).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(r){n(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:h})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:c})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=e=>s(u,{...e}),O=v.bind({});O.args={};const X=["ChangePasswordDemo"];export{O as ChangePasswordDemo,X as __namedExportsOrder,V as default};
