import{r as t,j as s,a}from"./jsx-runtime.66426239.js";import{d as n}from"./ToastMessage.0eedc8b3.js";import{h as _,cl as p,b,cm as x}from"./index.5eb45ec5.js";import{c as m,b as g}from"./isArray.563d20f4.js";import{B as T}from"./Button.0925c41b.js";import"./iframe.7709cd8b.js";import"./FullWidthAlert.28f85f7a.js";import"./Typography.23a20d7c.js";import"./index.57d09176.js";import"./makeStyles.c7a35cbe.js";import"./withStyles.c0f84b5f.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./SvgIcon.bec2abf5.js";import"./utils.dd2a9ff9.js";import"./index.06c514da.js";import"./Alert.6f0c6d33.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.2b0d7b31.js";import"./isSymbol.e6b0fab2.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:e}=_(),[l,C]=t.exports.useState(""),[c,f]=t.exports.useState(""),[h,y]=t.exports.useState(""),[i,w]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const r=await b(e);w(r)}e?o():w(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(c!==h)n("New password and confirm password does not match.","danger");else if(e){const r={newPassword:c,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:i==null?void 0:i.userName,currentPassword:l};await x(r,e).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(r){n(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:c})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:h})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const V={parameters:{storySource:{source:`import React from 'react'
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
