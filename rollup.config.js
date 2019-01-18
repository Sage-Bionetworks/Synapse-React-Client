import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import image from 'rollup-plugin-image'
import resolve from 'rollup-plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import json from 'rollup-plugin-json'
import postprocess from 'rollup-plugin-postprocess';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs'


export default {
	input: 'src/lib/index.tsx',
	external: [
		'react',
		'prop-types',
		'react-measure',
		'react-plotly.js',
		'katex',
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
	],
	plugins: [
		image(),
        typescript(),
		scss({output: './src/umd/synapse-react-client.production.styles.css'}),
		resolve(),
		svg(),
		json(),
		postprocess([
            [
				/React.createElement\(Plot, { data: plotData, layout: layout }\)/g, 
				'React.createElement(createPlotlyComponent(Plotly), { data: plotData, layout: layout })']
		]),
		commonjs()
	],
	output: {
		globals: {
			'react' : 'React',
			'katex' : 'katex',
			'react-plotly.js': 'createPlotlyComponent(Plotly)',
			'react-measure': 'ReactMeasure',
			'react-tooltip': 'ReactTooltip',
			'prop-types': 'PropTypes',
			'markdownit': 'markdownit' ,
			'markdownitSynapse': 'markdownitSynapse' ,
			'markdownitSub': 'markdownitSub',
			'markdownitSup': 'markdownitSup',
			'markdownitCentertext': 'markdownitCentertext',
			'markdownitSynapseHeading': 'markdownitSynapseHeading',
			'markdownitSynapseTable': 'markdownitSynapseTable',
			'markdownitStrikethroughAlt': 'markdownitStrikethroughAlt',
			'markdownitContainer': 'markdownitContainer',
			'markdownitEmphasisAlt': 'markdownitEmphasisAlt',
			'markdownitInlineComments': 'markdownitInlineComments',
			'markdownitBr': 'markdownitBr',
			'markdownitMath': 'markdownitMath',
			'sanitizeHtml': 'sanitizeHtml'
		},
		format: 'umd',
		name: 'SRC',
		file: './src/umd/synapse-react-client.production.min.js',
	}
}
