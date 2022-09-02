import{c as p,b as m,k as t}from"./ToastMessage.0ffd35ff.js";import{w as _,aY as g,b,aZ as T}from"./index.83cd4268.js";import{j as s,a}from"./jsx-runtime.00d70968.js";import{B as x}from"./Button.fda23eee.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./FullWidthAlert.a73af62a.js";import"./Typography.9748340b.js";import"./makeStyles.2422b359.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.02f85a09.js";import"./SvgIcon.5d5878ed.js";import"./slicedToArray.e9a7fa03.js";import"./assert.fe14baa7.js";import"./iframe.809c86e7.js";import"./getEndpoint.bb7ded34.js";const v=window.React.useEffect,n=window.React.useState,d=()=>{const{accessToken:e}=_(),[w,u]=n(""),[c,f]=n(""),[l,y]=n(""),[i,h]=n();v(()=>{async function o(){const r=await b(e);h(r)}e?o():h(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(c!==l)t("New password and confirm password does not match.","danger");else if(e){const r={newPassword:c,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:i==null?void 0:i.userName,currentPassword:w};await T(r,e).then(()=>t("Successfully changed","success")).catch(S=>t(S.reason,"danger"))}}catch(r){t(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(g,{controlId:"oldPassword",children:[s(p,{children:"Current Password"}),s(m,{type:"password",onChange:o=>u(o.target.value),value:w})]}),a(g,{controlId:"newPassword",children:[s(p,{children:"New Password"}),s(m,{type:"password",onChange:o=>f(o.target.value),value:c})]}),a(g,{controlId:"confirmPassword",children:[s(p,{children:"Confirm Password"}),s(m,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(x,{type:"submit",onSubmit:P,children:"Change Password"})]})})},C=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const H={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:C,argTypes:{}},k=e=>s(C,{...e}),O=k.bind({});O.args={};const J=["ChangePasswordDemo"];export{O as ChangePasswordDemo,J as __namedExportsOrder,H as default};
