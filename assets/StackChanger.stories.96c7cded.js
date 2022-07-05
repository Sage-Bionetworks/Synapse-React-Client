import{bW as m,bX as d}from"./index.aa19b65e.js";import{R as l}from"./RadioGroup.ff23c1de.js";import{j as c}from"./jsx-runtime.2e925369.js";import{i as S}from"./isEqual.ed82a077.js";import"./Button.77571428.js";import"./objectWithoutPropertiesLoose.d29fb19f.js";import"./index.f252d424.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.1f1b3522.js";import"./toConsumableArray.5f669646.js";import"./withStyles.4f64abe1.js";import"./FormLabel.a635baa2.js";import"./index.06f4a415.js";import"./createWithBsPrefix.f7715523.js";import"./assert.f74211aa.js";import"./iframe.760d0cca.js";import"./index.8cde812d.js";import"./uniqueId.4eca3697.js";import"./isObject.7e2c8eb3.js";import"./isArray.949e1480.js";import"./isSymbol.a6e5b306.js";import"./_baseIsEqual.38511a1d.js";import"./_Uint8Array.692793fe.js";import"./_cacheHas.e524ea96.js";import"./_setToArray.78d992a5.js";import"./_getTag.260cb500.js";const C=window.React,s=window.React.useEffect,h=window.React.useState,i={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},r=()=>{const[t,a]=h("production");s(()=>{const o=Object.entries(i).find(e=>{const g=e[1];return S(g,m())});a(o?o[0]:"production")},[]);const n=C.useCallback(o=>{const e=i[o];window.localStorage.setItem(d,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return s(()=>{n(t)},[n,t]),c(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>a(o)})};var p=r;try{r.displayName="StackChanger",r.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:r.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}var J={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:p,argTypes:{}};const k=t=>c(p,{...t}),U=k.bind({}),V=["StackChangerDemo"];export{U as StackChangerDemo,V as __namedExportsOrder,J as default};
//# sourceMappingURL=StackChanger.stories.96c7cded.js.map
