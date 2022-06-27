import { mergeConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import legacy from '@vitejs/plugin-legacy'

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [
        svgr(),
        legacy({
          modernPolyfills: ['es.array.includes'],
          renderLegacyChunks: false,
        }),
      ],
      build: {
        rollupOptions: {
          external: ['sql-parser', '@sage-bionetworks/rjsf-core', '@rjsf/core'],
        },
      },
    })
  },
}
