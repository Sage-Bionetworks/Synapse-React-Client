import svgrPlugin from 'esbuild-plugin-svgr'
import sassPlugin from 'esbuild-sass-plugin'
import ESBuildNodePolyfillsPlugin from 'esbuild-plugin-node-polyfills'
import svg from 'esbuild-plugin-svg'
import esbuild from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'
import { writeFileSync } from 'fs'

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router-dom': 'ReactRouterDom',
  'react-transition-group': 'ReactTransitionGroup',
  'react-bootstrap': 'ReactBootstrap',
  'react-plotly.js/factory': 'createPlotlyComponent',
  'rss-parser': 'Parser',
  'react-mailchimp-subscribe': 'ReactMailchimpSubscribe',
  'plotly.js-basic-dist': 'Plotly',
  '@rjsf/core': 'JSONSchemaForm',
  'react-measure': 'ReactMeasure',
  'react-tooltip': 'ReactTooltip',
  markdownit: 'markdownit',
  markdownitSynapse: 'markdownitSynapse',
  markdownitSub: 'markdownitSub',
  markdownitSup: 'markdownitSup',
  markdownitCentertext: 'markdownitCentertext',
  markdownitSynapseHeading: 'markdownitSynapseHeading',
  markdownitSynapseTable: 'markdownitSynapseTable',
  markdownitStrikethroughAlt: 'markdownitStrikethroughAlt',
  markdownitContainer: 'markdownitContainer',
  markdownitEmphasisAlt: 'markdownitEmphasisAlt',
  markdownitInlineComments: 'markdownitInlineComments',
  markdownitBr: 'markdownitBr',
  markdownitMath: 'markdownitMath',
  'sanitize-html': 'sanitizeHtml',
  'prop-types': 'PropTypes',
  'universal-cookie': 'UniversalCookie',
}

const esBuildOptions = {
  entryPoints: ['src/lib/rollup.index.ts'],
  bundle: true,
  platform: 'browser',
  target: 'es2016',
  globalName: 'SRC',
  plugins: [
    sassPlugin.sassPlugin({
      includePaths: ['.', 'node_modules'],
      outfile: './src/umd/synapse-react-client.production.styles.css',
    }),

    svg(),
    svgrPlugin({ ref: true }),
    ESBuildNodePolyfillsPlugin,
    GlobalsPlugin(globals),
  ],
  external: [
    'react',
    'react-dom',
    'sanitize-html',
    'prop-types',
    'react-router-dom',
    'react-measure',
    'react-bootstrap',
    'react-plotly.js/factory',
    'plotly.js-basic-dist',
    '@rjsf/core',
    'katex',
    'rss-parser',
    'react-mailchimp-subscribe',
    'react-tooltip',
    'markdownit',
    'markdownitSynapse',
    'markdownitSub',
    'markdownitSup',
    'markdownitCentertext',
    'markdownitSynapseHeading',
    'markdownitSynapseTable',
    'markdownitStrikethroughAlt',
    'markdownitContainer',
    'markdownitEmphasisAlt',
    'markdownitInlineComments',
    'markdownitBr',
    'markdownitMath',
    'sanitizeHtml',
    'react-transition-group',
    // 'json-schema-ref-parser', // bundling this results in a non-functional build (without error). see PORTALS-1907
  ],
}

// Development build
esbuild.build({
  ...esBuildOptions,
  minify: false,
  sourcemap: true,
  outfile: './src/umd/synapse-react-client.development.js',
})

// Production build
esbuild
  .build({
    ...esBuildOptions,
    minify: true,
    sourcemap: false,
    metafile: true,
    outfile: './src/umd/synapse-react-client.production.min.js',
  })
  .then(result => {
    const metafile = result.metafile
    const outputMb = Object.entries(metafile.outputs).forEach(
      ([key, value]) => {
        console.log(`${key}: ${(value.bytes / 1024 / 1024).toFixed(2)} MB`)
      },
    )

    writeFileSync('./src/umd/metafile.json', JSON.stringify(result.metafile))
  })
