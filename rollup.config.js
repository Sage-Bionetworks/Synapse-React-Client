import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import image from 'rollup-plugin-image'
import resolve from 'rollup-plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import { uglify } from "rollup-plugin-uglify";
import json from 'rollup-plugin-json'
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'src/lib/index.tsx',
	external: [
		'react',
		'prop-types',
		'react-measure',
		'react-plotly.js',
		'katex',
		'react-tooltip',
		"md",
		"markdownitSynapse",
		"markdownSubAlt",
		"markdownCenterText",
		"markdownSynapseHeading",
		"markdownSynapseTable",
		"markdownStrikethrough",
		"markdownContainer",
		"markdownEmpahsisAlt",
		"markdownInlineComments",
		"markdownBr",
		"sanitizeHtml",
		"synapseMath",
	],
	plugins: [
		image(),
        typescript(),
		scss({output: "./umd/synapse-react-client.production.styles.css"}),
		resolve(),
		svg(),
		commonjs({
			include: ["node_modules/**"]
		}),
		json()
		// uglify()
	],
	output: {
		globals: {
			'react' : "React",
			'katex' : 'katex',
			'react-plotly.js': 'Plot',
			'react-measure': 'ReactMeasure',
			'react-tooltip': 'ReactTooltip',
			'prop-types': 'PropTypes',
			'md': 'md' ,
			'markdownitSynapse': 'markdownitSynapse' ,
			'markdownSubAlt': 'markdownSubAlt' ,
			'markdownCenterText': 'markdownCenterText' ,
			'markdownSynapseHeading': 'markdownSynapseHeading' ,
			'markdownSynapseTable': 'markdownSynapseTable' ,
			'markdownStrikethrough': 'markdownStrikethrough' ,
			'markdownContainer': 'markdownContainer' ,
			'markdownEmpahsisAlt': 'markdownEmpahsisAlt' ,
			'markdownInlineComments': 'markdownInlineComments' ,
			'markdownBr': 'markdownBr' ,
			'sanitizeHtml': 'sanitizeHtml' ,
			'synapseMath': 'synapseMath'
		},
		format: "umd",
		name: "SRC",
		file: "./umd/synapse-react-client.production.min.js",
	}
}