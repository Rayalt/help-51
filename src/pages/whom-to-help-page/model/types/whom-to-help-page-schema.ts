import {EntityState} from "@reduxjs/toolkit";
import {SortOrder} from "shared/types";
import {ClientsType} from "shared/config/clients";
import {ProgramTypes} from "shared/config/programs";

export interface WhomToHelpPageSchema extends EntityState<ClientsType, string> {
	isLoading?: boolean;
	error?: string;
	
	// pagination
	page: number;
	limit: number;
	hasMore: boolean;
	
	// filters
	order: SortOrder;
	filter: ProgramTypes;
	search: string;
	
	_initialised: boolean;
}