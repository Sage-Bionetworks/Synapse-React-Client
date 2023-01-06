import{r as t,j as s,a}from"./jsx-runtime.7f415a49.js";import{d as n}from"./ToastMessage.475a246a.js";import{W as _,c7 as p,t as x,c8 as b}from"./EntityTypeUtils.a88da157.js";import{c as m,b as g}from"./isArray.22a05d29.js";import{B as T}from"./Button.03e30a54.js";import"./iframe.f0eb7e4f.js";import"./FullWidthAlert.58605d4c.js";import"./Alert.41cbd6e8.js";import"./hook.926e9335.js";import"./createWithBsPrefix.1ec397ad.js";import"./divWithClassName.4f7ac618.js";import"./index.322ef20a.js";import"./index.35ce73ec.js";import"./Typography.b9cf5e4f.js";import"./styled.681e07cb.js";import"./Tooltip.532ca871.js";import"./SvgIcon.67c4bd7a.js";import"./useTheme.93fabebb.js";import"./TransitionGroupContext.d6cb07c1.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.706d73bf.js";import"./isSymbol.9047c28e.js";import"./Fade.91bde074.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.4536f7bc.js";import"./IconButton.f87dde1e.js";import"./ButtonBase.24c8fd98.js";import"./emotion-react.browser.esm.3f795854.js";import"./Link.962b4b54.js";import"./Button.7a13a013.js";import"./SynapseConstants.d6ba6a96.js";const i=()=>{const{accessToken:r}=_(),[l,C]=t.exports.useState(""),[d,f]=t.exports.useState(""),[w,y]=t.exports.useState(""),[c,h]=t.exports.useState();t.exports.useEffect(()=>{async function o(){const e=await x(r);h(e)}r?o():h(void 0)},[r]);const P=async o=>{o.preventDefault();try{if(d!==w)n("New password and confirm password does not match.","danger");else if(r){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:l};await b(e,r).then(()=>n("Successfully changed","success")).catch(S=>n(S.reason,"danger"))}}catch(e){n(e.reason,"danger")}};return s("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[s(m,{children:"Current Password"}),s(g,{type:"password",onChange:o=>C(o.target.value),value:l})]}),a(p,{controlId:"newPassword",children:[s(m,{children:"New Password"}),s(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[s(m,{children:"Confirm Password"}),s(g,{type:"password",onChange:o=>y(o.target.value),value:w})]}),s(T,{type:"submit",onSubmit:P,children:"Change Password"})]})})},u=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}const no={parameters:{storySource:{source:`import React from 'react'
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
