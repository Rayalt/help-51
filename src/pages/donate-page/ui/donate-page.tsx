import {Section, SectionHeader, SectionWrapper, Table} from "widgets";
import {ButtonLink} from "shared/ui";
import {RoutePath} from "app/providers/router";
import {Donates} from "widgets";

const DonatePage = () => {
	return (
		<Section
			bgImage1='lighthouseBW'
			bgSize1={{ xs: "500px", sm: "716px", md: "1008px", lg: '1362px' }}
			bgPos1={{ xs: "right -336px bottom -256px", sm: "right -464px bottom -272px", md: "right -662px bottom -296px", lg: 'right -810px bottom -340px' }}
			bgImage2='starsLargeBW'
			bgSize2={{ xs: "500px", sm: "600px", md: "700px", lg: '866px' }}
			bgPos2={{ xs: "left -54px top", sm: "left -54px top", md: "left -66px top", lg: 'left -76px top' }}
			typographyTitleProps={{
				tag: 'h2',
				view: 'section-title',
				children: 'Пожертвования'
			}}
			headerActions={
				<ButtonLink 
					to={
						RoutePath.search
					}
					view='secondary-light'
				>
					Поиск пожертвований
				</ButtonLink>
			}
		>
			<Donates />
		</Section>
	);
};

export default DonatePage;