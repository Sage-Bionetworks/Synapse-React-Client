import{cF as d,cG as m}from"./index.29a7f152.js";import{R as l}from"./RadioGroup.16868f96.js";import{j as i}from"./jsx-runtime.2e925369.js";import{i as S}from"./isEqual.2eaa3d88.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.8be28b48.js";import"./toConsumableArray.b3669986.js";import"./Alert.eafe86e9.js";import"./index.f252d424.js";import"./Button.c582ea4c.js";import"./Transition.d42a873e.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.f243583f.js";import"./iframe.e1b191de.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.31249d58.js";import"./uniqueId.fa0dadf5.js";import"./_baseIsEqual.67c9efc6.js";import"./_cacheHas.c2cfd759.js";import"./_setToArray.a82100c8.js";const C=window.React,s=window.React.useEffect,h=window.React.useState,c={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},r=()=>{const[t,a]=h("production");s(()=>{const o=Object.entries(c).find(e=>{const g=e[1];return S(g,d())});a(o?o[0]:"production")},[]);const n=C.useCallback(o=>{const e=c[o];window.localStorage.setItem(m,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return s(()=>{n(t)},[n,t]),i(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>a(o)})};var p=r;try{r.displayName="StackChanger",r.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:r.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}var B={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:p,argTypes:{}};const k=t=>i(p,{...t}),Y=k.bind({}),F=["StackChangerDemo"];export{Y as StackChangerDemo,F as __namedExportsOrder,B as default};
//# sourceMappingURL=StackChanger.stories.0cb0b444.js.map
