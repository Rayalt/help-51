import {Fragment, ReactNode} from "react";

export type TeamItem = {
	id: string;
	name: string[];
	position?: string;
	description?: string;
	photo?: string;
};

export const team: TeamItem[] = [
	{
		id: '',
		name: ['Шувалов', 'Денис Анатольевич'],
		position: 'Председатель фонда',
		photo: 'headAvatar',
		description: `
			Пенсионер МВД, майор полиции в отставке. Проходил службу на различных должностях оперативного состава 
			УМВД России по Мурманской области. Выполнял служебные обязанности по охране общественного порядка 
			и поддержании Конституционного строя на территории Северо-Кавказского региона. 
			Награжден ведомственными медалями «За отличие в службе II и III степени». Член&nbsp;Ассоциации юристов России. Член&nbsp;Совета ветеранов УВД по г. Сочи	
		`,
	},
	{
		id: '',
		name: ['Зиборов', 'Валерий Андреевич'],
		position: 'Исполнительный директор',
		photo: 'directorAvatar',
		description: '',
	},
	{
		id: '',
		name: ['Санталова', 'Екатерина Александровна'],
		position: 'Руководитель юридического отдела',
		photo: '',
		description: '',
	},
	{
		id: '',
		name: ['Сметанина', 'Алина Витальевна'],
		position: 'Руководитель отдела сопровождения',
		photo: '',
		description: '',
	},
	{
		id: '',
		name: ['Кроль', 'Екатерина Николаевна'],
		position: 'Веб-разработчик',
		photo: 'developerAvatar',
		description: '',
	},
]