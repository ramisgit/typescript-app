const path = require('path');
const webpack = require('webpack')
module.exports = {
	mode: "development",
	entry: './src/index.tsx',
	watch: true,
	devtool: "inline-source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/bundle.js',
		library: 'umd',
		publicPath: '/assets/'
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader"
					}
				]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
		contentBase: './',
		contentBase: path.join(__dirname, "dist"),
		writeToDisk: true,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};