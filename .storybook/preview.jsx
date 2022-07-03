import React from 'react'
import '../src/demo/style/DemoStyle.scss'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import { StyleGuidistComponentWrapper as DemoWrapper } from '../src/lib/containers/StyleGuidistComponentWrapper'

export const decorators = [
  Story => (
    <DemoWrapper>
      <Story />
    </DemoWrapper>
  ),
]

export default {
  parameters,
  decorators,
}
