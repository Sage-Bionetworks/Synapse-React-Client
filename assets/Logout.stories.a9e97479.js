import{s as r}from"./index.444e3572.js";import{j as e}from"./jsx-runtime.ed0bc2e8.js";import{B as a}from"./Button.ead7d59a.js";import"./index.68bd2905.js";import"./iframe.1c77586e.js";import"./withStyles.5eea39d5.js";import"./utils.31a80d71.js";import"./Alert.e70a23c6.js";import"./index.57d09176.js";import"./index.35ce73ec.js";import"./isArray.69d02dee.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.1c3fe3f1.js";function o(t){const{callback:n}=t;return e("div",{className:"bootstrap-4-backport",children:e(a,{variant:"default",onClick:()=>{r(n)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const T={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}},s=t=>e(o,{...t}),c=s.bind({});c.args={callback:()=>{global.accessToken=null}};const S=["Demo"];export{c as Demo,S as __namedExportsOrder,T as default};
