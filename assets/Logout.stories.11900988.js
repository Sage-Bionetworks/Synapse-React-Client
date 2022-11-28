import{t as n}from"./index.96fee529.js";import{j as r}from"./jsx-runtime.0721b30f.js";import{B as a}from"./Button.c6170972.js";import"./index.84874f77.js";import"./iframe.d07454b7.js";import"./SynapseConstants.290eab74.js";import"./styled.b8cd841c.js";import"./utils.61962e2e.js";import"./TransitionGroupContext.536780f6.js";import"./useTheme.210faaa5.js";import"./Alert.e026ca2c.js";import"./hook.0b64fed2.js";import"./createWithBsPrefix.60042f33.js";import"./divWithClassName.ae2eac7f.js";import"./index.35ce73ec.js";import"./Fade.54a45bb0.js";import"./isArray.0e868c61.js";import"./getEndpoint.bb7ded34.js";import"./Link.38c396f1.js";import"./Typography.f634a419.js";import"./Button.9899c0f8.js";import"./ButtonBase.c60e40b2.js";import"./emotion-react.browser.esm.4fe99834.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(a,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const E={parameters:{storySource:{source:`import React from 'react'
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
