import{t as n}from"./index.69555c85.js";import{j as r}from"./jsx-runtime.25f1da80.js";import{B as a}from"./Button.03ce126b.js";import"./index.09872124.js";import"./iframe.89c4ca26.js";import"./SynapseConstants.290eab74.js";import"./styled.61c2cdbd.js";import"./utils.653016b9.js";import"./TransitionGroupContext.d4abce3c.js";import"./useTheme.50dbca56.js";import"./Alert.c8ecdb26.js";import"./hook.865145d2.js";import"./createWithBsPrefix.2ba1d399.js";import"./divWithClassName.8bbfe55a.js";import"./index.35ce73ec.js";import"./Fade.5af2af2d.js";import"./isArray.63a07037.js";import"./getEndpoint.bb7ded34.js";import"./Link.7320b292.js";import"./Typography.787f3df0.js";import"./Button.71735648.js";import"./ButtonBase.e51b431c.js";import"./emotion-react.browser.esm.de1a23fd.js";function o(t){const{callback:e}=t;return r("div",{className:"bootstrap-4-backport",children:r(a,{variant:"default",onClick:()=>{n(e)},children:"Log out"})})}try{o.displayName="Logout",o.__docgenInfo={description:"",displayName:"Logout",props:{callback:{defaultValue:null,description:"",name:"callback",required:!0,type:{name:"() => void"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/lib/containers/Logout.tsx#Logout"]={docgenInfo:o.__docgenInfo,name:"Logout",path:"src/lib/containers/Logout.tsx#Logout"})}catch{}const E={parameters:{storySource:{source:`import React from 'react'
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
