import{c as e,b as n,k as C}from"./ToastMessage.72011e3e.js";import{R as b}from"./RadioGroup.7c46be31.js";import{a as x,j as t}from"./jsx-runtime.00d70968.js";import{B as y}from"./Button.fda23eee.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./FullWidthAlert.9ae706f1.js";import"./Typography.e0d7a65e.js";import"./makeStyles.733638f6.js";import"./withStyles.d50e1a5a.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.006e7cf4.js";import"./SvgIcon.53be2b5b.js";import"./slicedToArray.e72f11da.js";const a=window.React,p=()=>{const[s,u]=a.useState("info"),[r,d]=a.useState(""),[i,g]=a.useState(""),[l,T]=a.useState(0),[c,f]=a.useState(""),[m,v]=a.useState("");function h(){C(i,s,{title:r,autoCloseInMs:l,primaryButtonConfig:{text:c,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:m,href:"#"}})}return x("div",{className:"bootstrap-4-backport",children:[t(e,{children:"Alert Variant"}),t(b,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:s,onChange:o=>u(o)}),t(e,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(e,{children:"Title"}),t(n,{value:r,onChange:o=>d(o.target.value)}),t(e,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(e,{children:"Optional Button Text"}),t(n,{value:c,onChange:o=>f(o.target.value)}),t(e,{children:"Optional Link Text"}),t(n,{value:m,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},U={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:p},k=s=>t(p,{}),V=k.bind({}),E=["Toast"];export{V as Toast,E as __namedExportsOrder,U as default};
