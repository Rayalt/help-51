import { HTMLProps } from 'react';
import { NavbarItemType } from 'shared/config/navbar';

export interface NavbarItemProps extends HTMLProps<HTMLElement> {
	item: NavbarItemType;
}

export interface NavbarProps extends HTMLProps<HTMLElement> {
	view?: 'landscape' | 'portrait';
	itemsList?: NavbarItemType[];
}
