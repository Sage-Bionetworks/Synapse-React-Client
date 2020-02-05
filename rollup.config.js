import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'
import image from 'rollup-plugin-image'
import resolve from 'rollup-plugin-node-resolve'
import svg from 'rollup-plugin-svg'
import json from 'rollup-plugin-json'
import postprocess from 'rollup-plugin-postprocess'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'
const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
  input: 'src/lib/rollup.index.ts',
  external: [
    'react',
    'prop-types',
    'react-router-dom',
    'react-measure',
    'react-bootstrap',
    'react-plotly.js/factory',
    'plotly.js-basic-dist',
    'react-jsonschema-form',
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
    'sql-parser',
    'universal-cookie',
  ],
  onwarn: function(warning) {
    // Skip certain warnings

    // Skip warning about AOT compiler (babel) use of the 'this' keyword
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return
    }

    console.warn(warning.message)
    // console.warn everything else
  },
  // NOTE - the order matters for the extensions below
  plugins: [
    resolve({ extensions }),
    babel({
      extensions,
      exclude: 'node_modules/*.*',
    }),
    // Common js is used to handle the import of older javascript modules not using es6
    commonjs(),
    image(),
    // until css modules package is updated we can't opt into css modules
    // see issue here - https://github.com/egoist/rollup-plugin-postcss/issues/174
    scss({ output: './src/umd/synapse-react-client.production.styles.css' }),
    svg(),
    json(),
    // The plugin below is used to mitigate a limitation of rollup, which is that an import statement
    // can only be exposed as the import name used. This limitation is seen here-
    // 		import Plotly from 'react-plotly.js'
    // doesn't work because the plotly CDN exposes a method createPlotlyComponent and not a class Plotly, so
    // we have to do this text transformation.
    postprocess([
      [
        /React.createElement\(Plot, { data: plotData, layout: layout }\)/g,
        'React.createElement(createPlotlyComponent(Plotly), { data: plotData, layout: layout })',
      ],
      [/reactTransitionGroup/g, 'ReactTransitionGroup'],
      [
        // production is surrounded in "" so that its replaced as a string instead of as a variable
        // https://github.com/rollup/rollup/issues/487
        /process.env.NODE_ENV/g,
        '"production"',
      ],
    ]),
    // minify the bundle
    minify(),
  ],
  output: {
    globals: {
      react: 'React',
      'react-router-dom': 'ReactRouterDom',
      'react-transition-group': 'ReactTransitionGroup',
      'react-bootstrap': 'ReactBootstrap',
      'react-plotly.js/factory': 'createPlotlyComponent',
      'rss-parser': 'Parser',
      'react-mailchimp-subscribe': 'ReactMailchimpSubscribe',
      'plotly.js-basic-dist': 'Plotly',
      'react-jsonschema-form': 'JSONSchemaForm',
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
      sanitizeHtml: 'sanitizeHtml',
      'prop-types': 'PropTypes',
      'sql-parser': 'sqlParser',
      'universal-cookie': 'UniversalCookie',
    },
    format: 'umd',
    name: 'SRC',
    file: './src/umd/synapse-react-client.production.min.js',
  },
}
