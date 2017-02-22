import path from 'path';
import webpack from 'webpack';

export default {
	entry: [
		'react-hot-loader/patch',
		path.join(__dirname, 'src/index'),
		'webpack-dev-server/client?http://localhost:3000',       
		'webpack/hot/only-dev-server'
	],
	output: {
		path: path.join(__dirname, 'output/assets'),
		filename: 'app.js',
		publicPath: '/assets'
	},
	// resolve: "",
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/, 
				loader: 'babel', 
				exclude: [/node_modules/]
			}
		]
	},
	// devtool: ""
}