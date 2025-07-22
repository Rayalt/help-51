import React from 'react';
import cn from 'classnames';
import classes from '../../navbar.module.scss';
import { NavbarItem } from '../navbar-item/navbar-item';
import { NavbarProps } from '../../model/types';

const Navbar = ({ view, itemsList, className, onClick }: NavbarProps) => {
	return (
		<nav
			className={cn(
				classes.navbar, 
				className,
				{ [classes.navbar_portrait]: view === 'portrait' }	
			)}
		>
			<ul className={cn(classes.navbar__list)}>
				{
					itemsList?.map((item) => (
						<li
							key={ item.id }
							className={ cn(classes.navbar__item) }
						>
							<NavbarItem
								onClick={ onClick }
								item={ item }
								className={ cn(classes.navbar__link) }
							/>
						</li>
					))
				}
			</ul>
		</nav>
	);
};

export { Navbar };