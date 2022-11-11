import{I as t,a as e}from"./IconSvg.19fd41bf.js";import{j as n,a as i}from"./jsx-runtime.02a28547.js";import"./TransitionGroupContext.70688128.js";import"./styled.2f449268.js";import"./Tooltip.edd9e9f0.js";import"./createSvgIcon.d569702c.js";import"./utils.34aadcdd.js";import"./index.a309e2be.js";import"./iframe.0b294b31.js";import"./InfoOutlined.88356fd8.js";const f={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import IconSvg, { IconStrings } from './IconSvg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/IconSvg',
  component: IconSvg,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconSvg>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconSvg> = args => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
      {IconStrings.sort().map(icon => (
        <div style={{ margin: '10px', textAlign: 'center' }} key={icon}>
          <div>
            <IconSvg {...args} icon={icon} label={icon} />
          </div>
          <div style={{ fontSize: '10px' }}>{icon}</div>
        </div>
      ))}
    </div>
  )
}

export const Icon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Icon.args = {
  sx: {
    color: 'primary.main',
    width: '40px',
    height: '40px',
  },
}
`,locationsMap:{icon:{startLoc:{col:49,line:15},endLoc:{col:1,line:28},startBody:{col:49,line:15},endBody:{col:1,line:28}}}}},title:"UI/IconSvg",component:t,argTypes:{}},s=r=>n("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row"},children:e.sort().map(o=>i("div",{style:{margin:"10px",textAlign:"center"},children:[n("div",{children:n(t,{...r,icon:o,label:o})}),n("div",{style:{fontSize:"10px"},children:o})]},o))}),c=s.bind({});c.args={sx:{color:"primary.main",width:"40px",height:"40px"}};const S=["Icon"];export{c as Icon,S as __namedExportsOrder,f as default};
