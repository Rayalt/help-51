import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins({ paths, isDev, apiUrl, project }: BuildOptions): (webpack.WebpackPluginInstance | BundleAnalyzerPlugin)[] {
	const plugins = [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
			__API__: JSON.stringify(apiUrl),
			__PROJECT__: JSON.stringify(project),
		}),
	];

	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin())
		plugins.push(new BundleAnalyzerPlugin({
			openAnalyzer: false,
		}));
	}

	return plugins;
}