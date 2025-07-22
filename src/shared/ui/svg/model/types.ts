import React, {SVGAttributes} from 'react';

import { ReactComponent as ArrowLeft } from 'app/markup/graphics/svg/icons/arrow-left.svg';
import { ReactComponent as ArrowLeftShort } from 'app/markup/graphics/svg/icons/arrow-left-short.svg';
import { ReactComponent as ArrowRight } from 'app/markup/graphics/svg/icons/arrow-right.svg';
import { ReactComponent as ArrowRightShort } from 'app/markup/graphics/svg/icons/arrow-right-short.svg';
import { ReactComponent as Banknotes } from 'app/markup/graphics/svg/icons/banknotes.svg';
import { ReactComponent as Book } from 'app/markup/graphics/svg/icons/book.svg';
import { ReactComponent as Download } from 'app/markup/graphics/svg/icons/download.svg';
import { ReactComponent as Heart } from 'app/markup/graphics/svg/icons/heart.svg';
import { ReactComponent as HeartSolid } from 'app/markup/graphics/svg/icons/heart-solid.svg';
import { ReactComponent as Mail } from 'app/markup/graphics/svg/icons/mail.svg';
import { ReactComponent as People } from 'app/markup/graphics/svg/icons/people.svg';
import { ReactComponent as Phone } from 'app/markup/graphics/svg/icons/phone.svg';
import { ReactComponent as Placemark } from 'app/markup/graphics/svg/icons/placemark.svg';
import { ReactComponent as Search } from 'app/markup/graphics/svg/icons/search.svg';
import { ReactComponent as UserPlus } from 'app/markup/graphics/svg/icons/user-plus.svg';
import { ReactComponent as VK } from 'app/markup/graphics/svg/icons/vk.svg';
import { ReactComponent as WhatsApp } from 'app/markup/graphics/svg/icons/whatsapp.svg';
import { ReactComponent as Telegram } from 'app/markup/graphics/svg/icons/telegram.svg';
import { ReactComponent as ChevronDown } from 'app/markup/graphics/svg/icons/chevron-down.svg';
import { ReactComponent as Menu } from 'app/markup/graphics/svg/icons/menu.svg';
import { ReactComponent as Cross } from 'app/markup/graphics/svg/icons/cross.svg';
import { ReactComponent as Logo } from 'app/markup/graphics/svg/illustrations/logo/logo.svg';
import { ReactComponent as LogoSquare } from 'app/markup/graphics/svg/illustrations/logo/logo-square.svg';
import { ReactComponent as mir } from 'app/markup/graphics/svg/illustrations/figures/mir.svg';
import { ReactComponent as SBP } from 'app/markup/graphics/svg/illustrations/figures/sbp.svg';
import { ReactComponent as PDF } from 'app/markup/graphics/svg/illustrations/figures/pdf.svg';
import { ReactComponent as QrDonate } from 'app/markup/graphics/svg/illustrations/figures/qr-donate.svg';
import { ReactComponent as ADS } from 'app/markup/graphics/svg/illustrations/figures/ads.svg';
import { ReactComponent as Lighthouse } from 'app/markup/graphics/svg/illustrations/figures/patterns/lighthouse.svg';
import { ReactComponent as LighthouseBW } from 'app/markup/graphics/svg/illustrations/figures/patterns/lighthouse-bw.svg';
import { ReactComponent as StarsSmall } from 'app/markup/graphics/svg/illustrations/figures/patterns/stars-small.svg';
import { ReactComponent as StarsLargeBW } from 'app/markup/graphics/svg/illustrations/figures/patterns/start-large-bw.svg';
import { ReactComponent as SunBW } from 'app/markup/graphics/svg/illustrations/figures/patterns/sun-bw.svg';

export type IconName = 
	'arrowLeft'
	| 'arrowLeftShort'
	| 'arrowRight'
	| 'arrowRightShort'
	| 'banknotes'
	| 'book'
	| 'download'
	| 'heart'
	| 'heartSolid'
	| 'mail'
	| 'people'
	| 'phone'
	| 'placemark'
	| 'search'
	| 'userPlus'
	| 'vk'
	| 'whatsapp'
	| 'telegram'
	| 'chevronDown'
	| 'menu'
	| 'cross'
;

export type IllustrationsName = 
	'logo'
	| 'logoSquare'
	| 'mir'
	| 'sbp'
	| 'pdf'
	| 'qrDonate'
	| 'ads'
	| 'lighthouse'
	| 'lighthouseBW'
	| 'starsSmall'
	| 'starsLargeBW'
	| 'sunBW'
;

export const iconMap: Record<IconName | IllustrationsName, React.FC<React.SVGProps<SVGSVGElement>>> = {
	arrowLeft: ArrowLeft,
	arrowLeftShort: ArrowLeftShort,
	arrowRight: ArrowRight,
	arrowRightShort: ArrowRightShort,
	banknotes: Banknotes, 
	book: Book, 
	download: Download, 
	heart: Heart, 
	heartSolid: HeartSolid, 
	mail: Mail, 
	people: People, 
	phone: Phone, 
	placemark: Placemark, 
	search: Search, 
	userPlus: UserPlus, 
	vk: VK,
	whatsapp: WhatsApp,
	telegram: Telegram,
	chevronDown: ChevronDown,
	menu: Menu,
	cross: Cross,
	logo: Logo,
	mir: mir,
	sbp: SBP,
	logoSquare: LogoSquare,
	pdf: PDF,
	qrDonate: QrDonate,
	ads: ADS,
	lighthouse: Lighthouse,
	lighthouseBW: LighthouseBW,
	starsSmall: StarsSmall,
	starsLargeBW: StarsLargeBW,
	sunBW: SunBW,
};

export interface SvgProps extends SVGAttributes<SVGElement> {
	title?: string;
	view?: 'xs' | 'sm' | 'md' | 'lg';
	base?: boolean;
	name: IconName | IllustrationsName;
	iconCl?: boolean;
	auto?: boolean;
}