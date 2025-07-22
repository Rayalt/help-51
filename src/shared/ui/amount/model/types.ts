import { HTMLAttributes } from 'react';
import { TypographyProps } from 'shared/ui';

export enum Symbols {
	RUB = '₽',
	PERCENT = '%',
}

export interface AmountProps extends HTMLAttributes<HTMLElement> {
	tag?: TypographyProps['tag'];
	symbol?: Symbols; 
	space?: boolean;
	value?: number;
}