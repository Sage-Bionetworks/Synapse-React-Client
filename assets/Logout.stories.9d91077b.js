import{t as n}from"./index.34864443.js";import{j as r}from"./jsx-runtime.e72699d7.js";import{B as a}from"./Button.69f4aad2.js";import"./index.71f9d2b1.js";import"./iframe.e515b461.js";import"./SynapseConstants.290eab74.js";import"./styled.113fc281.js";import"./Tooltip.626a672e.js";import"./TransitionGroupContext.2e90d9c8.js";import"./useTheme.3c585c97.js";import"./Alert.d9dcb62e.js";import"./hook.dcb03d67.js";import"./createWithBsPrefix.93be1871.js";import"./divWithClassName.15ce1beb.js";import"./index.35ce73ec.js";import"./Fade.2e614c5f.js";import"./isArray.768225e0.js";import"./getEndpoint.bb7ded34.js";import"./IconSvg.91cc0bda.js";import"./IconButton.53297fa9.js";import"./ButtonBase.1e74724a.js";import"./emotion-react.browser.esm.6478344e.js";import"./Link.2241f35d.js";import"./Typography.4509eb0e.js";import"./Button.5bebd4e9.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(a,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const D={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}},i=t=>r(o,{...t}),p=i.bind({});p.args={callback:()=>{global.accessToken=null}};const v=["Demo"];export{p as Demo,v as __namedExportsOrder,D as default};
