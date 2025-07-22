import { BuildOptions } from '../types/config';

export const buildSvgLoader = () => ({
	test: /\.svg$/i,
	oneOf: [
		{
			issuer: /\.[jt]sx?$/,
			resourceQuery: /react/,
			use: ['@svgr/webpack'],
		},
		{
			issuer: /\.[jt]sx?$/,
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						exportType: 'named',
						titleProp: true,
						ref: true,
						svgo: true,
						svgoConfig: {
							plugins: [
								{
									name: 'removeDimensions',
									active: true,
								},
								{
									name: 'removeViewBox',
									active: false,
								},
							],
						},
					},
				},
			],
		},
		{
			type: 'asset/resource',
		},
	],
});

