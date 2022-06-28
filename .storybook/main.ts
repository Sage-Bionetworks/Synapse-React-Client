import { mergeConfig, defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { viteExternalsPlugin } from 'vite-plugin-externals'

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
    let base = undefined
    // Fix deployment to github pages
    if (configType === 'PRODUCTION') {
      base = './'
    }

    const customStorybookConfig = defineConfig({
      base,
      plugins: [
        svgr(),
        viteExternalsPlugin({
          react: 'React',
          'react-dom': 'ReactDOM',
          'sql-parser': 'SQLParser',
          '@sage-bionetworks/rjsf-core': 'JSONSchemaForm',
          '@rjsf/core': 'JSONSchemaForm',
        }),
      ],
    })

    // return the customized config

    return mergeConfig(config, customStorybookConfig)
  },
}
