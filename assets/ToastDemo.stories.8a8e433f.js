import{d as C}from"./ToastMessage.574c0fe0.js";import{R as b}from"./RadioGroup.ff23c1de.js";import{a as x,j as t}from"./jsx-runtime.2e925369.js";import{c as e,b as r}from"./FormLabel.a635baa2.js";import{B as y}from"./Button.77571428.js";import"./FullWidthAlert.a054f15b.js";import"./Typography.e08e7569.js";import"./index.f252d424.js";import"./makeStyles.5f6bad01.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./withStyles.4f64abe1.js";import"./toConsumableArray.5f669646.js";import"./index.es.82d55a6a.js";import"./index.06f4a415.js";import"./debounce.6a99f8f3.js";import"./isObject.7e2c8eb3.js";import"./toNumber.81238efb.js";import"./isSymbol.a6e5b306.js";import"./Alert.ad748791.js";import"./Fade.7bfbed49.js";import"./Transition.f54f11c8.js";import"./createWithBsPrefix.f7715523.js";import"./Clear.53a62cf5.js";import"./createSvgIcon.53013205.js";import"./SvgIcon.1f1b3522.js";import"./removeClass.27874bcb.js";import"./hasClass.56fd144a.js";import"./uniqueId.4eca3697.js";import"./isArray.949e1480.js";const a=window.React,c=()=>{const[n,u]=a.useState("info"),[s,d]=a.useState(""),[i,g]=a.useState(""),[m,T]=a.useState(0),[l,f]=a.useState(""),[p,v]=a.useState("");function h(){C(i,n,{title:s,autoCloseInMs:m,primaryButtonConfig:{text:l,onClick:()=>{console.log("Primary button clicked!")}},secondaryButtonConfig:{text:p,href:"#"}})}return x("div",{className:"bootstrap-4-backport",children:[t(e,{children:"Alert Variant"}),t(b,{id:"toast-demo-variant",options:[{label:"Info",value:"info"},{label:"Success",value:"success"},{label:"Warning",value:"warning"},{label:"Danger",value:"danger"}],value:n,onChange:o=>u(o)}),t(e,{children:"Message"}),t(r,{value:i,onChange:o=>g(o.target.value)}),t(e,{children:"Title"}),t(r,{value:s,onChange:o=>d(o.target.value)}),t(e,{children:"Auto-close (ms)"}),t(r,{type:"number",value:m,onChange:o=>T(Number.parseInt(o.target.value))}),t(e,{children:"Optional Button Text"}),t(r,{value:l,onChange:o=>f(o.target.value)}),t(e,{children:"Optional Link Text"}),t(r,{value:p,onChange:o=>v(o.target.value)}),t(y,{variant:"primary-500",onClick:h,children:"Push toast message"})]})};var $={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{toast:{startLoc:{col:51,line:13},endLoc:{col:72,line:13},startBody:{col:51,line:13},endBody:{col:72,line:13}}}}},title:"UI/ToastMessage",component:c};const k=n=>t(c,{}),tt=k.bind({}),ot=["Toast"];export{tt as Toast,ot as __namedExportsOrder,$ as default};
//# sourceMappingURL=ToastDemo.stories.8a8e433f.js.map
