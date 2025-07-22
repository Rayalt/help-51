import React from 'react';
import { SectionProps } from 'widgets/section/model/types';
import cn from 'classnames';
import classes from '../../section.module.scss';

const SectionWrapper = ({ children, className }: SectionProps) => {
	return (
		<div
			className={cn(classes.section__wrapper, className)}
		>
			{ children }
		</div>
	);
};

export { SectionWrapper };