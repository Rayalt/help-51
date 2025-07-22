import { Dropdown } from 'shared/ui';
import { ClientsSortSelectorProps } from 'features/clients-sort/ui/clients-sort-selector/typings';
import { Programs } from 'shared/config/programs';

const ClientsSortSelector = ({
	filter,
	onChangeSortField,
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
};

export { ClientsSortSelector };