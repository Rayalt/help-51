import { HTMLAttributes } from 'react';
import { TypographyProps } from 'shared/ui';
import { LinkComponentProps } from 'shared/ui/links/model/types';

export interface DocumentProps extends HTMLAttributes<HTMLElement> {
	to: LinkComponentProps['to'];
	typographyTitleProps?: TypographyProps;
	typographySubtitleProps?: TypographyProps;
}