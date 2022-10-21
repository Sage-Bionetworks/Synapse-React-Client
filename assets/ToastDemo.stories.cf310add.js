import{R as e,a as C,j as t}from"./jsx-runtime.a232804d.js";import{d as b}from"./ToastMessage.b42768ca.js";import{R as x}from"./RadioGroup.cc16eeb1.js";import{c as a,b as n}from"./isArray.a5a56f48.js";import{B as y}from"./Button.6d51f091.js";import"./iframe.10584503.js";import"./FullWidthAlert.5abd6e7a.js";import"./Typography.9247f57a.js";import"./index.57d09176.js";import"./makeStyles.403aaa55.js";import"./withStyles.1db4abc8.js";import"./Tooltip.d38d9e30.js";import"./createSvgIcon.2aaf66cc.js";import"./SvgIcon.885aee5a.js";import"./utils.428c4b7a.js";import"./index.ba62157d.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.42db352a.js";import"./isSymbol.af0f15b0.js";const c=()=>{const[s,u]=e.useState("info"),[r,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,s,{title:r,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:s,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:r,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},H={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:c},k=s=>t(c,{}),J=k.bind({}),K=["Toast"];export{J as Toast,K as __namedExportsOrder,H as default};
