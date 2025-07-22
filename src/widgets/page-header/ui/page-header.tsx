import React from 'react';
import cn from 'classnames';
import classes from '../page-header.module.scss';
import {PageHeaderProps} from "./typings";
import {Button, ButtonLink} from "shared/ui/buttons";
import {useLocation, useNavigate} from 'react-router-dom';
import {useAppDispatch} from "shared/lib/hooks/use-app-dispatch/use-app-dispatch";
import {Navbar} from "widgets/navbar";
import {RoutePath} from "app/providers/router";
import {Logo} from "widgets/logo";
import {Link, NavLink} from "shared/ui/links";
import {useStateClass} from "shared/lib/hooks";
import {MenuBtn} from "shared/ui";
import {navbarItemsList} from "shared/config/navbar";

const PageHeader = ({onToggleMenu, className}: PageHeaderProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();

	const collapseMenu = () => {
		if (onToggleMenu) {
			onToggleMenu();
		}
		// dispatch(sidebarActions.change());
	}
	
	// const sidebarItemsList = useSelector(getSidebarItem);
	// const sidebarCollapse = useSelector(getSidebarCollapse);

	return (
		<header className={cn(classes.header, className)}>
			<div
				className={cn(classes.container)}
			>
				<div
					className={cn(classes.header__inner)}
				>
					<div
						className={cn(classes.header__row)}
					>
						<NavLink
							to={ RoutePath.main }
							className={ cn(classes.header__logo) }
							base
						>
							<Logo/>
						</NavLink>
						<div
							className={cn(classes.header__actions)}
						>
							<ButtonLink
								className={cn(classes.header__btn)}
								view='primary'
								to={ RoutePath.want_to_help }
							>
								Помочь
							</ButtonLink>
							<ButtonLink
								className={cn(classes.header__btn, classes.header__btn_secondary)}
								view='secondary'
								to={ RoutePath.need_help }
							>
								Нужна помощь
							</ButtonLink>
						</div>
						<div
							className={cn(classes.header__menu)}
						>
							<MenuBtn
								onClick={ collapseMenu }
							/>
						</div>
					</div>
					<div
						className={cn(classes.header__row)}
					>
						<Navbar
							className={cn(classes.header__navbar)}
							itemsList={ navbarItemsList }
						/>
						
						<ButtonLink 
							view='secondary'
							size='sm'
							to='tel:+79212849144'
							className={cn(classes.header__phone)}
						>
							+7 (921) 284-91-44
						</ButtonLink>
					</div>
				</div>
			</div>
		</header>
	);
};

export { PageHeader };