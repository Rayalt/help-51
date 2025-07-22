import React, {Fragment, useState} from 'react';
import {DonateTab, tabList} from "../../model/donate-form-tabs";
import {Table} from 'widgets';
import {Button, Image, Svg, TabContent, TabItem, Tabs, Typography} from "shared/ui";
import {requisites} from "widgets/requisites/model/requisites";
import {TabsContentRow} from "shared/ui/tabs/ui/tabs-content-row/tabs-content-row";
import {useRatioClass} from "shared/lib/hooks";
import {DonateFormTransaction} from "features";
import {DonateOther} from "../donate-other/donate-other";

const DonateFormTabs = () => {
	const [activeTab, setActiveTab] = useState<DonateTab>(DonateTab.TRANSACTION);
	
	const onTabClick = (tab: TabItem) => {
		setActiveTab(tab.value as DonateTab);
	};
	
	const donateTabsContent = [
		{
			value: DonateTab.TRANSACTION,
			content: <DonateFormTransaction />
		},
		{
			value: DonateTab.QR,
			content: (
				<TabsContentRow
					title={{ children: 'Благотворительное пожертвование' }}
					description={{ children: 'На уставную деятельность фонда' }}
					img={
					<div
						className={useRatioClass({view: '1x1'})}
					>
						<Svg
							name='qrDonate'
							base
							auto
						/>
					</div>
					}
				/>
			)
		},
		{
			value: DonateTab.CERTIFICATE,
			content: (
				<TabsContentRow
					title={{ children: 'Благотворительный сертификат фонда «Вызов»' }}
					description={{ children: 'На уставную деятельность фонда' }}
					img={
						<Image
							src='ozon'
							alt=''
							className={useRatioClass({ view: '3x2' })}
						/>
					}
					action={
						<Button view='secondary'>Купить</Button>
					}
				/>
			)
		},
		{
			value: DonateTab.BANK,
			content: (
				<Fragment>
					<Table view='col-1-disabled' cellsRow={requisites} />
				</Fragment>
			),
			title: { children: 'Благотворительное пожертвование' },
			description: { children: 'На уставную деятельность фонда' },
			actions: (
				<Fragment>
					<Button view='secondary'>Скачать реквизиты</Button>
					<Button view='secondary'>Счёт для юридических лиц</Button>
				</Fragment>
			)
		},
		{
			value: DonateTab.OTHER,
			title: { children: 'Благотворительное пожертвование' },
			description: { children: 'На уставную деятельность фонда' },
			content: (
				<DonateOther />
			)
		}
	];
	

	return (
		<Tabs
			tabs={tabList}
			contentView='card'
			value={activeTab}
			onTabClick={(tab) => setActiveTab(tab.value as DonateTab)}
		>
			{donateTabsContent.map(({ value, content, title, description, actions }) => (
				<TabContent
					key={ value }
					active={ activeTab === value }
					title={ title }
					description={ description }
					actions={ actions }
					view={ activeTab === DonateTab.BANK ? 'table' : undefined }
				>
					{content}
				</TabContent>
			))}
		</Tabs>
	);
};

export { DonateFormTabs };
