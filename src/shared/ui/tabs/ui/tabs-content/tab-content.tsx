import React from 'react';
import { TabContentProps } from '../../model/types';
import cn from 'classnames';
import classes from '../../tabs.module.scss';
import { Typography } from 'shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { fade } from 'shared/lib/animations';

const TabContent = ({ title, description, active, className, children, actions, view }: TabContentProps) => {
	if (!active) return null;
	
	return (
		<AnimatePresence>
			<div
				className={cn(classes.container)}
			>
				<div
					className={cn(classes.tabs__content,
						className,
						{
							[classes.tabs__content + '_' + view]: view,
						}
					)}
				>
					<motion.div
						{...fade}
					>
						{ (title || description) &&
							<div className={cn(classes.tabs__info)}>
								{ title &&
									<Typography
										view='text-lg'
										className={cn(classes.tabs__title)}
										{...title}
									/>
								}
								{ description &&
									<Typography
										color='disabled'
										view='text-sm'
										className={cn(classes.tabs__description)}
										{...description}
									/>
								}
							</div>
						}
						{ children }
						{ actions &&
							<div
								className={cn(classes.tabs__actions)}
							>
								{ actions }
							</div>
						}
					</motion.div>
				</div>
			</div>
		</AnimatePresence>
	);
};

export { TabContent };
