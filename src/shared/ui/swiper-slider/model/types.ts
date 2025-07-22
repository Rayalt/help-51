import {SwiperProps, SwiperSlideProps} from "swiper/swiper-react";
import {HTMLProps, Ref} from "react";
import {BtnProps} from "shared/ui/buttons/model/types";
import {SwiperSlide} from "swiper/swiper-element";

export interface SwiperSliderProps extends SwiperProps {
	view?: BtnProps['view'];
	navigationSelectors?: {
		nextEl: string;
		prevEl: string;
	};
	onToggleNavigation?: (isVisible: boolean) => void;
	sliderId: string;
}