import {CounterSchema} from "entities/counter";
import {EnhancedStore, Reducer, ReducersMapObject, StateFromReducersMapObject, UnknownAction} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {ScrollStopSchema} from "features/scroll-stop/model/types/scroll-stop-schema";
import {WhomToHelpPageSchema} from "pages/whom-to-help-page/model/types/whom-to-help-page-schema";

export interface StateSchema {
	counter: CounterSchema;
	scrollStop: ScrollStopSchema;
	
	// Ассинхронные редюсеры
	whomToHelpFilter?: WhomToHelpPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducersType = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: UnknownAction) => any;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	getMountedReducers: () => MountedReducersType;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager; 
}

export interface ThunkExtraArgs {
	api: AxiosInstance;
	// navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArgs;
	state: StateSchema;
}
