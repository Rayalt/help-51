import {HTMLProps, ReactNode} from "react";
import {TypographyProps} from "shared/ui";

export type TabEvent<T extends HTMLElement> = Event & {
	target: T;
}

export interface TabItem<T = string> extends Omit<HTMLProps<HTMLElement>, 'value' | 'title'> {
	title: T;
	subtitle?: string;
	value: T;
}

export interface TabsProps<T = string> extends Omit<HTMLProps<HTMLElement>, 'value'> {
	tabs: TabItem<T>[];
	value: T;
	view?: 'primary' | 'secondary';
	onTabClick: (tab: TabItem<T>) => void;
	contentView?: 'card' | 'base';
}

export interface TabContentProps extends Omit<HTMLProps<HTMLElement>, 'title'> {
	active: boolean;
	title?: TypographyProps;
	description?: TypographyProps;
	actions?: ReactNode;
	view?: 'table';
}

export interface TabContentRowProps extends Omit<HTMLProps<HTMLElement>, 'title' | 'action'> {
	title?: TypographyProps;
	description?: TypographyProps;
	img?: ReactNode;
	action?: ReactNode;
}