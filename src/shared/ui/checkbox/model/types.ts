import {InputHTMLAttributes} from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	checkboxId: string;
	checkboxName: string;
	checkboxValue: string;
	disabled?: boolean;
	checked?: boolean;
	// tabindex,
	// changeHandler,
	// onFocus,
	// onBlur,
	ariaLabel?: string;
	attrAriaDescribedBy?: string;
}