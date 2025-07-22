import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {SwiperSliderProps} from "../../model/types";
import {Button} from "shared/ui";
import cn from "classnames";
import classes from '../../swiper-slider.module.scss';
import {useState} from "react";

const SwiperSlider = ({
	view, 
	children,
	sliderId,
	navigationSelectors = {
		nextEl: `.slider-nav-next_${sliderId}`,
		prevEl: `.slider-nav-prev_${sliderId}`,
	},
	onToggleNavigation,
}: SwiperSliderProps) => {
	const [showNavigation, setShowNavigation] = useState(false);
	
	const handleSwiperUpdate = (swiper: SwiperClass) => {
		const perView = typeof swiper.params.slidesPerView === 'number'
			? swiper.params.slidesPerView
			: swiper.slidesPerViewDynamic();

		const shouldShow = swiper.slides.length > perView;
		setShowNavigation(shouldShow);
		onToggleNavigation?.(shouldShow); // сообщаем родителю
	};
	
	return (
		<div
			className={cn(
				classes.slider,
				{
					[classes.slider_secondary]: view === 'secondary-light',
				}
			)}
		>
			<Swiper
				modules={[
					Navigation, 
					Pagination,
				]}
				breakpoints={{
					0: {
						slidesPerView: 1,
						spaceBetween: 24,
					},
					600: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					1440: {
						slidesPerView: 3,
						spaceBetween: 32,
					},
				}}
				slidesPerView={ 1 }
				navigation={ showNavigation ? navigationSelectors : false }
				pagination={{
					clickable: true
				}}
				loop={ true }
				className={ cn(classes.slider__content) }
				onInit={ handleSwiperUpdate }
				onResize={ handleSwiperUpdate }
			>
				{ children }
			</Swiper>
		</div>
	);
};

export { SwiperSlider };
