import React, {Fragment, useState} from 'react';
import cn from "classnames";
import classes from "pages/main-page/main-page.module.scss";
import {
	Section,
	SectionCols,
	SectionDescription,
	SectionHeader,
	SectionMainAction,
	SectionWrapper
} from "widgets/section";
import {Button, ButtonLink, Svg, SwiperNavigations, SwiperSlider, Typography} from "shared/ui";
import {RoutePath} from "app/providers/router";
import {SwiperSlide} from "swiper/react";
import {ButtonCard, Contacts, Requisites, Table, YMap} from "widgets";
import {useNavigate} from "react-router-dom";
import {SectionWidget} from "widgets/section/ui/section-widget/section-widget";
import {Team} from "widgets/team/ui/team/team";
import {Programs} from "shared/config/programs";
import {Clients, ClientsType} from "shared/config/clients";
import {DataWidget} from "widgets/data-widget/ui/data-widget";
import {DonateFormTabs} from "features";
import {navbarAbout, NavbarItemType} from "shared/config/navbar";

const MainPage = () => {
	const [counter, setCounter] = useState(0);
	const navigate = useNavigate();
	
	const test = () => {
		setCounter(prevState => prevState + 1);
	}
	
	const whomToHelpHandler = (id: ClientsType['id']) => {
		return () => navigate(RoutePath.helped_details + id);
	};
	
	const programsHandler = () => {
		navigate(RoutePath.programs);
	};
	
	// const [showActions, setShowActions] = useState(false);
	
	const filteredClients = Clients.filter(client => client.view === 'estimation');
	
	const sectionNav = navbarAbout.map((item) => (
		<li
			key={ item.id }
		>
			<ButtonLink 
				to={ item.path }
				view='primary-light'
				size='sm'
			>
				{ item.text }
			</ButtonLink>
		</li>
	));
	
	return (
		<div
			className={cn(classes.about)}
		>
			<SectionCols
				bgImage1='lighthouse'
				bgSize1={{ xs: "400px", sm: "600px", md: "900px", lg: '1007px' }}
				bgPos1={{ xs: "right -247px bottom -48px", sm: "right -140px bottom -188px", md: "right -210px bottom -288px", lg: 'right -210px bottom -388px' }}
				bgImage2='starsSmall'
				bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
				bgPos2={{ xs: "left -134px top", sm: "left -234px top", md: "left -334px top", lg: 'left -434px top' }}
				view='inverted'
				className={cn(classes['section-hero'])}
				sectionNav={ sectionNav }
				typographyTitleProps={{
					tag: 'h1',
					view: 'page-title',
					children: <Fragment>Благо&shy;творительный<br />фонд помощи &laquo;Вызов&raquo;</Fragment>,
				}}
				typographyDescriptionProps={[{
					children: `
						Наш фонд помогает людям, оказавшимся в сложной жизненной ситуации. 
						Мы&nbsp;откликаемся на каждый вызов, с которым 
						к нам обращаются в трудные моменты жизни
					`
				}]}
			/>
			
			{/*<Section*/}
			{/*	typographyTitleProps={{*/}
			{/*		children: 'Кому помочь',*/}
			{/*	}}*/}
			{/*	headerActions={*/}
			{/*		<ButtonLink */}
			{/*			to={ RoutePath.whom_to_help } */}
			{/*			view='secondary-light'*/}
			{/*		>*/}
			{/*			Помочь другим*/}
			{/*		</ButtonLink>*/}
			{/*	}*/}
			{/*>*/}
			{/*	<div*/}
			{/*		className={cn(classes.row)}*/}
			{/*	>*/}
			{/*		{ filteredClients.map((client) => (*/}
			{/*			<ButtonCard*/}
			{/*				className={cn(classes['sm:col-4'])}*/}
			{/*				key={ client.id }*/}
			{/*				onClick={ whomToHelpHandler(client.id) }*/}
			{/*				cardData={ client }*/}
			{/*			/>*/}
			{/*		))}*/}
			{/*	</div>*/}
			{/*</Section>*/}
			
			<Section
				bgImage2='starsLargeBW'
				bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
				bgPos2={{ xs: "right -54px top", sm: "right -54px top", md: "right -66px top", lg: 'right -76px top' }}
				wrapper
				container={ false }
				typographyTitleProps={{
					children: 'Программы благотворительного фонда'
				}}
				headerActions={
					<SwiperNavigations
						sliderId='about-programs'
						view='secondary-light'
					/>
				}
				sectionMainAction={
					<ButtonLink 
						to={ RoutePath.programs } 
						view='secondary-light'
					>
						Все программы
					</ButtonLink>
				}
			>
				<SwiperSlider
					// onToggleNavigation={ setShowActions }
					sliderId='about-programs'
					view='secondary-light'
				>
					{ Programs.map(program => (
						<SwiperSlide
							key={ program.id }
						>
							<DataWidget
								view='interactive'
								onClick={ programsHandler }
								widgetData={ program }
								viewTitle='subtitle'
								colorTitle='accent-secondary'
							/>
						</SwiperSlide>
					))}
				</SwiperSlider>
			</Section>
			
			<Section
				wrapper
				bgImage1='lighthouseBW'
				bgSize1={{ xs: "500px", sm: "716px", md: "1008px", lg: '1362px' }}
				bgPos1={{ xs: "right -336px bottom -46px", sm: "right -464px bottom -66px", md: "right -662px bottom -93px", lg: 'right -810px bottom -126px' }}
				bgImage2='starsLargeBW'
				bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
				bgPos2={{ xs: "left -54px top", sm: "left -54px top", md: "left -66px top", lg: 'left -76px top' }}
				view='inverted'
				container={ false }
				typographyTitleProps={{
					children: 'Благотворительное пожертвование'
				}}
			>
				<DonateFormTabs />
			</Section>
		</div>
	);
};

export default MainPage;