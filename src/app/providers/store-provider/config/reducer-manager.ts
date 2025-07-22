import {UnknownAction, combineReducers, ReducersMapObject, Reducer} from "@reduxjs/toolkit";
import {ReducerManager, StateSchema, StateSchemaKey, MountedReducersType} from "app/providers/store-provider";

const createReducerManager = (initialReducers: ReducersMapObject<StateSchema>): ReducerManager => {
	const reducers = { ...initialReducers };
	let combinedReducer = combineReducers(reducers);
	
	let keysToRemove: StateSchemaKey[] = [];
	const mountedReducers: MountedReducersType = {};

	return {
		getReducerMap: () =>  reducers,
		getMountedReducers: () => mountedReducers,
		// todo any
		reduce: (state: StateSchema | any, action: UnknownAction) => {
			if (keysToRemove.length > 0) {
				state = { ...state };
				for (let key of keysToRemove) {
					delete state[key];
				}
				keysToRemove = [];
			}

			return combinedReducer(state, action);
		},
		add: (key: StateSchemaKey, reducer: Reducer) => {
			if (!key || reducers[key]) {
				return;
			}
	
			reducers[key] = reducer;
			mountedReducers[key] = true;
	
			combinedReducer = combineReducers(reducers); // 
		},
		remove: (key: StateSchemaKey) => {
			if (!key || !reducers[key]) {
				return;
			}

			delete reducers[key];
			keysToRemove.push(key);
			mountedReducers[key] = false;
			combinedReducer = combineReducers(reducers);
		}
	}
};

export { createReducerManager };