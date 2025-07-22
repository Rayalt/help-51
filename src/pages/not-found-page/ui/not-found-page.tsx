import {Button} from "shared/ui";
import {useNavigate} from "react-router-dom";
import {Section, SectionWrapper} from "widgets/section";

const NotFoundPage = () => {
	const navigate = useNavigate();
	
	const onBackHandler = () => {
		navigate(-1);
	}
	
	return (
		<Section
			typographyTitleProps={{
				children: 'Страница не найдена',
			}}
		>
			<SectionWrapper>
				<Button
					view='primary'
					onClick={onBackHandler}
				>
					Назад
				</Button>
			</SectionWrapper>
		</Section>
	);
};

export { NotFoundPage };