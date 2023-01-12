import{s as n}from"./index.0297a0cb.js";import{j as r}from"./jsx-runtime.76b41102.js";import{B as i}from"./Button.83b95483.js";import"./index.bc4e6645.js";import"./iframe.4ac8fc26.js";import"./SynapseConstants.71946a35.js";import"./styled.0442482c.js";import"./Tooltip.40200d96.js";import"./SvgIcon.7ad855dc.js";import"./useTheme.6368534f.js";import"./TransitionGroupContext.e619b501.js";import"./FullWidthAlert.fa5db810.js";import"./hook.9a8069f4.js";import"./createWithBsPrefix.ec0f4954.js";import"./divWithClassName.ae433c15.js";import"./index.35ce73ec.js";import"./Typography.6181771e.js";import"./Fade.e47b19bb.js";import"./isArray.8642b77d.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.175e5b3e.js";import"./IconButton.6adff82e.js";import"./ButtonBase.bd6b806f.js";import"./emotion-react.browser.esm.cf245846.js";import"./Link.dc8bd0fa.js";import"./Button.09259ba0.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(i,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const v={parameters:{storySource:{source:`import React from 'react'
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
