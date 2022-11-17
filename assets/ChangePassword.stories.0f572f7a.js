import{r as t,j as s,a}from"./jsx-runtime.24304d9c.js";import{d as n}from"./ToastMessage.82d4ebc5.js";import{j as b,bx as p,c as x,by as _}from"./index.dc703903.js";import{c as m,b as g}from"./isArray.9daed148.js";import{B as T}from"./Button.505c8034.js";import"./iframe.b3940f38.js";import"./FullWidthAlert.ca6203e3.js";import"./Alert.ec6d4a4e.js";import"./createWithBsPrefix.ee70c17d.js";import"./index.674f08c5.js";import"./index.35ce73ec.js";import"./Typography.7f52bb2e.js";import"./styled.4d5a18a7.js";import"./Tooltip.5f9b84c2.js";import"./createSvgIcon.54a87752.js";import"./TransitionGroupContext.49f32f92.js";import"./utils.867613ea.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.05165c8c.js";import"./isSymbol.63d43715.js";import"./SynapseConstants.b6aa8bf5.js";import"./getEndpoint.bb7ded34.js";import"./Link.3aacec77.js";import"./Button.8a732419.js";import"./ButtonBase.6b005451.js";const d=()=>{const{accessToken:r}=b(),[l,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(i!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await _(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const oo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=r=>s(u,{...r}),j=v.bind({});j.args={};const so=["ChangePasswordDemo"];export{j as ChangePasswordDemo,so as __namedExportsOrder,oo as default};
