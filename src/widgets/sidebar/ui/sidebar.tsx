import cn from 'classnames';
import classes from '../sidebar.module.scss';
import { SidebarProps } from '../model/types';
import { Navbar } from 'widgets';
import { navbarFooterList, navbarFooterListSecond } from 'shared/config/navbar';
import { Button } from 'shared/ui';

const Sidebar = ({ onToggleMenu, className }: SidebarProps) => {
	const collapseMenu = () => {
		if (onToggleMenu) {
			onToggleMenu();
		}
	}
	
	return (
		<div
			className={ cn(
				classes.sidebar, 
				className,
			) }
		>
			<div
				className={cn(classes.sidebar__header)}
			>
				<Button
					view='ghost'
					className={ cn(
						classes.sidebar__close,
					) }
					onClick={ collapseMenu }
					square
					addonLeft='cross'
					size='sm'
				/>
			</div>
			<div
				className={cn(classes.sidebar__body)}
			>
				<Navbar
					className={cn(classes.sidebar__nav)}
					view='portrait'
					itemsList={ navbarFooterList }
					onClick={ collapseMenu }
				></Navbar>
				<Navbar
					className={cn(classes.sidebar__nav)}
					view='portrait'
					itemsList={ navbarFooterListSecond }
					onClick={ collapseMenu }
				></Navbar>
			</div>
		</div>
	);
};

export { Sidebar };