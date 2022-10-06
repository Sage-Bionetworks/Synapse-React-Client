import{I as n,a as r}from"./IconSvg.b92ea12f.js";import{j as t}from"./jsx-runtime.0547954a.js";import"./SvgIcon.20c60b09.js";import"./withStyles.5f371c18.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./Tooltip.d59517ea.js";import"./createSvgIcon.13c982df.js";import"./slicedToArray.e72f11da.js";import"./index.9a22ba50.js";import"./iframe.bc1355ce.js";import"./useTheme.f4071482.js";import"./Transition.c74a9bc3.js";import"./makeStyles.68b76b6a.js";import"./InfoOutlined.5164ccbb.js";const M={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{icon:{startLoc:{col:49,line:15},endLoc:{col:1,line:23},startBody:{col:49,line:15},endBody:{col:1,line:23}}}}},title:"UI/IconSvg",component:n,argTypes:{}},e=p=>t("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:r.map(o=>t(n,{options:{icon:o,label:o}},o))}),s=e.bind({});s.args={};const j=["Icon"];export{s as Icon,j as __namedExportsOrder,M as default};
