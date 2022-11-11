import{s as r}from"./index.3d089af5.js";import{j as e}from"./jsx-runtime.2b71273f.js";import{B as a}from"./Button.9a34c287.js";import"./index.7aa8b9f8.js";import"./iframe.2ab16825.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.ffa42780.js";import"./utils.4bc122e2.js";import"./TransitionGroupContext.ec9d4526.js";import"./Alert.dab3d922.js";import"./createWithBsPrefix.64e0cb3b.js";import"./index.35ce73ec.js";import"./isArray.f3e4211e.js";import"./getEndpoint.bb7ded34.js";import"./Link.fcffcbaa.js";import"./Typography.e75e6cdf.js";import"./Button.f0ab2e0d.js";import"./ButtonBase.1d993e3f.js";function o(t){const{callback:n}=t;return e("div",{className:"bootstrap-4-backport",children:e(a,{variant:"default",onClick:()=>{r(n)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const O={parameters:{storySource:{source:`import React from 'react'
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
