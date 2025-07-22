import { Section } from 'widgets';
import { Document, TabContent, TabItem, Tabs, Typography } from 'shared/ui';
import React, { useState } from 'react';
import { documents, documentsTabs, DocumentTab } from 'shared/config/documents';
import cn from 'classnames';
import classes from '../reports.module.scss';

const ReportsPage = () => {
	const [activeTab, setActiveTab] = useState<DocumentTab>(DocumentTab.DOCUMENT);

	const onTabClick = (tab: TabItem) => {
		setActiveTab(tab.value as DocumentTab);
	};

	const filteredDocuments = documents.filter(doc => doc.value === activeTab);

	return (
		<Section
			wrapper
			container={ false }
			bgImage1='lighthouseBW'
			bgSize1={{ xs: '500px', sm: '716px', md: '1008px', lg: '1362px' }}
			bgPos1={{ 
				xs: 'right -336px bottom -256px', 
				sm: 'right -464px bottom -272px', 
				md: 'right -662px bottom -296px', 
				lg: 'right -810px bottom -340px' 
			}}
			bgImage2='starsLargeBW'
			bgSize2={{ xs: '500px', sm: '600px', md: '700px', lg: '866px' }}
			bgPos2={{ xs: 'left -54px top', sm: 'left -54px top', md: 'left -66px top', lg: 'left -76px top' }}
			typographyTitleProps={{
				children: 'Документы и отчёты фонда',
			}}
		>
			<Tabs
				tabs={ documentsTabs }
				view="secondary"
				contentView="card"
				value={ activeTab }
				onTabClick={ onTabClick }
			>
				<TabContent active>
					<ul
						className={cn(classes.row, classes['lg:row-cols-2'])}
					>
						{ !filteredDocuments.length &&
							<Typography
							>
								Нет отчетов
							</Typography>
						}
						
						{ filteredDocuments.map((document) => (
							<li
								key={ document.id }
								className={cn(classes['lg:col-1'], classes['lg:col-start-1'])}
							>
								<Document
									to="/"
									typographyTitleProps={{
										children: document.title,
									}}
									typographySubtitleProps={{
										children: document.description,
									}}
								/>
							</li>
						)) }
					</ul>
				</TabContent>
			</Tabs>
		</Section>
	);
};


export default ReportsPage;