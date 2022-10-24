import{r,j as c}from"./jsx-runtime.66426239.js";import{dj as d,dk as m}from"./index.5eb45ec5.js";import{R as l}from"./RadioGroup.f8494210.js";import{i as S}from"./isEqual.c4465f8d.js";import"./iframe.7709cd8b.js";import"./index.06c514da.js";import"./Button.0925c41b.js";import"./index.57d09176.js";import"./withStyles.c0f84b5f.js";import"./utils.dd2a9ff9.js";import"./Alert.6f0c6d33.js";import"./index.35ce73ec.js";import"./isArray.563d20f4.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.bec2abf5.js";import"./uniqueId.2b0d7b31.js";import"./isSymbol.e6b0fab2.js";import"./_cacheHas.6245eac1.js";import"./_setToArray.a82100c8.js";import"./_getTag.89d7bb96.js";import"./_Set.1a050ac1.js";const p={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},a=()=>{const[t,n]=r.exports.useState("production");r.exports.useEffect(()=>{const o=Object.entries(p).find(e=>{const g=e[1];return S(g,d())});n(o?o[0]:"production")},[]);const s=r.exports.useCallback(o=>{const e=p[o];window.localStorage.setItem(m,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return r.exports.useEffect(()=>{s(t)},[s,t]),c(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>n(o)})},i=a;try{a.displayName="StackChanger",a.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:a.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}const N={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:i,argTypes:{}},C=t=>c(i,{...t}),K=C.bind({}),B=["StackChangerDemo"];export{K as StackChangerDemo,B as __namedExportsOrder,N as default};
