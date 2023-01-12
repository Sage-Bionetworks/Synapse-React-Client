import{r as t,j as s,a}from"./jsx-runtime.a638b984.js";import{d as n}from"./ToastMessage.1f086d0d.js";import{a4 as _,cm as p,e as x,cn as b}from"./index.b83134ec.js";import{c as m,b as g}from"./isArray.dae1198f.js";import{B as T}from"./Button.9991ffcd.js";import"./iframe.73217397.js";import"./FullWidthAlert.97efcbea.js";import"./hook.a59baafe.js";import"./createWithBsPrefix.86af4a28.js";import"./divWithClassName.979a7568.js";import"./index.357ef824.js";import"./index.35ce73ec.js";import"./Typography.1d6efe32.js";import"./styled.d7b43787.js";import"./Tooltip.9be437e1.js";import"./SvgIcon.e74d0ad6.js";import"./useTheme.207e8da2.js";import"./TransitionGroupContext.f8911474.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.409eda17.js";import"./toString.42e4c32f.js";import"./isSymbol.0dd0ac71.js";import"./SynapseConstants.aef18750.js";import"./Fade.cb073591.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.9dec1c98.js";import"./IconButton.7cd1b748.js";import"./ButtonBase.bc378f3c.js";import"./emotion-react.browser.esm.3d42de74.js";import"./Link.e9eeb2e9.js";import"./Button.666a2c38.js";const i=()=>{const{accessToken:r}=_(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await b(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const no={parameters:{storySource:{source:`import React from 'react'
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
