import{s as r}from"./index.a967ac4c.js";import{j as e}from"./jsx-runtime.d95d6493.js";import{B as a}from"./Button.a2dbd16c.js";import"./index.7a9149c6.js";import"./iframe.7f51ef58.js";import"./SynapseConstants.b6aa8bf5.js";import"./styled.3f404f86.js";import"./utils.39b72e5d.js";import"./Alert.ac443a97.js";import"./createWithBsPrefix.4fb80af1.js";import"./index.35ce73ec.js";import"./isArray.6553b885.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.67322144.js";function o(t){const{callback:n}=t;return e("div",{className:"bootstrap-4-backport",children:e(a,{variant:"default",onClick:()=>{r(n)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const S={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}},s=t=>e(o,{...t}),c=s.bind({});c.args={callback:()=>{global.accessToken=null}};const h=["Demo"];export{c as Demo,h as __namedExportsOrder,S as default};
