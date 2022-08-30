import{I as n,a as r}from"./IconSvg.19550831.js";import{j as t}from"./jsx-runtime.2e925369.js";import"./SvgIcon.6d10a3ac.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./objectWithoutProperties.07f8cd75.js";import"./withStyles.461112f3.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";import"./Tooltip.3e761ad5.js";import"./slicedToArray.e9a7fa03.js";import"./makeStyles.38be5a7f.js";import"./InfoOutlined.a7449f61.js";var x={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{icon:{startLoc:{col:49,line:15},endLoc:{col:1,line:23},startBody:{col:49,line:15},endBody:{col:1,line:23}}}}},title:"UI/IconSvg",component:n,argTypes:{}};const e=p=>t("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:r.map(o=>t(n,{options:{icon:o,label:o}},o))}),s=e.bind({});s.args={};const u=["Icon"];export{s as Icon,u as __namedExportsOrder,x as default};
//# sourceMappingURL=IconSvg.stories.0fedfa8c.js.map
