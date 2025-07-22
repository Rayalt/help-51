import cn from 'classnames';

import classes from '../../fields.module.scss';

import React, { forwardRef, useCallback } from 'react';
import { TextareaProps } from '../../model/types';
import { stateClass } from 'shared/lib/hooks';

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
	className,
	placeholder,
	view,
	autoComplete = 'off',
	autoFocus,
	onChange,
	onBlur,
	onFocus,
	readOnly,
	...props
}, ref) => {
	// const changeHandler: InputProps['onChange'] = e => {
	// 	if (onChange) {
	// 		onChange(e);
	// 	}
	// };

	const changeHandler = useCallback(
		(event: React.ChangeEvent<HTMLTextAreaElement>) => {
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


	const blurHandler: TextareaProps['onBlur'] = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
		if (onBlur) {
			onBlur(e);
		}
	}, [onBlur]);

	const focusHandler: TextareaProps['onFocus'] = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
		if (onFocus) {
			onFocus(e);
		}
	}, [onFocus]);

	return (
		<div
			className={stateClass(cn(classes.field, classes.field_textarea, {
				[classes.field + '_' + view]: view,
				[classes.field + '_' + 'readonly']: readOnly,
			}, className))}
		>
			<textarea
				ref={ref}
				className={cn(classes.field__control)}
				placeholder={placeholder}
				autoComplete={autoComplete}
				autoFocus={autoFocus}
				disabled={view === 'disabled'}
				onChange={changeHandler}
				onBlur={blurHandler}
				onFocus={focusHandler}
				readOnly={readOnly}
				{...props}
			/>
		</div>
	);
});

Textarea.displayName = 'Textarea';

export { Textarea };