import{t as n}from"./index.78005489.js";import{j as r}from"./jsx-runtime.f4a5fef7.js";import{B as a}from"./Button.6c384231.js";import"./index.ee4c3b55.js";import"./iframe.1c2d6841.js";import"./SynapseConstants.290eab74.js";import"./styled.02bbe28b.js";import"./utils.c51ff475.js";import"./TransitionGroupContext.bc250134.js";import"./useTheme.cb95caa9.js";import"./Alert.4753fb70.js";import"./hook.82a0cc8c.js";import"./createWithBsPrefix.54f05b7e.js";import"./divWithClassName.967bfcd9.js";import"./index.35ce73ec.js";import"./Fade.f600cb07.js";import"./isArray.c85c7bf8.js";import"./getEndpoint.bb7ded34.js";import"./Link.880594dd.js";import"./Typography.839bb703.js";import"./Button.4567776a.js";import"./ButtonBase.380fb064.js";import"./emotion-react.browser.esm.e2223364.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(a,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const E={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{demo:{startLoc:{col:48,line:15},endLoc:{col:76,line:15},startBody:{col:48,line:15},endBody:{col:76,line:15}}}}},title:"Authentication/Logout",component:o,argTypes:{}},i=t=>r(o,{...t}),s=i.bind({});s.args={callback:()=>{global.accessToken=null}};const R=["Demo"];export{s as Demo,R as __namedExportsOrder,E as default};
