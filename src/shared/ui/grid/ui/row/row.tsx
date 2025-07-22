import { RowProps } from '../../model/types';
import cn from 'classnames';

export const Row = ({
	children,
	className,
	rowClassName,
	gapY,
	gapX,
	gap,
	rowCols,
}: RowProps) => {
	const rowColClasses = rowCols
		? Object.entries(rowCols).map(([bp, cols]) => {
			if (bp === 'xs') return `row-cols-${cols}`;
			return `${bp}:row-cols-${cols}`;
		})
		: [];

	return (
		<div
			className={cn(
				className,
				'row',
				rowClassName,
				...rowColClasses,
				gap && `row_g-${gap}`,
				gapY && `row_gy-${gapY}`,
				gapX && `row_gx-${gapX}`,
			)}
		>
			{ children }
		</div>
	);
};
