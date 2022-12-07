import React from 'react'
import '../src/demo/style/DemoStyle.scss'
import whyDidYouRender from '@welldone-software/why-did-you-render'
import { Buffer } from 'buffer'
import { StorybookComponentWrapper } from '../src/lib/containers/StorybookComponentWrapper'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import { getHandlers } from '../src/mocks/msw/handlers'
import palettes, {
  adKnowledgePortalPalette,
  arkPortalPalette,
  bsmnPortalPalette,
  cancerComplexityPortalPalette,
  crcResearcherPortalPalette,
  digitalHealthPortalPalette,
  mtbPalette,
  nfPortalPalette,
  palette,
  psychEncodePortalPalette,
  sageBionetworksPalette,
  stopAdPortalPalette,
} from '../src/lib/utils/theme/palette/Palettes'
import { MOCK_REPO_ORIGIN } from '../src/lib/utils/functions/getEndpoint'

globalThis.Buffer = Buffer
globalThis.process = {
  browser: true,
  env: {
    NODE_ENV: 'development',
    NODE_DEBUG: undefined,
  },
}

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
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: [
      // Only return mocked data when making requests to our mock stack
      ...getHandlers(MOCK_REPO_ORIGIN),
    ],
  },
}

export const globalTypes = {
  stack: {
    name: 'Stack',
    title: 'Stack Changer',
    description:
      'Choose the stack that Synapse should point to. You may need to re-authenticate after changing stacks.',
    defaultValue: 'production',
    toolbar: {
      icon: 'database',
      dynamicTitle: true,
      items: [
        { value: 'production', title: 'Production' },
        { value: 'staging', title: 'Staging' },
        { value: 'development', title: 'Development' },
        { value: 'mock', title: 'Mocked Data' },
      ],
    },
  },
  palette: {
    name: 'Theme',
    title: 'Theme',
    description: 'Choose the theme to apply.',
    defaultValue: 'default',
    toolbar: {
      icon: 'paintbrush',
      dynamicTitle: true,
      items: [
        { value: palette, title: 'Default (Synapse.org)' },
        { value: sageBionetworksPalette, title: 'Sage Bionetworks' },
        { value: mtbPalette, title: 'MTB' },
        { value: arkPortalPalette, title: 'ARK Portal' },
        { value: adKnowledgePortalPalette, title: 'AD Knowledge Portal' },
        { value: nfPortalPalette, title: 'NF Portal' },
        { value: bsmnPortalPalette, title: 'BSMN Portal' },
        { value: psychEncodePortalPalette, title: 'PsychENCODE Portal' },
        { value: stopAdPortalPalette, title: 'STOP AD Portal' },
        { value: digitalHealthPortalPalette, title: 'Digital Health Portal' },
        { value: crcResearcherPortalPalette, title: 'CRC Researcher Portal' },
        {
          value: cancerComplexityPortalPalette,
          title: 'Cancer Complexity Portal',
        },
      ],
    },
  },
}

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass',
})

export const decorators = [
  mswDecorator,
  (Story, context) => {
    return (
      <StorybookComponentWrapper storybookContext={context}>
        <Story />
      </StorybookComponentWrapper>
    )
  },
]

export default {
  parameters,
  decorators,
}
