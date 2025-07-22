import React from 'react';
import cn from 'classnames';
import classes from '../../section.module.scss';
import { SectionMainActionProps } from 'widgets/section/model/types';

const SectionMainAction = ({ children, className }: SectionMainActionProps) => {
	return (
		<div className={cn(classes['section__main-action'], className)}>
			{ children }
		</div>
	);
};

export { SectionMainAction };
