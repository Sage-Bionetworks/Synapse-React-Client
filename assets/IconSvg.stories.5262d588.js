import{I as n,a as r}from"./IconSvg.8a81e89b.js";import{j as t}from"./jsx-runtime.4ed473f6.js";import"./SvgIcon.d67caae4.js";import"./withStyles.78cfa842.js";import"./Tooltip.eb6aee31.js";import"./createSvgIcon.691ab6d6.js";import"./utils.75253d0f.js";import"./index.02b86482.js";import"./iframe.b5feb82b.js";import"./makeStyles.dc0e46d4.js";import"./InfoOutlined.ab4f4d01.js";const v={parameters:{storySource:{source:`import React from 'react'
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
