import React, {ChangeEvent, HTMLProps, InputHTMLAttributes, Ref, TextareaHTMLAttributes} from 'react';
import {TabItem, TypographyProps} from "shared/ui";


// InputProps

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	labelText?: string;
	addonText?: string;
	placeholder: string;
	view?: 'error' | 'secondary' | 'disabled' | undefined;
	onChange?: (event: ChangeEvent<HTMLInputElement>, payload: { value: string }) => void;
	// label?: boolean;
}

// MaskedInputProps
export interface MaskedInputProps extends InputProps {
	mask: string;
	prefix?: string;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	inputProps?: Omit<InputProps, 'placeholder'>;
	placeholder: InputProps['placeholder'];
}


// TextareaProps
export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
	labelText?: string;
	addonText?: string;
	placeholder: string;
	view?: 'error' | 'secondary' | 'disabled' | undefined;
	onChange?: (event: ChangeEvent<HTMLTextAreaElement>, payload: { value: string }) => void;
	// label?: boolean;
}

// Autocomplete

export interface AutocompleteProps extends InputProps {
	options?: AutocompleteOptions[],
	value?: string;
}

export type AutocompleteOptions = {
	value?: string;
	content?: string;
};

// Dropdown

export interface DropdownOption<T = string> {
	id: string;
	value: T;
	title?: string;
	content?: string | string[];
}

export interface DropdownOptionTitle<T = string> {
	title: T;
	titleClass?: string;
}

export interface DropdownProps<T = string> extends Omit<HTMLProps<HTMLElement>, 'value' | 'onChange'> {
	options: DropdownOption<T>[];
	optionsTitle?: DropdownOptionTitle[];
	value?: T;
	placeholder?: string;
	readOnly?: boolean;
	onChange?: (value: T) => void;
	view?: 'secondary' | 'disabled' | undefined;
}


