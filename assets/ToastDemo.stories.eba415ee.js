import{R as e,a as C,j as t}from"./jsx-runtime.4ed473f6.js";import{d as b}from"./ToastMessage.576eb4d8.js";import{R as x}from"./RadioGroup.4063cb90.js";import{c as a,b as n}from"./isArray.1c017e06.js";import{B as y}from"./Button.c5f20cc4.js";import"./iframe.b5feb82b.js";import"./FullWidthAlert.2db361a7.js";import"./Typography.742205fe.js";import"./index.57d09176.js";import"./makeStyles.dc0e46d4.js";import"./withStyles.78cfa842.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./SvgIcon.d67caae4.js";import"./utils.75253d0f.js";import"./index.02b86482.js";import"./Alert.a88bb07f.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.021a8dc5.js";import"./isSymbol.24e18969.js";const c=()=>{const[s,u]=e.useState("info"),[r,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,s,{title:r,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:s,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:r,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},H={parameters:{storySource:{source:`import React from 'react'
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
