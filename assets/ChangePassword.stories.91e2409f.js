import{r as t,j as s,a}from"./jsx-runtime.d6be66a9.js";import{d as n}from"./ToastMessage.1551e33e.js";import{a4 as _,cm as p,e as x,cn as b}from"./index.b3fc12c1.js";import{c as m,b as g}from"./isArray.3ed41029.js";import{B as T}from"./Button.58f5aaec.js";import"./iframe.78dc3b5d.js";import"./FullWidthAlert.0962330c.js";import"./hook.0245101a.js";import"./createWithBsPrefix.139b0869.js";import"./divWithClassName.f4023709.js";import"./index.3b7d1b21.js";import"./index.35ce73ec.js";import"./Typography.079c4f38.js";import"./styled.f07e33c6.js";import"./Tooltip.c89a275a.js";import"./SvgIcon.b9658c5d.js";import"./useTheme.0cbb662e.js";import"./TransitionGroupContext.27368eb3.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.1755aefe.js";import"./toString.62a6def8.js";import"./isSymbol.eb29c468.js";import"./SynapseConstants.aef18750.js";import"./Fade.c734522e.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.67904b39.js";import"./IconButton.3b892d3a.js";import"./ButtonBase.250c511d.js";import"./emotion-react.browser.esm.8203c469.js";import"./Link.7f48e2dc.js";import"./Button.bef5272a.js";const i=()=>{const{accessToken:r}=_(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await b(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const no={parameters:{storySource:{source:`import React from 'react'
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
