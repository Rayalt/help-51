import React from 'react';
import cn from 'classnames';
import { NavbarFooter } from '../navbar-footer/navbar-footer';
import { NavLink } from 'shared/ui';
import classes from '../../page-footer.module.scss';
import { PageFooterProps } from '../../model/types';
import { Logo } from 'widgets/logo';
import { Contacts } from 'widgets';
import { contactsLinkList, contactsSocialsList } from 'shared/config/contacts';
import { RoutePath } from 'app/providers';
import { navbarFooterList, navbarFooterListSecond } from 'shared/config/navbar';

const PageFooter = ({ className }: PageFooterProps) => {
	const footerItemsList = navbarFooterList.map((item) => (
		<li
			key={ item.path }
			className={ cn(classes.footer__item) }
		>
			<NavbarFooter
				item={ item }
				className={ cn(classes.footer__link) }
			/>
		</li>
	));
	const footerItemsListSecond = navbarFooterListSecond.map((item) => (
		<li
			key={ item.path }
			className={ cn(classes.footer__item) }
		>
			<NavbarFooter
				item={ item }
				className={ cn(classes.footer__link) }
			/>
		</li>
	));
	
	return (
		<div
			className={cn(classes.footer, className)}
		>
			<div
				className={cn(classes.container)}
			>
				<div
					className={cn(classes.footer__grid)}
				>
					<NavLink
						to={ RoutePath.main }
						className={ cn(classes.footer__logo) }
						base
					>
						<Logo />
					</NavLink>
					<div className={cn(classes.footer__info)}>
						<p
							className={cn(classes.footer__text)}
						>
							ИНН&nbsp;&mdash; 5190099964
						</p>
						<p
							className={cn(classes.footer__text)}
						>
							ОГРН&nbsp;&mdash; 1245100003170
						</p>
						<p
							className={cn(classes.footer__copyright)}
						>
							2025&nbsp;&copy; Благотворительный фонд помощи &laquo;Вызов&raquo;
						</p>
					</div>
					
					<div
						className={cn(classes.footer__linkset)}
					>
						<ul
							className={cn(classes.footer__list)}
						>
							{ footerItemsList }
						</ul>
						<ul
							className={cn(classes.footer__list)}
						>
							{ footerItemsListSecond }
						</ul>
					</div>
					<Contacts 
						footer
						className={cn(classes.footer__contacts)}
						contactsSocialsList={ contactsSocialsList }
						contactsLinkList={ contactsLinkList }
					/>
				</div>
			</div>
		</div>
	);
};

export { PageFooter };