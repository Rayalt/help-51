import { Section } from 'widgets';
import cn from 'classnames';
import classes from '../team-page.module.scss';
import { Image, Typography } from 'shared/ui';
import { ratioClass } from 'shared/lib/hooks';
import { team } from 'widgets/team/model/team';

const TeamPage = () => {
	return (
		<Section
			typographyTitleProps={{
				children: 'Наша команда',
			}}
		>
			{ team.map(item =>
				<div
					key={ item.id }
					className={cn('row', classes['team-element'])}
				>
					<Image
						src={ item.photo }
						alt=''
						cover
						className={cn(
							ratioClass({ view: '1x1' }),
							classes['sm:col-3'], 
							classes['col-5'], 
							classes['team-element__img']
						)}
					></Image>
					
					<div
						className={ cn(classes['team-element__info'], classes['sm:col-8'])}
					>
						<div
							className={ cn(classes['team-element__name'])}
						>
							{ item.name &&
								<Typography
									tag='h2'
									view='subtitle'
									color='accent-secondary'
								>
									{ item.name.join(' ') }
								</Typography>
							}
							
							{ item.position &&
								<Typography
									color='disabled'
								>
									{ item.position }
								</Typography>
							}
						</div>
	
						{ item.description &&
							<Typography
							>
								{ item.description }
							</Typography>
						}
					</div>
				</div>
			)}
		</Section>
	);
};

export default TeamPage;