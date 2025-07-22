import { RoutePath } from 'app/providers/router';

export type NavbarItemType = {
	id: string;
	path: string;
	text: string;
}

export const navbarItemsList: NavbarItemType[] = [
	{
		id: '39a2f936-c1d2-4988-819a-aee80b79e72e',
		path: RoutePath.about,
		text: 'О нас',
	},
	// {
	// 	id: '9fe9d2e5-2d36-4fd8-aa0e-5ffc60805deb',
	// 	path: RoutePath.whom_to_help,
	// 	text: 'Кому помочь',
	// },
	// {
	// 	id: 'a4657e60-6b5e-4118-9da9-a188dec50aaf',
	// 	path: RoutePath.helped,
	// 	text: 'Кому помогли',
	// },
	{
		id: '84c7a8c4-9c79-432b-80da-be2ad29af01e',
		path: RoutePath.donate,
		text: 'Пожертвования',
	},
	{
		id: '3787b67c-f557-44fe-9833-ed0d24aa8eff',
		path: RoutePath.partnership,
		text: 'Сотрудничество',
	},
	{
		id: 'aa844875-64f5-4874-88de-9f7858282ed3',
		path: RoutePath.about + RoutePath.contacts,
		text: 'Контакты',
	},
];

export const navbarFooterList: NavbarItemType[] = [
	{
		id: '8be7a63a-d4d2-47ca-9063-630e9b1fc526',
		path: RoutePath.about,
		text: 'О нас',
	},
	// {
	// 	id: 'e1781df9-0cd1-497c-8f26-304b89982ec0',
	// 	path: RoutePath.whom_to_help,
	// 	text: 'Кому помочь',
	// },
	{
		id: 'cea287c4-d3b5-47cb-a442-9606ed272439',
		path: RoutePath.want_to_help,
		text: 'Хочу помочь',
	},
	{
		id: 'cb43e6bb-08c0-433c-bab5-efc19c14f34b',
		path: RoutePath.need_help,
		text: 'Нужна помощь',
	},
	// {
	// 	id: 'bda57b2f-7928-47d0-8468-d5e19fe544d5',
	// 	path: RoutePath.helped,
	// 	text: 'Кому помогли',
	// },
	{
		id: '4e5c03f1-f3b7-43d9-a9a7-57cc8ba25cf1',
		path: RoutePath.programs,
		text: 'Программы',
	},
	{
		id: 'e234f0e6-5e9c-4b12-8c1b-4ebe965b1d04',
		path: RoutePath.news,
		text: 'Новости',
	},
];
export const navbarFooterListSecond: NavbarItemType[] = [
	{
		id: '85ca916b-3a13-4609-8397-e8c3f0234b00',
		path: RoutePath.reports,
		text: 'Документы и отчёты',
	},
	{
		id: '9d94c18f-fea2-48b0-9314-bb1c8798ae06',
		path: RoutePath.donate,
		text: 'Пожертвования',
	},
	{
		id: '460c1bdf-dc66-46d6-971d-43a78d08d7f5',
		path: RoutePath.volunteering,
		text: 'Волонтерство',
	},
	{
		id: '6423b0df-13ee-48c6-a42e-3859cac33ed2',
		path: RoutePath.partnership,
		text: 'Сотрудничество',
	},
	// {
	// 	id: '5fedb8d1-6e11-4fe4-8fe8-cc14796e6a32',
	// 	path: RoutePath.partnership + RoutePath.jobs,
	// 	text: 'Вакансии',
	// },
	{
		id: '705e92f2-ebe1-4921-9a79-4eb1f592dd9a',
		path: RoutePath.contacts,
		text: 'Контакты',
	},
];

export const navbarAbout: NavbarItemType[] = [
	{
		id: '9686c7f2-7fc8-4f16-bed6-dd022f2ebdf7',
		path: RoutePath.news,
		text: 'Новости',
	},
	{
		id: '6ec0dba7-f777-43d1-8302-c448867c6e03',
		path: RoutePath.programs,
		text: 'Программы',
	},
	{
		id: '9cffd81c-21d8-46f3-9f2d-c04d7be7e001',
		path: RoutePath.volunteering,
		text: 'Волонтерство',
	},
	// {
	// 	id: 'b5ea342f-9882-4756-9fb4-84f237cad994',
	// 	path: RoutePath.partnership + RoutePath.jobs,
	// 	text: 'Вакансии',
	// },
];