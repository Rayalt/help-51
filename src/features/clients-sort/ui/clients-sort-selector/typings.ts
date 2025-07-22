import {SortOrder} from "shared/types";
import {ProgramTypes} from "shared/config/programs";

export interface ClientsSortSelectorProps {
	filter: ProgramTypes;
	order?: SortOrder;
	onChangeOrder?: (newOrder: SortOrder) => void;
	onChangeSortField: (newSortField: ProgramTypes) => void;
}