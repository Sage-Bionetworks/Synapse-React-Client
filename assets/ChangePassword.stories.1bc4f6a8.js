import{r as t,j as s,a}from"./jsx-runtime.08584073.js";import{d as n}from"./ToastMessage.b76b29fc.js";import{h as b,bv as p,b as _,bw as x}from"./index.8d274cce.js";import{c as m,b as g}from"./isArray.e00a52bc.js";import{B as T}from"./Button.19eb0a0d.js";import"./iframe.46cf6f9c.js";import"./FullWidthAlert.c938c0bd.js";import"./Alert.50172ad9.js";import"./createWithBsPrefix.84280c3f.js";import"./index.10a6a474.js";import"./index.35ce73ec.js";import"./Typography.afe1a60b.js";import"./styled.49e31bee.js";import"./Tooltip.f9340fc3.js";import"./createSvgIcon.5c64ba32.js";import"./SvgIcon.52412c7b.js";import"./utils.564f56d5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2262e339.js";import"./isSymbol.bad84e3a.js";import"./SynapseConstants.b6aa8bf5.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:e}=b(),[w,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[h,y]=t.exports.useState(""),[c,l]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const r=await _(e);l(r)}e?o():l(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(i!==h)n("New password and confirm password does not match.","danger");else if(e){const r={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:w};await x(r,e).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(r){n(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:w})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:h})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
