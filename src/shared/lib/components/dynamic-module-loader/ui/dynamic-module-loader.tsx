import { Fragment, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/store-provider';
import { DynamicModuleLoaderProps } from 'shared/lib/components/dynamic-module-loader';

const DynamicModuleLoader = ({
	children,
	reducers,
	removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	// работает 1 раз при монтировании компонента
	useEffect(() => {
		const mountedReducers = store.reducerManager.getMountedReducers();
		
		Object.entries(reducers).forEach(([name, reducer]) => {
			const isMounted = mountedReducers[name as StateSchemaKey];
			
			if (!isMounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer);
				dispatch({ type: `@INIT ${name} reducer` })
			}
		})
		
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					dispatch({ type: `@DESTROY ${name} reducer` })
				})
			}
		}
	}, [dispatch, store]);
	
	return (
		<Fragment>
			{children}
		</Fragment>
	);
};

export { DynamicModuleLoader };