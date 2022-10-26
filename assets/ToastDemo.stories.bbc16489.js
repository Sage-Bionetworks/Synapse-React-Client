import{R as e,a as C,j as t}from"./jsx-runtime.8900a285.js";import{d as b}from"./ToastMessage.2fd043cd.js";import{R as x}from"./RadioGroup.c28c0234.js";import{c as a,b as n}from"./isArray.4e3f2043.js";import{B as y}from"./Button.e50f7fc9.js";import"./iframe.c24069c1.js";import"./FullWidthAlert.aad3bca8.js";import"./Typography.f8e8965b.js";import"./index.57d09176.js";import"./makeStyles.f81fc0de.js";import"./withStyles.1744e3f1.js";import"./Tooltip.7bdb955a.js";import"./createSvgIcon.11696c8f.js";import"./SvgIcon.4e934e01.js";import"./utils.d7ed0c75.js";import"./index.912828a9.js";import"./Alert.3046b0d1.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.711b61c1.js";import"./isSymbol.74032678.js";const c=()=>{const[s,u]=e.useState("info"),[r,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,s,{title:r,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:s,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:r,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},H={parameters:{storySource:{source:`import React from 'react'
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
