import {Link, NavLink} from "shared/ui/links";
import {NavbarItemProps} from "../../model/types";
import {useTypograph} from "shared/lib/hooks";
import {Fragment} from "react";

const NavbarItem = ({className, onClick, item}: NavbarItemProps) => {
	return (
		<NavLink
			to={ item.path }
			className={ className }
			onClick={ onClick }
			noUnderline={ true }
		>
			{ useTypograph(item.text) }
		</NavLink>
	);
};

export { NavbarItem };