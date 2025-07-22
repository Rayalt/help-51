import {HTMLProps} from "react";
import {StateSchemaKey} from "app/providers/store-provider";
import {Reducer} from "@reduxjs/toolkit";

export interface DynamicModuleLoaderProps extends HTMLProps<HTMLElement> {
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export type ReducersListEntry = [StateSchemaKey, Reducer]; 

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer;
}