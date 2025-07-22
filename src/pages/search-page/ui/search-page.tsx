import { Contacts, Section, SectionHeader } from 'widgets';
import { Input } from 'shared/ui';
import { contactsLinkListEmail } from 'shared/config/contacts';
import cn from 'classnames';
import classes from '../search-page.module.scss';

const SearchPage = () => {
	return (
		<Section>
			<div
				className={cn(classes.row)}
			>
				<div
					className={cn(classes['sm:col-10'], classes['md:col-8'])}
				>
					<SectionHeader
						typographyTitleProps={{
							children: 'Поиск пожертвований',
							color: 'accent-secondary',
						}}
						/* eslint-disable max-len */
						typographyDescriptionProps={[{
							children: `
								На этой странице вы можете найти своё пожертвование по номеру телефона или email. 
								Если это не удалось — пожалуйста, свяжитесь с нами по электронной почте, приложив 
								скриншот или фото подтверждения успешной транзакции. Мы всё проверим и обязательно ответим
							`,
						}]}
						/* eslint-enable max-len */
					>
						<Contacts
							contactsLinkList={ contactsLinkListEmail }
							view='secondary-light'
							color='primary'
						/>
					</SectionHeader>
				</div>
			</div>
			
			<Input 
				placeholder='Найти пожертвование'
				view='secondary'
			/>
		</Section>
	);
};

export default SearchPage;