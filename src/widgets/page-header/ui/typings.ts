import { HTMLProps } from 'react';

export interface PageHeaderProps extends HTMLProps<HTMLElement> {
	onToggleMenu?: () => void;
}
