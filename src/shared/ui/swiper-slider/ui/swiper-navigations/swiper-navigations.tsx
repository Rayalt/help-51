import {Fragment} from "react";
import {Button} from "shared/ui";
import cn from "classnames";
import classes from "shared/ui/swiper-slider/swiper-slider.module.scss";
import {SwiperSliderProps} from "shared/ui/swiper-slider/model/types";

const SwiperNavigations = ({ view = 'primary-light', sliderId }: SwiperSliderProps) => {
	return (
		<Fragment>
			<Button
				square
				addonLeft='arrowLeft'
				addonLeftView='sm'
				title='Назад'
				view={ view }
				className={cn(classes['slider-nav-prev'],
					`slider-nav-prev_${sliderId}`
				)}
			></Button>
		
			<Button
				square
				addonLeft='arrowRight'
				addonLeftView='sm'
				title='Вперёд'
				view={ view }
				className={cn(classes['slider-nav-next'], 
					`slider-nav-next_${sliderId}`	
				)}
			></Button>
		</Fragment>
	);
};

export { SwiperNavigations };