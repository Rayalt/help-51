import {configureStore, Reducer, ReducersMapObject, UnknownAction} from '@reduxjs/toolkit';
import {StateSchema, ThunkExtraArgs} from "app/providers/store-provider";
import {counterReducer} from "entities/counter";
import {createReducerManager} from "app/providers/store-provider/config/reducer-manager";
import {$api} from "shared/api/api";
import {scrollStopReducer} from "features/scroll-stop";

export function createReduxStore(
	initialState?: StateSchema, 
	asyncReducers?: ReducersMapObject<StateSchema>,
	// navigate?: (to: To, options?: NavigateOptions) => void,
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		scrollStop: scrollStopReducer,
	};
	
	// login: loginReducer,
	
	const reducerManager = createReducerManager(rootReducers);
	
	const extraArg: ThunkExtraArgs = {
		api: $api,
		// navigate,
	};

	const store =  configureStore({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: extraArg,
			}
		}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;
	
	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];