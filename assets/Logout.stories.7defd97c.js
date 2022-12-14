import{u as n}from"./EntityTypeUtils.f136fe8e.js";import{j as r}from"./jsx-runtime.edcee20f.js";import{B as i}from"./Button.beed9c8a.js";import"./index.e284f29f.js";import"./iframe.8d602a7e.js";import"./Fade.e73bdacf.js";import"./styled.57026967.js";import"./useTheme.c864c010.js";import"./Tooltip.6287427b.js";import"./SvgIcon.cf85a686.js";import"./TransitionGroupContext.9f30f89b.js";import"./isArray.ba2a5774.js";import"./index.35ce73ec.js";import"./getEndpoint.f1f195f5.js";import"./IconSvg.a36fd00f.js";import"./createWithBsPrefix.fb2e744c.js";import"./IconButton.f86e6b85.js";import"./ButtonBase.8a19de44.js";import"./emotion-react.browser.esm.23bad0f9.js";import"./Link.c844031a.js";import"./Typography.8ba12270.js";import"./Button.237100ef.js";import"./SynapseConstants.d6ba6a96.js";import"./Alert.c9c7cf94.js";import"./hook.9626bae0.js";import"./divWithClassName.198d5031.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(i,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const v={parameters:{storySource:{source:`import React from 'react'
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
