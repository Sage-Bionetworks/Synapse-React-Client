import{r as t,j as s,a}from"./jsx-runtime.edcee20f.js";import{d as n}from"./ToastMessage.fe900393.js";import{V as _,c6 as p,s as x,c7 as b}from"./EntityTypeUtils.f136fe8e.js";import{c as m,b as g}from"./isArray.ba2a5774.js";import{B as T}from"./Button.beed9c8a.js";import"./iframe.8d602a7e.js";import"./FullWidthAlert.15c58824.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./createWithBsPrefix.fb2e744c.js";import"./divWithClassName.198d5031.js";import"./index.e284f29f.js";import"./index.35ce73ec.js";import"./Typography.8ba12270.js";import"./styled.57026967.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./useTheme.c864c010.js";import"./TransitionGroupContext.9f30f89b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.d49ff0ce.js";import"./isSymbol.4e401305.js";import"./Fade.e73bdacf.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a36fd00f.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./Link.c844031a.js";import"./Button.237100ef.js";import"./SynapseConstants.d6ba6a96.js";const i=()=>{const{accessToken:r}=_(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await b(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const no={parameters:{storySource:{source:`import React from 'react'
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
