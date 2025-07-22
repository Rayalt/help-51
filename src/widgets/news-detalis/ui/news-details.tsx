import cn from 'classnames';
import { Section } from 'widgets';
import classes from '../news-details.module.scss';
import { Image, Typography } from 'shared/ui';
import { NewsDetailsProps } from '../model/types';
import { ratioClass } from 'shared/lib/hooks';

const NewsDetails = ({ newsItem }: NewsDetailsProps) => {
	return (
		<Section
			className={cn(classes['news-page'])}
		>
			<div
				className={'row'}
			>
				<div
					className={ 'sm:row-cols-8 md:row-cols-7' }
				>
					<Typography
						tag='h1'
						view='subtitle'
						color='accent-secondary'
					>
						{ newsItem?.title || 'Заголовок новости' }
					</Typography>
				</div>
			</div>
			<div className={'row'}>
				<div
					className={cn('sm:row-cols-8 md:row-cols-7', classes['news-page__text'])}
				>
					<Typography
						view='text-xxs'
						color='disabled'
					>
						{ newsItem?.data || '21.02.2025' }
					</Typography>
					{newsItem?.text.map(item => (
						<Typography
							key={ item }
						>
							{ item || 'Текст новости' }
						</Typography>
					))}
				</div>
				<div
					className={cn(classes['sm:row-cols-4'], classes['md:row-cols-5'])}
				>
					<div
						className={cn(ratioClass({ view: '3x2' }), classes['news-page__img'])}
					>
						<Image 
							alt=''
							cover
							// eslint-disable-next-line max-len
							src='https://images.unsplash.com/photo-1750263239811-bfad7ceffa10?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};

export { NewsDetails };