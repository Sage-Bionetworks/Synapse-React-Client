import{d as t}from"./ToastMessage.574c0fe0.js";import{aK as p,b as _,aL as b}from"./index.cdf98c81.js";import{a as T}from"./useUserBundle.1e187889.js";import{j as r,a}from"./jsx-runtime.2e925369.js";import{c as m,b as g}from"./FormLabel.a635baa2.js";import{B as v}from"./Button.77571428.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./index.f252d424.js";import"./makeStyles.5f6bad01.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./debounce.6a99f8f3.js";import"./isObject.7e2c8eb3.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./createWithBsPrefix.f7715523.js";import"./Clear.53a62cf5.js";import"./createSvgIcon.53013205.js";import"./SvgIcon.1f1b3522.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4eca3697.js";import"./isArray.949e1480.js";import"./getEndpoint.0de7fccf.js";import"./assert.45ccb9fa.js";import"./iframe.dedbd728.js";import"./index.8cde812d.js";import"./_Uint8Array.692793fe.js";const x=window.React.useEffect,n=window.React.useState,i=()=>{const{accessToken:s}=T(),[w,u]=n(""),[d,f]=n(""),[l,y]=n(""),[c,h]=n();x(()=>{async function o(){const e=await _(s);h(e)}s?o():h(void 0)},[s]);const P=async o=>{o.preventDefault();try{if(d!==l)t("New password and confirm password does not match.","danger");else if(s){const e={newPassword:d,concreteType:"org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword",username:c==null?void 0:c.userName,currentPassword:w};await b(e,s).then(()=>t("Successfully changed","success")).catch(S=>t(S.reason,"danger"))}}catch(e){t(e.reason,"danger")}};return r("div",{className:"changePassword",children:a("form",{onSubmit:P,children:[a(p,{controlId:"oldPassword",children:[r(m,{children:"Current Password"}),r(g,{type:"password",onChange:o=>u(o.target.value),value:w})]}),a(p,{controlId:"newPassword",children:[r(m,{children:"New Password"}),r(g,{type:"password",onChange:o=>f(o.target.value),value:d})]}),a(p,{controlId:"confirmPassword",children:[r(m,{children:"Confirm Password"}),r(g,{type:"password",onChange:o=>y(o.target.value),value:l})]}),r(v,{type:"submit",onSubmit:P,children:"Change Password"})]})})};var C=i;try{i.displayName="ChangePassword",i.__docgenInfo={description:"",displayName:"ChangePassword",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/ChangePassword.tsx#ChangePassword"]={docgenInfo:i.__docgenInfo,name:"ChangePassword",path:"src/lib/containers/ChangePassword.tsx#ChangePassword"})}catch{}var mo={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"change-password-demo":{startLoc:{col:56,line:15},endLoc:{col:1,line:17},startBody:{col:56,line:15},endBody:{col:1,line:17}}}}},title:"Authentication/ChangePassword",component:C,argTypes:{}};const O=s=>r(C,{...s}),R=O.bind({});R.args={};const go=["ChangePasswordDemo"];export{R as ChangePasswordDemo,go as __namedExportsOrder,mo as default};
//# sourceMappingURL=ChangePassword.stories.9b664fc5.js.map
