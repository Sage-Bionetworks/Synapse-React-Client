import{s as r}from"./index.a37d8dd7.js";import{j as e}from"./jsx-runtime.05444945.js";import{B as a}from"./Button.0b1296fc.js";import"./index.849f5f8d.js";import"./iframe.ff4ba921.js";import"./withStyles.2a0b3149.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Alert.1016cb8e.js";import"./index.57d09176.js";import"./Transition.4ed8243e.js";import"./index.35ce73ec.js";import"./isArray.fbf85b3b.js";import"./getEndpoint.bb7ded34.js";import"./SvgIcon.44b5863d.js";function o(t){const{callback:n}=t;return e("div",{className:"bootstrap-4-backport",children:e(a,{variant:"default",onClick:()=>{r(n)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const h={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}},s=t=>e(o,{...t}),c=s.bind({});c.args={callback:()=>{global.accessToken=null}};const x=["Demo"];export{c as Demo,x as __namedExportsOrder,h as default};
