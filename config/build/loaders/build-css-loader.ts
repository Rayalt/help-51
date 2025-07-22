import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
	return {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			{
				// Translates CSS into CommonJS
				loader: 'css-loader',
				options: {
					modules: {
						namedExport: false,
						exportLocalsConvention: 'dashes',
						auto: (resPath: string) => Boolean(resPath.includes('.module.')),
						localIdentName: isDev
							// ? '[path][name]__[local]--[hash:base64:8]'
							? '[path][name]_[local]' 
							: '[local]',
					},
				},
			},
			// Compiles Sass to CSS
			{
				loader: 'sass-loader',
				options: {
					sassOptions: {
						includePaths: ['./src']
					}
				},
			},
		],
	};
};
export const buildGlobalCssLoader = (isDev: boolean) => ({
	test: /\.css$/i,
	use: [
		isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
		'css-loader',
	],
});
