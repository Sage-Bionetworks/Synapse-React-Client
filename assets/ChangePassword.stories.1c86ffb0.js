import{r as t,j as s,a}from"./jsx-runtime.cae1efce.js";import{d as n}from"./ToastMessage.8e99f4ca.js";import{W as _,c7 as p,t as x,c8 as b}from"./EntityTypeUtils.02efa7e4.js";import{c as m,b as g}from"./isArray.175db850.js";import{B as T}from"./Button.7727704e.js";import"./iframe.61f567f7.js";import"./FullWidthAlert.9d4713f3.js";import"./Alert.e36be6ab.js";import"./hook.9b282447.js";import"./createWithBsPrefix.df7fa21f.js";import"./divWithClassName.5b633697.js";import"./index.3a565a91.js";import"./index.35ce73ec.js";import"./Typography.334f7e13.js";import"./styled.893b6037.js";import"./Tooltip.017a66bf.js";import"./SvgIcon.d977b0c7.js";import"./useTheme.6ac8e7e3.js";import"./TransitionGroupContext.bc025aa2.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fbe1b45a.js";import"./isSymbol.87b57363.js";import"./Fade.31660acb.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.6bbb8efe.js";import"./IconButton.68caccba.js";import"./ButtonBase.9b75ed73.js";import"./emotion-react.browser.esm.0f705697.js";import"./Link.c5d35787.js";import"./Button.af90093c.js";import"./SynapseConstants.d6ba6a96.js";const i=()=>{const{accessToken:r}=_(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await b(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const no={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=r=>s(u,{...r}),O=v.bind({});O.args={};const io=["ChangePasswordDemo"];export{O as ChangePasswordDemo,io as __namedExportsOrder,no as default};
