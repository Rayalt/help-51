import { BuildOptions } from '../types/config';

export const buildTypescriptLoader = (options?: BuildOptions) => {
	return {
		test: /\.tsx?$/,
		exclude: /node_modules/,
		use: 'ts-loader',
	};
};