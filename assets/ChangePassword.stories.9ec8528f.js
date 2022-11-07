import{r as t,j as s,a}from"./jsx-runtime.6cb91464.js";import{d as n}from"./ToastMessage.5ece0449.js";import{h as b,bv as p,b as _,bw as x}from"./index.253aaada.js";import{c as m,b as g}from"./isArray.c85446b1.js";import{B as T}from"./Button.719dc857.js";import"./iframe.77de7a8b.js";import"./FullWidthAlert.771b5ce8.js";import"./Alert.f130f9d6.js";import"./createWithBsPrefix.c2eb45fa.js";import"./index.13becb40.js";import"./index.35ce73ec.js";import"./Typography.c072ef4f.js";import"./styled.9d49d23e.js";import"./Tooltip.9b073f35.js";import"./createSvgIcon.c493b6c9.js";import"./SvgIcon.7bbcd48d.js";import"./utils.11d89a6f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4f03145e.js";import"./isSymbol.116fae96.js";import"./SynapseConstants.b6aa8bf5.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:e}=b(),[w,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[h,y]=t.exports.useState(""),[c,l]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const r=await _(e);l(r)}e?o():l(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(i!==h)n("New password and confirm password does not match.","danger");else if(e){const r={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:w};await x(r,e).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(r){n(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:w})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:h})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
