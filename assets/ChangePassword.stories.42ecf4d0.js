import{r as t,j as s,a}from"./jsx-runtime.8cf0c657.js";import{d as n}from"./ToastMessage.d368c817.js";import{h as _,c9 as p,b,ca as x}from"./index.a6d709ad.js";import{c as m,b as g}from"./isArray.62d496dc.js";import{B as T}from"./Button.89087c87.js";import"./iframe.6f47dcc9.js";import"./FullWidthAlert.c513e3cd.js";import"./Typography.0dca8b10.js";import"./index.57d09176.js";import"./makeStyles.14efd907.js";import"./withStyles.f22e9c75.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.8bb6ec51.js";import"./createSvgIcon.3db62023.js";import"./SvgIcon.af962ab3.js";import"./slicedToArray.e72f11da.js";import"./index.0d47cfe5.js";import"./useTheme.daa899de.js";import"./Transition.2fb6e5a0.js";import"./Alert.70f23d9f.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ba83e708.js";import"./isSymbol.57088814.js";import"./getEndpoint.bb7ded34.js";const d=()=>{const{accessToken:r}=_(),[h,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[l,y]=t.exports.useState(""),[c,w]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await b(r);w(e)}r?o():w(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(i!==l)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:h};await x(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:h})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const so={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=r=>s(u,{...r}),O=v.bind({});O.args={};const ro=["ChangePasswordDemo"];export{O as ChangePasswordDemo,ro as __namedExportsOrder,so as default};
