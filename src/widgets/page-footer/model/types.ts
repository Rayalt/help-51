import {HTMLProps} from "react";

export interface NavbarFooterType {
	path: string;
	text: string;
}

export interface NavbarFooterProps extends HTMLProps<HTMLElement> {
	item: NavbarFooterType;
}

export interface PageFooterProps extends HTMLProps<HTMLElement> {}
