import { HTMLProps } from 'react';

type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ColSpan = number | string;
type RowSpan = number | string;

export interface RowProps extends HTMLProps<HTMLElement> {
	rowClassName?: string;
	gridCols?: Partial<Record<Breakpoints, ColSpan>>;
	gapY?: string;
	gapX?: string;
	gap?: string;
	rowCols?: Partial<Record<Breakpoints, RowSpan>>;
}
