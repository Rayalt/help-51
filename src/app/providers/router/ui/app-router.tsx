import React, {memo, Suspense, useCallback} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'widgets/loader';
import {AppRoutesProps} from "app/providers/router/config/typings";
import {routeConfig} from "app/providers/router/config/route-config";

const AppRouter = memo(() => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const suspense = (
			<Suspense fallback={<Loader />}>
				{ route.element }
			</Suspense>
		);
		return (
			<Route
				key={ route.path }
				path={ route.path }
				element={ suspense }
			/>
		)
	}, [])
	
	return (
		<Routes>
			{ Object.values(routeConfig).map(renderWithWrapper) }
		</Routes>
	);
});

export { AppRouter };