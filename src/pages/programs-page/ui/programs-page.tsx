import { Section } from 'widgets';
import { ProgramsTabs } from 'widgets/programs-tabs/ui/programs-tabs';

const ProgramsPage = () => {
	return (
		<Section
			wrapper
			container={ false }
			bgImage1='lighthouseBW'
			bgSize1={{ xs: '500px', sm: '716px', md: '1008px', lg: '1362px' }}
			bgPos1={{ 
				xs: 'right -336px bottom -156px', 
				sm: 'right -464px bottom -272px', 
				md: 'right -662px bottom -496px', 
				lg: 'right -810px bottom -640px' 
			}}
			bgImage2='starsLargeBW'
			bgSize2={{ xs: '500px', sm: '600px', md: '700px', lg: '866px' }}
			bgPos2={{ xs: 'left -54px top', sm: 'left -54px top', md: 'left -66px top', lg: 'left -76px top' }}
			typographyTitleProps={{
				children: 'Программы благотворительного фонда',
			}}
		>
			<ProgramsTabs />
		</Section>
	);
};

export default ProgramsPage;