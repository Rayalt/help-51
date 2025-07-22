import { Button } from 'shared/ui';
import { PaginationProps } from 'shared/ui/pagination/model/types';
import cn from 'classnames';
import classes from'../pagination.module.scss';

const Pagination = ({ className }: PaginationProps) => {
	return (
		<div
			className={cn(classes.pagination, className)}
		>
			<Button
				className={cn(classes.pagination__btn)}
				view='secondary-light'
				addonLeft='arrowLeftShort'
				addonLeftView='xs'
				square
				size='sm'
			></Button>
			
			<Button
				className={cn(classes.pagination__btn)}
				view='secondary-light'
				square
				size='sm'
			>
				1
			</Button>
			
			<Button
				className={cn(classes.pagination__btn)}
				view='secondary-light'
				square
				size='sm'
			>
				2
			</Button>
			
			<Button
				className={cn(classes.pagination__btn)}
				view='secondary-light'
				square
				size='sm'
			>
				3
			</Button>
			
			<Button
				className={cn(classes.pagination__btn)}
				view='secondary-light'
				addonLeft='arrowRightShort'
				addonLeftView='xs'
				square
				size='sm'
			></Button>
		</div>
	);
};

export { Pagination };