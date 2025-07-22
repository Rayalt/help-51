import { ButtonCard, NewsCard, Section, SectionMainAction, SectionWrapper } from 'widgets';
import { Clients } from 'shared/config/clients';
import { Pagination } from 'shared/ui';
import cn from 'classnames';
import classes from 'pages/helped-page/helped-page.module.scss';
import { news } from 'shared/config/news';

const NewsPage = () => {
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
			typographyTitleProps={{
				children: 'Новости'
			}}
			sectionMainAction={
				<Pagination />
			}
		>
			<div
				className={cn(classes.row, classes['sm:row-cols-2'], classes['md:row-cols-3'])}
			>
				{ news.map(newsItem => (
					<NewsCard
						key={ newsItem.id }
						newsData={ newsItem }
					/>
				)) }
			</div>
		</Section>
	);
};

export default NewsPage;