import { HTMLProps, ReactNode } from 'react';
import { TypographyProps } from 'shared/ui';
import { SvgProps } from 'shared/ui/svg/model/types';

export interface ResponsiveValue {
	xs?: string;
	sm?: string;
	md?: string;
	lg?: string;
}

export type ImageKey = 'lighthouse' | 'lighthouseBW' | 'starsSmall' | 'starsLargeBW' | 'sunBW';

export interface SectionProps extends HTMLProps<HTMLElement> {
	view?: 'primary' | 'inverted';
	last?: boolean;
	sectionSize?: 'lg';
	sectionNav?: ReactNode;
	container?: boolean;
	wrapper?: boolean;
	typographyTitleProps?: TypographyProps;
	color?: TypographyProps['color'];
	typographyDescriptionProps?: TypographyProps[];
	typographyWidgetTitleProps?: TypographyProps;
	typographyWidgetDescrProps?: TypographyProps;
	headerActions?: ReactNode;
	sectionMainAction?: ReactNode;
	id?: string;
	showActions?: boolean;
	image?: SvgProps['name'];
	bgImage?: ImageKey;
	bgImage1?: ImageKey | ResponsiveValue;
	bgImage2?: ImageKey | ResponsiveValue;
	bgPos1?: string | ResponsiveValue;
	bgPos2?: string | ResponsiveValue;
	bgSize1?: string | ResponsiveValue;
	bgSize2?: string | ResponsiveValue;
}

export interface SectionMainActionProps extends HTMLProps<HTMLElement> {
}

export interface SectionWidgetProps extends HTMLProps<HTMLElement> {
}
