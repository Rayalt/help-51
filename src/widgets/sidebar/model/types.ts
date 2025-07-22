import { HTMLAttributes } from 'react';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
	onToggleMenu?: () => void;
}