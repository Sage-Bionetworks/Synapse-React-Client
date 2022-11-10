import{r as t,j as s,a}from"./jsx-runtime.2ff8811e.js";import{d as n}from"./ToastMessage.e5302c4a.js";import{j as b,bx as p,c as x,by as _}from"./index.3bd83fcc.js";import{c as m,b as g}from"./isArray.c66fbb5a.js";import{B as T}from"./Button.774b93d6.js";import"./iframe.f6116fbf.js";import"./FullWidthAlert.b9821286.js";import"./Alert.d722c515.js";import"./createWithBsPrefix.8ba5f7eb.js";import"./index.95124b04.js";import"./index.35ce73ec.js";import"./Typography.58720d37.js";import"./styled.9a92447e.js";import"./Tooltip.5bd16401.js";import"./createSvgIcon.13613b84.js";import"./TransitionGroupContext.ecfa02dc.js";import"./utils.2126a84f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.65424154.js";import"./isSymbol.15cce469.js";import"./SynapseConstants.b6aa8bf5.js";import"./getEndpoint.bb7ded34.js";import"./Link.1ad1c99a.js";import"./Button.52cb13cc.js";import"./ButtonBase.4576d1dd.js";const d=()=>{const{accessToken:r}=b(),[l,C]=t.exports.useState(""),[i,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(i!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:i,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await _(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:i})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=d;try{d.displayName="ChangePassword",d.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:d.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const oo={parameters:{storySource:{source:`import React from 'react'
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
