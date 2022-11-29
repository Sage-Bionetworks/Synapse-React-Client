import{r as t,j as s,a}from"./jsx-runtime.23bcdc09.js";import{d as n}from"./ToastMessage.52d73997.js";import{V as b,bQ as p,r as _,bR as x}from"./index.20c1822f.js";import{c as m,b as g}from"./isArray.1d31a80d.js";import{B as T}from"./Button.9cfa11f8.js";import"./iframe.c49fa417.js";import"./FullWidthAlert.465c2909.js";import"./Alert.03ebe4a7.js";import"./hook.81302421.js";import"./createWithBsPrefix.26026502.js";import"./divWithClassName.fcb14682.js";import"./index.a2bbbebe.js";import"./index.35ce73ec.js";import"./Typography.17940352.js";import"./styled.8da6873c.js";import"./Tooltip.cfbb546f.js";import"./createSvgIcon.e3e4a251.js";import"./TransitionGroupContext.b9a824ce.js";import"./useTheme.26e47b20.js";import"./utils.2eab32fe.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.5a455c2a.js";import"./isSymbol.017a619a.js";import"./SynapseConstants.290eab74.js";import"./Fade.5c08504a.js";import"./getEndpoint.bb7ded34.js";import"./Link.e49ccf51.js";import"./Button.d27fd09d.js";import"./ButtonBase.94c8520a.js";import"./emotion-react.browser.esm.599684c1.js";const i=()=>{const{accessToken:r}=b(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await _(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await x(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const ao={parameters:{storySource:{source:`import React from 'react'
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
