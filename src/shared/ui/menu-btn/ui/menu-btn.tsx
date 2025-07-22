import cn from 'classnames';
import classes from '../menu-btn.module.scss';
import { MenuBtnProps } from '../model/types';
import { Button } from 'shared/ui';

const MenuBtn = ({ isOpen, onClick, className }: MenuBtnProps) => {
	return (
		<Button
			view='secondary'
			circle
			className={ cn(
				classes.menu, 
				className,
				{
					[classes.menu_open]: isOpen,
				},
			) }
			addonLeft='menu'
			addonLeftView='sm'
			onClick={ onClick }
		/>
	);
};

export { MenuBtn };