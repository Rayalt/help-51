export enum DonateTab {
	TRANSACTION = 'transaction',
	QR = 'qr',
	CERTIFICATE = 'certificate',
	BANK = 'bank',
	OTHER = 'other',
} 

export const tabList: TabItem[] = [
	{
		value: DonateTab.TRANSACTION,
		title: 'Онлайн перевод',
		subtitle: 'карта или СБП',
	},
	{
		value: DonateTab.QR,
		title: 'По QR-коду',
	},
	{
		value: DonateTab.CERTIFICATE,
		title: 'Благотворительный сертификат',
		subtitle: 'на OZON',
	},
	{
		value: DonateTab.BANK,
		title: 'Банковский перевод',
	},
	{
		value: DonateTab.OTHER,
		title: 'Другое',
	},
];

export interface TabItem {
	value: DonateTab;
	title: string;
	subtitle?: string;
}