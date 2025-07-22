import { TableProps } from 'widgets';

export const donatesHeader: TableProps['cellsHeader'] = [
	{ data: `
		Дата
	` },
	{ data: `
		От кого
	` },
	{ data: `
		Цель пожертвований
	` },
	{ data: `
		Сумма
	` },
	{ data: `
		Комментарий
	` },
];

export const donatesRows: TableProps['cellsRow'] = [
	[
		{ data: `
			09.10.2024
		` },
		{ data: `
			******2020
		` },
		{ data: `
			На уставную деятельность фонда
		` },
		{ data: `
			1000 ₽
		` },
		{ data: `
			На лечение
		` },
	],
	[
		{ data: `
			09.10.2024
		` },
		{ data: `
			***anton@mail.ru
		` },
		{ data: `
			Василий Васильевич
		` },
		{ data: `
			1000 ₽
		` },
		{ data: `
			На лечение
		` },
	],
];