import{cR as d,cS as m}from"./index.84210d7d.js";import{R as S}from"./RadioGroup.d19dd04f.js";import{j as i}from"./jsx-runtime.00d70968.js";import{i as l}from"./isEqual.e4f3fe37.js";import"./withStyles.5fe35516.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.b74d1cfd.js";import"./index.57d09176.js";import"./Button.fda23eee.js";import"./Transition.8278edb2.js";import"./index.35ce73ec.js";import"./toString.d84aaeca.js";import"./assert.9b56e417.js";import"./iframe.c18f9f1c.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.e37b9412.js";import"./uniqueId.eba72690.js";import"./_baseIsEqual.a778e630.js";import"./_cacheHas.f8ac99cc.js";import"./_setToArray.a82100c8.js";const C=window.React,s=window.React.useEffect,h=window.React.useState,c={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},n=()=>{const[t,r]=h("production");s(()=>{const o=Object.entries(c).find(e=>{const g=e[1];return l(g,d())});r(o?o[0]:"production")},[]);const a=C.useCallback(o=>{const e=c[o];window.localStorage.setItem(m,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return s(()=>{a(t)},[a,t]),i(S,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>r(o)})},p=n;try{n.displayName="StackChanger",n.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:n.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}const B={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:p,argTypes:{}},k=t=>i(p,{...t}),G=k.bind({}),Y=["StackChangerDemo"];export{G as StackChangerDemo,Y as __namedExportsOrder,B as default};
