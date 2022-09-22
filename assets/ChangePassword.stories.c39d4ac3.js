import{d as t}from"./ToastMessage.de6992d0.js";import{f as S,bP as p,b as _,bQ as T}from"./index.a536ed12.js";import{j as s,a}from"./jsx-runtime.00d70968.js";import{c as m,b as g}from"./toString.d84aaeca.js";import{B as x}from"./Button.fda23eee.js";import"./FullWidthAlert.6afa82c9.js";import"./Typography.868473dc.js";import"./index.57d09176.js";import"./makeStyles.45e8b79c.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.6d92cd5b.js";import"./createSvgIcon.99e72c0f.js";import"./SvgIcon.e37b9412.js";import"./slicedToArray.e72f11da.js";import"./useTheme.aaa309f8.js";import"./Transition.8278edb2.js";import"./Alert.b74d1cfd.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.eba72690.js";import"./assert.fddb1cad.js";import"./iframe.f8de4d79.js";import"./getEndpoint.bb7ded34.js";const v=window.React.useEffect,n=window.React.useState,d=()=>{const{accessToken:e}=S(),[w,u]=n(""),[i,f]=n(""),[l,y]=n(""),[c,h]=n();v(()=>{async function o(){const r=await _(e);h(r)}e?o():h(void 0)},[e]);const P=async o=>{o.preventDefault();try{if(i!==l)t("New password and confirm password does not match.","danger");else if(e){const r={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:w};await T(r,e).then(()=>t("Successfully changed","success")).catch(b=>t(b.reason,"danger"))}}catch(r){t(r.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>u(o.target.value),value:w})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(x,{type:"submit",onSubmit:P,children:"Change Password"})]})})},C=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const so={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:C,argTypes:{}},O=e=>s(C,{...e}),R=O.bind({});R.args={};const eo=["ChangePasswordDemo"];export{R as ChangePasswordDemo,eo as __namedExportsOrder,so as default};
