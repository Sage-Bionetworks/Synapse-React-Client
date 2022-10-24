import{I as n,a as r}from"./IconSvg.43ff89f7.js";import{j as t}from"./jsx-runtime.66426239.js";import"./SvgIcon.bec2abf5.js";import"./withStyles.c0f84b5f.js";import"./Tooltip.20b2ac09.js";import"./createSvgIcon.11e8f9d3.js";import"./utils.dd2a9ff9.js";import"./index.06c514da.js";import"./iframe.7709cd8b.js";import"./makeStyles.c7a35cbe.js";import"./InfoOutlined.009cccae.js";const v={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{icon:{startLoc:{col:49,line:15},endLoc:{col:1,line:23},startBody:{col:49,line:15},endBody:{col:1,line:23}}}}},title:"UI/IconSvg",component:n,argTypes:{}},e=p=>t("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:r.map(o=>t(n,{options:{icon:o,label:o}},o))}),s=e.bind({});s.args={};const x=["Icon"];export{s as Icon,x as __namedExportsOrder,v as default};
