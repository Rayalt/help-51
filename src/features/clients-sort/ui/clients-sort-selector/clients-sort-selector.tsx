import {memo, useMemo} from "react";
import {Dropdown, DropdownOption} from "shared/ui";
import {ClientsSortSelectorProps} from "features/clients-sort/ui/clients-sort-selector/typings";
import {Programs, ProgramTypes} from "shared/config/programs";

const ClientsSortSelector = memo(({
	filter,
	order,
	onChangeSortField,
	onChangeOrder,
}: ClientsSortSelectorProps) => {
	return (
		<div>
			<Dropdown
				options={ Programs }
				value={filter}
				view='secondary'
				onChange={ onChangeSortField }
			/>
		</div>
	);
});

export { ClientsSortSelector };