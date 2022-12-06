import{r as t,j as s,a}from"./jsx-runtime.076c7567.js";import{d as n}from"./ToastMessage.f480df01.js";import{V as b,bR as p,r as _,bS as x}from"./index.53b0413e.js";import{c as m,b as g}from"./isArray.b8ce881a.js";import{B as T}from"./Button.a0002af7.js";import"./iframe.dc9e500a.js";import"./FullWidthAlert.c3c066c4.js";import"./Alert.052d6dda.js";import"./hook.fb6ae99a.js";import"./createWithBsPrefix.125a71ed.js";import"./divWithClassName.d855987b.js";import"./index.3dd8c113.js";import"./index.35ce73ec.js";import"./Typography.18dd9738.js";import"./styled.65df53fb.js";import"./Tooltip.b4ed2e26.js";import"./TransitionGroupContext.9598a495.js";import"./useTheme.6d85215f.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.0acb56b3.js";import"./isSymbol.353ed4c3.js";import"./SynapseConstants.290eab74.js";import"./Fade.476b0ff7.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.94aeb20a.js";import"./IconButton.81618d29.js";import"./ButtonBase.49fff140.js";import"./emotion-react.browser.esm.74b64aae.js";import"./Link.fd8fbf97.js";import"./Button.855954d3.js";const i=()=>{const{accessToken:r}=b(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await _(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await x(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const ao={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=r=>s(u,{...r}),O=v.bind({});O.args={};const no=["ChangePasswordDemo"];export{O as ChangePasswordDemo,no as __namedExportsOrder,ao as default};
