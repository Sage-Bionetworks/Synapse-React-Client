import{r,j as i}from"./jsx-runtime.02a28547.js";import{cG as m}from"./index.4fdef5f4.js";import{S as d}from"./SynapseConstants.b6aa8bf5.js";import{R as l}from"./RadioGroup.b47f6073.js";import{i as S}from"./isEqual.a8d1bf93.js";import"./iframe.0b294b31.js";import"./index.a309e2be.js";import"./Button.47e26dba.js";import"./styled.2f449268.js";import"./utils.34aadcdd.js";import"./TransitionGroupContext.70688128.js";import"./Alert.3df3eb36.js";import"./createWithBsPrefix.c66fa874.js";import"./index.35ce73ec.js";import"./isArray.46d1af5d.js";import"./getEndpoint.bb7ded34.js";import"./Link.4b81c1ee.js";import"./Typography.67a640f4.js";import"./Button.1972b2d6.js";import"./ButtonBase.9cc6b40c.js";import"./uniqueId.77032a6a.js";import"./isSymbol.f23d6818.js";import"./_cacheHas.2b87484d.js";import"./_setToArray.a82100c8.js";import"./_getTag.eceaa81f.js";import"./_Set.323c8e8c.js";const p={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},a=()=>{const[t,n]=r.exports.useState("production");r.exports.useEffect(()=>{const o=Object.entries(p).find(e=>{const g=e[1];return S(g,m())});n(o?o[0]:"production")},[]);const s=r.exports.useCallback(o=>{const e=p[o];window.localStorage.setItem(d,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return r.exports.useEffect(()=>{s(t)},[s,t]),i(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>n(o)})},c=a;try{a.displayName="StackChanger",a.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:a.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}const F={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:c,argTypes:{}},C=t=>i(c,{...t}),q=C.bind({}),J=["StackChangerDemo"];export{q as StackChangerDemo,J as __namedExportsOrder,F as default};
