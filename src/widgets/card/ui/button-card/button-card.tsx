import { CardProps } from '../../model/types';
import { Button, ButtonLink, Image, Typography } from 'shared/ui';
import { RoutePath } from 'app/providers/router';
import cn from 'classnames';
import classes from '../../card.module.scss';
import { Estimation } from '../estimation/estimation';
import { ratioClass } from 'shared/lib/hooks';

const ButtonCard = ({ 
	colorTitle = 'accent-primary', 
	viewTitle = 'subtitle', 
	view = 'estimation', 
	base, 
	onClick, 
	className, 
	cardData
}: CardProps) => {
	return (
		<Button 
			onClick={ onClick }
			base
			className={cn(
				classes.card,
				className
			)}
		>
			{ !base &&
				<span
					className={cn(classes.card__figure)}
				>
					{ view === 'closed' &&
						<span
							className={cn(classes.card__label)}
						>
							Сбор закрыт
						</span>
					}
					<Image 
						className={cn(
							ratioClass({ view: '4x3' }),
							classes.card__img
						)}
						
						// eslint-disable-next-line max-len
						src='https://images.unsplash.com/photo-1750263239811-bfad7ceffa10?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					/>
				</span>
			
			}
			<span
				className={cn(classes.card__inner)}
			>
				{ !base &&
					<span
						className={cn(classes.card__info)}
					>
						{ cardData?.title && 
							<Typography 
								view={ viewTitle }
								tag='span' 
								color={ colorTitle }
								className={cn(classes.card__title)}
							>
								{ cardData.title }
							</Typography>
						}
						{ cardData?.description &&
							<Typography 
								tag='span' 
								color='disabled'
								className={cn(classes.card__text)}
							>
								{ cardData.description }
							</Typography>
						}
					</span>
				}
				
				{ view === 'estimation' &&
					<Estimation
						base
						className={cn(classes.card__estimation)}
						view={ view }
						amount={ cardData?.amount }
					/>
				}
				
				{ !base &&
					<span
						className={cn(classes.card__actions)}
					>
						{ view !== 'closed' &&
							<ButtonLink
								to={ RoutePath.news }
								view='primary'
							>
								Помочь
							</ButtonLink>
						}
						{ view !== 'news' &&
							<ButtonLink
								className={cn(classes.card__history)}
								to={ RoutePath.news }
								addonLeft='book'
								shape='link'
								size='sm'
							>
								Узнать историю
							</ButtonLink>
						}
					</span>
				}
			</span>
		</Button>
	);
};

export { ButtonCard };