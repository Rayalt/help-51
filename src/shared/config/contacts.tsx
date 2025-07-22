import { Fragment } from 'react';
import { ContactsType, SocialsType } from 'widgets';

export const contactsLinkListEmail: ContactsType[] = [
	{
		path: 'mailto:fondvizov@mail.ru',
		text: 'fondvizov@mail.ru',
		icon: 'mail',
	},
];

export const contactsLinkListShort: ContactsType[] = [
	...contactsLinkListEmail,
	{
		path: 'tel:+79212849144',
		text: '+7 (921) 284-91-44',
		icon: 'phone',
	},
];

export const contactsLinkList: ContactsType[] = [
	...contactsLinkListShort,
	{
		path: '/',
		text: <Fragment>Главный офис: Мурманск, Карла Либкхнента&nbsp;28, офис&nbsp;401</Fragment>,
		icon: 'placemark',
	},
];

export const contactsSocialsList: SocialsType[] = [
	{
		to: 'https://vk.com/vizovfond',
		icon: 'vk',
	},
	{
		icon: 'whatsapp',
		to: '/'
	},
	{
		icon: 'telegram',
		to: '/'
	},
];