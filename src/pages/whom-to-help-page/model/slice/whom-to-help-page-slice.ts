import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StateSchema} from "app/providers/store-provider";
import {SortOrder} from "shared/types";
import {Clients, ClientsType} from "shared/config/clients";
import {ProgramTypes} from "shared/config/programs";

const whomToHelpPageAdapter = createEntityAdapter<ClientsType>({});

const initialState = whomToHelpPageAdapter.getInitialState({
	filter: ProgramTypes.ALL,
	order: 'asc',
	sort: 'ALL',
	search: '',
});

const whomToHelpPageSlice = createSlice({
	name: 'clients',
	initialState: whomToHelpPageAdapter.setAll(initialState, Clients), // загрузка статики
	reducers: {
		// setSortField(state, action: PayloadAction<ClientsSortField>) {
		// 	state.sort = action.payload;
		// },
		setFilter(state, action: PayloadAction<ProgramTypes>) {
			state.filter = action.payload;
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
	},
});

export const { actions: whomToHelpPageAction } = whomToHelpPageSlice;
export const { reducer: whomToHelpPageReducer } = whomToHelpPageSlice;

// Выносим селекторы отдельно, чтобы они не создавались заново
export const whomToHelpPageSelectors = whomToHelpPageAdapter.getSelectors<StateSchema>(
	(state) => state.whomToHelpFilter || whomToHelpPageAdapter.getInitialState(),
);