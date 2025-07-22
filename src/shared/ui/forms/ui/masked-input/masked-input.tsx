import React, {forwardRef} from 'react';
import InputMask from 'react-input-mask';
import cn from 'classnames';
import classes from '../../fields.module.scss';
import {MaskedInputProps} from '../../model/types';
import {Input} from 'shared/ui';

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(({
	mask,
	prefix,
	className,
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
			{...props}
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

export {MaskedInput};
