import { NavLink as NavLinkComponent } from 'react-router-dom';
import cn from 'classnames';
import classes from '../../link.module.scss';
import { NavLinkComponentProps } from '../../model/types';

const NavLink = ({
	to,
	base,
	noUnderline = false,
	className,
	onClick,
	children,
}: NavLinkComponentProps) => {
	const setClass = ({
		isActive
	}: { isActive: boolean }) => cn(
		className,
		classes.link,
		{
			[classes.link_base]: base,
			[classes.link_active]: isActive,
			[classes['link_no-underline']]: noUnderline,
		},
	);

	const clickHandler: NavLinkComponentProps['onClick'] = e => {
		if (onClick) onClick(e);
	};

	return (
		<NavLinkComponent
			to={to}
			end
			className={ setClass }
			onClick={ clickHandler }
		>
			{children}
		</NavLinkComponent>
	);
};

export { NavLink };
