import{I as n,a as r}from"./IconSvg.625594e1.js";import{j as t}from"./jsx-runtime.eafcb716.js";import"./SvgIcon.b014c401.js";import"./withStyles.58225468.js";import"./Tooltip.96a18513.js";import"./createSvgIcon.01cb2ea7.js";import"./utils.57f84b27.js";import"./index.c8a02fae.js";import"./iframe.5b9ef2ae.js";import"./makeStyles.ba00c68d.js";import"./InfoOutlined.f91cf818.js";const v={parameters:{storySource:{source:`import React from 'react'
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
