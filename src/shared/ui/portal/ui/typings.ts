import { HTMLProps } from 'react';

export interface PortalProps extends HTMLProps<HTMLElement> {
	element?: HTMLElement;
}