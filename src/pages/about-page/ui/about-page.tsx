import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Button, ButtonLink} from "shared/ui/buttons";
import {Svg} from "shared/ui/svg";
import {NavLink, SwiperNavigations, Typography} from "shared/ui";
import {
	Section,
	SectionCols,
	SectionDescription,
	SectionHeader,
	SectionMainAction,
	SectionWrapper
} from "widgets/section";
import classes from '../about.module.scss';
import cn from "classnames";
import {RoutePath} from "app/providers/router";
import {ButtonCard, Contacts, Requisites, Team, YMap} from "widgets";
import {useNavigate} from "react-router-dom";
import {SwiperSlider} from "shared/ui";
import {SwiperSlide} from "swiper/react";
import {DonateFormTabs} from "features";
import {Programs} from "shared/config/programs";
import {Clients} from "shared/config/clients";
import {DataWidget} from "widgets/data-widget/ui/data-widget";
import {contactsLinkList, contactsSocialsList} from "shared/config/contacts";

const AboutPage = () => {
	const navigate = useNavigate();
	const programsHandler = () => {
		navigate(RoutePath.programs);
	};

	return (
		<Fragment
		>
			<SectionCols
				bgImage1='sunBW'
				bgSize1={{ xs: "484px", sm: "684px", md: "884px", lg: '1084px' }}
				bgPos1={{ xs: "left -248px bottom -336px", sm: "left -382px bottom -470px", md: "left -548px bottom -636px", lg: 'left -670px bottom -732px' }}
				bgImage2='sunBW'
				bgSize2={{ xs: "734px", sm: "934px", md: "1134px", lg: '1334px' }}
				bgPos2={{ xs: "right -294px bottom 314px", sm: "right -404px bottom 144px", md: "right -474px bottom -36px", lg: 'right -474px bottom -36px' }}
				view='inverted'
				typographyTitleProps={{
					tag: 'h1',
					view: 'page-title',
					children: <Fragment>Благо&shy;творительный<br />фонд помощи &laquo;Вызов&raquo;</Fragment>,
				}}
				
				typographyDescriptionProps={[{
					children: `
						Наш фонд помогает людям, оказавшимся в сложной жизненной ситуации.
						Мы откликаемся на каждый вызов, с которым к нам обращаются в трудные моменты жизни
					`
				}]}
				
				image='logoSquare'
			/>
			
			<Section
				wrapper
				container={ false }
				typographyTitleProps={{
					tag: 'h2',
					view: 'section-title',
					children: 'Какую помощь мы оказываем'
				}}
				headerActions={
					<SwiperNavigations
						view='secondary-light'
						sliderId='main-clients'
					/>
				}
				
				typographyWidgetTitleProps={{
					children: 'Наши цели',
				}}
				typographyWidgetDescrProps={{
					children: `
						Наши цели — поддерживать людей в трудных жизненных обстоятельствах и помогать тем, 
						кто особенно уязвим. Мы оказываем помощь в погашении долгов, предоставляем бесплатные 
						юридические и психологические консультации, заботимся о женщинах и детях, пострадавших 
						от насилия, одиноких матерях, пожилых людях и детях-сиротах. 
						Мы стремимся улучшить качество жизни малообеспеченных семей 
						и оказываем поддержку защитникам Отечества
					`
				}}
			>
				<SwiperSlider
					view='secondary-light'
					sliderId='main-clients'
				>
					{ Programs.map(card => (
						<SwiperSlide
							key={ card.id }
						>
							<DataWidget
								onClick={ programsHandler }
								widgetData={ card }
								viewTitle='subtitle'
								colorTitle='accent-secondary'
							/>
						</SwiperSlide>
					))}
				</SwiperSlider>
			</Section>
			
			
			<Section
				bgImage2='starsLargeBW'
				bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
				bgPos2={{ xs: "right -54px top", sm: "right -54px top", md: "right -66px top", lg: 'right -76px top' }}
				view='inverted'
				className={cn(classes['section-help-ways'])}
			>
				<div
					className={cn(classes.row)}
				>
					<SectionHeader
						className={cn(classes['lg:col-6'], classes['md:col-7'], classes['sm:col-9'])}
						typographyTitleProps={{
							children: 'Как вы можете помочь',
							color: 'accent-primary',
						}}
						typographyDescriptionProps={[{
							children: `
								Каждый из нас может внести свой вклад в создание лучшего мира. 
								Присоединяйтесь к нам, и вместе мы сможем сделать больше!
							`
						}]}
					/>
				</div>
				<div
					className={cn(classes.row, classes['md:row-cols-3'])}
				>
					<div
						className={cn(classes['section-help-ways__item'])}
					>
						<Svg 
							name='banknotes'
						/>
						<Typography 
							view='subtitle'
							color='accent-primary'
						>
							Пожертвование
						</Typography>
					</div>
					<div
						className={cn(classes['section-help-ways__item'])}
					>
						<Svg 
							name='people'
						/>
						<Typography 
							view='subtitle'
							color='accent-primary'
						>
							Участие в акциях и мероприятиях
						</Typography>
					</div>
					<div
						className={cn(classes['section-help-ways__item'])}
					>
						<Svg 
							name='userPlus'
						/>
						<Typography 
							view='subtitle'
							color='accent-primary'
						>
							Волонтерская помощь
						</Typography>
					</div>
				</div>
			</Section>
			
			<Section
				bgImage2='starsLargeBW'
				bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
				bgPos2={{ xs: "left -54px top", sm: "left -54px top", md: "left -66px top", lg: 'left -76px top' }}
				wrapper
				container={ false }
				typographyTitleProps={{
					children: 'Реквизиты',
				}}
				headerActions={
					<ButtonLink
						view='secondary-light'
						to={ RoutePath.main }
					>
						Скачать реквизиты
					</ButtonLink>
				}
			>
				<div
					className={cn(classes.container)}
				>
					<Requisites />
				</div>
			</Section>
			
			<Section
				bgImage2='starsLargeBW'
				bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
				bgPos2={{ xs: "right -54px top", sm: "right -54px top", md: "right -66px top", lg: 'right -76px top' }}
				view='inverted'
				typographyTitleProps={{
					children: 'Наша команда',
				}}
				headerActions={
					<ButtonLink
						view='primary'
						to={ RoutePath.team }
					>
						Подробнее
					</ButtonLink>
				}
			>
				<Team />
			</Section>

			<Section
				bgImage1='lighthouseBW'
				bgSize1={{ xs: "500px", sm: "716px", md: "1008px", lg: '1362px' }}
				bgPos1={{ xs: "right -343px bottom -73px", sm: "right -479px bottom -108px", md: "right -662px top 40px", lg: 'right -810px top -40px' }}
				bgImage2='starsLargeBW'
				bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
				bgPos2={{ xs: "left -54px top", sm: "left -54px top", md: "left -66px top", lg: 'left -76px top' }}
				className={cn(classes['section-contacts'])}
				id='contacts'
			>
				<div
					className={cn(classes.row)}
				>
					<div
						className={cn(classes['md:row-cols-6'], classes['section-contacts__map'])}
					>
						<YMap />
					</div>
					<div
						className={cn(classes['md:row-cols-5'], classes['md:col-start-8'], classes['section-contacts__info'])}
					>
						<SectionHeader
							typographyTitleProps={{
								children: 'Контакты',
								color: 'accent-secondary',
							}}
						/>
						
						<SectionWrapper>
							<Contacts
								view='secondary-light'
								contactsSocialsList={ contactsSocialsList }
								contactsLinkList={ contactsLinkList }
							/>
						</SectionWrapper>
					</div>
				</div>
			</Section>
		</Fragment>
	);
};

export default AboutPage;