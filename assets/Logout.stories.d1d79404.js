import{s as r}from"./index.f68a6cae.js";import{j as e}from"./jsx-runtime.1f7e2749.js";import{B as a}from"./Button.2ee39cf1.js";import"./index.59f4cc8a.js";import"./iframe.6a6b78dc.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.228dca89.js";import"./utils.03e93c91.js";import"./TransitionGroupContext.1be95f81.js";import"./Alert.6d227703.js";import"./createWithBsPrefix.ef9ee852.js";import"./index.35ce73ec.js";import"./isArray.4b374ec1.js";import"./getEndpoint.bb7ded34.js";import"./Link.78173b1f.js";import"./Typography.07e15eab.js";import"./Button.a8e6e6bc.js";import"./ButtonBase.1b6ed208.js";function o(t){const{callback:n}=t;return e("div",{className:"bootstrap-4-backport",children:e(a,{variant:"default",onClick:()=>{r(n)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const O={parameters:{storySource:{source:`import React from 'react'
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
