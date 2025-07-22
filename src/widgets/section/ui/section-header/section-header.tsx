import cn from "classnames";
import { SectionProps} from "../../model/types";
import classes from '../../section.module.scss';
import {Typography} from "shared/ui";
import React, {Fragment} from "react";
import {SectionDescription} from "widgets";

const SectionHeader = ({showActions = true, typographyTitleProps, children, typographyDescriptionProps, headerActions, className}: SectionProps) => {
	// const descrContent = typographyDescrProps?.map((descr) => (
	// 	<Typography
	// 		key={ descr.toString() }
	// 		className={cn(classes.section__descr, className)}
	// 		{ ...descr }
	// 	>
	// 		{ descr.children }
	// 	</Typography>
	// ));
	
	return (
		<div className={ className }>
			<div className={cn(classes.section__header)}>
				<Typography
					tag='h2'
					view='section-title'
					color={ typographyTitleProps?.color }
					className={cn(classes.section__title)}
					{ ...typographyTitleProps }
				/>
				
				{ headerActions &&
					<div
						className={cn(
							classes['section__header-actions'],
							{
								[classes['section__header-actions_show']]: showActions,
							},
						)}
					>
						{ headerActions }
					</div>
				}
			</div>
			{ typographyDescriptionProps &&
				<div
					className={cn(classes.section__text)}
				>
					{ typographyDescriptionProps.map((description) => (
						<Typography
							key={ description.toString() }
							{ ...description }
						/>
					))}
				</div>
			}
			{ children &&
				<div
					className={cn(classes.section__addon)}
				>
					{ children }
				</div>
			}
		</div>
	);
};

export { SectionHeader };