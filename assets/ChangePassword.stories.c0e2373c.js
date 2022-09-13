import{c as p,b as g,k as a}from"./ToastMessage.72011e3e.js";import{f as _,aY as m,b,aZ as T}from"./index.463f1f6b.js";import{j as s,a as t}from"./jsx-runtime.00d70968.js";import{B as x}from"./Button.fda23eee.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./makeStyles.733638f6.js";import"./withStyles.d50e1a5a.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";import"./assert.543e7698.js";import"./iframe.1b6fb934.js";import"./getEndpoint.bb7ded34.js";const v=window.React.useEffect,n=window.React.useState,d=()=>{const{accessToken:e}=_(),[w,u]=n(""),[c,f]=n(""),[l,y]=n(""),[i,h]=n();v(()=>{async function o(){const r=await b(e);h(r)}e?o():h(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(c!==l)a("New password and confirm password does not match.","danger");else if(e){const r={newPassword:c,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:i==null?void 0:i.userName,currentPassword:w};await T(r,e).then(()=>a("Successfully changed","success")).catch(S=>a(S.reason,"danger"))}}catch(r){a(r.reason,"danger")}};return s("div",{className:"changePassword",children:t("form",{onSubmit:P,children:[t(m,{controlId:"oldPassword",children:[s(p,{children:"Current Password"}),s(g,{type:"password",onChange:o=>u(o.target.value),value:w})]}),t(m,{controlId:"newPassword",children:[s(p,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:c})]}),t(m,{controlId:"confirmPassword",children:[s(p,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(x,{type:"submit",onSubmit:P,children:"Change Password"})]})})},C=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const Z={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:C,argTypes:{}},k=e=>s(C,{...e}),O=k.bind({});O.args={};const z=["ChangePasswordDemo"];export{O as ChangePasswordDemo,z as __namedExportsOrder,Z as default};
