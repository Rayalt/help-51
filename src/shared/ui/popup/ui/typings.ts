import { HTMLProps, ReactNode } from "react";

export interface PopupProps extends HTMLProps<HTMLElement> {
	isOpen: boolean;
	title?: string;
	footer?: ReactNode;
	view?: 'right' | 'left';
	closeOutside?: boolean;
}