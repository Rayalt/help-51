import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
	checkboxId: string;
	checkboxName: string;
	checkboxValue: string;
	disabled?: boolean;
	checked?: boolean;
	ariaLabel?: string;
	attrAriaDescribedBy?: string;
}