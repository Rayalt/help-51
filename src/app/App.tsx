import 'app/markup/scss/styles-common.scss';

import React, { Suspense, useEffect, useState } from 'react';
import { AppRouter } from 'app/providers/router';
import cn from 'classnames';
import classes from './app.module.scss';
import { PageHeader } from 'widgets/page-header';
import { PageFooter } from 'widgets/page-footer';
import { ScrollHashProvider } from 'app/providers/scroll-hash-provider';
import { Sidebar } from 'widgets';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const onToggleMenu = () => {
		console.log(isOpen)
		setIsOpen(prev => !prev);
	}
	
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		
		return () => {
			document.body.style.overflow = '';
		};
	}, [isOpen]);
	
	useEffect(() => {
		const mediaQuery = window.matchMedia('(min-width: 1024px)');
	
		const handleResize = () => {
			if (mediaQuery.matches) {
				document.body.classList.remove('ov-hidden');
				setIsOpen(false);
			}
		};
	
		mediaQuery.addEventListener('change', handleResize);
		handleResize();
	
		return () => {
			mediaQuery.removeEventListener('change', handleResize);
		};
	}, []);
	
	
	return (
		<Suspense fallback=''>
			<ScrollHashProvider />
			
			<div 
				className={cn(
					classes.page,
					{
						[classes['page_menu-open']]: isOpen,
					},
				)}
			>
				<Sidebar
					className={cn(classes.page__sidebar)}
					onToggleMenu={ onToggleMenu }
				>
				</Sidebar>
				<PageHeader 
					className={cn(classes.page__header)}
					onToggleMenu={ onToggleMenu }
				/>
				<div
					className={cn(classes.page__inner)}
				>
					<AppRouter />
				</div>
				<PageFooter 
					className={cn(classes.page__footer)}
				/>
				<div
					className={cn(classes.page__paranja)}
					onClick={ onToggleMenu }
				></div>
			</div>
		</Suspense>
	);
};

export { App };