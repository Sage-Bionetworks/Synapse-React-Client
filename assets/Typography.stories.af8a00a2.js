import{T as r}from"./Typography.9748340b.js";import{j as e}from"./jsx-runtime.00d70968.js";import"./index.57d09176.js";import"./makeStyles.2422b359.js";import"./withStyles.d6b2de44.js";import"./objectWithoutProperties.a0dea5ce.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";import"./toConsumableArray.8f496188.js";import"./createClass.67a84016.js";const d={parameters:{storySource:{source:`import React from 'react'
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
`,locationsMap:{"typography-demo":{startLoc:{col:52,line:17},endLoc:{col:1,line:22},startBody:{col:52,line:17},endBody:{col:1,line:22}}}}},title:"UI/Typography",component:r,argTypes:{children:{control:"text"}}},n=o=>{var t;return e(r,{...o,children:(t=o.children)!=null?t:"Modify this sample text using the 'children' control below"})},p=n.bind({});p.args={variant:"headline1"};const T=["TypographyDemo"];export{p as TypographyDemo,T as __namedExportsOrder,d as default};
