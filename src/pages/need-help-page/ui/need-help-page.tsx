import { Fragment } from 'react';
import { Section, SectionHeader } from 'widgets';
import { Link } from 'shared/ui';
import cn from 'classnames';
import classes from '../need-help-page.module.scss';
import { HelpRequest } from 'features/help-request/ui/help-request';

const NeedHelpPage = () => {
	return (
		<Section
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
		>
			<div
				className={cn(classes.row)}
			>
				<SectionHeader
					className={cn(classes['sm:col-8'])}
					typographyTitleProps={{
						children: 'Заявка на помощь',
						color: 'accent-secondary',
					}}
					typographyDescriptionProps={[
						/* eslint-disable no-irregular-whitespace */
						{
							children: `
								Оказались в трудной ситуации и нуждаетесь в поддержке? Расскажите нам 
								о своей проблеме — мы приложим максимум усилий, чтобы найти возможность 
								помочь и поддержать вас в это непростое время
							`,
						},
						/* eslint-enable no-irregular-whitespace */
						{
							children: (
								<Fragment>
									Пожалуйста, не забудьте приложить 
									к форме <Link to='/'>перечень необходимых документов</Link> — это поможет 
									нам быстрее рассмотреть вашу заявку. Заполните форму
								</Fragment>
							),
						},
					]}
				/>
			</div>
			
			<HelpRequest />
		</Section>
	);
};

export default NeedHelpPage;