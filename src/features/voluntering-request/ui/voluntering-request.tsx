import cn from 'classnames';
import classes from '../voluntering-request.module.scss';
import { VolunteringRequestProps } from '../model/types';
import { DataWidget } from 'widgets/data-widget/ui/data-widget';
import { FormCard } from 'widgets';
import { itemContentType } from 'widgets/form-card/model/types';
import { Hint, Input, MaskedInput, Textarea } from 'shared/ui';
import { Controller, useForm } from 'react-hook-form';
import React, { Fragment } from 'react';

const VolunteringRequest = () => {
	const { control, handleSubmit, register, formState: { errors } } = useForm({
		defaultValues: {
			fullName: '',
			age: '',
			city: '',
			phone: '',
			email: '',
			comment: '',
		},
	});
	
	const onSubmit = async (data: any) => {
		try {
			const response = await fetch('https://yourdomain.com/wp-json/custom/v1/send-volunteer-form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (result.success) {
				alert('Заявка успешно отправлена!');
			} else {
				alert('Форма фременно не отправляется');
			}
		} catch (error) {
			alert('Форма фременно не отправляется');
		}
	};
	
	const formData: itemContentType[] = [
		{
			label: 'Фамилия, имя и отчество',
			field: 
	<Fragment>
		<Input 
			placeholder='Фамилия Имя Отчество'
			{...register('fullName', { 
				required: 'Укажите имя'
			})}
			view={errors.fullName ? 'error' : undefined}
		/>
		{ errors.fullName && 
		<Hint color="error">{errors.fullName.message}</Hint> 
		}
	</Fragment>
		},
		{
			label: 'Возраст',
			field:
	<Controller
		name="age"
		control={control}
		rules={{
			required: 'Укажите возраст',
			validate: (val) =>
				Number(val) >= 1 && Number(val) <= 150 || 'Возраст от 1 до 150',
		}}
		render={({ field }) => (
			<Fragment>
				<MaskedInput
					mask="99"
					placeholder="Ваш возраст"
					value={field.value}
					onChange={(e) => {
						const raw = e.target.value.replace(/\D/g, '');
						field.onChange(raw);
					}}
					view={errors.age ? 'error' : undefined}
				/>
				{ errors.age && 
				<Hint color="error">{errors.age.message}</Hint>
				}
			</Fragment>
		)}
	/>
		},
		{
			label: 'Город проживания',
			field:
	<Fragment>
		<Input 
			placeholder='Ваш город'
			{...register('city', { 
				required: 'Укажите город'
			})}
			view={errors.city ? 'error' : undefined}
		/>
		{ errors.city && 
		<Hint color="error">{errors.city.message}</Hint> 
		}
	</Fragment>
		},
		{
			label: 'Контактный телефон',
			field: (
				<Controller
					name="phone"
					control={control}
					rules={{
						required: 'Введите телефон',
						validate: (val) => /^\+7\d{10}$/.test(val) || 'Введите корректный номер',
					}}
					render={({ field }) => (
						<Fragment>
							<MaskedInput
								view={errors.phone ? 'error' : undefined}
								mask="999 999-99-99"
								prefix="+7"
								placeholder="Ваш телефон"
								value={field.value.replace('+7', '')}
								onChange={(e) => {
									const raw = e.target.value.replace(/\D/g, '');
									field.onChange(`+7${raw}`);
								}}
								className={cn({
									[classes.error]: errors.phone,
								})}
							/>
							{errors.phone && (
								<Hint color="error">{errors.phone.message}</Hint>
							)}
						</Fragment>
					)}
				/>
			),
		},
		{
			label: 'Ваш email',
			field: 
	<Fragment>
		<Input
			placeholder='Ваш email'
			{...register('email', {
				required: 'Введите email',
				pattern: {
					value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					message: 'Введите корректный email',
				},
			})}
			view={errors.email ? 'error' : undefined}
		/>
		{errors.email && <Hint color="error">{errors.email.message}</Hint>}
	</Fragment>
		},
		{
			label: 'Комментарии и пожелания',
			field: <Textarea 
				placeholder='Комментарий' 
				{...register('comment')}
			/>,
		},
	]
	
	return (
		<DataWidget
			base
		>
			<FormCard
				onSubmit={ handleSubmit(onSubmit) }
				itemContent={ formData }
			/>
		</DataWidget>
	);
};

export { VolunteringRequest };