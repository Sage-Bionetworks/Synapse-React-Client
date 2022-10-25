import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MarkdownEditor } from './MarkdownEditor'

export default {
  title: 'Markdown/MarkdownEditor',
  component: MarkdownEditor,
  argTypes: {},
} as ComponentMeta<typeof MarkdownEditor>

const Template: ComponentStory<typeof MarkdownEditor> = args => (
  <MarkdownEditor {...args} />
)

export const MarkdownEditorDemo = Template.bind({})
MarkdownEditorDemo.args = {
  placeholder: 'Leave your comment...',
}
