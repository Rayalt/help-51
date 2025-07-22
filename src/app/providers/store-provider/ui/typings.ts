import { HTMLProps } from 'react';
import { StateSchema } from './../config/state-schema';
import { ReducersMapObject } from '@reduxjs/toolkit';

export interface StoreProviderProps extends HTMLProps<HTMLElement> {
	initialState?: Partial<StateSchema>;
	asyncReducers?: Partial<ReducersMapObject<StateSchema>>;
}