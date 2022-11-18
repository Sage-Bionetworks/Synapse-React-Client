import{r as t,j as s,a}from"./jsx-runtime.e45f5946.js";import{d as n}from"./ToastMessage.dffa6777.js";import{V as b,bQ as p,r as _,bR as x}from"./index.84caca20.js";import{c as m,b as g}from"./isArray.8bc8137e.js";import{B as T}from"./Button.85a360c3.js";import"./iframe.db0e90de.js";import"./FullWidthAlert.1145dd98.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.2f057391.js";import"./index.35ce73ec.js";import"./Typography.33698c6c.js";import"./styled.11fa6590.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./utils.e1966123.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.c6c12783.js";import"./isSymbol.564875b4.js";import"./SynapseConstants.290eab74.js";import"./getEndpoint.bb7ded34.js";import"./Link.7e8c9dbf.js";import"./Button.67173b22.js";import"./ButtonBase.95f62226.js";import"./emotion-react.browser.esm.1d99b462.js";const i=()=>{const{accessToken:r}=b(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await _(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await x(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const to={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:u,argTypes:{}},v=r=>s(u,{...r}),O=v.bind({});O.args={};const ao=["ChangePasswordDemo"];export{O as ChangePasswordDemo,ao as __namedExportsOrder,to as default};
