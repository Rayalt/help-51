import { BuildOptions } from '../types/config';

export const buildBabelLoader = (options?: BuildOptions) => {
	return {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				'plugins': [
					[
						'i18next-extract',
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true
						}
					],
				]
			}
		}
	};
};