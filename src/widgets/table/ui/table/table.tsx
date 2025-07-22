import cn from 'classnames';
import classes from '../../table.module.scss';
import { TableProps } from '../../model/types';
import { TableHeader } from '../table-header/table-header';
import { TableRow } from '../table-row/table-row';

const Table = ({ view, cellsHeader, cellsRow, className }: TableProps) => {
	return (
		<div
			className={ cn(
				classes.table, 
				className,
				{
					[classes['table_' + view]]: view,
				}
			) }
		>
			<table
				className={cn(classes.table__content)}
			>
				{ cellsHeader?.length &&
					<thead
						className={ cn(classes.table__header) }
					>
						<TableHeader
							cells={ cellsHeader }
						/>
					</thead>
				}
				<tbody>
					{ cellsRow?.length &&
						cellsRow.map((row, index) => (
							<TableRow
								className={ cn(classes.table__row) }
								key={ index }
								cells={ row }
							/>
						))
					}
				</tbody>
			</table>
		</div>
	);
};

export { Table };