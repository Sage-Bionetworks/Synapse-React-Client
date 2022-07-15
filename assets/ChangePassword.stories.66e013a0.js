import{d as t}from"./ToastMessage.f82ed562.js";import{w as _,aV as p,b,aW as T}from"./index.29a7f152.js";import{j as s,a}from"./jsx-runtime.2e925369.js";import{c as m,b as g}from"./toString.8ef640ae.js";import{B as v}from"./Button.c582ea4c.js";import"./FullWidthAlert.e7125a09.js";import"./Typography.bfdf676e.js";import"./index.f252d424.js";import"./makeStyles.9dfaa099.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Tooltip.6c95fe7b.js";import"./createSvgIcon.d78a924b.js";import"./SvgIcon.31249d58.js";import"./useTheme.8804f8cd.js";import"./Transition.d42a873e.js";import"./Alert.eafe86e9.js";import"./index.06f4a415.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";import"./assert.f243583f.js";import"./iframe.e1b191de.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";const x=window.React.useEffect,n=window.React.useState,d=()=>{const{accessToken:r}=_(),[w,u]=n(""),[i,f]=n(""),[l,y]=n(""),[c,h]=n();x(()=>{async function o(){const e=await b(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(i!==l)t("New password and confirm password does not match.","danger");else if(r){const e={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:w};await T(e,r).then(()=>t("Successfully changed","success")).catch(S=>t(S.reason,"danger"))}}catch(e){t(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>u(o.target.value),value:w})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(v,{type:"submit",onSubmit:P,children:"Change Password"})]})})};var C=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}var so={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:C,argTypes:{}};const O=r=>s(C,{...r}),R=O.bind({});R.args={};const ro=["ChangePasswordDemo"];export{R as ChangePasswordDemo,ro as __namedExportsOrder,so as default};
//# sourceMappingURL=ChangePassword.stories.66e013a0.js.map
