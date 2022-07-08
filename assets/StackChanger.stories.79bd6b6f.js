import{cE as d,cF as m}from"./index.e94f1e56.js";import{R as l}from"./RadioGroup.25f015da.js";import{j as i}from"./jsx-runtime.2e925369.js";import{i as S}from"./isEqual.2f0d3c53.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.ab2e1d33.js";import"./toConsumableArray.b3669986.js";import"./isObject.97b5908e.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.c5966bcb.js";import"./index.06f4a415.js";import"./toString.41faaa42.js";import"./assert.f88a2d20.js";import"./iframe.a56f5c43.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.f6f6da7c.js";import"./uniqueId.ce7b286a.js";import"./_baseIsEqual.e9d7153b.js";import"./_cacheHas.c716d685.js";import"./_setToArray.a82100c8.js";const C=window.React,s=window.React.useEffect,h=window.React.useState,c={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},r=()=>{const[t,a]=h("production");s(()=>{const o=Object.entries(c).find(e=>{const g=e[1];return S(g,d())});a(o?o[0]:"production")},[]);const n=C.useCallback(o=>{const e=c[o];window.localStorage.setItem(m,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return s(()=>{n(t)},[n,t]),i(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>a(o)})};var p=r;try{r.displayName="StackChanger",r.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:r.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}var G={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StackChanger from './StackChanger'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Authentication/StackChanger',
  component: StackChanger,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof StackChanger>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StackChanger> = args => (
  <StackChanger {...args} />
)

export const StackChangerDemo = Template.bind({})
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:p,argTypes:{}};const k=t=>i(p,{...t}),Y=k.bind({}),F=["StackChangerDemo"];export{Y as StackChangerDemo,F as __namedExportsOrder,G as default};
//# sourceMappingURL=StackChanger.stories.79bd6b6f.js.map
