import cn from 'classnames';
import classes from '../../table.module.scss';
import { TableCellProps } from '../../model/types';
import { typograph } from 'shared/lib/hooks';

const TableCellData = ({ data, children, className }: TableCellProps) => {
	return (
		<td
			className={ cn(classes.table__cell, className) }
		>
			{ typeof data === 'string' ? typograph(data) : data ?? children }
		</td>
	);
};

export { TableCellData };