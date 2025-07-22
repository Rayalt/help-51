import {HTMLProps} from "react";
import {BtnProps, ButtonLinkProps} from "shared/ui/buttons/model/types";
import {TypographyProps} from "shared/ui";
import {ClientsType} from "shared/config/clients";
import {NewsType} from "shared/config/news";

export interface CardProps extends HTMLProps<HTMLElement> {
	view?: ClientsType['view'];
	base?: boolean;
	onClick: BtnProps['onClick'];
	colorTitle?: TypographyProps['color'];
	cardData?: ClientsType;
	viewTitle?: TypographyProps['view'];
}

export interface NewsCard extends HTMLProps<HTMLElement> {
	view?: 'landscape' | 'portrait';
	newsData: NewsType;
}

export interface EstimationProps extends HTMLProps<HTMLElement> {
	amount?: ClientsType['amount']; 
	view?: ClientsType['view'];
	base?: boolean;
}