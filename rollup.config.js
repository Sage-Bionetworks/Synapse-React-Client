import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import image from 'rollup-plugin-image'
import resolve from 'rollup-plugin-node-resolve';
import svg from 'rollup-plugin-svg';
import { uglify } from "rollup-plugin-uglify";
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
	],
	plugins: [
		image(),
        typescript(),
		scss({output: "./umd/synapse-react-client.production.styles.css"}),
		resolve(),
		svg(),
		commonjs({
			include: ["node_modules/**"]
		})
	],
	output: {
		globals: {
			'react' : "React",
			'katex' : 'katex',
			'react-plotly.js': 'Plot',
			'react-measure': 'Measure',
			'react-tooltip': 'ReactToolTip',
			'prop-types': 'PropTypes',
		},
		format: "umd",
		name: "SRC",
		file: "./umd/synapse-react-client.production.min.js",
	}
}