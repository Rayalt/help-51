import cn from 'classnames';

import { ImageKey, ResponsiveValue, SectionProps } from '../../model/types';
import classes from '../../section.module.scss';
import React, { CSSProperties } from 'react';
import { Svg, Typography } from 'shared/ui';
import { SectionHeader } from '../section-header/section-header';
import lighthouseBW from 'app/markup/graphics/svg/illustrations/figures/patterns/lighthouse-bw.svg';
import lighthouse from 'app/markup/graphics/svg/illustrations/figures/patterns/lighthouse.svg';
import starsSmall from 'app/markup/graphics/svg/illustrations/figures/patterns/stars-small.svg';
import starsLargeBW from 'app/markup/graphics/svg/illustrations/figures/patterns/start-large-bw.svg';
import sunBW from 'app/markup/graphics/svg/illustrations/figures/patterns/sun-bw.svg';


const SectionCols = ({ 
	image, 
	view, 
	typographyTitleProps, 
	typographyDescriptionProps, 
	className,
	children, 
	headerActions,
	sectionNav,
	bgImage1,
	bgImage2,
	bgPos1,
	bgPos2,
	bgSize1,
	bgSize2,
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
		if (typeof value === 'string') return { [`--section-${propName}`]: value };

		return {
			[`--xs-section-${propName}`]: value.xs ?? '',
			[`--sm-section-${propName}`]: value.sm ?? '',
			[`--md-section-${propName}`]: value.md ?? '',
			[`--lg-section-${propName}`]: value.lg ?? '',
		};
	};

	const style: CSSProperties = {
		...(getImageUrl(bgImage1) ? { '--section-bg-image-1': `url(${getImageUrl(bgImage1)})` } : {}),
		...(getImageUrl(bgImage2) ? { '--section-bg-image-2': `url(${getImageUrl(bgImage2)})` } : {}),
		...setResponsiveCssVars('bg-pos-1', bgPos1),
		...setResponsiveCssVars('bg-pos-2', bgPos2),
		...setResponsiveCssVars('bg-size-1', bgSize1),
		...setResponsiveCssVars('bg-size-2', bgSize2),
	};
	
	
	return (
		<section
			style={ style }
			className={cn({
				[classes.section_inverted]: view === 'inverted',
			}, classes.section, className)}
		>
			<div
				className={cn(classes.container, classes.section__container)}
			>
				<div
					className={'row'}
				>
					{ image &&
						<div
							className={'md:col-4 sm:col-4 col-7'}
						>
							<Svg 
								name={ image }
								className={ cn(classes.section__image) }
								base
								auto
								iconCl
							/>
						</div>
						
					}
					<div
						className={cn(['md:col-8'], ['sm:col-8'], ['col-11'])}
					>
						<ul className={cn(['col-12'], classes.section__nav)}>
							{ sectionNav }
						</ul>
						
						<SectionHeader
							headerActions={ headerActions }
							color={ view === 'inverted' ? 'accent-primary' : 'accent-secondary' }
							typographyTitleProps={{
								...typographyTitleProps,
								color: 
									typographyTitleProps?.color ??
									(view === 'inverted' ? 'accent-primary' : 'accent-secondary'),
							}}
							typographyDescriptionProps={ typographyDescriptionProps }
						/>
						
						{ children }
					</div>
				</div>
			</div>
		</section>
	);
};

export { SectionCols };