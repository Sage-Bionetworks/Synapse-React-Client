import { mergeConfig, defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import nodePolyfills from 'rollup-plugin-polyfill-node'

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
      define: {
        'process.browser': 'true',
      },
      plugins: [
        nodePolyfills({
          include: 'node_modules/@apidevtools/json-schema-ref-parser/**/*.js',
        }),
        svgr(),
        viteExternalsPlugin({
          react: 'React',
          'react-dom': 'ReactDOM',
          'sql-parser': 'SQLParser',
        }),
      ],
      resolve: {
        alias: {
          stream: 'stream-browserify',
          buffer: 'buffer/',
        },
      },
      optimizeDeps: {
        include: [
          '@storybook/react/dist/esm/client/docs/config',
          '@storybook/react/dist/esm/client/preview/config',
          '@storybook/addon-links/preview.js',
          '@storybook/addon-docs/preview.js',
          '@storybook/addon-actions/preview.js',
          '@welldone-software/why-did-you-render',
          '@storybook/addon-backgrounds/preview.js',
          '@storybook/addon-measure/preview.js',
          '@storybook/addon-outline/preview.js',
          '@storybook/addon-interactions/preview.js',
          'buffer/',
        ],
      },
    })

    // return the customized config

    return mergeConfig(config, customStorybookConfig)
  },
}
