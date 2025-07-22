import React, { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import { MaskedInputProps } from '../../model/types';
import { Input } from 'shared/ui';

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(({
	mask,
	prefix,
	value,
	onChange,
	view,
	placeholder,
	inputProps,
	...props
}, ref) => {
	return (
		<InputMask
			mask={mask}
			value={value}
			onChange={onChange}
			disabled={view === 'disabled'}
		>
			{ () =>
				<Input
					{...inputProps}
					prefix={prefix}
					ref={ref}
					view={view}
					placeholder={placeholder}
				/>
			}
		</InputMask>
	);
});

MaskedInput.displayName = 'Input';

export { MaskedInput };
