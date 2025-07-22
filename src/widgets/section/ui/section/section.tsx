import cn from "classnames";
import {ImageKey, ResponsiveValue, SectionProps} from "../../model/types";
import classes from '../../section.module.scss';
import React, {CSSProperties, Fragment, useState} from "react";
import {Typography} from "shared/ui";
import {SectionWidget} from "../section-widget/section-widget";
import { SectionHeader } from "../section-header/section-header";
import lighthouse from 'app/markup/graphics/svg/illustrations/figures/patterns/lighthouse.svg';
import lighthouseBW from 'app/markup/graphics/svg/illustrations/figures/patterns/lighthouse-bw.svg';
import starsSmall from 'app/markup/graphics/svg/illustrations/figures/patterns/stars-small.svg';
import starsLargeBW from 'app/markup/graphics/svg/illustrations/figures/patterns/start-large-bw.svg';
import sunBW from 'app/markup/graphics/svg/illustrations/figures/patterns/sun-bw.svg';


const Section = ({
	sectionMainAction, 
	last, 
	view, 
	bgImage1, 
	bgImage2, 
	bgPos1, 
	bgPos2, 
	bgSize1, 
	bgSize2, 
	wrapper, 
	container = true, 
	typographyTitleProps, 
	typographyDescriptionProps, 
	typographyWidgetTitleProps, 
	typographyWidgetDescrProps, 
	className, 
	children, 
	headerActions, 
	id, 
	sectionSize,
}: SectionProps) => {
	const imagesMap = {
		lighthouseBW,
		lighthouse,
		starsSmall,
		starsLargeBW,
		sunBW,
	};
	
	const getImageUrl = (key: ImageKey | ResponsiveValue | undefined) => {
		if (typeof key === 'string' && key in imagesMap) {
			return imagesMap[key as ImageKey];
		}
		return undefined;
	};
	
	const setResponsiveCssVars = (
		propName: 'bg-pos-1' | 'bg-pos-2' | 'bg-size-1' | 'bg-size-2',
		value: string | ResponsiveValue | undefined
	): CSSProperties => {
		if (!value) return {};
		if (typeof value === 'string') return {[`--section-${propName}`]: value};

		return {
			[`--xs-section-${propName}`]: value.xs ?? '',
			[`--sm-section-${propName}`]: value.sm ?? '',
			[`--md-section-${propName}`]: value.md ?? '',
			[`--lg-section-${propName}`]: value.lg ?? '',
		};
	};

	const style: CSSProperties = {
		...(getImageUrl(bgImage1) ? {'--section-bg-image-1': `url(${getImageUrl(bgImage1)})`} : {}),
		...(getImageUrl(bgImage2) ? {'--section-bg-image-2': `url(${getImageUrl(bgImage2)})`} : {}),
		...setResponsiveCssVars('bg-pos-1', bgPos1),
		...setResponsiveCssVars('bg-pos-2', bgPos2),
		...setResponsiveCssVars('bg-size-1', bgSize1),
		...setResponsiveCssVars('bg-size-2', bgSize2),
	};
	
	
	const sectionTypography = (
		<Fragment>
			{ typographyTitleProps && 
				<SectionHeader
					headerActions={ headerActions }
					typographyTitleProps={{
						...typographyTitleProps,
						color: typographyTitleProps?.color ?? (view === 'inverted' ? 'accent-primary' : 'accent-secondary'),
					}}
					typographyDescriptionProps={ typographyDescriptionProps }
				/>
			}
		</Fragment>
	);
	
	const sectionContent = (
		<Fragment>
			{ wrapper &&
				<div
					className={cn(classes.section__wrapper)}
				>
					{ children }
				</div>
			}

			{ !wrapper && children }
		</Fragment>
	);
	
	
	return (
		<section
			style={ style }
			className={cn({
				[classes.section_inverted]: view === 'inverted',
				[classes.section_lg]: sectionSize === 'lg',
			}, classes.section, className)}
		>
			{ id &&
				<div
					className={cn(classes.section__anchor)}
					id={ id }
				></div>	
			}
			
			{ typographyWidgetTitleProps &&
				<div
					className={cn(classes.container)}
				>
					<SectionWidget>
						<Typography
							tag='h2'
							view='section-title'
							color='accent-primary'
							className={cn(classes['section__widget-title'])}
							{ ...typographyWidgetTitleProps }
						/>
						<Typography
							className={cn(classes['section__widget-descr'])}
							{ ...typographyWidgetDescrProps }
						/>
					</SectionWidget>
				</div>
			}

			{ container &&
				<div
					className={cn(classes.container, classes.section__container)}
				>
					{ sectionTypography }
					
					{ sectionContent }
				</div>
			}
			
			{ !container &&
				<Fragment>
					{ sectionTypography && 
						<div
							className={cn(classes.container, classes.section__container)}
						>
							{ sectionTypography }
						</div>
					}
					{ sectionContent }
				</Fragment>
			}
			
			{ sectionMainAction && 
				<div
					className={cn(classes['section__main-action'])}
				>
					{ sectionMainAction }
				</div>
			}
		</section>
	);
};

export { Section };