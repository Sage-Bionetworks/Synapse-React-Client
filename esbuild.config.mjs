import esbuild from 'esbuild'
import alias from 'esbuild-plugin-alias'
import GlobalsPlugin from 'esbuild-plugin-globals'
import svgrPlugin from 'esbuild-plugin-svgr'
import { sassPlugin } from 'esbuild-sass-plugin'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router': 'ReactRouter',
  'react-router-dom': 'ReactRouterDOM',
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
    alias({
      path: require.resolve('path-browserify'),
      fs: require.resolve('browserify-fs'),
      stream: require.resolve('stream-browserify'),
    }),
    GlobalsPlugin(globals),
  ],
  external: [
    'react',
    'react-dom',
    'prop-types',
    'react-router',
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
