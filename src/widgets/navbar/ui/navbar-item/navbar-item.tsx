import { NavLink } from 'shared/ui/links';
import { NavbarItemProps } from '../../model/types';
import { typograph } from 'shared/lib/hooks';

const NavbarItem = ({ className, onClick, item }: NavbarItemProps) => {
	return (
		<NavLink
			to={ item.path }
			className={ className }
			onClick={ onClick }
			noUnderline={ true }
		>
			{ typograph(item.text) }
		</NavLink>
	);
};

export { NavbarItem };