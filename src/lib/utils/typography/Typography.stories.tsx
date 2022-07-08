import React from 'react'
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
