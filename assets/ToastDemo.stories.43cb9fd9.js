import{R as e,a as C,j as t}from"./jsx-runtime.f8072c65.js";import{d as b}from"./ToastMessage.37d9d7b6.js";import{R as x}from"./RadioGroup.d95fc9b1.js";import{c as a,b as n}from"./isArray.903292fc.js";import{B as y}from"./Button.cb7914f2.js";import"./iframe.aa82293a.js";import"./FullWidthAlert.5a306575.js";import"./Typography.3dd8fe93.js";import"./index.57d09176.js";import"./makeStyles.9cff04c5.js";import"./withStyles.630b025d.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.5e7211d1.js";import"./createSvgIcon.52201bd3.js";import"./SvgIcon.761f4d42.js";import"./slicedToArray.e72f11da.js";import"./index.1d2a784c.js";import"./useTheme.bc44ba71.js";import"./Transition.5983a677.js";import"./Alert.53bb8599.js";import"./index.35ce73ec.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.6d4b83b5.js";import"./isSymbol.28b01415.js";const c=()=>{const[r,u]=e.useState("info"),[s,d]=e.useState(""),[i,g]=e.useState(""),[l,T]=e.useState(0),[m,f]=e.useState(""),[p,v]=e.useState("");function h(){b(i,r,{title:s,autoCloseInMs:l,primaryButtonConfig:{text:m,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return C("div",{className:"bootstrap-4-backport",children:[t(a,{children:"Alert Variant"}),t(x,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:r,onChange:o=>u(o)}),t(a,{children:"Message"}),t(n,{value:i,onChange:o=>g(o.target.value)}),t(a,{children:"Title"}),t(n,{value:s,onChange:o=>d(o.target.value)}),t(a,{children:"Auto-close (ms)"}),t(n,{type:"number",value:l,onChange:o=>T(Number.parseInt(o.target.value))}),t(a,{children:"Optional Button Text"}),t(n,{value:m,onChange:o=>f(o.target.value)}),t(a,{children:"Optional Link Text"}),t(n,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})},X={parameters:{storySource:{source:`import React from 'react'
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
