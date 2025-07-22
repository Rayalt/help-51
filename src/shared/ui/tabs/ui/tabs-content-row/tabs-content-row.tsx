import React from 'react';
import { TabContentRowProps } from '../../model/types';
import cn from 'classnames';
import classes from '../../tabs.module.scss';
import { Typography } from 'shared/ui';

const TabsContentRow = ({ title, description, action, img }: TabContentRowProps) => {
	return (
		<div
			className={cn('row', classes.tabs__row)}
		>
			<div
				className={cn('md:col-4')}
			>
				<div
					className={cn(classes.tabs__img)}
				>
					{ img }
				</div>
			</div>
			<div
				className={cn(['md:col-8'])}
			>
				<Typography
					view='text-lg'
					className={cn(classes.tabs__title)}
					{...title}
				/>
				<Typography
					color='disabled'
					view='text-sm'
					className={cn(classes.tabs__description)}
					{...description}
				/>
				<div
					className={cn(classes.tabs__action)}
				>
					{ action }
				</div>
			</div>
		</div>
	);
};

export { TabsContentRow };
