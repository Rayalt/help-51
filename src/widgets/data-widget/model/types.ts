import { HTMLAttributes, ReactNode } from 'react';
import { TypographyProps } from 'shared/ui';

export type DataWidgetType = {
	title?: string;
	description?: string;
	action?: ReactNode;
};

export interface DataWidgetProps extends HTMLAttributes<HTMLElement>{
	widgetData?: DataWidgetType;
	view?: 'interactive' | 'static';
	color?: 'primary' | 'secondary';
	shadowSize?: 'lg' | 'md';
	base?: boolean;
	colorTitle?: TypographyProps['color'];
	viewTitle?: TypographyProps['view'];
	colorDescription?: TypographyProps['color'];
	viewDescription?: TypographyProps['view'];
	tag?: TypographyProps['tag'];
	link?: boolean;
}