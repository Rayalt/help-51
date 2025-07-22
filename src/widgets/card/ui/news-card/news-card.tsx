import { NewsCardProps } from '../../model/types';
import { ButtonLink, Image, Typography } from 'shared/ui';
import { RoutePath } from 'app/providers/router';
import cn from 'classnames';
import classes from '../../card.module.scss';
import { ratioClass } from 'shared/lib/hooks';

const NewsCard = ({ className, newsData, view = 'portrait' }: NewsCardProps) => {
	return (
		<div
			className={cn(
				classes.card,
				className,
				{
					[classes.card_landscape]: view === 'landscape'
				},
			)}
		>
			<div
				className={cn(classes.card__figure)}
			>
				<Image 
					cover
					className={cn(
						{
							[ratioClass({ view: '4x3' })]: view === 'portrait',
							[ratioClass({ view: '1x1' })]: view === 'landscape',
						},
						classes.card__img
					)}
					// eslint-disable-next-line max-len
					src='https://images.unsplash.com/photo-1750263239811-bfad7ceffa10?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				/>
			</div>
			
			<div
				className={cn(classes.card__inner)}
			>
				<div
					className={cn(classes.card__info)}
				>
					{ newsData.data && 
						<Typography 
							view='text-sm'
							color='disabled'
							className={cn(classes.card__title)}
						>
							{ newsData.data }
						</Typography>
					}
					{ newsData.title && 
						<Typography 
							view='text-lg'
							className={cn(classes.card__title)}
						>
							{ newsData.title }
						</Typography>
					}
				</div>
				
				<span
					className={cn(classes.card__actions)}
				>
					<ButtonLink
						to={ RoutePath.news_details + newsData.id }
						view='secondary'
					>
						Читать далее
					</ButtonLink>
				</span>
			</div>
		</div>
	);
};

export { NewsCard };