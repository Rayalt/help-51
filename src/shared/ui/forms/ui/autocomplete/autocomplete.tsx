import { useMemo } from 'react';
import { AutocompleteProps } from '../../model/types';
import { Input } from '../input/input';

const Autocomplete = ({
	placeholder,
	options,
	onChange,
}: AutocompleteProps) => {
	const onChangeHandler: AutocompleteProps['onChange'] = ((event, payload) => {
		if (onChange) {
			onChange(event, payload);
		}
	})
	
	const optionsList = useMemo(() => {
		return options?.map((option) => (
			<li 
				key={ option.value }
			>
				{ option.content }
			</li>
		))
	}, [options]);
	
	return (
		<div>
			<Input 
				placeholder={placeholder}
				onChange={ onChangeHandler }
			/>

			{optionsList?.length &&
				<ul>
					{ optionsList }
				</ul>
			}
		</div>
	);
};

export { Autocomplete };