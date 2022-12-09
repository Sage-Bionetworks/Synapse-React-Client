import{u as n}from"./index.05d3527e.js";import{j as r}from"./jsx-runtime.43a8fcf9.js";import{B as i}from"./Button.1bf4e27e.js";import"./index.91cff701.js";import"./iframe.f725ca92.js";import"./SynapseConstants.4792b5b5.js";import"./styled.76b26431.js";import"./Tooltip.9e1c2716.js";import"./SvgIcon.6442358d.js";import"./useTheme.af9f301b.js";import"./TransitionGroupContext.b91ad5da.js";import"./Alert.52cd8abc.js";import"./hook.21b06627.js";import"./createWithBsPrefix.5369d369.js";import"./divWithClassName.ce1df20c.js";import"./index.35ce73ec.js";import"./Fade.b7951dc7.js";import"./isArray.ef4abd22.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.710ae2ef.js";import"./IconButton.f195eccf.js";import"./ButtonBase.48ba7e09.js";import"./emotion-react.browser.esm.4fa41df1.js";import"./Link.fae97ed4.js";import"./Typography.1c91c940.js";import"./Button.c355b500.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(i,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const v={parameters:{storySource:{source:`import React from 'react'
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
