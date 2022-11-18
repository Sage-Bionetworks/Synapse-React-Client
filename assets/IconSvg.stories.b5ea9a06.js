import{I as t,a as e}from"./IconSvg.fd56a75b.js";import{j as n,a as i}from"./jsx-runtime.e45f5946.js";import"./TransitionGroupContext.0404639f.js";import"./styled.11fa6590.js";import"./Tooltip.2f932cf4.js";import"./createSvgIcon.25fceae1.js";import"./useTheme.c90b1c5e.js";import"./index.2f057391.js";import"./iframe.db0e90de.js";import"./utils.e1966123.js";import"./InfoOutlined.c1b233d2.js";const S={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{icon:{startLoc:{col:49,line:15},endLoc:{col:1,line:28},startBody:{col:49,line:15},endBody:{col:1,line:28}}}}},title:"UI/IconSvg",component:t,argTypes:{}},s=r=>n("div",{style:{display:"flex",flexWrap:"wrap",flexDirection:"row"},children:e.sort().map(o=>i("div",{style:{margin:"10px",textAlign:"center"},children:[n("div",{children:n(t,{...r,icon:o,label:o})}),n("div",{style:{fontSize:"10px"},children:o})]},o))}),c=s.bind({});c.args={sx:{color:"primary.main",width:"40px",height:"40px"}};const h=["Icon"];export{c as Icon,h as __namedExportsOrder,S as default};
