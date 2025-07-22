import React from 'react';
import { CheckboxProps } from '../model/types';
import cn from 'classnames';
import classes from '../checbox.module.scss';
import { stateClass } from 'shared/lib/hooks';

const Checkbox = ({
	checkboxId,
	checkboxName,
	checkboxValue,
	checked,
	children,
}: CheckboxProps) => {
	return (
		<div 
			className={cn(classes.checkbox)}
		>
			<div
				className={cn(classes.checkbox__control)}
			>
				<input
					className={stateClass(cn(classes.checkbox__box))}
					type="checkbox"
					id={ checkboxId }
					name={ checkboxName }
					value={ checkboxValue }
					checked={ checked }
					// disabled={disabled || undefined}
					// tabIndex={tabindex}
					// onChange={handleChange}
					// onFocus={onFocus}
					// onBlur={onBlur}
					// aria-checked={checked}
					// aria-label={ariaLabel || undefined}
					// aria-describedby={attrAriaDescribedBy || undefined}
				/>
			</div>
			<label className="checkbox__label">
				{ children }
			</label>
		</div>
	);
};

export default Checkbox;
