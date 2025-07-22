export const buildImgLoader = () => {
	return {
		test: /\.(png|jpe?g|gif|svg)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[hash].[ext]',
					outputPath: 'images',
				},
			},
		],
	};
};