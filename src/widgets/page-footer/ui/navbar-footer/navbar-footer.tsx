import React from 'react';
import { Link } from 'shared/ui/links';
import { NavbarFooterProps } from '../../model/types';
import { typograph } from 'shared/lib/hooks';

const NavbarFooter = ({ className, item }: NavbarFooterProps) => {
	return (
		<Link
			to={ item.path }
			className={ className }
			noUnderline
		>
			{ typograph(item.text) }
		</Link>
	);
};

export { NavbarFooter };