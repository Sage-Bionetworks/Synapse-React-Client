import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ForumTable } from './ForumTable'

export default {
  title: 'Synapse/ForumTable',
  component: ForumTable,
  argTypes: {},
} as ComponentMeta<typeof ForumTable>

const Template: ComponentStory<typeof ForumTable> = args => (
  <ForumTable {...args} />
)

export const ForumTableDemo = Template.bind({})
ForumTableDemo.args = {
  forumId: '1032',
  limit: 20,
}
