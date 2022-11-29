import{r as i,a as p,j as n,R as y}from"./jsx-runtime.31268528.js";import{B as d}from"./Button.3eb9449f.js";import"./iframe.c7567c2d.js";const a=t=>{const{barColor:e,barPercent:r,backBtnLabel:u,forwardBtnLabel:b,forwardBtnActive:o,backBtnCallback:s,forwardBtnCallback:c}=t,[m,f]=i.exports.useState(0);let l=!0;i.exports.useEffect(()=>(l&&f(r),()=>{l=!1}),[r]);const P=k=>{s&&s()},B=k=>{c&&o&&c()};return p("section",{className:"page-progress",children:[n("div",{className:"page-progress-percent",style:{width:m+"%",backgroundColor:e}}),p("div",{className:"page-progress-action",children:[n(d,{className:"btn-progress-back",onClick:P,children:u}),n(d,{className:o?"btn-progress-next-active":"btn-progress-next",onClick:B,children:b})]})]})},g=a;try{a.displayName="PageProgress",a.__docgenInfo={description:"",displayName:"PageProgress",props:{barColor:{defaultValue:null,description:"",name:"barColor",required:!0,type:{name:"string"}},barPercent:{defaultValue:null,description:"",name:"barPercent",required:!0,type:{name:"number"}},backBtnLabel:{defaultValue:null,description:"",name:"backBtnLabel",required:!0,type:{name:"string"}},backBtnCallback:{defaultValue:null,description:"",name:"backBtnCallback",required:!1,type:{name:"Function"}},forwardBtnLabel:{defaultValue:null,description:"",name:"forwardBtnLabel",required:!0,type:{name:"string"}},forwardBtnCallback:{defaultValue:null,description:"",name:"forwardBtnCallback",required:!1,type:{name:"Function"}},forwardBtnActive:{defaultValue:null,description:"",name:"forwardBtnActive",required:!0,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/PageProgress.tsx#PageProgress"]={docgenInfo:a.__docgenInfo,name:"PageProgress",path:"src/lib/containers/PageProgress.tsx#PageProgress"})}catch{}const S={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:54,line:15},endLoc:{col:1,line:30},startBody:{col:54,line:15},endBody:{col:1,line:30}}}}},title:"UI/PageProgress",component:g,argTypes:{}},C=t=>{const[e,r]=y.useState(0);return n(g,{barPercent:e,backBtnCallback:()=>{r(e-25)},forwardBtnCallback:()=>{r(e+25)},forwardBtnActive:e<100,...t})},_=C.bind({});_.args={barColor:"green",backBtnLabel:"Back",forwardBtnLabel:"Next"};const h=["Demo"];export{_ as Demo,h as __namedExportsOrder,S as default};
