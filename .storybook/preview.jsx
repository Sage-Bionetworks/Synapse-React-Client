import React from 'react'
import '../src/demo/style/DemoStyle.scss'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { Buffer } from 'buffer'

globalThis.Buffer = Buffer

if (process.env.NODE_ENV === 'development') {
  // whyDidYouRender is a dev/debugging tool that logs to the console with information about why a component rendered
  // It won't track most components by default. Follow these instructions to track a component
  // https://github.com/welldone-software/why-did-you-render#tracking-components
  whyDidYouRender(React, {
    trackAllPureComponents: true,
  })
}

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
