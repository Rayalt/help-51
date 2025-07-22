import React from 'react';
import {Link} from "shared/ui/links";
import {NavbarFooterProps} from "../../model/types";
import {useTypograph} from "shared/lib/hooks";

const NavbarFooter = ({className, item}: NavbarFooterProps) => {
	return (
		<Link
			to={ item.path }
			className={ className }
			noUnderline
		>
			{ useTypograph(item.text) }
		</Link>
	);
};

export {NavbarFooter};