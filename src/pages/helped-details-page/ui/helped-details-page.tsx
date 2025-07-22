import {NewsCard, Section, SectionHeader, SectionWrapper} from "widgets";
import {useLocation, useParams} from "react-router-dom";
import {RoutePath} from "app/providers/router";
import React, {Fragment, useEffect, useState} from "react";
import {Image, TabContent, TabItem, Tabs, Typography} from "shared/ui";
import cn from "classnames";
import classes from '../helped-details-page.module.scss';
import {Clients} from "shared/config/clients";
import {DataWidget} from "widgets/data-widget/ui/data-widget";
import {ClientTab, clientTabs} from "shared/config/client-tabs";
import {news} from "shared/config/news";
import { DonateFormTransaction } from "features";
import {Estimation} from "widgets/card/ui/estimation/estimation";

const HelpedDetailsPage = ({}) => {
	const { pathname } = useLocation();
	const { id } = useParams();
	const [closed, setClosed] = useState<'estimation' | 'closed'>('estimation'); 
	const [activeTab, setActiveTab] = useState<ClientTab>(ClientTab.HISTORY);

	console.log(pathname)
	const onTabClick = (tab: TabItem) => {
		setActiveTab(tab.value as ClientTab);
	};
	
	const client = Clients.find(client => client.id === id);
	const clientNews = news.filter(newsItem => newsItem.clientId === id);
	
	useEffect(() => {
		if (pathname.includes(RoutePath.whom_to_help_details)) {
			return setClosed('estimation');
		} else {
			return setClosed('closed');
		}
	}, [pathname]);


	return (
		<Section
			sectionSize='lg'
			className={cn(classes['section-user'])}
		>
			<div
				className={cn(classes.row)}
			>
				<div
					className={cn(classes['col-12'], classes['sm:col-6'], classes['md:col-4'])}
				>
					
				</div>
				<div
					className={cn(classes['col-12'], classes['sm:col-6'], classes['md:col-8'])}
				>
					<Typography
						tag='h2'
						view='section-title'
						color='accent-secondary'
						className={cn(classes['section-user__title'])}
					>
						{ client?.title }
					</Typography>
					
					<Estimation 
						className={cn(classes['section-user__estimation'])}
						view={ client?.view }
						amount={ client?.amount }
					/>
					
					<div
						className={cn(classes['section-user__description'])}
					>
						<div>
							<Typography
								tag='h3'
								view='text-lg'
								color='accent-secondary'
							>
								Диагноз
							</Typography>
							<Typography>
								{ client?.description }
							</Typography>
						</div>
						
						<div>
							<Typography
								tag='h3'
								view='text-lg'
								color='accent-secondary'
							>
								Необходимо лечение
							</Typography>
							
							<Typography>
								{ client?.therapy }
							</Typography>
						</div>
					</div>
				</div>
			</div>
			
			<DataWidget
				base
			>
				<DonateFormTransaction 
					view='selected'
					clientName={ client?.title }
				/>
			</DataWidget>
			
			<div>
				<Tabs
					tabs={ clientTabs }
					view='secondary'
					value={activeTab}
					onTabClick={ onTabClick }
				/>
	
				{ clientTabs.map(client => (
					<TabContent
						key={ client.id }
						active={ client.value === activeTab }
					>
						<div 
							className={ cn(classes.row) }
						>
							<div 
								className={ cn(classes['sm:col-7'], classes['section-user__history']) }
							>
								{ client.details?.map(( item ) => (
									<Typography
										key={ item }
									>
										{ item }
									</Typography>
								)) }
	
								{  activeTab === ClientTab.DOCUMENTS &&
									<DataWidget
										base
									>
										<div
											className={ cn(classes.row, classes['sm:row-cols-2'], classes['md:row-cols-3']) }
										>
											{ client.documents?.map((item) => (
												<Image
													key={ item.id }
													src={ item.src }
													alt={ item.alt }
												/>
											)) }
										</div>
									</DataWidget>
								}
	
								{  activeTab === ClientTab.NEWS &&
									<div
										className={ cn(classes.row) }
									>
										{ clientNews.map(newsItem => (
											<NewsCard
												view='landscape'
												key={ newsItem.id }
												newsData={ newsItem }
											/>
										)) }
									</div>
								}
							</div>
	
							<div 
								className={ cn(classes['sm:col-4'], classes['section-user__donation']) }
							>
								<DataWidget
									className={cn(classes['section-user__donation-card'])}
								>
								</DataWidget>
							</div>
						</div>
					</TabContent>
				)) }
			</div>
			
		</Section>
	);
};

export default HelpedDetailsPage;