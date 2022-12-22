import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import AccessRequirementList from './AccessRequirementList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Governance/AccessRequirementList',
  component: AccessRequirementList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AccessRequirementList>

const Template: ComponentStory<typeof AccessRequirementList> = args => (
  <AccessRequirementList {...args} />
)

export const Demo = Template.bind({})
Demo.args = {
  // entityId: 'syn12664802',
}
