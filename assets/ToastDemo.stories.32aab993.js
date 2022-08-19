import{d as C}from"./ToastMessage.6439b7b0.js";import{R as b}from"./RadioGroup.16868f96.js";import{a as x,j as t}from"./jsx-runtime.2e925369.js";import{c as e,b as n}from"./toString.8ef640ae.js";import{B as y}from"./Button.c582ea4c.js";import"./FullWidthAlert.279e31cc.js";import"./Typography.3a9e45b6.js";import"./index.f252d424.js";import"./makeStyles.72aedf90.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.8a506c05.js";import"./createSvgIcon.0bfcb8f8.js";import"./SvgIcon.2998c199.js";import"./slicedToArray.e9a7fa03.js";import"./useTheme.05af6e65.js";import"./Transition.8d049b2f.js";import"./Alert.5f67d407.js";import"./index.06f4a415.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.fa0dadf5.js";const a=window.React,c=()=>{const[r,u]=a.useState("info"),[s,d]=a.useState(""),[i,g]=a.useState(""),[l,T]=a.useState(0),[m,f]=a.useState(""),[p,v]=a.useState("");function h(){C(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return x("div",{className:"bootstrap-4-backport",children:[t(e,{children:"Alert Variant"}),t(b,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(e,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(e,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(e,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(e,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(e,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})};var Q={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:c};const k=r=>t(c,{}),X=k.bind({}),Y=["Toast"];export{X as Toast,Y as __namedExportsOrder,Q as default};
//# sourceMappingURL=ToastDemo.stories.32aab993.js.map
