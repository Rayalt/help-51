import cn from 'classnames';

import classes from '../../fields.module.scss';

import React, { forwardRef, useCallback } from 'react';
import { InputProps } from '../../model/types';
import { stateClass } from 'shared/lib/hooks';

const Input = forwardRef<HTMLInputElement, InputProps>(({
	className,
	placeholder,
	view,
	type = 'text',
	autoComplete = 'off',
	autoFocus,
	onChange,
	onBlur,
	onFocus,
	readOnly,
	pattern,
	inputMode,
	prefix,
	...props
}, ref) => {
	// const changeHandler: InputProps['onChange'] = e => {
	// 	if (onChange) {
	// 		onChange(e);
	// 	}
	// };
	
	const changeHandler = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange(event, {
					value: event.target.value
				});
			}

			// if (uncontrolled) {
			// 	setStateValue(event.target.value);
			// }
		},
		[onChange],
	);


	const blurHandler: InputProps['onBlur'] = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
		if (onBlur) {
			onBlur(e);
		}
	}, [onBlur]);

	const focusHandler: InputProps['onFocus'] = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
		if (onFocus) {
			onFocus(e);
		}
	}, [onFocus]);
	
	return (
		<div
			className={stateClass(cn(classes.field, {
				[classes.field + '_' + view]: view && !!view,
				[classes.field_phone]: prefix,
				[classes.field + '_' + 'readonly']: readOnly,
			}, className))}
		>
			<input
				ref={ ref }
				className={cn(classes.field__control)}
				placeholder={placeholder}
				autoComplete={autoComplete}
				autoFocus={autoFocus}
				disabled={view === 'disabled'}
				onChange={changeHandler}
				onBlur={blurHandler}
				onFocus={focusHandler}
				readOnly={readOnly}
				type={type}
				pattern={pattern}
				inputMode={inputMode}
				{...props}
			/>
			{ prefix && (
				<span className={classes.field__prefix}>{prefix}</span>
			) }
		</div>
	);
});

Input.displayName = 'Input';

export { Input };