import { Button } from 'shared/ui';
import { useNavigate } from 'react-router-dom';
import { Section } from 'widgets/section';

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
			<Button
				view='primary'
				onClick={onBackHandler}
			>
				Назад
			</Button>
		</Section>
	);
};

export { NotFoundPage };