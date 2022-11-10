import{s as r}from"./index.3bd83fcc.js";import{j as e}from"./jsx-runtime.2ff8811e.js";import{B as a}from"./Button.774b93d6.js";import"./index.95124b04.js";import"./iframe.f6116fbf.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.9a92447e.js";import"./utils.2126a84f.js";import"./TransitionGroupContext.ecfa02dc.js";import"./Alert.d722c515.js";import"./createWithBsPrefix.8ba5f7eb.js";import"./index.35ce73ec.js";import"./isArray.c66fbb5a.js";import"./getEndpoint.bb7ded34.js";import"./Link.1ad1c99a.js";import"./Typography.58720d37.js";import"./Button.52cb13cc.js";import"./ButtonBase.4576d1dd.js";function o(t){const{callback:n}=t;return e("div",{className:"bootstrap-4-backport",children:e(a,{variant:"default",onClick:()=>{r(n)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const O={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Logout from './Logout'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Authentication/Logout',
  component: Logout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Logout>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logout> = args => <Logout {...args} />

export const Demo = Template.bind({})

Demo.args = {
  callback: () => {
    global.accessToken = null
  },
}
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}},s=t=>e(o,{...t}),i=s.bind({});i.args={callback:()=>{global.accessToken=null}};const A=["Demo"];export{i as Demo,A as __namedExportsOrder,O as default};
