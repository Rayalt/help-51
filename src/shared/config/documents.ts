import { TabItem } from 'shared/ui/tabs/model/types';

export enum DocumentTab {
	DOCUMENT = 'DOCUMENT',
	REPORT = 'REPORT',
}

export type DocumentsType = {
	id: string;
	href: string;
	title: string;
	description?: string;
	value: DocumentTab;
}

export const documentsTabs: TabItem[] = [
	{
		id: '1aa42f9d-e3de-477c-873f-f0aa00b94453',
		title: 'Документы',
		value: DocumentTab.DOCUMENT,
	},
	{
		id: '38190cae-1031-4916-8aef-fd49b303579c',
		title: 'Отчеты',
		value: DocumentTab.REPORT,
	},
];

export const documents: DocumentsType[] = [
	{
		id: 'feb37b7f-63fe-4ac4-9acb-8e4b6c685d76',
		href: '',
		title: 'Свидетельство',
		value: DocumentTab.DOCUMENT,
	},
	{
		id: 'b5585c1b-c571-44c0-8bb2-0f15c580e63c',
		href: '',
		title: 'Устав',
		value: DocumentTab.DOCUMENT,
	},
	{
		id: 'b1c5eff6-b633-44f9-8bb1-c9b68aac89d0',
		href: '',
		title: 'Выписка из реестра НКО',
		value: DocumentTab.DOCUMENT,
	},
	{
		id: '2088e7a6-46bf-43a9-a95a-f840a138f05c',
		href: '',
		title: 'Выписка из реестра НЦБЮП',
		value: DocumentTab.DOCUMENT,
	},
];