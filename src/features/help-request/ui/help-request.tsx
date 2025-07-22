import cn from 'classnames';
import classes from '../help-request.module.scss';
import {Citizenship, citizenship, HelpGender, helpGender, HelpRequestProps} from "features/help-request/model/types";
import {DataWidget} from "widgets/data-widget/ui/data-widget";
import {FormCard} from "widgets";
import {itemContentType} from "widgets/form-card/model/types";
import {Button, Chips, Dropdown, Hint, Input, MaskedInput, Textarea} from "shared/ui";
import {Controller, useForm} from "react-hook-form";
import React, {Fragment, useState} from "react";
import {Programs, ProgramTypes} from "shared/config/programs";

const HelpRequest = ({ children, className }: HelpRequestProps) => {
	const {control, handleSubmit, register, formState: {errors}} = useForm({
		defaultValues: {
			fullName: '',
			fullNameParent: '',
			gender: '',
			birthday: '',
			address: '',
			phone: '',
			email: '',
			requiredSum: '',
			comment: '',
		},
	});
	
	const [selectedProgram, setSelectedProgram] = useState<ProgramTypes | undefined>(undefined);
	const [selectedCitizenship, setSelectedCitizenship] = useState<Citizenship | undefined>(undefined);
	const MAX_SUM = 1_000_000_000_000;
	
	const formData: itemContentType[] = [
		{
			label: 'Фамилия, имя и отчество того, кому нужна помощь',
			field:
				<Fragment>
					<Input
						placeholder='Фамилия Имя Отчество'
						{...register('fullName', {
							required: 'Укажите имя'
						})}
						view={errors.fullName ? 'error' : undefined}
					/>
					{errors.fullName &&
						<Hint color="error">{errors.fullName.message}</Hint>
					}
				</Fragment>
		},
		{
			label: 'Фамилия, имя и отчество представителя, если помощь нужна другому',
			field:
				<Fragment>
					<Input
						placeholder='Фамилия Имя Отчество'
						{ ...register('fullNameParent') }
						view={errors.fullNameParent ? 'error' : undefined}
					/>
				</Fragment>
		},
		{
			label: 'Пол',
			field:
				<Fragment>
					<div className={cn(classes['help-request__chips'])}>
						<Controller
							name="gender"
							control={control}
							rules={{required: 'Укажите пол'}}
							render={({field}) => (
								<Chips
									chips={helpGender}
									inputName="gender"
									size="md"
									checkedValue={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
					{errors.gender && (
						<Hint color="error">{errors.gender.message}</Hint>
					)}
				</Fragment>
		},
		{
			label: 'Дата рождения того, кому нужна помощь',
			field:
				<Controller
					name="birthday"
					control={control}
					rules={{
						required: 'Укажите дату рождения',
						validate: (val) => {
							if (!val || val.length !== 10) return 'Введите дату в формате ДД.ММ.ГГГГ';

							const [day, month, year] = val.split('.').map(Number);
							const date = new Date(year, month - 1, day);

							// Проверка на существование даты
							if (
								date.getFullYear() !== year ||
								date.getMonth() !== month - 1 ||
								date.getDate() !== day
							) {
								return 'Введите корректную дату';
							}

							// Проверка возраста
							const today = new Date();
							const age = today.getFullYear() - year - (
								today.getMonth() + 1 < month ||
								(today.getMonth() + 1 === month && today.getDate() < day) ? 1 : 0
							);

							if (age < 0) return 'Возраст должен быть меньше 0';
							if (age > 110) return 'Возраст не должен превышать 110 лет';

							return true;
						},
					}}
					render={({field}) => (
						<Fragment>
							<MaskedInput
								mask="99.99.9999"
								placeholder="Дата рождения"
								value={field.value || ''}
								onChange={(e) => {
									const raw = e.target.value.replace(/[^\d.]/g, '');
									field.onChange(raw);
								}}
								view={errors.birthday ? 'error' : undefined}
							/>
							{errors.birthday && (
								<Hint color="error">{errors.birthday.message}</Hint>
							)}
						</Fragment>
					)}
				/>
		},
		{
			label: 'Программа',
			field:
				<Dropdown
					options={ Programs }
					value={ selectedProgram }
					onChange={ setSelectedProgram }
					placeholder="Выберите программу"
				/>
		},
		{
			label: 'Адрес проживания',
			field:
				<Fragment>
					<Input
						placeholder='Ваш адрес'
						{...register('address', {
							required: 'Укажите город'
						})}
						view={errors.address ? 'error' : undefined}
					/>
					{errors.address &&
						<Hint color="error">{errors.address.message}</Hint>
					}
				</Fragment>
		},
		{
			label: 'Гражданство',
			field:
				<Dropdown
					options={ citizenship }
					value={ selectedCitizenship }
					onChange={ setSelectedCitizenship }
					placeholder="Гражданство"
				/>
		},
		{
			label: 'Ваш email',
			field:
				<Fragment>
					<Input
						placeholder='Ваш email'
						{...register('email', {
							required: 'Укажите email',
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
			label: 'Контактный телефон',
			field: (
				<Controller
					name="phone"
					control={control}
					rules={{
						required: 'Укажите телефон',
						validate: (val) => /^\+7\d{10}$/.test(val) || 'Введите корректный номер',
					}}
					render={({field}) => (
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
			label: 'Необходимая сумма',
			field:
				<Controller
					name="requiredSum"
					control={control}
					rules={{
						required: 'Введите сумму',
						validate: (val) => {
							if (!val) return 'Введите сумму';
							const numericVal = BigInt(val);
							if (numericVal > BigInt(MAX_SUM)) return `Максимальная сумма — ${MAX_SUM.toLocaleString()}`;
							if (numericVal <= 0) return 'Сумма должна быть больше 0';
							return true;
						}
					}}
					render={({field}) => (
						<Fragment>
							<MaskedInput
								mask='999999999'
								placeholder="Введите сумму"
								value={field.value || ''}
								onChange={(e) => {
									const raw = e.target.value.replace(/\D/g, '');
									if (raw === '') {
										field.onChange('');
										return;
									}
									const numericVal = BigInt(raw);
									if (numericVal > BigInt(MAX_SUM)) {
										field.onChange(MAX_SUM.toString());
									} else {
										field.onChange(raw);
									}
								}}
								view={errors.requiredSum ? 'error' : undefined}
							/>
							{errors.requiredSum && <Hint color="error">{errors.requiredSum.message}</Hint>}
						</Fragment>
					)}
				/>
		},
		{
			label: 'Подробно опишите ситуацию',
			field:
				<Fragment>
					<Textarea
						placeholder="Комментарий"
						{...register('comment', {
							required: 'Пожалуйста, подробно опишите ситуацию',
							minLength: {
								value: 10,
								message: 'Слишком короткое описание, напишите хотя бы строчку',
							},
							maxLength: {
								value: 2000,
								message: 'Комментарий не должен превышать 2000 символов',
							},
						})}
						view={errors.comment ? 'error' : undefined}
					/>
					{errors.comment && (
						<Hint color="error">{errors.comment.message}</Hint>
					)}
				</Fragment>
		},
	];
	
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
	
	return (
		<DataWidget
			base
		>
			<FormCard
				onSubmit={ handleSubmit(onSubmit) }
				itemContent={ formData }
				className={cn(classes['help-request'])}
			/>
		</DataWidget>
	);
};

export { HelpRequest };