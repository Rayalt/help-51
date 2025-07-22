import { Contacts, Section,  SectionHeader } from 'widgets';
import { Col, Row, Svg, Typography } from 'shared/ui';
import cn from 'classnames';
import classes from '../partnership-page.module.scss';
import { DataWidget } from 'widgets/data-widget/ui/data-widget';
import { contactsLinkListShort } from 'shared/config/contacts';
import React, { Fragment } from 'react';
import { ratioClass } from 'shared/lib/hooks';

const PartnershipPage = () => {
	return (
		<Fragment>
			<Section
				bgImage2='starsLargeBW'
				bgSize2={{ xs: '500px', sm: '600px', md: '700px', lg: '866px' }}
				bgPos2={{ xs: 'left -54px top', sm: 'left -54px top', md: 'left -66px top', lg: 'left -76px top' }}
				view='inverted'
			>
				<Row>
					<Col
						gridCols={{
							sm: 10, 
							md: 8,
						}}
					>
						<SectionHeader
							typographyTitleProps={{
								children: 'Сотрудничество',
								color: 'accent-primary',
							}}
							typographyDescriptionProps={[
								{
									children: `
										Помощь — это не только финансовая поддержка. 
										Фонд «Вызов» открыт к партнёрству и всегда рад новым возможностям. 
										Мы ищем единомышленников: организации, компании и частных лиц, 
										готовых объединить усилия ради добрых перемен. 
										Если у вас есть идеи, проекты или предложения — давайте обсудим!
									`,
								},
								{
									children: `
										Вместе мы можем больше. Свяжитесь с нами:
									`,
								},
							]}
						>
							<Contacts
								contactsLinkList={ contactsLinkListShort }
								view='secondary-light'
								color='primary'
							/>
						</SectionHeader>
					</Col>
				</Row>
			</Section>
			
			<Section
				bgImage2='starsLargeBW'
				bgSize2={{ xs: '500px', sm: '600px', md: '700px', lg: '866px' }}
				bgPos2={{ xs: 'right -54px top', sm: 'right -54px top', md: 'right -66px top', lg: 'right -76px top' }}
				typographyTitleProps={{
					children: 'Генеральный партнер фонда',
				}}
			>
				<Row>
					<Col
						gridCols={{
							xs: 7, 
							sm: 4, 
							md: 3,
						}}
					>
						<DataWidget
							base
						>
							<div
								className={cn(ratioClass({ view: '1x1' }))}
							>
								<Svg 
									name='ads' 
									base
									iconCl
									auto
								/>
							</div>
						</DataWidget>
					</Col>
				</Row>
			</Section>
			
			<Section
				bgImage2='starsLargeBW'
				bgSize2={{ xs: '500px', sm: '600px', md: '700px', lg: '866px' }}
				bgPos2={{ xs: 'left -54px top', sm: 'left -54px top', md: 'left -66px top', lg: 'left -76px top' }}
				view='inverted'
				typographyTitleProps={{
					children: 'Партнеры фонда',
				}}
			>
				<div
					className='row'
				>
					<div
						className='md:col-3 sm:col-4 col-7'
					>
						<div
							className={cn(ratioClass({ view: '1x1' }), classes['partner-card'])}
						>
							<Typography
								view='subtitle'
								color='accent-primary'
							>
								Здесь
								<br />
								может быть
								<br />
								ваш логотип
							</Typography>
						</div>
					</div>
				</div>
			</Section>
			
			{/* Вакасии скрыты */}
			{/*<Section*/}
			{/*	typographyTitleProps={{*/}
			{/*		children: 'Вакансии',*/}
			{/*	}}*/}
			{/*	id='jobs'*/}
			{/*>*/}
			{/*	<SectionWrapper>*/}
			{/*		<div */}
			{/*			className={ cn(classes.row, classes['sm:row-cols-2']) }*/}
			{/*		>*/}
			{/*			*/}
			{/*			<DataWidget */}
			{/*				widgetData={{*/}
			{/*					title: 'Психолог',*/}
			{/*					description: 'Описание вакансии',*/}
			{/*					action: */}
			{/*						<ButtonLink*/}
			{/*							view='secondary'*/}
			{/*							to={RoutePath.jobs_details + '111'}*/}
			{/*						>*/}
			{/*							Откликнуться*/}
			{/*						</ButtonLink>*/}
			{/*				}}*/}
			{/*			/>*/}
			{/*			<DataWidget */}
			{/*				widgetData={{*/}
			{/*					title: 'Помощник юриста',*/}
			{/*					description: 'Описание вакансии',*/}
			{/*					action: */}
			{/*						<ButtonLink*/}
			{/*							view='secondary'*/}
			{/*							to={RoutePath.jobs_details + '222'}*/}
			{/*						>*/}
			{/*							Откликнуться*/}
			{/*						</ButtonLink>*/}
			{/*				}}*/}
			{/*			/>*/}
			{/*		</div>*/}
			{/*	</SectionWrapper>*/}
			{/*</Section>*/}
		</Fragment>
	);
};

export default PartnershipPage;