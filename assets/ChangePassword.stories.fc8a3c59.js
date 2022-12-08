import{r as t,j as s,a}from"./jsx-runtime.e6c7cb0f.js";import{d as n}from"./ToastMessage.7470eb0d.js";import{M as _,c3 as p,s as x,c4 as b}from"./index.a4d7c90b.js";import{c as m,b as g}from"./isArray.d7f4d705.js";import{B as T}from"./Button.55945b82.js";import"./iframe.62902f49.js";import"./FullWidthAlert.194d0790.js";import"./Alert.dd9a8045.js";import"./hook.0a44a4bc.js";import"./createWithBsPrefix.d521861c.js";import"./divWithClassName.f3083196.js";import"./index.2be90583.js";import"./index.35ce73ec.js";import"./Typography.491b6426.js";import"./styled.defe1bf4.js";import"./Tooltip.b8c59786.js";import"./SvgIcon.277e4012.js";import"./useTheme.78ea417a.js";import"./TransitionGroupContext.9be55353.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.3a766a50.js";import"./isSymbol.361bd2a3.js";import"./SynapseConstants.4792b5b5.js";import"./Fade.43ac51c5.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.7c6c26ba.js";import"./IconButton.3458b12d.js";import"./ButtonBase.c32891f3.js";import"./emotion-react.browser.esm.0fa712d1.js";import"./Link.f733bec4.js";import"./Button.6ec7c4e8.js";const i=()=>{const{accessToken:r}=_(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await b(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const no={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=r=>s(u,{...r}),M=v.bind({});M.args={};const io=["ChangePasswordDemo"];export{M as ChangePasswordDemo,io as __namedExportsOrder,no as default};
