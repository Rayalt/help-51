import { HTMLAttributes } from 'react';
import { ChipItem } from 'shared/ui/chips/model/types';
import { DropdownOption } from 'shared/ui';
import { ProgramTypes } from 'shared/config/programs';

export enum HelpGender {
	MALE = 'MALE',
	FEMALE = 'FEMALE',
}
export enum Citizenship {
	RF = 'RF',
	OTHER = 'OTHER',
}

export interface HelpRequestProps extends HTMLAttributes<HTMLElement> {
	
}

export const helpGender: ChipItem[] = [
	{
		id: 'f3f16e03-9bc4-4815-a48d-1b067adf7f3b',
		label: 'Мужчина',
		value: HelpGender.MALE,
	},
	{
		id: '82d128c4-d7fb-4480-85ba-4e5bdb4304eb',
		label: 'Женщина',
		value: HelpGender.FEMALE,
	},
];

export type CitizenshipType = {
	id: string;
	title: string;
	value: Citizenship;
};

export const citizenship: CitizenshipType[] = [
	{
		id: 'bfab2a9d-714c-4983-85e7-21e0148e2288',
		title: 'Российская Федерация',
		value: Citizenship.RF,
	},
	{
		id: 'a9e955e1-a35d-471c-a047-12f0a7a5202d',
		title: 'Другое',
		value: Citizenship.OTHER,
	},
]