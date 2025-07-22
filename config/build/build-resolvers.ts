import {BuildOptions} from "./types/config";
import path from "path";

export function buildResolvers (options: BuildOptions) {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [
			options.paths.src,
			'node_modules'
		],
		mainFiles:['index'],
		alias: {
			'@sprites': path.resolve(__dirname, 'src/app/sprites'),
		},
	};
}