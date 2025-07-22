import cn from 'classnames';
import classes from '../range.module.scss';
import { RangeProps } from '../model/types';
import { Svg } from 'shared/ui';


const Range = ({ view, className, ngStyle }: RangeProps) => {
	return (
		<span
			className={cn(
				{
					[classes.range + '_' + view]: view,
				},
				classes.range,
				className
			)}
			style={ ngStyle }
		>
			<span
				className={cn(classes.range__bar)}
			>
				<span
					className={cn(classes.range__icon)}
				>
					<Svg
						name='heartSolid' 
						iconCl
						base
					/>
				</span>
			</span>
		</span>
	);
};

export { Range };