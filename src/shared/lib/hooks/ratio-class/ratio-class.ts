import cn from 'classnames';
import classes from './ratio-class.module.scss';
import { RatioClassProps } from './model/types';

export const ratioClass = ({
	baseClass,
	view,
}: RatioClassProps) =>
	cn(
		baseClass, 
		classes.ratio,
		{
			[classes.ratio + '_' + view]: view
		},
	);