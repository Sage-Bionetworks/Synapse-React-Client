import{I as n,a as r}from"./IconSvg.09883cec.js";import{j as t}from"./jsx-runtime.f7cf66fc.js";import"./SvgIcon.d61a6d98.js";import"./withStyles.ddbf8a64.js";import"./Tooltip.7bec90df.js";import"./createSvgIcon.fe8b3870.js";import"./index.1e38edd3.js";import"./iframe.7a93df40.js";import"./useTheme.af842711.js";import"./Transition.9d380883.js";import"./makeStyles.c3ae2cc2.js";import"./InfoOutlined.a5d342c6.js";const x={parameters:{storySource:{source:`import React from 'react'
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
