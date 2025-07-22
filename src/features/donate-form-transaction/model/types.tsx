import { HTMLAttributes, useMemo } from 'react';
import { DropdownOption, DropdownOptionTitle } from 'shared/ui/forms/model/types';
import { ChipItem } from 'shared/ui/chips/model/types';
import { Amount, Svg } from 'shared/ui';

export enum donateFrequency {
	ONES = 'ONES',
	REGULAR = 'REGULAR',
}

export const donateFormTransactionSum: ChipItem[] = [
	{
		id: '4a0de044-362d-410b-bf5b-b7052407e1c1',
		label: 
	<Amount 
		value={ 100 }
	/>
		,
		value: '100',
	},
	{
		id: '0f99963c-e39d-4b7b-9641-d1c245053a33',
		label: 
	<Amount 
		value={ 500 }
	/>
		,
		value: '500',
	},
	{
		id: '0e5e9d52-b011-4d36-bded-ae00e3133602',
		label: 
	<Amount 
		value={ 1000 }
	/>
		,
		value: '5000',
	},
	{
		id: '2e6432f8-b013-4920-8db7-eb16e6322311',
		label: 
	<Amount 
		value={ 2000 }
	/>
		,
		value: '2000',
	},
	{
		id: 'ed1ef2c5-cf76-4cdf-987c-aaed9ccd6160',
		label: 
	<Amount 
		value={ 5000 }
	/>
		,
		value: '20000',
	},
];

export const donateFormTransactionWay: ChipItem[] = [
	{
		id: '599896e2-2398-4c5f-a473-1b56a150afe2',
		name: 'mir',
		value: 'MIR',
	},
	{
		id: 'c59a0667-d93f-4ddb-80b5-e650c8dc8482',
		name: 'sbp',
		value: 'SBP',
	},
];


export const donateFormTransactionFrequency: ChipItem[] = [
	{
		id: '79bde49d-5e9e-4424-8041-f3509696fa4d',
		label: 'Помочь один раз',
		value: donateFrequency.ONES,
	},
	{
		id: '6db62200-8ca6-42bc-84df-63057f7c9d94',
		label: 'Помогать каждый месяц',
		value: donateFrequency.REGULAR,
	},
];


export const donateFormOptions: DropdownOption[] = [
	{
		id: 'c7870920-ed17-4952-8537-db0c45d99f36',
		value: 'Иван Иванов',
		title: 'Иван Иванов',
		content: ['Иван Иванов', 'Диагноз'],
	},
	{
		id: 'b5d55950-f67e-40c8-a45a-95e3c3d3ba78',
		value: 'Василий Петров',
		title: 'Василий Петров',
		content: ['Василий Петров', 'Диагноз'],
	},
	{
		id: 'cf9f66e8-3e8b-4373-81af-a4ed8db7f6d0',
		value: 'На уставную деятельность фонда',
		title: 'На уставную деятельность фонда',
		content: 'На уставную деятельность фонда',
	},
];

export const donateFormOptionsTitle: DropdownOptionTitle[] = [
	{ title: 'Имя', titleClass: '3' },
	{ title: 'Диагноз', titleClass: '9' },
];

export interface DonateFormTransactionProps extends HTMLAttributes<HTMLElement> {
	view?: 'selected';
	clientName?: string; 
}