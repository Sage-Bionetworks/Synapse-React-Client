import{s as n}from"./index.ffb97e36.js";import{j as r}from"./jsx-runtime.32974a61.js";import{B as i}from"./Button.335f67c9.js";import"./index.3765caa7.js";import"./iframe.1b774001.js";import"./SynapseConstants.aef18750.js";import"./styled.d39d5dc5.js";import"./Tooltip.86d343dc.js";import"./SvgIcon.85beeea7.js";import"./useTheme.6433d807.js";import"./TransitionGroupContext.a684d657.js";import"./FullWidthAlert.1407f383.js";import"./hook.b7735453.js";import"./createWithBsPrefix.9bd79cbf.js";import"./divWithClassName.5dac844d.js";import"./index.35ce73ec.js";import"./Typography.c2c9dd4b.js";import"./Fade.40b5902b.js";import"./isArray.c8bb4df8.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.13ae9a2f.js";import"./IconButton.adda85b8.js";import"./ButtonBase.38f61443.js";import"./emotion-react.browser.esm.34fe7ce7.js";import"./Link.7609fc67.js";import"./Button.a71922e0.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(i,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const v={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}},a=t=>r(o,{...t}),p=a.bind({});p.args={callback:()=>{global.accessToken=null}};const I=["Demo"];export{p as Demo,I as __namedExportsOrder,v as default};
