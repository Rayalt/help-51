
export const buildAssetsLoader = () => {
	return {
		test: /\.(woff2?|eot|ttf|otf)$/i,
		type: 'asset/resource',
		generator: {
			filename: 'fonts/[name][ext]',
		},
	};
};