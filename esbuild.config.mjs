import svgrPlugin from '@sage-bionetworks/esbuild-plugin-svgr'
import { sassPlugin } from 'esbuild-sass-plugin'
import ESBuildNodePolyfillsPlugin from 'esbuild-plugin-node-polyfills'
import esbuild from 'esbuild'
import GlobalsPlugin from 'esbuild-plugin-globals'

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
  entryPoints: ['src/lib/umd.index.ts'],
  bundle: true,
  platform: 'browser',
  target: 'es2015',
  globalName: 'SRC',
  tsconfig: 'tsconfig.build.json',
  plugins: [
    sassPlugin({
      includePaths: ['node_modules'],
    }),
    svgrPlugin({
      ref: true,
      namedExport: 'ReactComponent',
      exportType: 'named',
    }),
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
    'react-transition-group',
    'universal-cookie',
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

    // TODO: Use the metafile to determine the impact of each bundled dependency.
  })
