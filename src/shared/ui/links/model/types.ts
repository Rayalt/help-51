import { LinkProps, NavLinkProps } from 'react-router-dom';

export interface LinkComponentProps extends LinkProps {
	base?: boolean;
	noUnderline?: boolean;
}

export interface NavLinkComponentProps extends NavLinkProps {
	view?: 'primary';
	base?: boolean;
	noUnderline?: boolean;
	link?: boolean;
}