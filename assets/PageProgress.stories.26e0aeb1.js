import{a as i,j as n}from"./jsx-runtime.2e925369.js";import{B as d}from"./Button.c582ea4c.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./index.f252d424.js";const k=window.React.useEffect,y=window.React.useState,a=t=>{const{barColor:e,barPercent:r,backBtnLabel:g,forwardBtnLabel:u,forwardBtnActive:o,backBtnCallback:s,forwardBtnCallback:c}=t,[b,m]=y(0);let l=!0;k(()=>(l&&m(r),()=>{l=!1}),[r]);const f=B=>{s&&s()},P=B=>{c&&o&&c()};return i("section",{className:"page-progress",children:[n("div",{className:"page-progress-percent",style:{width:b+"%",backgroundColor:e}}),i("div",{className:"page-progress-action",children:[n(d,{className:"btn-progress-back",onClick:f,children:g}),n(d,{className:o?"btn-progress-next-active":"btn-progress-next",onClick:P,children:u})]})]})};var p=a;try{a.displayName="PageProgress",a.__docgenInfo={description:"",displayName:"PageProgress",props:{barColor:{defaultValue:null,description:"",name:"barColor",required:!0,type:{name:"string"}},barPercent:{defaultValue:null,description:"",name:"barPercent",required:!0,type:{name:"number"}},backBtnLabel:{defaultValue:null,description:"",name:"backBtnLabel",required:!0,type:{name:"string"}},backBtnCallback:{defaultValue:null,description:"",name:"backBtnCallback",required:!1,type:{name:"Function"}},forwardBtnLabel:{defaultValue:null,description:"",name:"forwardBtnLabel",required:!0,type:{name:"string"}},forwardBtnCallback:{defaultValue:null,description:"",name:"forwardBtnCallback",required:!1,type:{name:"Function"}},forwardBtnActive:{defaultValue:null,description:"",name:"forwardBtnActive",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/PageProgress.tsx#PageProgress"]={docgenInfo:a.__docgenInfo,name:"PageProgress",path:"src/lib/containers/PageProgress.tsx#PageProgress"})}catch{}const C=window.React;var v={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PageProgress from './PageProgress'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/PageProgress',
  component: PageProgress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PageProgress>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PageProgress> = args => {
  const [percent, setPercent] = React.useState(0)
  return (
    <PageProgress
      barPercent={percent}
      backBtnCallback={() => {
        setPercent(percent - 25)
      }}
      forwardBtnCallback={() => {
        setPercent(percent + 25)
      }}
      forwardBtnActive={percent < 100}
      {...args}
    />
  )
}

export const Demo = Template.bind({})
Demo.args = {
  barColor: 'green',
  backBtnLabel: 'Back',
  forwardBtnLabel: 'Next',
}
`,locationsMap:{demo:{startLoc:{col:54,line:15},endLoc:{col:1,line:30},startBody:{col:54,line:15},endBody:{col:1,line:30}}}}},title:"UI/PageProgress",component:p,argTypes:{}};const w=t=>{const[e,r]=C.useState(0);return n(p,{barPercent:e,backBtnCallback:()=>{r(e-25)},forwardBtnCallback:()=>{r(e+25)},forwardBtnActive:e<100,...t})},_=w.bind({});_.args={barColor:"green",backBtnLabel:"Back",forwardBtnLabel:"Next"};const N=["Demo"];export{_ as Demo,N as __namedExportsOrder,v as default};
//# sourceMappingURL=PageProgress.stories.26e0aeb1.js.map
