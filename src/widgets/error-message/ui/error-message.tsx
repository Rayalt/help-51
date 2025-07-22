import { Fragment } from 'react';
import { Button } from 'shared/ui/buttons';

const ErrorMessage = () => {

	const reloadPage = () => {
		location.reload();
	};

	return (
		<Fragment>
			<p>
				Что-то пошло не так
			</p>

			<Button
				onClick={ reloadPage }
				view='primary'
			>
				Обновить страницу
			</Button>
		</Fragment>
	);
};

export { ErrorMessage };