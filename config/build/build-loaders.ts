import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader, buildGlobalCssLoader } from './loaders/build-css-loader';
import { buildTypescriptLoader } from './loaders/build-typescript-loader';
import { buildBabelLoader } from './loaders/build-babel-loader';
import { buildSvgLoader } from './loaders/build-svg-loader';
import { buildImgLoader } from './loaders/build-img-loader';
import { buildAssetsLoader } from './loaders/build-assets-loader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
	const cssLoader = buildCssLoader(isDev);
	const cssLoaderGlobal = buildGlobalCssLoader(isDev);

	// babel-loader нужен если пишем на нативном js
	const typescriptLoader = buildTypescriptLoader();

	const babelLoader = buildBabelLoader();
	
	const svgLoader = buildSvgLoader();
	const imgLoader = buildImgLoader();
	const assetsLoader = buildAssetsLoader();

	return [
		svgLoader,
		imgLoader,
		// assetsLoader,
		babelLoader,
		typescriptLoader,
		cssLoader,
		cssLoaderGlobal,
	];
}