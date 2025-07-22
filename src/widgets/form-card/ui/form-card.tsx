import cn from 'classnames';
import classes from '../form-card.module.scss';
import { FormCardProps } from 'widgets/form-card/model/types';
import { Button, Checkbox, Link, Typography } from 'shared/ui';
import React from 'react';

const FormCard = ({ onSubmit, itemContent, className }: FormCardProps) => {
	
	return (
		<form
			onSubmit={ onSubmit }
			className={ cn(classes['form-card'], className) }
		>
			{ itemContent?.map((item) => (
				<div
					key={ item.label }
					className={ cn(classes['form-card__item']) }
				>
					<Typography
						className={ cn(classes['form-card__title']) }
					>
						{ item.label }
					</Typography>
					
					{ item.field }
				</div>
			))}

			<div
				className={ cn(classes['form-card__action']) }
			>
				<div className={classes['form-card__offer']}>
					<Checkbox 
						checkboxName='apply-oferta'
						checkboxId='apply-oferta-checkbox'
						checkboxValue='apply-oferta-checkbox'
					>
						<Typography view='text-sm'>
							Я принимаю <Link to='/'>
								условия публичной оферты
							</Link> и даю согласие на <Link to='/'>обработку
								персональных данных</Link>
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
					type='submit'
					view='primary'
				>
					Оставить заявку
				</Button>
			</div>
		</form>
	);
};

export { FormCard };