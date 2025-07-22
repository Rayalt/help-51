import cn from 'classnames';
import classes from '../../table.module.scss';
import { TableRowProps } from '../../model/types';
import {TableCellHeader} from "../table-cell-header/table-cell-header";

const TableHeader = ({ cells, children, className }: TableRowProps) => {
	return (
		<tr
			className={ cn(classes.table__row, className) }
		>
			{ cells?.map((item, index) => (
				<TableCellHeader
					key={ index }
				>
					{ item.data }
				</TableCellHeader>
			))}
		</tr>
	);
};

export { TableHeader };