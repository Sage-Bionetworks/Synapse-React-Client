import{j as e}from"./jsx-runtime.31268528.js";import{T as n}from"./Typography.7deb443e.js";import"./iframe.c7567c2d.js";import"./styled.0bfd4c69.js";const c={parameters:{storySource:{source:`import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Typography } from '@mui/material'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UI/Typography',
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'headline1',
        'headline2',
        'headline3',
        'body1',
        'body1Italic',
        'body2',
        'breadcrumb1',
        'breadcrumb2',
        'smallText1',
        'smallText2',
        'smallLink',
        'label',
        'buttonLink',
        'hintText',
        'sectionTitle',
        'subsectionHeader',
        'dataFieldKey',
      ],
    },
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
`,locationsMap:{"typography-demo":{startLoc:{col:52,line:39},endLoc:{col:1,line:44},startBody:{col:52,line:39},endBody:{col:1,line:44}}}}},title:"UI/Typography",component:n,argTypes:{children:{control:"text"},variant:{control:"select",options:["headline1","headline2","headline3","body1","body1Italic","body2","breadcrumb1","breadcrumb2","smallText1","smallText2","smallLink","label","buttonLink","hintText","sectionTitle","subsectionHeader","dataFieldKey"]}}},r=o=>{var t;return e(n,{...o,children:(t=o.children)!=null?t:"Modify this sample text using the 'children' control below"})},a=r.bind({});a.args={variant:"headline1"};const y=["TypographyDemo"];export{a as TypographyDemo,y as __namedExportsOrder,c as default};
