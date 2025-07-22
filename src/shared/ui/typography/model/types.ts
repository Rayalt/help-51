import { HTMLProps } from 'react';

export interface TypographyProps extends HTMLProps<HTMLElement> {
	view?:
		'page-title'
		| 'section-title'
		| 'title'
		| 'subtitle'
		| 'text-xxs'
		| 'text-sm'
		| 'text-md'
		| 'text-lg'
	;
	color?: 
		'none' 
		| 'primary' 
		| 'inverse-primary' 
		| 'accent-primary' 
		| 'accent-secondary' 
		| 'accent-secondary-light' 
		| 'disabled' 
		| 'error'
	;
	tag?: 
		'h1'
		| 'h2'
		| 'h3'
		| 'p'
		| 'span'
		| 'div'
	;
}

export interface HintProps extends HTMLProps<HTMLElement> {
	color?: 
		'primary'
		| 'disabled'
		| 'error'
	;
	typographyProps?: Omit<TypographyProps, 'children'>;
}