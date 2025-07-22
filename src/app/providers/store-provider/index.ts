import {AppDispatch, createReduxStore} from './config/store-config';
import {StoreProvider} from './ui/store-provider';
import {
	StateSchema,
	StateSchemaKey,
	ReduxStoreWithManager,
	ReducerManager,
	ThunkExtraArgs,
	ThunkConfig,
	MountedReducersType,
} from './config/state-schema';

export {
	StoreProvider,
	createReduxStore,
	StateSchema,
	StateSchemaKey,
	MountedReducersType,
	ReduxStoreWithManager,
	ReducerManager,
	AppDispatch,
	ThunkExtraArgs,
	ThunkConfig,
};