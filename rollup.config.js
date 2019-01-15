// rollup.config.js
import typescript from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'
import image from 'rollup-plugin-image'
import resolve from 'rollup-plugin-node-resolve';
import svg from 'rollup-plugin-svg';

export default {
	input: 'src/lib/index.tsx',
	external: [
		'react',
		'prop-types',
		'react-measure',
		'react-plotly.js',
		'katex',
		'react-tooltip'
	],
	plugins: [
		image(),
        typescript(),
		scss({output: "./SingleFileBuild/bundle.css"}),
		resolve(),
		svg()
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
		file: "./SingleFileBuild/index.js"
	}
}