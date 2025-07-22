import cn from 'classnames';
import classes from '../../donate-form.module.scss';
import {DonateOtherProps} from "../../model/types";
import {Svg, Typography} from "shared/ui";
import React from "react";
import {donateOtherList} from "features/donate-form/model/donate-other";

const DonateOther = ({ children, className }: DonateOtherProps) => {
	return (
		<div
			className={ cn(classes['donate-other'], className) }
		>
			<ul
				className={ cn(classes['donate-other__list']) }
			>
				{ donateOtherList?.map((donate) => (
					<li
						key={ donate.id }
						className={ cn(classes['donate-other__item']) }
					>
						<Svg 
							className={ cn(classes['donate-other__icon']) }
							name='banknotes'
							view='xs'
						/>
						<Typography>
							{ donate.text }
						</Typography>
					</li>
				))}
			</ul>
			
			<Typography
				className={ cn(classes['donate-other__text']) }
			>
				Помощь — это не только финансовая поддержка. Что можно пожертвовать
			</Typography>
			
		</div>
	);
};

export { DonateOther };