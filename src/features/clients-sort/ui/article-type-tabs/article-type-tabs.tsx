import { useCallback, useMemo } from 'react';
import { ArticleTypeTabsProps } from './typings';
import { TabItem, Tabs } from 'shared/ui';

const ArticleTypeTabs = ({ value, onChangeType }: ArticleTypeTabsProps) => {
	const typeTabs = useMemo<TabItem[]>(() => [
		{
			value: 'DonateType.TRANSACTION',
			title: 'Онлайн перевод',
			subtitle: 'карта или СБП',
		},
		{
			value: 'DonateType.QR',
			title: 'По QR-коду',
		},
		{
			value: 'DonateType.CERTIFICATE',
			title: 'Благотворительный сертификат',
			subtitle: 'на OZON',
		},
		{
			value: 'DonateType.BANK',
			title: 'Банковский перевод',
		},
		{
			value: 'DonateType.OTHER',
			title: 'Другое',
		},
	], []);
	
	const onTabClick = useCallback((tab: TabItem) => {
		onChangeType(tab.value as any);
	}, [onChangeType]);
	
	return (
		<Tabs
			tabs={ typeTabs } 
			value={ value } 
			onTabClick={ onTabClick } 
		/>
	);
};

export { ArticleTypeTabs };