import{r,j as c}from"./jsx-runtime.a232804d.js";import{dj as d,dk as m}from"./index.df4d7189.js";import{R as l}from"./RadioGroup.cc16eeb1.js";import{i as S}from"./isEqual.18f214cb.js";import"./iframe.10584503.js";import"./index.ba62157d.js";import"./Button.6d51f091.js";import"./index.57d09176.js";import"./withStyles.1db4abc8.js";import"./utils.428c4b7a.js";import"./Alert.05377b39.js";import"./index.35ce73ec.js";import"./isArray.a5a56f48.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.885aee5a.js";import"./uniqueId.42db352a.js";import"./isSymbol.af0f15b0.js";import"./_cacheHas.2f6e173d.js";import"./_setToArray.a82100c8.js";import"./_getTag.c51a4401.js";import"./_Set.13d8dc83.js";const p={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},a=()=>{const[t,n]=r.exports.useState("production");r.exports.useEffect(()=>{const o=Object.entries(p).find(e=>{const g=e[1];return S(g,d())});n(o?o[0]:"production")},[]);const s=r.exports.useCallback(o=>{const e=p[o];window.localStorage.setItem(m,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return r.exports.useEffect(()=>{s(t)},[s,t]),c(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>n(o)})},i=a;try{a.displayName="StackChanger",a.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:a.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}const N={parameters:{storySource:{source:`import React from 'react'
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
