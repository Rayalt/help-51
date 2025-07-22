import React, { CSSProperties, Fragment } from 'react';
import cn from 'classnames';
import classes from '../../card.module.scss';
import { Amount, Range, Typography } from 'shared/ui';
import { EstimationProps } from '../../model/types';

const Estimation = ({ amount, base = false, view, className }: EstimationProps) => {
	const collected = amount?.collected || 0;
	const required = amount?.required || 1;
	const progress = Math.min(Math.round((collected / required) * 100), 100);
	
	return (
		<span
			className={cn({
				[classes.estimation_closed]: view === 'closed',
				[classes.estimation_shadow]: !base,
			}, 
			classes.estimation, 
			className
			)}
		>
			<Range
				className={cn(classes.estimation__range)}
				view={ view }
				ngStyle={{ '--range-bar-w': `${progress}%` } as CSSProperties }
			></Range>

			<span
				className={cn(classes.estimation__sum)}
			>
				<span
					className={cn(classes['estimation__sum-start'])}
				>
					{ view === 'closed' &&
						<Typography 
							tag='span' 
							view='text-lg'
						>
							Сбор закрыт
						</Typography>
					}

					{ view !== 'closed' &&
						<Fragment>
							<Typography 
								tag='span' 
								view='text-lg'
							>
								<Amount 
									tag='span'
									value={ amount?.collected }
								/>
							</Typography>
							<Typography 
								tag='span' 
								view='text-lg'
							>
								Собрано
							</Typography>
						</Fragment>
					}
				</span>
				
				<span
					className={cn(classes['estimation__sum-end'])}
				>
					{ view === 'closed' &&
						<Fragment>
							<Typography 
								tag='span' 
								view='text-lg'
							>
								<Amount 
									tag='span'
									value={ amount?.collected }
								/> собрано
							</Typography>
						</Fragment>
					}
					
					{ view !== 'closed' && 
						<Fragment>
							<Typography 
								tag='span'
								color='accent-secondary'
								view='text-lg'
							>
								<Amount
									tag='span'	
									value={ amount?.required }
								/>
							</Typography>
							<Typography 
								tag='span'
								color='accent-secondary'
								view='text-lg'
							>
								Необходимо
							</Typography>
						</Fragment>
					}
				</span>
			</span>
		</span>
	);
};

export { Estimation };