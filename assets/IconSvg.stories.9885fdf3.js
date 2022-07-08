import{I as n,a as r}from"./IconSvg.160dd61c.js";import{j as t}from"./jsx-runtime.2e925369.js";import"./SvgIcon.f6f6da7c.js";import"./objectWithoutPropertiesLoose.090b3c10.js";import"./toConsumableArray.b3669986.js";import"./withStyles.ab2e1d33.js";import"./utils.38c8d0df.js";import"./useTheme.990cd45a.js";import"./Transition.c5966bcb.js";import"./makeStyles.9976e655.js";import"./createSvgIcon.88863916.js";import"./InfoOutlined.21bf844a.js";import"./Clear.eb427cfa.js";var u={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{icon:{startLoc:{col:49,line:15},endLoc:{col:1,line:23},startBody:{col:49,line:15},endBody:{col:1,line:23}}}}},title:"UI/IconSvg",component:n,argTypes:{}};const e=p=>t("div",{style:{display:"flex",gap:"5px",flexWrap:"wrap"},children:r.map(o=>t(n,{options:{icon:o,label:o}},o))}),s=e.bind({});s.args={};const b=["Icon"];export{s as Icon,b as __namedExportsOrder,u as default};
//# sourceMappingURL=IconSvg.stories.9885fdf3.js.map
