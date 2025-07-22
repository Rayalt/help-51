import { Table } from 'widgets';
import React from 'react';
import { requisites } from '../model/requisites';

const Requisites = () => {
	return (
		<Table
			view='col-1-accent'
			cellsRow={ requisites }
		/>
	);
};

export { Requisites };