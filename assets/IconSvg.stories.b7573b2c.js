import{I as t,a as e}from"./IconSvg.61b16659.js";import{j as n,a as i}from"./jsx-runtime.34c6f27f.js";import"./TransitionGroupContext.3999b8b4.js";import"./styled.0edb18ff.js";import"./Tooltip.6150c4ad.js";import"./createSvgIcon.62fb05ce.js";import"./utils.e76a203c.js";import"./index.01abc564.js";import"./iframe.678b52ee.js";import"./InfoOutlined.7facd530.js";const f={parameters:{storySource:{source:`import React from 'react'
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
