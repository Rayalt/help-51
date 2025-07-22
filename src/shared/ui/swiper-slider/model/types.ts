import { SwiperProps } from 'swiper/swiper-react';
import { BtnProps } from 'shared/ui/buttons/model/types';

export interface SwiperSliderProps extends SwiperProps {
	view?: BtnProps['view'];
	navigationSelectors?: {
		nextEl: string;
		prevEl: string;
	};
	onToggleNavigation?: (isVisible: boolean) => void;
	sliderId: string;
}