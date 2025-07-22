import cn from 'classnames';
import classes from '../donate-form-transaction.module.scss';
import React, { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import {
	Amount,
	Button,
	Checkbox,
	Chips,
	Dropdown,
	DropdownOption,
	Hint,
	Input,
	Link, MaskedInput,
	Textarea,
	Typography
} from 'shared/ui';
import {
	donateFormOptions, donateFormOptionsTitle,
	donateFormTransactionFrequency,
	donateFormTransactionSum, donateFormTransactionWay,
	DonateFormTransactionProps,
} from '../model/types';
import { DropdownOptionTitle } from 'shared/ui/forms/model/types';
import { DonateFormFields, useDonateForm } from 'shared/lib/hooks';
import { Controller } from 'react-hook-form';

const DonateFormTransaction = ({ children, className, view, clientName }: DonateFormTransactionProps) => {
	const [selectedValue, setSelectedValue] = useState<string | undefined>('На уставную деятельность фонда'); //todo
	const [amount, setAmount] = useState<number>(0);
	const [customAmount, setCustomAmount] = useState<string>('');
	
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		watch,
		formState: { errors },
		clearErrors,
		trigger,
		control,
	} = useDonateForm();
	
	const watchCustomAmount = watch('customAmount');
	const isNoComment = watch('comment') === 'comment-checkbox';

	// Обработка изменения чипса с суммой
	const handleAmountChipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = Number(e.target.value);
		setAmount(val);
		setCustomAmount('');
		setValue('customAmount', '');
		clearErrors('customAmount');
	};

	// Обработка изменения кастомной суммы
	const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setCustomAmount(input);
		setAmount(0);
		setValue('customAmount', input);
		trigger('customAmount'); 

		// Валидация кастомной суммы вручную (react-hook-form валидация сработает при submit)
		if (!input) {
			clearErrors('customAmount');
			return;
		}

		const cleaned = input.replace(/\s/g, '').replace(',', '.');
		const parsed = parseFloat(cleaned);

		if (isNaN(parsed) || parsed <= 0) {
			// Можно через setError, если захочешь
		} else {
			clearErrors('customAmount');
		}
	};

	// Итоговая сумма
	const finalAmount = useMemo(() => {
		const cleaned = watchCustomAmount?.replace(/\s/g, '').replace(',', '.');
		const parsed = parseFloat(cleaned || '');
		if (!isNaN(parsed) && parsed > 0) {
			return parsed;
		}
		return amount;
	}, [watchCustomAmount, amount]);

	const onSubmit = (data: any) => {
		// добавить дополнительную валидацию суммы 
		if (finalAmount <= 0) {
			// вывести ошибку или alert
			return;
		}

		const form = document.createElement('form');
		form.method = 'POST';
		form.action = 'https://securepay.tinkoff.ru/html/payForm';

		const params = {
			TerminalKey: 'TinkoffTest',
			Amount: finalAmount * 100,
			OrderId: String(Date.now()),
			Description: 'Пожертвование',
			SuccessURL: 'https://ваш-сайт.ру/success',
		};

		Object.entries(params).forEach(([key, value]) => {
			const input = document.createElement('input');
			input.type = 'hidden';
			input.name = key;
			input.value = value.toString();
			form.appendChild(input);
		});

		document.body.appendChild(form);
		form.submit();
	};

	return (
		<form 
			className={cn(classes['donate-form'])} 
			onSubmit={handleSubmit(onSubmit)}
		>
			{ view === 'selected' && (
				<Typography view='text-lg' className={classes['donate-form__subtitle']}>
					Благотворительное пожертвование: <Typography 
						tag='span'
						color='accent-primary'
						view='text-lg'
					>{ clientName }</Typography>
				</Typography>
			) }

			{/* Сумма */}
			<div
				className={cn(classes['donate-form__item'])}
			>
				<div
					className={cn(classes['donate-form__chips-wrapper'])}
				>
					<div
						className={cn(classes['donate-form__chips'])}
					>
						<Chips
							chips={ donateFormTransactionWay }
							size='lg'
							// onChange={ handleAmountChipChange }
							inputName='donate-way'
							// checkedValue={ amount.toString() }
						/>
					</div>
				</div>
				<Typography 
					tag='h3' 
					view='text-lg'
					className={cn(classes['donate-form__subtitle'])}
				>
					Сумма пожертвования
				</Typography>
				
				<div
					className={cn(classes['donate-form__chips-wrapper'])}
				>
					<div
						className={cn(classes['donate-form__chips'])}
					>
						<Chips
							chips={ donateFormTransactionSum }
							onChange={ handleAmountChipChange }
							inputName='donate-sum'
							size='sm'
							checkedValue={ amount.toString() }
						/>
					</div>
				</div>
				
				<div>
					<Input
						{...register('customAmount', {
							validate: value => {
								if (!value) return true;
								const cleaned = value.replace(/\s/g, '').replace(',', '.');
								const parsed = parseFloat(cleaned);
								return !isNaN(parsed) && parsed > 0 || 'Введите корректную сумму';
							}
						})}
						value={customAmount}
						onChange={handleCustomAmountChange}
						view={errors.customAmount ? 'error' : undefined}
						placeholder="Другая сумма"
						className={classes['donate-form__field']}
					/>
					{errors.customAmount && <Hint color="error">{errors.customAmount.message}</Hint>}
				</div>
			</div>

			{/* Частота */}
			<div
				className={cn(classes['donate-form__item'])}
			>
				<div
					className={cn(classes['donate-form__chips-wrapper'])}
				>
					<div
						className={cn(classes['donate-form__chips'])}
					>
						<Chips 
							chips={ donateFormTransactionFrequency } 
							inputName='donate-period'
						/>
					</div>
				</div>
			</div>

			{/* Получатель */}
			{ view !== 'selected' && (
				<div
					className={cn(classes['donate-form__item'])}
				>
					<Typography 
						tag='h3' 
						view='text-lg'
						className={cn(classes['donate-form__subtitle'])}
					>
						Кому помочь
					</Typography>
					<Dropdown
						className={ cn(classes['donate-form__field']) }
						options={ donateFormOptions }
						optionsTitle={ donateFormOptionsTitle }
						value={ selectedValue }
						onChange={ setSelectedValue }
					/>
				</div>
			) }

			{/* Комментарий */}
			<div
				className={cn(classes['donate-form__item'])}
			>
				<Typography 
					tag='h3' 
					view='text-lg'
					className={cn(classes['donate-form__subtitle'])}
				>
					Комментарий (отобразится на странице пожертвований)
				</Typography>
				
				<div
					className={'row row_g-16'}
				>
					<div
						className={'col-12'}
					>
						<Input
							placeholder='Ваше имя'
							{...register('name', { 
								required: 'Укажите имя'
							})}
							view={errors.name ? 'error' : undefined}
						/>
						{ errors.name && 
							<Hint color="error">{errors.name.message}</Hint> 
						}
					</div>
		
					<div
						className={'col-6'}
					>
						<Controller
							name="phone"
							control={control}
							rules={{
								required: 'Введите телефон',
								validate: (val) =>
									/^\+7\d{10}$/.test(val) || 'Введите корректный номер',
							}}
							render={({ field }) => (
								<MaskedInput
									mask="999 999 99 99"
									prefix="+7"
									placeholder="Ваш телефон"
									value={field.value.replace('+7', '')}
									onChange={(e) => {
										const raw = e.target.value.replace(/\D/g, '');
										field.onChange(`+7${raw}`);
									}}
									view={errors.phone ? 'error' : undefined}
								/>
							)}
						/>
						{ errors.phone && 
							<Hint color="error">{errors.phone.message}</Hint>
						}
					</div>
		
					<div
						className={'col-6'}
					>
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
					</div>
		
					<Textarea
						placeholder='Комментарий'
						{...register('comment')}
						className={cn(classes['col-12'])}
					/>
					
					<Checkbox 
						checkboxName='comment-checkbox'
						checkboxId='comment-checkbox'
						checkboxValue='comment-checkbox'
					>
						<Typography view='text-sm'>
							Отправить без комментария
						</Typography>
					</Checkbox>
				</div>
			</div>

			{/* Итоговая сумма */}
			<div
				className={cn(classes['donate-form__sum-wrapper'])}
			>
				<Typography 
					tag='h3' 
					view='subtitle' 
					color='primary'
				>
					Итоговая сумма пожертвования
				</Typography>
				<Typography 
					tag='h2' 
					view='title' 
					color='accent-primary' 
					className={classes['donate-form__sum']}
				>
					<Amount
						value={ finalAmount }
					/>
				</Typography>
			</div>

			{/* Оферта + Кнопка */}
			<div
				className={cn(classes['donate-form__total'])}
			>
				<div className={classes['donate-form__offer']}>
					<Checkbox 
						checkboxName='apply-oferta'
						checkboxId='apply-oferta-checkbox'
						checkboxValue='apply-oferta-checkbox'
					>
						<Typography view='text-sm'>
							Я принимаю <Link to='/'>
								условия публичной оферты
							</Link> и даю согласие на <Link to='/'>
								обработку персональных данных
							</Link>
						</Typography>
					</Checkbox>
					<Checkbox
						checkboxName='apply-oferta'
						checkboxId='apply-oferta-checkbox'
						checkboxValue='apply-oferta-checkbox'
					>
						<Typography view='text-sm'>
							Я хочу получать информацию от фонда
						</Typography>
					</Checkbox>
				</div>
	
				<Button
					view='primary'
					type='submit'
					disabled={ finalAmount <= 0 }
					className={ classes['donate-form__submit'] }
				>
					Пожертвовать
				</Button>
			</div>
		</form>
	);
};

export { DonateFormTransaction };
