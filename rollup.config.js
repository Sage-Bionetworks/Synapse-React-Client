import babel from '@rollup/plugin-babel'
import scss from 'rollup-plugin-scss'
import image from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve'
import svg from 'rollup-plugin-svg'
import json from '@rollup/plugin-json'
import postprocess from 'rollup-plugin-postprocess'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import svgr from '@svgr/rollup'
import sass from 'sass'
import analyze from 'rollup-plugin-analyzer'

const extensions = ['.js', '.jsx', '.ts', '.tsx']
const maxBytes = 5e6 // if > 5MB total, then error
const onAnalysis = ({ bundleSize }) => {
  if (bundleSize < maxBytes) return
  console.log(`Bundle size exceeds ${maxBytes} bytes: ${bundleSize} bytes`)
  return process.exit(1)
}
export default {
  input: 'src/lib/rollup.index.ts',
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
    'json-schema-ref-parser', // bundling this results in a non-functional build (without error). see PORTALS-1907
  ],
  onwarn: function (args) {
    // Skip certain warnings
    // console.log('args = ', args)
    const { loc, frame, message, code } = args
    // Skip warning about AOT compiler (babel) use of the 'this' keyword
    if (code === 'THIS_IS_UNDEFINED') {
      return
    }
    if (loc) {
      console.warn(`${loc.file} (${loc.line}:${loc.column}) ${message}`)
      if (frame) console.warn(frame)
    } else {
      console.warn(message)
    }
    // console.warn everything else
  },
  // NOTE - the order matters for the extensions below
  plugins: [
    resolve({ extensions, browser: true, preferBuiltins: false }),
    babel({
      extensions,
      exclude: 'node_modules/**',
    }),
    // Common js is used to handle the import of older javascript modules not using es6
    commonjs(),
    // Some dependencies try to use Node APIs, which we'll polyfill in so the package doesn't crash in-browser
    nodePolyfills(),
    image(),
    // until css modules package is updated we can't opt into css modules
    // see issue here - https://github.com/egoist/rollup-plugin-postcss/issues/174
    scss({
      output: './src/umd/synapse-react-client.production.styles.css',
      sass: sass,
    }),
    // allows importing SVGs via syntax: import svgUrl from '/svgfile.svg' , which provides the svg as URL to plug into an <img src={svgUrl}>
    svg(),
    // allows importing SVGs via syntax: import { ReactComponent as MySvgComponent } from '/svgfile.svg' , which provides a ready-to-use <svg> ReactComponent
    svgr(),
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
    terser(),
    analyze({ onAnalysis, summaryOnly: true, limit: 10 }),
  ],
  output: {
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
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
      'sanitize-html': 'sanitizeHtml',
      'prop-types': 'PropTypes',
      'sql-parser': 'sqlParser',
      'universal-cookie': 'UniversalCookie',
    },
    format: 'umd',
    name: 'SRC',
    file: './src/umd/synapse-react-client.production.min.js',
  },
}
