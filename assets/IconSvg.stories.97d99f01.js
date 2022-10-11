import{I as n,a as r}from"./IconSvg.76f9c9ad.js";import{j as t}from"./jsx-runtime.f6e67d69.js";import"./SvgIcon.b9f91416.js";import"./withStyles.e9153c6c.js";import"./Tooltip.e69703f2.js";import"./createSvgIcon.1bc5e790.js";import"./index.5aa44f42.js";import"./iframe.0155d3d5.js";import"./useTheme.b5d1a103.js";import"./Transition.45107636.js";import"./makeStyles.b3ebb6fc.js";import"./InfoOutlined.6b0ecc0d.js";const x={parameters:{storySource:{source:`import React from 'react'
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
    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
      {IconStrings.map(icon => (
        <IconSvg key={icon} options={{ icon: icon, label: icon }} />
      ))}
    </div>
  )
}

export const Icon = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Icon.args = {}
`,locationsMap:{icon:{startLoc:{col:49,line:15},endLoc:{col:1,line:23},startBody:{col:49,line:15},endBody:{col:1,line:23}}}}},title:"UI/IconSvg",component:n,argTypes:{}},e=p=>t("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:r.map(o=>t(n,{options:{icon:o,label:o}},o))}),s=e.bind({});s.args={};const u=["Icon"];export{s as Icon,u as __namedExportsOrder,x as default};
