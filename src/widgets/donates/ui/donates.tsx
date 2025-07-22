import cn from 'classnames';
import { DonatesProps } from '../model/types';
import { Table } from 'widgets';
import { donatesHeader, donatesRows } from 'widgets/donates/model/donates';

const Donates = ({ className }: DonatesProps) => {
	return (
		<Table 
			view='row-1-accent'
			cellsHeader={ donatesHeader } 
			cellsRow={ donatesRows }
			className={cn(className)}
		/>
	);
};

export { Donates };