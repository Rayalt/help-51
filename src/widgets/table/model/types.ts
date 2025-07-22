import { ReactNode, TableHTMLAttributes } from 'react';

export type TableCell = {
	data?: ReactNode;
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
	cellsHeader?: TableRowProps['cells'];
	cellsRow: TableRowProps['cells'][];
	view?: 'col-1-accent' | 'col-1-disabled' | 'row-1-accent';
}

export interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
	cells?: TableCell[];
}
export interface TableCellProps extends TableHTMLAttributes<HTMLTableCellElement> {
	data?: ReactNode;
}