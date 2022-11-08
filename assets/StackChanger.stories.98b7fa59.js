import{r,j as c}from"./jsx-runtime.e755df9d.js";import{cC as m}from"./index.f37f3b8f.js";import{S as d}from"./SynapseConstants.b6aa8bf5.js";import{R as l}from"./RadioGroup.774f5d0b.js";import{i as S}from"./isEqual.67a4cf08.js";import"./iframe.2151c0e3.js";import"./index.46e2a3d6.js";import"./Button.ce5d2622.js";import"./styled.134e90bd.js";import"./utils.61686747.js";import"./Alert.7ac348fd.js";import"./createWithBsPrefix.c5475a12.js";import"./index.35ce73ec.js";import"./isArray.32035835.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.26fd4209.js";import"./uniqueId.05b48118.js";import"./isSymbol.449c22fe.js";import"./_cacheHas.b6de7e15.js";import"./_setToArray.a82100c8.js";import"./_getTag.14203c81.js";import"./_Set.d710ebae.js";const p={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},a=()=>{const[t,n]=r.exports.useState("production");r.exports.useEffect(()=>{const o=Object.entries(p).find(e=>{const g=e[1];return S(g,m())});n(o?o[0]:"production")},[]);const s=r.exports.useCallback(o=>{const e=p[o];window.localStorage.setItem(d,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return r.exports.useEffect(()=>{s(t)},[s,t]),c(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>n(o)})},i=a;try{a.displayName="StackChanger",a.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:a.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}const K={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:i,argTypes:{}},C=t=>c(i,{...t}),B=C.bind({}),G=["StackChangerDemo"];export{B as StackChangerDemo,G as __namedExportsOrder,K as default};
