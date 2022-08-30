import{cu as n}from"./index.272215ce.js";import{j as e}from"./jsx-runtime.2e925369.js";import{B as a}from"./Button.c582ea4c.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./withStyles.670aaa99.js";import"./objectWithoutProperties.07f8cd75.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Alert.5f67d407.js";import"./index.f252d424.js";import"./Transition.8d049b2f.js";import"./index.06f4a415.js";import"./toString.8ef640ae.js";import"./assert.caef3bfc.js";import"./iframe.6ce0a742.js";import"./index.8cde812d.js";import"./getEndpoint.0de7fccf.js";import"./SvgIcon.2998c199.js";function o(t){const{callback:r}=t;return e("div",{className:"bootstrap-4-backport",children:e(a,{variant:"default",onClick:()=>{n(r)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}var O={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}};const i=t=>e(o,{...t}),s=i.bind({});s.args={callback:()=>{global.accessToken=null}};const A=["Demo"];export{s as Demo,A as __namedExportsOrder,O as default};
//# sourceMappingURL=Logout.stories.c257394c.js.map
