import{R as e,a as C,j as t}from"./jsx-runtime.f4a5fef7.js";import{d as b}from"./ToastMessage.715b02dd.js";import{R as x}from"./RadioGroup.e7d00023.js";import{c as a,b as n}from"./isArray.c85c7bf8.js";import{B as y}from"./Button.6c384231.js";import"./iframe.1c2d6841.js";import"./FullWidthAlert.dfc3d6c6.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.ee4c3b55.js";import"./index.35ce73ec.js";import"./Typography.839bb703.js";import"./styled.02bbe28b.js";import"./Tooltip.8a367305.js";import"./createSvgIcon.5d1f0251.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./utils.c51ff475.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f0e21060.js";import"./isSymbol.f04221fe.js";const c=()=>{const[r,u]=e.useState("info"),[s,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},K={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ToastDemo } from './ToastDemo'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/ToastMessage',
  component: ToastDemo,
} as ComponentMeta<typeof ToastDemo>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToastDemo> = args => <ToastDemo />
export const Toast = Template.bind({})
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:c},k=r=>t(c,{}),Q=k.bind({}),X=["Toast"];export{Q as Toast,X as __namedExportsOrder,K as default};
