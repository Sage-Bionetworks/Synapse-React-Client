import{T as r}from"./Typography.5de44d5b.js";import{j as e}from"./jsx-runtime.0547954a.js";import"./index.57d09176.js";import"./makeStyles.68b76b6a.js";import"./withStyles.5f371c18.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.c4898ee4.js";import"./iframe.bc1355ce.js";const h={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"typography-demo":{startLoc:{col:52,line:17},endLoc:{col:1,line:22},startBody:{col:52,line:17},endBody:{col:1,line:22}}}}},title:"UI/Typography",component:r,argTypes:{children:{control:"text"}}},n=o=>{var t;return e(r,{...o,children:(t=o.children)!=null?t:"Modify this sample text using the 'children' control below"})},p=n.bind({});p.args={variant:"headline1"};const d=["TypographyDemo"];export{p as TypographyDemo,d as __namedExportsOrder,h as default};
