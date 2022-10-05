import{r,j as i}from"./jsx-runtime.e50ee014.js";import{d5 as m,d6 as d}from"./index.b742691b.js";import{R as l}from"./RadioGroup.dcb4db4a.js";import{i as S}from"./isEqual.eb83054b.js";import"./iframe.ed5db637.js";import"./index.f04aa5e6.js";import"./withStyles.8f619333.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.9942996b.js";import"./index.57d09176.js";import"./Button.3658dda2.js";import"./Transition.bad86374.js";import"./index.35ce73ec.js";import"./isArray.bf4f000b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.c8899896.js";import"./uniqueId.b8a4404e.js";import"./isSymbol.5d0c998d.js";import"./_cacheHas.82e3ba6e.js";import"./_setToArray.a82100c8.js";import"./_getTag.291304b4.js";import"./_Set.d949c813.js";const p={production:{REPO:"https://repo-prod.prod.sagebase.org",PORTAL:"https://www.synapse.org/"},staging:{REPO:"https://repo-staging.prod.sagebase.org",PORTAL:"https://staging.synapse.org/"},development:{REPO:"https://repo-dev.dev.sagebase.org",PORTAL:"https://portal-dev.dev.sagebase.org/"}},a=()=>{const[t,n]=r.exports.useState("production");r.exports.useEffect(()=>{const o=Object.entries(p).find(e=>{const g=e[1];return S(g,m())});n(o?o[0]:"production")},[]);const s=r.exports.useCallback(o=>{const e=p[o];window.localStorage.setItem(d,JSON.stringify(e)),window.SRC={OVERRIDE_ENDPOINT_CONFIG:e}},[]);return r.exports.useEffect(()=>{s(t)},[s,t]),i(l,{id:"stack-changer-radio-group",value:t,options:[{label:"Production (synapse.org)",value:"production"},{label:"Staging (staging.synapse.org)",value:"staging"},{label:"Development (portal-dev.dev.sagebase.org)",value:"development"}],onChange:o=>n(o)})},c=a;try{a.displayName="StackChanger",a.__docgenInfo={description:"",displayName:"StackChanger",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/StackChanger.tsx#StackChanger"]={docgenInfo:a.__docgenInfo,name:"StackChanger",path:"src/lib/containers/StackChanger.tsx#StackChanger"})}catch{}const B={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"stack-changer-demo":{startLoc:{col:54,line:14},endLoc:{col:1,line:16},startBody:{col:54,line:14},endBody:{col:1,line:16}}}}},title:"Authentication/StackChanger",component:c,argTypes:{}},C=t=>i(c,{...t}),G=C.bind({}),Y=["StackChangerDemo"];export{G as StackChangerDemo,Y as __namedExportsOrder,B as default};
