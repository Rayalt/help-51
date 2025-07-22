import React, {useEffect, useState} from "react";
import {Svg} from "shared/ui";
import { CheckboxProps } from "../model/types";
import cn from "classnames";
import classes from '../checbox.module.scss';
import {useStateClass} from "shared/lib/hooks";

const Checkbox = ({
	checkboxId,
	checkboxName,
	checkboxValue,
	disabled,
	ariaLabel,
	attrAriaDescribedBy,
	checked,
	children,
}: CheckboxProps) => {

	// Подписка на value$ (предположим, что это Observable)
	// useEffect(() => {
	// 	const subscription = value$?.subscribe(setChecked);
	// 	return () => subscription?.unsubscribe();
	// }, [value$]);

	// const handleChange = (e) => {
	// 	const newChecked = e.target.checked;
	// 	setChecked(newChecked);
	// 	changeHandler?.(newChecked);
	// };

	return (
		<div 
			className={cn(classes.checkbox)}
		>
			<div
				className={cn(classes.checkbox__control)}
			>
				<input
					className={useStateClass(cn(classes.checkbox__box))}
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
