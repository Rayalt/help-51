import cn from 'classnames';
import classes from '../../table.module.scss';
import { TableCellProps } from '../../model/types';
import {useTypograph} from "shared/lib/hooks";

const TableCellData = ({ data, children, className }: TableCellProps) => {
	return (
		<td
			className={ cn(classes.table__cell, className) }
		>
			{ typeof data === 'string' ? useTypograph(data) : data ?? children }
		</td>
	);
};

export { TableCellData };