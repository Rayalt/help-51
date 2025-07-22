import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollStopSchema } from '../types/scroll-stop-schema';

const initialState: ScrollStopSchema = {
	scroll: {},
};

export const scrollStopSlice = createSlice({
	name: 'scrollStop',
	initialState,
	reducers: {
		setScrollPosition: (
			state,
			{ payload }: PayloadAction<{ path: string; position: number; }>
		) => {
			state.scroll[payload.path] = payload.position;
		},
	},
});

export const { actions: scrollStopActions } = scrollStopSlice;
export const { reducer: scrollStopReducer } = scrollStopSlice;