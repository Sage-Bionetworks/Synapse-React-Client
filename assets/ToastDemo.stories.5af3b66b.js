import{R as e,a as C,j as t}from"./jsx-runtime.d04151d1.js";import{d as b}from"./ToastMessage.7ece14e4.js";import{R as x}from"./RadioGroup.7c98ddae.js";import{c as a,b as n}from"./isArray.88add67b.js";import{B as y}from"./Button.a12385d6.js";import"./iframe.d32e0f35.js";import"./FullWidthAlert.8d2b5601.js";import"./Alert.770d73de.js";import"./hook.ba873afd.js";import"./createWithBsPrefix.f5521544.js";import"./divWithClassName.2e38eee3.js";import"./index.8319c373.js";import"./index.35ce73ec.js";import"./Typography.73bd7049.js";import"./styled.1efff5b8.js";import"./Tooltip.4974d54a.js";import"./SvgIcon.d3ec47f0.js";import"./useTheme.175bd669.js";import"./TransitionGroupContext.1ef7d36b.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.55896be5.js";import"./isSymbol.4d2b99f3.js";const c=()=>{const[r,u]=e.useState("info"),[s,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},J={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:c},k=r=>t(c,{}),K=k.bind({}),Q=["Toast"];export{K as Toast,Q as __namedExportsOrder,J as default};
