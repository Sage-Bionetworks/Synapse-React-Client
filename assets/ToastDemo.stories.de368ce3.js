import{R as e,a as C,j as t}from"./jsx-runtime.e50ee014.js";import{d as b}from"./ToastMessage.c7c8ad52.js";import{R as x}from"./RadioGroup.dcb4db4a.js";import{c as a,b as n}from"./isArray.bf4f000b.js";import{B as y}from"./Button.3658dda2.js";import"./iframe.ed5db637.js";import"./FullWidthAlert.dc80d875.js";import"./Typography.710a5cec.js";import"./index.57d09176.js";import"./makeStyles.436c1230.js";import"./withStyles.8f619333.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.87729932.js";import"./createSvgIcon.f8724b3b.js";import"./SvgIcon.c8899896.js";import"./slicedToArray.e72f11da.js";import"./index.f04aa5e6.js";import"./useTheme.f39e60b9.js";import"./Transition.bad86374.js";import"./Alert.9942996b.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.b8a4404e.js";import"./isSymbol.5d0c998d.js";const c=()=>{const[r,u]=e.useState("info"),[s,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},X={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:c},k=r=>t(c,{}),Y=k.bind({}),Z=["Toast"];export{Y as Toast,Z as __namedExportsOrder,X as default};
