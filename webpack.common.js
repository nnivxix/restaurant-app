const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							url:true
						},
					},
				],
			},


			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
				{
					loader:'file-loader',
					options: {
						outputPath: 'images',
					},
				}
				]
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/'),
					globOptions: {
						dot: true,
						gitignore: true,
						ignore: [ "**/icons", "**/images"],
					},
				},
			],
		}),
		new ServiceWorkerWebpackPlugin({
			entry: path.resolve(__dirname, 'src/scripts/sw.js'),
		}),
		new ImageminWebpackPlugin({
			plugins: [
				ImageminMozjpeg({
					quality: 35,
					progressive: true
				})
			]
		}),
		new FaviconsWebpackPlugin({
			logo: './src/public/icons/logo.svg',
			mode:'webapp',
			manifest: '/src/public/manifest.json',
			// devMode: 'light',
			// prefix: 'assets/',
			// favicons: {
			// 	appName: 'Foodlive Restaurant',
			// 	appShortName: 'Foodlive',
			// 	appDescription: 'Temukan Restaurant dengan mudah disekitar Anda',
			// 	developerName: 'Hanasa',
			// 	developerURL:'https://github.com/nnivxix',
			// 	dir: 'auto',
			// 	lang: 'en-US',
			// 	theme_color: '#f05945',
			// 	background_color: '#fff',
			// 	display: 'standalone',
			// 	appleStatusBarStyle: 'black-translucent',
			// 	orientation: 'portrait',
			// 	start_url: '/',
			// 	scope: '.',
			// 	version: '1.0',
			// 	logging: false,
			// 	icons:{
			// 		android: true,
			// 		appleIcon: true,
			// 		appleStartup: true,
			// 		coast: true,
			// 		// favicons: true,
			// 		firefox:true,
			// 		yandex: true,
			// 		windows:true,
			// 	}
			// }
		}),
	],
};
