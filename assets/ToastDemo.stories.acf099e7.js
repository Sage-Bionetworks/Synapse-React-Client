import{R as e,a as C,j as t}from"./jsx-runtime.9272ed69.js";import{d as b}from"./ToastMessage.c90a289b.js";import{R as x}from"./RadioGroup.3f6db470.js";import{c as a,b as n}from"./isArray.f757e7ba.js";import{B as y}from"./Button.db898533.js";import"./iframe.e4b610a3.js";import"./FullWidthAlert.5512750c.js";import"./Alert.2534b0a8.js";import"./hook.0361e512.js";import"./createWithBsPrefix.9ea76fe5.js";import"./divWithClassName.c5203597.js";import"./index.dc51ea0b.js";import"./index.35ce73ec.js";import"./Typography.1f221702.js";import"./styled.0de421fa.js";import"./Tooltip.d2aa8c40.js";import"./createSvgIcon.1c5ae5be.js";import"./TransitionGroupContext.54f3d5ea.js";import"./useTheme.75529918.js";import"./utils.6e1717b5.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.f24c8a17.js";import"./isSymbol.04dc93d5.js";const c=()=>{const[r,u]=e.useState("info"),[s,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},K={parameters:{storySource:{source:`import React from 'react'
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
