import {ButtonCard, Section, SectionHeader, SectionMainAction, SectionWrapper} from "widgets";
import cn from "classnames";
import classes from '../want-to-help-page.module.scss';
import {RoutePath} from "app/providers/router";
import {useNavigate} from "react-router-dom";
import {SwiperSlider} from "shared/ui";
import {SwiperSlide} from "swiper/react";
import {Clients} from "shared/config/clients";
import {DonateFormTabs} from "features";

const WantToHelpPage = () => {
	return (
		<Section
			bgImage1='lighthouseBW'
			bgSize1={{ xs: "500px", sm: "716px", md: "1008px", lg: '1362px' }}
			bgPos1={{ xs: "right -336px bottom -256px", sm: "right -464px bottom -272px", md: "right -662px bottom -296px", lg: 'right -810px bottom -340px' }}
			bgImage2='starsLargeBW'
			bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
			bgPos2={{ xs: "left -54px top", sm: "left -54px top", md: "left -66px top", lg: 'left -76px top' }}
			wrapper
			container={ false }
			typographyTitleProps={{
				children: 'Пожертвовать'
			}}
		>
			<DonateFormTabs />
		</Section>
	);
};

export default WantToHelpPage;