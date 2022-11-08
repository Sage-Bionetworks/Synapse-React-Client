import{R as e,a as C,j as t}from"./jsx-runtime.02fcd003.js";import{d as b}from"./ToastMessage.5f109185.js";import{R as x}from"./RadioGroup.f6595d68.js";import{c as a,b as n}from"./isArray.404de5ac.js";import{B as y}from"./Button.bd4bae0e.js";import"./iframe.25b1a9fc.js";import"./FullWidthAlert.b9addea3.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./index.0864d1cf.js";import"./index.35ce73ec.js";import"./Typography.79e944f5.js";import"./styled.094a3a2c.js";import"./Tooltip.977ea0b9.js";import"./createSvgIcon.37b7d2f8.js";import"./SvgIcon.66ad72a0.js";import"./utils.62f6c1ea.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.446adc13.js";import"./isSymbol.b2b689d7.js";const p=()=>{const[s,u]=e.useState("info"),[r,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[c,v]=e.useState("");function h(){b(i,s,{title:r,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:c,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:s,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:r,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:c,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},z={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:p},k=s=>t(p,{}),H=k.bind({}),J=["Toast"];export{H as Toast,J as __namedExportsOrder,z as default};
