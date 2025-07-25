export enum ProgramTypes {
	POOR = 'POOR',
	MOTHERS = 'MOTHERS',
	VIOLENCE = 'VIOLENCE',
	HARD = 'HARD',
	CREDITS = 'CREDITS',
	SOLDIER = 'SOLDIER',
	FREE = 'FREE',
	RELOCATION = 'RELOCATION',
	ALL = 'ALL',
}

export type Program = {
	id: string;
	title: string;
	description?: string;
	details?: string[];
	value: ProgramTypes;
};

/* eslint-disable max-len */
export const Programs: Program[] = [
	{
		id: 'c236ba5c-a99e-4dfa-9779-7908caea5920',
		value: ProgramTypes.POOR,
		title: 'Помощь детям-сиротам, малоимущим семьям и матерям одиночкам',
		description: 'Обеспечение необходимыми ресурсами, содействие в обучении, медицинской помощи и адаптации',
		details: ['Мы помогаем детям-сиротам в детских домах и больницах, ищем им приемных родителей и поддерживаем их родные семьи в трудной жизненной ситуации, чтобы дети не попали в сиротские учреждения.', ' Кроме того, предоставляем своим подопечным продуктами, предметами первой необходимости, одеждой и обувью, вещами для ребенка, питанием для ребенка. А также, мы готовы придти на помощь в оформлении положенных пособий и выплат'],
	},
	{
		id: '03ed5eab-8dde-4b6c-a9b8-d1c26944cd79',
		value: ProgramTypes.MOTHERS,
		title: 'Помощь пожилым людям и людям с ограниченными возможностями',
		description: 'Забота о тех, кто особенно уязвим: помощь в решении социальных и бытовых вопросов',
		details: ['Мы оказываем финансовую, информационную и правовую помощь пожилым людям и инвалидам для получения своевременной квалифицированной медицинской помощи, приобретения лекарств, протезно-ортопедических изделий и иных предметов длительного пользования, а также, в экстренных случаях, для проведения дорогостоящих медицинских операций'],
	},
	{
		id: 'e655d0b4-ab54-4369-9860-5b48f84e9f85',
		value: ProgramTypes.VIOLENCE,
		title: 'Помощь детям и женщинам, пострадавшим от домашнего насилия',
		description: 'Содействие в восстановлении, защите прав и возвращении к безопасной и стабильной жизни',
		details: ['Мы заботимся, чтобы отношения в семье были здоровыми, экологичными и безопасными. А насилие не оставалось безнаказанным. Если Вы хотите защититься с помощью закона и Вам нужна юридическая помощь, Вы можете бесплатно проконсультироваться с правозащитником. А наш кризисный психолог поможет разобраться в сложившейся ситуации'],
	},
	{
		id: '5d54fd6c-db28-49c9-a2ca-b7bb5e2c04ba',
		value: ProgramTypes.HARD,
		title: 'Поддержка в трудных жизненных ситуациях ',
		description: 'Содействие в период утраты близких, жилья или работы',
		details: ['Поддержка в трудных жизненных ситуациях помогает человеку справиться с эмоциональными и практическими последствиями утраты близких, жилья или работы.', 'Мы предлагаем сопровождение, консультации и помощь в восстановлении стабильности и уверенности в завтрашнем дне'],
	},
	{
		id: 'e9b20c06-9e51-4a60-b16f-7f36ce8eeedc',
		value: ProgramTypes.CREDITS,
		title: 'Помощь в погашении кредитов и долгов',
		description: 'Поддержка для тех, кто столкнулся с финансовыми трудностями и риском утраты стабильности',
		details: ['Помощь в погашении кредитов и долгов направлена на поддержку людей, оказавшихся в сложном финансовом положении.' + 'Мы помогаем найти выход из долговой нагрузки, сохранить стабильность и восстановить контроль над личным бюджетом'],
	},
	{
		id: 'a9359799-ac9d-4fdc-92b1-eddb2979c823',
		value: ProgramTypes.SOLDIER,
		title: 'Поддержка защитников Отечества',
		description: 'Помощь участникам боевых действий и их семьям в социальной адаптации, реабилитации и восстановлении качества жизни',
		details: ['Мы оказываем помощь участникам боевых действий и их семьям в социальной адаптации, восстановлении физического и психологического здоровья.' + 'Поддержка включает реабилитационные программы, юридическую помощь и содействие в трудоустройстве'],
	},
	{
		id: 'cd345314-f3ee-4297-809c-29299454341a',
		value: ProgramTypes.FREE,
		title: 'Бесплатная юридическая и психологическая помощь',
		description: 'Квалифицированные консультации для решения правовых вопросов и преодоления эмоциональных кризисов',
		details: ['Предоставляем квалифицированные консультации юристов и психологов, которые помогают справиться с правовыми трудностями и эмоциональными переживаниями.' + 'Помощь доступна в сложных жизненных ситуациях — от потери жилья до конфликтов с работодателями или государственными структурами'],
	},
	{
		id: '67a26e33-47ed-41aa-ad67-3ede1c1193fa',
		value: ProgramTypes.RELOCATION,
		title: 'Новый дом',
		description: 'Переселение граждан в другие регионы России',
		details: ['Содействие в переселении граждан в безопасные регионы России — от подбора жилья до интеграции в новое сообщество и поддержки на новом месте'],
	},
];