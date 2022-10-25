import{T as r}from"./Typography.935cd23d.js";import{j as e}from"./jsx-runtime.ed0bc2e8.js";import"./index.57d09176.js";import"./makeStyles.83c340c0.js";import"./withStyles.5eea39d5.js";import"./iframe.1c77586e.js";const l={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Typography from './Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Typography>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = args => (
  <Typography {...args}>
    {args.children ??
      "Modify this sample text using the 'children' control below"}
  </Typography>
)

export const TypographyDemo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TypographyDemo.args = {
  variant: 'headline1',
}
`,locationsMap:{"typography-demo":{startLoc:{col:52,line:17},endLoc:{col:1,line:22},startBody:{col:52,line:17},endBody:{col:1,line:22}}}}},title:"UI/Typography",component:r,argTypes:{children:{control:"text"}}},n=o=>{var t;return e(r,{...o,children:(t=o.children)!=null?t:"Modify this sample text using the 'children' control below"})},p=n.bind({});p.args={variant:"headline1"};const m=["TypographyDemo"];export{p as TypographyDemo,m as __namedExportsOrder,l as default};
