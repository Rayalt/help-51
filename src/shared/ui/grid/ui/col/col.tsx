import cn from 'classnames';
import { RowProps } from '../../model/types';

const Col = ({ gridCols, children, className }: RowProps) => {
	const colClasses = gridCols
		? Object.entries(gridCols).map(([bp, span]) => {
			if (bp === 'xs') return `col-${span}`;
			return `${bp}:col-${span}`;
		})
		: [];
	
	return (
		<div className={cn(className, ...colClasses)}>
			{children}
		</div>
	);
};

export { Col };