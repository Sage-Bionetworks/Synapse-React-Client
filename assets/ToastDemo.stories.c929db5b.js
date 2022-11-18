import{R as e,a as C,j as t}from"./jsx-runtime.e45f5946.js";import{d as b}from"./ToastMessage.dffa6777.js";import{R as x}from"./RadioGroup.83968d9b.js";import{c as a,b as n}from"./isArray.8bc8137e.js";import{B as y}from"./Button.85a360c3.js";import"./iframe.db0e90de.js";import"./FullWidthAlert.1145dd98.js";import"./Alert.93c2217c.js";import"./hook.5e6c5d16.js";import"./createWithBsPrefix.a2136416.js";import"./divWithClassName.ba47b910.js";import"./index.2f057391.js";import"./index.35ce73ec.js";import"./Typography.33698c6c.js";import"./styled.11fa6590.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./TransitionGroupContext.0404639f.js";import"./useTheme.c90b1c5e.js";import"./utils.e1966123.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.c6c12783.js";import"./isSymbol.564875b4.js";const c=()=>{const[r,u]=e.useState("info"),[s,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},K={parameters:{storySource:{source:`import React from 'react'
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
