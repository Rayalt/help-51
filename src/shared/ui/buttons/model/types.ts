import { ButtonHTMLAttributes, HTMLProps } from 'react';
import { LinkProps } from 'react-router-dom';
import { TabItem } from 'shared/ui';
import { SvgProps } from 'shared/ui/svg/model/types';

export interface BtnProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	title?: string;
	size?: 'sm' | 'md';
	view?: 'primary' | 'secondary' | 'primary-light' | 'secondary-light' | 'danger' | 'ghost';
	base?: boolean;
	shape?: 'link' | 'btn';
	square?: boolean;
	circle?: boolean;
	addonLeft?: SvgProps['name'];
	addonRight?: SvgProps['name'];
	addonRightClass?: string;
	addonLeftView?: SvgProps['view'];
	addonRightView?: SvgProps['view'];
	disabled?: boolean;
	btnTextClass?: string;
	iconMobile?: boolean;
}

export interface ButtonLinkProps extends LinkProps {
	view?: BtnProps['view'];
	base?: BtnProps['base'];
	shape?: BtnProps['shape'];
	size?: BtnProps['size'];
	addonLeft?: BtnProps['addonLeft'];
	addonRight?: BtnProps['addonRight'];
	addonRightClass?: BtnProps['addonRightClass'];
	addonLeftView?: SvgProps['view'];
	addonRightView?: SvgProps['view'];
	square?: BtnProps['square'];
	circle?: BtnProps['circle'];
	btnTextClass?: BtnProps['btnTextClass'];
	iconMobile?: BtnProps['iconMobile'];
}

export interface ButtonTabProps extends HTMLProps<HTMLElement> {
	item: TabItem;
	isActive: boolean;
	view?: 'primary' | 'secondary';
	name?: SvgProps['name'];
}
