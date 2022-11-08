import{r,j as c}from"./jsx-runtime.02fcd003.js";import{cC as m}from"./index.91a9706e.js";import{S as d}from"./SynapseConstants.b6aa8bf5.js";import{R as l}from"./RadioGroup.f6595d68.js";import{i as S}from"./isEqual.cb9e6104.js";import"./iframe.25b1a9fc.js";import"./index.0864d1cf.js";import"./Button.bd4bae0e.js";import"./styled.094a3a2c.js";import"./utils.62f6c1ea.js";import"./Alert.92a838df.js";import"./createWithBsPrefix.9fcf4917.js";import"./index.35ce73ec.js";import"./isArray.404de5ac.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.66ad72a0.js";import"./uniqueId.446adc13.js";import"./isSymbol.b2b689d7.js";import"./_cacheHas.2a8fdb0c.js";import"./_setToArray.a82100c8.js";import"./_getTag.58b2ff67.js";import"./_Set.46f8fc5c.js";const p={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},a=()=>{const[t,n]=r.exports.useState("production");r.exports.useEffect(()=>{const o=Object.entries(p).find(e=>{const g=e[1];return S(g,m())});n(o?o[0]:"production")},[]);const s=r.exports.useCallback(o=>{const e=p[o];window.localStorage.setItem(d,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return r.exports.useEffect(()=>{s(t)},[s,t]),c(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>n(o)})},i=a;try{a.displayName="StackChanger",a.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:a.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}const K={parameters:{storySource:{source:`import React from 'react'
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
