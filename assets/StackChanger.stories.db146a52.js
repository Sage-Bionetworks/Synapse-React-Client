import{cO as m,cP as d}from"./index.b510e4be.js";import{R as l}from"./RadioGroup.3f583c0c.js";import{j as c}from"./jsx-runtime.2e925369.js";import{i as S}from"./isEqual.a6c8da31.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.461112f3.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./FullWidthAlert.4dd40e61.js";import"./Typography.5a45efab.js";import"./index.f252d424.js";import"./makeStyles.38be5a7f.js";import"./Tooltip.3e761ad5.js";import"./SvgIcon.6d10a3ac.js";import"./slicedToArray.e9a7fa03.js";import"./Button.c582ea4c.js";import"./index.06f4a415.js";import"./ToastMessage.093903bc.js";import"./assert.50ccfc45.js";import"./iframe.2d80f44f.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./_baseIsEqual.9ca65ee0.js";import"./_cacheHas.e2d6df43.js";import"./_setToArray.a82100c8.js";const C=window.React,s=window.React.useEffect,h=window.React.useState,i={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},r=()=>{const[t,a]=h("production");s(()=>{const o=Object.entries(i).find(e=>{const g=e[1];return S(g,m())});a(o?o[0]:"production")},[]);const n=C.useCallback(o=>{const e=i[o];window.localStorage.setItem(d,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return s(()=>{n(t)},[n,t]),c(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>a(o)})};var p=r;try{r.displayName="StackChanger",r.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:r.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}var J={parameters:{storySource:{source:`import React from 'react'
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
//# sourceMappingURL=StackChanger.stories.db146a52.js.map
