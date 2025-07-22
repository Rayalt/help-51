import { HTMLProps, ReactNode } from 'react';
import { BtnProps, ButtonLinkProps } from 'shared/ui/buttons/model/types';
import { TypographyProps } from 'shared/ui';
import { SvgProps } from 'shared/ui/svg/model/types';

export type ContactsType = {
	path: string;
	text: ReactNode;
	icon: SvgProps['name'];
}

export type SocialsType = {
	icon: SvgProps['name'];
	to: ButtonLinkProps['to'];
}

export interface LinkSetProps extends HTMLProps<HTMLElement> {
	item?: ContactsType;
	view?: BtnProps['view'];
	color?: TypographyProps['color']
}

export interface SocialsProps extends HTMLProps<HTMLElement> {
	item?: SocialsType;
	view?: BtnProps['view'];
}

export interface ContactsProps extends HTMLProps<HTMLElement> {
	view?: BtnProps['view'];
	footer?: boolean;
	contactsSocialsList?: SocialsType[];
	contactsLinkList?: ContactsType[];
	color?: LinkSetProps['color'];
}
