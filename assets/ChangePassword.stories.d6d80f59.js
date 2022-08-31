import{c as p,b as m,k as a}from"./ToastMessage.093903bc.js";import{w as _,aV as g,b,aW as T}from"./index.35547ae7.js";import{j as s,a as t}from"./jsx-runtime.2e925369.js";import{B as v}from"./Button.c582ea4c.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";import"./index.06f4a415.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./makeStyles.38be5a7f.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./assert.7360daab.js";import"./iframe.97ab22c6.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";const x=window.React.useEffect,n=window.React.useState,d=()=>{const{accessToken:e}=_(),[w,u]=n(""),[c,f]=n(""),[l,y]=n(""),[i,h]=n();x(()=>{async function o(){const r=await b(e);h(r)}e?o():h(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(c!==l)a("New password and confirm password does not match.","danger");else if(e){const r={newPassword:c,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:i==null?void 0:i.userName,currentPassword:w};await T(r,e).then(()=>a("Successfully changed","success")).catch(S=>a(S.reason,"danger"))}}catch(r){a(r.reason,"danger")}};return s("div",{className:"changePassword",children:t("form",{onSubmit:P,children:[t(g,{controlId:"oldPassword",children:[s(p,{children:"Current Password"}),s(m,{type:"password",onChange:o=>u(o.target.value),value:w})]}),t(g,{controlId:"newPassword",children:[s(p,{children:"New Password"}),s(m,{type:"password",onChange:o=>f(o.target.value),value:c})]}),t(g,{controlId:"confirmPassword",children:[s(p,{children:"Confirm Password"}),s(m,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(v,{type:"submit",onSubmit:P,children:"Change Password"})]})})};var C=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}var J={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:C,argTypes:{}};const k=e=>s(C,{...e}),O=k.bind({});O.args={};const Q=["ChangePasswordDemo"];export{O as ChangePasswordDemo,Q as __namedExportsOrder,J as default};
//# sourceMappingURL=ChangePassword.stories.d6d80f59.js.map
