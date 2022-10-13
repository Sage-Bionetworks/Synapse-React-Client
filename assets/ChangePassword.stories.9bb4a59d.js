import{r as t,j as s,a}from"./jsx-runtime.1a5a2715.js";import{d as n}from"./ToastMessage.373e274f.js";import{h as _,ck as p,b,cl as x}from"./index.ee300637.js";import{c as m,b as g}from"./isArray.627abb94.js";import{B as T}from"./Button.47fead8e.js";import"./iframe.cf33b896.js";import"./FullWidthAlert.1624915d.js";import"./Typography.51984e68.js";import"./index.57d09176.js";import"./makeStyles.bd855ff6.js";import"./withStyles.7c3d6aba.js";import"./Tooltip.5c94c0fd.js";import"./createSvgIcon.d6b9a03c.js";import"./SvgIcon.43465c61.js";import"./utils.6069a350.js";import"./index.6dbf9fa2.js";import"./Alert.9d12ab40.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.395c9d56.js";import"./isSymbol.eee16a1e.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:e}=_(),[l,C]=t.exports.useState(""),[c,f]=t.exports.useState(""),[h,y]=t.exports.useState(""),[i,w]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const r=await b(e);w(r)}e?o():w(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(c!==h)n("New password and confirm password does not match.","danger");else if(e){const r={newPassword:c,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:i==null?void 0:i.userName,currentPassword:l};await x(r,e).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(r){n(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:c})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:h})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=e=>s(u,{...e}),k=v.bind({});k.args={};const X=["ChangePasswordDemo"];export{k as ChangePasswordDemo,X as __namedExportsOrder,V as default};
