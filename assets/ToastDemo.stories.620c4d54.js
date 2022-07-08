import{d as C}from"./ToastMessage.87e58df2.js";import{R as b}from"./RadioGroup.25f015da.js";import{a as x,j as t}from"./jsx-runtime.2e925369.js";import{c as e,b as n}from"./toString.41faaa42.js";import{B as y}from"./Button.c582ea4c.js";import"./FullWidthAlert.96be848e.js";import"./Typography.7bd5dd17.js";import"./index.f252d424.js";import"./makeStyles.9976e655.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./debounce.b9f00509.js";import"./isObject.97b5908e.js";import"./Transition.c5966bcb.js";import"./toNumber.bfb36d17.js";import"./Clear.eb427cfa.js";import"./createSvgIcon.88863916.js";import"./SvgIcon.f6f6da7c.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.ce7b286a.js";const a=window.React,c=()=>{const[r,u]=a.useState("info"),[s,d]=a.useState(""),[i,g]=a.useState(""),[l,T]=a.useState(0),[m,f]=a.useState(""),[p,v]=a.useState("");function h(){C(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return x("div",{className:"bootstrap-4-backport",children:[t(e,{children:"Alert Variant"}),t(b,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(e,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(e,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(e,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(e,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(e,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})};var K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:c};const k=r=>t(c,{}),Q=k.bind({}),X=["Toast"];export{Q as Toast,X as __namedExportsOrder,K as default};
//# sourceMappingURL=ToastDemo.stories.620c4d54.js.map
