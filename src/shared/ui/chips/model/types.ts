
import {InputHTMLAttributes, ReactNode} from "react";
import {SvgProps} from "shared/ui/svg/model/types";

export type ChipItem = {
	id: string;
	value: string;
	label?: ReactNode;
	name?: SvgProps['name'];
	icon?: string;
	disabled?: boolean;
}

export interface ChipsProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	chips: ChipItem[];
	type?: 'radio' | 'checkbox';
	checkedValue?: string;
	// wrapperClass?: string;
	// labelClass?: string;
	// inputClass?: string;
	// contentClass?: string;
	// iconClass?: string;
	inputName?: string;
	disabled?: boolean;
	size?: 'sm' | 'md' | 'lg';
	name?: SvgProps['name'];
}