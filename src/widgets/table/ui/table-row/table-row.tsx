import cn from 'classnames';
import classes from '../../table.module.scss';
import { TableRowProps } from '../../model/types';
import {TableCellData} from "../table-cell-data/table-cell-data";

const TableRow = ({ cells, children, className }: TableRowProps) => {
	return (
		<tr
			className={ cn(classes.table__row, className) }
		>
			{ cells?.map((item, index) => (
				<TableCellData
					key={ index }
				>
					{ item.data }
				</TableCellData>
			))}
		</tr>
	);
};

export { TableRow };